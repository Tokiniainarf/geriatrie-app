const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.js'));

console.log('=== SEARCHING FOR TABLEAU MAPPINGS ===');
for (const file of files) {
  const code = fs.readFileSync(file, 'utf8');
  if (code.includes('TABLEAUX') || code.includes('Tableau ') || code.includes('renderTable')) {
    console.log(`Found in: ${file}`);
  }
}
