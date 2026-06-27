const CACHE_NAME = 'geriatrie-v58';
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
  './flashcards-expanded.js',
  './data.js',
  './figures.js',
  './interactive-figures.js',
  './synthesis.js',
  './concepts.js',
  './flashcards.js',
  './graph.js',
  './fiches-garde.js',
  './protocoles-urgence.js',
  './protocoles-complets.js',
  './situations-evc.js',
  './cas-interactifs.js',
  './epreuves-externes.js',
  './evc-coach.js',
  './scores-geriatrie.js',
  './formules-geriatrie.js',
  './pharmaco-geriatrie.js',
  './pieges-exam.js',
  './memos-rapides.js',
  './quiz-urgence.js',
  './ressources-evc.js',
  './checklist-garde.js',
  './guide-accompagnant.js',
  './figures-index.js',
  './annales-archive.js',
  './synthesis-expanded.js',
  './concepts-expanded.js',
  './clinical-reference.js',
  './items-evc.js',
  './interactions-critiques.js',
  './mega-cases.js',
  './examens-guide.js',
  './demences-comparatif.js',
  './aide-memoire-evc.js',
  './synthesis-rapide.js',
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
