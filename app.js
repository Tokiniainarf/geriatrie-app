/* Gériatrie 5e éd. — App logic v2 */
const CH_COLORS = {
  ch1:'#1e5f8a',ch2:'#2d6a4f',ch3:'#5c4d7d',ch4:'#9a6b2e',ch5:'#1a6b7c',
  ch6:'#8b4513',ch7:'#3d6b59',ch8:'#8b2942',ch9:'#2c5282',ch10:'#5a6472',
  ch11:'#7c3a5a',ch12:'#6b5b2e',ch13:'#2e6b8a',ch14:'#3d7a4a',ch15:'#1a6e80',
  ch16:'#5c4d8a',ch17:'#4a5568',ch18:'#2d6b55',ch19:'#6b3d7a',ch20:'#1a5f7a'
};

const RUBRIQUES = [
  'Éléments physiopathologiques', 'Prise en charge', 'Épidémiologie',
  'Prévalence, épidémiologie', 'Prévalence', 'Définition', 'Diagnostic',
  'Traitement', 'Pronostic', 'Clinique', 'Bilan', 'Surveillance'
];

const S = {
  view:'home', ch:null, pgIdx:0, readMode:'scroll',
  bm:JSON.parse(localStorage.getItem('gbm')||'[]'),
  read:JSON.parse(localStorage.getItem('grd')||'[]'),
  scroll:JSON.parse(localStorage.getItem('gsc')||'{}'),
  fs:parseInt(localStorage.getItem('gfs')||'17'),
  th:localStorage.getItem('gth')||'light',
  ob:localStorage.getItem('gob')==='1'
};

let shownIll = new Set(), sIdx = [], deferredPrompt = null;
S.readMode = localStorage.getItem('grm') || 'scroll';

document.addEventListener('DOMContentLoaded', () => {
  if (S.ob) document.getElementById('ob').classList.add('done');
  setFS(S.fs);
  document.getElementById('fsl').value = S.fs;
  applyTheme();
  syncReadModeUI();
  renderHome(); renderItems(); renderBm(); renderGallery(); updStats();
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(()=>{});
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault(); deferredPrompt = e;
    document.getElementById('installB').style.display = 'flex';
  });
  initSwipe();
  document.getElementById('si').addEventListener('input', onSearchInput);
});

function applyTheme() {
  const light = S.th === 'light';
  document.documentElement.setAttribute('data-theme', light ? 'light' : '');
  document.getElementById('thBtn').textContent = light ? '☀' : '☾';
  document.getElementById('dtog').classList.toggle('on', !light);
}

function syncReadModeUI() {
  const page = S.readMode === 'page';
  document.getElementById('rmBtn').textContent = page ? 'Défilement' : 'Page par page';
  document.getElementById('pgNav').style.display = page ? 'flex' : 'none';
  const rmTog = document.getElementById('rmTog');
  if (rmTog) rmTog.classList.toggle('on', page);
}

function closeOb() { document.getElementById('ob').classList.add('done'); localStorage.setItem('gob','1'); }

function toggleTheme() {
  S.th = S.th === 'dark' ? 'light' : 'dark';
  localStorage.setItem('gth', S.th);
  applyTheme();
}

function setFS(v) { S.fs = +v; document.body.style.fontSize = v + 'px'; localStorage.setItem('gfs', v); }

function isGoodSrc(src) { return src && !src.includes('figures/page_'); }

function illBlock(figId) {
  const key = 'fig:' + figId;
  if (shownIll.has(key) || typeof FIGURES === 'undefined') return '';
  const src = FIGURES[figId]?.[0];
  if (!isGoodSrc(src)) return '';
  shownIll.add(key);
  return `<figure class="fig-block" onclick="openLb('${src}')"><img src="${src}" alt="Figure ${figId}" loading="lazy"><figcaption>Figure ${figId}</figcaption></figure>`;
}

/* ── Text preprocessing ── */

const SKIP = /^(▼|©\s*\d{4}|Elsevier|Tous droits réservés|Gériatrie$|Entraînement$|En lien avec|Item, objectifs|hiérarchisation|Connaissances$)/i;
const DIAGRAM = /^(Fonction$|d'organe$|Réserve fonctionnelle|Seuil d'insuffisance|Effet de l'intervention|0\s+Âge$|100\s*%$|\d\s+(Vieillissement|Maladie|Stress))/i;

function fixHyph(text) {
  return text
    .replace(/(\w)-\s*\n\s*(\w)/g, '$1$2')
    .replace(/(\w)-\s+(\w)/g, (m, a, b) => (b[0] === b[0].toLowerCase() ? a + b : m));
}

function normTitle(s) {
  return s.replace(/\s+/g, ' ').trim().toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function isDiagramLine(s) {
  if (!s || s.length > 90) return false;
  if (/[.!?;:]$/.test(s) && s.length > 40) return false;
  return DIAGRAM.test(s)
    || /^\d{1,2}\s+(Vieillissement|Maladie|Stress|Réserve|Seuil|Effet)/i.test(s)
    || /^(Fonction|d'organe|Âge|Intervention)$/i.test(s)
    || /^\d+\s*%$/.test(s)
    || /^0\s+Âge$/.test(s);
}

function preprocessPage(raw, chTitle) {
  raw = fixHyph(raw);
  const titleNorm = normTitle(chTitle);
  const lines = raw.split('\n');
  const out = [];
  let inDiagram = false;

  for (let i = 0; i < lines.length; i++) {
    let s = lines[i].trim();
    if (!s || SKIP.test(s)) continue;

    if (normTitle(s) === titleNorm) continue;
    if (titleNorm.includes(normTitle(s)) && s.length < chTitle.length + 10) continue;
    if (/^Comprendre$/i.test(s) && i + 1 < lines.length && /vieillissement/i.test(lines[i + 1])) { i++; continue; }

    if (/^Fig\.\s*\d+\.\d+/.test(s)) {
      inDiagram = false;
      const figId = s.match(/Fig\.\s*(\d+\.\d+)/)?.[1];
      if (figId) out.push('[[FIG:' + figId + ']]');
      const cap = s.replace(/^Fig\.\s*\d+\.\d+\.?\s*[A-Z]?\s*/, '').trim();
      if (cap) out.push(cap);
      continue;
    }

    if (isDiagramLine(s)) { inDiagram = true; continue; }
    if (inDiagram) {
      if (s.length < 50 && !/[.!?]$/.test(s)) continue;
      inDiagram = false;
    }

    if (/^Situations de départ/i.test(s)) { out.push('[[SIT]]'); continue; }
    if (/^\d{2,3}\s+/.test(s) && out.length && out[out.length - 1] === '[[SIT]]') {
      out.push('• ' + s.replace(/^\d{2,3}\s+/, '')); continue;
    }

    out.push(s);
  }
  return out.join('\n');
}

function parseItemTable(raw) {
  const lines = raw.split('\n').map(l => l.trim()).filter(l => l && !SKIP.test(l) && !/Rang Rubrique/i.test(l));
  let title = 'Objectifs pédagogiques';
  const rows = [];
  let cur = null;

  for (const line of lines) {
    if (/^ITEM\s+\d+/i.test(line)) { title = line; continue; }
    const m = line.match(/^([A-D])\s+(.+)/);
    if (!m) {
      if (cur) {
        if (line.startsWith('Connaître') || cur.desc) cur.desc = (cur.desc ? cur.desc + ' ' : '') + line;
        else cur.intitule = (cur.intitule + ' ' + line).trim();
      }
      continue;
    }
    if (cur) rows.push(cur);
    let rest = m[2];
    let desc = '';
    const ci = rest.indexOf('Connaître');
    if (ci >= 0) { desc = rest.slice(ci); rest = rest.slice(0, ci).trim(); }

    let rubrique = '', intitule = rest;
    const sorted = [...RUBRIQUES].sort((a, b) => b.length - a.length);
    for (const rub of sorted) {
      if (rest.startsWith(rub)) {
        rubrique = rub.replace(/,\s*$/, '');
        intitule = rest.slice(rub.length).trim();
        break;
      }
    }
    if (!rubrique) {
      const p = rest.split(/\s{2,}|(?=[A-ZÉÈÀÂ][a-z])/);
      rubrique = p[0] || '';
      intitule = p.slice(1).join(' ').trim() || rest;
    }
    cur = { rang: m[1], rubrique, intitule, desc };
  }
  if (cur) rows.push(cur);
  if (rows.length < 2) return null;

  const trs = rows.map(r =>
    `<tr><td class="rang-${r.rang.toLowerCase()}">${r.rang}</td><td>${esc(r.rubrique)}</td><td>${fmt(r.intitule)}</td><td>${fmt(r.desc)}</td></tr>`
  ).join('');
  return `<div class="item-table"><div class="item-table-hd">${fmt(title)}</div><div class="tbl-scroll"><table><thead><tr><th>Rang</th><th>Rubrique</th><th>Intitulé</th><th>Descriptif</th></tr></thead><tbody>${trs}</tbody></table></div></div>`;
}

function esc(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function fmt(s) {
  s = esc(s);
  s = s.replace(/(ITEM\s+\d+[^<]*)/gi,'<span class="item-ref">$1</span>');
  s = s.replace(/(Fig\.\s*\d+\.\d+)/g,'<span class="fig-ref">$1</span>');
  s = s.replace(/(Encadré\s+\d+\.\d+)/g,'<span class="enc-ref">$1</span>');
  s = s.replace(/(Tableau\s+\d+\.\d+)/g,'<span class="enc-ref">$1</span>');
  s = s.replace(/«\s*(.+?)\s*»/g,'« <em>$1</em> »');
  s = s.replace(/\b(Remarque[s]?|Attention|Important|Note|Principe|Objectif|Conclusion|Diagnostic|Traitement|Étiologie|Pronostic|Épidémiologie|Physiopathologie|Clinique|Bilan|Prise en charge|Prévention|Surveillance|Critères?|Facteurs?|Risque)\s*:/gi,'<strong>$1</strong> :');
  s = s.replace(/(\d+[.,]?\d*)\s*(mg|kg|ml|mmol|g\/l|mmHg|cm|ans|m\/s|UI|µg|ng)\b/gi,'<span class="dose">$1 $2</span>');
  return s;
}

function renderBody(raw, pageNum, chTitle) {
  if (/Rang Rubrique/i.test(raw) || (raw.match(/^[A-D]\s+/gm) || []).length >= 3) {
    const tbl = parseItemTable(raw);
    if (tbl) return tbl;
  }

  const lines = raw.split('\n');
  let html = '', inUL = false, inBox = null, inSit = false;
  const plan = [];

  const closeUL = () => { if (inUL) { html += '</ul>'; inUL = false; } };
  const closeBox = () => { if (inBox) { html += '</div>'; inBox = null; } };

  for (let i = 0; i < lines.length; i++) {
    let s = lines[i].trim();
    if (!s) { closeUL(); closeBox(); continue; }

    if (s === '[[SIT]]') {
      closeUL(); closeBox(); inSit = true;
      html += '<div class="callout callout-sit"><div class="callout-title">Situations de départ</div><ul>';
      continue;
    }
    if (/^\[\[FIG:(.+)\]\]$/.test(s)) {
      closeUL(); closeBox();
      html += illBlock(s.match(/^\[\[FIG:(.+)\]\]$/)[1]);
      continue;
    }
    if (inSit && s.startsWith('• ')) {
      html += `<li>${fmt(s.slice(2))}</li>`; continue;
    }
    if (inSit && (/^ITEM\s+\d+/i.test(s) || /^[IVX]+\.\s/.test(s))) {
      html += '</ul></div>'; inSit = false; i--; continue;
    }

    let m;
    if ((m = s.match(/^([IVX]+)\.\s+(.+)$/)) && m[2].length > 4) {
      if (!html && plan.length < 10) { plan.push(m[1] + '. ' + m[2]); continue; }
      closeUL(); closeBox();
      html += `<h2 class="section-title" id="sec-p${pageNum}-${m[1]}">${fmt(m[1] + '. ' + m[2])}</h2>`;
      continue;
    }
    if (plan.length && !html && !/^[IVX]+\./.test(s)) {
      html += `<nav class="chapter-plan"><div class="callout-title">Plan du chapitre</div><ol>${plan.map(p=>`<li>${fmt(p)}</li>`).join('')}</ol></nav>`;
      plan.length = 0;
    }
    if (chTitle && normTitle(s) === normTitle(chTitle)) continue;

    if ((m = s.match(/^([A-Z])\.\s+(.+)$/)) && m[2].length > 2) {
      closeUL(); closeBox();
      html += `<h3 class="subsection-title">${fmt(m[1] + '. ' + m[2])}</h3>`; continue;
    }
    if (/^Encadré\s+\d+/.test(s)) {
      closeUL(); closeBox(); inBox = 'enc';
      html += `<div class="callout callout-enc"><div class="callout-title">${fmt(s)}</div>`; continue;
    }
    if (/^points?\s+clés?/i.test(s)) {
      closeUL(); closeBox(); inBox = 'key';
      html += '<div class="callout callout-key"><div class="callout-title">Points clés</div><ul>'; inUL = true; continue;
    }
    if (/^[•\-\–\*]\s/.test(s)) {
      closeBox(); if (!inUL) { inUL = true; html += '<ul class="body-list">'; }
      html += `<li>${fmt(s.replace(/^[•\-\–\*]\s*/, ''))}</li>`; continue;
    }

    closeUL();
    if (/^(Rang|Rubrique)\b/i.test(s)) continue;

    let merged = s;
    while (i + 1 < lines.length) {
      const next = lines[i + 1].trim();
      if (!next || SKIP.test(next) || next === '[[SIT]]' || /^\[\[FIG:/.test(next)) break;
      if (/^[IVX]+\.\s/.test(next) || /^[A-Z]\.\s/.test(next) || /^Encadré/.test(next) || /^points?\s+clés?/i.test(next)) break;
      if (/^[•\-\–\*]\s/.test(next)) break;
      if (!/[.!?:…»)]$/.test(merged) && next[0] === next[0].toLowerCase()) { merged += ' ' + next; i++; }
      else if (next.length < 50 && !/[.!?]$/.test(next)) { merged += ' ' + next; i++; }
      else break;
    }
    if (merged.length < 3) continue;
    if (inBox) html += `<p>${fmt(merged)}</p>`;
    else html += `<p class="body-text">${fmt(merged)}</p>`;
  }

  if (plan.length) {
    html = `<nav class="chapter-plan"><div class="callout-title">Plan du chapitre</div><ol>${plan.map(p=>`<li>${fmt(p)}</li>`).join('')}</ol></nav>` + html;
  }
  closeUL(); closeBox();
  if (inSit) html += '</ul></div>';
  return html;
}

function renderPageContent(page, ch) {
  const cleaned = preprocessPage(page[1], ch.t);
  const body = renderBody(cleaned, page[0], ch.t);
  if (!body.trim()) return '';
  return `<section class="page-section" id="pg-${page[0]}" data-pg="${page[0]}">${body}</section>`;
}

function buildTOC(pages) {
  const sections = [], seen = new Set();
  pages.forEach(p => {
    preprocessPage(p[1], '').split('\n').forEach(line => {
      const m = line.trim().match(/^([IVX]+)\.\s+(.+)$/);
      if (m && m[2].length > 4) {
        const id = `sec-p${p[0]}-${m[1]}`;
        if (!seen.has(id)) { seen.add(id); sections.push({ id, title: m[1] + '. ' + m[2].substring(0, 72), page: p[0] }); }
      }
    });
  });
  return sections;
}

/* ── Navigation ── */

function sw(view) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.ni').forEach(n => n.classList.remove('on'));
  document.getElementById('v' + view.charAt(0).toUpperCase() + view.slice(1))?.classList.add('active');
  document.querySelector(`[data-v="${view}"]`)?.classList.add('on');
  S.view = view;
  document.querySelector('.main').classList.toggle('ch-active', view === 'ch');
  document.getElementById('rp').style.display = view === 'ch' ? 'block' : 'none';
  document.getElementById('fab').style.display = view === 'ch' && S.readMode === 'scroll' ? 'flex' : 'none';
  document.getElementById('rtoolbar').style.display = view === 'ch' ? 'flex' : 'none';
  window.scrollTo(0, 0);
  if (view === 'bm') renderBm();
  if (view === 'ill') renderGallery();
  if (view === 'set') document.getElementById('pd').textContent = `${S.read.length} / ${APP_DATA.chapters.length} chapitres lus`;
}

function goHome() { saveScroll(); sw('home'); S.ch = null; }

function showCh(id, pgIdx) {
  const ch = APP_DATA.chapters.find(c => c.id === id);
  if (!ch) return;
  saveScroll();
  S.ch = id;
  S.pgIdx = pgIdx || 0;
  shownIll = new Set();
  if (!S.read.includes(id)) { S.read.push(id); localStorage.setItem('grd', JSON.stringify(S.read)); }

  const num = id.replace('ch', '');
  document.getElementById('chHero').setAttribute('data-c', id);
  document.getElementById('chNum').textContent = num;
  document.getElementById('chNum').style.color = CH_COLORS[id];
  document.getElementById('chT').textContent = ch.t;
  document.getElementById('chTags').innerHTML =
    ch.items.map(i => `<span class="tag">${i}</span>`).join('') +
    `<span class="tag tag-muted">${(APP_DATA.content[id]||[]).length} pages</span>`;

  const pages = APP_DATA.content[id] || [];
  const toc = buildTOC(pages);
  document.getElementById('tocList').innerHTML = toc.length
    ? toc.map(s => `<div class="toc-i" onclick="jumpSec('${s.id}')"><span class="toc-p">p. ${s.page}</span><span>${esc(s.title)}</span></div>`).join('')
    : '<div class="toc-empty">Sommaire non disponible</div>';

  renderChapterPages(pages);
  const idx = APP_DATA.chapters.findIndex(c => c.id === id);
  document.getElementById('prevB').disabled = idx <= 0;
  document.getElementById('nextB').disabled = idx >= APP_DATA.chapters.length - 1;
  updBB(); sw('ch');
  setTimeout(() => {
    if (S.scroll[id]) window.scrollTo(0, S.scroll[id]);
    else if (pgIdx > 0) jumpPage(pgIdx);
    updPageInd();
  }, 60);
}

function renderChapterPages(pages) {
  const ch = APP_DATA.chapters.find(c => c.id === S.ch);
  const body = document.getElementById('chBody');
  if (S.readMode === 'page') {
    const p = pages[S.pgIdx];
    if (!p) return;
    const content = renderPageContent(p, ch);
    body.innerHTML = `<article class="reader">${content || '<p class="empty-page">Page vide</p>'}</article>`;
    document.getElementById('pgPrev').disabled = S.pgIdx <= 0;
    document.getElementById('pgNext').disabled = S.pgIdx >= pages.length - 1;
  } else {
    body.innerHTML = `<article class="reader">${pages.map(p => renderPageContent(p, ch)).join('')}</article>`;
  }
}

function navCh(d) { const idx = APP_DATA.chapters.findIndex(c => c.id === S.ch); const n = APP_DATA.chapters[idx + d]; if (n) showCh(n.id); }

function navPage(d) {
  const pages = APP_DATA.content[S.ch] || [];
  S.pgIdx = Math.max(0, Math.min(pages.length - 1, S.pgIdx + d));
  shownIll = new Set();
  renderChapterPages(pages);
  window.scrollTo(0, 0);
  updPageInd();
}

function toggleReadMode() {
  S.readMode = S.readMode === 'scroll' ? 'page' : 'scroll';
  localStorage.setItem('grm', S.readMode);
  syncReadModeUI();
  document.getElementById('fab').style.display = S.readMode === 'scroll' && S.view === 'ch' ? 'flex' : 'none';
  if (S.ch) { shownIll = new Set(); renderChapterPages(APP_DATA.content[S.ch] || []); }
}

function jumpSec(id) { closeTOC(); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }

function jumpPage(idx) {
  const pages = APP_DATA.content[S.ch] || [];
  if (idx < 0 || idx >= pages.length) return;
  if (S.readMode === 'page') { S.pgIdx = idx; renderChapterPages(pages); window.scrollTo(0, 0); }
  else document.getElementById('pg-' + pages[idx][0])?.scrollIntoView({ behavior: 'smooth' });
  closePgJump(); updPageInd();
}

function openTOC() { document.getElementById('tocD').classList.add('open'); }
function closeTOC() { document.getElementById('tocD').classList.remove('open'); }
function openPgJump() {
  const pages = APP_DATA.content[S.ch] || [];
  document.getElementById('pgJumpList').innerHTML = pages.map((p, i) =>
    `<div class="pj-i" onclick="jumpPage(${i})"><span>p. ${p[0]}</span>Page ${i + 1} / ${pages.length}</div>`
  ).join('');
  document.getElementById('pgJump').classList.add('open');
}
function closePgJump() { document.getElementById('pgJump').classList.remove('open'); }
function openLb(src) { document.getElementById('lbImg').src = src; document.getElementById('lb').classList.add('open'); }
function closeLb() { document.getElementById('lb').classList.remove('open'); }

function saveScroll() {
  if (S.ch && S.readMode === 'scroll') { S.scroll[S.ch] = window.scrollY; localStorage.setItem('gsc', JSON.stringify(S.scroll)); }
}

function updPageInd() {
  const pages = APP_DATA.content[S.ch] || [];
  if (!pages.length) return;
  let cur = S.readMode === 'page' ? S.pgIdx : 0;
  if (S.readMode === 'scroll') {
    const secs = document.querySelectorAll('.page-section');
    const y = window.scrollY + 140;
    secs.forEach((el, i) => { if (el.offsetTop <= y) cur = i; });
  }
  const p = pages[cur];
  document.getElementById('pageInd').textContent = p ? `p. ${p[0]} · ${cur + 1}/${pages.length}` : '';
}

/* ── Home & lists ── */

function renderHome() {
  const p1 = document.getElementById('p1'), p2 = document.getElementById('p2');
  p1.innerHTML = p2.innerHTML = '';
  APP_DATA.chapters.forEach(ch => {
    const rd = S.read.includes(ch.id), bm = S.bm.includes(ch.id);
    const pgCount = APP_DATA.content[ch.id]?.length || 0;
    const num = ch.id.replace('ch', '');
    const el = document.createElement('div');
    el.className = 'ch-row' + (rd ? ' read' : '');
    el.onclick = () => showCh(ch.id);
    el.innerHTML = `
      <div class="ch-row-num" style="color:${CH_COLORS[ch.id]}">${num}</div>
      <div class="ch-row-body">
        <div class="ch-row-title">${esc(ch.t)}</div>
        <div class="ch-row-meta">${ch.items.map(i=>`<span>${i}</span>`).join('')}${pgCount ? `<span>${pgCount} p.</span>` : ''}${rd ? '<span class="read-mark">Lu</span>' : ''}</div>
      </div>
      <button class="ch-row-bm ${bm?'on':''}" onclick="event.stopPropagation();quickBm('${ch.id}')" aria-label="Favori">${bm?'★':'☆'}</button>`;
    (ch.part === 1 ? p1 : p2).appendChild(el);
  });
  const recent = document.getElementById('recent');
  if (S.read.length) {
    recent.style.display = 'block';
    const last = S.read[S.read.length - 1], lc = APP_DATA.chapters.find(c => c.id === last);
    if (lc) {
      document.getElementById('recentC').innerHTML = `
        <div class="resume-card" onclick="showCh('${last}')">
          <div class="resume-label">Reprendre</div>
          <div class="resume-title">${esc(lc.t)}</div>
          <div class="resume-meta">Chapitre ${last.replace('ch','')}</div>
        </div>`;
    }
  } else recent.style.display = 'none';
}

function quickBm(id) {
  const i = S.bm.indexOf(id);
  if (i >= 0) { S.bm.splice(i, 1); toast('Retiré des favoris'); }
  else { S.bm.push(id); toast('Ajouté aux favoris'); }
  localStorage.setItem('gbm', JSON.stringify(S.bm));
  renderHome(); updStats();
}

function toggleBm() { if (S.ch) quickBm(S.ch); updBB(); }
function updBB() { const b = document.getElementById('bmB'); if (b) b.textContent = S.bm.includes(S.ch) ? '★ Favori' : '☆ Favori'; }

function renderBm() {
  const l = document.getElementById('bml');
  if (!S.bm.length) { l.innerHTML = '<div class="empty-state"><p>Aucun favori</p><span>Touchez ☆ sur un chapitre</span></div>'; return; }
  l.innerHTML = S.bm.map(id => {
    const ch = APP_DATA.chapters.find(c => c.id === id);
    if (!ch) return '';
    return `<div class="ch-row" onclick="showCh('${id}')"><div class="ch-row-num">${id.replace('ch','')}</div><div class="ch-row-body"><div class="ch-row-title">${esc(ch.t)}</div></div></div>`;
  }).join('');
}

function renderGallery() {
  const el = document.getElementById('illGrid');
  if (!el || typeof FIGURES === 'undefined') return;
  const items = Object.entries(FIGURES)
    .filter(([, s]) => isGoodSrc(s[0]))
    .map(([id, s]) => {
      const chNum = parseInt(id.split('.')[0], 10);
      const ch = APP_DATA.chapters.find(c => c.id === 'ch' + chNum);
      return { id, src: s[0], ch: ch?.t || 'Chapitre ' + chNum };
    })
    .sort((a, b) => {
      const [ac, ai] = a.id.split('.').map(Number);
      const [bc, bi] = b.id.split('.').map(Number);
      return ac - bc || ai - bi;
    });
  el.innerHTML = items.length
    ? items.map(it => `<div class="fig-card" onclick="openLb('${it.src}')"><img src="${it.src}" alt="Fig. ${it.id}" loading="lazy"><div class="fig-card-cap"><strong>Fig. ${it.id}</strong><span>${esc(it.ch)}</span></div></div>`).join('')
    : '<div class="empty-state"><p>Aucune figure</p></div>';
  const cnt = document.getElementById('illCnt');
  if (cnt) cnt.textContent = items.length;
}

function renderItems() {
  const items = [];
  APP_DATA.chapters.forEach(ch => ch.items.forEach(it => items.push({ it, ch: ch.id, t: ch.t })));
  const fl = document.getElementById('ifl');
  fl.innerHTML = '<button class="filter-btn on" onclick="flI(\'all\',this)">Tous</button>';
  [...new Set(items.map(i => i.it))].sort().forEach(it => {
    fl.innerHTML += `<button class="filter-btn" onclick="flI('${it}',this)">${it}</button>`;
  });
  window._id = items;
  flI('all', document.querySelector('.filter-btn'));
}

function flI(f, el) {
  document.querySelectorAll('.filter-btn').forEach(c => c.classList.remove('on'));
  el.classList.add('on');
  const items = f === 'all' ? window._id : window._id.filter(i => i.it === f);
  document.getElementById('il').innerHTML = items.map(i =>
    `<div class="item-row" onclick="showCh('${i.ch}')"><span class="item-badge">${i.it}</span><span class="item-label">${esc(i.t)}</span></div>`
  ).join('');
}

/* ── Search ── */

function buildSI() {
  if (sIdx.length) return;
  APP_DATA.chapters.forEach(ch => {
    (APP_DATA.content[ch.id] || []).forEach(p => {
      sIdx.push({ t: p[1].toLowerCase(), p: p[0], ch: ch.id, ct: ch.t, raw: p[1] });
    });
  });
}

function openSearch() {
  buildSI();
  document.getElementById('sov').classList.add('open');
  setTimeout(() => document.getElementById('si').focus(), 80);
  document.getElementById('srl').innerHTML = '<div class="sr-empty">Rechercher dans le manuel…</div>';
}

function closeSearch() { document.getElementById('sov').classList.remove('open'); document.getElementById('si').value = ''; }

function onSearchInput() {
  const q = document.getElementById('si').value.toLowerCase().trim(), el = document.getElementById('srl');
  if (q.length < 2) { el.innerHTML = '<div class="sr-empty">2 caractères minimum</div>'; return; }
  const words = q.split(/\s+/), res = [];
  for (const it of sIdx) {
    if (words.every(w => it.t.includes(w))) {
      const idx = it.t.indexOf(words[0]), s = Math.max(0, idx - 60), e = Math.min(it.raw.length, idx + words[0].length + 100);
      let sn = it.raw.substring(s, e);
      words.forEach(w => { sn = sn.replace(new RegExp(`(${w.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')})`,'gi'),'<mark>$1</mark>'); });
      res.push({ p: it.p, ch: it.ch, ct: it.ct, sn });
      if (res.length >= 20) break;
    }
  }
  el.innerHTML = res.length
    ? res.map(r => `<div class="sr-i" onclick="closeSearch();showCh('${r.ch}')"><div class="sr-h"><span class="sr-p">p. ${r.p}</span><span class="sr-c">${esc(r.ct)}</span></div><div class="sr-t">${sn(r.sn)}</div></div>`).join('')
    : `<div class="sr-empty">Aucun résultat pour « ${esc(q)} »</div>`;
}

function sn(s) { return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

window.addEventListener('scroll', () => {
  if (S.view === 'ch') {
    const h = document.documentElement;
    const pct = h.scrollHeight > h.clientHeight ? h.scrollTop / (h.scrollHeight - h.clientHeight) * 100 : 0;
    document.getElementById('rpb').style.width = pct + '%';
    document.getElementById('fab').style.display = S.readMode === 'scroll' && h.scrollTop > 500 ? 'flex' : 'none';
    updPageInd();
  }
}, { passive: true });

function initSwipe() {
  let sx = 0;
  document.addEventListener('touchstart', e => { sx = e.touches[0].clientX; }, { passive: true });
  document.addEventListener('touchend', e => {
    if (S.view !== 'ch') return;
    const dx = e.changedTouches[0].clientX - sx;
    if (Math.abs(dx) < 70) return;
    if (S.readMode === 'page') navPage(dx < 0 ? 1 : -1);
    else { if (dx < -70) navCh(1); else if (dx > 70) navCh(-1); }
  }, { passive: true });
}

async function installPWA() {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
  document.getElementById('installB').style.display = 'none';
}

function toast(m) { const e = document.getElementById('toast'); e.textContent = m; e.classList.add('show'); setTimeout(() => e.classList.remove('show'), 2000); }

function updStats() {
  const b = S.bm.length;
  document.getElementById('bmc').innerHTML = `<b>${b}</b> favoris`;
  const bd = document.getElementById('bmb');
  if (b > 0) { bd.style.display = 'flex'; bd.textContent = b; } else bd.style.display = 'none';
  const total = typeof FIGURES !== 'undefined' ? Object.values(FIGURES).filter(s => isGoodSrc(s[0])).length : 0;
  const figEl = document.getElementById('figC');
  if (figEl) figEl.innerHTML = `<b>${total}</b> figures`;
}

function resetProg() { S.read = []; S.scroll = {}; localStorage.setItem('grd', '[]'); localStorage.setItem('gsc', '{}'); renderHome(); toast('Progression réinitialisée'); }
function clearAll() {
  if (!confirm('Effacer favoris et progression ?')) return;
  S.bm = []; S.read = []; S.scroll = {};
  localStorage.removeItem('gbm'); localStorage.removeItem('grd'); localStorage.removeItem('gsc');
  renderHome(); renderBm(); updStats(); toast('Données effacées');
}

document.addEventListener('keydown', e => {
  if (e.key === '/' && !e.ctrlKey && document.activeElement.tagName !== 'INPUT') { e.preventDefault(); openSearch(); }
  if (e.key === 'Escape') { closeSearch(); closeTOC(); closePgJump(); closeLb(); }
  if (S.view === 'ch') {
    if (e.key === 'ArrowRight') S.readMode === 'page' ? navPage(1) : navCh(1);
    if (e.key === 'ArrowLeft') S.readMode === 'page' ? navPage(-1) : navCh(-1);
  }
});