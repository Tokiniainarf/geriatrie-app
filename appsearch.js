/* ═══════════════════════════════════════════════════════════════
   Full-text Search — Search across all app content
   ═══════════════════════════════════════════════════════════════ */

const AppSearch = (() => {
  let allContent = [];

  function buildIndex() {
    allContent = [];

    // Chapters content
    if (typeof APP_DATA !== 'undefined') {
      APP_DATA.chapters.forEach(ch => {
        const pages = APP_DATA.content[ch.id] || [];
        const text = pages.map(p => p[1]).join(' ');
        allContent.push({ type: 'chapter', id: ch.id, title: ch.t, text, link: () => showCh(ch.id) });
      });
    }

    // Flashcards
    const allFlash = [];
    if (typeof FLASHCARDS !== 'undefined') allFlash.push(...FLASHCARDS);
    if (typeof FLASHCARDS_A !== 'undefined') allFlash.push(...FLASHCARDS_A);
    if (typeof FLASHCARDS_B !== 'undefined') allFlash.push(...FLASHCARDS_B);
    if (typeof FLASHCARDS_C !== 'undefined') allFlash.push(...FLASHCARDS_C);
    if (typeof FLASHCARDS_MEMOS !== 'undefined') allFlash.push(...FLASHCARDS_MEMOS);
    if (typeof FLASHCARDS_EXPANDED !== 'undefined') allFlash.push(...FLASHCARDS_EXPANDED);
    allFlash.forEach(fc => {
      allContent.push({ type: 'flashcard', id: 'fc-' + fc.id, title: fc.question, text: fc.question + ' ' + fc.answer, link: () => sw('feed') });
    });

    // Synthesis
    if (typeof SYNTHESIS !== 'undefined') {
      SYNTHESIS.forEach((syn, i) => {
        const text = syn.sections ? syn.sections.map(s => s.title + ' ' + (s.content || '').replace(/<[^>]+>/g, '')).join(' ') : '';
        allContent.push({ type: 'synthesis', id: 'syn-' + i, title: syn.title, text, link: () => sw('synth') });
      });
    }

    // Annales
    // Search annales
    const allAnnales = [];
    if (typeof ANNALES !== 'undefined') allAnnales.push(...ANNALES);
    if (typeof ANNALES_EXPANDED !== 'undefined') allAnnales.push(...ANNALES_EXPANDED);
    allAnnales.forEach(a => {
        const qText = a.questions.map(q => q.q + ' ' + q.a).join(' ');
        allContent.push({ type: 'annale', id: 'ann-' + a.id, title: 'Cas ' + a.id + ' — ' + a.case.substring(0, 60), text: a.case + ' ' + qText, link: () => sw('quiz') });
      });

    // HAS
    const allHas = [];
    if (typeof HAS_RECOMMANDATIONS !== 'undefined') allHas.push(...HAS_RECOMMANDATIONS);
    if (typeof HAS_EXPANDED !== 'undefined') allHas.push(...HAS_EXPANDED);
    allHas.forEach(h => {
        allContent.push({ type: 'has', id: h.id, title: h.theme, text: h.reco + ' ' + (h.details || ''), link: () => sw('synth') });
      });

    // Concepts
    if (typeof CONCEPT_MAP !== 'undefined') {
      Object.entries(CONCEPT_MAP).forEach(([term, info]) => {
        allContent.push({ type: 'concept', id: 'c-' + term, title: term, text: term, link: () => navigateToConcept(info.ch, info.search) });
      });
    }
  }

  function search(query) {
    if (!allContent.length) buildIndex();
    if (!query || query.length < 2) return [];

    const q = query.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const qWords = q.split(/\s+/).filter(w => w.length >= 2);

    const results = allContent.map(item => {
      const normalizedText = (item.title + ' ' + item.text).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      let score = 0;
      let matched = true;

      for (const word of qWords) {
        if (normalizedText.includes(word)) {
          score += 1;
          // Bonus for title match
          const normalizedTitle = item.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
          if (normalizedTitle.includes(word)) score += 3;
        } else {
          matched = false;
        }
      }

      return { ...item, score, matched };
    }).filter(r => r.matched && r.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 20);

    return results;
  }

  function renderResults(results, container) {
    if (!container) return;

    if (!results.length) {
      container.innerHTML = '<div class="search-empty">Aucun résultat</div>';
      return;
    }

    const typeLabels = {
      chapter: '📖 Chapitre',
      flashcard: '🎴 Flashcard',
      synthesis: '📋 Synthèse',
      annale: '🏥 Cas clinique',
      has: '🏥 Recommandation HAS',
      concept: '🔗 Concept'
    };

    container.innerHTML = results.map(r => `
      <div class="search-result" onclick="AppSearch.go('${r.type}','${r.id}')">
        <span class="search-type">${typeLabels[r.type] || r.type}</span>
        <span class="search-title">${esc(r.title)}</span>
      </div>
    `).join('');
  }

  function go(type, id) {
    const item = allContent.find(c => c.id === id);
    if (item && item.link) item.link();
  }

  function esc(s) {
    const d = document.createElement('div');
    d.textContent = s || '';
    return d.innerHTML;
  }

  function destroy() {}

  return { search, renderResults, go, destroy, buildIndex };
})();
