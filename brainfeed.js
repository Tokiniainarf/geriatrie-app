/* ═══════════════════════════════════════════════════════════════
   BrainFeed 2.0 — Feed addictif type Reels pour révision gériatrie
   6 formats uniques · swipe · combo · confetti
   ═══════════════════════════════════════════════════════════════ */

const BrainFeed = (() => {
  let deck = [];
  let idx = 0;
  let streak = 0;
  let points = 0;
  let dailyDone = 0;
  let combo = 0;
  let quizCombo = 0;
  const DAILY_GOAL = 50;
  const COMBO_BONUS_AT = 5;
  let observer = null;
  let renderedRange = { start: 0, end: 0 };
  const BATCH_SIZE = 6;
  let activeTimers = new Map();
  let swipeState = null;

  const TYPE_RATIO = {
    memo_jour: 0.17,
    cas_choc: 0.17,
    quiz_flash: 0.17,
    chiffre_cle: 0.17,
    citation: 0.17,
    piege_exam: 0.17,
    flash: 0.04,
    synthesis: 0.02,
    case: 0.03,
    reco: 0.03
  };

  const CITATIONS = [
    { text: '« La vieillesse n\'est pas une maladie, c\'est une victoire sur la mort. »', author: 'Auguste Forel' },
    { text: '« Soigner le vieillard, c\'est soigner l\'avenir de chacun d\'entre nous. »', author: 'Gériatrie française' },
    { text: '« L\'âge n\'est qu\'un chiffre. La fragilité, c\'est un syndrome. »', author: 'Fried et al.' },
    { text: '« Polymédication : le médicament le plus dangereux est celui qu\'on n\'a pas revu. »', author: 'Revue médicamenteuse' },
    { text: '« Une chute chez le sujet âgé est toujours un symptôme, jamais un accident banal. »', author: 'HAS — Prévention des chutes' },
    { text: '« Le delirium est une urgence médicale masquée. »', author: 'Confusion aiguë' },
    { text: '« L\'autonomie se perd en escalier : d\'abord les AVD instrumentales. »', author: 'Lawton' },
    { text: '« La douleur sous-déclarée chez la PA est une souffrance évitable. »', author: 'ECPA / EN' }
  ];

  const CHIFFRES_CLES = [
    { value: 30, unit: '%', line: 'des personnes > 65 ans chutent chaque année', source: 'HAS' },
    { value: 15, unit: '%', line: 'des > 65 ans présentent une dépression non traitée', source: 'GDS' },
    { value: 5, unit: ' critères', line: 'de Fried pour le syndrome de fragilité (≥ 3 = fragile)', source: 'Fragilité' },
    { value: 0.8, unit: ' m/s', line: 'seuil de vitesse de marche pour fragilité (< 4,8 s / 4 m)', source: 'Fried' },
    { value: 24, unit: '/30', line: 'seuil MMS « normal » (corriger âge/scolarité)', source: 'Cognition' },
    { value: 5, unit: '/15', line: 'seuil GDS-15 suspect de dépression', source: 'Yesavage' },
    { value: 12, unit: '/28', line: 'Tinetti < 19 = risque élevé de chute', source: 'POMA' },
    { value: 17, unit: '/30', line: 'MNA < 17 = dénutrition avérée', source: 'Nutrition' },
    { value: 5, unit: ' méd.', line: 'définition polymédication (≥ 5 molécules/j)', source: 'Iatrogénie' },
    { value: 85, unit: ' ans', line: 'espérance de vie des femmes en France (≈ 2020)', source: 'Démographie' }
  ];

  const PIEGES_EXAM = [
    { trap: 'Confondre dépression et démence chez la PA', explain: 'La dépression peut mimer une démence (pseudo-démence) — dépister avec GDS-15 et tester la réversibilité avant de conclure à Alzheimer.' },
    { trap: 'Prescrire benzodiazépines pour un delirium', explain: 'Le delirium se traite par cause + mesures non médicamenteuses ; les BZD aggravent confusion et chutes. Halopéridol faible dose si agitation sévère.' },
    { trap: 'Utiliser le MMS seul sans correction', explain: 'Le MMS doit être corrigé selon âge et scolarité ; un score brut peut sous-estimer une pathologie cognitive.' },
    { trap: 'Oublier la cause réversible de confusion', explain: 'DIAPPERS : infection, médicaments, déshydratation, douleur, constipation — traiter AVANT d\'étiqueter « démence ».' },
    { trap: 'Considérer une chute comme « accident » sans bilan', explain: 'Bilan multifactoriel obligatoire : orthostatisme, vision, psychotropes, environnement, TUG/Tinetti.' },
    { trap: 'Arrêter tous les psychotropes d\'un coup', explain: 'Sevrage progressif ; arrêt brutal = delirium, insomnie, rebond anxieux.' },
    { trap: 'Sous-estimer la douleur chez le patient non communicant', explain: 'Utiliser ECPA (échelle comportementale), pas seulement l\'EVA verbale.' },
    { trap: 'GIR 5-6 = pas de prévention', explain: 'Même autonome : dépistage fragilité, chutes, nutrition (MNA-SF) en consultation gériatrique.' },
    { trap: 'IMAO + opioïdes ou SSRI = piège EDN', explain: 'Risque syndrome sérotoninergique / interactions majeures — revue médicamenteuse systématique.' },
    { trap: 'Albumine basse = toujours dénutrition', explain: 'Inflammation, déshydratation, syndrome néphrotique — interpréter avec CRP et contexte clinique.' }
  ];

  function loadSRS() {
    try { return JSON.parse(localStorage.getItem('bf_srs')) || {}; } catch { return {}; }
  }
  function saveSRS(srs) { localStorage.setItem('bf_srs', JSON.stringify(srs)); }
  function loadStats() {
    try { return JSON.parse(localStorage.getItem('bf_stats')) || { streak: 0, points: 0, lastDay: '', dailyDone: 0 }; } catch { return { streak: 0, points: 0, lastDay: '', dailyDone: 0 }; }
  }
  function saveStats(s) { localStorage.setItem('bf_stats', JSON.stringify(s)); }
  function loadFavs() {
    try { return JSON.parse(localStorage.getItem('bf_favs')) || []; } catch { return []; }
  }
  function saveFavs(f) { localStorage.setItem('bf_favs', JSON.stringify(f)); }

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function pickN(pool, n) {
    return shuffle(pool).slice(0, Math.min(n, pool.length));
  }

  function hashDay(seed) {
    const d = new Date().toDateString();
    let h = 0;
    const s = d + seed;
    for (let i = 0; i < s.length; i++) h = ((h << 5) - h) + s.charCodeAt(i) | 0;
    return Math.abs(h);
  }

  function getAllFlash() {
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

  function buildQuizOptions(correctAnswer, allFlash, fc) {
    const wrong = shuffle(allFlash.filter(f => f.id !== fc.id && f.answer))
      .slice(0, 12)
      .map(f => {
        const a = (f.answer || '').split(/[.·]/)[0].trim().slice(0, 80);
        return a.length > 8 ? a : null;
      })
      .filter(Boolean);
    const uniq = [...new Set(wrong)].slice(0, 3);
    while (uniq.length < 3) {
      uniq.push(['Aucune de ces réponses', 'Contre-indication absolue', 'Surveillance simple'][uniq.length]);
    }
    const correctShort = (correctAnswer || '').split(/[.·]/)[0].trim().slice(0, 90);
    const options = shuffle([
      { text: correctShort || correctAnswer, correct: true },
      ...uniq.map(t => ({ text: t, correct: false }))
    ]);
    return options.slice(0, 4);
  }

  function buildSpecialPools() {
    const allFlash = getAllFlash();
    const srs = loadSRS();
    const memos = typeof FLASHCARDS_MEMOS !== 'undefined' ? [...FLASHCARDS_MEMOS] : [];
    const dailyMemo = memos[hashDay('memo') % Math.max(1, memos.length)];

    const memoJour = memos.map((m, i) => ({
      type: 'memo_jour', id: 'mj-' + m.id,
      chapter: m.chapter, rang: m.rang,
      title: i === (hashDay('daily') % memos.length) ? 'MÉMO DU JOUR' : 'MÉMO FLASH',
      mnemonic: (m.answer || '').split(/[.·]/)[0].trim(),
      detail: m.answer,
      question: m.question,
      tags: m.tags || [],
      priority: m.id === dailyMemo?.id ? 2 : 1
    }));

    const annales = [];
    if (typeof ANNALES !== 'undefined') annales.push(...ANNALES);
    if (typeof ANNALES_EXPANDED !== 'undefined') annales.push(...ANNALES_EXPANDED);
    if (typeof ANNALES_ARCHIVE !== 'undefined') annales.push(...ANNALES_ARCHIVE);
    if (typeof CAS_INTERACTIFS !== 'undefined') annales.push(...CAS_INTERACTIFS);
    if (typeof SITUATIONS_EVC !== 'undefined') annales.push(...SITUATIONS_EVC);
    const casChoc = annales.map(a => ({
      type: 'cas_choc', id: 'cc-' + a.id,
      chapter: a.chapter, rang: a.difficulty || 'A',
      vignette: a.cas || a.case || a.title || '',
      diagnosis: a.correction || a.reponse || (a.questions && a.questions[0]?.a) || '',
      timer: 30,
      tags: ['Urgence', 'Cas choc']
    }));

    const quizFlash = allFlash.filter(f => (f.answer || '').length > 15).map(fc => ({
      type: 'quiz_flash', id: 'qf-' + fc.id,
      chapter: fc.chapter, rang: fc.rang,
      question: fc.question,
      options: buildQuizOptions(fc.answer, allFlash, fc),
      explanation: fc.answer,
      srsKey: fc.id,
      srs: srs[fc.id] || { ease: 2.5, interval: 0, nextReview: 0 },
      tags: fc.tags || []
    }));
    // Add quiz urgence cards
    if (typeof QUIZ_URGENCE !== 'undefined') {
      QUIZ_URGENCE.forEach(qu => {
        quizFlash.push({
          type: 'quiz_flash', id: 'qu-' + qu.id,
          chapter: '', rang: 'A',
          question: qu.question,
          options: buildQuizOptions(qu.reponse, allFlash, qu),
          explanation: qu.reponse,
          srsKey: null, srs: null,
          tags: [qu.categorie || 'Urgence']
        });
      });
    }

    const chiffreCle = CHIFFRES_CLES.map((c, i) => ({
      type: 'chiffre_cle', id: 'ck-' + i,
      chapter: '', rang: 'A',
      value: c.value, unit: c.unit, line: c.line, source: c.source,
      tags: ['Chiffre clé', c.source]
    }));

    const citation = CITATIONS.map((c, i) => ({
      type: 'citation', id: 'cit-' + i,
      chapter: '', rang: '',
      text: c.text, author: c.author,
      tags: ['Inspiration']
    }));

    const piegeExam = PIEGES_EXAM.map((p, i) => ({
      type: 'piege_exam', id: 'px-' + i,
      chapter: '', rang: 'A',
      trap: p.trap, explain: p.explain,
      tags: ['Piège EDN']
    }));
    // Add external pieges-exam.js
    if (typeof PIEGES_EXAM_EXT !== 'undefined') {
      PIEGES_EXAM_EXT.forEach(p => {
        piegeExam.push({
          type: 'piege_exam', id: 'pxe-' + p.id,
          chapter: p.chapitre || '', rang: 'A',
          trap: p.piege, explain: p.reponse + (p.conseil ? ' — ' + p.conseil : ''),
          tags: ['Piège EVC']
        });
      });
    }

    return { memoJour, casChoc, quizFlash, chiffreCle, citation, piegeExam, allFlash, srs };
  }

  function buildLegacyPools(allFlash, srs) {
    const legacy = [];
    allFlash.forEach(fc => {
      const srsEntry = srs[fc.id] || { ease: 2.5, interval: 0, nextReview: 0 };
      const now = Date.now();
      legacy.push({
        type: 'flash', id: 'fc-' + fc.id, chapter: fc.chapter, rang: fc.rang,
        question: fc.question, answer: fc.answer, tags: fc.tags || [],
        priority: srsEntry.nextReview <= now ? 1 : 0, srsKey: fc.id, srs: srsEntry
      });
    });
    if (typeof SYNTHESIS !== 'undefined') {
      SYNTHESIS.forEach((syn, i) => {
        legacy.push({
          type: 'synthesis', id: 'syn-' + i, chapter: '', rang: '',
          question: syn.title,
          answer: syn.sections ? syn.sections.map(s => s.title).join(' · ') : '',
          tags: [syn.title.split(' ')[0]], priority: 0, srsKey: null, srs: null
        });
      });
    }
    const annales = [];
    if (typeof ANNALES !== 'undefined') annales.push(...ANNALES);
    if (typeof ANNALES_EXPANDED !== 'undefined') annales.push(...ANNALES_EXPANDED);
    annales.forEach(a => {
      legacy.push({
        type: 'case', id: 'ann-' + a.id, chapter: a.chapter, rang: a.difficulty,
        question: a.cas || a.case || a.title || '',
        answer: a.correction || a.reponse || '',
        tags: ['Cas clinique'], priority: 0, srsKey: null, srs: null
      });
    });
    const allHas = [];
    if (typeof HAS_RECOMMANDATIONS !== 'undefined') allHas.push(...HAS_RECOMMANDATIONS);
    if (typeof HAS_EXPANDED !== 'undefined') allHas.push(...HAS_EXPANDED);
    allHas.forEach(h => {
      legacy.push({
        type: 'reco', id: h.id, chapter: h.chapter, rang: '',
        question: h.theme + (h.objectif ? ' — ' + h.objectif : ''),
        answer: h.recommandations ? h.recommandations.join(' · ') : (h.reco || ''),
        tags: ['HAS'], priority: 0, srsKey: null, srs: null
      });
    });
    return legacy;
  }

  function interleaveDeck(pools, targetSize = 90) {
    const counts = {};
    Object.keys(TYPE_RATIO).forEach(k => {
      counts[k] = Math.max(1, Math.round(targetSize * TYPE_RATIO[k]));
    });
    const buckets = {
      memo_jour: pickN(pools.memoJour, counts.memo_jour),
      cas_choc: pickN(pools.casChoc, counts.cas_choc),
      quiz_flash: pickN(pools.quizFlash, counts.quiz_flash),
      chiffre_cle: pickN(pools.chiffreCle, counts.chiffre_cle),
      citation: pickN(pools.citation, counts.citation),
      piege_exam: pickN(pools.piegeExam, counts.piege_exam),
      flash: [], synthesis: [], case: [], reco: []
    };
    const legacy = shuffle(buildLegacyPools(pools.allFlash, pools.srs));
    legacy.forEach(c => {
      if (buckets[c.type] && buckets[c.type].length < counts[c.type]) buckets[c.type].push(c);
    });
    const merged = [];
    Object.values(buckets).forEach(b => merged.push(...b));
    return shuffle(merged);
  }

  function buildDeck() {
    const today = new Date().toDateString();
    const stats = loadStats();
    if (stats.lastDay !== today) {
      const yesterday = new Date(Date.now() - 86400000).toDateString();
      if (stats.lastDay === yesterday) stats.streak = (stats.streak || 0) + 1;
      else if (stats.lastDay !== today) stats.streak = 1;
      stats.dailyDone = 0;
      stats.lastDay = today;
      saveStats(stats);
    }
    streak = stats.streak || 1;
    points = stats.points || 0;
    dailyDone = stats.dailyDone || 0;

    const pools = buildSpecialPools();
    return interleaveDeck(pools, 96);
  }

  function getChapterName(chId) {
    if (typeof APP_DATA === 'undefined' || !chId) return '';
    const ch = APP_DATA.chapters.find(c => c.id === chId);
    return ch ? ch.t : '';
  }

  function esc(s) {
    const d = document.createElement('div');
    d.textContent = s || '';
    return d.innerHTML;
  }

  function renderSlide(card, slideIdx) {
    const slide = document.createElement('div');
    slide.className = 'bf-slide';
    slide.dataset.type = card.type;
    slide.dataset.idx = slideIdx;
    slide.dataset.id = card.id || '';

    const renderers = {
      memo_jour: renderMemoJour,
      cas_choc: renderCasChoc,
      quiz_flash: renderQuizFlash,
      chiffre_cle: renderChiffreCle,
      citation: renderCitation,
      piege_exam: renderPiegeExam
    };

    if (renderers[card.type]) {
      slide.innerHTML = renderers[card.type](card, slideIdx);
    } else {
      slide.innerHTML = renderClassicCard(card, slideIdx);
    }

    bindSlideInteractions(slide, card, slideIdx);
    return slide;
  }

  function renderClassicCard(card, slideIdx) {
    const chName = getChapterName(card.chapter);
    const typeLabels = { flash: 'Flashcard', synthesis: 'Synthèse', case: 'Cas clinique', reco: 'HAS' };
    const typeIcons = { flash: '🎴', synthesis: '📋', case: '🏥', reco: '📋' };
    const rangBadge = card.rang
      ? `<span class="bf-rang bf-rang-${String(card.rang).toLowerCase()}">Rang ${card.rang}</span>` : '';
    const chTag = chName ? `<span class="bf-card-chapter">${esc(chName)}</span>` : '';
    const tagsHtml = (card.tags || []).slice(0, 3).map(t => `<span class="bf-tag">${esc(t)}</span>`).join('');

    return `
      <div class="bf-swipe-hint bf-swipe-hint-left">❤️ Favori</div>
      <div class="bf-swipe-hint bf-swipe-hint-right">↗ Partager</div>
      <div class="bf-swipe-overlay bf-swipe-fav-overlay">❤️</div>
      <div class="bf-swipe-overlay bf-swipe-share-overlay">Partager</div>
      <div class="bf-card-container bf-card-classic" id="bfCard-${slideIdx}">
        <div class="bf-card-inner">
          <div class="bf-card-front">
            <div class="bf-card-header">
              <span class="bf-card-type">${typeIcons[card.type] || '🎴'} ${typeLabels[card.type] || 'Carte'}</span>
              ${rangBadge}
            </div>
            <div class="bf-card-question">${esc(card.question)}</div>
            <div>${chTag}</div>
            <div class="bf-card-hint">Tape pour révéler</div>
          </div>
          <div class="bf-card-back">
            <div class="bf-card-header">
              <span class="bf-card-type">${typeIcons[card.type] || '🎴'} Réponse</span>
              ${rangBadge}
            </div>
            <div class="bf-card-answer">${esc(card.answer)}</div>
            <div class="bf-card-tags">${tagsHtml}</div>
          </div>
        </div>
      </div>`;
  }

  function renderMemoJour(card) {
    const isDaily = card.title === 'MÉMO DU JOUR';
    return `
      <div class="bf-swipe-hint bf-swipe-hint-left">❤️ Favori</div>
      <div class="bf-swipe-hint bf-swipe-hint-right">↗ Partager</div>
      <div class="bf-swipe-overlay bf-swipe-fav-overlay">❤️</div>
      <div class="bf-swipe-overlay bf-swipe-share-overlay">Partager</div>
      <article class="bf-panel bf-panel-memo" data-revealed="0">
        <header class="bf-memo-badge ${isDaily ? 'bf-memo-daily' : ''}">${esc(card.title)}</header>
        <p class="bf-memo-prompt">${esc(card.question)}</p>
        <button type="button" class="bf-memo-reveal-btn">Révéler le mnémotechnique</button>
        <div class="bf-memo-glow-wrap">
          <p class="bf-memo-glow-text">${esc(card.mnemonic)}</p>
        </div>
        <p class="bf-memo-detail">${esc(card.detail)}</p>
      </article>`;
  }

  function renderCasChoc(card, slideIdx) {
    return `
      <div class="bf-swipe-hint bf-swipe-hint-left">❤️ Favori</div>
      <div class="bf-swipe-hint bf-swipe-hint-right">↗ Partager</div>
      <div class="bf-swipe-overlay bf-swipe-fav-overlay">❤️</div>
      <div class="bf-swipe-overlay bf-swipe-share-overlay">Partager</div>
      <article class="bf-panel bf-panel-choc" data-slide="${slideIdx}">
        <header class="bf-choc-header">
          <span class="bf-choc-label">⚡ CAS CHOC</span>
          <div class="bf-choc-timer" data-seconds="${card.timer}">
            <svg class="bf-choc-ring" viewBox="0 0 36 36"><circle cx="18" cy="18" r="16" class="bf-choc-ring-bg"/><circle cx="18" cy="18" r="16" class="bf-choc-ring-fg"/></svg>
            <span class="bf-choc-time">${card.timer}</span>
          </div>
        </header>
        <p class="bf-choc-sub">Tu as <strong>${card.timer} secondes</strong> pour poser ton diagnostic</p>
        <div class="bf-choc-vignette">${esc(card.vignette)}</div>
        <button type="button" class="bf-choc-reveal">Voir le diagnostic</button>
        <div class="bf-choc-answer hidden">${esc(card.diagnosis)}</div>
      </article>`;
  }

  function renderQuizFlash(card) {
    const opts = (card.options || []).map((o, i) =>
      `<button type="button" class="bf-quiz-opt" data-correct="${o.correct ? '1' : '0'}" data-idx="${i}">
        <span class="bf-quiz-letter">${['A', 'B', 'C', 'D'][i]}</span>
        <span class="bf-quiz-opt-text">${esc(o.text)}</span>
        <span class="bf-quiz-feedback"></span>
      </button>`
    ).join('');
    return `
      <div class="bf-swipe-hint bf-swipe-hint-left">❤️ Favori</div>
      <div class="bf-swipe-hint bf-swipe-hint-right">↗ Partager</div>
      <div class="bf-swipe-overlay bf-swipe-fav-overlay">❤️</div>
      <div class="bf-swipe-overlay bf-swipe-share-overlay">Partager</div>
      <article class="bf-panel bf-panel-quiz">
        <header class="bf-quiz-badge">⚡ QUIZ FLASH</header>
        <h2 class="bf-quiz-q">${esc(card.question)}</h2>
        <div class="bf-quiz-options">${opts}</div>
        <p class="bf-quiz-expl hidden">${esc(card.explanation)}</p>
      </article>`;
  }

  function renderChiffreCle(card) {
    const displayVal = Number.isInteger(card.value) ? card.value : card.value.toFixed(1).replace('.', ',');
    return `
      <div class="bf-swipe-hint bf-swipe-hint-left">❤️ Favori</div>
      <div class="bf-swipe-hint bf-swipe-hint-right">↗ Partager</div>
      <div class="bf-swipe-overlay bf-swipe-fav-overlay">❤️</div>
      <div class="bf-swipe-overlay bf-swipe-share-overlay">Partager</div>
      <article class="bf-panel bf-panel-stat">
        <header class="bf-stat-badge">📊 CHIFFRE CLÉ</header>
        <div class="bf-stat-number-wrap">
          <span class="bf-stat-number" data-target="${card.value}">${displayVal}</span>
          <span class="bf-stat-unit">${esc(card.unit)}</span>
        </div>
        <p class="bf-stat-line">${esc(card.line)}</p>
        <span class="bf-stat-source">${esc(card.source)}</span>
      </article>`;
  }

  function renderCitation(card) {
    return `
      <div class="bf-swipe-hint bf-swipe-hint-left">❤️ Favori</div>
      <div class="bf-swipe-hint bf-swipe-hint-right">↗ Partager</div>
      <div class="bf-swipe-overlay bf-swipe-fav-overlay">❤️</div>
      <div class="bf-swipe-overlay bf-swipe-share-overlay">Partager</div>
      <article class="bf-panel bf-panel-quote">
        <div class="bf-quote-mark">"</div>
        <blockquote class="bf-quote-text">${esc(card.text)}</blockquote>
        <cite class="bf-quote-author">— ${esc(card.author)}</cite>
        <span class="bf-quote-badge">CITATION</span>
      </article>`;
  }

  function renderPiegeExam(card) {
    return `
      <div class="bf-swipe-hint bf-swipe-hint-left">❤️ Favori</div>
      <div class="bf-swipe-hint bf-swipe-hint-right">↗ Partager</div>
      <div class="bf-swipe-overlay bf-swipe-fav-overlay">❤️</div>
      <div class="bf-swipe-overlay bf-swipe-share-overlay">Partager</div>
      <article class="bf-panel bf-panel-trap">
        <header class="bf-trap-badge">🪤 PIÈGE D'EXAM</header>
        <div class="bf-trap-wrong">
          <span class="bf-trap-x">✕</span>
          <p>${esc(card.trap)}</p>
        </div>
        <button type="button" class="bf-trap-reveal">Pourquoi c'est faux ?</button>
        <div class="bf-trap-right hidden">
          <span class="bf-trap-check">✓</span>
          <p>${esc(card.explain)}</p>
        </div>
      </article>`;
  }

  function bindSlideInteractions(slide, card, slideIdx) {
    const classic = slide.querySelector('.bf-card-container');
    if (classic) {
      classic.addEventListener('click', (e) => {
        if (e.target.closest('.bf-side-btn')) return;
        classic.classList.toggle('flipped');
      });
    }

    const memoBtn = slide.querySelector('.bf-memo-reveal-btn');
    if (memoBtn) {
      memoBtn.addEventListener('click', () => {
        const panel = slide.querySelector('.bf-panel-memo');
        panel.dataset.revealed = '1';
        panel.classList.add('revealed');
        memoBtn.style.display = 'none';
      });
    }

    const chocReveal = slide.querySelector('.bf-choc-reveal');
    if (chocReveal) {
      chocReveal.addEventListener('click', () => {
        slide.querySelector('.bf-choc-answer')?.classList.remove('hidden');
        chocReveal.style.display = 'none';
        stopCasChocTimer(slideIdx);
      });
    }

    const trapBtn = slide.querySelector('.bf-trap-reveal');
    if (trapBtn) {
      trapBtn.addEventListener('click', () => {
        slide.querySelector('.bf-trap-right')?.classList.remove('hidden');
        trapBtn.style.display = 'none';
      });
    }

    slide.querySelectorAll('.bf-quiz-opt').forEach(btn => {
      btn.addEventListener('click', () => {
        if (slide.dataset.quizDone === '1') return;
        const correct = btn.dataset.correct === '1';
        btn.classList.add(correct ? 'bf-quiz-correct' : 'bf-quiz-wrong');
        const fb = btn.querySelector('.bf-quiz-feedback');
        if (fb) fb.textContent = correct ? '✓' : '✕';
        slide.querySelectorAll('.bf-quiz-opt').forEach(b => {
          if (b.dataset.correct === '1') b.classList.add('bf-quiz-correct');
          b.disabled = true;
        });
        slide.querySelector('.bf-quiz-expl')?.classList.remove('hidden');
        slide.dataset.quizDone = '1';
        if (correct) {
          if (card.srsKey) updateSRS(card, true);
          registerCorrect(true);
        } else {
          if (card.srsKey) updateSRS(card, false);
          combo = 0;
          quizCombo = 0;
        }
      });
    });

    setupSwipe(slide, slideIdx);
  }

  function setupSwipe(slide, slideIdx) {
    let startX = 0, startY = 0, active = false;
    const TH = 70;

    const onStart = (x, y) => {
      startX = x; startY = y; active = true;
      slide.classList.add('bf-swiping');
    };
    const onMove = (x, y) => {
      if (!active) return;
      const dx = x - startX;
      const dy = y - startY;
      if (Math.abs(dy) > Math.abs(dx)) return;
      slide.style.transform = `translateX(${dx * 0.35}px) rotate(${dx * 0.02}deg)`;
      const favOv = slide.querySelector('.bf-swipe-fav-overlay');
      const shareOv = slide.querySelector('.bf-swipe-share-overlay');
      if (dx < -40 && favOv) favOv.style.opacity = Math.min(1, (Math.abs(dx) - 40) / 80);
      if (dx > 40 && shareOv) shareOv.style.opacity = Math.min(1, (dx - 40) / 80);
    };
    const onEnd = (x) => {
      if (!active) return;
      active = false;
      slide.classList.remove('bf-swiping');
      slide.style.transform = '';
      slide.querySelectorAll('.bf-swipe-overlay').forEach(o => { o.style.opacity = 0; });
      const dx = x - startX;
      if (dx < -TH) {
        slide.classList.add('bf-swipe-out-left');
        setTimeout(() => { actionFavForIdx(slideIdx); slide.classList.remove('bf-swipe-out-left'); }, 280);
      } else if (dx > TH) {
        slide.classList.add('bf-swipe-out-right');
        setTimeout(() => { shareCard(slideIdx); slide.classList.remove('bf-swipe-out-right'); }, 280);
      }
    };

    slide.addEventListener('touchstart', e => {
      const t = e.touches[0];
      onStart(t.clientX, t.clientY);
    }, { passive: true });
    slide.addEventListener('touchmove', e => {
      const t = e.touches[0];
      onMove(t.clientX, t.clientY);
    }, { passive: true });
    slide.addEventListener('touchend', e => {
      const t = e.changedTouches[0];
      onEnd(t.clientX);
    });

    slide.addEventListener('mousedown', e => onStart(e.clientX, e.clientY));
    slide.addEventListener('mousemove', e => { if (e.buttons) onMove(e.clientX, e.clientY); });
    slide.addEventListener('mouseup', e => onEnd(e.clientX));
    slide.addEventListener('mouseleave', e => { if (active) onEnd(e.clientX); });
  }

  function startCasChocTimer(slideIdx, seconds) {
    stopCasChocTimer(slideIdx);
    let left = seconds;
    const tick = () => {
      const feed = document.getElementById('bfFeed');
      const slide = feed?.querySelector(`.bf-slide[data-idx="${slideIdx}"]`);
      if (!slide) return;
      const el = slide.querySelector('.bf-choc-time');
      const ring = slide.querySelector('.bf-choc-ring-fg');
      if (el) el.textContent = left;
      if (ring) {
        const pct = left / seconds;
        ring.style.strokeDashoffset = `${(1 - pct) * 100}`;
      }
      if (left <= 0) {
        slide.querySelector('.bf-choc-vignette')?.classList.add('bf-choc-pulse');
        return;
      }
      left--;
      activeTimers.set(slideIdx, setTimeout(tick, 1000));
    };
    tick();
  }

  function stopCasChocTimer(slideIdx) {
    const t = activeTimers.get(slideIdx);
    if (t) clearTimeout(t);
    activeTimers.delete(slideIdx);
  }

  function animateStatNumber(slide) {
    const num = slide.querySelector('.bf-stat-number');
    if (!num || num.dataset.animated === '1') return;
    num.dataset.animated = '1';
    const target = parseFloat(num.dataset.target);
    const isFloat = !Number.isInteger(target);
    let start = 0;
    const dur = 900;
    const t0 = performance.now();
    const step = (now) => {
      const p = Math.min(1, (now - t0) / dur);
      const ease = 1 - Math.pow(1 - p, 3);
      const v = target * ease;
      num.textContent = isFloat ? v.toFixed(1).replace('.', ',') : Math.round(v);
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  function renderSlides() {
    const feed = document.getElementById('bfFeed');
    if (!feed) return;
    feed.innerHTML = '';
    const end = Math.min(idx + BATCH_SIZE, deck.length);
    for (let i = idx; i < end; i++) {
      const slide = renderSlide(deck[i], i);
      if (i === idx) slide.classList.add('bf-slide-enter');
      feed.appendChild(slide);
    }
    renderedRange = { start: idx, end: end };
    setupObserver();
    updateHeader();
  }

  function setupObserver() {
    if (observer) observer.disconnect();
    const feed = document.getElementById('bfFeed');
    if (!feed) return;

    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.55) {
          const slideIdx = parseInt(entry.target.dataset.idx, 10);
          if (!isNaN(slideIdx) && slideIdx !== idx) {
            stopCasChocTimer(idx);
            idx = slideIdx;
            updateHeader();
            if (idx >= renderedRange.end - 2) loadMoreSlides();
          }
          const type = entry.target.dataset.type;
          if (type === 'cas_choc') {
            const card = deck[slideIdx];
            if (card) startCasChocTimer(slideIdx, card.timer || 30);
          }
          if (type === 'chiffre_cle') animateStatNumber(entry.target);
        }
      });
    }, { root: feed, threshold: [0.55, 0.75] });

    feed.querySelectorAll('.bf-slide').forEach(slide => observer.observe(slide));
  }

  function loadMoreSlides() {
    const feed = document.getElementById('bfFeed');
    if (!feed) return;
    const end = Math.min(renderedRange.end + BATCH_SIZE, deck.length);
    for (let i = renderedRange.end; i < end; i++) {
      const slide = renderSlide(deck[i], i);
      feed.appendChild(slide);
      observer.observe(slide);
    }
    renderedRange.end = end;
  }

  function updateHeader() {
    const counter = document.getElementById('bfCounter');
    const progressBar = document.getElementById('bfProgress');
    const pointsEl = document.getElementById('bfPoints');
    const streakEl = document.getElementById('bfStreak');
    const comboEl = document.getElementById('bfComboBadge');

    if (counter) counter.textContent = `${Math.min(dailyDone + 1, DAILY_GOAL)} / ${DAILY_GOAL}`;
    if (progressBar) progressBar.style.width = `${Math.min(100, (dailyDone / DAILY_GOAL) * 100)}%`;
    if (pointsEl) pointsEl.textContent = `${points} pts`;
    if (streakEl) streakEl.textContent = `🔥 ${streak}`;
    if (comboEl) {
      comboEl.textContent = combo >= 2 ? `x${combo}` : '';
      comboEl.classList.toggle('visible', combo >= 2);
    }
  }

  function registerCorrect(fromQuiz) {
    combo++;
    if (fromQuiz) quizCombo++;
    const bonus = 10 + Math.min(combo * 2, 24);
    points += bonus;
    dailyDone++;
    updateStats();
    showCombo();
    if (dailyDone === DAILY_GOAL) checkDailyGoal();
    else if (dailyDone > DAILY_GOAL && dailyDone === DAILY_GOAL + 1) { /* already celebrated */ }
    updateHeader();
  }

  function actionKnow() {
    const card = deck[idx];
    if (!card) return;
    if (card.type === 'quiz_flash') {
      showToast('Réponds au quiz sur la carte');
      return;
    }
    if (card.srsKey) updateSRS(card, true);
    registerCorrect(false);
    showToast(combo >= COMBO_BONUS_AT ? `🔥 COMBO x${combo} !` : `+${10 + Math.min(combo * 2, 24)} pts`);
    scrollToNext();
  }

  function actionDontKnow() {
    const card = deck[idx];
    if (!card) return;
    if (card.srsKey) updateSRS(card, false);
    combo = 0;
    quizCombo = 0;
    const removed = deck.splice(idx, 1)[0];
    deck.splice(Math.min(idx + 3, deck.length), 0, removed);
    updateStats();
    updateHeader();
    showToast('↩️ Revu dans 3 cartes');
    scrollToNext();
  }

  function actionFavForIdx(slideIdx) {
    const card = deck[slideIdx];
    if (!card) return;
    const favs = loadFavs();
    if (!favs.includes(card.id)) {
      favs.push(card.id);
      saveFavs(favs);
    }
    if (card.chapter && typeof quickBm === 'function') quickBm(card.chapter);
    points += 5;
    updateStats();
    updateHeader();
    showToast('❤️ Favori');
  }

  function actionFav() {
    actionFavForIdx(idx);
  }

  function scrollToNext() {
    const feed = document.getElementById('bfFeed');
    if (!feed) return;
    const nextSlide = feed.querySelector(`.bf-slide[data-idx="${idx + 1}"]`);
    if (nextSlide) nextSlide.scrollIntoView({ behavior: 'smooth', block: 'start' });
    else {
      idx++;
      if (idx < deck.length) renderSlides();
    }
  }

  function showCombo() {
    if (combo < 3) return;
    const feed = document.getElementById('bfFeed');
    if (!feed) return;
    let comboEl = feed.querySelector('.bf-combo-float');
    if (!comboEl) {
      comboEl = document.createElement('div');
      comboEl.className = 'bf-combo-float';
      feed.appendChild(comboEl);
    }
    comboEl.textContent = combo >= COMBO_BONUS_AT ? `🔥 MEGA x${combo}` : `COMBO x${combo}`;
    comboEl.classList.remove('bf-combo-mega');
    if (combo >= COMBO_BONUS_AT) comboEl.classList.add('bf-combo-mega');
    comboEl.classList.add('show');
    setTimeout(() => comboEl.classList.remove('show'), combo >= COMBO_BONUS_AT ? 1400 : 900);
  }

  function updateSRS(card, correct) {
    const srs = loadSRS();
    const entry = srs[card.srsKey] || { ease: 2.5, interval: 0, nextReview: 0 };
    if (correct) {
      entry.interval = entry.interval === 0 ? 1 : Math.round(entry.interval * entry.ease);
      entry.ease = Math.max(1.3, entry.ease + 0.1);
    } else {
      entry.interval = 0;
      entry.ease = Math.max(1.3, entry.ease - 0.2);
    }
    entry.nextReview = Date.now() + entry.interval * 86400000;
    srs[card.srsKey] = entry;
    saveSRS(srs);
  }

  function updateStats() {
    const stats = loadStats();
    stats.points = points;
    stats.dailyDone = dailyDone;
    stats.streak = streak;
    stats.lastDay = new Date().toDateString();
    saveStats(stats);
  }

  function showToast(msg) {
    const t = document.getElementById('bfToast');
    if (!t) return;
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2200);
  }

  function shareCard(slideIdx) {
    const card = deck[slideIdx];
    if (!card) return;
    let text = '';
    if (card.type === 'citation') text = card.text + '\n— ' + card.author;
    else if (card.type === 'chiffre_cle') text = `${card.value}${card.unit} — ${card.line}`;
    else if (card.type === 'piege_exam') text = `Piège: ${card.trap}\n\n${card.explain}`;
    else if (card.type === 'memo_jour') text = `${card.question}\n\n${card.mnemonic}`;
    else if (card.type === 'cas_choc') text = `${card.vignette}\n\n→ ${card.diagnosis}`;
    else if (card.type === 'quiz_flash') text = `${card.question}\n\n${card.explanation}`;
    else text = `${card.question || card.trap || ''}\n\n${card.answer || card.explain || card.detail || ''}`;
    const payload = text + '\n\n— Gériatrie App BrainFeed';
    if (navigator.share) {
      navigator.share({ title: 'BrainFeed Gériatrie', text: payload }).catch(() => {});
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(payload).then(() => showToast('📋 Copié pour partage'));
    }
  }

  function onKeyDown(e) {
    if (!document.getElementById('vFeed')?.classList.contains('active')) return;
    if (e.key === 'ArrowUp' || e.key === 'k') actionKnow();
    else if (e.key === 'ArrowDown' || e.key === 'j') actionDontKnow();
    else if (e.key === 'f') actionFav();
    else if (e.key === 'ArrowLeft') actionFav();
    else if (e.key === 'ArrowRight') shareCard(idx);
    else if (e.key === ' ') {
      e.preventDefault();
      document.getElementById(`bfCard-${idx}`)?.classList.toggle('flipped');
    }
  }

  function launchConfetti() {
    const canvas = document.getElementById('bfConfetti');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const colors = ['#22D3EE', '#34D399', '#FBBF24', '#F472B6', '#A78BFA', '#FB7185'];
    const pieces = Array.from({ length: 120 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: 4 + Math.random() * 6,
      c: colors[Math.floor(Math.random() * colors.length)],
      vx: -2 + Math.random() * 4,
      vy: 2 + Math.random() * 5,
      rot: Math.random() * 360,
      vr: -8 + Math.random() * 16
    }));
    let frame = 0;
    const maxFrames = 180;
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pieces.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vr;
        if (p.y > canvas.height) p.y = -10;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rot * Math.PI) / 180);
        ctx.fillStyle = p.c;
        ctx.fillRect(-p.r / 2, -p.r / 2, p.r, p.r * 1.4);
        ctx.restore();
      });
      frame++;
      if (frame < maxFrames) requestAnimationFrame(draw);
      else ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    draw();
  }

  function checkDailyGoal() {
    if (dailyDone >= DAILY_GOAL) showBfCelebration();
  }

  function showBfCelebration() {
    let cel = document.querySelector('.bf-celebration');
    if (!cel) {
      cel = document.createElement('div');
      cel.className = 'bf-celebration';
      cel.innerHTML = `
        <canvas id="bfConfetti" class="bf-confetti-canvas"></canvas>
        <div class="bf-celebration-inner">
          <h2>🏆 Objectif du jour !</h2>
          <p>${DAILY_GOAL} cartes — tu assures.</p>
          <p class="bf-celebration-sub">Tape pour continuer le feed</p>
        </div>`;
      cel.onclick = () => cel.classList.remove('show');
      document.body.appendChild(cel);
    }
    cel.classList.add('show');
    requestAnimationFrame(() => launchConfetti());
    points += 50;
    updateStats();
    updateHeader();
  }

  function init() {
    deck = buildDeck();
    idx = 0;
    combo = 0;
    quizCombo = 0;
    renderSlides();
    document.addEventListener('keydown', onKeyDown);

    const feed = document.getElementById('bfFeed');
    if (feed) {
      feed.addEventListener('scroll', () => {
        const scrollBottom = feed.scrollHeight - feed.scrollTop - feed.clientHeight;
        if (scrollBottom < feed.clientHeight && renderedRange.end < deck.length) loadMoreSlides();
      }, { passive: true });
    }

    let comboBadge = document.getElementById('bfComboBadge');
    if (!comboBadge) {
      const bar = document.querySelector('.bf-stats-bar');
      if (bar) {
        comboBadge = document.createElement('span');
        comboBadge.id = 'bfComboBadge';
        comboBadge.className = 'bf-combo-header';
        bar.appendChild(comboBadge);
      }
    }
  }

  function destroy() {
    if (observer) observer.disconnect();
    activeTimers.forEach(t => clearTimeout(t));
    activeTimers.clear();
    document.removeEventListener('keydown', onKeyDown);
  }

  return { init, destroy, actionKnow, actionDontKnow, actionFav, shareCard, renderSlides };
})();