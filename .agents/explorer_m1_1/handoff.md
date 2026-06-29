# Handoff Report — PDF Chapter Boundary Alignment (Requirement R1)

## 1. Observation
From analysis of `data.js` and execution of inspection scripts, the following characteristics of `APP_DATA.content` were observed:
- `APP_DATA.content[chId]` consists of arrays of pages represented as `[pageNumber, pageText]`.
- Most chapters in Part 1 (Connaissances) end with a summary section ending with the backward-spelled word `"stnioP"` (which corresponds to `"Points"`).
- In several cases, page guards (e.g. `"This page intentionally left blank"`), the next chapter's outline cover (e.g. `"Appréhender la complexité du patient âgé"`, `"Évaluer l'autonomie et en comprendre l'importance"`), and syllabus tables are erroneously appended to the end of the previous chapter.
- A sequential check of the chapter contents shows:
  - `ch1` ends with page `41` (which contains `"stnioP"`). Pages `42` (blank) and `43` (Chapter 2 cover/outline page) are at the end of `ch1`.
  - `ch2` starts at page `44`, but page `43` is the actual cover of Chapter 2. Page `57` (Chapter 3 cover page) is at the end of `ch2`.
  - `ch16` contains page `302` with `"stnioP"` at the end, but the trailing pages `303-310` belong to `ch16` (subsections `"Bon usage des psychotropes"` and `"Savoir quand et comment transfuser..."`). The next chapter `ch17` starts at page `319` (meaning there is a gap of 9 pages in the dataset, and pages 303-310 do not contain Soins palliatifs).
  - Chapters `ch18`, `ch19`, and `ch20` are Part 2 (practice questions) and do not have `"stnioP"` markers, but `ch18` contains page `353` (cover of `ch19`), and `ch19` contains page `361` (cover of `ch20`).

Below are the exact page sequences before alignment:
```
ch1: [29..41, 42, 43] (stnioP on 41, blank 42, ch2 cover 43)
ch2: [44..56, 57] (stnioP on 56, ch3 cover 57)
ch3: [58..72] (stnioP on 72)
ch4: [73..83, 84, 85] (stnioP on 83, blank 84, ch5 cover 85)
ch5: [86..97, 98, 99] (stnioP on 97, blank 98, ch6 cover 99)
ch6: [100..116, 117, 118, 119] (stnioP on 116, ch7 cover 117, ch7 syllabus 118, 119)
ch7: [120..140, 141] (stnioP on 140, ch8 cover 141)
ch8: [142..152, 153] (stnioP on 152, ch9 cover 153)
ch9: [155..175, 176, 177] (stnioP on 175, blank 176, ch10 cover 177)
ch10: [179..189, 190, 191, 192, 193] (stnioP on 189, blank 190, ch11 cover 191, ch11 syllabus 192, 193)
ch11: [194..206, 207] (stnioP on 206, ch12 cover 207)
ch12: [209..223, 224, 225, 226, 227] (stnioP on 223, blank 224, ch13 cover 225, ch13 syllabus 226, 227)
ch13: [228..245, 246, 247] (stnioP on 245, blank 246, ch14 cover 247)
ch14: [248..266, 267] (stnioP on 266, ch15 cover 267)
ch15: [268..279, 280, 281] (stnioP on 279, blank 280, ch16 cover 281)
ch16: [282..310] (stnioP on 302, trailing content pages 303-310)
ch17: [319..328, 330] (stnioP on 328, blank 330)
ch18: [332..353] (ch19 cover 353)
ch19: [354..361] (blank 360, ch20 cover 361)
ch20: [362..385]
```

## 2. Logic Chain
To correctly align the chapter boundaries without modifying the underlying raw data, we need a runtime preprocess function `preprocessAppData()`:
1. **Chapter Navigation**: Iterate through chapters from index `0` to `chapters.length - 2`.
2. **Next Chapter Outline Search**: For each chapter `currentCh` (index `i`), search for the cover/outline page of the next chapter `nextCh` (index `i+1`).
   - Define a dictionary `NEXT_CHAPTER_TITLES` mapping chapter IDs to normalized substring headers matching the first line of their cover pages (e.g. `ch2: "Appréhender la complexité"`, `ch13: "Prévenir et prendre en charge"`).
   - Search forwards in the second half of `currentCh`'s pages.
   - For each page, normalize whitespaces (`replace(/\s+/g, ' ')`) and check if the first 250 characters contain the target outline title of the next chapter.
   - If found at page index `splitIndex`, that page is identified as the start of the next chapter's cover page.
3. **Indicator Fallback (`stnioP`)**: If no next chapter cover page is found by outline title, search for the word `"stnioP"` in the page texts of the second half of `currentCh`'s pages.
   - If a page contains `"stnioP"`, set `splitIndex` to `j + 1` (the page following the `stnioP` page).
4. **Blank Page Guard Inclusion**: If `splitIndex` is found, scan backwards to check if the page(s) immediately preceding `splitIndex` are blank pages/page guards containing `"this page intentionally left blank"`. If so, adjust `splitIndex` backward to include the blank page(s) in the block to be moved.
5. **Length Constraint Safety (Avoiding `ch16` Edge Case)**:
   - Slice the pages from `splitIndex` to the end as `pagesToMove`.
   - To prevent moving genuine content sections (such as pages 303-310 of `ch16`), check that `pagesToMove.length <= 4`. Valid cover/syllabus/blank blocks are always 1 to 4 pages long. Real content extensions are much larger (e.g., 8 pages for `ch16`).
   - If `pagesToMove.length <= 4`, cut these pages from `currentCh` and prepend them to the beginning of the `nextCh` content list.

## 3. Caveats
- This solution assumes that `data.js` remains structured with `APP_DATA` as a global variable.
- Any change in the outline text of the chapters in subsequent updates of `data.js` could break the outline string substring match. However, the `stnioP` fallback with the page-length check provides a robust second layer of defense.
- `ch17` has page 330 (blank) moved to `ch18`. This is correct as page 330 is after `stnioP` (page 328) and is a blank page guard.

## 4. Conclusion & Proposed Strategy
The recommended strategy is to implement `preprocessAppData()` inside `app.js` and invoke it at the start of the `DOMContentLoaded` event handler.

### Proposed Code Snippets for `app.js`

**Step A**: Insert `preprocessAppData();` at the beginning of the `DOMContentLoaded` event listener:
```javascript
// app.js (around line 9)
document.addEventListener('DOMContentLoaded',()=>{
  preprocessAppData(); // Call R1 alignment preprocessing first
  setFS(S.fs);setLH(S.lh,true);
  ...
```

**Step B**: Implement `preprocessAppData` at the end of `app.js` (or before the DOMContentLoaded listener):
```javascript
// ── PDF Chapter Boundary Alignment Preprocessing (Requirement R1) ──
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
  if (typeof APP_DATA === 'undefined' || !APP_DATA.chapters || !APP_DATA.content) return;
  const chapters = APP_DATA.chapters;
  const content = APP_DATA.content;

  for (let i = 0; i < chapters.length - 1; i++) {
    const currentCh = chapters[i];
    const nextCh = chapters[i + 1];

    const currentPages = content[currentCh.id] || [];
    if (currentPages.length === 0) continue;

    let splitIndex = -1;

    // 1. Search for the next chapter's outline title in the first 250 characters of pages in the second half of current pages
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

    // 2. Fallback: Search for stnioP (end of Points clés) in the second half of pages
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

    // 3. Perform split and shift pages
    if (splitIndex !== -1) {
      let finalSplitIndex = splitIndex;
      // Walk back to include immediately preceding blank pages / page guards
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
        // Enforce max block length of 4 pages to avoid moving genuine content sections (e.g. ch16 psychotropes/transfusions)
        if (pagesToMove.length <= 4) {
          const keptPages = currentPages.slice(0, finalSplitIndex);
          content[currentCh.id] = keptPages;
          content[nextCh.id] = [...pagesToMove, ...(content[nextCh.id] || [])];
        }
      }
    }
  }
}
```

## 5. Verification Method
To verify that this strategy resolves Requirement R1 correctly:
1. **Dry-Run Script**: Run the test script `C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\.agents\explorer_m1_1\test_preprocess.js` via Node.js:
   `node C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\.agents\explorer_m1_1\test_preprocess.js`
   This will output the comparison of page lists before and after preprocessing.
2. **Page Boundaries Invalidation Check**:
   - Confirm that `ch1` ends on page `41`, and page `43` is successfully moved to the start of `ch2`.
   - Confirm that `ch6` ends on page `116` and pages `[117, 118, 119]` are moved to `ch7`.
   - Confirm that `ch12` ends on page `223` and pages `[224, 225, 226, 227]` are moved to `ch13`.
   - Confirm that `ch16` page list continues to contain pages `[303..310]` (they should NOT be moved).
