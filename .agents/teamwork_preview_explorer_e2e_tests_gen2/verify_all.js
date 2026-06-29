const vm = require('vm');
const fs = require('fs');

const dataSrc = fs.readFileSync('C:/Users/tokin/.gemini/antigravity/scratch/geriatrie-app/data.js', 'utf8');
const appSrc = fs.readFileSync('C:/Users/tokin/.gemini/antigravity/scratch/geriatrie-app/app.js', 'utf8');
const sandboxSrc = fs.readFileSync('verify_sandbox.js', 'utf8');

const sandbox = {
  localStorage: { getItem: () => null, setItem: () => {} },
  document: {
    createElement: (t) => ({
      _text: '', _html: '',
      set textContent(v) { this._text = v; this._html = v.replace(/&/g,'&amp;').replace(/</g,'&lt;'); },
      get textContent() { return this._text; },
      get innerHTML() { return this._html; },
      set innerHTML(v) { this._html = v; },
      querySelectorAll: () => [], querySelector: () => null
    }),
    querySelectorAll: () => [],
    querySelector: () => null,
    getElementById: () => null,
    documentElement: { setAttribute: () => {}, style: {} },
    addEventListener: () => {},
    body: { style: {} }
  },
  window: { addEventListener: () => {}, scrollTo: () => {}, scrollY: 0 },
  navigator: { serviceWorker: { register: () => ({ catch: () => {} }) } },
  setTimeout, setInterval, clearInterval, clearTimeout,
  console, FIGURES: {}, alert: () => {}, confirm: () => false,
  requestAnimationFrame: (cb) => cb()
};

const context = vm.createContext(sandbox);
vm.runInContext(dataSrc, context);
vm.runInContext(appSrc, context);
vm.runInContext(sandboxSrc, context);
