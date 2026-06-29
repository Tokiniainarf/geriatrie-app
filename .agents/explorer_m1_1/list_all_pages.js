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
  const pageNums = content.map(c => c[0]);
  const stniopPages = content.filter(c => c[1].includes('stnioP')).map(c => c[0]);
  const blankPages = content.filter(c => c[1].toLowerCase().includes('this page intentionally left blank')).map(c => c[0]);
  console.log(`Chapter ${ch.id} (${ch.t}): Pages=[${pageNums.join(', ')}], stnioP at: [${stniopPages.join(', ')}], blanks at: [${blankPages.join(', ')}]`);
});
