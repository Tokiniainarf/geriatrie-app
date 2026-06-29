# Handoff Report: PDF Chapter Boundary Alignment (Requirement R1)

## 1. Observation

Direct observations from `app.js` and `data.js` indicate how the chapters and page ranges are structured, and how the boundary overlap occurs.

### A. Structure of APP_DATA in `data.js`
In `data.js`, the global variable `APP_DATA` is structured as follows:
- `APP_DATA.chapters` is an array of chapter metadata objects, e.g.:
  ```javascript
  {"id":"ch1","t":"Comprendre le vieillissement","items":["ITEM 123"],"part":1}
  ```
- `APP_DATA.content` is an object where keys are chapter IDs and values are arrays of page arrays:
  ```javascript
  "ch1": [
    [29, "Comprendre\nle vieillissement\n..."],
    [30, "Connaissances\n..."],
    ...
    [41, "... • maintien ou reprise d'une activité physique adaptée.\nstnioP"],
    [42, "This page intentionally left blank"],
    [43, "Appréhender la complexité\ndu patient âgé\nI. Particularités cliniques..."]
  ]
  ```
- Each page is a 2-element array: `[pageNumber, pageText]`.

### B. Chapter 1 to Chapter 2 Misalignment
In `data.js`:
- `APP_DATA.content.ch1` contains Page 41, Page 42, and Page 43.
- Page 41 ends with `"stnioP"`.
- Page 42 is `"This page intentionally left blank"`.
- Page 43 is the cover/outline page of Chapter 2 (starts with `"Appréhender la complexité du patient âgé"`).
- `APP_DATA.content.ch2` starts with Page 44: `"Connaissances\nRang Rubrique..."`.
Thus, pages 42 and 43 belong to Chapter 2 but are stored in Chapter 1.

### C. Chapter 16 to Chapter 17 Boundary (No Misalignment)
In `data.js`:
- `APP_DATA.content.ch16` contains Page 302 with `"stnioP"` at index 20 (out of 29 pages total).
- However, pages 303 to 310 contain content for Chapter 16 (e.g. psychotropes, transfusions).
- `APP_DATA.content.ch17` starts with Page 319 ("Prendre une décision de soins palliatifs...").
- There is a gap of 9 page numbers (311 to 318) between `ch16`'s last page (310) and `ch17`'s first page (319).
This confirms that not all `'stnioP'` occurrences in the second half denote a misplaced block (specifically, Chapter 16 should not be split).

### D. Missing / Skipped Blank Pages
In `data.js`, we observe:
- `ch8` ends with page 153. `ch9` starts with page 155 (Page 154 is missing).
- `ch9` ends with page 177. `ch10` starts with page 179 (Page 178 is missing).
- `ch11` ends with page 207. `ch12` starts with page 209 (Page 208 is missing).
In these cases, the gap between the last page of chapter $i$ and the first page of chapter $i+1$ is exactly 2, due to omitted blank pages. For all other valid transitions, the gap is exactly 1.

---

## 2. Logic Chain

1. **Premise**: Pages at the end of chapter $i$ are misplaced if they actually represent the outline or guard pages of chapter $i+1$.
2. **Identification via `'stnioP'`**: The keyword `'stnioP'` (the word "Points" spelled backward) indicates the end of a chapter's actual content. Therefore, if `'stnioP'` is found on a page in the second half of chapter $i$, all pages following it are candidates to be moved.
3. **Identification via Title Fallback**: For chapters 18 and 19 (which do not contain `'stnioP'`), the boundary starts at the page containing the next chapter's simplified title (normalized to ignore casing and accents). If a page immediately preceding it is a blank page guard (`"This page intentionally left blank"`), that page is also included in the block.
4. **Validation via Page Continuity (The Gap Check)**: A potential misplaced block is only valid if the last page number in the block is continuous with the first page number of the next chapter.
   - For valid transitions, the gap `nextFirstPageNum - lastPageNum` is either 1 or 2 (due to omitted blank pages).
   - For `ch16 -> ch17` (where there are no misplaced pages), the gap is 9.
   - Therefore, a candidate block should only be split and moved if the page gap is between 1 and 2 (`gap > 0 && gap <= 2`).
5. **Validation via Non-Blank Content**: To avoid moving lone blank pages (like Page 330 in `ch17`), the candidate block must contain at least one page that is not blank (i.e. not empty and not `"This page intentionally left blank"`).
6. **Execution**: The candidate block is sliced from `APP_DATA.content[chId]` and prepended to `APP_DATA.content[nextChId]`.

---

## 3. Caveats

- **Assumptions**: We assume the structure of `APP_DATA` in `data.js` remains unchanged (an object containing arrays of `[pageNumber, pageText]`).
- **Chapter 20**: Since there is no Chapter 21, the last chapter (`ch20`) is naturally skipped.
- **Service Worker / Cache**: Since the data is loaded in `app.js`, modifying `APP_DATA` in memory at `DOMContentLoaded` is safe and does not alter the source file `data.js`.

---

## 4. Conclusion & Proposed Strategy

To fulfill Requirement R1, we recommend implementing the function `preprocessAppData()` in `app.js` and calling it at the start of the `DOMContentLoaded` event listener (before any render functions like `renderHome()` are executed).

### Proposed Code Changes in `app.js`

#### A. Preprocessor Implementation
Add the following function definition to `app.js`:

```javascript
/* ── PREPROCESS APP DATA (Requirement R1) ── */
function preprocessAppData() {
  const chapters = APP_DATA.chapters;
  const normalize = s => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  for (let i = 0; i < chapters.length - 1; i++) {
    const ch = chapters[i];
    const nextCh = chapters[i + 1];
    const pages = APP_DATA.content[ch.id];
    const nextPages = APP_DATA.content[nextCh.id];
    
    if (!pages || pages.length === 0 || !nextPages || nextPages.length === 0) continue;
    
    const nextFirstPageNum = nextPages[0][0];
    let splitIdx = -1;
    const mid = Math.floor(pages.length / 2);

    // 1. Detect boundary using 'stnioP'
    for (let idx = pages.length - 1; idx >= mid; idx--) {
      if (pages[idx][1].includes('stnioP')) {
        splitIdx = idx + 1;
        break;
      }
    }

    // 2. Validate 'stnioP' candidate block
    if (splitIdx !== -1 && splitIdx < pages.length) {
      const candidateBlock = pages.slice(splitIdx);
      const hasNonBlank = candidateBlock.some(p => {
        const text = p[1].trim();
        return text && text !== 'This page intentionally left blank';
      });
      
      if (hasNonBlank) {
        const lastPageNum = pages[pages.length - 1][0];
        const pageGap = nextFirstPageNum - lastPageNum;
        if (pageGap > 0 && pageGap <= 2) {
          const misplacedBlock = pages.slice(splitIdx);
          APP_DATA.content[ch.id] = pages.slice(0, splitIdx);
          APP_DATA.content[nextCh.id] = misplacedBlock.concat(nextPages);
          continue;
        }
      }
    }

    // 3. Fallback: Detect boundary using next chapter title (ch18/ch19)
    const nextTitleClean = normalize(nextCh.t);
    for (let idx = mid; idx < pages.length; idx++) {
      const pageTextClean = normalize(pages[idx][1]);
      if (pageTextClean.includes(nextTitleClean)) {
        const lastPageNum = pages[pages.length - 1][0];
        const pageGap = nextFirstPageNum - lastPageNum;
        if (pageGap > 0 && pageGap <= 2) {
          let fallbackSplitIdx = idx;
          if (idx > 0 && pages[idx - 1][1].includes('This page intentionally left blank')) {
            fallbackSplitIdx = idx - 1;
          }
          const misplacedBlock = pages.slice(fallbackSplitIdx);
          APP_DATA.content[ch.id] = pages.slice(0, fallbackSplitIdx);
          APP_DATA.content[nextCh.id] = misplacedBlock.concat(nextPages);
          break;
        }
      }
    }
  }
}
```

#### B. Execution Hook in `DOMContentLoaded`
Modify the `DOMContentLoaded` event listener in `app.js` as follows:

```javascript
// Before:
document.addEventListener('DOMContentLoaded',()=>{
  setFS(S.fs);setLH(S.lh,true);
  ...
  renderHome();renderSynthesis();renderItems();renderFav();shuffleFlash();updStats();
  ...
});

// After:
document.addEventListener('DOMContentLoaded',()=>{
  preprocessAppData(); // Call the preprocessor first to align boundaries
  setFS(S.fs);setLH(S.lh,true);
  ...
  renderHome();renderSynthesis();renderItems();renderFav();shuffleFlash();updStats();
  ...
});
```

---

## 5. Verification Method

To verify the implementation independently, run a test script that:
1. Loads `data.js` and the modified `app.js`.
2. Calls `preprocessAppData()`.
3. Verifies that the final first/last page numbers for each chapter exactly match the expected aligned page ranges:
   - `ch1`: 29–41
   - `ch2`: 42–56
   - `ch3`: 57–72
   - `ch4`: 73–83
   - `ch5`: 84–97
   - `ch6`: 98–116
   - `ch7`: 117–140
   - `ch8`: 141–152
   - `ch9`: 153–175
   - `ch10`: 176–189
   - `ch11`: 190–206
   - `ch12`: 207–223
   - `ch13`: 224–245
   - `ch14`: 246–266
   - `ch15`: 267–279
   - `ch16`: 280–310
   - `ch17`: 319–330
   - `ch18`: 332–352
   - `ch19`: 353–359
   - `ch20`: 360–385
4. Verifies that running verification scripts like `node verify-all-chapters.js` succeeds and produces no rendering issues.
