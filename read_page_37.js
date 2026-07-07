const fs = require('fs');
const vm = require('vm');

const sandbox = { APP_DATA: {} };
vm.createContext(sandbox);

const dataCode = fs.readFileSync('data.js', 'utf8').replace(/const APP_DATA/, 'APP_DATA');
vm.runInContext('var APP_DATA; ' + dataCode, sandbox);

const ch1Content = sandbox.APP_DATA.content['ch1'];
const page37 = ch1Content.find(p => p[0] === 37);

if (page37) {
  console.log('=== PAGE 37 RAW CONTENT ===');
  console.log(page37[1]);
} else {
  console.log('Page 37 not found in ch1!');
}
