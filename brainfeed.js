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
  const COMBO_CONFETTI_AT = 10;
  const ACHIEVEMENTS = [
    { id: 'first_card', icon: '🎯', title: 'Première carte', desc: '1 carte validée', check: (s) => (s.totalCards || 0) >= 1 },
    { id: 'streak_3', icon: '🔥', title: 'En feu', desc: '3 jours de suite', check: (s) => (s.streak || 0) >= 3 },
    { id: 'streak_10', icon: '💥', title: 'Inferno', desc: '10 jours de suite', check: (s) => (s.streak || 0) >= 10 },
    { id: 'cards_50', icon: '📚', title: 'Demi-cent', desc: '50 cartes au total', check: (s) => (s.totalCards || 0) >= 50 },
    { id: 'cards_100', icon: '🏅', title: 'Centurion', desc: '100 cartes au total', check: (s) => (s.totalCards || 0) >= 100 },
    { id: 'combo_10', icon: '⚡', title: 'Combo x10', desc: '10 bonnes réponses d\'affilée', check: (s) => s._sessionCombo10 },
    { id: 'daily_goal', icon: '🏆', title: 'Objectif jour', desc: '50 cartes aujourd\'hui', check: (s) => (s.dailyDone || 0) >= DAILY_GOAL }
  ];
  let observer = null;
  let audioCtx = null;
  let sessionCombo10Unlocked = false;
  let renderedRange = { start: 0, end: 0 };
  const BATCH_SIZE = 6;
  let activeTimers = new Map();

  const TYPE_RATIO = {
    memo_jour: 0.18,
    cas_choc: 0.18,
    quiz_flash: 0.20,
    chiffre_cle: 0.14,
    citation: 0.05,
    piege_exam: 0.15,
    visual: 0.10,
    flash: 0.05,
    synthesis: 0.03,
    case: 0.02,
    reco: 0.05
  };

  const CITATIONS = [
    { text: '« Chez le sujet âgé, tout symptôme atypique doit faire évoquer une infection. »', author: 'Gériatrie clinique' },
    { text: '« Une chute n\'est jamais un accident : c\'est toujours un symptôme. »', author: 'HAS' },
    { text: '« Le bon médicament, à la bonne dose, pour le bon patient, au bon moment. »', author: 'Appropriation gériatrique' },
    { text: '« La polymédication est le plus fréquent des facteurs de risque iatrogène. »', author: 'SFGG' },
    { text: '« Le delirium, urgence médicale masquée, a toujours une cause. »', author: 'CAM' },
    { text: '« Dépister la dépression, c\'est prévenir la démence. »', author: 'GDS-15' },
    { text: '« La prévention de la perte d\'autonomie passe par la préservation de l\'activité physique. »', author: 'PAQS' },
    { text: '« La nutrition est un médicament : il faut la prescrire et la réévaluer. »', author: 'MNA' }
  ];

  const CHIFFRES_CLES = [
    { value: 30, unit: '%', line: '... % des personnes de 65 ans et plus chutent au moins une fois par an', source: 'HAS' },
    { value: 15, unit: '%', line: '... % des personnes de 65 ans et plus ont une dépression non diagnostiquée', source: 'GDS-15' },
    { value: 5, unit: ' critères', line: 'Nombre de critères de Fried : au moins ... critères = syndrome de fragilité', source: 'Fried' },
    { value: 0.8, unit: ' m/s', line: 'Seuil de vitesse de marche en dessous duquel on suspecte la fragilité : ... m/s', source: 'Fried' },
    { value: 10, unit: ' s', line: 'Timed Up and Go : plus de ... secondes = risque de chute élevé', source: 'TUG' },
    { value: 24, unit: '/30', line: 'Seuil MMSE interprété comme « normal » chez un sujet jeune instruit : ... /30', source: 'MMSE' },
    { value: 5, unit: '/15', line: 'Seuil GDS-15 à partir duquel on dépiste une dépression : ... /15', source: 'Yesavage' },
    { value: 19, unit: '/28', line: 'Score Tinetti (POMA) inférieur à ... = risque élevé de chute', source: 'Tinetti' },
    { value: 23.5, unit: '/30', line: 'Seuil MNA entre dénutrition et risque de dénutrition : ... /30', source: 'MNA' },
    { value: 5, unit: ' médicaments', line: 'À partir de ... médicaments quotidiens, on parle de polymédication', source: 'SFGG' },
    { value: 30, unit: '%', line: 'Environ ... % des personnes de 65 ans et plus présentent une polymédication', source: 'Institut de la longévité' },
    { value: 50, unit: '%', line: '... % des personnes de 65 ans et plus ont au moins deux affections chroniques', source: 'Comorbidité' },
    { value: 20, unit: '%', line: 'Environ ... % des personnes de 85 ans et plus ont un trouble cognitif déclaré', source: 'Démographie' },
    { value: 6, unit: ' mois', line: 'Perte de poids significative si ≥ 5 % en ... mois ou ≥ 10 % en 6 mois', source: 'Dénutrition' },
    { value: 30, unit: ' mg/j', line: 'Apport protéique recommandé : 1–1,2 g/kg/j, soit environ ... g/j pour un sujet de 60 kg', source: 'Nutrition' }
  ];

  const PIEGES_EXAM = [
    { trap: 'Dépression vs démence', explain: 'Une dépression peut imiter une démence (pseudo-démence). Utiliser GDS-15 et rechercher une réversibilité avant d\'attribuer un diagnostic de démence.' },
    { trap: 'Delirium = agitation seulement', explain: 'Le delirium peut être hypoactif (apathie, somnolence) dans 50 % des cas. Le CAM reste l\'outil de référence.' },
    { trap: 'Benzodiazépine dans le delirium', explain: 'Les BZD aggravent confusion et chutes. Privilégier la cause, l\'environnement, et les antipsychotiques de façon très brève si agitation dangereuse.' },
    { trap: 'MMS sans correction âge/éducation', explain: 'Le MMSE brut n\'est pas interprétable seul. Toujours pondérer selon l\'âge, la scolarité et le niveau socioculturel.' },
    { trap: 'Chute = accident', explain: 'Toute chute mérite un bilan multifactoriel : orthostatisme, vision, psychotropes, démarche (TUG/Tinetti), environnement.' },
    { trap: 'Douleur sous-estimée', explain: 'En cas d\'aphasie ou de trouble cognitif, utiliser l\'ECPA (échelle comportementale) plutôt que l\'EVA verbale.' },
    { trap: 'Arrêt brutal des psychotropes', explain: 'Le sevrage doit être progressif. L\'arrêt brutal peut déclencher delirium, insomnie sévère, agitation ou convulsions.' },
    { trap: 'Albumine basse = dénutrition', explain: 'L\'albuminémie est un marqueur d\'inflammation et d\'hydratation. Une hypoalbuminémie n\'est pas un diagnostic de dénutrition à elle seule.' },
    { trap: 'Polymédication = seulement ≥ 5 médicaments', explain: 'Au-delà de 5 médicaments, le risque d\'interactions et d\'effets indésirables augmente exponentiellement. Penser déprescription.' },
    { trap: 'Autonomie préservée = pas de bilan gériatrique', explain: 'Même un GIR 5-6 nécessite un dépistage de la fragilité, du risque de chute, de la dénutrition et de la dépression.' },
    { trap: 'Sédation profonde = euthanasie', explain: 'La SPCMD vise à soulager une souffrance réfractaire. Elle ne vise pas à provoquer la mort.' },
    { trap: 'AOMI = aspirine systématique', explain: 'Le bénéfice de l\'aspirine secondaire chez le très grand âge doit être pondéré par le risque hémorragique. La balance bénéfice/risque est individuelle.' }
  ];

  function loadSRS() {
    try { return JSON.parse(localStorage.getItem('bf_srs')) || {}; } catch { return {}; }
  }
  function saveSRS(srs) { localStorage.setItem('bf_srs', JSON.stringify(srs)); }
  function loadStats() {
    try {
      return JSON.parse(localStorage.getItem('bf_stats')) || { streak: 0, points: 0, lastDay: '', dailyDone: 0, totalCards: 0 };
    } catch {
      return { streak: 0, points: 0, lastDay: '', dailyDone: 0, totalCards: 0 };
    }
  }
  function saveStats(s) { localStorage.setItem('bf_stats', JSON.stringify(s)); }
  function loadAchievements() {
    try { return JSON.parse(localStorage.getItem('bf_achievements')) || []; } catch { return []; }
  }
  function saveAchievements(ids) { localStorage.setItem('bf_achievements', JSON.stringify(ids)); }

  function playSound(kind) {
    try {
      if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      if (audioCtx.state === 'suspended') audioCtx.resume();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      const t = audioCtx.currentTime;
      if (kind === 'ding') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, t);
        osc.frequency.exponentialRampToValueAtTime(1320, t + 0.08);
        gain.gain.setValueAtTime(0.12, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.25);
        osc.start(t);
        osc.stop(t + 0.25);
      } else if (kind === 'buzz') {
        osc.type = 'square';
        osc.frequency.setValueAtTime(180, t);
        osc.frequency.exponentialRampToValueAtTime(90, t + 0.15);
        gain.gain.setValueAtTime(0.06, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.2);
        osc.start(t);
        osc.stop(t + 0.2);
      }
    } catch (_) { /* placeholder — no audio hardware */ }
  }
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
    if (typeof REVISION_FLASHCARDS !== 'undefined') all.push(...REVISION_FLASHCARDS);
    if (typeof EVC_FLASHCARDS !== 'undefined') all.push(...EVC_FLASHCARDS);
    if (typeof MEGA_FLASHCARDS_2 !== 'undefined') all.push(...MEGA_FLASHCARDS_2);
    if (typeof MEGA_FLASHCARDS_3 !== 'undefined') all.push(...MEGA_FLASHCARDS_3);
    if (typeof MEGA_FLASHCARDS_4 !== 'undefined') all.push(...MEGA_FLASHCARDS_4);
    if (typeof MEGA_FLASHCARDS_5 !== 'undefined') all.push(...MEGA_FLASHCARDS_5);
    if (typeof MEGA_FLASHCARDS_6 !== 'undefined') all.push(...MEGA_FLASHCARDS_6);
    if (typeof MEGA_FLASHCARDS_7 !== 'undefined') all.push(...MEGA_FLASHCARDS_7);
    if (typeof MEGA_FLASHCARDS_8 !== 'undefined') all.push(...MEGA_FLASHCARDS_8);
    if (typeof MEGA_FLASHCARDS_9 !== 'undefined') all.push(...MEGA_FLASHCARDS_9);
    if (typeof MEGA_FLASHCARDS_10 !== 'undefined') all.push(...MEGA_FLASHCARDS_10);
    return all;
  }

  function buildQuizOptions(correctAnswer, allFlash, fc) {
    const cleanAnswer = (ans) => {
      let a = (ans || '').trim();
      a = a.replace(/^[•\-–*]\s*/, '');
      a = a.replace(/^\d{1,2}(?:\.\s+|\s*[)-]\s*)/, '');
      a = a.split(/\.(?:\s+|$)/)[0].trim();
      if (a.length > 90) {
        const idx = a.lastIndexOf(' ', 87);
        a = (idx > 10 ? a.substring(0, idx) : a.substring(0, 87)) + '...';
      }
      return a;
    };

    const correctClean = cleanAnswer(correctAnswer);

    // 1. Percentage
    const pctMatch = correctClean.match(/^(\d+(?:,\d+)?)\s*%/);
    if (pctMatch) {
      const val = parseFloat(pctMatch[1].replace(',', '.'));
      const offsets = [-15, 15, 30, -10, 10, 20];
      const uniqVals = new Set();
      while (uniqVals.size < 3 && offsets.length > 0) {
        const offset = offsets.shift();
        const n = Math.round(val + offset);
        if (n > 0 && n <= 100 && n !== Math.round(val)) uniqVals.add(n);
      }
      const options = [correctClean];
      uniqVals.forEach(v => options.push(`${v} %`));
      while (options.length < 4) {
        options.push(`${Math.round(val * 1.5)} %`);
      }
      return shuffle(options.map((t, i) => ({ text: t, correct: i === 0 })));
    }

    // 2. Score (e.g. 24/30)
    const scoreMatch = correctClean.match(/^(\d+)\s*\/\s*(\d+)$/);
    if (scoreMatch) {
      const num = parseInt(scoreMatch[1]);
      const den = parseInt(scoreMatch[2]);
      const uniqNums = new Set();
      const offsets = [-4, 4, -8, 8, -2, 2];
      while (uniqNums.size < 3 && offsets.length > 0) {
        const offset = offsets.shift();
        const n = num + offset;
        if (n >= 0 && n <= den && n !== num) uniqNums.add(n);
      }
      const options = [correctClean];
      uniqNums.forEach(v => options.push(`${v}/${den}`));
      while (options.length < 4) {
        options.push(`${Math.max(0, num - 5)}/${den}`);
      }
      return shuffle(options.map((t, i) => ({ text: t, correct: i === 0 })));
    }

    // 3. Duration/Count (e.g. 5 ans, 3 mois)
    const durMatch = correctClean.match(/^(\d+)\s*(ans|mois|jours|heures|semaines|critères|médicaments|molécules)$/i);
    if (durMatch) {
      const val = parseInt(durMatch[1]);
      const unit = durMatch[2];
      const offsets = [-2, 2, -4, 4, 3, -1];
      const uniqVals = new Set();
      while (uniqVals.size < 3 && offsets.length > 0) {
        const offset = offsets.shift();
        const n = val + offset;
        if (n > 0 && n !== val) uniqVals.add(n);
      }
      const options = [correctClean];
      uniqVals.forEach(v => options.push(`${v} ${unit}`));
      while (options.length < 4) {
        options.push(`${val + 5} ${unit}`);
      }
      return shuffle(options.map((t, i) => ({ text: t, correct: i === 0 })));
    }

    // 4. GIR
    if (/^GIR\s+\d$/i.test(correctClean)) {
      const girNum = parseInt(correctClean.match(/\d/)[0]);
      const options = [correctClean];
      const uniqGirs = new Set([1, 2, 3, 4, 5, 6].filter(n => n !== girNum));
      const wrongGirs = [...uniqGirs].slice(0, 3);
      wrongGirs.forEach(n => options.push(`GIR ${n}`));
      return shuffle(options.map((t, i) => ({ text: t, correct: i === 0 })));
    }

    const qLower = (fc.question || '').toLowerCase();
    const aLower = correctClean.toLowerCase();
    const ctx = qLower + ' ' + aLower;

    // Fallback: related flashcards, prefer same chapter and similar theme
    let candidates = allFlash.filter(f => f.id !== fc.id && f.answer);
    if (fc.chapter) {
      const sameChap = candidates.filter(f => f.chapter === fc.chapter);
      if (sameChap.length >= 4) candidates = sameChap;
    }
    if (fc.tags && fc.tags.length) {
      const sameTags = candidates.filter(f => f.tags && f.tags.some(t => fc.tags.includes(t)));
      if (sameTags.length >= 4) candidates = sameTags;
    }

    // Detect answer type: treatment, definition, score, symptom, exam
    const isTreatment = /traitement|1ere intention|thérapeutique|prendre en charge|guérir|soigner|analgésie|médicament|prescrire|déprescri/.test(ctx);
    const isDefinition = /définition|qu'est-ce que|c'est quoi|signifie|correspond|désigne/.test(ctx);
    const isScore = /score|échelle|test|évaluation|seuil|interpréter|interprétation/.test(ctx);
    const isSymptom = /signe|symptôme|clinique|manifestation|douleur|marche/.test(ctx);
    const isExam = /bilan|exam|biologie|imagerie|radiographie|scanner|irm/.test(ctx);

    const wrong = shuffle(candidates)
      .map(f => {
        const a = cleanAnswer(f.answer);
        if (a.length < 8 || a.length > 90 || a === correctClean) return null;
        if (/\d/.test(a) && !/\d/.test(correctClean)) return null;
        if (!/\d/.test(a) && /\d/.test(correctClean)) return null;
        return a;
      })
      .filter(Boolean);

    let uniq = [...new Set(wrong)].slice(0, 1); // only one answer from other flashcards
    const themeDistractors = {
      treatment: ['Antibiotique en 1ère intention', 'Aucun traitement nécessaire', 'Hospitalisation systématique', 'Kinesithérapie seule suffit'],
      definition: ['Une complication aiguë', 'Un symptôme non spécifique', 'Un médicament', 'Une procédure chirurgicale'],
      score: ['Score de 0/30', 'Score toujours interprété brut', 'Score normal ≥ 25/30', 'Score non validé chez la PA'],
      symptom: ['Douleur neuropathique', 'Signe de décompensation cardiaque', 'Manifestation iatrogène', 'Symptôme psychogène'],
      exam: ['Bilan biologique systématique', 'Scanner cérébral systématique', 'Aucun examen complémentaire', 'Hospitalisation pour bilan'],
      nutrition: ['Complémentation systématique par nutrition parentérale', 'IMC > 25 = obésité', 'Albumine > 40 g/L = normal'],
      chute: ['Le TUG < 10 s = risque élevé', 'Arrêter toute activité physique', 'Contention systématique'],
      cognition: ['Le MMS augmente avec l’âge', 'Prescrire un anticholinergique', 'La confusion est chronique et irréversible'],
      douleur: ['L’EVA est impossible chez la PA', 'Le paracétamol est contre-indiqué', 'Douleur = toujours psychogène'],
      pharma: ['Les BZD sont recommandées chez la PA', 'La polymédication est sans risque', 'Arrêter brutalement tous les traitements'],
      ethique: ['L’acharnement est obligatoire', 'Les directives anticipées sont non contraignantes', 'La sédation est toujours interdite'],
      incontinence: ['L’incontinence est normale avec l’âge', 'Pose systématique de sonde à demeure', 'Pas de rééducation périnéale'],
      osteo: ['La vitamine D est inutile chez la PA', 'Le scanner est l’examen de 1re intention', 'Pas de prévention des chutes'],
      default: ['Aucune de ces réponses', 'Contre-indication absolue', 'Surveillance simple']
    };
    let key = 'default';
    if (isTreatment) key = 'treatment';
    else if (isDefinition) key = 'definition';
    else if (isScore) key = 'score';
    else if (isSymptom) key = 'symptom';
    else if (isExam) key = 'exam';
    else if (/nutrition|mna|albumine|imc|dénutri|poids/.test(ctx)) key = 'nutrition';
    else if (/chute|tinetti|tug|marche|équilibre/.test(ctx)) key = 'chute';
    else if (/démence|cognitif|mms|alzheimer|confusion|delirium/.test(ctx)) key = 'cognition';
    else if (/douleur|eva|ecpa/.test(ctx)) key = 'douleur';
    else if (/pharmaco|médicament|iatrogène|stopp|beers|psychotrope/.test(ctx)) key = 'pharma';
    else if (/éthique|palliatif|fin de vie|directives|leonetti/.test(ctx)) key = 'ethique';
    else if (/incontinen|vésico|sphinctér/.test(ctx)) key = 'incontinence';
    else if (/ostéopor|fracture|osseux|vitamine d/.test(ctx)) key = 'osteo';

    while (uniq.length < 3) {
      const candidate = themeDistractors[key][uniq.length % themeDistractors[key].length];
      if (!uniq.includes(candidate)) uniq.push(candidate); else uniq.push('Aucune de ces réponses');
    }

    const options = shuffle([
      { text: correctClean, correct: true },
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
    if (typeof ANNALES_V2 !== 'undefined') annales.push(...ANNALES_V2);
    if (typeof CAS_INTERACTIFS !== 'undefined') annales.push(...CAS_INTERACTIFS);
    if (typeof SITUATIONS_EVC !== 'undefined') annales.push(...SITUATIONS_EVC);
    if (typeof CAS_EVC_2024 !== 'undefined') annales.push(...CAS_EVC_2024);
    if (typeof CAS_EVC_2023 !== 'undefined') annales.push(...CAS_EVC_2023);
    if (typeof CAS_EVC_2020_2022 !== 'undefined') annales.push(...CAS_EVC_2020_2022);
    if (typeof CAS_EVC_2018_2019 !== 'undefined') annales.push(...CAS_EVC_2018_2019);
    if (typeof CAS_EVC_2015_2017 !== 'undefined') annales.push(...CAS_EVC_2015_2017);
    if (typeof CAS_EVC_2010_2014 !== 'undefined') annales.push(...CAS_EVC_2010_2014);

    const casChoc = [];
    const seenCases = new Set();
    annales.forEach(a => {
      let diagnosis = '';
      if (a.questions && a.questions.length) {
        diagnosis = a.questions.map((q, i) => `<strong>Q${i+1}: ${q.q || q.question || ''}</strong><br>➔ ${q.a || q.answer || ''} ${q.points ? `[${q.points} pts]` : ''}`).join('<br><br>');
      } else {
        diagnosis = a.correction || a.reponse || '';
      }
      if (!diagnosis) return;

      const text = a.situation || a.cas || a.case || a.title || '';
      const nameMatch = text.match(/M(?:me|\.?Monsieur|\.)\s+([A-ZÀ-ÖØ-Þ][a-zà-öø-ÿ'-]+)/);
      const nameKey = nameMatch ? nameMatch[1] : '';
      const ageMatch = text.match(/(\d{2,3})\s*ans/);
      const ageKey = ageMatch ? ageMatch[1] : '';
      
      const dupKey = (a.chapter || '') + '_' + nameKey + '_' + ageKey;
      if (nameKey && ageKey) {
        if (seenCases.has(dupKey)) return;
        seenCases.add(dupKey);
      }

      casChoc.push({
        type: 'cas_choc', id: 'cc-' + a.id,
        chapter: a.chapter, rang: a.difficulty || 'A',
        vignette: a.situation || a.cas || a.case || a.title || '',
        diagnosis: diagnosis,
        juryTips: a.juryTips || '',
        timer: 30,
        tags: ['Urgence', 'Cas choc']
      });
    });

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

    // Attach explanatory visuals (new media only - all original texts preserved)
    chiffreCle.forEach(c => {
      if (c.line && /timed up and go|tug/i.test(c.line)) {
        c.video = 'images/feed/tug-test-explanatory.mp4';
        c.image = 'images/feed/illustrative/tug-steps-educational.jpg';
      }
      if (c.line && /chutent au moins une fois par an/i.test(c.line)) {
        c.image = 'images/feed/illustrative/falls-multifactorial-educational.jpg';
      }
      // Additional explanatory image available
      if (c.line && /chutent au moins une fois par an/i.test(c.line)) {
        c.image2 = 'images/feed/fall-assessment.jpg';
      }
      if (c.line && /fragilit| vitesse de marche/i.test(c.line)) {
        c.image = 'images/feed/frailty-walk.jpg';
        c.video = 'images/feed/frailty-gait-explanatory.mp4';
      }
      if (c.line && /fried.*critères|nombre de critères de fried/i.test(c.line)) {
        c.image = 'images/feed/illustrative/fried-fragilite.jpg';
      }
      if (c.line && /polymédication|iatrogénie/i.test(c.line)) {
        c.image = 'images/feed/illustrative/feed-vis-5.jpg';
        c.video = 'images/feed/videos/feed-vis-5.mp4';
      }
      if (c.line && /sarcopénie|vitesse de marche/i.test(c.line)) {
        c.image = 'images/feed/illustrative/feed-vis-17.jpg';
        c.video = 'images/feed/videos/feed-vis-17.mp4';
      }
    });

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

    // Attach illustrative media for key mechanisms (new explanatory visuals, texts untouched)
    piegeExam.forEach(p => {
      const t = (p.trap || '').toLowerCase();
      if (t.includes('chute') && t.includes('accident')) {
        p.video = 'images/feed/illustrative/chute-multifactorielle.mp4';
        p.image = 'images/feed/illustrative/chute-multifactorielle.jpg';
      }
      if (t.includes('delirium') && (t.includes('agitation') || t.includes('benzodiazépine'))) {
        p.video = 'images/feed/illustrative/delirium-mecanisme.mp4';
        p.image = 'images/feed/illustrative/delirium-mecanisme.jpg';
      }
      if (t.includes('polymédication')) {
        p.image = 'images/feed/illustrative/polymedication-iatrogene.jpg';
        p.video = 'images/feed/videos/feed-vis-5.mp4';
      }
      if (t.includes('chute') && !t.includes('accident')) {
        p.image = 'images/feed/illustrative/feed-vis-1.jpg';
        p.video = 'images/feed/videos/feed-vis-1.mp4';
      }
      if (t.includes('sarcopénie') || t.includes('marche')) {
        p.image = 'images/feed/illustrative/feed-vis-17.jpg';
      }
    });
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

    // 20+ visual explanation cards for the feed (videos and images to illustrate mechanisms)
    const visualMedias = [
      // Enriched with new targeted diagrams for usefulness (Imagine generated)
      {media: 'images/chapters/educational/chute-multifactorielle-diagram.jpg', isVideo: false, title: 'Chutes multifactorielle - Diagramme explicatif'},
      // New 9:16 reel-optimized feed-vis generated (images + videos) - full vertical feel + French captions integrated
      {media: 'images/feed/illustrative/feed-vis-22.jpg', isVideo: false, title: 'Chutes multifactorielle'},
      {media: 'images/feed/videos/feed-vis-22.mp4', isVideo: true, title: 'Chutes multifactorielle - Vidéo'},
      {media: 'images/feed/illustrative/feed-vis-23.jpg', isVideo: false, title: 'Cycle dénutrition-sarcopénie'},
      {media: 'images/feed/videos/feed-vis-23.mp4', isVideo: true, title: 'Cycle dénutrition - Animation'},
      {media: 'images/feed/illustrative/feed-vis-24.jpg', isVideo: false, title: 'Causes réversibles du delirium'},
      {media: 'images/feed/illustrative/feed-vis-25.jpg', isVideo: false, title: 'Critères de Fried (fragilité)'},
      {media: 'images/feed/videos/feed-vis-25.mp4', isVideo: true, title: 'Critères de Fried - Vidéo'},
      {media: 'images/feed/illustrative/feed-vis-26.jpg', isVideo: false, title: 'Polymédication et Beers'},
      // Existing layout-optimized (compact 9/16 for better text flow)
      {media: 'images/feed/illustrative/delirium-mecanisme-reel.jpg', isVideo: false, title: 'Mécanisme du delirium (compact)'},
      {media: 'images/feed/videos/delirium-mecanisme-compact.mp4', isVideo: true, title: 'Mécanisme du delirium - Vidéo'},
      {media: 'images/feed/illustrative/chute-multifactorielle-reel.jpg', isVideo: false, title: 'Chutes multifactoriels (compact)'},
      {media: 'images/feed/videos/chute-multifactorielle-compact.mp4', isVideo: true, title: 'Chutes multifactoriels - Vidéo'},
      {media: 'images/feed/illustrative/denutrition-cycle-reel.jpg', isVideo: false, title: 'Cycle de dénutrition (compact)'},
      {media: 'images/feed/videos/denutrition-cycle-compact.mp4', isVideo: true, title: 'Cycle de dénutrition - Vidéo'},
      {media: 'images/chapters/educational/ch13-cascade-immobilisation.jpg', isVideo: false, title: 'Cascade d\'immobilisation'},
      {media: 'images/feed/videos/ch13-immobilisation-cascade-animation.mp4', isVideo: true, title: 'Cascade immobilisation - Animation'},
      {media: 'images/chapters/educational/ch15-incontinence-classification.jpg', isVideo: false, title: 'Classification des incontinences'},
      {media: 'images/chapters/educational/ch16-prescription-appropriee.jpg', isVideo: false, title: 'Prescription appropriée'},
      {media: 'images/chapters/educational/ch17-soins-palliatifs-decision.jpg', isVideo: false, title: 'Décision soins palliatifs'},
      {media: 'images/chapters/educational/ch19-20-keyfeatures-revision.jpg', isVideo: false, title: 'Key features et révision'},
      // Keep previous feed-vis for variety
      {media: 'images/feed/illustrative/feed-vis-1.jpg', isVideo: false, title: 'Chutes multifactorielle'},
      {media: 'images/feed/videos/feed-vis-1.mp4', isVideo: true, title: 'Chutes multifactorielle - Mécanisme'},
      {media: 'images/feed/illustrative/feed-vis-2.jpg', isVideo: false, title: 'Mécanisme du delirium'},
      {media: 'images/feed/videos/feed-vis-2.mp4', isVideo: true, title: 'Mécanisme du delirium'},
      {media: 'images/feed/illustrative/feed-vis-3.jpg', isVideo: false, title: 'Critères de Fried (fragilité)'},
      {media: 'images/feed/videos/feed-vis-3.mp4', isVideo: true, title: 'Critères de Fried - Fragilité'},
      {media: 'images/feed/illustrative/feed-vis-4.jpg', isVideo: false, title: 'Test Timed Up and Go (TUG)'},
      {media: 'images/feed/videos/feed-vis-4.mp4', isVideo: true, title: 'Test TUG - Étapes et seuils'},
      {media: 'images/feed/illustrative/feed-vis-5.jpg', isVideo: false, title: 'Polymédication et iatrogénie'},
      {media: 'images/feed/videos/feed-vis-5.mp4', isVideo: true, title: 'Polymédication - Risques'},
      {media: 'images/feed/illustrative/feed-vis-6.jpg', isVideo: false, title: 'Vieillissement cellulaire et réserve'},
      {media: 'images/feed/videos/feed-vis-6.mp4', isVideo: true, title: 'Vieillissement cellulaire'},
      {media: 'images/feed/illustrative/feed-vis-7.jpg', isVideo: false, title: 'Évaluation gériatrique globale (CGA)'},
      {media: 'images/feed/videos/feed-vis-7.mp4', isVideo: true, title: 'CGA - Évaluation multidimensionnelle'},
      {media: 'images/feed/illustrative/feed-vis-8.jpg', isVideo: false, title: 'Déficits sensoriels'},
      {media: 'images/feed/videos/feed-vis-8.mp4', isVideo: true, title: 'Déficits sensoriels - Conséquences'},
      {media: 'images/feed/illustrative/feed-vis-9.jpg', isVideo: false, title: 'Nutrition et dénutrition (MNA)'},
      {media: 'images/feed/videos/feed-vis-9.mp4', isVideo: true, title: 'Nutrition - Dénutrition'},
      {media: 'images/feed/illustrative/feed-vis-10.jpg', isVideo: false, title: 'Ostéoporose et risque de fracture'},
      {media: 'images/feed/videos/feed-vis-10.mp4', isVideo: true, title: 'Ostéoporose - Mécanisme'},
      {media: 'images/feed/illustrative/feed-vis-11.jpg', isVideo: false, title: 'Hypotension orthostatique'},
      {media: 'images/feed/videos/feed-vis-11.mp4', isVideo: true, title: 'Hypotension orthostatique'},
      {media: 'images/feed/illustrative/feed-vis-12.jpg', isVideo: false, title: 'Douleur : échelle ECPA'},
      {media: 'images/feed/videos/feed-vis-12.mp4', isVideo: true, title: 'Douleur - Évaluation ECPA'},
      {media: 'images/feed/illustrative/feed-vis-13.jpg', isVideo: false, title: 'Incontinence et causes réversibles (DIAPPERS)'},
      {media: 'images/feed/videos/feed-vis-13.mp4', isVideo: true, title: 'Incontinence - DIAPPERS'},
      {media: 'images/feed/illustrative/feed-vis-14.jpg', isVideo: false, title: 'Prévention des escarres (Braden)'},
      {media: 'images/feed/videos/feed-vis-14.mp4', isVideo: true, title: 'Escarres - Prévention Braden'},
      {media: 'images/feed/illustrative/feed-vis-15.jpg', isVideo: false, title: 'Dépression vs pseudo-démence'},
      {media: 'images/feed/videos/feed-vis-15.mp4', isVideo: true, title: 'Dépression vs pseudo-démence'},
      {media: 'images/feed/illustrative/feed-vis-16.jpg', isVideo: false, title: 'Critères de Beers / PIM'},
      {media: 'images/feed/videos/feed-vis-16.mp4', isVideo: true, title: 'Beers criteria - Risques'},
      {media: 'images/feed/illustrative/feed-vis-17.jpg', isVideo: false, title: 'Sarcopénie et vitesse de marche'},
      {media: 'images/feed/videos/feed-vis-17.mp4', isVideo: true, title: 'Sarcopénie - Interventions'},
      {media: 'images/feed/illustrative/feed-vis-18.jpg', isVideo: false, title: 'Score Tinetti (POMA)'},
      {media: 'images/feed/videos/feed-vis-18.mp4', isVideo: true, title: 'Score Tinetti - Risque'},
      {media: 'images/feed/illustrative/feed-vis-19.jpg', isVideo: false, title: 'Causes réversibles du delirium'},
      {media: 'images/feed/videos/feed-vis-19.mp4', isVideo: true, title: 'Delirium - Causes réversibles'},
      {media: 'images/feed/illustrative/feed-vis-20.jpg', isVideo: false, title: 'Capacité décisionnelle et éthique'},
      {media: 'images/feed/videos/feed-vis-20.mp4', isVideo: true, title: 'Capacité et consentement'},
      {media: 'images/feed/illustrative/feed-vis-21.jpg', isVideo: false, title: 'Sarcopénie - Mécanismes'},
      {media: 'images/feed/videos/feed-vis-21.mp4', isVideo: true, title: 'Sarcopénie et interventions'}
    ];
    const visualExplanations = visualMedias.map((v, i) => ({
      type: 'visual',
      id: 'vis-' + (i+1),
      question: v.title,
      answer: 'Illustration clé — Visualisez et retenez',
      media: v.media,
      isVideo: v.isVideo
    }));

    return { memoJour, casChoc, quizFlash, chiffreCle, citation, piegeExam, visualExplanations, allFlash, srs };
  }

  function buildLegacyPools(allFlash, srs) {
    const legacy = [];
    allFlash.forEach(fc => {
      if (!fc.question || !fc.answer) return;
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
        if (!syn.title || !syn.sections || !syn.sections.length) return;
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
    if (typeof ANNALES_ARCHIVE !== 'undefined') annales.push(...ANNALES_ARCHIVE);
    if (typeof ANNALES_V2 !== 'undefined') annales.push(...ANNALES_V2);
    if (typeof CAS_INTERACTIFS !== 'undefined') annales.push(...CAS_INTERACTIFS);
    if (typeof SITUATIONS_EVC !== 'undefined') annales.push(...SITUATIONS_EVC);
    if (typeof CAS_EVC_2024 !== 'undefined') annales.push(...CAS_EVC_2024);
    if (typeof CAS_EVC_2023 !== 'undefined') annales.push(...CAS_EVC_2023);
    if (typeof CAS_EVC_2020_2022 !== 'undefined') annales.push(...CAS_EVC_2020_2022);
    if (typeof CAS_EVC_2018_2019 !== 'undefined') annales.push(...CAS_EVC_2018_2019);
    if (typeof CAS_EVC_2015_2017 !== 'undefined') annales.push(...CAS_EVC_2015_2017);
    if (typeof CAS_EVC_2010_2014 !== 'undefined') annales.push(...CAS_EVC_2010_2014);

    annales.forEach(a => {
      let answerText = '';
      if (a.questions && a.questions.length) {
        answerText = a.questions.map((q, i) => `<strong>Q${i+1}: ${q.q || q.question || ''}</strong><br>➔ ${q.a || q.answer || ''} ${q.points ? `[${q.points} pts]` : ''}`).join('<br><br>');
      } else {
        answerText = a.correction || a.reponse || '';
      }
      if (!answerText) return;

      legacy.push({
        type: 'case', id: 'ann-' + a.id, chapter: a.chapter, rang: a.difficulty,
        question: a.situation || a.cas || a.case || a.title || '',
        answer: answerText,
        juryTips: a.juryTips || '',
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
      const r = TYPE_RATIO[k];
      counts[k] = r > 0 ? Math.max(1, Math.round(targetSize * r)) : 0;
    });
    const buckets = {
      memo_jour: pickN(pools.memoJour, counts.memo_jour),
      cas_choc: pickN(pools.casChoc, counts.cas_choc),
      quiz_flash: pickN(pools.quizFlash, counts.quiz_flash),
      chiffre_cle: pickN(pools.chiffreCle, counts.chiffre_cle),
      citation: pickN(pools.citation, counts.citation),
      piege_exam: pickN(pools.piegeExam, counts.piege_exam),
      visual: pickN(pools.visualExplanations, counts.visual || 10),
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

  function renderVisual(card, slideIdx) {
    const mediaHtml = card.isVideo 
      ? `<video src="${card.media}" controls muted loop playsinline style="width:100%;height:100%;object-fit:contain;"></video>`
      : `<img src="${card.media}" style="width:100%;height:100%;object-fit:contain;">`;
    return `
      <div class="bf-horiz-scroll" id="bfScroll-${slideIdx}">
        <div class="bf-horiz-page page-1" style="padding:0;align-items:stretch;justify-content:center;background:#0a0a0f;height:100dvh;">
          <div style="width:100%;height:100%;display:flex;flex-direction:column;">
            <div class="bf-media-container bf-reel-media" style="flex: 1 1 auto; margin:0; border-radius:0; height: 0; min-height: 0; aspect-ratio: 9 / 16; max-height: 82%;">
              ${mediaHtml}
            </div>
            <div class="bf-visual-text" style="padding:5px 12px 7px;background:linear-gradient(transparent, rgba(0,0,0,0.93));color:#fff;text-align:center;flex-shrink:0;">
              <p style="font-size:0.76rem;margin:0 0 1px;font-weight:600;letter-spacing:0.01em;line-height:1.15;">${esc(card.question)}</p>
              <p style="font-size:0.62rem;opacity:0.9;margin:0;line-height:1.15;">${esc(card.answer)}</p>
            </div>
          </div>
        </div>
      </div>`;
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
      piege_exam: renderPiegeExam,
      visual: renderVisual
    };

    if (renderers[card.type]) {
      slide.innerHTML = renderers[card.type](card, slideIdx);
    } else {
      slide.innerHTML = renderClassicCard(card, slideIdx);
    }

    bindSlideInteractions(slide, card, slideIdx);
    return slide;
  }

  function formatRichAnswer(card) {
    let answerText = '';
    if (card.type === 'flash' || card.type === 'synthesis' || card.type === 'case' || card.type === 'reco') {
      answerText = card.answer || '';
    } else if (card.type === 'memo_jour') {
      answerText = `<strong>Mnémonique :</strong> <span style="color: var(--teal-accent); font-weight: bold; font-size: 1.1rem; border-bottom: 2px dashed var(--teal-accent); padding-bottom: 2px;">${card.mnemonic}</span><br><br>${card.detail}`;
    } else if (card.type === 'cas_choc') {
      answerText = card.diagnosis || '';
    } else if (card.type === 'quiz_flash') {
      answerText = card.explanation || '';
    } else if (card.type === 'piege_exam') {
      answerText = card.explain || '';
    }

    const keywords = [
      'MMS', 'MMSE', 'GDS-15', 'GDS', 'Fried', 'CAM', 'Tinetti', 'TUG', 'Beers', 'STOPP', 'START', 'HAS', 'GIR', 'AGGIR',
      'APA', 'ALD', 'MNA', 'IMC', 'IADL', 'ADL', 'DIAPPERS', 'ECPA', 'Bouchon', 'iatrogénie', 'dénutrition', 'delirium',
      'fragilité', 'confusion', 'chute', 'sevrage', 'sarcopénie', 'amoxicilline', 'Donepezil', 'tramadol', 'zolpidem',
      'lorazépam', 'Halopéridol', 'contention', 'directives anticipées', 'personne de confiance', 'Claeys-Leonetti', 'Leonetti'
    ];

    let formatted = answerText;
    // Pre-clean: remove OCR artifacts and normalize whitespace
    formatted = formatted.replace(/\s{3,}/g, ' ').replace(/\u25bc/g, '').trim();
    // Extract key takeaway (first meaningful sentence) for emphasis
    
    // Check if it's already got list tags, if not format it
    if (!formatted.includes('<ul') && !formatted.includes('<li') && !formatted.includes('<p')) {
      if (formatted.includes('\n') || formatted.includes('1.') || formatted.includes('•') || formatted.includes(' - ')) {
        const lines = formatted.split('\n');
        formatted = '<ul class="bf-answer-list" style="margin: 8px 0; padding-left: 20px; line-height: 1.5;">' + lines.map(line => {
          let l = line.trim();
          if (!l) return '';
          if (l.startsWith('•') || l.startsWith('-')) l = l.slice(1).trim();
          l = l.replace(/^\d+[\s.)-]/, '').trim();
          return `<li style="margin-bottom: 6px;">${l}</li>`;
        }).filter(Boolean).join('') + '</ul>';
      } else {
        const sentences = formatted.split(/(?<=[.!?])\s+/);
        if (sentences.length > 2) {
          formatted = '<ul class="bf-answer-list" style="margin: 8px 0; padding-left: 20px; line-height: 1.5;">' + sentences.map(s => `<li style="margin-bottom: 6px;">${s}</li>`).join('') + '</ul>';
        } else {
          formatted = `<p class="bf-answer-paragraph" style="margin: 8px 0; line-height: 1.5;">${formatted}</p>`;
        }
      }
    }

    // Highlight keywords with clean styling
    keywords.forEach(kw => {
      const regex = new RegExp(`\\b(${kw}s?)\\b`, 'gi');
      formatted = formatted.replace(regex, `<span class="bf-keyword" style="font-weight: 700; color: var(--teal-accent); background: rgba(20, 184, 166, 0.08); padding: 1px 4px; border-radius: 4px; border: 1px solid rgba(20, 184, 166, 0.15); font-family: var(--sans);">$1</span>`);
    });

    const foundKeywords = keywords.filter(kw => {
      const regex = new RegExp(`\\b${kw}\\b`, 'i');
      return regex.test(answerText);
    });

    let coachingTip = card.juryTips || '';
    if (!coachingTip) {
      const cardTextLower = (card.question + ' ' + answerText + ' ' + (card.tags || []).join(' ')).toLowerCase();
      if (/\b(iatrogé|polymédic|beers|stopp|start|effets indésirables|interaction|surdosage|bzd|benzodiazépine)\b/i.test(cardTextLower)) {
        coachingTip = "Citez systématiquement la revue médicamenteuse (critères STOPP/Beers) et proposez l'arrêt/adaptation des psychotropes ou anti-hypertenseurs suspects.";
      } else if (/\b(chute|chuter|chutes|tinetti|tug|instabilité|équilibre)\b/i.test(cardTextLower)) {
        coachingTip = "Une chute = bilan orthostatique, vision et médicament. Citez le test TUG (> 20s) et le score de Tinetti.";
      } else if (/\b(nutri|dénutri|mna|albumine|amaigrissement|perte de poids)\b/i.test(cardTextLower)) {
        coachingTip = "Mémorisez les seuils HAS : IMC < 21 (ou < 22 si > 75 ans) et albumine < 30 g/L pour la dénutrition sévère.";
      } else if (/\b(confu|delirium|cam|agitation|confusionnelle)\b/i.test(cardTextLower)) {
        coachingTip = "Pour un delirium, appliquez les critères de la CAM. Cherchez d'abord une cause réversible (globe, fécalome, douleur, infection).";
      } else if (/\b(démence|cognitive|mms|moca|alzheimer|lewy|vasculaire)\b/i.test(cardTextLower)) {
        coachingTip = "Éliminez toujours les causes réversibles (hypothyroïdie, carence B12/folates) et la dépression avant de diagnostiquer une démence.";
      } else if (/\b(éthique|fin de vie|directives anticipées|personne de confiance|claeys|leonetti)\b/i.test(cardTextLower)) {
        coachingTip = "Cadre légal Leonetti : pas d'obstination déraisonnable, recueil des directives anticipées et désignation de la personne de confiance.";
      }
    }

    let keywordsHtml = '';
    if (foundKeywords.length) {
      keywordsHtml = `
        <div class="bf-coach-keywords" style="margin-top: 14px; padding-top: 10px; border-top: 1px dashed var(--border); display: flex; flex-direction: column; gap: 6px;">
          <span style="font-size: 0.8rem; font-weight: bold; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.5px;">🔑 Mots-clés requis</span>
          <div class="bf-keyword-tags" style="display: flex; flex-wrap: wrap; gap: 6px;">
            ${foundKeywords.map(k => `<span class="bf-keyword-tag" style="font-size: 0.75rem; background: var(--bg-body); border: 1px solid var(--border); color: var(--text); padding: 2px 8px; border-radius: 99px; font-weight: 500;">${k}</span>`).join('')}
          </div>
        </div>
      `;
    }

    let coachingHtml = '';
    if (coachingTip) {
      coachingHtml = `
        <div class="bf-coach-tip-box" style="margin-top: 12px; padding: 10px 12px; background: rgba(245, 158, 11, 0.06); border-left: 3px solid #f59e0b; border-radius: 0 6px 6px 0; font-size: 0.85rem;">
          <div class="bf-coach-tip-title" style="font-weight: 700; color: #d97706; margin-bottom: 4px; display: flex; align-items: center; gap: 4px;">🎓 Coaching EVC / Conseils</div>
          <p class="bf-coach-tip-text" style="margin: 0; color: var(--text); line-height: 1.4;">${coachingTip}</p>
        </div>
      `;
    }

    return `
      <div class="bf-rich-answer" style="display: flex; flex-direction: column; gap: 4px;">
        <div class="bf-answer-body" style="color: var(--text); font-size: 0.95rem;">${formatted}</div>
        ${keywordsHtml}
        ${coachingHtml}
      </div>
    `;
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
      <div class="bf-horiz-scroll" id="bfScroll-${slideIdx}">
        <!-- PAGE 1 : QUESTION -->
        <div class="bf-horiz-page page-1 bf-theme-classic">
          <div class="bf-bg-emoji">🎴</div>
          <article class="bf-card-content">
            <header class="bf-card-hdr">
              <span class="bf-type-badge">${typeIcons[card.type] || '🎴'} ${typeLabels[card.type] || 'Carte'}</span>
              ${rangBadge}
            </header>
            <main class="bf-card-main">
              <p class="bf-question-text">${esc(card.question)}</p>
            </main>
            <footer class="bf-card-ftr">
              ${chTag}
              <button type="button" class="bf-action-reveal" onclick="document.getElementById('bfScroll-${slideIdx}').scrollBy({left:document.getElementById('bfScroll-${slideIdx}').clientWidth,behavior:'smooth'})">Révéler la réponse ➔</button>
            </footer>
          </article>
        </div>
        <!-- PAGE 2 : RÉPONSE -->
        <div class="bf-horiz-page page-2 bf-theme-classic-back">
          <div class="bf-bg-emoji">💡</div>
          <article class="bf-card-content">
            <header class="bf-card-hdr">
              <span class="bf-type-badge">💡 Réponse</span>
              ${rangBadge}
            </header>
            <main class="bf-card-main scrollable">
              ${formatRichAnswer(card)}
            </main>
            <footer class="bf-card-ftr">
              <div class="bf-card-tags">${tagsHtml}</div>
              <span class="bf-swipe-left-hint">⬅ Revoir la question</span>
            </footer>
          </article>
        </div>
      </div>`;
  }

  function renderMemoJour(card, slideIdx) {
    return `
      <div class="bf-horiz-scroll" id="bfScroll-${slideIdx}">
        <!-- PAGE 1 : ENONCE -->
        <div class="bf-horiz-page page-1 bf-theme-memo">
          <div class="bf-bg-emoji">🧠</div>
          <article class="bf-card-content">
            <header class="bf-card-hdr">
              <span class="bf-type-badge">🧠 ${esc(card.title)}</span>
            </header>
            <main class="bf-card-main">
              <p class="bf-question-text">${esc(card.question)}</p>
            </main>
            <footer class="bf-card-ftr">
              <button type="button" class="bf-action-reveal" onclick="document.getElementById('bfScroll-${slideIdx}').scrollBy({left:document.getElementById('bfScroll-${slideIdx}').clientWidth,behavior:'smooth'})">Révéler la réponse ➔</button>
            </footer>
          </article>
        </div>
        <!-- PAGE 2 : MNEMO -->
        <div class="bf-horiz-page page-2 bf-theme-memo-back">
          <div class="bf-bg-emoji">✨</div>
          <article class="bf-card-content">
            <header class="bf-card-hdr">
              <span class="bf-type-badge">✨ Rétention</span>
            </header>
            <main class="bf-card-main scrollable">
              ${formatRichAnswer(card)}
            </main>
            <footer class="bf-card-ftr">
              <span class="bf-swipe-left-hint">⬅ Revoir l'énoncé</span>
            </footer>
          </article>
        </div>
      </div>`;
  }

  function renderCasChoc(card, slideIdx) {
    return `
      <div class="bf-horiz-scroll" id="bfScroll-${slideIdx}">
        <!-- PAGE 1 : CAS CLINIQUE -->
        <div class="bf-horiz-page page-1 bf-theme-choc">
          <div class="bf-bg-emoji">🚑</div>
          <article class="bf-card-content">
            <header class="bf-card-hdr">
              <span class="bf-type-badge">🚑 CAS CHOC</span>
              <div class="bf-choc-timer" data-seconds="${card.timer}">
                <svg class="bf-choc-ring" viewBox="0 0 36 36"><circle cx="18" cy="18" r="16" class="bf-choc-ring-bg"/><circle cx="18" cy="18" r="16" class="bf-choc-ring-fg"/></svg>
                <span class="bf-choc-time">${card.timer}</span>
              </div>
            </header>
            <main class="bf-card-main scrollable">
              <p class="bf-choc-sub">Tu as <strong>${card.timer} secondes</strong> pour poser ton diagnostic :</p>
              <div class="bf-choc-vignette">${esc(card.vignette)}</div>
            </main>
            <footer class="bf-card-ftr">
              <button type="button" class="bf-action-reveal" onclick="stopCasChocTimer(${slideIdx}); document.getElementById('bfScroll-${slideIdx}').scrollBy({left:document.getElementById('bfScroll-${slideIdx}').clientWidth,behavior:'smooth'})">Révéler la réponse ➔</button>
            </footer>
          </article>
        </div>
        <!-- PAGE 2 : DIAGNOSTIC -->
        <div class="bf-horiz-page page-2 bf-theme-choc-back">
          <div class="bf-bg-emoji">🩺</div>
          <article class="bf-card-content">
            <header class="bf-card-hdr">
              <span class="bf-type-badge">🩺 Diagnostic gériatrique</span>
            </header>
            <main class="bf-card-main scrollable">
              ${formatRichAnswer(card)}
            </main>
            <footer class="bf-card-ftr">
              <span class="bf-swipe-left-hint">⬅ Revoir le cas</span>
            </footer>
          </article>
        </div>
      </div>`;
  }

  function renderQuizFlash(card, slideIdx) {
    const opts = (card.options || []).map((o, i) =>
      `<button type="button" class="bf-quiz-opt" data-correct="${o.correct ? '1' : '0'}" data-idx="${i}">
        <span class="bf-quiz-letter">${['A', 'B', 'C', 'D'][i]}</span>
        <span class="bf-quiz-opt-text">${esc(o.text)}</span>
        <span class="bf-quiz-feedback"></span>
      </button>`
    ).join('');

    return `
      <div class="bf-horiz-scroll" id="bfScroll-${slideIdx}">
        <!-- PAGE 1 : QUESTIONS/CHOIX -->
        <div class="bf-horiz-page page-1 bf-theme-quiz">
          <div class="bf-bg-emoji">❓</div>
          <article class="bf-card-content">
            <header class="bf-card-hdr">
              <span class="bf-type-badge">⚡ QUIZ FLASH</span>
            </header>
            <main class="bf-card-main">
              <h2 class="bf-quiz-q">${esc(card.question)}</h2>
              <div class="bf-quiz-options">${opts}</div>
            </main>
            <footer class="bf-card-ftr">
              <button type="button" class="bf-action-reveal" onclick="document.getElementById('bfScroll-${slideIdx}').scrollBy({left:document.getElementById('bfScroll-${slideIdx}').clientWidth,behavior:'smooth'})">Révéler la réponse ➔</button>
            </footer>
          </article>
        </div>
        <!-- PAGE 2 : EXPLICATION -->
        <div class="bf-horiz-page page-2 bf-theme-quiz-back">
          <div class="bf-bg-emoji">📖</div>
          <article class="bf-card-content">
            <header class="bf-card-hdr">
              <span class="bf-type-badge">📖 Explication d'expert</span>
            </header>
            <main class="bf-card-main scrollable">
              ${formatRichAnswer(card)}
            </main>
            <footer class="bf-card-ftr">
              <span class="bf-swipe-left-hint">⬅ Revoir la question</span>
            </footer>
          </article>
        </div>
      </div>`;
  }

  function renderChiffreCle(card, slideIdx) {
    const displayVal = Number.isInteger(card.value) ? card.value : card.value.toFixed(1).replace('.', ',');
    return `
      <div class="bf-horiz-scroll" id="bfScroll-${slideIdx}">
        <!-- PAGE 1 : QUESTION -->
        <div class="bf-horiz-page page-1 bf-theme-stat">
          <div class="bf-bg-emoji">📊</div>
          <article class="bf-card-content">
            <header class="bf-card-hdr">
              <span class="bf-type-badge">📊 CHIFFRE CLÉ</span>
            </header>
            <main class="bf-card-main">
              ${card.video ? `<div class="bf-media-container"><video src="${card.video}" controls muted loop playsinline></video></div>` : ''}
              ${!card.video && card.image ? `<div class="bf-media-container"><img src="${card.image}" alt=""></div>` : ''}
              <p class="bf-question-text" style="font-size: 1.05rem; margin-top: 8px;">${esc(card.line)}</p>
            </main>
            <footer class="bf-card-ftr">
              <button type="button" class="bf-action-reveal" onclick="document.getElementById('bfScroll-${slideIdx}').scrollBy({left:document.getElementById('bfScroll-${slideIdx}').clientWidth,behavior:'smooth'})">Révéler la réponse ➔</button>
            </footer>
          </article>
        </div>
        <!-- PAGE 2 : RÉPONSE -->
        <div class="bf-horiz-page page-2 bf-theme-stat">
          <div class="bf-bg-emoji">📈</div>
          <article class="bf-card-content">
            <header class="bf-card-hdr">
              <span class="bf-type-badge">📊 Valeur</span>
            </header>
            <main class="bf-card-main">
              ${card.video ? `<div class="bf-media-container"><video src="${card.video}" controls muted loop playsinline></video></div>` : ''}
              ${!card.video && card.image ? `<div class="bf-media-container"><img src="${card.image}" alt=""></div>` : ''}
              <div class="bf-stat-number-wrap">
                <span class="bf-stat-number" data-target="${card.value}">${displayVal}</span>
                <span class="bf-stat-unit">${esc(card.unit)}</span>
              </div>
            </main>
            <footer class="bf-card-ftr">
              <span class="bf-stat-source">${esc(card.source)}</span>
              <span class="bf-swipe-left-hint">⬅ Revoir la question</span>
            </footer>
          </article>
        </div>
      </div>`;
  }

  function renderCitation(card, slideIdx) {
    return `
      <div class="bf-horiz-scroll" id="bfScroll-${slideIdx}">
        <!-- PAGE 1 : CITATION -->
        <div class="bf-horiz-page page-1 bf-theme-quote">
          <div class="bf-bg-emoji">💬</div>
          <article class="bf-card-content">
            <header class="bf-card-hdr">
              <span class="bf-type-badge">CITATION</span>
            </header>
            <main class="bf-card-main">
              <div class="bf-quote-mark">“</div>
              <blockquote class="bf-quote-text" style="font-size: 1.15rem;">${esc(card.text)}</blockquote>
            </main>
            <footer class="bf-card-ftr">
              <button type="button" class="bf-action-reveal" onclick="document.getElementById('bfScroll-${slideIdx}').scrollBy({left:document.getElementById('bfScroll-${slideIdx}').clientWidth,behavior:'smooth'})">Révéler la réponse ➔</button>
            </footer>
          </article>
        </div>
        <!-- PAGE 2 : RÉPONSE -->
        <div class="bf-horiz-page page-2 bf-theme-quote">
          <div class="bf-bg-emoji">✍️</div>
          <article class="bf-card-content">
            <header class="bf-card-hdr">
              <span class="bf-type-badge">Auteur</span>
            </header>
            <main class="bf-card-main">
              <blockquote class="bf-quote-text" style="font-size: 1.1rem; margin-bottom: 12px;">${esc(card.text)}</blockquote>
              <cite class="bf-quote-author">— ${esc(card.author)}</cite>
            </main>
            <footer class="bf-card-ftr">
              <span class="bf-swipe-left-hint">⬅ Revoir la citation</span>
            </footer>
          </article>
        </div>
      </div>`;
  }

  function renderPiegeExam(card, slideIdx) {
    return `
      <div class="bf-horiz-scroll" id="bfScroll-${slideIdx}">
        <!-- PAGE 1 : LE PIEGE -->
        <div class="bf-horiz-page page-1 bf-theme-trap">
          <div class="bf-bg-emoji">🪤</div>
          <article class="bf-card-content">
            <header class="bf-card-hdr">
              <span class="bf-type-badge">🪤 PIÈGE D'EXAM</span>
            </header>
            <main class="bf-card-main">
              <div class="bf-trap-wrong">
                <span class="bf-trap-x">✕</span>
                <p>${esc(card.trap)}</p>
              </div>
              <p class="bf-trap-prompt" style="text-align: center; margin-top: 8px; font-size: 0.92rem; color: rgba(255,255,255,0.75); font-style: italic; font-weight: 500;">
                👉 Pourquoi est-ce une erreur et comment la corriger ?
              </p>
            </main>
            <footer class="bf-card-ftr">
              <button type="button" class="bf-action-reveal" onclick="document.getElementById('bfScroll-${slideIdx}').scrollBy({left:document.getElementById('bfScroll-${slideIdx}').clientWidth,behavior:'smooth'})">Révéler la réponse ➔</button>
            </footer>
          </article>
        </div>
        <!-- PAGE 2 : RECTIFICATION -->
        <div class="bf-horiz-page page-2 bf-theme-trap-back">
          <div class="bf-bg-emoji">✅</div>
          <article class="bf-card-content">
            <header class="bf-card-hdr">
              <span class="bf-type-badge">✅ Règle académique</span>
            </header>
            <main class="bf-card-main scrollable">
              ${formatRichAnswer(card)}
              ${card.video ? `<div class="bf-media-container"><video src="${card.video}" controls muted playsinline></video></div>` : ''}
              ${!card.video && card.image ? `<div class="bf-media-container"><img src="${card.image}" alt=""></div>` : ''}
            </main>
            <footer class="bf-card-ftr">
              <span class="bf-swipe-left-hint">⬅ Revoir le piège</span>
            </footer>
          </article>
        </div>
      </div>`;
  }

  function bindSlideInteractions(slide, card, slideIdx) {
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
          playSound('buzz');
        }
      });
    });

    setupDoubleTap(slide, slideIdx);
  }

  function setupDoubleTap(slide, slideIdx) {
    let lastTap = 0;
    slide.addEventListener('click', (e) => {
      // Ignorer si clic sur bouton d'action ou de quiz
      if (e.target.closest('button') || e.target.closest('.bf-quiz-opt')) return;
      
      const now = Date.now();
      const delay = now - lastTap;
      if (delay < 300 && delay > 0) {
        // Double tap détecté !
        triggerDoubleTapHeart(slide, slideIdx);
      }
      lastTap = now;
    });

    slide.addEventListener('touchstart', (e) => {
      if (e.target.closest('button') || e.target.closest('.bf-quiz-opt')) return;
      const now = Date.now();
      const delay = now - lastTap;
      if (delay < 300 && delay > 0) {
        triggerDoubleTapHeart(slide, slideIdx);
      }
      lastTap = now;
    }, { passive: true });
  }

  function triggerDoubleTapHeart(slide, slideIdx) {
    // Créer le cœur animé
    let heart = slide.querySelector('.bf-doubletap-heart');
    if (!heart) {
      heart = document.createElement('div');
      heart.className = 'bf-doubletap-heart';
      heart.innerHTML = '❤️';
      slide.appendChild(heart);
    }
    
    // Jouer son Ding
    playSound('ding');
    
    // Forcer le reflow
    heart.classList.remove('animate');
    void heart.offsetWidth;
    heart.classList.add('animate');
    
    // Action favori
    actionFavForIdx(slideIdx);
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
    highlightActiveSlide(feed);
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
            highlightActiveSlide(feed);
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

  function highlightActiveSlide(feed) {
    if (!feed) feed = document.getElementById('bfFeed');
    if (!feed) return;
    feed.querySelectorAll('.bf-slide').forEach(s => {
      s.classList.toggle('bf-slide-active', parseInt(s.dataset.idx, 10) === idx);
    });
  }

  function checkAchievements() {
    const unlocked = loadAchievements();
    const stats = loadStats();
    const snapshot = {
      streak: stats.streak,
      dailyDone: stats.dailyDone,
      totalCards: stats.totalCards,
      _sessionCombo10: sessionCombo10Unlocked
    };
    const newly = [];
    ACHIEVEMENTS.forEach(a => {
      if (!unlocked.includes(a.id) && a.check(snapshot)) {
        unlocked.push(a.id);
        newly.push(a);
      }
    });
    if (newly.length) {
      saveAchievements(unlocked);
      renderAchievementBadges();
      const first = newly[0];
      showToast(`${first.icon} Badge : ${first.title}`);
      showAchievementToast(newly);
    }
  }

  function showAchievementToast(badges) {
    let el = document.getElementById('bfAchievementPop');
    if (!el) {
      el = document.createElement('div');
      el.id = 'bfAchievementPop';
      el.className = 'bf-achievement-pop';
      document.getElementById('vFeed')?.appendChild(el);
    }
    el.innerHTML = badges.map(b =>
      `<div class="bf-achievement-pop-item"><span class="bf-ach-icon">${b.icon}</span><div><strong>${esc(b.title)}</strong><span>${esc(b.desc)}</span></div></div>`
    ).join('');
    el.classList.add('show');
    setTimeout(() => el.classList.remove('show'), 3200);
  }

  function renderAchievementBadges() {
    const tray = document.getElementById('bfAchTray');
    if (!tray) return;
    const unlocked = new Set(loadAchievements());
    tray.innerHTML = ACHIEVEMENTS.map(a => {
      const on = unlocked.has(a.id);
      return `<button type="button" class="bf-ach-badge ${on ? 'unlocked' : 'locked'}" title="${esc(a.title)} — ${esc(a.desc)}" aria-label="${esc(a.title)}">${a.icon}</button>`;
    }).join('');
  }

  function ensureFeedChrome() {
    const header = document.querySelector('#vFeed .bf-header');
    if (!header) return;
    header.classList.add('bf-header-enhanced');
    if (!document.getElementById('bfDailyGoal')) {
      const goalWrap = document.createElement('div');
      goalWrap.className = 'bf-daily-goal';
      goalWrap.id = 'bfDailyGoal';
      goalWrap.innerHTML = `
      <div class="bf-daily-goal-label">
        <span>Objectif du jour</span>
        <span id="bfCounterGoal">0 / ${DAILY_GOAL}</span>
      </div>
      <div class="bf-daily-goal-track"><div class="bf-daily-goal-fill" id="bfDailyGoalFill"></div></div>`;
      header.appendChild(goalWrap);

      const achTray = document.createElement('div');
      achTray.id = 'bfAchTray';
      achTray.className = 'bf-ach-tray';
      achTray.setAttribute('aria-label', 'Badges');
      header.appendChild(achTray);
    }

    const streakEl = document.getElementById('bfStreak');
    if (streakEl) streakEl.classList.add('bf-streak-fire');

    let comboCanvas = document.getElementById('bfComboConfetti');
    if (!comboCanvas) {
      comboCanvas = document.createElement('canvas');
      comboCanvas.id = 'bfComboConfetti';
      comboCanvas.className = 'bf-combo-confetti-canvas';
      document.getElementById('vFeed')?.appendChild(comboCanvas);
    }
    renderAchievementBadges();
  }

  function updateHeader() {
    const counter = document.getElementById('bfCounter');
    const progressBar = document.getElementById('bfProgress');
    const goalFill = document.getElementById('bfDailyGoalFill');
    const counterGoal = document.getElementById('bfCounterGoal');
    const pointsEl = document.getElementById('bfPoints');
    const streakEl = document.getElementById('bfStreak');
    const comboEl = document.getElementById('bfComboBadge');

    const pct = Math.min(100, (dailyDone / DAILY_GOAL) * 100);
    if (counter) counter.textContent = `${dailyDone} / ${DAILY_GOAL}`;
    if (counterGoal) counterGoal.textContent = `${dailyDone} / ${DAILY_GOAL}`;
    if (progressBar) progressBar.style.width = `${pct}%`;
    if (goalFill) {
      goalFill.style.width = `${pct}%`;
      goalFill.classList.toggle('bf-goal-complete', dailyDone >= DAILY_GOAL);
    }
    if (pointsEl) pointsEl.textContent = `${points} pts`;
    if (streakEl) {
      streakEl.innerHTML = `<span class="bf-fire-emoji" aria-hidden="true">🔥</span><span class="bf-streak-num">${streak}</span>`;
      streakEl.classList.toggle('bf-streak-hot', streak >= 3);
      streakEl.classList.toggle('bf-streak-mega', streak >= 10);
    }
    if (comboEl) {
      comboEl.textContent = combo >= 2 ? `x${combo}` : '';
      comboEl.classList.toggle('visible', combo >= 2);
      comboEl.classList.toggle('bf-combo-on-fire', combo >= COMBO_CONFETTI_AT);
    }
  }

  function registerCorrect(fromQuiz) {
    combo++;
    if (fromQuiz) quizCombo++;
    playSound('ding');
    const bonus = 10 + Math.min(combo * 2, 24);
    points += bonus;
    dailyDone++;
    const stats = loadStats();
    stats.totalCards = (stats.totalCards || 0) + 1;
    stats.points = points;
    stats.dailyDone = dailyDone;
    stats.streak = streak;
    stats.lastDay = new Date().toDateString();
    saveStats(stats);
    showCombo();
    if (combo === COMBO_CONFETTI_AT) {
      sessionCombo10Unlocked = true;
      launchConfetti('bfComboConfetti');
      showToast(`🎉 COMBO x${combo} !`);
    }
    checkAchievements();
    if (dailyDone === DAILY_GOAL) checkDailyGoal();
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
    playSound('buzz');
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
    if (stats.totalCards == null) stats.totalCards = 0;
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

  function launchConfetti(canvasId = 'bfConfetti') {
    const canvas = document.getElementById(canvasId);
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
    requestAnimationFrame(() => launchConfetti('bfConfetti'));
    checkAchievements();
    points += 50;
    updateStats();
    updateHeader();
  }

  function init() {
    deck = buildDeck();
    idx = 0;
    combo = 0;
    quizCombo = 0;
    sessionCombo10Unlocked = false;
    ensureFeedChrome();
    renderSlides();
    highlightActiveSlide();
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

  return { init, destroy, actionKnow, actionDontKnow, actionFav, shareCard, renderSlides, audit: () => ({ deck: interleaveDeck(buildSpecialPools(), 96), pools: buildSpecialPools() }) };
})();