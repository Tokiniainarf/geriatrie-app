const fs = require('fs');
const d = fs.readFileSync('C:/Users/tokin/geriatrie-app/data.js', 'utf8');
const m = d.match(/const APP_DATA\s*=\s*(\{.*\})\s*;?\s*$/s);
const APP_DATA = JSON.parse(m[1]);

const report = [];
let issues = 0;

Object.keys(APP_DATA.content).forEach(ch => {
  const sections = APP_DATA.content[ch];
  report.push(`${ch}: ${sections.length} sections`);
  sections.forEach((sec, i) => {
    const title = sec[0];
    const body = sec[1];
    if (typeof title !== 'string') {
      report.push(`  ERROR ${i}: title is not string (${typeof title})`);
      issues++;
    } else if (!title.match(/^[IVX]+\.|^A\.|^Situation|^Encadré|^Fig\.|^Tableau/)) {
      report.push(`  WARN ${i}: title '${title.slice(0, 60)}'`);
      issues++;
    }
    if (typeof body !== 'string' || body.length < 50) {
      report.push(`  WARN ${i}: body too short (${(body || '').length} chars)`);
      issues++;
    }
    if (typeof body === 'string' && (body.includes('Connaissances') || body.includes('Points clés') || body.includes('Entraînement'))) {
      report.push(`  WARN ${i}: header leak in body`);
      issues++;
    }
  });
});

report.push(`\nTotal issues: ${issues}`);
fs.writeFileSync('C:/Users/tokin/geriatrie-app/tools/chapter_content_audit.txt', report.join('\n'), 'utf8');
console.log('audit done, issues', issues);
