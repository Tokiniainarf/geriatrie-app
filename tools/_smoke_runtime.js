/**
 * Runtime smoke test: load production scripts in order, fire boot, exercise views.
 * Run: node tools/_smoke_runtime.js
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const ROOT = path.join(__dirname, '..');

class El {
  constructor(tag = 'div') {
    this.tagName = String(tag).toUpperCase();
    this.children = [];
    this.attributes = {};
    this.style = {};
    this.classList = {
      _l: new Set(),
      add(c) { this._l.add(c); },
      remove(c) { this._l.delete(c); },
      contains(c) { return this._l.has(c); },
      toggle(c, f) {
        const v = typeof f === 'boolean' ? f : !this.contains(c);
        if (v) this.add(c); else this.remove(c);
        return v;
      },
    };
    this._text = '';
    this._html = '';
    this.value = '';
    this.dataset = {};
  }
  get id() { return this.attributes.id || ''; }
  set id(v) { this.attributes.id = v; }
  get textContent() {
    return this.children.length
      ? this.children.map(c => c.textContent || '').join('')
      : this._text;
  }
  set textContent(v) { this._text = String(v); this.children = []; this._html = this._text; }
  get innerHTML() {
    return this.children.length
      ? this.children.map(c => c.outerHTML || c.innerHTML || c.textContent || '').join('')
      : this._html;
  }
  set innerHTML(v) {
    this._html = String(v);
    this._text = String(v).replace(/<[^>]+>/g, '');
    this.children = [];
  }
  appendChild(c) { this.children.push(c); return c; }
  setAttribute(k, v) { this.attributes[k] = String(v); }
  getAttribute(k) { return this.attributes[k] ?? null; }
  addEventListener() {}
  removeEventListener() {}
  querySelector() { return null; }
  querySelectorAll() { return []; }
  get className() { return [...this.classList._l].join(' '); }
  set className(v) { this.classList._l = new Set(String(v).split(/\s+/).filter(Boolean)); }
  focus() {}
  click() {}
  getBoundingClientRect() { return { top: 0, left: 0, width: 100, height: 40, bottom: 40, right: 100 }; }
  scrollIntoView() {}
  get outerHTML() {
    return `<${this.tagName.toLowerCase()}>${this.innerHTML}</${this.tagName.toLowerCase()}>`;
  }
}

const byId = new Map();
function ensure(id) {
  if (!byId.has(id)) {
    const e = new El();
    e.id = id;
    byId.set(id, e);
  }
  return byId.get(id);
}
[
  'fsVal', 'lhVal', 'fsRange', 'lhRange', 'readingProgress', 'fab', 'scrollTopBtn',
  'installB', 'statsBar', 'statFav', 'p1', 'p2', 'recent', 'synthGrid', 'itemsList',
  'favList', 'searchBar', 'searchInput', 'searchResults', 'flashCard', 'flashCh',
  'flashRang', 'flashQ', 'flashA', 'flashTags', 'flashProg', 'flashChapFilter',
  'bnav', 'pd', 'chContent', 'chHero', 'chNum', 'chT', 'chTags', 'chToolbar',
  'quizContent', 'quizConfig', 'quizTimer', 'dashContent', 'errJournalContent',
  'calc-list', 'calc-list-container', 'calc-detail-container', 'calc-detail-content',
  'calcSearch', 'bfFeed', 'bfStreak', 'bfPoints', 'bfCounter', 'bfProgress',
  'graphCanvas', 'html', 'body',
].forEach(ensure);

const listeners = {};
const documentMock = {
  documentElement: ensure('html'),
  body: ensure('body'),
  createElement(t) { return new El(t); },
  getElementById(id) { return ensure(id); },
  querySelector(s) {
    if (s && s.startsWith('#')) return ensure(s.slice(1));
    return ensure('body');
  },
  querySelectorAll() { return []; },
  addEventListener(e, cb) { (listeners[e] = listeners[e] || []).push(cb); },
  readyState: 'loading',
};

const store = {};
const localStorageMock = {
  getItem(k) { return store[k] ?? null; },
  setItem(k, v) { store[k] = String(v); },
  removeItem(k) { delete store[k]; },
  clear() { for (const k of Object.keys(store)) delete store[k]; },
};

const windowMock = {
  addEventListener(e, cb) { (listeners[e] = listeners[e] || []).push(cb); },
  scrollTo() {},
  scrollY: 0,
  innerWidth: 1024,
  innerHeight: 800,
  matchMedia: () => ({ matches: false, addListener() {}, addEventListener() {}, removeEventListener() {} }),
  location: { href: 'http://localhost/', hash: '', pathname: '/' },
  localStorage: localStorageMock,
  navigator: {
    serviceWorker: { register: () => Promise.resolve({ then() { return this; }, catch() { return this; } }) },
    userAgent: 'node',
  },
  requestAnimationFrame: (cb) => setTimeout(cb, 0),
  deferredPrompt: null,
  print() {},
  document: documentMock,
  getComputedStyle: () => ({ getPropertyValue: () => '' }),
};
documentMock.defaultView = windowMock;

const sandbox = {
  console,
  document: documentMock,
  window: windowMock,
  self: windowMock,
  globalThis: windowMock,
  localStorage: localStorageMock,
  navigator: windowMock.navigator,
  setTimeout,
  clearTimeout,
  setInterval,
  clearInterval,
  alert() {},
  confirm() { return true; },
  prompt() { return null; },
  performance: { now: () => Date.now() },
  Image: function Image() { this.onload = null; this.onerror = null; this.src = ''; },
};
Object.assign(sandbox, windowMock);
// Expose globals like browser script tags do
const ctx = vm.createContext(sandbox);

const failures = [];
function load(file) {
  const full = path.join(ROOT, file);
  if (!fs.existsSync(full)) {
    failures.push(`MISSING ${file}`);
    console.log('MISSING', file);
    return false;
  }
  const code = fs.readFileSync(full, 'utf8');
  try {
    vm.runInContext(code, ctx, { filename: file, timeout: 120000 });
    console.log('OK load', file);
    return true;
  } catch (e) {
    failures.push(`LOAD ${file}: ${e.message}`);
    console.log('FAIL load', file, e.message);
    console.log(e.stack.split('\n').slice(0, 6).join('\n'));
    return false;
  }
}

const FILES = [
  'data-bundle.js',
  'calculateurs.js',
  'quiz.js',
  'dashboard.js',
  'appsearch.js',
  'erreurs-journal.js',
  'graph.js',
  'brainfeed.js',
  'app.js',
];

for (const f of FILES) load(f);

try {
  (listeners.DOMContentLoaded || []).forEach((cb) => cb());
  console.log('OK DOMContentLoaded');
} catch (e) {
  failures.push(`DOMContentLoaded: ${e.message}`);
  console.log('FAIL DOMContentLoaded', e.message);
  console.log(e.stack.split('\n').slice(0, 8).join('\n'));
}

const checks = [
  'typeof sw',
  'typeof APP_DATA',
  'typeof Medicalcul',
  'typeof QuizMode',
  'typeof BrainFeed',
  'typeof Dashboard',
  'typeof ErrorJournal',
  'typeof AppSearch',
  'APP_DATA && APP_DATA.chapters && APP_DATA.chapters.length',
  'APP_DATA && APP_DATA.content && Object.keys(APP_DATA.content).length',
];
for (const c of checks) {
  try {
    console.log(c, '=>', vm.runInContext(c, ctx));
  } catch (e) {
    failures.push(`check ${c}: ${e.message}`);
    console.log(c, 'ERR', e.message);
  }
}

const views = [
  'home', 'flash', 'synth', 'items', 'fav', 'scores', 'quiz', 'dash',
  'erreurs', 'garde', 'dict', 'annales', 'proto', 'feed', 'set',
];
for (const v of views) {
  try {
    vm.runInContext(`sw(${JSON.stringify(v)})`, ctx);
    console.log('OK sw', v);
  } catch (e) {
    failures.push(`sw(${v}): ${e.message}`);
    console.log('FAIL sw', v, e.message);
  }
}

for (let i = 1; i <= 20; i++) {
  const id = `ch${i}`;
  try {
    const html = vm.runInContext(
      `renderChapter(APP_DATA.content.${id}.map(c=>c[1]).join("\\n\\n"), ${JSON.stringify(id)})`,
      ctx
    );
    console.log('OK render', id, 'len', html.length);
  } catch (e) {
    failures.push(`render ${id}: ${e.message}`);
    console.log('FAIL render', id, e.message);
  }
}

try {
  vm.runInContext(
    `Medicalcul.init(); Medicalcul.filterByDomain("all", {classList:{add(){},remove(){},contains(){return false}}});`,
    ctx
  );
  console.log('OK Medicalcul.init');
} catch (e) {
  failures.push(`Medicalcul: ${e.message}`);
  console.log('FAIL Medicalcul', e.message);
}

try {
  vm.runInContext(`QuizMode.startQuiz("mixed", 5, 0)`, ctx);
  console.log('OK Quiz start');
} catch (e) {
  failures.push(`Quiz: ${e.message}`);
  console.log('FAIL Quiz', e.message);
}

// Null-safety: setFS/setLH without settings elements should not throw if we delete them
try {
  byId.delete('fsVal');
  byId.delete('lhVal');
  // re-ensure returns empty elements - actually ensure recreates. Force null via override
  documentMock.getElementById = (id) => {
    if (id === 'fsVal' || id === 'lhVal') return null;
    return ensure(id);
  };
  vm.runInContext(`setFS(18); setLH(1.7, true);`, ctx);
  console.log('OK setFS/setLH null-safe? (if this printed without FAIL)');
} catch (e) {
  failures.push(`setFS/setLH null: ${e.message}`);
  console.log('FAIL setFS/setLH null', e.message);
}

console.log('\n=== SUMMARY ===');
console.log('Failures:', failures.length);
failures.forEach((f) => console.log(' -', f));
process.exit(failures.length ? 1 : 0);
