const fs = require('fs');
let code = fs.readFileSync('app.js', 'utf8');

// Remove the broken duplicate block (lines 198-204)
const duplicate = `    if(merged.length>950){
      merged.split(/(?<=[.!?])\\s+(?=[A-ZÉÈÊÀÂÎÔÙÇ«])/).forEach(part=>{
        const t=part.trim();
        if(t.length>25)html+=\`<div class="para-card">\${chip}<p>\${esc(t)}</p></div>\`;
      });
    }else html+=\`<div class="para-card">\${chip}<p>\${esc(merged)}</p></div>\`;
  }`;

code = code.replace(duplicate, '');

// Fix the regex in flushPara
code = code.replace(/replace\(\/s\+\/g," "\)/, 'replace(/\\s+/g," ")');

// Add flushPara at end of loop if missing
if (!code.includes('flushPara();flushBullets();flushNumList();if(inCallout)')) {
  code = code.replace(
    'flushBullets();flushNumList();if(inCallout)flushCallout();if(inSit)html+=`</ul></div>`;closeSection();',
    'flushPara();flushBullets();flushNumList();if(inCallout)flushCallout();if(inSit)html+=`</ul></div>`;closeSection();'
  );
}

fs.writeFileSync('app.js', code);
console.log('Syntax fixed');