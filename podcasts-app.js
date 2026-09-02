/* ===============================================================
   PODCASTS MODULE — Lecteur Audio Natif NotebookLM EVC
   =============================================================== */

const Podcasts = (function() {
  let activeCategory = 'all';
  let searchQuery = '';
  let currentPodcast = null;
  let isPlaying = false;
  let playbackSpeed = 1.0;
  let audioElement = null;
  let localAudioFiles = new Map();

  function init() {
    initAudioElement();
    renderList();
  }

  function initAudioElement() {
    if (typeof document === 'undefined') return;
    if (!audioElement) {
      audioElement = document.createElement('audio');
      audioElement.id = 'podAudioElement';
      audioElement.preload = 'metadata';
      document.body.appendChild(audioElement);

      audioElement.addEventListener('timeupdate', () => {
        updateProgress();
      });

      audioElement.addEventListener('ended', () => {
        isPlaying = false;
        updatePlayButtons();
      });

      audioElement.addEventListener('error', (e) => {
        console.warn('[Podcasts] Erreur de lecture audio:', e);
      });
    }
  }

  function loadLocalFolder(fileList) {
    if (!fileList || !fileList.length) return;
    localAudioFiles.clear();
    let count = 0;
    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      if (file.name.endsWith('.m4a') || file.name.endsWith('.mp3') || file.name.endsWith('.wav')) {
        const normName = file.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        localAudioFiles.set(normName, file);
        localAudioFiles.set(file.name, file);
        count++;
      }
    }
    const statusEl = document.getElementById('podFolderStatus');
    if (statusEl) {
      statusEl.textContent = `✅ ${count} audios NotebookLM connectés !`;
      statusEl.style.color = '#14b8a6';
      statusEl.style.fontWeight = '700';
    }
    if (currentPodcast) {
      prepareAudioSource(currentPodcast);
    }
    renderList();
  }

  function prepareAudioSource(pod) {
    initAudioElement();
    if (!pod) return;
    
    // Check if matching local file exists
    let matchedFile = null;
    if (pod.audioFilename) {
      const norm = pod.audioFilename.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      matchedFile = localAudioFiles.get(pod.audioFilename) || localAudioFiles.get(norm);
    }

    if (!matchedFile) {
      // Fuzzy search in localAudioFiles
      for (const [name, file] of localAudioFiles.entries()) {
        const podNorm = pod.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').slice(0, 15);
        if (name.includes(podNorm)) {
          matchedFile = file;
          break;
        }
      }
    }

    if (matchedFile) {
      audioElement.src = URL.createObjectURL(matchedFile);
    } else {
      // Stream path in audio/podcasts/ or synthesized fallback
      audioElement.src = 'audio/podcasts/' + encodeURIComponent(pod.audioFilename || (pod.id + '.m4a'));
    }
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
      const hasLocal = pod.audioFilename && (localAudioFiles.has(pod.audioFilename) || localAudioFiles.has(pod.audioFilename.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')));
      return `
        <div class="pod-card ${isCurrent ? 'pod-card-active' : ''}" id="pod-card-${pod.id}" onclick="Podcasts.selectPodcast('${pod.id}')">
          <div class="pod-card-top">
            <span class="pod-cat-badge">${pod.categoryLabel}</span>
            <span class="pod-dur-badge">⏱ ${pod.duration}</span>
          </div>
          <h3 class="pod-card-title">${esc(pod.title)}</h3>
          <p class="pod-card-chapter">📖 ${esc(pod.chapterTitle)}</p>
          <p class="pod-card-summary">${esc(pod.summary)}</p>
          <div class="pod-card-tags">
            ${(pod.tags || []).map(t => `<span class="pod-tag">${esc(t)}</span>`).join('')}
            ${hasLocal ? '<span class="pod-tag" style="background:#0d9488; color:#fff;">✓ Fichier M4A connecté</span>' : ''}
          </div>
          <div class="pod-card-actions">
            <button type="button" class="pod-card-play-btn" onclick="event.stopPropagation(); Podcasts.playPodcast('${pod.id}')">
              ${isCurrent && isPlaying ? '⏸ Pause' : '▶ Écouter l\'audio'}
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  function selectPodcast(id) {
    const pod = (typeof PODCASTS_DATA !== 'undefined') ? PODCASTS_DATA.find(p => p.id === id) : null;
    if (!pod) return;
    currentPodcast = pod;
    prepareAudioSource(currentPodcast);
    updatePlayerUI();
    renderList();
  }

  function playPodcast(id) {
    if (!currentPodcast || currentPodcast.id !== id) {
      selectPodcast(id);
    }
    togglePlay();
  }

  function togglePlay() {
    initAudioElement();
    if (!currentPodcast) {
      if (typeof PODCASTS_DATA !== 'undefined' && PODCASTS_DATA.length > 0) {
        selectPodcast(PODCASTS_DATA[0].id);
      } else {
        return;
      }
    }

    if (isPlaying) {
      audioElement.pause();
      isPlaying = false;
      updatePlayButtons();
    } else {
      audioElement.playbackRate = playbackSpeed;
      const playPromise = audioElement.play();
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.then(() => {
          isPlaying = true;
          updatePlayButtons();
        }).catch((err) => {
          console.warn('[Podcasts] Playback blocked or source pending:', err);
          isPlaying = false;
          updatePlayButtons();
        });
      } else {
        isPlaying = true;
        updatePlayButtons();
      }
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
    const durEl = document.getElementById('podTotalDuration');

    if (titleEl) titleEl.textContent = currentPodcast.title;
    if (subEl) subEl.textContent = `${currentPodcast.categoryLabel} · ${currentPodcast.chapterTitle} (${currentPodcast.duration})`;
    if (badgeEl) badgeEl.textContent = 'AUDIO NOTEBOOKLM SÉLECTIONNÉ';
    if (durEl) durEl.textContent = currentPodcast.duration;
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
    const dur = audioElement.duration || (currentPodcast ? currentPodcast.durationSec : 1200);

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
    loadLocalFolder,
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
