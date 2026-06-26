// Examine raw content structure
const vm = require('vm');
const fs = require('fs');

const dataSrc = fs.readFileSync('data.js', 'utf8');
const appSrc = fs.readFileSync('app.js', 'utf8');

function createEl(tag) {
  return {
    _text: '', _html: '',
    set textContent(v) { this._text = v; this._html = v.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); },
    get textContent() { return this._text; },
    get innerHTML() { return this._html; },
    set innerHTML(v) { this._html = v; },
    querySelectorAll: ()=>[], querySelector: ()=>null
  };
}

const sandbox = {
  localStorage: { getItem: ()=>null, setItem: ()=>{} },
  document: { createElement: createEl, querySelectorAll: ()=>[], querySelector: ()=>null, getElementById: ()=>null, documentElement: { setAttribute: ()=>{}, style: {} }, addEventListener: ()=>{}, body: { style: {} } },
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

// For ch1, show lines that match SECTION_RE
const raw = content.ch1.map(c => c[1]).join('\n');
const lines = raw.split('\n').map(l => l.trim());
const SECTION_RE = /^([IVX]+)\.\s+(.+)/;

console.log('=== ch1: All SECTION_RE matches ===');
for (let i = 0; i < lines.length; i++) {
  const m = lines[i].match(SECTION_RE);
  if (m) {
    console.log(`  Line ${i}: "${m[1]}. ${m[2].substring(0, 80)}"`);
  }
}

console.log('\n=== ch2: All SECTION_RE matches ===');
const raw2 = content.ch2.map(c => c[1]).join('\n');
const lines2 = raw2.split('\n').map(l => l.trim());
for (let i = 0; i < lines2.length; i++) {
  const m = lines2[i].match(SECTION_RE);
  if (m) {
    console.log(`  Line ${i}: "${m[1]}. ${m[2].substring(0, 80)}"`);
  }
}

console.log('\n=== ch6: All SECTION_RE matches ===');
const raw6 = content.ch6.map(c => c[1]).join('\n');
const lines6 = raw6.split('\n').map(l => l.trim());
for (let i = 0; i < lines6.length; i++) {
  const m = lines6[i].match(SECTION_RE);
  if (m) {
    console.log(`  Line ${i}: "${m[1]}. ${m[2].substring(0, 80)}"`);
  }
}
