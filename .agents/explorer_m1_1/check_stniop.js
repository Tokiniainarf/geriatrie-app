const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', '..', 'data.js');
let dataContent = fs.readFileSync(dataPath, 'utf8').trim();
if (dataContent.startsWith('const APP_DATA =')) {
  dataContent = dataContent.substring('const APP_DATA ='.length);
}
if (dataContent.endsWith(';')) {
  dataContent = dataContent.slice(0, -1);
}

const data = JSON.parse(dataContent);

data.chapters.forEach((ch, idx) => {
  const content = data.content[ch.id] || [];
  console.log(`\nChapter ${ch.id} (${ch.t}):`);
  content.forEach(([pageNum, text]) => {
    const hasStniop = text.includes('stnioP');
    const isBlank = text.toLowerCase().includes('this page intentionally left blank');
    if (hasStniop || isBlank || pageNum === content[content.length - 1][0]) {
      console.log(`  Page ${pageNum}: hasStniop=${hasStniop}, isBlank=${isBlank}`);
      console.log(`    Content: ${JSON.stringify(text.substring(0, 150))}...`);
    }
  });
});
