# Handoff Report: PDF Chapter Boundary Alignment Strategy (Requirement R1)

## 1. Observation
- In `data.js`, `APP_DATA.content` maps chapter IDs (like `"ch1"`) to arrays of page tuples `[pageNum, pageText]`.
- For `ch1` (Comprendre le vieillissement):
  - Page 41 text ends with `"stnioP"` (reversed spelling of `"Points"` or `"Points clés"`).
  - Page 42 text is `"This page intentionally left blank"`.
  - Page 43 text begins with `"Appréhender la complexité\ndu patient âgé"`, which corresponds to the start of Chapter 2.
  - Page 44 is the first page of the `ch2` array in `data.js`.
- In `ch16` (Prescrire chez le patient âgé):
  - Page 302 text contains `"stnioP"`.
  - Pages after page 302 (pages 303 to 310) belong to `ch16` (e.g. Page 307 has header `"Apprendre à prescrire chez le patient âgé"`).
  - `ch17` starts at page 319. There is no `ch17` content at the end of `ch16`.
- For `ch18` (Mini-dossiers progressifs) and `ch19` (Key-features problems):
  - No page ends with `"stnioP"`.
  - The last page of `ch18` (page 353) contains the title of `ch19` (`"Key-features problems"`).
  - The last page of `ch19` (page 361) contains the title of `ch20` (`"Questions isolées"`).
- In `app.js`, the app initializes on the `DOMContentLoaded` event (lines 9-21) where functions like `renderHome()` are executed.
- The offline test scripts `verify-all-chapters.js` and `verify-ch1.js` extract only `renderChapter` from `app.js` using `vm.runInNewContext`.

---

## 2. Logic Chain
1. **Misaligned Content Nature**: Next-chapter pages (page guards, outlines, syllabus tables) are mistakenly attached to the end of chapter $i$. This represents a slice of page arrays at the end of `APP_DATA.content[chId]`.
2. **Transition Detection**:
   - In content chapters (1-17), the end of the chapter's actual text is marked by `"stnioP"` at the end of the page. The transition boundary is at the page following the `"stnioP"` page (i.e. `stnioPIdx + 1`).
   - In evaluation chapters (18-19), the transition is marked by the presence of the next chapter's title on the page itself (i.e. `titleIdx`).
3. **False Positive Prevention**: `ch16` contains a false positive `"stnioP"` match on page 302, which is not the end of the chapter. To prevent cutting valid pages, the proposed block to cut must be validated by ensuring it contains actual next-chapter indicators (like the next chapter's title, page guards, or item numbers).
4. **Pre-render Processing**: Implementing a `preprocessAppData()` function that runs first in the `DOMContentLoaded` callback allows us to restructure `APP_DATA` in-place prior to UI rendering.
5. **Offline Test Support**: Because offline tests extract only `renderChapter` and run on the raw `data.js` file, we must also execute `preprocessAppData()` inside `verify-all-chapters.js` and `verify-ch1.js` to ensure the offline tests remain green.

---

## 3. Caveats
- The splitting logic assumes that `APP_DATA` in `data.js` remains loaded as a mutable global object.
- The next-chapter title matching ignores accents and case differences using `.normalize('NFD').replace(/[\u0300-\u036f]/g,'')` to handle discrepancies between metadata titles and OCR text.

---

## 4. Conclusion
We recommend implementing a JavaScript-based preprocessing strategy. Below is the proposed function `preprocessAppData()` to be placed in `app.js` and called as the first line of the `DOMContentLoaded` event listener:

### Proposed Code for `app.js`

```javascript
function preprocessAppData() {
  if (typeof APP_DATA === 'undefined' || !APP_DATA.chapters || !APP_DATA.content) return;

  const clean = str => str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const chapters = APP_DATA.chapters;

  for (let i = 0; i < chapters.length - 1; i++) {
    const ch = chapters[i];
    const nextCh = chapters[i + 1];

    const pages = APP_DATA.content[ch.id];
    if (!pages || pages.length < 2) continue;

    let splitIdx = -1;
    let stnioPIdx = -1;
    let titleOrGuardIdx = -1;

    const half = Math.floor(pages.length / 2);
    
    // 1. Scan for stnioP in the second half of the text
    for (let p = half; p < pages.length; p++) {
      if (pages[p][1].includes("stnioP")) {
        stnioPIdx = p;
        break;
      }
    }

    // 2. Scan for next chapter title, outline, or page guards in the second half
    const nextTitleClean = clean(nextCh.t);
    const nextTitleWords = nextTitleClean.split(/[\s'-]+/).filter(w => w.length > 2);

    for (let p = half; p < pages.length; p++) {
      const pageText = pages[p][1];
      const textClean = clean(pageText);

      // Page guard check
      if (pageText.includes("This page intentionally left blank")) {
        titleOrGuardIdx = p;
        break;
      }

      // Next chapter title check (substring)
      if (nextTitleClean.length >= 5 && (textClean.includes(nextTitleClean.substring(0, 15)) || textClean.includes(nextTitleClean))) {
        titleOrGuardIdx = p;
        break;
      }

      // Key words in the first few lines check (robust for outline pages)
      const firstLines = clean(pageText.split('\n').slice(0, 5).join(' '));
      const matchingWords = nextTitleWords.filter(w => firstLines.includes(w));
      if (nextTitleWords.length > 0 && matchingWords.length === nextTitleWords.length) {
        titleOrGuardIdx = p;
        break;
      }

      // Next chapter items check (syllabus table outline)
      if (nextCh.items && nextCh.items.length > 0) {
        let foundItem = false;
        for (const item of nextCh.items) {
          const itemNum = item.replace(/[^\d]/g, '');
          if (itemNum && pageText.includes(`ITEM ${itemNum}`)) {
            titleOrGuardIdx = p;
            foundItem = true;
            break;
          }
        }
        if (foundItem) break;
      }
    }

    // Determine candidate split index
    if (stnioPIdx !== -1) {
      splitIdx = stnioPIdx + 1;
    } else if (titleOrGuardIdx !== -1) {
      splitIdx = titleOrGuardIdx;
    }

    // 3. Validation phase to prevent false positives (like ch16)
    if (splitIdx !== -1 && splitIdx < pages.length) {
      const cutBlock = pages.slice(splitIdx);
      const cutTextCombined = clean(cutBlock.map(p => p[1]).join('\n'));
      let isValidSplit = false;

      // Validator A: Page guard
      if (cutTextCombined.includes("this page intentionally left blank")) {
        isValidSplit = true;
      }
      
      // Validator B: Title substring match
      if (nextTitleClean.length >= 5 && (cutTextCombined.includes(nextTitleClean.substring(0, 15)) || cutTextCombined.includes(nextTitleClean))) {
        isValidSplit = true;
      }

      // Validator C: Key title words match
      const matchingWordsCut = nextTitleWords.filter(w => cutTextCombined.includes(w));
      if (nextTitleWords.length > 0 && matchingWordsCut.length >= Math.min(2, nextTitleWords.length)) {
        isValidSplit = true;
      }

      // Validator D: Item numbers match
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
        splitIdx = -1;
      }
    }

    // 4. Apply split: Cut from current and prepend to next
    if (splitIdx !== -1 && splitIdx < pages.length) {
      const moved = pages.slice(splitIdx);
      APP_DATA.content[ch.id] = pages.slice(0, splitIdx);
      APP_DATA.content[nextCh.id] = moved.concat(APP_DATA.content[nextCh.id] || []);
    }
  }
}
```

### Proposed modifications to `app.js` line 9:
```javascript
document.addEventListener('DOMContentLoaded',()=>{
  preprocessAppData(); // Align chapter boundaries
  setFS(S.fs);setLH(S.lh,true);
  ...
```

### Proposed modifications to verification scripts (`verify-all-chapters.js` / `verify-ch1.js`):
Include the `preprocessAppData()` function text in the file execution stream or evaluate it in VM, then call it on the parsed `APP_DATA` before checks are run. E.g.:
```javascript
vm.runInNewContext(fs.readFileSync('data.js','utf8').replace(/const APP_DATA/,'APP_DATA'), sb);
// evaluate preprocessAppData in context:
vm.runInNewContext('(' + preprocessAppData.toString() + ')()', sb);
```

---

## 5. Verification Method
1. **Manual Inspection**: Open `data.js` and confirm the alignment of pages.
2. **Execute Tests**:
   - Save the proposed code to `app.js`.
   - Update `verify-all-chapters.js` with the preprocessor execution as suggested.
   - Run the command:
     ```bash
     node verify-all-chapters.js
     ```
   - Verify that all chapters are reported as `OK` with zero issues.
3. **Browser check**:
   - Open `index.html` in the browser.
   - Navigate to Chapter 1.
   - Scroll to the bottom and ensure Chapter 2's syllabus does not show up at the end of Chapter 1.
   - Navigate to Chapter 2. Ensure it now has its syllabus table at the start.
