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

  try {
    // Manually run preprocessAppData
    vm.runInContext('preprocessAppData()', context);
    assertionFn(null, sandbox.APP_DATA);
    console.log(`[PASS] ${testName}`);
    return { name: testName, status: 'PASS' };
  } catch (err) {
    // Check if it's an assertion failure or an execution crash
    if (err instanceof assert.AssertionError) {
      console.log(`[FAIL] ${testName}: Assertion failed - ${err.message}`);
      return { name: testName, status: 'FAIL', error: err.message };
    } else {
      console.log(`[CRASH] ${testName}: Preprocessor crashed - ${err.stack || err.message}`);
      // Send crash info to assertion function to see if crash was expected
      try {
        assertionFn(err, sandbox.APP_DATA);
        console.log(`[PASS] ${testName} (Crash was correctly handled/expected by test)`);
        return { name: testName, status: 'PASS' };
      } catch (assertErr) {
        return { name: testName, status: 'CRASH', error: err.message };
      }
    }
  }
}

const results = [];

console.log("=== STARTING CHALLENGER PREPROCESS_APPDATA STRESS TESTS ===");

// --- SECTION 1: Standard and Boundary Cases (adapted from existing suite) ---

results.push(runTest("1A: APP_DATA is completely empty", {}, (err, data) => {
  assert.strictEqual(err, null);
  assert.deepStrictEqual(data, {});
}));

results.push(runTest("1B: APP_DATA has empty chapters and content", { chapters: [], content: {} }, (err, data) => {
  assert.strictEqual(err, null);
  assert.deepStrictEqual(data, { chapters: [], content: {} });
}));

results.push(runTest("1C: APP_DATA has only 1 chapter", {
  chapters: [{ id: "ch1", t: "Ch 1" }],
  content: { ch1: [[1, "stnioP"]] }
}, (err, data) => {
  assert.strictEqual(err, null);
  assert.strictEqual(data.content.ch1.length, 1);
}));

results.push(runTest("1D: APP_DATA target chapter content is empty list", {
  chapters: [{ id: "ch1", t: "Ch 1" }, { id: "ch2", t: "Ch 2" }],
  content: { ch1: [[1, "stnioP"], [2, "Ch 2 content"]], ch2: [] }
}, (err, data) => {
  assert.strictEqual(err, null);
  assert.strictEqual(data.content.ch1.length, 2);
  assert.strictEqual(data.content.ch2.length, 0);
}));

results.push(runTest("2A: Current chapter has 1 page and contains next chapter fallback title", {
  chapters: [{ id: "ch1", t: "Ch 1" }, { id: "ch2", t: "Ch 2" }],
  content: { ch1: [[1, "Ch 2 Title"]], ch2: [[2, "Ch 2 page"]] }
}, (err, data) => {
  assert.strictEqual(err, null);
  // This empties ch1 because 0 < 1 is true, lastPageNum = 1, nextFirstPage = 2, gap = 1, size = 1
  assert.strictEqual(data.content.ch1.length, 0, "Ch1 should be emptied by the fallback title matching a single page");
  assert.strictEqual(data.content.ch2.length, 2, "Page should be prepended to ch2");
}));

results.push(runTest("3A: pageGap is exactly 0", {
  chapters: [{ id: "ch1", t: "Ch 1" }, { id: "ch2", t: "Ch 2" }],
  content: { ch1: [[1, "Page 1"], [2, "stnioP"], [3, "Ch 2 text"]], ch2: [[3, "Ch 2 first page"]] }
}, (err, data) => {
  assert.strictEqual(err, null);
  assert.strictEqual(data.content.ch1.length, 3);
}));

results.push(runTest("3B: pageGap is 1", {
  chapters: [{ id: "ch1", t: "Ch 1" }, { id: "ch2", t: "Ch 2" }],
  content: { ch1: [[1, "Page 1"], [2, "stnioP"], [3, "Ch 2 text"]], ch2: [[4, "Ch 2 first page"]] }
}, (err, data) => {
  assert.strictEqual(err, null);
  assert.strictEqual(data.content.ch1.length, 2);
  assert.strictEqual(data.content.ch2.length, 2);
}));

results.push(runTest("3C: Page numbers are string-encoded digits", {
  chapters: [{ id: "ch1", t: "Ch 1" }, { id: "ch2", t: "Ch 2" }],
  content: { ch1: [["1", "Page 1"], ["2", "stnioP"], ["3", "Ch 2 text"]], ch2: [["4", "Ch 2 first page"]] }
}, (err, data) => {
  assert.strictEqual(err, null);
  assert.strictEqual(data.content.ch1.length, 2);
  assert.strictEqual(data.content.ch2.length, 2);
}));

results.push(runTest("3D: Page numbers are non-numeric strings", {
  chapters: [{ id: "ch1", t: "Ch 1" }, { id: "ch2", t: "Ch 2" }],
  content: { ch1: [["p1", "Page 1"], ["p2", "stnioP"], ["p3", "Ch 2 text"]], ch2: [["p4", "Ch 2 first page"]] }
}, (err, data) => {
  assert.strictEqual(err, null); // should handle NaN safely without crashing
  assert.strictEqual(data.content.ch1.length, 3);
}));

results.push(runTest("4A: Next chapter title is empty string", {
  chapters: [{ id: "ch1", t: "Ch 1" }, { id: "ch2", t: "" }],
  content: { ch1: [[1, "Page 1"], [2, "Page 2"]], ch2: [[3, "C2"]] }
}, (err, data) => {
  assert.strictEqual(err, null);
  // It shouldn't ideally shift, but currently it does due to empty string includes check.
  // We document this behavior.
  assert.strictEqual(data.content.ch1.length, 1);
}));

results.push(runTest("4B: Next chapter title is only non-alphanumeric characters", {
  chapters: [{ id: "ch1", t: "Ch 1" }, { id: "ch2", t: "???" }],
  content: { ch1: [[1, "Page 1"], [2, "Page 2"]], ch2: [[3, "C2"]] }
}, (err, data) => {
  assert.strictEqual(err, null);
  assert.strictEqual(data.content.ch1.length, 1);
}));


// --- SECTION 2: Adversarial Stress Tests (New Cases) ---

results.push(runTest("8A: Malformed page entry - page text is undefined", {
  chapters: [{ id: "ch1", t: "Ch 1" }, { id: "ch2", t: "Ch 2" }],
  content: {
    ch1: [[1, "Page 1"], [2]], // Missing index 1 text field
    ch2: [[3, "Ch 2 first page"]]
  }
}, (err, data) => {
  // If it crashed, we expect a TypeError.
  if (err) {
    assert.ok(err instanceof TypeError, "Expected TypeError due to undefined text field");
    throw err; // rethrow to register as crash in test summary
  }
  // If it didn't crash, let's verify it handled it.
  assert.strictEqual(data.content.ch1.length, 2);
}));

results.push(runTest("8B: Malformed page entry - page text is null", {
  chapters: [{ id: "ch1", t: "Ch 1" }, { id: "ch2", t: "Ch 2" }],
  content: {
    ch1: [[1, "Page 1"], [2, null]], 
    ch2: [[3, "Ch 2 first page"]]
  }
}, (err, data) => {
  if (err) {
    assert.ok(err instanceof TypeError, "Expected TypeError due to null text field");
    throw err;
  }
  assert.strictEqual(data.content.ch1.length, 2);
}));

results.push(runTest("8C: Malformed page entry - page text is a number", {
  chapters: [{ id: "ch1", t: "Ch 1" }, { id: "ch2", t: "Ch 2" }],
  content: {
    ch1: [[1, "Page 1"], [2, 12345]], 
    ch2: [[3, "Ch 2 first page"]]
  }
}, (err, data) => {
  if (err) {
    assert.ok(err instanceof TypeError, "Expected TypeError due to non-string text field");
    throw err;
  }
  assert.strictEqual(data.content.ch1.length, 2);
}));

results.push(runTest("8D: Array hole in chapters", {
  chapters: [
    { id: "ch1", t: "Ch 1" },
    undefined, // Hole or undefined entry
    { id: "ch2", t: "Ch 2" }
  ],
  content: {
    ch1: [[1, "Page 1"], [2, "stnioP"], [3, "Ch 2 text"]],
    ch2: [[4, "Ch 2 first page"]]
  }
}, (err, data) => {
  if (err) {
    assert.ok(err instanceof TypeError, "Expected TypeError due to undefined chapter element");
    throw err;
  }
  assert.strictEqual(data.content.ch1.length, 2);
}));

results.push(runTest("8E: Next chapter has no first page number", {
  chapters: [{ id: "ch1", t: "Ch 1" }, { id: "ch2", t: "Ch 2" }],
  content: {
    ch1: [[1, "Page 1"], [2, "stnioP"], [3, "Ch 2 text"]],
    ch2: [[, "Ch 2 first page"]] // Missing page number index 0
  }
}, (err, data) => {
  if (err) {
    assert.ok(err instanceof TypeError, "Expected TypeError or NaN issue");
    throw err;
  }
  // Should not shift if next FirstPageNum is undefined/NaN (coerced check)
  assert.strictEqual(data.content.ch1.length, 3);
}));

results.push(runTest("8F: Duplicate chapter IDs in chapters list", {
  chapters: [
    { id: "ch1", t: "Ch 1" },
    { id: "ch1", t: "Ch 1 Duplicate" },
    { id: "ch2", t: "Ch 2" }
  ],
  content: {
    ch1: [[1, "Page 1"], [2, "stnioP"], [3, "Ch 1 Duplicate Text"]],
    ch2: [[4, "Ch 2 text"]]
  }
}, (err, data) => {
  assert.strictEqual(err, null);
  // Loop 1: ch1 (index 0) and ch1 (index 1). pages = content.ch1, nextPages = content.ch1.
  // Modifies ch1 in place by splitting and prepending to itself!
  // Let's verify what happens to content.ch1
  console.log("Duplicate chapter result - ch1 length:", data.content.ch1.length);
}));


console.log("\n=== TEST RUN SUMMARY ===");
const passed = results.filter(r => r.status === 'PASS').length;
const failed = results.filter(r => r.status === 'FAIL').length;
const crashed = results.filter(r => r.status === 'CRASH').length;
console.log(`Passed: ${passed} | Failed: ${failed} | Crashed: ${crashed} | Total: ${results.length}`);

// Return status
if (crashed > 0 || failed > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
