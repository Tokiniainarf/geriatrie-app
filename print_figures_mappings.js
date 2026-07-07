const fs = require('fs');
const js = fs.readFileSync('figures.js', 'utf8');

// Parse the FIGURES object by running the script in VM without const restriction
const vm = require('vm');
const sandbox = {};
vm.createContext(sandbox);
vm.runInContext('var FIGURES; ' + js.replace(/const FIGURES/, 'FIGURES'), sandbox);

console.log('=== ALL FIGURES MAPPINGS ===');
console.log(JSON.stringify(sandbox.FIGURES, null, 2));
