const vm = require('vm');
const fs = require('fs');
process.chdir('C:/Users/tokin/Downloads/GeriatrieApp');

const sb = {
  APP_DATA: null, FIGURES: {}, INTERACTIVE_FIGURES: {},
  renderInteractiveFigure: null, window: {},
  esc: s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;')
};
vm.createContext(sb);
vm.runInNewContext('var APP_DATA;' + fs.readFileSync('data.js','utf8').replace(/const APP_DATA/,'APP_DATA'), sb);
vm.runInNewContext(fs.readFileSync('figures.js','utf8'), sb);
vm.runInNewContext(fs.readFileSync('interactive-figures.js','utf8'), sb);
const app = fs.readFileSync('app.js','utf8');
vm.runInNewContext(app.slice(app.indexOf('const RUN_HDR_RE'), app.indexOf('function applyConceptLinks')), sb);

const chapters = sb.APP_DATA.chapters;
console.log('=== ALL CHAPTERS VERIFICATION ===\n');

let issues = 0;
for (const ch of chapters) {
  const id = ch.id;
  const content = sb.APP_DATA.content[id];
  if (!content || !content.length) {
    console.log(id, ch.t, '- NO CONTENT');
    issues++;
    continue;
  }
  const raw = content.map(c => c[1]).join('\n');
  sb.raw = raw;
  vm.runInNewContext('out = renderChapter(raw, "' + id + '");', sb);
  const html = sb.out;
  const cards = (html.match(/<div class="para-card">/g) || []).length;
  const sections = (html.match(/manual-section/g) || []).length;
  const subheads = (html.match(/sub-head/g) || []).length;
  const empty = html.includes('Aucun contenu structuré') || html.length < 500;
  const ratio = raw.length ? Math.round(html.length / raw.length * 100) : 0;
  const status = empty ? 'EMPTY/BROKEN' : (cards < 1 && raw.length > 1000 ? 'LOW CARDS' : 'OK');
  if (status !== 'OK') issues++;
  console.log(`${id.padEnd(5)} ${ch.t.substring(0,35).padEnd(35)} | cards:${String(cards).padStart(3)} sec:${sections} sub:${subheads} ratio:${ratio}% ${status}`);
}
console.log('\nTotal chapters:', chapters.length, '| Issues:', issues);