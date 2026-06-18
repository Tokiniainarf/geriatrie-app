/* Gériatrie 5e éd. — App logic */
const CH_ILL = {
  ch1:'🧬',ch2:'🧠',ch3:'📊',ch4:'⚖️',ch5:'👁️',
  ch6:'🦴',ch7:'🦵',ch8:'💊',ch9:'🧠',ch10:'😔',
  ch11:'😵',ch12:'🚶',ch13:'🛏️',ch14:'🍎',ch15:'💧',
  ch16:'💉',ch17:'🕊️',ch18:'📝',ch19:'🔑',ch20:'❓'
};
const CH_COLORS = {
  ch1:'#6366f1',ch2:'#ec4899',ch3:'#14b8a6',ch4:'#f59e0b',ch5:'#8b5cf6',
  ch6:'#f97316',ch7:'#10b981',ch8:'#ef4444',ch9:'#6366f1',ch10:'#64748b',
  ch11:'#f43f5e',ch12:'#f59e0b',ch13:'#0ea5e9',ch14:'#22c55e',ch15:'#06b6d4',
  ch16:'#8b5cf6',ch17:'#64748b',ch18:'#059669',ch19:'#d946ef',ch20:'#0284c7'
};
const SEC_HINTS = {
  'I.':'📌','II.':'📌','III.':'📌','IV.':'📌','V.':'📌','VI.':'📌',
  'définition':'📖','Définition':'📖','épidémiologie':'📊','Épidémiologie':'📊',
  'physiopathologie':'🔬','Physiopathologie':'🔬','diagnostic':'🔍','Diagnostic':'🔍',
  'traitement':'💊','Traitement':'💊','prévention':'🛡️','Prévention':'🛡️',
  'pronostic':'📈','Pronostic':'📈','étiologie':'🔎','Étiologie':'🔎',
  'clinique':'🩺','Clinique':'🩺','bilan':'📋','Bilan':'📋',
  'Points clés':'🔑','points clés':'🔑','Encadré':'📋','Mise en':'🎭'
};

const S = {
  view:'home', ch:null, pgIdx:0, readMode:'scroll',
  bm:JSON.parse(localStorage.getItem('gbm')||'[]'),
  read:JSON.parse(localStorage.getItem('grd')||'[]'),
  scroll:JSON.parse(localStorage.getItem('gsc')||'{}'),
  fs:parseInt(localStorage.getItem('gfs')||'15'),
  th:localStorage.getItem('gth')||'dark',
  ob:localStorage.getItem('gob')==='1'
};

let shownIll = new Set(), sIdx = [], deferredPrompt = null;

S.readMode = localStorage.getItem('grm') || 'scroll';

document.addEventListener('DOMContentLoaded', () => {
  if (S.ob) document.getElementById('ob').classList.add('done');
  setFS(S.fs);
  document.getElementById('fsl').value = S.fs;
  if (S.th === 'light') {
    document.documentElement.setAttribute('data-theme','light');
    document.getElementById('thBtn').textContent = '☀️';
    document.getElementById('dtog').classList.remove('on');
  }
  document.getElementById('rmBtn').textContent = S.readMode === 'page' ? '📜 Défilement' : '📄 Page';
  document.getElementById('pgNav').style.display = S.readMode === 'page' ? 'flex' : 'none';
  const rmTog = document.getElementById('rmTog');
  if (rmTog) rmTog.classList.toggle('on', S.readMode === 'page');
  renderHome(); renderItems(); renderBm(); renderGallery(); updStats();
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(()=>{});
  window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); deferredPrompt = e; document.getElementById('installB').style.display = 'flex'; });
  initSwipe();
  document.getElementById('si').addEventListener('input', onSearchInput);
});

function closeOb() { document.getElementById('ob').classList.add('done'); localStorage.setItem('gob','1'); }
function toggleTheme() {
  S.th = S.th === 'dark' ? 'light' : 'dark';
  localStorage.setItem('gth', S.th);
  document.documentElement.setAttribute('data-theme', S.th === 'light' ? 'light' : '');
  document.getElementById('thBtn').textContent = S.th === 'light' ? '☀️' : '🌙';
  document.getElementById('dtog').classList.toggle('on', S.th === 'dark');
}
function setFS(v) { S.fs = +v; document.body.style.fontSize = v + 'px'; localStorage.setItem('gfs', v); }

function isGoodSrc(src) {
  return src && !src.includes('figures/page_');
}

function illBlock(figId) {
  const key = 'fig:' + figId;
  if (shownIll.has(key) || typeof FIGURES === 'undefined') return '';
  const src = FIGURES[figId]?.[0];
  if (!isGoodSrc(src)) return '';
  shownIll.add(key);
  return `<div class="fig-block" onclick="openLb('${src}')"><img src="${src}" alt="Fig. ${figId}" loading="lazy"><div class="fig-cap">📊 Fig. ${figId}</div></div>`;
}

function chThumb(id) {
  return `<span class="ch-emoji">${CH_ILL[id] || '📖'}</span>`;
}

function setChapterHero(id) {
  const banner = document.getElementById('chBanner');
  if (banner) { banner.innerHTML = ''; banner.style.display = 'none'; }
  const ill = document.getElementById('chIll');
  ill.textContent = CH_ILL[id] || '📖';
  ill.style.display = 'block';
}

function pageImgs() { return ''; }

const SKIP_LINE = /^(▼|©\s*\d{4}|Elsevier|Tous droits réservés|Gériatrie$|Entraînement$|En lien avec|Item, objectifs|hiérarchisation)/i;

function fixHyph(text) {
  return text.replace(/(\w)-\s*\n\s*(\w)/g, '$1$2');
}

function renderItemTable(raw) {
  const lines = raw.split('\n').map(l => l.trim()).filter(l => l && !SKIP_LINE.test(l) && !/Rang Rubrique/i.test(l));
  let title = 'Objectifs pédagogiques';
  const rows = [];
  let cur = null;
  for (const line of lines) {
    if (/^ITEM\s+\d+/i.test(line)) { title = line; continue; }
    const m = line.match(/^([A-D])\s+(.+)/);
    if (m) {
      if (cur) rows.push(cur);
      let rest = m[2];
      let desc = '';
      if (rest.includes('Connaître')) {
        const i = rest.indexOf('Connaître');
        desc = rest.slice(i);
        rest = rest.slice(0, i).trim();
      }
      cur = { rang: m[1], rubrique: '', intitule: rest, desc };
    } else if (cur) {
      if (line.includes('Connaître') && !cur.desc) cur.desc = line;
      else if (cur.desc) cur.desc += ' ' + line;
      else cur.intitule += ' ' + line;
    }
  }
  if (cur) rows.push(cur);
  if (rows.length < 2) return null;
  const trs = rows.map(r => `<tr><td>${fmt(r.rang)}</td><td>${fmt(r.rubrique)}</td><td>${fmt(r.intitule)}</td><td>${fmt(r.desc)}</td></tr>`).join('');
  return `<div class="tbl-w tbl-item"><div class="tbl-title">📋 ${fmt(title)}</div><table><thead><tr><th>Rang</th><th>Rubrique</th><th>Intitulé</th><th>Descriptif</th></tr></thead><tbody>${trs}</tbody></table></div>`;
}

function renderBlocks(raw) {
  return raw.replace(/\[\[TABLE:([^\]]+)\]\]([\s\S]*?)\[\[\/TABLE\]\]/g, (_, title, body) => {
    const rows = body.trim().split('\n').filter(Boolean);
    if (rows.length < 2) return '';
    const hdr = rows[0].split('|');
    const trs = rows.slice(1).map(r => {
      const c = r.split('|');
      return `<tr>${c.map((cell,i) => `<t${i===0?'h':'d'}>${fmt(cell)}</t${i===0?'h':'d'}>`).join('')}</tr>`;
    }).join('');
    return `<div class="tbl-w tbl-item"><div class="tbl-title">📋 ${fmt(title)}</div><table><thead><tr>${hdr.map(h=>`<th>${fmt(h)}</th>`).join('')}</tr></thead><tbody>${trs}</tbody></table></div>`;
  }).replace(/\[\[BOX:([^\]]+)\]\]([\s\S]*?)\[\[\/BOX\]\]/g, (_, title, body) => {
    const cls = /plan/i.test(title) ? 'bx-enc' : /situation/i.test(title) ? 'bx-sit' : 'bx-key';
    const icon = /plan/i.test(title) ? '📑' : /situation/i.test(title) ? '🎭' : '📌';
    const items = body.trim().split('\n').filter(Boolean).map(l =>
      `<li>${fmt(l.replace(/^[•\-\–\*]\s*/,''))}</li>`).join('');
    return `<div class="bx ${cls}"><div class="bx-t">${icon} ${fmt(title)}</div><ul class="bx-list">${items}</ul></div>`;
  });
}

function fmt(s) {
  s = s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  s = s.replace(/(ITEM\s+\d+[^<]*)/g,'<span class="item-r">$1</span>');
  s = s.replace(/(Fig\.\s*\d+\.\d+)/g,'<span class="fig-r">$1</span>');
  s = s.replace(/(Encadré\s+\d+\.\d+)/g,'<span class="enc-r">$1</span>');
  s = s.replace(/(Tableau\s+\d+\.\d+)/g,'<span class="enc-r">$1</span>');
  s = s.replace(/«\s*(.+?)\s*»/g,'« <em>$1</em> »');
  s = s.replace(/(Remarque[s]?|Attention|Important|Note|Principe|Objectif|Conclusion|Diagnostic|Traitement|Étiologie|Pronostic|Épidémiologie|Physiopathologie|Clinique|Bilan|Prise en charge|Prévention|Surveillance|Critère[s]?|Facteur[s]?|Risque)\s*:/g,'<strong>$1</strong> :');
  s = s.replace(/(\d+[.,]?\d*)\s*(mg|kg|ml|mmol|g\/l|mmHg|cm|ans|m\/s|UI)\b/g,'<span class="clin-v">$1 $2</span>');
  return s;
}

function extractFigs(s) {
  let extra = '';
  let m;
  const re = /Fig\.\s*(\d+)\.(\d+)/g;
  while ((m = re.exec(s)) !== null) extra += illBlock(m[1]+'.'+m[2]);
  return extra;
}

function renderBody(raw, pageNum, chTitle) {
  raw = fixHyph(raw);
  if (/Rang Rubrique/i.test(raw) || (raw.match(/^[A-D]\s+/gm) || []).length >= 3) {
    const tbl = renderItemTable(raw);
    if (tbl) return tbl;
  }

  let html = '';
  const lines = raw.split('\n');
  let inUL = false, inBox = null, inSit = false;
  const plan = [];

  function closeBox() { if (inBox) { html += '</div>'; inBox = null; } }
  function closeUL() { if (inUL) { html += '</ul>'; inUL = false; } }
  function getSecIcon(s) { for (const [k,v] of Object.entries(SEC_HINTS)) if (s.includes(k)) return v; return ''; }

  for (let i = 0; i < lines.length; i++) {
    let s = lines[i].trim();
    if (!s || SKIP_LINE.test(s)) { closeUL(); closeBox(); continue; }
    if (/^Connaissances$/i.test(s)) continue;

    if (/^Situations de départ/i.test(s)) {
      closeUL(); closeBox(); inSit = true; inBox = 'sit';
      html += '<div class="bx bx-sit"><div class="bx-t">🎭 Situations de départ</div><ul class="bx-list">';
      continue;
    }
    if (inSit && /^\d{2,3}\s+/.test(s)) {
      html += `<li>${fmt(s.replace(/^\d{2,3}\s+/, ''))}</li>`;
      continue;
    }
    if (inSit && (/^ITEM\s+\d+/i.test(s) || /^[IVX]+\.\s/.test(s))) {
      html += '</ul></div>'; inBox = null; inSit = false;
      i--;
      continue;
    }

    let m;
    if ((m = s.match(/^([IVX]+)\.\s+(.+)$/)) && m[2].length > 5) {
      if (!html && plan.length < 8) { plan.push(s); continue; }
      closeUL(); closeBox();
      const ic = getSecIcon(s);
      html += `<h3 id="sec-p${pageNum}-${m[1]}">${ic ? ic+' ' : ''}${fmt(m[1]+'. '+m[2])}</h3>`;
      continue;
    }
    if (plan.length && !html && !/^[IVX]+\./.test(s)) {
      html += `<div class="bx bx-enc"><div class="bx-t">📑 Plan du chapitre</div><ul class="bx-list">${plan.map(p=>`<li>${fmt(p)}</li>`).join('')}</ul></div>`;
      plan.length = 0;
    }
    if (chTitle && s.replace(/\s+/g,' ').toLowerCase() === chTitle.replace(/\s+/g,' ').toLowerCase()) continue;

    if ((m = s.match(/^([A-Z])\.\s+([A-ZÉÈÀÂ].+)$/))) {
      closeUL(); closeBox();
      html += `<h4>${fmt(m[1]+'. '+m[2])}</h4>`; continue;
    }
    if ((m = s.match(/^([A-D])\s+([a-zéèêëàâäùûüœ].+)$/))) {
      closeUL(); closeBox();
      html += `<p><span class="para-lbl">${m[1]}</span> ${fmt(m[2])}</p>`; continue;
    }
    if (/^points?\s+clés?|^clés\s*$/i.test(s)) { closeUL(); closeBox(); inBox='key'; html+='<div class="bx bx-key"><div class="bx-t">🔑 Points clés</div>'; continue; }
    if (/^Encadré\s+\d+/.test(s)) { closeUL(); closeBox(); inBox='enc'; html+=`<div class="bx bx-enc"><div class="bx-t">📋 ${fmt(s)}</div>`; continue; }
    if (/^Mises?\s+en\s+situation/i.test(s)) { closeUL(); closeBox(); inBox='sit'; html+=`<div class="bx bx-sit"><div class="bx-t">🎭 ${fmt(s)}</div>`; continue; }
    if (/^[•\-\–\*]\s/.test(s)) { closeBox(); if (!inUL) { inUL=true; html+='<ul>'; } html+=`<li>${fmt(s.replace(/^[•\-\–\*]\s*/,''))}</li>`; continue; }
    closeUL();
    if (/^(Rang|Rubrique)\b/i.test(s)) continue;

    let merged = s;
    while (i+1 < lines.length) {
      let next = lines[i+1].trim();
      if (!next || SKIP_LINE.test(next) || /^[IVX]+\.\s/.test(next) || /^[A-Z]\.\s+[A-ZÉÈ]/.test(next) || /^[A-D]\s+[a-zéè]/.test(next) || /^[•\-\–\*]\s/.test(next) || /^Situations de départ/i.test(next) || /^Encadré/.test(next)) break;
      if (!merged.match(/[.!?:…»)]$/) && next[0] && (next[0].toLowerCase() === next[0] || next.length < 80)) { merged += ' ' + next; i++; } else break;
    }
    if (merged.length < 4) continue;
    html += `<p>${fmt(merged)}</p>`;
    html += extractFigs(merged);
  }
  if (plan.length) html = `<div class="bx bx-enc"><div class="bx-t">📑 Plan du chapitre</div><ul class="bx-list">${plan.map(p=>`<li>${fmt(p)}</li>`).join('')}</ul></div>` + html;
  closeUL(); closeBox();
  if (inSit) html += '</ul></div>';
  return html;
}

function renderText(raw, pageNum) {
  const ch = S.ch ? APP_DATA.chapters.find(c => c.id === S.ch) : null;
  return renderBody(raw, pageNum, ch?.t || '');
}

function buildTOC(pages) {
  const sections = [];
  pages.forEach(p => {
    p[1].split('\n').forEach(line => {
      const m = line.trim().match(/^([IVX]+)\.\s+(.+)$/);
      if (m && m[2].length > 3) sections.push({ id:`sec-p${p[0]}-${m[1]}`, title:m[1]+'. '+m[2].substring(0,60), page:p[0] });
    });
  });
  return sections;
}

function sw(view) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.ni').forEach(n => n.classList.remove('on'));
  const el = document.getElementById('v'+view.charAt(0).toUpperCase()+view.slice(1));
  if (el) el.classList.add('active');
  document.querySelector(`[data-v="${view}"]`)?.classList.add('on');
  S.view = view;
  document.querySelector('.main').classList.toggle('ch-active', view === 'ch');
  document.getElementById('rp').style.display = view === 'ch' ? 'block' : 'none';
  document.getElementById('rp').style.top = view === 'ch' ? '96px' : '56px';
  document.getElementById('fab').style.display = view === 'ch' && S.readMode === 'scroll' ? 'flex' : 'none';
  document.getElementById('rtoolbar').style.display = view === 'ch' ? 'flex' : 'none';
  window.scrollTo(0,0);
  if (view === 'bm') renderBm();
  if (view === 'ill') renderGallery();
  if (view === 'set') document.getElementById('pd').textContent = `${S.read.length} chapitres lus sur ${APP_DATA.chapters.length}`;
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

  document.getElementById('chHero').setAttribute('data-c', id);
  setChapterHero(id);
  document.getElementById('chT').textContent = ch.t;
  document.getElementById('chTags').innerHTML = ch.items.map(i => `<span class="ch-tag">${i}</span>`).join('') +
    `<span class="ch-tag">${(APP_DATA.content[id]||[]).length} pages</span>`;

  const pages = APP_DATA.content[id] || [];
  const toc = buildTOC(pages);
  document.getElementById('tocList').innerHTML = toc.length
    ? toc.map(s => `<div class="toc-i" onclick="jumpSec('${s.id}')"><span class="toc-p">p.${s.page}</span>${s.title}</div>`).join('')
    : '<div class="toc-empty">Pas de sommaire structuré</div>';

  renderChapterPages(pages);
  const idx = APP_DATA.chapters.findIndex(c => c.id === id);
  document.getElementById('prevB').disabled = idx <= 0;
  document.getElementById('nextB').disabled = idx >= APP_DATA.chapters.length - 1;
  updBB(); sw('ch');
  setTimeout(() => {
    if (S.scroll[id]) window.scrollTo(0, S.scroll[id]);
    else if (pgIdx > 0) jumpPage(pgIdx);
    updPageInd();
  }, 80);
}

function renderChapterPages(pages) {
  const body = document.getElementById('chBody');
  if (S.readMode === 'page') {
    const p = pages[S.pgIdx];
    if (!p) return;
    body.innerHTML = `<div class="pg pg-single" id="pg-${p[0]}" data-pg="${p[0]}"><div class="pg-hd"><span class="pg-num">p.${p[0]}</span><span class="pg-ill">${CH_ILL[S.ch]||'📄'}</span><span class="pg-of">${S.pgIdx+1}/${pages.length}</span></div>${pageImgs(p[0])}${renderText(p[1],p[0])}</div>`;
    document.getElementById('pgPrev').disabled = S.pgIdx <= 0;
    document.getElementById('pgNext').disabled = S.pgIdx >= pages.length - 1;
  } else {
    body.innerHTML = pages.map(p => `<div class="pg" id="pg-${p[0]}" data-pg="${p[0]}"><div class="pg-hd"><span class="pg-num">p.${p[0]}</span><span class="pg-ill">${CH_ILL[S.ch]||'📄'}</span></div>${pageImgs(p[0])}${renderText(p[1],p[0])}</div>`).join('');
  }
}

function navCh(d) { const idx = APP_DATA.chapters.findIndex(c => c.id === S.ch); const n = APP_DATA.chapters[idx+d]; if (n) showCh(n.id); }
function navPage(d) {
  const pages = APP_DATA.content[S.ch] || [];
  S.pgIdx = Math.max(0, Math.min(pages.length-1, S.pgIdx + d));
  shownIll = new Set();
  renderChapterPages(pages);
  window.scrollTo(0, 0);
  updPageInd();
}

function toggleReadMode() {
  S.readMode = S.readMode === 'scroll' ? 'page' : 'scroll';
  localStorage.setItem('grm', S.readMode);
  document.getElementById('rmBtn').textContent = S.readMode === 'page' ? '📜 Défilement' : '📄 Page';
  document.getElementById('pgNav').style.display = S.readMode === 'page' ? 'flex' : 'none';
  const rmTog = document.getElementById('rmTog');
  if (rmTog) rmTog.classList.toggle('on', S.readMode === 'page');
  document.getElementById('fab').style.display = S.readMode === 'scroll' && S.view === 'ch' ? 'flex' : 'none';
  if (S.ch) { shownIll = new Set(); renderChapterPages(APP_DATA.content[S.ch]||[]); }
}

function jumpSec(id) { closeTOC(); const el = document.getElementById(id); if (el) el.scrollIntoView({behavior:'smooth',block:'start'}); }
function jumpPage(idx) {
  const pages = APP_DATA.content[S.ch] || [];
  if (idx < 0 || idx >= pages.length) return;
  if (S.readMode === 'page') { S.pgIdx = idx; renderChapterPages(pages); window.scrollTo(0,0); }
  else { const el = document.getElementById('pg-'+pages[idx][0]); if (el) el.scrollIntoView({behavior:'smooth'}); }
  closePgJump(); updPageInd();
}

function openTOC() { document.getElementById('tocD').classList.add('open'); }
function closeTOC() { document.getElementById('tocD').classList.remove('open'); }
function openPgJump() {
  const pages = APP_DATA.content[S.ch] || [];
  document.getElementById('pgJumpList').innerHTML = pages.map((p,i) => `<div class="pj-i" onclick="jumpPage(${i})"><span>p.${p[0]}</span> Page ${i+1}</div>`).join('');
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
    const pgs = document.querySelectorAll('.pg');
    const y = window.scrollY + 120;
    pgs.forEach((el,i) => { if (el.offsetTop <= y) cur = i; });
  }
  const p = pages[cur];
  document.getElementById('pageInd').textContent = p ? `p.${p[0]} (${cur+1}/${pages.length})` : '';
}

function renderHome() {
  const p1 = document.getElementById('p1'), p2 = document.getElementById('p2');
  p1.innerHTML = p2.innerHTML = '';
  APP_DATA.chapters.forEach(ch => {
    const rd = S.read.includes(ch.id), bm = S.bm.includes(ch.id);
    const pgCount = APP_DATA.content[ch.id] ? APP_DATA.content[ch.id].length : 0;
    const card = document.createElement('div');
    card.className = 'cc';
    card.setAttribute('data-c', ch.id);
    card.setAttribute('data-part', ch.part);
    card.onclick = () => showCh(ch.id);
    const prog = S.scroll[ch.id] ? Math.min(100, Math.round(S.scroll[ch.id]/50)) : (rd ? 100 : 0);
    card.innerHTML = `<div class="cc-ill" style="background:linear-gradient(135deg,${CH_COLORS[ch.id]}22,${CH_COLORS[ch.id]}44)">${chThumb(ch.id)}</div><div class="cc-body"><div class="cc-top"><div class="cc-n" style="border-color:${CH_COLORS[ch.id]}44;color:${CH_COLORS[ch.id]}">${ch.id.replace('ch','')}</div><div class="cc-inf"><div class="cc-t">${ch.t}</div><div class="cc-m">${ch.items.map(i=>`<span class="cc-tag">${i}</span>`).join('')}<span class="cc-pg">${pgCount} p.${rd?' ✅':''}</span></div></div></div></div><button class="cc-bm ${bm?'sv':''}" onclick="event.stopPropagation();quickBm('${ch.id}')">${bm?'⭐':'☆'}</button>${prog>0?`<div class="prog"><div class="fill" style="width:${prog}%"></div></div>`:''}`;
    (ch.part === 1 ? p1 : p2).appendChild(card);
  });
  if (S.read.length > 0) {
    document.getElementById('recent').style.display = 'block';
    const last = S.read[S.read.length-1], lc = APP_DATA.chapters.find(c => c.id === last);
    if (lc) document.getElementById('recentC').innerHTML = `<div class="cc recent-card" data-c="${last}" onclick="showCh('${last}')"><div class="cc-ill" style="background:linear-gradient(135deg,${CH_COLORS[last]}33,${CH_COLORS[last]}55)">${chThumb(last)}</div><div class="cc-body"><div class="cc-top"><div class="cc-n">${lc.id.replace('ch','')}</div><div class="cc-inf"><div class="cc-t">${lc.t}</div><div class="cc-m"><span class="cc-pg">▶ Reprendre la lecture</span></div></div></div></div></div>`;
  }
}

function quickBm(id) {
  const i = S.bm.indexOf(id);
  if (i >= 0) { S.bm.splice(i,1); toast('Retiré des favoris'); }
  else { S.bm.push(id); toast('Ajouté aux favoris ⭐'); }
  localStorage.setItem('gbm', JSON.stringify(S.bm));
  renderHome(); updStats();
}

function toggleBm() { if (!S.ch) return; quickBm(S.ch); updBB(); }
function updBB() { const b = document.getElementById('bmB'); if (b) b.innerHTML = S.bm.includes(S.ch) ? '⭐ Retirer' : '☆ Favori'; }

function renderBm() {
  const l = document.getElementById('bml');
  if (!S.bm.length) { l.innerHTML = '<div class="bm-empty"><div class="bm-ic">⭐</div><p>Aucun favori.<br>Touchez ☆ sur un chapitre.</p></div>'; return; }
  l.innerHTML = S.bm.map(id => { const ch = APP_DATA.chapters.find(c => c.id === id); if (!ch) return ''; return `<div class="cc" onclick="showCh('${id}')"><div class="cc-ill">${chThumb(id)}</div><div class="cc-body"><div class="cc-top"><div class="cc-n">${ch.id.replace('ch','')}</div><div class="cc-inf"><div class="cc-t">${ch.t}</div></div></div></div></div>`; }).join('');
}

function renderGallery() {
  const el = document.getElementById('illGrid');
  if (!el || typeof FIGURES === 'undefined') return;
  const items = Object.entries(FIGURES)
    .filter(([, srcs]) => isGoodSrc(srcs[0]))
    .map(([id, srcs]) => {
      const chNum = parseInt(id.split('.')[0], 10);
      const ch = APP_DATA.chapters.find(c => c.id === 'ch' + chNum);
      return { id, src: srcs[0], ch: ch?.t || 'Chapitre ' + chNum, chId: ch?.id };
    })
    .sort((a, b) => {
      const [ac, ai] = a.id.split('.').map(Number);
      const [bc, bi] = b.id.split('.').map(Number);
      return ac - bc || ai - bi;
    });
  el.innerHTML = items.length
    ? items.map(it => `<div class="ill-card" onclick="openLb('${it.src}')"><img src="${it.src}" alt="Fig. ${it.id}" loading="lazy"><div class="ill-cap"><span class="ill-type">📊 Fig. ${it.id}</span><span class="ill-ch">${it.ch}</span></div></div>`).join('')
    : '<div class="bm-empty"><p>Aucune figure extraite pour ce chapitre.</p></div>';
  const cnt = document.getElementById('illCnt');
  if (cnt) cnt.textContent = items.length;
}

function renderItems() {
  const items = [];
  APP_DATA.chapters.forEach(ch => ch.items.forEach(it => items.push({it,ch:ch.id,t:ch.t})));
  const fl = document.getElementById('ifl');
  fl.innerHTML = '<div class="fl-chip on" onclick="flI(\'all\',this)">Tous</div>';
  [...new Set(items.map(i => i.it))].sort().forEach(it => { fl.innerHTML += `<div class="fl-chip" onclick="flI('${it}',this)">${it}</div>`; });
  window._id = items; flI('all', document.querySelector('.fl-chip'));
}
function flI(f, el) {
  document.querySelectorAll('.fl-chip').forEach(c => c.classList.remove('on'));
  el.classList.add('on');
  const items = f === 'all' ? window._id : window._id.filter(i => i.it === f);
  document.getElementById('il').innerHTML = items.map(i => `<div class="it-card" onclick="showCh('${i.ch}')"><div class="it-id">${i.it}</div><div class="it-t">${i.t}</div><div class="it-ch">→ Chapitre</div></div>`).join('');
}

function buildSI() {
  if (sIdx.length) return;
  APP_DATA.chapters.forEach(ch => {
    (APP_DATA.content[ch.id]||[]).forEach(p => {
      sIdx.push({t:p[1].toLowerCase(),p:p[0],ch:ch.id,ct:ch.t,raw:p[1]});
    });
  });
}
function openSearch() { buildSI(); document.getElementById('sov').classList.add('open'); setTimeout(()=>document.getElementById('si').focus(),80); document.getElementById('srl').innerHTML='<div class="sr-empty"><div class="sr-ic">🔍</div>Tapez pour chercher...</div>'; }
function closeSearch() { document.getElementById('sov').classList.remove('open'); document.getElementById('si').value=''; }

function onSearchInput() {
  const q = document.getElementById('si').value.toLowerCase().trim(), el = document.getElementById('srl');
  if (q.length < 2) { el.innerHTML = '<div class="sr-empty"><div class="sr-ic">⌨️</div>2 caractères minimum...</div>'; return; }
  const words = q.split(/\s+/); let res = [];
  for (const it of sIdx) {
    if (words.every(w => it.t.includes(w))) {
      const idx = it.t.indexOf(words[0]), s = Math.max(0,idx-50), e = Math.min(it.raw.length,idx+words[0].length+80);
      let sn = it.raw.substring(s,e);
      words.forEach(w => { sn = sn.replace(new RegExp(`(${w.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')})`,'gi'),'<mark>$1</mark>'); });
      res.push({p:it.p,ch:it.ch,ct:it.ct,sn}); if (res.length >= 25) break;
    }
  }
  if (!res.length) { el.innerHTML = `<div class="sr-empty"><div class="sr-ic">😕</div>Aucun résultat pour « ${q}»</div>`; return; }
  el.innerHTML = res.map(r => `<div class="sr-i" onclick="closeSearch();showCh('${r.ch}')"><div class="sr-h"><span class="sr-p">p.${r.p}</span><span class="sr-c">${r.ct}</span></div><div class="sr-t">…${r.sn}…</div></div>`).join('');
}

window.addEventListener('scroll', () => {
  if (S.view === 'ch') {
    const h = document.documentElement, pct = h.scrollHeight > h.clientHeight ? h.scrollTop/(h.scrollHeight-h.clientHeight)*100 : 0;
    document.getElementById('rpb').style.width = pct+'%';
    document.getElementById('fab').style.display = S.readMode === 'scroll' && h.scrollTop > 400 ? 'flex' : 'none';
    updPageInd();
  }
}, {passive:true});

function initSwipe() {
  let sx=0, sy=0;
  document.addEventListener('touchstart', e => { sx=e.touches[0].clientX; sy=e.touches[0].clientY; }, {passive:true});
  document.addEventListener('touchend', e => {
    if (S.view !== 'ch') return;
    const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
    if (Math.abs(dx) < 80 || Math.abs(dy) > Math.abs(dx)) return;
    if (S.readMode === 'page') navPage(dx < 0 ? 1 : -1);
    else if (dx < -80) navCh(1);
    else if (dx > 80) navCh(-1);
  }, {passive:true});
}

async function installPWA() {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
  document.getElementById('installB').style.display = 'none';
}

function toast(m) { const e = document.getElementById('toast'); e.textContent = m; e.classList.add('show'); setTimeout(()=>e.classList.remove('show'),1800); }
function updStats() {
  const b = S.bm.length;
  document.getElementById('bmc').innerHTML = `⭐ <b>${b}</b> fav.`;
  const bd = document.getElementById('bmb');
  if (b > 0) { bd.style.display='flex'; bd.textContent=b; } else bd.style.display='none';
  const total = typeof FIGURES !== 'undefined' ? Object.values(FIGURES).filter(s => isGoodSrc(s[0])).length : 0;
  const figEl = document.getElementById('figC');
  if (figEl) figEl.innerHTML = `🖼️ <b>${total}</b> fig.`;
}
function resetProg() { S.read=[]; S.scroll={}; localStorage.setItem('grd','[]'); localStorage.setItem('gsc','{}'); renderHome(); toast('Progression réinitialisée'); }
function clearAll() { if (!confirm('Tout effacer ?')) return; S.bm=[]; S.read=[]; S.scroll={}; localStorage.removeItem('gbm'); localStorage.removeItem('grd'); localStorage.removeItem('gsc'); renderHome(); renderBm(); updStats(); toast('Données effacées'); }

document.addEventListener('keydown', e => {
  if (e.key === '/' && !e.ctrlKey && document.activeElement.tagName !== 'INPUT') { e.preventDefault(); openSearch(); }
  if (e.key === 'Escape') { closeSearch(); closeTOC(); closePgJump(); closeLb(); }
  if (S.view === 'ch') {
    if (e.key === 'ArrowRight') S.readMode === 'page' ? navPage(1) : navCh(1);
    if (e.key === 'ArrowLeft') S.readMode === 'page' ? navPage(-1) : navCh(-1);
  }
});

