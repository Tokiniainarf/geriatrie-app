/* Gériatrie 2026 — Manuel Interactif v3 */
const CH_COLORS={ch1:'#0891B2',ch2:'#059669',ch3:'#0D9488',ch4:'#DC2626',ch5:'#0284C7',ch6:'#047857',ch7:'#0369A1',ch8:'#BE123C',ch9:'#0E7490',ch10:'#64748B',ch11:'#B45309',ch12:'#EA580C',ch13:'#0369A1',ch14:'#15803D',ch15:'#0F766E',ch16:'#164E63',ch17:'#475569',ch18:'#059669',ch19:'#0891B2',ch20:'#2563EB'};
const BM_SVG={on:'<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.77 5.82 22 7 14.14l-5-4.87 6.91-1.01z"/></svg>',off:'<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.77 5.82 22 7 14.14l-5-4.87 6.91-1.01z"/></svg>'};

function safeJSON(k,f){try{return JSON.parse(localStorage.getItem(k))||f}catch{return f}}
const S={view:'home',ch:null,bm:safeJSON('gbm',[]),read:safeJSON('grd',[]),fs:parseInt(localStorage.getItem('gfs')||'18'),lh:parseFloat(localStorage.getItem('glh')||'1.7'),th:localStorage.getItem('gth')||'light'};
let flashIdx=0,flashDeck=[],flashFilter='all';

document.addEventListener('DOMContentLoaded',()=>{
  setFS(S.fs);setLH(S.lh,true);
  const fsR=document.getElementById('fsRange');if(fsR)fsR.value=S.fs;
  const lhR=document.getElementById('lhRange');if(lhR)lhR.value=S.lh;
  document.documentElement.setAttribute('data-theme',S.th);
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
  if(view==='feed'&&typeof BrainFeed!=='undefined')BrainFeed.init();
  if(view!=='feed'&&typeof BrainFeed!=='undefined')BrainFeed.destroy();
  if(view==='dash'&&typeof Dashboard!=='undefined')Dashboard.render();
  if(view==='garde')renderGarde();
  if(view!=='quiz'&&typeof QuizMode!=='undefined')QuizMode.destroy();
  if(view==='set'){document.getElementById('pd').textContent=`${S.read.length} chapitre${S.read.length>1?'s':''} consulté${S.read.length>1?'s':''}`}
}
/* ── DAILY REVISION CARD ── */
function renderDailyRev(){
  const el=document.getElementById('recent');if(!el)return;
  // Count SRS due cards
  let dueCount=0;
  try{
    const srs=JSON.parse(localStorage.getItem('bf_srs'))||{};
    const now=Date.now();
    Object.values(srs).forEach(e=>{if(e.nextReview<=now)dueCount++});
  }catch{}
  const stats=loadBfStats();
  const streak=stats.streak||0;
  const dailyDone=stats.dailyDone||0;
  const goal=50;
  const pct=Math.min(100,Math.round((dailyDone/goal)*100));
  el.style.display='block';
  el.innerHTML=`
    <div class="daily-rev-card" onclick="sw('feed')">
      <div class="daily-rev-left">
        <div class="daily-rev-title">Révision du jour</div>
        <div class="daily-rev-sub">${dueCount>0?dueCount+' cartes à révoir':'Tout est à jour !'}</div>
        <div class="daily-rev-progress">
          <div class="daily-rev-bar"><div class="daily-rev-fill" style="width:${pct}%"></div></div>
          <span class="daily-rev-count">${dailyDone}/${goal}</span>
        </div>
      </div>
      <div class="daily-rev-right">
        <div class="daily-rev-streak">${streak>0?'Jour '+streak:'Commencer'}</div>
        <div class="daily-rev-icon">
          <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
        </div>
      </div>
    </div>`;
}
function loadBfStats(){
  try{return JSON.parse(localStorage.getItem('bf_stats'))||{streak:0,points:0,lastDay:'',dailyDone:0}}catch{return{streak:0,points:0,lastDay:'',dailyDone:0}}
}

function goHome(){sw('home');S.ch=null;renderHome()}

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
  const totalFigs=typeof FIGURES!=='undefined'?Object.keys(FIGURES).length:0;
  const totalItems=APP_DATA.chapters.reduce((s,ch)=>s+ch.items.length,0);
  document.querySelector('.stats-bar').innerHTML=`
    <div class="stat"><span class="stat-num">${APP_DATA.chapters.length}</span><span class="stat-label">chap.</span></div>
    <div class="stat"><span class="stat-num">${totalFigs}</span><span class="stat-label">fig.</span></div>
    <div class="stat"><span class="stat-num">${totalItems}</span><span class="stat-label">ITEMs</span></div>
    <div class="stat"><span class="stat-num">${S.read.length}</span><span class="stat-label">lus</span></div>
    <div class="stat stat-click" role="button" tabindex="0" onclick="sw('fav')" onkeydown="if(event.key==='Enter')sw('fav')"><span class="stat-num" id="statFav">${S.bm.length}</span><span class="stat-label">fav.</span></div>`;
  // Daily revision card
  renderDailyRev();
  // Render chapters
  APP_DATA.chapters.forEach(ch=>{
    const rd=S.read.includes(ch.id),bm=S.bm.includes(ch.id);
    const pct=rd?100:0;
    const el=document.createElement('div');el.className='ch-row';
    el.onclick=()=>showCh(ch.id);
    el.innerHTML=`<div class="ch-row-num" style="background:${CH_COLORS[ch.id]}15;color:${CH_COLORS[ch.id]}">${ch.id.replace('ch','')}</div>
      <div class="ch-row-body">
        <div class="ch-row-title">${esc(ch.t)}</div>
        <div class="ch-row-meta">${ch.items.map(i=>`<span class="tag">${i}</span>`).join('')}${rd?`<span class="tag tag-read">Consulté</span>`:''}</div>
      </div>
      <button class="ch-row-bm ${bm?'on':''}" aria-label="${bm?'Retirer des favoris':'Ajouter aux favoris'}" onclick="event.stopPropagation();quickBm('${ch.id}')">${bm?BM_SVG.on:BM_SVG.off}</button>
      <div class="ch-progress" style="width:${pct}%;background:${CH_COLORS[ch.id]}"></div>`;
    (ch.part===1?p1:p2).appendChild(el);
  });
}
function getChProgress(id){return{pct:S.read.includes(id)?100:0}}
function quickBm(id){const i=S.bm.indexOf(id);if(i>-1)S.bm.splice(i,1);else S.bm.push(id);localStorage.setItem('gbm',JSON.stringify(S.bm));renderHome();renderFav();toast(i>-1?'Retiré des favoris':'Ajouté aux favoris')}

/* ── SEARCH ── */
function toggleSearch(){const sb=document.getElementById('searchBar');sb.classList.toggle('open');if(sb.classList.contains('open'))document.getElementById('searchInput').focus()}
function onSearch(q){
  if(typeof AppSearch!=='undefined' && q.length >= 2){
    const results = AppSearch.search(q);
    const container = document.getElementById('searchResults');
    if(container){ AppSearch.renderResults(results, container); container.style.display = results.length ? 'block' : 'none'; }
    // Also filter chapter rows
    document.querySelectorAll('.ch-row').forEach(r=>{
      const t=r.querySelector('.ch-row-title').textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
      const nq=q.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
      r.style.display=!q||t.includes(nq)?'':'none';
    });
  } else {
    const container = document.getElementById('searchResults');
    if(container) container.style.display = 'none';
    q=q.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
    document.querySelectorAll('.ch-row').forEach(r=>{
      const t=r.querySelector('.ch-row-title').textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
      r.style.display=!q||t.includes(q)?'':'none';
    });
  }
}

/* ── FAVORIS ── */
function renderFav(){
  const list=document.getElementById('favList');if(!list)return;
  if(!S.bm.length){list.innerHTML='<div class="empty"><div class="empty-icon">⭐</div><div class="empty-text">Aucun favori pour l\'instant</div><div class="empty-hint">Appuyez sur l\'étoile d\'un chapitre pour le sauvegarder</div></div>';return}
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
function showCh(id){
  const ch=APP_DATA.chapters.find(c=>c.id===id);if(!ch)return;
  S.ch=id;
  if(!S.read.includes(id)){S.read.push(id);localStorage.setItem('grd',JSON.stringify(S.read));updStats()}
  document.getElementById('chHero').style.background=`linear-gradient(145deg,${CH_COLORS[id]},#164E63)`;
  document.getElementById('chNum').textContent=id.replace('ch','');
  document.getElementById('chT').textContent=ch.t;
  // Chapter hero image (AI-generated or fallback to PDF illustration)
  const heroImg = (typeof CHAPTER_HERO!=='undefined'?CHAPTER_HERO[id]:null) || CHAPTER_ILL[id] || '';
  const heroEl = document.getElementById('chHero');
  const oldImg = heroEl.querySelector('.ch-hero-img');
  if(oldImg) oldImg.remove();
  if(heroImg){
    const img = document.createElement('img');
    img.className='ch-hero-img'; img.src=heroImg; img.alt=ch.t; img.loading='lazy';
    img.onerror=function(){this.style.display='none'};
    heroEl.insertBefore(img, heroEl.firstChild);
  }
  const tags=ch.items.map(i=>`<span class="tag">${i}</span>`).join('');
  document.getElementById('chTags').innerHTML=tags+(S.read.includes(id)?'<span class="tag tag-read">Consulté</span>':'');
  const bmOn=S.bm.includes(id);
  document.getElementById('chToolbar').innerHTML=`<button onclick="goHome()">Retour</button><button onclick="quickBm('${id}')">${bmOn?BM_SVG.on+' Retirer':BM_SVG.off+' Favori'}</button>`;
  renderChapterContent();sw('ch');
}
function renderChapterContent(){
  const cc=document.getElementById('chContent');if(!cc)return;
  const chunks=APP_DATA.content[S.ch]||[];
  if(!chunks.length){cc.innerHTML='<div class="empty"><div class="empty-icon">📖</div><div class="empty-text">Contenu indisponible</div><div class="empty-hint">Ce chapitre sera bientôt disponible</div></div>';return}
  cc.innerHTML=renderChapter(chunks.map(c=>c[1]).join('\n'),S.ch);
  applyConceptLinks();
}

/* ── MANUEL NUMÉRIQUE (contenu OCR → structure éditoriale) ── */
const RUN_HDR_RE=/^(Comprendre le vieillissement|Connaissances|Entraînement|Gériatrie|▼)$/i;
const SKIP_LINE_RE=/^(©\s*\d{4}|Elsevier|Tous droits réservés|This page intentionally left blank|Index$|En lien avec la définition)/i;
const SYLLABUS_RE=/^(Rang Rubrique|Intitulé Descriptif|Item, objectifs|Hiérarchisation des connaissances|ITEM\s+\d+\s*–|Connaître les |Savoir qualifier|Modifications reconnues|Descriptif$)/i;
const SYLLABUS_ROW_RE=/^[A-D]\s+(Définition|Épidémiologie|Éléments|Prévalence|Prise en charge|B\s)/;
const SECTION_RE=/^([IVX]+)\.\s+(.+)/;
const LETTER_RE=/^([A-Z])\.\s+(.+)/;
const RANG_RE=/^([A-D])\s+(.+)/;
const BULLET_RE=/^[•\-–]\s*(.+)/;
const DIAGRAM_RE=/^(Fonction|d'organe|Réserve|Seuil|Effet|100\s*%|0\s+Âge|\d\s+(Vieillissement|Maladie|Stress)|Fig\.\s*\d)/i;
const NUM_LIST_RE=/^(\d{1,2})[\.)]\s+(.+)/;

function renderChapter(raw,chId){
  const ch=APP_DATA.chapters.find(c=>c.id===chId);
  const titleRe=ch?new RegExp('^'+ch.t.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'\\s*$','i'):null;
  let text=raw.replace(/(\w)-\s*\n\s*(\w)/g,'$1$2');
  let lines=text.replace(/\r\n/g,'\n').split('\n').map(l=>l.trim()).filter((l,i,arr)=>{
    if(!l)return false;
    if(RUN_HDR_RE.test(l))return false;
    if(SKIP_LINE_RE.test(l))return false;
    if(titleRe&&titleRe.test(l))return false;
    if(/^Page\s+\d+$/i.test(l))return false;
    if(SYLLABUS_RE.test(l))return false;
    if(SYLLABUS_ROW_RE.test(l))return false;
    if(/^En lien avec/.test(l))return false;
    if(DIAGRAM_RE.test(l)&&!/Fig\.\s*\d+\.\d+/.test(l))return false;
    return true;
  });
  // Filter ITEM table rows before first section + kill short garbage
  let firstSec=-1;
  for(let i=0;i<lines.length;i++){if(SECTION_RE.test(lines[i])||LETTER_RE.test(lines[i])){firstSec=i;break}}
  if(firstSec>0){
    lines=lines.filter((l,i)=>{
      if(i>=firstSec)return true;
      if(/Situations?\s+de\s+départ/i.test(l))return true;
      if(/^\d{2,3}\s+/.test(l))return true;
      if(BULLET_RE.test(l))return true;
      if(l.length > 40 && /[.!?]/.test(l)) return true;
      if(/gérontologie|gériatrie|vieillissement/i.test(l)) return true;
      return false;
    });
  }
  // Kill remaining short non-sentence fragments (common OCR junk)
  lines = lines.filter(l => {
    if (l.length >= 50) return true;
    if (BULLET_RE.test(l) || SECTION_RE.test(l) || LETTER_RE.test(l)) return true;
    if (/^Fig\.|Tableau|Encadré|^\d{2,3}\s+/.test(l)) return true;
    if (/[.!?]$/.test(l)) return true;   // keep if it ends a sentence
    return false;
  });
  let html='';let paraBuf=[];let bulletBuf=[];let inSection=false;let inSit=false;let inCallout=false;let calloutTitle='';let calloutBuf=[];let inNumList=false;let numBuf=[];let pastPreamble=false;

  function markBodyStart(){pastPreamble=true}
  function isPreambleLine(l){
    if(/^\d{3}\s+\S/.test(l))return true;
    if(/^ITEM\s/i.test(l))return true;
    if(/^En lien avec/i.test(l))return true;
    if(/^diagnostic et thérapeutique/i.test(l))return true;
    return false;
  }

  function flushPara(rang){
    if(!paraBuf.length)return;
    const merged=paraBuf.join(" ").replace(/\s+/g," ").trim();
    paraBuf=[];
    if(merged.length<12)return;
    const chip=rang?`<span class="rang-inline rang-${rang==="A"?"a":"b"}">Rang ${rang}</span>`:"";
    // No more splitting - create large continuous blocks
    html+=`<div class="para-card">${chip}<p>${esc(merged)}</p></div>`;
  }

  function flushBullets(){
    if(!bulletBuf.length)return;
    html+=`<div class="reader-list-card"><ul class="reader-list">${bulletBuf.map(b=>`<li>${esc(b)}</li>`).join('')}</ul></div>`;
    bulletBuf=[];
  }
  function flushNumList(){
    if(!numBuf.length)return;
    html+=`<div class="reader-list-card"><ol class="reader-list num">${numBuf.map(b=>`<li>${esc(b)}</li>`).join('')}</ol></div>`;
    numBuf=[];inNumList=false;
  }
  function flushCallout(){
    if(!calloutBuf.length&&!calloutTitle)return;
    html+=`<aside class="callout"><div class="callout-title">${esc(calloutTitle||'Encadré')}</div><div class="callout-body">${calloutBuf.map(p=>`<p>${esc(p)}</p>`).join('')}</div></aside>`;
    calloutBuf=[];calloutTitle='';inCallout=false;
  }
  function closeSection(){if(inSection){html+=`</div></section>`;inSection=false}}

  const outlineSeen=new Set();
  const outlineParts=[];
  const outlineCap=lines.slice(0,35);
  for(const ol of outlineCap){
    const om=ol.match(SECTION_RE);
    if(!om)continue;
    const key=om[1]+'|'+om[2];
    if(outlineSeen.has(key))continue;
    outlineSeen.add(key);
    outlineParts.push(om);
    if(outlineParts.length>=8)break;
  }
  if(outlineParts.length>=3){
    html+=`<nav class="ch-outline" aria-label="Plan du chapitre"><p class="outline-label">Plan du chapitre</p><ul>${outlineParts.map(m=>`<li><span class="outline-num">${esc(m[1])}</span> ${esc(m[2])}</li>`).join('')}</ul></nav>`;
  }

  for(let i=0;i<lines.length;i++){
    let l=lines[i];
    if(!l){flushBullets();flushNumList();if(inCallout)flushCallout();continue}

    if(/Situations?\s+de\s+départ/i.test(l)){
      flushBullets();flushNumList();closeSection();
      markBodyStart();
      html+=`<div class="key-point"><strong>Situations de départ</strong><ul>`;inSit=true;continue;
    }
    if(inSit){
      const sm=l.match(/^(\d{2,3})\s+(.+)/);
      if(sm){html+=`<li>${esc(sm[2])}</li>`;continue}
      html+=`</ul></div>`;inSit=false;
    }

    const enc=l.match(/^Encadré\s+([\d.]+)/i);
    if(enc){flushBullets();flushNumList();flushCallout();calloutTitle='Encadré '+enc[1];inCallout=true;continue}
    if(inCallout){
      if(SECTION_RE.test(l)||LETTER_RE.test(l)||/^Tableau\s+/i.test(l)){flushCallout()}
      else if(BULLET_RE.test(l)){calloutBuf.push(l.match(BULLET_RE)[1]);continue}
      else if(l.length<200){calloutBuf.push(l);continue}
      else flushCallout();
    }

    const figM=l.match(/Fig\.\s*(\d+\.\d+)/);
    if(figM&&typeof FIGURES!=='undefined'){
      flushPara();flushBullets();flushNumList();
      const figId=figM[1];
      if(typeof renderInteractiveFigure==='function'){
        html+=`<figure class="fig-block">${renderInteractiveFigure(figId)}<figcaption>Figure ${figId}</figcaption></figure>`;
      }else{
        const src=FIGURES[figId]?.[0];
        if(src&&!src.includes('figures/page_')){
          html+=`<figure class="fig-block"><img src="${src}" alt="Figure ${figId}" loading="lazy"><figcaption>Figure ${figId}</figcaption></figure>`;
        }
      }
      continue;
    }

    const tab=l.match(/^Tableau\s+([\d.]+)\.\s*(.*)/i);
    if(tab){flushPara();flushBullets();html+=`<div class="table-lead"><span class="table-badge">Tableau ${tab[1]}</span><span>${esc(tab[2]||'')}</span></div>`;continue}

    const secM=l.match(SECTION_RE);
    if(secM){
      if(!pastPreamble)continue;
      flushPara();flushBullets();flushNumList();closeSection();
      html+=`<section class="manual-section"><header class="section-head"><span class="section-num">${esc(secM[1])}</span><span class="section-title">${esc(secM[2])}</span></header><div class="section-body">`;
      inSection=true;continue;
    }

    const letM=l.match(LETTER_RE);
    if(letM&&letM[2].length>2){
      markBodyStart();
      flushPara();flushBullets();flushNumList();
      html+=`<h3 class="sub-head"><span class="sub-letter">${esc(letM[1])}</span>${esc(letM[2])}</h3>`;
      continue;
    }

    const numM=l.match(NUM_LIST_RE);
    if(numM&&numM[2].length<120){
      flushBullets();
      inNumList=true;numBuf.push(numM[2]);continue;
    }
    if(inNumList&&l.length<100&&!SECTION_RE.test(l)){numBuf.push(l);continue}
    if(inNumList)flushNumList();

    const bulM=l.match(BULLET_RE);
    if(bulM){flushNumList();bulletBuf.push(bulM[1]);continue}
    // Bullet continuation: if we have bullets and line is not structural, append to last bullet
    if(bulletBuf.length){
      const isStruct=SECTION_RE.test(l)||LETTER_RE.test(l)||/^Situations?\s+de\s+départ/i.test(l)||/^Encadré\s+/i.test(l)||/^Tableau\s+/i.test(l)||/^Fig\.\s*\d/i.test(l)||RANG_RE.test(l)||/^\d{2,3}\s+/.test(l);
      if(!isStruct&&l.length<200){
        bulletBuf[bulletBuf.length-1]+=' '+l;continue;
      }
      flushBullets();
    }

    const rangM=l.match(RANG_RE);
    if(rangM&&!/Rubrique|Intitulé|Descriptif|Connaître|Modifications|Éléments physiopathologiques/.test(l)){
      const body=rangM[2];
      // If body starts with prose words, treat as paragraph not rang annotation
      const isProse=/^(Le |La |Les |L'|Il |Elle |Pour |C'est|Ainsi|On |En |Un |Une |Cette |Ce |Cela |De |Du |Des |Dans |Avec |Son |Sa |Ses |Sur |Par |Au |Aux |Tout |Tous |Bien |Mais |Or |Donc |Chez|Avec|Après|Avant|Depuis)/i.test(body);
      if(isProse){
        paraBuf.push(body);
        markBodyStart();
        continue;
      }
      if(body.length<100&&!/[.;:]$/.test(body)){
        flushPara();html+=`<div class="def-block"><span class="rang-badge ${rangM[1]==='A'?'rang-a':'rang-b'}">Rang ${rangM[1]}</span><span class="def-text">${esc(body)}</span></div>`;
        continue;
      }
      paraBuf.push(body);flushPara(rangM[1]);markBodyStart();continue;
    }

    if(!pastPreamble){
      if(isPreambleLine(l))continue;
      markBodyStart();
    }

    if(/^Critères de /i.test(l)){flushPara();html+=`<div class="callout callout-soft"><div class="callout-title">${esc(l)}</div><ul class="reader-list">`;
      let j=i+1;while(j<lines.length&&NUM_LIST_RE.test(lines[j])){const nm=lines[j].match(NUM_LIST_RE);html+=`<li>${esc(nm[2])}</li>`;j++}html+=`</ul></div>`;i=j-1;continue}

    if(/^(\d{1,3})$/.test(l))continue;
    if(/^diagnostic et thérapeutique/i.test(l))continue;
    if(/^\w{4,20}$/.test(l)&&!/^(Fig|Tableau|Encadré)/i.test(l))continue;
    if(l.length<15&&!/[.!?]/.test(l)&&!/^[A-Z]\./.test(l)&&!BULLET_RE.test(l)&&!SECTION_RE.test(l)&&!LETTER_RE.test(l))continue;
    // OCR garbage - catch specific patterns that leak through preamble
    if(/Bouchon\s*\)/.test(l))continue;
    if(/vieillissemnt|viellissement/.test(l))continue;
    if(/physiopathologiques\s+physiopathologiques/i.test(l))continue;
    if(/et sans incapacité/i.test(l)&&!(/espérance de vie/i.test(l)))continue;
    if(/\bgine\b/.test(l))continue;
    if(/physiopathologiques.*(gine|agents étiologiques)/i.test(l))continue;
    if(/anthropologiques\s+populationnel/i.test(l))continue;

    paraBuf.push(l);
  }
  flushPara();flushBullets();flushNumList();if(inCallout)flushCallout();if(inSit)html+=`</ul></div>`;closeSection();
  return html||'<div class="empty"><div class="empty-text">Aucun contenu structuré</div></div>';
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
    document.getElementById('flashQ').innerHTML='<div class="empty"><div class="empty-icon">🎴</div><div class="empty-text">Aucune carte pour ce filtre</div></div>';
    document.getElementById('flashA').textContent='Essayez le filtre « Tous » pour voir toutes les cartes.';
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

/* ── FICHES DE GARDE ── */
function renderGarde(){
  const el=document.getElementById('gardeContent');
  if(!el)return;
  if(typeof FICHES_GARDE==='undefined'||!FICHES_GARDE.length){
    el.innerHTML='<div class="empty"><div class="empty-icon">🚨</div><div class="empty-text">Fiches indisponibles</div><div class="empty-hint">Rechargez l\'application</div></div>';
    return;
  }
  el.innerHTML='<div class="garde-grid">'+FICHES_GARDE.map(f=>`
    <div class="garde-card garde-urgency-${esc(f.urgency)}" id="${esc(f.id)}">
      <div class="garde-card-head" onclick="this.parentElement.classList.toggle('open')">
        <span class="garde-card-icon" aria-hidden="true">${f.icon}</span>
        <div class="garde-card-title">${esc(f.title)}</div>
        <span class="garde-card-chevron" aria-hidden="true">▾</span>
      </div>
      <div class="garde-card-body">
        <ul class="garde-checklist">${f.checklist.map(item=>`<li>${esc(item)}</li>`).join('')}</ul>
        ${f.alert?`<div class="garde-alert" role="note">${esc(f.alert)}</div>`:''}
      </div>
    </div>`).join('')+'</div>';
}

/* ── ITEMS ── */
function renderItems(){const list=document.getElementById('itemsList');if(!list)return;list.innerHTML='';APP_DATA.chapters.filter(ch=>ch.items.length>0).forEach(ch=>{ch.items.forEach(item=>{const el=document.createElement('div');el.className='item-card';el.onclick=()=>showCh(ch.id);el.innerHTML=`<div class="item-title"><span class="rang-badge rang-a">${item}</span>${esc(ch.t)}</div><div class="item-desc">Chapitre ${ch.id.replace('ch','')} — Cliquez pour lire</div>`;list.appendChild(el)})})}

/* ── SETTINGS ── */
function setFS(v){S.fs=+v;document.body.style.fontSize=v+'px';localStorage.setItem('gfs',v);document.getElementById('fsVal').textContent=v+'px'}
function setLH(v,init){S.lh=parseFloat(v);document.documentElement.style.setProperty('--lh',S.lh);document.body.style.lineHeight=String(S.lh);if(!init)localStorage.setItem('glh',v);document.getElementById('lhVal').textContent=v}
function resetProg(){if(confirm('Réinitialiser les chapitres consultés ?')){S.read=[];localStorage.setItem('grd','[]');renderHome();updStats();toast('Progression réinitialisée')}}
function clearAll(){if(confirm('Effacer toutes les données ?')){S.bm=[];S.read=[];localStorage.clear();renderHome();renderFav();updStats();toast('Données effacées')}}
function updStats(){
  const pd=document.getElementById('pd');
  if(pd)pd.textContent=`${S.read.length} chapitre${S.read.length>1?'s':''} consulté${S.read.length>1?'s':''}`;
  const sf=document.getElementById('statFav');
  if(sf)sf.textContent=String(S.bm.length);
  const stats=document.querySelector('.stats-bar');
  if(stats&&S.view==='home')renderHome();
}
function installPWA(){if(window.deferredPrompt){window.deferredPrompt.prompt();window.deferredPrompt=null}}

/* ── UTILS ── */
function esc(s){const d=document.createElement('div');d.textContent=s;return d.innerHTML}
function toast(msg){const t=document.getElementById('toast');if(!t)return;t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2000)}
