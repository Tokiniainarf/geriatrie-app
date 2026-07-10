/* Gériatrie 2026 — Manuel Interactif v3 */
const CH_COLORS={ch1:'#0891B2',ch2:'#059669',ch3:'#0D9488',ch4:'#DC2626',ch5:'#0284C7',ch6:'#047857',ch7:'#0369A1',ch8:'#BE123C',ch9:'#0E7490',ch10:'#64748B',ch11:'#B45309',ch12:'#EA580C',ch13:'#0369A1',ch14:'#15803D',ch15:'#0F766E',ch16:'#164E63',ch17:'#475569',ch18:'#059669',ch19:'#0891B2',ch20:'#2563EB'};
const BM_SVG={on:'<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.77 5.82 22 7 14.14l-5-4.87 6.91-1.01z"/></svg>',off:'<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.77 5.82 22 7 14.14l-5-4.87 6.91-1.01z"/></svg>'};

function safeJSON(k,f){try{return JSON.parse(localStorage.getItem(k))||f}catch{return f}}
/** Resolve FIGURES/TABLES entry: {src,desc} | [src,desc?] | string */
function resolveManualAsset(entry){
  if(!entry) return null;
  if(typeof entry==='string') return {src:entry, desc:''};
  if(Array.isArray(entry)) return {src:entry[0]||'', desc:entry[1]||''};
  if(typeof entry==='object' && entry.src) return {src:String(entry.src), desc:entry.desc?String(entry.desc):''};
  return null;
}

/** Resolve globals whether declared const or attached on window */
function getInteractiveFiguresMap(){
  try{
    if(typeof INTERACTIVE_FIGURES!=='undefined' && INTERACTIVE_FIGURES) return INTERACTIVE_FIGURES;
  }catch(e){}
  return (typeof window!=='undefined' && window.INTERACTIVE_FIGURES) || {};
}
function callRenderFaithfulFigure(id){
  const fn = (typeof renderFaithfulFigure==='function')
    ? renderFaithfulFigure
    : (typeof window!=='undefined' ? window.renderFaithfulFigure : null);
  if(typeof fn!=='function') return '';
  try{ return fn(id) || ''; }catch(e){ return ''; }
}
function callRenderFaithfulTable(id){
  const fn = (typeof renderFaithfulTable==='function')
    ? renderFaithfulTable
    : (typeof window!=='undefined' ? window.renderFaithfulTable : null);
  if(typeof fn!=='function') return '';
  try{ return fn(id) || ''; }catch(e){ return ''; }
}

/**
 * Force SVG content visible in light + dark (kills opacity:0 / dashoffset hide).
 * Tooltips (.tip) stay hidden until hover.
 */
function sanitizeFigureSvg(svgHtml){
  if(!svgHtml || typeof svgHtml!=='string') return '';
  let s = svgHtml;
  // Curves must never start "un-drawn"
  s = s.replace(/stroke-dashoffset:\s*\d+/gi, 'stroke-dashoffset:0');
  s = s.replace(/stroke-dasharray:\s*600/gi, 'stroke-dasharray:none');
  // Content stages/labels: opacity 0 → 1 (keep tip/tooltip/detail hidden)
  s = s.replace(/(\.[a-zA-Z0-9_-]+(?:\s*,\s*\.[a-zA-Z0-9_-]+)*\s*\{)([^}]*?)\}/g, (full, sel, body) => {
    if(/\b(tip|tooltip|detail|tt-|crit-detail)\b/i.test(sel+body) && !/\bstage\b/i.test(sel)) {
      return full; // leave tooltips
    }
    // Don't touch pure tip rules
    if(/\.(tip|tooltip|knee-tooltip|crit-detail)\b/i.test(sel)) return full;
    let b = body.replace(/(^|[^-])opacity:\s*0(\s*;|)/gi, '$1opacity:1$2');
    return sel + b + '}';
  });
  // Inline style opacity:0 on non-tooltip elements
  s = s.replace(/style="([^"]*)"/gi, (m, st) => {
    if(/tooltip|tip/i.test(st) && /opacity:\s*0/i.test(st)) return m;
    return 'style="' + st.replace(/opacity:\s*0(\s*;?)/gi, 'opacity:1$1') + '"';
  });
  // Ensure root svg has explicit contrast styles
  if(/<svg[\s>]/i.test(s) && !/class="[^"]*fig-svg-root/.test(s)){
    s = s.replace(/<svg\b/i, '<svg class="fig-svg-root"');
  }
  return s;
}

/**
 * Figures REFAITES (SVG exact ou schéma HTML) — jamais crop/page manuel.
 * Images IA = injectEducationalVisuals() en plus.
 * Pas de fuzzy ch.x (évitait 6.1–6.7 identiques).
 */
function buildFigureBlock(figId, titleHint){
  const capTitle = (titleHint||'').replace(/^[AB]\s+/i,'').trim();
  let desc = capTitle;
  let inner = '';
  const IF = getInteractiveFiguresMap();

  // 1) SVG EXACT
  if(IF[figId] && IF[figId].svg){
    const svg = sanitizeFigureSvg(IF[figId].svg);
    inner = `<div class="fig-media fig-svg-wrap" data-fig="${esc(figId)}">${svg}</div>`;
    if(IF[figId].title && !desc) desc = IF[figId].title;
  }

  // 2) Schéma HTML refait
  if(!inner){
    const h = callRenderFaithfulFigure(figId);
    if(h && h.indexOf('faithful-fig')!==-1) return h;
  }

  if(!inner) return '';

  const cap = desc ? `Figure ${figId} — ${esc(desc)}` : `Figure ${figId}`;
  return `<figure class="fig-block fig-remade">${inner}<figcaption>${cap}</figcaption></figure>`;
}

/**
 * Tableaux REFAITS (HTML) — pas de capture page PDF.
 */
function buildTableBlock(tabId, titleHint){
  const title = (titleHint||'').replace(/^[AB]\s+/i,'').trim();
  const h = callRenderFaithfulTable(tabId);
  if(h && h.indexOf('faithful-table')!==-1) return h;
  return `<div class="table-lead"><span class="table-badge">Tableau ${esc(tabId)}</span><span>${esc(title||'')}</span></div>`;
}

/** Educational inject: keep AI images; skip book captures only */
function isPdfCapturePath(src){
  if(!src) return true;
  const s = String(src).replace(/\\/g,'/');
  // Block only book captures — allow educational/ and ai-heroes/
  if(/chapters\/educational\//i.test(s) || /chapters\/ai-heroes\//i.test(s)) return false;
  return /figures\/page_/i.test(s) || /\/crops\//i.test(s) || /\/p\d{3}_\d+\.(jpe?g|png)$/i.test(s);
}
const S={view:'home',ch:null,bm:safeJSON('gbm',[]),read:safeJSON('grd',[]),fs:parseInt(localStorage.getItem('gfs')||'18'),lh:parseFloat(localStorage.getItem('glh')||'1.7'),th:localStorage.getItem('gth')||'dark'};
let flashIdx=0,flashDeck=[],flashFilter='all',flashChapFilter='all';

function bootApp(){
  if (window.__geriBooted) return;
  window.__geriBooted = true;
  // Safety: dismiss preloader if sequential loader already finished or stuck
  try{
    const pl=document.getElementById('appPreloader');
    if(pl && !pl.classList.contains('hide')){
      setTimeout(()=>{ pl.classList.add('hide'); pl.setAttribute('aria-busy','false'); }, 120);
    }
  }catch{}
  try{ preprocessAppData(); }catch(e){ console.error('[boot] preprocessAppData', e); }
  setFS(S.fs); setLH(S.lh, true);
  const fsR=document.getElementById('fsRange'); if(fsR) fsR.value=S.fs;
  const lhR=document.getElementById('lhRange'); if(lhR) lhR.value=S.lh;
  document.documentElement.setAttribute('data-theme', S.th);
  // Each step isolated — a home/synth crash must NEVER skip flash deck load
  const bootStep=(fn,label)=>{ try{ fn(); }catch(e){ console.error('[boot]', label, e); } };
  bootStep(renderHome, 'renderHome');
  bootStep(renderSynthesis, 'renderSynthesis');
  bootStep(renderItems, 'renderItems');
  bootStep(renderFav, 'renderFav');
  bootStep(populateChapFilter, 'populateChapFilter');
  bootStep(loadFlashDeck, 'loadFlashDeck');
  bootStep(updStats, 'updStats');
  bootStep(updateThemeIcon, 'updateThemeIcon');
  if('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(()=>{});
  applyInstallBarVisibility();
  window.addEventListener('beforeinstallprompt', e=>{
    e.preventDefault();
    window.deferredPrompt=e;
    applyInstallBarVisibility(true);
  });
  window.addEventListener('scroll', ()=>{
    const f=document.getElementById('fab');
    if(f){
      if(window.scrollY>300){ if(!f.classList.contains('show')) f.classList.add('show'); }
      else f.classList.remove('show');
    }
    const rp=document.getElementById('readingProgress');
    if(rp){
      const h=document.documentElement.scrollHeight-window.innerHeight;
      const pct=h>0?Math.min(100,(window.scrollY/h)*100):0;
      rp.style.width=pct+'%';
    }
    const stb=document.getElementById('scrollTopBtn');
    if(stb){
      if(window.scrollY>300) stb.classList.add('visible');
      else stb.classList.remove('visible');
    }
  });
}
// Expose early for preloader; actual boot is scheduled at END of this file
// (avoids TDZ on flashChapFilter / functions declared later in the same script)
window.bootApp = bootApp;

/* ── NAV + historique Retour ── */
const viewHistory = [];
function updateBackBtn(){
  const btn=document.getElementById('btnBack');
  const logo=document.getElementById('topLogoIcon');
  const canBack = viewHistory.length > 0 || (S.view && S.view !== 'home');
  if(btn){
    if(canBack && S.view !== 'home'){ btn.hidden=false; btn.removeAttribute('hidden'); }
    else { btn.hidden=true; btn.setAttribute('hidden',''); }
  }
  if(logo) logo.style.display = (btn && !btn.hidden) ? 'none' : '';
}
function goBack(){
  if(viewHistory.length){
    const prev=viewHistory.pop();
    sw(prev, { back:true });
    return;
  }
  if(S.view && S.view !== 'home') sw('home', { back:true });
}
window.goBack=goBack;

function sw(view, opts){
  opts = opts || {};
  try {
    const prev=S.view;
    if(prev==='graph'&&view!=='graph'&&typeof destroyGraph==='function'){
      try{ destroyGraph(); }catch(e){ console.warn('[sw] destroyGraph', e); }
    }
    
    // Aliases & fusions (éviter vues fantômes / doublons)
    let targetView = view;
    if(view === 'sujets') targetView = 'annales';
    if(view === 'items') targetView = 'synth'; // ITEMs = onglet de Synthèses
    
    // Pousser l'historique sauf navigation "Retour"
    if(!opts.back && prev && prev !== targetView){
      viewHistory.push(prev);
      if(viewHistory.length > 40) viewHistory.shift();
    }
    
    document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
    document.querySelectorAll('#bnav button').forEach(b=>b.classList.remove('active'));
    
    // Map view ids (scores → vScores)
    const viewId = 'v' + targetView.charAt(0).toUpperCase() + targetView.slice(1);
    const el = document.getElementById(viewId);
    if(el){
      el.classList.add('active');
      el.style.display = ''; // clear any leftover inline hide
    } else {
      console.error('[sw] view not found', viewId);
    }
    // Highlight bottom nav (scores/proto/annales/feed/dict/set/home)
    const navKey = targetView === 'ch' ? 'home' : targetView;
    document.querySelector(`[data-v="${navKey}"]`)?.classList.add('active');
    
    S.view=targetView;
    try{ window.scrollTo(0,0); }catch(_){}
    document.getElementById('searchBar')?.classList.remove('open');
    updateBackBtn();
    
    const safe = (fn, label) => { try{ fn(); }catch(e){ console.error('[sw]', label, e); } };

    if(targetView==='synth'){
      safe(()=>{
        if(view === 'items') switchStudyMode('items');
        else switchStudyMode('synth');
      }, 'synth');
    }
    // Always rebuild deck on open (boot may have failed earlier)
    if(targetView==='flash') safe(loadFlashDeck, 'flash');
    if(targetView==='fav') safe(renderFav, 'fav');
    if(targetView==='graph'&&typeof initGraph==='function') safe(initGraph, 'graph');
    if(targetView==='feed'&&typeof BrainFeed!=='undefined') safe(()=>BrainFeed.init(), 'feed');
    if(targetView!=='feed'&&typeof BrainFeed!=='undefined'&&BrainFeed.destroy) safe(()=>BrainFeed.destroy(), 'feed-destroy');
    if(targetView==='dash'&&typeof Dashboard!=='undefined') safe(()=>Dashboard.render(), 'dash');
    if(targetView==='erreurs'&&typeof ErrorJournal!=='undefined') safe(()=>ErrorJournal.render(), 'erreurs');
    if(targetView==='garde') safe(renderGarde, 'garde');
    if(targetView==='dict') safe(renderDict, 'dict');
    if(targetView==='scores'){
      const Mc = (typeof Medicalcul!=='undefined') ? Medicalcul
        : (typeof window!=='undefined' ? window.Medicalcul : null);
      const list=document.getElementById('calc-list');
      const listCont=document.getElementById('calc-list-container');
      const detailCont=document.getElementById('calc-detail-container');
      // Always show list shell when entering scores
      if(listCont) listCont.style.display = 'block';
      if(detailCont) detailCont.style.display = 'none';
      if(Mc && typeof Mc.init==='function'){
        safe(()=>Mc.init(), 'scores-init');
        // Force reflow if list still empty
        if(list && (!list.innerHTML || list.innerHTML.trim().length < 40)){
          safe(()=>{ Mc.currentDomain='all'; Mc.currentSearch=''; Mc.renderList(); Mc.showListContainer(); }, 'scores-retry');
        }
      } else if(list) {
        list.innerHTML='<div class="empty"><div class="empty-text">Module scores non chargé</div><div class="empty-hint">Ctrl+F5 ou Réglages → Vider le cache PWA</div></div>';
      }
    }
    if(targetView==='annales') {
      safe(()=>{
        if (view === 'sujets') switchAnnalesMode('sujets');
        else switchAnnalesMode('annales');
      }, 'annales');
    }
    if(targetView==='proto') safe(renderProto, 'proto');
    if(targetView!=='quiz'&&typeof QuizMode!=='undefined'&&QuizMode.destroy) safe(()=>QuizMode.destroy(), 'quiz-destroy');
    if(targetView==='set'){
      const pd=document.getElementById('pd');
      if(pd) pd.textContent=`${S.read.length} chapitre${S.read.length>1?'s':''} consulté${S.read.length>1?'s':''}`;
      safe(updateInstallPrefUI, 'install-pref');
    }
  } catch (e) {
    console.error('[sw] fatal', view, e);
    if(typeof toast==='function') toast('Erreur navigation');
  }
}

/** Synthèses + Notebook interactif + ITEMs */
function switchStudyMode(mode){
  const btnS=document.getElementById('btnSubSynth');
  const btnN=document.getElementById('btnSubNotebook');
  const btnI=document.getElementById('btnSubItems');
  const tabS=document.getElementById('subTabSynth');
  const tabN=document.getElementById('subTabNotebook');
  const tabI=document.getElementById('subTabItems');
  const hideAll=()=>{
    if(tabS) tabS.style.display='none';
    if(tabN) tabN.style.display='none';
    if(tabI) tabI.style.display='none';
    btnS?.classList.remove('active');
    btnN?.classList.remove('active');
    btnI?.classList.remove('active');
  };
  hideAll();
  if(mode==='items'){
    if(tabI) tabI.style.display='block';
    btnI?.classList.add('active');
    renderItems();
  }else if(mode==='notebook'){
    if(tabN) tabN.style.display='block';
    btnN?.classList.add('active');
    if(typeof NotebookUI!=='undefined') NotebookUI.renderHub();
    else {
      const hub=document.getElementById('notebookHub');
      if(hub) hub.innerHTML='<div class="empty"><div class="empty-text">Module Notebook non chargé</div><div class="empty-hint">Ctrl+F5</div></div>';
    }
  }else{
    if(tabS) tabS.style.display='block';
    btnS?.classList.add('active');
    renderSynthesis();
  }
}
window.switchStudyMode=switchStudyMode;

function switchAnnalesMode(mode) {
  const btnAnn = document.getElementById('btnSubAnnales');
  const btnSuj = document.getElementById('btnSubSujets');
  const tabAnn = document.getElementById('subTabAnnales');
  const tabSuj = document.getElementById('subTabSujets');
  
  if (!tabAnn || !tabSuj) return;
  
  if (mode === 'annales') {
    tabAnn.style.display = 'block';
    tabSuj.style.display = 'none';
    btnAnn?.classList.add('active');
    btnSuj?.classList.remove('active');
    renderAnnales();
  } else {
    tabAnn.style.display = 'none';
    tabSuj.style.display = 'block';
    btnAnn?.classList.remove('active');
    btnSuj?.classList.add('active');
    renderSujets();
  }
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
  toast('📝 Notes sauvegardées');
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
  // Update stats (null-safe — never crash boot)
  const chapters=(typeof APP_DATA!=='undefined'&&APP_DATA.chapters)||[];
  const totalFigs=typeof FIGURES!=='undefined'?Object.keys(FIGURES).length:0;
  const totalItems=chapters.reduce((s,ch)=>s+(ch.items?ch.items.length:0),0);
  const statsBar=document.getElementById('statsBar')||document.querySelector('.stats-bar');
  if(statsBar){
    statsBar.innerHTML=`
    <div class="stat"><span class="stat-num">${chapters.length}</span><span class="stat-label">chap.</span></div>
    <div class="stat"><span class="stat-num">${totalFigs}</span><span class="stat-label">fig.</span></div>
    <div class="stat"><span class="stat-num">${totalItems}</span><span class="stat-label">ITEMs</span></div>
    <div class="stat"><span class="stat-num">${S.read.length}</span><span class="stat-label">lus</span></div>
    <div class="stat stat-click" role="button" tabindex="0" onclick="sw('fav')" onkeydown="if(event.key==='Enter')sw('fav')"><span class="stat-num" id="statFav">${S.bm.length}</span><span class="stat-label">fav.</span></div>`;
  }
  // Daily revision card
  try{ renderDailyRev(); }catch(e){ console.warn('[renderHome] dailyRev', e); }
  // Render chapters
  let chIdx=0;
  chapters.forEach(ch=>{
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
  if(typeof APP_DATA==='undefined'||!APP_DATA.chapters) return;
  const ch=APP_DATA.chapters.find(c=>c.id===id); if(!ch) return;
  S.ch=id;
  if(!S.read.includes(id)){ S.read.push(id); localStorage.setItem('grd',JSON.stringify(S.read)); updStats(); }
  const heroEl=document.getElementById('chHero');
  if(heroEl) heroEl.style.background=`linear-gradient(145deg,${CH_COLORS[id]||'#164E63'},#164E63)`;
  const chNum=document.getElementById('chNum'); if(chNum) chNum.textContent=id.replace('ch','');
  const chT=document.getElementById('chT'); if(chT) chT.textContent=ch.t;
  // Chapter hero image (AI-generated or fallback to PDF illustration)
  const heroImg =
    (typeof CHAPTER_HERO!=='undefined' ? CHAPTER_HERO[id] : null) ||
    (typeof CHAPTER_ILL!=='undefined' ? CHAPTER_ILL[id] : null) ||
    '';
  if(heroEl){
    const oldImg=heroEl.querySelector('.ch-hero-img');
    if(oldImg) oldImg.remove();
    if(heroImg){
      const img=document.createElement('img');
      img.className='ch-hero-img'; img.src=heroImg; img.alt=ch.t; img.loading='lazy';
      img.onerror=function(){ this.style.display='none'; };
      heroEl.insertBefore(img, heroEl.firstChild);
    }
  }
  const tags=(ch.items||[]).map(i=>`<span class="tag">${i}</span>`).join('');
  const chTags=document.getElementById('chTags');
  if(chTags) chTags.innerHTML=tags+(S.read.includes(id)?'<span class="tag tag-read">Consulté</span>':'');
  const bmOn=S.bm.includes(id);
  const isPractice = id==='ch18'||id==='ch19'||id==='ch20';
  // Dense is opt-in only (gdense==='1') so remade figures stay visible by default
  const denseOn = localStorage.getItem('gdense') === '1';
  const toolbar=document.getElementById('chToolbar');
  if(toolbar){
    toolbar.innerHTML =
      `<button type="button" onclick="goBack()" aria-label="Retour">← Retour</button>`+
      `<button type="button" onclick="quickBm('${id}')" aria-label="Favori">${bmOn?BM_SVG.on+' Retirer':BM_SVG.off+' Favori'}</button>`+
      `<button type="button" onclick="openNotes('${id}')" aria-label="Notes">Notes</button>`+
      (isPractice ? '' :
        `<button type="button" id="btnDense" class="toolbar-dense${denseOn?' active':''}" onclick="toggleDenseMode()" aria-pressed="${denseOn?'true':'false'}">${denseOn?'Dense ✓':'Mode dense'}</button>`+
        `<button type="button" class="toolbar-dense ghost" onclick="scrollToKeyPanel()">Points clés</button>`);
  }
  renderChapterContent();
  sw('ch');
  requestAnimationFrame(() => {
    const cc = document.getElementById('chContent');
    if (cc) cc.setAttribute('tabindex', '-1');
  });
}

window.toggleDenseMode = function(){
  const next = localStorage.getItem('gdense') === '1' ? '0' : '1';
  localStorage.setItem('gdense', next);
  const cc = document.getElementById('chContent');
  const btn = document.getElementById('btnDense');
  const on = next === '1';
  if (cc) cc.classList.toggle('dense-mode', on);
  if (btn) {
    btn.classList.toggle('active', on);
    btn.textContent = on ? 'Dense ✓' : 'Mode dense';
    btn.setAttribute('aria-pressed', on ? 'true' : 'false');
  }
};
window.scrollToKeyPanel = function(){
  const el = document.querySelector('.key-panel, .ch-outline-nav, .ch-outline');
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

function renderChapterContent(){
  const cc=document.getElementById('chContent');if(!cc)return;
  if(typeof APP_DATA==='undefined'||!APP_DATA.content){
    cc.innerHTML='<div class="empty"><div class="empty-text">Données non chargées</div><div class="empty-hint">Rechargez l\'app (Ctrl+F5)</div></div>';
    return;
  }
  const chunks=APP_DATA.content[S.ch]||[];
  if(!chunks.length){
    cc.innerHTML='<div class="empty"><div class="empty-icon">📖</div><div class="empty-text">Contenu indisponible</div><div class="empty-hint">Ce chapitre sera bientôt disponible</div></div>';
    return;
  }
  // Practice chapters: unweave each page before join to limit column bleed across pages
  const isPractice = S.ch==='ch18'||S.ch==='ch19'||S.ch==='ch20';
  const raw = chunks.map((c) => {
    let t = String(c[1] || '').trim();
    if (!t) return '';
    if (/^this page intentionally left blank$/i.test(t)) return '';
    if (isPractice && typeof unweaveTwoColumnOCR === 'function') {
      try { t = unweaveTwoColumnOCR(t); } catch (_) {}
    }
    return t;
  }).filter(Boolean).join('\n\n');
  try {
    cc.innerHTML = renderChapter(raw, S.ch);
  } catch (e) {
    console.error('[renderChapter]', e);
    cc.innerHTML = '<div class="empty"><div class="empty-text">Erreur de rendu</div><div class="empty-hint">'+String(e.message||e)+'</div></div>';
    return;
  }
  cc.classList.add('study-reader');
  if (isPractice) {
    cc.classList.add('practice-reader');
    cc.classList.remove('study-reader', 'dense-mode');
  } else {
    cc.classList.remove('practice-reader');
    // Dense mode is opt-in only — never auto-hide educational figures on mobile
    const denseOn = localStorage.getItem('gdense') === '1';
    cc.classList.toggle('dense-mode', denseOn);
    applyConceptLinks();
    // Images IA educational/ EN PLUS des figures refaites (SVG/HTML)
    injectEducationalVisuals(S.ch, cc);
    // Smooth outline anchors
    cc.querySelectorAll('.outline-link').forEach(a => {
      if (!a || typeof a.addEventListener !== 'function') return;
      a.addEventListener('click', (ev) => {
        const id = (a.getAttribute && a.getAttribute('href') || '').slice(1);
        const target = id && document.getElementById(id);
        if (target) {
          if (ev && ev.preventDefault) ev.preventDefault();
          if (typeof target.scrollIntoView === 'function') {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
          if (target.classList && target.classList.add) {
            target.classList.add('sec-flash');
            setTimeout(() => target.classList.remove && target.classList.remove('sec-flash'), 1200);
          }
        }
      });
    });
  }
}

function injectEducationalVisuals(chId, cc) {
  if (!cc || typeof createEduVisualWrapper !== 'function') return;

  const addedSrcs = new Set();
  // Remade educational figures (Grok Imagine) — show several per chapter
  const MAX_VISUALS = 8;
  const isQAChapter = ['ch18','ch19','ch20'].includes(chId);

  // Prefer curated EDU_VISUALS (already remade, not PDF captures)
  let candidates = [];
  if (typeof EDU_VISUALS !== 'undefined' && EDU_VISUALS[chId]) {
    EDU_VISUALS[chId].forEach(v => {
      if (v && v.img && !isPdfCapturePath(v.img)) candidates.push(v.img);
    });
  }
  // EDU_VISUALS is the authoritative asset manifest. Avoid synthesizing
  // filenames here: later chapters intentionally have fewer than six images,
  // and guessed paths generated avoidable 404 responses while reading.
  candidates = [...new Set(candidates)].filter(s => !isPdfCapturePath(s)).slice(0, MAX_VISUALS + 4);

  // Targeted match inserts first (context-aware)
  if (typeof EDU_VISUALS !== 'undefined' && EDU_VISUALS[chId]) {
    EDU_VISUALS[chId].forEach(v => {
      if (!v || !v.img || addedSrcs.has(v.img) || addedSrcs.size >= MAX_VISUALS) return;
      let re;
      try { re = new RegExp(v.match || '.*', 'i'); } catch { re = /./; }
      const targets = cc.querySelectorAll('h3, .sub-head, .section-title, .para-card, header');
      for (let el of targets) {
        if (re.test((el.textContent || el.innerText || ''))) {
          const w = createEduVisualWrapper(v.img, v.note || `Illustration ${chId}`);
          if (w && el.parentNode) {
            // Hide broken images so reading isn't littered with empty boxes
            const img = w.querySelector('img, video');
            if (img) img.onerror = function(){ const wrap=this.closest('.edu-visual-wrapper'); if(wrap) wrap.remove(); };
            el.parentNode.insertBefore(w, el.nextSibling);
            addedSrcs.add(v.img);
            break;
          }
        }
      }
    });
  }

  // Collect solid insertion points for spaced placement
  let blocks = Array.from(cc.querySelectorAll('.para-card, h3.sub-head, .sub-head, .section-head'));
  if (blocks.length < 2) {
    blocks = Array.from(cc.querySelectorAll('h3, .para-card, section'));
  }
  if (isQAChapter || addedSrcs.size >= MAX_VISUALS) {
    blocks = [];
  }

  // Spaced insert of remaining candidates (cap MAX_VISUALS)
  let placed = cc.querySelectorAll('figure.edu-visual-wrapper').length;
  let cIdx = 0;
  for (let b of blocks) {
    if (placed >= MAX_VISUALS) break;
    if (cIdx >= candidates.length) break;
    let src = candidates[cIdx];
    let guard=0;
    while (addedSrcs.has(src) && guard < candidates.length) { cIdx++; src = candidates[cIdx % candidates.length]; guard++; }
    if (addedSrcs.has(src)) break;

    const nxt = b.nextSibling;
    if (nxt && nxt.classList && nxt.classList.contains('edu-visual-wrapper')) {
      cIdx++; continue;
    }

    const w = createEduVisualWrapper(src, `Illustration : ${chId}`);
    if (w && b.parentNode) {
      const media = w.querySelector('img, video');
      if (media) media.onerror = function(){ const wrap=this.closest('.edu-visual-wrapper'); if(wrap) wrap.remove(); };
      b.parentNode.insertBefore(w, b.nextSibling);
      addedSrcs.add(src);
      placed++;
    }
    cIdx++;
  }

  // Optional light fill only if chapter has almost no visuals (never force 6)
  let currentCount = cc.querySelectorAll('figure.edu-visual-wrapper').length;
  if (!isQAChapter && currentCount < 2) {
    for (const src of candidates) {
      if (currentCount >= 2 || addedSrcs.has(src)) continue;
      const w = createEduVisualWrapper(src, `Illustration ${chId}`);
      if (w) {
        const media = w.querySelector('img, video');
        if (media) media.onerror = function(){ const wrap=this.closest('.edu-visual-wrapper'); if(wrap) wrap.remove(); };
        cc.appendChild(w);
        addedSrcs.add(src);
        currentCount++;
      }
    }
  }

  // For ch1, ensure the key summary "Les deux éléments clefs du bien vieillir" appears at the end as a highlighted box (not inside vitamin D or other sections)
  if (S.ch === 'ch1') {
    const keyPointHtml = `<div class="para-card key-point"><p>Les deux éléments clefs du bien vieillir comprennent : alimentation adaptée (ni trop dans la jeunesse, ni trop peu dans la vieillesse) ; maintien ou reprise d\'une activité physique adaptée.</p></div>`;
    if (!cc.innerHTML.includes('éléments clefs du bien vieillir')) {
      cc.innerHTML += keyPointHtml;
    }
  }
}

// force deploy trigger for GitHub Pages - bad text removed from data, feed centering forced


// Helper: create consistent figure wrapper for images OR videos (mp4 support for new mechanism visuals)
// Designed to illustrate without breaking paragraph flow: full-width clean after headings, or compact where specified
function createEduVisualWrapper(src, captionText) {
  if (!src) return null;
  const wrapper = document.createElement('figure');
  wrapper.className = 'edu-visual-wrapper';
  const lowerSrc = (src || '').toLowerCase();
  const isVideo = lowerSrc.endsWith('.mp4');
  // Updated detection for real generated files (16:9 wide for diagrams after text, compact for some)
  if (lowerSrc.includes('compact') || lowerSrc.includes('ch14-evaluation') || lowerSrc.includes('keyfeatures')) {
    wrapper.dataset.layout = 'compact';
  } else if (lowerSrc.includes('16x9') || lowerSrc.includes('-16x9') || lowerSrc.includes('ch11-delirium-vulnerabilite') || lowerSrc.includes('ch12-chutes') || lowerSrc.includes('ch13-cascade') || lowerSrc.includes('ch16-prescription') || lowerSrc.includes('ch17-palliatif') || lowerSrc.includes('ch14-denutrition-sarcopenie') || lowerSrc.includes('ch15-incontinence')) {
    wrapper.dataset.layout = 'wide';
  }
  let mediaEl;
  if (isVideo) {
    mediaEl = document.createElement('video');
    mediaEl.src = src;
    mediaEl.className = 'edu-chapter-visual';
    mediaEl.controls = true;
    mediaEl.muted = true;
    mediaEl.loop = true;
    mediaEl.playsInline = true;
    mediaEl.setAttribute('aria-label', captionText);
    mediaEl.onerror = function() {
      if (this.parentNode && this.parentNode.classList.contains('edu-visual-wrapper')) {
        this.parentNode.style.display = 'none';
      }
    };
  } else {
    mediaEl = document.createElement('img');
    mediaEl.src = src;
    mediaEl.className = 'edu-chapter-visual';
    mediaEl.alt = captionText || 'Illustration';
    mediaEl.loading = 'lazy';
    mediaEl.onerror = function() { 
      this.style.display='none'; 
      if (this.parentNode && this.parentNode.classList.contains('edu-visual-wrapper')) this.parentNode.style.display='none';
    };
  }
  const cap = document.createElement('figcaption');
  cap.textContent = captionText || 'Visuel éducatif';
  wrapper.appendChild(mediaEl);
  wrapper.appendChild(cap);
  return wrapper;
}

/* ── MANUEL NUMÉRIQUE (contenu OCR → structure éditoriale) ── */
const RUN_HDR_RE=/^(Comprendre le vieillissement|Connaissances|Entraînement|Gériatrie)$/i;
const SKIP_LINE_RE=/^(©\s*\d{4}|Elsevier|Tous droits réservés|This page intentionally left blank|Index$|En lien avec la définition)/i;
const SITUATION_NUMBERS = new Set([
  103, 106, 112, 114, 116, 117, 119, 121, 122, 123, 124,
  128, 129, 130, 131, 134, 135, 140, 159, 161, 162, 165,
  166, 170, 171, 172, 173, 174, 175, 176, 178, 184, 185,
  186, 199, 200, 211, 217, 223, 226, 227, 229, 231, 232,
  239, 240, 244, 245, 246, 247, 248, 250, 256, 258, 259,
  260, 264, 266, 267, 269, 270, 272, 276, 279, 281, 284,
  288, 295, 298, 300, 306, 321, 322, 324, 325, 327, 328,
  330, 331, 334, 341, 342, 343, 345, 348, 352, 353, 354,
  355
]);
const SYLLABUS_RE=/^(Rang Rubrique|Intitulé Descriptif|Item, objectifs|Hiérarchisation des connaissances|ITEM\s+\d+\s*–|Connaître les |Savoir qualifier|Modifications reconnues|Descriptif$)/i;
const SYLLABUS_ROW_RE=/^[A-D]\s+(Définition|Épidémiologie|Éléments|Prévalence|Prise en charge|B\s)|^(physiopathologiques|complémentaires|pathologiques|physiopa(?:tho)?|épidémiologie|pharmacologique|squelettique|immunologiques|psychomotrice)\s+[a-z]/;
const SECTION_RE=/^([IVX]+)\.\s+(.+)/;
const LETTER_RE=/^([A-Z])\.\s+(.+)/;
const RANG_RE=/^([AB])\s+(.+)/;
const BULLET_RE=/^[•\-–]\s*(.+)/;
const DIAGRAM_RE=/^(Fonction|d'organe|Réserve|Seuil|Effet|100\s*%|0\s+Âge|\d\s+(Vieillissement|Maladie|Stress)|Fig\.\s*\d)/i;
const NUM_LIST_RE=/^(\d{1,2})[\.)]\s+(.+)/;

function preprocessAppData(appData){
  const data = appData || (typeof APP_DATA !== 'undefined' ? APP_DATA : null);
  if (!data || !data.chapters || !data.content) return;

  const pageNorm = (t) => String(t || '').toLowerCase().replace(/\s+/g, ' ').trim().slice(0, 280);

  // Filter out book index pages + consecutive duplicate page bodies (keep intentional blanks for boundary logic)
  for (const chId in data.content) {
    const filtered = [];
    let prevNorm = '';
    for (const page of data.content[chId]) {
      const text = page[1];
      const clean = (text || '').trim();
      if (!clean) continue;
      if (clean.toLowerCase().startsWith('index')) {
        const matches = clean.match(/[a-zA-ZÀ-ÖØ-öø-ÿ'\-()]+\s*,\s*\d+/g);
        if (matches && matches.length >= 3) continue;
      }
      // Drop consecutive pages with nearly identical text (OCR double-extract)
      const n = pageNorm(clean);
      if (n.length > 80 && n === prevNorm) continue;
      prevNorm = n;
      filtered.push(page);
    }
    data.content[chId] = filtered;
  }

  const normalize = s => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]/g,'');
  const chapters = data.chapters;
  
  for (let i = 0; i < chapters.length - 1; i++) {
    const chId = chapters[i].id;
    const nextChId = chapters[i+1].id;
    const pages = data.content[chId];
    if (!pages || !pages.length) {
      continue;
    }
    if (!data.content[nextChId]) {
      data.content[nextChId] = [];
    }
    const nextPages = data.content[nextChId];
    
    const nextFirstPageNum = nextPages.length ? nextPages[0][0] : -1;
    let candidate = -1;
    
    // Detection A ('stnioP')
    for (let idx = Math.floor(pages.length / 2); idx < pages.length; idx++) {
      if (pages[idx][1].includes('stnioP')) {
        candidate = idx + 1;
        break;
      }
    }
    
    // Detection B (Fallback Title)
    if (candidate === -1) {
      const normTitle = normalize(chapters[i+1].t);
      for (let idx = Math.floor(pages.length / 2); idx < pages.length; idx++) {
        if (normalize(pages[idx][1]).includes(normTitle)) {
          candidate = idx;
          break;
        }
      }
    }
    
    // Backwards Expansion for Blank Pages
    if (candidate !== -1) {
      while (candidate > 0) {
        const prevPageText = pages[candidate - 1][1].toLowerCase();
        if (prevPageText.includes("this page intentionally left blank")) {
          candidate--;
        } else {
          break;
        }
      }
    }
    
    // Validation Gating
    if (candidate !== -1 && candidate < pages.length) {
      const pagesToMove = pages.slice(candidate);
      const lastPageNum = pagesToMove[pagesToMove.length - 1][0];
      const pageGap = nextFirstPageNum !== -1 ? (nextFirstPageNum - lastPageNum) : 1;
      
      const gapCheck = pageGap > 0 && pageGap <= 2;
      const sizeCheck = pagesToMove.length <= 4;
      
      let hasNonBlank = false;
      for (const p of pagesToMove) {
        const text = p[1].toLowerCase();
        if (!text.includes("this page intentionally left blank") && text.trim().length > 0) {
          hasNonBlank = true;
          break;
        }
      }
      
      if (gapCheck && sizeCheck && hasNonBlank) {
        const moved = pages.splice(candidate);
        nextPages.unshift(...moved);
      }
    }
  }
}
if (typeof APP_DATA !== 'undefined' && (typeof document === 'undefined' || !document.getElementById)) {
  preprocessAppData();
}

function hashStr(s){
  let h=0; const t=String(s||'');
  for(let i=0;i<t.length;i++){ h=((h<<5)-h)+t.charCodeAt(i); h|=0; }
  return h;
}

/* ── Entraînement ch18–20 : parser QCM/KFP/MDP dédié (pas le rendu « livre ») ── */
function escHtml(s){
  return String(s||'')
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;');
}

function cleanPracticeText(t){
  return String(t||'')
    .replace(/\r\n/g,'\n')
    .replace(/([a-zà-öø-ÿœæ]{2,})-\s*\n\s*([a-zà-öø-ÿœæ]{2,})/gi,'$1$2')
    .replace(/([a-zà-öø-ÿœæ]{2,})-\s+([a-zà-öø-ÿœæ]{2,})/gi,'$1$2')
    .replace(/©\s*\d{4}[^\n]*Elsevier[^\n]*/gi,'')
    .replace(/Tous droits réservés[^\n]*/gi,'')
    .replace(/This page intentionally left blank/gi,'')
    .replace(/\u25bc/g,'')
    .replace(/[ \t]{2,}/g,' ')
    .trim();
}

function isStemFragment(l){
  return /évaluée?\(s\)|parmi\s+(ces|les)|quelle?\(s\)|échelle|activités|concernant|indiquez|proposition|quotidienne|Lawton|Katz|IADL|ADL|GIR|à retenir|en faveur|en priorité/i.test(l);
}

function isOptLine(l){
  return /^[A-H]\.\s+\S/.test(l) || /^\d{1,2}\.\s+\S/.test(l);
}

function isMarkerLine(l){
  return /^(Question\s+\d+|KFP\s*\d+|[AB]\s*QRM\s*\d+|[AB]\s*QRU\s*\d+|QRM\s*\d+|QRU\s*\d+)\b/i.test(l);
}

/** Normalize raw page into token lines (markers / options / narrative) */
function tokenizePractice(raw){
  let t = cleanPracticeText(raw);
  // Headers out
  t = t.replace(/^(Mini-dossiers progressifs|Key-features problems|Questions isolées|Gériatrie|Connaissances|Entraînement|Énoncés et questions)\s*/gim, '');
  // Markers ONCE (avoid double-hit A QRM 17 → A QRM + QRM)
  t = t
    .replace(/\b(Question\s+\d+)\b/gi, '\n§M§$1\n')
    .replace(/\b(KFP\s*\d+)\b/gi, '\n§M§$1\n')
    .replace(/\b([AB])\s+(QRM|QRU)\s*(\d+)\b/gi, '\n§M§$1 $2 $3\n')
    // Only bare QRM/QRU if not already prefixed by A/B on same token
    .replace(/(^|[^AB\s])\b(QRM|QRU)\s*(\d+)\b/gi, '$1\n§M§$2 $3\n')
    .replace(/\b(R[eé]ponses?\s*:)/gi, '\n§R§$1\n')
    .replace(/(?:^|[\s])([A-H])\.\s+/g, '\n§O§$1. ')
    .replace(/(?:^|[\s])(\d{1,2})\.\s+(?=[A-Za-zÀ-ÿ(«"])/g, '\n§O§$1. ');

  return t.split(/\n/).map(l => l.trim()).filter(l => {
    if (!l || l.length < 2) return false;
    if (/^(matiques|blématiques|pro-|gine)$/i.test(l)) return false;
    // Drop duplicate bare QRM if we already have A QRM nearby — handled in unweave
    return true;
  });
}

/**
 * Rebuild blocks from two-column OCR.
 * Options are placed with zigzag-aware assignment (A1,B1,C1,A2,D1,B2…).
 */
function unweaveTwoColumnOCR(raw){
  const lines = tokenizePractice(raw);
  const blocks = [];
  let cur = { marker: '', stemParts: [], optionSets: [], answers: [] };
  // Parallel option sets as maps for zigzag fill
  let optMaps = []; // [{A:text, B:text, ...}, ...]
  let mode = 'stem';

  const mapsToSets = () => {
    const sets = [];
    for (const map of optMaps) {
      const letters = Object.keys(map).filter(k => k !== '_n').sort((a, b) => {
        const na = /^\d+$/.test(a), nb = /^\d+$/.test(b);
        if (na && nb) return parseInt(a, 10) - parseInt(b, 10);
        return a.localeCompare(b);
      });
      if (letters.length) {
        sets.push(letters.map(L => ({ letter: L, text: map[L] })));
      }
    }
    return sets;
  };

  const placeOption = (letter, text) => {
    letter = String(letter).toUpperCase();
    const isNum = /^\d+$/.test(letter);
    const code = isNum ? parseInt(letter, 10) : letter.charCodeAt(0);

    // 1) Sequential extend (max+1) — oldest incomplete set first (zigzag columns)
    for (let i = 0; i < optMaps.length; i++) {
      if (optMaps[i][letter]) continue;
      const keys = Object.keys(optMaps[i]).filter(k => k !== '_n').sort((a, b) => {
        if (/^\d+$/.test(a) && /^\d+$/.test(b)) return parseInt(a, 10) - parseInt(b, 10);
        return a.localeCompare(b);
      });
      if (!keys.length) continue;
      const max = keys[keys.length - 1];
      const maxCode = /^\d+$/.test(max) ? parseInt(max, 10) : max.charCodeAt(0);
      if (code === maxCode + 1) {
        optMaps[i][letter] = text;
        return;
      }
    }
    // 2) Hole-fill (letter < max, missing) — oldest first
    for (let i = 0; i < optMaps.length; i++) {
      if (optMaps[i][letter]) continue;
      const keys = Object.keys(optMaps[i]).filter(k => k !== '_n').sort();
      if (!keys.length) continue;
      const max = keys[keys.length - 1];
      const maxCode = /^\d+$/.test(max) ? parseInt(max, 10) : max.charCodeAt(0);
      if (code < maxCode) {
        optMaps[i][letter] = text;
        return;
      }
    }
    // 3) New set on A / 1
    if (letter === 'A' || letter === '1' || !optMaps.length) {
      optMaps.push({ [letter]: text });
      return;
    }
    // 4) Append to last set if free, else new set
    const last = optMaps[optMaps.length - 1];
    if (last && !last[letter]) last[letter] = text;
    else optMaps.push({ [letter]: text });
  };

  const flushOptsIntoCur = () => {
    cur.optionSets = mapsToSets();
    optMaps = [];
  };

  const pushBlock = () => {
    flushOptsIntoCur();
    if (cur.marker || cur.stemParts.length || cur.optionSets.length) {
      blocks.push(cur);
    }
    cur = { marker: '', stemParts: [], optionSets: [], answers: [] };
    mode = 'stem';
  };

  for (let l of lines) {
    if (l.startsWith('§M§')) {
      const lab = l.slice(3).replace(/\s+/g, ' ').trim();
      pushBlock();
      cur.marker = lab;
      mode = 'stem';
      continue;
    }
    if (l.startsWith('§R§')) {
      mode = 'ans';
      cur.answers.push(l.slice(3).replace(/\s+/g, ' ').trim());
      continue;
    }
    if (l.startsWith('§O§') || isOptLine(l)) {
      const ol = l.startsWith('§O§') ? l.slice(3).trim() : l;
      const m = ol.match(/^([A-H]|\d{1,2})\.\s+(.+)$/);
      if (!m) continue;
      let text = m[2].replace(/\s+/g, ' ').trim();
      if (text.length > 180) {
        const c = text.slice(0, 160).search(/[.!?]\s/);
        text = text.slice(0, c > 20 ? c + 1 : 160).trim();
      }
      placeOption(m[1], text);
      mode = 'opt';
      continue;
    }
    if (mode === 'ans') {
      cur.answers.push(l.replace(/\s+/g, ' ').trim());
      continue;
    }
    if (mode === 'opt' && isStemFragment(l)) {
      // stem of interleaved next question — keep on current stemParts (will pair via multi-sets)
      cur.stemParts.push(l.replace(/\s+/g, ' ').trim());
      continue;
    }
    if (mode === 'opt' && l.length < 70 && !isStemFragment(l) && optMaps.length) {
      // option text continuation
      const lastMap = optMaps[optMaps.length - 1];
      const keys = Object.keys(lastMap).filter(k => k !== '_n').sort();
      const lastL = keys[keys.length - 1];
      if (lastL && lastMap[lastL] && lastMap[lastL].length < 100 && !/[.!?]$/.test(lastMap[lastL])) {
        lastMap[lastL] = (lastMap[lastL] + ' ' + l).replace(/\s+/g, ' ').trim();
        continue;
      }
    }
    cur.stemParts.push(l.replace(/\s+/g, ' ').trim());
    mode = 'stem';
  }
  pushBlock();

  unweaveTwoColumnOCR._lastBlocks = blocks;
  return blocks.map(b => {
    const parts = [];
    if (b.marker) parts.push(b.marker);
    if (b.stemParts.length) parts.push(b.stemParts.join(' '));
    b.optionSets.forEach(set => set.forEach(o => parts.push(o.letter + '. ' + o.text)));
    if (b.answers.length) parts.push('Réponse : ' + b.answers.join(' '));
    return parts.join('\n');
  }).join('\n');
}

function parseLetterOptions(block){
  // Prefer structured sets if available from last unweave of same content — fallback line parse
  const lines = String(block||'').split(/\n/).map(l=>l.trim()).filter(Boolean);
  const opts = [];
  let cur = null;
  let lastCode = 0;
  for (const l of lines) {
    const m = l.match(/^([A-H])\.\s+(.+)$/);
    if (m) {
      const code = m[1].charCodeAt(0);
      if (cur && code <= lastCode) {
        // restart — don't merge into previous set via dedup longest
        opts.push(cur);
        // mark boundary with null
        opts.push({ letter: '__SPLIT__', text: '' });
        cur = null;
      }
      if (cur) opts.push(cur);
      cur = { letter: m[1], text: m[2].slice(0, 200).trim() };
      lastCode = code;
    } else if (cur && l.length < 70 && !isStemFragment(l) && !isMarkerLine(l)) {
      cur.text = (cur.text + ' ' + l).replace(/\s+/g,' ').trim().slice(0, 200);
    }
  }
  if (cur) opts.push(cur);
  // Take first contiguous set only (until SPLIT)
  const first = [];
  for (const o of opts) {
    if (o.letter === '__SPLIT__') break;
    first.push(o);
  }
  return first.length ? first : opts.filter(o => o.letter !== '__SPLIT__');
}

function parseNumberedOptions(block){
  const lines = String(block||'').split(/\n/).map(l=>l.trim()).filter(Boolean);
  const opts = [];
  let cur = null;
  let lastN = 0;
  for (const l of lines) {
    const m = l.match(/^(\d{1,2})\.\s+(.+)$/);
    if (m) {
      const n = parseInt(m[1], 10);
      if (cur && n <= lastN) {
        opts.push(cur);
        opts.push({ letter: '__SPLIT__', text: '' });
        cur = null;
      }
      if (cur) opts.push(cur);
      cur = { letter: m[1], text: m[2].slice(0, 200).trim() };
      lastN = n;
    } else if (cur && l.length < 70 && !isStemFragment(l)) {
      cur.text = (cur.text + ' ' + l).replace(/\s+/g,' ').trim().slice(0, 200);
    }
  }
  if (cur) opts.push(cur);
  const first = [];
  for (const o of opts) {
    if (o.letter === '__SPLIT__') break;
    first.push(o);
  }
  return first.length ? first : opts.filter(o => o.letter !== '__SPLIT__');
}

function extractAnswerBlock(block){
  const m=block.match(/R[eé]ponses?\s*[:：]\s*([\s\S]*)$/i);
  if(!m) return { body: block, answer: '' };
  return {
    body: block.slice(0, m.index).trim(),
    answer: m[1].replace(/\s*(Question\s+\d+|KFP\s*\d+|[AB]\s*QRM\s*\d+)[\s\S]*$/i,'').trim()
  };
}

function renderQcmInteractiveCard(card, idx){
  const id='pqcm-'+idx;
  const opts=card.options||[];
  const optHtml=opts.map((o,i)=>{
    const lid=id+'-o'+i;
    return `<label class="pqcm-opt" for="${lid}">
      <input type="checkbox" id="${lid}" class="pqcm-check" data-card="${id}">
      <span class="pqcm-letter">${escHtml(o.letter)}</span>
      <span class="pqcm-opt-text">${escHtml(o.text)}</span>
    </label>`;
  }).join('');
  const maxBadge=card.max?`<span class="pqcm-badge">Max ${escHtml(String(card.max))}</span>`:'';
  const rangBadge=card.rang?`<span class="pqcm-rang rang-${String(card.rang).toLowerCase()}">Rang ${escHtml(card.rang)}</span>`:'';
  const typeBadge=`<span class="pqcm-type">${escHtml(card.type||'QCM')}</span>`;
  const answerBlock=card.answer
    ? `<div class="pqcm-answer" id="${id}-ans" hidden>
        <div class="pqcm-answer-label">Correction</div>
        <div class="pqcm-answer-body">${escHtml(card.answer)}</div>
      </div>
      <button type="button" class="pqcm-reveal" onclick="togglePracticeAnswer('${id}')">Voir la correction</button>`
    : '';
  const vignette=card.vignette
    ? `<div class="pqcm-vignette">${escHtml(card.vignette)}</div>` : '';
  return `<article class="pqcm-card" id="${id}" data-qtype="${escHtml(card.type||'')}">
    <header class="pqcm-hdr">${typeBadge}${rangBadge}${maxBadge}
      <span class="pqcm-num">${escHtml(card.label||('Q'+(idx+1)))}</span>
    </header>
    ${vignette}
    <div class="pqcm-stem">${escHtml(card.stem)}</div>
    ${optHtml?`<div class="pqcm-options" role="group">${optHtml}</div>`:''}
    ${answerBlock}
  </article>`;
}

window.togglePracticeAnswer=function(id){
  const ans=document.getElementById(id+'-ans');
  const btn=document.querySelector('#'+id+' .pqcm-reveal');
  if(!ans) return;
  const open=ans.hasAttribute('hidden');
  if(open){ ans.removeAttribute('hidden'); if(btn) btn.textContent='Masquer la correction'; }
  else { ans.setAttribute('hidden',''); if(btn) btn.textContent='Voir la correction'; }
};

function parsePracticeItems(raw, chId){
  unweaveTwoColumnOCR(raw);
  const blocks = unweaveTwoColumnOCR._lastBlocks || [];
  const items = [];
  let pendingStem = '';
  let waitMarker = null;
  let waitStem = '';

  const defaultStem = (type) => type === 'KFP'
    ? 'Sélectionnez la (les) proposition(s) pertinente(s)'
    : 'Quelle(s) est (sont) la (les) proposition(s) exacte(s) ?';

  const splitQuestions = (text) => {
    const t = String(text || '').replace(/\s+/g, ' ').trim();
    if (!t) return [];
    return t.split(/(?=(?:Quel(?:le)?\(s\)|Parmi\s+(?:ces|les)|Concernant\s+[A-Za-zÀ-ÿ]|Indiquez\s+|Que\s+(?:pouvez|faut|réalisez)|Quelle\s+description))/i)
      .map(s => s.trim())
      .filter(s => s.length > 12);
  };

  const makeItem = (label, stem, vignette, options, answer, qIndex) => {
    let rang = '';
    const rangM = String(label).match(/^([AB])\s*(QRM|QRU)/i);
    if (rangM) rang = rangM[1].toUpperCase();
    let type = 'QCM';
    if (/KFP/i.test(label) || chId === 'ch19') type = 'KFP';
    else if (/Question\s+\d+/i.test(label) || chId === 'ch18') type = 'MDP';
    else if (/QRM|QRU/i.test(label) || chId === 'ch20') type = 'QI';

    let st = String(stem || '').replace(/\s+/g, ' ').trim();
    let vg = String(vignette || '').replace(/\s+/g, ' ').trim();

    // Unpack multi-question blobs (2-column interleave often glues two stems)
    const allQ = splitQuestions((vg + ' ' + st).trim());
    if (allQ.length >= 2 && typeof qIndex === 'number') {
      st = allQ[Math.min(qIndex, allQ.length - 1)];
      vg = qIndex === 0 && allQ.length > 2 ? allQ.slice(0, -1).join(' ') : '';
      // Prefer matching index; if only 2 questions, map 0 and 1
      if (allQ.length === 2) {
        st = allQ[Math.min(qIndex, 1)];
        vg = '';
      }
    } else if (allQ.length === 1 && /proposition\(s\) exacte/i.test(st)) {
      st = allQ[0];
      vg = '';
    }

    if (st.length > 140 && allQ.length < 2) {
      const qm = st.lastIndexOf('?');
      if (qm > 40) {
        const head = st.slice(0, qm + 1).trim();
        const tail = st.slice(qm + 1).trim();
        if (tail.length > 12 && /quel|parmi|indiquez|concernant/i.test(tail)) {
          vg = (vg ? vg + ' ' : '') + head;
          st = tail;
        } else if (head.length > 80 && tail.length < 8) {
          // Keep the question ending with ? as stem, rest as vignette before it
          const firstQ = head.search(/Quel|Parmi|Concernant|Indiquez|Que /i);
          if (firstQ > 10) {
            vg = head.slice(0, firstQ).trim();
            st = head.slice(firstQ).trim();
          } else {
            st = head;
          }
        }
      }
    }
    if (/^(matiques|blématiques|pro-|gine|appartenant|Les key-features|Les questions isolées)\b/i.test(st) || st.length < 10) {
      st = (options && options.length >= 2) ? defaultStem(type) : st;
    }
    // Prefer real question over generic placeholder when available in vg
    if (/proposition\(s\) exacte|proposition\(s\) pertinente/i.test(st) && vg) {
      const qs = splitQuestions(vg);
      if (qs.length) {
        st = qs[typeof qIndex === 'number' ? Math.min(qIndex, qs.length - 1) : 0];
        vg = '';
      }
    }

    options = (options || []).filter(o => {
      const t = String(o.text || '').trim();
      if (t.length < 3) return false;
      if (/Elsevier|droits réservés|Mini-dossiers|Questions isolées/i.test(t)) return false;
      if (t.length < 6 && !/^[A-Za-zÀ-ÿ]{3,}$/.test(t)) return false;
      return true;
    }).slice(0, 10);

    // Require solid MCQ shape
    if (options.length < 3 && !answer) return null;
    // Must have A for letter options (incomplete zigzag leftovers)
    if (options.length >= 2 && options.every(o => /[A-H]/.test(o.letter)) && !options.some(o => o.letter === 'A')) return null;
    // Drop generic stem without enough distinctive options
    if (/proposition\(s\) exacte|proposition\(s\) pertinente/i.test(st) && options.length < 4 && !answer) return null;

    const maxM = (st + ' ' + vg).match(/\[maximum\s+(\d+)\]/i);
    const max = maxM ? maxM[1] : '';
    st = st.replace(/\[maximum\s+\d+\]/ig, '').trim();

    return {
      label: label || 'QCM', type, rang, max,
      stem: (st || defaultStem(type)).slice(0, 500),
      vignette: vg.slice(0, 900),
      options,
      answer: String(answer || '').slice(0, 600)
    };
  };

  for (const b of blocks) {
    const stemText = (b.stemParts || []).join(' ').replace(/\s+/g, ' ').trim();
    const answer = (b.answers || []).join(' ').replace(/^R[eé]ponses?\s*:\s*/i, '').trim();
    const sets = b.optionSets || [];

    if (!b.marker && !sets.length) {
      if (stemText.length > 30 && !/^(Les key-features|Les questions isolées)/i.test(stemText)) {
        pendingStem = (pendingStem ? pendingStem + ' ' : '') + stemText;
      }
      continue;
    }

    if (b.marker && !sets.length) {
      const fullStem = [waitStem, pendingStem, stemText].filter(Boolean).join(' ');
      waitMarker = b.marker;
      waitStem = fullStem;
      pendingStem = '';
      if (answer) {
        const it = makeItem(b.marker, fullStem, '', [], answer);
        if (it) items.push(it);
        waitMarker = null; waitStem = '';
      }
      continue;
    }

    if (sets.length) {
      let label = b.marker || waitMarker || 'QCM';
      let stem = [waitStem, pendingStem, stemText].filter(Boolean).join(' ');
      waitMarker = null; waitStem = ''; pendingStem = '';

      for (let si = 0; si < sets.length; si++) {
        let st = stem;
        let vg = '';
        if (si > 0) {
          const parts = stem.split(/(?=quel(?:le)?\(s\)|parmi\s+(ces|les)|concernant\s+)/i);
          if (parts.length >= 2) {
            st = parts[parts.length - 1].trim();
            vg = parts.slice(0, -1).join(' ').trim();
          } else {
            st = defaultStem(chId === 'ch19' ? 'KFP' : 'QI');
          }
          label = 'QCM';
        }
        const it = makeItem(si === 0 ? label : 'QCM', st, vg, sets[si], si === 0 ? answer : '', si);
        if (it) items.push(it);
      }
    }
  }

  // Drop near-duplicate cards (same first 3 options)
  const seen = new Set();
  const deduped = [];
  for (const it of items) {
    const key = (it.options || []).slice(0, 3).map(o => o.letter + o.text.slice(0, 40)).join('|');
    if (key.length > 10 && seen.has(key)) continue;
    if (key.length > 10) seen.add(key);
    deduped.push(it);
  }

  return { intro: '', items: deduped };
}

function renderPracticeChapter(raw, chId){
  const titles={
    ch18:{ h:'Mini-dossiers progressifs', s:'Dossiers progressifs · questions enchaînées · mode entraînement' },
    ch19:{ h:'Key-features problems', s:'Situations cliniques rang A · choix multiples (KFP)' },
    ch20:{ h:'Questions isolées', s:'QRM / QRU isolées · rang A ou B indiqué' }
  };
  const meta=titles[chId]||{ h:'Entraînement', s:'' };
  const { intro, items }=parsePracticeItems(raw, chId);

  if(!items.length){
    // Dernier recours : affichage structuré brut nettoyé (toujours mieux que le livre cassé)
    const clean=cleanPracticeText(raw).split(/\n+/).filter(l=>l.trim().length>2);
    return `<div class="practice-wrap">
      <div class="practice-hero"><h2>${escHtml(meta.h)}</h2><p>${escHtml(meta.s)}</p>
      <p class="practice-warn">Structure QCM incomplète dans la source OCR — affichage nettoyé.</p></div>
      <div class="practice-fallback">${clean.slice(0,80).map(l=>`<p class="practice-line">${escHtml(l)}</p>`).join('')}</div>
    </div>`;
  }

  const filters=`<div class="practice-toolbar">
    <span class="practice-count">${items.length} item${items.length>1?'s':''}</span>
    <button type="button" class="practice-tool-btn" onclick="revealAllPractice(true)">Tout corriger</button>
    <button type="button" class="practice-tool-btn ghost" onclick="revealAllPractice(false)">Tout masquer</button>
  </div>`;

  const cards=items.map((it,i)=>renderQcmInteractiveCard(it,i)).join('');
  const introHtml=intro && intro.length>40
    ? `<div class="practice-intro">${escHtml(intro.slice(0,600))}</div>` : '';

  return `<div class="practice-wrap" data-ch="${escHtml(chId)}">
    <div class="practice-hero">
      <div class="practice-kicker">Partie II · Entraînement</div>
      <h2>${escHtml(meta.h)}</h2>
      <p>${escHtml(meta.s)}</p>
    </div>
    ${introHtml}
    ${filters}
    <div class="practice-list">${cards}</div>
  </div>`;
}

window.revealAllPractice=function(open){
  document.querySelectorAll('.pqcm-answer').forEach(el=>{
    if(open) el.removeAttribute('hidden'); else el.setAttribute('hidden','');
  });
  document.querySelectorAll('.pqcm-reveal').forEach(btn=>{
    btn.textContent=open?'Masquer la correction':'Voir la correction';
  });
};

function renderChapter(raw,chId){
  // Practice chapters: dedicated interactive engine (fixes empty A./B. "book" garbage)
  if(chId==='ch18'||chId==='ch19'||chId==='ch20'){
    return renderPracticeChapter(raw, chId);
  }
  const ch=APP_DATA.chapters.find(c=>c.id===chId);
  const titleRe=ch?new RegExp('^'+ch.t.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'\\s*$','i'):null;
  
  // 0. Fix OCR column-merge artifacts: "word1- INJECTED_COLUMN_TEXT\nword1_suffix" → "word1word1_suffix\nINJECTED_COLUMN_TEXT"
  //    This occurs in ECN rubric tables where the "Rubrique" column text was inserted between a split word.
  //    Pattern: lowercase_prefix- [UPPERCASE injected text on same line]\nlowercase_suffix
  let text = raw.replace(
    /([a-zà-öø-ÿœæ]{2,})-[ \t]+([A-ZÀ-ÖØ-ßŒÆ][^\n]{5,})\n([a-zà-öø-ÿœæ]{2,})\b/g,
    (match, pre, injected, post) => `${pre}${post}\n${injected}`
  );

  // 1. Fix hyphens with spaces (OCR hyphenations) with French accent support (suffix must be lowercase)
  text = text.replace(/([a-zA-Zà-öø-ÿœŒæÆÀ-ÖØ-ß]+)-\s+([a-zà-öø-ÿœŒæÆÀ-ÖØ-ß]+)/g, (match, p1, p2) => {
    const prefixes = /^(pré|diffé|repré|dé|con|in|re|trans|inter|intra|co|physio|patho|neuro|ostéo|sympto|cardio|broncho|pneumo|hémato|hépato|néphro|gastro|entéro|myo|dermo|ophtalmo|oto|rhino|laryngo|géronto|géria|psycho|démogra|socio|anthro|biolo|médico|chimio|radiothé|immuno|anti|auto|hyper|hyper|hypo|dys|poly|multi|micro|macro|péri|para|post|supra|infra|extra|ultra|pseudo|semi|hémi|mono|bi|tri|quadri|tétra|penta|hexa|pluri)$/i;
    const normP1Prefix = p1.replace(/[éèêë]/gi, 'e').replace(/[àâä]/gi, 'a').replace(/[ôö]/gi, 'o').replace(/[ùûü]/gi, 'u').replace(/ç/gi, 'c');
    if (prefixes.test(p1) || prefixes.test(normP1Prefix)) {
      return p1 + p2;
    }
    const compoundBases = /^(garde|arc|celui|celle|ceux|celles|moi|toi|soi|nous|vous|lui|leur|eux|y|en|ci|là|bas|haut|arrière|avant|après|entre|sous|sur|sans|contre|non|quasi|vice)$/i;
    if (compoundBases.test(p1)) return p1 + '-' + p2;
    return p1 + p2;
  });

  // 2. Fix standard hyphenations at end of lines (suffix must be lowercase)
  text = text.replace(/([a-zA-Zà-öø-ÿœŒæÆÀ-ÖØ-ß]+)-\s*\n\s*([a-zà-öø-ÿœŒæÆÀ-ÖØ-ß]+)/g, '$1$2');

  // 2b. Strip page headers/footers appended inline by sort=True extraction
  text = text.replace(/\s{3,}(Connaissances|Points|Entraînement|Gériatrie)\s*\d*\s*$/gm, '');
  text = text.replace(/\s{3,}[A-Za-zÀ-ſ][^\n]{5,50}\s+\d{1,3}\s*$/gm, function(m) {
    // Only strip if it looks like a running header (chapter title + page number)
    if (/vieillissement|autonomie|complexit|fragilit|douceur|sensoriel|osseux|articulaire|douleur|mnésique|thymique|confusionnel|chute|alitement|nutritionnel|vésico|prescri|palliatif|dossier|feature|isol/i.test(m)) return '';
    return m;
  });
  // Strip standalone copyright / publisher lines
  text = text.replace(/\n\s*©\s+\d{4}[^\n]*Elsevier[^\n]*\n/g, '\n');
  text = text.replace(/\n\s*Tous\s+droits\s+réservés[^\n]*\n/g, '\n');
  text = text.replace(/\n\s*Gériatrie\s*\n/g, '\n');
  text = text.replace(/\n\s*This page intentionally left blank\s*\n/g, '\n');

  const rawLines = text.replace(/\r\n/g,'\n').split('\n').map(l=>l.trim());
  
  // 3. Preprocess and merge split headings
  const preprocessedLines = [];
  for (let i = 0; i < rawLines.length; i++) {
    let l = rawLines[i];
    if (l === '') {
      if (preprocessedLines.length > 0 && preprocessedLines[preprocessedLines.length - 1] !== '') {
        preprocessedLines.push('');
      }
      continue;
    }
    
    // Merge Roman numeral on its own line followed by title
    if (/^[IVX]+$/.test(l)) {
      if (i + 1 < rawLines.length && rawLines[i+1] && !/[.!?]$/.test(rawLines[i+1]) && rawLines[i+1].length < 100) {
        l = l + '. ' + rawLines[i+1];
        i++;
      }
    }
    // Merge capital letter on its own line followed by title
    else if (/^[A-Z]$/.test(l)) {
      if (i + 1 < rawLines.length && rawLines[i+1] && !/[.!?]$/.test(rawLines[i+1]) && rawLines[i+1].length < 100) {
        l = l + '. ' + rawLines[i+1];
        i++;
      }
    }
    
    // Fix merged letters/numerals on the same line (OCR artifact)
    l = l.replace(/^([IVX]+)\.?\s*([A-ZÀ-ÖØ-ßŒÆ][a-zà-öø-ÿœæ].*)/, '$1. $2');
    
    // For letter headings, prevent modifying ECN rank table rows or prose paragraphs
    const letterM = l.match(/^([A-Z])\.?\s*([A-ZÀ-ÖØ-ßŒÆ][a-zà-öø-ÿœæ].*)/);
    if (letterM) {
      const rest = letterM[2];
      const isEcnTable = /^(Définition|Épidémiologie|Éléments|Prise en charge|Diagnostic|Rubrique|Intitulé|Descriptif|Prévalence|Facteurs|B\s|C\s)/i.test(rest);
      const isProse = /^(Le|La|Les|L'|Il|Elle|Pour|C'est|Ainsi|On|En|Un|Une|Cette|Ce|Cela|De|Du|Des|Dans|Avec|Son|Sa|Ses|Sur|Par|Au|Aux|Tout|Tous|Bien|Mais|Or|Donc|Chez|Après|Avant|Depuis)\b/i.test(rest);
      if (!isEcnTable && !isProse && rest.length <= 80) {
        l = letterM[1] + '. ' + rest;
      }
    }
    
    preprocessedLines.push(l);
  }

  // 4. Filter OCR junk, keeping empty lines for paragraph breaks (protect group titles)
  let lines = preprocessedLines.filter((l,i,arr)=>{
    if(l === '') return true;
    if(RUN_HDR_RE.test(l))return false;
    if(SKIP_LINE_RE.test(l))return false;
    if(titleRe&&titleRe.test(l))return false;
    if(/^Page\s+\d+$/i.test(l))return false;
    if(SYLLABUS_RE.test(l))return false;
    if(SYLLABUS_ROW_RE.test(l))return false;
    if(DIAGRAM_RE.test(l)&&!/Fig\.\s*\d+\.\d+/.test(l))return false;
    if(/^(Connaissances|Points|Entraînement|Gériatrie|Préface|Avant-propos|Sommaire|Table des matières)\s*[\d\s]*$/i.test(l))return false;
    return true;
  });

  // Filter ITEM table rows before first section + kill short garbage
  let firstSec=-1;
  for(let i=0;i<lines.length;i++){if(SECTION_RE.test(lines[i])||LETTER_RE.test(lines[i])){firstSec=i;break}}
  if(firstSec>0){
    lines=lines.filter((l,i)=>{
      if(l === '') return true;
      if(i>=firstSec)return true;
      if(RANG_RE.test(l))return true;
      if(/Situations?\s+de\s+départ/i.test(l))return true;
      if(/^\d{2,3}\s*/.test(l))return true;
      if(BULLET_RE.test(l))return true;
      if(/^En lien avec/i.test(l))return true;
      if(l.length > 40 && /[.!?]/.test(l)) return true;
      if(/gérontologie|gériatrie|vieillissement/i.test(l)) return true;
      return false;
    });
  }
  // Kill remaining short non-sentence fragments (common OCR junk, protecting group titles and mashed table cells)
  lines = lines.filter(l => {
    if(l === '') return true;
    if (l.length >= 50) return true;
    if (RANG_RE.test(l)) return true;
    if (BULLET_RE.test(l) || SECTION_RE.test(l) || LETTER_RE.test(l)) return true;
    if (/^Fig\.|Tableau|Encadré|^\d{2,3}\s*/.test(l)) return true;
    if (/[.!?]$/.test(l)) return true;
    if (l.includes('→')) return true;
    if (/^Situations?\s+de\s+départ/i.test(l)) return true;
    if (/^En lien avec/i.test(l)) return true;
    if (/Question|QRM|key.?feature|mini.?dossier|énoncé/i.test(l)) return true; // protect QA/practice content for ch18-20
    return false;
  });

  // Clean embedded side headers like "Connaissances" that leak from page layout into paragraphs (common in ch1 and others)
  // Also clean copyright, page nums, ▼ Gériatrie markers that sometimes leak
  lines = lines.map(l => l.replace(/\s{3,}(Connaissances|Points clés|Entraînement|Gériatrie|Rang Rubrique|Intitulé Descriptif)\s*/gi, ' ')
                          .replace(/\bConnaissances\s+(?=[•\-])/gi, '')
                          .replace(/▼\s*Gériatrie\s*©\s*\d{4}[^\n]*/gi, '')
                          .replace(/\s+\d{1,3}\s*$/,'') // trailing page nums
                          .replace(/\s*ITEM\s+\d+[\s\-–]*/gi, ' ') // stray ITEM refs
                          .trim());
  // R2 — Filtrer les listes de sections internes (TOC dupliquees dans le corps)
  // Proteger les 40 premieres lignes
  const preambleHeadings = new Set();
  for (let pi = 0; pi < Math.min(lines.length, 40); pi++) {
    if (SECTION_RE.test(lines[pi]) || LETTER_RE.test(lines[pi])) preambleHeadings.add(lines[pi]);
  }
  const isProseLine = (txt) => {
    if (!txt) return false;
    if (SECTION_RE.test(txt) || LETTER_RE.test(txt) || RANG_RE.test(txt) || BULLET_RE.test(txt)) return false;
    if (/^Fig\.|Tableau|Encadré|^\d{2,3}\s+/.test(txt)) return false;
    return txt.length > 10 && /[a-zA-Zà-öø-ÿœŒæÆÀ-ÖØ-ß]/.test(txt);
  };
  const isLongDoc = lines.length > 8;
  lines = lines.filter((l, i) => {
    if(l === '') return true;
    if (isLongDoc && (i < 40 || preambleHeadings.has(l))) return true;
    const isSec = SECTION_RE.test(l);
    const isLet = LETTER_RE.test(l) && !/^[IVX]\./.test(l);
    if (!isSec && !isLet) return true;

    let hasBody = false;
    for (let j = i + 1; j < lines.length; j++) {
      if (!lines[j]) continue;
      if (SECTION_RE.test(lines[j]) || LETTER_RE.test(lines[j])) break;
      if (isProseLine(lines[j])) { hasBody = true; break; }
    }
    if (hasBody) return true;

    const re = isSec ? SECTION_RE : LETTER_RE;
    let nxtFound = false, prvFound = false;
    for (let j = i + 1, cnt = 0; j < lines.length && cnt < 5; j++) {
      if (!lines[j]) continue; cnt++;
      if (re.test(lines[j])) { nxtFound = true; break; }
      if (isProseLine(lines[j])) break;
    }
    for (let j = i - 1, cnt = 0; j >= 0 && cnt < 5; j--) {
      if (!lines[j]) continue; cnt++;
      if (re.test(lines[j])) { prvFound = true; break; }
      if (isProseLine(lines[j])) break;
    }
    return !(nxtFound || prvFound);
  });

  // ── Content hygiene: OCR fragments, consecutive/near-duplicate lines ──
  const normKey = (s) => String(s || '')
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

  // Fix leftover OCR word fragments: "complémentaires plémentaires" → "complémentaires"
  lines = lines.map((l) => {
    if (!l) return l;
    return l
      .replace(/\b([A-Za-zÀ-ÿœŒæÆ]{5,})\s+\1\b/gi, '$1')
      .replace(/\b([A-Za-zÀ-ÿœŒæÆ]{6,})\s+([A-Za-zÀ-ÿœŒæÆ]{4,})\b/g, (m, a, b) => {
        const al = a.toLowerCase(), bl = b.toLowerCase();
        if (bl.length >= 4 && al.endsWith(bl) && al.length - bl.length >= 2) return a;
        if (al.length >= 4 && bl.endsWith(al) && bl.length - al.length >= 2) return b;
        return m;
      })
      .replace(/\s{2,}/g, ' ')
      .trim();
  });

  // Drop consecutive identical lines (page reflow / OCR doubles)
  {
    const deduped = [];
    let prevKey = '';
    for (const l of lines) {
      if (l === '') { deduped.push(l); prevKey = ''; continue; }
      // Never collapse structural headings
      if (SECTION_RE.test(l) || LETTER_RE.test(l) || RANG_RE.test(l) || BULLET_RE.test(l) || /^\d{2,3}\s/.test(l)) {
        deduped.push(l); prevKey = normKey(l); continue;
      }
      const k = normKey(l);
      if (k && k === prevKey && k.length > 24) continue;
      deduped.push(l);
      prevKey = k;
    }
    lines = deduped;
  }

  // Drop near-duplicate long prose that reappears within the same section only
  // (avoids killing legitimate repeated teaching lines under different headings)
  {
    const sectionKeys = new Set();
    const out = [];
    for (const l of lines) {
      if (l === '') { out.push(l); continue; }
      if (SECTION_RE.test(l) || LETTER_RE.test(l)) {
        sectionKeys.clear();
        out.push(l);
        continue;
      }
      if (RANG_RE.test(l) || BULLET_RE.test(l) || /^\d{2,3}\s/.test(l) || l.length < 70) {
        out.push(l);
        continue;
      }
      const k = normKey(l);
      // Only collapse true page-header leaks: long lines reappearing in same section
      if (k.length > 50 && sectionKeys.has(k)) continue;
      out.push(l);
      if (k.length > 50) sectionKeys.add(k);
    }
    lines = out;
  }

  let html='';let paraBuf=[];let bulletBuf=[];let inSection=false;let inSit=false;let sitItems=[];let inCallout=false;let calloutTitle='';let calloutBuf=[];let inNumList=false;let numBuf=[];let pastPreamble=false;let lettrinePlaced=false; let seenFigs=new Set(); let seenTabs=new Set(); let seenFigSrcs=new Set(); let seenTabSrcs=new Set();
  const seenParaKeys = new Set();

  let inQCM = false;
  let qcmStem = [];
  let qcmOpts = [];
  let qcmMax = null;

  function flushQCM() {
    if (!inQCM) return;
    inQCM = false;
    const stemText = qcmStem.join(' ').replace(/\s+/g,' ').trim();
    const cleanOpts = qcmOpts.map(o => String(o||'').replace(/\s+/g,' ').trim()).filter(o => o.length > 1);
    if (!stemText && !cleanOpts.length) { qcmStem=[]; qcmOpts=[]; qcmMax=null; return; }
    // Interactive-style card even in knowledge chapters
    const tmp = {
      label: 'QCM', type: 'QCM', max: qcmMax||'', stem: stemText,
      options: cleanOpts.map((t,i)=>({ letter: String.fromCharCode(65+i), text: t })),
      answer: ''
    };
    // Prefer letter labels if stem already had A. style absorbed into opts
    html += renderQcmInteractiveCard(tmp, Math.floor(Math.random()*1e6));
    qcmStem = [];
    qcmOpts = [];
    qcmMax = null;
  }

  function splitOptions(line) {
    // Support "1. foo 2. bar" AND "A. foo B. bar"
    if (/(?:^|\s)[A-H]\.\s+/.test(line)) {
      return parseLetterOptions(line).map(o => o.letter + '. ' + o.text);
    }
    const parts = line.split(/(?=\b\d{1,2}\.\s+)/);
    const result = [];
    for (let part of parts) {
      part = part.trim();
      if (!part) continue;
      const clean = part.replace(/^\d{1,2}\.\s+/, '');
      if (clean) result.push(clean);
    }
    return result;
  }

  function markBodyStart(){pastPreamble=true}
  function isPreambleLine(l){
    if(/^\d{3}\s+\S/.test(l))return true;
    if(/^ITEM\s/i.test(l))return true;
    if(/^En lien avec/i.test(l))return true;
    if(/^diagnostic et thérapeutique/i.test(l))return true;
    return false;
  }

  // Citations [239, 334] : texte discret — PAS de pastilles “item” qui polluent la lecture
  function replaceCitations(escaped) {
    return escaped.replace(/\[\s*(\d{2,3}(?:\s*,\s*\d{2,3})*)\s*\]/g, (match) => {
      return `<span class="cite-quiet">${match}</span>`;
    });
  }

  function flushPara(rang){
    if(!paraBuf.length)return;
    const merged=paraBuf.join(" ").replace(/\s+/g," ").trim();
    paraBuf=[];
    if(merged.length<12)return;
    // Skip exact paragraph repeats only for long prose (page joins / OCR doubles)
    const pKey = normKey(merged);
    if (pKey.length > 90 && seenParaKeys.has(pKey)) return;
    if (pKey.length > 90) seenParaKeys.add(pKey);
    const chip=rang?`<span class="rang-inline rang-${rang==="A"?"a":"b"}">Rang ${rang}</span>`:"";
    // Pas de lettrine « livre » — lecture type fiche d'étude
    let escaped = replaceCitations(esc(merged));
    html+=`<div class="para-card study-block">${chip}<p>${escaped}</p></div>`;
  }

  function flushBullets(){
    if(!bulletBuf.length)return;
    html+=`<div class="reader-list-card"><ul class="reader-list">${bulletBuf.map(b=>`<li>${replaceCitations(esc(b))}</li>`).join('')}</ul></div>`;
    bulletBuf=[];
  }
  function flushNumList(){
    if(!numBuf.length)return;
    html+=`<div class="reader-list-card"><ol class="reader-list num">${numBuf.map(b=>`<li>${replaceCitations(esc(b))}</li>`).join('')}</ol></div>`;
    numBuf=[];inNumList=false;
  }
  function flushCallout(){
    // Encadrés livre : fondus en prose simple (pas de gros cartons inutiles)
    if(!calloutBuf.length&&!calloutTitle){inCallout=false;return}
    const body = calloutBuf.map(p => replaceCitations(esc(p))).join(' ');
    if(body.length > 20){
      const t = calloutTitle && !/^Encadré\s*[\d.]*$/i.test(calloutTitle) ? calloutTitle : '';
      html += `<div class="para-card study-block note-soft">${t?`<strong class="note-soft-title">${esc(t)}</strong> `:''}<p>${body}</p></div>`;
    }
    calloutBuf=[];calloutTitle='';inCallout=false;
  }
  function closeSection(){if(inSection){html+=`</div></section>`;inSection=false}}
  function flushSituations() {
    if (!inSit) return;
    // Une seule liste compacte repliable — pas de pastilles géantes type “ITEM”
    if (sitItems.length > 0) {
      const items = sitItems.filter(it => it.type !== 'group' || (it.text && it.text.length > 3));
      if (items.length) {
        html += `<details class="situations-details"><summary>Situations de départ (${items.filter(i=>i.type==='item').length})</summary><ul class="situations-list quiet">`;
        for (const item of items) {
          if (item.type === 'group') {
            html += `<li class="sit-group-title">${esc(item.text)}</li>`;
          } else {
            html += `<li><span class="sit-num">${esc(item.num)}</span> ${esc(item.text.replace(/\.$/, ''))}</li>`;
          }
        }
        html += `</ul></details>`;
      }
    }
    inSit = false;
  }

  const first35Headings = new Set();
  const outlineCap = lines.slice(0, 35);
  for (const ol of outlineCap) {
    const om = ol.match(SECTION_RE);
    if (om) {
      const key = om[1] + '|' + om[2];
      first35Headings.add(key);
    }
  }

  for(let i=0;i<lines.length;i++){
    let l=lines[i];
    if(l === '▼'){flushPara();flushBullets();flushNumList();flushCallout();flushSituations();flushQCM();continue}
    if(!l){flushBullets();flushNumList();if(inCallout)flushCallout();continue}

    // QCM Handling (knowledge chapters only — practice uses renderPracticeChapter)
    const isQcmMarker = /^(Question\s+\d+|Réponse\s*:|[AB]\s*QRM\s*\d|QRM\s*\d|QRU\s*\d|KFP\s*\d)/i.test(l);
    if (isQcmMarker) {
      flushPara(); flushBullets(); flushNumList(); flushQCM();
      inQCM = true;
      let targetL = l;
      const maxM = targetL.match(/\[maximum\s+(\d+)\]/i);
      if (maxM) {
        qcmMax = maxM[1];
        targetL = targetL.replace(/\[maximum\s+\d+\]/i, '').trim();
      }
      if (!/^Réponse/i.test(targetL)) qcmStem.push(targetL);
      markBodyStart();
      continue;
    }

    if (inQCM) {
      const isListItem = /^\d{1,2}\.\s+/.test(l) || /^[A-H]\.\s+/.test(l);
      const isMergedListItem = /\b\d{1,2}\.\s+\S/.test(l) || /\b[A-H]\.\s+\S/.test(l);
      // LETTER_RE alone is NOT structural here — A./B. are options
      const isStructural = SECTION_RE.test(l) || /^Situations?\s+de\s+départ/i.test(l) || /^Encadré\s+/i.test(l) || /^Tableau\s+/i.test(l) || /^Fig\.\s*\d/i.test(l) || RANG_RE.test(l) || /^(Question\s+\d+|KFP\s*\d|[AB]\s*QRM)/i.test(l);

      if (isListItem || isMergedListItem) {
        qcmOpts.push(...splitOptions(l));
        markBodyStart();
        continue;
      } else if (isStructural) {
        flushQCM();
        // fall through to reprocess line as normal structure
      } else {
        if (qcmOpts.length > 0) {
          flushQCM();
          // fall through
        } else {
          qcmStem.push(l);
          markBodyStart();
          continue;
        }
      }
    }

    if(/^Situations?\s+de\s+départ/i.test(l)){
      flushBullets();flushNumList();closeSection();
      markBodyStart();
      sitItems = [];
      inSit = true;
      continue;
    }
    if(inSit){
      const trimmedLine = l.trim();
      if (trimmedLine === '' || RUN_HDR_RE.test(trimmedLine) || SKIP_LINE_RE.test(trimmedLine) || /^Page\s+\d+$/i.test(trimmedLine)) {
        continue;
      }
      const isStructural = SECTION_RE.test(trimmedLine) || (LETTER_RE.test(trimmedLine) && !/^[IVX]\./.test(trimmedLine));
      const isSyllabus = SYLLABUS_RE.test(trimmedLine) || /^ITEM\s/i.test(trimmedLine) || SYLLABUS_ROW_RE.test(trimmedLine);
      if (isStructural || isSyllabus) {
        flushSituations();
        i--;
        continue;
      }
      
      const parts = trimmedLine.split(/\s*(?=\b\d{2,3}\b)/);
      let matchedAny = false;
      let tempItems = [];
      for (const part of parts) {
        const trimmedPart = part.trim();
        if (/^En lien avec/i.test(trimmedPart)) {
          tempItems.push({ type: 'group', text: trimmedPart });
          matchedAny = true;
        } else {
          const sm = trimmedPart.match(/^(\d{2,3})\s*(.+)/);
          if (sm) {
            tempItems.push({ type: 'item', num: sm[1], text: sm[2] });
            matchedAny = true;
          }
        }
      }
      
      if (matchedAny) {
        sitItems.push(...tempItems);
        continue;
      }
      
      if (sitItems.length > 0) {
        sitItems[sitItems.length - 1].text += ' ' + trimmedLine;
      } else {
        flushSituations();
        i--;
      }
      continue;
    }

    const enc=l.match(/^Encadré\s+([\d.]+)/i);
    if(enc){flushBullets();flushNumList();flushCallout();calloutTitle='Encadré '+enc[1];inCallout=true;continue}
    if(inCallout){
      if(SECTION_RE.test(l)||LETTER_RE.test(l)||/^Tableau\s+/i.test(l)){flushCallout()}
      else if(BULLET_RE.test(l)){calloutBuf.push(l.match(BULLET_RE)[1]);continue}
      else if(l.length<200){calloutBuf.push(l);continue}
      else flushCallout();
    }

    // Figures: only caption lines starting with Fig. (never mid-paragraph citations)
    // Capture id as d+.d+ only (not "1.1." with trailing dot — that broke lookups)
    const figM=l.match(/^Fig\.?\s*(\d+\.\d+)\.?\s*([AB])?\s*(.*)$/i);
    if(figM){
      flushPara();flushBullets();flushNumList();
      const figId=figM[1];
      const figTitle=(figM[3]||'').trim();
      if(!seenFigs) seenFigs = new Set();
      if(seenFigs.has(figId)) continue;
      seenFigs.add(figId);
      const block = (typeof buildFigureBlock==='function')
        ? buildFigureBlock(figId, figTitle)
        : '';
      if(block) html+=block;
      continue;
    }

    // Tables: caption lines only — reconstituted HTML, never PDF page scans
    const tab=l.match(/^Tableau\s+(\d+\.\d+)\.?\s*([AB])?\s*(.*)$/i);
    if(tab){
      flushPara();flushBullets();flushNumList();
      const tabId=tab[1];
      const tabTitle=((tab[2]?tab[2]+' ':'')+(tab[3]||'')).trim();
      if(!seenTabs) seenTabs = new Set();
      if(seenTabs.has(tabId)) continue;
      seenTabs.add(tabId);
      const block = (typeof buildTableBlock==='function')
        ? buildTableBlock(tabId, tabTitle)
        : `<div class="table-lead"><span class="table-badge">Tableau ${esc(tabId)}</span><span>${esc(tabTitle)}</span></div>`;
      if(block) html+=block;
      continue;
    }

    const secM=l.match(SECTION_RE);
    if(secM){
      if(!pastPreamble){
        let hasSibling = false;
        for (let j = i + 1, cnt = 0; j < lines.length && cnt < 5; j++) {
          if (!lines[j]) continue; cnt++;
          if (SECTION_RE.test(lines[j])) { hasSibling = true; break; }
          if (isProseLine(lines[j])) break;
        }
        for (let j = i - 1, cnt = 0; j >= 0 && cnt < 5; j--) {
          if (!lines[j]) continue; cnt++;
          if (SECTION_RE.test(lines[j])) { hasSibling = true; break; }
          if (isProseLine(lines[j])) break;
        }
        if (hasSibling) {
          html+=`<div class="toc-hidden" style="display:none">${replaceCitations(esc(l))}</div>`;
          continue;
        }
        markBodyStart();
      }
      flushPara();flushBullets();flushNumList();closeSection();
      const secAnchor = 'sec-' + String(secM[1]).replace(/[^A-Za-z0-9]/g,'') + '-' + Math.abs(hashStr(secM[2])).toString(36).slice(0,5);
      html+=`<section class="manual-section" id="${secAnchor}"><header class="section-head"><span class="section-num">${esc(secM[1])}</span><span class="section-title">${esc(secM[2])}</span></header><div class="section-body">`;
      inSection=true;lettrinePlaced=false;continue;
    }

    const letM=l.match(LETTER_RE);
    if(letM&&letM[2].length>2&&!/^[IVX]\./.test(l)){
      const letTitle = letM[2].trim();
      // Skip empty / garbage / MCQ options (A. passage infirmier…) — not book sub-heads
      const isMcqOpt = letTitle.length < 90 && /^(passage|personne|il faut|faire |utiliser |s'alimenter|les |le |la |une |un |des |du |de |auxiliaire|kinésithérapeute|orthophoniste|aide |séances |calcul |normalisation )/i.test(letTitle);
      const looksLikeTitle = letTitle.length >= 4 && letTitle.length <= 90 && !/[.!?]$/.test(letTitle) && /^[A-ZÀ-ÖØ-Þ]/.test(letTitle) && !isMcqOpt;
      if (!looksLikeTitle) {
        // Keep as prose/bullet instead of empty sub-head
        if (isMcqOpt || /^[A-H]\.\s+\S/.test(l)) {
          flushPara(); flushNumList();
          bulletBuf.push(letM[1] + '. ' + letTitle);
          continue;
        }
        paraBuf.push(l);
        continue;
      }
      if(!pastPreamble){
        let hasSibling = false;
        for (let j = i + 1, cnt = 0; j < lines.length && cnt < 5; j++) {
          if (!lines[j]) continue; cnt++;
          if (LETTER_RE.test(lines[j])) { hasSibling = true; break; }
          if (isProseLine(lines[j])) break;
        }
        for (let j = i - 1, cnt = 0; j >= 0 && cnt < 5; j--) {
          if (!lines[j]) continue; cnt++;
          if (LETTER_RE.test(lines[j])) { hasSibling = true; break; }
          if (isProseLine(lines[j])) break;
        }
        if (hasSibling) {
          html+=`<div class="toc-hidden" style="display:none">${replaceCitations(esc(l))}</div>`;
          continue;
        }
        markBodyStart();
      }
      flushPara();flushBullets();flushNumList();
      html+=`<h3 class="sub-head"><span class="sub-letter">${esc(letM[1])}</span> ${esc(letTitle)}</h3>`;
      continue;
    }

    const numM=l.match(NUM_LIST_RE);
    if(numM&&numM[2].length<120){
      flushBullets();
      inNumList=true;numBuf.push(numM[2]);continue;
    }
    if(inNumList&&/^[a-zà-öø-ÿœŒæÆÀ-ÖØ-ß]/.test(l)&&l.length<100&&!SECTION_RE.test(l)){numBuf.push(l);continue}
    if(inNumList)flushNumList();

    // Arrow-list: "Vasculaire → Rigidité artérielle." → structured list
    const arrowM = l.match(/^([A-ZÀ-ÞŒÆ][\wÀ-öø-ÿœæ\s]{2,30})\s*[→]\s*(.+)[.;]?$/);
    if (arrowM) {
      flushPara(); flushBullets(); flushNumList();
      const arrowItems = [`<span class="arrow-key">${esc(arrowM[1].trim())}</span><span class="arrow-sep">→</span><span class="arrow-val">${esc(arrowM[2].trim())}</span>`];
      let j = i + 1;
      while (j < lines.length) {
        const am = lines[j].match(/^([A-ZÀ-ÞŒÆ][\wÀ-öø-ÿœæ\s]{2,30})\s*[→]\s*(.+)[.;]?$/);
        if (!am) break;
        arrowItems.push(`<span class="arrow-key">${esc(am[1].trim())}</span><span class="arrow-sep">→</span><span class="arrow-val">${esc(am[2].trim())}</span>`);
        j++;
      }
      html += `<div class="reader-list-card"><ul class="reader-list arrow-list">${arrowItems.map(it => `<li>${it}</li>`).join('')}</ul></div>`;
      i = j - 1; markBodyStart(); continue;
    }

    const bulM=l.match(BULLET_RE);
    const isAutoBullet = bulM || l.endsWith(';') || (bulletBuf.length > 0 && l.endsWith('.'));
    if(isAutoBullet && !SECTION_RE.test(l) && !LETTER_RE.test(l) && !RANG_RE.test(l)){
      flushNumList();
      const cleanL = l.replace(/^[•\-–]\s*/, '');
      bulletBuf.push(cleanL);
      continue;
    }
    // Bullet continuation: if we have bullets and line is not structural, append to last bullet (must start with lowercase)
    if(bulletBuf.length){
      const isStruct=SECTION_RE.test(l)||LETTER_RE.test(l)||/^Situations?\s+de\s+départ/i.test(l)||/^Encadré\s+/i.test(l)||/^Tableau\s+/i.test(l)||/^Fig\.\s*\d/i.test(l)||RANG_RE.test(l)||/^\d{2,3}\s+/.test(l);
      if(!isStruct&&/^[a-zà-öø-ÿœŒæÆÀ-ÖØ-ß]/.test(l)&&l.length<200){
        bulletBuf[bulletBuf.length-1]+=' '+l;continue;
      }
      flushBullets();
    }

    // OCR from multi-panel figures can yield isolated labels such as
    // "A B", "D E" or "C D 0 2 ...". They are captions, not Rang cards.
    if(/^[A-E](?:\s+[A-E])?(?:\s+\d+)*$/.test(l))continue;

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
        flushPara();html+=`<div class="def-block"><span class="rang-badge ${rangM[1]==='A'?'rang-a':'rang-b'}">Rang ${rangM[1]}</span><span class="def-text">${replaceCitations(esc(body))}</span></div>`;
        continue;
      }
      paraBuf.push(body);flushPara(rangM[1]);markBodyStart();continue;
    }

    if(!pastPreamble){
      if(isPreambleLine(l))continue;
      markBodyStart();
    }

    if(/^Critères de /i.test(l) && l.length < 60){flushPara();
      let j=i+1;const critItems=[];
      while(j<lines.length&&NUM_LIST_RE.test(lines[j])){const nm=lines[j].match(NUM_LIST_RE);critItems.push(`<li>${esc(nm[2])}</li>`);j++}
      if(critItems.length>0){html+=`<div class="callout callout-soft"><div class="callout-title">${esc(l)}</div><ul class="reader-list">${critItems.join('')}</ul></div>`;}
      else{html+=`<div class="callout callout-soft"><div class="callout-title">${esc(l)}</div></div>`;}
      i=j-1;continue}

    if(/^(\d{1,3})$/.test(l))continue;
    if(/^diagnostic et thérapeutique/i.test(l))continue;
    if(/^\w{4,20}$/.test(l)&&!/^(Fig|Tableau|Encadré)/i.test(l))continue;
    if(/^[→\u25bc]$/.test(l.trim()))continue;
    if(l.length<15&&!/[.!?]/.test(l)&&!/^[A-Z]\./.test(l)&&!BULLET_RE.test(l)&&!SECTION_RE.test(l)&&!LETTER_RE.test(l))continue;
    // Bruit OCR : légendes de schéma déjà remplacées par l'image FIGURES
    if(/^(Fonction|d'organe|Réserve fonctionnelle|Seuil d'insuffisance|Effet de l'intervention|100\s*%|0\s*Âge)\b/i.test(l)) continue;
    if(/^\d\s+(Vieillissement|Maladie|Stress)\b/i.test(l)) continue;
    // Lignes "239 Explication…" hors bloc situations = numéros de situation EDN, pas utiles en corps
    if(/^\d{2,3}\s+[A-ZÀ-ÖØ-Þ]/.test(l) && SITUATION_NUMBERS.has(parseInt(l,10))) continue;
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
  flushPara();flushBullets();flushNumList();flushQCM();if(inCallout)flushCallout();flushSituations();closeSection();
  // Strip empty sub-heads and empty paragraphs (OCR debris)
  html = html.replace(/<h3 class="sub-head"><span class="sub-letter">[^<]*<\/span>\s*<\/h3>/g, '');
  html = html.replace(/<div class="para-card(?: study-block)?"><p>\s*<\/p><\/div>/g, '');
  html = html.replace(/<div class="para-card(?: study-block)?"><p>(.{1,12})<\/p><\/div>/g, (m, t) => {
    // Drop tiny OCR crumb paragraphs
    if (/^[\d\s.,;:–—\-]+$/.test(t) || t.trim().length < 8) return '';
    return m;
  });
  html = html.replace(/<div class="def-block"><span class="rang-badge[^"]*">[^<]*<\/span><span class="def-text">\s*<\/span><\/div>/g, '');
  // Drop empty list cards and empty p tags
  html = html.replace(/<div class="reader-list-card"><ul class="reader-list"><\/ul><\/div>/g, '');
  html = html.replace(/<p>\s*<\/p>/g, '');
  // Never render leaked CSS/JS fragments as prose
  html = html.replace(/<div class="para-card[^"]*"[^>]*>[\s\S]*?(?:\.bouchon-svg|@keyframes|stroke-dashoffset)[\s\S]*?<\/div>/gi, '');
  // R3 — remove empty sections (class may include id= attributes)
  html = html.replace(/<section class="manual-section"[^>]*>([\s\S]*?)<\/section>/g, (match, inner) => {
    const bodyIndex = inner.indexOf('<div class="section-body">');
    if (bodyIndex === -1) return '';
    const bodyHtml = inner.substring(bodyIndex + '<div class="section-body">'.length);
    const cleanBodyHtml = bodyHtml.replace(/<\/div>\s*$/, '');
    let text = cleanBodyHtml.replace(/<[^>]+>/g, '');
    text = text.replace(/&nbsp;/gi, ' ')
               .replace(/&lt;/gi, '<')
               .replace(/&gt;/gi, '>')
               .replace(/&amp;/gi, '&')
               .replace(/&[a-z0-9]+;/gi, '');
    const plainText = text.trim();
    if (plainText.length < 20) {
      return '';
    }
    return match;
  });

  // Outline from kept sections (regex allows id= on section)
  const first35Nums = new Set();
  for (const key of first35Headings) {
    const bar = key.indexOf('|');
    if (bar > 0) first35Nums.add(key.substring(0, bar));
  }
  const keptSections = [];
  const secRegex = /<section class="manual-section"[^>]*>\s*<header class="section-head"><span class="section-num">(.*?)<\/span><span class="section-title">(.*?)<\/span>/g;
  let match;
  while ((match = secRegex.exec(html)) !== null) {
    const num = match[1];
    const title = match[2];
    const key = num + '|' + title;
    if (first35Headings.has(key) || first35Nums.has(num)) {
      // capture id from full match window
      const openTag = html.slice(match.index, match.index + 120);
      const idM = openTag.match(/\bid="([^"]+)"/);
      keptSections.push({ num, title, id: idM ? idM[1] : '' });
    }
  }

  // Prefer first35 TOC sections; if filter too strict, fall back to all kept sections with titles
  let outlineSrc = keptSections.filter(s => s.num && s.title && String(s.title).trim().length > 1);
  if (outlineSrc.length < 3) {
    // Rebuild from all rendered sections with non-empty titles
    outlineSrc = [];
    const allSecRe = /<section class="manual-section"[^>]*\bid="([^"]*)"[^>]*>\s*<header class="section-head"><span class="section-num">([^<]*)<\/span><span class="section-title">([^<]*)<\/span>/g;
    let am;
    while ((am = allSecRe.exec(html)) !== null) {
      if (am[2].trim() && am[3].trim()) outlineSrc.push({ id: am[1], num: am[2], title: am[3] });
    }
  }
  // Keep threshold at 3 (matches TOC richness of real chapters; ch2/ch17 stay clean)
  if (outlineSrc.length >= 3) {
    const outlineItems = outlineSrc.slice(0, 14).map((s, i) => {
      const href = s.id || ('sec-auto-' + i);
      return `<li><a href="#${href}" class="outline-link"><span class="outline-num">${esc(s.num)}</span> ${esc(s.title)}</a></li>`;
    }).join('');
    // Plan: NOT sticky (sticky covered body text on scroll). Collapsed by default on narrow screens via CSS.
    const outlineHtml = `<nav class="ch-outline ch-outline-nav collapsed" aria-label="Plan du chapitre">
      <div class="outline-hd">
        <span>Plan du chapitre</span>
        <button type="button" class="outline-toggle" aria-expanded="false" onclick="(function(b){var n=b.closest('.ch-outline');var on=n.classList.toggle('collapsed');b.setAttribute('aria-expanded', on?'false':'true');b.textContent=on?'afficher':'masquer';})(this)">afficher</button>
      </div>
      <ul class="outline-list">${outlineItems}</ul>
    </nav>`;
    html = outlineHtml + html;
  }

  // Highlight key summary points
  html = html.replace(/<div class="para-card study-block"><p>([^<]*(?:Les deux éléments clefs du bien vieillir|points clés|à retenir|en pratique|mémo)[^<]*)<\/p><\/div>/gi,
    '<div class="para-card key-point"><p>$1</p></div>');
  html = html.replace(/<div class="para-card"><p>([^<]*(?:Les deux éléments clefs du bien vieillir|points clés (?:du bien vieillir|sur les|du diabète|sur les vaccins))[^<]*)<\/p><\/div>/gi,
    '<div class="para-card key-point"><p>$1</p></div>');

  // Build "Points clés" panel from key-points + def-blocks + rang badges
  const keySnips = [];
  const kpRe = /class="(?:para-card key-point|key-point|def-block)"[^>]*>([\s\S]*?)<\/div>/gi;
  let km;
  while ((km = kpRe.exec(html)) !== null && keySnips.length < 6) {
    const plain = km[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    if (plain.length > 30 && plain.length < 320) keySnips.push(plain);
  }
  // Also pull first rang-A one-liners
  const raRe = /rang-inline rang-a[\s\S]*?<\/span>([^<]{20,160})/gi;
  while ((km = raRe.exec(html)) !== null && keySnips.length < 8) {
    const plain = km[1].replace(/\s+/g, ' ').trim();
    if (plain.length > 24) keySnips.push(plain);
  }
  if (keySnips.length >= 2) {
    const kpHtml = `<aside class="key-panel" aria-label="Points clés">
      <div class="key-panel-hd">⚡ Points clés</div>
      <ul class="key-panel-list">${keySnips.slice(0, 6).map(k => `<li>${esc(k)}</li>`).join('')}</ul>
    </aside>`;
    html = kpHtml + html;
  }

  // Final pass to remove any remaining embedded headers inside paragraphs
  html = html.replace(/>([^<]*?)\s{2,}(Connaissances|Points clés|Gériatrie ©)[^<]{0,30}</gi, '>$1<');

  // Append NotebookLM/2024 Updates
  let updatesHtml = '';
  if (chId === 'ch9') {
    updatesHtml = `
      <div class="note-box update-2024" style="margin-top:20px; padding:16px; background:rgba(20, 184, 166, 0.1); border-left:4px solid var(--accent); border-radius:4px;">
        <h3 style="margin-top:0; color:var(--accent);">💡 Nouvelles Recommandations SFGG 2024 (Prise en charge des SPC)</h3>
        <p><strong>Nouveau paradigme :</strong> Le symptôme psycho-comportemental (agitation, cris, agressivité) n'est pas la maladie à éteindre par sédation immédiate, mais un signal d'alarme à décoder (expression d'une détresse).</p>
        <p><strong>Enquête étiologique systématique en urgence :</strong></p>
        <ul style="padding-left:20px; margin:8px 0;">
          <li><span class="sit-badge-inline">Douleur</span> : Évaluer via Algoplus ou Doloplus (douleur non contrôlée : arthrose, fracture).</li>
          <li><span class="sit-badge-inline">Globe</span> : Rechercher une rétention aiguë d'urines (globe vésical).</li>
          <li><span class="sit-badge-inline">Fécalome</span> : Constipation sévère ou occlusion sous-jacente.</li>
          <li><span class="sit-badge-inline">Infection</span> : Rechercher une infection silencieuse (pneumopathie, infection urinaire).</li>
        </ul>
        <p style="margin-bottom:0; font-size:0.8rem; color:var(--text3);"><em>Source : NotebookLM - BPSD Clinical Management 2024</em></p>
      </div>
    `;
  } else if (chId === 'ch14') {
    updatesHtml = `
      <div class="note-box update-2024" style="margin-top:20px; padding:16px; background:rgba(20, 184, 166, 0.1); border-left:4px solid var(--accent); border-radius:4px;">
        <h3 style="margin-top:0; color:var(--accent);">💡 Critères Diagnostiques de la Dénutrition (HAS 2021)</h3>
        <p>Diagnostic de la dénutrition chez le sujet âgé (≥ 70 ans) : <strong>1 critère phénotypique + 1 critère étiologique</strong>.</p>
        <p><strong>Critères Phénotypiques :</strong></p>
        <ul style="padding-left:20px; margin:8px 0;">
          <li>Perte de poids ≥ 5% en 1 mois, ou ≥ 10% en 6 mois, ou ≥ 10% par rapport au poids habituel avant le début de la maladie.</li>
          <li>Indice de Masse Corporelle (IMC) &lt; 22 kg/m².</li>
          <li>Sarcopénie : diminution de la masse et/ou de la force musculaire.</li>
        </ul>
        <p><strong>Critères Étiologiques :</strong></p>
        <ul style="padding-left:20px; margin:8px 0;">
          <li>Diminution de la prise alimentaire ≥ 50% pendant plus d'une semaine, ou toute réduction des apports pendant plus de 2 semaines.</li>
          <li>Absorption réduite (malabsorption, syndrome de grêle court).</li>
          <li>Situation d'agression (hypercatabolisme avec ou sans syndrome inflammatoire) : pathologie aiguë, cancer, infection, chirurgie.</li>
        </ul>
        <p><strong>Dénutrition Sévère :</strong> Si IMC &lt; 20 ou perte de poids ≥ 10% en 1 mois (ou ≥ 15% en 6 mois) ou albuminémie &lt; 30 g/l.</p>
        <p style="margin-bottom:0; font-size:0.8rem; color:var(--text3);"><em>Source : NotebookLM - HAS Nutrition 2021</em></p>
      </div>
    `;
  } else if (chId === 'ch20') {
    updatesHtml = `
      <div class="note-box update-2024" style="margin-top:20px; padding:16px; background:rgba(20, 184, 166, 0.1); border-left:4px solid var(--accent); border-radius:4px;">
        <h3 style="margin-top:0; color:var(--accent);">💡 Loi Claeys-Leonetti 2016 & Directives Anticipées</h3>
        <p><strong>Directives Anticipées (DA) :</strong> Déclarations rédigées par toute personne majeure pour préciser ses volontés concernant sa fin de vie (refus ou limitation de traitements). Elles sont <strong>contraignantes</strong> pour le médecin, sauf en cas d'urgence vitale ou si elles apparaissent manifestement inappropriées à la situation médicale (décision collégiale obligatoire).</p>
        <p><strong>Personne de Confiance :</strong> Désignée par écrit. Son témoignage prévaut sur tout autre témoignage de la famille en cas d'incapacité d'expression du patient.</p>
        <p><strong>Sédation Profonde et Continue jusqu'au Décès (SPCD) :</strong> Droit pour le patient d'éviter toute souffrance et de ne pas subir d'obstination déraisonnable. Mise en œuvre dans 3 situations cliniques précises :</p>
        <ol style="padding-left:20px; margin:8px 0;">
          <li>Patient conscient atteint d'une maladie grave et incurable, dont le pronostic est engagé à court terme, présentant une souffrance réfractaire et <strong>formulant lui-même une demande explicite et réitérée</strong> de sédation ;</li>
          <li>Patient hors d'état d'exprimer sa volonté, dans le cadre d'un arrêt de traitement de maintien en vie au titre du refus de l'obstination déraisonnable, susceptible d'entraîner une souffrance insupportable ;</li>
          <li>Patient hors d'état d'exprimer sa volonté, <strong>en phase agonique avancée (fin de vie imminente) avec des souffrances réfractaires documentées</strong>.</li>
        </ol>
        <p style="margin-bottom:0; font-size:0.8rem; color:var(--text3);"><em>Source : NotebookLM - Fin de vie Claeys-Leonetti</em></p>
      </div>
    `;
  } else if (chId === 'ch3') {
    updatesHtml = `
      <div class="note-box update-2024" style="margin-top:20px; padding:16px; background:rgba(20, 184, 166, 0.1); border-left:4px solid var(--accent); border-radius:4px;">
        <h3 style="margin-top:0; color:var(--accent);">💡 Grille AGGIR & Outil PATHOS</h3>
        <p><strong>Grille AGGIR :</strong> Évalue l'autonomie à travers 10 variables discriminantes (physiques et psychiques) : <em>Cohérence, Orientation, Toilette, Habillage, Alimentation, Élimination, Transferts, Déplacements intérieurs, Déplacements extérieurs, Communication</em>.</p>
        <p><strong>Outil PATHOS :</strong> Évalue les profils de soins requis (ressources médicales et soignantes nécessaires dans l'établissement) à travers 12 profils cliniques. Combiné à AGGIR (le GMG : GIR Moyen Pondéré), il détermine le budget soins des EHPAD.</p>
        <p style="margin-bottom:0; font-size:0.8rem; color:var(--text3);"><em>Source : NotebookLM - AGGIR et PATHOS</em></p>
      </div>
    `;
  }
  if (updatesHtml) {
    html += updatesHtml;
  }

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
    const elements = [
      ...cc.querySelectorAll('p'),
      ...cc.querySelectorAll('.def-block'),
      ...cc.querySelectorAll('h2'),
      ...cc.querySelectorAll('h3')
    ];
    for(const el of elements){
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
function closeConceptModal(){ document.getElementById('conceptModal')?.classList.remove('open'); }

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
  if(!toolbar&&grid){
    toolbar=document.createElement('div');
    toolbar.id='synthToolbar';
    toolbar.className='synth-toolbar';
    const parent=grid.parentNode||view;
    if(parent) parent.insertBefore(toolbar,grid);
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
// flashChapFilter declared at top with flashIdx/flashDeck (must not redeclare — TDZ broke boot)

function populateChapFilter() {
  const sel = document.getElementById('flashChapFilter');
  if (!sel || sel.options.length > 1) return;
  if (typeof APP_DATA !== 'undefined' && APP_DATA.chapters) {
    APP_DATA.chapters.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c.id;
      opt.textContent = c.t;
      sel.appendChild(opt);
    });
  }
}

function filterFlashChap(val) {
  flashChapFilter = val;
  loadFlashDeck();
}

function loadFlashDeck() {
  flashDeck = filterDeck();
  flashIdx = 0;
  renderFlashcard();
}

function shuffleFlash() {
  for(let i=flashDeck.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [flashDeck[i],flashDeck[j]]=[flashDeck[j],flashDeck[i]];
  }
  flashIdx = 0;
  renderFlashcard();
}

/** Collect every flashcard source (shared by flash tab + BrainFeed). */
function collectAllFlashcards(){
  const all = [];
  const push = (arr) => {
    if (Array.isArray(arr) && arr.length) all.push(...arr);
  };
  push(typeof FLASHCARDS !== 'undefined' ? FLASHCARDS : null);
  push(typeof FLASHCARDS_A !== 'undefined' ? FLASHCARDS_A : null);
  push(typeof FLASHCARDS_B !== 'undefined' ? FLASHCARDS_B : null);
  push(typeof FLASHCARDS_C !== 'undefined' ? FLASHCARDS_C : null);
  push(typeof FLASHCARDS_MEMOS !== 'undefined' ? FLASHCARDS_MEMOS : null);
  push(typeof FLASHCARDS_EXPANDED !== 'undefined' ? FLASHCARDS_EXPANDED : null);
  push(typeof REVISION_FLASHCARDS !== 'undefined' ? REVISION_FLASHCARDS : null);
  push(typeof MEGA_FLASHCARDS !== 'undefined' ? MEGA_FLASHCARDS : null);
  push(typeof EVC_FLASHCARDS !== 'undefined' ? EVC_FLASHCARDS : null);
  push(typeof MEGA_FLASHCARDS_2 !== 'undefined' ? MEGA_FLASHCARDS_2 : null);
  push(typeof MEGA_FLASHCARDS_3 !== 'undefined' ? MEGA_FLASHCARDS_3 : null);
  push(typeof MEGA_FLASHCARDS_4 !== 'undefined' ? MEGA_FLASHCARDS_4 : null);
  push(typeof MEGA_FLASHCARDS_5 !== 'undefined' ? MEGA_FLASHCARDS_5 : null);
  push(typeof MEGA_FLASHCARDS_6 !== 'undefined' ? MEGA_FLASHCARDS_6 : null);
  push(typeof MEGA_FLASHCARDS_7 !== 'undefined' ? MEGA_FLASHCARDS_7 : null);
  push(typeof MEGA_FLASHCARDS_8 !== 'undefined' ? MEGA_FLASHCARDS_8 : null);
  push(typeof MEGA_FLASHCARDS_9 !== 'undefined' ? MEGA_FLASHCARDS_9 : null);
  push(typeof MEGA_FLASHCARDS_10 !== 'undefined' ? MEGA_FLASHCARDS_10 : null);
  return all;
}
window.collectAllFlashcards = collectAllFlashcards;

function filterDeck(){
  const all = collectAllFlashcards();

  all.sort((a, b) => {
    const numA = parseInt((a.chapter || '').replace('ch', '')) || 999;
    const numB = parseInt((b.chapter || '').replace('ch', '')) || 999;
    return numA - numB;
  });

  return all.filter(c => {
    if (!c || c._deleted) return false;
    if (!c.question && !c.q) return false;
    // Normalize alt field names (revision aids use q/a)
    if (!c.question && c.q) c.question = c.q;
    if (!c.answer && c.a) c.answer = c.a;
    const matchRang = (flashFilter === 'all' || c.rang === flashFilter || (!c.rang && flashFilter === 'all'));
    const matchChap = (flashChapFilter === 'all' || c.chapter === flashChapFilter);
    return matchRang && matchChap;
  });
}
function filterFlash(rang,btn){flashFilter=rang;document.querySelectorAll('.flash-filt').forEach(b=>b.classList.remove('active'));if(btn)btn.classList.add('active');loadFlashDeck()}
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
    // One retry: data may have loaded after first empty boot attempt
    const rawN = typeof collectAllFlashcards==='function' ? collectAllFlashcards().length : 0;
    if(rawN>0 && !renderFlashcard._retried){
      renderFlashcard._retried=true;
      loadFlashDeck();
      renderFlashcard._retried=false;
      return;
    }
    card.classList.add('flash-empty-state');
    const flashCh=document.getElementById('flashCh'); if(flashCh) flashCh.textContent='';
    const flashRang=document.getElementById('flashRang'); if(flashRang) flashRang.textContent='';
    const fq=document.getElementById('flashQ');
    if(fq){
      fq.innerHTML='';
      const empty=document.createElement('div');
      empty.className='flash-empty-inner';
      empty.innerHTML=rawN===0
        ? '<div class="empty-icon">🎴</div><div class="empty-text">Cartes non chargées</div><div class="empty-hint">Ctrl+F5 pour recharger le bundle (data-bundle.js)</div>'
        : '<div class="empty-icon">🎴</div><div class="empty-text">Aucune carte pour ce filtre</div><div class="empty-hint">Essayez « Tous » ou un autre rang ('+rawN+' cartes dispo)</div>';
      fq.appendChild(empty);
    }
    const flashA=document.getElementById('flashA'); if(flashA) flashA.textContent='';
    const flashTags=document.getElementById('flashTags'); if(flashTags) flashTags.innerHTML='';
    const flashProg=document.getElementById('flashProg'); if(flashProg) flashProg.textContent='0 / 0';
    return;
  }
  card.classList.remove('flash-empty-state');
  const c=flashDeck[flashIdx];
  if(!c) return;
  const chapters=(typeof APP_DATA!=='undefined'&&APP_DATA.chapters)||[];
  const chName=chapters.find(ch=>ch.id===c.chapter)?.t||'';
  const flashCh=document.getElementById('flashCh'); if(flashCh) flashCh.textContent=chName;
  const r=document.getElementById('flashRang');
  if(r){
    r.textContent='Rang '+(c.rang||'?');
    r.className='flash-rang '+(c.rang==='A'?'rang-a':'rang-b');
  }
  const fq=document.getElementById('flashQ');
  if(fq) fq.textContent=c.question||'';
  const flashA=document.getElementById('flashA'); if(flashA) flashA.textContent=c.answer||'';
  const flashTags=document.getElementById('flashTags');
  if(flashTags) flashTags.innerHTML=(c.tags||[]).map(t=>'<span class="tag">'+t+'</span>').join('');
  const flashProg=document.getElementById('flashProg');
  if(flashProg) flashProg.textContent=(flashIdx+1)+' / '+flashDeck.length;
  card.classList.toggle('rev-rang-a', c.rang==='A');
  card.classList.toggle('rev-rang-b', c.rang==='B');
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
function mergeSujetsPools(){
  const chunks=[];
  const push=(arr)=>{if(Array.isArray(arr)&&arr.length)chunks.push(arr);};
  push(typeof SUJETS_EVC_COMPLETS!=='undefined'?SUJETS_EVC_COMPLETS:null);
  push(typeof SUJETS_EVC_2004_2006!=='undefined'?SUJETS_EVC_2004_2006:null);
  push(typeof SUJETS_EVC_2007_2009!=='undefined'?SUJETS_EVC_2007_2009:null);
  push(typeof SUJETS_EVC_2010_2012!=='undefined'?SUJETS_EVC_2010_2012:null);
  push(typeof SUJETS_EVC_2013_2015!=='undefined'?SUJETS_EVC_2013_2015:null);
  push(typeof SUJETS_EVC_2016_2018!=='undefined'?SUJETS_EVC_2016_2018:null);
  push(typeof SUJETS_EVC_2019_2021!=='undefined'?SUJETS_EVC_2019_2021:null);
  push(typeof SUJETS_EVC_CLASSIQUES!=='undefined'?SUJETS_EVC_CLASSIQUES:null);
  push(typeof SUJETS_EVC_EXTRA!=='undefined'?SUJETS_EVC_EXTRA:null);
  push(typeof SUJETS_EVC_DETAIlLES!=='undefined'?SUJETS_EVC_DETAIlLES:null);
  push(typeof SUJETS_EVC_FIN!=='undefined'?SUJETS_EVC_FIN:null);
  push(typeof SUJETS_EVC_ITEMS!=='undefined'?SUJETS_EVC_ITEMS:null);
  push(typeof SUJETS_EVC_SUPP!=='undefined'?SUJETS_EVC_SUPP:null);
  const seen=new Set();const out=[];
  chunks.flat().forEach(s=>{
    if(!s)return;
    const k=s.id||`${s.annee||0}-${s.session||''}-${String(s.sujet||'').slice(0,48)}`;
    if(seen.has(k))return;
    seen.add(k);out.push(s);
  });
  return out.sort((a,b)=>(Number(b.annee)||0)-(Number(a.annee)||0));
}
function renderSujets(){
  const el=document.getElementById('sujetsContent');
  const filtEl=document.getElementById('sujetsFilters');
  if(!el)return;
  const all=mergeSujetsPools();
  if(!all.length){
    el.innerHTML='<div class="empty"><div class="empty-icon">📋</div><div class="empty-text">Aucun sujet disponible</div></div>';return;
  }
  const years=[...new Set(all.map(s=>s.annee).filter(Boolean))].sort((a,b)=>b-a);
  if(filtEl){
    filtEl.innerHTML=`<div class="ann-filter-bar">
      <select id="sujYearFilter" onchange="filterSujets()"><option value="">Toutes les années</option>${years.map(y=>`<option value="${y}">${y}</option>`).join('')}</select>
      <span class="ann-count" id="sujCount">${all.length} sujets</span>
    </div>`;
  }
  window._sujets=all;
  window.filterSujets=function(){
    const yf=document.getElementById('sujYearFilter');
    const y=yf?yf.value:'';
    let list=window._sujets;
    if(y)list=list.filter(s=>String(s.annee)===y);
    const cnt=document.getElementById('sujCount');if(cnt)cnt.textContent=list.length+' sujets';
    renderSujetsList(list);
  };
  renderSujetsList(all);
}
function renderSujetsList(list){
  const el=document.getElementById('sujetsContent');if(!el)return;
  if(!list.length){el.innerHTML='<div class="empty"><div class="empty-text">Aucun sujet pour ce filtre</div></div>';return;}
  el.innerHTML=list.map(s=>`
    <div class="sujet-card">
      <div class="sujet-header">
        <span class="sujet-annee">${s.annee} — ${s.session||''}</span>
        <span class="sujet-duree">⏱ ${s.duree||'—'}</span>
        <span class="sujet-bareme">📊 ${s.bareme||'—'}</span>
      </div>
      <div class="sujet-consigne"><strong>Consigne :</strong> ${esc(s.consigne||'')}</div>
      <div class="sujet-body">
        <div class="sujet-text" id="sujet-text-${s.id}">${esc(s.sujet||'').replace(/\n/g,'<br>')}</div>
        <button class="ann-reveal-btn" onclick="var e=document.getElementById('sujet-corrige-${s.id}');e.style.display=e.style.display==='none'?'block':'none';this.textContent=e.style.display==='none'?'Voir le corrigé':'Masquer le corrigé'">Voir le corrigé</button>
        <div class="sujet-corrige" id="sujet-corrige-${s.id}" style="display:none">
          <div class="sujet-corrige-title">📝 Corrigé détaillé</div>
          <div class="sujet-corrige-text">${esc(s.corrigé||s.corrige||'').replace(/\n/g,'<br>')}</div>
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
  if(typeof ANNALES_V2!=='undefined')all.push(...ANNALES_V2.map(a=>({...a,_src:'v2'})));
  if(typeof CAS_INTERACTIFS!=='undefined')all.push(...CAS_INTERACTIFS.map(a=>({...a,_src:'cas'})));
  if(typeof SITUATIONS_EVC!=='undefined')all.push(...SITUATIONS_EVC.map(a=>({...a,_src:'situations'})));
  if(typeof MEGA_CASES!=='undefined')all.push(...MEGA_CASES.map(a=>({...a,_src:'mega'})));
  if(typeof CAS_EVC_2024!=='undefined')all.push(...CAS_EVC_2024.map(a=>({...a,year:a.year||2024,_src:'evc24'})));
  if(typeof CAS_EVC_2023!=='undefined')all.push(...CAS_EVC_2023.map(a=>({...a,year:a.year||2023,_src:'evc23'})));
  if(typeof CAS_EVC_2020_2022!=='undefined')all.push(...CAS_EVC_2020_2022.map(a=>({...a,year:a.year||(a.id.includes('20')?2020:(a.id.includes('21')?2021:2022)),_src:'evc20_22'})));
  if(typeof CAS_EVC_2018_2019!=='undefined')all.push(...CAS_EVC_2018_2019.map(a=>({...a,year:a.year||(a.id.includes('18')?2018:2019),_src:'evc18_19'})));
  if(typeof CAS_EVC_2015_2017!=='undefined')all.push(...CAS_EVC_2015_2017.map(a=>({...a,year:a.year||(a.id.includes('15')?2015:(a.id.includes('16')?2016:2017)),_src:'evc15_17'})));
  if(typeof CAS_EVC_2010_2014!=='undefined')all.push(...CAS_EVC_2010_2014.map(a=>({...a,year:a.year||(a.id.includes('10')?2010:(a.id.includes('11')?2011:(a.id.includes('12')?2012:(a.id.includes('13')?2013:2014)))),_src:'evc10_14'})));
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
/** Normalize all known body fields into a list of step strings for display */
function getProtoBodySteps(p){
  if(!p||typeof p!=='object') return [];
  const out=[];
  const seen=new Set();
  const pushOne=(s)=>{
    const t=String(s||'').replace(/\s+/g,' ').trim();
    if(!t||t.length<2) return;
    const k=t.toLowerCase();
    if(seen.has(k)) return;
    seen.add(k);
    out.push(t);
  };
  const pushRaw=(raw)=>{
    if(raw==null) return;
    if(Array.isArray(raw)){
      raw.forEach(item=>{
        if(item==null) return;
        if(typeof item==='string') pushOne(item);
        else if(typeof item==='object') pushOne(item.text||item.step||item.titre||item.label||JSON.stringify(item));
      });
      return;
    }
    if(typeof raw==='string'){
      const s=raw.trim();
      if(!s) return;
      // Numbered list in one string → split
      const parts=s.split(/(?=\d+\.\s)/).map(x=>x.replace(/^\d+\.\s*/,'').trim()).filter(Boolean);
      if(parts.length>1) parts.forEach(pushOne);
      else pushOne(s);
    }
  };
  // Canonical + source-specific body fields used across protocol arrays
  pushRaw(p.protocole);
  pushRaw(p.steps);
  pushRaw(p.checklist);
  pushRaw(p.etapes);       // PROTOCOLES_RCP
  pushRaw(p.conduite);     // PROTOCOLES_REANIMATION
  pushRaw(p.programme);    // PROTOCOLES_KINE
  return out;
}
/** Extra meta lines rendered under the card (not step list) */
function getProtoMetaBlocks(p){
  if(!p) return [];
  const blocks=[];
  const add=(label,val)=>{
    const t=String(val||'').trim();
    if(t) blocks.push({label, text:t});
  };
  add('Objectif', p.objectif);
  add('Âge / cible', p.age);
  add('Considérations', p.considerations);
  add('Éthique', p.ethique);
  add('Critères d\'arrêt', p.criteres_arret);
  add('Références', p.references);
  add('Durée', p.duree);
  return blocks;
}
window.getProtoBodySteps=getProtoBodySteps;
window.getProtoMetaBlocks=getProtoMetaBlocks;

function renderProto(){
  const el=document.getElementById('protoContent');
  const filtEl=document.getElementById('protoFilters');
  if(!el)return;
  const rawAll=[];
  const addProto=(arr,cat)=>{
    if(!Array.isArray(arr))return;
    arr.forEach(p=>{
      rawAll.push({...p, fallbackCategory: cat});
    });
  };
  addProto(typeof PROTOCOLES_URGENCE!=='undefined'?PROTOCOLES_URGENCE:null,'Urgence');
  addProto(typeof PROTOCOLES_COMPLETS!=='undefined'?PROTOCOLES_COMPLETS:null,'Protocoles complets');
  addProto(typeof PROTOCOLES_REANIMATION!=='undefined'?PROTOCOLES_REANIMATION:null,'Réanimation');
  addProto(typeof PROTOCOLES_COGNITIF!=='undefined'?PROTOCOLES_COGNITIF:null,'Cognitif');
  addProto(typeof PROTOCOLES_PALLIATIF_AVANCES!=='undefined'?PROTOCOLES_PALLIATIF_AVANCES:null,'Palliatif');
  addProto(typeof PROTOCOLES_READAPTATION!=='undefined'?PROTOCOLES_READAPTATION:null,'Réadaptation');
  addProto(typeof PROTOCOLES_KINE!=='undefined'?PROTOCOLES_KINE:null,'Kinésithérapie');
  addProto(typeof PROTOCOLES_RCP!=='undefined'?PROTOCOLES_RCP:null,'RCP');
  addProto(typeof PROTOCOLES_QUALITE!=='undefined'?PROTOCOLES_QUALITE:null,'Qualité');
  addProto(typeof PROTOCOLES_LEGISLATION!=='undefined'?PROTOCOLES_LEGISLATION:null,'Législation');
  addProto(typeof PROTOCOLES_FORMATION!=='undefined'?PROTOCOLES_FORMATION:null,'Formation');
  
  // FICHES_GARDE restent UNIQUEMENT dans l'onglet Garde (checklists) — pas de doublon ici.
  // CLINICAL_REFERENCE stays in search/reference only — do NOT inject into protocoles.

  // Normalisation des catégories et dédoublonnage (titre + id exact + near-dup catégorie)
  const all = [];
  const seenTitle = new Map();
  const seenId = new Map();

  const protoRichness = (p) => {
    const steps = getProtoBodySteps(p);
    return (steps.length * 2)
      + (p.surveillance ? 5 : 0)
      + (p.alerte || p.alert ? 3 : 0)
      + (p.indication ? 2 : 0)
      + (p.objectif ? 2 : 0)
      + (p.conduite ? 4 : 0)
      + (p.programme ? 4 : 0)
      + (p.etapes ? 4 : 0)
      + (p.contreIndications ? 2 : 0)
      + (p.effetsSecondaires ? 1 : 0)
      + (p.considerations || p.ethique ? 2 : 0);
  };

  const titleTokenSet = (s) => new Set(String(s || '')
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(t => t.length > 2));
  const titleJaccard = (a, b) => {
    const A = titleTokenSet(a), B = titleTokenSet(b);
    if (!A.size || !B.size) return 0;
    let i = 0;
    for (const x of A) if (B.has(x)) i++;
    return i / (A.size + B.size - i);
  };

  rawAll.forEach(p => {
    // Catégories simplifiées (domaines cliniques, sans empiler garde/protocoles)
    let c = p.categorie || p.category || p.fallbackCategory || 'Autre';
    c = String(c).trim();
    const lower = c.toLowerCase();
    const id = String(p.id || '').toLowerCase();
    const titreL = String(p.titre || p.title || '').toLowerCase();
    
    if (lower.includes('urgence') || lower === 'rcp' || lower.includes('réanim') || lower.includes('reanim')
        || id.startsWith('uv-') || id.startsWith('proto-') || id.startsWith('pr-') || id.startsWith('prcp-')) {
      c = 'Urgences & réa';
    } else if (lower.includes('antibio') || id.startsWith('abx-') || titreL.includes('infect')) {
      c = 'Infectieux';
    } else if (lower.includes('antalgie') || lower.includes('douleur') || lower.includes('palliatif')
        || id.startsWith('ant-') || id.startsWith('ppa-')) {
      c = 'Douleur & palliatif';
    } else if (lower.includes('cardio') || id.startsWith('card-') || id.startsWith('resp-') || id.startsWith('ren-')) {
      c = 'Cardio / respiratoire / rénal';
    } else if (lower.includes('cognitif') || lower.includes('neuro') || id.startsWith('neuro-') || id.startsWith('pc-')) {
      c = 'Neuro & cognition';
    } else if (lower.includes('kine') || lower.includes('réadaptation') || lower.includes('readaptation')
        || lower.includes('kinésithérapie') || id.startsWith('pk-') || id.startsWith('prad-')) {
      c = 'Rééducation';
    } else if (lower.includes('qualité') || lower.includes('qualite') || lower.includes('législation')
        || lower.includes('legislation') || lower.includes('formation')
        || id.startsWith('pqua-') || id.startsWith('pleg-') || id.startsWith('pform-')) {
      c = 'Qualité & organisation';
    } else if (lower.includes('met') || id.startsWith('met-') || lower.includes('gériatrie') || lower.includes('geriatrie')) {
      c = 'Métabolisme & gériatrie';
    } else {
      c = 'Autres protocoles';
    }

    const titre = (p.titre || p.title || p.nom || p.situation || '').toString().trim();
    const normalizedTitle = titre.toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
      .replace(/[^a-z0-9]/g, '');
    const pid = p.id != null ? String(p.id) : '';

    if (!normalizedTitle && !pid) return;

    const currentProtoObj = {
      ...p,
      id: pid || p.id,
      categorie: c,
      titre: titre || pid
    };

    // Exact ID collision → keep richer
    if (pid && seenId.has(pid)) {
      const existing = seenId.get(pid);
      if (protoRichness(currentProtoObj) > protoRichness(existing)) {
        const idx = all.indexOf(existing);
        if (idx !== -1) all[idx] = currentProtoObj;
        seenId.set(pid, currentProtoObj);
        if (normalizedTitle) seenTitle.set(normalizedTitle, currentProtoObj);
      }
      return;
    }

    if (normalizedTitle && seenTitle.has(normalizedTitle)) {
      const existing = seenTitle.get(normalizedTitle);
      if (protoRichness(currentProtoObj) > protoRichness(existing)) {
        const idx = all.indexOf(existing);
        if (idx !== -1) all[idx] = currentProtoObj;
        seenTitle.set(normalizedTitle, currentProtoObj);
        if (pid) seenId.set(pid, currentProtoObj);
      }
      return;
    }

    all.push(currentProtoObj);
    if (normalizedTitle) seenTitle.set(normalizedTitle, currentProtoObj);
    if (pid) seenId.set(pid, currentProtoObj);
  });

  // Pass 2: near-duplicate titles in the SAME category → keep the richer card only
  // (e.g. "Code AVC" checklist vs "AVC aigu code stroke" protocole complet)
  const dropNear = new Set();
  for (let i = 0; i < all.length; i++) {
    if (dropNear.has(all[i])) continue;
    for (let j = i + 1; j < all.length; j++) {
      if (dropNear.has(all[j])) continue;
      if (all[i].categorie !== all[j].categorie) continue;
      const jv = titleJaccard(all[i].titre, all[j].titre);
      // 0.7+ = true near-clones (e.g. Code AVC vs AVC code stroke).
      // 0.6 alone would wrongly merge "Gestion X en fin de vie" variants.
      if (jv < 0.7) continue;
      if (protoRichness(all[i]) >= protoRichness(all[j])) dropNear.add(all[j]);
      else dropNear.add(all[i]);
    }
  }
  if (dropNear.size) {
    for (let i = all.length - 1; i >= 0; i--) {
      if (dropNear.has(all[i])) all.splice(i, 1);
    }
  }

  if(!all.length){el.innerHTML='<div class="empty"><div class="empty-text">Aucun protocole disponible</div></div>';return}
  
  const customOrder = {
    'Urgences & réa': 1,
    'Infectieux': 2,
    'Douleur & palliatif': 3,
    'Cardio / respiratoire / rénal': 4,
    'Neuro & cognition': 5,
    'Métabolisme & gériatrie': 6,
    'Rééducation': 7,
    'Qualité & organisation': 8,
    'Autres protocoles': 9
  };

  const cats=[...new Set(all.map(p=>p.categorie))].sort((a, b) => {
    return (customOrder[a] || 99) - (customOrder[b] || 99);
  });
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
        const steps=getProtoBodySteps(p);
        const meta=getProtoMetaBlocks(p);
        const icon=p.icon||'📋';
        const hasBody=steps.length>0||meta.length>0||p.indication||p.surveillance||p.alerte||p.alert||p.contreIndications||p.effetsSecondaires;
        return`<div class="proto-card${p.urgency==='high'?' proto-urgent':''}${hasBody?'':' proto-empty'}">
          <div class="proto-card-head"><span class="proto-icon">${icon}</span><div class="proto-card-title">${esc(p.titre||p.title||'')}</div></div>
          ${p.indication?`<div class="proto-indication">${esc(p.indication)}</div>`:''}
          ${meta.map(m=>`<div class="proto-meta"><strong>${esc(m.label)} :</strong> ${esc(m.text)}</div>`).join('')}
          ${steps.length?`<ol class="proto-steps">${steps.map(s=>`<li>${esc(s)}</li>`).join('')}</ol>`:''}
          ${!hasBody?`<div class="proto-alert">⚠️ Contenu manquant pour ce protocole</div>`:''}
          ${p.alerte||p.alert?`<div class="proto-alert">⚠️ ${esc(p.alerte||p.alert)}</div>`:''}
          ${p.surveillance?`<div class="proto-surveillance">📊 ${esc(p.surveillance)}</div>`:''}
          ${p.effetsSecondaires?`<div class="proto-surveillance">⚡ EI: ${esc(p.effetsSecondaires)}</div>`:''}
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
  // ITEMs EDN = index des codes ITEM du manuel (pas un doublon de l'accueil).
  // Accueil = lecture chapitres ; ici = codes ITEM → objectifs → ouvrir le cours.
  const rows=[];
  ((typeof APP_DATA!=='undefined'&&APP_DATA.chapters)||[]).forEach(ch=>{
    (ch.items||[]).forEach(item=>{
      rows.push({item,ch});
    });
  });
  // Enrich with ITEMS_EVC entries not already listed
  if (typeof ITEMS_EVC !== 'undefined' && Array.isArray(ITEMS_EVC)) {
    const seen = new Set(rows.map(r=>String(r.item).toLowerCase()));
    ITEMS_EVC.forEach(it=>{
      const label = it.id || it.titre || '';
      const key = String(label).toLowerCase();
      if (!key || seen.has(key) || seen.has('item '+key)) return;
      rows.push({item: it.titre ? (it.id||'')+' — '+it.titre : label, ch: null, evc: it});
    });
  }
  if(!rows.length){
    list.innerHTML='<div class="empty"><div class="empty-icon">📌</div><div class="empty-text">Aucun code ITEM dans le manuel</div><div class="empty-hint">Les ITEMs sont les objectifs EDN/R2C rattachés aux chapitres — ouvrez un chapitre depuis l\'accueil pour le cours complet</div></div>';
    return;
  }
  list.innerHTML='<div class="src-note" style="margin-bottom:12px">Index des <strong>codes ITEM EDN</strong> cités dans le manuel (ex. ITEM 123). Ce n\'est pas la liste des chapitres : l\'accueil sert à lire le cours ; ici vous retrouvez l\'objectif pédagogique et le chapitre lié.</div>';
  rows.forEach(({item,ch,evc},i)=>{
    const el=document.createElement('div');
    el.className='item-card item-card-enter';
    el.style.animationDelay=(i*0.02)+'s';
    if(ch) el.onclick=()=>showCh(ch.id);
    const rc=itemRangClass(item);
    
    let matched = evc || null;
    if (!matched && typeof ITEMS_EVC !== 'undefined') {
      const seekId = String(item).toLowerCase().replace(/\s+/g, '-');
      matched = ITEMS_EVC.find(x => x.id === seekId || (x.id&&seekId.includes(x.id)) || x.id.startsWith(seekId + '-'));
    }

    let objectivesHtml = '';
    if (matched && matched.objectifs && matched.objectifs.length) {
      objectivesHtml = `
        <div class="item-objectives" style="margin-top: 6px; font-size: 0.82rem; color: var(--text-muted); line-height: 1.45;">
          <ul style="margin: 0; padding-left: 20px; list-style-type: disc;">
            ${matched.objectifs.map(o => `<li style="margin-bottom: 3px;">${esc(o)}</li>`).join('')}
          </ul>
        </div>`;
    }

    const itemTitle = matched && matched.titre ? matched.titre : (ch ? ch.t : '');
    el.innerHTML=`
      <div class="item-title">
        <span class="rang-badge ${rc || 'rang-a'}">${esc(item)}</span>
        ${itemTitle?`<span class="item-ch-title">${esc(itemTitle)}</span>`:''}
      </div>
      ${objectivesHtml}
      <div class="item-desc" style="margin-top: 6px; font-size: 0.78rem; text-align: right; color: var(--text2);">
        ${ch?`Chapitre ${ch.id.replace('ch','')} : ${esc(ch.t)} — Ouvrir le cours ➔`:'Objectif EDN'}
      </div>`;
    list.appendChild(el);
  });
}

/* ── SETTINGS ── */
function setFS(v){
  S.fs=+v||18;
  if(document.body) document.body.style.fontSize=S.fs+'px';
  try{ localStorage.setItem('gfs', String(S.fs)); }catch{}
  const el=document.getElementById('fsVal');
  if(el) el.textContent=S.fs+'px';
}
function setLH(v,init){
  S.lh=parseFloat(v)||1.7;
  try{ document.documentElement.style.setProperty('--lh', String(S.lh)); }catch{}
  if(document.body) document.body.style.lineHeight=String(S.lh);
  if(!init){ try{ localStorage.setItem('glh', String(S.lh)); }catch{} }
  const el=document.getElementById('lhVal');
  if(el) el.textContent=String(S.lh);
}
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
function isInstallHidden(){ return localStorage.getItem('g_hide_install') === '1'; }
function applyInstallBarVisibility(forceShow){
  const ib=document.getElementById('installB');
  if(!ib) return;
  if(isInstallHidden()){
    ib.hidden=true;
    ib.style.display='none';
    return;
  }
  // show only if browser offered install (deferredPrompt) or forced after event
  if(forceShow || window.deferredPrompt){
    ib.hidden=false;
    ib.style.display='flex';
  } else {
    ib.hidden=true;
    ib.style.display='none';
  }
}
function dismissInstallBar(){
  localStorage.setItem('g_hide_install','1');
  applyInstallBarVisibility();
  if(typeof toast==='function') toast('Bannière masquée — réactivable dans Réglages');
  updateInstallPrefUI();
}
function toggleInstallPref(){
  if(isInstallHidden()){
    localStorage.removeItem('g_hide_install');
    if(typeof toast==='function') toast('Bannière réactivée (si le navigateur la propose)');
  } else {
    localStorage.setItem('g_hide_install','1');
    if(typeof toast==='function') toast('Bannière d’installation masquée');
  }
  applyInstallBarVisibility();
  updateInstallPrefUI();
}
function updateInstallPrefUI(){
  const lab=document.getElementById('installPrefLabel');
  const btn=document.getElementById('btnToggleInstall');
  const hidden=isInstallHidden();
  if(lab) lab.textContent = hidden ? 'Masquée' : 'Visible si proposée';
  if(btn) btn.textContent = hidden ? 'Réafficher' : 'Masquer';
}
function installPWA(){
  if(window.deferredPrompt){
    window.deferredPrompt.prompt();
    window.deferredPrompt=null;
    applyInstallBarVisibility();
  } else if(typeof toast==='function') {
    toast('Installation non disponible sur cet appareil / navigateur');
  }
}
window.dismissInstallBar=dismissInstallBar;
window.toggleInstallPref=toggleInstallPref;
window.applyInstallBarVisibility=applyInstallBarVisibility;

/* ── TRAITEMENTS (THERAPEUTIQUE) ── */
function switchProtoMode(mode) {
  const btnProto = document.getElementById('btnSubProtoCliniques');
  const btnTx = document.getElementById('btnSubTraitements');
  const tabProto = document.getElementById('subTabProtoCliniques');
  const tabTx = document.getElementById('subTabTraitements');

  if (!btnProto || !btnTx || !tabProto || !tabTx) return;

  if (mode === 'traitements') {
    btnProto.classList.remove('active');
    btnTx.classList.add('active');
    tabProto.style.display = 'none';
    tabTx.style.display = 'block';
    switchTxSubMode('molecules');
  } else {
    btnProto.classList.add('active');
    btnTx.classList.remove('active');
    tabProto.style.display = 'block';
    tabTx.style.display = 'none';
    renderProto();
  }
}

function switchTxSubMode(subMode) {
  const buttons = {
    molecules: document.getElementById('btnTxMolecules'),
    interactions: document.getElementById('btnTxInteractions'),
    effets: document.getElementById('btnTxEffets'),
    urgence: document.getElementById('btnTxUrgence')
  };
  const panels = {
    molecules: document.getElementById('txSubTabMolecules'),
    interactions: document.getElementById('txSubTabInteractions'),
    effets: document.getElementById('txSubTabEffets'),
    urgence: document.getElementById('txSubTabUrgence')
  };

  Object.keys(buttons).forEach(k => {
    if (buttons[k]) {
      if (k === subMode) buttons[k].classList.add('active');
      else buttons[k].classList.remove('active');
    }
  });

  Object.keys(panels).forEach(k => {
    if (panels[k]) {
      if (k === subMode) panels[k].style.display = 'block';
      else panels[k].style.display = 'none';
    }
  });

  if (subMode === 'molecules') renderMeds();
  else if (subMode === 'interactions') renderInteractions();
  else if (subMode === 'effets') renderEffets();
  else if (subMode === 'urgence') renderUrgence();
}

function renderMeds() {
  const content = document.getElementById('txContent');
  if (!content || typeof PHARMO_COMPLETE === 'undefined') return;

  let html = '';
  PHARMO_COMPLETE.forEach(classeObj => {
    const className = classeObj.classe || 'Autre';
    const classInd = classeObj.indications_geriatriques || '';
    const classCI = classeObj.contre_indications || '';
    const classAlt = classeObj.alternatives || '';

    if (classeObj.medicaments && Array.isArray(classeObj.medicaments)) {
      classeObj.medicaments.forEach(med => {
        const isPim = /benzodiazepine|neuroleptique|antipsychotique|anticholinergique|ains|antidépresseur tricyclique|neuro/i.test(className || med.nom) ||
                      /oxazepam|alprazolam|lorazepam|zolpidem|zopiclone|haloperidol|risperidone|olanzapine|aripiprazole|clozapine|amitriptyline|imipramine|clomipramine|diclofenac|ibuprofene|ketoprofene|naproxene|piroxicam|meloxicam|celecoxib|indometacine/i.test(med.nom) ||
                      (med.effets_secondaires && med.effets_secondaires.toLowerCase().includes('chutes')) ||
                      (med.effets_secondaires && med.effets_secondaires.toLowerCase().includes('confusion'));

        html += `
          <div class="calc-card med-card" data-class="${esc(className)}" style="border-left: 4px solid ${isPim ? 'var(--danger, #ef4444)' : 'var(--accent, #0891b2)'}">
            <div class="calc-card-hdr">
              <span class="calc-card-nom">${esc(med.nom)}</span>
              <span class="calc-badge">${esc(className.toUpperCase())}</span>
            </div>
            ${isPim ? `<div style="display:inline-block; font-size:0.75rem; background:rgba(239,68,68,0.15); color:var(--danger,#ef4444); padding:2px 8px; border-radius:4px; margin-top:4px; font-weight:bold;">⚠️ Molécule Inappropriée (STOPP v3)</div>` : ''}
            <div class="med-details" style="display:flex; flex-direction:column; gap:8px; margin-top:8px;">
              ${med.dose_adaptee_sujet_age ? `<div><strong>Posologie gériatrique :</strong> <span class="fs-sm">${esc(med.dose_adaptee_sujet_age)}</span></div>` : ''}
              ${med.voie ? `<div><strong>Voie :</strong> <span class="fs-sm">${esc(med.voie)}</span></div>` : ''}
              ${med.effets_secondaires ? `<div><strong>Effets Secondaires :</strong> <span class="fs-sm">${esc(med.effets_secondaires)}</span></div>` : ''}
              ${med.interactions ? `<div><strong>Interactions :</strong> <span class="fs-sm">${esc(med.interactions)}</span></div>` : ''}
              ${med.surveillance ? `<div><strong>Surveillance :</strong> <span class="fs-sm">${esc(med.surveillance)}</span></div>` : ''}
              ${classInd ? `<div style="opacity:0.85;"><strong>Indications de la classe :</strong> <span class="fs-sm">${esc(classInd)}</span></div>` : ''}
              ${classCI ? `<div style="opacity:0.85; color:var(--danger);"><strong>Contre-indications :</strong> <span class="fs-sm">${esc(classCI)}</span></div>` : ''}
              ${classAlt ? `<div style="background:rgba(245,158,11,0.1); padding:8px; border-radius:4px; margin-top:4px;"><strong>Alternatives Sûres / START :</strong> <span class="fs-sm">${esc(classAlt)}</span></div>` : ''}
            </div>
          </div>
        `;
      });
    }
  });

  content.innerHTML = html || '<div class="empty">Aucun traitement trouvé.</div>';
  setupTxMoleculesSearch();
}

function renderInteractions() {
  const content = document.getElementById('txContentInteractions');
  if (!content || typeof INTERACTIONS_CRITIQUES === 'undefined') return;

  content.innerHTML = INTERACTIONS_CRITIQUES.map(item => `
    <div class="calc-card interaction-card" style="border-left: 4px solid var(--danger, #ef4444); background:rgba(239,68,68,0.03);">
      <div class="calc-card-hdr">
        <span class="calc-card-nom" style="color:var(--danger,#ef4444); font-weight:bold;">${esc(item.drugA)} + ${esc(item.drugB)}</span>
        <span class="calc-badge" style="background:var(--danger,#ef4444); color:white;">RISQUE CRITIQUE</span>
      </div>
      <div class="med-details" style="display:flex; flex-direction:column; gap:8px; margin-top:8px;">
        <div><strong>Risque clinique :</strong> <span class="fs-sm" style="color:var(--danger,#ef4444); font-weight:600;">${esc(item.risque)}</span></div>
        <div style="background:rgba(16,185,129,0.1); padding:8px; border-radius:4px; border-left:3px solid #10b981; margin-top:4px;">
          <strong>Conduite à tenir recommandée :</strong> <span class="fs-sm">${esc(item.action)}</span>
        </div>
      </div>
    </div>
  `).join('');

  setupTxInteractionsSearch();
}

function renderEffets() {
  const content = document.getElementById('txContentEffets');
  if (!content || typeof EFFETS_INDESIRABLES === 'undefined') return;

  content.innerHTML = EFFETS_INDESIRABLES.map(item => `
    <div class="calc-card effet-card" style="border-left: 4px solid var(--warning, #f59e0b);">
      <div class="calc-card-hdr">
        <span class="calc-card-nom">${esc(item.medicament)}</span>
        <span class="calc-badge">${esc(item.classe)}</span>
      </div>
      <div class="med-details" style="display:flex; flex-direction:column; gap:8px; margin-top:8px;">
        <div style="color:var(--text2);"><strong>Effets fréquents :</strong> <span class="fs-sm">${esc(item.effets_frequents)}</span></div>
        <div style="color:var(--danger);"><strong>Toxicité / Effets graves :</strong> <span class="fs-sm">${esc(item.effets_graves)}</span></div>
        <div><strong>Surveillance requise :</strong> <span class="fs-sm">${esc(item.surveillance)}</span></div>
        <div style="background:rgba(20,184,166,0.08); padding:8px; border-radius:4px; margin-top:4px;">
          <strong>Conduite à tenir :</strong> <span class="fs-sm">${esc(item.conduite_tenir)}</span>
        </div>
      </div>
    </div>
  `).join('');

  setupTxEffetsSearch();
}

function renderUrgence() {
  const content = document.getElementById('txContentUrgence');
  if (!content || typeof MEDICAMENTS_URGENCE === 'undefined') return;

  let html = '';
  
  MEDICAMENTS_URGENCE.forEach(item => {
    html += `
      <div class="calc-card urg-card" style="border-left: 4px solid #3b82f6;">
        <div class="calc-card-hdr">
          <span class="calc-card-nom" style="color:#3b82f6; font-weight:bold;">🚨 ${esc(item.nom || item.title)}</span>
          <span class="calc-badge" style="background:#3b82f6; color:white;">URGENCE</span>
        </div>
        <div class="med-details" style="display:flex; flex-direction:column; gap:8px; margin-top:8px;">
          ${item.indication ? `<div><strong>Indication :</strong> <span class="fs-sm">${esc(item.indication)}</span></div>` : ''}
          ${item.posologie ? `<div><strong>Posologie / Protocole d'administration :</strong> <span class="fs-sm">${esc(item.posologie)}</span></div>` : ''}
          ${item.dilution ? `<div><strong>Dilution / Préparation :</strong> <span class="fs-sm">${esc(item.dilution)}</span></div>` : ''}
          ${item.surveillance ? `<div><strong>Surveillance critique :</strong> <span class="fs-sm">${esc(item.surveillance)}</span></div>` : ''}
        </div>
      </div>
    `;
  });

  if (typeof DOSES_URGENCE !== 'undefined') {
    DOSES_URGENCE.forEach(item => {
      html += `
        <div class="calc-card urg-card" style="border-left: 4px solid #6366f1;">
          <div class="calc-card-hdr">
            <span class="calc-card-nom">⚡ ${esc(item.nom || item.title || 'Calcul de dose')}</span>
            <span class="calc-badge" style="background:#6366f1; color:white;">DOSE URGENT</span>
          </div>
          <div class="med-details" style="display:flex; flex-direction:column; gap:8px; margin-top:8px;">
            ${item.classe ? `<div><strong>Classe :</strong> <span class="fs-sm">${esc(item.classe)}</span></div>` : ''}
            ${item.dose ? `<div><strong>Dose recommandée :</strong> <span class="fs-sm">${esc(item.dose)}</span></div>` : ''}
            ${item.indications ? `<div><strong>Indications :</strong> <span class="fs-sm">${esc(item.indications)}</span></div>` : ''}
            ${item.remarques ? `<div><strong>Remarques cliniques :</strong> <span class="fs-sm">${esc(item.remarques)}</span></div>` : ''}
          </div>
        </div>
      `;
    });
  }

  content.innerHTML = html || '<div class="empty">Aucune posologie d\'urgence trouvée.</div>';
  setupTxUrgenceSearch();
}

function setupTxMoleculesSearch() {
  const search = document.getElementById('txSearch');
  if (search) {
    search.replaceWith(search.cloneNode(true));
    const newSearch = document.getElementById('txSearch');
    newSearch.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      document.querySelectorAll('#txContent .med-card').forEach(card => {
        const text = card.textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        card.style.display = text.includes(query) ? 'block' : 'none';
      });
    });
  }
}

function setupTxInteractionsSearch() {
  const search = document.getElementById('txSearchInteractions');
  if (search) {
    search.replaceWith(search.cloneNode(true));
    const newSearch = document.getElementById('txSearchInteractions');
    newSearch.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      document.querySelectorAll('#txContentInteractions .interaction-card').forEach(card => {
        const text = card.textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        card.style.display = text.includes(query) ? 'block' : 'none';
      });
    });
  }
}

function setupTxEffetsSearch() {
  const search = document.getElementById('txSearchEffets');
  if (search) {
    search.replaceWith(search.cloneNode(true));
    const newSearch = document.getElementById('txSearchEffets');
    newSearch.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      document.querySelectorAll('#txContentEffets .effet-card').forEach(card => {
        const text = card.textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        card.style.display = text.includes(query) ? 'block' : 'none';
      });
    });
  }
}

function setupTxUrgenceSearch() {
  const search = document.getElementById('txSearchUrgence');
  if (search) {
    search.replaceWith(search.cloneNode(true));
    const newSearch = document.getElementById('txSearchUrgence');
    newSearch.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      document.querySelectorAll('#txContentUrgence .urg-card').forEach(card => {
        const text = card.textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        card.style.display = text.includes(query) ? 'block' : 'none';
      });
    });
  }
}

function filterMeds(classe, btn) {
  document.querySelectorAll('#txFilters .calc-filt-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  document.querySelectorAll('.med-card').forEach(card => {
    const medClass = card.getAttribute('data-class') || '';
    if (classe === 'all' || medClass.toLowerCase().includes(classe.toLowerCase().substring(0, 8))) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

/* ── UTILS ── */
// Pure string escape — never depend on DOM (createElement mock/edge cases emptied titles & lists)
function esc(s){
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
function toast(msg){const t=document.getElementById('toast');if(!t)return;t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2000)}
// Boot only after full app.js evaluation (all lets/functions initialized)
(function scheduleBoot(){
  function go(){ try{ if(typeof window.bootApp==='function') window.bootApp(); }catch(e){ console.error('[boot schedule]', e); } }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', go);
  else go();
})();
