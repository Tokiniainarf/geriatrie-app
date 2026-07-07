const fs = require('fs');

const appSrc = fs.readFileSync('app.js', 'utf8');

// Let's run renderChapter and log step by step
// We can modify the vm or extract the renderChapter function and insert logs.
// Let's extract the function renderChapter from appSrc and add logs.
const startIdx = appSrc.indexOf('function renderChapter');
let openBraces = 0;
let i = startIdx;
let foundFirstBrace = false;
let renderChapterCode = '';
while (i < appSrc.length) {
  if (appSrc[i] === '{') {
    openBraces++;
    foundFirstBrace = true;
  } else if (appSrc[i] === '}') {
    openBraces--;
    if (foundFirstBrace && openBraces === 0) {
      renderChapterCode = appSrc.substring(startIdx, i + 1);
      break;
    }
  }
  i++;
}

// Replace the filter and loop inside renderChapterCode with console.logs
// Let's just create a modified copy of renderChapter in our test file.
// Wait, we can see the lines filtered:
const raw = 'Introductory text to trigger body start.\nI. Vieillissement\nThis is paragraph 1 of section I.\nThis is paragraph 2 of section I.\nII. Définitions\nThis is paragraph 1 of section II.';

const rawLines = raw.split('\n');
console.log("Raw lines:", rawLines);

const BULLET_RE=/^[•\-–]\s*(.+)/;
const SECTION_RE=/^([IVX]+)\.\s+(.+)/;
const LETTER_RE=/^([A-Z])\.\s+(.+)/;

const lines = rawLines.filter(l => {
  if (BULLET_RE.test(l) || SECTION_RE.test(l) || LETTER_RE.test(l)) return true;
  if (/^Fig\.|Tableau|Encadré|^\d{2,3}\s+/.test(l)) return true;
  if (/[.!?]$/.test(l)) return true;
  if (/^Situations?\s+de\s+départ/i.test(l)) return true;
  return false;
});
console.log("Filtered lines:", lines);
