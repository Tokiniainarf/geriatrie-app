const fs = require('fs');
const vm = require('vm');

const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync('data.js', 'utf8'), sandbox);
const APP_DATA = vm.runInContext('APP_DATA', sandbox);

for (const chId in APP_DATA.content) {
  APP_DATA.content[chId].forEach(([pn, txt]) => {
    if (txt.includes('en entretenant, voire en améliorant')) {
      console.log(`Found text in ${chId} Page ${pn}:`);
      console.log(txt);
    }
  });
}
