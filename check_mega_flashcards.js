const fs = require('fs');
const vm = require('vm');

const files = fs.readdirSync('.').filter(f => f.startsWith('mega-flashcards') && f.endsWith('.js'));
console.log('Mega flashcard files:', files);

const sandbox = {
  document: { addEventListener: () => {}, querySelector: () => null, getElementById: () => null, readyState: 'complete' },
  window: { addEventListener: () => {} },
  localStorage: { getItem: () => null, setItem: () => {} },
  setTimeout,
  globalThis: {}
};
vm.createContext(sandbox);

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/const\s+(MEGA_FLASHCARDS)/g, 'var $1');
  vm.runInContext(content, sandbox);
}

const vars = Object.keys(sandbox).filter(k => Array.isArray(sandbox[k]) || k.startsWith('MEGA_FLASHCARDS'));
console.log('Arrays found in sandbox:', vars);

let total = 0;
let anomalies = [];

for (const arrName of vars) {
  const arr = sandbox[arrName];
  if (!Array.isArray(arr)) continue;
  total += arr.length;
  arr.forEach((fc, idx) => {
    if (!fc.question || !fc.answer) {
      anomalies.push({ file: arrName, idx, issue: 'Missing question or answer', fc });
    }
    if (fc.answer && fc.question && fc.answer.includes(fc.question)) {
      anomalies.push({ file: arrName, idx, issue: 'Answer contains question', fc });
    }
  });
}

console.log(`Total mega flashcards checked: ${total}`);
console.log(`Anomalies found: ${anomalies.length}`);
anomalies.slice(0, 20).forEach(a => {
  console.log(`\nArray: ${a.file}, index: ${a.idx}, issue: ${a.issue}`);
  console.log(`  Q: ${JSON.stringify(a.fc.question)}`);
  console.log(`  A: ${JSON.stringify(a.fc.answer)}`);
});
