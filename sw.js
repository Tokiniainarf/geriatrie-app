// Bump CACHE_NAME whenever core assets change so clients drop stale offline caches.
const CACHE_NAME = 'geriatrie-v269';
// Must match scripts actually loaded by index.html (post data-bundle architecture).
// Do NOT pre-cache large media: a failed install left users with broken offline media.
const CORE = [
  './',
  './index.html',
  './style.css',
  './vibrant.css',
  './manifest.json',
  './data-bundle.js',
  './practice-data.js',
  './annales-authentiques.js',
  './annales-texte.js',
  './annales-corrections.js',
  './protocoles-has-officiels.js',
  './clinical-pathways.js',
  './notebook-decks-data.js',
  './podcasts-data.js',
  './podcasts-app.js',
  './podcasts.css',
  './notebook-interactive.js',
  './calculateurs.js',
  './clinical-assistant.js',
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

const isMediaPath = (pathname) =>
  /\.(?:jpg|jpeg|png|webp|gif|svg|avif|mp4|webm|pdf)(?:$|\?)/i.test(pathname) ||
  /\/images\//i.test(pathname) ||
  /\/assets\//i.test(pathname);

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
        // Drop every previous shell (violet Pop, Listen, v250–v252, …)
        if (k !== CACHE_NAME) return caches.delete(k);
      }))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('message', e => {
  if (e.data && e.data.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (/audio-player|audio-library|audio-player\.css/i.test(url.pathname)) {
    e.respondWith(new Response('Gone', { status: 410, statusText: 'Gone' }));
    return;
  }
  // Media: network-only (avoid sticky bad offline media).
  if (isMediaPath(url.pathname)) {
    e.respondWith(
      fetch(e.request).catch(() => caches.match(e.request).then(c => c || new Response('Media offline', { status: 503 })))
    );
    return;
  }
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
      if (e.request.mode === 'navigate') {
        const shell = await caches.match('./index.html') || await caches.match('./');
        if (shell) return shell;
      }
      return new Response('Offline', { status: 503, statusText: 'Offline' });
    })
  );
});
