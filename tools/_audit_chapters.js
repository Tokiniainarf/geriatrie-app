/** Audit raw + rendered chapter content for dups / OCR noise. */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const ROOT = path.join(__dirname, '..');

class El {
  constructor(t = 'div') {
    this.tagName = t.toUpperCase();
    this.children = [];
    this.attributes = {};
    this.style = {};
    this.classList = { _l: new Set(), add(c) { this._l.add(c); }, remove(c) { this._l.delete(c); }, contains(c) { return this._l.has(c); }, toggle() {} };
    this._text = ''; this._html = '';
  }
  get id() { return this.attributes.id || ''; }
  set id(v) { this.attributes.id = v; }
  get textContent() { return this._text; }
  set textContent(v) { this._text = String(v); }
  get innerHTML() { return this._html; }
  set innerHTML(v) { this._html = String(v); this._text = String(v).replace(/<[^>]+>/g, ''); }
  appendChild(c) { this.children.push(c); return c; }
  setAttribute(k, v) { this.attributes[k] = v; }
  getAttribute(k) { return this.attributes[k] ?? null; }
  addEventListener() {}
  querySelector() { return null; }
  querySelectorAll() { return []; }
  remove() {}
}

const byId = new Map();
const ensure = (id) => {
  if (!byId.has(id)) { const e = new El(); e.id = id; byId.set(id, e); }
  return byId.get(id);
};

const store = {};
const doc = {
  documentElement: ensure('html'),
  body: ensure('body'),
  createElement: (t) => new El(t),
  getElementById: (id) => ensure(id),
  querySelector: () => null,
  querySelectorAll: () => [],
  addEventListener() {},
};
const win = {
  addEventListener() {},
  scrollTo() {},
  scrollY: 0,
  localStorage: { getItem: (k) => store[k] ?? null, setItem: (k, v) => { store[k] = String(v); }, removeItem: (k) => { delete store[k]; } },
  navigator: { serviceWorker: { register: () => Promise.resolve() } },
  document: doc,
};
doc.defaultView = win;
const ctx = vm.createContext({
  console, document: doc, window: win, self: win, globalThis: win,
  localStorage: win.localStorage, navigator: win.navigator,
  setTimeout, clearTimeout, requestAnimationFrame: (c) => 0,
  alert() {}, confirm() { return true; },
});

vm.runInContext(fs.readFileSync(path.join(ROOT, 'data-bundle.js'), 'utf8'), ctx, { timeout: 120000 });
vm.runInContext(fs.readFileSync(path.join(ROOT, 'app.js'), 'utf8'), ctx, { timeout: 60000 });
vm.runInContext('if (typeof preprocessAppData === "function") preprocessAppData();', ctx);

const APP = ctx.APP_DATA;
if (!APP) {
  console.error('APP_DATA missing. Keys:', Object.keys(ctx).filter((k) => /DATA|FLASH|FIG/.test(k)).slice(0, 20));
  process.exit(1);
}

function normLine(s) {
  return s.replace(/\s+/g, ' ').trim().toLowerCase();
}

function analyzeRaw(raw) {
  const lines = raw.split(/\n/).map((l) => l.trim()).filter(Boolean);
  const counts = new Map();
  for (const l of lines) {
    if (l.length < 30) continue;
    const k = normLine(l);
    counts.set(k, (counts.get(k) || 0) + 1);
  }
  const dups = [...counts.entries()].filter(([, c]) => c >= 2).sort((a, b) => b[1] - a[1]);
  let consec = 0;
  for (let i = 1; i < lines.length; i++) {
    if (lines[i].length > 40 && normLine(lines[i]) === normLine(lines[i - 1])) consec++;
  }
  const hyphens = (raw.match(/[a-zàâäéèêëïîôùûüç]-\s*\n\s*[a-zàâäéèêëïîôùûüç]/gi) || []).length;
  const wordDup = (raw.match(/\b([A-Za-zÀ-ÿ]{5,})\s+\1\b/gi) || []).length;
  // partial word leftovers like "complémentaires plémentaires"
  const fragDup = (raw.match(/\b([A-Za-zÀ-ÿ]{4,})\s+([A-Za-zÀ-ÿ]{4,})\b/g) || []).filter((pair) => {
    const [a, b] = pair.split(/\s+/);
    return b.length >= 4 && a.endsWith(b);
  }).length;
  return { lineCount: lines.length, dupLineTypes: dups.length, topDups: dups.slice(0, 3), consec, hyphens, wordDup, fragDup };
}

function analyzeHtml(html) {
  const paras = [...html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)]
    .map((m) => m[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim())
    .filter((t) => t.length > 45);
  const pc = new Map();
  for (const p of paras) pc.set(p, (pc.get(p) || 0) + 1);
  const dups = [...pc.entries()].filter(([, c]) => c >= 2).sort((a, b) => b[1] - a[1]);
  const sections = (html.match(/manual-section/g) || []).length;
  const emptyBodies = (html.match(/section-body">\s*<\/div>/g) || []).length;
  return { paraCount: paras.length, dupParas: dups.length, topDup: dups[0], sections, emptyBodies };
}

console.log('Chapter audit (raw + rendered)\n');
let totalDupParas = 0;
let totalWordDup = 0;
let totalHyphen = 0;
for (let i = 1; i <= 20; i++) {
  const id = `ch${i}`;
  const pages = APP.content[id] || [];
  const raw = pages.map((p) => p[1]).join('\n');
  const a = analyzeRaw(raw);
  const html = vm.runInContext(
    `renderChapter(APP_DATA.content.${id}.map(c=>c[1]).join("\\n\\n"), ${JSON.stringify(id)})`,
    ctx
  );
  const h = analyzeHtml(html);
  totalDupParas += h.dupParas;
  totalWordDup += a.wordDup;
  totalHyphen += a.hyphens;
  const flag = h.dupParas || a.wordDup > 2 || a.consec > 1 || a.hyphens > 5 ? ' ⚠' : '';
  console.log(
    `${id} p=${pages.length} secs=${h.sections} empty=${h.emptyBodies} ` +
    `rawDupL=${a.dupLineTypes} consec=${a.consec} hyphen=${a.hyphens} wordDup=${a.wordDup} frag=${a.fragDup} ` +
    `htmlDupP=${h.dupParas}${flag}`
  );
  if (h.topDup) console.log(`   para x${h.topDup[1]}: ${h.topDup[0].slice(0, 90)}…`);
  if (a.topDups[0]) console.log(`   line x${a.topDups[0][1]}: ${a.topDups[0][0].slice(0, 90)}…`);
}
console.log(`\nTOTALS htmlDupParas=${totalDupParas} wordDup=${totalWordDup} hyphens=${totalHyphen}`);
