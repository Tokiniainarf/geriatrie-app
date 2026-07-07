const fs = require('fs');
const vm = require('vm');

const sandbox = { APP_DATA: {}, ITEMS_EVC: [] };
vm.createContext(sandbox);

// Read data.js and items-evc.js
const dataCode = fs.readFileSync('data.js', 'utf8').replace(/const APP_DATA/, 'APP_DATA');
const itemsCode = fs.readFileSync('items-evc.js', 'utf8').replace(/const ITEMS_EVC/, 'ITEMS_EVC');

vm.runInContext('var APP_DATA; ' + dataCode, sandbox);
vm.runInContext('var ITEMS_EVC; ' + itemsCode, sandbox);

const chapters = sandbox.APP_DATA.chapters;
const items = sandbox.ITEMS_EVC;

console.log('=== CHAPTERS LIST ===');
chapters.forEach(ch => {
  console.log(`- ${ch.id}: ${ch.t}`);
});

console.log('\n=== ITEMS LIST ===');
items.forEach(it => {
  console.log(`- ${it.id} (${it.titre}) -> ${it.chapitre}`);
});

console.log('\n=== CHAPTERS NOT MAPPED TO ANY ITEM ===');
chapters.forEach(ch => {
  const mapped = items.find(it => it.chapitre === ch.id);
  if (!mapped) {
    console.log(`* Chapter ${ch.id} (${ch.t}) has no item mapped!`);
  }
});
