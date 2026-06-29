# 5-Component Handoff Report

## 1. Observation
We observed that `app.js` defines the preprocessing function `preprocessAppData` at lines 297-370. It does not accept any arguments and directly mutates the global `APP_DATA` object:
```javascript
function preprocessAppData(){
  if (typeof APP_DATA === 'undefined' || !APP_DATA.chapters || !APP_DATA.content) return;
  const normalize = s => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]/g,'');
  const chapters = APP_DATA.chapters;
```

We also observed that the project's E2E test suite in `tests/run-e2e.js` attempts to test the preprocessor by passing a local `dummyData` object:
```javascript
vm.runInContext('preprocessAppData(' + JSON.stringify(dummyData) + ')', context);
```
This is incorrect because the function ignores parameters. Furthermore, the test runner's dummy data objects (e.g., for TC-24, TC-27) do not define the target chapter's key (e.g. `ch_dummy2`) in `content`, which would trigger a `continue` (skip) anyway:
```javascript
const nextPages = APP_DATA.content[nextChId];
if (!pages || !pages.length || !nextPages || !nextPages.length) {
  continue;
}
```

## 2. Logic Chain
1. **Argument Ignored**: Since `preprocessAppData` lacks parameters and refers only to the global `APP_DATA` variable inside `context`, passing a serialized `dummyData` object into `preprocessAppData(...)` executes the function on the global `APP_DATA` loaded from `data.js` instead. The local `dummyData` in `tests/run-e2e.js` is never modified, causing test assertions (like TC-24, TC-26, TC-27) to fail (e.g. `3 !== 1`).
2. **Empty Chapter Risk**: For a chapter with 1 page:
   - `Math.floor(1 / 2) = 0`. The fallback title loop scans index 0. If that page contains the next chapter's title, it matches (`candidate = 0`).
   - The validation checks if `candidate < pages.length` (`0 < 1` is true). If the other criteria (gap, size, non-blank) are met, it performs `pages.splice(0)`.
   - This completely empties the current chapter, moving its only page to the next chapter.
3. **Empty & Non-Alphanumeric Title Vulnerability**:
   - If a chapter title is empty `""` or contains only non-alphanumeric characters (like `"???"` or `"--"`), the normalized representation `normTitle` is `""`.
   - The method checks `normalize(pages[idx][1]).includes("")`, which is always `true`.
   - It will match the first page of the second half of pages, causing a false positive chapter boundary shift.
4. **Short Title False Positives**:
   - If the next chapter has a short title like `"A"`, it normalizes to `"a"`.
   - Since almost any French/English page text contains the letter `"a"`, `normalize(pages[idx][1]).includes("a")` will match immediately on the first page scanned, causing a false positive shift.
5. **Multiple `stnioP` Priority Bug**:
   - The loop for `stnioP` detection scans forward from `Math.floor(pages.length / 2)` and breaks on the first match.
   - If there are multiple `stnioP` markers in the second half, the preprocessor will split after the *first* one encountered (earliest page), which violates the requirement/expectation of splitting after the *last* `stnioP` marker.
6. **Non-Idempotency Risk**:
   - Running the preprocessor twice is not idempotent. Splicing pages from a chapter changes its length and content.
   - On a second run, shifting boundaries (`Math.floor(pages.length / 2)`) can cause different parts of the chapter to be scanned, and any false positive triggers (like short titles) might shift even more pages, progressively emptying chapters.

## 3. Caveats
No caveats. All findings are derived directly from static code analysis of `app.js` and confirmed by structural defects in the E2E test suite.

## 4. Conclusion
The PDF chapter boundary preprocessor in `app.js` has several critical design flaws:
1. It does not support arguments, which breaks isolated unit testing.
2. It can completely empty a single-page chapter if it matches the fallback title.
3. It has no protection against empty or extremely short titles (like `"A"`), leading to false positive page shifts.
4. It fails to prioritize the last `stnioP` when multiple markers are present.
5. It is not idempotent and multiple executions can cause corruptions/data drift.

## 5. Verification Method
- **Verify using stress test script**:
  Run `node tests/stress_preprocess.js` inside the project directory. The script uses isolated VM contexts with mocked global `APP_DATA` variables to test each boundary case and asserts correct/incorrect behaviors.
- **Inspect codebase**:
  Open `app.js` and view lines 297-370 to verify the loop structure, parameter omission, and fallback title checks.
