const fs = require('fs');

// Read and parse data.js
const dataContent = fs.readFileSync('data.js', 'utf8');
const appDataMatch = dataContent.match(/const APP_DATA\s*=\s*([\s\S]+?);\s*$/);
let APP_DATA;
eval('APP_DATA = ' + appDataMatch[1]);

// Let's implement the preprocessAppData function in the script
function preprocessAppData(data) {
  const clean = str => str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
  const chapters = data.chapters;
  
  for (let i = 0; i < chapters.length - 1; i++) {
    const ch = chapters[i];
    const nextCh = chapters[i + 1];
    
    const pages = data.content[ch.id];
    if (!pages || pages.length < 2) continue;
    
    // We want to find if there is a split index
    let splitIdx = -1;
    
    // Step 1: Scan for stnioP in the second half of pages
    let stnioPIdx = -1;
    const half = Math.floor(pages.length / 2);
    for (let p = half; p < pages.length; p++) {
      if (pages[p][1].includes("stnioP")) {
        stnioPIdx = p;
        break;
      }
    }
    
    // Step 2: Scan for next chapter title, outline, or page guard
    let titleOrGuardIdx = -1;
    const nextTitleClean = clean(nextCh.t);
    // Let's extract key words of next chapter's title (filtering out short words like 'et', 'de', 'la')
    const nextTitleWords = nextTitleClean.split(/[\s'-]+/).filter(w => w.length > 2);
    
    for (let p = half; p < pages.length; p++) {
      const textClean = clean(pages[p][1]);
      
      // Page guard indicator
      if (pages[p][1].includes("This page intentionally left blank")) {
        titleOrGuardIdx = p;
        break;
      }
      
      // Next chapter title check: exact inclusion of first 15 characters, or inclusion of the full title
      if (nextTitleClean.length >= 5 && (textClean.includes(nextTitleClean.substring(0, 15)) || textClean.includes(nextTitleClean))) {
        titleOrGuardIdx = p;
        break;
      }
      
      // Next chapter title words inclusion check: if a page contains multiple key words of the next title, 
      // or if it's the outline section of the next chapter.
      // E.g., for ch12 "Chutes et marche", if it contains "chute" and "marche" in the first few lines.
      const firstLines = pages[p][1].split('\n').slice(0, 5).join(' ');
      const cleanFirstLines = clean(firstLines);
      
      // If the first 5 lines contain at least 2 key words of the next chapter's title (or 1 if title only has 1 word)
      const matchingWords = nextTitleWords.filter(w => cleanFirstLines.includes(w));
      if (nextTitleWords.length > 0 && matchingWords.length === nextTitleWords.length) {
        titleOrGuardIdx = p;
        break;
      }
      
      // Syllabus/Item outline indicator of next chapter: e.g. "ITEM [number]" where number is one of nextCh.items
      if (nextCh.items && nextCh.items.length > 0) {
        for (const item of nextCh.items) {
          const itemNum = item.replace(/[^\d]/g, '');
          if (itemNum && pages[p][1].includes(`ITEM ${itemNum}`)) {
            titleOrGuardIdx = p;
            break;
          }
        }
        if (titleOrGuardIdx !== -1) break;
      }
    }
    
    // Choose split point
    if (stnioPIdx !== -1) {
      splitIdx = stnioPIdx + 1;
    } else if (titleOrGuardIdx !== -1) {
      splitIdx = titleOrGuardIdx;
    }
    
    // Validation check: if we found a split, let's verify if the block to cut actually contains next chapter indications,
    // to avoid false positives (e.g. in ch16).
    if (splitIdx !== -1 && splitIdx < pages.length) {
      const cutBlock = pages.slice(splitIdx);
      const cutTextCombined = clean(cutBlock.map(p => p[1]).join('\n'));
      
      // Does it contain next title, a page guard, next items, or next title key words?
      let isValidSplit = false;
      
      if (cutTextCombined.includes("this page intentionally left blank")) {
        isValidSplit = true;
      }
      if (nextTitleClean.length >= 5 && (cutTextCombined.includes(nextTitleClean.substring(0, 15)) || cutTextCombined.includes(nextTitleClean))) {
        isValidSplit = true;
      }
      
      const matchingWordsCut = nextTitleWords.filter(w => cutTextCombined.includes(w));
      if (nextTitleWords.length > 0 && matchingWordsCut.length >= Math.min(2, nextTitleWords.length)) {
        isValidSplit = true;
      }
      
      if (nextCh.items && nextCh.items.length > 0) {
        for (const item of nextCh.items) {
          const itemNum = item.replace(/[^\d]/g, '');
          if (itemNum && cutTextCombined.includes(`item ${itemNum}`)) {
            isValidSplit = true;
            break;
          }
        }
      }
      
      if (!isValidSplit) {
        console.log(`[Validation Failed] Rejected split for ${ch.id} -> ${nextCh.id} at index ${splitIdx} (page ${pages[splitIdx][0]})`);
        splitIdx = -1;
      }
    }
    
    if (splitIdx !== -1 && splitIdx < pages.length) {
      const movedPages = pages.slice(splitIdx);
      const remainingPages = pages.slice(0, splitIdx);
      
      console.log(`[Split Success] ${ch.id} -> ${nextCh.id}: Cut ${movedPages.length} pages (pages ${movedPages.map(p => p[0]).join(',')}) starting at page ${pages[splitIdx][0]}`);
      
      // Apply the change in data
      data.content[ch.id] = remainingPages;
      data.content[nextCh.id] = movedPages.concat(data.content[nextCh.id] || []);
    } else {
      console.log(`[No Split] ${ch.id} -> ${nextCh.id}`);
    }
  }
}

console.log("=== RUNNING PREPROCESS APPDATA TEST ===");
preprocessAppData(APP_DATA);
console.log("=== DONE ===");
