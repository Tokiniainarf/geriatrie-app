/**
 * Audit final de non-regression du lecteur v230.
 *
 * Ce script charge les trois scripts de production dans l'ordre du navigateur,
 * sans lancer l'interface, puis audite les donnees et le HTML produit.
 *
 * Usage : node tools/audit_v228.js
 */
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const EXPECTED_RANGES = {
  ch1: [30, 41], ch2: [45, 56], ch3: [58, 72], ch4: [76, 83],
  ch5: [87, 97], ch6: [100, 116], ch7: [120, 140], ch8: [142, 152],
  ch9: [155, 175], ch10: [179, 189], ch11: [194, 206], ch12: [209, 223],
  ch13: [226, 245], ch14: [248, 266], ch15: [269, 279], ch16: [284, 316],
  ch17: [319, 328],
};
const EXPECTED_PRACTICE_COUNTS = { ch18: 129, ch19: 21, ch20: 133 };
const EXPECTED_PRACTICE_FIGURES = {
  ch18: ['18.1', '18.2'],
  ch19: [],
  ch20: ['20.1', '20.2'],
};

class El {
  constructor(tag = 'div') {
    this.tagName = String(tag).toUpperCase();
    this.children = [];
    this.attributes = {};
    this.style = {};
    this.dataset = {};
    this.value = '';
    this._text = '';
    this._html = '';
    this.classList = {
      values: new Set(),
      add: (...names) => names.forEach(name => this.classList.values.add(name)),
      remove: (...names) => names.forEach(name => this.classList.values.delete(name)),
      contains: name => this.classList.values.has(name),
      toggle: (name, force) => {
        const enabled = typeof force === 'boolean' ? force : !this.classList.values.has(name);
        if (enabled) this.classList.values.add(name); else this.classList.values.delete(name);
        return enabled;
      },
    };
  }
  get id() { return this.attributes.id || ''; }
  set id(value) { this.attributes.id = String(value); }
  get className() { return [...this.classList.values].join(' '); }
  set className(value) {
    this.classList.values = new Set(String(value).split(/\s+/).filter(Boolean));
  }
  get textContent() {
    return this.children.length
      ? this.children.map(child => child.textContent || '').join('')
      : this._text;
  }
  set textContent(value) {
    this._text = String(value);
    this._html = this._text;
    this.children = [];
  }
  get innerHTML() {
    return this.children.length
      ? this.children.map(child => child.outerHTML || child.innerHTML || child.textContent || '').join('')
      : this._html;
  }
  set innerHTML(value) {
    this._html = String(value);
    this._text = String(value).replace(/<[^>]+>/g, '');
    this.children = [];
  }
  get outerHTML() { return `<${this.tagName.toLowerCase()}>${this.innerHTML}</${this.tagName.toLowerCase()}>`; }
  appendChild(child) { this.children.push(child); return child; }
  setAttribute(name, value) { this.attributes[name] = String(value); }
  getAttribute(name) { return this.attributes[name] ?? null; }
  hasAttribute(name) { return Object.prototype.hasOwnProperty.call(this.attributes, name); }
  removeAttribute(name) { delete this.attributes[name]; }
  addEventListener() {}
  removeEventListener() {}
  querySelector() { return null; }
  querySelectorAll() { return []; }
  closest() { return null; }
  focus() {}
  click() {}
  scrollIntoView() {}
  getBoundingClientRect() { return { top: 0, left: 0, right: 100, bottom: 40, width: 100, height: 40 }; }
}

const byId = new Map();
function ensure(id) {
  if (!byId.has(id)) {
    const element = new El();
    element.id = id;
    byId.set(id, element);
  }
  return byId.get(id);
}

const listeners = {};
const documentMock = {
  documentElement: ensure('html'),
  body: ensure('body'),
  readyState: 'loading',
  createElement: tag => new El(tag),
  createTextNode: text => ({ textContent: String(text) }),
  getElementById: id => ensure(id),
  querySelector: selector => selector && selector.startsWith('#') ? ensure(selector.slice(1)) : ensure('body'),
  querySelectorAll: () => [],
  addEventListener: (event, callback) => { (listeners[event] ||= []).push(callback); },
};

const store = {};
const localStorageMock = {
  getItem: key => store[key] ?? null,
  setItem: (key, value) => { store[key] = String(value); },
  removeItem: key => { delete store[key]; },
  clear: () => Object.keys(store).forEach(key => delete store[key]),
};

const windowMock = {
  document: documentMock,
  localStorage: localStorageMock,
  location: { href: 'http://localhost/', hash: '', pathname: '/' },
  innerWidth: 1280,
  innerHeight: 800,
  scrollY: 0,
  addEventListener: (event, callback) => { (listeners[event] ||= []).push(callback); },
  removeEventListener() {},
  scrollTo() {},
  print() {},
  matchMedia: () => ({ matches: false, addListener() {}, addEventListener() {}, removeEventListener() {} }),
  getComputedStyle: () => ({ getPropertyValue: () => '' }),
  requestAnimationFrame: callback => setTimeout(callback, 0),
  navigator: {
    userAgent: 'node-audit-v230',
    serviceWorker: { register: () => Promise.resolve({}) },
  },
};
documentMock.defaultView = windowMock;

const sandbox = {
  console,
  document: documentMock,
  window: windowMock,
  self: windowMock,
  globalThis: windowMock,
  localStorage: localStorageMock,
  navigator: windowMock.navigator,
  setTimeout,
  clearTimeout,
  setInterval,
  clearInterval,
  alert() {},
  confirm: () => true,
  prompt: () => null,
  performance: { now: () => Date.now() },
  Image: function Image() { this.onload = null; this.onerror = null; this.src = ''; },
};
Object.assign(sandbox, windowMock);
const ctx = vm.createContext(sandbox);

const failures = [];
const warnings = [];
const passes = [];

function fail(scope, message) { failures.push(`[${scope}] ${message}`); }
function warn(scope, message) { warnings.push(`[${scope}] ${message}`); }
function pass(scope, message) { passes.push(`[${scope}] ${message}`); }
function assert(scope, condition, message) {
  if (condition) pass(scope, message); else fail(scope, message);
}
function evaluate(expression) {
  return vm.runInContext(expression, ctx, { timeout: 120000 });
}
function load(file) {
  const full = path.join(ROOT, file);
  if (!fs.existsSync(full)) {
    fail('chargement', `${file} absent`);
    return;
  }
  try {
    vm.runInContext(fs.readFileSync(full, 'utf8'), ctx, { filename: file, timeout: 120000 });
    pass('chargement', `${file} charge`);
  } catch (error) {
    fail('chargement', `${file}: ${error.message}`);
  }
}
function decodeHtml(text) {
  return String(text)
    .replace(/&nbsp;/gi, ' ')
    .replace(/&(?:amp;)?#39;|&apos;/gi, "'")
    .replace(/&(?:amp;)?quot;/gi, '"')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&amp;/gi, '&');
}
function plainText(html) {
  return decodeHtml(String(html)
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' '))
    .replace(/\s+/g, ' ')
    .trim();
}
function countMatches(text, regex) {
  return [...String(text).matchAll(regex)].length;
}
function excerpt(text, length = 180) {
  const compact = String(text || '').replace(/\s+/g, ' ').trim();
  return compact.length <= length ? compact : `${compact.slice(0, length)}…`;
}
function around(text, needle, radius = 130) {
  const source = String(text || '').replace(/\s+/g, ' ').trim();
  const index = source.toLowerCase().indexOf(String(needle).toLowerCase());
  if (index < 0) return '(introuvable)';
  return excerpt(source.slice(Math.max(0, index - radius), index + needle.length + radius), radius * 2);
}
function paragraphContext(html, matchIndex) {
  const before = String(html).slice(0, matchIndex);
  const sectionStart = before.lastIndexOf('<section');
  const sectionEnd = before.lastIndexOf('</section>');
  let section = 'hors section';
  if (sectionStart > sectionEnd) {
    const opening = String(html).slice(sectionStart, String(html).indexOf('>', sectionStart) + 1);
    const id = opening.match(/\bid="([^"]+)"/i);
    const cls = opening.match(/\bclass="([^"]+)"/i);
    section = `${id ? `#${id[1]}` : 'section'}${cls ? ` .${cls[1].replace(/\s+/g, '.')}` : ''}`;
  }
  const headingMatches = [...before.slice(Math.max(0, before.length - 8000))
    .matchAll(/<h([2-4])\b[^>]*>([\s\S]*?)<\/h\1>/gi)];
  const heading = headingMatches.length ? plainText(headingMatches.at(-1)[2]) : '(sans titre precedent)';
  return { section, heading };
}
function probableParagraphCause(text) {
  const value = String(text || '');
  const gradeTokens = countMatches(value, /(?:^|\s)[AB](?=\s+[A-ZÀ-ÖØ-Þ])/g);
  const bulletTokens = countMatches(value, /[•▪]/g);
  if (gradeTokens >= 3) return `tableau/encadre OCR aplati (${gradeTokens} marqueurs A/B non structures)`;
  if (bulletTokens >= 4) return `liste aplatie dans un paragraphe (${bulletTokens} puces)`;
  return 'bloc source sans separateur reconnu; decoupage en phrases non applique ou insuffisant';
}
function expectedPages(range) {
  return Array.from({ length: range[1] - range[0] + 1 }, (_, index) => range[0] + index);
}
function canonicalChunks(chId) {
  const [start, end] = EXPECTED_RANGES[chId];
  return evaluate(`APP_DATA.content.${chId}.filter(c => Number(c[0]) >= ${start} && Number(c[0]) <= ${end})`);
}
function renderKnowledge(chId) {
  return evaluate(`renderChapter(prepareKnowledgePages(${JSON.stringify(chId)}, APP_DATA.content.${chId}), ${JSON.stringify(chId)})`);
}
function extractCanonicalFigureIds(chunks) {
  const ids = new Set();
  const caption = /^\s*(?:\d{1,3}\s+)?Fig(?:ure)?\.?\s*(\d{1,2}\.\d{1,2})(?=\s|[.:,;—–-]|$)/gim;
  for (const chunk of chunks) {
    const source = String(chunk[1] || '');
    for (const match of source.matchAll(caption)) ids.add(match[1]);
  }
  return [...ids].sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
}
function renderedFigurePresent(html, id) {
  const escaped = id.replace('.', '\\.');
  return new RegExp(`(?:Figure|Fig\\.)\\s*${escaped}(?:\\b|\\s|[—–-])`, 'i').test(plainText(html)) ||
    new RegExp(`data-fig=["']${escaped}["']`, 'i').test(html);
}

load('data-bundle.js');
load('practice-data.js');
load('app.js');
load('brainfeed.js');

if (!failures.some(item => item.startsWith('[chargement]'))) {
  const declaredRanges = JSON.parse(evaluate('JSON.stringify(KNOWLEDGE_BODY_PAGE_RANGES)'));
  assert('plages', JSON.stringify(declaredRanges) === JSON.stringify(EXPECTED_RANGES),
    'KNOWLEDGE_BODY_PAGE_RANGES correspond aux 17 plages canoniques');

  const beforePreprocess = {};
  for (const [chId, range] of Object.entries(EXPECTED_RANGES)) {
    const pages = canonicalChunks(chId).map(chunk => Number(chunk[0]));
    const wanted = expectedPages(range);
    beforePreprocess[chId] = pages;
    assert(chId, JSON.stringify(pages) === JSON.stringify(wanted),
      `pages canoniques continues ${range[0]}-${range[1]} (${wanted.length} pages)`);
    const prepared = evaluate(`prepareKnowledgePages(${JSON.stringify(chId)}, APP_DATA.content.${chId})`);
    assert(chId, countMatches(prepared, /§§CHAPTER_PAGE_BREAK§§/g) === wanted.length,
      `${wanted.length} separations de pages dans le flux prepare`);
  }

  evaluate('preprocessAppData()');
  for (const [chId, range] of Object.entries(EXPECTED_RANGES)) {
    const after = canonicalChunks(chId).map(chunk => Number(chunk[0]));
    assert('preprocess', JSON.stringify(after) === JSON.stringify(beforePreprocess[chId]),
      `${chId} conserve strictement sa plage ${range[0]}-${range[1]}`);
  }

  const renderedKnowledge = {};
  const figureInventory = {};
  const allFigureIds = new Set();
  for (const chId of Object.keys(EXPECTED_RANGES)) {
    let html = '';
    try {
      html = renderKnowledge(chId);
      renderedKnowledge[chId] = html;
      assert(chId, html.length > 1000, `rendu substantiel (${html.length} caracteres HTML)`);
    } catch (error) {
      fail(chId, `rendu impossible: ${error.message}`);
      continue;
    }

    const text = plainText(html);
    const forbidden = [
      ['Rang Rubrique', 'tableau de programme Rang/Rubrique'],
      ['Situations de depart', 'bloc Situations de depart'],
      ['Item, objectifs pedagogiques', 'bloc objectifs pedagogiques'],
      ['particucomplementaires', 'mot fusionne particucomplementaires'],
      ['&#39;', 'entite HTML &#39; non decodee'],
      ['&amp;#39;', 'entite HTML doublement encodee'],
    ];
    const normalized = text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    for (const [needle, label] of forbidden) {
      assert(chId, !normalized.includes(needle.toLowerCase()), `absence de ${label}`);
    }

    const paragraphs = [];
    for (const block of html.matchAll(/<div class="([^"]*\bpara-card\b[^"]*)"[^>]*>([\s\S]*?)<\/div>/gi)) {
      for (const paragraph of block[2].matchAll(/<p>([\s\S]*?)<\/p>/gi)) {
        paragraphs.push({
          className: block[1],
          text: plainText(paragraph[1]),
          index: block.index + paragraph.index,
        });
      }
    }
    const longestParagraph = paragraphs.reduce((longest, paragraph) =>
      paragraph.text.length > longest.text.length ? paragraph : longest,
    { className: '', text: '', index: 0 });
    const longest = longestParagraph.text.length;
    const paragraphLocation = paragraphContext(html, longestParagraph.index);
    assert(chId, paragraphs.length > 0, `${paragraphs.length} paragraphes editoriaux detectes`);
    assert(chId, longest <= 650,
      `paragraphe editorial le plus long: ${longest}/650 caracteres | ` +
      `ancetre=.${longestParagraph.className.replace(/\s+/g, '.')} dans ${paragraphLocation.section} | ` +
      `titre=${JSON.stringify(paragraphLocation.heading)} | ` +
      `debut=« ${excerpt(longestParagraph.text, 150)} » | ` +
      `fin=« ${excerpt(longestParagraph.text.slice(-170), 170)} » | ` +
      `cause probable=${probableParagraphCause(longestParagraph.text)}`);

    const figureIds = extractCanonicalFigureIds(canonicalChunks(chId));
    figureInventory[chId] = figureIds;
    figureIds.forEach(id => allFigureIds.add(id));
    for (const id of figureIds) {
      const block = evaluate(`buildFigureBlock(${JSON.stringify(id)}, '')`);
      assert(`${chId}/fig.${id}`, Boolean(block && block.length > 40), 'figure remade/clinique disponible');
      assert(`${chId}/fig.${id}`, renderedFigurePresent(html, id), 'figure inseree dans le flux du chapitre');
    }
  }

  // 66 est le total exact du corps ch1-ch17. L'ancien inventaire a 65
  // omettait la fig. 13.5, dont la legende OCR commence par « 208 Fig. 13.5 ».
  assert('figures', allFigureIds.size === 66,
    `66 figures canoniques inventoriees, figure 13.5 comprise (detectees: ${allFigureIds.size}) — ` +
      Object.entries(figureInventory).filter(([, ids]) => ids.length)
        .map(([chId, ids]) => `${chId}=[${ids.join(', ')}]`).join(' ; '));

  const ch1 = plainText(renderedKnowledge.ch1 || '');
  assert('ch1', /record pour l'espece humaine est de\s+122\s+ans/i.test(
    ch1.normalize('NFD').replace(/[\u0300-\u036f]/g, '')),
  'phrase sur le record humain completee jusqu\'a 122 ans');
  assert('ch1', !/\bB\s+La longevite maximale/i.test(ch1.normalize('NFD').replace(/[\u0300-\u036f]/g, '')),
    'absence du B parasite devant « La longevite maximale »');
  assert('ch1', renderedFigurePresent(renderedKnowledge.ch1 || '', '1.1'),
    'figure 1.1 presente dans la lecture');

  const ch7Html = renderedKnowledge.ch7 || '';
  const ch7Text = plainText(ch7Html).normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  for (const group of ['Generalites', 'Coxarthrose', 'Gonarthrose', 'Arthrose digitale']) {
    assert('ch7', new RegExp(`class="chapter-group"[^>]*>${group.replace('e', '[eé]')}`, 'i').test(
      ch7Html.normalize('NFD').replace(/[\u0300-\u036f]/g, '')),
    `groupe « ${group} » present`);
  }
  assert('ch7', /Motif de consultation\s*:\s*quand evoquer\s+le diagnostic\s*\?/i.test(ch7Text),
    `titre complet « Motif de consultation : quand evoquer le diagnostic ? » — rendu: « ${around(ch7Text, 'Motif de consultation')} »`);

  const ch13Text = plainText(renderedKnowledge.ch13 || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  assert('ch13', !/HbA1c chez les personnes diabetiques/i.test(ch13Text),
    'absence de contamination HbA1c du chapitre 12');
  assert('ch13', !/examens biologiques de routine/i.test(ch13Text),
    'absence du bloc d\'examens de routine du chapitre 12');
  assert('ch13', /I\s+Generalites/i.test(ch13Text), 'demarrage sur I. Generalites');

  const ch16Html = (renderedKnowledge.ch16 || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  for (const group of [
    'Bon usage des psychotropes',
    'Savoir quand et comment transfuser un patient age en concentres de globules rouges',
  ]) {
    assert('ch16', ch16Html.includes(group), `groupe « ${group} » present`);
  }
  const ch16Text = plainText(renderedKnowledge.ch16 || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  if (/Rang Rubrique/i.test(ch16Text)) {
    warn('ch16', `contexte Rang/Rubrique: « ${around(ch16Text, 'Rang Rubrique')} »`);
  }

  const practice = JSON.parse(evaluate('JSON.stringify(PRACTICE_DATA)'));
  for (const [chId, expectedCount] of Object.entries(EXPECTED_PRACTICE_COUNTS)) {
    const items = practice[chId] || [];
    assert(chId, items.length === expectedCount, `${expectedCount} exercices structures`);
    const badStems = items.filter(item => !String(item.stem || '').trim() || String(item.stem).trim().length < 10);
    const badOptions = items.filter(item => !Array.isArray(item.options) || item.options.length < 2 ||
      item.options.some(option => !String(option.letter || '').trim() || !String(option.text || '').trim()));
    const badAnswers = items.filter(item => !String(item.answer || '').trim() || /^(?:AAAA|reponse\s*:?)$/i.test(String(item.answer).trim()));
    const badSelection = items.filter(item => !['QRM', 'QRU'].includes(item.selection));
    const labels = items.map(item => String(item.label || '').trim());
    const duplicateLabels = labels.filter((label, index) => label && labels.indexOf(label) !== index);
    assert(chId, badStems.length === 0, 'tous les enonces sont substantiels');
    assert(chId, badOptions.length === 0, 'toutes les options sont renseignees');
    assert(chId, badAnswers.length === 0, 'toutes les corrections sont renseignees et sans AAAA');
    assert(chId, badSelection.length === 0, 'tous les exercices declarent QRM ou QRU');
    assert(chId, duplicateLabels.length === 0, 'aucun libelle d\'exercice duplique');

    const figureIds = [...new Set(items.map(item => item.figureId).filter(Boolean))].sort();
    assert(chId, JSON.stringify(figureIds) === JSON.stringify(EXPECTED_PRACTICE_FIGURES[chId]),
      `figures d'exercices attendues: ${EXPECTED_PRACTICE_FIGURES[chId].join(', ') || 'aucune'}`);

    const html = evaluate(`renderChapter('', ${JSON.stringify(chId)})`);
    assert(chId, countMatches(html, /<article class="pqcm-card"/g) === expectedCount,
      `${expectedCount} cartes rendues`);
    assert(chId, countMatches(html, /class="pqcm-answer"/g) === expectedCount,
      `${expectedCount} corrections rendues`);
    for (const id of EXPECTED_PRACTICE_FIGURES[chId]) {
      assert(`${chId}/fig.${id}`, renderedFigurePresent(html, id), 'figure clinique inseree dans la carte source');
    }
  }

  const studyCards = JSON.parse(evaluate('JSON.stringify(filterDeck())'));
  assert('flashcards', studyCards.length >= 900, `${studyCards.length} cartes editoriales disponibles`);
  assert('flashcards', studyCards.every(card => !/^rev-/.test(String(card.id || ''))),
    'aucune ancienne carte OCR « Points cles » dans la revision');
  assert('flashcards', studyCards.every(card => String(card.question || card.q || '').length <= 220 &&
    String(card.answer || card.a || '').length <= 900), 'aucune carte excessivement longue');

  const feedAudit = JSON.parse(evaluate('JSON.stringify(BrainFeed.audit())'));
  const feedSignatures = feedAudit.deck.map(card => plainText(card.question || card.vignette || card.trap || card.title || '')
    .toLowerCase().replace(/\s+/g, ' ').trim()).filter(Boolean);
  assert('feed', feedAudit.deck.length >= 60, `${feedAudit.deck.length} cartes utiles dans la seance mixte`);
  assert('feed', new Set(feedSignatures).size === feedSignatures.length, 'aucune carte dupliquee dans la seance');
  assert('feed', feedAudit.deck.every(card => String(card.question || '').length <= 260 &&
    String(card.vignette || '').length <= 800), 'aucune question ou vignette excessivement longue');
  assert('feed', (feedAudit.pools.visualExplanations || []).length <= 35,
    `${(feedAudit.pools.visualExplanations || []).length} concepts visuels uniques apres fusion image/video`);

  const verifiedModules = evaluate(`JSON.stringify({
    memos: MEMOS_RAPIDES,
    visualMemos: MEMOS_VISUELS,
    quickReference: AIDE_MEMOIRE_RAPIDE,
    scores: CLINICAL_REFERENCE.filter(card => card.category === 'Scores'),
    urgenceQuiz: QUIZ_URGENCE,
    practicalGuides: GUIDES_PRATIQUES,
    consultationGuides: GUIDES_CONSULTATION,
    physiotherapyGuides: GUIDES_PHYSIOTHERAPIE,
  })`);
  assert('coherence', !/ECPA.{0,100}(?:5 items|5\/10|≥\s*4\/10)/i.test(verifiedModules),
    'aucune confusion ECPA/PAINAD/ALGOPLUS dans les modules rendus');
  assert('coherence', !/CAM\+\s*=\s*\(1\+2\)\s*ou/i.test(verifiedModules),
    'formule CAM coherente : 1 + 2 + (3 ou 4)');
  assert('coherence', !/(?:TUG|Timed Up and Go).{0,60}(?:>|<)\s*(?:10|12|14)\s*s/i.test(verifiedModules),
    'repere TUG harmonise sur le manuel (> 20 s)');
}

console.log('\n=== AUDIT FINAL V230 ===');
console.log(`PASS: ${passes.length} | WARN: ${warnings.length} | FAIL: ${failures.length}`);
if (warnings.length) {
  console.log('\nAvertissements:');
  warnings.forEach(item => console.log(`  - ${item}`));
}
if (failures.length) {
  console.log('\nEchecs:');
  failures.forEach(item => console.log(`  - ${item}`));
  process.exitCode = 1;
} else {
  console.log('Toutes les verifications v230 sont conformes.');
}
