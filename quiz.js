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
  let quizType = 'flash'; // flash, annales, mixed
  let reviewMode = false;

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

  function getAllQuestions() {
    const q = [];
    // From flashcards
    const allFlash = [];
    if (typeof FLASHCARDS !== 'undefined') allFlash.push(...FLASHCARDS);
    if (typeof FLASHCARDS_A !== 'undefined') allFlash.push(...FLASHCARDS_A);
    if (typeof FLASHCARDS_B !== 'undefined') allFlash.push(...FLASHCARDS_B);
    if (typeof FLASHCARDS_C !== 'undefined') allFlash.push(...FLASHCARDS_C);
    if (typeof FLASHCARDS_MEMOS !== 'undefined') allFlash.push(...FLASHCARDS_MEMOS);
    if (typeof FLASHCARDS_EXPANDED !== 'undefined') allFlash.push(...FLASHCARDS_EXPANDED);
    allFlash.forEach(fc => {
      q.push({
        type: 'flash', flashId: fc.id, chapter: fc.chapter, rang: fc.rang,
        question: fc.question, answer: fc.answer, tags: fc.tags
      });
    });
    // From annales
    // Annales for quiz
    const allAnnales = [];
    if (typeof ANNALES !== 'undefined') allAnnales.push(...ANNALES);
    if (typeof ANNALES_EXPANDED !== 'undefined') allAnnales.push(...ANNALES_EXPANDED);
    allAnnales.forEach(a => {
        a.questions.forEach(aq => {
          q.push({ type: 'annale', chapter: a.chapter, rang: aq.rang, question: aq.q, answer: aq.a, tags: [a.case.substring(0, 40) + '...'] });
        });
      });
    return q;
  }

  function startQuiz(type, count, timePerQ) {
    quizType = type || 'mixed';
    const all = getAllQuestions();
    const filtered = quizType === 'mixed' ? all : all.filter(q => q.type === quizType);
    // Shuffle
    for (let i = filtered.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [filtered[i], filtered[j]] = [filtered[j], filtered[i]];
    }
    questions = filtered.slice(0, count || 20);
    total = questions.length;
    current = 0;
    score = 0;
    answers = [];
    reviewMode = false;
    timeLeft = (timePerQ || 30) * total;
    initialTime = timeLeft;
    ensureTimerUI();
    const config = document.getElementById('quizConfig');
    if (config) config.style.display = 'none';
    const timerBar = document.querySelector('.quiz-timer-bar');
    if (timerBar) timerBar.style.display = '';
    renderQuestion();
    updateTimerDisplay();
    startTimer();
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

  function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
      timeLeft--;
      updateTimerDisplay();
      if (timeLeft <= 0) {
        clearInterval(timer);
        showResults();
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    const el = document.getElementById('quizTimer');
    if (!el) return;
    const m = Math.floor(timeLeft / 60);
    const s = timeLeft % 60;
    el.textContent = `${m}:${s.toString().padStart(2, '0')}`;
    el.className = 'quiz-timer quiz-timer-center' + (timeLeft < 30 ? ' quiz-timer-urgent' : '');
    const ring = document.getElementById('quizTimerRing');
    if (ring && initialTime > 0) {
      const circumference = 2 * Math.PI * 18;
      const pct = Math.max(0, Math.min(1, timeLeft / initialTime));
      ring.style.strokeDasharray = `${circumference}`;
      ring.style.strokeDashoffset = `${circumference * (1 - pct)}`;
      ring.classList.toggle('quiz-timer-ring-urgent', timeLeft < 30);
    }
  }

  function renderQuestion() {
    const container = document.getElementById('quizContent');
    if (!container || current >= total) { showResults(); return; }

    const q = questions[current];
    const chName = getChapterName(q.chapter);
    const rangBadge = q.rang ? `<span class="quiz-rang quiz-rang-${q.rang.toLowerCase()}">Rang ${q.rang}</span>` : '';
    const typeBadge = q.type === 'annale' ? '<span class="quiz-type-badge">Cas clinique</span>' : '';
    const diff = getDifficulty(q);
    const diffBadge = `<span class="quiz-diff quiz-diff-${diff.level}" title="Basé sur vos révisions SRS">${diff.label}</span>`;

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
        <div class="quiz-q-text">${esc(q.question)}</div>
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

  function eval(correct) {
    const q = questions[current];
    answers.push({
      question: q.question,
      answer: q.answer,
      chapter: q.chapter,
      correct,
      type: q.type
    });
    if (correct) score++;
    current++;
    if (current >= total) {
      clearInterval(timer);
      showResults();
    } else {
      renderQuestion();
    }
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
    const flashCorrect = answers.filter(a => a.correct && a.type === 'flash').length;
    const flashTotal = answers.filter(a => a.type === 'flash').length;
    const annaleCorrect = answers.filter(a => a.correct && a.type === 'annale').length;
    const annaleTotal = answers.filter(a => a.type === 'annale').length;
    const chapters = buildChapterBreakdown();
    const weakChapters = chapters.filter(c => c.weak);
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
          ${flashTotal > 0 ? `<div>Flashcards : ${flashCorrect}/${flashTotal}</div>` : ''}
          ${annaleTotal > 0 ? `<div>Cas cliniques : ${annaleCorrect}/${annaleTotal}</div>` : ''}
        </div>
        ${chapters.length ? `
        <div class="quiz-results-chapters">
          <div class="quiz-results-chapters-title">Par chapitre${weakChapters.length ? ` · ${weakChapters.length} à renforcer` : ''}</div>
          <div class="quiz-ch-list">${chapterRows}</div>
        </div>
        ` : ''}
        <div class="quiz-results-actions">
          ${wrongCount > 0 ? `<button class="quiz-btn quiz-btn-review" onclick="QuizMode.reviewWrong()">Revoir les erreurs (${wrongCount})</button>` : ''}
          <button class="quiz-btn" onclick="QuizMode.startQuiz('${quizType}', 20, 30)">Recommencer</button>
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

  return { startQuiz, revealAnswer, eval, reviewWrong, nextReview, destroy };
})();
