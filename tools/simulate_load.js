const fs = require('fs');
const vm = require('vm');
const files = [
  'data.js', 'figures.js', 'interactive-figures.js', 'synthesis.js', 'concepts.js',
  'flashcards.js', 'flashcards-batch-A.js', 'flashcards-batch-B.js', 'flashcards-batch-C.js',
  'flashcards-memos.js', 'flashcards-expanded.js', 'mega-flashcards.js', 'mega-flashcards-2.js',
  'mega-flashcards-3.js', 'mega-flashcards-4.js', 'mega-flashcards-5.js', 'mega-flashcards-6.js',
  'mega-flashcards-7.js', 'mega-flashcards-8.js', 'mega-flashcards-9.js', 'mega-flashcards-10.js',
  'app.js', 'graph.js', 'brainfeed.js', 'quiz.js', 'dashboard.js', 'appsearch.js',
  'annales.js', 'annales-expanded.js', 'annales-archive.js', 'annales-v2.js', 'cas-interactifs.js',
  'situations-evc.js', 'cas-evc-2024.js', 'cas-evc-2023.js', 'cas-evc-2020-2022.js',
  'cas-evc-2018-2019.js', 'cas-evc-2015-2017.js', 'cas-evc-2010-2014.js',
  'quiz-urgence.js', 'has-reco.js', 'has-expanded.js'
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
  const path = 'C:/Users/tokin/geriatrie-app/' + f;
  if (!fs.existsSync(path)) continue;
  const src = fs.readFileSync(path, 'utf8');
  try {
    vm.runInContext(src, sb, { filename: f });
  } catch (e) {
    console.error('ERR in', f, ':', e.message);
  }
}
console.log('load simulation ok');

module.exports = { sb };

