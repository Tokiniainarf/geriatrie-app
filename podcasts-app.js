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

    grid.innerHTML = list.map(pod => {
      const isCurrent = currentPodcast && currentPodcast.id === pod.id;
      const durationDisplay = pod.duration ? (`⏱ ` + pod.duration) : '⏱ 15 min';
      return `
        <div class="pod-card ${isCurrent ? 'pod-card-active' : ''} ${isCurrent && isPlaying ? 'is-playing-card' : ''}" id="pod-card-${pod.id}">
          <div class="pod-card-head">
            <div class="pod-card-meta">
              <span class="pod-cat-badge">${esc(pod.categoryLabel || 'Masterclass')}</span>
              <span class="pod-dur-badge">${durationDisplay}</span>
            </div>
            <button type="button" class="pod-mini-play-btn ${isCurrent && isPlaying ? 'playing' : ''}" onclick="event.stopPropagation(); Podcasts.playPodcast('${pod.id}')" aria-label="${isCurrent && isPlaying ? 'Pause' : 'Écouter'}">
              ${isCurrent && isPlaying ? '⏸' : '▶'}
            </button>
          </div>
          
          <h3 class="pod-card-title" onclick="Podcasts.selectPodcast('${pod.id}', true)">${esc(pod.title)}</h3>
          <p class="pod-card-chapter">📖 ${esc(pod.chapterTitle || pod.chapter || '')}</p>
          
          <details class="pod-card-details">
            <summary class="pod-card-summary-toggle">💡 Points clés &amp; résumé EVC</summary>
            <div class="pod-card-expanded">
              <p class="pod-card-summary">${esc(pod.summary)}</p>
              ${pod.keyPoints && pod.keyPoints.length ? `
                <ul class="pod-keypoints-list">
                  ${pod.keyPoints.map(kp => `<li>${esc(kp)}</li>`).join('')}
                </ul>
              ` : ''}
              <div class="pod-card-tags">
                ${(pod.tags || []).map(t => `<span class="pod-tag">${esc(t)}</span>`).join('')}
                <span class="pod-tag pod-tag-ready">✓ Audio Studio NotebookLM</span>
              </div>
            </div>
          </details>
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
    if (autoPlay) {
      startPlay();
    }
  }

  function playPodcast(id) {
    if (!currentPodcast || currentPodcast.id !== id) {
      selectPodcast(id, true);
    } else {
      togglePlay();
    }
  }

  function togglePlay() {
    initAudioElement();
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

  function setSpeed(spd, btn) {
    playbackSpeed = parseFloat(spd) || 1.0;
    document.querySelectorAll('.pod-speed-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    if (audioElement) {
      audioElement.playbackRate = playbackSpeed;
    }
  }

  function updatePlayerUI() {
    if (!currentPodcast) return;
    const titleEl = document.getElementById('podPlayerTitle');
    const subEl = document.getElementById('podPlayerSub');
    const badgeEl = document.getElementById('podPlayerBadge');

    if (titleEl) titleEl.textContent = currentPodcast.title;
    if (subEl) subEl.textContent = `${currentPodcast.categoryLabel} · ${currentPodcast.chapterTitle}`;
    if (badgeEl) badgeEl.textContent = 'MASTERCLASS NOTEBOOKLM';
    updateDuration();
  }

  function updateDuration() {
    const durEl = document.getElementById('podTotalDuration');
    if (durEl && audioElement && audioElement.duration && !isNaN(audioElement.duration)) {
      const m = Math.floor(audioElement.duration / 60);
      const s = Math.floor(audioElement.duration % 60);
      durEl.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }
  }

  function updatePlayButtons() {
    const mainBtn = document.getElementById('podMainPlayBtn');
    if (mainBtn) {
      mainBtn.textContent = isPlaying ? '⏸ Mettre en pause' : '▶ Lancer l\'écoute';
      mainBtn.classList.toggle('is-playing', isPlaying);
    }
    renderList();
  }

  function updateProgress() {
    if (!audioElement) return;
    const curTimeEl = document.getElementById('podCurrentTime');
    const slider = document.getElementById('podProgress');
    const curSec = audioElement.currentTime || 0;
    const dur = audioElement.duration || 0;

    if (curTimeEl) {
      const m = Math.floor(curSec / 60);
      const s = Math.floor(curSec % 60);
      curTimeEl.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }
    if (slider && dur > 0) {
      slider.value = (curSec / dur) * 100;
    }
  }

  function esc(s) {
    if (!s) return '';
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  return {
    init,
    setCategory,
    filter,
    selectPodcast,
    playPodcast,
    togglePlay,
    replay,
    forward,
    seek,
    setSpeed
  };
})();

if (typeof window !== 'undefined') {
  window.Podcasts = Podcasts;
}
