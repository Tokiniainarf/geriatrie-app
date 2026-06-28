/* ═══════════════════════════════════════════════════════════════
   Méthode PrEP EVC — Fichier erreurs (3 étapes)
   1) Logger chaque erreur + raison
   2) Relecture hebdomadaire (schémas)
   3) Révision différée J+7
   ═══════════════════════════════════════════════════════════════ */

const ErrorJournal = (() => {
  const STORAGE_KEY = 'evc_errors_journal';
  const META_KEY = 'evc_errors_meta';
  const DEFER_DAYS = 7;
  const DAY_MS = 86400000;

  const REASONS = [
    { id: 'oubli', label: 'Oubli — pas assez révisé' },
    { id: 'confusion', label: 'Confusion entre deux notions' },
    { id: 'piege', label: 'Piège classique EVC' },
    { id: 'lacune', label: 'Lacune de cours (retour au chapitre)' },
    { id: 'lecture', label: 'Mauvaise lecture de l\'énoncé' },
    { id: 'temps', label: 'Manque de temps / stress' },
    { id: 'autre', label: 'Autre' }
  ];

  function load() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch {
      return [];
    }
  }

  function save(entries) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  }

  function loadMeta() {
    try {
      return JSON.parse(localStorage.getItem(META_KEY)) || { lastWeeklyReview: 0 };
    } catch {
      return { lastWeeklyReview: 0 };
    }
  }

  function saveMeta(m) {
    localStorage.setItem(META_KEY, JSON.stringify(m));
  }

  function uid() {
    return 'err-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 8);
  }

  function esc(s) {
    const d = document.createElement('div');
    d.textContent = s || '';
    return d.innerHTML;
  }

  function hashQ(text) {
    const t = (text || '').replace(/\s+/g, ' ').trim().slice(0, 200);
    let h = 0;
    for (let i = 0; i < t.length; i++) h = ((h << 5) - h + t.charCodeAt(i)) | 0;
    return String(h);
  }

  function addEntry(data) {
    const entries = load();
    const now = Date.now();
    const entry = {
      id: uid(),
      source: data.source || 'quiz',
      questionHash: hashQ(data.question),
      question: data.question || '',
      userAnswer: data.userAnswer || '',
      correctAnswer: data.correctAnswer || '',
      reasonId: data.reasonId || 'autre',
      reasonNote: data.reasonNote || '',
      chapter: data.chapter || '',
      category: data.category || '',
      type: data.type || '',
      createdAt: now,
      nextReviewAt: now + DEFER_DAYS * DAY_MS,
      reviewCount: 0,
      lastReviewAt: 0,
      deferredFails: 0,
      mastered: false
    };
    entries.unshift(entry);
    if (entries.length > 500) entries.length = 500;
    save(entries);
    return entry;
  }

  function getDueDeferred() {
    const now = Date.now();
    return load().filter(e => !e.mastered && e.nextReviewAt <= now);
  }

  function getWeeklyEntries() {
    const cutoff = Date.now() - 7 * DAY_MS;
    return load().filter(e => e.createdAt >= cutoff);
  }

  function buildPatternStats(entries) {
    const byReason = {};
    const byChapter = {};
    entries.forEach(e => {
      byReason[e.reasonId] = (byReason[e.reasonId] || 0) + 1;
      const ch = e.chapter || '_';
      byChapter[ch] = (byChapter[ch] || 0) + 1;
    });
    return { byReason, byChapter };
  }

  function reasonLabel(id) {
    return REASONS.find(r => r.id === id)?.label || id;
  }

  function getChapterName(chId) {
    if (typeof APP_DATA === 'undefined' || !chId) return chId || '—';
    const ch = APP_DATA.chapters.find(c => c.id === chId);
    return ch ? ch.t : chId;
  }

  function ensureModal() {
    let m = document.getElementById('errJournalModal');
    if (m) return m;
    m = document.createElement('div');
    m.id = 'errJournalModal';
    m.className = 'err-j-modal';
    m.onclick = e => { if (e.target === m) closeModal(); };
    document.body.appendChild(m);
    return m;
  }

  let pendingCallback = null;

  function closeModal() {
    const m = document.getElementById('errJournalModal');
    if (m) m.classList.remove('open');
    pendingCallback = null;
  }

  /** Étape 1 — après une erreur au quiz */
  function promptAfterWrong(payload, onDone) {
    pendingCallback = onDone || null;
    const m = ensureModal();
    const opts = REASONS.map(r =>
      `<label class="err-j-reason"><input type="radio" name="errReason" value="${r.id}"> ${esc(r.label)}</label>`
    ).join('');
    m.innerHTML = `
      <div class="err-j-pan" role="dialog" aria-labelledby="errJTitle">
        <h3 id="errJTitle">Enregistrer dans ton fichier erreurs</h3>
        <p class="err-j-hint">Méthode PrEP EVC — sans la <strong>raison</strong>, tu répètes la même faute.</p>
        <div class="err-j-preview">
          <div class="err-j-label">Question</div>
          <div class="err-j-q">${esc((payload.question || '').slice(0, 280))}${(payload.question || '').length > 280 ? '…' : ''}</div>
        </div>
        <div class="err-j-field">
          <label>Ta réponse (optionnel)</label>
          <textarea id="errJUserAns" rows="2" placeholder="Ce que tu avais répondu ou pensé…">${esc(payload.userAnswer || '')}</textarea>
        </div>
        <div class="err-j-field">
          <span class="err-j-label">Pourquoi cette erreur ?</span>
          <div class="err-j-reasons">${opts}</div>
        </div>
        <div class="err-j-field">
          <label>Note (optionnel)</label>
          <input type="text" id="errJNote" placeholder="Ex : confondu CAM et GDS" maxlength="200">
        </div>
        <div class="err-j-actions">
          <button type="button" class="err-j-btn err-j-ghost" onclick="ErrorJournal.skipLog()">Passer</button>
          <button type="button" class="err-j-btn err-j-primary" onclick="ErrorJournal.confirmLog()">Enregistrer</button>
        </div>
      </div>`;
    m.classList.add('open');
    m._payload = payload;
  }

  function skipLog() {
    const cb = pendingCallback;
    closeModal();
    if (cb) cb();
  }

  function confirmLog() {
    const m = document.getElementById('errJournalModal');
    const payload = m?._payload || {};
    const reasonEl = document.querySelector('input[name="errReason"]:checked');
    const reasonId = reasonEl ? reasonEl.value : 'autre';
    const userAnswer = document.getElementById('errJUserAns')?.value || payload.userAnswer || '';
    const reasonNote = document.getElementById('errJNote')?.value || '';
    addEntry({
      ...payload,
      userAnswer,
      reasonId,
      reasonNote
    });
    if (typeof toast === 'function') toast('Erreur enregistrée — révision J+7 planifiée');
    const cb = pendingCallback;
    closeModal();
    if (cb) cb();
  }

  function markDeferredResult(entryId, success) {
    const entries = load();
    const e = entries.find(x => x.id === entryId);
    if (!e) return;
    e.reviewCount++;
    e.lastReviewAt = Date.now();
    if (success) {
      e.mastered = true;
    } else {
      e.deferredFails++;
      e.nextReviewAt = Date.now() + DEFER_DAYS * DAY_MS;
      if (e.reasonId !== 'lacune') e.reasonId = 'lacune';
    }
    save(entries);
  }

  function deferredToQuizQuestions(due) {
    return due.map(e => ({
      type: e.type || 'flash',
      category: e.category || 'erreur',
      chapter: e.chapter,
      rang: 'A',
      question: e.question,
      answer: e.correctAnswer,
      tags: ['fichier-erreurs', e.id],
      errorJournalId: e.id
    }));
  }

  function startDeferredQuiz() {
    const due = getDueDeferred();
    if (!due.length) {
      if (typeof toast === 'function') toast('Aucune erreur à J+7 pour l\'instant');
      return;
    }
    if (typeof QuizMode !== 'undefined' && QuizMode.startCustomQuiz) {
      sw('quiz');
      QuizMode.startCustomQuiz(deferredToQuizQuestions(due), {
        title: 'Révision différée J+7',
        mode: 'deferred_errors'
      });
    }
  }

  function markWeeklyReviewDone() {
    const m = loadMeta();
    m.lastWeeklyReview = Date.now();
    saveMeta(m);
    if (typeof toast === 'function') toast('Relecture hebdo notée — continue sur les schémas d\'erreurs');
  }

  function render() {
    const el = document.getElementById('errJournalContent');
    if (!el) return;

    const all = load();
    const weekly = getWeeklyEntries();
    const due = getDueDeferred();
    const patterns = buildPatternStats(weekly);
    const meta = loadMeta();
    const lastWeekly = meta.lastWeeklyReview
      ? new Date(meta.lastWeeklyReview).toLocaleDateString('fr')
      : 'Jamais';

    const reasonRows = Object.entries(patterns.byReason)
      .sort((a, b) => b[1] - a[1])
      .map(([id, n]) => {
        const pct = weekly.length ? Math.round((n / weekly.length) * 100) : 0;
        return `<div class="err-j-stat-row"><span>${esc(reasonLabel(id))}</span><span>${n} (${pct}%)</span></div>`;
      }).join('') || '<p class="err-j-empty">Aucune erreur cette semaine — continue les annales.</p>';

    const chRows = Object.entries(patterns.byChapter)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8)
      .map(([ch, n]) =>
        `<div class="err-j-stat-row"><span>${esc(getChapterName(ch))}</span><span>${n}</span></div>`
      ).join('');

    const listItems = all.slice(0, 40).map(e => {
      const d = new Date(e.createdAt).toLocaleDateString('fr');
      const dueLabel = e.mastered ? 'Maîtrisée' : (e.nextReviewAt <= Date.now() ? 'À refaire (J+7)' : 'J+7 le ' + new Date(e.nextReviewAt).toLocaleDateString('fr'));
      return `
        <article class="err-j-card">
          <div class="err-j-card-head">
            <span class="err-j-date">${d}</span>
            <span class="err-j-badge">${esc(dueLabel)}</span>
          </div>
          <div class="err-j-card-q">${esc(e.question.slice(0, 160))}${e.question.length > 160 ? '…' : ''}</div>
          <div class="err-j-card-meta">${esc(reasonLabel(e.reasonId))}${e.reasonNote ? ' · ' + esc(e.reasonNote) : ''}</div>
          ${e.chapter ? `<button type="button" class="err-j-link" onclick="showCh('${e.chapter}')">Retour cours</button>` : ''}
        </article>`;
    }).join('');

    el.innerHTML = `
      <div class="err-j-intro">
        <h2>Méthode PrEP EVC en 3 étapes</h2>
        <ol class="err-j-steps">
          <li><strong>Fichier erreurs</strong> — chaque raté au quiz avec ta réponse, la bonne réponse et <em>pourquoi</em>.</li>
          <li><strong>Relecture hebdo</strong> — une fois par semaine, analyse les schémas (pas juste relire).</li>
          <li><strong>Révision J+7</strong> — refais les questions ; si tu rates encore → lacune → retour au cours.</li>
        </ol>
      </div>
      <div class="err-j-actions-bar">
        <button type="button" class="err-j-btn err-j-primary" onclick="ErrorJournal.startDeferredQuiz()">Révision J+7 (${due.length})</button>
        <button type="button" class="err-j-btn" onclick="ErrorJournal.markWeeklyReviewDone()">J'ai fait ma relecture hebdo</button>
        <span class="err-j-meta">Dernière relecture : ${lastWeekly}</span>
      </div>
      <div class="err-j-grid">
        <section class="err-j-panel">
          <h3>Étape 2 — Schémas (7 derniers jours)</h3>
          <p class="err-j-sub">${weekly.length} erreur(s) enregistrée(s)</p>
          <div class="err-j-stats">${reasonRows}</div>
          ${chRows ? `<h4>Chapitres les plus touchés</h4><div class="err-j-stats">${chRows}</div>` : ''}
        </section>
        <section class="err-j-panel">
          <h3>Étape 1 — Ton fichier (${all.length})</h3>
          <div class="err-j-list">${listItems || '<p class="err-j-empty">Fais un quiz et coche « Je ne savais pas » pour alimenter le fichier.</p>'}</div>
        </section>
      </div>`;
  }

  function countDue() {
    return getDueDeferred().length;
  }

  return {
    promptAfterWrong,
    confirmLog,
    skipLog,
    render,
    startDeferredQuiz,
    markWeeklyReviewDone,
    markDeferredResult,
    countDue,
    getDueDeferred,
    REASONS
  };
})();

window.ErrorJournal = ErrorJournal;