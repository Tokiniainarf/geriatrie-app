// A release is installed only when its complete shell is available.
const CACHE_NAME = 'geriatrie-v283';
const CORE = [
  './','./index.html','./style.css','./workspace.css','./workspace.js','./manifest.json',
  './data-bundle.js','./practice-data.js','./annales-authentiques.js','./annales-texte.js',
  './annales-corrections.js','./protocoles-has-officiels.js','./clinical-pathways.js',
  './notebook-decks-data.js','./podcasts-data.js','./podcasts-app.js','./podcasts.css',
  './notebook-interactive.js','./calculateurs.js','./clinical-assistant.js','./quiz.js',
  './dashboard.js','./appsearch.js','./erreurs-journal.js','./graph.js','./brainfeed.js',
  './app.js','./icons/icon-192.png','./icons/icon-512.png'
];
const coreURLs = new Set(CORE.map(path => new URL(path, self.registration.scope).href));
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME)
    .then(cache => cache.addAll(CORE.map(path => new Request(path,{cache:'reload'}))))
    .then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys
    .filter(key => /^geriatrie-v\d+$/.test(key) && key !== CACHE_NAME)
    .map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('message', event => {
  if(event.data?.type === 'SKIP_WAITING') self.skipWaiting();
});
self.addEventListener('fetch', event => {
  if(event.request.method !== 'GET') return;
  const url=new URL(event.request.url);
  if(url.origin!==self.location.origin) return;
  // Version queries and unversioned precache paths share one key.
  url.search='';
  const isCore=coreURLs.has(url.href);
  if(!isCore && event.request.mode!=='navigate') return;
  event.respondWith((async()=>{
    const cache=await caches.open(CACHE_NAME);
    const cached=await cache.match(isCore?url.href:new URL('index.html',self.registration.scope).href);
    if(cached) return cached;
    try { return await fetch(event.request); }
    catch { return new Response('Contenu indisponible hors ligne. Reconnectez-vous pour terminer le téléchargement.',{status:503,headers:{'Content-Type':'text/plain; charset=utf-8'}}); }
  })());
});
