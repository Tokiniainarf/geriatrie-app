const fs = require('fs');

// Read and parse data.js
const dataContent = fs.readFileSync('data.js', 'utf8');
const appDataMatch = dataContent.match(/const APP_DATA\s*=\s*([\s\S]+?);\s*$/);
let APP_DATA;
eval('APP_DATA = ' + appDataMatch[1]);

// Let's write a function to print pages around the boundary of each chapter
for (let idx = 0; idx < APP_DATA.chapters.length - 1; idx++) {
  const ch = APP_DATA.chapters[idx];
  const nextCh = APP_DATA.chapters[idx + 1];
  const pages = APP_DATA.content[ch.id];
  if (!pages || pages.length === 0) continue;

  console.log(`\n========================================`);
  console.log(`Chapter: ${ch.id} -> ${nextCh.id}`);
  
  // Print details of the last 4 pages of ch
  const start = Math.max(0, pages.length - 5);
  for (let pIdx = start; pIdx < pages.length; pIdx++) {
    const [pageNum, text] = pages[pIdx];
    const hasStnioP = text.includes("stnioP");
    const hasNextChTitle = text.toLowerCase().includes(nextCh.t.toLowerCase().substring(0, 15));
    const firstLine = text.split('\n')[0];
    const lastLine = text.trim().split('\n').pop();
    
    console.log(`  Page ${pageNum}:`);
    console.log(`    First Line: "${firstLine}"`);
    console.log(`    Last Line:  "${lastLine}"`);
    console.log(`    Flags:      stnioP: ${hasStnioP}, nextChTitle: ${hasNextChTitle}`);
  }
}
