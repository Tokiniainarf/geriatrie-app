# Analysis and Proposed Fix Strategy for R2: Immersive BrainFeed

## 1. Executive Summary
This report analyzes and proposes a complete fix strategy for **Requirement R2: Immersive BrainFeed** in the `geriatrie-app` project. The investigation covers layout height adjustment, horizontal swipe functionality for all card types, layout enhancements for header elements, and removal of Tinder-swipe residues.

---

## 2. Requirement Analysis & Current State

| Requirement | Current State | Proposed Fix Strategy |
| :--- | :--- | :--- |
| **Make feed occupy 100dvh** | `#vFeed` has `height: 100dvh`. However, it shares the `.view` class which has desktop-specific layout limits. `.bf-feed` lacks scroll chaining containment. | Keep `#vFeed` at `height: 100dvh` and ensure scroll events do not propagate to the parent body via `overscroll-behavior-y: contain`. |
| **Top-left Close Button** | Close button in `index.html` calls `sw('home')`. However, the header layout using standard flex-direction row squashes the button when dynamic goals are injected. | Re-arrange `.bf-header-enhanced` using CSS Grid to span the close button and stats in row 1, goal tracker in row 2, and badges in row 3. |
| **Horizontal Swipeable Cards (All Posts)** | Classic, Memo, Cas Choc, Quiz, and Trap cards have 2 slides. Chiffre Clé and Citation cards only have 1 slide. | Convert Chiffre Clé and Citation renderers to return 2-slide `.bf-horiz-scroll` structures. Standardize all reveal button text to exactly `"Révéler la réponse ➔"`. |
| **No Tinder Swipe Leftovers** | Unused selectors (`.bf-side-btn`, `.bf-swipe-feedback`, etc.) exist in `style.css`. Unused check logic for `.bf-side-btn` and `swipeState` remains in `brainfeed.js`. | Clean up unused selectors from `style.css` and remove the redundant event logic from `brainfeed.js`. |
| **Smooth Vertical Snapping** | `.bf-feed` has vertical scroll snapping. However, overscroll bounce propagates to the body. | Introduce `overscroll-behavior: contain` to prevent scroll chain leakage and maintain snapping locks. |
| **Vibrant HSL Gradients & Emojis** | Gradients are defined using dull Hex values. Background emojis have `opacity: 0.06`. | Upgrade gradients to vibrant HSL values with higher saturation and contrast. Ensure `background: transparent` on watermark emojis. |

---

## 3. Evidence Chain & Traceability

1. **Feed Height**: `style.css:1354` defines `#vFeed { height: 100dvh; }`. To lock scroll container size and restrict scroll leakage, `overscroll-behavior-y: contain` must be added to `.bf-feed` (line 1502) and `overscroll-behavior-x: contain` on `.bf-horiz-scroll` (line 1530).
2. **Close Button Grid**: `brainfeed.js` line 948 (`ensureFeedChrome`) appends `#bfDailyGoal` and `#bfAchTray` into `#vFeed .bf-header`. This forces columns in flexbox. Using CSS Grid in `.bf-header-enhanced` (style.css:1376) resolves this cleanly.
3. **Card Converters**:
   - `brainfeed.js` line 584 (`renderChiffreCle`) only renders a single horizontal page.
   - `brainfeed.js` line 610 (`renderCitation`) only renders a single horizontal page.
   - The reveal button text on line 473 (`renderMemoJour`) is `"Mnémotechnique ➔"`, line 517 (`renderCasChoc`) is `"Voir le diagnostic ➔"`, and line 562 (`renderQuizFlash`) is `"Voir les explications ➔"`. These must be changed to `"Révéler la réponse ➔"`.
4. **Tinder Leftovers**:
   - `brainfeed.js` line 32 has `let swipeState = null;`.
   - `brainfeed.js` lines 676, 740, and 753 check for `.bf-side-btn`.
   - `style.css` lines 1947–1959 define `.bf-side-info` and `.bf-side-btn`.
   - `style.css` lines 2010–2016 define `.bf-swipe-feedback`, `.bf-swipe-know`, and `.bf-swipe-fail`.
   - `style.css` lines 1870–1907 contain `.bf-card-container` 3D rotation, which is unused.

---

## 4. Proposed Code Modifications

### 4.1 Modifications in `brainfeed.js`

#### Chunk 1: Remove `swipeState` leftover
```javascript
// Start line: 31, End line: 33
<<<<
  let activeTimers = new Map();
  let swipeState = null;

  const TYPE_RATIO = {
====
  let activeTimers = new Map();

  const TYPE_RATIO = {
>>>>
```

#### Chunk 2: Update `renderMemoJour` reveal button
```javascript
// Start line: 470, End line: 476
<<<<
            <footer class="bf-card-ftr">
              <button type="button" class="bf-action-reveal" onclick="document.getElementById('bfScroll-${slideIdx}').scrollBy({left:window.innerWidth,behavior:'smooth'})">Mnémotechnique ➔</button>
            </footer>
====
            <footer class="bf-card-ftr">
              <button type="button" class="bf-action-reveal" onclick="document.getElementById('bfScroll-${slideIdx}').scrollBy({left:window.innerWidth,behavior:'smooth'})">Révéler la réponse ➔</button>
            </footer>
>>>>
```

#### Chunk 3: Update `renderCasChoc` reveal button
```javascript
// Start line: 515, End line: 520
<<<<
            <footer class="bf-card-ftr">
              <button type="button" class="bf-action-reveal" onclick="stopCasChocTimer(${slideIdx}); document.getElementById('bfScroll-${slideIdx}').scrollBy({left:window.innerWidth,behavior:'smooth'})">Voir le diagnostic ➔</button>
            </footer>
====
            <footer class="bf-card-ftr">
              <button type="button" class="bf-action-reveal" onclick="stopCasChocTimer(${slideIdx}); document.getElementById('bfScroll-${slideIdx}').scrollBy({left:window.innerWidth,behavior:'smooth'})">Révéler la réponse ➔</button>
            </footer>
>>>>
```

#### Chunk 4: Update `renderQuizFlash` reveal button
```javascript
// Start line: 560, End line: 565
<<<<
            <footer class="bf-card-ftr">
              <button type="button" class="bf-action-reveal" onclick="document.getElementById('bfScroll-${slideIdx}').scrollBy({left:window.innerWidth,behavior:'smooth'})">Voir les explications ➔</button>
            </footer>
====
            <footer class="bf-card-ftr">
              <button type="button" class="bf-action-reveal" onclick="document.getElementById('bfScroll-${slideIdx}').scrollBy({left:window.innerWidth,behavior:'smooth'})">Révéler la réponse ➔</button>
            </footer>
>>>>
```

#### Chunk 5: Convert `renderChiffreCle` to 2-Slide Swipe Card
```javascript
// Start line: 584, End line: 608
<<<<
  function renderChiffreCle(card, slideIdx) {
    const displayVal = Number.isInteger(card.value) ? card.value : card.value.toFixed(1).replace('.', ',');
    return `
      <div class="bf-horiz-scroll" id="bfScroll-${slideIdx}">
        <!-- CHIFFRE CLÉ -->
        <div class="bf-horiz-page page-1 bf-theme-stat">
          <div class="bf-bg-emoji">📊</div>
          <article class="bf-card-content">
            <header class="bf-card-hdr">
              <span class="bf-type-badge">📊 CHIFFRE CLÉ</span>
            </header>
            <main class="bf-card-main">
              <div class="bf-stat-number-wrap">
                <span class="bf-stat-number" data-target="${card.value}">${displayVal}</span>
                <span class="bf-stat-unit">${esc(card.unit)}</span>
              </div>
              <p class="bf-stat-line">${esc(card.line)}</p>
            </main>
            <footer class="bf-card-ftr">
              <span class="bf-stat-source">${esc(card.source)}</span>
            </footer>
          </article>
        </div>
      </div>`;
  }
====
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
              <p class="bf-question-text" style="font-size: 1.15rem;">${esc(card.line)}</p>
            </main>
            <footer class="bf-card-ftr">
              <button type="button" class="bf-action-reveal" onclick="document.getElementById('bfScroll-${slideIdx}').scrollBy({left:window.innerWidth,behavior:'smooth'})">Révéler la réponse ➔</button>
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
>>>>
```

#### Chunk 6: Convert `renderCitation` to 2-Slide Swipe Card
```javascript
// Start line: 610, End line: 628
<<<<
  function renderCitation(card, slideIdx) {
    return `
      <div class="bf-horiz-scroll" id="bfScroll-${slideIdx}">
        <!-- CITATION -->
        <div class="bf-horiz-page page-1 bf-theme-quote">
          <div class="bf-bg-emoji">💬</div>
          <article class="bf-card-content">
            <main class="bf-card-main">
              <div class="bf-quote-mark">“</div>
              <blockquote class="bf-quote-text">${esc(card.text)}</blockquote>
              <cite class="bf-quote-author">— ${esc(card.author)}</cite>
            </main>
            <footer class="bf-card-ftr">
              <span class="bf-type-badge">CITATION</span>
            </footer>
          </article>
        </div>
      </div>`;
  }
====
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
              <button type="button" class="bf-action-reveal" onclick="document.getElementById('bfScroll-${slideIdx}').scrollBy({left:window.innerWidth,behavior:'smooth'})">Révéler la réponse ➔</button>
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
>>>>
```

#### Chunk 7: Update `renderPiegeExam` reveal button
```javascript
// Start line: 646, End line: 651
<<<<
            <footer class="bf-card-ftr">
              <button type="button" class="bf-action-reveal" onclick="document.getElementById('bfScroll-${slideIdx}').scrollBy({left:window.innerWidth,behavior:'smooth'})">Pourquoi c'est faux ? ➔</button>
            </footer>
====
            <footer class="bf-card-ftr">
              <button type="button" class="bf-action-reveal" onclick="document.getElementById('bfScroll-${slideIdx}').scrollBy({left:window.innerWidth,behavior:'smooth'})">Révéler la réponse ➔</button>
            </footer>
>>>>
```

#### Chunk 8: Remove unused `bf-side-btn` checks in `bindSlideInteractions`
```javascript
// Start line: 672, End line: 680
<<<<
  function bindSlideInteractions(slide, card, slideIdx) {
    const classic = slide.querySelector('.bf-card-container');
    if (classic) {
      classic.addEventListener('click', (e) => {
        if (e.target.closest('.bf-side-btn')) return;
        classic.classList.toggle('flipped');
      });
    }

    const memoBtn = slide.querySelector('.bf-memo-reveal-btn');
====
  function bindSlideInteractions(slide, card, slideIdx) {
    const memoBtn = slide.querySelector('.bf-memo-reveal-btn');
>>>>
```

#### Chunk 9: Remove `bf-side-btn` checks in `setupDoubleTap`
```javascript
// Start line: 736, End line: 760
<<<<
  function setupDoubleTap(slide, slideIdx) {
    let lastTap = 0;
    slide.addEventListener('click', (e) => {
      // Ignorer si clic sur bouton d'action ou de quiz
      if (e.target.closest('button') || e.target.closest('.bf-quiz-opt') || e.target.closest('.bf-side-btn')) return;
      
      const now = Date.now();
      const delay = now - lastTap;
      if (delay < 300 && delay > 0) {
        // Double tap détecté !
        triggerDoubleTapHeart(slide, slideIdx);
      }
      lastTap = now;
    });

    slide.addEventListener('touchstart', (e) => {
      if (e.target.closest('button') || e.target.closest('.bf-quiz-opt') || e.target.closest('.bf-side-btn')) return;
      const now = Date.now();
====
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
>>>>
```

---

### 4.2 Modifications in `style.css`

#### Chunk 1: Re-structure `.bf-header` and `.bf-header-enhanced` using CSS Grid
```css
// Start line: 1359, End line: 1376
<<<<
.bf-header {
  position: absolute; top: 0; left: 0; right: 0; z-index: 1020;
  padding: 14px 16px; display: flex; align-items: center; justify-content: space-between; gap: 14px;
  background: linear-gradient(180deg, rgba(0,0,0,.82) 0%, rgba(0,0,0,.35) 70%, transparent 100%);
  pointer-events: auto;
}
.bf-close-btn {
  background: none; border: none; color: rgba(255,255,255,.8);
  cursor: pointer; width: 40px; height: 40px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  transition: all .2s;
}
.bf-close-btn:hover { background: rgba(255,255,255,.1); color: #fff; }
.bf-close-btn svg { width: 22px; height: 22px; }
.bf-stats-bar {
  flex: 1; display: flex; justify-content: flex-end; align-items: center; gap: 16px;
}
.bf-header-enhanced .bf-stats-bar { width: 100%; justify-content: space-between; }
====
.bf-header {
  position: absolute; top: 0; left: 0; right: 0; z-index: 1020;
  padding: 14px 16px; display: flex; align-items: center; justify-content: space-between; gap: 14px;
  background: linear-gradient(180deg, rgba(0,0,0,.82) 0%, rgba(0,0,0,.35) 70%, transparent 100%);
  pointer-events: auto;
}
.bf-header-enhanced {
  display: grid !important;
  grid-template-columns: auto 1fr !important;
  gap: 10px 14px !important;
}
.bf-close-btn {
  background: none; border: none; color: rgba(255,255,255,.8);
  cursor: pointer; width: 40px; height: 40px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  transition: all .2s;
  grid-column: 1;
  grid-row: 1;
}
.bf-close-btn:hover { background: rgba(255,255,255,.1); color: #fff; }
.bf-close-btn svg { width: 22px; height: 22px; }
.bf-stats-bar {
  flex: 1; display: flex; justify-content: flex-end; align-items: center; gap: 16px;
  grid-column: 2;
  grid-row: 1;
}
.bf-header-enhanced .bf-stats-bar {
  width: 100%;
  justify-content: flex-end;
  grid-column: 2;
  grid-row: 1;
}
.bf-header-enhanced .bf-daily-goal {
  grid-column: span 2;
  grid-row: 2;
}
.bf-header-enhanced .bf-ach-tray {
  grid-column: span 2;
  grid-row: 3;
}
>>>>
```

#### Chunk 2: Contain Scroll Chaining on `.bf-feed` and `.bf-horiz-scroll`
```css
// Start line: 1501, End line: 1506
<<<<
.bf-feed {
  flex: 1; overflow-y: scroll; scroll-snap-type: y mandatory;
  -webkit-overflow-scrolling: touch; scrollbar-width: none;
  scroll-behavior: smooth; height: 100%;
}
====
.bf-feed {
  flex: 1; overflow-y: scroll; scroll-snap-type: y mandatory;
  -webkit-overflow-scrolling: touch; scrollbar-width: none;
  scroll-behavior: smooth; height: 100%;
  overscroll-behavior-y: contain;
}
>>>>
```

```css
// Start line: 1530, End line: 1535
<<<<
.bf-horiz-scroll {
  display: flex; width: 100%; height: 100%;
  overflow-x: auto; scroll-snap-type: x mandatory;
  scrollbar-width: none; -webkit-overflow-scrolling: touch;
}
====
.bf-horiz-scroll {
  display: flex; width: 100%; height: 100%;
  overflow-x: auto; scroll-snap-type: x mandatory;
  scrollbar-width: none; -webkit-overflow-scrolling: touch;
  overscroll-behavior-x: contain;
}
>>>>
```

#### Chunk 3: Update Gradients to Vibrant HSL Colors
```css
// Start line: 1613, End line: 1648
<<<<
.bf-theme-classic {
  background: linear-gradient(135deg, #0e7490 0%, #1e1b4b 100%);
}
.bf-theme-classic-back {
  background: linear-gradient(135deg, #155e75 0%, #0c0a24 100%);
}
.bf-theme-memo {
  background: linear-gradient(135deg, #6d28d9 0%, #1e1b4b 100%);
}
.bf-theme-memo-back {
  background: linear-gradient(135deg, #5b21b6 0%, #0d0a24 100%);
}
.bf-theme-choc {
  background: linear-gradient(135deg, #b91c1c 0%, #4c1d95 100%);
}
.bf-theme-choc-back {
  background: linear-gradient(135deg, #991b1b 0%, #311066 100%);
}
.bf-theme-quiz {
  background: linear-gradient(135deg, #0f766e 0%, #0f172a 100%);
}
.bf-theme-quiz-back {
  background: linear-gradient(135deg, #115e59 0%, #020617 100%);
}
.bf-theme-stat {
  background: linear-gradient(135deg, #1d4ed8 0%, #0f172a 100%);
}
.bf-theme-quote {
  background: linear-gradient(135deg, #be185d 0%, #2e1065 100%);
}
.bf-theme-trap {
  background: linear-gradient(135deg, #b45309 0%, #7f1d1d 100%);
}
.bf-theme-trap-back {
  background: linear-gradient(135deg, #047857 0%, #064e3b 100%);
}
====
.bf-theme-classic {
  background: linear-gradient(135deg, hsl(190, 90%, 30%) 0%, hsl(240, 80%, 15%) 100%);
}
.bf-theme-classic-back {
  background: linear-gradient(135deg, hsl(195, 85%, 25%) 0%, hsl(245, 75%, 10%) 100%);
}
.bf-theme-memo {
  background: linear-gradient(135deg, hsl(270, 80%, 45%) 0%, hsl(250, 70%, 15%) 100%);
}
.bf-theme-memo-back {
  background: linear-gradient(135deg, hsl(270, 75%, 35%) 0%, hsl(255, 65%, 10%) 100%);
}
.bf-theme-choc {
  background: linear-gradient(135deg, hsl(0, 85%, 45%) 0%, hsl(270, 75%, 25%) 100%);
}
.bf-theme-choc-back {
  background: linear-gradient(135deg, hsl(0, 80%, 35%) 0%, hsl(270, 65%, 15%) 100%);
}
.bf-theme-quiz {
  background: linear-gradient(135deg, hsl(175, 80%, 30%) 0%, hsl(210, 60%, 15%) 100%);
}
.bf-theme-quiz-back {
  background: linear-gradient(135deg, hsl(175, 70%, 25%) 0%, hsl(220, 50%, 10%) 100%);
}
.bf-theme-stat {
  background: linear-gradient(135deg, hsl(220, 85%, 45%) 0%, hsl(220, 50%, 15%) 100%);
}
.bf-theme-quote {
  background: linear-gradient(135deg, hsl(330, 85%, 45%) 0%, hsl(275, 70%, 20%) 100%);
}
.bf-theme-trap {
  background: linear-gradient(135deg, hsl(30, 95%, 45%) 0%, hsl(0, 75%, 25%) 100%);
}
.bf-theme-trap-back {
  background: linear-gradient(135deg, hsl(160, 95%, 30%) 0%, hsl(160, 80%, 15%) 100%);
}
>>>>
```

#### Chunk 4: Remove Unused Tinder Selectors and 3D Rotation Leftovers
```css
// Start line: 1869, End line: 1959
<<<<
/* Card inner — flip container (3D) */
.bf-card-container {
  width: 100%; max-width: 380px; min-height: 420px; max-height: 70vh;
  perspective: 1400px; cursor: pointer; position: relative; z-index: 2;
}
.bf-card-inner {
  position: relative; width: 100%; min-height: 420px; max-height: 70vh;
  transform-style: preserve-3d;
  transition: transform .65s cubic-bezier(.2,.85,.25,1);
  will-change: transform;
}
.bf-card-container.flipped .bf-card-inner {
  transform: rotateY(180deg) translateZ(2px);
}
.bf-card-container:not(.flipped):hover .bf-card-inner {
  transform: rotateY(-4deg) rotateX(2deg);
}
.bf-card-container.flipped:hover .bf-card-inner {
  transform: rotateY(176deg) rotateX(-2deg);
}

.bf-card-front, .bf-card-back {
  position: absolute; inset: 0; backface-visibility: hidden; -webkit-backface-visibility: hidden;
  border-radius: 24px; padding: 28px 24px;
  display: flex; flex-direction: column;
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.08);
  backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px rgba(0,0,0,.3), inset 0 1px 0 rgba(255,255,255,.05);
  color: #fff;
  transform: translateZ(12px);
  overflow-y: auto; scrollbar-width: none;
}
.bf-card-front::-webkit-scrollbar, .bf-card-back::-webkit-scrollbar {
  display: none;
}
.bf-card-back {
  transform: rotateY(180deg) translateZ(12px);
}

/* Card header */
.bf-card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
.bf-card-type {
  font-size: .7rem; font-weight: 700; color: rgba(255,255,255,.5);
  text-transform: uppercase; letter-spacing: .08em;
}
.bf-rang {
  font-size: .65rem; font-weight: 800; padding: 3px 10px; border-radius: 99px;
  letter-spacing: .05em;
}
.bf-rang-a { background: rgba(239,68,68,.2); color: #f87171; border: 1px solid rgba(239,68,68,.3); }
.bf-rang-b { background: rgba(59,130,246,.2); color: #60a5fa; border: 1px solid rgba(59,130,246,.3); }

/* Card content */
.bf-card-question {
  font-size: 1.25rem; font-weight: 700; line-height: 1.55;
  flex: 1; display: flex; align-items: center; justify-content: center;
  text-align: center; padding: 16px 0; color: #fff;
}
.bf-card-answer {
  font-size: .95rem; line-height: 1.7; flex: 1; padding: 8px 0; overflow-y: auto;
  color: rgba(255,255,255,.85);
}
.bf-card-chapter { font-size: .72rem; color: rgba(255,255,255,.35); margin-bottom: 8px; }
.bf-card-hint {
  font-size: .68rem; color: rgba(255,255,255,.25); text-align: center; margin-top: auto;
  animation: bf-pulse-hint 2s ease-in-out infinite;
}
@keyframes bf-pulse-hint { 0%,100%{opacity:.25} 50%{opacity:.5} }

.bf-card-tags { display: flex; gap: 6px; flex-wrap: wrap; margin-top: 12px; }
.bf-tag {
  font-size: .6rem; padding: 3px 10px; border-radius: 99px;
  background: rgba(255,255,255,.08); color: rgba(255,255,255,.5);
  border: 1px solid rgba(255,255,255,.06);
}

/* Side info overlay */
.bf-side-info {
  position: absolute; right: 16px; top: 50%; transform: translateY(-50%);
  display: flex; flex-direction: column; gap: 20px; z-index: 10;
}
.bf-side-btn {
  display: flex; flex-direction: column; align-items: center; gap: 4px;
  color: rgba(255,255,255,.5); font-size: .6rem; font-weight: 600;
  transition: all .2s; cursor: pointer; background: none; border: none;
}
.bf-side-btn:active { transform: scale(.85); }
.bf-side-btn svg { filter: drop-shadow(0 2px 4px rgba(0,0,0,.3)); }
.bf-side-btn.bf-active { color: #f87171; }
====
.bf-rang {
  font-size: .65rem; font-weight: 800; padding: 3px 10px; border-radius: 99px;
  letter-spacing: .05em;
}
.bf-rang-a { background: rgba(239,68,68,.2); color: #f87171; border: 1px solid rgba(239,68,68,.3); }
.bf-rang-b { background: rgba(59,130,246,.2); color: #60a5fa; border: 1px solid rgba(59,130,246,.3); }

.bf-card-chapter { font-size: .72rem; color: rgba(255,255,255,.35); margin-bottom: 8px; }

.bf-card-tags { display: flex; gap: 6px; flex-wrap: wrap; margin-top: 12px; }
.bf-tag {
  font-size: .6rem; padding: 3px 10px; border-radius: 99px;
  background: rgba(255,255,255,.08); color: rgba(255,255,255,.5);
  border: 1px solid rgba(255,255,255,.06);
}
>>>>
```

#### Chunk 5: Remove Unused `.bf-swipe-feedback` selectors
```css
// Start line: 2009, End line: 2017
<<<<
/* Swipe feedback overlays */
.bf-swipe-feedback {
  position: absolute; inset: 0; z-index: 15; pointer-events: none;
  opacity: 0; transition: opacity .15s;
}
.bf-swipe-know { background: linear-gradient(0deg, rgba(52,211,153,.15) 0%, transparent 50%); }
.bf-swipe-fail { background: linear-gradient(180deg, rgba(239,68,68,.15) 0%, transparent 50%); }
.bf-swipe-feedback.active { opacity: 1; }
====
>>>>
```
