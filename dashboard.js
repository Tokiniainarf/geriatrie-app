/* ═══════════════════════════════════════════════════════════════
   Dashboard — Progress tracking, heatmap, weak areas
   ═══════════════════════════════════════════════════════════════ */

const Dashboard = (() => {
  const DAILY_GOAL = 50;

  function render() {
    const container = document.getElementById('dashContent');
    if (!container) return;

    // Load stats from localStorage
    const bfStats = safeParse('bf_stats', { streak: 0, points: 0, dailyDone: 0 });
    const srs = safeParse('bf_srs', {});
    const read = safeParse('grd', []);
    const bm = safeParse('gbm', []);

    // SRS stats
    const srsEntries = Object.values(srs);
    const mastered = srsEntries.filter(e => e.interval >= 7).length;
    const learning = srsEntries.filter(e => e.interval > 0 && e.interval < 7).length;
    const newCards = srsEntries.filter(e => e.interval === 0).length;
    const dueNow = srsEntries.filter(e => e.nextReview <= Date.now()).length;

    // Chapter coverage
    const totalChapters = typeof APP_DATA !== 'undefined' ? APP_DATA.chapters.length : 20;
    const readPct = Math.round((read.length / totalChapters) * 100);

    const allFlash = getAllFlashcards();
    const totalFlash = allFlash.length;

    const dailyDone = bfStats.dailyDone || 0;
    const dailyPct = Math.min(100, Math.round((dailyDone / DAILY_GOAL) * 100));
    const ringOffset = Math.round(283 * (1 - dailyPct / 100));

    const srsDenom = totalFlash || srsEntries.length || 1;
    const pctMastered = Math.round((mastered / srsDenom) * 100);
    const pctLearning = Math.round((learning / srsDenom) * 100);
    const pctNew = Math.round((newCards / srsDenom) * 100);
    const donutP1 = pctMastered;
    const donutP2 = Math.min(100, donutP1 + pctLearning);

    const activeDays = getActiveDayKeys(bfStats);
    const heatmap = buildHeatmap(activeDays, bfStats);
    const streakCal = buildStreakCalendar(activeDays);

    container.innerHTML = `
      <div class="dash-grid">
        <!-- Streak -->
        <div class="dash-card dash-card-streak">
          <div class="dash-card-icon">🔥</div>
          <div class="dash-card-value"><span class="dash-counter" data-count="${bfStats.streak || 0}">0</span></div>
          <div class="dash-card-label">Jours consécutifs</div>
        </div>

        <!-- Points -->
        <div class="dash-card dash-card-points">
          <div class="dash-card-icon">⭐</div>
          <div class="dash-card-value"><span class="dash-counter" data-count="${bfStats.points || 0}">0</span></div>
          <div class="dash-card-label">Points accumulés</div>
        </div>

        <!-- Daily goal ring -->
        <div class="dash-card dash-card-today dash-card-goal">
          <div class="dash-goal-ring" style="--ring-offset:${ringOffset}">
            <svg class="dash-goal-ring-svg" viewBox="0 0 100 100" aria-hidden="true">
              <circle class="dash-goal-ring-track" cx="50" cy="50" r="45"/>
              <circle class="dash-goal-ring-fill" cx="50" cy="50" r="45" style="stroke-dashoffset:${ringOffset}"/>
            </svg>
            <div class="dash-goal-ring-center">
              <span class="dash-counter" data-count="${dailyDone}">0</span>
              <span class="dash-goal-slash">/</span>
              <span>${DAILY_GOAL}</span>
            </div>
          </div>
          <div class="dash-card-label">Objectif du jour</div>
        </div>

        <!-- Total cards -->
        <div class="dash-card dash-card-total">
          <div class="dash-card-icon">🎴</div>
          <div class="dash-card-value"><span class="dash-counter" data-count="${totalFlash}">0</span></div>
          <div class="dash-card-label">Flashcards total</div>
        </div>
      </div>

      <!-- SRS breakdown -->
      <div class="dash-section">
        <h2>Répartition SRS</h2>
        <div class="dash-srs-donut-row">
          <div class="dash-donut" style="--donut-p1:${donutP1};--donut-p2:${donutP2}" title="SRS">
            <div class="dash-donut-hole">
              <span class="dash-donut-total"><span class="dash-counter" data-count="${srsEntries.length}">0</span></span>
              <span class="dash-donut-sub">cartes</span>
            </div>
          </div>
          <div class="dash-srs-legend dash-srs-legend-col">
            <span class="dash-srs-legend-item"><span class="dot dot-mastered"></span> Maîtrisées (${mastered}) — ${pctMastered}%</span>
            <span class="dash-srs-legend-item"><span class="dot dot-learning"></span> En cours (${learning}) — ${pctLearning}%</span>
            <span class="dash-srs-legend-item"><span class="dot dot-new"></span> Nouvelles (${newCards}) — ${pctNew}%</span>
            <span class="dash-srs-legend-item"><span class="dot dot-due"></span> À réviser (${dueNow})</span>
          </div>
        </div>
      </div>

      <!-- Chapter progress -->
      <div class="dash-section">
        <h2>Progression par chapitre</h2>
        <div class="dash-chapters">${buildChapterBars(read, srs, allFlash)}</div>
        <p class="dash-ch-summary">Chapitres lus : <strong>${readPct}%</strong> (${read.length}/${totalChapters})</p>
      </div>

      <!-- Streak calendar -->
      <div class="dash-section">
        <h2>Calendrier série (30 jours)</h2>
        <div class="dash-streak-cal">${streakCal}</div>
      </div>

      <!-- Heatmap -->
      <div class="dash-section">
        <h2>Activité (7 derniers jours)</h2>
        <div class="dash-heatmap">${heatmap}</div>
      </div>

      <!-- Favorites -->
      <div class="dash-section">
        <h2>Favoris (${bm.length})</h2>
        <div class="dash-favs">${buildFavList(bm)}</div>
      </div>
    `;

    runDashboardAnimations(container);
  }

  function getAllFlashcards() {
    const all = [];
    if (typeof FLASHCARDS !== 'undefined') all.push(...FLASHCARDS);
    if (typeof FLASHCARDS_A !== 'undefined') all.push(...FLASHCARDS_A);
    if (typeof FLASHCARDS_B !== 'undefined') all.push(...FLASHCARDS_B);
    if (typeof FLASHCARDS_C !== 'undefined') all.push(...FLASHCARDS_C);
    if (typeof FLASHCARDS_MEMOS !== 'undefined') all.push(...FLASHCARDS_MEMOS);
    if (typeof FLASHCARDS_EXPANDED !== 'undefined') all.push(...FLASHCARDS_EXPANDED);
    if (typeof MEGA_FLASHCARDS !== 'undefined') all.push(...MEGA_FLASHCARDS);
    return all;
  }

  function getActiveDayKeys(stats) {
    const active = new Set();
    const todayKey = new Date().toDateString();
    if ((stats.dailyDone || 0) > 0) active.add(todayKey);
    if (!stats.lastDay) return active;
    const anchor = new Date(stats.lastDay);
    if (Number.isNaN(anchor.getTime())) return active;
    const streak = Math.max(0, stats.streak || 0);
    for (let i = 0; i < streak; i++) {
      const d = new Date(anchor);
      d.setDate(d.getDate() - i);
      active.add(d.toDateString());
    }
    return active;
  }

  function chapterCompletionPct(chId, read, srs, allFlash) {
    const cards = allFlash.filter(fc => fc.chapter === chId);
    if (!cards.length) return read.includes(chId) ? 100 : 0;
    let score = 0;
    cards.forEach(fc => {
      const e = srs[fc.id];
      if (!e || e.interval === 0) score += 0;
      else if (e.interval >= 7) score += 100;
      else score += 45;
    });
    const srsPct = Math.round(score / cards.length);
    if (read.includes(chId)) return Math.max(srsPct, 100);
    return srsPct;
  }

  function chapterBarTone(pct) {
    if (pct >= 80) return 'high';
    if (pct >= 40) return 'mid';
    if (pct > 0) return 'low';
    return 'none';
  }

  function buildChapterBars(read, srs, allFlash) {
    if (typeof APP_DATA === 'undefined') return '<div class="dash-empty"><span class="dash-empty-icon">📚</span><span>Aucune donnée de chapitre</span></div>';
    return APP_DATA.chapters.map(ch => {
      const pct = chapterCompletionPct(ch.id, read, srs, allFlash);
      const tone = chapterBarTone(pct);
      const color = typeof CH_COLORS !== 'undefined' ? CH_COLORS[ch.id] : 'var(--accent)';
      return `
        <div class="dash-ch-bar" onclick="showCh('${ch.id}')">
          <div class="dash-ch-num" style="background:${color}20;color:${color}">${ch.id.replace('ch','')}</div>
          <div class="dash-ch-body">
            <div class="dash-ch-title-row">
              <span class="dash-ch-title">${ch.t}</span>
              <span class="dash-ch-pct">${pct}%</span>
            </div>
            <div class="dash-ch-progress" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100">
              <div class="dash-ch-progress-fill dash-ch-tone-${tone}" style="width:${pct}%"></div>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  function buildStreakCalendar(activeDays) {
    const todayKey = new Date().toDateString();
    const cells = [];
    for (let i = 29; i >= 0; i--) {
      const d = new Date();
      d.setHours(0, 0, 0, 0);
      d.setDate(d.getDate() - i);
      const key = d.toDateString();
      const active = activeDays.has(key);
      const isToday = key === todayKey;
      const title = d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });
      cells.push(
        `<div class="dash-streak-day${active ? ' dash-streak-active' : ''}${isToday ? ' dash-streak-today' : ''}" title="${title}"></div>`
      );
    }
    return cells.join('');
  }

  function buildHeatmap(activeDays, stats) {
    const todayKey = new Date().toDateString();
    const days = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setHours(0, 0, 0, 0);
      d.setDate(d.getDate() - i);
      const key = d.toDateString();
      const dayName = d.toLocaleDateString('fr-FR', { weekday: 'short' });
      const dayNum = d.getDate();
      let level = 0;
      if (activeDays.has(key)) {
        level = key === todayKey && (stats.dailyDone || 0) >= DAILY_GOAL ? 3
          : key === todayKey ? 2
          : 1;
      }
      days.push(
        `<div class="dash-heat-cell dash-heat-l${level}${key === todayKey ? ' dash-heat-today' : ''}">
          <span class="dash-heat-day">${dayName}</span>
          <span class="dash-heat-num">${dayNum}</span>
        </div>`
      );
    }
    return `<div class="dash-heat-row">${days.join('')}</div>`;
  }

  function runDashboardAnimations(container) {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    container.querySelectorAll('.dash-counter[data-count]').forEach(el => {
      const target = parseFloat(el.dataset.count) || 0;
      if (reduced) {
        el.textContent = String(Math.round(target));
        return;
      }
      const duration = 900;
      const start = performance.now();
      const step = now => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = String(Math.round(target * eased));
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });

    const ring = container.querySelector('.dash-goal-ring-fill');
    if (ring && !reduced) {
      const targetOffset = parseFloat(ring.style.strokeDashoffset) || 0;
      ring.style.strokeDashoffset = '283';
      requestAnimationFrame(() => {
        ring.style.strokeDashoffset = String(targetOffset);
      });
    }

    container.querySelectorAll('.dash-ch-progress-fill').forEach((bar, i) => {
      if (reduced) return;
      const w = bar.style.width;
      bar.style.width = '0%';
      requestAnimationFrame(() => {
        setTimeout(() => { bar.style.width = w; }, 80 + i * 35);
      });
    });
  }

  function buildFavList(bm) {
    if (!bm.length) return '<div class="dash-empty"><span class="dash-empty-icon">⭐</span><span>Aucun favori pour l\'instant</span><span class="dash-empty-hint">Touchez l\'étoile sur un chapitre pour l\'ajouter ici</span></div>';
    if (typeof APP_DATA === 'undefined') return '';
    return bm.map(id => {
      const ch = APP_DATA.chapters.find(c => c.id === id);
      if (!ch) return '';
      const color = typeof CH_COLORS !== 'undefined' ? CH_COLORS[id] : 'var(--accent)';
      return `<div class="dash-fav-item" onclick="showCh('${id}')"><span class="dash-fav-dot" style="background:${color}"></span>${ch.t}</div>`;
    }).join('');
  }

  function safeParse(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key)) || fallback; } catch { return fallback; }
  }

  function destroy() {}

  return { render, destroy };
})();
