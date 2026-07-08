/** Quality audit for practice + knowledge rendering */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const ROOT = path.join(__dirname, '..');

const els = new Map();
function el(id) {
  if (!els.has(id)) {
    els.set(id, {
      id, style: {}, classList: { _l: new Set(), add(c){this._l.add(c)}, remove(c){this._l.delete(c)}, contains(c){return this._l.has(c)}, toggle(){} },
      children: [], value: '', textContent: '', innerHTML: '',
      addEventListener() {}, querySelector() { return null; }, querySelectorAll() { return []; },
      setAttribute() {}, getAttribute() { return null; }, appendChild() {}, remove() {},
      scrollIntoView() {}, parentNode: null,
    });
  }
  return els.get(id);
}
const document = {
  getElementById: (id) => el(id),
  querySelector: () => el('q'),
  querySelectorAll: () => [],
  createElement: () => el('c' + Math.random()),
  addEventListener() {},
  body: el('body'),
  documentElement: Object.assign(el('html'), { style: { setProperty() {} }, setAttribute() {} }),
};
const window = {
  document, addEventListener() {}, scrollTo() {}, scrollY: 0,
  localStorage: { getItem: () => null, setItem() {}, removeItem() {} },
  navigator: { serviceWorker: { register: () => Promise.resolve() } },
  requestAnimationFrame: (c) => 0,
  __geriBooted: true,
};
document.defaultView = window;
const sandbox = {
  console, document, window, self: window, globalThis: window,
  localStorage: window.localStorage, navigator: window.navigator,
  setTimeout, clearTimeout, requestAnimationFrame: (c) => 0,
  alert() {}, confirm() { return true; },
};
Object.assign(sandbox, window);
const ctx = vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(path.join(ROOT, 'data-bundle.js'), 'utf8'), ctx, { timeout: 120000 });
const appCode = fs.readFileSync(path.join(ROOT, 'app.js'), 'utf8')
  .replace(/if\s*\(\s*document\.readyState[\s\S]*?bootApp\(\);\s*\}/, '/* boot skipped */')
  .replace(/window\.bootApp\s*=\s*bootApp;?/, '');
vm.runInContext(appCode, ctx, { timeout: 60000, filename: 'app.js' });
vm.runInContext('if (typeof preprocessAppData === "function") preprocessAppData();', ctx);

const APP = vm.runInContext('APP_DATA', ctx);

function scoreItem(it) {
  const issues = [];
  if (!it.stem || it.stem.length < 15) issues.push('stem_short');
  if (/matiques|blématiques|pro-|gine\b|droits réservés|Elsevier/i.test(it.stem)) issues.push('stem_garbage');
  if ((it.options || []).length < 2) issues.push('few_opts');
  if ((it.options || []).length >= 2) {
    const letters = it.options.map(o => o.letter).join('');
    if (/[A-H]/.test(letters) && !letters.includes('A') && /[C-E]/.test(letters)) issues.push('no_A');
    for (const o of it.options) {
      if (o.text.length < 4) issues.push('opt_short');
      if (o.text.length > 200) issues.push('opt_long');
      if (/Question\s+\d+|QRM\s+\d+|KFP\s+\d+/i.test(o.text)) issues.push('opt_has_q');
    }
  }
  if (it.vignette && /A\.\s+\S.*B\.\s+\S/.test(it.vignette)) issues.push('vignette_has_opts');
  return issues;
}

for (const id of ['ch18', 'ch19', 'ch20']) {
  const pages = APP.content[id] || [];
  const raw = pages.map(p => p[1]).join('\n\n');
  const parsed = vm.runInContext(
    `parsePracticeItems(${JSON.stringify(raw)}, ${JSON.stringify(id)})`,
    ctx
  );
  const items = parsed.items || [];
  let bad = 0;
  const issueCount = {};
  const samples = [];
  items.forEach((it, i) => {
    const issues = scoreItem(it);
    if (issues.length) {
      bad++;
      issues.forEach(x => { issueCount[x] = (issueCount[x] || 0) + 1; });
      if (samples.length < 5) samples.push({ i, label: it.label, stem: (it.stem || '').slice(0, 80), opts: (it.options || []).length, issues });
    }
  });
  const html = vm.runInContext(
    `renderChapter(${JSON.stringify(raw)}, ${JSON.stringify(id)})`,
    ctx
  );
  console.log(`\n=== ${id} items=${items.length} bad=${bad} (${items.length ? Math.round(100 * bad / items.length) : 0}%) cards=${(html.match(/pqcm-card/g)||[]).length}`);
  console.log('issues', issueCount);
  samples.forEach(s => console.log(' sample', s));
}

// Knowledge chapter: empty paras, outline
for (const id of ['ch1', 'ch5', 'ch9', 'ch13', 'ch16']) {
  const pages = APP.content[id] || [];
  const raw = pages.map(p => p[1]).join('\n\n');
  const html = vm.runInContext(`renderChapter(${JSON.stringify(raw)}, ${JSON.stringify(id)})`, ctx);
  const emptyP = (html.match(/<p><\/p>|<p>\s*<\/p>/g) || []).length;
  const emptySub = (html.match(/sub-letter"><\/span><\/h3>/g) || []).length;
  const outline = html.includes('ch-outline');
  const keyPanel = html.includes('key-panel');
  const sections = (html.match(/manual-section/g) || []).length;
  console.log(`${id}: sections=${sections} outline=${outline} keyPanel=${keyPanel} emptyP=${emptyP} emptySub=${emptySub} html=${html.length}`);
}
