/* ═══════════════════════════════════════════════════════════════
   BrainFeed — 9:16 TikTok-style vertical scroll for medical revision
   Swipe, tap, learn. Full-screen immersive cards.
   ═══════════════════════════════════════════════════════════════ */

const BrainFeed = (() => {
  // ── State ──
  let deck = [];
  let idx = 0;
  let streak = 0;
  let points = 0;
  let dailyDone = 0;
  let combo = 0;
  const DAILY_GOAL = 50;
  let observer = null;
  let renderedRange = { start: 0, end: 0 };
  const BATCH_SIZE = 5; // Render 5 slides at a time

  // ── SRS data (localStorage) ──
  function loadSRS() {
    try { return JSON.parse(localStorage.getItem('bf_srs')) || {}; } catch { return {}; }
  }
  function saveSRS(srs) { localStorage.setItem('bf_srs', JSON.stringify(srs)); }
  function loadStats() {
    try { return JSON.parse(localStorage.getItem('bf_stats')) || { streak: 0, points: 0, lastDay: '', dailyDone: 0 }; } catch { return { streak: 0, points: 0, lastDay: '', dailyDone: 0 }; }
  }
  function saveStats(s) { localStorage.setItem('bf_stats', JSON.stringify(s)); }

  // ── Build deck from all sources ──
  function buildDeck() {
    const cards = [];
    const today = new Date().toDateString();
    const srs = loadSRS();
    const stats = loadStats();

    if (stats.lastDay !== today) {
      const yesterday = new Date(Date.now() - 86400000).toDateString();
      if (stats.lastDay === yesterday) {
        stats.streak = (stats.streak || 0) + 1;
      } else if (stats.lastDay !== today) {
        stats.streak = 1;
      }
      stats.dailyDone = 0;
      stats.lastDay = today;
      saveStats(stats);
    }

    streak = stats.streak || 1;
    points = stats.points || 0;
    dailyDone = stats.dailyDone || 0;

    // Flashcards
    const allFlash = [];
    if (typeof FLASHCARDS !== 'undefined') allFlash.push(...FLASHCARDS);
    if (typeof FLASHCARDS_A !== 'undefined') allFlash.push(...FLASHCARDS_A);
    if (typeof FLASHCARDS_B !== 'undefined') allFlash.push(...FLASHCARDS_B);
    if (typeof FLASHCARDS_C !== 'undefined') allFlash.push(...FLASHCARDS_C);
    if (typeof FLASHCARDS_MEMOS !== 'undefined') allFlash.push(...FLASHCARDS_MEMOS);
    if (typeof FLASHCARDS_EXPANDED !== 'undefined') allFlash.push(...FLASHCARDS_EXPANDED);

    allFlash.forEach(fc => {
      const srsEntry = srs[fc.id] || { ease: 2.5, interval: 0, nextReview: 0 };
      const now = Date.now();
      cards.push({
        type: 'flash', id: 'fc-' + fc.id, chapter: fc.chapter, rang: fc.rang,
        question: fc.question, answer: fc.answer, tags: fc.tags || [],
        priority: srsEntry.nextReview <= now ? 1 : 0, srsKey: fc.id, srs: srsEntry
      });
    });

    // Synthesis
    if (typeof SYNTHESIS !== 'undefined') {
      SYNTHESIS.forEach((syn, i) => {
        cards.push({
          type: 'synthesis', id: 'syn-' + i, chapter: '', rang: '',
          question: syn.title,
          answer: syn.sections ? syn.sections.map(s => s.title).join(' · ') : '',
          tags: [syn.title.split(' ')[0]], priority: 0, srsKey: null, srs: null
        });
      });
    }

    // Annales (mini clinical cases)
    const allAnnales = [];
    if (typeof ANNALES !== 'undefined') allAnnales.push(...ANNALES);
    if (typeof ANNALES_EXPANDED !== 'undefined') allAnnales.push(...ANNALES_EXPANDED);
    allAnnales.forEach(a => {
        cards.push({
          type: 'case', id: 'ann-' + a.id, chapter: a.chapter, rang: a.difficulty,
          question: a.cas || a.title || '',
          answer: a.correction || a.reponse || '',
          tags: ['Cas clinique', a.chapter || ''], priority: 0, srsKey: null, srs: null
        });
      });

    // HAS recommendations
    const allHas = [];
    if (typeof HAS_RECOMMANDATIONS !== 'undefined') allHas.push(...HAS_RECOMMANDATIONS);
    if (typeof HAS_EXPANDED !== 'undefined') allHas.push(...HAS_EXPANDED);
    allHas.forEach(h => {
        cards.push({
          type: 'reco', id: h.id, chapter: h.chapter, rang: '',
          question: h.theme + (h.objectif ? ' — ' + h.objectif : ''),
          answer: h.recommandations ? h.recommandations.join(' · ') : (h.reco || ''),
          tags: ['HAS', h.theme.split(' ')[0]], priority: 0, srsKey: null, srs: null
        });
      });

    // Sort: due SRS first, then shuffle
    cards.sort((a, b) => {
      if (a.priority !== b.priority) return b.priority - a.priority;
      return Math.random() - 0.5;
    });

    return cards;
  }

  // ── Get chapter name ──
  function getChapterName(chId) {
    if (typeof APP_DATA === 'undefined' || !chId) return '';
    const ch = APP_DATA.chapters.find(c => c.id === chId);
    return ch ? ch.t : '';
  }

  function esc(s) {
    const d = document.createElement('div');
    d.textContent = s || '';
    return d.innerHTML;
  }

  // ── Render a single slide ──
  function renderSlide(card, slideIdx) {
    const chName = getChapterName(card.chapter);
    const typeLabels = {
      flash: 'Flashcard', synthesis: 'Synthèse', case: 'Cas clinique',
      quiz: 'Quiz rapide', reco: 'Recommandation HAS', memo: 'Mémo'
    };
    const typeIcons = {
      flash: '🎴', synthesis: '📋', case: '🏥', quiz: '⚡', reco: '📋', memo: '🧠'
    };
    const rangBadge = card.rang
      ? `<span class="bf-rang bf-rang-${(card.rang || '').toString().toLowerCase()}">Rang ${card.rang}</span>`
      : '';
    const chTag = chName ? `<span class="bf-card-chapter">${esc(chName)}</span>` : '';
    const tagsHtml = (card.tags || []).slice(0, 3).map(t => `<span class="bf-tag">${esc(t)}</span>`).join('');

    const slide = document.createElement('div');
    slide.className = 'bf-slide';
    slide.dataset.type = card.type;
    slide.dataset.idx = slideIdx;
    slide.innerHTML = `
      <div class="bf-card-container" id="bfCard-${slideIdx}">
        <div class="bf-card-inner">
          <div class="bf-card-front">
            <div class="bf-card-header">
              <span class="bf-card-type">${typeIcons[card.type] || '🎴'} ${typeLabels[card.type] || 'Carte'}</span>
              ${rangBadge}
            </div>
            <div class="bf-card-question">${esc(card.question)}</div>
            <div>${chTag}</div>
            <div class="bf-card-hint">Tapez pour voir la réponse</div>
          </div>
          <div class="bf-card-back">
            <div class="bf-card-header">
              <span class="bf-card-type">${typeIcons[card.type] || '🎴'} ${typeLabels[card.type] || 'Carte'}</span>
              ${rangBadge}
            </div>
            <div class="bf-card-answer">${esc(card.answer)}</div>
            <div class="bf-card-tags">${tagsHtml}</div>
          </div>
        </div>
      </div>
      <div class="bf-side-info">
        <button class="bf-side-btn" onclick="BrainFeed.shareCard(${slideIdx})" aria-label="Partager">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
          <span>Partager</span>
        </button>
      </div>
    `;

    // Tap to flip
    const cardEl = slide.querySelector('.bf-card-container');
    cardEl.addEventListener('click', (e) => {
      if (e.target.closest('.bf-side-btn')) return;
      cardEl.classList.toggle('flipped');
    });

    return slide;
  }

  // ── Render visible slides ──
  function renderSlides() {
    const feed = document.getElementById('bfFeed');
    if (!feed) return;

    feed.innerHTML = '';
    const end = Math.min(idx + BATCH_SIZE, deck.length);

    for (let i = idx; i < end; i++) {
      const slide = renderSlide(deck[i], i);
      if (i === idx) slide.classList.add('bf-slide-enter');
      feed.appendChild(slide);
    }

    renderedRange = { start: idx, end: end };
    setupObserver();
    updateHeader();
  }

  // ── IntersectionObserver for tracking current card ──
  function setupObserver() {
    if (observer) observer.disconnect();
    const feed = document.getElementById('bfFeed');
    if (!feed) return;

    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          const slideIdx = parseInt(entry.target.dataset.idx);
          if (!isNaN(slideIdx) && slideIdx !== idx) {
            idx = slideIdx;
            updateHeader();
            // Load more slides if near end
            if (idx >= renderedRange.end - 2) {
              loadMoreSlides();
            }
          }
        }
      });
    }, { root: feed, threshold: 0.5 });

    feed.querySelectorAll('.bf-slide').forEach(slide => observer.observe(slide));
  }

  // ── Load more slides when scrolling ──
  function loadMoreSlides() {
    const feed = document.getElementById('bfFeed');
    if (!feed) return;
    const end = Math.min(renderedRange.end + BATCH_SIZE, deck.length);
    for (let i = renderedRange.end; i < end; i++) {
      feed.appendChild(renderSlide(deck[i], i));
      observer.observe(feed.lastElementChild);
    }
    renderedRange.end = end;
  }

  // ── Update header stats ──
  function updateHeader() {
    const counter = document.getElementById('bfCounter');
    const progressBar = document.getElementById('bfProgress');
    const pointsEl = document.getElementById('bfPoints');
    const streakEl = document.getElementById('bfStreak');

    if (counter) counter.textContent = `${dailyDone + 1} / ${DAILY_GOAL}`;
    if (progressBar) progressBar.style.width = `${Math.min(100, (dailyDone / DAILY_GOAL) * 100)}%`;
    if (pointsEl) pointsEl.textContent = `${points} pts`;
    if (streakEl) streakEl.textContent = `Jour ${streak}`;
  }

  // ── Actions ──
  function actionKnow() {
    const card = deck[idx];
    if (!card) return;
    if (card.srsKey) updateSRS(card, true);
    combo++;
    points += 10 + Math.min(combo * 2, 20);
    dailyDone++;
    updateStats();
    showCombo();
    showToast(combo > 3 ? `🔥 Combo x${combo} ! +${10 + Math.min(combo * 2, 20)}` : `+${10 + Math.min(combo * 2, 20)} pts`);
    scrollToNext();
  }

  function actionDontKnow() {
    const card = deck[idx];
    if (!card) return;
    if (card.srsKey) updateSRS(card, false);
    combo = 0;
    // Put back in 3 cards
    const removed = deck.splice(idx, 1)[0];
    const insertAt = Math.min(idx + 3, deck.length);
    deck.splice(insertAt, 0, removed);
    updateStats();
    showToast('Pas grave, ça revient dans 3 cards');
    scrollToNext();
  }

  function actionFav() {
    const card = deck[idx];
    if (!card) return;
    if (card.chapter && typeof quickBm === 'function') quickBm(card.chapter);
    points += 5;
    updateStats();
    showToast('❤️ Sauvegardé');
    // Visual feedback on side button
    const feed = document.getElementById('bfFeed');
    if (feed) {
      const slide = feed.querySelector(`.bf-slide[data-idx="${idx}"]`);
      if (slide) {
        const btn = slide.querySelector('.bf-side-btn');
        if (btn) btn.classList.add('bf-active');
      }
    }
  }

  function scrollToNext() {
    const feed = document.getElementById('bfFeed');
    if (!feed) return;
    const nextSlide = feed.querySelector(`.bf-slide[data-idx="${idx + 1}"]`);
    if (nextSlide) {
      nextSlide.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      idx++;
      renderSlides();
    }
  }

  // ── Combo display ──
  function showCombo() {
    if (combo < 3) return;
    const feed = document.getElementById('bfFeed');
    if (!feed) return;
    let comboEl = feed.querySelector('.bf-combo');
    if (!comboEl) {
      comboEl = document.createElement('div');
      comboEl.className = 'bf-combo';
      feed.appendChild(comboEl);
    }
    comboEl.textContent = `x${combo}`;
    comboEl.classList.add('show');
    setTimeout(() => comboEl.classList.remove('show'), 800);
  }

  // ── SRS (SM-2 simplified) ──
  function updateSRS(card, correct) {
    const srs = loadSRS();
    const entry = srs[card.srsKey] || { ease: 2.5, interval: 0, nextReview: 0 };
    if (correct) {
      entry.interval = entry.interval === 0 ? 1 : Math.round(entry.interval * entry.ease);
      entry.ease = Math.max(1.3, entry.ease + 0.1);
    } else {
      entry.interval = 0;
      entry.ease = Math.max(1.3, entry.ease - 0.2);
    }
    entry.nextReview = Date.now() + entry.interval * 86400000;
    srs[card.srsKey] = entry;
    saveSRS(srs);
  }

  function updateStats() {
    const stats = loadStats();
    stats.points = points;
    stats.dailyDone = dailyDone;
    stats.streak = streak;
    stats.lastDay = new Date().toDateString();
    saveStats(stats);
  }

  // ── Toast ──
  function showToast(msg) {
    const t = document.getElementById('bfToast');
    if (!t) return;
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2000);
  }

  // ── Share (copy to clipboard) ──
  function shareCard(slideIdx) {
    const card = deck[slideIdx];
    if (!card) return;
    const text = `${card.question}\n\n${card.answer}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => showToast('📋 Copié !'));
    }
  }

  // ── Keyboard shortcuts ──
  function onKeyDown(e) {
    if (!document.getElementById('vFeed')?.classList.contains('active')) return;
    if (e.key === 'ArrowUp' || e.key === 'k') actionKnow();
    else if (e.key === 'ArrowDown' || e.key === 'j') actionDontKnow();
    else if (e.key === 'f') actionFav();
    else if (e.key === ' ') { e.preventDefault(); document.getElementById(`bfCard-${idx}`)?.classList.toggle('flipped'); }
  }

  // ── Daily goal celebration ──
  function checkDailyGoal() {
    if (dailyDone >= DAILY_GOAL) {
      showBfCelebration();
    }
  }

  function showBfCelebration() {
    let cel = document.querySelector('.bf-celebration');
    if (!cel) {
      cel = document.createElement('div');
      cel.className = 'bf-celebration';
      cel.innerHTML = `<h2>🏆 Objectif atteint !</h2><p>${DAILY_GOAL} cards aujourd'hui</p><p style="margin-top:16px;font-size:.85rem;color:rgba(255,255,255,.4)">Tapez pour continuer</p>`;
      cel.onclick = () => cel.classList.remove('show');
      document.body.appendChild(cel);
    }
    cel.classList.add('show');
  }

  // ── Init ──
  function init() {
    deck = buildDeck();
    idx = 0;
    combo = 0;
    renderSlides();
    document.addEventListener('keydown', onKeyDown);

    // Scroll-snap: detect when user scrolls to next card
    const feed = document.getElementById('bfFeed');
    if (feed) {
      feed.addEventListener('scroll', () => {
        // Infinite scroll: load more when near bottom
        const scrollBottom = feed.scrollHeight - feed.scrollTop - feed.clientHeight;
        if (scrollBottom < feed.clientHeight && renderedRange.end < deck.length) {
          loadMoreSlides();
        }
      }, { passive: true });
    }
  }

  function destroy() {
    if (observer) observer.disconnect();
    document.removeEventListener('keydown', onKeyDown);
  }

  return { init, destroy, actionKnow, actionDontKnow, actionFav, shareCard, renderSlides };
})();
