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
vm.runInContext('preprocessAppData()', sandbox);

const APP_DATA = vm.runInContext('APP_DATA', sandbox);
console.log('ch1 pages after preprocessing:', APP_DATA.content.ch1.map(p => p[0]));
console.log('ch2 pages after preprocessing:', APP_DATA.content.ch2.map(p => p[0]));
