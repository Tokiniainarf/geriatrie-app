'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { sb } = require('./simulate_load.js');

const ROOT = path.resolve(__dirname, '..');
const ranges = {
  ch1:[30,41],ch2:[45,56],ch3:[58,72],ch4:[76,83],ch5:[87,97],ch6:[100,116],
  ch7:[120,140],ch8:[142,152],ch9:[155,175],ch10:[179,189],ch11:[194,206],
  ch12:[209,223],ch13:[226,245],ch14:[248,266],ch15:[269,279],ch16:[284,316],ch17:[319,328],
};

function plain(value) {
  return String(value || '')
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&(?:amp;)?#39;|&apos;/gi, "'")
    .replace(/&quot;/gi, '"')
    .replace(/&lt;/gi, '<').replace(/&gt;/gi, '>').replace(/&amp;/gi, '&')
    .replace(/\s+/g, ' ').trim();
}

function excerpt(value, max = 210) {
  const text = plain(value);
  return text.length <= max ? text : text.slice(0, max) + '…';
}

function blocks(html) {
  const out = [];
  const re = /<(p|li)\b[^>]*>([\s\S]*?)<\/\1>/gi;
  for (const match of String(html).matchAll(re)) {
    const text = plain(match[2]);
    if (text) out.push({ tag: match[1].toLowerCase(), text });
  }
  return out;
}

function reasons(block) {
  const text = block.text;
  const found = [];
  if (block.tag === 'p' && text.length < 28 && !/^(?:Oui|Non|Rang [AB]|\(D'après|Source\s*:)/i.test(text)) found.push('fragment très court');
  if (block.tag === 'p' && /^[-–]\s*[A-ZÀ-ÖØ-Þ]\./.test(text)) found.push('initiale séparée du paragraphe précédent');
  if (block.tag === 'p' && /^[a-zà-öø-ÿœæ]\w/u.test(text) && !/^(?:cf\.|in vitro|et al\.|versus\b)/i.test(text)) found.push('début en minuscule');
  if (block.tag === 'p' && /^(?:chapitre|figure|fig\.|tableau)\s+\d/i.test(text)) found.push('renvoi ou libellé isolé');
  if (block.tag === 'p' && /^\d+\s+(?:Réserve|Fonction|Stress|Vieillissement|Maladie)\b/i.test(text)) found.push('libellé de figure dans le texte');
  if (block.tag === 'p' && /\b(?:de|du|des|à|en|avec|sans|comme|une|un|et|ou|par|pour|sur|sous|dans|qui|que|dont|le|la|les|au|aux)\s*[.:;]?$/i.test(text)) found.push('fin grammaticale incomplète');
  if (/\b[\p{L}]{2,}-\s+[\p{L}]{2,}\b/gu.test(text)) found.push('mot coupé par extraction');
  if (/\bfig\.\s*\d+\.\s+\d+\b/i.test(text)) found.push('numéro de figure espacé');
  if (/\b(?:Une attrition souches|e diminution|particucompl|stnioP|vieillissemnt|consulpeut|sondrain|Escarne)\b/i.test(text)) found.push('artefact lexical connu');
  return found;
}

vm.runInContext('preprocessAppData()', sb);
const issues = [];
const summary = {};
for (const [chId, range] of Object.entries(ranges)) {
  const expression = `renderChapter(prepareKnowledgePages(${JSON.stringify(chId)}, APP_DATA.content.${chId}), ${JSON.stringify(chId)})`;
  const html = vm.runInContext(expression, sb, { timeout: 120000 });
  const chapterBlocks = blocks(html);
  const chapterIssues = [];
  chapterBlocks.forEach((block, index) => {
    const why = reasons(block);
    if (why.length) chapterIssues.push({
      index: index + 1,
      tag: block.tag,
      reasons: why,
      text: excerpt(block.text),
      previous: index ? excerpt(chapterBlocks[index - 1].text, 150) : '',
      next: index + 1 < chapterBlocks.length ? excerpt(chapterBlocks[index + 1].text, 150) : '',
    });
  });
  summary[chId] = { pages: range[1] - range[0] + 1, blocks: chapterBlocks.length, issues: chapterIssues.length };
  chapterIssues.forEach(issue => issues.push({ chapter: chId, ...issue }));
}

const report = { generatedAt: new Date().toISOString(), summary, issueCount: issues.length, issues };
const output = path.join(__dirname, 'reader_semantic_audit.json');
fs.writeFileSync(output, JSON.stringify(report, null, 2), 'utf8');
console.log(JSON.stringify({ output, issueCount: issues.length, byChapter: Object.fromEntries(Object.entries(summary).map(([key, value]) => [key, value.issues])) }, null, 2));
if (issues.length) {
  console.log('\nPremières alertes :');
  issues.slice(0, 120).forEach(issue => console.log(`${issue.chapter} #${issue.index} [${issue.reasons.join(', ')}] ${issue.text}`));
}
