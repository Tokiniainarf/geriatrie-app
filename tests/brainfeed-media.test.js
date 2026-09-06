const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');

function harness() {
  const listeners = {};
  const classes = { contains: () => true, add() {}, remove() {}, toggle() {} };
  const media = { classList: classes, querySelector: () => null };
  const makeVideo = () => ({ paused: false, muted: true, dataset: {}, plays: 0,
    pause() { this.paused = true; }, play() { this.paused = false; this.plays++; return Promise.resolve(); },
    closest() { return media; }, setAttribute() {}, getAttribute() { return 'reel.mp4'; } });
  const active = makeVideo(), inactive = makeVideo(), unrelated = makeVideo();
  inactive.paused = unrelated.paused = true;
  const slide = { classList: classes, dataset: { idx: '0' }, isConnected: true,
    querySelector: s => s === '.bf-reel-single-page' ? {} : null,
    querySelectorAll: s => s === 'video' ? [active] : [] };
  const feed = { querySelector: () => slide, querySelectorAll: s => s === 'video' ? [active, inactive] : [slide], removeEventListener() {}, addEventListener() {} };
  const document = { hidden: false,
    querySelectorAll: s => s === 'video' ? [active, inactive, unrelated] : s.includes('video') ? [active, inactive] : [],
    getElementById: id => id === 'bfFeed' ? feed : id === 'vFeed' ? { classList: classes } : null,
    addEventListener(type, fn) { listeners[type] = fn; }, removeEventListener(type) { delete listeners[type]; } };
  const sandbox = { document, window: {}, localStorage: { getItem: () => null, setItem() {} },
    console, setTimeout, clearTimeout, navigator: {}, matchMedia: () => ({ matches: true }) };
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(path.join(__dirname, '../brainfeed.js'), 'utf8'), sandbox);
  return { api: sandbox.window.BrainFeed, active, inactive, unrelated, listeners, document };
}

test('enabling feed sound never starts inactive or unrelated videos', async () => {
  const h = harness();
  h.api.toggleSound();
  h.api.toggleSound();
  await Promise.resolve();
  assert.equal(h.inactive.plays, 0);
  assert.equal(h.unrelated.plays, 0);
  assert.equal(h.unrelated.muted, true);
});

test('destroy pauses every feed video but leaves unrelated media alone', () => {
  const h = harness();
  h.unrelated.paused = false;
  h.api.destroy();
  assert.equal(h.active.paused, true);
  assert.equal(h.inactive.paused, true);
  assert.equal(h.unrelated.paused, false);
});

test('first touch cannot reference sound state outside its closure', () => {
  const h = harness();
  assert.doesNotThrow(() => h.listeners.touchstart?.({ target: {} }));
});
