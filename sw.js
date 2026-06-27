const CACHE_NAME = 'geriatrie-v51';
const CORE = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './brainfeed.js',
  './quiz.js',
  './dashboard.js',
  './appsearch.js',
  './annales.js',
  './annales-expanded.js',
  './has-reco.js',
  './has-expanded.js',
  './flashcards-batch-A.js',
  './flashcards-batch-B.js',
  './flashcards-batch-C.js',
  './flashcards-memos.js',
  './data.js',
  './figures.js',
  './interactive-figures.js',
  './synthesis.js',
  './concepts.js',
  './flashcards.js',
  './graph.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => caches.delete(k)))
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
