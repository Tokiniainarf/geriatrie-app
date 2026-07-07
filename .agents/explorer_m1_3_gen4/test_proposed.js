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

const chapters = vm.runInContext('APP_DATA.chapters', context);
const content = vm.runInContext('APP_DATA.content', context);

const situationNumbers = new Set([
  103, 106, 112, 114, 116, 117, 119, 121, 122, 123, 124,
  128, 129, 130, 131, 134, 135, 140, 159, 161, 162, 165,
  166, 170, 171, 172, 173, 174, 175, 176, 178, 184, 185,
  186, 199, 200, 211, 217, 223, 226, 227, 229, 231, 232,
  239, 240, 244, 245, 246, 247, 248, 250, 256, 258, 259,
  260, 264, 266, 267, 269, 270, 272, 276, 279, 281, 284,
  288, 295, 298, 300, 306, 321, 322, 324, 325, 327, 328,
  330, 331, 334, 341, 342, 343, 345, 348, 352, 353, 354,
  355
]);

let totalIssues = 0;

for (const ch of chapters) {
  const id = ch.id;
  const chunks = content[id];
  if (!chunks || !chunks.length) continue;
  
  const raw = chunks.map(c => c[1]).join('\n');
  const html = vm.runInContext(`renderChapter(${JSON.stringify(raw)}, ${JSON.stringify(id)})`, context);
  
  const pRegex = /<p(?:\s+[^>]*)?>([\s\S]*?)<\/p>/gi;
  let pMatch;
  let pIdx = 0;
  
  while ((pMatch = pRegex.exec(html)) !== null) {
    const pText = pMatch[1].trim();
    const cleanText = pText.replace(/<[^>]+>/g, ' ');
    const words = cleanText.split(/\s+/);
    
    // Check 1: Suffix Repeats & Word Repeats
    for (let i = 0; i < words.length - 1; i++) {
      const w1 = words[i].toLowerCase().replace(/[^a-zà-öø-ÿœæ]/g, '');
      const w2 = words[i+1].toLowerCase().replace(/[^a-zà-öø-ÿœæ]/g, '');
      if (w1.length >= 6 && w2.length >= 4) {
        if (w1.endsWith(w2)) {
          console.log(`[OCR REPEAT] ${id} | "${words[i]} ${words[i+1]}"`);
          totalIssues++;
        }
      }
    }
    
    // Check 2: Suspicious cut/joined words (mid-word capitalization)
    words.forEach(w => {
      const cleanW = w.replace(/^[^\wà-öø-ÿœæ]+|[^\wà-öø-ÿœæ]+$/g, '');
      if (/^[a-zà-öø-ÿœæ]{3,}[A-Z]/.test(cleanW)) {
        console.log(`[OCR CUT] ${id} | "${cleanW}"`);
        totalIssues++;
      }
    });
    
    // Check 3: Naked Situation Numbers
    const numRegex = /\b(\d{3})\b/g;
    let numMatch;
    while ((numMatch = numRegex.exec(cleanText)) !== null) {
      const num = parseInt(numMatch[1]);
      if (situationNumbers.has(num)) {
        const numStr = numMatch[1];
        const pTextIndex = pText.indexOf(numStr);
        if (pTextIndex !== -1) {
          const before = pText.substring(0, pTextIndex);
          const after = pText.substring(pTextIndex + numStr.length);
          
          // Bracket check
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
          
          // Exclude list headers or start of lines
          const isListOrStart = /^[•\-\s\d]*$/.test(before.replace(/<[^>]+>/g, ''));
          
          if (!inBrackets && !isListOrStart) {
            console.log(`[NAKED SITUATION] ${id} | "${num}" in context: "...${cleanText.substring(Math.max(0, numMatch.index - 30), numMatch.index + 40)}..."`);
            totalIssues++;
          }
        }
      }
    }
    
    pIdx++;
  }
}

console.log(`\nAudit complete. Total issues found: ${totalIssues}`);
process.exit(totalIssues > 0 ? 1 : 0);
