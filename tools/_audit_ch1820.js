const fs = require('fs');
const path = require('path');
const vm = require('vm');
const ROOT = path.join(__dirname, '..');

const els = new Map();
function el(id) {
  if (!els.has(id)) {
    els.set(id, {
      id, style: {}, classList: { add() {}, remove() {}, contains() { return false; }, toggle() {} },
      children: [], value: '', textContent: '', innerHTML: '',
      addEventListener() {}, querySelector() { return null; }, querySelectorAll() { return []; },
      setAttribute() {}, appendChild() {}, remove() {}, parentNode: null,
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
// Load only render bits: run app without boot
const appCode = fs.readFileSync(path.join(ROOT, 'app.js'), 'utf8')
  .replace(/if\s*\(\s*document\.readyState[\s\S]*?bootApp\(\);\s*\}/, '/* boot skipped */')
  .replace(/window\.bootApp\s*=\s*bootApp;?/, '');
vm.runInContext(appCode, ctx, { timeout: 60000, filename: 'app.js' });
vm.runInContext('if (typeof preprocessAppData === "function") preprocessAppData();', ctx);

const APP = vm.runInContext('APP_DATA', ctx);

for (const id of ['ch18', 'ch19', 'ch20', 'ch1']) {
  const pages = APP.content[id] || [];
  const title = APP.chapters.find((c) => c.id === id)?.t;
  console.log('\n====', id, title, 'pages', pages.length, '====');
  for (const idx of [0, 1, Math.min(3, pages.length - 1), Math.floor(pages.length / 2)]) {
    if (!pages[idx]) continue;
    const t = String(pages[idx][1]).slice(0, 600).replace(/\s+/g, ' ');
    console.log('p' + pages[idx][0] + ':', t.slice(0, 280));
  }
  const raw = pages.map((p) => p[1]).join('\n');
  const patterns = {
    'Question N': (raw.match(/Question\s+\d+/gi) || []).length,
    'QRM/QRU': (raw.match(/\bQRM\b|\bQRU\b/gi) || []).length,
    'Réponse': (raw.match(/R[eé]ponse\s*:/gi) || []).length,
    'n. option': (raw.match(/^\s*\d{1,2}\.\s+\S/gm) || []).length,
    'A. B. C.': (raw.match(/^\s*[A-E]\.\s+/gm) || []).length,
    'dossier|KFP|énoncé': (raw.match(/dossier|key.?feature|énoncé|cas clinique/gi) || []).length,
    'maximum': (raw.match(/maximum\s+\d+/gi) || []).length,
  };
  console.log('patterns', patterns);
  const html = vm.runInContext(
    `renderChapter(APP_DATA.content.${id}.map(c=>c[1]).join("\\n\\n"), ${JSON.stringify(id)})`,
    ctx
  );
  console.log(
    'html',
    html.length,
    'qcm',
    (html.match(/qcm-card/g) || []).length,
    'para',
    (html.match(/para-card/g) || []).length,
    'section',
    (html.match(/manual-section/g) || []).length,
    'list',
    (html.match(/reader-list/g) || []).length
  );
  // Show how first QCM-looking content rendered
  const qi = html.indexOf('qcm-card');
  if (qi >= 0) console.log('first qcm snippet:', html.slice(qi, qi + 350).replace(/\s+/g, ' '));
  else console.log('NO qcm-card — first 400 plain:', html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').slice(0, 400));
}
