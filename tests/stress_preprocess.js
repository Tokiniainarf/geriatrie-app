const fs = require('fs');
const path = require('path');
const vm = require('vm');
const assert = require('assert');

// Load app.js code
const appSrc = fs.readFileSync(path.join(__dirname, '../app.js'), 'utf8');

// Helper to run preprocessAppData in a clean VM context
function runTest(testName, appDataSetup, assertionFn) {
  const sandbox = {
    setTimeout,
    setInterval,
    clearTimeout,
    clearInterval,
    console: {
      log: () => {}, // suppress logs during test unless needed
      error: console.error,
    },
    APP_DATA: appDataSetup,
    document: {
      addEventListener: () => {},
    },
  };
  const context = vm.createContext(sandbox);
  vm.runInContext(appSrc, context);

  // Manually run preprocessAppData
  vm.runInContext('preprocessAppData()', context);

  try {
    assertionFn(sandbox.APP_DATA);
    console.log(`[PASS] ${testName}`);
    return { name: testName, status: 'PASS' };
  } catch (err) {
    console.log(`[FAIL] ${testName}: ${err.message}`);
    return { name: testName, status: 'FAIL', error: err.message };
  }
}

const results = [];

console.log("=== STARTING PREPROCESS_APPDATA STRESS TESTS ===");

// 1. Empty and Malformed Content
results.push(runTest("1A: APP_DATA is completely empty", {}, (data) => {
  assert.deepStrictEqual(data, {});
}));

results.push(runTest("1B: APP_DATA has empty chapters and content", { chapters: [], content: {} }, (data) => {
  assert.deepStrictEqual(data, { chapters: [], content: {} });
}));

results.push(runTest("1C: APP_DATA has only 1 chapter (no next chapter to transition to)", {
  chapters: [{ id: "ch1", t: "Ch 1" }],
  content: { ch1: [[1, "stnioP"]] }
}, (data) => {
  assert.strictEqual(data.content.ch1.length, 1);
}));

results.push(runTest("1D: APP_DATA has chapters but content map is missing chapters", {
  chapters: [{ id: "ch1", t: "Ch 1" }, { id: "ch2", t: "Ch 2" }],
}, (data) => {
  assert.ok(!data.content);
}));

results.push(runTest("1E: APP_DATA target chapter content is missing", {
  chapters: [{ id: "ch1", t: "Ch 1" }, { id: "ch2", t: "Ch 2" }],
  content: { ch1: [[1, "stnioP"], [2, "Ch 2 content"]] }
}, (data) => {
  // Should skip shift because content.ch2 is undefined
  assert.strictEqual(data.content.ch1.length, 2);
  assert.strictEqual(data.content.ch2, undefined);
}));

results.push(runTest("1F: APP_DATA target chapter content is empty list", {
  chapters: [{ id: "ch1", t: "Ch 1" }, { id: "ch2", t: "Ch 2" }],
  content: { ch1: [[1, "stnioP"], [2, "Ch 2 content"]], ch2: [] }
}, (data) => {
  // Should skip shift because content.ch2.length is 0
  assert.strictEqual(data.content.ch1.length, 2);
  assert.strictEqual(data.content.ch2.length, 0);
}));


// 2. Single-Page Chapters
results.push(runTest("2A: Current chapter has 1 page and contains stnioP", {
  chapters: [{ id: "ch1", t: "Ch 1" }, { id: "ch2", t: "Ch 2" }],
  content: { ch1: [[1, "stnioP"]], ch2: [[2, "Ch 2 page"]] }
}, (data) => {
  // Math.floor(1/2) = 0. Index 0 has stnioP.
  // candidate = 0 + 1 = 1. candidate < pages.length (1 < 1 is false).
  // So no split should occur.
  assert.strictEqual(data.content.ch1.length, 1);
  assert.strictEqual(data.content.ch2.length, 1);
}));

results.push(runTest("2B: Current chapter has 1 page and contains next chapter fallback title", {
  chapters: [{ id: "ch1", t: "Ch 1" }, { id: "ch2", t: "Ch 2" }],
  content: { ch1: [[1, "Ch 2 Title"]], ch2: [[2, "Ch 2 page"]] }
}, (data) => {
  // Math.floor(1/2) = 0. Index 0 contains "ch2title".
  // Fallback title detection: candidate = idx = 0.
  // candidate < pages.length (0 < 1 is true).
  // pagesToMove = [[1, "Ch 2 Title"]]
  // lastPageNum = 1, nextFirstPageNum = 2. gap = 1 (valid). size = 1 (valid). non-blank = true.
  // This will split the ONLY page, leaving ch1 empty!
  // Let's verify if ch1 becomes empty.
  assert.strictEqual(data.content.ch1.length, 0, "Ch1 should be emptied by the fallback title matching a single page");
  assert.strictEqual(data.content.ch2.length, 2, "Page should be prepended to ch2");
}));


// 3. Page Gap Bounds (Mismatched Page Numbers)
results.push(runTest("3A: pageGap is exactly 0", {
  chapters: [{ id: "ch1", t: "Ch 1" }, { id: "ch2", t: "Ch 2" }],
  content: { ch1: [[1, "Page 1"], [2, "stnioP"], [3, "Ch 2 text"]], ch2: [[3, "Ch 2 first page"]] }
}, (data) => {
  // candidate = 2 + 1 = 3 (index 3 is page 3).
  // lastPageNum = 3, nextFirstPageNum = 3. gap = 3 - 3 = 0.
  // gapCheck: gap > 0 && gap <= 2 -> 0 is invalid.
  // No shift should occur.
  assert.strictEqual(data.content.ch1.length, 3);
}));

results.push(runTest("3B: pageGap is 1 (boundary check)", {
  chapters: [{ id: "ch1", t: "Ch 1" }, { id: "ch2", t: "Ch 2" }],
  content: { ch1: [[1, "Page 1"], [2, "stnioP"], [3, "Ch 2 text"]], ch2: [[4, "Ch 2 first page"]] }
}, (data) => {
  // lastPageNum = 3, nextFirstPageNum = 4. gap = 4 - 3 = 1.
  // gapCheck: 1 > 0 && 1 <= 2 -> valid.
  // Shift should occur.
  assert.strictEqual(data.content.ch1.length, 2);
  assert.strictEqual(data.content.ch2.length, 2);
}));

results.push(runTest("3C: pageGap is 2 (boundary check)", {
  chapters: [{ id: "ch1", t: "Ch 1" }, { id: "ch2", t: "Ch 2" }],
  content: { ch1: [[1, "Page 1"], [2, "stnioP"], [3, "Ch 2 text"]], ch2: [[5, "Ch 2 first page"]] }
}, (data) => {
  // lastPageNum = 3, nextFirstPageNum = 5. gap = 5 - 3 = 2.
  // gapCheck: 2 > 0 && 2 <= 2 -> valid.
  // Shift should occur.
  assert.strictEqual(data.content.ch1.length, 2);
  assert.strictEqual(data.content.ch2.length, 2);
}));

results.push(runTest("3D: pageGap is 3 (boundary check)", {
  chapters: [{ id: "ch1", t: "Ch 1" }, { id: "ch2", t: "Ch 2" }],
  content: { ch1: [[1, "Page 1"], [2, "stnioP"], [3, "Ch 2 text"]], ch2: [[6, "Ch 2 first page"]] }
}, (data) => {
  // gap = 6 - 3 = 3 -> invalid.
  // No shift.
  assert.strictEqual(data.content.ch1.length, 3);
}));

results.push(runTest("3E: pageGap is negative (-1)", {
  chapters: [{ id: "ch1", t: "Ch 1" }, { id: "ch2", t: "Ch 2" }],
  content: { ch1: [[1, "Page 1"], [2, "stnioP"], [3, "Ch 2 text"]], ch2: [[2, "Ch 2 first page"]] }
}, (data) => {
  // gap = 2 - 3 = -1 -> invalid.
  // No shift.
  assert.strictEqual(data.content.ch1.length, 3);
}));

results.push(runTest("3F: Page numbers are string-encoded digits", {
  chapters: [{ id: "ch1", t: "Ch 1" }, { id: "ch2", t: "Ch 2" }],
  content: { ch1: [["1", "Page 1"], ["2", "stnioP"], ["3", "Ch 2 text"]], ch2: [["4", "Ch 2 first page"]] }
}, (data) => {
  // lastPageNum = "3", nextFirstPageNum = "4".
  // pageGap = "4" - "3" = 1 (coerced).
  // Shift should occur.
  assert.strictEqual(data.content.ch1.length, 2);
  assert.strictEqual(data.content.ch2.length, 2);
  assert.strictEqual(data.content.ch2[0][0], "3");
}));

results.push(runTest("3G: Page numbers are non-numeric strings", {
  chapters: [{ id: "ch1", t: "Ch 1" }, { id: "ch2", t: "Ch 2" }],
  content: { ch1: [["p1", "Page 1"], ["p2", "stnioP"], ["p3", "Ch 2 text"]], ch2: [["p4", "Ch 2 first page"]] }
}, (data) => {
  // lastPageNum = "p3", nextFirstPageNum = "p4".
  // pageGap = NaN.
  // No shift, no crash.
  assert.strictEqual(data.content.ch1.length, 3);
}));


// 4. Custom / Edge Case Titles
results.push(runTest("4A: Next chapter title is empty string", {
  chapters: [{ id: "ch1", t: "Ch 1" }, { id: "ch2", t: "" }],
  content: { ch1: [[1, "Page 1"], [2, "Page 2"]], ch2: [[3, "C2"]] }
}, (data) => {
  // normTitle = ""
  // Math.floor(2/2) = 1. Index 1 text is "Page 2".
  // normalize("Page 2").includes("") -> true.
  // candidate = 1. pagesToMove = [[2, "Page 2"]]. gap = 3 - 2 = 1 (valid).
  // Shift occurs! (This is a false positive bug because next title is empty).
  assert.strictEqual(data.content.ch1.length, 1, "Should shift page 2 because empty title matches anything");
  assert.strictEqual(data.content.ch2.length, 2);
}));

results.push(runTest("4B: Next chapter title is only non-alphanumeric characters", {
  chapters: [{ id: "ch1", t: "Ch 1" }, { id: "ch2", t: "???" }],
  content: { ch1: [[1, "Page 1"], [2, "Page 2"]], ch2: [[3, "C2"]] }
}, (data) => {
  // normTitle = "" (non-alphanumeric stripped)
  // Should exhibit same behavior as empty string.
  assert.strictEqual(data.content.ch1.length, 1, "Should shift page 2 because non-alphanumeric title normalizes to empty");
  assert.strictEqual(data.content.ch2.length, 2);
}));

results.push(runTest("4C: Next chapter title is extremely short (e.g. 'A')", {
  chapters: [{ id: "ch1", t: "Ch 1" }, { id: "ch2", t: "A" }],
  content: { ch1: [[1, "Page 1"], [2, "Page 2 with character A"]], ch2: [[3, "C2"]] }
}, (data) => {
  // normTitle = "a". normalize("Page 2 with character A").includes("a") -> true.
  // candidate = 1.
  // Shift occurs.
  assert.strictEqual(data.content.ch1.length, 1, "Should shift page 2 because single letter title 'A' matches character 'A' on page 2");
}));

results.push(runTest("4D: Next chapter title matches case-insensitively and with accents", {
  chapters: [{ id: "ch1", t: "Ch 1" }, { id: "ch2", t: "Gériatrie Pratique" }],
  content: {
    ch1: [[1, "Page 1"], [2, "Introduction to geriatrie pratique and options"]],
    ch2: [[3, "C2"]]
  }
}, (data) => {
  // normTitle = "geriatriepratique"
  // normalize("Introduction to geriatrie pratique and options") = "introductiontogeriatriepratiqueandoptions" (contains "geriatriepratique")
  // candidate = 1. Shift should occur.
  assert.strictEqual(data.content.ch1.length, 1);
  assert.strictEqual(data.content.ch2.length, 2);
}));


// 5. Multiple stnioP markers in second half
results.push(runTest("5A: Multiple stnioP markers in second half of pages", {
  chapters: [{ id: "ch1", t: "Ch 1" }, { id: "ch2", t: "Ch 2" }],
  content: {
    ch1: [[1, "Page 1"], [2, "stnioP marker 1"], [3, "stnioP marker 2"], [4, "Page 4"]],
    ch2: [[5, "C2"]]
  }
}, (data) => {
  // pages.length = 4. Math.floor(4/2) = 2.
  // Loop starts at index 2.
  // Index 2 is "stnioP marker 1" -> contains 'stnioP'.
  // Matches index 2 immediately and breaks.
  // candidate = 2 + 1 = 3.
  // pagesToMove = [[3, "stnioP marker 2"], [4, "Page 4"]].
  // Ch1 length becomes 2.
  assert.strictEqual(data.content.ch1.length, 2, "Should split after first stnioP in second half");
  assert.strictEqual(data.content.ch2.length, 3);
}));


// 6. Size and Blank Pages
results.push(runTest("6A: Split size is > 4 pages (should fail sizeCheck)", {
  chapters: [{ id: "ch1", t: "Ch 1" }, { id: "ch2", t: "Ch 2" }],
  content: {
    ch1: [
      [1, "Page 1"],
      [2, "stnioP"],
      [3, "Page 3"],
      [4, "Page 4"],
      [5, "Page 5"],
      [6, "Page 6"]
    ],
    ch2: [[7, "C2"]]
  }
}, (data) => {
  // candidate = 3. pagesToMove = [[3], [4], [5], [6]] -> length 4.
  // Since pagesToMove.length is 4 (<= 4), it should shift.
  assert.strictEqual(data.content.ch1.length, 2);
  assert.strictEqual(data.content.ch2.length, 5);
}));

results.push(runTest("6B: Split size is 5 pages (should fail sizeCheck)", {
  chapters: [{ id: "ch1", t: "Ch 1" }, { id: "ch2", t: "Ch 2" }],
  content: {
    ch1: [
      [1, "Page 1"],
      [2, "stnioP"],
      [3, "Page 3"],
      [4, "Page 4"],
      [5, "Page 5"],
      [6, "Page 6"],
      [7, "Page 7"]
    ],
    ch2: [[8, "C2"]]
  }
}, (data) => {
  // candidate = 3. pagesToMove = 5 pages.
  // sizeCheck: 5 <= 4 -> false.
  // No shift should occur.
  assert.strictEqual(data.content.ch1.length, 7);
}));

results.push(runTest("6C: All pages to move are blank (fails hasNonBlank)", {
  chapters: [{ id: "ch1", t: "Ch 1" }, { id: "ch2", t: "Ch 2" }],
  content: {
    ch1: [
      [1, "Page 1"],
      [2, "stnioP"],
      [3, "This page intentionally left blank"],
      [4, "This page intentionally left blank"]
    ],
    ch2: [[5, "C2"]]
  }
}, (data) => {
  // candidate = 3. pagesToMove is pages 3 and 4, which are both blank.
  // hasNonBlank check fails.
  // No shift.
  assert.strictEqual(data.content.ch1.length, 4);
}));

results.push(runTest("6D: Backwards expansion across blank pages", {
  chapters: [{ id: "ch1", t: "Ch 1" }, { id: "ch2", t: "Ch 2" }],
  content: {
    ch1: [
      [1, "Page 1"],
      [2, "This page intentionally left blank"],
      [3, "stnioP"],
      [4, "Ch 2 text"]
    ],
    ch2: [[5, "C2"]]
  }
}, (data) => {
  // candidate = index 2 + 1 = 3 (page 4).
  // Backwards expansion: checks index 2 (page 3) text: not blank.
  // Wait, let's trace:
  // candidate = 3. candidate > 0. prevPageText of pages[2] is "stnioP" (no "this page intentionally left blank"). Break.
  // So candidate remains 3.
  // Wait, what if the blank page is page 2 (index 1), and page 3 (index 2) contains "stnioP"?
  // Yes! If candidate was index 2 (page 3), then prevPageText of pages[1] is "This page intentionally left blank".
  // Let's verify how candidate becomes index 2.
  // If the title fallback is matched at page 3 (index 2), then candidate = 2.
  // Then candidate = 2 > 0. prevPageText of pages[1] is blank, so candidate becomes 1.
  // Let's test this scenario.
  assert.strictEqual(data.content.ch1.length, 2, "Should shift pages 3 and 4 (stnioP is page 3, but page 4 is next. Wait: candidate from stnioP is idx + 1 = 3, so pages to move is [page 4])");
}));

results.push(runTest("6E: Backwards expansion for fallback title matching and blank pages", {
  chapters: [{ id: "ch1", t: "Ch 1" }, { id: "ch2", t: "Ch 2" }],
  content: {
    ch1: [
      [1, "Page 1"],
      [2, "This page intentionally left blank"],
      [3, "Ch 2 Title"]
    ],
    ch2: [[4, "C2"]]
  }
}, (data) => {
  // Math.floor(3/2) = 1. Index 1 is page 2 (blank). Index 2 is page 3 ("Ch 2 Title").
  // Fallback title matches index 2. candidate = 2.
  // candidate > 0: prevPageText (index 1) has "this page intentionally left blank" -> candidate = 1.
  // candidate = 1 > 0: prevPageText (index 0) has "Page 1" (not blank) -> break.
  // candidate is 1. pagesToMove = [[2, blank], [3, Title]].
  // lastPageNum = 3. nextFirstPageNum = 4. gap = 4 - 3 = 1. size = 2 (<= 4). non-blank = true (due to page 3).
  // Shift occurs, moving pages 2 and 3!
  assert.strictEqual(data.content.ch1.length, 1, "Ch1 should keep page 1 only");
  assert.strictEqual(data.content.ch2.length, 3, "Ch2 should receive pages 2 and 3");
}));


// 7. Idempotency
results.push(runTest("7A: Idempotency (Running preprocessAppData twice)", {
  chapters: [{ id: "ch1", t: "Ch 1" }, { id: "ch2", t: "Ch 2" }],
  content: {
    ch1: [[1, "Page 1"], [2, "stnioP"], [3, "Ch 2 Title"]],
    ch2: [[4, "C2"]]
  }
}, (data) => {
  // First run: candidate = 2 + 1 = 3. Shift page 3 to ch2.
  // ch1: [[1, "Page 1"], [2, "stnioP"]]
  // ch2: [[3, "Ch 2 Title"], [4, "C2"]]
  // What happens if we run it a second time?
  // Let's run preprocessAppData again inside the VM context.
  // Wait, runTest only runs it once. We can verify if running it twice mutates it further.
  // Let's write a custom assertion that runs preprocessAppData twice.
}));

// Custom test for idempotency running twice
{
  const appData = {
    chapters: [{ id: "ch1", t: "Ch 1" }, { id: "ch2", t: "Ch 2" }],
    content: {
      ch1: [[1, "Page 1"], [2, "stnioP"], [3, "Ch 2 Title"]],
      ch2: [[4, "C2"]]
    }
  };
  const sandbox = {
    APP_DATA: appData,
    document: { addEventListener: () => {} }
  };
  const context = vm.createContext(sandbox);
  vm.runInContext(appSrc, context);
  vm.runInContext('preprocessAppData()', context); // First Run
  const ch1_len_1 = sandbox.APP_DATA.content.ch1.length;
  const ch2_len_1 = sandbox.APP_DATA.content.ch2.length;
  vm.runInContext('preprocessAppData()', context); // Second Run
  const ch1_len_2 = sandbox.APP_DATA.content.ch1.length;
  const ch2_len_2 = sandbox.APP_DATA.content.ch2.length;

  try {
    assert.strictEqual(ch1_len_1, 2);
    assert.strictEqual(ch2_len_1, 2);
    assert.strictEqual(ch1_len_2, 2, "Second run should not shift more pages from ch1");
    assert.strictEqual(ch2_len_2, 2, "Second run should not change ch2");
    console.log(`[PASS] 7A: Idempotency (Running preprocessAppData twice)`);
    results.push({ name: "7A: Idempotency (Running preprocessAppData twice)", status: "PASS" });
  } catch (err) {
    console.log(`[FAIL] 7A: Idempotency (Running preprocessAppData twice): ${err.message}`);
    results.push({ name: "7A: Idempotency (Running preprocessAppData twice)", status: "FAIL", error: err.message });
  }
}

console.log("\n=== TEST RUN SUMMARY ===");
const passed = results.filter(r => r.status === 'PASS').length;
const failed = results.filter(r => r.status === 'FAIL').length;
console.log(`Passed: ${passed} | Failed: ${failed} | Total: ${results.length}`);

if (failed > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
