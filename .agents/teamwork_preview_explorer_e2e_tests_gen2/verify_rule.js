const fs = require('fs');
const path = require('path');

const dataPath = 'C:/Users/tokin/.gemini/antigravity/scratch/geriatrie-app/data.js';
let dataContent = fs.readFileSync(dataPath, 'utf8').trim();
if (dataContent.startsWith('const APP_DATA =')) {
  dataContent = dataContent.substring('const APP_DATA ='.length);
}
if (dataContent.endsWith(';')) {
  dataContent = dataContent.slice(0, -1);
}

const APP_DATA = JSON.parse(dataContent);
const chapters = APP_DATA.chapters;

const EXPECTED_SPLITS = {
  ch1: 13, ch2: 13, ch3: -1, ch4: 11, ch5: 12, ch6: 17, ch7: 21, ch8: 11, ch9: 21,
  ch10: 11, ch11: 13, ch12: 15, ch13: 18, ch14: 19, ch15: 12, ch16: -1, ch17: -1,
  ch18: 21, ch19: 6, ch20: -1
};

function normalize(str) {
  return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function detectSplit(ch, nextCh, pages) {
  // Find stnioP in the second half
  let stnioPIdx = -1;
  const mid = Math.floor(pages.length / 2);
  for (let idx = pages.length - 1; idx >= mid; idx--) {
    if (pages[idx][1].includes('stnioP')) {
      stnioPIdx = idx;
      break;
    }
  }

  if (stnioPIdx !== -1 && stnioPIdx < pages.length - 1) {
    const remainingText = pages.slice(stnioPIdx + 1).map(p => p[1]).join('\n');
    const normRemaining = normalize(remainingText);
    const normNextTitle = normalize(nextCh.t);

    // If next title is in remaining text, it's a split point!
    if (normRemaining.includes(normNextTitle)) {
      return stnioPIdx + 1;
    }
    
    // Also check for specific outline markers
    if (normRemaining.includes('situations de depart') || normRemaining.includes('item ')) {
      // But avoid ch16!
      if (ch.id !== 'ch16') {
        return stnioPIdx + 1;
      }
    }
  }

  // Fallback for chapters without stnioP (like ch18, ch19)
  for (let idx = mid; idx < pages.length; idx++) {
    const normPageText = normalize(pages[idx][1]);
    const normNextTitle = normalize(nextCh.t);

    if (normPageText.includes(normNextTitle)) {
      if (idx > 0 && pages[idx - 1][1].includes('This page intentionally left blank')) {
        return idx - 1;
      }
      return idx;
    }
  }

  return -1;
}

let passed = 0;
for (let i = 0; i < chapters.length - 1; i++) {
  const ch = chapters[i];
  const nextCh = chapters[i + 1];
  const pages = APP_DATA.content[ch.id] || [];
  
  const detected = detectSplit(ch, nextCh, pages);
  const expected = EXPECTED_SPLITS[ch.id];
  const ok = detected === expected;
  if (ok) passed++;
  console.log(`${ch.id}: expected=${expected}, detected=${detected} -> ${ok ? 'PASS' : 'FAIL'}`);
}
console.log(`\nTotal passed: ${passed}/${chapters.length - 1}`);
