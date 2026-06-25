/**
 * concepts.js — Inter-chapter linking system for GeriatrieApp
 * Maps key medical terms to chapter IDs and provides a linkifyText function
 * that wraps concept occurrences in clickable spans.
 */

const CONCEPT_MAP = {
  'critères de Fried': { ch: 'ch1', search: 'fried' },
  'modèle de Bouchon': { ch: 'ch2', search: 'bouchon' },
  'cascade gériatrique': { ch: 'ch2', search: 'cascade' },
  'fragilité': { ch: 'ch1', search: 'fragilité' },
  'fragile': { ch: 'ch1', search: 'fragilité' },
  'sarcopénie': { ch: 'ch1', search: 'sarcopénie' },
  'Alzheimer': { ch: 'ch9', search: 'alzheimer' },
  'dépression': { ch: 'ch10', search: 'dépression' },
  'confusion': { ch: 'ch11', search: 'confusion' },
  'chute': { ch: 'ch12', search: 'chute' },
  'chutes': { ch: 'ch12', search: 'chute' },
  'ostéoporose': { ch: 'ch6', search: 'ostéoporose' },
  'arthrose': { ch: 'ch7', search: 'arthrose' },
  'incontinence': { ch: 'ch15', search: 'incontinence' },
  'nutrition': { ch: 'ch14', search: 'nutrition' },
  'dénutrition': { ch: 'ch14', search: 'nutrition' },
  'escarre': { ch: 'ch13', search: 'escarre' },
  'escarres': { ch: 'ch13', search: 'escarre' },
  'soins palliatifs': { ch: 'ch17', search: 'palliatif' },
  'polymédication': { ch: 'ch16', search: 'iatrogénie' },
  'iatrogénie': { ch: 'ch16', search: 'iatrogénie' },
  'iatrogène': { ch: 'ch16', search: 'iatrogénie' },
  'AGGIR': { ch: 'ch3', search: 'autonomie' },
  'AVD': { ch: 'ch3', search: 'autonomie' },
  'douleur': { ch: 'ch8', search: 'douleur' },
  'presbyacousie': { ch: 'ch5', search: 'audition' },
  'DMLA': { ch: 'ch5', search: 'vision' },
};

/**
 * Wraps occurrences of known medical concepts in clickable <span> elements.
 *
 * Each link gets:
 *   - class="concept-link"
 *   - data-chapter="<ch>"
 *   - data-search="<search>"
 *   - onclick handler that navigates to the chapter and triggers a search
 *
 * Matching is case-insensitive and skips text already inside HTML tags
 * or inside an existing concept-link span.
 *
 * @param {string} text – raw HTML or plain-text content
 * @returns {string} – text with concept links added
 */
function linkifyText(text) {
  if (!text || typeof text !== 'string') return text;

  // Sort keys longest-first so multi-word terms are matched before shorter substrings
  const sortedKeys = Object.keys(CONCEPT_MAP).sort((a, b) => b.length - a.length);

  // Build a single regex that matches any concept, case-insensitively.
  const escaped = sortedKeys.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const conceptRegex = new RegExp('(' + escaped.join('|') + ')', 'gi');

  // --- Phase 1: Protect existing concept-link spans FIRST (entire span including content) ---
  const placeholders = [];
  let protectedText = text.replace(
    /<span[^>]*class="concept-link"[^>]*>[\s\S]*?<\/span>/gi,
    match => {
      placeholders.push(match);
      return '\x00' + (placeholders.length - 1) + '\x01';
    }
  );

  // --- Phase 2: Protect remaining HTML tags (but not the text between them) ---
  protectedText = protectedText.replace(/<[^>]+>/g, match => {
    placeholders.push(match);
    return '\x00' + (placeholders.length - 1) + '\x01';
  });

  // Check if a position is inside a placeholder region (between \x00 and \x01)
  function isInsidePlaceholder(pos) {
    for (let i = pos - 1; i >= 0; i--) {
      if (protectedText[i] === '\x01') return false;
      if (protectedText[i] === '\x00') return true;
    }
    return false;
  }

  // --- Phase 3: Replace concept occurrences, skipping protected regions ---
  let result = protectedText.replace(conceptRegex, (matched, _group, offset) => {
    if (isInsidePlaceholder(offset)) return matched;

    const key = matched.toLowerCase();
    const entry = sortedKeys.find(k => k.toLowerCase() === key);
    if (!entry) return matched;

    const info = CONCEPT_MAP[entry];
    return (
      '<span class="concept-link" data-chapter="' + info.ch + '" data-search="' + info.search + '"' +
      ' onclick="navigateToConcept(\'' + info.ch + '\', \'' + info.search + '\')">' +
      matched + '</span>'
    );
  });

  // --- Phase 4: Restore all placeholders ---
  result = result.replace(/\x00(\d+)\x01/g, (_, idx) => placeholders[parseInt(idx)]);

  return result;
}
