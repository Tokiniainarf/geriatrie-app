const fs = require('fs');
const vm = require('vm');

const sandbox = { APP_DATA: {} };
vm.createContext(sandbox);

const dataCode = fs.readFileSync('data.js', 'utf8').replace(/const APP_DATA/, 'APP_DATA');
vm.runInContext('var APP_DATA; ' + dataCode, sandbox);

const content = sandbox.APP_DATA.content;
const chapters = sandbox.APP_DATA.chapters;

console.log('=== LIST OF ENCADRES (BOXES) IN BOOK CONTENT ===');
for (const ch of chapters) {
  const id = ch.id;
  const chunks = content[id] || [];
  for (let i = 0; i < chunks.length; i++) {
    const text = chunks[i][1];
    const lines = text.split('\n');
    for (let j = 0; j < lines.length; j++) {
      if (lines[j].trim().startsWith('Encadré')) {
        console.log(`Chapter ${id} (${ch.t}) - Page ${chunks[i][0]}: ${lines[j].trim()}`);
        // Print next 5 lines to see content context
        for (let k = 1; k <= 5; k++) {
          if (lines[j+k]) console.log(`  +${k}: ${lines[j+k]}`);
        }
      }
    }
  }
}
