// Check context around TOC entries
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

// For ch1, show lines around 565-580
const raw = content.ch1.map(c => c[1]).join('\n');
const lines = raw.split('\n').map(l => l.trim());
console.log('=== ch1 lines 565-580 ===');
for (let i = 565; i < Math.min(585, lines.length); i++) {
  console.log(`  ${i}: "${lines[i].substring(0, 100)}"`);
}

// For ch2, show lines around 560-575
const raw2 = content.ch2.map(c => c[1]).join('\n');
const lines2 = raw2.split('\n').map(l => l.trim());
console.log('\n=== ch2 lines 560-575 ===');
for (let i = 560; i < Math.min(580, lines2.length); i++) {
  console.log(`  ${i}: "${lines2[i].substring(0, 100)}"`);
}

// For ch6, show lines around 680-710
const raw6 = content.ch6.map(c => c[1]).join('\n');
const lines6 = raw6.split('\n').map(l => l.trim());
console.log('\n=== ch6 lines 680-710 ===');
for (let i = 680; i < Math.min(715, lines6.length); i++) {
  console.log(`  ${i}: "${lines6[i].substring(0, 100)}"`);
}
