const fs = require('fs');
let code = fs.readFileSync('app.js', 'utf8');

// 1. Add flushPara before SECTION
code = code.replace(
  /if\(secM\){\s*if\(!pastPreamble\)continue;\s*flushBullets\(\);flushNumList\(\);closeSection\(\);/,
  'if(secM){\n      if(!pastPreamble)continue;\n      flushPara();flushBullets();flushNumList();closeSection();'
);

// 2. Add flushPara before LETTER sub-head
code = code.replace(
  /if\(letM&&letM\[2\]\.length>2\){\s*markBodyStart\(\);\s*flushBullets\(\);flushNumList\(\);/,
  'if(letM&&letM[2].length>2){\n      markBodyStart();\n      flushPara();flushBullets();flushNumList();'
);

// 3. Add flushPara before Fig
code = code.replace(
  /if\(figM&&typeof FIGURES!=='undefined'\){\s*flushBullets\(\);flushNumList\(\);/,
  'if(figM&&typeof FIGURES!==\'undefined\'){\n      flushPara();flushBullets();flushNumList();'
);

// 4. Add flushPara before Tableau
code = code.replace(
  /if\(tab\){flushBullets\(\);html/,
  'if(tab){flushPara();flushBullets();html'
);

// 5. Loosen short line filter
code = code.replace(
  /if \(l\.length >= 70\) return true;/,
  'if (l.length >= 50) return true;'
);
code = code.replace(
  /if \(\/\[\.!?\]\$\/\.test\(l\)\) return true;   \/\/ keep if it ends a sentence/,
  'if (/[.!?]$/.test(l)) return true;\n    if (/gérontologie|gériatrie|vieillissement|défini/i.test(l)) return true;'
);

fs.writeFileSync('app.js', code);
console.log('Layout fixes applied: flush on LETTER/SECTION/Fig/Tableau, looser filters');