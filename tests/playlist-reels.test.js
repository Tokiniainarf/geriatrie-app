const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');

function createMockElement(tagName = 'div', id = '') {
  let _textContent = '';
  let _innerHTML = '';
  const classes = new Set();
  const attributes = new Map();
  const children = [];
  function escapeHTML(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }
  const el = {
    tagName: tagName.toUpperCase(),
    id,
    dataset: {},
    style: {},
    classList: {
      add: (c) => classes.add(c),
      remove: (c) => classes.delete(c),
      toggle: (c, force) => {
        if (force === true) { classes.add(c); return true; }
        if (force === false) { classes.delete(c); return false; }
        if (classes.has(c)) { classes.delete(c); return false; }
        classes.add(c); return true;
      },
      contains: (c) => classes.has(c)
    },
    setAttribute: (k, v) => attributes.set(k, String(v)),
    getAttribute: (k) => attributes.get(k) || null,
    appendChild: (c) => { children.push(c); return c; },
    removeChild: (c) => { const idx = children.indexOf(c); if (idx !== -1) children.splice(idx, 1); return c; },
    querySelector: () => null,
    querySelectorAll: () => [],
    scrollIntoView: () => {},
    addEventListener: () => {},
    removeEventListener: () => {}
  };
  Object.defineProperty(el, 'textContent', {
    get: () => _textContent,
    set: (val) => { _textContent = String(val || ''); _innerHTML = escapeHTML(_textContent); }
  });
  Object.defineProperty(el, 'innerHTML', {
    get: () => _innerHTML,
    set: (val) => { _innerHTML = String(val || ''); _textContent = _innerHTML.replace(/<[^>]*>/g, ''); }
  });
  return el;
}

function harness() {
  const elements = new Map();
  function getEl(id) {
    if (!elements.has(id)) elements.set(id, createMockElement('div', id));
    return elements.get(id);
  }
  getEl('vFeed').classList.add('active');
  getEl('bfFeed'); getEl('bfPlaylistSheet'); getEl('bfPlaylistBackdrop');
  getEl('bfSheetTabs'); getEl('bfSheetActiveBar'); getEl('bfSheetContent'); getEl('bfToast');
  const document = {
    hidden: false,
    createElement: (tag) => createMockElement(tag),
    getElementById: (id) => getEl(id),
    querySelector: (sel) => sel === '#vFeed' ? getEl('vFeed') : null,
    querySelectorAll: () => [],
    addEventListener: () => {},
    removeEventListener: () => {}
  };
  const sandbox = {
    document, window: {}, localStorage: { getItem: () => null, setItem: () => {} },
    console, setTimeout, clearTimeout, navigator: { clipboard: { writeText: () => Promise.resolve() } },
    matchMedia: () => ({ matches: false }),
    IntersectionObserver: class { observe() {} unobserve() {} disconnect() {} }
  };
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(path.join(__dirname, '../brainfeed.js'), 'utf8'), sandbox);
  return { api: sandbox.window.BrainFeed, getEl };
}

test('reels playlist mapping covers exactly 106 videos with 0 duplicates', () => {
  const h = harness();
  const audit = h.api.audit();
  const videos = audit.pools.visualExplanations.filter(v => v.isVideo || /\.mp4/.test(v.media || ''));
  assert.equal(videos.length, 106);
  const counts = { cardio: 0, neuro: 0, pharma: 0, nutrition: 0, ethique: 0 };
  videos.forEach(v => { counts[v.playlist]++; });
  assert.equal(counts.cardio, 29);
  assert.equal(counts.neuro, 23);
  assert.equal(counts.pharma, 29);
  assert.equal(counts.nutrition, 16);
  assert.equal(counts.ethique, 9);
  assert.equal(Object.values(counts).reduce((a,b)=>a+b, 0), 106);
});

test('openPlaylistSheet opens sheet and closes smoothly', () => {
  const h = harness();
  h.api.selectSession('visual');
  h.api.openPlaylistSheet();
  assert.ok(h.getEl('bfPlaylistSheet').classList.contains('is-open'));
  assert.ok(h.getEl('bfPlaylistBackdrop').classList.contains('is-open'));
  assert.ok(h.getEl('bfSheetTabs').innerHTML.length > 0);
  assert.ok(h.getEl('bfSheetContent').innerHTML.length > 0);
  h.api.closePlaylistSheet();
  assert.ok(!h.getEl('bfPlaylistSheet').classList.contains('is-open'));
  assert.ok(!h.getEl('bfPlaylistBackdrop').classList.contains('is-open'));
});

test('applyPlaylist filters active deck to selected playlist', () => {
  const h = harness();
  h.api.selectSession('visual');
  h.api.applyPlaylist('cardio');
  h.api.openPlaylistSheet();
  h.api.selectSheetTab('cardio');
  assert.ok(h.getEl('bfSheetActiveBar').innerHTML.includes('Cardio'));
  assert.ok(h.getEl('bfSheetActiveBar').innerHTML.includes('29'));
  h.api.applyPlaylist('all');
  h.api.selectSheetTab('all');
  assert.ok(h.getEl('bfSheetActiveBar').innerHTML.includes('106'));
});

test('jumpToReel navigates directly to target video', () => {
  const h = harness();
  h.api.selectSession('visual');
  const audit = h.api.audit();
  const reel1 = audit.pools.visualExplanations.find(v => (v.title || '').includes('Reel 1 '));
  assert.ok(reel1);
  h.api.jumpToReel(reel1.id);
  assert.ok(!h.getEl('bfPlaylistSheet').classList.contains('is-open'));
});
