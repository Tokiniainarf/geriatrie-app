/**
 * audit_ocr.js
 * 
 * Automated audit script that checks all 20 chapters for:
 * (1) Words containing cuts or repeats (e.g. 'altéinterrogatoire', 'complémentaires plémentaires')
 * (2) Situation numbers (e.g. 295, 298, 325) appearing in the text of normal paragraphs
 * 
 * Runs in Node.js, uses relative paths, and executes in a sandboxed VM context.
 */

const fs = require('fs');
const vm = require('vm');
const path = require('path');

// 1. Load codebase using relative paths
const dataPath = path.join(__dirname, 'data.js');
const appPath = path.join(__dirname, 'app.js');

if (!fs.existsSync(dataPath) || !fs.existsSync(appPath)) {
  console.error("Error: data.js or app.js not found in current directory.");
  process.exit(1);
}

const dataSrc = fs.readFileSync(dataPath, 'utf8');
const appSrc = fs.readFileSync(appPath, 'utf8');

// 2. Mock DOM elements in compliance with the Sandboxed DOM Testing Invariant
// ensuring textContent updates innerHTML (escaping entities) and vice versa.
function createMockElement(tag) {
  return {
    tagName: (tag || 'div').toUpperCase(),
    _text: '',
    _html: '',
    get textContent() {
      return this._text;
    },
    set textContent(v) {
      this._text = String(v);
      this.children = [];
      // Escaping HTML entities to prevent runtime string helpers from returning undefined
      this._html = this._text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    },
    get innerHTML() {
      return this._html;
    },
    set innerHTML(v) {
      this._html = String(v);
      // Remove HTML tags to extract clean text representation
      this._text = v.replace(/<[^>]+>/g, '');
      this.children = [];
    },
    children: [],
    querySelectorAll: () => [],
    querySelector: () => null,
    setAttribute: () => {},
    style: {}
  };
}

const sandbox = {
  localStorage: { getItem: () => null, setItem: () => {} },
  document: {
    createElement: createMockElement,
    querySelectorAll: () => [],
    querySelector: () => null,
    getElementById: () => null,
    documentElement: { setAttribute: () => {} },
    addEventListener: () => {}
  },
  window: { addEventListener: () => {}, scrollTo: () => {}, scrollY: 0 },
  navigator: { serviceWorker: { register: () => Promise.resolve({ catch() {} }) } },
  setTimeout,
  setInterval,
  clearInterval,
  clearTimeout,
  console,
  FIGURES: {},
  alert: () => {},
  confirm: () => false,
  requestAnimationFrame: (cb) => cb()
};

// 3. Create context and load codebase
const context = vm.createContext(sandbox);
vm.runInContext(dataSrc, context);
vm.runInContext(appSrc, context);

// Auto-run preprocessing once (mutates APP_DATA in place)
vm.runInContext('preprocessAppData()', context);

const chapters = vm.runInContext('APP_DATA.chapters', context);
const content = vm.runInContext('APP_DATA.content', context);

// 4. Define known ECN Situation Numbers to scan for in normal paragraphs
const situationNumbers = new Set([
  103, 106, 112, 114, 116, 117, 119, 121, 122, 123, 124,
  128, 129, 130, 131, 134, 135, 140, 159, 161, 162, 165,
  166, 170, 171, 172, 173, 174, 175, 176, 178, 184, 185,
  186, 199, 200, 211, 217, 223, 226, 227, 229, 231, 232,
  239, 240, 244, 245, 246, 247, 248, 250, 256, 258, 259,
  260, 264, 266, 267, 269, 270, 272, 276, 279, 281, 284,
  288, 295, 298, 300, 306, 321, 322, 324, 325, 327, 328,
  330, 331, 334, 341, 342, 343, 345, 348, 352, 353, 354,
  355
]);

console.log('=== RUNNING OCR AND SITUATION AUDIT ===\n');

let issuesCount = 0;
const results = [];

// 5. Scan each chapter
for (const ch of chapters) {
  const id = ch.id;
  const chunks = content[id];
  if (!chunks || !chunks.length) {
    console.log(`${id}: No content to audit.`);
    continue;
  }

  const raw = chunks.map(c => c[1]).join('\n');
  const html = vm.runInContext(`renderChapter(${JSON.stringify(raw)}, ${JSON.stringify(id)})`, context);

  // Extract normal paragraph tags (<p>...</p>)
  const pRegex = /<p(?:\s+[^>]*)?>([\s\S]*?)<\/p>/gi;
  let pMatch;
  let pIdx = 0;
  const chapterIssues = [];

  while ((pMatch = pRegex.exec(html)) !== null) {
    const pText = pMatch[1].trim();
    // Clean tag contents for raw word/text inspections
    const cleanText = pText.replace(/<[^>]+>/g, ' ');
    const words = cleanText.split(/\s+/);

    // Audit Rule (1a): Suffix & Duplicate Word Repeats
    // e.g. "complémentaires plémentaires"
    for (let i = 0; i < words.length - 1; i++) {
      const w1 = words[i].toLowerCase().replace(/[^a-zà-öø-ÿœæ]/g, '');
      const w2 = words[i+1].toLowerCase().replace(/[^a-zà-öø-ÿœæ]/g, '');
      if (w1.length >= 6 && w2.length >= 4) {
        if (w1.endsWith(w2)) {
          const isRepeatFalsePositive = 
            (w1 === 'simvastatine' && w2 === 'statine') ||
            (w1 === 'atorvastatine' && w2 === 'statine') ||
            (w1 === 'gonarthrose' && w2 === 'arthrose') ||
            (w1 === 'permet' && w2 === 'permet') ||
            (w1 === 'stress' && w2 === 'stress') ||
            (w1 === 'fruits' && w2 === 'fruits') ||
            (w1 === 'lesquelles' && w2 === 'quelles') ||
            (w1 === 'laquelle' && w2 === 'elle') ||
            (w1 === 'médecin' && w2 === 'médecin');
          
          if (!isRepeatFalsePositive) {
            chapterIssues.push({
              type: 'REPEAT',
              paragraph: pIdx,
              text: `"${words[i]} ${words[i+1]}"`,
              context: cleanText.substring(Math.max(0, cleanText.indexOf(words[i]) - 30), cleanText.indexOf(words[i+1]) + words[i+1].length + 40)
            });
            issuesCount++;
          }
        }
      }
    }

    // Audit Rule (1b): Suspicious cuts (mid-word capitals)
    // e.g. "altéInterrogatoire" or "postéB"
    words.forEach(w => {
      const cleanW = w.replace(/^[^\wà-öø-ÿœæ]+|[^\wà-öø-ÿœæ]+$/g, '');
      if (/^[a-zà-öø-ÿœæ]{3,}[A-Z]/.test(cleanW)) {
        chapterIssues.push({
          type: 'CUT',
          paragraph: pIdx,
          text: `"${cleanW}"`,
          context: cleanText.substring(Math.max(0, cleanText.indexOf(w) - 30), cleanText.indexOf(w) + w.length + 40)
        });
        issuesCount++;
      }
    });

    // Audit Rule (2): Naked Situation Numbers in normal prose
    // e.g. "... personne 298 âgée ..."
    const numRegex = /\b(\d{3})\b/g;
    let numMatch;
    while ((numMatch = numRegex.exec(cleanText)) !== null) {
      const num = parseInt(numMatch[1]);
      if (situationNumbers.has(num)) {
        const numStr = numMatch[1];
        
        // Exact slices on cleanText to get correct indices for the current loop iteration
        const beforeClean = cleanText.substring(0, numMatch.index);
        const afterClean = cleanText.substring(numMatch.index + numStr.length);
        const contextBefore = beforeClean.trim().toLowerCase();
        const contextAfter = afterClean.trim().toLowerCase();

        // Check if number is inside brackets [ ] (valid citation)
        // We still check on pText to see if HTML contains brackets (rendered citation badge)
        // Since we want the correct occurrence, we can find the nth occurrence of numStr in pText
        // matching the number of occurrences of numStr in cleanText up to this point.
        const occurrencesInClean = beforeClean.split(numStr).length - 1;
        let pTextIndex = -1;
        for (let occurrence = 0; occurrence <= occurrencesInClean; occurrence++) {
          pTextIndex = pText.indexOf(numStr, pTextIndex + 1);
        }

        let inBrackets = false;
        let isListOrStart = false;
        let isListOrStartLine = false;

        if (pTextIndex !== -1) {
          const before = pText.substring(0, pTextIndex);
          const after = pText.substring(pTextIndex + numStr.length);

          const lastOpen = before.lastIndexOf('[');
          const lastClose = before.lastIndexOf(']');
          const nextOpen = after.indexOf('[');
          const nextClose = after.indexOf(']');

          if (lastOpen > lastClose) {
            if (nextClose !== -1 && (nextOpen === -1 || nextClose < nextOpen)) {
              inBrackets = true;
            }
          }

          isListOrStart = /^[•\-\s\d]*$/.test(before.replace(/<[^>]+>/g, ''));
          
          const lastNL = before.lastIndexOf('\n');
          const lineBefore = lastNL !== -1 ? before.substring(lastNL + 1) : before;
          isListOrStartLine = /^[•\-\s\d]*$/.test(lineBefore.replace(/<[^>]+>/g, ''));
        }

        let isFalsePositive = false;
        // 1. Check if it's part of a larger number (e.g. "3 300" or "3000") or decimal
        if (/\d\s*$/.test(contextBefore) || /^\s*\d/.test(contextAfter)) {
          isFalsePositive = true;
        }
        // 2. Check if followed by units of measurement
        if (/^(ans|metres|mètres|m\b|mmhg|ui|g\/l|mmol|µmol|mg|ml|kg|kcal|%)/.test(contextAfter)) {
          isFalsePositive = true;
        }
        // 3. Preceding/following identifiers (loi, QRM, questions)
        if (/(loi\s+n°|n°|qrm|qru)\s*$/.test(contextBefore) || /^(qrm|qru)/.test(contextAfter)) {
          isFalsePositive = true;
        }
        // 4. Bibliography page ranges or ranges (e.g., ":248-57" or "300 à 500")
        if (/:$/.test(contextBefore) && /^[-–]\d+/.test(contextAfter)) {
          isFalsePositive = true;
        }
        if (/^\s*(à|au|et|ou|[-–])\s*\d+/.test(contextAfter)) {
          isFalsePositive = true;
        }
        // 5. Index page listings in ch20
        if (id === 'ch20' && pIdx >= 178 && pIdx <= 184) {
          isFalsePositive = true;
        }

        if (!inBrackets && !isListOrStart && !isListOrStartLine && !isFalsePositive) {
          chapterIssues.push({
            type: 'NAKED_SITUATION',
            paragraph: pIdx,
            text: `"${num}"`,
            context: cleanText.substring(Math.max(0, numMatch.index - 35), numMatch.index + numStr.length + 40)
          });
          issuesCount++;
        }
      }
    }

    pIdx++;
  }

  if (chapterIssues.length > 0) {
    results.push({ id, title: ch.t, issues: chapterIssues });
  }
}

// 6. Print summary report
if (results.length === 0) {
  console.log('ALL CHAPTERS PASS OCR AUDIT - No issues found');
  process.exit(0);
} else {
  console.log(`${issuesCount} issues found in ${results.length} chapters:\n`);
  results.forEach(res => {
    console.log(`${res.id} (${res.title}):`);
    res.issues.forEach(iss => {
      console.log(`  - [${iss.type}] Paragraph ${iss.paragraph}: ${iss.text}`);
      console.log(`    Context: ... ${iss.context.trim().replace(/\n/g, ' ')} ...`);
    });
  });
  process.exit(1);
}
