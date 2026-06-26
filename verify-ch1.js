const vm = require('vm');
const fs = require('fs');

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

const raw = sb.APP_DATA.content['ch1'].map(c => c[1]).join('\n');
sb.raw = raw;
vm.runInNewContext('out = renderChapter(raw, "ch1");', sb);
const html = sb.out;

const cards = (html.match(/<div class="para-card">[\s\S]*?<\/div>/g) || []);
const subHeads = (html.match(/<h3 class="sub-head">/g) || []).length;
const sections = (html.match(/manual-section/g) || []).length;
const figs = (html.match(/fig-block/g) || []).length;
const tables = (html.match(/table-lead/g) || []).length;

const keywords = ['gérontologie', 'gériatrie', 'vieillissement est défini', 'espérance de vie'];
const kwResults = keywords.map(k => ({
  k, present: new RegExp(k, 'i').test(html),
  len: (html.match(new RegExp(k + '[^<]{0,300}', 'i')) || [''])[0].length
}));

const shortCards = cards.filter(c => c.replace(/<[^>]+>/g,'').trim().length < 150);
const avgLen = cards.length ? Math.round(cards.reduce((s,c) => s + c.replace(/<[^>]+>/g,'').trim().length, 0) / cards.length) : 0;

console.log('=== VERIFICATION CH1 ===');
console.log('Raw length:', raw.length);
console.log('HTML length:', html.length, '(' + Math.round(html.length/raw.length*100) + '% of raw)');
console.log('Para-cards:', cards.length, '(target 15-30)');
console.log('Avg card len:', avgLen);
console.log('Short cards <150:', shortCards.length);
console.log('Sections:', sections);
console.log('Sub-heads:', subHeads);
console.log('Figures:', figs, 'Tables:', tables);
console.log('Keywords:');
kwResults.forEach(r => console.log('  ' + r.k + ':', r.present ? 'YES (' + r.len + ' chars)' : 'MISSING'));
console.log('PASS:', cards.length >= 10 && cards.length <= 35 && kwResults.every(r => r.present && r.len > 50) ? 'LIKELY OK' : 'NEEDS MORE WORK');