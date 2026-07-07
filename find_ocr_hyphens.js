const fs = require('fs');
const vm = require('vm');

const sandbox = { APP_DATA: {} };
vm.createContext(sandbox);

const dataCode = fs.readFileSync('data.js', 'utf8').replace(/const APP_DATA/, 'APP_DATA');
vm.runInContext('var APP_DATA; ' + dataCode, sandbox);

const content = sandbox.APP_DATA.content;
const chapters = sandbox.APP_DATA.chapters;

console.log('=== OCR HYPHEN PATTERNS IN CHAPTER CONTENT ===');
let totalHyphens = 0;
for (const ch of chapters) {
  const id = ch.id;
  const chunks = content[id] || [];
  let found = [];
  for (let i = 0; i < chunks.length; i++) {
    const text = chunks[i][1];
    const lines = text.split('\n');
    for (let j = 0; j < lines.length; j++) {
      const line = lines[j];
      // Check for mid-word hyphenations with trailing space or newlines
      const matches = line.match(/\w+-\s+\w+|\w+-\n\w+/g);
      if (matches) {
        found.push({ page: chunks[i][0], line: line.trim(), matches });
      }
    }
  }
  if (found.length > 0) {
    console.log(`\nChapter ${id} (${ch.t}):`);
    found.slice(0, 5).forEach(f => {
      console.log(`  Page ${f.page}: ${f.line} -> Matches: ${JSON.stringify(f.matches)}`);
    });
    totalHyphens += found.length;
  }
}
console.log(`\nTotal ocr hyphens found: ${totalHyphens}`);
