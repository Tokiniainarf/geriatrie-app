/* ═══════════════════════════════════════════════════════════════
   BrainFeed — TikTok-style scroll for medical revision
   Swipe, tap, learn. Addictive + effective.
   ═══════════════════════════════════════════════════════════════ */

const BrainFeed = (() => {
  // ── State ──
  let deck = [];
  let idx = 0;
  let streak = 0;
  let points = 0;
  let dailyDone = 0;
  const DAILY_GOAL = 50;
  let lastCardTime = 0;

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

    // Check streak
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

    // Flashcards (from FLASHCARDS global or batches)
    const allFlash = [];
    if (typeof FLASHCARDS !== 'undefined') allFlash.push(...FLASHCARDS);
    if (typeof FLASHCARDS_A !== 'undefined') allFlash.push(...FLASHCARDS_A);
    if (typeof FLASHCARDS_B !== 'undefined') allFlash.push(...FLASHCARDS_B);
    if (typeof FLASHCARDS_C !== 'undefined') allFlash.push(...FLASHCARDS_C);

    allFlash.forEach(fc => {
      const srsEntry = srs[fc.id] || { ease: 2.5, interval: 0, nextReview: 0 };
      const now = Date.now();
      cards.push({
        type: 'flash',
        id: 'fc-' + fc.id,
        chapter: fc.chapter,
        rang: fc.rang,
        question: fc.question,
        answer: fc.answer,
        tags: fc.tags || [],
        priority: srsEntry.nextReview <= now ? 1 : 0,
        srsKey: fc.id,
        srs: srsEntry
      });
    });

    // Synthesis cards
    if (typeof SYNTHESIS !== 'undefined') {
      SYNTHESIS.forEach((syn, i) => {
        cards.push({
          type: 'synthesis',
          id: 'syn-' + i,
          chapter: '',
          rang: '',
          question: syn.title,
          answer: syn.sections ? syn.sections.map(s => s.title).join(' · ') : '',
          tags: [syn.title.split(' ')[0]],
          priority: 0,
          srsKey: null,
          srs: null
        });
      });
    }

    // Sort: due SRS first, then random
    cards.sort((a, b) => {
      if (a.priority !== b.priority) return b.priority - a.priority;
      return Math.random() - 0.5;
    });

    return cards;
  }

  // ── Render current card ──
  function renderCard() {
    const container = document.getElementById('bfCard');
    const counter = document.getElementById('bfCounter');
    const progressBar = document.getElementById('bfProgress');
    const pointsEl = document.getElementById('bfPoints');
    const streakEl = document.getElementById('bfStreak');

    if (!container || !deck.length) return;

    const card = deck[idx % deck.length];
    const chName = getChapterName(card.chapter);

    // Update header
    if (counter) counter.textContent = `${dailyDone + 1} / ${DAILY_GOAL}`;
    if (progressBar) progressBar.style.width = `${Math.min(100, (dailyDone / DAILY_GOAL) * 100)}%`;
    if (pointsEl) pointsEl.textContent = `⭐ ${points}`;
    if (streakEl) streakEl.textContent = `🔥 Jour ${streak}`;

    // Card type styling
    const typeStyles = {
      flash: { bg: 'var(--bg-elevated)', icon: '🎴', label: 'Flashcard' },
      synthesis: { bg: 'var(--accent-soft)', icon: '📋', label: 'Synthèse' },
      case: { bg: 'rgba(5,150,105,.08)', icon: '🏥', label: 'Cas clinique' },
      quiz: { bg: 'rgba(245,158,11,.08)', icon: '⚡', label: 'Quiz rapide' },
      reco: { bg: 'rgba(16,185,129,.1)', icon: '🏥', label: 'Recommandation HAS' },
      memo: { bg: 'rgba(139,92,246,.08)', icon: '🧠', label: 'Mémo' }
    };
    const style = typeStyles[card.type] || typeStyles.flash;

    // Rang badge
    const rangBadge = card.rang
      ? `<span class="bf-rang bf-rang-${card.rang.toLowerCase()}">Rang ${card.rang}</span>`
      : '';

    // Chapter tag
    const chTag = chName
      ? `<span class="bf-chapter-tag">${chName}</span>`
      : '';

    // Tags
    const tagsHtml = (card.tags || []).slice(0, 3).map(t => `<span class="bf-tag">${t}</span>`).join('');

    container.innerHTML = `
      <div class="bf-card-inner" id="bfCardInner">
        <div class="bf-card-front">
          <div class="bf-card-header">
            <span class="bf-card-type">${style.icon} ${style.label}</span>
            ${rangBadge}
          </div>
          <div class="bf-card-question">${esc(card.question)}</div>
          <div class="bf-card-chapter">${chTag}</div>
          <div class="bf-card-hint">Tapez pour voir la réponse</div>
        </div>
        <div class="bf-card-back">
          <div class="bf-card-header">
            <span class="bf-card-type">${style.icon} ${style.label}</span>
            ${rangBadge}
          </div>
          <div class="bf-card-answer">${esc(card.answer)}</div>
          <div class="bf-card-tags">${tagsHtml}</div>
        </div>
      </div>
    `;

    container.className = 'bf-card-container';
    container.style.background = style.bg;

    // Add tap to flip
    container.onclick = () => {
      container.classList.toggle('flipped');
    };
  }

  // ── Actions ──
  function actionKnow() {
    const card = deck[idx % deck.length];
    if (card.srsKey) updateSRS(card, true);
    points += 10;
    dailyDone++;
    updateStats();
    nextCard('up');
  }

  function actionDontKnow() {
    const card = deck[idx % deck.length];
    if (card.srsKey) updateSRS(card, false);
    // Put back in 3 cards
    const removed = deck.splice(idx % deck.length, 1)[0];
    const insertAt = Math.min(idx + 3, deck.length);
    deck.splice(insertAt, 0, removed);
    updateStats();
    nextCard('up');
  }

  function actionFav() {
    const card = deck[idx % deck.length];
    // Toggle in main app favorites if flashcard
    if (card.chapter && typeof quickBm === 'function') {
      quickBm(card.chapter);
    }
    points += 5;
    updateStats();
    showBfToast('❤️ Sauvegardé');
  }

  function nextCard(direction) {
    idx++;
    dailyDone++;
    if (dailyDone >= DAILY_GOAL) {
      showBfToast(`🏆 Objectif atteint ! ${DAILY_GOAL} cards aujourd'hui`);
    }
    renderCard();
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

  // ── Helpers ──
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

  function showBfToast(msg) {
    const t = document.getElementById('bfToast');
    if (!t) return;
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2000);
  }

  // ── Swipe handling ──
  let touchStartY = 0;
  let touchStartTime = 0;

  function onTouchStart(e) {
    touchStartY = e.touches[0].clientY;
    touchStartTime = Date.now();
  }

  function onTouchEnd(e) {
    const deltaY = touchStartY - e.changedTouches[0].clientY;
    const deltaTime = Date.now() - touchStartTime;
    const velocity = Math.abs(deltaY) / deltaTime;

    if (deltaY > 50 && velocity > 0.3) {
      // Swipe up = know it
      actionKnow();
    } else if (deltaY < -50 && velocity > 0.3) {
      // Swipe down = don't know
      actionDontKnow();
    }
  }

  // ── Keyboard shortcuts ──
  function onKeyDown(e) {
    if (document.getElementById('vFeed')?.classList.contains('active')) {
      if (e.key === 'ArrowUp' || e.key === 'k') actionKnow();
      else if (e.key === 'ArrowDown' || e.key === 'j') actionDontKnow();
      else if (e.key === 'f') actionFav();
      else if (e.key === ' ') { e.preventDefault(); document.getElementById('bfCard')?.classList.toggle('flipped'); }
    }
  }

  // ── Init ──
  function init() {
    deck = buildDeck();
    idx = 0;

    // Apply dark mode for feed (more immersive)
    // Don't force it — respect user preference

    renderCard();

    // Touch events
    const container = document.getElementById('bfFeed');
    if (container) {
      container.addEventListener('touchstart', onTouchStart, { passive: true });
      container.addEventListener('touchend', onTouchEnd, { passive: true });
    }

    // Keyboard
    document.addEventListener('keydown', onKeyDown);
  }

  function destroy() {
    document.removeEventListener('keydown', onKeyDown);
  }

  return { init, destroy, renderCard, actionKnow, actionDontKnow, actionFav };
})();
