const fs = require('fs');
const path = require('path');

// Read data.js
const dataPath = path.join(__dirname, '..', '..', 'data.js');
let dataContent = fs.readFileSync(dataPath, 'utf8');

// Strip "const APP_DATA = " and trailing semicolon/newlines to parse as JSON
dataContent = dataContent.trim();
if (dataContent.startsWith('const APP_DATA =')) {
  dataContent = dataContent.substring('const APP_DATA ='.length);
}
if (dataContent.endsWith(';')) {
  dataContent = dataContent.slice(0, -1);
}

const data = JSON.parse(dataContent);

console.log('Number of chapters:', data.chapters.length);
data.chapters.forEach((ch, idx) => {
  const content = data.content[ch.id];
  console.log(`\nChapter: ${ch.id} (${ch.t}) - Chunks count: ${content ? content.length : 0}`);
  if (content && content.length > 0) {
    const lastPage = content[content.length - 1];
    const prevPage = content.length > 1 ? content[content.length - 2] : null;
    console.log(`  Last page ${lastPage[0]} snippet: ${JSON.stringify(lastPage[1].substring(0, 100))} ... ${JSON.stringify(lastPage[1].slice(-100))}`);
    if (prevPage) {
      console.log(`  Prev page ${prevPage[0]} snippet: ${JSON.stringify(prevPage[1].substring(0, 100))} ... ${JSON.stringify(prevPage[1].slice(-100))}`);
    }
  }
});
