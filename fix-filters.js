const fs = require('fs');
let code = fs.readFileSync('app.js', 'utf8');

// Add keyword preservation to short filter
code = code.replace(
  /if \(\/\[\.!?\]\$\/\.test\(l\)\) return true;   \/\/ keep if it ends a sentence/,
  `if (/[.!?]$/.test(l)) return true;
    if (/gérontologie|gériatrie|vieillissement|défini|est définie/i.test(l)) return true;`
);

// Loosen preamble: keep lines with substantial text before firstSec
code = code.replace(
  /if\(firstSec>0\){\s*lines=lines\.filter\(\(l,i\)=>\{[\s\S]*?return false;\s*\}\);\s*\}/,
  `if(firstSec>0){
    lines=lines.filter((l,i)=>{
      if(i>=firstSec)return true;
      if(/Situations?\\s+de\\s+départ/i.test(l))return true;
      if(/^\\d{2,3}\\s+/.test(l))return true;
      if(BULLET_RE.test(l))return true;
      if(l.length > 40 && /[.!?]/.test(l)) return true;
      if(/gérontologie|gériatrie|vieillissement/i.test(l)) return true;
      return false;
    });
  }`
);

fs.writeFileSync('app.js', code);
console.log('Filters loosened for content preservation');