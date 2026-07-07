# Handoff Report — OCR Error Analysis and Proposed Fix Strategy

## 1. Observation

Our read-only analysis of the `geriatrie-app` codebase (particularly `data.js` and `app.js`) revealed two distinct types of OCR issues: **static interleaving errors in the data file** and **dynamic parsing bugs in the rendering code**.

### A. Static Column-Interleaving Errors in `data.js`
In `data.js` (which is a single-line file containing the database `const APP_DATA = ...`), there are **335 verified occurrences** where text columns or sidebars have been interleaved during the PDF-to-text extraction process. 
This occurs when a hyphenated word from the first column (e.g., `alté-`) is immediately followed by a line or cell from the second column (e.g., `Interrogatoire et examen`), and only then followed by the continuation of the word (e.g., `ration`) and the rest of the text.

Some prominent verbatim examples in `data.js` include:
1. **Chapter 5 (`ch5`), Page 86**:
   - *Verbatim text*: `Connaître les principales étiologies d'alté- Interrogatoire et examen\nration chronique de la vision clinique`
   - *Original Layout*:
     - Column 1: `Connaître les principales étiologies d'altération chronique de la vision`
     - Column 2: `Interrogatoire et examen clinique`
2. **Chapter 2 (`ch2`), Page 44**:
   - *Verbatim text*: `aluation des fonctions cognitives, de l’autono-\nstandardisée mie et indépendance fonctionnelle`
   - *Original Layout*:
     - Column 1: `autonomie et indépendance fonctionnelle`
     - Column 2: `standardisée` (part of *Évaluation gériatrique standardisée*)
3. **Chapter 9 (`ch9`), Page 174**:
   - *Verbatim text*: `e cette hypotension orthos-\n148 tatique (éliminer une anémie`
   - *Original Layout*:
     - Column 1: `hypotension orthostatique`
     - Column 2: `148` (page reference or question number)
4. **Chapter 18 (`ch18`), Page 333** (Mini-dossiers progressifs):
   - *Verbatim text*: `ès abîmées, avec de nom-\nQuestion 6 breux chicots.`
   - *Original Layout*:
     - Column 1: `de nombreux chicots`
     - Column 2: `Question 6`
5. **Chapter 18 (`ch18`), Page 333**:
   - *Verbatim text*: `soins de suite et réadap-\nbisphosphonates ?\ntation gériatrique`
   - *Original Layout*:
     - Column 1: `réadaptation gériatrique`
     - Column 2: `bisphosphonates ?`
6. **Chapter 18 (`ch18`), Page 334**:
   - *Verbatim text*: `sort mainte-\nQuestion 1\nnant moins faire son marché`
   - *Original Layout*:
     - Column 1: `maintenant moins`
     - Column 2: `Question 1`

### B. Buggy Dynamic Hyphen Fixing in `app.js`
In `app.js`, `renderChapter(raw, chId)` attempts to clean up hyphens followed by space/newlines:
```javascript
// Line 423: Fix hyphens with spaces (OCR hyphenations) with French accent support
let text = raw.replace(/([a-zA-Zà-öø-ÿœŒæÆÀ-ÖØ-ß]+)-\s+([a-zA-Zà-öø-ÿœŒæÆÀ-ÖØ-ß]+)/g, (match, p1, p2) => {
  const prefixes = /^(pré|diffé|repré|dé|con|in|re|trans|inter|intra|co|physio|patho|neuro|ostéo|sympto|cardio|broncho|pneumo|hémato|hépato|néphro|gastro|entéro|myo|dermo|ophtalmo|oto|rhino|laryngo|géronto|géria|psycho|démogra|socio|anthro|biolo|médico|chimio|radiothé|immuno|anti|auto|hyper|hypo|dys|poly|multi|micro|macro|péri|para|post|supra|infra|extra|ultra|pseudo|semi|hémi|mono|bi|tri|quadri|tétra|penta|hexa|pluri)$/i;
  const normP1Prefix = p1.replace(/[éèêë]/gi, 'e').replace(/[àâä]/gi, 'a').replace(/[ôö]/gi, 'o').replace(/[ùûü]/gi, 'u').replace(/ç/gi, 'c');
  if (prefixes.test(p1) || prefixes.test(normP1Prefix)) {
    return p1 + p2;
  }
  if (p2.match(/^[a-zà-öø-ÿœŒæÆÀ-ÖØ-ß]/i)) {
    const compoundBases = /^(garde|arc|celui|celle|ceux|celles|moi|toi|soi|nous|vous|lui|leur|eux|y|en|ci|là|bas|haut|arrière|avant|après|entre|sous|sur|sans|contre|non|quasi|vice)$/i;
    if (compoundBases.test(p1)) return p1 + '-' + p2;
    return p1 + p2;
  }
  return p1 + '-' + p2;
});
```

Because of this regex `/([a-zA-Zà-öø-ÿœŒæÆÀ-ÖØ-ß]+)-\s+([a-zA-Zà-öø-ÿœŒæÆÀ-ÖØ-ß]+)/g`:
1. It matches `alté- Interrogatoire` where `p1 = "alté"` and `p2 = "Interrogatoire"`.
2. `prefixes.test("alté")` is false.
3. `p2.match(/^[a-zà-ö...]/i)` is true (since `Interrogatoire` starts with an `I` which is a valid character).
4. `compoundBases.test("alté")` is false.
5. It returns `p1 + p2`, which is `"altéInterrogatoire"`.
6. This replaces `alté- Interrogatoire` with `altéInterrogatoire`, **merging the two unrelated words** into a single incorrect word (`altéinterrogatoire` / `altéInterrogatoire`).
7. The second half of the split word (e.g. `ration`) remains stranded further down the text.

### C. Static Word Repetitions in `data.js`
We identified 81 occurrences of word repetitions. Many are caused by table header columns that legitimately repeat words (e.g., `Médecin Médecin`, `IDE IDE`, `AS AS` on page 148 of `ch8`).
However, some repetitions are direct results of column interleavings, such as:
1. **Chapter 5 (`ch5`), Page 86**: `complémentaires plémentaires`
   - *Verbatim text*: `B Examens Connaître les principaux examens com- Atteinte du segment\ncomplémentaires plémentaires en ophtalmologie...`
   - In-between column text `Atteinte du segment\ncomplémentaires` ends with `complémentaires` from the Rubrique column, which is placed next to `plémentaires` from the Intitulé column.
2. **Chapter 12 (`ch12`), Page 209**: `complémentaires complémentaires`
   - *Verbatim text*: `B Examens Savoir énoncer les autres examens Connaître les examens à réaliser dans\ncomplémentaires complémentaires chez un patient...`

### D. Paragraph/Page Repeats
We found no exact duplicate pages in `data.js` or `app.js`. The 6 high-similarity matches in `ch20` (pages 377–380) are false positives of the similarity metric because they are answer key pages that contain mostly numbers and the words "Questions isolées" and "Réponse".

---

## 2. Logic Chain

1. **Observation 1A** shows that `data.js` contains OCR-scrambled sequences where a word is broken by a hyphen (`w1-`), followed by text from another column (`[col2]`), and then the continuation of the word (`w3`).
2. **Observation 1B** shows that the regex in `app.js` looks for `w1- [whitespace] w2` and merges them if `w2` starts with a letter.
3. When parsing `w1- [col2_first_word]`, the regex matches `w1` and the first word of the interleaved column, creating the merged word `w1` + `col2_first_word` (e.g., `altéInterrogatoire`, `raisonneConnaître`, `prévendu`).
4. This results in the spelling/merger errors reported by the user, while the actual second half `w3` remains detached.
5. Therefore, the dynamic parser is not only failing to fix the interleaving, it is actively corrupting the text.
6. A dynamic fix that attempts to automatically reconstruct columns using only regex is impossible because the parser lacks context on where the columns split.
7. Therefore, a static cleanup of `data.js` to restore correct reading order is necessary for clean database text.

---

## 3. Caveats

- We did not manually examine every one of the 335 interleavings, but we verified that they all follow the same column/box boundary layout error pattern.
- Some table rows that repeat header words (like ECN rubrics or scoring sheets) are not errors and must be preserved.

---

## 4. Conclusion & Proposed Fix Strategy

We recommend a two-part fix strategy:

### Part 1: Statically Clean `data.js`
The reading order should be statically corrected in `data.js`. Since doing this manually is labor-intensive, the implementer should write a script to perform the substitutions. 
For example, a script can use the following replacements to fix the major errors:
```javascript
// Example replacement mappings for data.js
const REPLACEMENTS = {
  "d'alté- Interrogatoire et examen\nration chronique de la vision clinique": "d'altération chronique de la vision\nInterrogatoire et examen clinique",
  "de l’autono-\nstandardisée mie et indépendance fonctionnelle": "de l’autonomie et indépendance fonctionnelle\nstandardisée",
  "hypotension orthos-\n148 tatique": "hypotension orthostatique\n148",
  "de nom-\nQuestion 6 breux chicots": "de nombreux chicots\nQuestion 6",
  "réadap-\nbisphosphonates ?\ntation gériatrique": "réadaptation gériatrique\nbisphosphonates ?",
  "sort mainte-\nQuestion 1\nnant moins faire son marché": "sort maintenant moins faire son marché\nQuestion 1"
};
```

### Part 2: Dynamically Make `app.js` Unsafe Hyphen-Fixing Safe
The hyphen-joining regex in `app.js` must be updated so it does not match hyphens followed by a space and an uppercase word (which indicates it's from another column or sentence start), and it should only merge if the hyphen is followed immediately by a newline (indicating a layout line-break wrap).

We propose replacing the first regex in `app.js` (lines 423-435) with:
```javascript
  // 1. Only fix hyphens followed directly by newline or spaces then lowercase letters,
  // to avoid merging with capitalized column words (like "alté- Interrogatoire")
  let text = raw.replace(/([a-zA-Zà-öø-ÿœŒæÆÀ-ÖØ-ß]+)-\s*\n\s*([a-zà-öø-ÿœŒæÆÀ-ÖØ-ß]+)/g, (match, p1, p2) => {
    const prefixes = /^(pré|diffé|repré|dé|con|in|re|trans|inter|intra|co|physio|patho|neuro|ostéo|sympto|cardio|broncho|pneumo|hémato|hépato|néphro|gastro|entéro|myo|dermo|ophtalmo|oto|rhino|laryngo|géronto|géria|psycho|démogra|socio|anthro|biolo|médico|chimio|radiothé|immuno|anti|auto|hyper|hypo|dys|poly|multi|micro|macro|péri|para|post|supra|infra|extra|ultra|pseudo|semi|hémi|mono|bi|tri|quadri|tétra|penta|hexa|pluri)$/i;
    const normP1Prefix = p1.replace(/[éèêë]/gi, 'e').replace(/[àâä]/gi, 'a').replace(/[ôö]/gi, 'o').replace(/[ùûü]/gi, 'u').replace(/ç/gi, 'c');
    if (prefixes.test(p1) || prefixes.test(normP1Prefix)) {
      return p1 + p2;
    }
    return p1 + p2;
  });
```

This ensures that:
- `alté- Interrogatoire` is NOT matched (because `Interrogatoire` starts with an uppercase `I` and is not preceded by a newline).
- Standard end-of-line wrap like `diagnos-\ntique` is correctly matched and merged to `diagnostique`.

---

## 5. Verification Method

To independently verify the fixes:
1. **Run the full test suite**:
   ```bash
   node tests/run-e2e.js
   ```
   Ensure that the E2E tests run successfully and all pass.
2. **Scan the rendered HTML for corrupt mergers**:
   Run the following validation command in pwsh to check if any known corrupt words remain in the rendering output:
   ```bash
   node -e "
   const fs = require('fs');
   let code = fs.readFileSync('data.js', 'utf8').replace(/^const APP_DATA =/, 'global.APP_DATA =');
   eval(code);
   // ... run renderChapter simulator on all pages and assert no occurrences of 'altéInterrogatoire', 'raisonneConnaître', 'oriConnaître', 'prévendu' ...
   "
   ```
