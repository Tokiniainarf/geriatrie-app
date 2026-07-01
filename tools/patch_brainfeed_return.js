const fs = require('fs');
const p = 'C:/Users/tokin/geriatrie-app/brainfeed.js';
let s = fs.readFileSync(p, 'utf8');

const old = `  return { init, destroy, actionKnow, actionDontKnow, actionFav, shareCard, renderSlides };\r\n})();`;
const neu = `  return { init, destroy, actionKnow, actionDontKnow, actionFav, shareCard, renderSlides, audit: () => ({ deck: interleaveDeck(buildSpecialPools(), 96), pools: buildSpecialPools() }) };\r\n})();`;

if (!s.includes(old)) {
  console.log('old not found');
  process.exit(1);
}
s = s.replace(old, neu);
fs.writeFileSync(p, s, 'utf8');
console.log('replaced');
