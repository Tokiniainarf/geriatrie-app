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

const allPages = [];
data.chapters.forEach(ch => {
  const content = data.content[ch.id] || [];
  content.forEach(([p, _]) => {
    allPages.push({ chId: ch.id, pageNum: p });
  });
});

allPages.sort((a, b) => a.pageNum - b.pageNum);

console.log('Total pages:', allPages.length);
for (let i = 0; i < allPages.length; i++) {
  if (i > 0 && allPages[i].pageNum !== allPages[i-1].pageNum + 1) {
    console.log(`Gap: page ${allPages[i-1].pageNum} (in ${allPages[i-1].chId}) to page ${allPages[i].pageNum} (in ${allPages[i].chId})`);
  }
}
