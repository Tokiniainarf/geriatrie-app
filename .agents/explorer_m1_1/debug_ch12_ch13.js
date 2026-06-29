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

const ch12 = data.chapters.find(c => c.id === 'ch12');
const ch13 = data.chapters.find(c => c.id === 'ch13');

const page225 = data.content['ch12'].find(p => p[0] === 225);
const text = page225[1].toLowerCase();

const curTitleWords = ch12.t.toLowerCase().replace(/['’\-_]/g, ' ').split(/\s+/).filter(w => w.length > 3);
const nextTitleWords = ch13.t.toLowerCase().replace(/['’\-_]/g, ' ').split(/\s+/).filter(w => w.length > 3);

console.log('curTitleWords:', curTitleWords);
console.log('nextTitleWords:', nextTitleWords);

curTitleWords.forEach(w => {
  console.log(`Contains "${w}":`, text.includes(w));
});

nextTitleWords.forEach(w => {
  console.log(`Contains "${w}":`, text.includes(w));
});
