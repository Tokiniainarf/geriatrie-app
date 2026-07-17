/**
 * Présentations NotebookLM — diaporama plein écran des vrais slides PDF.
 * Les decks sont définis dans notebook-decks-data.js (généré) ou fallback ci-dessous.
 */
(function () {
  function escNb(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function nbPageUrl(dir, i1) {
    return dir + '/p' + String(i1).padStart(2, '0') + '.jpg';
  }

  function chapterLabel(ch) {
    if (!ch || ch === 'transversal') return 'Transversal';
    const n = String(ch).replace(/^ch/, '');
    let title = '';
    try {
      if (typeof APP_DATA !== 'undefined' && APP_DATA.chapters) {
        const hit = APP_DATA.chapters.find((c) => c.id === ch || c.id === 'ch' + n);
        if (hit) title = hit.t;
      }
    } catch (_) {}
    return title ? 'Ch. ' + n + ' — ' + title : 'Ch. ' + n;
  }

  const NotebookUI = {
    currentId: null,
    pageIdx: 0,
    _bound: false,
    _touchX: null,

    list() {
      const raw =
        typeof INTERACTIVE_NOTEBOOKS !== 'undefined' && Array.isArray(INTERACTIVE_NOTEBOOKS)
          ? INTERACTIVE_NOTEBOOKS
          : [];
      // ordre chronologique (chapitre puis titre)
      return raw.slice().sort((a, b) => {
        const oa = a.chapterOrder != null ? a.chapterOrder : 99;
        const ob = b.chapterOrder != null ? b.chapterOrder : 99;
        if (oa !== ob) return oa - ob;
        return String(a.title || '').localeCompare(String(b.title || ''), 'fr');
      });
    },

    nb() {
      return this.list().find((x) => x.id === this.currentId) || null;
    },

    renderHub() {
      const el = document.getElementById('notebookHub');
      if (!el) return;
      const list = this.list();
      if (!list.length) {
        el.innerHTML =
          '<div class="empty"><div class="empty-text">Présentations non chargées</div><div class="empty-hint">Ctrl+F5</div></div>';
        return;
      }

      // Group by chapter order
      const groups = new Map();
      list.forEach((nb) => {
        const key = nb.chapterOrder != null ? nb.chapterOrder : 99;
        if (!groups.has(key)) groups.set(key, []);
        groups.get(key).push(nb);
      });

      let html =
        '<div class="nb-hub-intro">' +
        '<div class="nb-hub-badge">Présentations NotebookLM</div>' +
        '<h2 class="nb-hub-title">Diaporamas originaux</h2>' +
        '<p class="nb-hub-sub">' +
        list.length +
        ' présentations · ordre des chapitres CNEG · plein écran, pages PDF exactes.</p></div>';

      [...groups.keys()]
        .sort((a, b) => a - b)
        .forEach((ord) => {
          const decks = groups.get(ord);
          const chId = decks[0].chapter;
          html +=
            '<div class="nb-hub-group">' +
            '<div class="nb-hub-group-hd">' +
            escNb(chapterLabel(chId)) +
            '</div>' +
            '<div class="nb-hub-grid">';
          decks.forEach((nb) => {
            const cover = nbPageUrl(nb.dir, 1);
            html +=
              '<button type="button" class="nb-hub-card nb-hub-card-visual" style="--nb-color:' +
              escNb(nb.color || 'var(--accent)') +
              '" onclick="NotebookUI.open(\'' +
              escNb(nb.id) +
              '\')">' +
              '<span class="nb-hub-thumb-wrap"><img class="nb-hub-thumb" src="' +
              escNb(cover) +
              '" alt="" loading="lazy" onerror="this.parentElement.classList.add(\'empty-thumb\')"></span>' +
              '<span class="nb-hub-ch">' +
              (nb.pageCount || '?') +
              ' slides</span>' +
              '<span class="nb-hub-card-title">' +
              escNb(nb.title) +
              '</span>' +
              '<span class="nb-hub-go">Plein écran →</span>' +
              '</button>';
          });
          html += '</div></div>';
        });

      el.innerHTML = html;
    },

    open(id) {
      const nb = this.list().find((x) => x.id === id);
      if (!nb) return;
      this.currentId = id;
      this.pageIdx = 0;

      // Build fullscreen portal on body if needed
      let fs = document.getElementById('nbFullscreen');
      if (!fs) {
        fs = document.createElement('div');
        fs.id = 'nbFullscreen';
        fs.className = 'nb-fullscreen';
        document.body.appendChild(fs);
      }
      fs.style.display = 'flex';
      document.body.classList.add('nb-presenting');
      // lock scroll
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';

      this.bindKeys(true);
      this.renderDeck();
      this.preloadAround();
    },

    close() {
      this.bindKeys(false);
      document.body.classList.remove('nb-presenting');
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      const fs = document.getElementById('nbFullscreen');
      if (fs) {
        fs.style.display = 'none';
        fs.innerHTML = '';
      }
      this.currentId = null;
      this.renderHub();
    },

    bindKeys(on) {
      if (on && !this._bound) {
        this._onKey = (e) => {
          if (!this.currentId) return;
          if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
            e.preventDefault();
            this.go(1);
          } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
            e.preventDefault();
            this.go(-1);
          } else if (e.key === 'Escape') {
            e.preventDefault();
            this.close();
          } else if (e.key === 'Home') {
            e.preventDefault();
            this.goTo(0);
          } else if (e.key === 'End') {
            const nb = this.nb();
            if (nb) this.goTo((nb.pageCount || 1) - 1);
          } else if (e.key === 'f' || e.key === 'F') {
            e.preventDefault();
            this.toggleBrowserFullscreen();
          }
        };
        window.addEventListener('keydown', this._onKey);
        this._bound = true;
      } else if (!on && this._bound) {
        window.removeEventListener('keydown', this._onKey);
        this._bound = false;
      }
    },

    toggleBrowserFullscreen() {
      const fs = document.getElementById('nbFullscreen');
      if (!fs) return;
      if (!document.fullscreenElement) {
        if (fs.requestFullscreen) fs.requestFullscreen().catch(() => {});
      } else if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
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
      for (let d = 1; d <= 3; d++) {
        [this.pageIdx + d, this.pageIdx - d].forEach((i) => {
          if (i >= 0 && i < nb.pageCount) {
            const img = new Image();
            img.src = nbPageUrl(nb.dir, i + 1);
          }
        });
      }
    },

    renderDeck() {
      const fs = document.getElementById('nbFullscreen');
      const nb = this.nb();
      if (!fs || !nb) return;
      const total = nb.pageCount || 1;
      const i = this.pageIdx;
      const src = nbPageUrl(nb.dir, i + 1);
      const pct = Math.round(((i + 1) / total) * 100);

      // filmstrip window
      const win = 9;
      let start = Math.max(0, i - Math.floor(win / 2));
      let end = Math.min(total, start + win);
      start = Math.max(0, end - win);
      let thumbs = '';
      for (let p = start; p < end; p++) {
        thumbs +=
          '<button type="button" class="nb-film-item' +
          (p === i ? ' on' : '') +
          '" onclick="NotebookUI.goTo(' +
          p +
          ')" title="Slide ' +
          (p + 1) +
          '">' +
          '<img src="' +
          escNb(nbPageUrl(nb.dir, p + 1)) +
          '" alt="" loading="lazy">' +
          '<span>' +
          (p + 1) +
          '</span></button>';
      }

      fs.innerHTML =
        '<div class="nb-fs-root" style="--nb-color:' +
        escNb(nb.color || '#7C3AED') +
        '">' +
        '<div class="nb-fs-bar">' +
        '<button type="button" class="nb-fs-btn" onclick="NotebookUI.close()" aria-label="Fermer">✕</button>' +
        '<div class="nb-fs-meta">' +
        '<div class="nb-fs-title">' +
        escNb(nb.title) +
        '</div>' +
        '<div class="nb-fs-sub">' +
        escNb(chapterLabel(nb.chapter)) +
        ' · ' +
        escNb(nb.source || '') +
        '</div></div>' +
        '<button type="button" class="nb-fs-btn" onclick="NotebookUI.toggleBrowserFullscreen()" title="Plein écran navigateur (F)">⛶</button>' +
        '<div class="nb-fs-counter">' +
        (i + 1) +
        ' / ' +
        total +
        '</div></div>' +
        '<div class="nb-fs-stage" id="nbStage" tabindex="0"' +
        ' ontouchstart="NotebookUI._touchStart(event)"' +
        ' ontouchend="NotebookUI._touchEnd(event)">' +
        '<button type="button" class="nb-hit nb-hit-prev" onclick="NotebookUI.go(-1)" aria-label="Précédent"' +
        (i === 0 ? ' disabled' : '') +
        '></button>' +
        '<img class="nb-fs-slide" id="nbSlideImg" src="' +
        escNb(src) +
        '" alt="Slide ' +
        (i + 1) +
        '" draggable="false">' +
        '<button type="button" class="nb-hit nb-hit-next" onclick="NotebookUI.go(1)" aria-label="Suivant"' +
        (i >= total - 1 ? ' disabled' : '') +
        '></button></div>' +
        '<div class="nb-fs-progress"><div class="nb-fs-progress-fill" style="width:' +
        pct +
        '%"></div></div>' +
        '<div class="nb-fs-film">' +
        thumbs +
        '</div>' +
        '<div class="nb-fs-nav">' +
        '<button type="button" class="nb-fs-nav-btn" onclick="NotebookUI.go(-1)"' +
        (i === 0 ? ' disabled' : '') +
        '>← Précédent</button>' +
        '<button type="button" class="nb-fs-nav-btn primary" onclick="NotebookUI.go(1)"' +
        (i >= total - 1 ? ' disabled' : '') +
        '>Suivant →</button></div>' +
        '<div class="nb-fs-hint">← → · glisser · F plein écran · Échap quitter</div></div>';
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
    },
  };

  window.NotebookUI = NotebookUI;
})();
