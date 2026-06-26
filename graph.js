/* Graph view — force-directed network of chapters and concepts */
(function(){
  const NODES = APP_DATA.chapters.map(ch => ({
    id: ch.id, label: ch.t.replace(/^.*?:\s*/,''), full: ch.t,
    color: CH_COLORS[ch.id], part: ch.part, items: ch.items,
    x: 0, y: 0, vx: 0, vy: 0
  }));

  // Build edges from CONCEPT_MAP
  const EDGES = [];
  const edgeSet = new Set();
  if(typeof CONCEPT_MAP !== 'undefined'){
    Object.entries(CONCEPT_MAP).forEach(([term, info]) => {
      // Find which chapters mention this term
      APP_DATA.chapters.forEach(ch => {
        const pages = APP_DATA.content[ch.id] || [];
        const text = pages.map(p => p[1]).join(' ').toLowerCase();
        if(text.includes(term.toLowerCase()) && ch.id !== info.ch){
          const key = [ch.id, info.ch].sort().join('-');
          if(!edgeSet.has(key)){
            edgeSet.add(key);
            EDGES.push({ from: ch.id, to: info.ch, term });
          }
        }
      });
    });
  }

  let canvas, ctx, W, H, animId, dragging = null, hovered = null;
  let scale = 1, offsetX = 0, offsetY = 0;
  let lastTouch = null, pinchDist = 0;

  function initGraph(){
    canvas = document.getElementById('graphCanvas');
    if(!canvas) return;
    ctx = canvas.getContext('2d');
    resize();
    window.addEventListener('resize', resize);

    // Position nodes in a circle
    const cx = W/2, cy = H/2, r = Math.min(W,H) * 0.35;
    NODES.forEach((n, i) => {
      const angle = (i / NODES.length) * Math.PI * 2 - Math.PI/2;
      n.x = cx + Math.cos(angle) * r * (n.part === 1 ? 1 : 0.6);
      n.y = cy + Math.sin(angle) * r * (n.part === 1 ? 1 : 0.6);
      n.fx = null; n.fy = null;
    });

    // Mouse/touch events
    canvas.addEventListener('mousedown', onDown);
    canvas.addEventListener('mousemove', onMove);
    canvas.addEventListener('mouseup', onUp);
    canvas.addEventListener('wheel', onWheel, {passive:false});
    canvas.addEventListener('touchstart', onTouchStart, {passive:false});
    canvas.addEventListener('touchmove', onTouchMove, {passive:false});
    canvas.addEventListener('touchend', onTouchEnd);

    animate();
  }

  function resize(){
    const rect = canvas.parentElement.getBoundingClientRect();
    W = canvas.width = rect.width;
    H = canvas.height = rect.height;
  }

  function getNodeAt(mx, my){
    const x = (mx - offsetX) / scale;
    const y = (my - offsetY) / scale;
    for(let i = NODES.length-1; i >= 0; i--){
      const n = NODES[i];
      const dx = x - n.x, dy = y - n.y;
      if(dx*dx + dy*dy < 900) return n; // radius 30
    }
    return null;
  }

  function onDown(e){
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left, my = e.clientY - rect.top;
    dragging = getNodeAt(mx, my);
    if(dragging){ dragging.fx = dragging.x; dragging.fy = dragging.y; }
  }
  function onMove(e){
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left, my = e.clientY - rect.top;
    if(dragging){
      dragging.fx = (mx - offsetX) / scale;
      dragging.fy = (my - offsetY) / scale;
      dragging.x = dragging.fx;
      dragging.y = dragging.fy;
    } else {
      hovered = getNodeAt(mx, my);
      canvas.style.cursor = hovered ? 'pointer' : 'grab';
    }
  }
  function onUp(e){
    if(dragging && !dragging.fx){
      // It was a click, not a drag
    }
    if(dragging){
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left, my = e.clientY - rect.top;
      const n = getNodeAt(mx, my);
      if(n === dragging) openChapter(dragging.id);
      dragging.fx = null; dragging.fy = null;
    }
    dragging = null;
  }
  function onWheel(e){
    e.preventDefault();
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left, my = e.clientY - rect.top;
    const newScale = Math.max(0.3, Math.min(3, scale * delta));
    offsetX = mx - (mx - offsetX) * (newScale / scale);
    offsetY = my - (my - offsetY) * (newScale / scale);
    scale = newScale;
  }

  function onTouchStart(e){
    if(e.touches.length === 1){
      const t = e.touches[0];
      const rect = canvas.getBoundingClientRect();
      dragging = getNodeAt(t.clientX - rect.left, t.clientY - rect.top);
      if(dragging){ dragging.fx = dragging.x; dragging.fy = dragging.y; }
      lastTouch = {x: t.clientX, y: t.clientY};
    } else if(e.touches.length === 2){
      dragging = null;
      pinchDist = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
    }
    e.preventDefault();
  }
  function onTouchMove(e){
    if(e.touches.length === 1 && dragging){
      const t = e.touches[0];
      const rect = canvas.getBoundingClientRect();
      dragging.fx = (t.clientX - rect.left - offsetX) / scale;
      dragging.fy = (t.clientY - rect.top - offsetY) / scale;
      dragging.x = dragging.fx;
      dragging.y = dragging.fy;
    } else if(e.touches.length === 2){
      const newDist = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
      const delta = newDist / pinchDist;
      scale = Math.max(0.3, Math.min(3, scale * delta));
      pinchDist = newDist;
    }
    e.preventDefault();
  }
  function onTouchEnd(e){
    if(dragging && lastTouch){
      // tap detection
    }
    dragging = null;
    lastTouch = null;
  }

  function openChapter(id){
    if(typeof showCh === 'function') showCh(id);
  }

  // Force simulation
  function simulate(){
    const alpha = 0.1;
    // Repulsion between all nodes
    for(let i = 0; i < NODES.length; i++){
      for(let j = i+1; j < NODES.length; j++){
        let dx = NODES[j].x - NODES[i].x;
        let dy = NODES[j].y - NODES[i].y;
        let dist = Math.sqrt(dx*dx + dy*dy) || 1;
        let force = 800 / (dist * dist);
        let fx = dx / dist * force;
        let fy = dy / dist * force;
        if(!NODES[i].fx){ NODES[i].vx -= fx; NODES[i].vy -= fy; }
        if(!NODES[j].fx){ NODES[j].vx += fx; NODES[j].vy += fy; }
      }
    }
    // Attraction along edges
    EDGES.forEach(e => {
      const a = NODES.find(n => n.id === e.from);
      const b = NODES.find(n => n.id === e.to);
      if(!a || !b) return;
      let dx = b.x - a.x, dy = b.y - a.y;
      let dist = Math.sqrt(dx*dx + dy*dy) || 1;
      let force = (dist - 120) * 0.005;
      let fx = dx / dist * force;
      let fy = dy / dist * force;
      if(!a.fx){ a.vx += fx; a.vy += fy; }
      if(!b.fx){ b.vx -= fx; b.vy -= fy; }
    });
    // Center gravity
    NODES.forEach(n => {
      if(!n.fx){
        n.vx += (W/2 - n.x) * 0.001;
        n.vy += (H/2 - n.y) * 0.001;
        n.vx *= 0.85; n.vy *= 0.85;
        n.x += n.vx; n.y += n.vy;
        // Bounds
        n.x = Math.max(40, Math.min(W-40, n.x));
        n.y = Math.max(40, Math.min(H-40, n.y));
      }
    });
  }

  function draw(){
    ctx.clearRect(0, 0, W, H);
    ctx.save();
    ctx.translate(offsetX, offsetY);
    ctx.scale(scale, scale);

    // Draw edges
    EDGES.forEach(e => {
      const a = NODES.find(n => n.id === e.from);
      const b = NODES.find(n => n.id === e.to);
      if(!a || !b) return;
      const isHovered = hovered && (hovered.id === a.id || hovered.id === b.id);
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.strokeStyle = isHovered ? 'rgba(13,148,136,0.5)' : 'rgba(13,148,136,0.12)';
      ctx.lineWidth = isHovered ? 2 : 1;
      ctx.stroke();

      // Edge label on hover
      if(isHovered){
        const mx = (a.x + b.x)/2, my = (a.y + b.y)/2;
        ctx.font = '10px sans-serif';
        ctx.fillStyle = 'rgba(13,148,136,0.8)';
        ctx.textAlign = 'center';
        ctx.fillText(e.term, mx, my - 6);
      }
    });

    // Draw nodes
    NODES.forEach(n => {
      const isHov = hovered === n;
      const r = isHov ? 28 : 24;

      // Glow
      if(isHov){
        ctx.beginPath();
        ctx.arc(n.x, n.y, r+6, 0, Math.PI*2);
        ctx.fillStyle = n.color + '30';
        ctx.fill();
      }

      // Circle
      ctx.beginPath();
      ctx.arc(n.x, n.y, r, 0, Math.PI*2);
      ctx.fillStyle = n.color;
      ctx.fill();
      ctx.strokeStyle = isHov ? '#fff' : n.color;
      ctx.lineWidth = isHov ? 3 : 1.5;
      ctx.stroke();

      // Chapter number
      ctx.fillStyle = '#fff';
      ctx.font = `bold ${isHov?16:14}px sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(n.id.replace('ch',''), n.x, n.y);

      // Label
      ctx.fillStyle = isHov ? n.color : 'var(--text2)';
      ctx.font = `${isHov?'600':'500'} 11px sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      const label = n.label.length > 20 ? n.label.substring(0,18)+'…' : n.label;
      ctx.fillText(label, n.x, n.y + r + 4);
    });

    ctx.restore();
  }

  function animate(){
    simulate();
    draw();
    animId = requestAnimationFrame(animate);
  }

  function destroy(){
    if(animId) cancelAnimationFrame(animId);
  }

  // Expose
  window.initGraph = initGraph;
  window.destroyGraph = destroyGraph;
  function destroyGraph(){ destroy(); }
})();
