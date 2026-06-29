# Synthesis: PDF Chapter Boundary Alignment (Milestone M1)

We have synthesized the findings of the three Explorer subagents. The consensus design for Requirement R1 is detailed below.

## 1. Detection and Splitting Algorithm

The preprocessor `preprocessAppData()` will execute at startup to realign pages that were misallocated to the end of the previous chapter during extraction.

### Core Logic:
For each chapter `i` from 0 to `chapters.length - 2` (ignoring the last chapter, `ch20`):
1. Let `pages` be the array of pages in chapter `ch[i]`.
2. Let `nextPages` be the array of pages in chapter `ch[i+1]`.
3. Let `nextFirstPageNum` be the page number of `nextPages[0]`.
4. Scan from the midpoint `Math.floor(pages.length / 2)` to the end of `pages`:
   - **Detection A ('stnioP')**: Search for the exact string `'stnioP'` (case-sensitive) in the page text. If found at page index `idx`, then the candidate split index is `idx + 1`.
   - **Detection B (Fallback Title)**: Normalize the next chapter title `ch[i+1].t` and search for it in the normalized text of the page. If found at page index `idx`, then the candidate split index is `idx`.
5. **Backwards Expansion for Blank Pages**:
   - If a candidate split index is found, walk backwards. If the page immediately preceding it contains `"this page intentionally left blank"` (case-insensitive), decrement the split index. Repeat until no more preceding blank pages are found.
6. **Validation Gating**:
   - Let the block of pages from the split index to the end of the chapter be `pagesToMove`.
   - **Gap Check**: Calculate `pageGap = nextFirstPageNum - lastPageOf(pagesToMove)`. The split is only valid if `pageGap > 0 && pageGap <= 2`. (For `ch16 -> ch17`, the gap is 9, which correctly prevents splitting).
   - **Size Check**: The length of `pagesToMove` must be small (`<= 4` pages) to prevent moving large valid content sections.
   - **Non-Blank Content Check**: The block must contain at least one non-blank page (to avoid moving lone blank pages).
7. **Action**: If all validation checks pass:
   - Slice `pagesToMove` from `ch[i]`.
   - Prepend `pagesToMove` to `ch[i+1]`.

## 2. Code Integrations

### A. Inside `app.js`
Place the `preprocessAppData()` function definition in `app.js`.
Call it at the very beginning of the `DOMContentLoaded` listener in `app.js`:
```javascript
document.addEventListener('DOMContentLoaded',()=>{
  preprocessAppData();
  setFS(S.fs);setLH(S.lh,true);
  ...
```

To support offline node VM environments (like `verify-all-chapters.js`) which slice `app.js` but do not run `DOMContentLoaded`, we define `preprocessAppData` inside the sliced block (between `const RUN_HDR_RE` and `function applyConceptLinks`).
At the bottom of `preprocessAppData` definition (or right after it inside the slice), run it immediately if in a Node environment:
```javascript
if (typeof APP_DATA !== 'undefined' && (typeof document === 'undefined' || !document.getElementById)) {
  preprocessAppData();
}
```

### B. Inside Audit Scripts (`audit_deep.js`, `audit_empty.js`, etc.)
In each of the audit scripts running the entire `app.js` in a `vm` context, invoke `preprocessAppData` on the context:
```javascript
const context = vm.createContext(sandbox);
vm.runInContext(dataSrc, context);
vm.runInContext(appSrc, context);
vm.runInContext('preprocessAppData()', context); // Run preprocessor
```
Also, fix any hardcoded paths to use relative paths (e.g. removing `process.chdir('C:/Users/tokin/Downloads/GeriatrieApp')` or replacing it with relative/dynamic directory setting).
