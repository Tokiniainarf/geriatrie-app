// Bump CACHE_NAME whenever core assets change so clients drop stale offline caches.
const CACHE_NAME = 'geriatrie-v196';
// Must match scripts actually loaded by index.html (post data-bundle architecture).
const CORE = [
  './',
  './index.html',
  './style.css',
  './manifest.json',
  './data-bundle.js',
  './calculateurs.js',
  './quiz.js',
  './dashboard.js',
  './appsearch.js',
  './erreurs-journal.js',
  './graph.js',
  './brainfeed.js',
  './app.js',
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
  // Network-first for navigations & app shell; offline falls back to cache.
  e.respondWith(
    fetch(e.request).then(resp => {
      if (resp && resp.status === 200 && (resp.type === 'basic' || resp.type === 'cors')) {
        const clone = resp.clone();
        caches.open(CACHE_NAME).then(c => c.put(e.request, clone)).catch(() => {});
      }
      return resp;
    }).catch(async () => {
      const cached = await caches.match(e.request);
      if (cached) return cached;
      // Offline navigation fallback to shell
      if (e.request.mode === 'navigate') {
        const shell = await caches.match('./index.html') || await caches.match('./');
        if (shell) return shell;
      }
      return new Response('Offline', { status: 503, statusText: 'Offline' });
    })
  );
});


