const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');

function pad(n) {
  return String(n).padStart(3, '0');
}

function pickPageImage(page) {
  const p = pad(page);
  const candidates = [
    `images/crops/crop_p${p}_0.jpg`,
    `images/crops/crop_p${p}_1.jpg`,
    `images/p${p}_0.jpg`,
    `images/p${p}_0.png`,
    `images/p${p}_1.jpg`,
    `images/figures/page_${p}.jpg`,
  ];
  for (const c of candidates) {
    if (fs.existsSync(path.join(root, c))) return c;
  }
  return null;
}

const raw = fs.readFileSync(path.join(root, 'all_tables_raw.txt'), 'utf8');
const entries = [...raw.matchAll(/Table\s+(\d+\.\d+)\.\s*\(Page\s+(\d+)\)/gi)];
const TABLES = {};
for (const e of entries) {
  const id = e[1];
  const page = Number(e[2]);
  const idx = e.index;
  const slice = raw.slice(idx, idx + 500);
  let desc = '';
  const tm = slice.match(/Tableau\s+[\d.]+\.?\s*[AB]?\s+([^\n'"]+)/i);
  if (tm) desc = tm[1].replace(/\.$/, '').trim();
  const src = pickPageImage(page);
  if (src) TABLES[id] = { src, page, desc };
  else console.log('NO SRC', id, page);
}
console.log('TABLES count', Object.keys(TABLES).length);
console.log(Object.keys(TABLES).sort().join(', '));

function injectTables(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/\nconst TABLES\s*=\s*\{[\s\S]*?\};?\n/, '\n');
  const lit = 'const TABLES = ' + JSON.stringify(TABLES) + ';\n';
  if (content.includes('const PAGE_IMAGES')) {
    content = content.replace('const PAGE_IMAGES', lit + 'const PAGE_IMAGES');
  } else {
    content = lit + content;
  }
  fs.writeFileSync(filePath, content);
}

injectTables(path.join(root, 'figures.js'));
injectTables(path.join(root, 'data-bundle.js'));
console.log('TABLES injected into figures.js + data-bundle.js');
