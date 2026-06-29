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
  const stnioPIdx = content.findIndex(c => c[1].includes('stnioP'));
  if (stnioPIdx !== -1 && stnioPIdx < content.length - 1) {
    console.log(`\nChapter ${ch.id} (${ch.t}) has pages after stnioP (at page ${content[stnioPIdx][0]}):`);
    for (let i = stnioPIdx + 1; i < content.length; i++) {
      const [pageNum, text] = content[i];
      console.log(`  Page ${pageNum}: ${JSON.stringify(text.substring(0, 80))}...`);
    }
  }
});
