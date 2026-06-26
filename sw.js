const CACHE_NAME = 'geriatrie-v12';
const CORE = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './data.js',
  './figures.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

const NETWORK_FIRST = /\/(app|style)\.(js|css)(\?|$)/;

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(CORE)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET') return;
  if (NETWORK_FIRST.test(url.pathname + url.search)) {
    e.respondWith(
      fetch(e.request).then(resp => {
        if (resp.status === 200) {
          const clone = resp.clone();
          caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
        }
        return resp;
      }).catch(() => caches.match(e.request))
    );
    return;
  }
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(resp => {
        const isAsset = resp.status === 200 && (
          resp.type === 'basic' ||
          url.pathname.includes('/images/') ||
          url.pathname.includes('/icons/') ||
          url.hostname.includes('fonts.googleapis.com') ||
          url.hostname.includes('fonts.gstatic.com')
        );
        if (isAsset) {
          const clone = resp.clone();
          caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
        }
        return resp;
      });
    })
  );
});