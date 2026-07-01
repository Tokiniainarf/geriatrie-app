const { sb } = require('./simulate_load.js');
const vm = require('vm');
const fs = require('fs');

const APP_DATA = vm.runInContext('APP_DATA', sb);

const report = [];
report.push('=== FINAL APP AUDIT ===');
report.push('JS load simulation: OK');

// Feed audit
const r = vm.runInContext('BrainFeed.audit()', sb);
const deck = r.deck;
report.push(`BrainFeed deck size: ${deck.length}`);
const counts = {};
deck.forEach(c => counts[c.type] = (counts[c.type] || 0) + 1);
report.push(`Type distribution: ${JSON.stringify(counts)}`);

let badQuiz = 0, badCas = 0;
deck.filter(c => c.type === 'quiz_flash').forEach(c => {
  const correct = c.options.filter(o => o.correct).length;
  if (correct !== 1 || c.options.length < 4) badQuiz++;
});
deck.filter(c => c.type === 'cas_choc').forEach(c => {
  if (!c.vignette || !c.diagnosis || c.vignette.length < 30 || c.diagnosis.length < 30) badCas++;
});
report.push(`Malformed quiz: ${badQuiz}, Incomplete cas: ${badCas}`);

// Chapter render audit
const html = sb.renderChapter(APP_DATA.content.ch1.map(c => c[1]).join('\u25bc\n'), 'ch1');
const leaks = ['Connaissances', 'Points cl', 'Entraînement', 'Gériatrie', 'Elsevier', 'droits réservés', 'This page intentionally left blank'];
let leakCount = 0;
leaks.forEach(w => {
  const c = (html.match(new RegExp(w, 'g')) || []).length;
  if (c) { leakCount += c; report.push(`LEAK '${w}': ${c}`); }
});
if (!leakCount) report.push('Chapter render: no header/footer leaks');

report.push('=== END ===');
fs.writeFileSync('C:/Users/tokin/geriatrie-app/tools/final_audit_report.txt', report.join('\n'), 'utf8');
console.log('Final audit written to tools/final_audit_report.txt');
