const fs = require('fs');
const vm = require('vm');

const appSrc = fs.readFileSync('app.js', 'utf8');

const sandbox = {
  console,
  APP_DATA: { chapters: [{ id: "ch_test", t: "Test" }], content: {} },
  document: {
    addEventListener: () => {},
    createElement(tag) {
      return {
        tagName: tag.toUpperCase(),
        _text: '',
        get textContent() { return this._text; },
        set textContent(v) { this._text = String(v); },
        get innerHTML() {
          return this._text
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
        }
      };
    }
  },
  localStorage: {
    getItem: () => null,
    setItem: () => {},
  },
  navigator: {
    serviceWorker: {
      register: () => Promise.resolve()
    }
  },
  window: {
    addEventListener: () => {},
  },
  esc: s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;')
};

// We inject print statements in renderChapter
let modified = appSrc.replace(
  "lines = lines.filter(l => {",
  "console.log('1. Raw preprocessed:', lines);\n  lines = lines.filter(l => {"
);

modified = modified.replace(
  "// R2 — Filtrer les listes de sections internes",
  "console.log('2. After line filter:', lines);\n  // R2 — Filtrer les listes de sections internes"
);

modified = modified.replace(
  "let html='';let paraBuf=[];",
  "console.log('3. After R2 TOC filter:', lines);\n  let html='';let paraBuf=[];"
);

vm.createContext(sandbox);
vm.runInContext(modified, sandbox);

const raw = 'Introductory text to trigger body start.\nI. Vieillissement\nThis is paragraph 1 of section I.\nThis is paragraph 2 of section I.\nII. Définitions\nThis is paragraph 1 of section II.';
sandbox.renderChapter(raw, 'ch_test');
