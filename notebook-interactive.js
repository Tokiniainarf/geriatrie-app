/**
 * Présentations NotebookLM — vrai diaporama des slides PDF (images page par page).
 * Affiche les pages comme dans le PDF, navigation type présentation.
 */
const INTERACTIVE_NOTEBOOKS = [
  {
    id: 'nb-ch3',
    chapter: 'ch3',
    title: 'Architecture de l\'Autonomie',
    source: 'NotebookLM · L_Architecture_de_l_Autonomie.pdf',
    color: '#0D9488',
    dir: 'images/notebooks/ch3',
    pageCount: 16
  },
  {
    id: 'nb-ch9',
    chapter: 'ch9',
    title: 'Neurocognitive Blueprint',
    source: 'NotebookLM · Geriatric_Neurocognitive_Blueprint.pdf',
    color: '#0E7490',
    dir: 'images/notebooks/ch9',
    pageCount: 19
  },
  {
    id: 'nb-ch11',
    chapter: 'ch11',
    title: 'Delirium Management',
    source: 'NotebookLM · Geriatric_Delirium_Management.pdf',
    color: '#0369A1',
    dir: 'images/notebooks/ch11',
    pageCount: 13
  },
  {
    id: 'nb-ch12',
    chapter: 'ch12',
    title: 'Blueprint des Chutes',
    source: 'NotebookLM · Blueprint_des_Chutes_Gériatriques.pdf',
    color: '#164E63',
    dir: 'images/notebooks/ch12',
    pageCount: 13
  },
  {
    id: 'nb-ch14',
    chapter: 'ch14',
    title: 'Nutrition Protocol',
    source: 'NotebookLM · Geriatric_Nutrition_Protocol.pdf',
    color: '#15803D',
    dir: 'images/notebooks/ch14',
    pageCount: 13
  },
  {
    id: 'nb-ch16',
    chapter: 'ch16',
    title: 'Safe Geriatric Prescribing',
    source: 'NotebookLM · Safe_Geriatric_Prescribing.pdf',
    color: '#B45309',
    dir: 'images/notebooks/ch16',
    pageCount: 13
  }
];

function nbPageUrl(dir, i1) {
  const n = String(i1).padStart(2, '0');
  return dir + '/p' + n + '.jpg';
}

function escNb(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const NotebookUI = {
  currentId: null,
  pageIdx: 0, // 0-based
  _bound: false,
  _touchX: null,

  list() {
    return Array.isArray(INTERACTIVE_NOTEBOOKS) ? INTERACTIVE_NOTEBOOKS : [];
  },

  nb() {
    return this.list().find(x => x.id === this.currentId) || null;
  },

  renderHub() {
    const el = document.getElementById('notebookHub');
    if (!el) return;
    const list = this.list();
    el.innerHTML = `
      <div class="nb-hub-intro">
        <div class="nb-hub-badge">Présentations NotebookLM</div>
        <h2 class="nb-hub-title">Diaporamas originaux</h2>
        <p class="nb-hub-sub">Slides exactes des PDF NotebookLM — mode présentation plein écran, navigation page par page (comme le PDF).</p>
      </div>
      <div class="nb-hub-grid">
        ${list.map(nb => {
          const ch = (nb.chapter || '').replace('ch', '');
          const cover = nbPageUrl(nb.dir, 1);
          return `<button type="button" class="nb-hub-card nb-hub-card-visual" style="--nb-color:${nb.color || 'var(--accent)'}" onclick="NotebookUI.open('${nb.id}')">
            <span class="nb-hub-thumb-wrap">
              <img class="nb-hub-thumb" src="${escNb(cover)}" alt="" loading="lazy" onerror="this.style.display='none'">
            </span>
            <span class="nb-hub-ch">Ch. ${ch} · ${nb.pageCount || '?'} slides</span>
            <span class="nb-hub-card-title">${escNb(nb.title)}</span>
            <span class="nb-hub-card-meta">${escNb(nb.source || '')}</span>
            <span class="nb-hub-go">Lancer la présentation →</span>
          </button>`;
        }).join('')}
      </div>`;
  },

  open(id) {
    const nb = this.list().find(x => x.id === id);
    if (!nb) return;
    this.currentId = id;
    this.pageIdx = 0;
    const hub = document.getElementById('notebookHub');
    const player = document.getElementById('notebookPlayer');
    if (hub) hub.style.display = 'none';
    if (player) {
      player.style.display = 'block';
      player.classList.add('nb-deck-mode');
      player.style.setProperty('--nb-color', nb.color || '#0891B2');
    }
    // hide chrome for immersion
    document.body.classList.add('nb-presenting');
    this.bindKeys(true);
    this.renderDeck();
    // preload next few
    this.preloadAround();
  },

  close() {
    this.bindKeys(false);
    document.body.classList.remove('nb-presenting');
    this.currentId = null;
    const hub = document.getElementById('notebookHub');
    const player = document.getElementById('notebookPlayer');
    if (hub) hub.style.display = 'block';
    if (player) {
      player.style.display = 'none';
      player.classList.remove('nb-deck-mode');
      player.innerHTML = '';
    }
    this.renderHub();
  },

  bindKeys(on) {
    if (on && !this._bound) {
      this._onKey = (e) => {
        if (!this.currentId) return;
        if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
          e.preventDefault(); this.go(1);
        } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
          e.preventDefault(); this.go(-1);
        } else if (e.key === 'Escape') {
          e.preventDefault(); this.close();
        } else if (e.key === 'Home') {
          e.preventDefault(); this.goTo(0);
        } else if (e.key === 'End') {
          const nb = this.nb();
          if (nb) this.goTo((nb.pageCount || 1) - 1);
        }
      };
      window.addEventListener('keydown', this._onKey);
      this._bound = true;
    } else if (!on && this._bound) {
      window.removeEventListener('keydown', this._onKey);
      this._bound = false;
    }
  },

  go(delta) {
    const nb = this.nb();
    if (!nb) return;
    const max = (nb.pageCount || 1) - 1;
    this.pageIdx = Math.max(0, Math.min(max, this.pageIdx + delta));
    this.renderDeck();
    this.preloadAround();
  },

  goTo(i) {
    const nb = this.nb();
    if (!nb) return;
    this.pageIdx = Math.max(0, Math.min((nb.pageCount || 1) - 1, i));
    this.renderDeck();
    this.preloadAround();
  },

  preloadAround() {
    const nb = this.nb();
    if (!nb) return;
    for (let d = 1; d <= 2; d++) {
      [this.pageIdx + d, this.pageIdx - d].forEach(i => {
        if (i >= 0 && i < nb.pageCount) {
          const img = new Image();
          img.src = nbPageUrl(nb.dir, i + 1);
        }
      });
    }
  },

  renderDeck() {
    const player = document.getElementById('notebookPlayer');
    const nb = this.nb();
    if (!player || !nb) return;
    const total = nb.pageCount || 1;
    const i = this.pageIdx;
    const src = nbPageUrl(nb.dir, i + 1);
    const pct = Math.round(((i + 1) / total) * 100);
    const thumbs = [];
    // filmstrip: show window of thumbs
    const win = 7;
    let start = Math.max(0, i - Math.floor(win / 2));
    let end = Math.min(total, start + win);
    start = Math.max(0, end - win);
    for (let p = start; p < end; p++) {
      thumbs.push(`<button type="button" class="nb-film-item${p === i ? ' on' : ''}" onclick="NotebookUI.goTo(${p})" title="Slide ${p + 1}">
        <img src="${escNb(nbPageUrl(nb.dir, p + 1))}" alt="p${p + 1}" loading="lazy">
        <span>${p + 1}</span>
      </button>`);
    }

    player.innerHTML = `
      <div class="nb-deck">
        <div class="nb-deck-bar">
          <button type="button" class="nb-deck-close" onclick="NotebookUI.close()" aria-label="Fermer">✕</button>
          <div class="nb-deck-meta">
            <div class="nb-deck-title">${escNb(nb.title)}</div>
            <div class="nb-deck-sub">Ch. ${(nb.chapter || '').replace('ch', '')} · ${escNb(nb.source || '')}</div>
          </div>
          <div class="nb-deck-counter">${i + 1} / ${total}</div>
        </div>
        <div class="nb-deck-stage" id="nbStage"
          tabindex="0"
          ontouchstart="NotebookUI._touchStart(event)"
          ontouchend="NotebookUI._touchEnd(event)">
          <button type="button" class="nb-hit nb-hit-prev" onclick="NotebookUI.go(-1)" aria-label="Précédent" ${i === 0 ? 'disabled' : ''}></button>
          <div class="nb-slide-frame">
            <img class="nb-slide-img" id="nbSlideImg" src="${escNb(src)}" alt="Slide ${i + 1}" draggable="false"
              onerror="this.alt='Slide manquante — relancez l\\'export images'; this.classList.add('nb-img-missing')">
            <div class="nb-slide-loading" id="nbLoading">Chargement…</div>
          </div>
          <button type="button" class="nb-hit nb-hit-next" onclick="NotebookUI.go(1)" aria-label="Suivant" ${i >= total - 1 ? 'disabled' : ''}></button>
        </div>
        <div class="nb-deck-progress"><div class="nb-deck-progress-fill" style="width:${pct}%"></div></div>
        <div class="nb-filmstrip">${thumbs.join('')}</div>
        <div class="nb-deck-nav">
          <button type="button" class="nb-nav-btn" onclick="NotebookUI.go(-1)" ${i === 0 ? 'disabled' : ''}>← Précédent</button>
          <button type="button" class="nb-nav-btn nb-nav-primary" onclick="NotebookUI.go(1)" ${i >= total - 1 ? 'disabled' : ''}>Suivant →</button>
        </div>
        <div class="nb-deck-hint">← → clavier · glisser · Échap pour quitter</div>
      </div>`;

    const img = document.getElementById('nbSlideImg');
    const loading = document.getElementById('nbLoading');
    if (img) {
      if (img.complete) {
        if (loading) loading.style.display = 'none';
      } else {
        img.onload = () => { if (loading) loading.style.display = 'none'; };
        img.onerror = () => { if (loading) loading.textContent = 'Image manquante'; };
      }
    }
  },

  _touchStart(e) {
    if (e.touches && e.touches[0]) this._touchX = e.touches[0].clientX;
  },
  _touchEnd(e) {
    if (this._touchX == null || !e.changedTouches || !e.changedTouches[0]) return;
    const dx = e.changedTouches[0].clientX - this._touchX;
    this._touchX = null;
    if (Math.abs(dx) < 40) return;
    if (dx < 0) this.go(1);
    else this.go(-1);
  }
};

if (typeof window !== 'undefined') {
  window.INTERACTIVE_NOTEBOOKS = INTERACTIVE_NOTEBOOKS;
  window.NotebookUI = NotebookUI;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { INTERACTIVE_NOTEBOOKS, NotebookUI };
}
