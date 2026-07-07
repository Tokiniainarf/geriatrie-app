const fs = require('fs');
const vm = require('vm');

const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync('data.js', 'utf8'), sandbox);
const APP_DATA = vm.runInContext('APP_DATA', sandbox);

console.log('=== ch1 pages index and pn ===');
APP_DATA.content.ch1.forEach((p, idx) => {
  console.log(`Index ${idx}: Page ${p[0]}`);
});
