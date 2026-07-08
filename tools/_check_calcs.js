const fs = require('fs');
const vm = require('vm');
const path = require('path');
const ROOT = path.join(__dirname, '..');

const store = {};
const els = new Map();
function el(id) {
  if (!els.has(id)) {
    els.set(id, {
      id,
      style: { display: '' },
      classList: { add() {}, remove() {}, contains() { return false; }, toggle() {} },
      children: [],
      value: '',
      parentNode: { replaceChild(a, b) {} },
      cloneNode() { return el(id + '_clone'); },
      addEventListener() {},
      setAttribute() {},
      appendChild() {},
      querySelector() { return null; },
      querySelectorAll() { return []; },
      innerHTML: '',
      textContent: '',
    });
  }
  return els.get(id);
}

const document = {
  getElementById: (id) => el(id),
  querySelectorAll: () => [],
  querySelector: () => null,
  createElement: () => el('x' + Math.random()),
  addEventListener() {},
  body: el('body'),
  documentElement: el('html'),
};
const window = {
  document,
  localStorage: {
    getItem: (k) => store[k] ?? null,
    setItem: (k, v) => { store[k] = String(v); },
  },
  addEventListener() {},
  scrollTo() {},
  Medicalcul: undefined,
};
document.defaultView = window;

const sandbox = {
  console,
  document,
  window,
  self: window,
  globalThis: window,
  localStorage: window.localStorage,
  setTimeout,
  clearTimeout,
  alert() {},
};
const ctx = vm.createContext(sandbox);

function load(f) {
  const code = fs.readFileSync(path.join(ROOT, f), 'utf8');
  try {
    vm.runInContext(code, ctx, { filename: f, timeout: 120000 });
    console.log('OK', f);
  } catch (e) {
    console.log('FAIL', f, e.message);
    console.log(e.stack.split('\n').slice(0, 6).join('\n'));
    process.exitCode = 1;
  }
}

load('data-bundle.js');
load('calculateurs.js');

try {
  const n = vm.runInContext('CALCULATEURS.length', ctx);
  const domains = vm.runInContext(
    `Array.from(new Set(CALCULATEURS.map(c=>c.domaine))).sort()`,
    ctx
  );
  console.log('CALCULATEURS', n);
  console.log('domains', domains);
  const filters = [
    'Évaluation Gériatrique Standardisée (EGS)',
    'Cognition & Humeur',
    'Autonomie',
    'Nutrition & Peau',
    'Équilibre & Marche',
    'Cardiovasculaire',
    'Pneumologie',
    'Urgences & Soins Intensifs',
    'Évaluation de la Douleur',
  ];
  for (const f of filters) {
    const c = vm.runInContext(
      `CALCULATEURS.filter(c=>c.domaine===${JSON.stringify(f)}).length`,
      ctx
    );
    console.log('filter', f, '=>', c);
  }
  vm.runInContext('Medicalcul.init()', ctx);
  const html = el('calc-list').innerHTML;
  console.log('calc-list html length', html.length);
  console.log('cards', (html.match(/calc-card/g) || []).length);
  console.log('snippet', html.slice(0, 200));
} catch (e) {
  console.log('runtime FAIL', e.message);
  process.exitCode = 1;
}
