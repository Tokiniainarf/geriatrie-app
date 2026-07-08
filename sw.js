const CACHE_NAME = 'geriatrie-v181';
const CORE = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './data-bundle.js',
  './appsearch.js',
  './revision-aids.js',
  './figures.js',
  './dashboard.js',
  './brainfeed.js',
  './flashcards.js',
  './graph.js',
  './has-reco.js',
  './quiz.js',
  './annales-v2.js',
  './interactive-figures.js',
  './annales.js',
  './calculateurs.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(c => Promise.all(CORE.map(u => c.add(new Request(u, { cache: 'no-store' })).catch(() => {}))))
      .then(() => self.skipWaiting())
      .catch(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => {
        if (k !== CACHE_NAME) return caches.delete(k);
      }))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  // Always fetch from network first for HTML/JS/CSS
  e.respondWith(
    fetch(e.request).then(resp => {
      if (resp.status === 200) {
        const clone = resp.clone();
        caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
      }
      return resp;
    }).catch(() => caches.match(e.request))
  );
});


