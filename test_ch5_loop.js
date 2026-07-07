const fs = require('fs');
const appSrc = fs.readFileSync('app.js', 'utf8');
const dataSrc = fs.readFileSync('data.js', 'utf8');
const vm = require('vm');

const sandbox = {
  localStorage: { getItem: () => null, setItem: () => {} },
  document: {
    addEventListener: () => {},
    createElement: () => {
      return {
        set textContent(v) { this.innerHTML = v; },
        get innerHTML() { return this._h || ''; },
        set innerHTML(v) { this._h = v; }
      };
    }
  },
  window: { addEventListener: () => {} },
  navigator: { serviceWorker: { register: () => Promise.resolve() } },
  console
};

const context = vm.createContext(sandbox);
vm.runInContext(dataSrc, context);

// Inject logging inside renderChapter main loop line fetch
const modifiedApp = appSrc.replace(
  'let l=lines[i];',
  `let l=lines[i];
  if (l.includes("Ce point") || l.includes("298] ou de perte")) {
    console.log("LOOP LINE", i, ":", JSON.stringify(l), "inNumList:", inNumList, "bulletBuf:", bulletBuf.length, "paraBuf:", paraBuf.length);
  }`
);

vm.runInContext(modifiedApp, context);
vm.runInContext('preprocessAppData()', context);
const ch5 = vm.runInContext('APP_DATA.content.ch5', context);
sandbox.raw = ch5.map(c => c[1]).join('\n');
vm.runInContext("renderChapter(raw, 'ch5')", context);
