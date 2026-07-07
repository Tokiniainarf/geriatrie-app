const fs = require('fs');
const vm = require('vm');

const sandbox = { APP_DATA: {} };
vm.createContext(sandbox);
vm.runInContext('var APP_DATA;' + fs.readFileSync('data.js', 'utf8').replace(/const APP_DATA/, 'APP_DATA'), sandbox);

const ch4 = sandbox.APP_DATA.content.ch4 || [];
const p79 = ch4.find(c => c[0] === 79);

const lines = p79[1].split('\n').map(l => l.trim());

// Simple table parser algorithm
let inTable = false;
let tableLines = [];
let tableTitle = '';

const SECTION_RE=/^[IVX]+\.\s*(.*)/;
const LETTER_RE=/^[A-Z]\.\s*(.*)/;

for (let i = 0; i < lines.length; i++) {
  const l = lines[i];
  if (/^Tableau\s+(\d+\.\d+)\.\s*(.*)/i.test(l)) {
    const m = l.match(/^Tableau\s+(\d+\.\d+)\.\s*(.*)/i);
    tableTitle = `Tableau ${m[1]} : ${m[2]}`;
    inTable = true;
    tableLines = [];
    continue;
  }
  if (inTable) {
    // End of table check
    if (l === '' || SECTION_RE.test(l) || LETTER_RE.test(l) || /^[0-9]+\.\s+/.test(l) || /^▼$/.test(l)) {
      renderTable(tableTitle, tableLines);
      inTable = false;
      continue;
    }
    tableLines.push(l);
  }
}

function renderTable(title, rawLines) {
  console.log('--- TITLE ---');
  console.log(title);
  console.log('--- RAW LINES ---');
  console.log(rawLines);
  
  // Parse rows
  const rows = [];
  for (let rl of rawLines) {
    // Skip footnotes
    if (rl.startsWith('*')) continue;
    
    // Split by 2 or more spaces
    let cells = rl.split(/\s{2,}/);
    
    // If cells length is 1, check if we can split by ending symbols
    if (cells.length === 1) {
      const symMatch = rl.match(/^(.*?)\s+([+–-]\*?)\s+([+–-]\*?)$/);
      if (symMatch) {
        cells = [symMatch[1], symMatch[2], symMatch[3]];
      }
    }
    rows.push(cells);
  }
  
  console.log('--- PARSED ROWS ---');
  console.log(rows);
}
