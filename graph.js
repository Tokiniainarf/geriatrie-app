/* Graph view — interactive force-directed chapter network */
(function(){
  const EDGE_COLORS = {
    sameItem: '#D97706',
    concept: '#0891B2',
    samePart: '#64748B'
  };
  const EDGE_STYLES = {
    sameItem: { dash: [], label: 'Même ITEM', line: 'solid' },
    concept: { dash: [10, 6], label: 'Concept partagé', line: 'dashed' },
    samePart: { dash: [2, 5], label: 'Même partie', line: 'dotted' }
  };
  const TYPE_PRIORITY = { concept: 3, sameItem: 2, samePart: 1 };

  const nodeById = new Map();
  const NODES = APP_DATA.chapters.map((ch, i) => {
    const n = {
      id: ch.id,
      label: ch.t.replace(/^.*?:\s*/, ''),
      full: ch.t,
      color: CH_COLORS[ch.id],
      part: ch.part,
      items: ch.items || [],
      x: 0, y: 0, vx: 0, vy: 0, fx: null, fy: null,
      mass: 1 + (ch.items?.length || 0) * 0.15
    };
    nodeById.set(n.id, n);
    return n;
  });

  function buildEdges(){
    const pairMap = new Map();
    function addEdge(from, to, type, meta){
      if(from === to) return;
      const key = [from, to].sort().join('|');
      const existing = pairMap.get(key);
      const entry = { from, to, type, meta: meta || '' };
      if(!existing || TYPE_PRIORITY[type] > TYPE_PRIORITY[existing.type]){
        pairMap.set(key, entry);
      }
    }

    if(typeof CONCEPT_MAP !== 'undefined'){
      Object.entries(CONCEPT_MAP).forEach(([term, info]) => {
        APP_DATA.chapters.forEach(ch => {
          const pages = APP_DATA.content[ch.id] || [];
          const text = pages.map(p => p[1]).join(' ').toLowerCase();
          if(text.includes(term.toLowerCase()) && ch.id !== info.ch){
            addEdge(ch.id, info.ch, 'concept', term);
          }
        });
      });
    }

    const chapters = APP_DATA.chapters;
    for(let i = 0; i < chapters.length; i++){
      for(let j = i + 1; j < chapters.length; j++){
        const a = chapters[i], b = chapters[j];
        const sharedItem = (a.items || []).find(it => (b.items || []).includes(it));
        if(sharedItem) addEdge(a.id, b.id, 'sameItem', sharedItem);
        else if(a.part === b.part) addEdge(a.id, b.id, 'samePart', 'Partie ' + a.part);
      }
    }

    return Array.from(pairMap.values()).map((e, i) => (e.idx = i, e));
  }

  const EDGES = buildEdges();
  const adjacency = new Map();
  NODES.forEach(n => adjacency.set(n.id, []));
  EDGES.forEach(e => {
    adjacency.get(e.from)?.push(e);
    adjacency.get(e.to)?.push(e);
  });

  /** Particles flowing along edges */
  const particles = EDGES.map((e, i) => ({
    edgeIndex: i,
    t: Math.random(),
    speed: 0.00035 + Math.random() * 0.00025,
    size: 1.2 + Math.random() * 1.2
  }));

  let canvas, ctx, minimap, mctx, graphWrap;
  let W = 800, H = 600, animId;
  let dragging = null, panning = null, hovered = null;
  let scale = 1, targetScale = 1;
  let offsetX = 0, offsetY = 0, targetOffsetX = 0, targetOffsetY = 0;
  let pinchDist = 0;
  let graphStarted = false;
  let loadStart = 0;
  let edgeReveal = 0;
  let dashPhase = 0;
  let searchQuery = '';
  let tooltipEl, infoPanelEl, searchInput;
  let dragTrail = [];
  let zoomAnim = null;
  let bounds = { minX: -400, minY: -300, maxX: 400, maxY: 300 };
  let hoveredEdge = null;
  let kbFocusId = null;
  let entranceDone = false;
  let defaultView = null;
  let viewSaveTimer = null;
  const VIEW_STORAGE_KEY = 'geriatrie_graph_view';
  const STATUS_COLORS = { mastered: '#22c55e', started: '#eab308', unread: '#94a3b8' };

  const PHYS = {
    repulse: 4200,
    springK: 0.028,
    springLen: 140,
    centerPull: 0.0008,
    damping: 0.86,
    maxV: 12
  };

  function isChapterRead(id){
    try {
      if(typeof S !== 'undefined' && Array.isArray(S.read)) return S.read.includes(id);
      const grd = JSON.parse(localStorage.getItem('grd') || '[]');
      return grd.includes(id);
    } catch { return false; }
  }

  function isChapterMastered(id){
    try {
      if(typeof isSynthMastered === 'function') return isSynthMastered(id);
      const m = JSON.parse(localStorage.getItem('gsynth_mastered') || '[]');
      return m.includes(id);
    } catch { return false; }
  }

  function getChapterStatus(id){
    if(isChapterMastered(id)) return 'mastered';
    if(isChapterRead(id)) return 'started';
    return 'unread';
  }

  function getCardCount(chId){
    const sources = ['FLASHCARDS', 'FLASHCARDS_A', 'FLASHCARDS_B', 'FLASHCARDS_C', 'FLASHCARDS_MEMOS', 'FLASHCARDS_EXPANDED'];
    let n = 0;
    sources.forEach(name => {
      if(typeof window[name] !== 'undefined'){
        n += window[name].filter(c => c.chapter === chId).length;
      }
    });
    return n;
  }

  function loadSavedView(){
    try {
      const raw = localStorage.getItem(VIEW_STORAGE_KEY);
      if(!raw) return null;
      const v = JSON.parse(raw);
      if(typeof v.scale !== 'number' || typeof v.offsetX !== 'number' || typeof v.offsetY !== 'number') return null;
      return v;
    } catch { return null; }
  }

  function scheduleSaveView(){
    if(viewSaveTimer) clearTimeout(viewSaveTimer);
    viewSaveTimer = setTimeout(() => {
      try {
        localStorage.setItem(VIEW_STORAGE_KEY, JSON.stringify({
          scale: targetScale,
          offsetX: targetOffsetX,
          offsetY: targetOffsetY
        }));
      } catch { /* ignore */ }
    }, 400);
  }

  function resetGraphView(){
    if(defaultView){
      targetScale = defaultView.scale;
      targetOffsetX = defaultView.offsetX;
      targetOffsetY = defaultView.offsetY;
      scale = targetScale;
      offsetX = targetOffsetX;
      offsetY = targetOffsetY;
    } else {
      fitGraphToView(true);
    }
    try { localStorage.removeItem(VIEW_STORAGE_KEY); } catch { /* ignore */ }
  }

  function exportGraphPng(){
    if(!canvas) return;
    const link = document.createElement('a');
    link.download = 'geriatrie-graphe-chapitres.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  }

  function nodeEntranceScale(i){
    if(entranceDone) return 1;
    const stagger = i * 70;
    const t = Math.min(1, Math.max(0, (performance.now() - loadStart - stagger) / 420));
    if(t >= 1 && i === NODES.length - 1) entranceDone = true;
    return 1 - Math.pow(1 - t, 3);
  }

  function getKbFocusNode(){
    if(kbFocusId) return nodeById.get(kbFocusId) || null;
    return hovered;
  }

  function moveKbFocus(dir){
    const sorted = [...NODES].sort((a, b) => parseInt(a.id.replace('ch', ''), 10) - parseInt(b.id.replace('ch', ''), 10));
    let idx = sorted.findIndex(n => n.id === (kbFocusId || hovered?.id));
    if(idx < 0) idx = 0;
    else idx = (idx + dir + sorted.length) % sorted.length;
    kbFocusId = sorted[idx].id;
    hovered = sorted[idx];
    updateInfoPanel();
    panToNode(sorted[idx], false);
  }

  function panToNode(node, animate){
    const endScale = Math.max(targetScale, Math.min(2.4, targetScale));
    const toOx = W / 2 - node.x * endScale;
    const toOy = H / 2 - node.y * endScale;
    if(animate){
      targetScale = endScale;
      targetOffsetX = toOx;
      targetOffsetY = toOy;
    } else {
      targetScale = endScale;
      targetOffsetX = toOx;
      targetOffsetY = toOy;
      offsetX = toOx;
      offsetY = toOy;
    }
  }

  function getEdgeAt(mx, my){
    const { x, y } = screenToWorld(mx, my);
    const threshold = 10 / scale;
    let best = null, bestDist = threshold;
    EDGES.forEach(e => {
      const a = nodeById.get(e.from), b = nodeById.get(e.to);
      if(!a || !b) return;
      const dx = b.x - a.x, dy = b.y - a.y;
      const lenSq = dx * dx + dy * dy || 1;
      let t = ((x - a.x) * dx + (y - a.y) * dy) / lenSq;
      t = Math.max(0, Math.min(1, t));
      const px = a.x + t * dx, py = a.y + t * dy;
      const d = Math.hypot(x - px, y - py);
      if(d < bestDist){ bestDist = d; best = e; }
    });
    return best;
  }

  function initGraph(){
    canvas = document.getElementById('graphCanvas');
    if(!canvas) return;
    ctx = canvas.getContext('2d');
    graphWrap = canvas.parentElement;
    ensureGraphChrome();
    resize();
    loadStart = performance.now();
    edgeReveal = 0;

    if(graphStarted){
      entranceDone = true;
      const saved = loadSavedView();
      if(saved){
        targetScale = saved.scale;
        targetOffsetX = saved.offsetX;
        targetOffsetY = saved.offsetY;
        scale = saved.scale;
        offsetX = saved.offsetX;
        offsetY = saved.offsetY;
      } else {
        fitGraphToView(false);
      }
      animate();
      return;
    }
    graphStarted = true;
    window.addEventListener('resize', resize);

    const spread = 280 + NODES.length * 8;
    NODES.forEach((n, i) => {
      const angle = (i / NODES.length) * Math.PI * 2 - Math.PI / 2;
      const ring = n.part === 1 ? 1 : 0.55;
      n.x = Math.cos(angle) * spread * ring;
      n.y = Math.sin(angle) * spread * ring;
      n.vx = 0; n.vy = 0; n.fx = null; n.fy = null;
    });

    fitGraphToView(true);
    defaultView = { scale: targetScale, offsetX: targetOffsetX, offsetY: targetOffsetY };
    const saved = loadSavedView();
    if(saved){
      targetScale = saved.scale;
      targetOffsetX = saved.offsetX;
      targetOffsetY = saved.offsetY;
      scale = saved.scale;
      offsetX = saved.offsetX;
      offsetY = saved.offsetY;
    }

    canvas.setAttribute('tabindex', '0');
    canvas.setAttribute('aria-label', 'Graphe des chapitres — utilisez les flèches pour naviguer');
    canvas.addEventListener('keydown', onGraphKeydown);

    canvas.addEventListener('mousedown', onDown);
    canvas.addEventListener('mousemove', onMove);
    canvas.addEventListener('mouseup', onUp);
    canvas.addEventListener('mouseleave', onLeave);
    canvas.addEventListener('wheel', onWheel, { passive: false });
    canvas.addEventListener('touchstart', onTouchStart, { passive: false });
    canvas.addEventListener('touchmove', onTouchMove, { passive: false });
    canvas.addEventListener('touchend', onTouchEnd);

    animate();
  }

  function ensureGraphChrome(){
    const bar = graphWrap?.querySelector('.graph-bar');
    if(bar && !searchInput){
      const box = document.createElement('div');
      box.className = 'graph-search-wrap';
      box.innerHTML = '<input type="search" id="graphSearch" class="graph-search" placeholder="Filtrer un chapitre…" autocomplete="off" aria-label="Filtrer les chapitres">';
      bar.insertBefore(box, bar.querySelector('.graph-hint'));
      searchInput = box.querySelector('#graphSearch');
      searchInput.addEventListener('input', () => {
        searchQuery = (searchInput.value || '').trim().toLowerCase();
      });
    }
    if(bar && !bar.querySelector('.graph-actions')){
      const actions = document.createElement('div');
      actions.className = 'graph-actions';
      actions.innerHTML =
        '<button type="button" class="graph-btn" id="graphResetView" title="Réinitialiser zoom et position">⟲ Vue</button>' +
        '<button type="button" class="graph-btn" id="graphExportPng" title="Exporter le graphe en PNG">PNG</button>';
      bar.appendChild(actions);
      actions.querySelector('#graphResetView').addEventListener('click', resetGraphView);
      actions.querySelector('#graphExportPng').addEventListener('click', exportGraphPng);
    }
    if(!infoPanelEl){
      infoPanelEl = document.createElement('aside');
      infoPanelEl.className = 'graph-info-panel';
      infoPanelEl.hidden = true;
      infoPanelEl.setAttribute('aria-live', 'polite');
      graphWrap.appendChild(infoPanelEl);
    }
    if(!tooltipEl){
      tooltipEl = document.createElement('div');
      tooltipEl.className = 'graph-tooltip';
      tooltipEl.setAttribute('role', 'tooltip');
      tooltipEl.hidden = true;
      graphWrap.appendChild(tooltipEl);
    }
    if(!minimap){
      minimap = document.createElement('canvas');
      minimap.id = 'graphMinimap';
      minimap.className = 'graph-minimap';
      minimap.width = 152;
      minimap.height = 108;
      minimap.setAttribute('aria-hidden', 'true');
      graphWrap.appendChild(minimap);
      mctx = minimap.getContext('2d');
    }
  }

  function resize(){
    const rect = graphWrap.getBoundingClientRect();
    const bar = graphWrap.querySelector('.graph-bar');
    const barH = bar ? bar.offsetHeight : 0;
    W = canvas.width = Math.floor(rect.width);
    H = canvas.height = Math.max(220, Math.floor(rect.height - barH));
  }

  function screenToWorld(mx, my){
    return {
      x: (mx - offsetX) / scale,
      y: (my - offsetY) / scale
    };
  }

  function worldToScreen(wx, wy){
    return { x: wx * scale + offsetX, y: wy * scale + offsetY };
  }

  function getNodeAt(mx, my){
    const { x, y } = screenToWorld(mx, my);
    for(let i = NODES.length - 1; i >= 0; i--){
      const n = NODES[i];
      const dx = x - n.x, dy = y - n.y;
      const r = hovered === n ? 34 : 30;
      if(dx * dx + dy * dy < r * r) return n;
    }
    return null;
  }

  function nodeMatchesFilter(n){
    if(!searchQuery) return true;
    const q = searchQuery;
    return n.label.toLowerCase().includes(q) ||
      n.full.toLowerCase().includes(q) ||
      n.id.toLowerCase().includes(q) ||
      (n.items || []).some(it => it.toLowerCase().includes(q));
  }

  function onDown(e){
    if(zoomAnim) return;
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left, my = e.clientY - rect.top;
    dragging = getNodeAt(mx, my);
    dragTrail = [];
    if(dragging){
      dragging.fx = dragging.x;
      dragging.fy = dragging.y;
      dragging.vx = 0;
      dragging.vy = 0;
      canvas.style.cursor = 'grabbing';
      canvas.focus();
    } else {
      panning = { x: mx, y: my, ox: offsetX, oy: offsetY };
      canvas.focus();
    }
  }

  function onMove(e){
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left, my = e.clientY - rect.top;
    if(dragging){
      const w = screenToWorld(mx, my);
      dragTrail.push({ x: w.x, y: w.y, t: performance.now() });
      if(dragTrail.length > 12) dragTrail.shift();
      dragging.fx = w.x;
      dragging.fy = w.y;
      dragging.x = w.x;
      dragging.y = w.y;
    } else if(panning){
      offsetX = panning.ox + (mx - panning.x);
      offsetY = panning.oy + (my - panning.y);
      targetOffsetX = offsetX;
      targetOffsetY = offsetY;
    } else if(!zoomAnim){
      hovered = getNodeAt(mx, my);
      if(hovered){
        hoveredEdge = null;
        kbFocusId = null;
      } else {
        hoveredEdge = getEdgeAt(mx, my);
      }
      canvas.style.cursor = hovered ? 'pointer' : (hoveredEdge ? 'crosshair' : 'grab');
      updateInfoPanel();
    }
  }

  function onUp(e){
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left, my = e.clientY - rect.top;
    if(dragging){
      const moved = dragTrail.length >= 2 &&
        Math.hypot(dragTrail[0].x - dragTrail[dragTrail.length - 1].x,
          dragTrail[0].y - dragTrail[dragTrail.length - 1].y) > 4 / scale;
      const nAt = getNodeAt(mx, my);
      if(!moved && nAt === dragging){
        startZoomToNode(dragging);
      } else if(moved){
        const a = dragTrail[0], b = dragTrail[dragTrail.length - 1];
        const dt = Math.max(16, b.t - a.t);
        dragging.vx = Math.max(-PHYS.maxV, Math.min(PHYS.maxV, ((b.x - a.x) / dt) * 18));
        dragging.vy = Math.max(-PHYS.maxV, Math.min(PHYS.maxV, ((b.y - a.y) / dt) * 18));
      }
      dragging.fx = null;
      dragging.fy = null;
    }
    dragging = null;
    panning = null;
    dragTrail = [];
    scheduleSaveView();
    if(!hovered) canvas.style.cursor = 'grab';
  }

  function onLeave(){
    if(!dragging) hovered = null;
    hoveredEdge = null;
    hideInfoPanel();
  }

  function onGraphKeydown(e){
    if(e.key === 'ArrowRight' || e.key === 'ArrowDown'){
      e.preventDefault();
      moveKbFocus(1);
    } else if(e.key === 'ArrowLeft' || e.key === 'ArrowUp'){
      e.preventDefault();
      moveKbFocus(-1);
    } else if(e.key === 'Enter'){
      const n = getKbFocusNode() || hovered;
      if(n){ e.preventDefault(); startZoomToNode(n); }
    } else if(e.key === 'Escape'){
      kbFocusId = null;
      hovered = null;
      hideInfoPanel();
    }
  }

  function zoomAt(mx, my, factor){
    const newScale = Math.max(0.2, Math.min(4.5, targetScale * factor));
    targetOffsetX = mx - (mx - targetOffsetX) * (newScale / targetScale);
    targetOffsetY = my - (my - targetOffsetY) * (newScale / targetScale);
    targetScale = newScale;
  }

  function onWheel(e){
    e.preventDefault();
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left, my = e.clientY - rect.top;
    zoomAt(mx, my, e.deltaY > 0 ? 0.9 : 1.11);
    scheduleSaveView();
  }

  function onTouchStart(e){
    if(zoomAnim) return;
    const rect = canvas.getBoundingClientRect();
    if(e.touches.length === 1){
      const t = e.touches[0];
      const mx = t.clientX - rect.left, my = t.clientY - rect.top;
      dragging = getNodeAt(mx, my);
      dragTrail = [];
      if(dragging){
        dragging.fx = dragging.x;
        dragging.fy = dragging.y;
      } else {
        panning = { x: mx, y: my, ox: offsetX, oy: offsetY };
      }
    } else if(e.touches.length === 2){
      dragging = null;
      panning = null;
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      pinchDist = Math.hypot(dx, dy);
    }
    e.preventDefault();
  }

  function onTouchMove(e){
    const rect = canvas.getBoundingClientRect();
    if(e.touches.length === 1 && dragging){
      const t = e.touches[0];
      const mx = t.clientX - rect.left, my = t.clientY - rect.top;
      const w = screenToWorld(mx, my);
      dragTrail.push({ x: w.x, y: w.y, t: performance.now() });
      dragging.fx = w.x;
      dragging.fy = w.y;
      dragging.x = w.x;
      dragging.y = w.y;
    } else if(e.touches.length === 1 && panning){
      const t = e.touches[0];
      const mx = t.clientX - rect.left, my = t.clientY - rect.top;
      offsetX = panning.ox + (mx - panning.x);
      offsetY = panning.oy + (my - panning.y);
      targetOffsetX = offsetX;
      targetOffsetY = offsetY;
    } else if(e.touches.length === 2){
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const newDist = Math.hypot(dx, dy);
      const mid = {
        x: (e.touches[0].clientX + e.touches[1].clientX) / 2 - rect.left,
        y: (e.touches[0].clientY + e.touches[1].clientY) / 2 - rect.top
      };
      const delta = newDist / (pinchDist || 1);
      zoomAt(mid.x, mid.y, delta);
      pinchDist = newDist;
    }
    e.preventDefault();
  }

  function onTouchEnd(e){
    if(dragging){
      if(dragTrail.length >= 2){
        const a = dragTrail[0], b = dragTrail[dragTrail.length - 1];
        const dt = Math.max(16, b.t - a.t);
        dragging.vx = Math.max(-PHYS.maxV, Math.min(PHYS.maxV, ((b.x - a.x) / dt) * 18));
        dragging.vy = Math.max(-PHYS.maxV, Math.min(PHYS.maxV, ((b.y - a.y) / dt) * 18));
      } else if(e.changedTouches[0]){
        const t = e.changedTouches[0];
        const rect = canvas.getBoundingClientRect();
        const n = getNodeAt(t.clientX - rect.left, t.clientY - rect.top);
        if(n === dragging) startZoomToNode(dragging);
      }
      dragging.fx = null;
      dragging.fy = null;
    }
    dragging = null;
    panning = null;
    dragTrail = [];
    scheduleSaveView();
  }

  function startZoomToNode(node){
    const screen = worldToScreen(node.x, node.y);
    const endScale = Math.min(4.2, Math.max(targetScale * 1.8, 2.2));
    zoomAnim = {
      nodeId: node.id,
      start: performance.now(),
      duration: 520,
      fromScale: scale,
      toScale: endScale,
      fromOx: offsetX,
      fromOy: offsetY,
      toOx: W / 2 - node.x * endScale,
      toOy: H / 2 - node.y * endScale,
      focusX: screen.x,
      focusY: screen.y
    };
    hovered = node;
    hideInfoPanel();
  }

  function tickZoomAnim(){
    if(!zoomAnim) return;
    const t = Math.min(1, (performance.now() - zoomAnim.start) / zoomAnim.duration);
    const ease = 1 - Math.pow(1 - t, 3);
    targetScale = zoomAnim.fromScale + (zoomAnim.toScale - zoomAnim.fromScale) * ease;
    targetOffsetX = zoomAnim.fromOx + (zoomAnim.toOx - zoomAnim.fromOx) * ease;
    targetOffsetY = zoomAnim.fromOy + (zoomAnim.toOy - zoomAnim.fromOy) * ease;
    if(t >= 1){
      const id = zoomAnim.nodeId;
      zoomAnim = null;
      scheduleSaveView();
      setTimeout(() => openChapter(id), 80);
    }
  }

  function openChapter(id){
    if(typeof showCh === 'function') showCh(id);
  }

  function updateInfoPanel(){
    const node = hovered || getKbFocusNode();
    if(!infoPanelEl || !node){
      hideInfoPanel();
      return;
    }
    const status = getChapterStatus(node.id);
    const statusLabel = status === 'mastered' ? 'Maîtrisé' : status === 'started' ? 'Commencé' : 'Non lu';
    const items = node.items?.length ? node.items.join(', ') : '—';
    const cards = getCardCount(node.id);
    const links = (adjacency.get(node.id) || []).length;
    infoPanelEl.innerHTML =
      '<div class="graph-info-head">' +
      '<span class="graph-info-num">Ch. ' + node.id.replace('ch', '') + '</span>' +
      '<span class="graph-info-status graph-info-status--' + status + '">' + statusLabel + '</span>' +
      '</div>' +
      '<h3 class="graph-info-title">' + node.label + '</h3>' +
      '<dl class="graph-info-meta">' +
      '<div><dt>ITEM</dt><dd>' + items + '</dd></div>' +
      '<div><dt>Fiches</dt><dd>' + cards + '</dd></div>' +
      '<div><dt>Liens</dt><dd>' + links + '</dd></div>' +
      '<div><dt>Partie</dt><dd>' + node.part + '</dd></div>' +
      '</dl>' +
      '<p class="graph-info-hint">Entrée · ouvrir · flèches · naviguer</p>';
    infoPanelEl.hidden = false;
  }

  function hideInfoPanel(){
    if(infoPanelEl) infoPanelEl.hidden = true;
  }

  function hideTooltip(){
    if(tooltipEl) tooltipEl.hidden = true;
  }

  function updateBounds(){
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    NODES.forEach(n => {
      minX = Math.min(minX, n.x - 50);
      minY = Math.min(minY, n.y - 50);
      maxX = Math.max(maxX, n.x + 50);
      maxY = Math.max(maxY, n.y + 50);
    });
    if(minX === Infinity) bounds = { minX: -200, minY: -200, maxX: 200, maxY: 200 };
    else bounds = { minX, minY, maxX, maxY };
  }

  function fitGraphToView(animateTargets){
    updateBounds();
    const bw = bounds.maxX - bounds.minX || 1;
    const bh = bounds.maxY - bounds.minY || 1;
    const cx = (bounds.minX + bounds.maxX) / 2;
    const cy = (bounds.minY + bounds.maxY) / 2;
    const pad = 80;
    const fitScale = Math.min((W - pad * 2) / bw, (H - pad * 2) / bh, 1.8);
    const s = Math.max(0.35, fitScale);
    if(animateTargets){
      targetScale = s;
      targetOffsetX = W / 2 - cx * s;
      targetOffsetY = H / 2 - cy * s;
      scale = targetScale;
      offsetX = targetOffsetX;
      offsetY = targetOffsetY;
    }
  }

  function simulate(){
    const now = performance.now();
    edgeReveal = Math.min(1, (now - loadStart) / 2200);
    dashPhase += 0.4;

    tickZoomAnim();

    const smooth = zoomAnim ? 0.35 : 0.14;
    scale += (targetScale - scale) * smooth;
    offsetX += (targetOffsetX - offsetX) * smooth;
    offsetY += (targetOffsetY - offsetY) * smooth;

    for(let i = 0; i < NODES.length; i++){
      for(let j = i + 1; j < NODES.length; j++){
        const a = NODES[i], b = NODES[j];
        let dx = b.x - a.x, dy = b.y - a.y;
        let distSq = dx * dx + dy * dy || 1;
        let dist = Math.sqrt(distSq);
        const force = PHYS.repulse / distSq;
        const fx = (dx / dist) * force;
        const fy = (dy / dist) * force;
        if(a.fx == null){ a.vx -= fx / a.mass; a.vy -= fy / a.mass; }
        if(b.fx == null){ b.vx += fx / b.mass; b.vy += fy / b.mass; }
      }
    }

    EDGES.forEach(e => {
      const a = nodeById.get(e.from);
      const b = nodeById.get(e.to);
      if(!a || !b) return;
      let dx = b.x - a.x, dy = b.y - a.y;
      let dist = Math.sqrt(dx * dx + dy * dy) || 1;
      const force = (dist - PHYS.springLen) * PHYS.springK;
      const fx = (dx / dist) * force;
      const fy = (dy / dist) * force;
      if(a.fx == null){ a.vx += fx; a.vy += fy; }
      if(b.fx == null){ b.vx -= fx; b.vy -= fy; }
    });

    NODES.forEach(n => {
      if(n.fx != null) return;
      n.vx += -n.x * PHYS.centerPull;
      n.vy += -n.y * PHYS.centerPull;
      n.vx *= PHYS.damping;
      n.vy *= PHYS.damping;
      const sp = Math.hypot(n.vx, n.vy);
      if(sp > PHYS.maxV){
        n.vx = (n.vx / sp) * PHYS.maxV;
        n.vy = (n.vy / sp) * PHYS.maxV;
      }
      n.x += n.vx;
      n.y += n.vy;
    });

    particles.forEach(p => {
      p.t += p.speed;
      if(p.t > 1) p.t -= 1;
    });

    updateBounds();
  }

  function edgeHighlighted(e){
    if(hoveredEdge === e) return true;
    if(!hovered) return false;
    return e.from === hovered.id || e.to === hovered.id;
  }

  function applyEdgeStyle(e, hi){
    const style = EDGE_STYLES[e.type] || EDGE_STYLES.concept;
    const color = EDGE_COLORS[e.type] || EDGE_COLORS.concept;
    ctx.setLineDash(style.dash.map(d => d * (hi ? 1.1 : 1)));
    ctx.lineDashOffset = -dashPhase * (hi ? 1.5 : 1);
    ctx.strokeStyle = color;
    ctx.lineWidth = hi ? 3 : 1.4;
    if(hi){
      ctx.shadowColor = color;
      ctx.shadowBlur = 12;
    }
    return color;
  }

  function drawEdge(e){
    const a = nodeById.get(e.from);
    const b = nodeById.get(e.to);
    if(!a || !b) return;

    const hi = edgeHighlighted(e);
    const dimA = nodeMatchesFilter(a) ? 1 : 0.15;
    const dimB = nodeMatchesFilter(b) ? 1 : 0.15;
    const dim = Math.min(dimA, dimB);
    if(searchQuery && dim < 0.4) return;

    const len = Math.hypot(b.x - a.x, b.y - a.y);
    const revealLen = len * edgeReveal;
    if(revealLen < 1 && edgeReveal < 1) return;

    const t = edgeReveal < 1 ? revealLen / len : 1;
    const ex = a.x + (b.x - a.x) * t;
    const ey = a.y + (b.y - a.y) * t;

    const color = applyEdgeStyle(e, hi);
    const alpha = (hi ? 0.95 : 0.35) * dim;
    ctx.globalAlpha = alpha;
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(ex, ey);
    ctx.stroke();
    ctx.shadowBlur = 0;
    ctx.globalAlpha = 1;

    if(edgeReveal >= 1 && dim > 0.5){
      drawEdgeParticle(e, a, b, color, hi);
    }

    const showRelLabel = hi || hoveredEdge === e;
    if(showRelLabel && edgeReveal >= 0.85){
      const style = EDGE_STYLES[e.type] || EDGE_STYLES.concept;
      const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
      const dark = document.documentElement.getAttribute('data-theme') === 'dark';
      ctx.font = '600 11px var(--sans), sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.lineWidth = 4;
      ctx.strokeStyle = dark ? 'rgba(15,17,23,0.85)' : 'rgba(255,255,255,0.95)';
      ctx.fillStyle = color;
      ctx.strokeText(style.label, mx, my);
      ctx.fillText(style.label, mx, my);
    }
  }

  function drawEdgeParticle(e, a, b, color, hi){
    const parts = particles.filter(p => p.edgeIndex === e.idx);
    parts.forEach(p => {
      const px = a.x + (b.x - a.x) * p.t;
      const py = a.y + (b.y - a.y) * p.t;
      ctx.beginPath();
      ctx.arc(px, py, p.size * (hi ? 1.4 : 1), 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.globalAlpha = hi ? 0.9 : 0.55;
      ctx.fill();
      ctx.globalAlpha = 1;
    });
  }

  function drawNodes(){
    const dark = document.documentElement.getAttribute('data-theme') === 'dark';
    NODES.forEach((n, i) => {
      const entrance = nodeEntranceScale(i);
      if(entrance < 0.02) return;

      const match = nodeMatchesFilter(n);
      const isHov = hovered === n;
      const isKb = kbFocusId === n.id;
      const isZoomFocus = zoomAnim && zoomAnim.nodeId === n.id;
      const status = getChapterStatus(n.id);
      const statusColor = STATUS_COLORS[status];
      let r = (isHov || isZoomFocus || isKb ? 30 : 26);
      const alpha = (searchQuery && !match ? 0.2 : 1) * entrance;
      const pulse = isZoomFocus
        ? 1 + 0.08 * Math.sin((performance.now() - zoomAnim.start) / 50)
        : 1;
      r *= pulse * (0.35 + 0.65 * entrance);

      if(isHov || isKb){
        ctx.beginPath();
        ctx.arc(n.x, n.y, r + 14, 0, Math.PI * 2);
        const g = ctx.createRadialGradient(n.x, n.y, r, n.x, n.y, r + 14);
        g.addColorStop(0, (status === 'unread' ? statusColor : n.color) + '50');
        g.addColorStop(1, (status === 'unread' ? statusColor : n.color) + '00');
        ctx.fillStyle = g;
        ctx.globalAlpha = alpha;
        ctx.fill();
      }

      ctx.globalAlpha = alpha;
      ctx.beginPath();
      ctx.arc(n.x, n.y, r + 5, 0, Math.PI * 2);
      ctx.strokeStyle = statusColor;
      ctx.lineWidth = isHov || isKb ? 4 : 3;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
      if(status === 'mastered') ctx.fillStyle = STATUS_COLORS.mastered;
      else if(status === 'started') ctx.fillStyle = STATUS_COLORS.started;
      else ctx.fillStyle = STATUS_COLORS.unread;
      ctx.fill();
      ctx.strokeStyle = isHov || isKb ? '#fff' : (dark ? 'rgba(255,255,255,0.35)' : 'rgba(255,255,255,0.85)');
      ctx.lineWidth = isHov || isKb ? 3.5 : 2;
      ctx.stroke();

      if(isKb){
        ctx.beginPath();
        ctx.arc(n.x, n.y, r + 9, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(8,145,178,0.9)';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 4]);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      ctx.fillStyle = status === 'unread' ? (dark ? '#e2e8f0' : '#fff') : '#fff';
      ctx.font = 'bold ' + (isHov || isKb ? 15 : 13) + 'px var(--sans), sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(n.id.replace('ch', ''), n.x, n.y);

      ctx.fillStyle = isHov || isKb ? (dark ? '#f4f4f5' : '#0f172a') : (dark ? '#9ca3af' : '#64748B');
      ctx.font = (isHov || isKb ? '600' : '500') + ' 11px var(--sans), sans-serif';
      ctx.textBaseline = 'top';
      const label = n.label.length > 22 ? n.label.substring(0, 20) + '…' : n.label;
      ctx.fillText(label, n.x, n.y + r + 8);
      ctx.globalAlpha = 1;
    });
  }

  function draw(){
    const dark = document.documentElement.getAttribute('data-theme') === 'dark';
    ctx.clearRect(0, 0, W, H);

    ctx.save();
    const bgGrad = ctx.createLinearGradient(0, 0, W, H);
    bgGrad.addColorStop(0, dark ? '#12141c' : '#f8fafc');
    bgGrad.addColorStop(1, dark ? '#0d0f14' : '#eef2f7');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, W, H);

    ctx.translate(offsetX, offsetY);
    ctx.scale(scale, scale);

    EDGES.forEach(e => drawEdge(e));
    drawNodes();

    ctx.restore();
    drawMinimap();
    drawLegend();
  }

  function roundRect(c, x, y, w, h, r){
    c.beginPath();
    c.moveTo(x + r, y);
    c.arcTo(x + w, y, x + w, y + h, r);
    c.arcTo(x + w, y + h, x, y + h, r);
    c.arcTo(x, y + h, x, y, r);
    c.arcTo(x, y, x + w, y, r);
    c.closePath();
  }

  function drawLegend(){
    const items = [
      { type: 'sameItem' },
      { type: 'concept' },
      { type: 'samePart' }
    ];
    const x0 = 12, y0 = H - 72;
    const boxW = 168, boxH = 58;
    const dark = document.documentElement.getAttribute('data-theme') === 'dark';

    ctx.save();
    ctx.fillStyle = dark ? 'rgba(22,24,34,0.9)' : 'rgba(255,255,255,0.94)';
    ctx.strokeStyle = 'rgba(8,145,178,0.3)';
    ctx.lineWidth = 1;
    roundRect(ctx, x0 - 8, y0 - 10, boxW, boxH, 10);
    ctx.fill();
    ctx.stroke();

    ctx.font = '600 9px var(--sans), sans-serif';
    ctx.fillStyle = dark ? '#a1a1aa' : '#64748B';
    ctx.textAlign = 'left';
    ctx.fillText('Types de liens', x0, y0 - 2);

    items.forEach((it, i) => {
      const y = y0 + 12 + i * 14;
      const style = EDGE_STYLES[it.type];
      const color = EDGE_COLORS[it.type];
      ctx.strokeStyle = color;
      ctx.lineWidth = 2.5;
      ctx.setLineDash(style.dash);
      ctx.lineDashOffset = 0;
      ctx.beginPath();
      ctx.moveTo(x0, y);
      ctx.lineTo(x0 + 28, y);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = dark ? '#d4d4d8' : '#475569';
      ctx.font = '10px var(--sans), sans-serif';
      ctx.fillText(style.label, x0 + 34, y + 4);
    });

    const sx0 = x0 + boxW + 14;
    const statusItems = [
      { key: 'mastered', label: 'Maîtrisé' },
      { key: 'started', label: 'Commencé' },
      { key: 'unread', label: 'Non lu' }
    ];
    const sboxW = 118, sboxH = 58;
    roundRect(ctx, sx0 - 8, y0 - 10, sboxW, sboxH, 10);
    ctx.fillStyle = dark ? 'rgba(22,24,34,0.9)' : 'rgba(255,255,255,0.94)';
    ctx.fill();
    ctx.stroke();
    ctx.font = '600 9px var(--sans), sans-serif';
    ctx.fillStyle = dark ? '#a1a1aa' : '#64748B';
    ctx.fillText('Chapitres', sx0, y0 - 2);
    statusItems.forEach((it, i) => {
      const y = y0 + 12 + i * 14;
      ctx.beginPath();
      ctx.arc(sx0 + 6, y, 5, 0, Math.PI * 2);
      ctx.fillStyle = STATUS_COLORS[it.key];
      ctx.fill();
      ctx.fillStyle = dark ? '#d4d4d8' : '#475569';
      ctx.font = '10px var(--sans), sans-serif';
      ctx.fillText(it.label, sx0 + 16, y + 4);
    });
    ctx.restore();
  }

  function drawMinimap(){
    if(!mctx || !minimap) return;
    const mw = minimap.width, mh = minimap.height;
    mctx.clearRect(0, 0, mw, mh);
    const pad = 10;
    const bw = bounds.maxX - bounds.minX || 1;
    const bh = bounds.maxY - bounds.minY || 1;
    const s = Math.min((mw - pad * 2) / bw, (mh - pad * 2) / bh);

    const dark = document.documentElement.getAttribute('data-theme') === 'dark';
    mctx.fillStyle = dark ? 'rgba(22,24,34,0.94)' : 'rgba(255,255,255,0.94)';
    mctx.strokeStyle = 'rgba(8,145,178,0.4)';
    mctx.lineWidth = 1;
    roundRect(mctx, 0, 0, mw, mh, 10);
    mctx.fill();
    mctx.stroke();

    const ox = pad + (mw - pad * 2 - bw * s) / 2;
    const oy = pad + (mh - pad * 2 - bh * s) / 2;
    const toM = (n) => ({
      x: ox + (n.x - bounds.minX) * s,
      y: oy + (n.y - bounds.minY) * s
    });

    EDGES.forEach(e => {
      const a = nodeById.get(e.from);
      const b = nodeById.get(e.to);
      if(!a || !b) return;
      const pa = toM(a), pb = toM(b);
      const style = EDGE_STYLES[e.type];
      mctx.setLineDash(style.dash.map(d => d * 0.5));
      mctx.beginPath();
      mctx.moveTo(pa.x, pa.y);
      mctx.lineTo(pb.x, pb.y);
      mctx.strokeStyle = EDGE_COLORS[e.type] + '88';
      mctx.lineWidth = 0.9;
      mctx.stroke();
    });
    mctx.setLineDash([]);

    NODES.forEach(n => {
      const p = toM(n);
      mctx.beginPath();
      mctx.arc(p.x, p.y, 2.8, 0, Math.PI * 2);
      mctx.fillStyle = STATUS_COLORS[getChapterStatus(n.id)];
      mctx.fill();
    });

    const vx0 = (-offsetX / scale - bounds.minX) * s + ox;
    const vy0 = (-offsetY / scale - bounds.minY) * s + oy;
    const vw = (W / scale) * s;
    const vh = (H / scale) * s;
    mctx.fillStyle = 'rgba(8,145,178,0.12)';
    mctx.fillRect(vx0, vy0, vw, vh);
    mctx.strokeStyle = '#0891B2';
    mctx.lineWidth = 1.5;
    mctx.strokeRect(vx0, vy0, vw, vh);
  }

  function animate(){
    simulate();
    draw();
    animId = requestAnimationFrame(animate);
  }

  function destroyGraph(){
    if(animId) cancelAnimationFrame(animId);
    animId = null;
    zoomAnim = null;
    scheduleSaveView();
    hideInfoPanel();
    hideTooltip();
  }

  window.initGraph = initGraph;
  window.destroyGraph = destroyGraph;
})();