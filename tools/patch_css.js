const fs = require('fs');
const p = 'C:/Users/tokin/geriatrie-app/style.css';
let s = fs.readFileSync(p, 'utf8');

const oldBlock = `.reader-list-card {
  margin: 12px 0; padding: 0 0 0 4px;
  background: none; border-radius: 0;
  border: none;
}
.reader-list { margin: 0; padding-left: 1.4rem; }
.reader-list li { margin-bottom: 10px; line-height: var(--lh); color: var(--text2); }
.reader-list li::marker { color: var(--accent); font-size: .7em; }
.reader-list.num { padding-left: 1.5rem; }
.reader-list.num li::marker { color: var(--accent-cta); font-weight: 600; font-size: .85em; }
.reader-list.arrow-list { list-style: none; padding-left: 0; }
.reader-list.arrow-list li { display: flex; align-items: baseline; gap: 8px; margin-bottom: 8px; flex-wrap: wrap; }
.reader-list.arrow-list li::marker { content: ''; }
.arrow-key { font-weight: 700; color: var(--accent); min-width: 90px; flex-shrink: 0; }
.arrow-sep { color: var(--accent-cta); font-weight: 600; }
.arrow-val { color: var(--text2); }`;

const newBlock = `.reader-list-card {
  margin: 18px 0; padding: 14px 18px;
  background: var(--bg-card); border-radius: var(--radius-sm);
  border: 1px solid var(--glass-border);
  box-shadow: var(--shadow-card);
}
.reader-list { margin: 0; padding-left: 1.5rem; }
.reader-list li { margin-bottom: 12px; line-height: var(--lh); color: var(--text2); }
.reader-list li::marker { color: var(--accent); font-size: .9em; }
.reader-list.num { padding-left: 1.6rem; }
.reader-list.num li::marker { color: var(--accent-cta); font-weight: 700; font-size: .95em; }
.reader-list.arrow-list { list-style: none; padding-left: 0; }
.reader-list.arrow-list li { display: flex; align-items: baseline; gap: 10px; margin-bottom: 10px; flex-wrap: wrap; padding: 8px 0; border-bottom: 1px dashed var(--glass-border); }
.reader-list.arrow-list li:last-child { border-bottom: none; }
.reader-list.arrow-list li::marker { content: ''; }
.arrow-key { font-weight: 700; color: var(--accent); min-width: 100px; flex-shrink: 0; }
.arrow-sep { color: var(--accent-cta); font-weight: 700; font-size: 1.1em; }
.arrow-val { color: var(--text); font-weight: 500; }`;

const normalize = (str) => str.replace(/\r\n/g, '\n');
const sNorm = normalize(s);
const oldNorm = normalize(oldBlock);
const newNorm = normalize(newBlock);

if (!sNorm.includes(oldNorm)) {
  console.log('old block not found');
  process.exit(1);
}
let out = sNorm.replace(oldNorm, newNorm);
if (s.includes('\r\n')) out = out.replace(/\n/g, '\r\n');
fs.writeFileSync(p, out, 'utf8');
console.log('replaced');
