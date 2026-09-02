/* ===============================================================
   PODCASTS MODULE — Lecteur & Catalogue Audio EVC
   =============================================================== */

const Podcasts = (function() {
  let activeCategory = 'all';
  let searchQuery = '';
  let currentPodcast = null;
  let isPlaying = false;
  let playbackSpeed = 1.0;
  let progressInterval = null;
  let currentSeconds = 0;
  let synthUtterance = null;

  function init() {
    renderList();
    initSpeechSynthesis();
  }

  function initSpeechSynthesis() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = () => {};
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
          </div>
          <div class="pod-card-actions">
            <button type="button" class="pod-card-play-btn" onclick="event.stopPropagation(); Podcasts.playPodcast('${pod.id}')">
              ${isCurrent && isPlaying ? '⏸ Pause' : '▶ Écouter la masterclass'}
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
    if (!currentPodcast) {
      if (typeof PODCASTS_DATA !== 'undefined' && PODCASTS_DATA.length > 0) {
        selectPodcast(PODCASTS_DATA[0].id);
      } else {
        return;
      }
    }

    if (isPlaying) {
      pauseAudio();
    } else {
      startAudio();
    }
  }

  function startAudio() {
    if (!currentPodcast) return;
    isPlaying = true;
    updatePlayButtons();

    // Use SpeechSynthesis as offline audible narrator if available
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const narrativeText = `${currentPodcast.title}. Chapitre ${currentPodcast.chapterTitle}. ${currentPodcast.summary}. Points clés : ${currentPodcast.keyPoints.join('. ')}`;
      synthUtterance = new SpeechSynthesisUtterance(narrativeText);
      synthUtterance.lang = 'fr-FR';
      synthUtterance.rate = playbackSpeed;
      synthUtterance.onend = () => {
        pauseAudio();
        currentSeconds = 0;
        updateProgress();
      };
      window.speechSynthesis.speak(synthUtterance);
    }

    clearInterval(progressInterval);
    progressInterval = setInterval(() => {
      currentSeconds += 1 * playbackSpeed;
      if (currentSeconds >= currentPodcast.durationSec) {
        currentSeconds = currentPodcast.durationSec;
        pauseAudio();
      }
      updateProgress();
    }, 1000);
  }

  function pauseAudio() {
    isPlaying = false;
    clearInterval(progressInterval);
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    updatePlayButtons();
  }

  function replay(seconds) {
    currentSeconds = Math.max(0, currentSeconds - seconds);
    updateProgress();
    if (isPlaying) {
      startAudio();
    }
  }

  function forward(seconds) {
    if (!currentPodcast) return;
    currentSeconds = Math.min(currentPodcast.durationSec, currentSeconds + seconds);
    updateProgress();
    if (isPlaying) {
      startAudio();
    }
  }

  function seek(pct) {
    if (!currentPodcast) return;
    currentSeconds = Math.floor((pct / 100) * currentPodcast.durationSec);
    updateProgress();
    if (isPlaying) {
      startAudio();
    }
  }

  function setSpeed(spd, btn) {
    playbackSpeed = parseFloat(spd) || 1.0;
    document.querySelectorAll('.pod-speed-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    if (isPlaying) {
      startAudio();
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
    if (badgeEl) badgeEl.textContent = 'EN COURS D\'ÉCOUTE';
    if (durEl) durEl.textContent = currentPodcast.duration;
    updateProgress();
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
    if (!currentPodcast) return;
    const curTimeEl = document.getElementById('podCurrentTime');
    const slider = document.getElementById('podProgress');
    if (curTimeEl) {
      const m = Math.floor(currentSeconds / 60);
      const s = Math.floor(currentSeconds % 60);
      curTimeEl.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }
    if (slider) {
      slider.value = (currentSeconds / currentPodcast.durationSec) * 100;
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
