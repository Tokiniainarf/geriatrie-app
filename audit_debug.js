// Debug with better DOM mock
const vm = require('vm');
const fs = require('fs');

const dataSrc = fs.readFileSync('data.js', 'utf8');
const appSrc = fs.readFileSync('app.js', 'utf8');

// Better DOM mock
function createEl(tag) {
  return {
    _text: '',
    _html: '',
    set textContent(v) { this._text = v; this._html = v.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); },
    get textContent() { return this._text; },
    get innerHTML() { return this._html; },
    set innerHTML(v) { this._html = v; },
    querySelectorAll: ()=>[],
    querySelector: ()=>null,
    classList: { add:()=>{}, remove:()=>{}, toggle:()=>{}, contains:()=>false },
    style: {},
    classList_add: ()=>{}
  };
}

const sandbox = {
  localStorage: { getItem: ()=>null, setItem: ()=>{} },
  document: {
    createElement: createEl,
    querySelectorAll: ()=>[],
    querySelector: ()=>null,
    getElementById: ()=>null,
    documentElement: { setAttribute: ()=>{}, style: {} },
    addEventListener: ()=>{},
    body: { style: {} }
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

const content = vm.runInContext('APP_DATA.content', context);
const raw = content.ch1.map(c => c[1]).join('\n');
const html = vm.runInContext(`renderChapter(${JSON.stringify(raw)}, "ch1")`, context);

// Show first 2000 chars of rendered HTML
console.log('=== First 2000 chars of ch1 HTML ===');
console.log(html.substring(0, 2000));
console.log('\n=== Looking for empty sections ===');

// Better regex: find section-head + section-body pairs
const parts = html.split(/<section class="manual-section">/);
console.log(`Total parts split by section: ${parts.length}`);
for (let i = 1; i < parts.length; i++) {
  const sec = parts[i];
  const headMatch = sec.match(/<span class="section-num">([^<]*)<\/span><span class="section-title">([^<]*)<\/span>/);
  const headText = headMatch ? `${headMatch[1]}. ${headMatch[2]}` : '(no head)';
  const bodyMatch = sec.match(/<div class="section-body">([\s\S]*?)<\/div><\/section>/);
  const bodyText = bodyMatch ? bodyMatch[1].replace(/<[^>]+>/g, '').trim() : '(no body match)';
  const isEmpty = bodyText.length < 20;
  if (isEmpty) {
    console.log(`  EMPTY Section ${i}: "${headText}" body="${bodyText.substring(0, 80)}"`);
  }
}
