// interactive-figures.js — Animated interactive SVG figures for GeriatrieApp
// Color scheme: #0891B2 (cyan), #059669 (teal), #164E63 (dark)
// All SVGs are viewBox-based, responsive, theme-aware (currentColor for text, explicit colors for fills)

var INTERACTIVE_FIGURES = {

  // ─── Figure 1.1 : Modèle de décompensation gériatrique de Bouchon ───
  "1.1": {
    title: "Modèle de décompensation gériatrique de Bouchon (1+2+3)",
    svg: `<style>
  .bouchon-svg { font-family: 'Figtree', 'Noto Sans', sans-serif; }
  .bouchon-svg .curve-main {
    fill: none; stroke: #0891B2; stroke-width: 4; stroke-linecap: round;
    stroke-dasharray: none !important; stroke-dashoffset: 0 !important; opacity: 1 !important;
  }
  .bouchon-svg .curve-shadow {
    fill: none; stroke: #22D3EE; stroke-width: 10; stroke-linecap: round; opacity: 0.35;
  }
  .bouchon-svg .threshold-line {
    stroke: #DC2626; stroke-width: 2.5; stroke-dasharray: 8 4; opacity: 1 !important;
  }
  .bouchon-svg .zone1-area { fill: rgba(8,145,178,0.18); opacity: 1 !important; }
  .bouchon-svg .zone2-area { fill: rgba(5,150,105,0.16); opacity: 1 !important; }
  .bouchon-svg .zone3-area { fill: rgba(220,38,38,0.14); opacity: 1 !important; }
  .bouchon-svg .label { fill: currentColor; font-size: 11px; opacity: 1 !important; }
  .bouchon-svg .threshold-label { fill: #DC2626; font-size: 10px; font-weight: 700; opacity: 1 !important; }
  .bouchon-svg .axis-label { fill: currentColor; font-size: 11px; font-weight: 600; opacity: 1 !important; }
  .bouchon-svg .drop-arrow { fill: none; stroke: #DC2626; stroke-width: 2.5; marker-end: url(#bouchon-arr); }
</style>
<svg class="bouchon-svg" viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;display:block;">
  <defs>
    <marker id="bouchon-arr" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <path d="M0,0 L8,3 L0,6 Z" fill="#ef4444"/>
    </marker>
  </defs>
  <!-- Axes -->
  <line x1="60" y1="30" x2="60" y2="280" stroke="currentColor" stroke-width="1.5" opacity="0.35"/>
  <line x1="60" y1="280" x2="500" y2="280" stroke="currentColor" stroke-width="1.5" opacity="0.35"/>
  <text class="axis-label" x="18" y="160" transform="rotate(-90,18,160)" text-anchor="middle">Réserve fonctionnelle</text>
  <text class="axis-label" x="280" y="315" text-anchor="middle">Âge →</text>
  <text x="68" y="40" fill="currentColor" font-size="10" opacity="0.5">100 %</text>
  <text x="68" y="275" fill="currentColor" font-size="10" opacity="0.5">0</text>

  <!-- Zone fills under the curve -->
  <path class="zone1-area" d="M60,280 L60,105 C100,100 140,115 210,145 L210,280 Z"/>
  <path class="zone2-area" d="M210,280 L210,145 C250,160 300,175 350,195 L350,280 Z"/>
  <path class="zone3-area" d="M350,280 L350,195 C390,215 430,245 470,275 L470,280 Z"/>

  <!-- Shadow curve + main decline curve (vraie courbe) -->
  <path class="curve-shadow" d="M60,100 C100,95 140,110 200,130 C260,150 310,165 350,185 C390,205 430,240 470,272"/>
  <path class="curve-main" d="M60,100 C100,95 140,110 200,130 C260,150 310,165 350,185 C390,205 430,240 470,272"/>

  <!-- Seuil d'insuffisance -->
  <line class="threshold-line" x1="55" y1="240" x2="490" y2="240"/>
  <text class="threshold-label" x="492" y="236">Seuil</text>
  <text class="threshold-label" x="492" y="250">d'insuffisance</text>

  <!-- Separators (1)(2)(3) -->
  <line x1="210" y1="30" x2="210" y2="280" stroke="currentColor" stroke-dasharray="4 3" stroke-width="1" opacity="0.2"/>
  <line x1="350" y1="30" x2="350" y2="280" stroke="currentColor" stroke-dasharray="4 3" stroke-width="1" opacity="0.2"/>

  <!-- Labels zones -->
  <text class="label" x="135" y="52" text-anchor="middle" font-weight="800" fill="#22D3EE" font-size="14">(1)</text>
  <text class="label" x="135" y="68" text-anchor="middle" font-size="10" fill="#22D3EE">Vieillissement</text>
  <text class="label" x="135" y="82" text-anchor="middle" font-size="10" fill="#22D3EE">physiologique</text>

  <text class="label" x="280" y="52" text-anchor="middle" font-weight="800" fill="#34D399" font-size="14">(2)</text>
  <text class="label" x="280" y="68" text-anchor="middle" font-size="10" fill="#34D399">Maladie(s)</text>
  <text class="label" x="280" y="82" text-anchor="middle" font-size="10" fill="#34D399">chronique(s)</text>

  <text class="label" x="420" y="52" text-anchor="middle" font-weight="800" fill="#F87171" font-size="14">(3)</text>
  <text class="label" x="420" y="68" text-anchor="middle" font-size="10" fill="#F87171">Stress aigu</text>
  <text class="label" x="420" y="82" text-anchor="middle" font-size="9.5" fill="#F87171">décompensant</text>

  <!-- Flèches de décompensation sous le seuil -->
  <path class="drop-arrow" d="M300,195 L300,255"/>
  <path class="drop-arrow" d="M400,220 L400,255"/>
  <text x="310" y="250" fill="#ef4444" font-size="9" font-weight="600">décompensation</text>

  <!-- Intervention (remontée de réserve) -->
  <path d="M250,170 C270,155 290,145 310,140" fill="none" stroke="#34D399" stroke-width="2" stroke-dasharray="5 3"/>
  <text x="318" y="138" fill="#34D399" font-size="9" font-weight="600">Effet de l'intervention</text>
</svg>`
  },

  // ─── Figure 3.1 : Critères de fragilité de Fried ───
  "3.1": {
    title: "Critères de fragilité de Fried",
    svg: `<style>
  .fried-svg { font-family: 'Figtree', 'Noto Sans', sans-serif; }
  .fried-svg .axis-line { stroke: #0891B2; stroke-width: 1; opacity: 0.35; }
  .fried-svg .radar-grid { fill: none; stroke: currentColor; stroke-width: 0.5; opacity: 0.12; }
  .fried-svg .radar-fill {
    fill: rgba(8,145,178,0.18); stroke: #0891B2; stroke-width: 2;
    stroke-dasharray: 800; stroke-dashoffset: 800;
    animation: fried-draw 1.5s 0.5s ease-out forwards;
  }
  .fried-svg .radar-fill-bg {
    fill: rgba(8,145,178,0.06); stroke: none;
    opacity: 0; animation: fried-fade 0.8s 1.8s forwards;
  }
  .fried-svg .point-dot {
    fill: #0891B2; stroke: #fff; stroke-width: 2; r: 5;
    opacity: 0; animation: fried-fade 0.4s forwards;
  }
  .fried-svg .point-dot:nth-child(1) { animation-delay: 1.6s; }
  .fried-svg .axis-label-text {
    fill: currentColor; font-size: 10.5px; font-weight: 600; cursor: pointer;
    transition: fill 0.2s;
  }
  .fried-svg .axis-label-text:hover { fill: #0891B2; }
  .fried-svg .crit-detail { opacity: 0; pointer-events: none; transition: opacity 0.3s; }
  .fried-svg .crit-btn { cursor: pointer; }
  .fried-svg .crit-btn:hover .crit-detail { opacity: 1; }
  .fried-svg .center-label { fill: #164E63; font-size: 10px; font-weight: 700; }
  @keyframes fried-draw { to { stroke-dashoffset: 0; } }
  @keyframes fried-fade { to { opacity: 1; } }
</style>
<svg class="fried-svg" viewBox="0 0 480 420" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;">
  <defs>
    <filter id="fried-glow"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  </defs>
  <!-- Pentagon grid (3 levels) -->
  <polygon class="radar-grid" points="240,60 390,157 358,330 122,330 90,157"/>
  <polygon class="radar-grid" points="240,120 330,178 310,290 170,290 150,178"/>
  <polygon class="radar-grid" points="240,180 270,199 262,250 218,250 210,199"/>

  <!-- Axis lines -->
  <line class="axis-line" x1="240" y1="195" x2="240" y2="60"/>
  <line class="axis-line" x1="240" y1="195" x2="390" y2="157"/>
  <line class="axis-line" x1="240" y1="195" x2="358" y2="330"/>
  <line class="axis-line" x1="240" y1="195" x2="122" y2="330"/>
  <line class="axis-line" x1="240" y1="195" x2="90" y2="157"/>

  <!-- Radar filled area (frail person — 4/5 criteria met) -->
  <polygon class="radar-fill-bg" points="240,90 360,165 338,310 145,305 105,162"/>
  <polygon class="radar-fill" points="240,90 360,165 338,310 145,305 105,162" filter="url(#fried-glow)"/>

  <!-- Data points -->
  <circle cx="240" cy="90" class="point-dot" style="animation-delay:1.6s"/>
  <circle cx="360" cy="165" class="point-dot" style="animation-delay:1.8s"/>
  <circle cx="338" cy="310" class="point-dot" style="animation-delay:2.0s"/>
  <circle cx="145" cy="305" class="point-dot" style="animation-delay:2.2s"/>
  <circle cx="105" cy="162" class="point-dot" style="animation-delay:2.4s"/>

  <!-- Axis labels (clickable) -->
  <g class="crit-btn">
    <text class="axis-label-text" x="240" y="38" text-anchor="middle">Perte de poids</text>
    <rect x="175" y="22" width="130" height="52" rx="6" fill="rgba(22,78,99,0.92)" class="crit-detail"/>
    <text x="240" y="42" text-anchor="middle" fill="#fff" font-size="9" class="crit-detail">≥ 4.5 kg en 1 an</text>
    <text x="240" y="55" text-anchor="middle" fill="#fff" font-size="9" class="crit-detail">ou ≥ 5% du poids</text>
    <text x="240" y="68" text-anchor="middle" fill="#0891B2" font-size="8" class="crit-detail">↳ Clic pour fermer</text>
  </g>

  <g class="crit-btn">
    <text class="axis-label-text" x="410" y="150" text-anchor="start">Fatigue</text>
    <rect x="395" y="125" width="80" height="44" rx="6" fill="rgba(22,78,99,0.92)" class="crit-detail"/>
    <text x="435" y="144" text-anchor="middle" fill="#fff" font-size="9" class="crit-detail">Échelle CES-D</text>
    <text x="435" y="157" text-anchor="middle" fill="#fff" font-size="9" class="crit-detail">≥ 2 items</text>
  </g>

  <g class="crit-btn">
    <text class="axis-label-text" x="375" y="345" text-anchor="start">Activités physiques</text>
    <rect x="360" y="340" width="115" height="44" rx="6" fill="rgba(22,78,99,0.92)" class="crit-detail"/>
    <text x="417" y="359" text-anchor="middle" fill="#fff" font-size="9" class="crit-detail">IPAQ kcal/sem</text>
    <text x="417" y="372" text-anchor="middle" fill="#fff" font-size="9" class="crit-detail">dans le quintile bas</text>
  </g>

  <g class="crit-btn">
    <text class="axis-label-text" x="105" y="345" text-anchor="end">Vitesse de marche</text>
    <rect x="10" y="340" width="110" height="44" rx="6" fill="rgba(22,78,99,0.92)" class="crit-detail"/>
    <text x="65" y="359" text-anchor="middle" fill="#fff" font-size="9" class="crit-detail">≤ 0.8 m/s</text>
    <text x="65" y="372" text-anchor="middle" fill="#fff" font-size="9" class="crit-detail">sur 4m ou 15 pieds</text>
  </g>

  <g class="crit-btn">
    <text class="axis-label-text" x="75" y="150" text-anchor="end">Force musculaire</text>
    <rect x="0" y="125" width="88" height="44" rx="6" fill="rgba(22,78,99,0.92)" class="crit-detail"/>
    <text x="44" y="144" text-anchor="middle" fill="#fff" font-size="9" class="crit-detail">Grip strength</text>
    <text x="44" y="157" text-anchor="middle" fill="#fff" font-size="9" class="crit-detail">seuil bas</text>
  </g>

  <!-- Center label -->
  <text class="center-label" x="240" y="200" text-anchor="middle">Fragile</text>
  <text class="center-label" x="240" y="214" text-anchor="middle" font-size="8">(≥ 3/5)</text>

  <!-- Legend -->
  <rect x="170" y="390" width="12" height="8" rx="2" fill="rgba(8,145,178,0.18)" stroke="#0891B2" stroke-width="1"/>
  <text x="188" y="398" fill="currentColor" font-size="9">Profil fragile type (4/5 critères)</text>
</svg>`
  },

  // ─── Figure 7.x : Arthrose du genou ───
  "7.x": {
    title: "Arthrose du genou — coupe anatomique simplifiée",
    svg: `<style>
  .knee-svg { font-family: 'Figtree', 'Noto Sans', sans-serif; }
  .knee-svg .bone { fill: #e8ddd3; stroke: #164E63; stroke-width: 1.5; }
  .knee-svg .cartilage-healthy { fill: #059669; opacity: 0.7; }
  .knee-svg .cartilage-degraded { fill: #f59e0b; opacity: 0.6; }
  .knee-svg .cartilage-lost { fill: #ef4444; opacity: 0.5; }
  .knee-svg .synovial { fill: rgba(8,145,178,0.25); stroke: #0891B2; stroke-width: 0.8; stroke-dasharray: 3 2; }
  .knee-svg .meniscus { fill: #0891B2; opacity: 0.5; }
  .knee-svg .label-group text { fill: currentColor; font-size: 10px; opacity: 1; transition: opacity 0.3s; }
  .knee-svg .struct:hover + .label-group text,
  .knee-svg .struct:hover ~ .label-group text { opacity: 1; }
  .knee-svg .hover-zone { fill: transparent; cursor: pointer; }
  .knee-svg .knee-tooltip { opacity: 0; transition: opacity 0.3s; pointer-events: none; }
  .knee-svg .grad-bar { opacity: 0; animation: knee-fade 0.6s forwards; }
  .knee-svg .grad-bar:nth-child(1) { animation-delay: 0.5s; }
  .knee-svg .grad-bar:nth-child(2) { animation-delay: 0.7s; }
  .knee-svg .grad-bar:nth-child(3) { animation-delay: 0.9s; }
  .knee-svg .knee-label { opacity: 1; animation: knee-fade 0.5s forwards; }
  @keyframes knee-fade { to { opacity: 1; } }
  @keyframes knee-pulse { 0%,100%{opacity:0.5} 50%{opacity:1} }
</style>
<svg class="knee-svg" viewBox="0 0 440 420" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;">
  <defs>
    <linearGradient id="knee-grad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#059669"/>
      <stop offset="50%" stop-color="#f59e0b"/>
      <stop offset="100%" stop-color="#ef4444"/>
    </linearGradient>
    <filter id="knee-shadow"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.15"/></filter>
  </defs>

  <!-- Femur (top bone) -->
  <path class="bone" filter="url(#knee-shadow)" d="M140,30 C140,30 160,25 220,25 C280,25 300,30 300,30 L310,100 C310,120 290,145 270,155 L170,155 C150,145 130,120 130,100 Z"/>
  <!-- Femur cartilage (degraded gradient) -->
  <path class="cartilage-degraded" d="M155,150 C155,148 180,140 220,138 C260,140 285,148 285,150 L280,162 C260,158 240,156 220,156 C200,156 180,158 160,162 Z"/>

  <!-- Joint space / synovial fluid -->
  <ellipse class="synovial" cx="220" cy="175" rx="70" ry="12"/>

  <!-- Menisci -->
  <path class="meniscus" d="M150,172 C155,165 175,162 200,162 L200,172 C180,168 160,168 150,172 Z"/>
  <path class="meniscus" d="M290,172 C285,165 265,162 240,162 L240,172 C260,168 280,168 290,172 Z"/>

  <!-- Tibia (bottom bone) -->
  <path class="bone" filter="url(#knee-shadow)" d="M145,190 C160,182 190,178 220,178 C250,178 280,182 295,190 L300,260 C300,270 295,350 295,350 L145,350 C145,350 140,270 140,260 Z"/>
  <!-- Tibia cartilage -->
  <path class="cartilage-healthy" d="M160,185 C175,180 195,178 220,178 C245,178 265,180 280,185 L275,195 C260,190 240,188 220,188 C200,188 180,190 165,195 Z"/>

  <!-- Hover zones for interaction -->
  <rect x="130" y="25" width="180" height="135" fill="transparent" class="hover-zone"
        onmouseover="this.parentNode.querySelector('.ktt-femur').style.opacity=1"
        onmouseout="this.parentNode.querySelector('.ktt-femur').style.opacity=0"/>
  <rect x="140" y="160" width="160" height="30" fill="transparent" class="hover-zone"
        onmouseover="this.parentNode.querySelector('.ktt-joint').style.opacity=1"
        onmouseout="this.parentNode.querySelector('.ktt-joint').style.opacity=0"/>
  <rect x="135" y="185" width="170" height="170" fill="transparent" class="hover-zone"
        onmouseover="this.parentNode.querySelector('.ktt-tibia').style.opacity=1"
        onmouseout="this.parentNode.querySelector('.ktt-tibia').style.opacity=0"/>

  <!-- Labels (appear on hover) -->
  <g class="knee-tooltip ktt-femur" style="opacity:0;transition:opacity 0.3s">
    <rect x="10" y="40" width="105" height="55" rx="6" fill="rgba(22,78,99,0.92)" stroke="#0891B2" stroke-width="1"/>
    <text x="62" y="58" text-anchor="middle" fill="#fff" font-size="10" font-weight="600">Fémur</text>
    <text x="62" y="73" text-anchor="middle" fill="#fff" font-size="8.5">Os proximal</text>
    <text x="62" y="86" text-anchor="middle" fill="#fff" font-size="8.5">Cartilage dégradé</text>
  </g>
  <g class="knee-tooltip ktt-joint" style="opacity:0;transition:opacity 0.3s">
    <rect x="295" y="155" width="135" height="45" rx="6" fill="rgba(22,78,99,0.92)" stroke="#0891B2" stroke-width="1"/>
    <text x="362" y="172" text-anchor="middle" fill="#fff" font-size="10" font-weight="600">Espace articulaire</text>
    <text x="362" y="188" text-anchor="middle" fill="#fff" font-size="8.5">Liquide synovial réduit</text>
  </g>
  <g class="knee-tooltip ktt-tibia" style="opacity:0;transition:opacity 0.3s">
    <rect x="295" y="250" width="135" height="55" rx="6" fill="rgba(22,78,99,0.92)" stroke="#059669" stroke-width="1"/>
    <text x="362" y="268" text-anchor="middle" fill="#fff" font-size="10" font-weight="600">Tibia</text>
    <text x="362" y="283" text-anchor="middle" fill="#fff" font-size="8.5">Os distal</text>
    <text x="362" y="296" text-anchor="middle" fill="#fff" font-size="8.5">Cartilage préservé (stade précoce)</text>
  </g>

  <!-- Degeneration gradient bar -->
  <text class="knee-label" x="220" y="380" text-anchor="middle" fill="currentColor" font-size="10" font-weight="600" style="animation-delay:1.2s">Gradient de dégénérescence</text>
  <rect x="100" y="392" width="240" height="12" rx="6" fill="url(#knee-grad)" class="grad-bar"/>
  <text x="100" y="418" fill="#059669" font-size="8" class="knee-label" style="animation-delay:1.4s">Sain</text>
  <text x="340" y="418" fill="#ef4444" font-size="8" text-anchor="end" class="knee-label" style="animation-delay:1.4s">Détruit</text>
  <text x="220" y="418" fill="#f59e0b" font-size="8" text-anchor="middle" class="knee-label" style="animation-delay:1.4s">Dégradé</text>

  <!-- Static labels for key structures -->
  <text class="knee-label" x="220" y="12" text-anchor="middle" fill="currentColor" font-size="11" font-weight="700" style="animation-delay:0.3s">Arthrose du genou</text>

  <!-- PCL / ACL simplified lines -->
  <line x1="200" y1="158" x2="210" y2="190" stroke="#0891B2" stroke-width="1.5" opacity="0.4" stroke-dasharray="4 2"/>
  <line x1="240" y1="158" x2="230" y2="190" stroke="#0891B2" stroke-width="1.5" opacity="0.4" stroke-dasharray="4 2"/>
  <text x="195" y="178" fill="#0891B2" font-size="7" text-anchor="end" class="knee-label" style="animation-delay:0.8s">LCA</text>
  <text x="245" y="178" fill="#0891B2" font-size="7" text-anchor="start" class="knee-label" style="animation-delay:0.8s">LCP</text>
</svg>`
  },

  // ─── Figure 9.x : Cascade de décompensation cognitive ───
  "9.x": {
    title: "Cascade de décompensation cognitive",
    svg: `<style>
  .cog-svg { font-family: 'Figtree', 'Noto Sans', sans-serif; }
  .cog-svg .box { rx: 10; ry: 10; stroke-width: 2; }
  .cog-svg .box-normal { fill: rgba(5,150,105,0.12); stroke: #059669; }
  .cog-svg .box-mci { fill: rgba(8,145,178,0.12); stroke: #0891B2; }
  .cog-svg .box-dementia { fill: rgba(239,68,68,0.10); stroke: #ef4444; }
  .cog-svg .box-risk { fill: rgba(22,78,99,0.08); stroke: #164E63; stroke-width: 1.5; rx: 8; ry: 8; }
  .cog-svg .box-label { fill: currentColor; font-size: 11px; font-weight: 600; }
  .cog-svg .box-sub { fill: currentColor; font-size: 8.5px; opacity: 0.7; }
  .cog-svg .arrow-path {
    fill: none; stroke: #0891B2; stroke-width: 2.5; stroke-linecap: round;
    marker-end: url(#cog-arrow);
    stroke-dasharray: 200; stroke-dashoffset: 200;
  }
  .cog-svg .arrow1 { animation: cog-draw 0.8s 0.5s ease-out forwards; }
  .cog-svg .arrow2 { animation: cog-draw 0.8s 1.5s ease-out forwards; }
  .cog-svg .arrow3 { animation: cog-draw 0.6s 2.3s ease-out forwards; }
  .cog-svg .arrow4 { animation: cog-draw 0.6s 2.7s ease-out forwards; }
  .cog-svg .arrow5 { animation: cog-draw 0.6s 3.0s ease-out forwards; }
  .cog-svg .arrow-risk { stroke: #164E63; stroke-width: 1.5; stroke-dasharray: 5 3; opacity: 0.5; marker-end: none; }
  .cog-svg .risk-label { fill: #164E63; font-size: 8.5px; opacity: 0; animation: cog-fade 0.5s forwards; }
  .cog-svg .risk-label:nth-of-type(1) { animation-delay: 2.0s; }
  .cog-svg .risk-label:nth-of-type(2) { animation-delay: 2.3s; }
  .cog-svg .risk-label:nth-of-type(3) { animation-delay: 2.6s; }
  .cog-svg .box-node { opacity: 0; animation: cog-fade 0.6s forwards; }
  .cog-svg .box-node:nth-of-type(1) { animation-delay: 0s; }
  .cog-svg .box-node:nth-of-type(2) { animation-delay: 1.0s; }
  .cog-svg .box-node:nth-of-type(3) { animation-delay: 2.0s; }
  .cog-svg .risk-node { opacity: 0; animation: cog-fade 0.5s forwards; }
  .cog-svg .risk-node:nth-of-type(1) { animation-delay: 2.5s; }
  .cog-svg .risk-node:nth-of-type(2) { animation-delay: 2.8s; }
  .cog-svg .risk-node:nth-of-type(3) { animation-delay: 3.1s; }
  @keyframes cog-draw { to { stroke-dashoffset: 0; } }
  @keyframes cog-fade { to { opacity: 1; } }
</style>
<svg class="cog-svg" viewBox="0 0 560 340" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;">
  <defs>
    <marker id="cog-arrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
      <path d="M0,0 L8,3 L0,6" fill="none" stroke="#0891B2" stroke-width="1.5"/>
    </marker>
    <marker id="cog-arrow-dark" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
      <path d="M0,0 L8,3 L0,6" fill="none" stroke="#164E63" stroke-width="1.5"/>
    </marker>
  </defs>

  <!-- Main flow: 3 boxes -->
  <g class="box-node">
    <rect class="box box-normal" x="20" y="130" width="130" height="70"/>
    <text class="box-label" x="85" y="158" text-anchor="middle">Vieillissement</text>
    <text class="box-label" x="85" y="173" text-anchor="middle">normal</text>
    <text class="box-sub" x="85" y="190" text-anchor="middle">Subjective Cognitive</text>
    <text class="box-sub" x="85" y="200" text-anchor="middle">Complaint (SCC)</text>
  </g>

  <g class="box-node">
    <rect class="box box-mci" x="210" y="130" width="140" height="70"/>
    <text class="box-label" x="280" y="155" text-anchor="middle">MCI</text>
    <text class="box-sub" x="280" y="170" text-anchor="middle">Mild Cognitive Impairment</text>
    <text class="box-sub" x="280" y="183" text-anchor="middle">Trouble cognitif léger</text>
    <text class="box-sub" x="280" y="196" text-anchor="middle">pas d'AVD affectées</text>
  </g>

  <g class="box-node">
    <rect class="box box-dementia" x="410" y="130" width="130" height="70"/>
    <text class="box-label" x="475" y="155" text-anchor="middle">Démence</text>
    <text class="box-sub" x="475" y="170" text-anchor="middle">Alzheimer, Vasculaire,</text>
    <text class="box-sub" x="475" y="183" text-anchor="middle">Corps de Lewy, Fronto-</text>
    <text class="box-sub" x="475" y="196" text-anchor="middle">temporale…</text>
  </g>

  <!-- Main arrows -->
  <path class="arrow-path arrow1" d="M150,165 L210,165"/>
  <path class="arrow-path arrow2" d="M350,165 L410,165"/>

  <!-- Transition labels on arrows -->
  <text x="180" y="155" text-anchor="middle" fill="#0891B2" font-size="8" opacity="0" style="animation:cog-fade 0.5s 1.2s forwards">~10-15%/an</text>
  <text x="380" y="155" text-anchor="middle" fill="#0891B2" font-size="8" opacity="0" style="animation:cog-fade 0.5s 2.2s forwards">~10-15%/an</text>

  <!-- Risk factor boxes (below) -->
  <g class="risk-node">
    <rect class="box box-risk" x="140" y="260" width="100" height="55"/>
    <text class="box-label" x="190" y="282" text-anchor="middle" font-size="9.5" fill="#164E63">Facteurs</text>
    <text class="box-label" x="190" y="295" text-anchor="middle" font-size="9.5" fill="#164E63">vasculaires</text>
    <text class="box-sub" x="190" y="308" text-anchor="middle" fill="#164E63">HTA, diabète, AVC</text>
  </g>

  <g class="risk-node">
    <rect class="box box-risk" x="270" y="260" width="100" height="55"/>
    <text class="box-label" x="320" y="282" text-anchor="middle" font-size="9.5" fill="#164E63">Facteurs</text>
    <text class="box-label" x="320" y="295" text-anchor="middle" font-size="9.5" fill="#164E63">neurodégénératifs</text>
    <text class="box-sub" x="320" y="308" text-anchor="middle" fill="#164E63">ApoE4, amyloïde</text>
  </g>

  <g class="risk-node">
    <rect class="box box-risk" x="400" y="260" width="100" height="55"/>
    <text class="box-label" x="450" y="282" text-anchor="middle" font-size="9.5" fill="#164E63">Facteurs</text>
    <text class="box-label" x="450" y="295" text-anchor="middle" font-size="9.5" fill="#164E63">modifiables</text>
    <text class="box-sub" x="450" y="308" text-anchor="middle" fill="#164E63">Isolement, inactivité</text>
  </g>

  <!-- Dashed arrows from risk factors up to MCI -->
  <path class="arrow-path arrow-risk arrow3" d="M190,260 L250,200" marker-end="url(#cog-arrow-dark)"/>
  <path class="arrow-path arrow-risk arrow4" d="M320,260 L280,200" marker-end="url(#cog-arrow-dark)"/>
  <path class="arrow-path arrow-risk arrow5" d="M450,260 L350,200" marker-end="url(#cog-arrow-dark)"/>

  <!-- Reversibility arrow (from MCI back down — dashed green) -->
  <path d="M210,200 C180,230 160,240 140,230" fill="none" stroke="#059669" stroke-width="1.5" stroke-dasharray="5 3" opacity="0" style="animation:cog-fade 0.6s 3.5s forwards"/>
  <text x="130" y="248" text-anchor="middle" fill="#059669" font-size="8" opacity="0" style="animation:cog-fade 0.5s 3.8s forwards">Réversible ?</text>

  <!-- Title -->
  <text x="280" y="22" text-anchor="middle" fill="currentColor" font-size="13" font-weight="700">Cascade de décompensation cognitive</text>
  <line x1="100" y1="32" x2="460" y2="32" stroke="#0891B2" stroke-width="1.5" opacity="0.3"/>

  <!-- Prevalence annotations -->
  <rect x="155" y="55" width="250" height="50" rx="8" fill="rgba(8,145,178,0.06)" stroke="none"/>
  <text x="280" y="72" text-anchor="middle" fill="currentColor" font-size="9" opacity="0" style="animation:cog-fade 0.5s 4s forwards">Prévalence MCI : 15-20% des > 65 ans</text>
  <text x="280" y="87" text-anchor="middle" fill="currentColor" font-size="9" opacity="0" style="animation:cog-fade 0.5s 4.3s forwards">Conversion MCI → démence : 10-15% / an</text>
  <text x="280" y="100" text-anchor="middle" fill="currentColor" font-size="9" opacity="0" style="animation:cog-fade 0.5s 4.6s forwards">Démence : ~5% des > 65 ans, ~20% des > 80 ans</text>
</svg>`
  },

  // ─── Figure 13.x : Stades d'escarre ───
  "13.x": {
    title: "Stades d'escarre — progression cutanée",
    svg: `<style>
  .escarre-svg { font-family: 'Figtree', 'Noto Sans', sans-serif; }
  .escarre-svg .skin-layer { stroke: #164E63; stroke-width: 1; }
  .escarre-svg .epidermis { fill: #fcd5b8; }
  .escarre-svg .dermis { fill: #e8a87c; }
  .escarre-svg .subcutaneous { fill: #d4956b; }
  .escarre-svg .muscle { fill: #c0392b; opacity: 0.6; }
  .escarre-svg .bone-layer { fill: #ecf0f1; stroke: #7f8c8d; stroke-width: 1.5; }
  .escarre-svg .stage-highlight {
    fill: rgba(239,68,68,0.25); stroke: #ef4444; stroke-width: 2; stroke-dasharray: 4 2;
    opacity: 1; transition: opacity 0.4s;
  }
  .escarre-svg .stage-box { cursor: pointer; }
  .escarre-svg .stage-box:hover .stage-highlight,
  .escarre-svg .stage-box.active .stage-highlight { opacity: 1; }
  .escarre-svg .stage-box:hover .stage-info,
  .escarre-svg .stage-box.active .stage-info { opacity: 1; }
  .escarre-svg .stage-info { opacity: 1; transition: opacity 0.3s; }
  .escarre-svg .stage-btn {
    rx: 8; ry: 8; cursor: pointer; transition: all 0.3s;
    stroke-width: 2;
  }
  .escarre-svg .stage-btn:hover { filter: brightness(1.1); }
  .escarre-svg .stage-btn.s1 { fill: rgba(8,145,178,0.12); stroke: #0891B2; }
  .escarre-svg .stage-btn.s2 { fill: rgba(5,150,105,0.12); stroke: #059669; }
  .escarre-svg .stage-btn.s3 { fill: rgba(245,158,11,0.12); stroke: #f59e0b; }
  .escarre-svg .stage-btn.s4 { fill: rgba(239,68,68,0.10); stroke: #ef4444; }
  .escarre-svg .stage-btn-label { fill: currentColor; font-size: 11px; font-weight: 700; pointer-events: none; }
  .escarre-svg .skin-title { fill: currentColor; font-size: 9px; font-weight: 600; }
  .escarre-svg .reveal-group { opacity: 0; animation: esc-auto-reveal 0.5s ease-out forwards; }
  .escarre-svg #esc-r1 { animation-delay: 0.6s; }
  .escarre-svg #esc-r2 { animation-delay: 1.2s; }
  .escarre-svg #esc-r3 { animation-delay: 1.8s; }
  .escarre-svg #esc-r4 { animation-delay: 2.4s; }
  .escarre-svg .prog-bar { height: 4px; rx: 2; transition: width 0.5s; }
  .escarre-svg .title-line {
    stroke-dasharray: 360; stroke-dashoffset: 360;
    animation: esc-draw 1s ease-out forwards;
  }
  .escarre-svg .stage-btn { animation: esc-pulse 0.5s ease-out forwards; }
  .escarre-svg .stage-btn:nth-of-type(1) { animation-delay: 0.2s; }
  .escarre-svg .stage-btn:nth-of-type(2) { animation-delay: 0.35s; }
  .escarre-svg .stage-btn:nth-of-type(3) { animation-delay: 0.5s; }
  .escarre-svg .stage-btn:nth-of-type(4) { animation-delay: 0.65s; }
  @keyframes esc-draw { to { stroke-dashoffset: 0; } }
  @keyframes esc-pulse {
    0% { opacity: 0; transform: scale(0.9); }
    100% { opacity: 1; transform: scale(1); }
  }
  @keyframes esc-auto-reveal { to { opacity: 1; } }
</style>
<svg class="escarre-svg" viewBox="0 0 520 460" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;">
  <defs>
    <linearGradient id="skin-grad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#fcd5b8"/>
      <stop offset="25%" stop-color="#e8a87c"/>
      <stop offset="55%" stop-color="#d4956b"/>
      <stop offset="80%" stop-color="#c0392b"/>
      <stop offset="100%" stop-color="#ecf0f1"/>
    </linearGradient>
  </defs>

  <text x="260" y="22" text-anchor="middle" fill="currentColor" font-size="13" font-weight="700">Stades d'escarre</text>
  <line class="title-line" x1="80" y1="32" x2="440" y2="32" stroke="#0891B2" stroke-width="1.5" opacity="0.3"/>

  <!-- Anatomical cross-section (4 columns for 4 stages) -->
  <!-- Each column shows the same skin layers but with progressive damage -->

  <!-- ===== STAGE 1 ===== -->
  <g class="stage-box" id="esc-stage1" onclick="toggleEscarreStage(1)">
    <!-- Button -->
    <rect class="stage-btn s1" x="15" y="42" width="115" height="32"/>
    <text class="stage-btn-label" x="72" y="63" text-anchor="middle" fill="#0891B2">Stade I</text>

    <!-- Skin diagram -->
    <g class="reveal-group" id="esc-r1">
      <!-- Epidermis -->
      <rect class="skin-layer epidermis" x="25" y="90" width="95" height="25"/>
      <!-- Dermis -->
      <rect class="skin-layer dermis" x="25" y="115" width="95" height="35"/>
      <!-- Subcutaneous -->
      <rect class="skin-layer subcutaneous" x="25" y="150" width="95" height="35"/>
      <!-- Muscle -->
      <rect class="skin-layer muscle" x="25" y="185" width="95" height="30"/>
      <!-- Bone -->
      <rect class="skin-layer bone-layer" x="25" y="215" width="95" height="18" rx="4"/>

      <!-- Damage highlight (epidermis only) -->
      <rect class="stage-highlight" x="28" y="88" width="89" height="29" rx="3"/>

      <!-- Layer labels -->
      <text class="skin-title" x="72" y="106" text-anchor="middle" fill="#164E63">Épiderme</text>
      <text class="skin-title" x="72" y="136" text-anchor="middle" fill="#164E63">Derme</text>
      <text class="skin-title" x="72" y="172" text-anchor="middle" fill="#fff" font-size="8">Hypoderme</text>
      <text class="skin-title" x="72" y="204" text-anchor="middle" fill="#fff" font-size="8">Muscle</text>
      <text class="skin-title" x="72" y="228" text-anchor="middle" fill="#7f8c8d" font-size="8">Os</text>

      <!-- Info box -->
      <g class="stage-info">
        <rect x="10" y="245" width="110" height="65" rx="6" fill="rgba(22,78,99,0.92)" stroke="#0891B2" stroke-width="1"/>
        <text x="65" y="262" text-anchor="middle" fill="#fff" font-size="9.5" font-weight="600">Érythème non</text>
        <text x="65" y="275" text-anchor="middle" fill="#fff" font-size="9.5" font-weight="600">blanchissant</text>
        <text x="65" y="292" text-anchor="middle" fill="#0891B2" font-size="8.5">Peau intacte</text>
        <text x="65" y="304" text-anchor="middle" fill="#0891B2" font-size="8.5">Rougeur persistante</text>
      </g>
    </g>
  </g>

  <!-- ===== STAGE 2 ===== -->
  <g class="stage-box" id="esc-stage2" onclick="toggleEscarreStage(2)">
    <rect class="stage-btn s2" x="140" y="42" width="115" height="32"/>
    <text class="stage-btn-label" x="197" y="63" text-anchor="middle" fill="#059669">Stade II</text>

    <g class="reveal-group" id="esc-r2">
      <rect class="skin-layer epidermis" x="150" y="90" width="95" height="25"/>
      <rect class="skin-layer dermis" x="150" y="115" width="95" height="35"/>
      <rect class="skin-layer subcutaneous" x="150" y="150" width="95" height="35"/>
      <rect class="skin-layer muscle" x="150" y="185" width="95" height="30"/>
      <rect class="skin-layer bone-layer" x="150" y="215" width="95" height="18" rx="4"/>

      <!-- Damage: epidermis + dermis -->
      <rect class="stage-highlight" x="153" y="88" width="89" height="64" rx="3"/>

      <text class="skin-title" x="197" y="106" text-anchor="middle" fill="#164E63">Épiderme</text>
      <text class="skin-title" x="197" y="136" text-anchor="middle" fill="#164E63">Derme</text>
      <text class="skin-title" x="197" y="172" text-anchor="middle" fill="#fff" font-size="8">Hypoderme</text>
      <text class="skin-title" x="197" y="204" text-anchor="middle" fill="#fff" font-size="8">Muscle</text>
      <text class="skin-title" x="197" y="228" text-anchor="middle" fill="#7f8c8d" font-size="8">Os</text>

      <g class="stage-info">
        <rect x="135" y="245" width="120" height="65" rx="6" fill="rgba(22,78,99,0.92)" stroke="#059669" stroke-width="1"/>
        <text x="195" y="262" text-anchor="middle" fill="#fff" font-size="9.5" font-weight="600">Perte partielle</text>
        <text x="195" y="275" text-anchor="middle" fill="#fff" font-size="9.5" font-weight="600">de la peau</text>
        <text x="195" y="292" text-anchor="middle" fill="#059669" font-size="8.5">Cloque ou érosion</text>
        <text x="195" y="304" text-anchor="middle" fill="#059669" font-size="8.5">superficielle</text>
      </g>
    </g>
  </g>

  <!-- ===== STAGE 3 ===== -->
  <g class="stage-box" id="esc-stage3" onclick="toggleEscarreStage(3)">
    <rect class="stage-btn s3" x="265" y="42" width="115" height="32"/>
    <text class="stage-btn-label" x="322" y="63" text-anchor="middle" fill="#f59e0b">Stade III</text>

    <g class="reveal-group" id="esc-r3">
      <rect class="skin-layer epidermis" x="275" y="90" width="95" height="25"/>
      <rect class="skin-layer dermis" x="275" y="115" width="95" height="35"/>
      <rect class="skin-layer subcutaneous" x="275" y="150" width="95" height="35"/>
      <rect class="skin-layer muscle" x="275" y="185" width="95" height="30"/>
      <rect class="skin-layer bone-layer" x="275" y="215" width="95" height="18" rx="4"/>

      <!-- Damage: full thickness skin -->
      <rect class="stage-highlight" x="278" y="88" width="89" height="99" rx="3"/>

      <text class="skin-title" x="322" y="106" text-anchor="middle" fill="#164E63">Épiderme</text>
      <text class="skin-title" x="322" y="136" text-anchor="middle" fill="#164E63">Derme</text>
      <text class="skin-title" x="322" y="172" text-anchor="middle" fill="#fff" font-size="8">Hypoderme</text>
      <text class="skin-title" x="322" y="204" text-anchor="middle" fill="#fff" font-size="8">Muscle</text>
      <text class="skin-title" x="322" y="228" text-anchor="middle" fill="#7f8c8d" font-size="8">Os</text>

      <g class="stage-info">
        <rect x="260" y="245" width="125" height="65" rx="6" fill="rgba(22,78,99,0.92)" stroke="#f59e0b" stroke-width="1"/>
        <text x="322" y="262" text-anchor="middle" fill="#fff" font-size="9.5" font-weight="600">Perte totale de la</text>
        <text x="322" y="275" text-anchor="middle" fill="#fff" font-size="9.5" font-weight="600">peau (tissu sous-cutané)</text>
        <text x="322" y="292" text-anchor="middle" fill="#f59e0b" font-size="8.5">Muscle non exposé</text>
        <text x="322" y="304" text-anchor="middle" fill="#f59e0b" font-size="8.5">Slough/escarre visible</text>
      </g>
    </g>
  </g>

  <!-- ===== STAGE 4 ===== -->
  <g class="stage-box" id="esc-stage4" onclick="toggleEscarreStage(4)">
    <rect class="stage-btn s4" x="390" y="42" width="115" height="32"/>
    <text class="stage-btn-label" x="447" y="63" text-anchor="middle" fill="#ef4444">Stade IV</text>

    <g class="reveal-group" id="esc-r4">
      <rect class="skin-layer epidermis" x="400" y="90" width="95" height="25"/>
      <rect class="skin-layer dermis" x="400" y="115" width="95" height="35"/>
      <rect class="skin-layer subcutaneous" x="400" y="150" width="95" height="35"/>
      <rect class="skin-layer muscle" x="400" y="185" width="95" height="30"/>
      <rect class="skin-layer bone-layer" x="400" y="215" width="95" height="18" rx="4"/>

      <!-- Damage: ALL layers -->
      <rect class="stage-highlight" x="403" y="88" width="89" height="148" rx="3"/>

      <text class="skin-title" x="447" y="106" text-anchor="middle" fill="#164E63">Épiderme</text>
      <text class="skin-title" x="447" y="136" text-anchor="middle" fill="#164E63">Derme</text>
      <text class="skin-title" x="447" y="172" text-anchor="middle" fill="#fff" font-size="8">Hypoderme</text>
      <text class="skin-title" x="447" y="204" text-anchor="middle" fill="#fff" font-size="8">Muscle</text>
      <text class="skin-title" x="447" y="228" text-anchor="middle" fill="#7f8c8d" font-size="8">Os</text>

      <g class="stage-info">
        <rect x="385" y="245" width="125" height="78" rx="6" fill="rgba(22,78,99,0.92)" stroke="#ef4444" stroke-width="1"/>
        <text x="447" y="262" text-anchor="middle" fill="#fff" font-size="9.5" font-weight="600">Perte totale de tissu</text>
        <text x="447" y="275" text-anchor="middle" fill="#fff" font-size="9.5" font-weight="600">avec exposition</text>
        <text x="447" y="288" text-anchor="middle" fill="#fff" font-size="9.5" font-weight="600">d'os, tendon ou muscle</text>
        <text x="447" y="305" text-anchor="middle" fill="#ef4444" font-size="8.5">Nécrose profonde</text>
        <text x="447" y="317" text-anchor="middle" fill="#ef4444" font-size="8.5">± infection, ostéite</text>
      </g>
    </g>
  </g>

  <!-- Progress bar showing severity -->
  <g transform="translate(15, 340)">
    <text x="0" y="0" fill="currentColor" font-size="9.5" font-weight="600">Sévérité croissante →</text>
    <rect x="0" y="8" width="490" height="6" rx="3" fill="rgba(22,78,99,0.1)"/>
    <rect class="prog-bar" x="0" y="8" width="122" height="6" rx="3" fill="#0891B2" opacity="0.7"/>
    <rect class="prog-bar" x="122" y="8" width="122" height="6" rx="3" fill="#059669" opacity="0.7"/>
    <rect class="prog-bar" x="244" y="8" width="123" height="6" rx="3" fill="#f59e0b" opacity="0.7"/>
    <rect class="prog-bar" x="367" y="8" width="123" height="6" rx="3" fill="#ef4444" opacity="0.7"/>
  </g>

  <!-- Additional labels at bottom -->
  <g transform="translate(15, 370)">
    <rect x="0" y="0" width="490" height="80" rx="8" fill="rgba(8,145,178,0.05)" stroke="none"/>
    <text x="245" y="18" text-anchor="middle" fill="currentColor" font-size="9.5" font-weight="600">Facteurs de risque d'escarre</text>
    <text x="245" y="34" text-anchor="middle" fill="currentColor" font-size="8.5" opacity="0.8">Immobilité • Incontinence • Malnutrition • Fragilité cutanée</text>
    <text x="245" y="48" text-anchor="middle" fill="currentColor" font-size="8.5" opacity="0.8">Troubles sensoriels • Diabète • Âge avancé • Hypoperfusion</text>
    <text x="245" y="66" text-anchor="middle" fill="#0891B2" font-size="9" font-weight="600">Échelle de Braden : évaluation du risque</text>
  </g>
</svg>`
  },

  // ─── Figure 2.x : Arbre décisionnel gériatrique ───
  "2.x": {
    title: "Arbre décisionnel gériatrique",
    svg: `<style>
  .ch2-svg { font-family: 'Figtree', 'Noto Sans', sans-serif; }
  .ch2-svg .node-box { rx: 10; ry: 10; stroke-width: 2; cursor: pointer; }
  .ch2-svg .node-root { fill: rgba(8,145,178,0.15); stroke: #0891B2; }
  .ch2-svg .node-green { fill: rgba(5,150,105,0.12); stroke: #059669; }
  .ch2-svg .node-yellow { fill: rgba(245,158,11,0.12); stroke: #f59e0b; }
  .ch2-svg .node-red { fill: rgba(239,68,68,0.10); stroke: #ef4444; }
  .ch2-svg .node-label { fill: currentColor; font-size: 11px; font-weight: 600; }
  .ch2-svg .node-sub { fill: currentColor; font-size: 8.5px; opacity: 0.7; }
  .ch2-svg .arrow-path {
    fill: none; stroke: #0891B2; stroke-width: 2; stroke-linecap: round;
    marker-end: url(#ch2-arrow);
    stroke-dasharray: 100; stroke-dashoffset: 100;
  }
  .ch2-svg .arr1 { animation: ch2-draw 0.6s 0.3s ease-out forwards; }
  .ch2-svg .arr2 { animation: ch2-draw 0.6s 1.0s ease-out forwards; }
  .ch2-svg .arr3 { animation: ch2-draw 0.6s 1.4s ease-out forwards; }
  .ch2-svg .arr4 { animation: ch2-draw 0.6s 1.8s ease-out forwards; }
  .ch2-svg .gnode { opacity: 0; animation: ch2-fade 0.5s forwards; }
  .ch2-svg .gnode:nth-of-type(1) { animation-delay: 0s; }
  .ch2-svg .gnode:nth-of-type(2) { animation-delay: 0.8s; }
  .ch2-svg .gnode:nth-of-type(3) { animation-delay: 1.2s; }
  .ch2-svg .gnode:nth-of-type(4) { animation-delay: 1.6s; }
  .ch2-svg .tip { opacity: 0; pointer-events: none; transition: opacity 0.3s; }
  .ch2-svg .gnode:hover .tip { opacity: 1; }
  @keyframes ch2-draw { to { stroke-dashoffset: 0; } }
  @keyframes ch2-fade { to { opacity: 1; } }
</style>
<svg class="ch2-svg" viewBox="0 0 520 380" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;">
  <defs><marker id="ch2-arrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="none" stroke="#0891B2" stroke-width="1.5"/></marker></defs>
  <text x="260" y="22" text-anchor="middle" fill="currentColor" font-size="13" font-weight="700">Arbre décisionnel gériatrique</text>
  <!-- Root node -->
  <g class="gnode">
    <rect class="node-box node-root" x="175" y="38" width="170" height="50"/>
    <text class="node-label" x="260" y="60" text-anchor="middle">Patient âgé ≥ 75 ans</text>
    <text class="node-sub" x="260" y="76" text-anchor="middle">ou fragilité identifiée</text>
  </g>
  <!-- Arrow to evaluation -->
  <path class="arrow-path arr1" d="M260,88 L260,118"/>
  <!-- Evaluation node -->
  <g class="gnode">
    <rect class="node-box node-root" x="155" y="118" width="210" height="55"/>
    <text class="node-label" x="260" y="138" text-anchor="middle">Évaluation gériatrique</text>
    <text class="node-sub" x="260" y="153" text-anchor="middle">GDS · IADL · ADL · MNA · MMS</text>
    <text class="node-sub" x="260" y="165" text-anchor="middle">Nutrition · Cognition · Humeur</text>
  </g>
  <!-- 3 branch arrows -->
  <path class="arrow-path arr2" d="M210,173 L110,218"/>
  <path class="arrow-path arr3" d="M260,173 L260,218"/>
  <path class="arrow-path arr4" d="M310,173 L410,218"/>
  <!-- Branch 1: Autonome -->
  <g class="gnode">
    <rect class="node-box node-green" x="30" y="218" width="160" height="55"/>
    <text class="node-label" x="110" y="238" text-anchor="middle" fill="#059669">Autonome</text>
    <text class="node-sub" x="110" y="253" text-anchor="middle">GDS 0-2 · ADL intactes</text>
    <text class="node-sub" x="110" y="265" text-anchor="middle">Suivi standard</text>
    <g class="tip"><rect x="10" y="278" width="160" height="40" rx="6" fill="rgba(22,78,99,0.92)" stroke="#059669" stroke-width="1"/><text x="90" y="296" text-anchor="middle" fill="#fff" font-size="9">Prévention · Vaccination</text><text x="90" y="310" text-anchor="middle" fill="#fff" font-size="9">Activité physique · Social</text></g>
  </g>
  <!-- Branch 2: Fragile -->
  <g class="gnode">
    <rect class="node-box node-yellow" x="195" y="218" width="130" height="55"/>
    <text class="node-label" x="260" y="238" text-anchor="middle" fill="#f59e0b">Fragile</text>
    <text class="node-sub" x="260" y="253" text-anchor="middle">GDS 3-4 · Chutes</text>
    <text class="node-sub" x="260" y="265" text-anchor="middle">Intervention précoce</text>
    <g class="tip"><rect x="190" y="278" width="140" height="40" rx="6" fill="rgba(22,78,99,0.92)" stroke="#f59e0b" stroke-width="1"/><text x="260" y="296" text-anchor="middle" fill="#fff" font-size="9">Géronteambulatoire</text><text x="260" y="310" text-anchor="middle" fill="#fff" font-size="9">Rééducation · Aides</text></g>
  </g>
  <!-- Branch 3: Dépendant -->
  <g class="gnode">
    <rect class="node-box node-red" x="340" y="218" width="150" height="55"/>
    <text class="node-label" x="415" y="238" text-anchor="middle" fill="#ef4444">Dépendant</text>
    <text class="node-sub" x="415" y="253" text-anchor="middle">GDS 5-7 · Poly-pathologie</text>
    <text class="node-sub" x="415" y="265" text-anchor="middle">Soins spécialisés</text>
    <g class="tip"><rect x="335" y="278" width="160" height="40" rx="6" fill="rgba(22,78,99,0.92)" stroke="#ef4444" stroke-width="1"/><text x="415" y="296" text-anchor="middle" fill="#fff" font-size="9">EHPAD · HAD · SSR</text><text x="415" y="310" text-anchor="middle" fill="#fff" font-size="9">Soins palliatifs · APA</text></g>
  </g>
  <!-- Legend -->
  <rect x="130" y="340" width="260" height="30" rx="6" fill="rgba(8,145,178,0.05)"/>
  <text x="260" y="360" text-anchor="middle" fill="currentColor" font-size="9">Survolez chaque branche pour les détails</text>
</svg>`
  },

  // ─── Figure 4.x : Cercle éthique de la personne âgée ───
  "4.x": {
    title: "Cercle éthique de la personne âgée",
    svg: `<style>
  .ch4-svg { font-family: 'Figtree', 'Noto Sans', sans-serif; }
  .ch4-svg .ring { fill: none; stroke-width: 28; cursor: pointer; transition: opacity 0.3s; }
  .ch4-svg .ring:hover { opacity: 1 !important; }
  .ch4-svg .ring4 { stroke: rgba(22,78,99,0.12); }
  .ch4-svg .ring3 { stroke: rgba(8,145,178,0.15); }
  .ch4-svg .ring2 { stroke: rgba(5,150,105,0.18); }
  .ch4-svg .ring1 { stroke: rgba(245,158,11,0.20); }
  .ch4-svg .center-dot { fill: #0891B2; }
  .ch4-svg .center-label { fill: currentColor; font-size: 10px; font-weight: 700; }
  .ch4-svg .ring-label { fill: currentColor; font-size: 9.5px; font-weight: 600; opacity: 0; animation: ch4-fade 0.5s forwards; }
  .ch4-svg .rl1 { animation-delay: 0.5s; }
  .ch4-svg .rl2 { animation-delay: 1.0s; }
  .ch4-svg .rl3 { animation-delay: 1.5s; }
  .ch4-svg .rl4 { animation-delay: 2.0s; }
  .ch4-svg .tip-box { opacity: 0; pointer-events: none; transition: opacity 0.3s; }
  .ch4-svg .ring-trigger:hover + .tip-box { opacity: 1; }
  @keyframes ch4-fade { to { opacity: 1; } }
  @keyframes ch4-pulse { 0%,100%{opacity:0.6} 50%{opacity:1} }
</style>
<svg class="ch4-svg" viewBox="0 0 480 400" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;">
  <text x="240" y="22" text-anchor="middle" fill="currentColor" font-size="13" font-weight="700">Éthique de la personne âgée</text>
  <!-- Rings (outermost to innermost) -->
  <circle class="ring ring4" cx="240" cy="210" r="160"/>
  <circle class="ring ring3" cx="240" cy="210" r="120"/>
  <circle class="ring ring2" cx="240" cy="210" r="80"/>
  <circle class="ring ring1" cx="240" cy="210" r="45"/>
  <!-- Center -->
  <circle class="center-dot" cx="240" cy="210" r="20" style="animation:ch4-pulse 2s infinite;"/>
  <text class="center-label" x="240" y="207" text-anchor="middle" fill="#fff" font-size="8">Autonomie</text>
  <text class="center-label" x="240" y="218" text-anchor="middle" fill="#fff" font-size="7">du patient</text>
  <!-- Ring labels -->
  <text class="ring-label rl1" x="240" y="155" text-anchor="middle" fill="#f59e0b">Bienfaisance</text>
  <text class="ring-label rl1" x="240" y="167" text-anchor="middle" fill="#f59e0b" font-size="8">Non-malfaisance</text>
  <text class="ring-label rl2" x="240" y="108" text-anchor="middle" fill="#0891B2">Justice</text>
  <text class="ring-label rl2" x="240" y="120" text-anchor="middle" fill="#0891B2" font-size="8">Équité · Accès aux soins</text>
  <text class="ring-label rl3" x="240" y="55" text-anchor="middle" fill="#164E63">Cadre légal</text>
  <text class="ring-label rl3" x="240" y="67" text-anchor="middle" fill="#164E63" font-size="8">Loi Kouchner · Tutelle · Curatelle</text>
  <!-- Hover zones with tooltips -->
  <circle class="ring-trigger" cx="240" cy="210" r="45" fill="transparent" style="cursor:pointer;"
    onmouseover="this.parentNode.querySelector('.ctip-center').style.opacity=1"
    onmouseout="this.parentNode.querySelector('.ctip-center').style.opacity=0"/>
  <g class="tip-box ctip-center">
    <rect x="140" y="260" width="200" height="55" rx="6" fill="rgba(22,78,99,0.92)" stroke="#0891B2" stroke-width="1"/>
    <text x="240" y="278" text-anchor="middle" fill="#fff" font-size="9.5" font-weight="600">Autonomie du patient</text>
    <text x="240" y="293" text-anchor="middle" fill="#fff" font-size="8.5">Décision éclairée · Consentement</text>
    <text x="240" y="306" text-anchor="middle" fill="#0891B2" font-size="8">Directive anticipée · Personne de confiance</text>
  </g>
  <!-- Side tooltips for each ring -->
  <g class="ring-label rl4">
    <rect x="30" y="355" width="140" height="35" rx="6" fill="rgba(22,78,99,0.08)" stroke="#059669" stroke-width="1"/>
    <text x="100" y="372" text-anchor="middle" fill="#059669" font-size="8.5" font-weight="600">Refus de soins opposable</text>
    <text x="100" y="384" text-anchor="middle" fill="#059669" font-size="7.5">Art. L1111-4 CSP</text>
  </g>
  <g class="ring-label rl4">
    <rect x="310" y="355" width="140" height="35" rx="6" fill="rgba(22,78,99,0.08)" stroke="#0891B2" stroke-width="1"/>
    <text x="380" y="372" text-anchor="middle" fill="#0891B2" font-size="8.5" font-weight="600">Secret médical partagé</text>
    <text x="380" y="384" text-anchor="middle" fill="#0891B2" font-size="7.5">Équipe de soins uniquement</text>
  </g>
</svg>`
  },

  // ─── Figure 5.x : Voies sensorielles ───
  "5.x": {
    title: "Voies sensorielles — oreille et œil",
    svg: `<style>
  .ch5-svg { font-family: 'Figtree', 'Noto Sans', sans-serif; }
  .ch5-svg .outline { fill: none; stroke: #164E63; stroke-width: 1.5; }
  .ch5-svg .fill-healthy { fill: rgba(5,150,105,0.15); stroke: #059669; stroke-width: 1; }
  .ch5-svg .fill-loss { fill: rgba(239,68,68,0.15); stroke: #ef4444; stroke-width: 1.5; stroke-dasharray: 4 2; }
  .ch5-svg .fill-accent { fill: rgba(8,145,178,0.2); stroke: #0891B2; stroke-width: 1; }
  .ch5-svg .label { fill: currentColor; font-size: 9.5px; font-weight: 600; }
  .ch5-svg .label-sm { fill: currentColor; font-size: 8px; opacity: 1; }
  .ch5-svg .title-text { fill: currentColor; font-size: 11px; font-weight: 700; }
  .ch5-svg .fade-in { opacity: 0; animation: ch5-fade 0.5s forwards; }
  .ch5-svg .fade-in:nth-of-type(1) { animation-delay: 0.3s; }
  .ch5-svg .fade-in:nth-of-type(2) { animation-delay: 0.6s; }
  .ch5-svg .fade-in:nth-of-type(3) { animation-delay: 0.9s; }
  .ch5-svg .tip { opacity: 0; pointer-events: none; transition: opacity 0.3s; }
  .ch5-svg .hover-zone:hover + .tip { opacity: 1; }
  @keyframes ch5-fade { to { opacity: 1; } }
</style>
<svg class="ch5-svg" viewBox="0 0 520 360" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;">
  <text x="260" y="22" text-anchor="middle" fill="currentColor" font-size="13" font-weight="700">Voies sensorielles</text>
  <!-- LEFT: Oreille -->
  <text class="title-text" x="130" y="50" text-anchor="middle" fill="#0891B2">OREILLE</text>
  <!-- Outer ear (pinna simplified) -->
  <path class="outline" d="M60,80 C40,80 30,100 30,130 C30,170 50,190 70,190 C75,190 80,185 80,180"/>
  <!-- Ear canal -->
  <rect class="fill-healthy" x="80" y="110" width="40" height="30" rx="4"/>
  <text class="label" x="100" y="130" text-anchor="middle" fill="#059669">Conduit</text>
  <!-- Middle ear -->
  <rect class="fill-accent" x="125" y="100" width="50" height="50" rx="6"/>
  <text class="label" x="150" y="122" text-anchor="middle">Oreille</text>
  <text class="label" x="150" y="135" text-anchor="middle">moyenne</text>
  <!-- Ossicles -->
  <circle cx="138" cy="118" r="4" fill="#0891B2" opacity="0.6"/>
  <circle cx="150" cy="115" r="3" fill="#0891B2" opacity="0.6"/>
  <circle cx="162" cy="118" r="4" fill="#0891B2" opacity="0.6"/>
  <text class="label-sm" x="150" y="145" text-anchor="middle">OSSELETS</text>
  <!-- Inner ear / Cochlea -->
  <g class="fade-in">
    <ellipse class="fill-loss" cx="200" cy="125" rx="25" ry="30"/>
    <text class="label" x="200" y="120" text-anchor="middle" fill="#ef4444">Cochlée</text>
    <text class="label-sm" x="200" y="132" text-anchor="middle" fill="#ef4444">Presbyacousie</text>
  </g>
  <g class="hover-zone" style="cursor:pointer;"><rect x="170" y="95" width="60" height="60" fill="transparent"/></g>
  <g class="tip"><rect x="50" y="200" width="180" height="50" rx="6" fill="rgba(22,78,99,0.92)" stroke="#ef4444" stroke-width="1"/><text x="140" y="218" text-anchor="middle" fill="#fff" font-size="9" font-weight="600">Presbyacousie</text><text x="140" y="233" text-anchor="middle" fill="#fff" font-size="8.5">Perte des fréquences aiguës (4-8 kHz)</text><text x="140" y="245" text-anchor="middle" fill="#ef4444" font-size="8">Cellules ciliées → dégénérescence</text></g>
  <!-- Arrow: sound path -->
  <path d="M35,130 L80,125" stroke="#0891B2" stroke-width="1.5" fill="none" marker-end="url(#ch5-arr)"/>
  <defs><marker id="ch5-arr" markerWidth="6" markerHeight="5" refX="6" refY="2.5" orient="auto"><path d="M0,0 L6,2.5 L0,5" fill="none" stroke="#0891B2" stroke-width="1"/></marker></defs>

  <!-- Separator -->
  <line x1="260" y1="45" x2="260" y2="320" stroke="currentColor" stroke-dasharray="4 3" stroke-width="0.5" opacity="0.15"/>

  <!-- RIGHT: Œil -->
  <text class="title-text" x="390" y="50" text-anchor="middle" fill="#0891B2">ŒIL</text>
  <!-- Eye outline -->
  <ellipse class="outline" cx="390" cy="130" rx="85" ry="55"/>
  <!-- Cornea -->
  <path class="fill-accent" d="M310,130 C310,100 340,85 390,85 C440,85 470,100 470,130" fill="rgba(8,145,178,0.1)" stroke="#0891B2" stroke-width="1.5"/>
  <text class="label" x="390" y="82" text-anchor="middle" fill="#0891B2">Cornée</text>
  <!-- Lens -->
  <ellipse class="fill-loss" cx="390" cy="130" rx="18" ry="25"/>
  <text class="label" x="390" y="128" text-anchor="middle" fill="#ef4444">Cristallín</text>
  <text class="label-sm" x="390" y="140" text-anchor="middle" fill="#ef4444">Presbytie</text>
  <!-- Retina -->
  <path class="fill-healthy" d="M305,130 C305,155 340,175 390,175 C440,175 475,155 475,130" fill="rgba(5,150,105,0.08)" stroke="#059669" stroke-width="1" stroke-dasharray="3 2"/>
  <text class="label-sm" x="390" y="168" text-anchor="middle" fill="#059669">Rétine</text>
  <!-- Macula -->
  <circle cx="390" cy="148" r="8" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" stroke-width="1"/>
  <text class="label-sm" x="390" y="151" text-anchor="middle" fill="#f59e0b" font-size="7">Macula</text>
  <!-- Optic nerve -->
  <line x1="475" y1="130" x2="510" y2="130" stroke="#164E63" stroke-width="2.5"/>
  <text class="label-sm" x="510" y="125" text-anchor="end" fill="#164E63">Nerf</text>
  <text class="label-sm" x="510" y="137" text-anchor="end" fill="#164E63">optique</text>

  <!-- Presbytie tooltip area -->
  <g class="hover-zone" style="cursor:pointer;"><rect x="370" y="105" width="40" height="50" fill="transparent"/></g>
  <g class="tip"><rect x="290" y="200" width="200" height="50" rx="6" fill="rgba(22,78,99,0.92)" stroke="#ef4444" stroke-width="1"/><text x="390" y="218" text-anchor="middle" fill="#fff" font-size="9" font-weight="600">Presbytie</text><text x="390" y="233" text-anchor="middle" fill="#fff" font-size="8.5">Perte d'élasticité du cristallín</text><text x="390" y="245" text-anchor="middle" fill="#ef4444" font-size="8">Dès 45 ans · Accommodation ↓</text></g>

  <!-- Bottom summary -->
  <rect x="60" y="280" width="400" height="60" rx="8" fill="rgba(8,145,178,0.05)"/>
  <text x="260" y="300" text-anchor="middle" fill="currentColor" font-size="9.5" font-weight="600">Troubles sensoriels liés à l'âge</text>
  <text x="260" y="315" text-anchor="middle" fill="currentColor" font-size="8.5" opacity="0.8">Presbyacousie : 30% des >65 ans · Presbytie : quasi universelle après 50 ans</text>
  <text x="260" y="330" text-anchor="middle" fill="#0891B2" font-size="8.5">Impact : isolement, chutes, dépression, déclin cognitif</text>
</svg>`
  },

  // ─── Fig. 6.1–6.7 : schémas DISTINCTS (pas le fuzzy 6.x répété) ───
  "6.1": {
    title: "Fracture pertrochantérienne (FESF)",
    svg: `<svg viewBox="0 0 420 320" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;display:block;">
  <text x="210" y="22" text-anchor="middle" fill="currentColor" font-size="13" font-weight="700">Fracture pertrochantérienne gauche</text>
  <text x="210" y="40" text-anchor="middle" fill="currentColor" font-size="10" opacity="0.7">Extrémité supérieure du fémur (FESF) · schéma pédagogique</text>
  <!-- Pelvis simplified -->
  <ellipse cx="210" cy="100" rx="90" ry="35" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.35"/>
  <!-- Femur head + neck + trochanters -->
  <circle cx="175" cy="115" r="28" fill="rgba(8,145,178,0.15)" stroke="#0891B2" stroke-width="2"/>
  <path d="M195,130 L230,155 L245,220" fill="none" stroke="#0891B2" stroke-width="14" stroke-linecap="round"/>
  <!-- Greater trochanter -->
  <ellipse cx="235" cy="145" rx="16" ry="12" fill="rgba(8,145,178,0.2)" stroke="#0891B2" stroke-width="1.5"/>
  <!-- Fracture line through trochanters -->
  <path d="M210,135 L255,160" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/>
  <path d="M218,132 L250,155" stroke="#ef4444" stroke-width="2" stroke-dasharray="4 2"/>
  <circle cx="232" cy="148" r="6" fill="#ef4444" opacity="0.9"/>
  <text x="270" y="145" fill="#ef4444" font-size="11" font-weight="700">Trait de fracture</text>
  <text x="270" y="160" fill="#ef4444" font-size="10">pertrochantérien</text>
  <!-- Labels -->
  <text x="175" y="100" text-anchor="middle" fill="currentColor" font-size="9">Tête</text>
  <text x="205" y="125" fill="currentColor" font-size="9">Col</text>
  <text x="255" y="130" fill="currentColor" font-size="9">Gd trochanter</text>
  <text x="250" y="230" fill="currentColor" font-size="9">Diaphyse</text>
  <rect x="40" y="250" width="340" height="50" rx="8" fill="rgba(239,68,68,0.08)" stroke="#ef4444" stroke-width="1"/>
  <text x="210" y="270" text-anchor="middle" fill="currentColor" font-size="10" font-weight="600">Site le plus fréquent de FESF · ostéoporose</text>
  <text x="210" y="288" text-anchor="middle" fill="currentColor" font-size="9" opacity="0.8">Urgence orthogériatrique · lever précoce · prévention 2e fracture</text>
</svg>`
  },
  "6.2": {
    title: "Fracture de l'extrémité inférieure du fémur (FEIF)",
    svg: `<svg viewBox="0 0 420 320" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;display:block;">
  <text x="210" y="22" text-anchor="middle" fill="currentColor" font-size="13" font-weight="700">Fracture extrémité inférieure du fémur</text>
  <text x="210" y="40" text-anchor="middle" fill="currentColor" font-size="10" opacity="0.7">FEIF · schéma pédagogique (pas une radio)</text>
  <!-- Shaft -->
  <path d="M200,55 L200,180" fill="none" stroke="#0891B2" stroke-width="16" stroke-linecap="round"/>
  <!-- Condyles -->
  <ellipse cx="175" cy="210" rx="28" ry="35" fill="rgba(8,145,178,0.15)" stroke="#0891B2" stroke-width="2"/>
  <ellipse cx="225" cy="210" rx="28" ry="35" fill="rgba(8,145,178,0.15)" stroke="#0891B2" stroke-width="2"/>
  <path d="M175,185 L225,185" stroke="#0891B2" stroke-width="10"/>
  <!-- Fracture supracondylar -->
  <path d="M165,175 L235,195" stroke="#ef4444" stroke-width="3.5" stroke-linecap="round"/>
  <circle cx="200" cy="185" r="7" fill="#ef4444"/>
  <text x="255" y="180" fill="#ef4444" font-size="11" font-weight="700">Fracture</text>
  <text x="255" y="195" fill="#ef4444" font-size="10">supracondylienne /</text>
  <text x="255" y="208" fill="#ef4444" font-size="10">extrémité inférieure</text>
  <text x="200" y="100" text-anchor="middle" fill="currentColor" font-size="9">Diaphyse fémorale</text>
  <text x="200" y="255" text-anchor="middle" fill="currentColor" font-size="9">Condyles · genou</text>
  <rect x="40" y="270" width="340" height="35" rx="8" fill="rgba(8,145,178,0.08)"/>
  <text x="210" y="292" text-anchor="middle" fill="currentColor" font-size="10">Souvent traumatisme à haute énergie ou chute chez sujet ostéoporotique</text>
</svg>`
  },
  "6.3": {
    title: "Fracture de l'extrémité supérieure de l'humérus (FESH)",
    svg: `<svg viewBox="0 0 420 340" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;display:block;">
  <text x="210" y="22" text-anchor="middle" fill="currentColor" font-size="13" font-weight="700">Fracture extrémité supérieure de l'humérus</text>
  <text x="210" y="40" text-anchor="middle" fill="currentColor" font-size="10" opacity="0.7">FESH · schéma pédagogique distinct (≠ fémur)</text>
  <!-- Scapula / glenoid hint -->
  <path d="M120,90 Q100,120 110,160" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.3"/>
  <!-- Humeral head -->
  <circle cx="160" cy="110" r="32" fill="rgba(5,150,105,0.18)" stroke="#059669" stroke-width="2.5"/>
  <!-- Surgical neck + shaft -->
  <path d="M175,138 L210,170 L230,260" fill="none" stroke="#059669" stroke-width="14" stroke-linecap="round"/>
  <!-- Greater tuberosity -->
  <ellipse cx="185" cy="95" rx="12" ry="10" fill="rgba(5,150,105,0.25)" stroke="#059669" stroke-width="1.2"/>
  <!-- Fracture at surgical neck -->
  <path d="M155,140 L200,155" stroke="#ef4444" stroke-width="3.5" stroke-linecap="round"/>
  <circle cx="175" cy="147" r="7" fill="#ef4444"/>
  <text x="250" y="130" fill="#ef4444" font-size="11" font-weight="700">Col chirurgical</text>
  <text x="250" y="146" fill="#ef4444" font-size="10">siège fréquent FESH</text>
  <text x="160" y="105" text-anchor="middle" fill="currentColor" font-size="9">Tête</text>
  <text x="235" y="220" fill="currentColor" font-size="9">Diaphyse</text>
  <text x="195" y="88" fill="currentColor" font-size="8">Tubérosité</text>
  <rect x="35" y="275" width="350" height="48" rx="8" fill="rgba(5,150,105,0.1)" stroke="#059669" stroke-width="1"/>
  <text x="210" y="295" text-anchor="middle" fill="currentColor" font-size="10" font-weight="600">3e site fracturaire ostéoporotique fréquent</text>
  <text x="210" y="312" text-anchor="middle" fill="currentColor" font-size="9" opacity="0.85">Chute sur le moignon de l'épaule · classification Neer</text>
</svg>`
  },
  "6.4": {
    title: "Fractures vertébrales et cimentoplastie",
    svg: `<svg viewBox="0 0 440 320" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;display:block;">
  <text x="220" y="22" text-anchor="middle" fill="currentColor" font-size="13" font-weight="700">Fractures vertébrales L2–L3</text>
  <text x="220" y="40" text-anchor="middle" fill="currentColor" font-size="10" opacity="0.7">Tassement · cimentoplastie (principe)</text>
  <!-- Normal vertebra -->
  <rect x="50" y="70" width="70" height="50" rx="6" fill="rgba(8,145,178,0.15)" stroke="#0891B2" stroke-width="2"/>
  <text x="85" y="100" text-anchor="middle" fill="currentColor" font-size="10">L1 normal</text>
  <!-- Collapsed L2 -->
  <path d="M150,85 L220,85 L215,125 L155,130 Z" fill="rgba(239,68,68,0.2)" stroke="#ef4444" stroke-width="2"/>
  <text x="185" y="100" text-anchor="middle" fill="#ef4444" font-size="10" font-weight="700">L2 tassée</text>
  <text x="185" y="145" text-anchor="middle" fill="#ef4444" font-size="9">avant</text>
  <!-- Arrow -->
  <path d="M235,105 L270,105" stroke="currentColor" stroke-width="2" marker-end="url(#arr64)"/>
  <defs><marker id="arr64" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="currentColor"/></marker></defs>
  <!-- After cementoplasty -->
  <path d="M285,80 L355,80 L350,130 L290,130 Z" fill="rgba(5,150,105,0.2)" stroke="#059669" stroke-width="2"/>
  <rect x="300" y="95" width="30" height="20" rx="2" fill="#34D399" opacity="0.7"/>
  <text x="320" y="100" text-anchor="middle" fill="#059669" font-size="10" font-weight="700">L2</text>
  <text x="320" y="148" text-anchor="middle" fill="#059669" font-size="9">après ciment</text>
  <!-- L3 mild -->
  <rect x="150" y="165" width="70" height="40" rx="4" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="185" y="190" text-anchor="middle" fill="#f59e0b" font-size="10">L3 ± tassement</text>
  <rect x="40" y="230" width="360" height="70" rx="8" fill="rgba(8,145,178,0.06)"/>
  <text x="220" y="255" text-anchor="middle" fill="currentColor" font-size="10" font-weight="600">Cimentoplastie / vertébroplastie</text>
  <text x="220" y="275" text-anchor="middle" fill="currentColor" font-size="9" opacity="0.85">Stabilisation · antalgie · pas un traitement de l'ostéoporose de fond</text>
  <text x="220" y="292" text-anchor="middle" fill="#0891B2" font-size="9">+ Ca²⁺ · vit. D · anti-ostéoporotique · prévention chute</text>
</svg>`
  },
  "6.5": {
    title: "Démarche devant suspicion d'ostéoporose",
    svg: `<svg viewBox="0 0 460 380" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;display:block;">
  <text x="230" y="22" text-anchor="middle" fill="currentColor" font-size="13" font-weight="700">Suspicion d'ostéoporose — démarche</text>
  <rect x="130" y="40" width="200" height="40" rx="8" fill="rgba(8,145,178,0.15)" stroke="#0891B2" stroke-width="1.5"/>
  <text x="230" y="65" text-anchor="middle" fill="currentColor" font-size="11" font-weight="600">Facteurs de risque / fracture fragilité</text>
  <path d="M230,80 L230,100" stroke="#0891B2" stroke-width="2"/>
  <rect x="130" y="100" width="200" height="40" rx="8" fill="rgba(8,145,178,0.1)" stroke="#0891B2" stroke-width="1.5"/>
  <text x="230" y="125" text-anchor="middle" fill="currentColor" font-size="11">DXA (T-score) ± radio</text>
  <path d="M230,140 L230,160" stroke="#0891B2" stroke-width="2"/>
  <rect x="100" y="160" width="260" height="40" rx="8" fill="rgba(5,150,105,0.12)" stroke="#059669" stroke-width="1.5"/>
  <text x="230" y="185" text-anchor="middle" fill="currentColor" font-size="11">Bilan étiologique (bio, 2e causes)</text>
  <path d="M230,200 L230,220" stroke="#0891B2" stroke-width="2"/>
  <rect x="80" y="220" width="300" height="50" rx="8" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="230" y="242" text-anchor="middle" fill="currentColor" font-size="11" font-weight="600">Traitement de fond + chute + Ca/vit D</text>
  <text x="230" y="258" text-anchor="middle" fill="currentColor" font-size="10" opacity="0.8">GRIO · durée limitée · réévaluation</text>
  <rect x="60" y="290" width="340" height="60" rx="8" fill="rgba(8,145,178,0.06)"/>
  <text x="230" y="315" text-anchor="middle" fill="currentColor" font-size="10">Ne pas confondre avec figures de fractures (6.1–6.4)</text>
  <text x="230" y="335" text-anchor="middle" fill="#0891B2" font-size="10">Algorithme clinique · pas une image TDM</text>
</svg>`
  },
  "6.6": {
    title: "Indications traitements anti-ostéoporotiques (GRIO)",
    svg: `<svg viewBox="0 0 460 340" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;display:block;">
  <text x="230" y="22" text-anchor="middle" fill="currentColor" font-size="13" font-weight="700">Indications anti-ostéoporotiques</text>
  <text x="230" y="40" text-anchor="middle" fill="currentColor" font-size="10" opacity="0.7">Synthèse pédagogique (vérifier GRIO actualisé)</text>
  <rect x="30" y="55" width="120" height="70" rx="8" fill="rgba(239,68,68,0.12)" stroke="#ef4444" stroke-width="1.5"/>
  <text x="90" y="80" text-anchor="middle" fill="#ef4444" font-size="11" font-weight="700">Fracture</text>
  <text x="90" y="98" text-anchor="middle" fill="currentColor" font-size="9">sévère / FESF</text>
  <text x="90" y="112" text-anchor="middle" fill="currentColor" font-size="9">→ traiter</text>
  <rect x="170" y="55" width="120" height="70" rx="8" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="230" y="80" text-anchor="middle" fill="#f59e0b" font-size="11" font-weight="700">T ≤ −2,5</text>
  <text x="230" y="98" text-anchor="middle" fill="currentColor" font-size="9">+ facteurs de risque</text>
  <text x="230" y="112" text-anchor="middle" fill="currentColor" font-size="9">→ discuter</text>
  <rect x="310" y="55" width="120" height="70" rx="8" fill="rgba(8,145,178,0.12)" stroke="#0891B2" stroke-width="1.5"/>
  <text x="370" y="80" text-anchor="middle" fill="#0891B2" font-size="11" font-weight="700">FRAX élevé</text>
  <text x="370" y="98" text-anchor="middle" fill="currentColor" font-size="9">risque 10 ans</text>
  <text x="370" y="112" text-anchor="middle" fill="currentColor" font-size="9">→ individualiser</text>
  <path d="M230,125 L230,150" stroke="currentColor" stroke-width="2"/>
  <rect x="100" y="150" width="260" height="55" rx="8" fill="rgba(5,150,105,0.12)" stroke="#059669" stroke-width="1.5"/>
  <text x="230" y="175" text-anchor="middle" fill="currentColor" font-size="11" font-weight="600">Biphosphonate / dénosumab / autre</text>
  <text x="230" y="193" text-anchor="middle" fill="currentColor" font-size="9" opacity="0.8">+ calcium · vitamine D · prévention chute</text>
  <rect x="60" y="225" width="340" height="90" rx="8" fill="rgba(8,145,178,0.06)"/>
  <text x="230" y="250" text-anchor="middle" fill="currentColor" font-size="10" font-weight="600">Points clés gériatriques</text>
  <text x="230" y="270" text-anchor="middle" fill="currentColor" font-size="9">Clairance rénale · dentaire avant biphosphonate</text>
  <text x="230" y="288" text-anchor="middle" fill="currentColor" font-size="9">Durée 3–5 ans · réévaluation (fig. 6.7)</text>
  <text x="230" y="305" text-anchor="middle" fill="#0891B2" font-size="9">Observance · effets indésirables (tableau 6.2)</text>
</svg>`
  },
  "6.7": {
    title: "Cycle thérapeutique de l'ostéoporose primitive",
    svg: `<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;display:block;">
  <text x="230" y="22" text-anchor="middle" fill="currentColor" font-size="13" font-weight="700">Cycle thérapeutique (3–5 ans)</text>
  <text x="230" y="40" text-anchor="middle" fill="currentColor" font-size="10" opacity="0.7">Ostéoporose primitive · personne âgée</text>
  <!-- Timeline -->
  <line x1="50" y1="120" x2="410" y2="120" stroke="#0891B2" stroke-width="3"/>
  <circle cx="80" cy="120" r="12" fill="#0891B2"/>
  <circle cx="180" cy="120" r="12" fill="#0891B2"/>
  <circle cx="280" cy="120" r="12" fill="#f59e0b"/>
  <circle cx="380" cy="120" r="12" fill="#059669"/>
  <text x="80" y="90" text-anchor="middle" fill="currentColor" font-size="10" font-weight="700">J0</text>
  <text x="80" y="155" text-anchor="middle" fill="currentColor" font-size="9">Initiation</text>
  <text x="80" y="168" text-anchor="middle" fill="currentColor" font-size="8" opacity="0.7">DXA · dentaire</text>
  <text x="180" y="90" text-anchor="middle" fill="currentColor" font-size="10" font-weight="700">1 an</text>
  <text x="180" y="155" text-anchor="middle" fill="currentColor" font-size="9">Observance</text>
  <text x="180" y="168" text-anchor="middle" fill="currentColor" font-size="8" opacity="0.7">EI · chute</text>
  <text x="280" y="90" text-anchor="middle" fill="currentColor" font-size="10" font-weight="700">3–5 ans</text>
  <text x="280" y="155" text-anchor="middle" fill="currentColor" font-size="9">Réévaluation</text>
  <text x="280" y="168" text-anchor="middle" fill="currentColor" font-size="8" opacity="0.7">DXA · pause ?</text>
  <text x="380" y="90" text-anchor="middle" fill="currentColor" font-size="10" font-weight="700">Suite</text>
  <text x="380" y="155" text-anchor="middle" fill="currentColor" font-size="9">Holiday /</text>
  <text x="380" y="168" text-anchor="middle" fill="currentColor" font-size="8" opacity="0.7">relais / arrêt</text>
  <rect x="50" y="200" width="360" height="75" rx="8" fill="rgba(8,145,178,0.07)"/>
  <text x="230" y="225" text-anchor="middle" fill="currentColor" font-size="10" font-weight="600">Pendant tout le cycle</text>
  <text x="230" y="245" text-anchor="middle" fill="currentColor" font-size="9">Calcium + vitamine D · activité physique · prévention des chutes</text>
  <text x="230" y="262" text-anchor="middle" fill="#0891B2" font-size="9">Réévaluer bénéfice / risque (rein, mâchoire, fractures atypiques)</text>
</svg>`
  },

  // ─── Figure 6.x : Cascade (fallback générique uniquement si pas d'exact) ───
  "6.x": {
    title: "Cascade de l'ostéoporose — T-score et trabécules",
    svg: `<style>
  .ch6-svg { font-family: 'Figtree', 'Noto Sans', sans-serif; }
  .ch6-svg .stage-box { cursor: pointer; }
  .ch6-svg .bone-bg { fill: #e8ddd3; stroke: #164E63; stroke-width: 1.5; rx: 6; }
  .ch6-svg .trab-healthy { stroke: #059669; stroke-width: 1.2; opacity: 0.6; fill: none; }
  .ch6-svg .trab-thin { stroke: #f59e0b; stroke-width: 0.8; opacity: 0.5; fill: none; }
  .ch6-svg .trab-lost { stroke: #ef4444; stroke-width: 0.5; opacity: 0.3; fill: none; stroke-dasharray: 3 2; }
  .ch6-svg .arrow-down { fill: none; stroke: #0891B2; stroke-width: 2; marker-end: url(#ch6-arr);
    stroke-dasharray: 60; stroke-dashoffset: 60; }
  .ch6-svg .arr1 { animation: ch6-draw 0.6s 0.8s ease-out forwards; }
  .ch6-svg .arr2 { animation: ch6-draw 0.6s 1.8s ease-out forwards; }
  .ch6-svg .arr3 { animation: ch6-draw 0.6s 2.8s ease-out forwards; }
  .ch6-svg .stage { opacity: 1 !important; }
  .ch6-svg .s1, .ch6-svg .s2, .ch6-svg .s3, .ch6-svg .s4 { opacity: 1 !important; }
  .ch6-svg .label { fill: currentColor; font-size: 10px; font-weight: 600; }
  .ch6-svg .label-sm { fill: currentColor; font-size: 8px; opacity: 1; }
  .ch6-svg .tip { opacity: 0; pointer-events: none; transition: opacity 0.3s; }
  .ch6-svg .stage-box:hover .tip { opacity: 1; }
  @keyframes ch6-draw { to { stroke-dashoffset: 0; } }
  @keyframes ch6-fade { to { opacity: 1; } }
</style>
<svg class="ch6-svg" viewBox="0 0 440 520" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;">
  <defs><marker id="ch6-arr" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="none" stroke="#0891B2" stroke-width="1.5"/></marker></defs>
  <text x="220" y="22" text-anchor="middle" fill="currentColor" font-size="13" font-weight="700">Cascade de l'ostéoporose</text>
  <!-- Stage 1: Normal -->
  <g class="stage-box stage s1">
    <rect class="bone-bg" x="120" y="45" width="200" height="60"/>
    <line class="trab-healthy" x1="140" y1="55" x2="180" y2="55"/><line class="trab-healthy" x1="160" y1="50" x2="160" y2="95"/>
    <line class="trab-healthy" x1="200" y1="55" x2="240" y2="55"/><line class="trab-healthy" x1="220" y1="50" x2="220" y2="95"/>
    <line class="trab-healthy" x1="260" y1="55" x2="300" y2="55"/><line class="trab-healthy" x1="280" y1="50" x2="280" y2="95"/>
    <line class="trab-healthy" x1="140" y1="75" x2="300" y2="75"/>
    <text class="label" x="220" y="90" text-anchor="middle" fill="#059669">Os normal</text>
    <text class="label-sm" x="220" y="100" text-anchor="middle">T-score ≥ -1</text>
    <g class="tip"><rect x="100" y="105" width="240" height="30" rx="6" fill="rgba(22,78,99,0.92)" stroke="#059669" stroke-width="1"/><text x="220" y="124" text-anchor="middle" fill="#fff" font-size="9">Densité minérale osseuse normale · Trabécules denses</text></g>
  </g>
  <path class="arrow-down arr1" d="M220,108 L220,140"/>
  <!-- Stage 2: Ostéopenie -->
  <g class="stage-box stage s2">
    <rect class="bone-bg" x="120" y="140" width="200" height="60"/>
    <line class="trab-thin" x1="150" y1="150" x2="190" y2="150"/><line class="trab-thin" x1="170" y1="145" x2="170" y2="190"/>
    <line class="trab-thin" x1="230" y1="150" x2="270" y2="150"/><line class="trab-thin" x1="250" y1="145" x2="250" y2="190"/>
    <line class="trab-thin" x1="140" y1="170" x2="290" y2="170" opacity="0.3"/>
    <text class="label" x="220" y="185" text-anchor="middle" fill="#f59e0b">Ostéopenie</text>
    <text class="label-sm" x="220" y="195" text-anchor="middle">T-score -1 à -2.5</text>
    <g class="tip"><rect x="100" y="200" width="240" height="30" rx="6" fill="rgba(22,78,99,0.92)" stroke="#f59e0b" stroke-width="1"/><text x="220" y="219" text-anchor="middle" fill="#fff" font-size="9">Perte trabéculaire débutante · Vit D + Ca²⁺ + exercice</text></g>
  </g>
  <path class="arrow-down arr2" d="M220,203 L220,235"/>
  <!-- Stage 3: Ostéoporose -->
  <g class="stage-box stage s3">
    <rect class="bone-bg" x="120" y="235" width="200" height="60"/>
    <line class="trab-lost" x1="160" y1="245" x2="180" y2="245"/><line class="trab-lost" x1="170" y1="240" x2="170" y2="285"/>
    <line class="trab-lost" x1="250" y1="245" x2="270" y2="245"/>
    <text class="label" x="220" y="280" text-anchor="middle" fill="#ef4444">Ostéoporose</text>
    <text class="label-sm" x="220" y="290" text-anchor="middle">T-score < -2.5</text>
    <g class="tip"><rect x="80" y="295" width="280" height="30" rx="6" fill="rgba(22,78,99,0.92)" stroke="#ef4444" stroke-width="1"/><text x="220" y="314" text-anchor="middle" fill="#fff" font-size="9">Trabécules amincies · Biphosphonates · Densitométrie 2 ans</text></g>
  </g>
  <path class="arrow-down arr3" d="M220,298 L220,330"/>
  <!-- Stage 4: Fracture -->
  <g class="stage-box stage s4">
    <rect x="120" y="330" width="200" height="65" rx="6" fill="rgba(239,68,68,0.10)" stroke="#ef4444" stroke-width="2"/>
    <text class="label" x="220" y="355" text-anchor="middle" fill="#ef4444">FRACTURE</text>
    <text class="label-sm" x="220" y="370" text-anchor="middle">Col fémorale · Vertèbre · Poignet</text>
    <text class="label-sm" x="220" y="382" text-anchor="middle">FRAX® : score de risque à 10 ans</text>
    <g class="tip"><rect x="80" y="395" width="280" height="30" rx="6" fill="rgba(22,78,99,0.92)" stroke="#ef4444" stroke-width="1"/><text x="220" y="414" text-anchor="middle" fill="#fff" font-size="9">20% mortalité à 1 an (col fémorale) · Réhabilitation précoce</text></g>
  </g>
  <!-- Stats -->
  <rect x="60" y="440" width="320" height="60" rx="8" fill="rgba(8,145,178,0.05)"/>
  <text x="220" y="458" text-anchor="middle" fill="currentColor" font-size="9" font-weight="600">Prévalence</text>
  <text x="220" y="473" text-anchor="middle" fill="currentColor" font-size="8.5" opacity="0.8">1 femme sur 3 · 1 homme sur 5 après 50 ans</text>
  <text x="220" y="488" text-anchor="middle" fill="#0891B2" font-size="8.5">Dépistage : densitométrie (DEXA) si facteurs de risque</text>
</svg>`
  },

  // ─── Figure 8.x : Voies de la douleur ───
  "8.x": {
    title: "Voies de la douleur — Gate Control",
    svg: `<style>
  .ch8-svg { font-family: 'Figtree', 'Noto Sans', sans-serif; }
  .ch8-svg .path-line { fill: none; stroke: #0891B2; stroke-width: 2; stroke-linecap: round; }
  .ch8-svg .signal { fill: #0891B2; r: 4; opacity: 0; }
  .ch8-svg .sig1 { animation: ch8-pulse 1.5s 0.5s ease-in-out infinite; }
  .ch8-svg .sig2 { animation: ch8-pulse 1.5s 0.9s ease-in-out infinite; }
  .ch8-svg .sig3 { animation: ch8-pulse 1.5s 1.3s ease-in-out infinite; }
  .ch8-svg .sig4 { animation: ch8-pulse 1.5s 1.7s ease-in-out infinite; }
  .ch8-svg .organ { fill: rgba(8,145,178,0.12); stroke: #0891B2; stroke-width: 1.5; rx: 8; }
  .ch8-svg .gate-box { fill: rgba(245,158,11,0.15); stroke: #f59e0b; stroke-width: 2; rx: 6; cursor: pointer; }
  .ch8-svg .label { fill: currentColor; font-size: 10px; font-weight: 600; }
  .ch8-svg .label-sm { fill: currentColor; font-size: 8px; opacity: 1; }
  .ch8-svg .fib-A { stroke: #059669; stroke-width: 1.5; fill: none; stroke-dasharray: 6 3; }
  .ch8-svg .fib-C { stroke: #ef4444; stroke-width: 1.5; fill: none; stroke-dasharray: 2 2; }
  .ch8-svg .tip { opacity: 0; pointer-events: none; transition: opacity 0.3s; }
  .ch8-svg .gate-box:hover ~ .tip, .ch8-svg .organ:hover ~ .tip { opacity: 1; }
  @keyframes ch8-pulse { 0%{opacity:0;r:2} 50%{opacity:1;r:5} 100%{opacity:0;r:2} }
</style>
<svg class="ch8-svg" viewBox="0 0 520 400" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;">
  <text x="260" y="22" text-anchor="middle" fill="currentColor" font-size="13" font-weight="700">Voies de la douleur</text>
  <!-- Nociceptor (left) -->
  <g>
    <rect class="organ" x="30" y="160" width="90" height="60"/>
    <text class="label" x="75" y="185" text-anchor="middle">Nocicepteur</text>
    <text class="label-sm" x="75" y="198" text-anchor="middle">Terminaison libre</text>
    <text class="label-sm" x="75" y="210" text-anchor="middle">Peau · Articulation</text>
    <circle class="signal sig1" cx="120" cy="190"/>
  </g>
  <!-- Fibers Aδ and C -->
  <line class="fib-A" x1="125" y1="180" x2="200" y2="130"/>
  <text x="155" y="148" fill="#059669" font-size="8">Aδ (rapide)</text>
  <line class="fib-C" x1="125" y1="200" x2="200" y2="250"/>
  <text x="155" y="235" fill="#ef4444" font-size="8">C (lente)</text>
  <circle class="signal sig2" cx="180" cy="155"/>
  <!-- Moelle épinière -->
  <g>
    <rect class="organ" x="200" y="120" width="100" height="140"/>
    <text class="label" x="250" y="155" text-anchor="middle">Moelle</text>
    <text class="label" x="250" y="170" text-anchor="middle">épinière</text>
    <!-- Dorsal horn -->
    <rect x="210" y="180" width="80" height="25" rx="4" fill="rgba(5,150,105,0.1)" stroke="#059669" stroke-width="1"/>
    <text class="label-sm" x="250" y="196" text-anchor="middle" fill="#059669">Corne dorsale</text>
    <!-- Gate -->
    <rect class="gate-box" x="230" y="210" width="40" height="30"/>
    <text x="250" y="228" text-anchor="middle" fill="#f59e0b" font-size="8" font-weight="700">GATE</text>
  </g>
  <!-- Gate control tooltip -->
  <g class="tip"><rect x="100" y="255" width="220" height="50" rx="6" fill="rgba(22,78,99,0.92)" stroke="#f59e0b" stroke-width="1"/><text x="210" y="273" text-anchor="middle" fill="#fff" font-size="9" font-weight="600">Gate Control (Melzack & Wall)</text><text x="210" y="287" text-anchor="middle" fill="#fff" font-size="8.5">Fibres Aβ (toucher) ferment la porte</text><text x="210" y="299" text-anchor="middle" fill="#f59e0b" font-size="8">→ Massage, TENS, chaleur soulagent</text></g>
  <!-- Ascending pathway -->
  <path class="path-line" d="M300,180 L360,140"/>
  <circle class="signal sig3" cx="330" cy="160"/>
  <!-- Thalamus -->
  <g>
    <rect class="organ" x="355" y="110" width="80" height="55"/>
    <text class="label" x="395" y="135" text-anchor="middle">Thalamus</text>
    <text class="label-sm" x="395" y="148" text-anchor="middle">Relais central</text>
  </g>
  <!-- To cortex -->
  <path class="path-line" d="M395,110 L395,60 L430,50"/>
  <circle class="signal sig4" cx="410" cy="80"/>
  <!-- Cortex -->
  <g>
    <rect class="organ" x="425" y="30" width="80" height="50"/>
    <text class="label" x="465" y="50" text-anchor="middle">Cortex</text>
    <text class="label-sm" x="465" y="63" text-anchor="middle">Perception</text>
  </g>
  <!-- Bottom: descending modulation -->
  <path d="M430,80 L395,110 L300,230 L250,260" fill="none" stroke="#164E63" stroke-width="1.5" stroke-dasharray="5 3" opacity="0.5"/>
  <text x="350" y="260" fill="#164E63" font-size="8">Modulation</text>
  <text x="350" y="272" fill="#164E63" font-size="8">descendante</text>
  <!-- Legend -->
  <rect x="30" y="310" width="460" height="70" rx="8" fill="rgba(8,145,178,0.05)"/>
  <text x="260" y="330" text-anchor="middle" fill="currentColor" font-size="9.5" font-weight="600">Douleur chez la personne âgée</text>
  <text x="260" y="345" text-anchor="middle" fill="currentColor" font-size="8.5" opacity="0.8">Seuil douloureux abaissé · Nociception altérée · Expression atypique</text>
  <text x="260" y="360" text-anchor="middle" fill="#0891B2" font-size="8.5">Échelle EVA · EN · GDS · Douleur comportementale (ECPA)</text>
  <text x="260" y="374" text-anchor="middle" fill="#f59e0b" font-size="8">Tramadol : éviter si > 75 ans · Paracétamol = 1ère ligne</text>
</svg>`
  },

  // ─── Figure 10.x : Spectre dépressif ───
  "10.x": {
    title: "Spectre dépressif chez la personne âgée",
    svg: `<style>
  .ch10-svg { font-family: 'Figtree', 'Noto Sans', sans-serif; }
  .ch10-svg .spectrum-bar { rx: 8; ry: 8; cursor: pointer; transition: opacity 0.3s; }
  .ch10-svg .spectrum-bar:hover { opacity: 1 !important; }
  .ch10-svg .bar1 { fill: rgba(5,150,105,0.2); stroke: #059669; stroke-width: 1.5; }
  .ch10-svg .bar2 { fill: rgba(8,145,178,0.2); stroke: #0891B2; stroke-width: 1.5; }
  .ch10-svg .bar3 { fill: rgba(245,158,11,0.2); stroke: #f59e0b; stroke-width: 1.5; }
  .ch10-svg .bar4 { fill: rgba(239,68,68,0.15); stroke: #ef4444; stroke-width: 1.5; }
  .ch10-svg .bar5 { fill: rgba(239,68,68,0.25); stroke: #ef4444; stroke-width: 2; }
  .ch10-svg .seg-label { fill: currentColor; font-size: 9px; font-weight: 600; }
  .ch10-svg .seg-sub { fill: currentColor; font-size: 7.5px; opacity: 0.7; }
  .ch10-svg .tip { opacity: 0; pointer-events: none; transition: opacity 0.3s; }
  .ch10-svg .seg:hover .tip { opacity: 1; }
  .ch10-svg .fade-in { opacity: 0; animation: ch10-fade 0.4s forwards; }
  .ch10-svg .fade-in:nth-of-type(1) { animation-delay: 0.2s; }
  .ch10-svg .fade-in:nth-of-type(2) { animation-delay: 0.5s; }
  .ch10-svg .fade-in:nth-of-type(3) { animation-delay: 0.8s; }
  .ch10-svg .fade-in:nth-of-type(4) { animation-delay: 1.1s; }
  .ch10-svg .fade-in:nth-of-type(5) { animation-delay: 1.4s; }
  @keyframes ch10-fade { to { opacity: 1; } }
</style>
<svg class="ch10-svg" viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;">
  <text x="260" y="22" text-anchor="middle" fill="currentColor" font-size="13" font-weight="700">Spectre dépressif</text>
  <!-- Spectrum bar: 5 segments -->
  <g class="seg fade-in">
    <rect class="spectrum-bar bar1" x="20" y="55" width="90" height="50"/>
    <text class="seg-label" x="65" y="76" text-anchor="middle" fill="#059669">Tristesse</text>
    <text class="seg-label" x="65" y="89" text-anchor="middle" fill="#059669">normale</text>
    <g class="tip"><rect x="10" y="110" width="110" height="40" rx="6" fill="rgba(22,78,99,0.92)" stroke="#059669" stroke-width="1"/><text x="65" y="128" text-anchor="middle" fill="#fff" font-size="8.5">Réaction adaptative</text><text x="65" y="142" text-anchor="middle" fill="#059669" font-size="8">Transitoire · Pas de critères DSM</text></g>
  </g>
  <g class="seg fade-in">
    <rect class="spectrum-bar bar2" x="120" y="55" width="90" height="50"/>
    <text class="seg-label" x="165" y="76" text-anchor="middle" fill="#0891B2">Deuil</text>
    <text class="seg-sub" x="165" y="89" text-anchor="middle">pathologique</text>
    <g class="tip"><rect x="110" y="110" width="130" height="40" rx="6" fill="rgba(22,78,99,0.92)" stroke="#0891B2" stroke-width="1"/><text x="175" y="128" text-anchor="middle" fill="#fff" font-size="8.5">Durée > 6 mois</text><text x="175" y="142" text-anchor="middle" fill="#0891B2" font-size="8">Idéation suicidaire · Psychothérapie</text></g>
  </g>
  <g class="seg fade-in">
    <rect class="spectrum-bar bar3" x="220" y="55" width="95" height="50"/>
    <text class="seg-label" x="267" y="76" text-anchor="middle" fill="#f59e0b">Dépression</text>
    <text class="seg-sub" x="267" y="89" text-anchor="middle">légère</text>
    <g class="tip"><rect x="210" y="110" width="140" height="40" rx="6" fill="rgba(22,78,99,0.92)" stroke="#f59e0b" stroke-width="1"/><text x="280" y="128" text-anchor="middle" fill="#fff" font-size="8.5">GDS 2-3 · Isolement</text><text x="280" y="142" text-anchor="middle" fill="#f59e0b" font-size="8">Activité sociale · Exercice · Suivi</text></g>
  </g>
  <g class="seg fade-in">
    <rect class="spectrum-bar bar4" x="325" y="55" width="95" height="50"/>
    <text class="seg-label" x="372" y="76" text-anchor="middle" fill="#ef4444">Dépression</text>
    <text class="seg-sub" x="372" y="89" text-anchor="middle">majeure</text>
    <g class="tip"><rect x="310" y="110" width="150" height="40" rx="6" fill="rgba(22,78,99,0.92)" stroke="#ef4444" stroke-width="1"/><text x="385" y="128" text-anchor="middle" fill="#fff" font-size="8.5">GDS 4-5 · ISRS 1ère ligne</text><text x="385" y="142" text-anchor="middle" fill="#ef4444" font-size="8">Mirtazapine si insomnia/anorexie</text></g>
  </g>
  <g class="seg fade-in">
    <rect class="spectrum-bar bar5" x="430" y="55" width="75" height="50"/>
    <text class="seg-label" x="467" y="76" text-anchor="middle" fill="#ef4444">Risque</text>
    <text class="seg-sub" x="467" y="89" text-anchor="middle">suicidaire</text>
    <g class="tip"><rect x="395" y="110" width="120" height="40" rx="6" fill="rgba(22,78,99,0.92)" stroke="#ef4444" stroke-width="1"/><text x="455" y="128" text-anchor="middle" fill="#fff" font-size="8.5">Urgence psychiatrique</text><text x="455" y="142" text-anchor="middle" fill="#ef4444" font-size="8">Hospitalisation si nécessaire</text></g>
  </g>
  <!-- Severity arrow -->
  <line x1="20" y1="120" x2="505" y2="120" stroke="currentColor" stroke-width="1" opacity="0.2"/>
  <text x="260" y="135" text-anchor="middle" fill="currentColor" font-size="8" opacity="0.5">Sévérité croissante →</text>
  <!-- Prevalence & screening -->
  <rect x="40" y="160" width="440" height="160" rx="8" fill="rgba(8,145,178,0.05)"/>
  <text x="260" y="180" text-anchor="middle" fill="currentColor" font-size="10" font-weight="600">Dépistage</text>
  <text x="260" y="198" text-anchor="middle" fill="currentColor" font-size="9" opacity="0.8">GDS-15 (Geriatric Depression Scale) · PHQ-9 · Questionnaire de Yesavage</text>
  <text x="260" y="218" text-anchor="middle" fill="currentColor" font-size="10" font-weight="600">Prévalence</text>
  <text x="260" y="236" text-anchor="middle" fill="currentColor" font-size="9" opacity="0.8">15% des > 65 ans en communauté · 30-40% en EHPAD</text>
  <text x="260" y="256" text-anchor="middle" fill="currentColor" font-size="10" font-weight="600">Particularités gériatriques</text>
  <text x="260" y="274" text-anchor="middle" fill="#0891B2" font-size="9">Somatisation · Troubles cognitifs réversibles ("pseudodémence")</text>
  <text x="260" y="290" text-anchor="middle" fill="#f59e0b" font-size="9">Comorbidités : AVC · Parkinson · Insuffisance cardiaque · Diabète</text>
  <text x="260" y="308" text-anchor="middle" fill="#ef4444" font-size="8.5" font-weight="600">⚠ Toute idéation suicidaire = évaluation psychiatrique urgente</text>
</svg>`
  },

  // ─── Figure 11.x : CAM — Confusion Assessment Method ───
  "11.x": {
    title: "CAM — Confusion Assessment Method",
    svg: `<style>
  .ch11-svg { font-family: 'Figtree', 'Noto Sans', sans-serif; }
  .ch11-svg .crit-box { rx: 8; cursor: pointer; transition: all 0.3s; }
  .ch11-svg .crit-box:hover { filter: brightness(1.15); }
  .ch11-svg .c1 { fill: rgba(8,145,178,0.15); stroke: #0891B2; stroke-width: 2; }
  .ch11-svg .c2 { fill: rgba(5,150,105,0.15); stroke: #059669; stroke-width: 2; }
  .ch11-svg .c3 { fill: rgba(245,158,11,0.15); stroke: #f59e0b; stroke-width: 2; }
  .ch11-svg .c4 { fill: rgba(239,68,68,0.15); stroke: #ef4444; stroke-width: 2; }
  .ch11-svg .result-box { rx: 10; stroke-width: 2.5; }
  .ch11-svg .pos { fill: rgba(239,68,68,0.12); stroke: #ef4444; }
  .ch11-svg .neg { fill: rgba(5,150,105,0.12); stroke: #059669; }
  .ch11-svg .arrow { fill: none; stroke: #0891B2; stroke-width: 1.5; stroke-dasharray: 5 3; opacity: 0.5; }
  .ch11-svg .label { fill: currentColor; font-size: 10px; font-weight: 600; }
  .ch11-svg .label-sm { fill: currentColor; font-size: 8px; opacity: 1; }
  .ch11-svg .fade-in { opacity: 0; animation: ch11-fade 0.5s forwards; }
  .ch11-svg .fade-in:nth-of-type(1) { animation-delay: 0.2s; }
  .ch11-svg .fade-in:nth-of-type(2) { animation-delay: 0.5s; }
  .ch11-svg .fade-in:nth-of-type(3) { animation-delay: 0.8s; }
  .ch11-svg .fade-in:nth-of-type(4) { animation-delay: 1.1s; }
  .ch11-svg .fade-in:nth-of-type(5) { animation-delay: 1.5s; }
  .ch11-svg .fade-in:nth-of-type(6) { animation-delay: 2.0s; }
  .ch11-svg .tip { opacity: 0; pointer-events: none; transition: opacity 0.3s; }
  .ch11-svg .crit-box:hover + .tip { opacity: 1; }
  @keyframes ch11-fade { to { opacity: 1; } }
</style>
<svg class="ch11-svg" viewBox="0 0 520 440" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;">
  <text x="260" y="22" text-anchor="middle" fill="currentColor" font-size="13" font-weight="700">CAM — Confusion Assessment Method</text>
  <!-- 4 Criteria -->
  <g class="fade-in">
    <rect class="crit-box c1" x="30" y="45" width="220" height="55"/>
    <text class="label" x="140" y="65" text-anchor="middle" fill="#0891B2">(1) Début aigu</text>
    <text class="label-sm" x="140" y="80" text-anchor="middle">Fluctuation au cours de la journée</text>
    <text class="label-sm" x="140" y="92" text-anchor="middle">Apparition en heures/jours</text>
  </g>
  <g class="fade-in">
    <rect class="crit-box c2" x="270" y="45" width="220" height="55"/>
    <text class="label" x="380" y="65" text-anchor="middle" fill="#059669">(2) Inattention</text>
    <text class="label-sm" x="380" y="80" text-anchor="middle">Difficulté à maintenir l'attention</text>
    <text class="label-sm" x="380" y="92" text-anchor="middle">Distraction facile</text>
  </g>
  <g class="fade-in">
    <rect class="crit-box c3" x="30" y="115" width="220" height="55"/>
    <text class="label" x="140" y="135" text-anchor="middle" fill="#f59e0b">(3) Pensée désorganisée</text>
    <text class="label-sm" x="140" y="150" text-anchor="middle">Discours incohérent</text>
    <text class="label-sm" x="140" y="162" text-anchor="middle">Idées illogiques · Flot d'idées</text>
  </g>
  <g class="fade-in">
    <rect class="crit-box c4" x="270" y="115" width="220" height="55"/>
    <text class="label" x="380" y="135" text-anchor="middle" fill="#ef4444">(4) Niveau de conscience altéré</text>
    <text class="label-sm" x="380" y="150" text-anchor="middle">Hyper ou hypo-vigilance</text>
    <text class="label-sm" x="380" y="162" text-anchor="middle">Sédation · Agitation · Stupor</text>
  </g>
  <!-- Algorithm arrows -->
  <line class="arrow" x1="140" y1="170" x2="140" y2="210"/>
  <line class="arrow" x1="380" y1="170" x2="380" y2="210"/>
  <!-- Decision node -->
  <g class="fade-in">
    <rect x="100" y="210" width="320" height="45" rx="8" fill="rgba(8,145,178,0.1)" stroke="#0891B2" stroke-width="1.5"/>
    <text class="label" x="260" y="232" text-anchor="middle" fill="#0891B2">Algorithme diagnostique</text>
    <text class="label-sm" x="260" y="246" text-anchor="middle">(1) OBLIGATOIRE + (2) OU (3+4)</text>
  </g>
  <line class="arrow" x1="200" y1="255" x2="130" y2="295"/>
  <line class="arrow" x1="320" y1="255" x2="390" y2="295"/>
  <!-- CAM+ -->
  <g class="fade-in">
    <rect class="result-box pos" x="40" y="295" width="190" height="60"/>
    <text class="label" x="135" y="318" text-anchor="middle" fill="#ef4444">CAM+ (confusion)</text>
    <text class="label-sm" x="135" y="335" text-anchor="middle">Critère 1 + 2</text>
    <text class="label-sm" x="135" y="347" text-anchor="middle">ou 1 + 3 + 4</text>
  </g>
  <!-- CAM- -->
  <g class="fade-in">
    <rect class="result-box neg" x="290" y="295" width="190" height="60"/>
    <text class="label" x="385" y="318" text-anchor="middle" fill="#059669">CAM- (pas de confusion)</text>
    <text class="label-sm" x="385" y="335" text-anchor="middle">Critères non remplis</text>
    <text class="label-sm" x="385" y="347" text-anchor="middle">Rechercher autre cause</text>
  </g>
  <!-- Bottom info -->
  <rect x="40" y="380" width="440" height="45" rx="8" fill="rgba(8,145,178,0.05)"/>
  <text x="260" y="398" text-anchor="middle" fill="currentColor" font-size="9.5" font-weight="600">Sensibilité 94-100% · Spécificité 90-95%</text>
  <text x="260" y="415" text-anchor="middle" fill="#0891B2" font-size="8.5">Origine : Infection · Métabolique · Médicamenteuse · Sevrage</text>
</svg>`
  },

  // ─── Figure 12.x : Chaîne de chute ───
  "12.x": {
    title: "Chaîne de chute chez la personne âgée",
    svg: `<style>
  .ch12-svg { font-family: 'Figtree', 'Noto Sans', sans-serif; }
  .ch12-svg .chain-node { rx: 8; stroke-width: 2; cursor: pointer; }
  .ch12-svg .n-intra { fill: rgba(8,145,178,0.12); stroke: #0891B2; }
  .ch12-svg .n-extra { fill: rgba(5,150,105,0.12); stroke: #059669; }
  .ch12-svg .n-trig { fill: rgba(245,158,11,0.15); stroke: #f59e0b; }
  .ch12-svg .n-fall { fill: rgba(239,68,68,0.12); stroke: #ef4444; }
  .ch12-svg .n-cons { fill: rgba(239,68,68,0.20); stroke: #ef4444; stroke-width: 2.5; }
  .ch12-svg .arrow-v { fill: none; stroke: #0891B2; stroke-width: 2; marker-end: url(#ch12-arr);
    stroke-dasharray: 40; stroke-dashoffset: 40; }
  .ch12-svg .a1 { animation: ch12-draw 0.5s 0.5s ease-out forwards; }
  .ch12-svg .a2 { animation: ch12-draw 0.5s 1.3s ease-out forwards; }
  .ch12-svg .a3 { animation: ch12-draw 0.5s 2.1s ease-out forwards; }
  .ch12-svg .a4 { animation: ch12-draw 0.5s 2.9s ease-out forwards; }
  .ch12-svg .chain-el { opacity: 0; animation: ch12-fade 0.5s forwards; }
  .ch12-svg .chain-el:nth-of-type(1) { animation-delay: 0s; }
  .ch12-svg .chain-el:nth-of-type(2) { animation-delay: 0.8s; }
  .ch12-svg .chain-el:nth-of-type(3) { animation-delay: 1.6s; }
  .ch12-svg .chain-el:nth-of-type(4) { animation-delay: 2.4s; }
  .ch12-svg .chain-el:nth-of-type(5) { animation-delay: 3.2s; }
  .ch12-svg .label { fill: currentColor; font-size: 10px; font-weight: 600; }
  .ch12-svg .label-sm { fill: currentColor; font-size: 7.5px; opacity: 1; }
  @keyframes ch12-draw { to { stroke-dashoffset: 0; } }
  @keyframes ch12-fade { to { opacity: 1; } }
</style>
<svg class="ch12-svg" viewBox="0 0 440 520" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;">
  <defs><marker id="ch12-arr" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="none" stroke="#0891B2" stroke-width="1.5"/></marker></defs>
  <text x="220" y="22" text-anchor="middle" fill="currentColor" font-size="13" font-weight="700">Chaîne de chute</text>
  <!-- Node 1: Intrinsèques -->
  <g class="chain-el">
    <rect class="chain-node n-intra" x="90" y="40" width="260" height="55"/>
    <text class="label" x="220" y="60" text-anchor="middle" fill="#0891B2">Facteurs intrinsèques</text>
    <text class="label-sm" x="220" y="75" text-anchor="middle">Âge · Vision · Proprioception · Force · Équilibre</text>
    <text class="label-sm" x="220" y="86" text-anchor="middle">Cognition · Hypotension orthostatique · Pieds</text>
  </g>
  <path class="arrow-v a1" d="M220,95 L220,120"/>
  <!-- Node 2: Extrinsèques -->
  <g class="chain-el">
    <rect class="chain-node n-extra" x="90" y="120" width="260" height="55"/>
    <text class="label" x="220" y="140" text-anchor="middle" fill="#059669">Facteurs extrinsèques</text>
    <text class="label-sm" x="220" y="155" text-anchor="middle">Médicaments (psychotropes, antihypertenseurs)</text>
    <text class="label-sm" x="220" y="166" text-anchor="middle">Environnement · Sol · Éclairage · Escaliers</text>
  </g>
  <path class="arrow-v a2" d="M220,175 L220,200"/>
  <!-- Node 3: Déclencheur -->
  <g class="chain-el">
    <rect class="chain-node n-trig" x="90" y="200" width="260" height="50"/>
    <text class="label" x="220" y="222" text-anchor="middle" fill="#f59e0b">Événement déclencheur</text>
    <text class="label-sm" x="220" y="238" text-anchor="middle">Glissade · Trébuchement · Syncope · Vertige</text>
  </g>
  <path class="arrow-v a3" d="M220,250 L220,280"/>
  <!-- Node 4: Chute -->
  <g class="chain-el">
    <rect class="chain-node n-fall" x="120" y="280" width="200" height="50"/>
    <text class="label" x="220" y="305" text-anchor="middle" fill="#ef4444">CHUTE</text>
    <text class="label-sm" x="220" y="320" text-anchor="middle">Mécanique · Traumatique</text>
  </g>
  <path class="arrow-v a4" d="M220,330 L220,360"/>
  <!-- Node 5: Conséquences -->
  <g class="chain-el">
    <rect class="chain-node n-cons" x="60" y="360" width="320" height="80"/>
    <text class="label" x="220" y="382" text-anchor="middle" fill="#ef4444">Conséquences</text>
    <text class="label-sm" x="220" y="398" text-anchor="middle">Fracture (col fémorale 90% liées aux chutes)</text>
    <text class="label-sm" x="220" y="412" text-anchor="middle">Peur de retomber → restriction d'activité</text>
    <text class="label-sm" x="220" y="426" text-anchor="middle">Isolement · Perte d'autonomie · Dépression</text>
  </g>
  <!-- Bottom: Prevention -->
  <rect x="60" y="460" width="320" height="45" rx="8" fill="rgba(5,150,105,0.08)"/>
  <text x="220" y="480" text-anchor="middle" fill="#059669" font-size="9.5" font-weight="600">Prévention : exercice · révision médicamenteuse</text>
  <text x="220" y="496" text-anchor="middle" fill="#059669" font-size="8.5">Correction visuelle · Adaptation domicile · Vit D</text>
</svg>`
  },

  // ─── Figure 14.x : Pyramide nutritionnelle gériatrique ───
  "14.x": {
    title: "Pyramide nutritionnelle gériatrique",
    svg: `<style>
  .ch14-svg { font-family: 'Figtree', 'Noto Sans', sans-serif; }
  .ch14-svg .pyra-level { cursor: pointer; transition: opacity 0.3s; }
  .ch14-svg .pyra-level:hover { opacity: 1 !important; }
  .ch14-svg .pyra-shape { stroke-width: 1.5; }
  .ch14-svg .p1 { fill: rgba(8,145,178,0.20); stroke: #0891B2; }
  .ch14-svg .p2 { fill: rgba(5,150,105,0.18); stroke: #059669; }
  .ch14-svg .p3 { fill: rgba(245,158,11,0.18); stroke: #f59e0b; }
  .ch14-svg .p4 { fill: rgba(239,68,68,0.12); stroke: #ef4444; }
  .ch14-svg .p5 { fill: rgba(139,92,246,0.15); stroke: #8B5CF6; }
  .ch14-svg .label { fill: currentColor; font-size: 10px; font-weight: 600; }
  .ch14-svg .label-sm { fill: currentColor; font-size: 8px; opacity: 1; }
  .ch14-svg .tip { opacity: 0; pointer-events: none; transition: opacity 0.3s; }
  .ch14-svg .pyra-level:hover .tip { opacity: 1; }
  .ch14-svg .fade-in { opacity: 0; animation: ch14-fade 0.5s forwards; }
  .ch14-svg .fade-in:nth-of-type(1) { animation-delay: 0s; }
  .ch14-svg .fade-in:nth-of-type(2) { animation-delay: 0.4s; }
  .ch14-svg .fade-in:nth-of-type(3) { animation-delay: 0.8s; }
  .ch14-svg .fade-in:nth-of-type(4) { animation-delay: 1.2s; }
  .ch14-svg .fade-in:nth-of-type(5) { animation-delay: 1.6s; }
  @keyframes ch14-fade { to { opacity: 1; } }
</style>
<svg class="ch14-svg" viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;">
  <text x="240" y="22" text-anchor="middle" fill="currentColor" font-size="13" font-weight="700">Pyramide nutritionnelle gériatrique</text>
  <!-- Base: Hydratation -->
  <g class="pyra-level fade-in">
    <polygon class="pyra-shape p1" points="60,410 420,410 380,360 100,360"/>
    <text class="label" x="240" y="382" text-anchor="middle" fill="#0891B2">💧 HYDRATATION</text>
    <text class="label-sm" x="240" y="398" text-anchor="middle">1.5 L/j minimum · Eau · Tisanes · Bouillon</text>
    <g class="tip"><rect x="100" y="412" width="280" height="30" rx="6" fill="rgba(22,78,99,0.92)" stroke="#0891B2" stroke-width="1"/><text x="240" y="431" text-anchor="middle" fill="#fff" font-size="9">Déshydratation = confusion, constipation, chutes · Coloration urinaire</text></g>
  </g>
  <!-- Level 2: Féculents + Légumes -->
  <g class="pyra-level fade-in">
    <polygon class="pyra-shape p2" points="100,358 380,358 340,300 140,300"/>
    <text class="label" x="240" y="325" text-anchor="middle" fill="#059669">Féculents · Légumes · Fruits</text>
    <text class="label-sm" x="240" y="342" text-anchor="middle">Céréales complètes · Fibres · Vitamines</text>
    <g class="tip"><rect x="80" y="360" width="320" height="30" rx="6" fill="rgba(22,78,99,0.92)" stroke="#059669" stroke-width="1"/><text x="240" y="379" text-anchor="middle" fill="#fff" font-size="9">Prévention constipation · Microbiote · Antioxydants</text></g>
  </g>
  <!-- Level 3: Protéines -->
  <g class="pyra-level fade-in">
    <polygon class="pyra-shape p3" points="140,298 340,298 300,240 180,240"/>
    <text class="label" x="240" y="265" text-anchor="middle" fill="#f59e0b">Protéines</text>
    <text class="label-sm" x="240" y="282" text-anchor="middle">Viande · Poisson · Œufs · Légumineuses</text>
    <g class="tip"><rect x="80" y="300" width="320" height="30" rx="6" fill="rgba(22,78,99,0.92)" stroke="#f59e0b" stroke-width="1"/><text x="240" y="319" text-anchor="middle" fill="#fff" font-size="9">1.0-1.2 g/kg/j · Prévention sarcopénie · Collation le soir</text></g>
  </g>
  <!-- Level 4: Lipides -->
  <g class="pyra-level fade-in">
    <polygon class="pyra-shape p4" points="180,238 300,238 270,195 210,195"/>
    <text class="label" x="240" y="215" text-anchor="middle" fill="#ef4444">Lipides</text>
    <text class="label-sm" x="240" y="228" text-anchor="middle">Oméga-3 · Huile d'olive</text>
    <g class="tip"><rect x="80" y="240" width="320" height="30" rx="6" fill="rgba(22,78,99,0.92)" stroke="#ef4444" stroke-width="1"/><text x="240" y="259" text-anchor="middle" fill="#fff" font-size="9">Modération mais pas de restriction excessive · Absorption vitamines liposolubles</text></g>
  </g>
  <!-- Top: Suppléments -->
  <g class="pyra-level fade-in">
    <polygon class="pyra-shape p5" points="210,193 270,193 255,155 225,155"/>
    <text class="label" x="240" y="172" text-anchor="middle" fill="#8B5CF6">Suppléments</text>
    <text class="label-sm" x="240" y="185" text-anchor="middle">Vit D · Ca²⁺</text>
    <g class="tip"><rect x="80" y="195" width="320" height="30" rx="6" fill="rgba(22,78,99,0.92)" stroke="#8B5CF6" stroke-width="1"/><text x="240" y="214" text-anchor="middle" fill="#fff" font-size="9">Vit D 800-1000 UI/j · Ca 1.2g/j · B12 si carence</text></g>
  </g>
  <!-- Arrow: left = less, right = more -->
  <text x="50" y="380" fill="currentColor" font-size="8" opacity="0.5" transform="rotate(-60,50,380)">Moins →</text>
  <text x="430" y="380" fill="currentColor" font-size="8" opacity="0.5" transform="rotate(60,430,380)">← Plus</text>
  <!-- MNA tool -->
  <rect x="100" y="440" width="280" height="30" rx="8" fill="rgba(8,145,178,0.05)"/>
  <text x="240" y="460" text-anchor="middle" fill="#0891B2" font-size="9.5" font-weight="600">Évaluation : MNA (Mini Nutritional Assessment)</text>
</svg>`
  },

  // ─── Figure 15.x : Anatomie vésicale ───
  "15.x": {
    title: "Anatomie vésicale — Incontinence",
    svg: `<style>
  .ch15-svg { font-family: 'Figtree', 'Noto Sans', sans-serif; }
  .ch15-svg .organ { stroke-width: 1.5; cursor: pointer; }
  .ch15-svg .bladder { fill: rgba(8,145,178,0.15); stroke: #0891B2; }
  .ch15-svg .urethra { fill: rgba(5,150,105,0.12); stroke: #059669; }
  .ch15-svg .sphincter { fill: rgba(245,158,11,0.2); stroke: #f59e0b; stroke-width: 2; }
  .ch15-svg .detrusor { fill: rgba(239,68,68,0.12); stroke: #ef4444; stroke-dasharray: 4 2; stroke-width: 1.5; }
  .ch15-svg .label { fill: currentColor; font-size: 9.5px; font-weight: 600; }
  .ch15-svg .label-sm { fill: currentColor; font-size: 8px; opacity: 1; }
  .ch15-svg .state-box { rx: 8; stroke-width: 2; cursor: pointer; transition: filter 0.3s; }
  .ch15-svg .state-box:hover { filter: brightness(1.15); }
  .ch15-svg .s1 { fill: rgba(5,150,105,0.12); stroke: #059669; }
  .ch15-svg .s2 { fill: rgba(239,68,68,0.12); stroke: #ef4444; }
  .ch15-svg .s3 { fill: rgba(245,158,11,0.12); stroke: #f59e0b; }
  .ch15-svg .fade-in { opacity: 0; animation: ch15-fade 0.5s forwards; }
  .ch15-svg .fade-in:nth-of-type(1) { animation-delay: 0.3s; }
  .ch15-svg .fade-in:nth-of-type(2) { animation-delay: 0.8s; }
  .ch15-svg .fade-in:nth-of-type(3) { animation-delay: 1.3s; }
  .ch15-svg .tip { opacity: 0; pointer-events: none; transition: opacity 0.3s; }
  .ch15-svg .state-box:hover .tip { opacity: 1; }
  @keyframes ch15-fade { to { opacity: 1; } }
</style>
<svg class="ch15-svg" viewBox="0 0 480 400" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;">
  <text x="240" y="22" text-anchor="middle" fill="currentColor" font-size="13" font-weight="700">Anatomie vésicale simplifiée</text>
  <!-- Bladder -->
  <ellipse class="organ bladder" cx="240" cy="110" rx="80" ry="55"/>
  <text class="label" x="240" y="105" text-anchor="middle" fill="#0891B2">Vessie</text>
  <text class="label-sm" x="240" y="120" text-anchor="middle">Détrusor (muscle lisse)</text>
  <!-- Urethra -->
  <rect class="organ urethra" x="225" y="165" width="30" height="60" rx="6"/>
  <text class="label" x="280" y="195" fill="#059669">Urètre</text>
  <!-- Sphincters -->
  <ellipse class="organ sphincter" cx="240" cy="185" rx="22" ry="6"/>
  <text class="label-sm" x="310" y="188" fill="#f59e0b">Sphincter interne</text>
  <ellipse class="organ sphincter" cx="240" cy="210" rx="18" ry="5"/>
  <text class="label-sm" x="310" y="213" fill="#f59e0b">Sphincter externe</text>
  <!-- 3 States below -->
  <g class="fade-in">
    <rect class="state-box s1" x="20" y="260" width="130" height="70"/>
    <text class="label" x="85" y="282" text-anchor="middle" fill="#059669">Continence</text>
    <text class="label-sm" x="85" y="297" text-anchor="middle">Réflexe mictionnel</text>
    <text class="label-sm" x="85" y="309" text-anchor="middle">normal · Volontaire</text>
    <g class="tip"><rect x="10" y="332" width="150" height="30" rx="6" fill="rgba(22,78,99,0.92)" stroke="#059669" stroke-width="1"/><text x="85" y="351" text-anchor="middle" fill="#fff" font-size="8.5">Remplissage → Signal → Miction</text></g>
  </g>
  <g class="fade-in">
    <rect class="state-box s2" x="175" y="260" width="130" height="70"/>
    <text class="label" x="240" y="282" text-anchor="middle" fill="#ef4444">Urgence</text>
    <text class="label-sm" x="240" y="297" text-anchor="middle">Détrusor hyperactif</text>
    <text class="label-sm" x="240" y="309" text-anchor="middle">Contractions involontaires</text>
    <g class="tip"><rect x="165" y="332" width="150" height="30" rx="6" fill="rgba(22,78,99,0.92)" stroke="#ef4444" stroke-width="1"/><text x="240" y="351" text-anchor="middle" fill="#fff" font-size="8.5">Anticholinergiques · Rééducation</text></g>
  </g>
  <g class="fade-in">
    <rect class="state-box s3" x="330" y="260" width="130" height="70"/>
    <text class="label" x="395" y="282" text-anchor="middle" fill="#f59e0b">Effort</text>
    <text class="label-sm" x="395" y="297" text-anchor="middle">Sphincter faible</text>
    <text class="label-sm" x="395" y="309" text-anchor="middle">Toux · Rire · Port</text>
    <g class="tip"><rect x="320" y="332" width="150" height="30" rx="6" fill="rgba(22,78,99,0.92)" stroke="#f59e0b" stroke-width="1"/><text x="395" y="351" text-anchor="middle" fill="#fff" font-size="8.5">Périnée · Chirurgie · TVT</text></g>
  </g>
  <!-- Prevalence -->
  <rect x="60" y="370" width="360" height="25" rx="6" fill="rgba(8,145,178,0.05)"/>
  <text x="240" y="387" text-anchor="middle" fill="currentColor" font-size="8.5">Prévalence : 30% des > 65 ans · 50% en EHPAD · Femmes ++</text>
</svg>`
  },

  // ─── Figure 16.x : Cascade iatrogénique ───
  "16.x": {
    title: "Cascade iatrogénique",
    svg: `<style>
  .ch16-svg { font-family: 'Figtree', 'Noto Sans', sans-serif; }
  .ch16-svg .step-box { rx: 8; stroke-width: 2; cursor: pointer; }
  .ch16-svg .step-box:hover { filter: brightness(1.12); }
  .ch16-svg .step1 { fill: rgba(8,145,178,0.15); stroke: #0891B2; }
  .ch16-svg .step2 { fill: rgba(245,158,11,0.15); stroke: #f59e0b; }
  .ch16-svg .step3 { fill: rgba(239,68,68,0.12); stroke: #ef4444; }
  .ch16-svg .step4 { fill: rgba(239,68,68,0.20); stroke: #ef4444; stroke-width: 2.5; }
  .ch16-svg .arrow { fill: none; stroke: #0891B2; stroke-width: 2; marker-end: url(#ch16-arr);
    stroke-dasharray: 50; stroke-dashoffset: 50; }
  .ch16-svg .a1 { animation: ch16-draw 0.5s 0.5s ease-out forwards; }
  .ch16-svg .a2 { animation: ch16-draw 0.5s 1.5s ease-out forwards; }
  .ch16-svg .a3 { animation: ch16-draw 0.5s 2.5s ease-out forwards; }
  .ch16-svg .fade-in { opacity: 0; animation: ch16-fade 0.5s forwards; }
  .ch16-svg .fade-in:nth-of-type(1) { animation-delay: 0s; }
  .ch16-svg .fade-in:nth-of-type(2) { animation-delay: 0.8s; }
  .ch16-svg .fade-in:nth-of-type(3) { animation-delay: 1.8s; }
  .ch16-svg .fade-in:nth-of-type(4) { animation-delay: 2.8s; }
  .ch16-svg .label { fill: currentColor; font-size: 10px; font-weight: 600; }
  .ch16-svg .label-sm { fill: currentColor; font-size: 8px; opacity: 1; }
  .ch16-svg .warn { fill: #ef4444; font-size: 18px; opacity: 0; animation: ch16-fade 0.3s 3.5s forwards; }
  @keyframes ch16-draw { to { stroke-dashoffset: 0; } }
  @keyframes ch16-fade { to { opacity: 1; } }
</style>
<svg class="ch16-svg" viewBox="0 0 440 460" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;">
  <defs><marker id="ch16-arr" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="none" stroke="#0891B2" stroke-width="1.5"/></marker></defs>
  <text x="220" y="22" text-anchor="middle" fill="currentColor" font-size="13" font-weight="700">Cascade iatrogénique</text>
  <!-- Step 1: Prescription -->
  <g class="fade-in">
    <rect class="step-box step1" x="100" y="45" width="240" height="55"/>
    <text class="label" x="220" y="67" text-anchor="middle" fill="#0891B2">1. Prescription</text>
    <text class="label-sm" x="220" y="83" text-anchor="middle">Médicament A pour pathologie X</text>
  </g>
  <path class="arrow a1" d="M220,100 L220,130"/>
  <!-- Step 2: Effet indésirable -->
  <g class="fade-in">
    <rect class="step-box step2" x="100" y="130" width="240" height="55"/>
    <text class="label" x="220" y="152" text-anchor="middle" fill="#f59e0b">2. Effet indésirable</text>
    <text class="label-sm" x="220" y="168" text-anchor="middle">Symptome Y (confusion, chute, chocs…)</text>
  </g>
  <path class="arrow a2" d="M220,185 L220,215"/>
  <!-- Step 3: Nouvelle prescription -->
  <g class="fade-in">
    <rect class="step-box step3" x="100" y="215" width="240" height="55"/>
    <text class="label" x="220" y="237" text-anchor="middle" fill="#ef4444">3. Nouvelle prescription</text>
    <text class="label-sm" x="220" y="253" text-anchor="middle">Médicament B pour traiter Y</text>
  </g>
  <path class="arrow a3" d="M220,270 L220,300"/>
  <!-- Step 4: Polymédication -->
  <g class="fade-in">
    <rect class="step-box step4" x="80" y="300" width="280" height="65"/>
    <text class="label" x="220" y="322" text-anchor="middle" fill="#ef4444">4. POLYMÉDICATION</text>
    <text class="label-sm" x="220" y="340" text-anchor="middle">A + B + C + D… → Effets cumulés</text>
    <text class="label-sm" x="220" y="355" text-anchor="middle">Chutes · Confusion · Insuffisance rénale</text>
  </g>
  <!-- Warning -->
  <text class="warn" x="220" y="390" text-anchor="middle">⚠ STOP la cascade</text>
  <!-- Prevention box -->
  <rect x="60" y="400" width="320" height="45" rx="8" fill="rgba(5,150,105,0.08)"/>
  <text x="220" y="420" text-anchor="middle" fill="#059669" font-size="9.5" font-weight="600">Règle START/STOP : prescrire ET déprescrire</text>
  <text x="220" y="436" text-anchor="middle" fill="#059669" font-size="8.5">Revue médicamenteuse trimestrielle · 5 ≥ médicaments = risque</text>
</svg>`
  },

  // ─── Figure 17.x : Trajectoire de fin de vie ───
  "17.x": {
    title: "Trajectoire de fin de vie",
    svg: `<style>
  .ch17-svg { font-family: 'Figtree', 'Noto Sans', sans-serif; }
  .ch17-svg .curve-cancer { fill: none; stroke: #ef4444; stroke-width: 2.5; stroke-linecap: round;
    stroke-dasharray: 500; stroke-dashoffset: 500; animation: ch17-draw 2s ease-out forwards; }
  .ch17-svg .curve-degen { fill: none; stroke: #0891B2; stroke-width: 2.5; stroke-linecap: round;
    stroke-dasharray: none; stroke-dashoffset: 0; animation: ch17-draw 2.5s 0.5s ease-out forwards; }
  .ch17-svg .intervention { fill: #059669; stroke: #fff; stroke-width: 2; r: 5; opacity: 0; animation: ch17-fade 0.4s forwards; }
  .ch17-svg .int1 { animation-delay: 1.5s; }
  .ch17-svg .int2 { animation-delay: 2.0s; }
  .ch17-svg .int3 { animation-delay: 2.5s; }
  .ch17-svg .label { fill: currentColor; font-size: 10px; font-weight: 600; }
  .ch17-svg .label-sm { fill: currentColor; font-size: 8px; opacity: 1; }
  .ch17-svg .phase-box { rx: 6; stroke-width: 1.5; opacity: 0; animation: ch17-fade 0.5s forwards; }
  .ch17-svg .ph1 { animation-delay: 3s; fill: rgba(5,150,105,0.08); stroke: #059669; }
  .ch17-svg .ph2 { animation-delay: 3.3s; fill: rgba(245,158,11,0.08); stroke: #f59e0b; }
  .ch17-svg .ph3 { animation-delay: 3.6s; fill: rgba(239,68,68,0.08); stroke: #ef4444; }
  @keyframes ch17-draw { to { stroke-dashoffset: 0; } }
  @keyframes ch17-fade { to { opacity: 1; } }
</style>
<svg class="ch17-svg" viewBox="0 0 520 360" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;">
  <text x="260" y="22" text-anchor="middle" fill="currentColor" font-size="13" font-weight="700">Trajectoire de fin de vie</text>
  <!-- Axes -->
  <line x1="60" y1="40" x2="60" y2="280" stroke="currentColor" stroke-width="1" opacity="0.2"/>
  <line x1="60" y1="280" x2="500" y2="280" stroke="currentColor" stroke-width="1" opacity="0.2"/>
  <text x="30" y="160" transform="rotate(-90,30,160)" text-anchor="middle" fill="currentColor" font-size="9" opacity="0.5">Fonction</text>
  <text x="280" y="300" text-anchor="middle" fill="currentColor" font-size="9" opacity="0.5">Temps →</text>
  <!-- Cancer curve (steep decline) -->
  <path class="curve-cancer" d="M80,60 C120,58 160,55 200,52 C240,48 280,45 320,50 C350,60 370,100 390,160 C400,200 410,240 420,270"/>
  <text x="430" y="275" fill="#ef4444" font-size="9" font-weight="600">Cancer</text>
  <!-- Degenerative curve (sawtooth) -->
  <path class="curve-degen" d="M80,80 C120,90 140,100 160,95 C180,90 200,110 220,120 C240,115 260,140 280,150 C300,145 320,170 340,180 C360,175 380,200 400,220 C420,230 440,260 470,275"/>
  <text x="475" y="270" fill="#0891B2" font-size="9" font-weight="600">Dégénérative</text>
  <!-- Intervention points -->
  <circle class="intervention int1" cx="160" cy="95"/>
  <text x="170" y="92" fill="#059669" font-size="7.5">Hôpital</text>
  <circle class="intervention int2" cx="280" cy="150"/>
  <text x="290" y="147" fill="#059669" font-size="7.5">SSR</text>
  <circle class="intervention int3" cx="400" cy="220"/>
  <text x="410" y="217" fill="#059669" font-size="7.5">EHPAD</text>
  <!-- Phases -->
  <rect class="phase-box ph1" x="70" y="310" width="140" height="40"/>
  <text x="140" y="328" text-anchor="middle" fill="#059669" font-size="9" font-weight="600">Stable</text>
  <text x="140" y="342" text-anchor="middle" fill="#059669" font-size="7.5">Années · Maintien</text>
  <rect class="phase-box ph2" x="220" y="310" width="130" height="40"/>
  <text x="285" y="328" text-anchor="middle" fill="#f59e0b" font-size="9" font-weight="600">Transition</text>
  <text x="285" y="342" text-anchor="middle" fill="#f59e0b" font-size="7.5">Mois · Déclin</text>
  <rect class="phase-box ph3" x="360" y="310" width="130" height="40"/>
  <text x="425" y="328" text-anchor="middle" fill="#ef4444" font-size="9" font-weight="600">Fin de vie</text>
  <text x="425" y="342" text-anchor="middle" fill="#ef4444" font-size="7.5">Semaines · Palliatif</text>
</svg>`
  },

  // ─── Figure 18.x : Démarche clinique progressive ───
  "18.x": {
    title: "Démarche clinique progressive",
    svg: `<style>
  .ch18-svg { font-family: 'Figtree', 'Noto Sans', sans-serif; }
  .ch18-svg .step { rx: 8; stroke-width: 2; cursor: pointer; transition: filter 0.3s; }
  .ch18-svg .step:hover { filter: brightness(1.12); }
  .ch18-svg .s1 { fill: rgba(8,145,178,0.15); stroke: #0891B2; }
  .ch18-svg .s2 { fill: rgba(5,150,105,0.12); stroke: #059669; }
  .ch18-svg .s3 { fill: rgba(245,158,11,0.12); stroke: #f59e0b; }
  .ch18-svg .s4 { fill: rgba(139,92,246,0.12); stroke: #8B5CF6; }
  .ch18-svg .s5 { fill: rgba(239,68,68,0.12); stroke: #ef4444; }
  .ch18-svg .s6 { fill: rgba(5,150,105,0.18); stroke: #059669; stroke-width: 2.5; }
  .ch18-svg .arrow-r { fill: none; stroke: #0891B2; stroke-width: 1.5; marker-end: url(#ch18-arr);
    stroke-dasharray: 30; stroke-dashoffset: 30; }
  .ch18-svg .a1 { animation: ch18-draw 0.4s 0.4s forwards; }
  .ch18-svg .a2 { animation: ch18-draw 0.4s 1.0s forwards; }
  .ch18-svg .a3 { animation: ch18-draw 0.4s 1.6s forwards; }
  .ch18-svg .a4 { animation: ch18-draw 0.4s 2.2s forwards; }
  .ch18-svg .a5 { animation: ch18-draw 0.4s 2.8s forwards; }
  .ch18-svg .fade-in { opacity: 0; animation: ch18-fade 0.4s forwards; }
  .ch18-svg .fade-in:nth-of-type(1) { animation-delay: 0s; }
  .ch18-svg .fade-in:nth-of-type(2) { animation-delay: 0.6s; }
  .ch18-svg .fade-in:nth-of-type(3) { animation-delay: 1.2s; }
  .ch18-svg .fade-in:nth-of-type(4) { animation-delay: 1.8s; }
  .ch18-svg .fade-in:nth-of-type(5) { animation-delay: 2.4s; }
  .ch18-svg .fade-in:nth-of-type(6) { animation-delay: 3.0s; }
  .ch18-svg .label { fill: currentColor; font-size: 9.5px; font-weight: 600; }
  .ch18-svg .label-sm { fill: currentColor; font-size: 7.5px; opacity: 1; }
  .ch18-svg .tip { opacity: 0; pointer-events: none; transition: opacity 0.3s; }
  .ch18-svg .step:hover + .tip { opacity: 1; }
  @keyframes ch18-draw { to { stroke-dashoffset: 0; } }
  @keyframes ch18-fade { to { opacity: 1; } }
</style>
<svg class="ch18-svg" viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;">
  <defs><marker id="ch18-arr" markerWidth="6" markerHeight="5" refX="6" refY="2.5" orient="auto"><path d="M0,0 L6,2.5 L0,5" fill="none" stroke="#0891B2" stroke-width="1"/></marker></defs>
  <text x="260" y="22" text-anchor="middle" fill="currentColor" font-size="13" font-weight="700">Démarche clinique progressive</text>
  <!-- Step 1: Anamnèse -->
  <g class="fade-in">
    <rect class="step s1" x="15" y="50" width="75" height="60"/>
    <text class="label" x="52" y="72" text-anchor="middle" fill="#0891B2">1</text>
    <text class="label-sm" x="52" y="87" text-anchor="middle">Anamnèse</text>
    <text class="label-sm" x="52" y="99" text-anchor="middle">Semiologie</text>
  </g>
  <path class="arrow-r a1" d="M90,80 L105,80"/>
  <!-- Step 2: Examen -->
  <g class="fade-in">
    <rect class="step s2" x="105" y="50" width="75" height="60"/>
    <text class="label" x="142" y="72" text-anchor="middle" fill="#059669">2</text>
    <text class="label-sm" x="142" y="87" text-anchor="middle">Examen</text>
    <text class="label-sm" x="142" y="99" text-anchor="middle">clinique</text>
  </g>
  <path class="arrow-r a2" d="M180,80 L195,80"/>
  <!-- Step 3: Hypothèses -->
  <g class="fade-in">
    <rect class="step s3" x="195" y="50" width="75" height="60"/>
    <text class="label" x="232" y="72" text-anchor="middle" fill="#f59e0b">3</text>
    <text class="label-sm" x="232" y="87" text-anchor="middle">Hypothèses</text>
    <text class="label-sm" x="232" y="99" text-anchor="middle">diagnostiques</text>
  </g>
  <path class="arrow-r a3" d="M270,80 L285,80"/>
  <!-- Step 4: Examens -->
  <g class="fade-in">
    <rect class="step s4" x="285" y="50" width="75" height="60"/>
    <text class="label" x="322" y="72" text-anchor="middle" fill="#8B5CF6">4</text>
    <text class="label-sm" x="322" y="87" text-anchor="middle">Examens</text>
    <text class="label-sm" x="322" y="99" text-anchor="middle">complémentaires</text>
  </g>
  <path class="arrow-r a4" d="M360,80 L375,80"/>
  <!-- Step 5: Diagnostic -->
  <g class="fade-in">
    <rect class="step s5" x="375" y="50" width="75" height="60"/>
    <text class="label" x="412" y="72" text-anchor="middle" fill="#ef4444">5</text>
    <text class="label-sm" x="412" y="87" text-anchor="middle">Diagnostic</text>
    <text class="label-sm" x="412" y="99" text-anchor="middle">positif</text>
  </g>
  <path class="arrow-r a5" d="M450,80 L460,80"/>
  <!-- Step 6: Plan -->
  <g class="fade-in">
    <rect class="step s6" x="455" y="50" width="60" height="60"/>
    <text class="label" x="485" y="72" text-anchor="middle" fill="#059669">6</text>
    <text class="label-sm" x="485" y="87" text-anchor="middle">Plan</text>
    <text class="label-sm" x="485" y="99" text-anchor="middle">thérapeutique</text>
  </g>
  <!-- Bottom: Mini-dossiers context -->
  <rect x="15" y="130" width="490" height="150" rx="8" fill="rgba(8,145,178,0.04)"/>
  <text x="260" y="150" text-anchor="middle" fill="currentColor" font-size="10" font-weight="600">Mini-dossiers progressifs</text>
  <text x="260" y="170" text-anchor="middle" fill="currentColor" font-size="9" opacity="0.8">Étape 1 : Vous recevez les données de base (âge, motif, ATCD)</text>
  <text x="260" y="187" text-anchor="middle" fill="currentColor" font-size="9" opacity="0.8">Étape 2 : Vous demandez les examens pertinents</text>
  <text x="260" y="204" text-anchor="middle" fill="currentColor" font-size="9" opacity="0.8">Étape 3 : Résultats → Diagnostic → Plan thérapeutique</text>
  <text x="260" y="224" text-anchor="middle" fill="#0891B2" font-size="9" font-weight="600">Objectif : reproduire la démarche clinique réelle</text>
  <text x="260" y="244" text-anchor="middle" fill="#f59e0b" font-size="8.5">Ne pas passer directement au diagnostic → réfléchir étape par étape</text>
  <text x="260" y="262" text-anchor="middle" fill="currentColor" font-size="8" opacity="0.5">Méthode : hypothèse → argument pour/contre → conclusion</text>
</svg>`
  },

  // ─── Figure 19.x : Résolution de problèmes cliniques ───
  "19.x": {
    title: "Résolution de problèmes cliniques",
    svg: `<style>
  .ch19-svg { font-family: 'Figtree', 'Noto Sans', sans-serif; }
  .ch19-svg .center-circle { fill: rgba(8,145,178,0.15); stroke: #0891B2; stroke-width: 2.5; }
  .ch19-svg .branch-line { stroke: #0891B2; stroke-width: 1.5; fill: none; stroke-dasharray: 80; stroke-dashoffset: 80; }
  .ch19-svg .b1 { animation: ch19-draw 0.8s 0.3s ease-out forwards; }
  .ch19-svg .b2 { animation: ch19-draw 0.8s 0.8s ease-out forwards; }
  .ch19-svg .b3 { animation: ch19-draw 0.8s 1.3s ease-out forwards; }
  .ch19-svg .b4 { animation: ch19-draw 0.8s 1.8s ease-out forwards; }
  .ch19-svg .leaf { rx: 8; stroke-width: 1.5; cursor: pointer; }
  .ch19-svg .leaf:hover { filter: brightness(1.1); }
  .ch19-svg .l1 { fill: rgba(8,145,178,0.12); stroke: #0891B2; }
  .ch19-svg .l2 { fill: rgba(5,150,105,0.12); stroke: #059669; }
  .ch19-svg .l3 { fill: rgba(245,158,11,0.12); stroke: #f59e0b; }
  .ch19-svg .l4 { fill: rgba(239,68,68,0.12); stroke: #ef4444; }
  .ch19-svg .leaf-label { fill: currentColor; font-size: 9px; font-weight: 600; }
  .ch19-svg .leaf-sub { fill: currentColor; font-size: 7.5px; opacity: 0.7; }
  .ch19-svg .fade-in { opacity: 0; animation: ch19-fade 0.5s forwards; }
  .ch19-svg .fade-in:nth-of-type(1) { animation-delay: 0.5s; }
  .ch19-svg .fade-in:nth-of-type(2) { animation-delay: 1.0s; }
  .ch19-svg .fade-in:nth-of-type(3) { animation-delay: 1.5s; }
  .ch19-svg .fade-in:nth-of-type(4) { animation-delay: 2.0s; }
  @keyframes ch19-draw { to { stroke-dashoffset: 0; } }
  @keyframes ch19-fade { to { opacity: 1; } }
</style>
<svg class="ch19-svg" viewBox="0 0 480 380" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;">
  <text x="240" y="22" text-anchor="middle" fill="currentColor" font-size="13" font-weight="700">Résolution de problèmes</text>
  <!-- Central node -->
  <circle class="center-circle" cx="240" cy="180" r="50" style="opacity:0;animation:ch19-fade 0.5s forwards;"/>
  <text x="240" y="172" text-anchor="middle" fill="#0891B2" font-size="10" font-weight="700">Problème</text>
  <text x="240" y="186" text-anchor="middle" fill="#0891B2" font-size="10" font-weight="700">clinique</text>
  <!-- Branch 1: Données -->
  <line class="branch-line b1" x1="200" y1="150" x2="100" y2="80"/>
  <g class="fade-in">
    <rect class="leaf l1" x="20" y="50" width="140" height="55"/>
    <text class="leaf-label" x="90" y="70" text-anchor="middle" fill="#0891B2">Données</text>
    <text class="leaf-sub" x="90" y="84" text-anchor="middle">Subjectives (anamnèse)</text>
    <text class="leaf-sub" x="90" y="96" text-anchor="middle">Objectives (examen, labo)</text>
  </g>
  <!-- Branch 2: Hypothèses -->
  <line class="branch-line b2" x1="280" y1="150" x2="370" y2="80"/>
  <g class="fade-in">
    <rect class="leaf l2" x="310" y="50" width="150" height="55"/>
    <text class="leaf-label" x="385" y="70" text-anchor="middle" fill="#059669">Hypothèses</text>
    <text class="leaf-sub" x="385" y="84" text-anchor="middle">Diagnostic différentiel</text>
    <text class="leaf-sub" x="385" y="96" text-anchor="middle">Probabilité · Urgence</text>
  </g>
  <!-- Branch 3: Stratégie -->
  <line class="branch-line b3" x1="200" y1="210" x2="100" y2="290"/>
  <g class="fade-in">
    <rect class="leaf l3" x="20" y="270" width="150" height="55"/>
    <text class="leaf-label" x="95" y="290" text-anchor="middle" fill="#f59e0b">Stratégie</text>
    <text class="leaf-sub" x="95" y="304" text-anchor="middle">Examens ciblés</text>
    <text class="leaf-sub" x="95" y="316" text-anchor="middle">Coût-bénéfice · Risques</text>
  </g>
  <!-- Branch 4: Intervention -->
  <line class="branch-line b4" x1="280" y1="210" x2="370" y2="290"/>
  <g class="fade-in">
    <rect class="leaf l4" x="310" y="270" width="150" height="55"/>
    <text class="leaf-label" x="385" y="290" text-anchor="middle" fill="#ef4444">Intervention</text>
    <text class="leaf-sub" x="385" y="304" text-anchor="middle">Traitement · Éducation</text>
    <text class="leaf-sub" x="385" y="316" text-anchor="middle">Suivi · Réévaluation</text>
  </g>
  <!-- Bottom -->
  <rect x="60" y="345" width="360" height="25" rx="6" fill="rgba(8,145,178,0.05)"/>
  <text x="240" y="362" text-anchor="middle" fill="#0891B2" font-size="9" font-weight="600">Key Features Problems : raisonnement clinique structuré</text>
</svg>`
  },

  // ─── Figure 20.x : Approche par items ───
  "20.x": {
    title: "Approche par items — Tableau de bord",
    svg: `<style>
  .ch20-svg { font-family: 'Figtree', 'Noto Sans', sans-serif; }
  .ch20-svg .card { rx: 8; stroke-width: 1.5; cursor: pointer; transition: filter 0.3s; }
  .ch20-svg .card:hover { filter: brightness(1.15); }
  .ch20-svg .c1 { fill: rgba(8,145,178,0.12); stroke: #0891B2; }
  .ch20-svg .c2 { fill: rgba(5,150,105,0.12); stroke: #059669; }
  .ch20-svg .c3 { fill: rgba(245,158,11,0.12); stroke: #f59e0b; }
  .ch20-svg .c4 { fill: rgba(239,68,68,0.10); stroke: #ef4444; }
  .ch20-svg .c5 { fill: rgba(139,92,246,0.12); stroke: #8B5CF6; }
  .ch20-svg .c6 { fill: rgba(22,78,99,0.12); stroke: #164E63; }
  .ch20-svg .card-label { fill: currentColor; font-size: 9px; font-weight: 600; }
  .ch20-svg .card-count { font-size: 18px; font-weight: 800; opacity: 0; animation: ch20-fade 0.4s forwards; }
  .ch20-svg .cc1 { fill: #0891B2; animation-delay: 0.3s; }
  .ch20-svg .cc2 { fill: #059669; animation-delay: 0.6s; }
  .ch20-svg .cc3 { fill: #f59e0b; animation-delay: 0.9s; }
  .ch20-svg .cc4 { fill: #ef4444; animation-delay: 1.2s; }
  .ch20-svg .cc5 { fill: #8B5CF6; animation-delay: 1.5s; }
  .ch20-svg .cc6 { fill: #164E63; animation-delay: 1.8s; }
  .ch20-svg .tip { opacity: 0; pointer-events: none; transition: opacity 0.3s; }
  .ch20-svg .card:hover .tip { opacity: 1; }
  @keyframes ch20-fade { to { opacity: 1; } }
</style>
<svg class="ch20-svg" viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;">
  <text x="240" y="22" text-anchor="middle" fill="currentColor" font-size="13" font-weight="700">Questions isolées — Tableau de bord</text>
  <!-- 6 category cards -->
  <g><rect class="card c1" x="20" y="45" width="135" height="80"/>
    <text class="card-count cc1" x="87" y="80" text-anchor="middle">5</text>
    <text class="card-label" x="87" y="100" text-anchor="middle" fill="#0891B2">Urgences</text>
    <text class="card-label" x="87" y="115" text-anchor="middle" font-size="7" opacity="0.6">Chute · Confusion · Douleur</text>
    <g class="tip"><rect x="10" y="128" width="155" height="25" rx="6" fill="rgba(22,78,99,0.92)" stroke="#0891B2" stroke-width="1"/><text x="87" y="145" text-anchor="middle" fill="#fff" font-size="8">ITEM 109, 131, 108, 130</text></g>
  </g>
  <g><rect class="card c2" x="172" y="45" width="135" height="80"/>
    <text class="card-count cc2" x="239" y="80" text-anchor="middle">6</text>
    <text class="card-label" x="239" y="100" text-anchor="middle" fill="#059669">Path. chroniques</text>
    <text class="card-label" x="239" y="115" text-anchor="middle" font-size="7" opacity="0.6">HTA · Diabète · BPCO</text>
    <g class="tip"><rect x="162" y="128" width="155" height="25" rx="6" fill="rgba(22,78,99,0.92)" stroke="#059669" stroke-width="1"/><text x="239" y="145" text-anchor="middle" fill="#fff" font-size="8">ITEM 322, 325, 128</text></g>
  </g>
  <g><rect class="card c3" x="325" y="45" width="135" height="80"/>
    <text class="card-count cc3" x="392" y="80" text-anchor="middle">4</text>
    <text class="card-label" x="392" y="100" text-anchor="middle" fill="#f59e0b">Pharmacologie</text>
    <text class="card-label" x="392" y="115" text-anchor="middle" font-size="7" opacity="0.6">Polymédication · Iatrogénie</text>
    <g class="tip"><rect x="315" y="128" width="155" height="25" rx="6" fill="rgba(22,78,99,0.92)" stroke="#f59e0b" stroke-width="1"/><text x="392" y="145" text-anchor="middle" fill="#fff" font-size="8">ITEM 322, 325</text></g>
  </g>
  <g><rect class="card c4" x="20" y="150" width="135" height="80"/>
    <text class="card-count cc4" x="87" y="185" text-anchor="middle">3</text>
    <text class="card-label" x="87" y="205" text-anchor="middle" fill="#ef4444">Éthique</text>
    <text class="card-label" x="87" y="220" text-anchor="middle" font-size="7" opacity="0.6">Fin de vie · Consentement</text>
    <g class="tip"><rect x="10" y="233" width="155" height="25" rx="6" fill="rgba(22,78,99,0.92)" stroke="#ef4444" stroke-width="1"/><text x="87" y="250" text-anchor="middle" fill="#fff" font-size="8">ITEM 9, 139</text></g>
  </g>
  <g><rect class="card c5" x="172" y="150" width="135" height="80"/>
    <text class="card-count cc5" x="239" y="185" text-anchor="middle">8</text>
    <text class="card-label" x="239" y="205" text-anchor="middle" fill="#8B5CF6">Gériatrie générale</text>
    <text class="card-label" x="239" y="220" text-anchor="middle" font-size="7" opacity="0.6">Vieillissement · Fragilité</text>
    <g class="tip"><rect x="162" y="233" width="155" height="25" rx="6" fill="rgba(22,78,99,0.92)" stroke="#8B5CF6" stroke-width="1"/><text x="239" y="250" text-anchor="middle" fill="#fff" font-size="8">ITEM 123, 121, 230</text></g>
  </g>
  <g><rect class="card c6" x="325" y="150" width="135" height="80"/>
    <text class="card-count cc6" x="392" y="185" text-anchor="middle">5</text>
    <text class="card-label" x="392" y="205" text-anchor="middle" fill="#164E63">Neurologie</text>
    <text class="card-label" x="392" y="220" text-anchor="middle" font-size="7" opacity="0.6">Démence · AVC · Parkinson</text>
    <g class="tip"><rect x="315" y="233" width="155" height="25" rx="6" fill="rgba(22,78,99,0.92)" stroke="#164E63" stroke-width="1"/><text x="392" y="250" text-anchor="middle" fill="#fff" font-size="8">ITEM 23, 108</text></g>
  </g>
  <!-- Total -->
  <rect x="120" y="260" width="240" height="40" rx="8" fill="rgba(8,145,178,0.08)"/>
  <text x="240" y="280" text-anchor="middle" fill="currentColor" font-size="10" font-weight="600">31 questions isolées au total</text>
  <text x="240" y="295" text-anchor="middle" fill="#0891B2" font-size="8.5">Chaque question = 1 scenario clinique court</text>
</svg>`
  }

};

// ─── Helper: resolve static FIGURES asset (object {src}, array, or string) ───
function resolveFigureSrc(figId) {
  if (typeof FIGURES === 'undefined' || !FIGURES[figId]) return null;
  var v = FIGURES[figId];
  if (typeof v === 'string') return v;
  if (Array.isArray(v)) return v[0] || null;
  if (v && typeof v === 'object' && v.src) return v.src;
  return null;
}

// ─── Helper: REFAIT SVG exact only (never crops; fuzzy only if allowFuzzy) ───
function renderInteractiveFigure(figId, opts) {
  opts = opts || {};
  var exactInteractive = INTERACTIVE_FIGURES[figId];
  if (exactInteractive && exactInteractive.svg) {
    return exactInteractive.svg;
  }
  // Fuzzy désactivé par défaut : évitait que 6.1–6.7 affichent le même schéma
  if (opts.allowFuzzy) {
    var prefix = String(figId).split('.')[0];
    var genericKey = prefix + '.x';
    if (INTERACTIVE_FIGURES[genericKey] && INTERACTIVE_FIGURES[genericKey].svg) {
      return INTERACTIVE_FIGURES[genericKey].svg;
    }
  }
  return '';
}

// Make available globally
if (typeof window !== 'undefined') {
  window.INTERACTIVE_FIGURES = INTERACTIVE_FIGURES;
  window.renderInteractiveFigure = renderInteractiveFigure;
  window.resolveFigureSrc = resolveFigureSrc;
  // Escarre stage toggle (referenced by onclick in SVG)
  window.toggleEscarreStage = function(stage) {
    var el = document.getElementById('esc-r' + stage);
    if (!el) return;
    // Toggle a CSS class that overrides the animation's final opacity
    if (el.style.opacity === '0') {
      el.style.opacity = '';
    } else {
      el.style.opacity = '0';
    }
  };
}
