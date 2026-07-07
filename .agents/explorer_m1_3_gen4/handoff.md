# Handoff Report — OCR and Situation Number Audit Design

## 1. Observation
From direct inspection of the repository files, testing utilities, and database content, the following was observed:

1. **E2E Testing Sandbox Context**:
   - In `tests/run-e2e.js` (lines 6-160) and `audit_empty.js` (lines 8-27), files are loaded and executed inside a Node.js `vm` context by reading `data.js` and `app.js`.
   - The DOM elements are mocked. Crucially, in `tests/run-e2e.js` (lines 37-41), the `textContent` setter encodes text and updates `innerHTML` (`this._html = this._text.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')`).
   - If this DOM mock is incomplete or lacks proper getter/setter synchronizations (e.g., returning static properties without updating corresponding representations), runtime utilities in `app.js` (such as `esc()`) return `undefined` or empty strings, rendering paragraphs empty (e.g., `<p></p>`) in the generated output.

2. **Chapter Rendering Flow**:
   - `verify-all-chapters.js` (lines 28-30) extracts raw page content from `APP_DATA.content[id]`, joins them, and processes the text using `renderChapter(raw, id)`.
   - In `app.js`, `renderChapter` applies regex-based hyphenation replacements before structural formatting:
     - Hyphen join rule 1 (lines 443-455) replaces `([a-zA-Z...]+)-\s+([a-zA-Z...]+)` with `p1 + p2` if the first group is not a known prefix and the second group starts with a letter.
     - Hyphen join rule 2 (lines 458-459) replaces line-ending hyphens `([a-zA-Z...]+)-\s*\n\s*([a-zA-Z...]+)` with `$1$2`.

3. **Verbatim OCR Cut and Repeat Errors**:
   - In `data.js` (ch5, page 86 content), the raw text contains `d'alté- Interrogatoire` and `Examens Connaître les principaux examens com- Atteinte du segment \n complémentaires plémentaires`.
   - After running `renderChapter()`, the hyphen join rule 1 joins `alté-` and `Interrogatoire` because `alté` is not in the prefixes list, producing the cut word `altéInterrogatoire` (mid-word capitalization) in the rendered HTML.
   - Suffix duplicate `complémentaires plémentaires` is preserved in the rendered paragraph card of `ch5` page 86.
   - Other suffix duplicates are found elsewhere, such as `liposolubles liposolubles` and `permet), permet` in `ch16` (paragraphs 4 and 5).

4. **Verbatim Naked Situation Numbers in Prose**:
   - In `ch17` page 324, the text reads: `"en particulier chez une personne 298 âgée ayant des troubles cognitifs."` where situation number `298` is merged raw.
   - In `ch16` page 286, the text reads: `"le patient âgé peut être victime de iatrogénie et 258 d'événement indésirable médicamenteux."` where situation number `258` is merged raw.
   - In `ch16` page 290: `"d'un surdosage en AVK chez un rétropéritoine, hémopéricarde, héma- des facteurs détaillés ci-des- 270 sus, le risque d'EIM est évalué :"` where `270` is merged raw.
   - In `ch16` page 287: `"dTcaPolio3 (si 264 étroit et durable..."` where `264` is merged raw.

---

## 2. Logic Chain
Based on these observations, the design for the new automated audit script `audit_ocr.js` is reasoned as follows:

1. **Sandboxed DOM Mock Invariant**: Since chapter content rendering depends on DOM elements to package paragraphs and build structure, the script must implement a compliant `MockElement` following the *Sandboxed DOM Testing Invariant*. If the mock does not sync `textContent` and `innerHTML` setters/getters, the paragraphs render as empty, preventing text scan rules from working.
2. **Auditing Rendered Content**: Hyphen joining regexes in `app.js` actively create cut/joined words (like `altéInterrogatoire`). Thus, the audit must run on the output of `renderChapter(raw, id)` rather than raw text to catch errors created during rendering, while ignoring filtered-out layout remnants.
3. **Word Cut Detection**: Joined words are created when a hyphen is stripped between a word and a capitalized next word (e.g. `alté- Interrogatoire` -> `altéInterrogatoire`, `trauma- Vous` -> `traumaVous`, `réha- A` -> `réhaA`). These can be identified in paragraphs by scanning for mid-word capitals via `/^[a-zà-öø-ÿœæ]{3,}[A-Z]/`.
4. **Repeat Detection**: Consecutive word repetitions and suffix duplication errors (e.g. `complémentaires plémentaires`) can be programmatically detected by checking if `word1.endsWith(word2)` where `word1` length $\ge 6$ and `word2` length $\ge 4$ (to avoid normal grammatical false positives).
5. **Naked Situation Numbers**: In valid textbook citations, situation numbers (e.g., 295, 298, 325) are enclosed in brackets (e.g., `[295]`). In textbook lists or badges, they appear at the start of paragraphs. An OCR error is present if a situation number is:
   - Not bracketed (bracket bounds check fails).
   - Not starting a list item or header line (checked by verifying that the text preceding the number contains characters other than bullet points, spaces, or numbering).

---

## 3. Caveats
- The script relies on the ECN situation numbers list. A predefined set of known situation numbers is hardcoded in the script to verify occurrences.
- Suffix repeats checking requires word bounds. Words are cleaned of punctuation and non-alpha French characters to prevent mismatching due to commas or parentheses.
- Mini-dossiers and questions (chapters 18-20) naturally contain structural options (e.g., option letters A-E) that occasionally merge with words due to hyphenation bugs. The script catches these as they are indeed layout cuts (e.g. `postéB`, `traumaVous`), but they are structural rather than prose errors.

---

## 4. Conclusion
The new automated audit script `audit_ocr.js` must be implemented using relative paths, execute within a Node.js `vm` sandbox context with a fully invariant-compliant DOM mock, and run `renderChapter` on all 20 chapters. By applying the regex-based word suffix check, mid-word capitalization match, and bracket check on known situation numbers, it will successfully identify OCR duplicates, cut joins, and misplaced situation numbers.

A complete implementation design is proposed in `proposed_audit_ocr.js` inside this agent's folder.

---

## 5. Verification Method
To independently verify this design and its findings:
1. Run the test script `test_proposed.js` located in the agent's folder:
   ```bash
   node .agents/explorer_m1_3_gen4/test_proposed.js
   ```
2. Verify that it prints out the correct locations of the OCR repeats (e.g., `complémentaires plémentaires` in `ch5`), cuts (e.g., `altéInterrogatoire` in `ch5`), and naked situation numbers (e.g., `298` in `ch17` paragraph 5, `258` in `ch16` paragraph 1).
3. Confirm that it exits with code `1` when issues are present and code `0` if all issues are resolved.
