const fs=require('fs');
const p='C:/Users/tokin/geriatrie-app/index.html';
let s=fs.readFileSync(p,'utf8');
s=s.replace(/<script src="([^?"]+)\.js"><\/script>/g,'<script src="$1.js?v=159"></script>');
fs.writeFileSync(p,s,'utf8');
console.log('done');