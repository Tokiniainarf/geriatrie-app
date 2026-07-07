const fs = require('fs');
const vm = require('vm');

const appSrc = fs.readFileSync('app.js', 'utf8');
const dataSrc = fs.readFileSync('data.js', 'utf8');

const sandbox = {
  APP_DATA: null,
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
vm.runInNewContext('var APP_DATA;' + dataSrc.replace(/const APP_DATA/,'APP_DATA'), sandbox);
vm.runInContext(appSrc, sandbox);

// Chapter 1 page 29 content is in content.ch1
// Let's find page 29 in content.ch1
const ch1_content = sandbox.APP_DATA.content.ch1;
const page29 = ch1_content.find(p => p[0] === 29);
const rawText = page29[1];

console.log("=== RAW TEXT OF PAGE 29 ===");
console.log(rawText);

const output = sandbox.renderChapter(rawText, "ch1");
console.log("=== RENDERED OUTPUT ===");
console.log(output);
