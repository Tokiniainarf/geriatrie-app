/* Workspace presentation: keeps the existing reader, scores and learning engines. */
const WorkspaceUI = (() => {
  let filter = 'all';
  let query = '';
  let menuReturnFocus = null;
  const labels = {home:'Votre espace de révision',ch:'Le manuel',synth:'Fiches de synthèse',podcasts:'Podcasts',flash:'Flashcards',annales:'Annales EVC',dash:'Ma progression',scores:'Scores & calculateurs',proto:'Protocoles',dict:'Dictionnaire',set:'Réglages',fav:'Vos favoris',feed:'Pulse · Votre feed de révision',clinique:'Accueil patient · Consultation guidée',graph:'Parcours liés',quiz:'Entraînement',erreurs:'Journal des erreurs'};
  const normalize = value => String(value).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const readObject = key => {
    try { const value=JSON.parse(localStorage.getItem(key)); return value && typeof value==='object' && !Array.isArray(value) ? value : {}; } catch { return {}; }
  };
  const icon = (path) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${path}</svg>`;
  const arrow = icon('<path d="M5 12h14m-5-5 5 5-5 5"/>');
  const bookmark = icon('<path d="M6 3h12v18l-6-4-6 4Z"/>');

  function renderHome() {
    if(typeof APP_DATA==='undefined') return;
    const chapters=APP_DATA.chapters;
    const stats=readObject('bf_stats');
    const today=new Date();
    const todayDone=(stats.dailyDate||stats.lastDay)===today.toDateString() ? Math.max(0,Number(stats.dailyDone)||0) : 0;
    document.getElementById('workspaceDate').textContent=today.toLocaleDateString('fr-FR',{weekday:'long',day:'numeric',month:'long'});
    document.getElementById('dailyCount').innerHTML=`${todayDone}<span>/ 20</span>`;
    document.getElementById('dailyRing').style.setProperty('--daily-progress',`${Math.min(100,todayDone/20*100)}%`);
    const streak=Number(stats.streak)||0;
    const yesterday=new Date(today); yesterday.setDate(today.getDate()-1);
    const active=stats.lastDay===today.toDateString() || stats.lastDay===yesterday.toDateString();
    document.getElementById('workspaceStreak').textContent=active&&streak ? `${streak} jour${streak>1?'s':''} de régularité. Continuez !` : 'Votre prochaine session vous attend.';
    const read=chapters.filter(ch=>S.read.includes(ch.id)).length;
    document.getElementById('workspaceRead').textContent=read;
    const progress=document.getElementById('workspaceProgress');
    progress.setAttribute('aria-valuemax',chapters.length);
    progress.setAttribute('aria-valuenow',read);
    progress.querySelector('span').style.width=`${read/Math.max(1,chapters.length)*100}%`;
    document.getElementById('statFav').textContent=chapters.filter(ch=>S.bm.includes(ch.id)).length;
    let last=''; try{last=localStorage.getItem('g_last_chapter');}catch{}
    const resume=chapters.find(ch=>ch.id===last);
    const button=document.getElementById('resumeStudy');
    button.innerHTML=(resume?'Reprendre ma lecture':'Ouvrir le manuel')+arrow;
    button.onclick=()=>resume?showCh(resume.id):showCh(chapters[0].id);
    button.title=resume?resume.t:'Commencer le premier chapitre';
    const input=document.getElementById('librarySearch');
    input.value=query;
    input.oninput=()=>{query=input.value;renderChapters();};
    document.querySelectorAll('.ws-filters [data-filter]').forEach(button=>{
      button.setAttribute('aria-pressed',String(button.dataset.filter===filter));
      button.onclick=()=>{filter=button.dataset.filter;renderChapters();};
    });
    renderChapters();
    syncNavigation(S.view || 'home',false);
  }

  function renderChapters() {
    const chapters=APP_DATA.chapters.filter(ch=>
      (filter!=='unseen'||!S.read.includes(ch.id)) &&
      (filter!=='favorites'||S.bm.includes(ch.id)) &&
      normalize(ch.t+' '+(ch.items||[]).join(' ')).includes(normalize(query))
    );
    document.querySelectorAll('.ws-filters [data-filter]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.filter===filter)));
    for(const part of [1,2]) {
      const root=document.getElementById('p'+part);
      root.innerHTML=chapters.filter(ch=>ch.part===part).map(ch=>{
        const visited=S.read.includes(ch.id), favorite=S.bm.includes(ch.id);
        return `<article class="ws-chapter ch-row" data-chapter="${escape(ch.id)}">
          <button class="ws-chapter-open" type="button" aria-label="Ouvrir le chapitre ${escape(ch.id.replace('ch',''))} : ${escape(ch.t)}">
            <span class="ws-chapter-number">${escape(ch.id.replace('ch','').padStart(2,'0'))}</span>
            <span class="ws-chapter-copy"><span class="ws-chapter-meta">${(ch.items||[]).map(i=>escape(i)).join(' · ')||(ch.part===1?'LES FONDAMENTAUX':'ENTRAÎNEMENT')}</span><strong class="ch-row-title">${escape(ch.t)}</strong><span class="ws-chapter-status">${visited?'Consulté':'À découvrir'} <span aria-hidden="true">·</span> ${ch.part===1?'Connaissances':'Entraînement'}</span></span>
          </button><button class="ws-bookmark ${favorite?'is-saved':''}" type="button" aria-label="${favorite?'Retirer des favoris':'Ajouter aux favoris'} : ${escape(ch.t)}" aria-pressed="${favorite}">${bookmark}</button>
        </article>`;
      }).join('');
      root.querySelectorAll('[data-chapter]').forEach(card=>{
        card.querySelector('.ws-chapter-open').onclick=()=>showCh(card.dataset.chapter);
        card.querySelector('.ws-bookmark').onclick=()=>{
          const id=card.dataset.chapter;
          quickBm(id);
          const next=document.querySelector(`[data-chapter="${id}"] .ws-bookmark`)||document.querySelector('.ws-filters [data-filter="favorites"]');
          next.focus({preventScroll:true});
        };
      });
    }
    document.getElementById('partTwoLabel').hidden=!chapters.some(ch=>ch.part===2);
    document.getElementById('libraryEmpty').hidden=chapters.length>0;
    const count=`${chapters.length} chapitre${chapters.length>1?'s':''}`;
    document.getElementById('libraryCount').textContent=count;
    document.getElementById('libraryStatus').textContent=count+' affiché'+(chapters.length>1?'s':'');
  }

  function syncNavigation(view, focus=true) {
    document.getElementById('workspaceTitle').textContent=labels[view]||'Gériatrie';
    document.querySelectorAll('[data-workspace-view],#bnav [data-v]').forEach(button=>{
      const key=button.dataset.workspaceView||button.dataset.v;
      const selected=key===(view==='ch'?'library':view);
      button.classList.toggle('active',selected);
      if(selected) button.setAttribute('aria-current','page'); else button.removeAttribute('aria-current');
    });
    toggleMenu(false,false);
    if(focus) document.getElementById('mainContent').focus({preventScroll:true});
  }

  function toggleMenu(force, restore=true) {
    const opening=typeof force==='boolean'?force:!document.body.classList.contains('ws-menu-open');
    const sidebar=document.getElementById('workspaceSidebar');
    document.body.classList.toggle('ws-menu-open',opening);
    document.querySelector('.ws-scrim').hidden=!opening;
    document.querySelectorAll('[aria-controls="workspaceSidebar"]').forEach(b=>b.setAttribute('aria-expanded',String(opening)));
    if(opening) {
      menuReturnFocus=document.activeElement;
      sidebar.querySelector('a,button').focus();
    } else if(restore && menuReturnFocus) {
      menuReturnFocus.focus();menuReturnFocus=null;
    }
  }
  function openLibrary() {
    sw('home');
    document.getElementById('libraryHeading').focus();
    document.getElementById('workspaceLibrary').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
  }
  document.addEventListener('keydown',event=>{
    const editing=event.target.matches('input,textarea,select,[contenteditable="true"]');
    if(event.key==='/'&&!editing&&!event.ctrlKey&&!event.metaKey){event.preventDefault();toggleSearch();return;}
    if(event.key==='Escape'&&document.getElementById('searchBar').classList.contains('open')){event.preventDefault();closeSearch(true);return;}
    if(!document.body.classList.contains('ws-menu-open'))return;
    if(event.key==='Escape'){event.preventDefault();toggleMenu(false);return;}
    if(event.key!=='Tab')return;
    const nodes=[...document.querySelectorAll('#workspaceSidebar a,#workspaceSidebar button')];
    const first=nodes[0],last=nodes[nodes.length-1];
    if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}
    else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
  });
  return {renderHome,syncNavigation,toggleMenu,openLibrary};
})();
window.WorkspaceUI=WorkspaceUI;
