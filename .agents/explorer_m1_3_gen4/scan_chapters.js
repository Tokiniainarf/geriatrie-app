const fs = require('fs');
const vm = require('vm');

const dataSrc = fs.readFileSync('data.js', 'utf8');
const appSrc = fs.readFileSync('app.js', 'utf8');

function createEl(tag) {
  const el = {
    tagName: (tag || 'div').toUpperCase(),
    _text: '',
    _html: '',
    get textContent() { return this._text; },
    set textContent(v) {
      this._text = String(v);
      this._html = this._text.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    },
    get innerHTML() { return this._html; },
    set innerHTML(v) {
      this._html = String(v);
      this._text = v.replace(/<[^>]+>/g, '');
    },
    querySelectorAll: () => [],
    querySelector: () => null,
    setAttribute: () => {},
    style: {}
  };
  return el;
}

const sandbox = {
  localStorage: { getItem: ()=>null, setItem: ()=>{} },
  document: {
    createElement: createEl,
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

const chapters = vm.runInContext('APP_DATA.chapters', context).filter(ch => {
  const num = parseInt(ch.id.replace('ch', ''));
  return num >= 1 && num <= 17;
});
const content = vm.runInContext('APP_DATA.content', context);

const targets = [295, 298, 325];

for (const ch of chapters) {
  const id = ch.id;
  const chunks = content[id];
  if (!chunks || !chunks.length) continue;
  
  const raw = chunks.map(c => c[1]).join('\n');
  const html = vm.runInContext(`renderChapter(${JSON.stringify(raw)}, ${JSON.stringify(id)})`, context);
  
  const paragraphs = [];
  const pRegex = /<p(?:\s+[^>]*)?>([\s\S]*?)<\/p>/gi;
  let pMatch;
  while ((pMatch = pRegex.exec(html)) !== null) {
    paragraphs.push(pMatch[1].trim());
  }

  paragraphs.forEach((pText, pIdx) => {
    const cleanText = pText.replace(/<[^>]+>/g, ' ');
    
    targets.forEach(num => {
      const numStr = String(num);
      let idx = cleanText.indexOf(numStr);
      while (idx !== -1) {
        // Check surrounding characters in cleanText to see if it is bracketed
        // Let's look back and look forward in cleanText to see if there is '[' before and ']' after
        const before = cleanText.substring(0, idx);
        const after = cleanText.substring(idx + numStr.length);
        
        // Find if this is inside brackets
        const lastOpen = before.lastIndexOf('[');
        const lastClose = before.lastIndexOf(']');
        const nextOpen = after.indexOf('[');
        const nextClose = after.indexOf(']');
        
        let inBrackets = false;
        if (lastOpen > lastClose) {
          if (nextClose !== -1 && (nextOpen === -1 || nextClose < nextOpen)) {
            inBrackets = true;
          }
        }
        
        // Also check if this number is at the beginning of the paragraph (which is typical for lists or badges)
        const isListStart = idx < 5;
        
        if (!inBrackets && !isListStart) {
          console.log(`[${id}] Paragraph ${pIdx} | Naked situation number: "${num}" in context: "...${cleanText.substring(idx - 40, idx + 40)}..."`);
        }
        
        idx = cleanText.indexOf(numStr, idx + 1);
      }
    });
  });
}
