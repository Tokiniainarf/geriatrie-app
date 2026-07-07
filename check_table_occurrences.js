const fs = require('fs');
const vm = require('vm');

const dataCode = fs.readFileSync('data.js', 'utf8');
const sandbox = { APP_DATA: {} };
vm.createContext(sandbox);
vm.runInContext('var APP_DATA; ' + dataCode.replace(/const APP_DATA/, 'APP_DATA'), sandbox);

const content = sandbox.APP_DATA.content;
const chapters = sandbox.APP_DATA.chapters;

console.log('=== TABLE OCCURRENCES ===');
for (const ch of chapters) {
  const id = ch.id;
  const pages = content[id] || [];
  pages.forEach(([pg, text]) => {
    const lines = text.split('\n');
    lines.forEach((line, idx) => {
      if (line.trim().startsWith('Tableau ')) {
        console.log(`Ch ${id} - Pg ${pg} (line ${idx}): "${line.trim()}"`);
        // Print next 10 lines to see if there is text table data or if it is just prose
        for (let k = 1; k <= 10; k++) {
          if (lines[idx + k]) {
            console.log(`  +${k}: "${lines[idx + k].trim()}"`);
          }
        }
      }
    });
  });
}
