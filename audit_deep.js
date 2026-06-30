// Deep content audit - examine actual rendered output
const vm = require('vm');
const fs = require('fs');

const dataSrc = fs.readFileSync('data.js', 'utf8');
const appSrc = fs.readFileSync('app.js', 'utf8');

class MockElement {
  constructor(tag) {
    this.tagName = tag.toUpperCase();
    this._text = '';
    this._html = '';
  }
  get textContent() { return this._text; }
  set textContent(v) {
    this._text = String(v);
    this._html = this._text.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }
  get innerHTML() { return this._html; }
  set innerHTML(v) {
    this._html = String(v);
    this._text = v.replace(/<[^>]+>/g, '');
  }
}

const sandbox = {
  localStorage: { getItem: ()=>null, setItem: ()=>{} },
  document: {
    createElement: (t)=>new MockElement(t),
    querySelectorAll: ()=>[],
    querySelector: ()=>null,
    getElementById: ()=>null,
    documentElement: { setAttribute: ()=>{} },
    addEventListener: ()=>{}
  },
  window: { addEventListener: ()=>{}, scrollTo: ()=>{}, scrollY: 0 },
  navigator: { serviceWorker: { register: ()=>({catch:()=>{}}) } },
  setTimeout, setInterval, clearInterval, clearTimeout,
  console, FIGURES: {}, alert: ()=>{}, confirm: ()=>false,
  requestAnimationFrame: (cb)=>cb()
};

const context = vm.createContext(sandbox);
vm.runInContext(dataSrc, context);
vm.runInContext(appSrc, context);
vm.runInContext('preprocessAppData()', context);

const chapters = vm.runInContext('APP_DATA.chapters', context);
const content = vm.runInContext('APP_DATA.content', context);

const allIssues = [];

for (const ch of chapters) {
  const id = ch.id;
  const chunks = content[id];
  if (!chunks || !chunks.length) continue;
  
  const raw = chunks.map(c => c[1]).join('\n▼\n');
  const html = vm.runInContext(`renderChapter(${JSON.stringify(raw)}, ${JSON.stringify(id)})`, context);
  const issues = [];

  // Deeper checks:

  // 1. Check for empty sections (section-head followed immediately by </div></section>)
  if (/<header class="section-head">[\s\S]*?<\/header><div class="section-body"><\/div><\/section>/.test(html)) {
    const emptySections = html.match(/<header class="section-head">([\s\S]*?)<\/header><div class="section-body"><\/div><\/section>/g);
    if (emptySections) {
      issues.push(`${emptySections.length} empty section(s) with no body content`);
    }
  }

  // 2. Check for def-blocks with suspiciously short definitions
  const defRegex = /<span class="def-text">([^<]*)<\/span>/g;
  let dm;
  const shortDefs = [];
  while ((dm = defRegex.exec(html)) !== null) {
    if (dm[1].trim().length < 20) shortDefs.push(dm[1].trim());
  }
  if (shortDefs.length > 2) {
    issues.push(`${shortDefs.length} short def-blocks: ${shortDefs.slice(0,3).join(' | ')}`);
  }

  // 3. Check for consecutive empty bullet lists
  if (/<ul class="reader-list"><\/ul>/.test(html)) {
    issues.push('Empty bullet list detected');
  }

  // 4. Check for key-point card with no items
  const kpMatch = html.match(/<div class="key-point">[\s\S]*?<\/div>/);
  if (kpMatch && !/<li>/.test(kpMatch[0])) {
    issues.push('Key-point card has no list items');
  }

  // 5. Look for OCR patterns: words with odd characters, broken words
  const textContent = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
  
  // Repeated consecutive words (OCR artifact)
  const wordDup = /\b(\w{4,})\s+\1\b/gi;
  const dups = [];
  let wm;
  while ((wm = wordDup.exec(textContent)) !== null) {
    if (wm[1].length > 5 && !['les','des','une','pas','que','dans','pour','avec','cette','sont','mais','plus','tout','fait'].includes(wm[1].toLowerCase())) {
      dups.push(wm[1]);
    }
  }
  if (dups.length > 3) {
    issues.push(`Repeated words (${dups.length}): ${[...new Set(dups)].slice(0,5).join(', ')}`);
  }

  // 6. Check paragraphs that are clearly OCR fragments (no verb, very short)
  const allParas = [];
  const pr = /<p[^>]*>([^<]*)<\/p>/g;
  let p;
  while ((p = pr.exec(html)) !== null) allParas.push(p[1].trim());
  
  // Check for sentences ending mid-word (broken hyphenation not caught)
  const brokenWord = /[a-zàâäéèêëïîôùûüç]{2,}[A-Z][a-zàâäéèêëïîôùûüç]{2,}/;
  const brokenParas = allParas.filter(p => {
    // Paragraphs with mid-word capitalization (OCR artifact)
    const words = p.split(/\s+/);
    return words.some(w => /^[a-zàâäéèêëïîôùûüç]{3,}[A-Z]/.test(w));
  });
  if (brokenParas.length > 2) {
    issues.push(`${brokenParas.length} paragraphs with mid-word capitals: ${brokenParas.slice(0,2).map(p=>p.substring(0,80)).join(' | ')}`);
  }

  // 7. Check for proper paragraph count vs raw size
  const rawLines = raw.split('\n').filter(l => l.trim().length > 5).length;
  const paraRatio = allParas.length / rawLines;
  if (paraRatio < 0.01 && rawLines > 20) {
    issues.push(`Very low paragraph ratio: ${allParas.length} paragraphs from ${rawLines} raw lines (${(paraRatio*100).toFixed(1)}%)`);
  }

  // 8. Check that sections have actual content (not just bullets everywhere)
  const sectionBodies = html.match(/<div class="section-body">([\s\S]*?)<\/div><\/section>/g) || [];
  const emptyBodies = sectionBodies.filter(s => {
    const body = s.replace(/<div class="section-body">/, '').replace(/<\/div><\/section>/, '');
    return body.trim().length < 10;
  });
  if (emptyBodies.length > 0) {
    issues.push(`${emptyBodies.length} section body(s) nearly empty`);
  }

  if (issues.length > 0) {
    allIssues.push({ id, title: ch.t, issues });
  }
}

if (allIssues.length === 0) {
  console.log('ALL 20 CHAPTERS PASS DEEP AUDIT - No issues found');
} else {
  console.log(`${allIssues.length} chapters have issues:\n`);
  allIssues.forEach(ch => {
    console.log(`${ch.id} (${ch.title}):`);
    ch.issues.forEach(i => console.log(`  - ${i}`));
  });
}
