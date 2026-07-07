const fs = require('fs');
const path = require('path');

const cardCountsPath = path.join(__dirname, 'card_counts.json');
const data = JSON.parse(fs.readFileSync(cardCountsPath, 'utf8'));

const results = data.results;
const globalChapters = data.globalChapters;

let md = '# Flashcard Count Analysis\n\n';

// Table of files and totals
md += '## Flashcard Counts by File\n\n';
md += '| File Name | Array Name | Total Cards |\n';
md += '|---|---|---|\n';

let totalSum = 0;
Object.keys(results).forEach(file => {
  const arrays = results[file].arrays;
  Object.keys(arrays).forEach(arrName => {
    md += `| \`${file}\` | \`${arrName}\` | ${arrays[arrName].total} |\n`;
    totalSum += arrays[arrName].total;
  });
});
md += `| **Total** | - | **${totalSum}** |\n\n`;

// Table of chapters and totals
md += '## Flashcard Counts by Chapter (Global)\n\n';
md += '| Chapter ID | Chapter Name | Card Count |\n';
md += '|---|---|---|\n';

const chapterNames = {
  ch1: 'Comprendre le vieillissement',
  ch2: 'Raisonnement gériatrique',
  ch3: 'Évaluation de l\'autonomie',
  ch4: 'Éthique et protection',
  ch5: 'Troubles sensoriels',
  ch6: 'Ostéoporose et fractures',
  ch7: 'Arthrose',
  ch8: 'Douleur',
  ch9: 'Troubles neurocognitifs',
  ch10: 'Dépression',
  ch11: 'Syndrome confusionnel',
  ch12: 'Chutes et marche',
  ch13: 'Alitement',
  ch14: 'Nutrition',
  ch15: 'Incontinence urinaire',
  ch16: 'Prescrire chez le patient âgé',
  ch17: 'Soins palliatifs',
  ch18: 'Mini-dossiers progressifs',
  ch19: 'Key-features problems',
  ch20: 'Questions isolées'
};

Object.keys(globalChapters).sort((a, b) => {
  const numA = parseInt(a.replace('ch', ''));
  const numB = parseInt(b.replace('ch', ''));
  return numA - numB;
}).forEach(ch => {
  md += `| \`${ch}\` | ${chapterNames[ch] || 'Unknown'} | ${globalChapters[ch]} |\n`;
});
md += `| **Total** | - | **${totalSum}** |\n\n`;

// Breakdown matrix: Files vs Chapters
md += '## Flashcards breakdown: Files vs Chapters\n\n';

const chaptersList = Object.keys(globalChapters).sort((a, b) => {
  const numA = parseInt(a.replace('ch', ''));
  const numB = parseInt(b.replace('ch', ''));
  return numA - numB;
});

md += '| File Name | ' + chaptersList.map(ch => `\`${ch}\``).join(' | ') + ' | Total |\n';
md += '|---|' + chaptersList.map(() => '---').join('|') + '|---|\n';

Object.keys(results).forEach(file => {
  const arrays = results[file].arrays;
  Object.keys(arrays).forEach(arrName => {
    const counts = arrays[arrName].chapters;
    const row = chaptersList.map(ch => counts[ch] || 0);
    md += `| \`${file}\` | ` + row.join(' | ') + ` | ${arrays[arrName].total} |\n`;
  });
});

fs.writeFileSync(path.join(__dirname, 'formatted_counts.md'), md, 'utf8');
console.log('Successfully wrote formatted counts to formatted_counts.md');
