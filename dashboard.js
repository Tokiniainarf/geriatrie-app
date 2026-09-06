/* ═══════════════════════════════════════════════════════════════
   Dashboard — Statistics, heatmap, weak areas, study insights
   ═══════════════════════════════════════════════════════════════ */

const Dashboard = (() => {
  const DAILY_GOAL = 20;
  const CARD_MINUTES = 0.75;
  const REVIEW_MINUTES = 0.45;

  function render() {
    const container = document.getElementById('dashContent');
    if (!container) return;

    const bfStats = safeParse('bf_stats', { streak: 0, points: 0, dailyDone: 0, totalCards: 0, lastDay: '' });
    const revStats = safeParse('revision_stats', { totalSeen: 0, sessions: 0, byChapter: {}, streak: 0 });
    const srs = safeParse('bf_srs', {});
    const read = safeParse('grd', []);
    const bm = safeParse('gbm', []);

    const srsEntries = Object.values(srs);
    const allFlash = getAllFlashcards();
    const totalFlash = allFlash.length;

    const mastered = srsEntries.filter(e => e.interval >= 7).length;
    const learning = srsEntries.filter(e => e.interval > 0 && e.interval < 7).length;
    const newCards = srsEntries.filter(e => !e.interval || e.interval === 0).length;
    const unseen = Math.max(0, totalFlash - srsEntries.length);
    const newTotal = newCards + unseen;
    const dueNow = srsEntries.filter(e => e.nextReview <= Date.now()).length;
    const errDue = typeof ErrorJournal !== 'undefined' ? ErrorJournal.countDue() : 0;

    const activityByDay = buildActivityByDay(bfStats, revStats);
    const activeDays = new Set(Object.keys(activityByDay).filter(k => activityByDay[k] > 0));
    const currentStreak = currentStreakFor(bfStats);
    const bestStreak = Math.max(
      bfStats.bestStreak || 0,
      currentStreak,
      revStats.streak || 0,
      computeBestStreak(activityByDay, 120)
    );
    persistBestStreak(bfStats, bestStreak);

    const avgQuizScore = getAverageQuizScore(bfStats, revStats, srs, allFlash);
    const studyMinutes = estimateStudyMinutes(bfStats, revStats, srsEntries);
    const studyLabel = formatStudyDuration(studyMinutes);

    const totalChapters = typeof APP_DATA !== 'undefined' ? APP_DATA.chapters.length : 20;
    const readPct = Math.round((read.length / totalChapters) * 100);

    const dailyDone = dailyCountFor(bfStats);
    const dailyPct = Math.min(100, Math.round((dailyDone / DAILY_GOAL) * 100));
    const ringOffset = Math.round(283 * (1 - dailyPct / 100));

    const srsDenom = totalFlash || srsEntries.length || 1;
    const pctMastered = Math.round((mastered / srsDenom) * 100);
    const pctLearning = Math.round((learning / srsDenom) * 100);
    const pctNew = Math.round((newTotal / srsDenom) * 100);
    const donutP1 = pctMastered;
    const donutP2 = Math.min(100, donutP1 + pctLearning);

    const heatmap = buildWeeklyHeatmap(activityByDay);
    const streakCal = buildStreakCalendar(activeDays);
    const weakAreas = buildWeakAreas(read, srs, allFlash, revStats);

    container.innerHTML = `
      <div class="dash-grid dash-grid-kpi">
        <div class="dash-card dash-card-streak">
          <div class="dash-card-icon">🔥</div>
          <div class="dash-card-value">
            <span class="dash-counter" data-count="${currentStreak}">0</span>
          </div>
          <div class="dash-card-label">Série actuelle</div>
          <div class="dash-streak-best">Record : <strong><span class="dash-counter" data-count="${bestStreak}">0</span> j</strong></div>
        </div>

        <div class="dash-card dash-card-quiz">
          <div class="dash-card-icon">🎯</div>
          <div class="dash-card-value">${avgQuizScore != null ? `<span class="dash-counter" data-count="${avgQuizScore}">0</span>%` : '—'}</div>
          <div class="dash-card-label">Indice de révision (estimé)</div>
        </div>

        <div class="dash-card dash-card-time">
          <div class="dash-card-icon">⏱️</div>
          <div class="dash-card-value dash-study-time">${studyLabel}</div>
          <div class="dash-card-label">Temps d'étude estimé</div>
        </div>

        <div class="dash-card dash-card-points">
          <div class="dash-card-icon">⭐</div>
          <div class="dash-card-value"><span class="dash-counter" data-count="${bfStats.points || 0}">0</span></div>
          <div class="dash-card-label">Points BrainFeed</div>
        </div>
      </div>

      <div class="dash-card dash-card-prep dash-card-wide" onclick="sw('erreurs')" role="button" tabindex="0">
        <div class="dash-prep-hdr">
          <span class="dash-card-icon">📓</span>
          <div>
            <div class="dash-prep-title">Méthode PrEP EVC</div>
            <div class="dash-prep-sub">Fichier erreurs · relecture hebdo · révision J+7</div>
          </div>
          <span class="dash-prep-badge" id="dashErrDue">${errDue} à refaire J+7</span>
        </div>
      </div>

      <div class="dash-grid">
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

        <div class="dash-card dash-card-total">
          <div class="dash-card-icon">🎴</div>
          <div class="dash-card-value"><span class="dash-counter" data-count="${totalFlash}">0</span></div>
          <div class="dash-card-label">Flashcards · <span class="dash-due-inline">${dueNow} à réviser</span></div>
        </div>
      </div>

      <div class="dash-section">
        <h2>Activité — 7 derniers jours</h2>
        <p class="dash-section-sub">Intensité selon le nombre de cartes / activités enregistrées</p>
        ${heatmap}
        <div class="dash-heat-legend">
          <span>Moins</span>
          <span class="dash-heat-swatch dash-heat-l0"></span>
          <span class="dash-heat-swatch dash-heat-l1"></span>
          <span class="dash-heat-swatch dash-heat-l2"></span>
          <span class="dash-heat-swatch dash-heat-l3"></span>
          <span class="dash-heat-swatch dash-heat-l4"></span>
          <span>Plus</span>
        </div>
      </div>

      <div class="dash-section">
        <h2>Cartes SRS — maîtrisées / en cours / nouvelles</h2>
        <div class="dash-srs-donut-row">
          <div class="dash-donut" style="--donut-p1:${donutP1};--donut-p2:${donutP2}" title="Répartition SRS">
            <div class="dash-donut-hole">
              <span class="dash-donut-total"><span class="dash-counter" data-count="${srsEntries.length}">0</span></span>
              <span class="dash-donut-sub">vues</span>
            </div>
          </div>
          <div class="dash-srs-legend dash-srs-legend-col">
            <span class="dash-srs-legend-item"><span class="dot dot-mastered"></span> Maîtrisées (${mastered}) — ${pctMastered}%</span>
            <span class="dash-srs-legend-item"><span class="dot dot-learning"></span> En cours (${learning}) — ${pctLearning}%</span>
            <span class="dash-srs-legend-item"><span class="dot dot-new"></span> Nouvelles (${newTotal}) — ${pctNew}%</span>
            <span class="dash-srs-legend-item"><span class="dot dot-due"></span> À réviser maintenant (${dueNow})</span>
          </div>
        </div>
      </div>

      <div class="dash-section">
        <h2>Progression par chapitre</h2>
        <div class="dash-chapters">${buildChapterBars(read, srs, allFlash)}</div>
        <p class="dash-ch-summary">Chapitres consultés : <strong>${readPct}%</strong> (${read.length}/${totalChapters}). Les barres reflètent les cartes révisées, pas la simple ouverture du chapitre.</p>
      </div>

      <div class="dash-section dash-section-weak">
        <h2>Points faibles à renforcer</h2>
        <p class="dash-section-sub">Chapitres avec les scores les plus bas (SRS + sessions de révision)</p>
        ${weakAreas}
      </div>

      <div class="dash-section">
        <h2>Calendrier série (30 jours)</h2>
        <div class="dash-streak-cal">${streakCal}</div>
      </div>

      <div class="dash-section">
        <h2>Favoris (${bm.length})</h2>
        <div class="dash-favs">${buildFavList(bm)}</div>
      </div>
    `;

    runDashboardAnimations(container);
  }

  function dailyCountFor(stats) {
    return (stats.dailyDate || stats.lastDay) === new Date().toDateString()
      ? Math.max(0, Number(stats.dailyDone) || 0) : 0;
  }

  function currentStreakFor(stats) {
    const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
    return [new Date().toDateString(), yesterday.toDateString()].includes(stats.lastDay)
      ? Math.max(0, Number(stats.streak) || 0) : 0;
  }

  function buildActivityByDay(bfStats, revStats) {
    const map = { ...(bfStats.activityByDay || {}) };
    const today = new Date().toDateString();
    const dailyDone = dailyCountFor(bfStats);
    if (dailyDone) {
      map[today] = Math.max(map[today] || 0, dailyDone);
    }
    return map;
  }

  function computeBestStreak(activityByDay, lookbackDays) {
    let best = 0;
    let current = 0;
    for (let i = lookbackDays; i >= 0; i--) {
      const d = new Date();
      d.setHours(0, 0, 0, 0);
      d.setDate(d.getDate() - i);
      const key = d.toDateString();
      if ((activityByDay[key] || 0) > 0) {
        current++;
        if (current > best) best = current;
      } else {
        current = 0;
      }
    }
    return best;
  }

  function persistBestStreak(bfStats, bestStreak) {
    if (!bestStreak || bestStreak <= (bfStats.bestStreak || 0)) return;
    try {
      const next = { ...bfStats, bestStreak };
      localStorage.setItem('bf_stats', JSON.stringify(next));
    } catch (_) { /* ignore */ }
  }

  function getAverageQuizScore(bfStats, revStats, srs, allFlash) {
    const history = bfStats.quizHistory || [];
    if (history.length) {
      const sum = history.reduce((s, h) => s + (h.pct ?? h.score ?? 0), 0);
      return Math.round(sum / history.length);
    }
    const byCh = revStats.byChapter || {};
    let seen = 0;
    let know = 0;
    Object.values(byCh).forEach(c => {
      seen += c.seen || 0;
      know += c.know || 0;
    });
    if (seen >= 5) return Math.round((know / seen) * 100);

    const srsKeys = Object.keys(srs || {});
    if (allFlash.length && srsKeys.length) {
      let score = 0;
      let n = 0;
      allFlash.forEach(fc => {
        const e = srs[fc.id];
        if (!e) return;
        n++;
        if (e.interval >= 7) score += 100;
        else if (e.interval > 0) score += 55;
        else score += 15;
      });
      if (n >= 5) return Math.round(score / n);
    }
    return null;
  }

  function estimateStudyMinutes(bfStats, revStats, srsEntries) {
    const bfCards = bfStats.totalCards || 0;
    const revSeen = revStats.totalSeen || 0;
    const sessions = revStats.sessions || 0;
    const reps = srsEntries.reduce((s, e) => s + (e.reps || 0), 0);
    const minutes = Math.round(
      bfCards * CARD_MINUTES +
      revSeen * REVIEW_MINUTES +
      reps * 0.35 +
      sessions * 4
    );
    return Math.max(minutes, bfCards || revSeen ? 1 : 0);
  }

  function formatStudyDuration(totalMinutes) {
    if (!totalMinutes) return '—';
    if (totalMinutes < 60) return `~${totalMinutes} min`;
    const h = Math.floor(totalMinutes / 60);
    const m = totalMinutes % 60;
    return m ? `~${h} h ${m} min` : `~${h} h`;
  }

  function heatIntensityLevel(count) {
    if (!count) return 0;
    if (count >= DAILY_GOAL) return 4;
    if (count >= DAILY_GOAL * 0.6) return 3;
    if (count >= DAILY_GOAL * 0.3) return 2;
    return 1;
  }

  function buildWeeklyHeatmap(activityByDay) {
    const todayKey = new Date().toDateString();
    const days = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setHours(0, 0, 0, 0);
      d.setDate(d.getDate() - i);
      const key = d.toDateString();
      const count = activityByDay[key] || 0;
      const level = heatIntensityLevel(count);
      const dayName = d.toLocaleDateString('fr-FR', { weekday: 'short' });
      const dayNum = d.getDate();
      const title = `${d.toLocaleDateString('fr-FR')} — ${count} activité${count > 1 ? 's' : ''}`;
      days.push(
        `<div class="dash-heat-cell dash-heat-l${level}${key === todayKey ? ' dash-heat-today' : ''}" title="${title}">
          <span class="dash-heat-day">${dayName}</span>
          <span class="dash-heat-num">${dayNum}</span>
          <span class="dash-heat-count">${count > 0 ? count : '·'}</span>
        </div>`
      );
    }
    return `<div class="dash-heat-row dash-heat-row-week">${days.join('')}</div>`;
  }

  function chapterScoreComposite(chId, read, srs, allFlash, revStats) {
    const srsPct = chapterCompletionPct(chId, read, srs, allFlash);
    const rev = revStats.byChapter?.[chId];
    if (rev && rev.seen >= 2) {
      const revPct = Math.round(((rev.know || 0) / rev.seen) * 100);
      return Math.round(srsPct * 0.55 + revPct * 0.45);
    }
    return srsPct;
  }

  function buildWeakAreas(read, srs, allFlash, revStats) {
    if (typeof APP_DATA === 'undefined') {
      return '<div class="dash-empty"><span class="dash-empty-icon">📉</span><span>Pas encore de données</span></div>';
    }
    const rows = APP_DATA.chapters.map(ch => ({
      id: ch.id,
      title: ch.t,
      score: chapterScoreComposite(ch.id, read, srs, allFlash, revStats),
      color: typeof CH_COLORS !== 'undefined' ? CH_COLORS[ch.id] : 'var(--accent)'
    }))
      .filter(r => r.score < 85)
      .sort((a, b) => a.score - b.score)
      .slice(0, 6);

    if (!rows.length) {
      return '<div class="dash-empty dash-empty-good"><span class="dash-empty-icon">✅</span><span>Aucun chapitre critique — continuez ainsi !</span></div>';
    }

    return `<div class="dash-weak-list">${rows.map(r => `
      <div class="dash-weak-item" onclick="showCh('${r.id}')">
        <div class="dash-weak-head">
          <span class="dash-weak-dot" style="background:${r.color}"></span>
          <span class="dash-weak-title">${esc(r.title)}</span>
          <span class="dash-weak-pct">${r.score}%</span>
        </div>
        <div class="dash-weak-bar" role="progressbar" aria-valuenow="${r.score}" aria-valuemin="0" aria-valuemax="100">
          <div class="dash-weak-fill" style="width:${r.score}%"></div>
        </div>
      </div>
    `).join('')}</div>`;
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
    if (typeof MEGA_FLASHCARDS_2 !== 'undefined') all.push(...MEGA_FLASHCARDS_2);
    if (typeof MEGA_FLASHCARDS_3 !== 'undefined') all.push(...MEGA_FLASHCARDS_3);
    if (typeof MEGA_FLASHCARDS_4 !== 'undefined') all.push(...MEGA_FLASHCARDS_4);
    if (typeof MEGA_FLASHCARDS_5 !== 'undefined') all.push(...MEGA_FLASHCARDS_5);
    if (typeof MEGA_FLASHCARDS_6 !== 'undefined') all.push(...MEGA_FLASHCARDS_6);
    if (typeof MEGA_FLASHCARDS_7 !== 'undefined') all.push(...MEGA_FLASHCARDS_7);
    if (typeof MEGA_FLASHCARDS_8 !== 'undefined') all.push(...MEGA_FLASHCARDS_8);
    if (typeof MEGA_FLASHCARDS_9 !== 'undefined') all.push(...MEGA_FLASHCARDS_9);
    if (typeof MEGA_FLASHCARDS_10 !== 'undefined') all.push(...MEGA_FLASHCARDS_10);
    if (typeof EVC_FLASHCARDS !== 'undefined') all.push(...EVC_FLASHCARDS);
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
    if (!cards.length) return 0;
    let score = 0;
    cards.forEach(fc => {
      const e = srs[fc.id];
      if (!e || e.interval === 0) score += 0;
      else if (e.interval >= 7) score += 100;
      else score += 45;
    });
    const srsPct = Math.round(score / cards.length);
    return srsPct;
  }

  function chapterBarTone(pct) {
    if (pct >= 80) return 'high';
    if (pct >= 40) return 'mid';
    if (pct > 0) return 'low';
    return 'none';
  }

  function buildChapterBars(read, srs, allFlash) {
    if (typeof APP_DATA === 'undefined') {
      return '<div class="dash-empty"><span class="dash-empty-icon">📚</span><span>Aucune donnée de chapitre</span></div>';
    }
    return APP_DATA.chapters.map(ch => {
      const pct = chapterCompletionPct(ch.id, read, srs, allFlash);
      const tone = chapterBarTone(pct);
      const color = typeof CH_COLORS !== 'undefined' ? CH_COLORS[ch.id] : 'var(--accent)';
      return `
        <div class="dash-ch-bar" onclick="showCh('${ch.id}')">
          <div class="dash-ch-num" style="background:${color}20;color:${color}">${ch.id.replace('ch', '')}</div>
          <div class="dash-ch-body">
            <div class="dash-ch-title-row">
              <span class="dash-ch-title">${esc(ch.t)}</span>
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

    container.querySelectorAll('.dash-ch-progress-fill, .dash-weak-fill').forEach((bar, i) => {
      if (reduced) return;
      const w = bar.style.width;
      bar.style.width = '0%';
      requestAnimationFrame(() => {
        setTimeout(() => { bar.style.width = w; }, 80 + i * 35);
      });
    });
  }

  function buildFavList(bm) {
    if (!bm.length) {
      return '<div class="dash-empty"><span class="dash-empty-icon">⭐</span><span>Aucun favori pour l\'instant</span><span class="dash-empty-hint">Touchez l\'étoile sur un chapitre pour l\'ajouter ici</span></div>';
    }
    if (typeof APP_DATA === 'undefined') return '';
    return bm.map(id => {
      const ch = APP_DATA.chapters.find(c => c.id === id);
      if (!ch) return '';
      const color = typeof CH_COLORS !== 'undefined' ? CH_COLORS[id] : 'var(--accent)';
      return `<div class="dash-fav-item" onclick="showCh('${id}')"><span class="dash-fav-dot" style="background:${color}"></span>${esc(ch.t)}</div>`;
    }).join('');
  }

  function esc(s) {
    const d = document.createElement('div');
    d.textContent = s || '';
    return d.innerHTML;
  }

  function safeParse(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key)) || fallback; } catch { return fallback; }
  }

  function destroy() {}

  return { render, destroy };
})();
