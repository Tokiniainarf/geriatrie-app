const fs = require('fs');
const appSrc = fs.readFileSync('app.js', 'utf8');
const dataSrc = fs.readFileSync('data.js', 'utf8');
const vm = require('vm');

const sandbox = {
  localStorage: { getItem: () => null, setItem: () => {} },
  document: {
    createElement: () => ({}),
    querySelectorAll: () => [],
    querySelector: () => null,
    getElementById: () => null,
    documentElement: { setAttribute: () => {} },
    addEventListener: () => {}
  },
  window: { addEventListener: () => {}, scrollTo: () => {}, scrollY: 0 },
  navigator: { serviceWorker: { register: () => Promise.resolve({ catch() {} }) } },
  console
};

const context = vm.createContext(sandbox);
vm.runInContext(dataSrc, context);
vm.runInContext(appSrc, context);
vm.runInContext('preprocessAppData()', context);
const ch5 = vm.runInContext('APP_DATA.content.ch5', context);
const raw = ch5.map(c => c[1]).join('\n');

const lines = raw.replace(/\r\n/g,'\n').split('\n').map(l=>l.trim());

// Simulate the exact filtering:
const RUN_HDR_RE=/^(Comprendre le vieillissement|Connaissances|Entraînement|Gériatrie|▼)$/i;
const SKIP_LINE_RE=/^(©\s*\d{4}|Elsevier|Tous droits réservés|This page intentionally left blank|Index$|En lien avec la définition)/i;
const SYLLABUS_RE=/^(Rang Rubrique|Intitulé Descriptif|Item, objectifs|Hiérarchisation des connaissances|ITEM\s+\d+\s*–|Connaître les |Savoir qualifier|Modifications reconnues|Descriptif$)/i;
const SYLLABUS_ROW_RE=/^[A-D]\s+(Définition|Épidémiologie|Éléments|Prévalence|Prise en charge|B\s)/;
const SECTION_RE=/^([IVX]+)\.\s+(.+)/;
const LETTER_RE=/^([A-Z])\.\s+(.+)/;
const RANG_RE=/^([A-D])\s+(.+)/;
const BULLET_RE=/^[•\-–]\s*(.+)/;
const DIAGRAM_RE=/^(Fonction|d'organe|Réserve|Seuil|Effet|100\s*%|0\s+Âge|\d\s+(Vieillissement|Maladie|Stress)|Fig\.\s*\d)/i;
const NUM_LIST_RE=/^(\d{1,2})[\.)]\s+(.+)/;

let filteredLines = lines.filter((l,i,arr)=>{
  if(l === '') return true;
  if(RUN_HDR_RE.test(l))return false;
  if(SKIP_LINE_RE.test(l))return false;
  if(SYLLABUS_RE.test(l))return false;
  if(SYLLABUS_ROW_RE.test(l))return false;
  if(DIAGRAM_RE.test(l)&&!/Fig\.\s*\d+\.\d+/.test(l))return false;
  return true;
});

let firstSec=-1;
for(let i=0;i<filteredLines.length;i++){if(SECTION_RE.test(filteredLines[i])||LETTER_RE.test(filteredLines[i])){firstSec=i;break}}
if(firstSec>0){
  filteredLines=filteredLines.filter((l,i)=>{
    if(l === '') return true;
    if(i>=firstSec)return true;
    if(RANG_RE.test(l))return true;
    if(/Situations?\s+de\s+départ/i.test(l))return true;
    if(/^\d{2,3}\s*/.test(l))return true;
    if(BULLET_RE.test(l))return true;
    if(/^En lien avec/i.test(l))return true;
    if(l.length > 40 && /[.!?]/.test(l)) return true;
    if(/gérontologie|gériatrie|vieillissement/i.test(l)) return true;
    return false;
  });
}
filteredLines = filteredLines.filter(l => {
  if(l === '') return true;
  if (l.length >= 50) return true;
  if (RANG_RE.test(l)) return true;
  if (BULLET_RE.test(l) || SECTION_RE.test(l) || LETTER_RE.test(l)) return true;
  if (/^Fig\.|Tableau|Encadré|^\d{2,3}\s*/.test(l)) return true;
  if (/[.!?]$/.test(l)) return true;
  if (/^Situations?\s+de\s+départ/i.test(l)) return true;
  if (/^En lien avec/i.test(l)) return true;
  return false;
});

// Run the render loop
let paraBuf = [];
let bulletBuf = [];
let html = '';

function flushPara() {
  if (paraBuf.length) {
    console.log('FLUSH PARA:', paraBuf);
    paraBuf = [];
  }
}

for (let i = 0; i < filteredLines.length; i++) {
  const l = filteredLines[i];
  if (!l) {
    if (bulletBuf.length) { console.log('FLUSH BULLETS:', bulletBuf); bulletBuf = []; }
    continue;
  }
  
  if (l.includes('personnel') || l.includes('298') || l.includes('chutes')) {
    console.log('LOOP processing line:', JSON.stringify(l));
  }
  
  if (BULLET_RE.test(l)) {
    flushPara();
    bulletBuf.push(l.match(BULLET_RE)[1]);
    continue;
  }
  
  if (bulletBuf.length) {
    // bullet continuation (must start with lowercase letter)
    const isStruct = SECTION_RE.test(l) || LETTER_RE.test(l) || /^Situations?\s+de\s+départ/i.test(l) || RANG_RE.test(l);
    if (!isStruct && /^[a-zà-öø-ÿœŒæÆÀ-ÖØ-ß]/.test(l) && l.length < 200) {
      console.log('Bullet continuation, appending line:', JSON.stringify(l));
      bulletBuf[bulletBuf.length - 1] += ' ' + l;
      continue;
    }
    console.log('FLUSH BULLETS:', bulletBuf);
    bulletBuf = [];
  }
  
  // OCR garbage filters
  if (/^(\d{1,3})$/.test(l)) continue;
  if (l.length < 15 && !/[.!?]/.test(l) && !/^[A-Z]\./.test(l) && !BULLET_RE.test(l) && !SECTION_RE.test(l) && !LETTER_RE.test(l)) {
    continue;
  }
  
  paraBuf.push(l);
}
flushPara();
