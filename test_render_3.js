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

vm.createContext(sandbox);
vm.runInContext(appSrc, sandbox);

const raw = `A. Introduction
Situations de départ
01 Chute avec fracture
02 Confusion mentale
En lien avec l'autonomie
03 Perte d'autonomie`;

const output = sandbox.renderChapter(raw, "ch1");
console.log("=== OUTPUT ===");
console.log(output);
