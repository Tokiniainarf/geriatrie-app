const CACHE_NAME = 'geriatrie-v73';
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
  './vocabulaire-medical.js',
  './tableaux-comparatifs.js',
  './abbreviations.js',
  './doses-urgence.js',
  './faq-geriatrie.js',
  './situations-garde.js',
  './cas-evc-2024.js',
  './protocoles-reanimation.js',
  './aide-memoire-rapide.js',
  './cas-evc-2023.js',
  './mini-dossiers.js',
  './checklist-sortie.js',
  './phrases-examen.js',
  './cas-evc-2020-2022.js',
  './pieges-examen-evc.js',
  './memos-visuels.js',
  './effets-indesirables.js',
  './outils-evaluation.js',
  './tableau-bord-evc.js',
  './conduites-a-tenir.js',
  './resumes-chapitres.js',
  './urgences-geriatrie.js',
  './guides-ehpad.js',
  './cas-evc-2018-2019.js',
  './cas-evc-2015-2017.js',
  './guides-ssr.js',
  './cas-complexes.js',
  './biologie-reference.js',
  './syndromes-geriatriques.js',
  './imagerie-reference.js',
  './examens-ecg.js',
  './guides-pratiques.js',
  './paroles-experts.js',
  './questions-vives.js',
  './scores-urgence.js',
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
