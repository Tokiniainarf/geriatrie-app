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
  window.addEventListener('scroll',()=>{const f=document.getElementById('fab');if(f){if(window.scrollY>300){if(!f.classList.contains('show')){f.classList.add('show')}}else{f.classList.remove('show')}}});
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
  if(view==='dict')renderDict();
  if(view==='annales')renderAnnales();
  if(view==='sujets')renderSujets();
  if(view==='proto')renderProto();
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

/* ── NOTES PERSONNELLES ── */
function openNotes(chId){
  const key='grd_notes_'+chId;
  const existing=localStorage.getItem(key)||'';
  const ch=APP_DATA.chapters.find(c=>c.id===chId);
  const title=ch?ch.t:'Notes';
  let modal=document.getElementById('notesModal');
  if(!modal){
    modal=document.createElement('div');
    modal.id='notesModal';
    modal.className='notes-modal';
    modal.onclick=function(e){if(e.target===this)closeNotes()};
    document.body.appendChild(modal);
  }
  const saved=localStorage.getItem(key+'_ts');
  const savedText=saved?'Dernière sauvegarde: '+new Date(parseInt(saved)).toLocaleString('fr'):'';
  modal.innerHTML=`
    <div class="notes-pan">
      <div class="notes-hdr">
        <h3>📝 ${esc(title)}</h3>
        <div class="notes-actions">
          <span class="notes-saved">${savedText}</span>
          <button onclick="closeNotes()">Fermer</button>
        </div>
      </div>
      <textarea class="notes-textarea" id="notesText" placeholder="Vos notes personnelles pour ce chapitre...">${esc(existing)}</textarea>
      <div class="notes-footer">
        <span class="notes-count" id="notesCount">${existing.split(/\s+/).filter(Boolean).length} mots</span>
        <button class="notes-save-btn" onclick="saveNotes('${chId}')">Sauvegarder</button>
      </div>
    </div>`;
  modal.classList.add('open');
  const ta=document.getElementById('notesText');
  ta.focus();
  ta.addEventListener('input',()=>{
    const words=ta.value.split(/\s+/).filter(Boolean).length;
    document.getElementById('notesCount').textContent=words+' mots';
  });
  // Auto-save every 5 seconds
  window._notesAutoSave=setInterval(()=>{
    const val=ta.value;
    localStorage.setItem(key,val);
    localStorage.setItem(key+'_ts',Date.now().toString());
  },5000);
}
function saveNotes(chId){
  const ta=document.getElementById('notesText');
  if(!ta)return;
  localStorage.setItem('grd_notes_'+chId,ta.value);
  localStorage.setItem('grd_notes_'+chId+'_ts',Date.now().toString());
  showToast('📝 Notes sauvegardées');
}
function closeNotes(){
  const modal=document.getElementById('notesModal');
  if(modal)modal.classList.remove('open');
  if(window._notesAutoSave)clearInterval(window._notesAutoSave);
}
function getAllNotes(){
  const notes=[];
  for(let i=0;i<localStorage.length;i++){
    const k=localStorage.key(i);
    if(k&&k.startsWith('grd_notes_')&&!k.endsWith('_ts')){
      const chId=k.replace('grd_notes_','');
      const ch=APP_DATA.chapters.find(c=>c.id===chId);
      const ts=localStorage.getItem(k+'_ts');
      notes.push({chId,title:ch?ch.t:chId,content:localStorage.getItem(k),timestamp:ts?parseInt(ts):0});
    }
  }
  return notes.sort((a,b)=>b.timestamp-a.timestamp);
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
  let chIdx=0;
  APP_DATA.chapters.forEach(ch=>{
    const rd=S.read.includes(ch.id),bm=S.bm.includes(ch.id);
    const pct=rd?100:0;
    const el=document.createElement('div');el.className='ch-row ch-row-enter';
    el.style.animationDelay=(chIdx*0.04)+'s';
    chIdx++;
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
    if(container){ AppSearch.renderResults(results, container); container.style.display = 'block'; }
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
  if(!S.bm.length){list.innerHTML='<div class="empty"><div class="empty-icon">⭐</div><div class="empty-text">Aucun favori pour l\'instant</div><div class="empty-hint">Appuyez sur l\'étoile d\'un chapitre pour le sauvegarder</div><button type="button" class="empty-cta" onclick="sw(\'home\')">Parcourir les chapitres</button></div>';return}
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
  document.getElementById('chToolbar').innerHTML=`<button onclick="goHome()">Retour</button><button onclick="quickBm('${id}')">${bmOn?BM_SVG.on+' Retirer':BM_SVG.off+' Favori'}</button><button onclick="openNotes('${id}')">📝 Notes</button>`;
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

/* ── DICTIONNAIRE MÉDICAL ── */
const DICT_FAV_KEY='gdict_fav';
let dictCache=null;
let dictFilter={q:'',letter:'',favOnly:false};

const DICT_CAT_LABELS={
  abbreviation:'Abréviation',
  disease:'Maladie / concept',
  score:'Score / échelle',
  drug:'Médicament',
  procedure:'Procédure / examen'
};

const DICT_DRUG_TERMS=new Set([
  'metformine','tramadol','sertraline','haloperidol','donepezil','benzodiazépine',
  'opioïde','neuroleptique','isrs','inhibiteur de la cholinestérase'
]);

function loadDictFavs(){
  return safeJSON(DICT_FAV_KEY,[]);
}
function saveDictFavs(arr){
  localStorage.setItem(DICT_FAV_KEY,JSON.stringify(arr));
}

function dictFirstLetter(term){
  const n=(term||'').trim().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
  const c=n.charAt(0).toUpperCase();
  return c>='A'&&c<='Z'?c:'#';
}

function inferDictCategory(term,definition){
  const t=term||'';
  const d=definition||'';
  const tl=t.toLowerCase();
  if(DICT_DRUG_TERMS.has(tl))return'drug';
  if(/^(mms|mmse|gds|mna|cam|eva|adl|iadl|aggir|avd|dfg|imc|dexa|frax|tinetti|braden|norton|berg|charlson|kellgren|cha2ds2|has-bled|bgs|ecpa|peg|sng|epa|apa|ssr|ehpad|had|dlb|ftd|mci|bpco|hta|dm2|avc|ep|tvp|ira|itu|dmla|fa|ic|aomi|bph|tv)$/i.test(t))return'abbreviation';
  if(/^[A-Z0-9]{2,8}$/.test(t)&&t===t.toUpperCase())return'abbreviation';
  if(/échelle|scale|index de|classification|score|cha2ds2|has-bled|frax|tinetti|braden|norton|berg|charlson|kellgren/i.test(t+' '+d))return'score';
  if(/gastrostomie|sonde |densitométrie|scanner|anticoagulation|rééducation|prothèse|chirurgie|manœuvre|endoscopique|hospitalisation/i.test(t+' '+d))return'procedure';
  return'disease';
}

function buildDictIndex(){
  if(dictCache)return dictCache;
  const map={};

  if(typeof CONCEPT_MAP_EXPANDED!=='undefined'){
    Object.entries(CONCEPT_MAP_EXPANDED).forEach(([term,info])=>{
      map[term]={
        term,
        definition:info.definition||'',
        chapter:info.chapter||'',
        related:info.related||[],
        search:null,
        category:inferDictCategory(term,info.definition)
      };
    });
  }

  if(typeof CONCEPT_MAP!=='undefined'){
    Object.entries(CONCEPT_MAP).forEach(([term,info])=>{
      if(map[term]){
        if(!map[term].search)map[term].search=info.search;
        if(!map[term].chapter)map[term].chapter=info.ch;
        return;
      }
      const parent=Object.keys(map).find(k=>{
        if(k.toLowerCase()===term.toLowerCase())return false;
        if(typeof CONCEPT_MAP!=='undefined'&&CONCEPT_MAP[k]&&CONCEPT_MAP[k].search===info.search)return true;
        return(info.search&&k.toLowerCase()===info.search.toLowerCase());
      });
      const def=parent
        ?`Variante ou synonyme de « ${parent} ». ${map[parent].definition}`
        :'Concept du manuel gériatrique — consultez le chapitre associé pour le développement clinique.';
      map[term]={
        term,
        definition:def,
        chapter:info.ch,
        related:parent?[parent]:[],
        search:info.search,
        category:inferDictCategory(term,def)
      };
    });
  }

  dictCache=map;
  return map;
}

function getDictEntries(){
  const map=buildDictIndex();
  return Object.values(map).sort((a,b)=>{
    const la=dictFirstLetter(a.term),lb=dictFirstLetter(b.term);
    if(la!==lb)return la.localeCompare(lb,'fr');
    return a.term.localeCompare(b.term,'fr',{sensitivity:'base'});
  });
}

function getChTitle(chId){
  const ch=APP_DATA.chapters.find(c=>c.id===chId);
  return ch?ch.t:'';
}

function renderDictAlpha(){
  const el=document.getElementById('dictAlpha');
  if(!el)return;
  const letters='ABCDEFGHIJKLMNOPQRSTUVWXYZ#'.split('');
  el.innerHTML=letters.map(L=>{
    const active=dictFilter.letter===L?' active':'';
    return`<button type="button" class="dict-alpha-btn${active}" data-letter="${L}" onclick="dictJumpLetter('${L}')">${L==='#'?'#':L}</button>`;
  }).join('');
}

function dictJumpLetter(letter){
  dictFilter.letter=dictFilter.letter===letter?'':letter;
  renderDictAlpha();
  renderDictList();
  if(dictFilter.letter){
    const first=document.querySelector(`.dict-card[data-letter="${dictFilter.letter}"]`);
    if(first)first.scrollIntoView({behavior:'smooth',block:'start'});
  }
}

function onDictSearch(q){
  dictFilter.q=q||'';
  renderDictList();
}

function toggleDictFavFilter(){
  dictFilter.favOnly=!dictFilter.favOnly;
  const btn=document.getElementById('dictFavOnlyBtn');
  if(btn){
    btn.classList.toggle('active',dictFilter.favOnly);
    btn.setAttribute('aria-pressed',dictFilter.favOnly?'true':'false');
  }
  renderDictList();
}

function toggleDictFav(term,btn){
  const favs=loadDictFavs();
  const i=favs.indexOf(term);
  if(i>-1)favs.splice(i,1);else favs.push(term);
  saveDictFavs(favs);
  if(btn){
    btn.classList.toggle('on',favs.includes(term));
    btn.setAttribute('aria-label',favs.includes(term)?'Retirer des favoris':'Ajouter aux favoris');
  }
  if(dictFilter.favOnly)renderDictList();
  toast(i>-1?'Terme retiré des favoris':'Terme ajouté aux favoris');
}

function dictNavigateChapter(chId,search){
  if(!chId)return;
  if(typeof navigateToConcept==='function'&&search)navigateToConcept(chId,search);
  else showCh(chId);
}

function dictFocusTerm(term){
  dictFilter.q=term;
  dictFilter.letter='';
  dictFilter.favOnly=false;
  const inp=document.getElementById('dictSearch');
  if(inp)inp.value=term;
  const btn=document.getElementById('dictFavOnlyBtn');
  if(btn){btn.classList.remove('active');btn.setAttribute('aria-pressed','false')}
  renderDictAlpha();
  renderDictList();
  requestAnimationFrame(()=>{
    const card=document.querySelector(`.dict-card[data-term="${CSS.escape(term)}"]`);
    if(card){
      card.classList.add('dict-card-highlight');
      card.scrollIntoView({behavior:'smooth',block:'center'});
      setTimeout(()=>card.classList.remove('dict-card-highlight'),2000);
    }
  });
}

function renderDictList(){
  const list=document.getElementById('dictList');
  const meta=document.getElementById('dictMeta');
  if(!list)return;
  const favs=loadDictFavs();
  const q=dictFilter.q.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
  let entries=getDictEntries();

  if(dictFilter.favOnly)entries=entries.filter(e=>favs.includes(e.term));
  if(dictFilter.letter)entries=entries.filter(e=>dictFirstLetter(e.term)===dictFilter.letter);
  if(q){
    entries=entries.filter(e=>{
      const blob=(e.term+' '+e.definition+' '+(e.related||[]).join(' ')).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
      return blob.includes(q);
    });
  }

  if(meta)meta.textContent=`${entries.length} terme${entries.length>1?'s':''}${dictFilter.favOnly?' (favoris)':''}`;

  if(!entries.length){
    list.innerHTML='<div class="empty"><div class="empty-icon">📚</div><div class="empty-text">Aucun terme trouvé</div><div class="empty-hint">Modifiez la recherche ou l’index A-Z</div></div>';
    return;
  }

  const map=buildDictIndex();
  list.innerHTML=entries.map((e,idx)=>{
    const letter=dictFirstLetter(e.term);
    const isFav=favs.includes(e.term);
    const chTitle=getChTitle(e.chapter);
    const search=e.search||(typeof CONCEPT_MAP!=='undefined'&&CONCEPT_MAP[e.term]?CONCEPT_MAP[e.term].search:'');
    const relatedHtml=(e.related||[]).filter(r=>r!==e.term).map(r=>{
      const exists=map[r];
      if(exists)return`<button type="button" class="dict-related" onclick="dictFocusTerm('${escAttr(r)}')">${esc(r)}</button>`;
      return`<span class="dict-related dict-related-muted">${esc(r)}</span>`;
    }).join('');
    return`<article class="dict-card dict-card-enter" style="animation-delay:${Math.min(idx*0.03,0.6)}s" data-term="${escAttr(e.term)}" data-letter="${letter}" id="dict-${escAttr(e.term).replace(/\\s+/g,'-')}">
      <div class="dict-card-head">
        <h2 class="dict-card-title">${esc(e.term)}</h2>
        <div class="dict-card-actions">
          <span class="dict-badge dict-badge-${e.category}">${DICT_CAT_LABELS[e.category]||e.category}</span>
          <button type="button" class="dict-fav-btn ${isFav?'on':''}" aria-label="${isFav?'Retirer des favoris':'Ajouter aux favoris'}" onclick="event.stopPropagation();toggleDictFav('${escAttr(e.term)}',this)">${isFav?'★':'☆'}</button>
        </div>
      </div>
      <p class="dict-card-def">${esc(e.definition)}</p>
      ${relatedHtml?`<div class="dict-related-wrap"><span class="dict-related-label">Voir aussi</span>${relatedHtml}</div>`:''}
      ${e.chapter?`<button type="button" class="dict-chapter-link" onclick="dictNavigateChapter('${e.chapter}','${escAttr(search||'')}')">Chap. ${e.chapter.replace('ch','')} — ${esc(chTitle)}</button>`:''}
    </article>`;
  }).join('');
}

function escAttr(s){
  return String(s).replace(/\\/g,'\\\\').replace(/'/g,"\\'");
}

function renderDict(){
  dictFilter={q:'',letter:'',favOnly:false};
  const inp=document.getElementById('dictSearch');
  if(inp)inp.value='';
  const btn=document.getElementById('dictFavOnlyBtn');
  if(btn){btn.classList.remove('active');btn.setAttribute('aria-pressed','false')}
  renderDictAlpha();
  renderDictList();
}

window.onDictSearch=onDictSearch;
window.dictJumpLetter=dictJumpLetter;
window.toggleDictFavFilter=toggleDictFavFilter;
window.toggleDictFav=toggleDictFav;
window.dictFocusTerm=dictFocusTerm;
window.dictNavigateChapter=dictNavigateChapter;

/* ── SYNTHESIS ── */
const SYNTH_MASTER_KEY='gsynth_mastered';
let synthFilterQuery='';

function getSynthMastered(){return safeJSON(SYNTH_MASTER_KEY,[])}
function isSynthMastered(chId){return getSynthMastered().includes(chId)}
function toggleSynthMastered(chId){
  let m=getSynthMastered();
  if(m.includes(chId))m=m.filter(id=>id!==chId);
  else m=[...m,chId];
  localStorage.setItem(SYNTH_MASTER_KEY,JSON.stringify(m));
  renderSynthesis();
  toast(m.includes(chId)?'Chapitre marqué maîtrisé':'Marque retirée');
}
function synthChIdFromExpanded(card,idx){
  if(card&&card.id&&/^syn-\d+$/.test(card.id))return 'ch'+card.id.replace('syn-','');
  return 'ch'+(idx+1);
}
function synthPointBadges(text){
  const b=[];
  if(/Rang\s*A/i.test(text))b.push('<span class="synth-point-badge rang-a">Rang A</span>');
  else if(/Rang\s*B/i.test(text))b.push('<span class="synth-point-badge rang-b">Rang B</span>');
  if(/🎯|EVC/i.test(text))b.push('<span class="synth-point-badge synth-badge-evc">EVC</span>');
  if(/💎|Perle/i.test(text))b.push('<span class="synth-point-badge synth-badge-perle">Perle</span>');
  return b.join('');
}
function synthItemBadges(chId){
  const ch=APP_DATA.chapters.find(c=>c.id===chId);
  if(!ch||!ch.items.length)return '';
  return ch.items.map(i=>`<span class="synth-point-badge rang-a">${esc(i)}</span>`).join('');
}
function synthSearchBlob(card,chId){
  const parts=[card.title||'',chId];
  (card.sections||[]).forEach(s=>{
    parts.push(s.title||'');
    if(s.points)(s.points||[]).forEach(p=>parts.push(p));
    if(s.content)parts.push(s.content.replace(/<[^>]+>/g,' '));
  });
  return parts.join(' ').toLowerCase();
}
function renderSynthPoint(text){
  const badges=synthPointBadges(text);
  const clean=text.replace(/^💎\s*Perle\s*:\s*/i,'').replace(/^🎯\s*EVC\s*:\s*/i,'');
  return `<li class="synth-point-item"><span class="synth-point-check" aria-hidden="true"></span><div class="synth-point-body">${badges?`<div class="synth-point-badges">${badges}</div>`:''}<span class="synth-point-text">${esc(clean)}</span></div></li>`;
}
function renderSynthExpandedSections(card){
  return (card.sections||[]).map((s,si)=>`
    <div class="synth-section" data-section="${si}">
      <button type="button" class="synth-section-head" onclick="synthToggleSection(this)">
        <span class="synth-section-title">${esc(s.title)}</span>
        <span class="synth-section-count">${(s.points||[]).length} pts</span>
      </button>
      <div class="synth-section-panel"><div class="synth-section-panel-inner">
        ${s.points?`<ul class="synth-point-list">${s.points.map(p=>renderSynthPoint(p)).join('')}</ul>`:''}
        ${s.content?`<div class="synth-section-content">${typeof linkifyText==='function'?linkifyText(s.content):s.content}</div>`:''}
      </div></div>
    </div>`).join('');
}
function renderSynthThemeSections(card){
  return (card.sections||[]).map((s,si)=>`
    <div class="synth-section" data-section="${si}">
      <button type="button" class="synth-section-head" onclick="synthToggleSection(this)">
        <span class="synth-section-title">${esc(s.title)}</span>
      </button>
      <div class="synth-section-panel"><div class="synth-section-panel-inner">
        <div class="synth-section-content">${typeof linkifyText==='function'?linkifyText(s.content):s.content}</div>
      </div></div>
    </div>`).join('');
}
function renderSynthChapterCard(card,idx){
  const chId=synthChIdFromExpanded(card,idx);
  const color=CH_COLORS[chId]||'#0891B2';
  const num=chId.replace('ch','');
  const nSec=(card.sections||[]).length;
  const mastered=isSynthMastered(chId);
  const hidden=synthFilterQuery&&!synthSearchBlob(card,chId).includes(synthFilterQuery);
  return `
    <article class="synth-card synth-chapter${mastered?' mastered':''}${hidden?' synth-hidden':''}" data-ch="${chId}" data-search="${esc(synthSearchBlob(card,chId))}" style="--synth-ch-color:${color}">
      <div class="synth-card-accent" aria-hidden="true"></div>
      <div class="synth-card-head">
        <button type="button" class="synth-card-head-main" onclick="synthToggleChapter(this.closest('.synth-card'))" aria-expanded="false">
          <div class="synth-card-num">${num}</div>
          <div class="synth-card-head-text">
            <div class="synth-card-title">${esc(card.title)}</div>
            <div class="synth-card-meta">
              <span>${nSec} section${nSec>1?'s':''}</span>
              ${mastered?'<span class="synth-mastered-pill">✓ Maîtrisé</span>':''}
              ${synthItemBadges(chId)?`<span class="synth-card-items">${synthItemBadges(chId)}</span>`:''}
            </div>
          </div>
          <span class="synth-card-chevron" aria-hidden="true">▾</span>
        </button>
        <div class="synth-card-actions no-print">
          <button type="button" class="synth-btn-ghost" onclick="event.stopPropagation();synthSetChapterSections('${chId}',true)" title="Tout développer">+</button>
          <button type="button" class="synth-btn-ghost" onclick="event.stopPropagation();synthSetChapterSections('${chId}',false)" title="Tout replier">−</button>
          <button type="button" class="synth-master-btn${mastered?' on':''}" onclick="event.stopPropagation();toggleSynthMastered('${chId}')">${mastered?'✓ Maîtrisé':'Marquer maîtrisé'}</button>
        </div>
      </div>
      <div class="synth-card-body">
        ${renderSynthExpandedSections(card)}
      </div>
    </article>`;
}
function renderSynthThemeCard(card){
  const blob=synthSearchBlob(card,card.id||'');
  const hidden=synthFilterQuery&&!blob.includes(synthFilterQuery);
  const color=card.color||'var(--accent)';
  return `
    <article class="synth-card synth-theme${hidden?' synth-hidden':''}" data-ch="${esc(card.id||'')}" data-search="${esc(blob)}" style="--synth-ch-color:${color};border-left:4px solid ${color}">
      <div class="synth-card-head">
        <button type="button" class="synth-card-head-main" onclick="synthToggleChapter(this.closest('.synth-card'))" aria-expanded="false">
          <div class="synth-card-icon" aria-hidden="true">${card.icon||esc((card.title||'?').charAt(0))}</div>
          <div class="synth-card-head-text">
            <div class="synth-card-title">${esc(card.title)}</div>
            <div class="synth-card-meta"><span>${(card.sections||[]).length} sections · fiche transversale</span></div>
          </div>
          <span class="synth-card-chevron" aria-hidden="true">▾</span>
        </button>
        <div class="synth-card-actions no-print">
          <button type="button" class="synth-btn-ghost" onclick="event.stopPropagation();synthSetCardSections(this.closest('.synth-card'),true)">+</button>
          <button type="button" class="synth-btn-ghost" onclick="event.stopPropagation();synthSetCardSections(this.closest('.synth-card'),false)">−</button>
        </div>
      </div>
      <div class="synth-card-body">${renderSynthThemeSections(card)}</div>
    </article>`;
}
function synthToggleChapter(card){
  if(!card)return;
  const open=card.classList.toggle('open');
  const btn=card.querySelector('.synth-card-head-main');
  if(btn)btn.setAttribute('aria-expanded',open?'true':'false');
}
function synthToggleSection(btn){
  const sec=btn&&btn.closest('.synth-section');
  if(sec)sec.classList.toggle('open');
}
function synthSetChapterSections(chId,open){
  const card=document.querySelector(`.synth-chapter[data-ch="${chId}"]`);
  if(card&&open)card.classList.add('open');
  document.querySelectorAll(`.synth-chapter[data-ch="${chId}"] .synth-section`).forEach(s=>s.classList.toggle('open',open));
}
function synthSetCardSections(card,open){
  if(!card)return;
  card.querySelectorAll('.synth-section').forEach(s=>s.classList.toggle('open',open));
  if(open)card.classList.add('open');
}
function onSynthFilterInput(el){
  synthFilterQuery=(el&&el.value||'').trim().toLowerCase();
  document.querySelectorAll('#synthGrid .synth-card').forEach(c=>{
    const blob=(c.getAttribute('data-search')||'').toLowerCase();
    c.classList.toggle('synth-hidden',!!synthFilterQuery&&!blob.includes(synthFilterQuery));
  });
  const vis=document.querySelectorAll('#synthGrid .synth-card:not(.synth-hidden)').length;
  const empty=document.getElementById('synthEmpty');
  if(empty)empty.style.display=vis?'none':'block';
}
function synthPrint(){
  document.body.classList.add('synth-printing');
  window.print();
  setTimeout(()=>document.body.classList.remove('synth-printing'),500);
}
function renderSynthesis(){
  const view=document.getElementById('vSynth');
  const grid=document.getElementById('synthGrid');
  if(!grid)return;
  const hasExpanded=typeof SYNTHESIS_EXPANDED!=='undefined'&&SYNTHESIS_EXPANDED.length;
  const hasClassic=typeof SYNTHESIS!=='undefined'&&SYNTHESIS.length;
  if(!hasExpanded&&!hasClassic)return;

  let toolbar=document.getElementById('synthToolbar');
  if(!toolbar&&view){
    toolbar=document.createElement('div');
    toolbar.id='synthToolbar';
    toolbar.className='synth-toolbar';
    view.insertBefore(toolbar,grid);
  }
  const mastered=getSynthMastered().filter(id=>/^ch\d+$/.test(id));
  const totalCh=20;
  const pct=Math.round((mastered.length/totalCh)*100);
  if(toolbar){
    toolbar.innerHTML=`
      <div class="synth-toolbar-row">
        <div class="synth-search-wrap">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3-3"/></svg>
          <input type="search" id="synthSearch" class="synth-search-input" placeholder="Filtrer chapitres, sections, points…" value="${esc(synthFilterQuery)}" oninput="onSynthFilterInput(this)" autocomplete="off">
        </div>
        <div class="synth-toolbar-actions no-print">
          <button type="button" class="synth-print-btn" onclick="synthPrint()">Imprimer</button>
        </div>
      </div>
      <div class="synth-progress-wrap">
        <div class="synth-progress-label"><span>Progression maîtrise</span><strong>${mastered.length}/${totalCh}</strong></div>
        <div class="synth-progress-bar" role="progressbar" aria-valuenow="${mastered.length}" aria-valuemin="0" aria-valuemax="${totalCh}">
          <div class="synth-progress-fill" style="width:${pct}%"></div>
        </div>
      </div>`;
  }

  let html='';
  if(hasExpanded){
    html+=`<div class="synth-group-hd"><h2>20 chapitres — synthèse complète</h2><p>Points clés, perles et repères EVC par section</p></div>`;
    html+=SYNTHESIS_EXPANDED.map((card,i)=>renderSynthChapterCard(card,i)).join('');
  }
  if(hasClassic){
    html+=`<div class="synth-group-hd synth-group-theme"><h2>Fiches transversales</h2><p>Modèles et tableaux de référence (SYNTHESIS)</p></div>`;
    html+=SYNTHESIS.map(card=>renderSynthThemeCard(card)).join('');
  }
  html+=`<div id="synthEmpty" class="synth-empty" style="display:none"><div class="empty-icon">🔍</div><div class="empty-text">Aucune fiche ne correspond à votre recherche</div></div>`;
  grid.innerHTML=html;
  onSynthFilterInput(document.getElementById('synthSearch'));
}
window.toggleSynthMastered=toggleSynthMastered;
window.synthToggleChapter=synthToggleChapter;
window.synthToggleSection=synthToggleSection;
window.synthSetChapterSections=synthSetChapterSections;
window.synthSetCardSections=synthSetCardSections;
window.onSynthFilterInput=onSynthFilterInput;
window.synthPrint=synthPrint;

/* ── FLASHCARDS ── */
function shuffleFlash(){flashDeck=filterDeck();for(let i=flashDeck.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[flashDeck[i],flashDeck[j]]=[flashDeck[j],flashDeck[i]]}flashIdx=0;renderFlashcard()}
function filterDeck(){if(typeof FLASHCARDS==='undefined')return[];return flashFilter==='all'?[...FLASHCARDS]:FLASHCARDS.filter(c=>c.rang===flashFilter)}
function filterFlash(rang,btn){flashFilter=rang;document.querySelectorAll('.flash-filt').forEach(b=>b.classList.remove('active'));if(btn)btn.classList.add('active');shuffleFlash()}
function flashFilterLabel(){return flashFilter==='all'?'Toutes les cartes':'Rang '+flashFilter+' uniquement'}
function ensureFlashEvalBar(){
  let bar=document.getElementById('flashEval');
  if(bar)return bar;
  const nav=document.querySelector('.flash-nav');
  if(!nav)return null;
  bar=document.createElement('div');
  bar.id='flashEval';
  bar.className='flash-eval rev-eval rev-eval-hidden';
  bar.innerHTML='<button type="button" class="rev-eval-btn rev-eval-dont flash-eval-btn" onclick="flashSelfEval(\'dont\')">Je ne savais pas</button><button type="button" class="rev-eval-btn rev-eval-review flash-eval-btn" onclick="flashSelfEval(\'review\')">À revoir</button><button type="button" class="rev-eval-btn rev-eval-know flash-eval-btn" onclick="flashSelfEval(\'know\')">Je savais</button>';
  nav.parentNode.insertBefore(bar,nav);
  return bar;
}
function updateFlashEvalVisibility(){
  const card=document.getElementById('flashCard');
  const bar=document.getElementById('flashEval');
  if(!bar||!card)return;
  const show=card.classList.contains('flipped')&&flashDeck.length>0;
  bar.classList.toggle('rev-eval-hidden',!show);
}
function bindFlashCardFlip(){
  const card=document.getElementById('flashCard');
  if(!card||card.dataset.flashBound)return;
  card.dataset.flashBound='1';
  card.addEventListener('click',e=>{
    if(e.target.closest('.flash-eval-btn'))return;
    setTimeout(updateFlashEvalVisibility,320);
  });
}
function flashUpdateSRS(cardId,correct){
  if(!cardId)return;
  try{
    const srs=JSON.parse(localStorage.getItem('bf_srs'))||{};
    const entry=srs[cardId]||{ease:2.5,interval:0,nextReview:0};
    if(correct){
      entry.interval=entry.interval===0?1:Math.round(entry.interval*entry.ease);
      entry.ease=Math.max(1.3,entry.ease+0.1);
    }else{
      entry.interval=0;
      entry.ease=Math.max(1.3,entry.ease-0.2);
    }
    entry.nextReview=Date.now()+entry.interval*86400000;
    srs[cardId]=entry;
    localStorage.setItem('bf_srs',JSON.stringify(srs));
  }catch(e){}
}
function flashSelfEval(mode){
  if(!flashDeck.length)return;
  const c=flashDeck[flashIdx];
  if(c&&c.id){
    if(mode==='know')flashUpdateSRS(c.id,true);
    else flashUpdateSRS(c.id,false);
  }
  const labels={know:'Bien joué !',review:'Noté pour révision',dont:'On révise ensemble'};
  toast(labels[mode]||'');
  nextFlash();
}
function renderFlashcard(){
  const card=document.getElementById('flashCard');
  if(!card)return;
  ensureFlashEvalBar();
  bindFlashCardFlip();
  card.classList.remove('flipped');
  updateFlashEvalVisibility();
  let sess=document.getElementById('flashSession');
  if(!sess){
    const hdr=document.querySelector('.flash-hdr');
    if(hdr){
      sess=document.createElement('div');
      sess.id='flashSession';
      sess.className='flash-session-label';
      const stats=hdr.querySelector('.flash-stats');
      if(stats)hdr.insertBefore(sess,stats);
      else hdr.appendChild(sess);
    }
  }
  if(sess)sess.textContent=flashFilterLabel();
  if(!flashDeck.length){
    card.classList.add('flash-empty-state');
    document.getElementById('flashCh').textContent='';
    document.getElementById('flashRang').textContent='';
    const fq=document.getElementById('flashQ');
    if(fq){
      fq.innerHTML='';
      const empty=document.createElement('div');
      empty.className='flash-empty-inner';
      empty.innerHTML='<div class="empty-icon">🎴</div><div class="empty-text">Aucune carte pour ce filtre</div><div class="empty-hint">Essayez « Tous » ou un autre rang</div>';
      fq.appendChild(empty);
    }
    document.getElementById('flashA').textContent='';
    document.getElementById('flashTags').innerHTML='';
    document.getElementById('flashProg').textContent='0 / 0';
    return;
  }
  card.classList.remove('flash-empty-state');
  const c=flashDeck[flashIdx];
  const chName=APP_DATA.chapters.find(ch=>ch.id===c.chapter)?.t||'';
  document.getElementById('flashCh').textContent=chName;
  const r=document.getElementById('flashRang');
  r.textContent='Rang '+c.rang;
  r.className='flash-rang '+(c.rang==='A'?'rang-a':'rang-b');
  const fq=document.getElementById('flashQ');
  if(fq)fq.textContent=c.question;
  document.getElementById('flashA').textContent=c.answer;
  document.getElementById('flashTags').innerHTML=(c.tags||[]).map(t=>'<span class="tag">'+t+'</span>').join('');
  document.getElementById('flashProg').textContent=(flashIdx+1)+' / '+flashDeck.length;
  card.classList.toggle('rev-rang-a',c.rang==='A');
  card.classList.toggle('rev-rang-b',c.rang==='B');
}
function nextFlash(){if(!flashDeck.length)return;flashIdx=(flashIdx+1)%flashDeck.length;renderFlashcard()}
function prevFlash(){if(!flashDeck.length)return;flashIdx=(flashIdx-1+flashDeck.length)%flashDeck.length;renderFlashcard()}
window.flashSelfEval=flashSelfEval;

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
  const firstGarde=el.querySelector('.garde-card');
  if(firstGarde)firstGarde.classList.add('open');
}

function toggleAnnAnswer(ansId,btn){
  const e=document.getElementById(ansId);
  if(!e||!btn)return;
  const hidden=e.style.display==='none'||!e.classList.contains('ann-a-visible');
  if(hidden){
    e.style.display='block';
    e.classList.add('ann-a-visible');
    btn.textContent='Masquer';
    btn.classList.add('ann-reveal-open');
  }else{
    e.style.display='none';
    e.classList.remove('ann-a-visible');
    btn.textContent='Voir réponse';
    btn.classList.remove('ann-reveal-open');
  }
}
window.toggleAnnAnswer=toggleAnnAnswer;

/* ── SUJETS EVC COMPLETS ── */
function renderSujets(){
  const el=document.getElementById('sujetsContent');if(!el)return;
  if(typeof SUJETS_EVC_COMPLETS==='undefined'||!SUJETS_EVC_COMPLETS.length){
    el.innerHTML='<div class="empty"><div class="empty-icon">📋</div><div class="empty-text">Aucun sujet disponible</div></div>';return;
  }
  el.innerHTML=SUJETS_EVC_COMPLETS.map(s=>`
    <div class="sujet-card">
      <div class="sujet-header">
        <span class="sujet-annee">${s.annee} — ${s.session||''}</span>
        <span class="sujet-duree">⏱ ${s.duree}</span>
        <span class="sujet-bareme">📊 ${s.bareme}</span>
      </div>
      <div class="sujet-consigne"><strong>Consigne :</strong> ${esc(s.consigne)}</div>
      <div class="sujet-body">
        <div class="sujet-text" id="sujet-text-${s.id}">${esc(s.sujet).replace(/\n/g,'<br>')}</div>
        <button class="ann-reveal-btn" onclick="var e=document.getElementById('sujet-corrige-${s.id}');e.style.display=e.style.display==='none'?'block':'none';this.textContent=e.style.display==='none'?'Voir le corrigé':'Masquer le corrigé'">Voir le corrigé</button>
        <div class="sujet-corrige" id="sujet-corrige-${s.id}" style="display:none">
          <div class="sujet-corrige-title">📝 Corrigé détaillé</div>
          <div class="sujet-corrige-text">${esc(s.corrigé).replace(/\n/g,'<br>')}</div>
          ${s.juryTips?`<div class="ann-jury-tip">💡 Jury: ${esc(s.juryTips)}</div>`:''}
        </div>
      </div>
    </div>
  `).join('');
}

/* ── ANNALES EVC PAR ANNÉE ── */
function renderAnnales(){
  const el=document.getElementById('annalesContent');
  const filtEl=document.getElementById('annalesFilters');
  if(!el)return;
  // Gather all annales
  const all=[];
  if(typeof ANNALES!=='undefined')all.push(...ANNALES.map(a=>({...a,_src:'base'})));
  if(typeof ANNALES_EXPANDED!=='undefined')all.push(...ANNALES_EXPANDED.map(a=>({...a,_src:'expanded'})));
  if(typeof ANNALES_ARCHIVE!=='undefined')all.push(...ANNALES_ARCHIVE.map(a=>({...a,_src:'archive'})));
  if(typeof ANNALES_V2!=='undefined')all.push(...ANNALES_V2.map(a=>({...a,_src:v2})));
  if(typeof CAS_INTERACTIFS!=='undefined')all.push(...CAS_INTERACTIFS.map(a=>({...a,_src:'cas'})));
  if(typeof SITUATIONS_EVC!=='undefined')all.push(...SITUATIONS_EVC.map(a=>({...a,_src:'situations'})));
  if(typeof MEGA_CASES!=='undefined')all.push(...MEGA_CASES.map(a=>({...a,_src:'mega'})));
  if(!all.length){el.innerHTML='<div class="empty"><div class="empty-text">Aucune annale disponible</div></div>';return}
  // Years available
  const years=[...new Set(all.map(a=>a.year).filter(Boolean))].sort((a,b)=>b-a);
  const chapters=[...new Set(all.map(a=>a.chapter).filter(Boolean))];
  // Filters
  if(filtEl){
    filtEl.innerHTML=`<div class="ann-filter-bar">
      <select id="annYearFilter" onchange="filterAnnales()"><option value="">Toutes les années</option>${years.map(y=>`<option value="${y}">${y}</option>`).join('')}</select>
      <select id="annChapFilter" onchange="filterAnnales()"><option value="">Tous les chapitres</option>${chapters.map(c=>{const ch=APP_DATA.chapters.find(x=>x.id===c);return`<option value="${c}">${c.replace('ch','')} — ${ch?ch.t:c}</option>`}).join('')}</select>
      <span class="ann-count" id="annCount">${all.length} cas</span>
    </div>`;
  }
  window._annales=all;
  window._annYear='';
  window._annChap='';
  window.filterAnnales=function(){
    const yf=document.getElementById('annYearFilter');
    const cf=document.getElementById('annChapFilter');
    window._annYear=yf?yf.value:'';
    window._annChap=cf?cf.value:'';
    renderAnnalesList();
  };
  renderAnnalesList();
}
function renderAnnalesList(){
  const el=document.getElementById('annalesContent');if(!el)return;
  let list=window._annales||[];
  if(window._annYear)list=list.filter(a=>String(a.year)===window._annYear);
  if(window._annChap)list=list.filter(a=>a.chapter===window._annChap);
  const cnt=document.getElementById('annCount');if(cnt)cnt.textContent=list.length+' cas';
  // Group by year
  const groups={};
  list.forEach(a=>{const y=a.year||'Sans année';if(!groups[y])groups[y]=[];groups[y].push(a)});
  const sortedKeys=Object.keys(groups).sort((a,b)=>b-a);
  if(!sortedKeys.length){
    el.innerHTML='<div class="empty"><div class="empty-icon">📋</div><div class="empty-text">Aucun cas pour ces filtres</div><div class="empty-hint">Réinitialisez année ou chapitre</div></div>';
    return;
  }
  el.innerHTML=sortedKeys.map((year,yi)=>{
    const cases=groups[year];
    const openCls=yi===0?' open':'';
    return`<div class="ann-year-group${openCls}">
      <div class="ann-year-header" onclick="this.parentElement.classList.toggle('open')">
        <span class="ann-year-label">${year}</span>
        <span class="ann-year-count">${cases.length} cas</span>
        <span class="ann-chevron">▾</span>
      </div>
      <div class="ann-year-body">${cases.map(a=>{
        const chName=APP_DATA.chapters.find(c=>c.id===a.chapter);
        const diffBadge=a.difficulty?`<span class="rang-badge rang-${a.difficulty.toLowerCase()}">Rang ${a.difficulty}</span>`:'';
        const questions=a.questions?a.questions.map((q,i)=>`<div class="ann-q"><div class="ann-q-text"><strong>Q${i+1}:</strong> ${esc(q.q||q.question||'')}</div><div class="ann-a-text ann-a-hidden" style="display:none" id="ans-${a.id}-${i}">${esc(q.a||q.answer||'')}</div><button type="button" class="ann-reveal-btn" onclick="toggleAnnAnswer('ans-${a.id}-${i}',this)">Voir réponse</button></div>`).join(''):(a.correction||a.reponse?`<div class="ann-q"><div class="ann-a-text ann-a-hidden" style="display:none" id="ans-${a.id}">${esc(a.correction||a.reponse)}</div><button type="button" class="ann-reveal-btn" onclick="toggleAnnAnswer('ans-${a.id}',this)">Voir réponse</button></div>`:'');
        return`<div class="ann-card">
          <div class="ann-card-head">${diffBadge}<span class="ann-card-ch">${chName?chName.t:a.chapter||''}</span></div>
          <div class="ann-card-title">${esc(a.title||a.titre||'')}</div>
          <div class="ann-card-situation">${esc(a.situation||a.cas||a.case||'')}</div>
          ${questions}
          ${a.juryTips?`<div class="ann-jury-tip">💡 Jury: ${esc(a.juryTips)}</div>`:''}
        </div>`;
      }).join('')}</div>
    </div>`;
  }).join('');
}

/* ── PROTOCOLES ── */
function renderProto(){
  const el=document.getElementById('protoContent');
  const filtEl=document.getElementById('protoFilters');
  if(!el)return;
  const all=[];
  if(typeof PROTOCOLES_URGENCE!=='undefined')all.push(...PROTOCOLES_URGENCE.map(p=>({...p,_src:'urgence'})));
  if(typeof PROTOCOLES_COMPLETS!=='undefined')all.push(...PROTOCOLES_COMPLETS.map(p=>({...p,_src:'complets'})));
  if(typeof CLINICAL_REFERENCE!=='undefined')all.push(...CLINICAL_REFERENCE.filter(p=>p.category==='Urgence').map(p=>({...p,_src:'ref',protocole:p.content?p.content.split('. ').filter(Boolean):[]})));
  if(!all.length){el.innerHTML='<div class="empty"><div class="empty-text">Aucun protocole disponible</div></div>';return}
  const cats=[...new Set(all.map(p=>p.categorie||p.category||'Autre'))];
  if(filtEl){
    filtEl.innerHTML=`<div class="proto-filter-bar">
      <select id="protoCatFilter" onchange="filterProto()"><option value="">Toutes catégories</option>${cats.map(c=>`<option value="${c}">${c}</option>`).join('')}</select>
      <input type="text" id="protoSearch" placeholder="Rechercher un protocole..." oninput="filterProto()">
      <span class="proto-count" id="protoCount">${all.length} protocoles</span>
    </div>`;
  }
  window._protocoles=all;
  window.filterProto=function(){
    const cf=document.getElementById('protoCatFilter');
    const sf=document.getElementById('protoSearch');
    const cat=cf?cf.value:'';
    const q=sf?sf.value.toLowerCase():'';
    let filtered=window._protocoles;
    if(cat)filtered=filtered.filter(p=>(p.categorie||p.category||'')===cat);
    if(q)filtered=filtered.filter(p=>(p.titre||p.title||'').toLowerCase().includes(q)||(p.indication||'').toLowerCase().includes(q));
    renderProtoList(filtered);
  };
  renderProtoList(all);
}
function renderProtoList(list){
  const el=document.getElementById('protoContent');if(!el)return;
  const cnt=document.getElementById('protoCount');if(cnt)cnt.textContent=list.length+' protocoles';
  const grouped={};
  list.forEach(p=>{const cat=p.categorie||p.category||'Autre';if(!grouped[cat])grouped[cat]=[];grouped[cat].push(p)});
  const entries=Object.entries(grouped);
  if(!entries.length){
    el.innerHTML='<div class="empty"><div class="empty-icon">📋</div><div class="empty-text">Aucun protocole trouvé</div><div class="empty-hint">Modifiez la catégorie ou la recherche</div></div>';
    return;
  }
  el.innerHTML=entries.map(([cat,items],ci)=>`
    <div class="proto-cat-group${ci===0?' open':''}">
      <div class="proto-cat-header" onclick="this.parentElement.classList.toggle('open')">
        <span class="proto-cat-label">${esc(cat)}</span>
        <span class="proto-cat-count">${items.length}</span>
        <span class="ann-chevron">▾</span>
      </div>
      <div class="proto-cat-body">${items.map(p=>{
        const steps=p.protocole||p.steps||p.checklist||[];
        const icon=p.icon||'📋';
        return`<div class="proto-card${p.urgency==='high'?' proto-urgent':''}">
          <div class="proto-card-head"><span class="proto-icon">${icon}</span><div class="proto-card-title">${esc(p.titre||p.title||'')}</div></div>
          ${p.indication?`<div class="proto-indication">${esc(p.indication)}</div>`:''}
          ${steps.length?`<ol class="proto-steps">${steps.map(s=>`<li>${esc(s)}</li>`).join('')}</ol>`:''}
          ${p.alerte||p.alert?`<div class="proto-alert">⚠️ ${esc(p.alerte||p.alert)}</div>`:''}
          ${p.surveillance?`<div class="proto-surveillance">📊 ${esc(p.surveillance)}</div>`:''}
          ${p.contreIndications?`<div class="proto-ci">🚫 CI: ${esc(p.contreIndications)}</div>`:''}
        </div>`;
      }).join('')}</div>
    </div>`).join('');
}

/* ── ITEMS ── */
function itemRangClass(itemStr){
  if(/rang\s*b/i.test(itemStr)||/\bB\b/.test(itemStr))return 'rang-b';
  return 'rang-a';
}
function renderItems(){
  const list=document.getElementById('itemsList');if(!list)return;
  const rows=[];
  APP_DATA.chapters.filter(ch=>ch.items.length>0).forEach(ch=>{
    ch.items.forEach(item=>{
      rows.push({item,ch});
    });
  });
  if(!rows.length){
    list.innerHTML='<div class="empty"><div class="empty-icon">📌</div><div class="empty-text">Aucun objectif ITEM référencé</div><div class="empty-hint">Les ITEMs apparaissent au fil des chapitres</div></div>';
    return;
  }
  list.innerHTML='';
  rows.forEach(({item,ch},i)=>{
    const el=document.createElement('div');
    el.className='item-card item-card-enter';
    el.style.animationDelay=(i*0.03)+'s';
    el.onclick=()=>showCh(ch.id);
    const rc=itemRangClass(item);
    el.innerHTML='<div class="item-title"><span class="rang-badge '+rc+'">'+esc(item)+'</span><span class="item-ch-title">'+esc(ch.t)+'</span></div><div class="item-desc">Chapitre '+ch.id.replace('ch','')+' — Cliquez pour lire</div>';
    list.appendChild(el);
  });
}

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
