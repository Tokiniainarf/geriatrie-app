const fs = require('fs');

// Read and parse data.js
const dataContent = fs.readFileSync('data.js', 'utf8');
const appDataMatch = dataContent.match(/const APP_DATA\s*=\s*([\s\S]+?);\s*$/);
let APP_DATA;
eval('APP_DATA = ' + appDataMatch[1]);

// Let's check the pages of all chapters
for (let idx = 0; idx < APP_DATA.chapters.length; idx++) {
  const ch = APP_DATA.chapters[idx];
  const pages = APP_DATA.content[ch.id];
  if (!pages || pages.length === 0) continue;

  console.log(`\n========================================`);
  console.log(`Chapter: ${ch.id} (${ch.t}) - Total pages: ${pages.length}`);
  
  // Find "stnioP"
  let stnioPIdx = -1;
  for (let p = 0; p < pages.length; p++) {
    if (pages[p][1].includes("stnioP")) {
      stnioPIdx = p;
    }
  }

  // Find if there is any page that contains the outline header or title of next chapter
  let nextChTitleIdx = -1;
  const nextCh = APP_DATA.chapters[idx + 1];
  if (nextCh) {
    const nextChTitle = nextCh.t.toLowerCase().substring(0, 15);
    for (let p = 0; p < pages.length; p++) {
      if (pages[p][1].toLowerCase().includes(nextChTitle)) {
        nextChTitleIdx = p;
        break; // first occurrence
      }
    }
  }

  console.log(`stnioP page index: ${stnioPIdx !== -1 ? pages[stnioPIdx][0] : 'None'} (index: ${stnioPIdx})`);
  console.log(`nextChTitle page index: ${nextChTitleIdx !== -1 ? pages[nextChTitleIdx][0] : 'None'} (index: ${nextChTitleIdx})`);

  // Print all pages from stnioPIdx or nextChTitleIdx to the end
  const startPrint = Math.min(
    stnioPIdx !== -1 ? stnioPIdx : pages.length,
    nextChTitleIdx !== -1 ? nextChTitleIdx : pages.length
  );
  
  if (startPrint < pages.length) {
    console.log("Trailing pages detail:");
    for (let p = startPrint; p < pages.length; p++) {
      const text = pages[p][1];
      const hasStnioP = text.includes("stnioP");
      console.log(`  - Page ${pages[p][0]} (index ${p}): len=${text.length}, stnioP=${hasStnioP}`);
      console.log(`    Snippet: "${text.replace(/\n/g, ' ').substring(0, 80)}..."`);
    }
  } else {
    console.log("No trailing pages found under these criteria");
  }
}
