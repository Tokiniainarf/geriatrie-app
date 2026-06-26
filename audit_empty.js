// Check all chapters for empty sections and outline duplication
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

const chapters = vm.runInContext('APP_DATA.chapters', context);
const content = vm.runInContext('APP_DATA.content', context);

for (const ch of chapters) {
  const id = ch.id;
  const chunks = content[id];
  if (!chunks || !chunks.length) continue;
  const raw = chunks.map(c => c[1]).join('\n');
  const html = vm.runInContext(`renderChapter(${JSON.stringify(raw)}, ${JSON.stringify(id)})`, context);
  
  const hasOutline = html.includes('ch-outline');
  const parts = html.split(/<section class="manual-section">/);
  const emptySections = [];
  const filledSections = [];
  
  for (let i = 1; i < parts.length; i++) {
    const sec = parts[i];
    const headMatch = sec.match(/<span class="section-num">([^<]*)<\/span><span class="section-title">([^<]*)<\/span>/);
    const headText = headMatch ? `${headMatch[1]}. ${headMatch[2]}` : '(unknown)';
    const bodyMatch = sec.match(/<div class="section-body">([\s\S]*?)<\/div><\/section>/);
    const bodyContent = bodyMatch ? bodyMatch[1].trim() : '';
    const bodyText = bodyContent.replace(/<[^>]+>/g, '').trim();
    
    if (bodyText.length < 20) {
      emptySections.push(headText);
    } else {
      filledSections.push(headText);
    }
  }
  
  console.log(`${id}: outline=${hasOutline} | filled=${filledSections.length} | empty=${emptySections.length}${emptySections.length ? ' | EMPTY: ' + emptySections.join(', ') : ''}`);
}
