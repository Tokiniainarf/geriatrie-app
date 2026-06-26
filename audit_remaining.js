// Investigate remaining empty sections
const vm = require('vm');
const fs = require('fs');
const dataSrc = fs.readFileSync('data.js', 'utf8');
const appSrc = fs.readFileSync('app.js', 'utf8');
function createEl(tag) {
  return { _text: '', _html: '', set textContent(v) { this._text = v; this._html = v.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }, get textContent() { return this._text; }, get innerHTML() { return this._html; }, set innerHTML(v) { this._html = v; }, querySelectorAll: ()=>[], querySelector: ()=>null };
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
const SECTION_RE = /^([IVX]+)\.\s+(.+)/;

// Check ch6 around lines 686-706
const raw6 = content.ch6.map(c => c[1]).join('\n');
const lines6 = raw6.split('\n').map(l => l.trim());
console.log('=== ch6: lines around empty sections ===');
for (let i = 680; i < Math.min(715, lines6.length); i++) {
  const m = lines6[i].match(SECTION_RE);
  const marker = m ? ' <<<< SECTION' : '';
  console.log(`  ${i}: "${lines6[i].substring(0, 100)}"${marker}`);
}

// Check ch9 around the empty section
const raw9 = content.ch9.map(c => c[1]).join('\n');
const lines9 = raw9.split('\n').map(l => l.trim());
console.log('\n=== ch9: All SECTION_RE matches ===');
for (let i = 0; i < lines9.length; i++) {
  const m = lines9[i].match(SECTION_RE);
  if (m) {
    // Check next non-empty line
    let j = i + 1;
    while (j < lines9.length && !lines9[j]) j++;
    const next = lines9[j] || '(end)';
    console.log(`  ${i}: "${m[1]}. ${m[2].substring(0, 80)}" → next: "${next.substring(0, 80)}"`);
  }
}

// Check ch15 around the empty section
const raw15 = content.ch15.map(c => c[1]).join('\n');
const lines15 = raw15.split('\n').map(l => l.trim());
console.log('\n=== ch15: All SECTION_RE matches ===');
for (let i = 0; i < lines15.length; i++) {
  const m = lines15[i].match(SECTION_RE);
  if (m) {
    let j = i + 1;
    while (j < lines15.length && !lines15[j]) j++;
    const next = lines15[j] || '(end)';
    console.log(`  ${i}: "${m[1]}. ${m[2].substring(0, 80)}" → next: "${next.substring(0, 80)}"`);
  }
}
