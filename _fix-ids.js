const fs = require('fs');
const p = 'C:/Users/tokin/Downloads/GeriatrieApp/mega-flashcards-7.js';
let c = fs.readFileSync(p, 'utf8');
for (let n = 102; n >= 38; n--) {
  c = c.split(`id: 'mega7-${n}'`).join(`id: 'mega7-${n - 2}'`);
}
fs.writeFileSync(p, c);
console.log('done');