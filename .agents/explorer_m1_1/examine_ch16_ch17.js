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

let out = '';
const ch16 = data.content['ch16'] || [];
out += '--- CH16 PAGES ---\n';
ch16.forEach(([p, text]) => {
  if (p >= 300) {
    out += `Page ${p}:\n${text}\n\n`;
  }
});

const ch17 = data.content['ch17'] || [];
out += '--- CH17 PAGES ---\n';
ch17.forEach(([p, text]) => {
  if (p <= 321) {
    out += `Page ${p}:\n${text}\n\n`;
  }
});

fs.writeFileSync(path.join(__dirname, 'ch16_ch17.txt'), out, 'utf8');
console.log('Done!');
