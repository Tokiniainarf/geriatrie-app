const fs = require('fs');

// Read and parse data.js
const dataContent = fs.readFileSync('data.js', 'utf8');
// Strip 'const APP_DATA = ' and trailing semicolon/newlines to parse it as JSON
const appDataMatch = dataContent.match(/const APP_DATA\s*=\s*([\s\S]+?);\s*$/);
if (!appDataMatch) {
  console.error("Could not find APP_DATA in data.js");
  process.exit(1);
}

let APP_DATA;
try {
  // Let's use eval or vm, since it's a JS object literal
  // eval is simple for this scratch script
  eval('APP_DATA = ' + appDataMatch[1]);
} catch (e) {
  console.error("Failed to parse APP_DATA:", e);
  process.exit(1);
}

console.log("Chapters in APP_DATA:", APP_DATA.chapters.map(c => c.id));

// For each chapter, let's inspect the page blocks at the end
for (let idx = 0; idx < APP_DATA.chapters.length; idx++) {
  const ch = APP_DATA.chapters[idx];
  const pages = APP_DATA.content[ch.id];
  if (!pages || pages.length === 0) {
    console.log(`${ch.id} (${ch.t}): No pages`);
    continue;
  }
  console.log(`\n========================================`);
  console.log(`Chapter: ${ch.id} (${ch.t}) - Total pages: ${pages.length}`);
  console.log(`First page: ${pages[0][0]}`);
  console.log(`Last page: ${pages[pages.length - 1][0]}`);

  // Let's look for "stnioP" or indicators of next chapter
  // Scan all pages in the second half of the chapter
  const half = Math.floor(pages.length / 2);
  for (let pIdx = half; pIdx < pages.length; pIdx++) {
    const [pageNum, text] = pages[pIdx];
    if (text.includes("stnioP")) {
      console.log(`  -> Page ${pageNum} contains "stnioP"`);
    }
    // Check if page contains keywords that look like the NEXT chapter's title
    const nextCh = APP_DATA.chapters[idx + 1];
    if (nextCh) {
      // Look for the next chapter's title or part of it in the page text
      const nextTitleClean = nextCh.t.toLowerCase().substring(0, 15);
      if (text.toLowerCase().includes(nextTitleClean)) {
        console.log(`  -> Page ${pageNum} contains next chapter title text: "${nextCh.t}"`);
      }
    }
  }
}
