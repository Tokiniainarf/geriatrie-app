/**
 * Notebooks interactifs — reformulation pédagogique des blueprints NotebookLM
 * (pas d'embed PDF : slides légères, checklists, algos, flip-cards).
 * Chapitres vague 1 : ch3, ch9, ch11, ch12, ch14, ch16
 */
const INTERACTIVE_NOTEBOOKS = [
  {
    id: 'nb-ch3',
    chapter: 'ch3',
    title: 'Autonomie — Architecture fonctionnelle',
    source: 'NotebookLM · Architecture de l\'Autonomie + Assessment Blueprint',
    color: '#0D9488',
    slides: [
      {
        type: 'intro',
        title: 'Pourquoi l\'autonomie structure tout',
        body: 'L\'autonomie n\'est pas « marcher ou non ». C\'est la capacité à faire les actes de vie dans un environnement donné, avec ou sans aide. En EVC, tout plan de soins part d\'une mesure (ADL / IADL / GIR) et d\'un projet de lieu de vie.'
      },
      {
        type: 'keys',
        title: 'Trois couches à ne jamais confondre',
        points: [
          'Capacité physique (force, équilibre, sensoriel)',
          'Capacité cognitive / décisionnelle (consentir, gérer médicaments)',
          'Capacité sociale / environnementale (aidant, domicile, ressources)'
        ]
      },
      {
        type: 'checklist',
        title: 'Checklist EGS autonomie (à cocher)',
        items: [
          'ADL Katz (6 items) documentés',
          'IADL Lawton (8 items) documentés',
          'GIR / AGGIR si décision APA / hébergement',
          'Aidant principal identifié + charge aidant',
          'Risque chute + TUG ou Tinetti',
          'Cognition (MMS/MoCA) + humeur (GDS)',
          'Ordonnance revue (iatrogénie → perte d\'autonomie)',
          'Projet de lieu de vie discuté avec patient/aidant'
        ]
      },
      {
        type: 'steps',
        title: 'Algo : perte d\'autonomie récente',
        steps: [
          'Chronologie : depuis quand ? progressive vs brutale',
          'Chercher F3 précipitant : infection, iatrogénie, chute, douleur, dépression',
          'Mesurer ADL/IADL AVANT et APRÈS l\'épisode',
          'Rééducation + correction cause + révision médicaments',
          'Réévaluer à J7–J30 avant de conclure à une dépendance définitive'
        ]
      },
      {
        type: 'flip',
        question: 'IADL ↓ avec MMS normal : quelles 3 pistes en priorité ?',
        answer: '1) Dépression / GDS  2) Douleur / sensoriel  3) Iatrogénie (BZD, anticholinergiques). Ne pas conclure trop vite à une démence.'
      },
      {
        type: 'keys',
        title: 'Perles EVC',
        points: [
          '💎 Quantifier : « dépendant pour 3/6 ADL » plutôt que « perte d\'autonomie »',
          '🎯 GIR 1–4 → APA possible ; relier toujours GIR + plan d\'aide + projet de sortie',
          '💎 Dépendant physiquement ≠ incapable de consentir'
        ]
      }
    ]
  },
  {
    id: 'nb-ch9',
    chapter: 'ch9',
    title: 'Troubles neurocognitifs & BPSD',
    source: 'NotebookLM · Neurocognitive Blueprint + BPSD 2024',
    color: '#0E7490',
    slides: [
      {
        type: 'intro',
        title: 'Cadre diagnostique',
        body: 'Plainte → déficit objectif → retentissement fonctionnel. MCI = déficit sans retentissement majeur. Démence = déficit + impact sur autonomie. Toujours éliminer causes réversibles et delirium superposé.'
      },
      {
        type: 'checklist',
        title: 'Bilan initial (cocher)',
        items: [
          'Histoire aidant (début, rythme, retentissement)',
          'MMS + MoCA (ou équivalent adapté)',
          'GDS-15 (pseudodémence dépressive)',
          'NFS, iono, B12, TSH, CRP',
          'IRM cérébrale (ou scanner si IRM impossible)',
          'Revue anticholinergiques / sédatifs',
          'ADL / IADL + conduite automobile si pertinent',
          'Personne de confiance / directives anticipées amorcées'
        ]
      },
      {
        type: 'keys',
        title: 'Quatre profils à reconnaître',
        points: [
          'Alzheimer : mémoire épisodique progressive, désorientation',
          'Vasculaire : escalier, signes focaux, charge vasculaire IRM',
          'Corps de Lewy : fluctuations, hallucinations visuelles, parkinsonisme',
          'Fronto-temporale : comportement / langage précoces'
        ]
      },
      {
        type: 'steps',
        title: 'Algo BPSD (troubles du comportement)',
        steps: [
          'Sécurité immédiate (patient / soignants)',
          'Chercher cause somatique : douleur, infection, globe, fécalome, iatrogénie',
          'Mesures non médicamenteuses 1re ligne (environnement, routines, aidants)',
          'Si danger : psychotrope à faible dose, durée courte, réévaluation',
          'DLB : éviter neuroleptiques classiques (hypersensibilité)'
        ]
      },
      {
        type: 'flip',
        question: 'Pourquoi le neuroleptique est dangereux dans la DLB ?',
        answer: 'Hypersensibilité aux neuroleptiques : aggravation motrice, confusion, mortalité ↑. Préférer mesures non médicamenteuses et avis spécialisé.'
      },
      {
        type: 'keys',
        title: 'Perles EVC',
        points: [
          '🎯 ITEM 23/108 : différencier MCI, démence, delirium, dépression',
          '💎 GDS systématique devant tout trouble cognitif',
          '🎯 BPSD = d\'abord cause somatique, jamais contention en 1re intention'
        ]
      }
    ]
  },
  {
    id: 'nb-ch11',
    chapter: 'ch11',
    title: 'Delirium — conduite interactive',
    source: 'NotebookLM · Geriatric Delirium Management',
    color: '#0369A1',
    slides: [
      {
        type: 'intro',
        title: 'Urgence cognitive',
        body: 'Delirium = trouble aigu de l\'attention et de la conscience, fluctuant. Forme hypoactive majoritaire et sous-diagnostiquée. Ce n\'est pas une démence, mais un signal de gravité.'
      },
      {
        type: 'keys',
        title: 'CAM en 4 points',
        points: [
          '1. Début aigu + fluctuation',
          '2. Inattention',
          '3. Désorganisation de la pensée',
          '4. Altération du niveau de conscience',
          'Diagnostic si (1+2) et (3 ou 4)'
        ]
      },
      {
        type: 'checklist',
        title: 'Bilan express (H0)',
        items: [
          'Constantes + glycémie capillaire',
          'ECBU / infection (y compris sans fièvre)',
          'NFS, CRP, iono, créatinine, calcémie',
          'Globe urinaire / fécalome',
          'Douleur évaluée (EVA / ALGOPLUS / ECPA)',
          'Revue médicaments (BZD, anticholinergiques, opioïdes)',
          'O2, ECG si terrain',
          'Mesures environnementales démarrées'
        ]
      },
      {
        type: 'steps',
        title: 'Algo de prise en charge',
        steps: [
          'Confirmer CAM + type (hypo / hyper / mixte)',
          'Traiter la cause F3 en priorité',
          'Non médicamenteux : lunettes, audition, horloge, présence, lumière jour/nuit',
          'Hydratation + mobilisation + sommeil protégé',
          'Agitation dangereuse : halopéridol 0,5–1 mg max, courte durée',
          'Réévaluer 24–48 h ; plan post-delirium (autonomie, aidants)'
        ]
      },
      {
        type: 'flip',
        question: 'Quelle est la mauvaise réponse EVC classique ?',
        answer: 'Contention physique systématique ou benzodiazépine de routine. Préférer mesures non médicamenteuses + traiter la cause.'
      },
      {
        type: 'keys',
        title: 'Perles',
        points: [
          '💎 Hypoactif = 3/4 des cas — ne pas rater le patient « calme »',
          '🎯 CAM pour delirium, MMS pour démence — les deux sont utiles',
          '💎 Delirium sur démence = fréquent à l\'hôpital'
        ]
      }
    ]
  },
  {
    id: 'nb-ch12',
    chapter: 'ch12',
    title: 'Chutes — Blueprint interactif',
    source: 'NotebookLM · Blueprint des Chutes Gériatriques',
    color: '#164E63',
    slides: [
      {
        type: 'intro',
        title: 'Chute = syndrome gériatrique',
        body: '1/3 des > 65 ans chutent chaque année. Toute chute est une opportunité d\'EGS : intrinsèque, extrinsèque, iatrogène, traumatisme, peur de rechute.'
      },
      {
        type: 'checklist',
        title: 'Anamnèse structurée',
        items: [
          'Circonstances (lieu, activité, prodromes)',
          'Perte de connaissance ? (syncope vs mécanique)',
          'Traumatisme (hanche, poignet, crâne)',
          'Antécédents de chutes / peur de chuter',
          'Médicaments (BZD, hypotenseurs, psychotropes)',
          'Vision / audition / chaussage',
          'Environnement domicile',
          'Conséquences fonctionnelles (alitement, anxiété)'
        ]
      },
      {
        type: 'steps',
        title: 'Algo post-chute',
        steps: [
          'ABC + traumatisme (anticoagulant → imagerie basse)',
          'Orthostatisme (PA couché / debout 1 et 3 min)',
          'Marche : TUG, Tinetti ou SPPB',
          'ECG + iono + NFS + glycémie',
          'Révision médicamenteuse (cible : BZD et psychotropes)',
          'Plan prévention : exercice + domicile + vit. D si indiqué'
        ]
      },
      {
        type: 'keys',
        title: 'Seuils utiles',
        points: [
          'TUG > 14 s ≈ risque élevé',
          'Tinetti < 24/28 ≈ instabilité',
          'Vitesse de marche < 0,8 m/s = fragilité',
          '~50 % des chutes : cause médicamenteuse identifiable'
        ]
      },
      {
        type: 'flip',
        question: 'Réponse EVC « complète » en 4 piliers ?',
        answer: '1) Évaluation marche (TUG/Tinetti)  2) Révision médicaments  3) Exercice d\'équilibre  4) Adaptation domicile ± vitamine D'
      },
      {
        type: 'keys',
        title: 'Perles',
        points: [
          '💎 Toute chute = revue médicamenteuse systématique',
          '🎯 ITEM 131 : circonstances / intrinsèque / extrinsèque / iatrogénie',
          '💎 Peur de chuter = facteur de récidive à traiter (rééducation)'
        ]
      }
    ]
  },
  {
    id: 'nb-ch14',
    chapter: 'ch14',
    title: 'Nutrition — Protocole interactif',
    source: 'NotebookLM · Geriatric Nutrition Protocol',
    color: '#15803D',
    slides: [
      {
        type: 'intro',
        title: 'Dénutrition = levier thérapeutique',
        body: 'La dénutrition accélère sarcopénie, infections, escarres et confusion. Dépister tôt (MNA + poids) et traiter causes + apports, pas seulement l\'albumine.'
      },
      {
        type: 'keys',
        title: 'Critères d\'alerte',
        points: [
          'MNA < 17 = dénutrition ; 17–23,5 = risque',
          'Perte de poids ≥ 5 % / 1 mois ou ≥ 10 % / 6 mois',
          'IMC < 21 kg/m² chez la personne âgée',
          'Albumine < 35 g/L = marqueur pronostique (contexte inflammatoire)'
        ]
      },
      {
        type: 'checklist',
        title: 'Plan de renutrition',
        items: [
          'Poids hebdomadaire noté',
          'Objectifs : 30–35 kcal/kg/j ; protéines 1,0–1,2 g/kg (↑ si stress)',
          'Enrichissement repas + CNO 1–2/j si besoin',
          'Texture / dysphagie évaluée (orthophonie)',
          'Hydratation ~1,5 L/j si pas de restriction',
          'Traiter douleur, dépression, constipation, médicaments anorexigènes',
          'Vitamine D selon statut / os',
          'Si échec oral : discuter entérale (pas parentérale en 1re ligne)'
        ]
      },
      {
        type: 'steps',
        title: 'Algo dénutrition sévère',
        steps: [
          'Confirmer critères + causes (digestif, psy, social, iatrogénie)',
          'Réalimentation progressive si risque de renutrition',
          'Surveiller P, K, Mg, thiamine les premiers jours',
          'CNO + enrichissement ; fractionner les prises',
          'Réévaluer poids et fonction à J7–J14',
          'Escalade entérale si besoins non couverts de façon sécurisée'
        ]
      },
      {
        type: 'flip',
        question: 'Pourquoi ne pas se fier à l\'IMC seul ?',
        answer: 'Une personne en surpoids peut être dénutrie (sarcopénie). Combiner MNA + trajectoire de poids + clinique (force, cicatrisation).'
      },
      {
        type: 'keys',
        title: 'Perles',
        points: [
          '🎯 ITEM 230 : MNA + poids + albumine',
          '💎 Jeûne hospitalier inutile = dénutrition iatrogène',
          '💎 Anorexie + dépression + douleur → traiter les causes avant sonde systématique'
        ]
      }
    ]
  },
  {
    id: 'nb-ch16',
    chapter: 'ch16',
    title: 'Prescription sûre — Dashboard',
    source: 'NotebookLM · Safe Geriatric Prescribing',
    color: '#164E63',
    slides: [
      {
        type: 'intro',
        title: 'Iatrogénie = F3 n°1 souvent oublié',
        body: 'Chez le sujet âgé, chaque ligne d\'ordonnance peut être un facteur de chute, confusion ou chute de DFG. La conciliation médicamenteuse et la déprescription sont des compétences EVC majeures.'
      },
      {
        type: 'checklist',
        title: 'Revue d\'ordonnance (5 questions)',
        items: [
          'Indication toujours valide pour chaque molécule ?',
          'Dose adaptée au DFG / poids / âge ?',
          'Interaction cliniquement pertinente ?',
          'Duplication de classe (ex. 2 psychotropes) ?',
          'Molécule Beers / STOPP à haut risque ?',
          'Durée de traitement définie (ATB, IPP, BZD) ?',
          'Patient / aidant capable de gérer le plan ?',
          'Conciliation entrée–sortie faite ?'
        ]
      },
      {
        type: 'keys',
        title: 'Classes à risque prioritaire',
        points: [
          'Benzodiazépines et Z-drugs → chutes, confusion',
          'Anticholinergiques → cognition, rétention, constipation',
          'AINS → IRA, HTA, hémorragie',
          'Antihypertenseurs excessifs → orthostatisme',
          'Anticoagulants → balance risque/bénéfice + interactions'
        ]
      },
      {
        type: 'steps',
        title: 'Algo déprescription',
        steps: [
          'Lister toutes les molécules (automédication incluse)',
          'Prioriser : risque élevé + bénéfice faible',
          'Plan de sevrage progressif (surtout BZD)',
          'Informer patient/aidant des symptômes de sevrage',
          'Réévaluer à 2–4 semaines',
          'Documenter dans le dossier et le courrier de sortie'
        ]
      },
      {
        type: 'flip',
        question: 'Premier réflexe devant chute + confusion ?',
        answer: 'Revue médicamenteuse immédiate (BZD, psychotropes, anticholinergiques, hypotenseurs) + CAM + bilan somatique. Ne pas ajouter un psychotrope sans cause.'
      },
      {
        type: 'keys',
        title: 'Perles',
        points: [
          '🎯 « Start low, go slow » mais titrer jusqu\'à l\'objectif',
          '💎 DFG avant toute molécule rénale (metformine, AINS, AGS…)',
          '🎯 Conciliation médicamenteuse = item de qualité hospitalière'
        ]
      }
    ]
  }
];

/* ── UI engine ── */
const NotebookUI = {
  currentId: null,
  slideIdx: 0,
  checks: {},

  list() {
    return (typeof INTERACTIVE_NOTEBOOKS !== 'undefined' && Array.isArray(INTERACTIVE_NOTEBOOKS))
      ? INTERACTIVE_NOTEBOOKS : [];
  },

  loadChecks(nbId) {
    try {
      return JSON.parse(localStorage.getItem('nb_chk_' + nbId) || '{}') || {};
    } catch { return {}; }
  },
  saveChecks(nbId) {
    try { localStorage.setItem('nb_chk_' + nbId, JSON.stringify(this.checks)); } catch {}
  },

  renderHub() {
    const el = document.getElementById('notebookHub');
    if (!el) return;
    const list = this.list();
    if (!list.length) {
      el.innerHTML = '<div class="empty"><div class="empty-text">Notebooks non chargés</div><div class="empty-hint">Ctrl+F5</div></div>';
      return;
    }
    el.innerHTML = `
      <div class="nb-hub-intro">
        <div class="nb-hub-badge">Mode interactif</div>
        <h2 class="nb-hub-title">Notebooks cliniques</h2>
        <p class="nb-hub-sub">Reformulation pédagogique des blueprints NotebookLM — slides, checklists cochables, algorithmes et cartes à retourner. Pas de PDF lourd.</p>
      </div>
      <div class="nb-hub-grid">
        ${list.map(nb => {
          const n = (nb.slides || []).length;
          const ch = (nb.chapter || '').replace('ch', '');
          return `<button type="button" class="nb-hub-card" style="--nb-color:${nb.color || 'var(--accent)'}" onclick="NotebookUI.open('${nb.id}')">
            <span class="nb-hub-ch">Ch. ${ch}</span>
            <span class="nb-hub-card-title">${escNb(nb.title)}</span>
            <span class="nb-hub-card-meta">${n} slides · ${escNb(nb.source || '')}</span>
            <span class="nb-hub-go">Ouvrir →</span>
          </button>`;
        }).join('')}
      </div>`;
  },

  open(id) {
    const nb = this.list().find(x => x.id === id);
    if (!nb) return;
    this.currentId = id;
    this.slideIdx = 0;
    this.checks = this.loadChecks(id);
    const hub = document.getElementById('notebookHub');
    const player = document.getElementById('notebookPlayer');
    if (hub) hub.style.display = 'none';
    if (player) {
      player.style.display = 'block';
      player.style.setProperty('--nb-color', nb.color || '#0891B2');
    }
    this.renderSlide();
  },

  close() {
    this.currentId = null;
    const hub = document.getElementById('notebookHub');
    const player = document.getElementById('notebookPlayer');
    if (hub) hub.style.display = 'block';
    if (player) player.style.display = 'none';
    this.renderHub();
  },

  nb() {
    return this.list().find(x => x.id === this.currentId) || null;
  },

  go(delta) {
    const nb = this.nb();
    if (!nb) return;
    const max = (nb.slides || []).length - 1;
    this.slideIdx = Math.max(0, Math.min(max, this.slideIdx + delta));
    this.renderSlide();
  },

  goTo(i) {
    const nb = this.nb();
    if (!nb) return;
    this.slideIdx = Math.max(0, Math.min((nb.slides || []).length - 1, i));
    this.renderSlide();
  },

  toggleCheck(slideI, itemI) {
    const key = slideI + ':' + itemI;
    this.checks[key] = !this.checks[key];
    this.saveChecks(this.currentId);
    this.renderSlide();
  },

  renderSlide() {
    const player = document.getElementById('notebookPlayer');
    const nb = this.nb();
    if (!player || !nb) return;
    const slides = nb.slides || [];
    const s = slides[this.slideIdx] || {};
    const pct = slides.length ? Math.round(((this.slideIdx + 1) / slides.length) * 100) : 0;
    const dots = slides.map((_, i) =>
      `<button type="button" class="nb-dot${i === this.slideIdx ? ' on' : ''}${i < this.slideIdx ? ' done' : ''}" onclick="NotebookUI.goTo(${i})" aria-label="Slide ${i + 1}"></button>`
    ).join('');

    player.innerHTML = `
      <div class="nb-player-top">
        <button type="button" class="nb-back" onclick="NotebookUI.close()">← Notebooks</button>
        <div class="nb-player-titles">
          <div class="nb-player-kicker">${escNb(nb.title)}</div>
          <div class="nb-player-src">${escNb(nb.source || '')}</div>
        </div>
        <div class="nb-player-count">${this.slideIdx + 1}/${slides.length}</div>
      </div>
      <div class="nb-progress"><div class="nb-progress-fill" style="width:${pct}%"></div></div>
      <div class="nb-dots">${dots}</div>
      <div class="nb-slide nb-slide-${escNb(s.type || 'keys')}">
        ${this.renderSlideBody(s, this.slideIdx)}
      </div>
      <div class="nb-nav">
        <button type="button" class="nb-nav-btn" onclick="NotebookUI.go(-1)" ${this.slideIdx === 0 ? 'disabled' : ''}>← Précédent</button>
        <button type="button" class="nb-nav-btn nb-nav-primary" onclick="NotebookUI.go(1)" ${this.slideIdx >= slides.length - 1 ? 'disabled' : ''}>Suivant →</button>
      </div>`;
  },

  renderSlideBody(s, slideI) {
    const t = s.type || 'keys';
    if (t === 'intro') {
      return `<div class="nb-intro">
        <div class="nb-slide-label">Introduction</div>
        <h3 class="nb-slide-title">${escNb(s.title)}</h3>
        <p class="nb-slide-body">${escNb(s.body)}</p>
      </div>`;
    }
    if (t === 'keys') {
      return `<div>
        <div class="nb-slide-label">Points clés</div>
        <h3 class="nb-slide-title">${escNb(s.title)}</h3>
        <ul class="nb-key-list">${(s.points || []).map(p =>
          `<li><span class="nb-key-bullet"></span><span>${escNb(p)}</span></li>`
        ).join('')}</ul>
      </div>`;
    }
    if (t === 'checklist') {
      const items = s.items || [];
      const done = items.filter((_, i) => this.checks[slideI + ':' + i]).length;
      return `<div>
        <div class="nb-slide-label">Checklist · ${done}/${items.length}</div>
        <h3 class="nb-slide-title">${escNb(s.title)}</h3>
        <ul class="nb-check-list">${items.map((item, i) => {
          const on = !!this.checks[slideI + ':' + i];
          return `<li>
            <button type="button" class="nb-check-item${on ? ' on' : ''}" onclick="NotebookUI.toggleCheck(${slideI},${i})">
              <span class="nb-check-box" aria-hidden="true">${on ? '✓' : ''}</span>
              <span>${escNb(item)}</span>
            </button>
          </li>`;
        }).join('')}</ul>
      </div>`;
    }
    if (t === 'steps') {
      return `<div>
        <div class="nb-slide-label">Algorithme</div>
        <h3 class="nb-slide-title">${escNb(s.title)}</h3>
        <ol class="nb-step-list">${(s.steps || []).map((step, i) =>
          `<li><span class="nb-step-num">${i + 1}</span><span class="nb-step-text">${escNb(step)}</span></li>`
        ).join('')}</ol>
      </div>`;
    }
    if (t === 'flip') {
      return `<div class="nb-flip-wrap">
        <div class="nb-slide-label">Carte EVC</div>
        <button type="button" class="nb-flip-card" onclick="this.classList.toggle('flipped')">
          <div class="nb-flip-face nb-flip-front">
            <div class="nb-flip-hint">Tapez pour retourner</div>
            <div class="nb-flip-q">${escNb(s.question)}</div>
          </div>
          <div class="nb-flip-face nb-flip-back">
            <div class="nb-flip-a">${escNb(s.answer)}</div>
          </div>
        </button>
      </div>`;
    }
    return `<h3 class="nb-slide-title">${escNb(s.title || '')}</h3>`;
  }
};

function escNb(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

if (typeof window !== 'undefined') {
  window.INTERACTIVE_NOTEBOOKS = INTERACTIVE_NOTEBOOKS;
  window.NotebookUI = NotebookUI;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { INTERACTIVE_NOTEBOOKS, NotebookUI };
}
