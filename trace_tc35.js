const fs = require('fs');
const vm = require('vm');

const sandbox = {
  localStorage: { getItem: () => null, setItem: () => {} },
  document: {
    createElement: (t) => ({textContent:'', innerHTML:''}),
    querySelectorAll: () => [],
    querySelector: () => null,
    getElementById: () => null,
    documentElement: { setAttribute: () => {} },
    addEventListener: () => {}
  },
  window: { addEventListener: () => {}, scrollTo: () => {}, scrollY: 0 },
  navigator: { serviceWorker: { register: () => ({catch:()=>{}}) } },
  setTimeout, setInterval, clearInterval, clearTimeout,
  console, FIGURES: {}, alert: () => {}, confirm: () => false,
  requestAnimationFrame: (cb) => cb()
};

vm.createContext(sandbox);
vm.runInContext(fs.readFileSync('data.js', 'utf8'), sandbox);
vm.runInContext(fs.readFileSync('app.js', 'utf8'), sandbox);

const padding = Array(9).fill("123 Preamble filler line.").join("\n");
const raw = padding + "\nI. Keep Section\n12345678901234567890\nII. Full Section\nThis is some long body text with more than 20 characters.";

// Inject trace statements
const appWithTrace = fs.readFileSync('app.js', 'utf8')
  .replace('function renderChapter(raw, chId){', `function renderChapter(raw, chId){
    console.log("=== ENTER renderChapter ===");`)
  .replace('lines = lines.filter(l => {', `lines = lines.filter((l, idx) => {
    const keep = (() => {`)
  .replace('return false;\n  });\n  // R2', `return false;
    })();
    console.log("Filter junk line:", idx, JSON.stringify(l), "keep:", keep);
    return keep;
  });
  // R2`)
  .replace('lines = lines.filter((l, i) => {', `lines = lines.filter((l, i) => {
    const keep = (() => {`)
  .replace('return !(nxtFound || prvFound);\n  });', `return !(nxtFound || prvFound);
    })();
    console.log("R2 filter line:", i, JSON.stringify(l), "keep:", keep);
    return keep;
  });`)
  .replace('for(let i=0;i<lines.length;i++){', `console.log("PREPROCESSED LINES:", lines);
  for(let i=0;i<lines.length;i++){`);

vm.runInContext(appWithTrace, sandbox);
vm.runInContext(`renderChapter(${JSON.stringify(raw)}, "ch1")`, sandbox);
