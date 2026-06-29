function normalize(str) {
  return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function detectSplit(ch, nextCh, pages) {
  let stnioPIdx = -1;
  const mid = Math.floor(pages.length / 2);
  for (let idx = pages.length - 1; idx >= mid; idx--) {
    if (pages[idx][1].includes('stnioP')) {
      stnioPIdx = idx;
      break;
    }
  }

  if (stnioPIdx !== -1 && stnioPIdx < pages.length - 1) {
    const remainingText = pages.slice(stnioPIdx + 1).map(p => p[1]).join('\n');
    const normRemaining = normalize(remainingText);
    const normNextTitle = normalize(nextCh.t);

    if (normRemaining.includes(normNextTitle)) {
      return stnioPIdx + 1;
    }
    
    if (normRemaining.includes('situations de depart') || normRemaining.includes('item ')) {
      if (ch.id !== 'ch16') {
        return stnioPIdx + 1;
      }
    }
  }

  for (let idx = mid; idx < pages.length; idx++) {
    const normPageText = normalize(pages[idx][1]);
    const normNextTitle = normalize(nextCh.t);

    if (normPageText.includes(normNextTitle)) {
      if (idx > 0 && pages[idx - 1][1].includes('This page intentionally left blank')) {
        return idx - 1;
      }
      return idx;
    }
  }

  return -1;
}

function preprocessAppData() {
  const chapters = APP_DATA.chapters;
  for (let i = 0; i < chapters.length - 1; i++) {
    const ch = chapters[i];
    const nextCh = chapters[i + 1];
    const pages = APP_DATA.content[ch.id] || [];
    
    const splitIdx = detectSplit(ch, nextCh, pages);
    if (splitIdx !== -1) {
      const pagesToShift = pages.slice(splitIdx);
      APP_DATA.content[ch.id] = pages.slice(0, splitIdx);
      APP_DATA.content[nextCh.id] = [...pagesToShift, ...APP_DATA.content[nextCh.id]];
    }
  }
}

// Override renderChapter with R2 and R3 implementation
renderChapter = function(raw, chId) {
  const SECTION_RE = /^([IVX]+)\.\s+(.+)/;
  const LETTER_RE = /^([A-Z])\.\s+(.+)/;

  const ch = APP_DATA.chapters.find(c => c.id === chId);
  const titleRe = ch ? new RegExp('^' + ch.t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\s*$', 'i') : null;
  let text = raw.replace(/(\w)-\s*\n\s*(\w)/g, '$1$2');
  
  let lines = text.replace(/\r\n/g, '\n').split('\n').map(l => l.trim()).filter((l, i, arr) => {
    if (!l) return false;
    if (RUN_HDR_RE.test(l)) return false;
    if (SKIP_LINE_RE.test(l)) return false;
    if (titleRe && titleRe.test(l)) return false;
    if (/^Page\s+\d+$/i.test(l)) return false;
    if (SYLLABUS_RE.test(l)) return false;
    if (SYLLABUS_ROW_RE.test(l)) return false;
    if (/^En lien avec/.test(l)) return false;
    if (DIAGRAM_RE.test(l) && !/Fig\.\s*\d+\.\d+/.test(l)) return false;
    return true;
  });

  // Filter ITEM table rows before first section
  let firstSec = -1;
  for (let i = 0; i < lines.length; i++) {
    if (SECTION_RE.test(lines[i]) || LETTER_RE.test(lines[i])) {
      firstSec = i;
      break;
    }
  }
  if (firstSec > 0) {
    lines = lines.filter((l, i) => {
      if (i >= firstSec) return true;
      if (/Situations?\s+de\s+départ/i.test(l)) return true;
      if (/^\d{2,3}\s+/.test(l)) return true;
      if (BULLET_RE.test(l)) return true;
      if (l.length > 40 && /[.!?]/.test(l)) return true;
      if (/gérontologie|gériatrie|vieillissement/i.test(l)) return true;
      return false;
    });
  }

  // Kill remaining short non-sentence fragments
  lines = lines.filter(l => {
    if (l.length >= 50) return true;
    if (BULLET_RE.test(l) || SECTION_RE.test(l) || LETTER_RE.test(l)) return true;
    if (/^Fig\.|Tableau|Encadré|^\d{2,3}\s+/.test(l)) return true;
    if (/[.!?]$/.test(l)) return true;
    return false;
  });

  // R2 TOC checking
  const filteredLines = [];
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    const isSec = SECTION_RE.test(l);
    const isLet = LETTER_RE.test(l);

    if (i >= 40 && (isSec || isLet)) {
      const typeRe = isSec ? SECTION_RE : LETTER_RE;
      
      const isLongTextLine = (line) => {
        return line.length > 40 && /[.!?]/.test(line);
      };

      // Check lookbehind: up to 5 lines backward
      let lookbehindMatch = false;
      let backwardCount = 0;
      for (let j = i - 1; j >= 0; j--) {
        const bl = lines[j];
        if (!bl) continue;
        backwardCount++;
        if (backwardCount > 5) break;

        if (isLongTextLine(bl)) {
          break;
        }
        if (typeRe.test(bl)) {
          lookbehindMatch = true;
          break;
        }
      }

      // Check lookahead: up to 5 lines forward
      let lookaheadMatch = false;
      let forwardCount = 0;
      for (let j = i + 1; j < lines.length; j++) {
        const fl = lines[j];
        if (!fl) continue;
        forwardCount++;
        if (forwardCount > 5) break;

        if (isLongTextLine(fl)) {
          break;
        }
        if (typeRe.test(fl)) {
          lookaheadMatch = true;
          break;
        }
      }

      if (lookaheadMatch || lookbehindMatch) {
        continue;
      }
    }
    filteredLines.push(l);
  }
  
  let html = '';
  let paraBuf = [];
  let bulletBuf = [];
  let inSection = false;
  let inSit = false;
  let inCallout = false;
  let calloutTitle = '';
  let calloutBuf = [];
  let inNumList = false;
  let numBuf = [];
  let pastPreamble = false;

  function markBodyStart() { pastPreamble = true; }
  function isPreambleLine(l) {
    if (/^\d{3}\s+\S/.test(l)) return true;
    if (/^ITEM\s/i.test(l)) return true;
    if (/^En lien avec/i.test(l)) return true;
    if (/^diagnostic et thérapeutique/i.test(l)) return true;
    return false;
  }

  function flushPara(rang) {
    if (!paraBuf.length) return;
    const merged = paraBuf.join(" ").replace(/\s+/g, " ").trim();
    paraBuf = [];
    if (merged.length < 12) return;
    const chip = rang ? '<span class="rang-inline rang-' + (rang === "A" ? "a" : "b") + '">Rang ' + rang + '</span>' : "";
    html += '<div class="para-card">' + chip + '<p>' + esc(merged) + '</p></div>';
  }

  function flushBullets() {
    if (!bulletBuf.length) return;
    html += '<div class="reader-list-card"><ul class="reader-list">' + bulletBuf.map(b => '<li>' + esc(b) + '</li>').join('') + '</ul></div>';
    bulletBuf = [];
  }
  function flushNumList() {
    if (!numBuf.length) return;
    html += '<div class="reader-list-card"><ol class="reader-list num">' + numBuf.map(b => '<li>' + esc(b) + '</li>').join('') + '</ol></div>';
    numBuf = []; inNumList = false;
  }
  function flushCallout() {
    if (!calloutBuf.length && !calloutTitle) return;
    html += '<aside class="callout"><div class="callout-title">' + esc(calloutTitle || 'Encadré') + '</div><div class="callout-body">' + calloutBuf.map(p => '<p>' + esc(p) + '</p>').join('') + '</div></aside>';
    calloutBuf = []; calloutTitle = ''; inCallout = false;
  }
  function closeSection() { if (inSection) { html += '</div></section>'; inSection = false; } }

  const outlineSeen = new Set();
  const outlineParts = [];
  const outlineCap = filteredLines.slice(0, 35);
  for (const ol of outlineCap) {
    const om = ol.match(SECTION_RE);
    if (!om) continue;
    const key = om[1] + '|' + om[2];
    if (outlineSeen.has(key)) continue;
    outlineSeen.add(key);
    outlineParts.push(om);
    if (outlineParts.length >= 8) break;
  }
  if (outlineParts.length >= 3) {
    html += '<nav class="ch-outline" aria-label="Plan du chapitre"><p class="outline-label">Plan du chapitre</p><ul>' + outlineParts.map(m => '<li><span class="outline-num">' + esc(m[1]) + '</span> ' + esc(m[2]) + '</li>').join('') + '</ul></nav>';
  }

  for (let i = 0; i < filteredLines.length; i++) {
    let l = filteredLines[i];
    if (!l) { flushBullets(); flushNumList(); if (inCallout) flushCallout(); continue; }

    if (/Situations?\s+de\s+départ/i.test(l)) {
      flushBullets(); flushNumList(); closeSection();
      markBodyStart();
      html += '<div class="key-point"><strong>Situations de départ</strong><ul>'; inSit = true; continue;
    }
    if (inSit) {
      const sm = l.match(/^(\d{2,3})\s+(.+)/);
      if (sm) { html += '<li>' + esc(sm[2]) + '</li>'; continue; }
      html += '</ul></div>'; inSit = false;
    }

    const enc = l.match(/^Encadré\s+([\d.]+)/i);
    if (enc) { flushBullets(); flushNumList(); flushCallout(); calloutTitle = 'Encadré ' + enc[1]; inCallout = true; continue; }
    if (inCallout) {
      if (SECTION_RE.test(l) || LETTER_RE.test(l) || /^Tableau\s+/i.test(l)) { flushCallout(); }
      else if (BULLET_RE.test(l)) { calloutBuf.push(l.match(BULLET_RE)[1]); continue; }
      else if (l.length < 200) { calloutBuf.push(l); continue; }
      else flushCallout();
    }

    const figM = l.match(/Fig\.\s*(\d+\.\d+)/);
    if (figM && typeof FIGURES !== 'undefined') {
      flushPara(); flushBullets(); flushNumList();
      const figId = figM[1];
      const src = FIGURES[figId]?.[0];
      if (src && !src.includes('figures/page_')) {
        html += '<figure class="fig-block"><img src="' + src + '" alt="Figure ' + figId + '" loading="lazy"><figcaption>Figure ' + figId + '</figcaption></figure>';
      }
      continue;
    }

    const tab = l.match(/^Tableau\s+([\d.]+)\.\s*(.*)/i);
    if (tab) { flushPara(); flushBullets(); html += '<div class="table-lead"><span class="table-badge">Tableau ' + tab[1] + '</span><span>' + esc(tab[2] || '') + '</span></div>'; continue; }

    const secM = l.match(SECTION_RE);
    if (secM) {
      if (!pastPreamble) continue;
      flushPara(); flushBullets(); flushNumList(); closeSection();
      html += '<section class="manual-section"><header class="section-head"><span class="section-num">' + esc(secM[1]) + '</span><span class="section-title">' + esc(secM[2]) + '</span></header><div class="section-body">';
      inSection = true; continue;
    }

    const letM = l.match(LETTER_RE);
    if (letM && letM[2].length > 2) {
      markBodyStart();
      flushPara(); flushBullets(); flushNumList();
      html += '<h3 class="sub-head"><span class="sub-letter">' + esc(letM[1]) + '</span>' + esc(letM[2]) + '</h3>';
      continue;
    }

    const numM = l.match(NUM_LIST_RE);
    if (numM && numM[2].length < 120) {
      flushBullets();
      inNumList = true; numBuf.push(numM[2]); continue;
    }
    if (inNumList && l.length < 100 && !SECTION_RE.test(l)) { numBuf.push(l); continue; }
    if (inNumList) flushNumList();

    const bulM = l.match(BULLET_RE);
    if (bulM) { flushNumList(); bulletBuf.push(bulM[1]); continue; }
    if (bulletBuf.length) {
      const isStruct = SECTION_RE.test(l) || LETTER_RE.test(l) || /^Situations?\s+de\s+départ/i.test(l) || /^Encadré\s+/i.test(l) || /^Tableau\s+/i.test(l) || /^Fig\.\s*\d/i.test(l) || RANG_RE.test(l) || /^\d{2,3}\s+/.test(l);
      if (!isStruct && l.length < 200) {
        bulletBuf[bulletBuf.length - 1] += ' ' + l; continue;
      }
      flushBullets();
    }

    const rangM = l.match(RANG_RE);
    if (rangM && !/Rubrique|Intitulé|Descriptif|Connaître|Modifications|Éléments physiopathologiques/.test(l)) {
      const body = rangM[2];
      const isProse = /^(Le |La |Les |L'|Il |Elle |Pour |C'est|Ainsi|On |En |Un |Une |Cette |Ce |Cela |De |Du |Des |Dans |Avec |Son |Sa |Ses |Sur |Par |Au |Aux |Tout |Tous |Bien |Mais |Or |Donc |Chez|Avec|Après|Avant|Depuis)/i.test(body);
      if (isProse) {
        paraBuf.push(body);
        markBodyStart();
        continue;
      }
      if (body.length < 100 && !/[.;:]$/.test(body)) {
        flushPara(); html += '<div class="def-block"><span class="rang-badge ' + (rangM[1] === 'A' ? 'rang-a' : 'rang-b') + '">Rang ' + rangM[1] + '</span><span class="def-text">' + esc(body) + '</span></div>';
        continue;
      }
      paraBuf.push(body); flushPara(rangM[1]); markBodyStart(); continue;
    }

    if (!pastPreamble) {
      if (isPreambleLine(l)) continue;
      markBodyStart();
    }

    if (/^Critères de /i.test(l)) {
      flushPara(); html += '<div class="callout callout-soft"><div class="callout-title">' + esc(l) + '</div><ul class="reader-list">';
      let j = i + 1; while (j < filteredLines.length && NUM_LIST_RE.test(filteredLines[j])) { const nm = filteredLines[j].match(NUM_LIST_RE); html += '<li>' + esc(nm[2]) + '</li>'; j++; } html += '</ul></div>'; i = j - 1; continue;
    }

    if (/^(\d{1,3})$/.test(l)) continue;
    if (/^diagnostic et thérapeutique/i.test(l)) continue;
    if (/^\w{4,20}$/.test(l) && !/^(Fig|Tableau|Encadré)/i.test(l)) continue;
    if (l.length < 15 && !/[.!?]/.test(l) && !/^[A-Z]\./.test(l) && !BULLET_RE.test(l) && !SECTION_RE.test(l) && !LETTER_RE.test(l)) continue;
    if (/Bouchon\s*\)/.test(l)) continue;
    if (/vieillissemnt|viellissement/.test(l)) continue;
    if (/physiopathologiques\s+physiopathologiques/i.test(l)) continue;
    if (/et sans incapacité/i.test(l) && !(/espérance de vie/i.test(l))) continue;
    if (/\bgine\b/.test(l)) continue;
    if (/physiopathologiques.*(gine|agents étiologiques)/i.test(l)) continue;
    if (/anthropologiques\s+populationnel/i.test(l)) continue;

    paraBuf.push(l);
  }
  flushPara(); flushBullets(); flushNumList(); if (inCallout) flushCallout(); if (inSit) html += '</ul></div>'; closeSection();

  // R3 implementation: Remove sections with less than 20 characters of plain text in body
  html = html.replace(/<section class="manual-section"><header class="section-head">([\s\S]*?)<\/header><div class="section-body">([\s\S]*?)<\/div><\/section>/g, (match, head, body) => {
    const plainText = body.replace(/<[^>]+>/g, '').trim();
    if (plainText.length < 20) {
      return '';
    }
    return match;
  });

  return html || '<div class="empty"><div class="empty-text">Aucun contenu structuré</div></div>';
};

// Preprocess data first (R1)
preprocessAppData();

const chapters = APP_DATA.chapters;
const content = APP_DATA.content;

console.log("=== VERIFY ALL SECTIONS AND BOUNDARIES ===");
let totalEmpty = 0;
let totalSections = 0;

for (const ch of chapters) {
  const id = ch.id;
  const chunks = content[id] || [];
  if (!chunks.length) {
    console.log(id + " (" + ch.t + "): NO CONTENT");
    continue;
  }
  const raw = chunks.map(c => c[1]).join('\n');
  const html = renderChapter(raw, id);
  
  const hasOutline = html.includes('ch-outline');
  const parts = html.split(/<section class="manual-section">/);
  const emptySections = [];
  const filledSections = [];
  
  for (let i = 1; i < parts.length; i++) {
    const sec = parts[i];
    const headMatch = sec.match(/<span class="section-num">([^<]*)<\/span><span class="section-title">([^<]*)<\/span>/);
    const headText = headMatch ? headMatch[1] + ". " + headMatch[2] : '(unknown)';
    const bodyMatch = sec.match(/<div class="section-body">([\s\S]*?)<\/div><\/section>/);
    const bodyContent = bodyMatch ? bodyMatch[1].trim() : '';
    const bodyText = bodyContent.replace(/<[^>]+>/g, '').trim();
    
    if (bodyText.length < 20) {
      emptySections.push(headText);
    } else {
      filledSections.push(headText);
    }
  }
  
  totalEmpty += emptySections.length;
  totalSections += filledSections.length;
  console.log(id + " (" + ch.t.substring(0,25) + "): outline=" + hasOutline + " | filled=" + filledSections.length + " | empty=" + emptySections.length + (emptySections.length ? ' | EMPTY: ' + emptySections.join(', ') : ''));
}
console.log("\nSummary: Total Sections=" + totalSections + " | Total Empty=" + totalEmpty);
