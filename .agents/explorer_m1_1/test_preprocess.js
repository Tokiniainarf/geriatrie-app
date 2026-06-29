const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', '..', 'data.js');
let dataContent = fs.readFileSync(dataPath, 'utf8').trim();
if (dataContent.startsWith('const APP_DATA =')) {
  dataContent = dataContent.substring('const APP_DATA ='.length);
}
if (dataContent.endsWith(';')) {
  dataContent = dataContent.slice(0, -1);
}

const APP_DATA = JSON.parse(dataContent);

const NEXT_CHAPTER_TITLES = {
  ch2: "Appréhender la complexité",
  ch3: "Évaluer l'autonomie",
  ch4: "Éthique, vieillissement et protection",
  ch5: "Altération chronique",
  ch6: "Du vieillissement osseux",
  ch7: "Du vieillissement articulaire",
  ch8: "Évaluer la douleur",
  ch9: "Raisonner devant une plainte mnésique",
  ch10: "Raisonner devant une plainte thymique",
  ch11: "Diagnostiquer et raisonner devant un syndrome confusionnel",
  ch12: "Raisonner devant une chute",
  ch13: "Prévenir et prendre en charge un syndrome d'immobilisation",
  ch14: "Évaluer l'état nutritionnel",
  ch15: "Raisonner sur les troubles vésico-sphinctériens",
  ch16: "Apprendre à prescrire",
  ch17: "Prendre une décision de soins palliatifs",
  ch18: "Mini-dossiers progressifs",
  ch19: "Key-features problems",
  ch20: "Questions isolées"
};

function preprocessAppData() {
  const chapters = APP_DATA.chapters;
  const content = APP_DATA.content;

  for (let i = 0; i < chapters.length - 1; i++) {
    const currentCh = chapters[i];
    const nextCh = chapters[i + 1];

    const currentPages = content[currentCh.id] || [];
    if (currentPages.length === 0) continue;

    let splitIndex = -1;

    // 1. Search for next chapter's outline title in the first 250 chars of the page text (second half of chapter)
    const nextOutlineTitle = NEXT_CHAPTER_TITLES[nextCh.id];
    if (nextOutlineTitle) {
      const lowerOutline = nextOutlineTitle.toLowerCase();
      const startSearchIdx = Math.floor(currentPages.length / 2);
      for (let j = startSearchIdx; j < currentPages.length; j++) {
        const text = currentPages[j][1].toLowerCase().replace(/\s+/g, ' ');
        if (text.substring(0, 250).includes(lowerOutline)) {
          splitIndex = j;
          break;
        }
      }
    }

    // 2. Fallback: look for stnioP in the second half of pages
    if (splitIndex === -1) {
      const startSearchIdx = Math.floor(currentPages.length / 2);
      for (let j = currentPages.length - 1; j >= startSearchIdx; j--) {
        const text = currentPages[j][1];
        if (text.includes('stnioP')) {
          if (j < currentPages.length - 1) {
            splitIndex = j + 1;
          }
          break;
        }
      }
    }

    // 3. Process the split
    if (splitIndex !== -1) {
      let finalSplitIndex = splitIndex;
      // Include any immediately preceding blank pages/page guards
      while (finalSplitIndex > 0) {
        const prevPageText = currentPages[finalSplitIndex - 1][1].toLowerCase();
        if (prevPageText.includes('this page intentionally left blank')) {
          finalSplitIndex--;
        } else {
          break;
        }
      }

      const pagesToMove = currentPages.slice(finalSplitIndex);
      if (pagesToMove.length > 0) {
        // Enforce maximum block length of 4 pages to prevent moving genuine content (e.g. ch16 psychotropes/transfusions)
        if (pagesToMove.length <= 4) {
          console.log(`Moving pages [${pagesToMove.map(p => p[0]).join(', ')}] from ${currentCh.id} to ${nextCh.id}`);
          const keptPages = currentPages.slice(0, finalSplitIndex);
          content[currentCh.id] = keptPages;
          content[nextCh.id] = [...pagesToMove, ...(content[nextCh.id] || [])];
        } else {
          console.log(`Skipped moving pages [${pagesToMove.map(p => p[0]).join(', ')}] from ${currentCh.id} to ${nextCh.id} (length ${pagesToMove.length} > 4)`);
        }
      }
    }
  }
}

console.log('--- BEFORE PREPROCESSING ---');
APP_DATA.chapters.forEach(ch => {
  const p = (APP_DATA.content[ch.id] || []).map(x => x[0]);
  console.log(`${ch.id} (${ch.t}): [${p.join(', ')}]`);
});

preprocessAppData();

console.log('\n--- AFTER PREPROCESSING ---');
APP_DATA.chapters.forEach(ch => {
  const p = (APP_DATA.content[ch.id] || []).map(x => x[0]);
  console.log(`${ch.id} (${ch.t}): [${p.join(', ')}]`);
});
