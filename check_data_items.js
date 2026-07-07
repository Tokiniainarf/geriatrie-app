const fs = require('fs');
const vm = require('vm');

const sandbox = { APP_DATA: {} };
vm.createContext(sandbox);

const dataCode = fs.readFileSync('data.js', 'utf8').replace(/const APP_DATA/, 'APP_DATA');
vm.runInContext('var APP_DATA; ' + dataCode, sandbox);

const chapters = sandbox.APP_DATA.chapters;

console.log('=== APP_DATA CHAPTER ITEMS ===');
chapters.forEach(ch => {
  console.log(`Chapter ${ch.id} (${ch.t}):`);
  console.log(`  Items: ${JSON.stringify(ch.items)}`);
});
