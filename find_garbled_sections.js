const fs = require('fs');
const vm = require('vm');

const dataCode = fs.readFileSync('data.js', 'utf8');
const sandbox = { APP_DATA: {} };
vm.createContext(sandbox);
vm.runInContext('var APP_DATA; ' + dataCode.replace(/const APP_DATA/, 'APP_DATA'), sandbox);

const content = sandbox.APP_DATA.content;
const chapters = sandbox.APP_DATA.chapters;

console.log('=== DETECTING GARBLED COLUMN MERGING ===');
for (const ch of chapters) {
  const id = ch.id;
  const pages = content[id] || [];
  pages.forEach(([pg, text]) => {
    const lines = text.split('\n');
    lines.forEach((line, idx) => {
      // Look for lines containing typical column-merging markers
      // e.g. "word- Word" or "word) Word" or "word; Word" where the second part is clearly a separate column starting with capital
      if (line.match(/\w+-\s+[A-ZÀ-ÖØ-ßŒÆ]/) || line.match(/\w+[);,]\s+[A-ZÀ-ÖØ-ßŒÆ][a-zà-öø-ÿœæ]{3,}\s+[A-ZÀ-ÖØ-ßŒÆa-zà-öø-ÿœæ]/)) {
        // Exclude figure captions, list items, and standard punctuation
        if (!line.includes('Fig.') && !line.includes('Tableau') && !line.includes('Encadré') && line.length > 50) {
          console.log(`Ch ${id} - Pg ${pg} (line ${idx}): "${line.trim()}"`);
        }
      }
    });
  });
}
