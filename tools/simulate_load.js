const fs = require('fs');
const vm = require('vm');
const files = [
  'data.js', 'figures.js', 'interactive-figures.js', 'synthesis.js', 'concepts.js',
  'flashcards.js', 'app.js', 'graph.js', 'brainfeed.js', 'quiz.js', 'dashboard.js',
  'appsearch.js', 'annales.js', 'annales-expanded.js', 'has-reco.js', 'has-expanded.js'
];
const sb = {
  console,
  document: {
    getElementById: () => null,
    querySelector: () => null,
    querySelectorAll: () => [],
    addEventListener: () => {},
    documentElement: { setAttribute: () => {}, classList: { add: () => {}, remove: () => {} } },
    createElement: () => ({ textContent: '', innerHTML: '', appendChild: () => {}, classList: { add: () => {}, remove: () => {} }, style: {} })
  },
  window: {
    addEventListener: () => {}, scrollTo: () => {}, innerWidth: 375, innerHeight: 812
  },
  navigator: {},
  localStorage: { getItem: () => null, setItem: () => {} },
  sessionStorage: { getItem: () => null, setItem: () => {} },
  setTimeout, clearTimeout, setInterval, clearInterval,
  location: { href: '', reload: () => {} },
  Math, JSON, Date, RegExp, Array, Object, String, Number, parseInt, parseFloat, Infinity, NaN, undefined
};
sb.globalThis = sb;
vm.createContext(sb);
for (const f of files) {
  const src = fs.readFileSync('C:/Users/tokin/geriatrie-app/' + f, 'utf8');
  try {
    vm.runInContext(src, sb, { filename: f });
  } catch (e) {
    console.error('ERR in', f, ':', e.message);
  }
}
console.log('load simulation ok');
