const { sb } = require('./simulate_load.js');
const vm = require('vm');

const r = vm.runInContext('BrainFeed.audit()', sb);
const deck = r.deck;
const pools = r.pools;

const report = [];
report.push('=== BRAINFEED FULL AUDIT ===');
report.push('Deck size: ' + deck.length);
const counts = {};
deck.forEach(c => counts[c.type] = (counts[c.type] || 0) + 1);
report.push('Type distribution: ' + JSON.stringify(counts));

report.push('\n=== POOL SIZES ===');
Object.keys(pools).forEach(k => {
  const arr = pools[k];
  report.push(`${k}: ${Array.isArray(arr) ? arr.length : 'N/A'}`);
});

report.push('\n=== SAMPLE CARDS ===');
deck.slice(0, 40).forEach((c, i) => {
  report.push(`\n--- ${i+1}. ${c.type} (id=${c.id}) ---`);
  if (c.title) report.push('Title: ' + c.title.slice(0, 200));
  if (c.question) report.push('Question: ' + c.question.slice(0, 200));
  if (c.vignette) report.push('Vignette: ' + c.vignette.slice(0, 200));
  if (c.line) report.push('Line: ' + c.line);
  if (c.trap) report.push('Trap: ' + c.trap);
  if (c.text) report.push('Text: ' + c.text.slice(0, 200));
  if (c.options) {
    report.push('Options:');
    c.options.forEach((o, j) => report.push(`  ${['A','B','C','D'][j]}. ${o.text.slice(0, 80)}${o.correct ? ' ✓' : ''}`));
  }
});

report.push('\n=== QUIZ INTEGRITY ===');
let badQuiz = 0;
const quizCards = deck.filter(c => c.type === 'quiz_flash');
quizCards.forEach(c => {
  const correct = c.options.filter(o => o.correct).length;
  if (correct !== 1 || c.options.length < 4) badQuiz++;
});
report.push(`Total quiz cards in deck: ${quizCards.length}`);
report.push(`Malformed quiz cards: ${badQuiz}`);

report.push('\n=== CAS CHOC INTEGRITY ===');
const casCards = deck.filter(c => c.type === 'cas_choc');
let badCas = 0;
casCards.forEach(c => {
  if (!c.vignette || !c.diagnosis || c.vignette.length < 30 || c.diagnosis.length < 30) badCas++;
});
report.push(`Total cas choc in deck: ${casCards.length}`);
report.push(`Incomplete cas choc: ${badCas}`);

require('fs').writeFileSync('C:/Users/tokin/geriatrie-app/tools/brainfeed_audit_report.txt', report.join('\n'), 'utf8');
console.log('Report written to tools/brainfeed_audit_report.txt');
