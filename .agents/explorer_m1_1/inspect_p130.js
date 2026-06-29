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

console.log('Page 130 text:');
const p130 = data.content['ch7'].find(p => p[0] === 130);
if (p130) {
  console.log(p130[1]);
} else {
  console.log('Page 130 not found in ch7');
}
