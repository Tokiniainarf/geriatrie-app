// Debug: show what the outline sections look like for ch1
const vm = require('vm');
const fs = require('fs');

const dataSrc = fs.readFileSync('data.js', 'utf8');
const appSrc = fs.readFileSync('app.js', 'utf8');

const sandbox = {
  localStorage: { getItem: ()=>null, setItem: ()=>{} },
  document: {
    createElement: (t)=>({textContent:'',innerHTML:''}),
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

const content = vm.runInContext('APP_DATA.content', context);
const raw = content.ch1.map(c => c[1]).join('\n');
const html = vm.runInContext(`renderChapter(${JSON.stringify(raw)}, "ch1")`, context);

// Find all section-head and check what follows
const secRegex = /<header class="section-head">([\s\S]*?)<\/header><div class="section-body">([\s\S]*?)<\/div><\/section>/g;
let m;
let idx = 0;
while ((m = secRegex.exec(html)) !== null) {
  idx++;
  const head = m[1].replace(/<[^>]+>/g, '').trim();
  const body = m[2].trim();
  const bodyLen = body.length;
  const bodyPreview = body.replace(/<[^>]+>/g, '').trim().substring(0, 120);
  console.log(`Section ${idx}: "${head}" | bodyLen=${bodyLen} | body="${bodyPreview || '(EMPTY)'}"`);
}
