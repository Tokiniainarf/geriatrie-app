const fs = require('fs');
const p = 'C:/Users/tokin/geriatrie-app/style.css';
let s = fs.readFileSync(p, 'utf8');

const oldBlock = `.ch-content .para-card {
  background: none;
  backdrop-filter: none;
  border: none;
  border-radius: 0;
  padding: 0;
  margin: 0 0 1.2em;
  box-shadow: none;
}
.ch-content .para-card p {
  margin: 0;
  font-size: 1em;
  line-height: inherit;
  color: var(--text2);
  text-align: left;
  hyphens: auto;
}`;

const newBlock = `.ch-content .para-card {
  background: none;
  backdrop-filter: none;
  border: none;
  border-radius: 0;
  padding: 0;
  margin: 0 0 1.5em;
  box-shadow: none;
}
.ch-content .para-card p {
  margin: 0;
  font-size: 1em;
  line-height: inherit;
  color: var(--text);
  text-align: left;
  hyphens: auto;
  letter-spacing: -0.01em;
}`;

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
