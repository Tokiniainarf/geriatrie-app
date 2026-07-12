const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const source = fs.readFileSync(path.join(ROOT, 'data-bundle.js'), 'utf8');
const sandbox = {
  console,
  window: { addEventListener() {} },
  document: {
    addEventListener() {},
    getElementById() { return null; },
    querySelector() { return null; },
    querySelectorAll() { return []; },
    documentElement: { setAttribute() {}, classList: { add() {}, remove() {} } },
  },
  navigator: {},
  localStorage: { getItem() { return null; }, setItem() {} },
  setTimeout,
  clearTimeout,
};
sandbox.globalThis = sandbox;
vm.createContext(sandbox);
vm.runInContext(source, sandbox, { filename: 'data-bundle.js', timeout: 30_000 });

const names = [...new Set([...source.matchAll(/^(?:const|var)\s+([A-Z][A-Z0-9_]+)\s*=/gm)].map(match => match[1]))];
const datasets = [];
for (const name of names) {
  try {
    const value = vm.runInContext(name, sandbox);
    if (Array.isArray(value) && value.length && value.every(item => item && typeof item === 'object')) {
      datasets.push({ name, rows: value });
    }
  } catch (_) {}
}

const preferredFields = [
  'question', 'q', 'title', 'titre', 'nom', 'term', 'label', 'case', 'cas',
  'vignette', 'trap', 'text', 'contenu', 'description', 'indication', 'diagnosis',
];

function primaryText(row) {
  for (const field of preferredFields) {
    if (typeof row[field] === 'string' && row[field].trim().length >= 8) return row[field].trim();
  }
  return '';
}

function normalize(value) {
  return String(value || '')
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/<[^>]+>/g, ' ')
    .replace(/[^a-z0-9]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function tokens(value) {
  return new Set(normalize(value).split(' ').filter(word => word.length > 2));
}

function jaccard(a, b) {
  const left = tokens(a), right = tokens(b);
  if (!left.size || !right.size) return 0;
  let intersection = 0;
  for (const word of left) if (right.has(word)) intersection++;
  return intersection / (left.size + right.size - intersection);
}

const exactWithin = [];
const duplicateIds = [];
const suspicious = [];
const legacySuspicious = [];
const globalSignatures = new Map();
const LEGACY_NOT_RENDERED = new Set(['REVISION_AIDS', 'REVISION_FLASHCARDS', 'ANNALES_ARCHIVE']);
const suspiciousRe = /(?:&#39;|&amp;#39;|Rang\s+Rubrique|Situations?\s+de\s+départ|This page intentionally|particucompl|plateauxrepas|nouverau|neurocognitfs|hypokaliméie|rengorgement|carence maritale|complémantaires|Ionogamme|Quelles\(s\)|prise en charge en charge|dans en période)/i;

for (const dataset of datasets) {
  const ids = new Map();
  const signatures = new Map();
  dataset.rows.forEach((row, index) => {
    if (row.id != null) {
      const id = String(row.id);
      if (ids.has(id)) duplicateIds.push(`${dataset.name}: id ${id} aux lignes ${ids.get(id) + 1} et ${index + 1}`);
      else ids.set(id, index);
    }
    const text = primaryText(row);
    const signature = normalize(text);
    if (signature.length >= 24) {
      if (!signatures.has(signature)) signatures.set(signature, []);
      signatures.get(signature).push(index);
      if (!globalSignatures.has(signature)) globalSignatures.set(signature, []);
      globalSignatures.get(signature).push({ dataset: dataset.name, index, text });
    }
    const serialized = JSON.stringify(row);
    if (suspiciousRe.test(serialized)) {
      const target = LEGACY_NOT_RENDERED.has(dataset.name) ? legacySuspicious : suspicious;
      target.push(`${dataset.name}[${index + 1}] ${text.slice(0, 120)}`);
    }
  });
  for (const [signature, indexes] of signatures) {
    if (indexes.length > 1) exactWithin.push(`${dataset.name}: ${indexes.length}× « ${primaryText(dataset.rows[indexes[0]]).slice(0, 140)} »`);
  }
}

const crossDataset = [];
for (const entries of globalSignatures.values()) {
  const datasetNames = [...new Set(entries.map(entry => entry.dataset))];
  if (datasetNames.length > 1) {
    crossDataset.push(`${datasetNames.join(' ↔ ')} : « ${entries[0].text.slice(0, 150)} »`);
  }
}

const coreNames = new Set([
  'ANNALES', 'ANNALES_EXPANDED', 'ANNALES_ARCHIVE', 'ANNALES_V2',
  'PROTOCOLES_URGENCE', 'PROTOCOLES_COMPLETS', 'FICHES_GARDE',
  'SCORES_GERIATRIE', 'FORMULES_GERIATRIE', 'PHARMO_GERIATRIE',
  'REVISION_AIDS', 'REVISION_FLASHCARDS', 'EVC_FLASHCARDS',
  'QUIZ_URGENCE', 'MEMOS_RAPIDES', 'SYNTHESIS_EXPANDED',
  'CAS_INTERACTIFS', 'SITUATIONS_EVC', 'CHECKLIST_GARDE',
]);

const nearWithin = [];
for (const dataset of datasets.filter(item => coreNames.has(item.name) && item.rows.length <= 300)) {
  const candidates = dataset.rows.map((row, index) => ({ index, text: primaryText(row) })).filter(item => item.text.length >= 45);
  for (let i = 0; i < candidates.length; i++) {
    for (let j = i + 1; j < candidates.length; j++) {
      if (normalize(candidates[i].text) === normalize(candidates[j].text)) continue;
      const score = jaccard(candidates[i].text, candidates[j].text);
      if (score >= 0.88) nearWithin.push(`${dataset.name}[${candidates[i].index + 1}/${candidates[j].index + 1}] ${score.toFixed(2)} : « ${candidates[i].text.slice(0, 95)} » / « ${candidates[j].text.slice(0, 95)} »`);
    }
  }
}

let feed = { deck: [], pools: {} };
let flash = { total: 0, revision: 0, long: 0 };
try {
  const { sb } = require('./simulate_load.js');
  feed = vm.runInContext('BrainFeed.audit()', sb);
  flash = vm.runInContext(`(() => {
    const cards = filterDeck();
    return {
      total: cards.length,
      revision: cards.filter(card => /^rev-/.test(String(card.id || ''))).length,
      long: cards.filter(card => String(card.question || card.q || '').length > 220 || String(card.answer || card.a || '').length > 900).length,
    };
  })()`, sb);
} catch (error) {
  suspicious.push(`BrainFeed audit indisponible: ${error.message}`);
}

const feedExact = [];
const feedSeen = new Map();
const feedLong = [];
for (const [index, card] of feed.deck.entries()) {
  const text = primaryText(card);
  const signature = normalize(text);
  if (signature && feedSeen.has(signature)) feedExact.push(`${feedSeen.get(signature) + 1}/${index + 1}: « ${text.slice(0, 130)} »`);
  else if (signature) feedSeen.set(signature, index);
  const questionLength = String(card.question || card.title || '').length;
  const vignetteLength = String(card.vignette || '').length;
  if (questionLength > 260 || vignetteLength > 800) feedLong.push(`${index + 1} ${card.type}: question ${questionLength}, vignette ${vignetteLength}`);
}

const feedNear = [];
for (let i = 0; i < feed.deck.length; i++) {
  const left = primaryText(feed.deck[i]);
  if (left.length < 40) continue;
  for (let j = i + 1; j < feed.deck.length; j++) {
    const right = primaryText(feed.deck[j]);
    if (right.length < 40 || normalize(left) === normalize(right)) continue;
    const score = jaccard(left, right);
    if (score >= 0.88) feedNear.push(`${i + 1}/${j + 1} ${score.toFixed(2)} : « ${left.slice(0, 100)} » / « ${right.slice(0, 100)} »`);
  }
}

const cacheSource = fs.readFileSync(path.join(ROOT, 'sw.js'), 'utf8');
const appVersion = (cacheSource.match(/geriatrie-v(\d+)/) || [])[1] || 'courante';
const lines = [];
lines.push(`# Audit transversal de pertinence et répétitions — v${appVersion}`, '');
lines.push(`- ${datasets.length} jeux de données structurés chargés, ${datasets.reduce((sum, dataset) => sum + dataset.rows.length, 0)} enregistrements.`);
lines.push(`- BrainFeed rendu : ${feed.deck.length} cartes (${Object.entries(feed.deck.reduce((acc, card) => ((acc[card.type] = (acc[card.type] || 0) + 1), acc), {})).map(([key, value]) => `${key} ${value}`).join(', ')}).`);
lines.push(`- Identifiants dupliqués dans un même jeu : ${duplicateIds.length}.`);
lines.push(`- Textes strictement dupliqués dans un même jeu : ${exactWithin.length}.`);
lines.push(`- Paires quasi-identiques dans les modules principaux : ${nearWithin.length}.`);
lines.push(`- Cartes Feed strictement dupliquées : ${feedExact.length}; quasi-identiques : ${feedNear.length}; trop longues : ${feedLong.length}.`, '');
lines.push(`- Flashcards rendues : ${flash.total}; anciennes cartes OCR rendues : ${flash.revision}; cartes excessivement longues : ${flash.long}.`, '');

function section(title, values, limit = 80) {
  lines.push(`## ${title}`, '');
  if (!values.length) lines.push('- Aucun.', '');
  else {
    values.slice(0, limit).forEach(value => lines.push(`- ${value}`));
    if (values.length > limit) lines.push(`- … ${values.length - limit} autre(s) entrée(s) dans l’audit complet.`);
    lines.push('');
  }
}

section('Identifiants dupliqués', duplicateIds);
section('Doublons stricts internes', exactWithin);
section('Quasi-doublons internes', nearWithin);
section('Chevauchements exacts entre modules', crossDataset, 100);
section('Artefacts ou incohérences lexicales', suspicious);
section('Artefacts conservés uniquement pour traçabilité (non rendus)', legacySuspicious);
section('BrainFeed — doublons stricts', feedExact);
section('BrainFeed — quasi-doublons', feedNear);
section('BrainFeed — contenus trop longs', feedLong);

lines.push('## Lecture fonctionnelle', '');
lines.push('- Les chevauchements entre protocole, garde, synthèse et flashcard sont acceptables lorsqu’ils servent des contextes différents ; ils ne doivent pas produire deux cartes identiques dans la même vue.');
lines.push('- REVISION_AIDS, REVISION_FLASHCARDS et ANNALES_ARCHIVE restent dans le bundle historique mais sont explicitement exclus des vues actives.');
lines.push('- La référence clinique historique n’expose plus ses anciennes posologies génériques dans la recherche ; seuls les scores relus restent indexés.');
lines.push('- Les contrôles automatiques n’établissent pas la validité clinique : ils signalent les éléments nécessitant une relecture ciblée.');

const reportPath = path.join(__dirname, 'cross_module_audit_report.md');
fs.writeFileSync(reportPath, lines.join('\n'), 'utf8');
console.log(JSON.stringify({
  reportPath,
  datasets: datasets.length,
  records: datasets.reduce((sum, dataset) => sum + dataset.rows.length, 0),
  duplicateIds: duplicateIds.length,
  exactWithin: exactWithin.length,
  nearWithin: nearWithin.length,
  crossDataset: crossDataset.length,
  suspicious: suspicious.length,
  legacySuspicious: legacySuspicious.length,
  flash,
  feed: { cards: feed.deck.length, exact: feedExact.length, near: feedNear.length, long: feedLong.length },
}, null, 2));
