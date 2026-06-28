/* ═══════════════════════════════════════════════════════════════
   Full-text Search — Search across all app content
   ═══════════════════════════════════════════════════════════════ */

const AppSearch = (() => {
  let allContent = [];

  function normalize(s) {
    return (s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  function stripHtml(s) {
    return (s || '').replace(/<[^>]+>/g, ' ');
  }

  function closeSearch() {
    document.getElementById('searchBar')?.classList.remove('open');
    const c = document.getElementById('searchResults');
    if (c) c.style.display = 'none';
  }

  function navAnnalesFocus(id, title) {
    closeSearch();
    if (typeof sw === 'function') sw('annales');
    setTimeout(() => {
      const cards = document.querySelectorAll('.ann-card-title');
      const needle = (id || '').toString();
      const titleNeedle = (title || '').slice(0, 50);
      for (const el of cards) {
        const t = el.textContent || '';
        if ((needle && t.includes(needle)) || (titleNeedle && t.includes(titleNeedle))) {
          const card = el.closest('.ann-card');
          const group = el.closest('.ann-year-group');
          if (group) group.classList.add('open');
          if (card) {
            card.classList.add('search-highlight');
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setTimeout(() => card.classList.remove('search-highlight'), 2500);
          }
          break;
        }
      }
    }, 350);
  }

  function navProtoSearch(query) {
    closeSearch();
    if (typeof sw === 'function') sw('proto');
    setTimeout(() => {
      const inp = document.getElementById('protoSearch');
      if (inp) {
        inp.value = query || '';
        if (typeof window.filterProto === 'function') window.filterProto();
      }
    }, 350);
  }

  function navDictTerm(term) {
    closeSearch();
    if (typeof sw === 'function') sw('dict');
    setTimeout(() => {
      if (typeof dictFocusTerm === 'function') dictFocusTerm(term);
    }, 200);
  }

  function navChapter(chId) {
    closeSearch();
    if (typeof showCh === 'function') showCh(chId);
  }

  function navView(view) {
    closeSearch();
    if (typeof sw === 'function') sw(view);
  }

  function openDetailModal(item) {
    closeSearch();
    let modal = document.getElementById('appSearchDetailModal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'appSearchDetailModal';
      modal.className = 'concept-modal';
      modal.innerHTML = `
        <div class="concept-pan app-search-detail-pan">
          <div class="concept-hdr">
            <h3 id="appSearchDetailTitle"></h3>
            <button type="button" onclick="AppSearch.closeDetail()">Fermer</button>
          </div>
          <div class="concept-body" id="appSearchDetailBody"></div>
        </div>`;
      modal.addEventListener('click', e => {
        if (e.target === modal) AppSearch.closeDetail();
      });
      document.body.appendChild(modal);
    }
    const labels = typeLabels[item.type] || { badge: item.type, view: 'Contenu' };
    document.getElementById('appSearchDetailTitle').textContent = item.title;
    const body = document.getElementById('appSearchDetailBody');
    body.innerHTML = `
      <p class="search-detail-badge">${esc(labels.badge)}</p>
      <p class="search-detail-view">Voir : ${esc(labels.view)}</p>
      <div class="search-detail-text">${esc(item.detailText || item.text || '').replace(/\n/g, '<br>')}</div>`;
    modal.classList.add('open');
    modal.style.display = 'flex';
  }

  function tableauxToText(tc) {
    const parts = [tc.titre, tc.notes || ''];
    (tc.colonnes || []).forEach(c => parts.push(c));
    (tc.lignes || []).forEach(l => parts.push((l.cellules || []).join(' ')));
    return parts.join(' ');
  }

  function makeSnippet(text, qWords, maxLen = 140) {
    const raw = stripHtml(text).replace(/\s+/g, ' ').trim();
    if (!raw) return '';
    const norm = normalize(raw);
    let pos = -1;
    for (const w of qWords) {
      const i = norm.indexOf(w);
      if (i >= 0 && (pos < 0 || i < pos)) pos = i;
    }
    let excerpt;
    if (pos < 0) {
      excerpt = raw.slice(0, maxLen);
    } else {
      const start = Math.max(0, pos - 35);
      excerpt = (start > 0 ? '…' : '') + raw.slice(start, start + maxLen);
    }
    if (excerpt.length < raw.length && !excerpt.endsWith('…')) excerpt += '…';
    return excerpt;
  }

  const typeLabels = {
    chapter: { badge: '📖 Chapitre', view: 'Lecture' },
    flashcard: { badge: '🎴 Flash', view: 'Brain Feed' },
    synthesis: { badge: '📋 Synthèse', view: 'Fiches synthèse' },
    annale: { badge: '🏥 Annale', view: 'Annales EVC' },
    mega: { badge: '🏥 Cas clinique', view: 'Annales EVC' },
    has: { badge: '📜 HAS', view: 'Synthèse' },
    concept: { badge: '🔗 Concept', view: 'Chapitre' },
    question_vive: { badge: '💬 Question vive', view: 'Référence EVC' },
    parole_expert: { badge: '🎓 Expert', view: 'Citations' },
    tableau: { badge: '📊 Tableau', view: 'Synthèse' },
    reference: { badge: '📘 Référence', view: 'Protocoles / référence' },
    score_urgence: { badge: '⚡ Score urgence', view: 'Garde' },
    score_geriatrie: { badge: '📏 Score gériatrie', view: 'Chapitre' },
    formule: { badge: '🔢 Formule', view: 'Calculs' },
    examen: { badge: '🧪 Examen', view: 'Bilan' },
    interaction: { badge: '💊 Interaction', view: 'Pharmacologie' },
    item_evc: { badge: '📌 ITEM EVC', view: 'Chapitre ITEM' },
    vocabulaire: { badge: '📖 Vocabulaire', view: 'Dictionnaire' },
    accompagnant: { badge: '🤝 Accompagnant', view: 'Guide entourage' },
    checklist: { badge: '✅ Checklist', view: 'Garde' }
  };

  function ensureSearchStyles() {
    if (document.getElementById('appSearchExtraStyles')) return;
    const s = document.createElement('style');
    s.id = 'appSearchExtraStyles';
    s.textContent = `
.search-result-rich { flex-direction: column; align-items: stretch; gap: 4px; }
.search-result-top { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
.search-type-badge { background: var(--accent-soft, #e0f2fe); color: var(--accent, #0891b2); padding: 2px 8px; border-radius: 6px; font-size: .68rem; }
.search-view-hint { font-size: .65rem; color: var(--text3, #94a3b8); flex-shrink: 0; }
.search-result-rich .search-title { white-space: normal; line-height: 1.25; }
.search-snippet { font-size: .78rem; color: var(--text3, #64748b); line-height: 1.35; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.search-highlight { outline: 2px solid var(--accent, #0891b2); outline-offset: 2px; }
.search-detail-badge { font-weight: 600; margin-bottom: 8px; }
.search-detail-view { font-size: .85rem; color: var(--text3); margin-bottom: 12px; }
.search-detail-text { font-size: .9rem; line-height: 1.5; white-space: pre-wrap; }
#appSearchDetailModal.open { display: flex !important; align-items: center; justify-content: center; }
`;
    document.head.appendChild(s);
  }

  function buildIndex() {
    ensureSearchStyles();
    allContent = [];

    // Chapters content
    if (typeof APP_DATA !== 'undefined') {
      APP_DATA.chapters.forEach(ch => {
        const pages = APP_DATA.content[ch.id] || [];
        const text = pages.map(p => p[1]).join(' ');
        allContent.push({ type: 'chapter', id: ch.id, title: ch.t, text, view: 'ch', link: () => navChapter(ch.id) });
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
    if (typeof MEGA_FLASHCARDS !== 'undefined') allFlash.push(...MEGA_FLASHCARDS);
    for (let n = 2; n <= 10; n++) {
      const g = globalThis['MEGA_FLASHCARDS_' + n];
      if (typeof g !== 'undefined') allFlash.push(...g);
    }
    allFlash.forEach(fc => {
      allContent.push({ type: 'flashcard', id: 'fc-' + fc.id, title: fc.question, text: fc.question + ' ' + fc.answer, view: 'feed', link: () => navView('feed') });
    });

    // Synthesis
    if (typeof SYNTHESIS !== 'undefined') {
      SYNTHESIS.forEach((syn, i) => {
        const text = syn.sections ? syn.sections.map(s => s.title + ' ' + (s.content || '').replace(/<[^>]+>/g, '')).join(' ') : '';
        allContent.push({ type: 'synthesis', id: 'syn-' + i, title: syn.title, text, view: 'synth', link: () => navView('synth') });
      });
    }

    // Annales
    // Search annales
    const allAnnales = [];
    if (typeof ANNALES !== 'undefined') allAnnales.push(...ANNALES);
    if (typeof ANNALES_EXPANDED !== 'undefined') allAnnales.push(...ANNALES_EXPANDED);
    allAnnales.forEach(a => {
        const qText = (a.questions || []).map(q => q.q + ' ' + q.a).join(' ');
        const caseText = a.case || a.situation || a.title || '';
        allContent.push({
          type: 'annale',
          id: 'ann-' + a.id,
          title: 'Cas ' + a.id + ' — ' + caseText.substring(0, 60),
          text: caseText + ' ' + qText,
          view: 'annales',
          link: () => navAnnalesFocus(a.id, a.title || caseText)
        });
      });

    // HAS
    const allHas = [];
    if (typeof HAS_RECOMMANDATIONS !== 'undefined') allHas.push(...HAS_RECOMMANDATIONS);
    if (typeof HAS_EXPANDED !== 'undefined') allHas.push(...HAS_EXPANDED);
    allHas.forEach(h => {
        allContent.push({ type: 'has', id: h.id, title: h.theme, text: h.reco + ' ' + (h.details || ''), view: 'synth', link: () => navView('synth') });
      });

    // Concepts
    if (typeof CONCEPT_MAP !== 'undefined') {
      Object.entries(CONCEPT_MAP).forEach(([term, info]) => {
        allContent.push({ type: 'concept', id: 'c-' + term, title: term, text: term, view: 'ch', link: () => { closeSearch(); navigateToConcept(info.ch, info.search); } });
      });
    }

    // MEGA_CASES
    if (typeof MEGA_CASES !== 'undefined') {
      MEGA_CASES.forEach(m => {
        const qText = (m.questions || []).map(q => (q.q || '') + ' ' + (q.a || '')).join(' ');
        const body = [m.title, m.context, m.patient, m.examen, m.biologie, m.imagerie, m.juryComment, m.pieges, m.references, qText].filter(Boolean).join(' ');
        const detailText = body.slice(0, 4000);
        allContent.push({
          type: 'mega',
          id: m.id,
          title: (m.id ? m.id + ' — ' : '') + (m.title || 'Cas clinique'),
          text: body,
          detailText,
          view: 'annales',
          link: () => navAnnalesFocus(m.id, m.title)
        });
      });
    }

    // QUESTIONS_VIVES
    if (typeof QUESTIONS_VIVES !== 'undefined') {
      QUESTIONS_VIVES.forEach(qv => {
        const body = [qv.theme, qv.question, qv.reponse, qv.source].join(' ');
        allContent.push({
          type: 'question_vive',
          id: qv.id,
          title: (qv.theme ? qv.theme + ' — ' : '') + (qv.question || ''),
          text: body,
          detailText: qv.reponse || body,
          view: 'reference',
          link: () => openDetailModal(allContent.find(c => c.type === 'question_vive' && c.id === qv.id) || { type: 'question_vive', title: qv.question, text: body, detailText: qv.reponse })
        });
      });
    }

    // PAROLES_EXPERTS
    if (typeof PAROLES_EXPERTS !== 'undefined') {
      PAROLES_EXPERTS.forEach(pe => {
        const body = [pe.auteur, pe.specialite, pe.citation, pe.contexte].join(' ');
        allContent.push({
          type: 'parole_expert',
          id: pe.id,
          title: (pe.auteur || 'Expert') + ' — ' + (pe.citation || '').slice(0, 72),
          text: body,
          detailText: body,
          view: 'feed',
          link: () => { navView('feed'); }
        });
      });
    }

    // TABLEAUX_COMPARATIFS
    if (typeof TABLEAUX_COMPARATIFS !== 'undefined') {
      TABLEAUX_COMPARATIFS.forEach(tc => {
        const body = tableauxToText(tc);
        allContent.push({
          type: 'tableau',
          id: tc.id,
          title: tc.titre || tc.id,
          text: body,
          detailText: body,
          view: 'synth',
          link: () => { navView('synth'); openDetailModal(allContent.find(c => c.type === 'tableau' && c.id === tc.id) || { type: 'tableau', title: tc.titre, text: body }); }
        });
      });
    }

    // CLINICAL_REFERENCE
    if (typeof CLINICAL_REFERENCE !== 'undefined') {
      CLINICAL_REFERENCE.forEach(cr => {
        const body = [cr.category, cr.title, cr.content, (cr.tags || []).join(' ')].join(' ');
        const isUrgence = cr.category === 'Urgence';
        allContent.push({
          type: 'reference',
          id: cr.id,
          title: (cr.category ? cr.category + ' — ' : '') + (cr.title || ''),
          text: body,
          detailText: cr.content || body,
          view: isUrgence ? 'proto' : 'reference',
          link: () => (isUrgence ? navProtoSearch(cr.title || '') : openDetailModal(allContent.find(c => c.type === 'reference' && c.id === cr.id) || { type: 'reference', title: cr.title, text: body, detailText: cr.content }))
        });
      });
    }

    // SCORES_URGENCE
    if (typeof SCORES_URGENCE !== 'undefined') {
      SCORES_URGENCE.forEach(su => {
        const body = [su.nom, su.items, su.seuils, su.utilisation].join(' ');
        allContent.push({
          type: 'score_urgence',
          id: su.id,
          title: su.nom || su.id,
          text: body,
          detailText: body,
          view: 'garde',
          link: () => openDetailModal(allContent.find(c => c.type === 'score_urgence' && c.id === su.id) || { type: 'score_urgence', title: su.nom, text: body })
        });
      });
    }

    // SCORES_GERIATRIE
    if (typeof SCORES_GERIATRIE !== 'undefined') {
      SCORES_GERIATRIE.forEach(sg => {
        const body = [sg.nom, sg.description, sg.items, sg.seuils, sg.duree, sg.fiabilite].join(' ');
        allContent.push({
          type: 'score_geriatrie',
          id: sg.id,
          title: sg.nom || sg.id,
          text: body,
          detailText: body,
          view: 'ch',
          link: () => (sg.chapitre ? navChapter(sg.chapitre) : openDetailModal(allContent.find(c => c.type === 'score_geriatrie' && c.id === sg.id) || { type: 'score_geriatrie', title: sg.nom, text: body }))
        });
      });
    }

    // FORMULES_GERIATRIE
    if (typeof FORMULES_GERIATRIE !== 'undefined') {
      FORMULES_GERIATRIE.forEach(f => {
        const body = [f.nom, f.formule, f.utilisation, f.unites, f.seuils].join(' ');
        allContent.push({
          type: 'formule',
          id: f.id,
          title: f.nom || f.id,
          text: body,
          detailText: body,
          view: 'reference',
          link: () => openDetailModal(allContent.find(c => c.type === 'formule' && c.id === f.id) || { type: 'formule', title: f.nom, text: body })
        });
      });
    }

    // EXAMENS_GUIDE
    if (typeof EXAMENS_GUIDE !== 'undefined') {
      EXAMENS_GUIDE.forEach(ex => {
        const body = [ex.nom, ex.indication, (ex.parametres || []).join(' '), ex.interpretation].join(' ');
        allContent.push({
          type: 'examen',
          id: ex.id,
          title: ex.nom || ex.id,
          text: body,
          detailText: body,
          view: 'reference',
          link: () => openDetailModal(allContent.find(c => c.type === 'examen' && c.id === ex.id) || { type: 'examen', title: ex.nom, text: body })
        });
      });
    }

    // INTERACTIONS_CRITIQUES
    if (typeof INTERACTIONS_CRITIQUES !== 'undefined') {
      INTERACTIONS_CRITIQUES.forEach(int => {
        const body = [int.drugA, int.drugB, int.risque, int.action].join(' ');
        allContent.push({
          type: 'interaction',
          id: int.id,
          title: (int.drugA || '') + ' + ' + (int.drugB || ''),
          text: body,
          detailText: body,
          view: 'proto',
          link: () => navProtoSearch(int.drugA || int.drugB || '')
        });
      });
    }

    // ITEMS_EVC
    if (typeof ITEMS_EVC !== 'undefined') {
      ITEMS_EVC.forEach(item => {
        const body = [item.titre, item.rang, item.chapitre, ...(item.objectifs || [])].join(' ');
        allContent.push({
          type: 'item_evc',
          id: item.id,
          title: (item.id || '') + ' — ' + (item.titre || ''),
          text: body,
          detailText: (item.objectifs || []).join('\n• '),
          view: 'ch',
          link: () => (item.chapitre ? navChapter(item.chapitre) : navView('items'))
        });
      });
    }

    // VOCABULAIRE_MEDICAL
    if (typeof VOCABULAIRE_MEDICAL !== 'undefined') {
      VOCABULAIRE_MEDICAL.forEach((v, i) => {
        const term = v.fr || v.en || ('term-' + i);
        const body = [v.fr, v.en, v.definition, v.description].filter(Boolean).join(' ');
        allContent.push({
          type: 'vocabulaire',
          id: 'voc-' + i + '-' + term,
          title: (v.fr || '') + (v.en ? ' (' + v.en + ')' : ''),
          text: body,
          detailText: body,
          view: 'dict',
          link: () => navDictTerm(v.fr || term)
        });
      });
    }

    // GUIDE_ACCOMPAGNANT
    if (typeof GUIDE_ACCOMPAGNANT !== 'undefined') {
      GUIDE_ACCOMPAGNANT.forEach(acc => {
        const body = [acc.titre, ...(acc.conseils || [])].join(' ');
        allContent.push({
          type: 'accompagnant',
          id: acc.id,
          title: acc.titre || acc.id,
          text: body,
          detailText: (acc.conseils || []).map(c => '• ' + c).join('\n'),
          view: 'accompagnant',
          link: () => openDetailModal(allContent.find(c => c.type === 'accompagnant' && c.id === acc.id) || { type: 'accompagnant', title: acc.titre, text: body, detailText: (acc.conseils || []).join('\n') })
        });
      });
    }

    // CHECKLIST_GARDE
    if (typeof CHECKLIST_GARDE !== 'undefined') {
      CHECKLIST_GARDE.forEach(chk => {
        const body = [chk.titre, ...(chk.items || [])].join(' ');
        allContent.push({
          type: 'checklist',
          id: chk.id,
          title: chk.titre || chk.id,
          text: body,
          detailText: (chk.items || []).map(c => '• ' + c).join('\n'),
          view: 'garde',
          link: () => { navView('garde'); openDetailModal(allContent.find(c => c.type === 'checklist' && c.id === chk.id) || { type: 'checklist', title: chk.titre, text: body }); }
        });
      });
    }
  }

  function search(query) {
    if (!allContent.length) buildIndex();
    if (!query || query.length < 2) return [];

    const q = normalize(query);
    const qWords = q.split(/\s+/).filter(w => w.length >= 2);
    if (!qWords.length) return [];

    const results = allContent.map(item => {
      const normalizedText = normalize(item.title + ' ' + item.text);
      let score = 0;
      let matched = true;

      for (const word of qWords) {
        if (normalizedText.includes(word)) {
          score += 1;
          if (normalize(item.title).includes(word)) score += 3;
          if (item.type === 'mega' || item.type === 'item_evc') score += 1;
        } else {
          matched = false;
        }
      }

      const snippet = makeSnippet(item.text || item.title, qWords);
      return { ...item, score, matched, snippet };
    }).filter(r => r.matched && r.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 30);

    return results;
  }

  function renderResults(results, container) {
    if (!container) return;

    if (!results.length) {
      container.innerHTML = '<div class="search-empty"><div class="search-empty-icon">🔍</div><div class="search-empty-text">Aucun résultat</div><div class="search-empty-hint">Essayez un terme plus court ou vérifiez l\'orthographe</div></div>';
      return;
    }

    container.innerHTML = results.map((r, idx) => {
      const meta = typeLabels[r.type] || { badge: r.type, view: 'App' };
      const viewHint = r.view ? meta.view : '';
      return `
      <div class="search-result search-result-rich" role="button" tabindex="0"
        data-idx="${idx}"
        onclick="AppSearch.goFromEl(this)"
        onkeydown="if(event.key==='Enter')AppSearch.goFromEl(this)">
        <div class="search-result-top">
          <span class="search-type search-type-badge">${esc(meta.badge)}</span>
          <span class="search-view-hint">${esc(viewHint)}</span>
        </div>
        <div class="search-title">${esc(r.title)}</div>
        <div class="search-snippet">${esc(r.snippet || '')}</div>
      </div>`;
    }).join('');

    container._lastResults = results;
  }

  function goFromEl(el) {
    const idx = parseInt(el.getAttribute('data-idx'), 10);
    const container = document.getElementById('searchResults');
    const results = (container && container._lastResults) || [];
    const item = results[idx];
    if (item && item.link) item.link();
    else if (item) go(item.type, item.id);
  }

  function go(type, id) {
    const item = allContent.find(c => c.type === type && String(c.id) === String(id));
    if (item && item.link) item.link();
  }

  function closeDetail() {
    const modal = document.getElementById('appSearchDetailModal');
    if (modal) {
      modal.classList.remove('open');
      modal.style.display = 'none';
    }
  }

  function esc(s) {
    const d = document.createElement('div');
    d.textContent = s || '';
    return d.innerHTML;
  }

  function destroy() {}

  return { search, renderResults, go, goFromEl, closeDetail, destroy, buildIndex };
})();
