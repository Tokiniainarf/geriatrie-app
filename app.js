/* Gériatrie 2026 — Manuel Interactif */
const CH_COLORS={ch1:'#1e5f8a',ch2:'#2d6a4f',ch3:'#5c4d7d',ch4:'#9a6b2e',ch5:'#1a6b7c',ch6:'#8b4513',ch7:'#3d6b59',ch8:'#8b2942',ch9:'#2c5282',ch10:'#5a6472',ch11:'#7c3a5a',ch12:'#6b5b2e',ch13:'#2e6b8a',ch14:'#3d7a4a',ch15:'#1a6e80',ch16:'#5c4d8a',ch17:'#4a5568',ch18:'#2d6b55',ch19:'#6b3d7a',ch20:'#1a5f7a'};

function safeJSON(k,f){try{return JSON.parse(localStorage.getItem(k))||f}catch{return f}}
const S={view:'home',ch:null,pgIdx:0,readMode:localStorage.getItem('grm')||'scroll',bm:safeJSON('gbm',[]),read:safeJSON('grd',[]),prog:safeJSON('gprog',{}),fs:parseInt(localStorage.getItem('gfs')||'17'),lh:parseFloat(localStorage.getItem('glh')||'1.6'),th:localStorage.getItem('gth')||'light'};
let flashIdx=0,flashDeck=[],flashFilter='all';

document.addEventListener('DOMContentLoaded',()=>{
  setFS(S.fs);setLH(S.lh,true);
  if(S.th==='dark')document.documentElement.setAttribute('data-theme','dark'),document.getElementById('darkTog').classList.add('on');
  if(S.readMode==='page')document.getElementById('rmTog').classList.add('on');
  document.getElementById('fsVal').textContent=S.fs+'px';
  document.getElementById('lhVal').textContent=S.lh;
  renderHome();renderSynthesis();renderItems();shuffleFlash();updStats();
  if('serviceWorker'in navigator)navigator.serviceWorker.register('sw.js').catch(()=>{});
  window.addEventListener('scroll',()=>{document.getElementById('fab').style.display=window.scrollY>300?'flex':'none'});
});

/* ── NAV ── */
function sw(view){
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  document.querySelectorAll('#bnav button').forEach(b=>b.classList.remove('active'));
  const el=document.getElementById('v'+view.charAt(0).toUpperCase()+view.slice(1));
  if(el)el.classList.add('active');
  document.querySelector(`[data-v="${view}"]`)?.classList.add('active');
  S.view=view;window.scrollTo(0,0);
  if(view==='synth')renderSynthesis();
  if(view==='flash')renderFlashcard();
  if(view==='items')renderItems();
  if(view==='graph'&&typeof initGraph==='function')initGraph();
  if(view==='set'){const tv=Object.values(S.prog).reduce((s,a)=>s+(a?a.length:0),0);document.getElementById('pd').textContent=`${S.read.length} chapitres lus · ${tv} pages visitées`;}
}
function goHome(){sw('home');S.ch=null}

/* ── HOME ── */
function renderHome(){
  const p1=document.getElementById('p1'),p2=document.getElementById('p2');
  p1.innerHTML=p2.innerHTML='';
  APP_DATA.chapters.forEach(ch=>{
    const rd=S.read.includes(ch.id),bm=S.bm.includes(ch.id);
    const pgCount=APP_DATA.content[ch.id]?.length||0;
    const prog=getChProgress(ch.id);
    const el=document.createElement('div');el.className='ch-row';el.setAttribute('data-ch',ch.id);
    el.onclick=()=>showCh(ch.id);
    el.innerHTML=`<div class="ch-row-num" style="color:${CH_COLORS[ch.id]}">${ch.id.replace('ch','')}</div>
      <div class="ch-row-body">
        <div class="ch-row-title">${esc(ch.t)}</div>
        <div class="ch-row-meta">${ch.items.map(i=>`<span class="tag">${i}</span>`).join('')}<span class="tag">${pgCount}p</span>${prog.pct>0?`<span class="tag">${prog.pct}%</span>`:''}</div>
      </div>
      <button class="ch-row-bm ${bm?'on':''}" onclick="event.stopPropagation();quickBm('${ch.id}')">${bm?'★':'☆'}</button>
      <div class="ch-progress" style="width:${prog.pct}%"></div>`;
    (ch.part===1?p1:p2).appendChild(el);
  });
}
function getChProgress(id){const p=APP_DATA.content[id]||[];const v=(S.prog[id]||[]).length;return{visited,v,total:p.length,pct:p.length>0?Math.round(v/p.length*100):0}}
function quickBm(id){const i=S.bm.indexOf(id);if(i>-1)S.bm.splice(i,1);else S.bm.push(id);localStorage.setItem('gbm',JSON.stringify(S.bm));renderHome();toast(i>-1?'Retiré des favoris':'Ajouté aux favoris')}

/* ── SEARCH ── */
function toggleSearch(){const sb=document.getElementById('searchBar');sb.classList.toggle('open');if(sb.classList.contains('open'))document.getElementById('searchInput').focus()}
function onSearch(q){q=q.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');document.querySelectorAll('.ch-row').forEach(r=>{const t=r.querySelector('.ch-row-title').textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');r.style.display=!q||t.includes(q)?'':'none'})}

/* ── CHAPTER READING ── */
function showCh(id,pgIdx){
  const ch=APP_DATA.chapters.find(c=>c.id===id);if(!ch)return;
  S.ch=id;S.pgIdx=pgIdx||0;
  if(!S.read.includes(id)){S.read.push(id);localStorage.setItem('grd',JSON.stringify(S.read))}
  const prog=getChProgress(id);
  document.getElementById('chHero').style.background=`linear-gradient(135deg,${CH_COLORS[id]},${CH_COLORS[id]}dd)`;
  document.getElementById('chNum').textContent=id.replace('ch','');
  document.getElementById('chT').textContent=ch.t;
  document.getElementById('chTags').innerHTML=ch.items.map(i=>`<span class="tag">${i}</span>`).join('')+`<span class="tag">${prog.pct}% lu</span>`;
  document.getElementById('chToolbar').innerHTML=`<button onclick="goHome()">← Retour</button><button onclick="quickBm('${id}')">${S.bm.includes(id)?'★ Favori':'☆ Favori'}</button>`;
  renderChPages();sw('ch');
}
function renderChPages(){
  const pages=APP_DATA.content[S.ch]||[];
  const cc=document.getElementById('chContent');
  const pn=document.getElementById('pgNav');
  if(S.readMode==='page'){
    pn.style.display='flex';
    const pg=pages[S.pgIdx];
    cc.innerHTML=pg?renderPage(pg[1],pg[0]):'<div class="empty"><div class="empty-icon">📄</div><div class="empty-text">Aucune page</div></div>';
    pn.querySelector('button:first-child').disabled=S.pgIdx<=0;
    pn.querySelector('button:last-child').disabled=S.pgIdx>=pages.length-1;
  }else{
    pn.style.display='none';
    cc.innerHTML=pages.map((pg,i)=>renderPage(pg[1],pg[0],i>0)).join('');
  }
  trackVisit(S.ch,S.pgIdx);applyConceptLinks();
}
function pgPrev(){if(S.pgIdx>0){S.pgIdx--;renderChPages();window.scrollTo(0,0)}}
function pgNext(){const p=APP_DATA.content[S.ch]||[];if(S.pgIdx<p.length-1){S.pgIdx++;renderChPages();window.scrollTo(0,0)}}
function trackVisit(id,idx){if(!id||typeof idx!=='number')return;if(!S.prog[id])S.prog[id]=[];if(!S.prog[id].includes(idx)){S.prog[id].push(idx);S.prog[id].sort((a,b)=>a-b);localStorage.setItem('gprog',JSON.stringify(S.prog))}}

/* ── SMART PAGE RENDERER ── */
const SKIP_RE=/^(▼|©\s*\d{4}|Elsevier|Tous droits réservés|Gériatrie$|Connaissances$|Entraînement$|This page intentionally left blank)/i;
const SECTION_RE=/^([IVX]+)\.\s+(.+)/;  // Roman numeral sections
const SUBSEC_RE=/^([A-Z])\.\s+(.+)/;    // Letter subsections
const RANG_RE=/^([A-D])\s+(.+)/;         // Rang markers
const BULLET_RE=/^[•\-–]\s+(.+)/;
const SITUATION_RE=/^(\d{2,3})\s+(.+)/;  // "239 Explication..."
const DIAGRAM_RE=/^(Fonction|d'organe|Réserve|Seuil|Effet|100\s*%|0\s+Âge|\d\s+(Vieillissement|Maladie|Stress))/i;

function renderPage(raw,pageNum,addSep){
  // Fix hyphenated words across lines
  let text=raw.replace(/(\w)-\s*\n\s*(\w)/g,'$1$2');
  // Fix \n line breaks
  const lines=text.split('\\n').map(l=>l.trim());
  let html='';let inTable=false;let tableRows=[];let prevWasSit=false;
  
  for(let i=0;i<lines.length;i++){
    const l=lines[i];
    if(!l||SKIP_RE.test(l))continue;
    if(DIAGRAM_RE.test(l))continue; // skip diagram elements
    
    // Situation de départ
    if(/Situations?\s+de\s+départ/i.test(l)){
      html+=`<div class="key-point"><strong>📋 Situations de départ</strong><ul>`;
      prevWasSit=true;continue;
    }
    if(prevWasSit){
      const m=l.match(/^(\d{2,3})\s+(.+)/);
      if(m){html+=`<li>${esc(m[2])}</li>`;continue}
      else{html+=`</ul></div>`;prevWasSit=false}
    }
    
    // Figure references
    const figM=l.match(/Fig\.\s*(\d+\.\d+)/);
    if(figM&&typeof FIGURES!=='undefined'){
      const src=FIGURES[figM[1]]?.[0];
      if(src&&!src.includes('figures/page_')){
        html+=`<div class="fig-block"><img src="${src}" alt="Figure ${figM[1]}" loading="lazy"><figcaption>Figure ${figM[1]}</figcaption></div>`;
        // Skip caption line
        const cap=l.replace(/^Fig\.\s*\d+\.\d+\.?\s*[A-Z]?\s*/,'').trim();
        if(cap)html+=`<p class="text-muted" style="font-size:.85rem">${esc(cap)}</p>`;
        continue;
      }
    }
    
    // Roman numeral sections (I., II., III., etc.)
    const secM=l.match(SECTION_RE);
    if(secM){html+=`<h2>${esc(secM[1]+'. '+secM[2])}</h2>`;continue}
    
    // Letter subsections (A., B., C., etc.) — but not rang markers
    const subM=l.match(SUBSEC_RE);
    if(subM&&subM[1]>='A'&&subM[1]<='Z'&&l.length<120&&!l.includes('Connaître')&&!l.includes('Modifications')){
      // Check if next line starts with rang marker (it's a subsection title)
      const nextL=lines[i+1];
      if(nextL&&!RANG_RE.test(nextL)){
        html+=`<h3>${esc(subM[1]+'. '+subM[2])}</h3>`;continue;
      }
    }
    
    // Rang markers
    const rangM=l.match(RANG_RE);
    if(rangM&&!l.includes('Rubrique')&&!l.includes('Connaître')&&!l.includes('Modifications')&&l.length<200){
      const rang=rangM[1];const rest=rangM[2];
      // Check if it's a table header row
      if(/Rubrique|Intitulé|Descriptif/.test(lines[i+1]||'')){
        // Skip the table header
        while(i<lines.length&&!/^I\.|^A\.|^[•\-]|^Fig\.|^Critères/i.test(lines[i+1]||'')){i++;if(/Descriptif/.test(lines[i]||''))break}
        continue;
      }
      // It's a definition
      html+=`<div class="def-block"><span class="rang-badge ${rang==='A'?'rang-a':'rang-b'}">Rang ${rang}</span>${esc(rest)}</div>`;
      continue;
    }
    
    // Bullet points
    const bulM=l.match(BULLET_RE);
    if(bulM){html+=`<p class="bullet">• ${esc(bulM[1])}</p>`;continue}
    
    // Item table rows (A Définition ... | B Épidémiologie ...)
    if(/^[A-D]\s+(Définition|Épidémiologie|Éléments|Prise en charge|Clinique|Diagnostic|Traitement|Pronostic|Bilan|Surveillance|Prévalence)/.test(l)){
      const m=l.match(/^([A-D])\s+(\S+)\s+(.*)/);
      if(m){
        html+=`<div class="def-block"><span class="rang-badge ${m[1]==='A'?'rang-a':'rang-b'}">Rang ${m[1]}</span><strong>${esc(m[2])}</strong> — ${esc(m[3])}</div>`;
        continue;
      }
    }
    
    // Skip headers/footers
    if(/^(ITEM\s+\d+|Rang\s+Rubrique|Hiérarchisation|Item, objectifs)/i.test(l))continue;
    if(/^(\d{1,3})$/.test(l)&&l.length<4)continue; // lone page numbers
    
    // Regular paragraph
    html+=`<p>${esc(l)}</p>`;
  }
  
  if(prevWasSit)html+=`</ul></div>`;
  
  // Add page separator
  if(addSep)html=`<div class="page-sep">Page ${pageNum}</div>`+html;
  else if(pageNum)html=`<div class="page-sep">Page ${pageNum}</div>`+html;
  
  return html;
}

function applyConceptLinks(){
  if(typeof linkifyText==='function'){
    document.querySelectorAll('.ch-content p, .ch-content .def-block, .ch-content h3').forEach(el=>{
      if(!el.querySelector('.cl'))el.innerHTML=linkifyText(el.innerHTML);
    });
    document.querySelectorAll('.cl').forEach(el=>{
      el.addEventListener('click',e=>{
        e.preventDefault();
        const ch=el.getAttribute('data-chapter');const search=el.getAttribute('data-search');
        if(ch&&search)openConceptLink(ch,search);
      });
    });
  }
}
function openConceptLink(chId,term){showCh(chId);toast('→ '+term)}
function closeConceptModal(){document.getElementById('conceptModal').classList.remove('open')}

/* ── SYNTHESIS ── */
function renderSynthesis(){
  const grid=document.getElementById('synthGrid');if(!grid||typeof SYNTHESIS==='undefined')return;
  grid.innerHTML=SYNTHESIS.map(card=>`
    <div class="synth-card" style="border-left:4px solid ${card.color}">
      <div class="synth-card-head" onclick="this.parentElement.classList.toggle('open')">
        <div class="synth-card-icon">${card.icon}</div>
        <div class="synth-card-title">${esc(card.title)}</div>
        <div class="synth-card-chevron">▾</div>
      </div>
      <div class="synth-card-body">
        ${card.sections.map(s=>`
          <div class="synth-section" onclick="this.classList.toggle('open')">
            <div class="synth-section-head">${esc(s.title)}</div>
            <div class="synth-section-content">${typeof linkifyText==='function'?linkifyText(s.content):s.content}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

/* ── FLASHCARDS ── */
function shuffleFlash(){flashDeck=filterDeck();for(let i=flashDeck.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[flashDeck[i],flashDeck[j]]=[flashDeck[j],flashDeck[i]]}flashIdx=0;renderFlashcard()}
function filterDeck(){if(typeof FLASHCARDS==='undefined')return[];return flashFilter==='all'?[...FLASHCARDS]:FLASHCARDS.filter(c=>c.rang===flashFilter)}
function filterFlash(rang,btn){flashFilter=rang;document.querySelectorAll('.flash-filt').forEach(b=>b.classList.remove('active'));if(btn)btn.classList.add('active');shuffleFlash()}
function renderFlashcard(){const card=document.getElementById('flashCard');if(!card||!flashDeck.length)return;card.classList.remove('flipped');const c=flashDeck[flashIdx];const chName=APP_DATA.chapters.find(ch=>ch.id===c.chapter)?.t||'';document.getElementById('flashCh').textContent=chName;const r=document.getElementById('flashRang');r.textContent='Rang '+c.rang;r.className='flash-rang '+(c.rang==='A'?'rang-a':'rang-b');document.getElementById('flashQ').textContent=c.question;document.getElementById('flashA').textContent=c.answer;document.getElementById('flashTags').innerHTML=(c.tags||[]).map(t=>`<span class="tag">${t}</span>`).join('');document.getElementById('flashProg').textContent=`${flashIdx+1} / ${flashDeck.length}`}
function nextFlash(){flashIdx=(flashIdx+1)%flashDeck.length;renderFlashcard()}
function prevFlash(){flashIdx=(flashIdx-1+flashDeck.length)%flashDeck.length;renderFlashcard()}

/* ── ITEMS ── */
function renderItems(){const list=document.getElementById('itemsList');if(!list)return;list.innerHTML='';APP_DATA.chapters.filter(ch=>ch.items.length>0).forEach(ch=>{ch.items.forEach(item=>{const el=document.createElement('div');el.className='item-card';el.onclick=()=>showCh(ch.id);el.innerHTML=`<div class="item-title"><span class="rang-badge rang-a">${item}</span>${esc(ch.t)}</div><div class="item-desc">Chapitre ${ch.id.replace('ch','')} — Cliquez pour lire</div>`;list.appendChild(el)})})}

/* ── SETTINGS ── */
function toggleTheme(){S.th=S.th==='dark'?'light':'dark';localStorage.setItem('gth',S.th);document.documentElement.setAttribute('data-theme',S.th==='dark'?'dark':'');document.getElementById('darkTog').classList.toggle('on',S.th==='dark')}
function setFS(v){S.fs=+v;document.body.style.fontSize=v+'px';localStorage.setItem('gfs',v);document.getElementById('fsVal').textContent=v+'px'}
function setLH(v,init){S.lh=parseFloat(v);document.documentElement.style.setProperty('--lh',S.lh);if(!init)localStorage.setItem('glh',v);document.getElementById('lhVal').textContent=v}
function toggleReadMode(){S.readMode=S.readMode==='page'?'scroll':'page';localStorage.setItem('grm',S.readMode);document.getElementById('rmTog').classList.toggle('on',S.readMode==='page');if(S.ch)renderChPages()}
function resetProg(){if(confirm('Réinitialiser la progression ?')){S.prog={};localStorage.setItem('gprog','{}');renderHome();updStats();toast('Progression réinitialisée')}}
function clearAll(){if(confirm('Effacer toutes les données ?')){S.bm=[];S.read=[];S.prog={};localStorage.clear();renderHome();updStats();toast('Données effacées')}}
function updStats(){const tv=Object.values(S.prog).reduce((s,a)=>s+(a?a.length:0),0);const pd=document.getElementById('pd');if(pd)pd.textContent=`${S.read.length} chapitres lus · ${tv} pages visitées`}

/* ── UTILS ── */
function esc(s){const d=document.createElement('div');d.textContent=s;return d.innerHTML}
function toast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2000)}
