/* ═══════════════════════════════════════════════════════════════
   Quiz Mode — Timed exam simulation for EVC preparation
   ═══════════════════════════════════════════════════════════════ */

const QuizMode = (() => {
  let questions = [];
  let current = 0;
  let score = 0;
  let total = 0;
  let timer = null;
  let timeLeft = 0;
  let initialTime = 0;
  let answers = [];
  let quizType = 'flash'; // flash, annale, mixed, scores, pharmaco, urgence, mega
  let reviewMode = false;
  let quizCount = 20;
  let questionTimerSec = 30; // 10, 30, 60, or 0 = no limit (per question)
  let questionTimeLeft = 0;
  let customMode = null; // null | 'deferred_errors'

  const CATEGORY_LABELS = {
    flash: 'Flashcards',
    annale: 'Cas cliniques',
    scores: 'Échelles & scores',
    pharmaco: 'Pharmacologie',
    urgence: 'Urgences',
    mega: 'Cas cliniques (mega)'
  };

  function loadSRS() {
    try { return JSON.parse(localStorage.getItem('bf_srs')) || {}; } catch { return {}; }
  }

  function getDifficulty(q) {
    if (q.type === 'flash' && q.flashId != null) {
      const entry = loadSRS()[q.flashId] || { ease: 2.5, interval: 0, nextReview: 0 };
      if (entry.interval >= 7) return { level: 'easy', label: 'Facile' };
      if (entry.interval > 0) return { level: 'medium', label: 'Moyen' };
      if (entry.ease < 2.2 || entry.nextReview <= Date.now()) return { level: 'hard', label: 'Difficile' };
      return { level: 'hard', label: 'Difficile' };
    }
    if (q.rang === 'A') return { level: 'hard', label: 'Difficile' };
    if (q.rang === 'B') return { level: 'medium', label: 'Moyen' };
    return { level: 'medium', label: 'Moyen' };
  }

  function pushScoreQuestions(q, scores, category) {
    if (!scores || !scores.length) return;
    scores.forEach(s => {
      const nom = s.nom;
      const ch = s.chapitre || s.chapter || '';
      if (s.seuils) {
        q.push({
          type: category === 'urgence' ? 'urgence' : 'scores', category, chapter: ch, rang: 'A',
          question: `Score ${nom} : quels sont les seuils d'interprétation ?`,
          answer: s.seuils,
          tags: [nom, 'Seuils']
        });
      }
      if (s.items) {
        q.push({
          type: category === 'urgence' ? 'urgence' : 'scores', category, chapter: ch, rang: 'A',
          question: `Score ${nom} : quels items ou dimensions sont évalués ?`,
          answer: s.items,
          tags: [nom, 'Items']
        });
      }
      const extra = s.description || s.utilisation;
      if (extra) {
        q.push({
          type: category === 'urgence' ? 'urgence' : 'scores', category, chapter: ch, rang: 'A',
          question: `À quoi sert le score ${nom} en pratique clinique ?`,
          answer: extra,
          tags: [nom, 'Utilisation']
        });
      }
    });
  }

  function getPharmacoQuestions() {
    const q = [];
    if (typeof PHARMO_GERIATRIE === 'undefined') return q;
    PHARMO_GERIATRIE.forEach(p => {
      q.push({
        type: 'pharmaco', category: 'pharmaco', chapter: '', rang: 'A',
        question: `${p.drug} (${p.category}) : quelle posologie chez le sujet âgé / IDEM ?`,
        answer: p.doseIdem || p.doseNormale,
        tags: [p.category, p.drug, 'Posologie']
      });
      if (p.renal) {
        q.push({
          type: 'pharmaco', category: 'pharmaco', chapter: '', rang: 'A',
          question: `${p.drug} : quel ajustement en cas d'insuffisance rénale ?`,
          answer: p.renal,
          tags: [p.category, p.drug, 'Rénal']
        });
      }
      if (p.interactions) {
        q.push({
          type: 'pharmaco', category: 'pharmaco', chapter: '', rang: 'A',
          question: `${p.drug} : interactions médicamenteuses majeures à connaître ?`,
          answer: p.interactions,
          tags: [p.category, p.drug, 'Interactions']
        });
      }
      if (p.precautions) {
        q.push({
          type: 'pharmaco', category: 'pharmaco', chapter: '', rang: 'A',
          question: `${p.drug} : principales précautions chez le sujet âgé ?`,
          answer: p.precautions,
          tags: [p.category, p.drug, 'Précautions']
        });
      }
    });
    return q;
  }

  function getUrgenceQuestions() {
    const q = [];
    if (typeof QUIZ_URGENCE !== 'undefined') {
      QUIZ_URGENCE.forEach(u => {
        q.push({
          type: 'urgence', category: 'urgence', chapter: '', rang: u.diffculte || 'A',
          question: u.question,
          answer: u.reponse,
          tags: [u.categorie || 'urgence', u.id]
        });
      });
    }
    if (typeof SCORES_URGENCE !== 'undefined') {
      pushScoreQuestions(q, SCORES_URGENCE, 'urgence');
    }
    return q;
  }

  function getMegaQuestions() {
    const q = [];
    if (typeof MEGA_CASES === 'undefined') return q;
    MEGA_CASES.forEach(mc => {
      if (!mc.questions || !mc.questions.length) return;
      mc.questions.forEach(mq => {
        const ctx = [
          mc.title ? `Cas : ${mc.title}` : '',
          mc.patient ? mc.patient : '',
          mc.examen ? `Examen : ${mc.examen}` : ''
        ].filter(Boolean).join('\n\n');
        q.push({
          type: 'mega', category: 'mega', chapter: mc.chapter, rang: mc.difficulty || 'A',
          question: ctx ? `${ctx}\n\nQuestion EVC : ${mq.q}` : mq.q,
          answer: mq.a,
          tags: [mc.id, mc.context || 'mega'],
          caseId: mc.id
        });
      });
    });
    return q;
  }

  function getAllQuestions() {
    const q = [];
    const allFlash = [];
    if (typeof FLASHCARDS !== 'undefined') allFlash.push(...FLASHCARDS);
    if (typeof FLASHCARDS_A !== 'undefined') allFlash.push(...FLASHCARDS_A);
    if (typeof FLASHCARDS_B !== 'undefined') allFlash.push(...FLASHCARDS_B);
    if (typeof FLASHCARDS_C !== 'undefined') allFlash.push(...FLASHCARDS_C);
    if (typeof FLASHCARDS_MEMOS !== 'undefined') allFlash.push(...FLASHCARDS_MEMOS);
    if (typeof FLASHCARDS_EXPANDED !== 'undefined') allFlash.push(...FLASHCARDS_EXPANDED);
    if (typeof MEGA_FLASHCARDS !== 'undefined') allFlash.push(...MEGA_FLASHCARDS);
    for (let n = 2; n <= 10; n++) {
      const g = globalThis['MEGA_FLASHCARDS_' + n];
      if (typeof g !== 'undefined') allFlash.push(...g);
    }
    allFlash.forEach(fc => {
      q.push({
        type: 'flash', category: 'flash', flashId: fc.id, chapter: fc.chapter, rang: fc.rang,
        question: fc.question, answer: fc.answer, tags: fc.tags
      });
    });
    const allAnnales = [];
    if (typeof ANNALES !== 'undefined') allAnnales.push(...ANNALES);
    if (typeof ANNALES_EXPANDED !== 'undefined') allAnnales.push(...ANNALES_EXPANDED);
    if(typeof ANNALES_V2!=='undefined')allAnnales.push(...ANNALES_V2);
    allAnnales.forEach(a => {
      const caseLabel = (a.case || a.cas || a.title || '').substring(0, 40);
      const questions = a.questions || [];
      questions.forEach(aq => {
        q.push({
          type: 'annale', category: 'annale', chapter: a.chapter, rang: aq.rang,
          question: aq.q, answer: aq.a,
          tags: [caseLabel ? caseLabel + '...' : 'annale']
        });
      });
    });
    if (typeof SCORES_GERIATRIE !== 'undefined') {
      pushScoreQuestions(q, SCORES_GERIATRIE, 'scores');
    }
    q.push(...getPharmacoQuestions());
    q.push(...getUrgenceQuestions());
    q.push(...getMegaQuestions());
    return q;
  }

  function startCustomQuiz(qList, opts) {
    opts = opts || {};
    customMode = opts.mode || null;
    quizType = opts.title || 'custom';
    quizCount = qList.length;
    questionTimerSec = opts.timePerQ == null ? 0 : Number(opts.timePerQ);
    questions = qList.slice();
    total = questions.length;
    current = 0;
    score = 0;
    answers = [];
    reviewMode = false;
    ensureTimerUI();
    const config = document.getElementById('quizConfig');
    if (config) config.style.display = 'none';
    renderQuestion();
    startQuestionTimer();
  }

  function startQuiz(type, count, timePerQ) {
    customMode = null;
    quizType = type || 'mixed';
    quizCount = count || 20;
    questionTimerSec = timePerQ == null ? 30 : Number(timePerQ);
    const all = getAllQuestions();
    const filtered = quizType === 'mixed' ? all : all.filter(q => q.type === quizType);
    for (let i = filtered.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [filtered[i], filtered[j]] = [filtered[j], filtered[i]];
    }
    questions = filtered.slice(0, quizCount);
    total = questions.length;
    current = 0;
    score = 0;
    answers = [];
    reviewMode = false;
    timeLeft = 0;
    initialTime = 0;
    ensureTimerUI();
    const config = document.getElementById('quizConfig');
    if (config) config.style.display = 'none';
    renderQuestion();
    startQuestionTimer();
  }

  function ensureTimerUI() {
    const bar = document.querySelector('.quiz-timer-bar');
    if (!bar) return;
    if (!bar.querySelector('.quiz-timer-wrap')) {
      bar.innerHTML = `
        <div class="quiz-timer-wrap">
          <svg class="quiz-timer-ring" viewBox="0 0 44 44" aria-hidden="true">
            <circle class="quiz-timer-ring-bg" cx="22" cy="22" r="18"/>
            <circle class="quiz-timer-ring-progress" id="quizTimerRing" cx="22" cy="22" r="18"/>
          </svg>
          <span class="quiz-timer quiz-timer-center" id="quizTimer">0:00</span>
        </div>
      `;
    }
  }

  function startQuestionTimer() {
    clearInterval(timer);
    const timerBar = document.querySelector('.quiz-timer-bar');
    if (questionTimerSec <= 0 || reviewMode) {
      if (timerBar) timerBar.style.display = 'none';
      return;
    }
    if (timerBar) timerBar.style.display = '';
    questionTimeLeft = questionTimerSec;
    initialTime = questionTimerSec;
    timeLeft = questionTimeLeft;
    updateTimerDisplay();
    timer = setInterval(() => {
      questionTimeLeft--;
      timeLeft = questionTimeLeft;
      updateTimerDisplay();
      if (questionTimeLeft <= 0) {
        onQuestionTimeout();
      }
    }, 1000);
  }

  function onQuestionTimeout() {
    if (reviewMode || current >= total) return;
    const q = questions[current];
    recordWrongAndAdvance(q, { reasonId: 'temps', reasonNote: 'Temps écoulé' });
  }

  function startTimer() {
    startQuestionTimer();
  }

  function updateTimerDisplay() {
    const el = document.getElementById('quizTimer');
    if (!el) return;
    const m = Math.floor(timeLeft / 60);
    const s = timeLeft % 60;
    el.textContent = `${m}:${s.toString().padStart(2, '0')}`;
    el.className = 'quiz-timer quiz-timer-center' + (questionTimeLeft <= 10 && questionTimerSec > 0 ? ' quiz-timer-urgent' : '');
    const ring = document.getElementById('quizTimerRing');
    if (ring && initialTime > 0) {
      const circumference = 2 * Math.PI * 18;
      const pct = Math.max(0, Math.min(1, timeLeft / initialTime));
      ring.style.strokeDasharray = `${circumference}`;
      ring.style.strokeDashoffset = `${circumference * (1 - pct)}`;
      ring.classList.toggle('quiz-timer-ring-urgent', questionTimeLeft <= 10 && questionTimerSec > 0);
    }
  }

  function getTypeBadge(q) {
    const labels = {
      annale: 'Cas clinique',
      scores: 'Échelle / score',
      pharmaco: 'Pharmacologie',
      urgence: 'Urgence',
      mega: 'Cas mega EVC',
      flash: ''
    };
    const label = labels[q.type];
    return label ? `<span class="quiz-type-badge">${label}</span>` : '';
  }

  function renderQuestion() {
    const container = document.getElementById('quizContent');
    if (!container || current >= total) { showResults(); return; }

    const q = questions[current];
    const chName = getChapterName(q.chapter);
    const rangBadge = q.rang ? `<span class="quiz-rang quiz-rang-${q.rang.toLowerCase()}">Rang ${q.rang}</span>` : '';
    const typeBadge = getTypeBadge(q);
    const diff = getDifficulty(q);
    const diffBadge = `<span class="quiz-diff quiz-diff-${diff.level}" title="Basé sur vos révisions SRS">${diff.label}</span>`;
    const qTextClass = q.type === 'mega' ? 'quiz-q-text quiz-q-text-pre' : 'quiz-q-text';

    const answerBlock = reviewMode ? `
        <div class="quiz-reveal quiz-review-block">
          <div class="quiz-reveal-label">Réponse attendue</div>
          <div class="quiz-reveal-text">${esc(q.answer)}</div>
          <button class="quiz-btn quiz-btn-reveal" onclick="QuizMode.nextReview()">Suivant</button>
        </div>
      ` : `
        <div class="quiz-answer-area" id="quizAnswerArea">
          <textarea id="quizAnswer" placeholder="Votre réponse..." rows="4"></textarea>
          <button class="quiz-btn quiz-btn-reveal" onclick="QuizMode.revealAnswer()">Voir la réponse</button>
        </div>
        <div class="quiz-reveal" id="quizReveal" style="display:none">
          <div class="quiz-reveal-label">Réponse :</div>
          <div class="quiz-reveal-text">${esc(q.answer)}</div>
          <div class="quiz-self-eval">
            <button class="quiz-btn quiz-btn-wrong" onclick="QuizMode.eval(false)">Je ne savais pas</button>
            <button class="quiz-btn quiz-btn-right" onclick="QuizMode.eval(true)">Je savais</button>
          </div>
        </div>
      `;

    container.innerHTML = `
      <div class="quiz-question-card quiz-card-slide">
        <div class="quiz-q-header">
          <span class="quiz-progress">${current + 1} / ${total}</span>
          ${diffBadge} ${rangBadge} ${typeBadge}
        </div>
        <div class="${qTextClass}">${esc(q.question)}</div>
        <div class="quiz-q-chapter">${chName}</div>
        ${answerBlock}
      </div>
    `;
    requestAnimationFrame(() => {
      const card = container.querySelector('.quiz-question-card');
      if (card) card.classList.add('quiz-card-visible');
    });
  }

  function revealAnswer() {
    const area = document.getElementById('quizAnswerArea');
    const reveal = document.getElementById('quizReveal');
    if (area) area.style.display = 'none';
    if (reveal) reveal.style.display = 'block';
  }

  function recordWrongAndAdvance(q, extra) {
    const userAnswerEl = document.getElementById('quizAnswer');
    const userAnswer = userAnswerEl ? userAnswerEl.value.trim() : '';
    const payload = {
      source: 'quiz',
      question: q.question,
      userAnswer,
      correctAnswer: q.answer,
      chapter: q.chapter,
      category: q.category || q.type,
      type: q.type,
      ...(extra || {})
    };
    if (typeof ErrorJournal !== 'undefined' && ErrorJournal.promptAfterWrong) {
      ErrorJournal.promptAfterWrong(payload, () => advanceAfterWrong(q, false));
    } else {
      advanceAfterWrong(q, false);
    }
  }

  function advanceAfterWrong(q, correct) {
    answers.push({
      question: q.question,
      answer: q.answer,
      chapter: q.chapter,
      category: q.category || q.type,
      correct,
      type: q.type,
      errorJournalId: q.errorJournalId
    });
    current++;
    if (current >= total) {
      clearInterval(timer);
      showResults();
    } else {
      renderQuestion();
      startQuestionTimer();
    }
  }

  function eval(correct) {
    const q = questions[current];
    if (customMode === 'deferred_errors' && q.errorJournalId && typeof ErrorJournal !== 'undefined') {
      ErrorJournal.markDeferredResult(q.errorJournalId, correct);
      if (!correct && q.chapter && typeof toast === 'function') {
        toast('Encore raté → retour au cours recommandé');
      }
    }
    if (correct) {
      answers.push({
        question: q.question,
        answer: q.answer,
        chapter: q.chapter,
        category: q.category || q.type,
        correct: true,
        type: q.type
      });
      score++;
      current++;
      if (current >= total) {
        clearInterval(timer);
        showResults();
      } else {
        renderQuestion();
        startQuestionTimer();
      }
      return;
    }
    recordWrongAndAdvance(q);
  }

  function buildCategoryBreakdown() {
    const byCat = {};
    answers.forEach(a => {
      const key = a.category || a.type || '_';
      if (!byCat[key]) byCat[key] = { correct: 0, total: 0 };
      byCat[key].total++;
      if (a.correct) byCat[key].correct++;
    });
    return Object.entries(byCat)
      .map(([key, stats]) => {
        const pct = stats.total ? Math.round((stats.correct / stats.total) * 100) : 0;
        return {
          key,
          name: CATEGORY_LABELS[key] || key,
          ...stats,
          pct,
          weak: pct < 60
        };
      })
      .sort((a, b) => a.pct - b.pct);
  }

  function buildChapterBreakdown() {
    const byChapter = {};
    answers.forEach(a => {
      const ch = a.chapter || '_';
      if (!byChapter[ch]) byChapter[ch] = { correct: 0, total: 0 };
      byChapter[ch].total++;
      if (a.correct) byChapter[ch].correct++;
    });
    return Object.entries(byChapter)
      .map(([chId, stats]) => {
        const pct = stats.total ? Math.round((stats.correct / stats.total) * 100) : 0;
        return {
          chId,
          name: getChapterName(chId) || chId,
          ...stats,
          pct,
          weak: pct < 60
        };
      })
      .sort((a, b) => a.pct - b.pct);
  }

  function reviewWrong() {
    const wrong = answers.filter(a => !a.correct);
    if (!wrong.length) return;
    reviewMode = true;
    questions = wrong.map(w => ({
      type: w.type,
      category: w.category || w.type,
      chapter: w.chapter,
      rang: '',
      question: w.question,
      answer: w.answer
    }));
    total = questions.length;
    current = 0;
    clearInterval(timer);
    const timerBar = document.querySelector('.quiz-timer-bar');
    if (timerBar) timerBar.style.display = 'none';
    renderQuestion();
  }

  function nextReview() {
    current++;
    if (current >= total) {
      reviewMode = false;
      const timerBar = document.querySelector('.quiz-timer-bar');
      if (timerBar) timerBar.style.display = '';
      showResults();
    } else {
      renderQuestion();
    }
  }

  function showResults() {
    clearInterval(timer);
    reviewMode = false;
    const container = document.getElementById('quizContent');
    if (!container) return;

    const resultTotal = answers.length;
    const resultScore = answers.filter(a => a.correct).length;
    const pct = resultTotal > 0 ? Math.round((resultScore / resultTotal) * 100) : 0;
    const chapters = buildChapterBreakdown();
    const categories = buildCategoryBreakdown();
    const weakChapters = chapters.filter(c => c.weak);
    const weakCategories = categories.filter(c => c.weak);
    const wrongCount = answers.filter(a => !a.correct).length;

    const chapterRows = chapters.map(c => `
      <div class="quiz-ch-row${c.weak ? ' quiz-ch-row-weak' : ''}">
        <div class="quiz-ch-row-head">
          <span class="quiz-ch-name">${esc(c.name)}</span>
          <span class="quiz-ch-pct">${c.correct}/${c.total} (${c.pct}%)</span>
        </div>
        <div class="quiz-ch-bar"><div class="quiz-ch-fill" style="width:${c.pct}%"></div></div>
      </div>
    `).join('');

    const categoryRows = categories.map(c => `
      <div class="quiz-ch-row${c.weak ? ' quiz-ch-row-weak' : ''}">
        <div class="quiz-ch-row-head">
          <span class="quiz-ch-name">${esc(c.name)}</span>
          <span class="quiz-ch-pct">${c.correct}/${c.total} (${c.pct}%)</span>
        </div>
        <div class="quiz-ch-bar"><div class="quiz-ch-fill" style="width:${c.pct}%"></div></div>
      </div>
    `).join('');

    let grade = '';
    if (pct >= 80) grade = 'Excellent !';
    else if (pct >= 60) grade = 'Bien';
    else if (pct >= 40) grade = 'À revoir';
    else grade = 'Insuffisant';

    container.innerHTML = `
      <div class="quiz-results">
        <div class="quiz-results-grade">${grade}</div>
        <div class="quiz-results-score">${resultScore} / ${resultTotal} (${pct}%)</div>
        <div class="quiz-results-bar"><div class="quiz-results-fill" style="width:${pct}%"></div></div>
        <div class="quiz-results-details">
          ${categories.length ? `
        <div class="quiz-results-chapters">
          <div class="quiz-results-chapters-title">Par catégorie${weakCategories.length ? ` · ${weakCategories.length} à renforcer` : ''}</div>
          <div class="quiz-ch-list">${categoryRows}</div>
        </div>
        ` : ''}
        </div>
        ${chapters.length ? `
        <div class="quiz-results-chapters">
          <div class="quiz-results-chapters-title">Par chapitre${weakChapters.length ? ` · ${weakChapters.length} à renforcer` : ''}</div>
          <div class="quiz-ch-list">${chapterRows}</div>
        </div>
        ` : ''}
        <div class="quiz-results-actions">
          ${wrongCount > 0 ? `<button class="quiz-btn quiz-btn-review" onclick="QuizMode.reviewWrong()">Revoir les erreurs (${wrongCount})</button>` : ''}
          ${typeof ErrorJournal !== 'undefined' ? `<button class="quiz-btn" onclick="sw('erreurs')">Fichier erreurs PrEP</button>` : ''}
          <button class="quiz-btn" onclick="QuizMode.startQuiz('${quizType}', ${quizCount}, ${questionTimerSec})">Recommencer</button>
          <button class="quiz-btn quiz-btn-ghost" onclick="sw('home')">Retour</button>
        </div>
      </div>
    `;
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

  function destroy() {
    clearInterval(timer);
  }

  return { startQuiz, startCustomQuiz, revealAnswer, eval, reviewWrong, nextReview, destroy };
})();
