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
  let answers = [];
  let quizType = 'flash'; // flash, annales, mixed

  function getAllQuestions() {
    const q = [];
    // From flashcards
    const allFlash = [];
    if (typeof FLASHCARDS !== 'undefined') allFlash.push(...FLASHCARDS);
    if (typeof FLASHCARDS_A !== 'undefined') allFlash.push(...FLASHCARDS_A);
    if (typeof FLASHCARDS_B !== 'undefined') allFlash.push(...FLASHCARDS_B);
    if (typeof FLASHCARDS_C !== 'undefined') allFlash.push(...FLASHCARDS_C);
    if (typeof FLASHCARDS_MEMOS !== 'undefined') allFlash.push(...FLASHCARDS_MEMOS);
    allFlash.forEach(fc => {
      q.push({ type: 'flash', chapter: fc.chapter, rang: fc.rang, question: fc.question, answer: fc.answer, tags: fc.tags });
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
    timeLeft = (timePerQ || 30) * total;
    renderQuestion();
    startTimer();
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
    el.className = 'quiz-timer' + (timeLeft < 30 ? ' quiz-timer-urgent' : '');
  }

  function renderQuestion() {
    const container = document.getElementById('quizContent');
    if (!container || current >= total) { showResults(); return; }

    const q = questions[current];
    const chName = getChapterName(q.chapter);
    const rangBadge = q.rang ? `<span class="quiz-rang quiz-rang-${q.rang.toLowerCase()}">Rang ${q.rang}</span>` : '';
    const typeBadge = q.type === 'annale' ? '<span class="quiz-type-badge">Cas clinique</span>' : '';

    container.innerHTML = `
      <div class="quiz-question-card">
        <div class="quiz-q-header">
          <span class="quiz-progress">${current + 1} / ${total}</span>
          ${rangBadge} ${typeBadge}
        </div>
        <div class="quiz-q-text">${esc(q.question)}</div>
        <div class="quiz-q-chapter">${chName}</div>
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
      </div>
    `;
  }

  function revealAnswer() {
    const area = document.getElementById('quizAnswerArea');
    const reveal = document.getElementById('quizReveal');
    if (area) area.style.display = 'none';
    if (reveal) reveal.style.display = 'block';
  }

  function eval(correct) {
    answers.push({ question: questions[current].question, correct, type: questions[current].type });
    if (correct) score++;
    current++;
    if (current >= total) {
      clearInterval(timer);
      showResults();
    } else {
      renderQuestion();
    }
  }

  function showResults() {
    clearInterval(timer);
    const container = document.getElementById('quizContent');
    if (!container) return;

    const pct = total > 0 ? Math.round((score / total) * 100) : 0;
    const flashCorrect = answers.filter(a => a.correct && a.type === 'flash').length;
    const flashTotal = answers.filter(a => a.type === 'flash').length;
    const annaleCorrect = answers.filter(a => a.correct && a.type === 'annale').length;
    const annaleTotal = answers.filter(a => a.type === 'annale').length;

    let grade = '';
    if (pct >= 80) grade = 'Excellent !';
    else if (pct >= 60) grade = 'Bien';
    else if (pct >= 40) grade = 'À revoir';
    else grade = 'Insuffisant';

    container.innerHTML = `
      <div class="quiz-results">
        <div class="quiz-results-grade">${grade}</div>
        <div class="quiz-results-score">${score} / ${total} (${pct}%)</div>
        <div class="quiz-results-bar"><div class="quiz-results-fill" style="width:${pct}%"></div></div>
        <div class="quiz-results-details">
          ${flashTotal > 0 ? `<div>Flashcards : ${flashCorrect}/${flashTotal}</div>` : ''}
          ${annaleTotal > 0 ? `<div>Cas cliniques : ${annaleCorrect}/${annaleTotal}</div>` : ''}
        </div>
        <div class="quiz-results-actions">
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

  return { startQuiz, revealAnswer, eval, destroy };
})();
