/* ═══════════════════════════════════════════════════════════════
   Dashboard — Progress tracking, heatmap, weak areas
   ═══════════════════════════════════════════════════════════════ */

const Dashboard = (() => {
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

    // Flashcard counts
    let totalFlash = 0;
    if (typeof FLASHCARDS !== 'undefined') totalFlash += FLASHCARDS.length;
    if (typeof FLASHCARDS_A !== 'undefined') totalFlash += FLASHCARDS_A.length;
    if (typeof FLASHCARDS_B !== 'undefined') totalFlash += FLASHCARDS_B.length;
    if (typeof FLASHCARDS_C !== 'undefined') totalFlash += FLASHCARDS_C.length;

    // Heatmap (last 7 days)
    const heatmap = buildHeatmap();

    container.innerHTML = `
      <div class="dash-grid">
        <!-- Streak -->
        <div class="dash-card dash-card-streak">
          <div class="dash-card-icon">🔥</div>
          <div class="dash-card-value">${bfStats.streak || 0}</div>
          <div class="dash-card-label">Jours consécutifs</div>
        </div>

        <!-- Points -->
        <div class="dash-card dash-card-points">
          <div class="dash-card-icon">⭐</div>
          <div class="dash-card-value">${bfStats.points || 0}</div>
          <div class="dash-card-label">Points accumulés</div>
        </div>

        <!-- Cards today -->
        <div class="dash-card dash-card-today">
          <div class="dash-card-icon">📊</div>
          <div class="dash-card-value">${bfStats.dailyDone || 0} / 50</div>
          <div class="dash-card-label">Cards aujourd'hui</div>
        </div>

        <!-- Total cards -->
        <div class="dash-card dash-card-total">
          <div class="dash-card-icon">🎴</div>
          <div class="dash-card-value">${totalFlash}</div>
          <div class="dash-card-label">Flashcards total</div>
        </div>
      </div>

      <!-- SRS breakdown -->
      <div class="dash-section">
        <h2>Répartition SRS</h2>
        <div class="dash-srs-bar">
          <div class="dash-srs-segment dash-srs-mastered" style="width:${totalFlash?Math.round(mastered/totalFlash*100):0}%" title="Maîtrisées: ${mastered}"></div>
          <div class="dash-srs-segment dash-srs-learning" style="width:${totalFlash?Math.round(learning/totalFlash*100):0}%" title="En cours: ${learning}"></div>
          <div class="dash-srs-segment dash-srs-new" style="width:${totalFlash?Math.round(newCards/totalFlash*100):0}%" title="Nouvelles: ${newCards}"></div>
        </div>
        <div class="dash-srs-legend">
          <span class="dash-srs-legend-item"><span class="dot dot-mastered"></span> Maîtrisées (${mastered})</span>
          <span class="dash-srs-legend-item"><span class="dot dot-learning"></span> En cours (${learning})</span>
          <span class="dash-srs-legend-item"><span class="dot dot-new"></span> Nouvelles (${newCards})</span>
          <span class="dash-srs-legend-item"><span class="dot dot-due"></span> À réviser (${dueNow})</span>
        </div>
      </div>

      <!-- Chapter progress -->
      <div class="dash-section">
        <h2>Progression par chapitre</h2>
        <div class="dash-chapters">${buildChapterBars(read)}</div>
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
  }

  function buildChapterBars(read) {
    if (typeof APP_DATA === 'undefined') return '<p class="dash-empty">Aucune donnée</p>';
    return APP_DATA.chapters.map(ch => {
      const done = read.includes(ch.id);
      const color = typeof CH_COLORS !== 'undefined' ? CH_COLORS[ch.id] : 'var(--accent)';
      return `
        <div class="dash-ch-bar" onclick="showCh('${ch.id}')">
          <div class="dash-ch-num" style="background:${color}20;color:${color}">${ch.id.replace('ch','')}</div>
          <div class="dash-ch-title">${ch.t}</div>
          <div class="dash-ch-status ${done?'dash-ch-done':''}">${done?'✓':'○'}</div>
        </div>
      `;
    }).join('');
  }

  function buildHeatmap() {
    const days = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date(Date.now() - i * 86400000);
      const dayName = d.toLocaleDateString('fr-FR', { weekday: 'short' });
      const dayNum = d.getDate();
      days.push(`<div class="dash-heat-cell"><span class="dash-heat-day">${dayName}</span><span class="dash-heat-num">${dayNum}</span></div>`);
    }
    return `<div class="dash-heat-row">${days.join('')}</div>`;
  }

  function buildFavList(bm) {
    if (!bm.length) return '<p class="dash-empty">Aucun favori</p>';
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
