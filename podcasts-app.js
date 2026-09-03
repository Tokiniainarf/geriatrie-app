/* ===============================================================
   PODCASTS MODULE — Lecteur Audio Natif NotebookLM EVC
   Lecture streaming directe haute qualité des 27 masterclasses
   =============================================================== */

const Podcasts = (function() {
  let activeCategory = 'all';
  let searchQuery = '';
  let currentPodcast = null;
  let isPlaying = false;
  let playbackSpeed = 1.0;
  let audioElement = null;

  function init() {
    initAudioElement();
    setupSwipeGestures();
    if (typeof PODCASTS_DATA !== 'undefined' && PODCASTS_DATA.length > 0) {
      if (!currentPodcast) {
        selectPodcast(PODCASTS_DATA[0].id, false);
      }
    }
    renderList();
  }

  function initAudioElement() {
    if (typeof document === 'undefined') return;
    if (!audioElement) {
      audioElement = document.createElement('audio');
      audioElement.id = 'podAudioElement';
      audioElement.preload = 'auto';
      document.body.appendChild(audioElement);

      audioElement.addEventListener('timeupdate', () => {
        updateProgress();
      });

      audioElement.addEventListener('durationchange', () => {
        updateDuration();
      });

      audioElement.addEventListener('play', () => {
        isPlaying = true;
        updatePlayButtons();
      });

      audioElement.addEventListener('pause', () => {
        isPlaying = false;
        updatePlayButtons();
      });

      audioElement.addEventListener('ended', () => {
        isPlaying = false;
        updatePlayButtons();
        nextPodcast();
      });

      audioElement.addEventListener('error', (e) => {
        console.warn('[Podcasts] Erreur audio:', e);
      });
    }
  }

  function prepareAudioSource(pod) {
    initAudioElement();
    if (!pod) return;
    const url = pod.audioUrl || ('audio/podcasts/' + pod.slug);
    if (audioElement.src !== url && !audioElement.src.endsWith(url)) {
      audioElement.src = url;
      audioElement.load();
    }
    audioElement.playbackRate = playbackSpeed;
  }

  function getFilteredPodcasts() {
    if (typeof PODCASTS_DATA === 'undefined') return [];
    return PODCASTS_DATA.filter(pod => {
      const matchCat = (activeCategory === 'all' || pod.category === activeCategory);
      const q = searchQuery.toLowerCase().trim();
      const matchSearch = !q || 
        pod.title.toLowerCase().includes(q) || 
        pod.summary.toLowerCase().includes(q) || 
        (pod.tags && pod.tags.some(t => t.toLowerCase().includes(q))) ||
        (pod.chapterTitle && pod.chapterTitle.toLowerCase().includes(q));
      return matchCat && matchSearch;
    });
  }

  function setCategory(cat, btn) {
    activeCategory = cat;
    document.querySelectorAll('.pod-chip').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    renderList();
  }

  function filter() {
    const input = document.getElementById('podSearch');
    searchQuery = input ? input.value : '';
    renderList();
  }

      function renderList() {
    const grid = document.getElementById('podcastsGrid');
    if (!grid) return;
    const list = getFilteredPodcasts();
    if (list.length === 0) {
      grid.innerHTML = '<div class="pod-empty"><p>Aucun podcast ne correspond à votre recherche.</p></div>';
      return;
    }

    grid.innerHTML = list.map((pod, idx) => {
      const isCurrent = currentPodcast && currentPodcast.id === pod.id;
      const durationDisplay = pod.duration ? pod.duration : '18:00';
      const chapBadge = pod.chapter ? pod.chapter.toUpperCase() : 'EVC';

      return `
        <div class="pod-spotify-item ${isCurrent ? 'is-active-item' : ''} ${isCurrent && isPlaying ? 'is-playing-item' : ''}" id="pod-card-${pod.id}" onclick="Podcasts.openFullPlayer('${pod.id}')">
          <!-- Left: Spotify-style Cover Artwork Thumbnail -->
          <div class="pod-spotify-cover">
            <span class="pod-spotify-ch-badge">${chapBadge}</span>
            <div class="pod-spotify-play-overlay">
              <span class="pod-spotify-play-icon">${isCurrent && isPlaying ? '⏸' : '▶'}</span>
            </div>
            ${isCurrent && isPlaying ? `
              <div class="pod-equalizer-bars" aria-hidden="true">
                <span></span><span></span><span></span>
              </div>
            ` : ''}
          </div>

          <!-- Middle: Metadata & Titles -->
          <div class="pod-spotify-body">
            <div class="pod-spotify-title-row">
              <h3 class="pod-spotify-title">${esc(pod.title)}</h3>
            </div>
            <div class="pod-spotify-subtitle-row">
              <span class="pod-spotify-cat-pill">${esc(pod.categoryLabel || 'Masterclass')}</span>
              <span class="pod-spotify-dot">·</span>
              <span class="pod-spotify-dur">⏱ ${durationDisplay}</span>
              ${pod.chapterTitle ? `<span class="pod-spotify-dot">·</span><span class="pod-spotify-chap">📖 ${esc(pod.chapterTitle)}</span>` : ''}
            </div>

            <!-- Details Dropdown / Key Points Accordion -->
            <details class="pod-card-details" onclick="event.stopPropagation()">
              <summary class="pod-card-summary-toggle">💡 Résumé &amp; points clés EVC</summary>
              <div class="pod-card-expanded">
                <p class="pod-card-summary">${esc(pod.summary)}</p>
                ${pod.keyPoints && pod.keyPoints.length ? `
                  <ul class="pod-keypoints-list">
                    ${pod.keyPoints.map(kp => `<li>${esc(kp)}</li>`).join('')}
                  </ul>
                ` : ''}
                <div class="pod-card-tags">
                  ${(pod.tags || []).map(t => `<span class="pod-tag">${esc(t)}</span>`).join('')}
                  <span class="pod-tag pod-tag-ready">✓ Studio NotebookLM</span>
                </div>
              </div>
            </details>
          </div>

          <!-- Right: Circular Play Button -->
          <div class="pod-spotify-action">
            <button type="button" class="pod-spotify-circle-btn ${isCurrent && isPlaying ? 'playing' : ''}" onclick="event.stopPropagation(); Podcasts.openFullPlayer('${pod.id}')" aria-label="${isCurrent && isPlaying ? 'Pause' : 'Écouter'}">
              ${isCurrent && isPlaying ? '⏸' : '▶'}
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  function selectPodcast(id, autoPlay = false) {
    const pod = (typeof PODCASTS_DATA !== 'undefined') ? PODCASTS_DATA.find(p => p.id === id) : null;
    if (!pod) return;
    currentPodcast = pod;
    prepareAudioSource(currentPodcast);
    updatePlayerUI();
    renderList();
    const card = document.getElementById('podcastPlayerCard');
    if (autoPlay) {
      if (card) {
        card.classList.remove('is-hidden');
        card.classList.add('is-playing-now');
      }
      startPlay();
    }
  }

  function playPodcast(id) {
    const card = document.getElementById('podcastPlayerCard');
    if (card) {
      card.classList.remove('is-hidden');
      card.classList.add('is-playing-now');
    }
    if (!currentPodcast || currentPodcast.id !== id) {
      selectPodcast(id, true);
    } else {
      togglePlay();
    }
  }

  function togglePlay() {
    initAudioElement();
    const card = document.getElementById('podcastPlayerCard');
    if (card) {
      card.classList.remove('is-hidden');
      card.classList.add('is-playing-now');
    }
    if (!currentPodcast) {
      if (typeof PODCASTS_DATA !== 'undefined' && PODCASTS_DATA.length > 0) {
        selectPodcast(PODCASTS_DATA[0].id, true);
      }
      return;
    }

    if (isPlaying) {
      audioElement.pause();
    } else {
      startPlay();
    }
  }

  function startPlay() {
    initAudioElement();
    if (!audioElement.src || audioElement.src === '' || audioElement.src === window.location.href) {
      prepareAudioSource(currentPodcast);
    }
    audioElement.playbackRate = playbackSpeed;
    const p = audioElement.play();
    if (p && typeof p.catch === 'function') {
      p.catch(err => {
        console.warn('[Podcasts] Erreur de lecture:', err);
      });
    }
  }

  function replay(seconds) {
    if (!audioElement) return;
    audioElement.currentTime = Math.max(0, audioElement.currentTime - seconds);
  }

  function forward(seconds) {
    if (!audioElement) return;
    audioElement.currentTime = Math.min(audioElement.duration || 9999, audioElement.currentTime + seconds);
  }

  function seek(pct) {
    if (!audioElement || !audioElement.duration) return;
    audioElement.currentTime = (pct / 100) * audioElement.duration;
  }

  function seekTrack(e, track) {
    if (!audioElement || !audioElement.duration || !track) return;
    const rect = track.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const pct = Math.max(0, Math.min(1, clickX / rect.width));
    audioElement.currentTime = pct * audioElement.duration;
  }

  function setSpeed(spd, btn) {
    playbackSpeed = parseFloat(spd) || 1.0;
    const cycleBtn = document.getElementById('podSpeedCycleBtn');
    if (cycleBtn) {
      cycleBtn.textContent = playbackSpeed + 'x';
    }
    document.querySelectorAll('.pod-speed-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    if (audioElement) {
      audioElement.playbackRate = playbackSpeed;
    }
  }

  function cycleSpeed() {
    const speeds = [1.0, 1.25, 1.5, 2.0];
    let curIdx = speeds.indexOf(playbackSpeed);
    if (curIdx === -1) curIdx = 0;
    const nextIdx = (curIdx + 1) % speeds.length;
    playbackSpeed = speeds[nextIdx];
    if (audioElement) {
      audioElement.playbackRate = playbackSpeed;
    }
    const cycleBtn = document.getElementById('podSpeedCycleBtn');
    if (cycleBtn) {
      cycleBtn.textContent = playbackSpeed + 'x';
    }
    const fullSpeedBtn = document.getElementById('podFullSpeedBtn');
    if (fullSpeedBtn) {
      fullSpeedBtn.textContent = playbackSpeed + 'x';
    }
    document.querySelectorAll('.pod-speed-btn').forEach(b => {
      b.classList.toggle('active', parseFloat(b.dataset.spd) === playbackSpeed);
    });
  }

  function openFullPlayer(id) {
    const card = document.getElementById('podcastPlayerCard');
    if (card) {
      card.classList.remove('is-hidden');
      card.classList.add('is-playing-now');
    }
    if (id) {
      if (!currentPodcast || currentPodcast.id !== id) {
        selectPodcast(id, true);
      } else if (!isPlaying) {
        startPlay();
      }
    }
    const fullModal = document.getElementById('podcastFullPlayer');
    if (fullModal) {
      fullModal.classList.add('is-open');
      fullModal.setAttribute('aria-hidden', 'false');
    }
    updateFullPlayerUI();
  }

  function closeFullPlayer() {
    const fullModal = document.getElementById('podcastFullPlayer');
    if (fullModal) {
      fullModal.classList.remove('is-open');
      fullModal.setAttribute('aria-hidden', 'true');
    }
  }

  function nextPodcast() {
    if (!PODCASTS_DATA || !PODCASTS_DATA.length) return;
    let idx = PODCASTS_DATA.findIndex(p => p.id === currentPodcast?.id);
    if (idx === -1) idx = 0;
    const nextIdx = (idx + 1) % PODCASTS_DATA.length;
    animateTrackChange('left');
    selectPodcast(PODCASTS_DATA[nextIdx].id, true);
    updateFullPlayerUI();
  }

  function prevPodcast() {
    if (!PODCASTS_DATA || !PODCASTS_DATA.length) return;
    if (audioElement && audioElement.currentTime > 3) {
      audioElement.currentTime = 0;
      updateFullPlayerTimes();
      return;
    }
    let idx = PODCASTS_DATA.findIndex(p => p.id === currentPodcast?.id);
    if (idx === -1) idx = 0;
    const prevIdx = (idx - 1 + PODCASTS_DATA.length) % PODCASTS_DATA.length;
    animateTrackChange('right');
    selectPodcast(PODCASTS_DATA[prevIdx].id, true);
    updateFullPlayerUI();
  }

  function animateTrackChange(direction) {
    const artwork = document.getElementById('podFullArtwork');
    if (!artwork) return;
    artwork.classList.add(direction === 'left' ? 'swipe-left' : 'swipe-right');
    setTimeout(() => {
      artwork.classList.remove('swipe-left', 'swipe-right');
    }, 240);
  }

  function openRelatedChapter(chId) {
    if (!chId) return;
    closeFullPlayer();
    if (typeof showCh === 'function') {
      showCh(chId);
    } else if (typeof sw === 'function') {
      sw('ch');
    }
  }

  function updateFullPlayerUI() {
    if (!currentPodcast) return;
    const title = document.getElementById('podFullTitle');
    const chap = document.getElementById('podFullChapter');
    const headerSub = document.getElementById('podFullHeaderSub');
    const chBadge = document.getElementById('podFullChBadge');
    const coverIcon = document.getElementById('podFullCoverIcon');
    const catPill = document.getElementById('podFullCatPill');
    const notesBody = document.getElementById('podFullNotesBody');
    const speedBtn = document.getElementById('podFullSpeedBtn');
    const favBtn = document.getElementById('podFullFavBtn');

    if (title) title.textContent = currentPodcast.title;
    if (chap) chap.textContent = currentPodcast.chapterTitle || 'Gériatrie EVC';
    if (headerSub) headerSub.textContent = (currentPodcast.chapter ? currentPodcast.chapter.toUpperCase() + ' · ' : '') + 'Masterclass NotebookLM';
    if (chBadge) chBadge.textContent = currentPodcast.chapter ? currentPodcast.chapter.toUpperCase() : 'EVC';
    if (coverIcon) coverIcon.textContent = currentPodcast.chapter ? currentPodcast.chapter.toUpperCase() : '🎙️';
    if (catPill) catPill.textContent = currentPodcast.categoryLabel || 'Masterclass';
    if (speedBtn) speedBtn.textContent = playbackSpeed + 'x';

    if (favBtn) {
      try {
        const favs = JSON.parse(localStorage.getItem('pod_favs') || '[]');
        favBtn.classList.toggle('active', favs.includes(currentPodcast.id));
      } catch (_) {}
    }

    if (notesBody) {
      const ch = currentPodcast.chapter || '';
      const chTitle = currentPodcast.chapterTitle || 'Gériatrie EVC';
      notesBody.innerHTML = `
        <div class="pod-study-quick-nav">
          <button type="button" class="pod-study-ch-btn" onclick="Podcasts.openRelatedChapter('${ch}')">
            📖 Ouvrir le cours : ${esc(chTitle)}
          </button>
        </div>
        <div class="pod-study-section">
          <h4 class="pod-study-sec-title">🎯 Résumé &amp; Cœur de Révision</h4>
          <p class="pod-full-summary-text">${esc(currentPodcast.summary)}</p>
        </div>
        ${currentPodcast.keyPoints && currentPodcast.keyPoints.length ? `
          <div class="pod-study-section">
            <h4 class="pod-study-sec-title">💡 Points clés EVC &amp; Recommandations CNEG</h4>
            <ul class="pod-full-keypoints-list">
              ${currentPodcast.keyPoints.map(kp => `<li>${esc(kp)}</li>`).join('')}
            </ul>
          </div>
        ` : ''}
        <div class="pod-full-tags-wrap">
          ${(currentPodcast.tags || []).map(t => `<span class="pod-full-tag">${esc(t)}</span>`).join('')}
          <span class="pod-full-tag pod-tag-studio">✓ Studio NotebookLM</span>
        </div>
      `;
    }

    updateFullPlayerTimes();
    updatePlayButtons();
  }

  function updateFullPlayerTimes() {
    if (!audioElement) return;
    const curSec = audioElement.currentTime || 0;
    const dur = audioElement.duration || 0;
    const pct = dur > 0 ? (curSec / dur) * 100 : 0;

    const fill = document.getElementById('podFullScrubberFill');
    if (fill) fill.style.width = pct + '%';

    const curTimeEl = document.getElementById('podFullCurrentTime');
    const durTimeEl = document.getElementById('podFullTotalDuration');

    if (curTimeEl) {
      const m = Math.floor(curSec / 60);
      const s = Math.floor(curSec % 60);
      curTimeEl.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }
    if (durTimeEl && dur > 0) {
      const m = Math.floor(dur / 60);
      const s = Math.floor(dur % 60);
      durTimeEl.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }
  }

  function toggleFav() {
    if (!currentPodcast) return;
    const btn = document.getElementById('podFullFavBtn');
    if (!btn) return;
    btn.classList.toggle('active');
    const isFav = btn.classList.contains('active');
    try {
      const favs = JSON.parse(localStorage.getItem('pod_favs') || '[]');
      const idx = favs.indexOf(currentPodcast.id);
      if (isFav && idx === -1) favs.push(currentPodcast.id);
      else if (!isFav && idx !== -1) favs.splice(idx, 1);
      localStorage.setItem('pod_favs', JSON.stringify(favs));
    } catch (_) {}
  }

  function updatePlayerUI() {
    if (!currentPodcast) return;
    const titleEl = document.getElementById('podPlayerTitle');
    const subEl = document.getElementById('podPlayerSub');
    const coverIcon = document.getElementById('podPlayerIcon');
    const badgeEl = document.getElementById('podPlayerBadge');

    if (titleEl) titleEl.textContent = currentPodcast.title;
    if (subEl) subEl.textContent = `${currentPodcast.categoryLabel || 'Masterclass'} · ${currentPodcast.chapterTitle || ''}`;
    if (coverIcon) coverIcon.textContent = currentPodcast.chapter ? currentPodcast.chapter.toUpperCase() : '🎙️';
    if (badgeEl) badgeEl.textContent = 'MASTERCLASS NOTEBOOKLM';
    updateDuration();
    updateFullPlayerUI();
  }

  function updateDuration() {
    const durEl = document.getElementById('podTotalDuration');
    if (durEl && audioElement && audioElement.duration && !isNaN(audioElement.duration)) {
      const m = Math.floor(audioElement.duration / 60);
      const s = Math.floor(audioElement.duration % 60);
      durEl.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }
    updateFullPlayerTimes();
  }

  function updatePlayButtons() {
    const mainBtn = document.getElementById('podMainPlayBtn');
    if (mainBtn) {
      const icon = mainBtn.querySelector('.pod-play-icon') || mainBtn;
      icon.textContent = isPlaying ? '⏸' : '▶';
      mainBtn.classList.toggle('playing', isPlaying);
      mainBtn.title = isPlaying ? 'Mettre en pause' : 'Écouter';
    }
    const fullPlayBtn = document.getElementById('podFullPlayBtn');
    const fullPlayIcon = document.getElementById('podFullPlayIcon');
    const fullArtwork = document.getElementById('podFullArtwork');
    if (fullPlayIcon) fullPlayIcon.textContent = isPlaying ? '⏸' : '▶';
    if (fullPlayBtn) fullPlayBtn.classList.toggle('playing', isPlaying);
    if (fullArtwork) fullArtwork.classList.toggle('is-playing', isPlaying);
    renderList();
  }

  function updateProgress() {
    if (!audioElement) return;
    const curSec = audioElement.currentTime || 0;
    const dur = audioElement.duration || 0;
    const pct = dur > 0 ? (curSec / dur) * 100 : 0;

    const miniFill = document.getElementById('podProgressMiniFill');
    if (miniFill) {
      miniFill.style.width = pct + '%';
    }

    const curTimeEl = document.getElementById('podCurrentTime');
    const slider = document.getElementById('podProgress');

    if (curTimeEl) {
      const m = Math.floor(curSec / 60);
      const s = Math.floor(curSec % 60);
      curTimeEl.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }
    if (slider && dur > 0) {
      slider.value = pct;
    }

    updateFullPlayerTimes();
  }

  function closeMiniPlayer() {
    if (audioElement) {
      try { audioElement.pause(); } catch (_) {}
      isPlaying = false;
    }
    const card = document.getElementById('podcastPlayerCard');
    if (card) {
      card.classList.remove('is-playing-now');
      card.classList.add('is-hidden');
    }
    closeFullPlayer();
    updatePlayButtons();
  }

  function esc(s) {
    if (!s) return '';
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  let touchStartX = 0;
  let touchStartY = 0;
  let touchDeltaX = 0;

  function setupSwipeGestures() {
    if (typeof document === 'undefined') return;
    const player = document.getElementById('podcastFullPlayer');
    if (!player) return;
    player.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      touchDeltaX = 0;
    }, { passive: true });

    player.addEventListener('touchmove', (e) => {
      touchDeltaX = e.touches[0].clientX - touchStartX;
    }, { passive: true });

    player.addEventListener('touchend', (e) => {
      const touchDeltaY = e.changedTouches[0].clientY - touchStartY;
      if (Math.abs(touchDeltaX) > 50 && Math.abs(touchDeltaX) > Math.abs(touchDeltaY) * 1.3) {
        if (touchDeltaX < -50) {
          nextPodcast();
        } else if (touchDeltaX > 50) {
          prevPodcast();
        }
      } else if (touchDeltaY > 80 && Math.abs(touchDeltaX) < 50) {
        closeFullPlayer();
      }
    }, { passive: true });
  }

  return {
    init,
    setCategory,
    filter,
    selectPodcast,
    playPodcast,
    togglePlay,
    openFullPlayer,
    closeFullPlayer,
    nextPodcast,
    prevPodcast,
    openRelatedChapter,
    toggleFav,
    closeMiniPlayer,
    replay,
    forward,
    seek,
    seekTrack,
    setSpeed,
    cycleSpeed
  };
})();

if (typeof window !== 'undefined') {
  window.Podcasts = Podcasts;
}
