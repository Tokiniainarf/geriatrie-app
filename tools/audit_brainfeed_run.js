const { sb } = require('./simulate_load.js');
const vm = require('vm');
const path = require('path');

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
  if (c.title) report.push('Title: ' + c.title);
  if (c.question) report.push('Question: ' + c.question);
  if (c.vignette) report.push('Vignette: ' + c.vignette);
  if (c.prompt) report.push('Prompt: ' + c.prompt);
  if (c.line) report.push('Line: ' + c.line);
  if (c.trap) report.push('Trap: ' + c.trap);
  if (c.text) report.push('Text: ' + c.text);
  const answer = c.diagnosis || c.answer || c.explanation || c.explain || c.detail;
  if (answer) report.push('Answer: ' + String(answer).replace(/\s+/g, ' ').trim());
  if (Array.isArray(c.expectedKeywords) && c.expectedKeywords.length) {
    report.push('Expected keywords: ' + c.expectedKeywords.join(' · '));
  }
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

report.push('\n=== CONTENT QUALITY GATES ===');
const renderablePoolNames = ['memoJour', 'casChoc', 'quizFlash', 'chiffreCle', 'citation', 'piegeExam', 'flashRecall', 'visualExplanations'];
const allCards = renderablePoolNames.flatMap(name => Array.isArray(pools[name]) ? pools[name] : []);
const normalise = value => String(value || '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
const signatures = new Map();
allCards.forEach(card => {
  const question = normalise(card.question || card.trap || card.line || card.text).toLocaleLowerCase('fr');
  if (!question) return;
  signatures.set(question, (signatures.get(question) || 0) + 1);
});
const duplicateQuestions = [...signatures.values()].filter(count => count > 1).length;
const flashPool = pools.flashRecall || [];
const flashLengths = flashPool.map(card => normalise(card.question).length);
const longFlash = flashPool.filter(card => normalise(card.question).length > 115);
const badOcr = allCards.filter(card => /\b(stnioP|vieillissemnt|viellissement)\b|&(?:amp;)?#39;|\[object object\]|undefined/i.test(
  [card.question, card.vignette, card.prompt, card.diagnosis, card.answer, card.explanation, card.explain].map(normalise).join(' ')
));
const casePool = pools.casChoc || [];
const truncatedCases = casePool.filter(card => /…|\.\.\./.test(
  [card.vignette, card.prompt, card.diagnosis].map(normalise).join(' ')
));
const feedEligibleCases = casePool.filter(card => {
  const vignette = normalise(card.vignette);
  const prompt = normalise(card.prompt);
  const answer = normalise(card.diagnosis);
  return vignette.length >= 70 && vignette.length <= 450 && prompt.length >= 12 && prompt.length <= 170 &&
    answer.length >= 70 && answer.length <= 620 && !/…|\.\.\./.test(`${vignette} ${prompt} ${answer}`);
});
const keywordCards = allCards.filter(card => Array.isArray(card.expectedKeywords) && card.expectedKeywords.length);
const implicitKeywordCards = allCards.filter(card => card.expectedKeywords && !Array.isArray(card.expectedKeywords));
const visualPool = pools.visualExplanations || [];
const missingMedia = visualPool.filter(card => card.media && !require('fs').existsSync(path.join(__dirname, '..', card.media)));
report.push(`Duplicate normalized questions across pools: ${duplicateQuestions}`);
report.push(`Flash questions: ${flashPool.length}; maximum length: ${flashLengths.length ? Math.max(...flashLengths) : 0}; over 115 characters: ${longFlash.length}`);
longFlash.forEach(card => report.push(`  LONG ${normalise(card.question).length} ${card.id}: ${normalise(card.question)}`));
report.push(`OCR/HTML artifacts in eligible cards: ${badOcr.length}`);
report.push(`Source cas/CROQ pool: ${casePool.length}; complete feed-eligible cases: ${feedEligibleCases.length}`);
report.push(`Artificially truncated cas/CROQ: ${truncatedCases.length}`);
report.push(`Cards with explicit editorial keywords: ${keywordCards.length}`);
report.push(`Cards with implicit/non-editorial keywords: ${implicitKeywordCards.length}`);
report.push(`Visual lessons: ${visualPool.length}; missing local media: ${missingMedia.length}`);

const failedGates = [];
if (badQuiz) failedGates.push('malformed quiz');
if (badCas || truncatedCases.length || !feedEligibleCases.length) failedGates.push('incomplete cas/CROQ');
if (badOcr.length) failedGates.push('OCR/HTML artifact');
if (implicitKeywordCards.length) failedGates.push('implicit keyword generation');
if (missingMedia.length) failedGates.push('missing media');
report.push(`Final gate: ${failedGates.length ? 'FAIL — ' + failedGates.join(', ') : 'PASS'}`);

const cleanReport = report.join('\n').split('\n').map(line => line.trimEnd()).join('\n') + '\n';
require('fs').writeFileSync(path.join(__dirname, 'brainfeed_audit_report.txt'), cleanReport, 'utf8');
console.log('Report written to tools/brainfeed_audit_report.txt');
