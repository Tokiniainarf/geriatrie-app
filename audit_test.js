// Audit script: run renderChapter on all 20 chapters
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

// Load data.js
vm.runInContext(dataSrc, context);

// Load the entire app.js
vm.runInContext(appSrc, context);

// Verify renderChapter is available
try {
  vm.runInContext('typeof renderChapter', context);
} catch(e) {
  console.error('renderChapter not found:', e.message);
  process.exit(1);
}

const chapters = vm.runInContext('APP_DATA.chapters', context);
const content = vm.runInContext('APP_DATA.content', context);

const OCR_GARBAGE_TERMS = ['Bouchon', 'physiopathologiques', 'vieillissemnt', 'viellissement'];
const results = [];

for (const ch of chapters) {
  const id = ch.id;
  const chunks = content[id];
  if (!chunks || !chunks.length) {
    results.push({ id, title: ch.t, pass: false, issues: ['No content data'] });
    continue;
  }
  
  const raw = chunks.map(c => c[1]).join('\n');
  
  let html;
  try {
    html = vm.runInContext(`renderChapter(${JSON.stringify(raw)}, ${JSON.stringify(id)})`, context);
  } catch(e) {
    results.push({ id, title: ch.t, pass: false, issues: ['renderChapter threw: ' + e.message] });
    continue;
  }
  
  const issues = [];
  
  // 1. Check for empty/failed render
  if (!html || html.includes('Aucun contenu structuré')) {
    issues.push('Render produced empty/structured fallback');
  }
  
  // 2. Check for OCR garbage in rendered paragraphs
  const paraRegex2 = /<p class="reader-p">([^<]*)<\/p>/g;
  let pm;
  while ((pm = paraRegex2.exec(html)) !== null) {
    const txt = pm[1];
    for (const term of OCR_GARBAGE_TERMS) {
      if (txt.includes(term)) {
        issues.push(`OCR garbage "${term}" in paragraph: "${txt.substring(0,120)}"`);
        break;
      }
    }
  }
  
  // 3. Check for "Bouchon)" anywhere
  if (/Bouchon\)/.test(html)) {
    issues.push('OCR "Bouchon)" found in output');
  }
  
  // 4. Short fragments (under 15 chars) in reader-p
  const paraRegex3 = /<p class="reader-p">([^<]+)<\/p>/g;
  let shortCount = 0;
  const shortExamples = [];
  while ((pm = paraRegex3.exec(html)) !== null) {
    const txt = pm[1].trim();
    if (txt.length < 15 && txt.length > 0) {
      shortCount++;
      if (shortExamples.length < 5) shortExamples.push(txt);
    }
  }
  if (shortCount > 3) {
    issues.push(`${shortCount} very short paragraphs: ${shortExamples.join(' | ')}`);
  }
  
  // 5. Sections
  const sectionCount = (html.match(/class="section-head"/g) || []).length;
  
  // 6. Situations de départ
  const rawHasSit = /Situations?\s+de\s+départ/i.test(raw);
  const htmlHasSit = /class="key-point"/.test(html);
  if (rawHasSit && !htmlHasSit) {
    issues.push('Situations de départ not rendered as key-point card');
  }
  
  // 7. Mid-sentence cuts
  const cutRegex = /<p class="reader-p">([^<]+)<\/p>/g;
  let cutCount = 0;
  const cutExamples = [];
  while ((pm = cutRegex.exec(html)) !== null) {
    const txt = pm[1].trim();
    if (txt.length > 40 && !/[.!?;:\u2019\u201D)\]]\s*$/.test(txt)) {
      cutCount++;
      if (cutExamples.length < 3) cutExamples.push('...' + txt.substring(txt.length - 80));
    }
  }
  if (cutCount > 8) {
    issues.push(`${cutCount} paragraphs end mid-sentence`);
  }
  
  // 8. Bullets in raw vs rendered
  const rawBullets = (raw.match(/^[•\-–]\s*.+/gm) || []).length;
  const htmlBullets = (html.match(/<li>/g) || []).length;
  if (rawBullets > 3 && htmlBullets === 0) {
    issues.push(`Raw has ${rawBullets} bullets but none rendered`);
  }
  
  // 9. Check for "physiopathologiques" repeated (OCR artifact)
  if (/physiopathologiques[^<]*physiopathologiques/i.test(html)) {
    issues.push('Repeated "physiopathologiques" OCR artifact');
  }
  
  // 10. Fragment paragraphs (10-50 chars, no punctuation)
  const fragRegex = /<p class="reader-p">([^<]+)<\/p>/g;
  const fragExamples = [];
  while ((pm = fragRegex.exec(html)) !== null) {
    const txt = pm[1].trim();
    if (txt.length > 8 && txt.length < 40 && !/[.!?;:,]/.test(txt) && !/^(Rang|ITEM|Fig|Tableau|Encadré)/i.test(txt)) {
      fragExamples.push(txt);
    }
  }
  if (fragExamples.length > 6) {
    issues.push(`${fragExamples.length} fragment paragraphs: ${fragExamples.slice(0,5).join(' | ')}`);
  }
  
  // 11. Output too small
  if (html.length < 500 && raw.length > 1000) {
    issues.push(`Output suspiciously small: ${html.length} chars from ${raw.length} raw`);
  }
  
  results.push({ 
    id, 
    title: ch.t,
    pass: issues.length === 0, 
    issues,
    stats: {
      sections: sectionCount,
      htmlChars: html.length,
      rawChars: raw.length,
      bullets: htmlBullets,
      hasKeyPoint: htmlHasSit,
      hasOutline: html.includes('ch-outline'),
      paraCount: (html.match(/class="reader-p"/g) || []).length
    }
  });
}

const summary = {
  chapters: results,
  total_pass: results.filter(r => r.pass).length,
  total_fail: results.filter(r => !r.pass).length
};

console.log(JSON.stringify(summary, null, 2));
