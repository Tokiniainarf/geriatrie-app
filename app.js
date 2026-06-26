/* Gériatrie 2026 — Manuel Interactif v3 */
const CH_COLORS={ch1:'#0891B2',ch2:'#059669',ch3:'#0D9488',ch4:'#DC2626',ch5:'#0284C7',ch6:'#047857',ch7:'#0369A1',ch8:'#BE123C',ch9:'#0E7490',ch10:'#64748B',ch11:'#B45309',ch12:'#EA580C',ch13:'#0369A1',ch14:'#15803D',ch15:'#0F766E',ch16:'#164E63',ch17:'#475569',ch18:'#059669',ch19:'#0891B2',ch20:'#2563EB'};
const BM_SVG={on:'<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.77 5.82 22 7 14.14l-5-4.87 6.91-1.01z"/></svg>',off:'<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.77 5.82 22 7 14.14l-5-4.87 6.91-1.01z"/></svg>'};

function safeJSON(k,f){try{return JSON.parse(localStorage.getItem(k))||f}catch{return f}}
const S={view:'home',ch:null,pgIdx:0,readMode:localStorage.getItem('grm')||'scroll',bm:safeJSON('gbm',[]),read:safeJSON('grd',[]),prog:safeJSON('gprog',{}),fs:parseInt(localStorage.getItem('gfs')||'18'),lh:parseFloat(localStorage.getItem('glh')||'1.7'),th:localStorage.getItem('gth')||'light'};
let flashIdx=0,flashDeck=[],flashFilter='all';

document.addEventListener('DOMContentLoaded',()=>{
  if(localStorage.getItem('gth')==='dark'){S.th='light';localStorage.setItem('gth','light');}
  setFS(S.fs);setLH(S.lh,true);
  const fsR=document.getElementById('fsRange');if(fsR)fsR.value=S.fs;
  const lhR=document.getElementById('lhRange');if(lhR)lhR.value=S.lh;
  document.documentElement.setAttribute('data-theme',S.th);
  if(S.readMode==='page')document.getElementById('rmTog')?.classList.add('on');
  document.getElementById('fsVal').textContent=S.fs+'px';
  document.getElementById('lhVal').textContent=S.lh;
  renderHome();renderSynthesis();renderItems();renderFav();shuffleFlash();updStats();
  updateThemeIcon();
  if('serviceWorker'in navigator)navigator.serviceWorker.register('sw.js').catch(()=>{});
  window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();window.deferredPrompt=e;const ib=document.getElementById('installB');if(ib)ib.style.display='flex'});
  window.addEventListener('scroll',()=>{const f=document.getElementById('fab');if(f)f.style.display=window.scrollY>300?'flex':'none'});
});

/* ── NAV ── */
function sw(view){
  const prev=S.view;
  if(prev==='graph'&&view!=='graph'&&typeof destroyGraph==='function')destroyGraph();
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  document.querySelectorAll('#bnav button').forEach(b=>b.classList.remove('active'));
  const el=document.getElementById('v'+view.charAt(0).toUpperCase()+view.slice(1));
  if(el)el.classList.add('active');
  document.querySelector(`[data-v="${view}"]`)?.classList.add('active');
  S.view=view;window.scrollTo(0,0);
  document.getElementById('searchBar')?.classList.remove('open');
  if(view==='synth')renderSynthesis();
  if(view==='flash')renderFlashcard();
  if(view==='items')renderItems();
  if(view==='fav')renderFav();
  if(view==='graph'&&typeof initGraph==='function')initGraph();
  if(view==='set'){const tv=Object.values(S.prog).reduce((s,a)=>s+(a?a.length:0),0);document.getElementById('pd').textContent=`${S.read.length} chapitres lus · ${tv} pages visitées`}
}
function goHome(){sw('home');S.ch=null}

/* ── THEME ── */
function toggleTheme(){
  S.th=S.th==='dark'?'light':'dark';
  localStorage.setItem('gth',S.th);
  document.documentElement.setAttribute('data-theme',S.th);
  updateThemeIcon();
}
function updateThemeIcon(){
  const sun=document.querySelector('.icon-sun');
  const moon=document.querySelector('.icon-moon');
  if(sun&&moon){sun.style.display=S.th==='dark'?'none':'block';moon.style.display=S.th==='dark'?'block':'none'}
}

/* ── HOME ── */
function renderHome(){
  const p1=document.getElementById('p1'),p2=document.getElementById('p2');
  if(!p1||!p2)return;p1.innerHTML=p2.innerHTML='';
  // Update stats
  const totalPages=APP_DATA.chapters.reduce((s,ch)=>s+(APP_DATA.content[ch.id]?.length||0),0);
  const totalFigs=typeof FIGURES!=='undefined'?Object.keys(FIGURES).length:0;
  const totalItems=APP_DATA.chapters.reduce((s,ch)=>s+ch.items.length,0);
  document.querySelector('.stats-bar').innerHTML=`
    <div class="stat"><span class="stat-num">${APP_DATA.chapters.length}</span><span class="stat-label">chap.</span></div>
    <div class="stat"><span class="stat-num">${totalPages}</span><span class="stat-label">p.</span></div>
    <div class="stat"><span class="stat-num">${totalFigs}</span><span class="stat-label">fig.</span></div>
    <div class="stat"><span class="stat-num">${totalItems}</span><span class="stat-label">ITEMs</span></div>
    <div class="stat"><span class="stat-num">${S.bm.length}</span><span class="stat-label">fav.</span></div>`;
  // Render chapters
  APP_DATA.chapters.forEach(ch=>{
    const rd=S.read.includes(ch.id),bm=S.bm.includes(ch.id);
    const pgCount=APP_DATA.content[ch.id]?.length||0;
    const prog=getChProgress(ch.id);
    const el=document.createElement('div');el.className='ch-row';
    el.onclick=()=>showCh(ch.id);
    el.innerHTML=`<div class="ch-row-num" style="background:${CH_COLORS[ch.id]}15;color:${CH_COLORS[ch.id]}">${ch.id.replace('ch','')}</div>
      <div class="ch-row-body">
        <div class="ch-row-title">${esc(ch.t)}</div>
        <div class="ch-row-meta">${ch.items.map(i=>`<span class="tag">${i}</span>`).join('')}<span class="tag">${pgCount}p</span>${prog.pct>0?`<span class="tag">${prog.pct}%</span>`:''}</div>
      </div>
      <button class="ch-row-bm ${bm?'on':''}" aria-label="${bm?'Retirer des favoris':'Ajouter aux favoris'}" onclick="event.stopPropagation();quickBm('${ch.id}')">${bm?BM_SVG.on:BM_SVG.off}</button>
      <div class="ch-progress" style="width:${prog.pct}%;background:${CH_COLORS[ch.id]}"></div>`;
    (ch.part===1?p1:p2).appendChild(el);
  });
}
function getChProgress(id){const p=APP_DATA.content[id]||[];const v=(S.prog[id]||[]).length;return{visited:v,total:p.length,pct:p.length>0?Math.round(v/p.length*100):0}}
function quickBm(id){const i=S.bm.indexOf(id);if(i>-1)S.bm.splice(i,1);else S.bm.push(id);localStorage.setItem('gbm',JSON.stringify(S.bm));renderHome();renderFav();toast(i>-1?'Retiré des favoris':'Ajouté aux favoris')}

/* ── SEARCH ── */
function toggleSearch(){const sb=document.getElementById('searchBar');sb.classList.toggle('open');if(sb.classList.contains('open'))document.getElementById('searchInput').focus()}
function onSearch(q){q=q.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');document.querySelectorAll('.ch-row').forEach(r=>{const t=r.querySelector('.ch-row-title').textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');r.style.display=!q||t.includes(q)?'':'none'})}

/* ── FAVORIS ── */
function renderFav(){
  const list=document.getElementById('favList');if(!list)return;
  if(!S.bm.length){list.innerHTML='<div class="empty"><div class="empty-text">Aucun favori</div></div>';return}
  list.innerHTML='';
  S.bm.forEach(id=>{
    const ch=APP_DATA.chapters.find(c=>c.id===id);if(!ch)return;
    const el=document.createElement('div');el.className='ch-row';el.onclick=()=>showCh(id);
    el.innerHTML=`<div class="ch-row-num" style="background:${CH_COLORS[id]}15;color:${CH_COLORS[id]}">${id.replace('ch','')}</div>
      <div class="ch-row-body"><div class="ch-row-title">${esc(ch.t)}</div></div>
      <button class="ch-row-bm on" aria-label="Retirer des favoris" onclick="event.stopPropagation();quickBm('${id}')">${BM_SVG.on}</button>`;
    list.appendChild(el);
  });
}

/* ── CHAPTER READING ── */
function showCh(id,pgIdx){
  const ch=APP_DATA.chapters.find(c=>c.id===id);if(!ch)return;
  S.ch=id;S.pgIdx=pgIdx||0;
  if(!S.read.includes(id)){S.read.push(id);localStorage.setItem('grd',JSON.stringify(S.read))}
  const prog=getChProgress(id);
  document.getElementById('chHero').style.background=`linear-gradient(145deg,${CH_COLORS[id]},#164E63)`;
  document.getElementById('chNum').textContent=id.replace('ch','');
  document.getElementById('chT').textContent=ch.t;
  document.getElementById('chTags').innerHTML=ch.items.map(i=>`<span class="tag">${i}</span>`).join('')+`<span class="tag">${prog.pct}% lu</span>`;
  const bmOn=S.bm.includes(id);
  document.getElementById('chToolbar').innerHTML=`<button onclick="goHome()">Retour</button><button onclick="quickBm('${id}')">${bmOn?BM_SVG.on+' Retirer':BM_SVG.off+' Favori'}</button>`;
  renderChPages();sw('ch');
}
function renderChPages(){
  const pages=APP_DATA.content[S.ch]||[];const cc=document.getElementById('chContent');const pn=document.getElementById('pgNav');
  if(S.readMode==='page'){
    pn.style.display='flex';const pg=pages[S.pgIdx];
    cc.innerHTML=pg?renderPage(pg[1],pg[0]):'<div class="empty"><div class="empty-text">Aucune page</div></div>';
    pn.querySelector('button:first-child').disabled=S.pgIdx<=0;
    pn.querySelector('button:last-child').disabled=S.pgIdx>=pages.length-1;
  }else{pn.style.display='none';cc.innerHTML=pages.map((pg,i)=>renderPage(pg[1],pg[0],i>0)).join('')}
  trackVisit(S.ch,S.pgIdx);applyConceptLinks();
}
function pgPrev(){if(S.pgIdx>0){S.pgIdx--;renderChPages();window.scrollTo(0,0)}}
function pgNext(){const p=APP_DATA.content[S.ch]||[];if(S.pgIdx<p.length-1){S.pgIdx++;renderChPages();window.scrollTo(0,0)}}
function trackVisit(id,idx){if(!id||typeof idx!=='number')return;if(!S.prog[id])S.prog[id]=[];if(!S.prog[id].includes(idx)){S.prog[id].push(idx);S.prog[id].sort((a,b)=>a-b);localStorage.setItem('gprog',JSON.stringify(S.prog))}}

/* ── SMART PAGE RENDERER ── */
const SKIP_RE=/^(▼|©\s*\d{4}|Elsevier|Tous droits réservés|Gériatrie$|Connaissances$|Entraînement$|This page intentionally left blank|Comprendre le vieillissement|Appréhender|Évaluer|Diagnostiquer|Raisonner|Prévenir|Évaluer l'état|Prise en charge|Prescrire|Savoir)/i;
const SECTION_RE=/^([IVX]+)\.\s+(.+)/;
const SUBSEC_RE=/^([A-Z])\.\s+(.+)/;
const RANG_RE=/^([A-D])\s+(.+)/;
const BULLET_RE=/^[•\-–]\s+(.+)/;
const DIAGRAM_RE=/^(Fonction|d'organe|Réserve|Seuil|Effet|100\s*%|0\s+Âge|\d\s+(Vieillissement|Maladie|Stress))/i;

function renderPage(raw,pageNum,addSep){
  let text=raw.replace(/(\w)-\s*\n\s*(\w)/g,'$1$2');
  const lines=text.replace(/\r\n/g,'\n').split('\n').map(l=>l.trim());
  let html='';let prevWasSit=false;let paraBuf=[];let inSection=false;

  function flushPara(){
    if(!paraBuf.length)return;
    const merged=paraBuf.join(' ').replace(/\s+/g,' ').trim();
    paraBuf=[];
    if(merged.length<3)return;
    if(merged.length>900){
      const parts=merged.split(/(?<=[.!?])\s+(?=[A-ZÉÈÊÀÂÎÔÙÇ])/);
      parts.forEach(part=>{
        const t=part.trim();
        if(t.length>20)html+=`<div class="para-card"><p>${esc(t)}</p></div>`;
      });
    }else html+=`<div class="para-card"><p>${esc(merged)}</p></div>`;
  }
  function closeSection(){if(inSection){html+=`</div></section>`;inSection=false}}
  function lineIsSpecial(l){
    if(!l||SKIP_RE.test(l)||DIAGRAM_RE.test(l))return true;
    if(SECTION_RE.test(l)||SUBSEC_RE.test(l))return true;
    if(RANG_RE.test(l)&&!/Rubrique|Intitulé|Descriptif|Connaître|Modifications/.test(l)&&l.length<200)return true;
    if(BULLET_RE.test(l))return true;
    if(/Fig\.\s*\d+\.\d+/.test(l))return true;
    if(/Situations?\s+de\s+départ/i.test(l))return true;
    if(/^(ITEM\s+\d+|Rang\s+Rubrique|Hiérarchisation|Item, objectifs)/i.test(l))return true;
    if(/^\d{1,3}$/.test(l))return true;
    return false;
  }

  for(let i=0;i<lines.length;i++){
    const l=lines[i];
    if(!l){flushPara();continue}
    if(DIAGRAM_RE.test(l))continue;
    if(/Situations?\s+de\s+départ/i.test(l)){flushPara();closeSection();html+=`<div class="key-point"><strong>Situations de départ</strong><ul>`;prevWasSit=true;continue}
    if(prevWasSit){const m=l.match(/^(\d{2,3})\s+(.+)/);if(m){html+=`<li>${esc(m[2])}</li>`;continue}else{html+=`</ul></div>`;prevWasSit=false}}
    const figM=l.match(/Fig\.\s*(\d+\.\d+)/);
    if(figM&&typeof FIGURES!=='undefined'){flushPara();const src=FIGURES[figM[1]]?.[0];if(src&&!src.includes('figures/page_')){html+=`<figure class="fig-block"><img src="${src}" alt="Figure ${figM[1]}" loading="lazy"><figcaption>Figure ${figM[1]}</figcaption></figure>`}continue}
    const secM=l.match(SECTION_RE);
    if(secM){flushPara();closeSection();html+=`<section class="manual-section"><header class="section-head"><span class="section-num">${esc(secM[1])}</span><span class="section-title">${esc(secM[2])}</span></header><div class="section-body">`;inSection=true;continue}
    const subM=l.match(SUBSEC_RE);
    if(subM){flushPara();html+=`<h3 class="sub-head">${esc(subM[1]+'. '+subM[2])}</h3>`;continue}
    const rangM=l.match(RANG_RE);
    if(rangM&&!/Rubrique|Intitulé|Descriptif|Connaître|Modifications/.test(l)&&l.length<200){flushPara();html+=`<div class="def-block"><span class="rang-badge ${rangM[1]==='A'?'rang-a':'rang-b'}">Rang ${rangM[1]}</span><span class="def-text">${esc(rangM[2])}</span></div>`;continue}
    const bulM=l.match(BULLET_RE);
    if(bulM){flushPara();html+=`<div class="bullet-card"><p class="bullet">${esc(bulM[1])}</p></div>`;continue}
    if(lineIsSpecial(l))continue;
    if(l.length<55&&i+1<lines.length&&!lineIsSpecial(lines[i+1])&&!/[.!?]$/.test(l)){
      paraBuf.push(l);
      continue;
    }
    paraBuf.push(l);
    if(paraBuf.join(' ').length>120||/[.!?]["']?$/.test(l))flushPara();
  }
  flushPara();
  if(prevWasSit)html+=`</ul></div>`;
  closeSection();
  if(pageNum)html=`<div class="page-marker" aria-label="Page ${pageNum}"><span>Page ${pageNum}</span></div>`+html;
  return html;
}

function applyConceptLinks(){
  if(typeof linkifyText!=='function')return;
  document.querySelectorAll('.ch-content p, .ch-content .def-block, .ch-content .def-text, .ch-content h3, .ch-content .para-card p').forEach(el=>{
    if(el.querySelector('.concept-link'))return;
    el.innerHTML=linkifyText(el.innerHTML);
  });
}
function navigateToConcept(chId,search){
  showCh(chId);
  const q=(search||'').toLowerCase();
  requestAnimationFrame(()=>{
    const cc=document.getElementById('chContent');
    if(!cc)return;
    cc.querySelectorAll('.concept-hit').forEach(n=>n.classList.remove('concept-hit'));
    for(const el of cc.querySelectorAll('p,.def-block,h2,h3')){
      if(el.textContent.toLowerCase().includes(q)){
        el.classList.add('concept-hit');
        el.scrollIntoView({behavior:'smooth',block:'center'});
        toast('Concept : '+search);
        return;
      }
    }
    toast('Concept : '+search);
  });
}
window.navigateToConcept=navigateToConcept;
function closeConceptModal(){document.getElementById('conceptModal').classList.remove('open')}

/* ── SYNTHESIS ── */
function renderSynthesis(){
  const grid=document.getElementById('synthGrid');if(!grid||typeof SYNTHESIS==='undefined')return;
  grid.innerHTML=SYNTHESIS.map(card=>`
    <div class="synth-card" style="border-left:4px solid ${card.color}">
      <div class="synth-card-head" onclick="this.parentElement.classList.toggle('open')">
        <div class="synth-card-icon" aria-hidden="true">${esc(card.title.charAt(0))}</div>
        <div class="synth-card-title">${esc(card.title)}</div>
        <div class="synth-card-chevron">▾</div>
      </div>
      <div class="synth-card-body">
        ${card.sections.map(s=>`<div class="synth-section"><div class="synth-section-head" onclick="event.stopPropagation();this.parentElement.classList.toggle('open')">${esc(s.title)}</div><div class="synth-section-content">${typeof linkifyText==='function'?linkifyText(s.content):s.content}</div></div>`).join('')}
      </div>
    </div>`).join('');
}

/* ── FLASHCARDS ── */
function shuffleFlash(){flashDeck=filterDeck();for(let i=flashDeck.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[flashDeck[i],flashDeck[j]]=[flashDeck[j],flashDeck[i]]}flashIdx=0;renderFlashcard()}
function filterDeck(){if(typeof FLASHCARDS==='undefined')return[];return flashFilter==='all'?[...FLASHCARDS]:FLASHCARDS.filter(c=>c.rang===flashFilter)}
function filterFlash(rang,btn){flashFilter=rang;document.querySelectorAll('.flash-filt').forEach(b=>b.classList.remove('active'));if(btn)btn.classList.add('active');shuffleFlash()}
function renderFlashcard(){
  const card=document.getElementById('flashCard');
  if(!card)return;
  card.classList.remove('flipped');
  if(!flashDeck.length){
    document.getElementById('flashCh').textContent='';
    document.getElementById('flashRang').textContent='';
    document.getElementById('flashQ').textContent='Aucune carte pour ce filtre';
    document.getElementById('flashA').textContent='Changez de filtre ou réessayez « Tous ».';
    document.getElementById('flashTags').innerHTML='';
    document.getElementById('flashProg').textContent='0 / 0';
    return;
  }
  const c=flashDeck[flashIdx];
  const chName=APP_DATA.chapters.find(ch=>ch.id===c.chapter)?.t||'';
  document.getElementById('flashCh').textContent=chName;
  const r=document.getElementById('flashRang');
  r.textContent='Rang '+c.rang;
  r.className='flash-rang '+(c.rang==='A'?'rang-a':'rang-b');
  document.getElementById('flashQ').textContent=c.question;
  document.getElementById('flashA').textContent=c.answer;
  document.getElementById('flashTags').innerHTML=(c.tags||[]).map(t=>`<span class="tag">${t}</span>`).join('');
  document.getElementById('flashProg').textContent=`${flashIdx+1} / ${flashDeck.length}`;
}
function nextFlash(){if(!flashDeck.length)return;flashIdx=(flashIdx+1)%flashDeck.length;renderFlashcard()}
function prevFlash(){if(!flashDeck.length)return;flashIdx=(flashIdx-1+flashDeck.length)%flashDeck.length;renderFlashcard()}

/* ── ITEMS ── */
function renderItems(){const list=document.getElementById('itemsList');if(!list)return;list.innerHTML='';APP_DATA.chapters.filter(ch=>ch.items.length>0).forEach(ch=>{ch.items.forEach(item=>{const el=document.createElement('div');el.className='item-card';el.onclick=()=>showCh(ch.id);el.innerHTML=`<div class="item-title"><span class="rang-badge rang-a">${item}</span>${esc(ch.t)}</div><div class="item-desc">Chapitre ${ch.id.replace('ch','')} — Cliquez pour lire</div>`;list.appendChild(el)})})}

/* ── SETTINGS ── */
function setFS(v){S.fs=+v;document.body.style.fontSize=v+'px';localStorage.setItem('gfs',v);document.getElementById('fsVal').textContent=v+'px'}
function setLH(v,init){S.lh=parseFloat(v);document.documentElement.style.setProperty('--lh',S.lh);document.body.style.lineHeight=String(S.lh);if(!init)localStorage.setItem('glh',v);document.getElementById('lhVal').textContent=v}
function toggleReadMode(){S.readMode=S.readMode==='page'?'scroll':'page';localStorage.setItem('grm',S.readMode);document.getElementById('rmTog')?.classList.toggle('on',S.readMode==='page');if(S.ch)renderChPages()}
function resetProg(){if(confirm('Réinitialiser la progression ?')){S.prog={};localStorage.setItem('gprog','{}');renderHome();updStats();toast('Progression réinitialisée')}}
function clearAll(){if(confirm('Effacer toutes les données ?')){S.bm=[];S.read=[];S.prog={};localStorage.clear();renderHome();renderFav();updStats();toast('Données effacées')}}
function updStats(){
  const tv=Object.values(S.prog).reduce((s,a)=>s+(a?a.length:0),0);
  const pd=document.getElementById('pd');
  if(pd)pd.textContent=`${S.read.length} chapitres lus · ${tv} pages visitées`;
  const sf=document.getElementById('statFav');
  if(sf)sf.textContent=String(S.bm.length);
}
function installPWA(){if(window.deferredPrompt){window.deferredPrompt.prompt();window.deferredPrompt=null}}

/* ── UTILS ── */
function esc(s){const d=document.createElement('div');d.textContent=s;return d.innerHTML}
function toast(msg){const t=document.getElementById('toast');if(!t)return;t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2000)}
