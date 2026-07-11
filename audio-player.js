/**
 * Gériatrie Listen — lecteur immersif type Spotify
 * Bibliothèque par chapitre · pochettes · mini-player · full player · slides Notebook liées
 */
(function () {
  'use strict';

  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function fmtTime(sec) {
    if (!Number.isFinite(sec) || sec < 0) return '0:00';
    const s = Math.floor(sec);
    const m = Math.floor(s / 60);
    const r = s % 60;
    return m + ':' + String(r).padStart(2, '0');
  }

  function mediaUrl(file) {
    const base = (window.AUDIO_LIBRARY && AUDIO_LIBRARY.basePath) || 'media/notebook-lm/';
    // Encode each path segment (accents, spaces) without breaking the folder structure
    return base + String(file || '').split('/').map(encodeURIComponent).join('/');
  }

  const AudioPlayer = {
    queue: [],
    index: -1,
    albumId: null,
    audio: null,
    video: null,
    playing: false,
    shuffle: false,
    repeat: 'off', // off | one | all
    showSlides: true,
    slideIdx: 0,
    slideTimer: null,
    reducedMotion: false,
    _raf: null,
    _seekDragging: false,

    init() {
      if (this._inited) return;
      this._inited = true;
      try {
        this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      } catch (_) {}

      this.audio = new Audio();
      this.audio.preload = 'metadata';
      this.audio.addEventListener('timeupdate', () => this._onTime());
      this.audio.addEventListener('loadedmetadata', () => this._onMeta());
      this.audio.addEventListener('ended', () => this._onEnded());
      this.audio.addEventListener('play', () => { this.playing = true; this._paintPlaying(); });
      this.audio.addEventListener('pause', () => { this.playing = false; this._paintPlaying(); });
      this.audio.addEventListener('error', () => this._onError());

      this._ensureShell();
      this._bindGlobal();
      this.renderLibrary();
    },

    lib() {
      return (typeof AUDIO_LIBRARY !== 'undefined' && AUDIO_LIBRARY) || window.AUDIO_LIBRARY || { albums: [] };
    },

    albums() {
      return this.lib().albums || [];
    },

    albumById(id) {
      return this.albums().find((a) => a.id === id) || null;
    },

    trackMeta(album, track) {
      return {
        ...track,
        albumId: album.id,
        chapter: album.chapter,
        albumTitle: album.title,
        color: album.color,
        cover: album.cover,
        coverFallback: album.coverFallback,
        notebookId: album.notebookId,
        artist: this.lib().artist || 'Gériatrie'
      };
    },

    flatTracks(album) {
      if (!album) return [];
      return (album.tracks || []).map((t) => this.trackMeta(album, t));
    },

    current() {
      if (this.index < 0 || this.index >= this.queue.length) return null;
      return this.queue[this.index];
    },

    /* ───────── Library UI ───────── */
    renderLibrary() {
      const root = $('#audioLibraryRoot');
      if (!root) return;
      const albums = this.albums();
      if (!albums.length) {
        root.innerHTML = '<div class="empty"><div class="empty-text">Bibliothèque audio indisponible</div></div>';
        return;
      }

      const cur = this.current();
      let html = `
        <header class="al-hero">
          <div class="al-hero-glow" aria-hidden="true"></div>
          <div class="al-hero-copy">
            <span class="al-kicker">Révision immersive</span>
            <h1 class="al-hero-title">Listen</h1>
            <p class="al-hero-sub">Leçons NotebookLM par chapitre — pochettes, file d’attente, présentation liée pendant l’écoute.</p>
          </div>
          <div class="al-hero-stats">
            <div><strong>${albums.length}</strong><span>albums</span></div>
            <div><strong>${albums.reduce((n, a) => n + (a.tracks || []).length, 0)}</strong><span>pistes</span></div>
          </div>
        </header>
        <section class="al-section">
          <div class="al-section-hd">
            <h2>Albums · chapitres</h2>
            <p>Une collection soignée par domaine du manuel</p>
          </div>
          <div class="al-album-grid">`;

      albums.forEach((alb) => {
        const cover = alb.cover || alb.coverFallback || '';
        const n = (alb.tracks || []).length;
        const active = cur && cur.albumId === alb.id ? ' is-active' : '';
        html += `
          <button type="button" class="al-album-card${active}" data-album="${esc(alb.id)}" style="--alb:${esc(alb.color || '#22d3ee')}">
            <span class="al-album-art-wrap">
              <img class="al-album-art" src="${esc(cover)}" alt="" loading="lazy"
                onerror="this.onerror=null;this.src='${esc(alb.coverFallback || cover)}'">
              <span class="al-album-play" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              </span>
            </span>
            <span class="al-album-meta">
              <span class="al-album-ch">${esc((alb.chapter || '').replace('ch', 'Ch. '))}</span>
              <span class="al-album-title">${esc(alb.title)}</span>
              <span class="al-album-sub">${esc(alb.subtitle || '')}</span>
              <span class="al-album-count">${n} piste${n > 1 ? 's' : ''}</span>
            </span>
          </button>`;
      });

      html += `</div></section>
        <section class="al-section" id="alAlbumDetail" hidden></section>`;

      root.innerHTML = html;
      $$('.al-album-card', root).forEach((btn) => {
        btn.addEventListener('click', () => this.openAlbum(btn.getAttribute('data-album')));
      });
    },

    openAlbum(albumId) {
      const alb = this.albumById(albumId);
      const panel = $('#alAlbumDetail');
      if (!alb || !panel) return;
      panel.hidden = false;
      const tracks = this.flatTracks(alb);
      const cover = alb.cover || alb.coverFallback || '';
      let html = `
        <div class="al-detail" style="--alb:${esc(alb.color || '#22d3ee')}">
          <div class="al-detail-banner">
            <img class="al-detail-art" src="${esc(cover)}" alt=""
              onerror="this.onerror=null;this.src='${esc(alb.coverFallback || cover)}'">
            <div class="al-detail-info">
              <span class="al-kicker">Album</span>
              <h2>${esc(alb.title)}</h2>
              <p>${esc(alb.subtitle || '')}</p>
              <div class="al-detail-actions">
                <button type="button" class="al-btn-primary" id="alPlayAlbum">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                  Écouter l’album
                </button>
                <button type="button" class="al-btn-ghost" id="alOpenNb" ${alb.notebookId ? '' : 'disabled'}>
                  Voir la présentation
                </button>
              </div>
            </div>
          </div>
          <ol class="al-tracklist">`;

      tracks.forEach((t, i) => {
        const badge = t.role === 'main' ? 'Principale' : t.role === 'video' ? 'Vidéo' : 'Bonus';
        const cur = this.current();
        const on = cur && cur.id === t.id ? ' is-current' : '';
        html += `
          <li class="al-track${on}" data-track-idx="${i}">
            <button type="button" class="al-track-btn" data-play-idx="${i}">
              <span class="al-track-num">${i + 1}</span>
              <span class="al-track-body">
                <span class="al-track-title">${esc(t.title)}</span>
                <span class="al-track-meta"><span class="al-badge al-badge-${esc(t.role || 'bonus')}">${badge}</span> · ${esc(t.kind === 'video' ? 'Vidéo' : 'Audio')}</span>
              </span>
              <span class="al-track-dur">${t.durationHint ? fmtTime(t.durationHint) : '—'}</span>
            </button>
          </li>`;
      });
      html += '</ol></div>';
      panel.innerHTML = html;
      panel.scrollIntoView({ behavior: this.reducedMotion ? 'auto' : 'smooth', block: 'start' });

      const playAlbum = $('#alPlayAlbum', panel);
      if (playAlbum) playAlbum.addEventListener('click', () => this.playAlbum(albumId, 0));
      const openNb = $('#alOpenNb', panel);
      if (openNb && alb.notebookId) openNb.addEventListener('click', () => this.openNotebook(alb.notebookId));
      $$('[data-play-idx]', panel).forEach((btn) => {
        btn.addEventListener('click', () => this.playAlbum(albumId, +btn.getAttribute('data-play-idx')));
      });
    },

    playAlbum(albumId, startIdx) {
      const alb = this.albumById(albumId);
      if (!alb) return;
      this.albumId = albumId;
      this.queue = this.flatTracks(alb);
      this.playIndex(startIdx || 0);
      this.openFullPlayer();
    },

    playIndex(i) {
      if (i < 0 || i >= this.queue.length) return;
      this.index = i;
      const t = this.current();
      if (!t) return;

      // Vidéos : lecture dans le full player via <video>, pas dans Audio
      if (t.kind === 'video') {
        this.audio.pause();
        this._loadVideo(t);
      } else {
        this._unloadVideo();
        this.audio.src = mediaUrl(t.file);
        this.audio.play().catch(() => {});
      }

      this._syncSlidesForTrack(t);
      this._paintAll();
      this._showMini(true);
    },

    _loadVideo(t) {
      const vid = $('#apFullVideo');
      if (!vid) return;
      vid.hidden = false;
      vid.src = mediaUrl(t.file);
      vid.play().catch(() => {});
      this.video = vid;
      this.playing = true;
      this._paintPlaying();
      vid.ontimeupdate = () => this._onTimeFromVideo();
      vid.onended = () => this._onEnded();
      vid.onplay = () => { this.playing = true; this._paintPlaying(); };
      vid.onpause = () => { this.playing = false; this._paintPlaying(); };
    },

    _unloadVideo() {
      const vid = $('#apFullVideo');
      if (vid) {
        try { vid.pause(); } catch (_) {}
        vid.removeAttribute('src');
        vid.load();
        vid.hidden = true;
      }
      this.video = null;
    },

    toggle() {
      const t = this.current();
      if (!t) return;
      if (t.kind === 'video' && this.video) {
        if (this.video.paused) this.video.play().catch(() => {});
        else this.video.pause();
        return;
      }
      if (this.audio.paused) this.audio.play().catch(() => {});
      else this.audio.pause();
    },

    next() {
      if (!this.queue.length) return;
      if (this.repeat === 'one') {
        this.seek(0);
        this._resume();
        return;
      }
      let n = this.index + 1;
      if (n >= this.queue.length) {
        if (this.repeat === 'all') n = 0;
        else { this.pauseAll(); return; }
      }
      this.playIndex(n);
    },

    prev() {
      const media = this._activeMedia();
      if (media && media.currentTime > 3) {
        this.seek(0);
        return;
      }
      let n = this.index - 1;
      if (n < 0) n = this.repeat === 'all' ? this.queue.length - 1 : 0;
      this.playIndex(n);
    },

    pauseAll() {
      try { this.audio.pause(); } catch (_) {}
      if (this.video) try { this.video.pause(); } catch (_) {}
      this.playing = false;
      this._paintPlaying();
    },

    _resume() {
      const t = this.current();
      if (!t) return;
      if (t.kind === 'video' && this.video) this.video.play().catch(() => {});
      else this.audio.play().catch(() => {});
    },

    seek(t) {
      const media = this._activeMedia();
      if (!media || !Number.isFinite(media.duration)) return;
      media.currentTime = Math.max(0, Math.min(media.duration, t));
      this._onTime();
    },

    seekRatio(r) {
      const media = this._activeMedia();
      if (!media || !Number.isFinite(media.duration)) return;
      this.seek(r * media.duration);
    },

    _activeMedia() {
      const t = this.current();
      if (t && t.kind === 'video' && this.video) return this.video;
      return this.audio;
    },

    /* ───────── Slides ───────── */
    _syncSlidesForTrack(t) {
      this.slideIdx = 0;
      clearInterval(this.slideTimer);
      this.slideTimer = null;
      const nb = this._notebook(t && t.notebookId);
      this._renderSlide(nb, 0);
      if (!nb || !this.showSlides) return;
      const pages = nb.pageCount || 1;
      const dur = (t.durationHint || 600);
      const every = Math.max(8, Math.floor(dur / pages));
      if (this.reducedMotion) return;
      this.slideTimer = setInterval(() => {
        if (!this.playing) return;
        this.slideIdx = (this.slideIdx + 1) % pages;
        this._renderSlide(nb, this.slideIdx);
      }, every * 1000);
    },

    _notebook(id) {
      if (!id) return null;
      const list =
        (typeof INTERACTIVE_NOTEBOOKS !== 'undefined' && INTERACTIVE_NOTEBOOKS) ||
        window.INTERACTIVE_NOTEBOOKS ||
        [];
      return list.find((n) => n.id === id) || null;
    },

    _slideUrl(nb, idx0) {
      if (!nb || !nb.dir) return '';
      const n = idx0 + 1;
      return nb.dir + '/p' + String(n).padStart(2, '0') + '.jpg';
    },

    _renderSlide(nb, idx0) {
      const img = $('#apSlideImg');
      const meta = $('#apSlideMeta');
      const empty = $('#apSlideEmpty');
      if (!img) return;
      if (!nb) {
        img.hidden = true;
        if (empty) empty.hidden = false;
        if (meta) meta.textContent = 'Aucune présentation liée';
        return;
      }
      if (empty) empty.hidden = true;
      img.hidden = false;
      img.src = this._slideUrl(nb, idx0);
      img.alt = nb.title || 'Slide';
      if (meta) meta.textContent = `${nb.title} · ${idx0 + 1}/${nb.pageCount || '?'}`;
    },

    openNotebook(id) {
      if (typeof NotebookUI !== 'undefined' && NotebookUI.open) {
        if (typeof sw === 'function') sw('synth');
        setTimeout(() => {
          try {
            if (typeof switchStudyMode === 'function') switchStudyMode('notebook');
            NotebookUI.open(id);
          } catch (e) {
            console.warn(e);
          }
        }, 80);
      }
    },

    toggleSlidesPanel(force) {
      this.showSlides = force != null ? !!force : !this.showSlides;
      const panel = $('#apSlidesPanel');
      const shell = $('#apFullShell');
      if (panel) panel.classList.toggle('is-hidden', !this.showSlides);
      if (shell) shell.classList.toggle('ap-no-slides', !this.showSlides);
      const btn = $('#apBtnSlides');
      if (btn) btn.setAttribute('aria-pressed', this.showSlides ? 'true' : 'false');
      if (this.showSlides) this._syncSlidesForTrack(this.current());
    },

    /* ───────── Shell DOM ───────── */
    _ensureShell() {
      if ($('#apMiniBar')) return;
      const mini = document.createElement('div');
      mini.id = 'apMiniBar';
      mini.className = 'ap-mini';
      mini.hidden = true;
      mini.innerHTML = `
        <button type="button" class="ap-mini-main" id="apMiniOpen" aria-label="Ouvrir le lecteur">
          <img class="ap-mini-art" id="apMiniArt" alt="">
          <span class="ap-mini-txt">
            <span class="ap-mini-title" id="apMiniTitle">—</span>
            <span class="ap-mini-sub" id="apMiniSub">—</span>
          </span>
        </button>
        <div class="ap-mini-controls">
          <button type="button" class="ap-icon-btn" id="apMiniPrev" aria-label="Précédent">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M6 6h2v12H6zm3.5 6 8.5 6V6z"/></svg>
          </button>
          <button type="button" class="ap-icon-btn ap-icon-play" id="apMiniPlay" aria-label="Lecture">
            <svg class="ap-ic-play" viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            <svg class="ap-ic-pause" viewBox="0 0 24 24" width="22" height="22" fill="currentColor" hidden><path d="M6 5h4v14H6zm8 0h4v14h-4z"/></svg>
          </button>
          <button type="button" class="ap-icon-btn" id="apMiniNext" aria-label="Suivant">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6v12z"/></svg>
          </button>
        </div>
        <div class="ap-mini-progress" id="apMiniProgress"><i id="apMiniProgressFill"></i></div>
      `;
      document.body.appendChild(mini);

      const full = document.createElement('div');
      full.id = 'apFullPlayer';
      full.className = 'ap-full';
      full.hidden = true;
      full.innerHTML = `
        <div class="ap-full-backdrop" id="apFullBackdrop" aria-hidden="true"></div>
        <div class="ap-full-shell" id="apFullShell">
          <header class="ap-full-top">
            <button type="button" class="ap-icon-btn" id="apFullClose" aria-label="Fermer">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
            </button>
            <div class="ap-full-top-mid">
              <span class="al-kicker" id="apFullPlayingFrom">Lecture en cours</span>
              <strong id="apFullAlbumTitle">—</strong>
            </div>
            <button type="button" class="ap-icon-btn" id="apBtnSlides" aria-label="Présentation" aria-pressed="true" title="Afficher la présentation">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 18v3"/></svg>
            </button>
          </header>

          <div class="ap-full-body">
            <div class="ap-stage">
              <div class="ap-cover-block">
                <div class="ap-cover-glow" id="apCoverGlow" aria-hidden="true"></div>
                <img class="ap-cover" id="apFullCover" alt="">
                <video class="ap-full-video" id="apFullVideo" playsinline controls hidden></video>
              </div>
              <div class="ap-now">
                <h2 class="ap-now-title" id="apFullTitle">—</h2>
                <p class="ap-now-artist" id="apFullArtist">—</p>
              </div>
              <div class="ap-seek">
                <input type="range" id="apSeek" min="0" max="1000" value="0" aria-label="Position">
                <div class="ap-seek-times"><span id="apTimeCur">0:00</span><span id="apTimeDur">0:00</span></div>
              </div>
              <div class="ap-transport">
                <button type="button" class="ap-icon-btn" id="apShuffle" aria-label="Aléatoire" aria-pressed="false">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M16 3h5v5"/><path d="M4 20 21 3"/><path d="M21 16v5h-5"/><path d="M15 15l6 6"/><path d="M4 4l5 5"/></svg>
                </button>
                <button type="button" class="ap-icon-btn ap-transport-side" id="apPrev" aria-label="Précédent">
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M6 6h2v12H6zm3.5 6 8.5 6V6z"/></svg>
                </button>
                <button type="button" class="ap-play-main" id="apPlay" aria-label="Lecture">
                  <svg class="ap-ic-play" viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                  <svg class="ap-ic-pause" viewBox="0 0 24 24" width="32" height="32" fill="currentColor" hidden><path d="M6 5h4v14H6zm8 0h4v14h-4z"/></svg>
                </button>
                <button type="button" class="ap-icon-btn ap-transport-side" id="apNext" aria-label="Suivant">
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6v12z"/></svg>
                </button>
                <button type="button" class="ap-icon-btn" id="apRepeat" aria-label="Répéter" aria-pressed="false">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17 1l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><path d="M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>
                </button>
              </div>
              <div class="ap-queue-hd">File d’attente</div>
              <ol class="ap-queue" id="apQueue"></ol>
            </div>

            <aside class="ap-slides-panel" id="apSlidesPanel">
              <div class="ap-slides-hd">
                <div>
                  <span class="al-kicker">Présentation liée</span>
                  <strong id="apSlideMeta">—</strong>
                </div>
                <button type="button" class="al-btn-ghost al-btn-sm" id="apOpenNbFull">Plein écran</button>
              </div>
              <div class="ap-slide-frame">
                <img id="apSlideImg" alt="Slide" hidden>
                <div class="ap-slide-empty" id="apSlideEmpty">Les slides NotebookLM s’affichent ici pendant l’écoute.</div>
              </div>
              <div class="ap-slide-nav">
                <button type="button" class="ap-icon-btn" id="apSlidePrev" aria-label="Slide précédente">‹</button>
                <button type="button" class="ap-icon-btn" id="apSlideNext" aria-label="Slide suivante">›</button>
              </div>
            </aside>
          </div>
        </div>
      `;
      document.body.appendChild(full);
    },

    _bindGlobal() {
      if (this._bound) return;
      this._bound = true;
      document.addEventListener('click', (e) => {
        const t = e.target;
        if (!t || !t.closest) return;
        if (t.closest('#apMiniPlay') || t.closest('#apPlay')) { this.toggle(); return; }
        if (t.closest('#apMiniPrev') || t.closest('#apPrev')) { this.prev(); return; }
        if (t.closest('#apMiniNext') || t.closest('#apNext')) { this.next(); return; }
        if (t.closest('#apMiniOpen')) { this.openFullPlayer(); return; }
        if (t.closest('#apFullClose')) { this.closeFullPlayer(); return; }
        if (t.closest('#apBtnSlides')) { this.toggleSlidesPanel(); return; }
        if (t.closest('#apShuffle')) {
          this.shuffle = !this.shuffle;
          const b = $('#apShuffle');
          if (b) b.setAttribute('aria-pressed', this.shuffle ? 'true' : 'false');
          return;
        }
        if (t.closest('#apRepeat')) {
          this.repeat = this.repeat === 'off' ? 'all' : this.repeat === 'all' ? 'one' : 'off';
          const b = $('#apRepeat');
          if (b) {
            b.setAttribute('aria-pressed', this.repeat !== 'off' ? 'true' : 'false');
            b.dataset.mode = this.repeat;
          }
          return;
        }
        if (t.closest('#apSlidePrev')) {
          const cur = this.current();
          const nb = this._notebook(cur && cur.notebookId);
          if (!nb) return;
          this.slideIdx = (this.slideIdx - 1 + (nb.pageCount || 1)) % (nb.pageCount || 1);
          this._renderSlide(nb, this.slideIdx);
          return;
        }
        if (t.closest('#apSlideNext')) {
          const cur = this.current();
          const nb = this._notebook(cur && cur.notebookId);
          if (!nb) return;
          this.slideIdx = (this.slideIdx + 1) % (nb.pageCount || 1);
          this._renderSlide(nb, this.slideIdx);
          return;
        }
        if (t.closest('#apOpenNbFull')) {
          const cur = this.current();
          if (cur && cur.notebookId) this.openNotebook(cur.notebookId);
          return;
        }
      });

      document.addEventListener('input', (e) => {
        if (e.target && e.target.id === 'apSeek') {
          this._seekDragging = true;
          this.seekRatio((+e.target.value) / 1000);
        }
      });
      document.addEventListener('change', (e) => {
        if (e.target && e.target.id === 'apSeek') this._seekDragging = false;
      });
    },

    openFullPlayer() {
      const el = $('#apFullPlayer');
      if (!el) return;
      el.hidden = false;
      document.body.classList.add('ap-full-open');
      this._paintAll();
    },

    closeFullPlayer() {
      const el = $('#apFullPlayer');
      if (el) el.hidden = true;
      document.body.classList.remove('ap-full-open');
    },

    _showMini(show) {
      const m = $('#apMiniBar');
      if (m) m.hidden = !show;
      document.body.classList.toggle('ap-mini-visible', !!show);
    },

    _onTime() {
      if (this._seekDragging) return;
      const media = this._activeMedia();
      if (!media) return;
      const cur = media.currentTime || 0;
      const dur = media.duration || 0;
      const ratio = dur > 0 ? cur / dur : 0;
      const seek = $('#apSeek');
      if (seek) seek.value = String(Math.round(ratio * 1000));
      const tc = $('#apTimeCur');
      const td = $('#apTimeDur');
      if (tc) tc.textContent = fmtTime(cur);
      if (td) td.textContent = fmtTime(dur);
      const fill = $('#apMiniProgressFill');
      if (fill) fill.style.width = (ratio * 100).toFixed(2) + '%';
    },

    _onTimeFromVideo() {
      this._onTime();
    },

    _onMeta() {
      this._onTime();
      this._paintAll();
    },

    _onEnded() {
      this.next();
    },

    _onError() {
      const t = this.current();
      console.warn('[AudioPlayer] media error', t && t.file);
      const sub = $('#apMiniSub');
      if (sub) sub.textContent = 'Fichier introuvable — vérifiez media/notebook-lm';
    },

    _paintPlaying() {
      const playing = this.playing;
      $$('.ap-ic-play').forEach((el) => { el.hidden = playing; });
      $$('.ap-ic-pause').forEach((el) => { el.hidden = !playing; });
      document.body.classList.toggle('ap-is-playing', playing);
    },

    _paintAll() {
      const t = this.current();
      if (!t) return;
      const cover = t.cover || t.coverFallback || '';
      const setImg = (id) => {
        const el = $(id);
        if (!el) return;
        el.src = cover;
        el.onerror = function () {
          this.onerror = null;
          if (t.coverFallback) this.src = t.coverFallback;
        };
      };
      setImg('#apMiniArt');
      setImg('#apFullCover');
      const glow = $('#apCoverGlow');
      if (glow) glow.style.background = t.color || '#22d3ee';
      const backdrop = $('#apFullBackdrop');
      if (backdrop) {
        backdrop.style.backgroundImage = `url("${cover.replace(/"/g, '')}")`;
      }

      const title = t.title || '—';
      const sub = (t.albumTitle || '') + (t.chapter ? ' · ' + String(t.chapter).replace('ch', 'Ch. ') : '');
      const setTxt = (id, v) => { const el = $(id); if (el) el.textContent = v; };
      setTxt('#apMiniTitle', title);
      setTxt('#apMiniSub', sub);
      setTxt('#apFullTitle', title);
      setTxt('#apFullArtist', (t.artist || 'Gériatrie') + ' · ' + sub);
      setTxt('#apFullAlbumTitle', t.albumTitle || 'Album');
      setTxt('#apFullPlayingFrom', t.kind === 'video' ? 'Vidéo' : 'Audio');

      const coverEl = $('#apFullCover');
      if (coverEl) coverEl.hidden = t.kind === 'video';

      // queue
      const q = $('#apQueue');
      if (q) {
        q.innerHTML = this.queue.map((tr, i) => {
          const on = i === this.index ? ' is-current' : '';
          return `<li class="ap-queue-item${on}"><button type="button" data-q="${i}"><span>${i + 1}</span><span>${esc(tr.title)}</span></button></li>`;
        }).join('');
        $$('[data-q]', q).forEach((b) => b.addEventListener('click', () => this.playIndex(+b.getAttribute('data-q'))));
      }

      this._paintPlaying();
      this._onTime();
    },

    /* Public API for app.js */
    open() {
      this.init();
      if (typeof sw === 'function') sw('audio');
      this.renderLibrary();
    }
  };

  window.AudioPlayer = AudioPlayer;
  window.GeriatrieListen = AudioPlayer;

  // Boot when DOM ready if view exists
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      if ($('#vAudio') || $('#audioLibraryRoot')) AudioPlayer.init();
    });
  } else if ($('#vAudio') || $('#audioLibraryRoot')) {
    AudioPlayer.init();
  }
})();
