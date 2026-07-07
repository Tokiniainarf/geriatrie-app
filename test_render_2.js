const fs = require('fs');
const vm = require('vm');

const appSrc = fs.readFileSync('app.js', 'utf8');
const sandbox = {
  APP_DATA: { chapters: [{ id: "ch1", t: "Chapitre 1" }], content: {} },
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

// Replace second loop with tracing
let modified = appSrc.replace(
  /for\(let i=0;i<lines\.length;i\+\+\)\{\r\n    let l=lines\[i\];/g,
  "for(let i=0;i<lines.length;i++){\n    let l=lines[i];\n    console.log('TRACE Line', i, 'l:', JSON.stringify(l), 'pastPreamble:', pastPreamble, 'inSection:', inSection);"
);
if (modified === appSrc) {
  modified = appSrc.replace(
    /for\(let i=0;i<lines\.length;i\+\+\)\{\n    let l=lines\[i\];/g,
    "for(let i=0;i<lines.length;i++){\n    let l=lines[i];\n    console.log('TRACE Line', i, 'l:', JSON.stringify(l), 'pastPreamble:', pastPreamble, 'inSection:', inSection);"
  );
}

vm.createContext(sandbox);
vm.runInContext(modified, sandbox);

const raw = 'Introductory text to trigger body start.\nI. Vieillissement\nThis is paragraph 1 of section I.\nThis is paragraph 2 of section I.\nII. Définitions\nThis is paragraph 1 of section II.';
const output = sandbox.renderChapter(raw, "ch1");
console.log("=== OUTPUT ===");
console.log(output);
