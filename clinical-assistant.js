/* Assistant clinique gériatrique — consultation guidée, éphémère et déterministe. */
(function () {
  'use strict';

  const ENGINE_VERSION = 'patient-v2.2-core-guidance';
  const STEP_LABELS = ['Patient', 'Gravité', 'Interrogatoire', 'Examen', 'Outils', 'Synthèse'];
  const CORE_FIELDS = [
    { id: 'age', label: 'Âge', type: 'number', min: 18, max: 120, unit: 'ans', placeholder: 'Ex. 84' },
    { id: 'sex', label: 'Sexe clinique si pertinent', type: 'select', options: [['', 'Non renseigné'], ['female', 'Femme'], ['male', 'Homme'], ['other', 'Autre / non applicable']] },
    { id: 'weight', label: 'Poids actuel', type: 'number', min: 20, max: 250, step: 0.1, unit: 'kg', placeholder: 'Ex. 62,5' },
    { id: 'baseline', label: 'Autonomie habituelle', type: 'select', options: [['', 'Non renseignée'], ['independent', 'Autonome'], ['partial', 'Aide partielle'], ['dependent', 'Dépendant'], ['unknown', 'Inconnue']] },
    { id: 'sbp', label: 'PA systolique', type: 'number', min: 40, max: 260, unit: 'mmHg', placeholder: 'Ex. 128' },
    { id: 'dbp', label: 'PA diastolique', type: 'number', min: 20, max: 160, unit: 'mmHg', placeholder: 'Ex. 72' },
    { id: 'hr', label: 'Fréquence cardiaque', type: 'number', min: 20, max: 240, unit: '/min', placeholder: 'Ex. 82' },
    { id: 'rr', label: 'Fréquence respiratoire', type: 'number', min: 4, max: 70, unit: '/min', placeholder: 'Ex. 18' },
    { id: 'spo2', label: 'SpO₂', type: 'number', min: 40, max: 100, unit: '%', placeholder: 'Ex. 96' },
    { id: 'temperature', label: 'Température', type: 'number', min: 30, max: 43, step: 0.1, unit: '°C', placeholder: 'Ex. 37,2' },
    { id: 'glucose', label: 'Glycémie si indiquée', type: 'text', placeholder: 'Valeur + unité' }
  ];

  const ONSET_OPTIONS = [
    ['', 'Non renseignée'],
    ['hours', 'Quelques heures'],
    ['days', 'Quelques jours'],
    ['weeks', 'Quelques semaines'],
    ['months', 'Plusieurs mois'],
    ['unknown', 'Inconnue']
  ];

  const SYMPTOM_SHORT_LABELS = {
    fall: 'Chute',
    syncope: 'Malaise / perte de connaissance',
    gait: 'Marche / équilibre',
    delirium: 'Confusion / vigilance',
    cognition: 'Mémoire / cognition',
    'functional-decline': 'Perte d’autonomie',
    pain: 'Douleur',
    'bone-joint': 'Traumatisme / os / articulation',
    mood: 'Humeur / anxiété',
    nutrition: 'Perte de poids / apports',
    dysphagia: 'Déglutition / fausse route',
    dehydration: 'Déshydratation / ions',
    urinary: 'Urines / rétention / continence',
    constipation: 'Constipation / fécalome',
    infection: 'Fièvre / infection',
    dyspnea: 'Dyspnée / toux / hypoxémie',
    skin: 'Plaie / escarre',
    iatrogeny: 'Médicament / iatrogénie',
    sensory: 'Vision / audition',
    preoperative: 'Préopératoire',
    palliative: 'Fin de vie / palliatif',
    ethics: 'Consentement / éthique'
  };

  const UNIVERSAL_ALERTS = [
    { id: 'universal_airway', label: 'Obstruction des voies aériennes, stridor ou incapacité à gérer les sécrétions', action: 'Évaluer et sécuriser immédiatement les voies aériennes; appeler une aide sénior/urgente.' },
    { id: 'universal_breathing', label: 'Détresse respiratoire, cyanose ou aggravation rapide de la dyspnée', action: 'ABCDE, monitorage, oxygénation avec cible adaptée et recherche urgente de la cause.' },
    { id: 'universal_circulation', label: 'Douleur thoracique, signes de choc, saignement important ou marbrures', action: 'Évaluation circulatoire immédiate, monitorage, voies d’abord et appel sénior selon le contexte.' },
    { id: 'universal_neuro', label: 'Déficit neurologique focal, convulsion ou baisse aiguë de vigilance', action: 'Évaluation neurologique urgente et glycémie capillaire sans retarder la filière adaptée.' },
    { id: 'universal_sepsis', label: 'Altération aiguë avec infection possible, même sans fièvre', action: 'Rechercher rapidement sepsis et foyer infectieux; prélever et traiter selon gravité et protocole local.' },
    { id: 'universal_unsafe', label: 'Danger immédiat pour le patient ou autrui, ou retour impossible en sécurité', action: 'Sécuriser la personne, solliciter un avis sénior et organiser une orientation adaptée.' }
  ];

  const BASELINE_LABELS = {
    independent: 'Autonome',
    partial: 'Aide partielle',
    dependent: 'Dépendant',
    unknown: 'Inconnue'
  };
  const SEX_LABELS = { female: 'Femme', male: 'Homme', other: 'Autre / non applicable' };
  const ONSET_LABELS = Object.fromEntries(ONSET_OPTIONS);

  const state = {
    session: null,
    draftSetting: 'admission',
    pendingScoreId: null
  };

  const e = (value) => String(value == null ? '' : value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

  const normalize = (value) => String(value || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  const pathways = () => (typeof CLINICAL_PATHWAYS !== 'undefined' ? CLINICAL_PATHWAYS : window.CLINICAL_PATHWAYS || []);
  const contexts = () => (typeof CLINICAL_CONTEXTS !== 'undefined' ? CLINICAL_CONTEXTS : window.CLINICAL_CONTEXTS || []);
  const sources = () => (typeof CLINICAL_SOURCES !== 'undefined' ? CLINICAL_SOURCES : window.CLINICAL_SOURCES || {});
  const getPathway = (id) => pathways().find((item) => item.id === id) || null;
  const getContext = (id) => contexts().find((item) => item.id === id) || null;
  const getRoot = () => document.getElementById('clinicalApp');

  function init() {
    const root = getRoot();
    if (!root) return;
    bindGlobalListeners();
    if (state.session) renderCurrentStep();
    else renderStart();
  }

  function open() {
    if (typeof sw === 'function') sw('clinique');
    else init();
  }

  function renderStart() {
    const root = getRoot();
    if (!root) return;
    root.innerHTML = `
      <section class="clinical-landing">
        <div class="clinical-hero">
          <div class="clinical-hero-copy">
            <span class="clinical-eyebrow">Consultation guidée · 100 % hors ligne</span>
            <h1>Recevoir un patient</h1>
            <p>Saisissez ce que présente le patient. L’assistant repère les axes à explorer, adapte les questions et vous guide jusqu’au bilan, aux scores et à la transmission.</p>
          </div>
          <div class="clinical-privacy-card">
            <span aria-hidden="true">🔒</span>
            <div><strong>Aucune identité</strong><small>Aucune donnée clinique n’est conservée après rechargement.</small></div>
          </div>
        </div>

        <div class="clinical-start-panel clinical-patient-start">
          <div class="clinical-start-section">
            <div class="clinical-section-heading"><span>1</span><div><h2>Où recevez-vous le patient ?</h2><p>Le degré d’urgence, le bilan et la surveillance s’adapteront au contexte.</p></div></div>
            <div class="clinical-context-grid">
              ${contexts().map((ctx) => `
                <button type="button" class="clinical-context-card ${state.draftSetting === ctx.id ? 'is-selected' : ''}" onclick="ClinicalAssistant.chooseSetting('${ctx.id}')">
                  <span class="clinical-context-icon">${ctx.icon}</span>
                  <strong>${e(ctx.label)}</strong>
                  <small>${e(ctx.hint)}</small>
                </button>`).join('')}
            </div>
          </div>
          <div class="clinical-start-action">
            <div><strong>Nouvelle consultation temporaire</strong><small>Vous commencerez par le motif d’entrée et les constantes.</small></div>
            <button type="button" class="clinical-primary-btn" onclick="ClinicalAssistant.start()">Commencer la consultation <span>→</span></button>
          </div>
        </div>
        <div class="clinical-safety-note"><strong>Aide structurée, pas diagnostic automatique.</strong> Elle organise le raisonnement et la transmission sans remplacer l’examen, le protocole local ou l’avis sénior.</div>
      </section>`;
  }

  function chooseSetting(id) {
    if (!getContext(id)) return;
    state.draftSetting = id;
    renderStart();
  }

  function start(options) {
    const setting = options && options.setting ? options.setting : state.draftSetting;
    if (!getContext(setting)) return;
    const legacyPathwayId = options && options.pathwayId && getPathway(options.pathwayId) ? options.pathwayId : '';
    state.session = {
      schemaVersion: 2,
      createdAt: new Date().toISOString(),
      setting,
      step: 0,
      core: {},
      manualProblemIds: legacyPathwayId ? [legacyPathwayId] : [],
      activePathwayIds: [],
      answers: {},
      notes: {},
      scores: {}
    };
    state.pendingScoreId = null;
    recalculateOrientation();
    renderCurrentStep();
  }

  function patientText() {
    const core = state.session ? state.session.core : {};
    return [
      core.chiefComplaint,
      core.clinicalHistory,
      core.comorbidities,
      core.medications,
      core.freeNotes
    ].filter(Boolean).join(' ');
  }

  function pathwayMatchScore(path, text) {
    if (!path || ['global', 'other'].includes(path.id) || !text) return 0;
    const haystack = ` ${normalize(text)} `;
    const includesNonNegated = (term, allowSuffix) => {
      const needle = String(term || '').trim();
      if (!needle) return false;
      let offset = 0;
      let index = haystack.indexOf(needle, offset);
      while (index >= 0) {
        const before = index === 0 ? ' ' : haystack[index - 1];
        const after = haystack[index + needle.length] || ' ';
        const bounded = before === ' ' && (allowSuffix || after === ' ');
        if (bounded) {
          const prefix = haystack.slice(Math.max(0, index - 48), index);
          const negated = /(?:\bsans|\bpas de|\babsence de|\baucun|\baucune|\bnie|\bne presente pas de)\s+(?:\w+\s+){0,3}$/.test(prefix);
          if (!negated) return true;
        }
        offset = index + needle.length;
        index = haystack.indexOf(needle, offset);
      }
      return false;
    };
    let score = 0;
    (path.aliases || []).forEach((alias) => {
      const term = normalize(alias);
      if (term && includesNonNegated(term, false)) score += Math.max(4, term.split(' ').length * 2);
      else if (term && term.length >= 6 && includesNonNegated(term, true)) score += 2;
    });
    const titleWords = normalize(path.title).split(' ').filter((word) => word.length >= 6);
    titleWords.forEach((word) => { if (includesNonNegated(word)) score += 1; });
    return score;
  }

  function coreTriggeredPathways() {
    if (!state.session) return [];
    const core = state.session.core || {};
    const triggered = [];
    const add = (id, weight) => {
      if (getPathway(id)) triggered.push({ id, score: weight });
    };
    const spo2 = Number(core.spo2);
    const rr = Number(core.rr);
    const temperature = Number(core.temperature);
    if ((spo2 && spo2 < 94) || (rr && (rr < 10 || rr > 24))) add('dyspnea', 14);
    if (temperature && (temperature < 36 || temperature >= 38)) add('infection', 12);
    const medicationSignal = normalize(core.medications || '');
    if (/(introduit|ajoute|modifie|augmente|diminue|arrete|recent|benzodiazep|psychotrope|anticholinerg|opioide|anticoagulant|apixaban|rivaroxaban|warfarine|avk)/.test(medicationSignal)) {
      add('iatrogeny', 10);
    }
    return triggered;
  }

  function recalculateOrientation() {
    if (!state.session) return [];
    const text = patientText();
    const manual = (state.session.manualProblemIds || []).filter((id) => getPathway(id) && !['global', 'other'].includes(id));
    const candidates = pathways()
      .map((path) => ({ id: path.id, score: pathwayMatchScore(path, text) }))
      .filter((item) => item.score > 0 && !manual.includes(item.id));
    coreTriggeredPathways().forEach((trigger) => {
      const existing = candidates.find((item) => item.id === trigger.id);
      if (existing) existing.score = Math.max(existing.score, trigger.score);
      else if (!manual.includes(trigger.id)) candidates.push(trigger);
    });
    const detected = candidates
      .sort((a, b) => b.score - a.score)
      .slice(0, Math.max(0, 5 - manual.length))
      .map((item) => item.id);
    const clinicalAxes = [...new Set([...manual, ...detected])].slice(0, 5);
    state.session.activePathwayIds = ['global', ...(clinicalAxes.length ? clinicalAxes : ['other'])];
    return state.session.activePathwayIds;
  }

  function renderActivePathBadges() {
    return `
      <span>Orientation actuelle</span>
      ${activePathways().filter((path) => path.id !== 'global').map((path) => `<b>${path.icon} ${e(SYMPTOM_SHORT_LABELS[path.id] || path.title)}</b>`).join('')}`;
  }

  function activePathways() {
    if (!state.session) return [];
    return (state.session.activePathwayIds || []).map(getPathway).filter(Boolean);
  }

  function primaryClinicalPathway() {
    return activePathways().find((path) => !['global', 'other'].includes(path.id)) || getPathway('global') || activePathways()[0] || null;
  }

  function toggleProblem(id) {
    if (!state.session || !getPathway(id) || ['global', 'other'].includes(id)) return;
    const selected = new Set(state.session.manualProblemIds || []);
    if (selected.has(id)) selected.delete(id);
    else selected.add(id);
    state.session.manualProblemIds = [...selected];
    recalculateOrientation();
    renderCurrentStep();
  }

  function choosePathway(id) {
    if (!state.session) {
      start({ setting: state.draftSetting, pathwayId: id });
      return;
    }
    toggleProblem(id);
  }

  function searchPathways(value) {
    if (!state.session) return;
    state.session.core.chiefComplaint = String(value || '');
    recalculateOrientation();
    renderCurrentStep();
  }

  function renderCurrentStep() {
    const session = state.session;
    if (!session) {
      renderStart();
      return;
    }
    const root = getRoot();
    if (!root) return;
    recalculateOrientation();
    const step = Math.max(0, Math.min(STEP_LABELS.length - 1, session.step || 0));
    session.step = step;
    const alerts = activeAlerts();
    const completion = getCompletion();
    const renderers = [renderPatientStep, renderAlertsStep, () => renderQuestionStep('history'), () => renderQuestionStep('exam'), renderScoresStep, renderSummaryStep];
    const primary = primaryClinicalPathway();
    const title = session.core.chiefComplaint || 'Nouvelle consultation gériatrique';

    root.innerHTML = `
      <section class="clinical-workspace">
        <header class="clinical-work-header clinical-patient-header">
          <button type="button" class="clinical-back-link" onclick="ClinicalAssistant.backToCatalogue()">← Abandonner</button>
          <div class="clinical-case-title">
            <span class="clinical-case-icon">${primary ? primary.icon : '🩺'}</span>
            <div><span>${e(getContext(session.setting)?.label || '')}</span><h1 id="clinicalCaseHeading">${e(title)}</h1></div>
          </div>
          <div class="clinical-session-badge"><span>🔒</span> Non enregistré</div>
        </header>

        <div class="clinical-active-paths" id="clinicalActivePaths" aria-label="Axes cliniques actifs">${renderActivePathBadges()}</div>

        <nav class="clinical-stepper" aria-label="Étapes de la consultation">
          ${STEP_LABELS.map((label, index) => `
            <button type="button" class="${index === step ? 'is-current' : ''} ${index < step ? 'is-done' : ''}" onclick="ClinicalAssistant.goToStep(${index})" aria-current="${index === step ? 'step' : 'false'}">
              <span>${index < step ? '✓' : index + 1}</span><small>${label}</small>
            </button>`).join('')}
        </nav>

        ${alerts.length && step !== STEP_LABELS.length - 1 ? renderAlertBanner(alerts) : ''}

        <div class="clinical-layout">
          <main class="clinical-main-panel">${renderers[step]()}</main>
          <aside class="clinical-side-panel">
            <div class="clinical-progress-card">
              <div><span>Données renseignées</span><strong id="clinicalCompletionPercent">${completion.percent}%</strong></div>
              <div class="clinical-progress-track"><i id="clinicalCompletionTrack" style="width:${completion.percent}%"></i></div>
              <small id="clinicalCompletionCount">${completion.answered} éléments sur ${completion.total}</small>
            </div>
            ${renderLiveSnapshot()}
          </aside>
        </div>

        <div class="clinical-action-bar">
          <button type="button" class="clinical-secondary-btn" ${step === 0 ? 'disabled' : ''} onclick="ClinicalAssistant.previousStep()">← Précédent</button>
          <div class="clinical-action-context"><strong>${STEP_LABELS[step]}</strong><small>Étape ${step + 1} sur ${STEP_LABELS.length}</small></div>
          ${step < STEP_LABELS.length - 1
            ? '<button type="button" class="clinical-primary-btn" onclick="ClinicalAssistant.nextStep()">Continuer <span>→</span></button>'
            : '<button type="button" class="clinical-primary-btn" onclick="ClinicalAssistant.copySummary()">Copier la synthèse</button>'}
        </div>
      </section>
      <section id="clinicalPrintArea" class="clinical-print-area" aria-hidden="true">${renderPrintableSummary()}</section>`;
    window.scrollTo(0, 0);
  }

  function renderPatientStep() {
    const session = state.session;
    const activeIds = new Set(session.activePathwayIds || []);
    return `
      <div class="clinical-step-head">
        <span class="clinical-step-kicker">Recueil initial</span>
        <h2>Que présente ce patient aujourd’hui ?</h2>
        <p>Décrivez le motif avec vos mots. L’assistant combine automatiquement les domaines utiles au lieu de vous enfermer dans un cas prédéfini.</p>
      </div>
      <div class="clinical-privacy-inline"><span>⛔</span><div><strong>Ne saisissez ni nom, ni date de naissance, ni numéro de dossier.</strong><small>La consultation reste uniquement dans la mémoire de cette page.</small></div></div>

      <div class="clinical-chief-grid">
        <label class="clinical-chief-field">
          <span>Motif d’entrée ou problème principal <b>indispensable</b></span>
          <textarea rows="4" data-clinical-core="chiefComplaint" placeholder="Ex. Chute ce matin avec douleur de hanche, sans perte de connaissance…">${e(session.core.chiefComplaint || '')}</textarea>
        </label>
        <label class="clinical-field">
          <span>Depuis quand ?</span>
          <select data-clinical-core="onset">${ONSET_OPTIONS.map(([value, label]) => `<option value="${value}" ${session.core.onset === value ? 'selected' : ''}>${e(label)}</option>`).join('')}</select>
        </label>
      </div>

      <section class="clinical-symptom-picker">
        <div><strong>Signes ou problèmes déjà repérés</strong><small>Facultatif : ajoutez-les seulement si le texte ne suffit pas.</small></div>
        <div class="clinical-symptom-chips">
          ${Object.entries(SYMPTOM_SHORT_LABELS).map(([id, label]) => {
            const path = getPathway(id);
            const selected = (session.manualProblemIds || []).includes(id);
            return `<button type="button" class="${selected ? 'is-selected' : ''}" aria-pressed="${selected}" onclick="ClinicalAssistant.toggleProblem('${id}')">${path ? path.icon : '•'} ${e(label)}</button>`;
          }).join('')}
        </div>
      </section>

      <section class="clinical-detected-panel" id="clinicalDetectedAxes">
        <div><span>🧭</span><div><strong>Ce que l’assistant va explorer</strong><small>Cette orientation se met à jour avec les renseignements saisis.</small></div></div>
        <div class="clinical-detected-list">
          ${activePathways().filter((path) => path.id !== 'global').map((path) => `<span>${path.icon}<b>${e(path.title)}</b></span>`).join('')}
        </div>
        ${activeIds.has('other') ? '<p>Aucun domaine précis n’est encore reconnu : le triage gériatrique général reste actif.</p>' : ''}
      </section>

      <div class="clinical-fields-grid clinical-vitals-grid">
        ${CORE_FIELDS.map((field) => renderCoreField(field, session.core[field.id])).join('')}
      </div>
      <div class="clinical-text-fields">
        <label><span>Histoire clinique déjà connue <small>(évolution, circonstances, signes associés)</small></span><textarea rows="4" data-clinical-core="clinicalHistory" placeholder="Éléments utiles déjà recueillis…">${e(session.core.clinicalHistory || '')}</textarea></label>
        <label><span>Antécédents et comorbidités utiles</span><textarea rows="4" data-clinical-core="comorbidities" placeholder="Cardiopathie, diabète, trouble cognitif, insuffisance rénale…">${e(session.core.comorbidities || '')}</textarea></label>
        <label><span>Traitements actuels et modifications récentes</span><textarea rows="4" data-clinical-core="medications" placeholder="Molécules, doses si connues, anticoagulant, psychotrope, arrêt récent…">${e(session.core.medications || '')}</textarea></label>
        <label><span>Autres renseignements utiles <small>(facultatif, non interprété)</small></span><textarea rows="4" data-clinical-core="freeNotes" placeholder="Contexte social, souhaits, information transmise par l’aidant…">${e(session.core.freeNotes || '')}</textarea></label>
      </div>`;
  }

  function renderCoreField(field, value) {
    if (field.type === 'select') {
      return `<label class="clinical-field"><span>${e(field.label)}</span><select data-clinical-core="${field.id}">${field.options.map(([val, label]) => `<option value="${e(val)}" ${String(value || '') === val ? 'selected' : ''}>${e(label)}</option>`).join('')}</select></label>`;
    }
    return `<label class="clinical-field"><span>${e(field.label)}${field.unit ? ` <small>${e(field.unit)}</small>` : ''}</span><input type="${field.type}" value="${e(value || '')}" data-clinical-core="${field.id}" ${field.min != null ? `min="${field.min}"` : ''} ${field.max != null ? `max="${field.max}"` : ''} ${field.step != null ? `step="${field.step}"` : ''} placeholder="${e(field.placeholder || '')}" inputmode="${field.type === 'number' ? 'decimal' : 'text'}"></label>`;
  }

  function mergePathwayItems(group) {
    const seen = new Set();
    const merged = [];
    activePathways().forEach((path) => {
      (path[group] || []).forEach((item) => {
        const key = item.id || normalize(item.label || itemText(item));
        if (!key || seen.has(key)) return;
        seen.add(key);
        merged.push({ ...item, pathwayId: path.id, pathwayTitle: path.title });
      });
    });
    return merged;
  }

  function alertItems() {
    const seen = new Set();
    return [...UNIVERSAL_ALERTS, ...mergePathwayItems('redFlags')].filter((item) => {
      const key = item.id || normalize(item.label);
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  function numericCore(id) {
    const raw = state.session && state.session.core[id];
    if (raw == null || raw === '') return null;
    const value = Number(String(raw).replace(',', '.'));
    return Number.isFinite(value) ? value : null;
  }

  function automaticAlerts() {
    if (!state.session) return [];
    const alerts = [];
    const spo2 = numericCore('spo2');
    const sbp = numericCore('sbp');
    const hr = numericCore('hr');
    const rr = numericCore('rr');
    const temperature = numericCore('temperature');
    if (spo2 != null && spo2 < 90) alerts.push({ id: 'auto_spo2', label: `SpO₂ renseignée à ${spo2} %`, action: 'Vérifier immédiatement la mesure, évaluer la détresse respiratoire, monitorer et oxygéner avec une cible adaptée au terrain.' });
    if (sbp != null && sbp < 90) alerts.push({ id: 'auto_sbp_low', label: `PA systolique renseignée à ${sbp} mmHg`, action: 'Recontrôler la pression artérielle, rechercher hypoperfusion/choc et organiser une prise en charge urgente.' });
    if (sbp != null && sbp >= 220) alerts.push({ id: 'auto_sbp_high', label: `PA systolique renseignée à ${sbp} mmHg`, action: 'Recontrôler la mesure et rechercher immédiatement une atteinte aiguë d’organe cible.' });
    if (hr != null && (hr < 40 || hr > 130)) alerts.push({ id: 'auto_hr', label: `Fréquence cardiaque renseignée à ${hr}/min`, action: 'Vérifier le pouls et l’ECG, évaluer la tolérance hémodynamique et demander un avis urgent.' });
    if (rr != null && (rr < 8 || rr > 30)) alerts.push({ id: 'auto_rr', label: `Fréquence respiratoire renseignée à ${rr}/min`, action: 'Évaluer immédiatement ventilation, oxygénation, conscience et cause respiratoire ou métabolique.' });
    if (temperature != null && temperature < 35) alerts.push({ id: 'auto_hypothermia', label: `Température renseignée à ${String(temperature).replace('.', ',')} °C`, action: 'Confirmer la mesure, réchauffer de façon adaptée et rechercher une cause aiguë, notamment infectieuse ou environnementale.' });
    return alerts;
  }

  function renderAlertsStep() {
    const auto = automaticAlerts();
    return `
      <div class="clinical-step-head">
        <span class="clinical-step-kicker clinical-kicker-danger">Triage immédiat</span>
        <h2>Faut-il agir avant de poursuivre ?</h2>
        <p>Les constantes saisies sont analysées immédiatement. Confirmez ensuite les signes de gravité présents ou absents.</p>
      </div>
      ${auto.length ? `<div class="clinical-auto-alert"><strong>⚡ ${auto.length} alerte${auto.length > 1 ? 's' : ''} issue${auto.length > 1 ? 's' : ''} des données saisies</strong><ul>${auto.map((item) => `<li><b>${e(item.label)}</b><span>${e(item.action)}</span></li>`).join('')}</ul></div>` : '<div class="clinical-no-alert"><span>✓</span><div><strong>Aucun seuil critique automatique détecté</strong><small>Cela n’exclut pas une urgence clinique : complétez les signes ci-dessous.</small></div></div>'}
      <div class="clinical-alert-list">
        ${alertItems().map((item) => renderTriState(item, 'alert')).join('')}
      </div>
      <div class="clinical-guidance-box"><strong>Une alerte n’interrompt pas l’assistant.</strong><p>Vous pouvez continuer pour préparer le bilan et la transmission, sans retarder la stabilisation ni l’appel sénior.</p></div>`;
  }

  function renderQuestionStep(group) {
    const isExam = group === 'exam';
    const items = visibleItems(mergePathwayItems(group));
    return `
      <div class="clinical-step-head">
        <span class="clinical-step-kicker">${isExam ? 'Examen adaptatif' : 'Interrogatoire adaptatif'}</span>
        <h2>${isExam ? 'Examiner ce qui orientera la décision' : 'Compléter ce qui manque pour orienter'}</h2>
        <p>Ces points sont construits à partir du motif et des données du patient. Ajoutez le résultat utile dans la zone de précision.</p>
      </div>
      <div class="clinical-question-list">
        ${items.map((item) => renderTriState(item, group)).join('')}
      </div>
      ${!items.length ? '<div class="clinical-guidance-box"><strong>Aucun item ciblé supplémentaire.</strong><p>Revenez à la première étape pour préciser le motif ou ajouter un signe.</p></div>' : ''}`;
  }

  function renderTriState(item, group) {
    const value = state.session.answers[item.id] || '';
    const note = state.session.notes[item.id] || '';
    const isAlert = group === 'alert';
    return `
      <article class="clinical-tri-row ${isAlert ? 'is-alert-row' : ''} ${value === 'yes' && isAlert ? 'has-alert' : ''}">
        <div class="clinical-tri-copy">
          <span class="clinical-tri-status">${value === 'yes' ? (isAlert ? 'Présent — agir' : 'Oui / retrouvé') : value === 'no' ? (isAlert ? 'Absent' : 'Non / normal') : 'À vérifier'}</span>
          <strong>${e(item.label)}</strong>
          ${item.pathwayTitle && item.pathwayId !== 'global' ? `<small>Orientation : ${e(SYMPTOM_SHORT_LABELS[item.pathwayId] || item.pathwayTitle)}</small>` : ''}
          ${item.help ? `<small>${e(item.help)}</small>` : ''}
          ${isAlert && value === 'yes' ? `<div class="clinical-alert-action"><b>Action :</b> ${e(item.action)}</div>` : ''}
          ${!isAlert ? `<input class="clinical-row-note" type="text" value="${e(note)}" data-clinical-note="${item.id}" placeholder="Résultat ou précision clinique, sans identité">` : ''}
        </div>
        <div class="clinical-tri-buttons" role="group" aria-label="${e(item.label)}">
          <button type="button" class="${value === 'yes' ? 'is-yes' : ''}" onclick="ClinicalAssistant.answer('${item.id}','yes')">Oui</button>
          <button type="button" class="${value === 'no' ? 'is-no' : ''}" onclick="ClinicalAssistant.answer('${item.id}','no')">Non</button>
          <button type="button" class="${!value ? 'is-unknown' : ''}" onclick="ClinicalAssistant.answer('${item.id}','')">?</button>
        </div>
      </article>`;
  }

  function scoreIds() {
    return [...new Set(activePathways().flatMap((path) => path.scores || []))];
  }

  function rankedScoreIds() {
    const ids = scoreIds();
    const urgentOrder = ['news2', 'glasgow', 'four_at', 'qsofa', 'cam', 'eva_en', 'algoplus', 'adl', 'iadl', 'mna_sf', 'tug', 'frax'];
    const ambulatoryOrder = ['egs', 'adl', 'iadl', 'mna_sf', 'tug', 'four_at', 'charlson', 'eva_en', 'frax'];
    const order = state.session && ['admission', 'hospital'].includes(state.session.setting) ? urgentOrder : ambulatoryOrder;
    return [...ids].sort((a, b) => {
      const ai = order.indexOf(a);
      const bi = order.indexOf(b);
      if (ai < 0 && bi < 0) return ids.indexOf(a) - ids.indexOf(b);
      if (ai < 0) return 1;
      if (bi < 0) return -1;
      return ai - bi;
    });
  }

  function renderScoreCard(id, list) {
    const calc = list.find((item) => item.id === id);
    const saved = state.session.scores[id];
    return `<article class="clinical-score-card ${saved ? 'has-result' : ''}">
      <div class="clinical-score-card-head"><span>${saved ? '✓' : '∑'}</span><div><strong>${e(calc ? calc.nom : id)}</strong><small>${e(calc ? calc.domaine : 'Score clinique')}</small></div></div>
      ${saved ? `<div class="clinical-score-result"><strong>${e(saved.score || saved.text || '')}</strong><span>${e(saved.interpretation || '')}</span></div>` : ''}
      <div class="clinical-score-actions">
        <button type="button" onclick="ClinicalAssistant.openScore('${id}')">${saved ? 'Recalculer' : 'Ouvrir le calculateur'}</button>
        <label><span class="sr-only">Saisir le résultat de ${e(calc ? calc.nom : id)}</span><input type="text" value="${e(saved && saved.manual ? saved.score : '')}" placeholder="Résultat manuel" onkeydown="if(event.key==='Enter'){ClinicalAssistant.importManualScore('${id}',this.value)}"><button type="button" onclick="ClinicalAssistant.importManualScore('${id}',this.previousElementSibling.value)">Ajouter</button></label>
      </div>
    </article>`;
  }

  function renderScoresStep() {
    const ids = rankedScoreIds();
    const list = typeof CALCULATEURS !== 'undefined' ? CALCULATEURS : window.CALCULATEURS || [];
    if (!ids.length) {
      return `<div class="clinical-step-head"><span class="clinical-step-kicker">Outils</span><h2>Aucun score prioritaire détecté</h2><p>Le raisonnement repose ici d’abord sur l’histoire, l’examen et la réévaluation clinique.</p></div>`;
    }
    const priority = ids.slice(0, 6);
    const complementary = ids.slice(6);
    return `
      <div class="clinical-step-head">
        <span class="clinical-step-kicker">Scores proposés</span>
        <h2>Mesurer ce qui répond à une question clinique</h2>
        <p>Les outils les plus utiles dans ce contexte sont affichés d’abord. N’utilisez un score que s’il répond à une question clinique.</p>
      </div>
      <div class="clinical-score-grid">
        ${priority.map((id) => renderScoreCard(id, list)).join('')}
      </div>
      ${complementary.length ? `<details class="clinical-score-more"><summary>Voir ${complementary.length} outil${complementary.length > 1 ? 's' : ''} complémentaire${complementary.length > 1 ? 's' : ''}</summary><div class="clinical-score-grid">${complementary.map((id) => renderScoreCard(id, list)).join('')}</div></details>` : ''}`;
  }

  function reasoningModel() {
    const model = {
      hypotheses: { urgent: [], common: [], reversible: [], iatrogenic: [] },
      investigations: { immediate: [], firstLine: [], contextual: [], notRoutine: [] },
      actions: [],
      monitoring: [],
      chapterIds: [],
      protocolIds: [],
      sourceRefs: []
    };
    const addUnique = (target, value) => {
      const text = itemText(value);
      if (text && !target.some((item) => normalize(itemText(item)) === normalize(text))) target.push(value);
    };
    activePathways().forEach((path) => {
      Object.keys(model.hypotheses).forEach((key) => visibleItems(path.hypotheses[key] || []).forEach((item) => addUnique(model.hypotheses[key], item)));
      Object.keys(model.investigations).forEach((key) => visibleItems(path.investigations[key] || []).forEach((item) => addUnique(model.investigations[key], item)));
      visibleItems(path.actions || []).forEach((item) => addUnique(model.actions, item));
      visibleItems(path.monitoring || []).forEach((item) => addUnique(model.monitoring, item));
      model.chapterIds.push(...(path.chapterIds || []));
      model.protocolIds.push(...(path.protocolIds || []));
      model.sourceRefs.push(...(path.sourceRefs || []));
    });
    model.chapterIds = [...new Set(model.chapterIds)];
    model.protocolIds = [...new Set(model.protocolIds)];
    model.sourceRefs = [...new Set(model.sourceRefs)];
    return model;
  }

  function renderSummaryStep() {
    const alerts = activeAlerts();
    const missing = missingCritical();
    const model = reasoningModel();
    return `
      <div class="clinical-step-head">
        <span class="clinical-step-kicker">Orientation et transmission</span>
        <h2>Ce que les données conduisent à vérifier</h2>
        <p>Ce résumé n’affirme aucun diagnostic : il hiérarchise les urgences, hypothèses, examens et actions à confronter au patient.</p>
      </div>
      ${alerts.length ? renderAlertBanner(alerts, true) : '<div class="clinical-no-alert"><span>✓</span><div><strong>Aucune alerte actuellement documentée</strong><small>Les données manquantes ne sont pas considérées comme négatives.</small></div></div>'}
      ${missing.length ? `<div class="clinical-missing"><strong>${missing.length} signe${missing.length > 1 ? 's' : ''} de gravité encore à vérifier</strong><ul>${missing.slice(0, 8).map((item) => `<li>${e(item.label)}</li>`).join('')}</ul></div>` : ''}
      ${renderClinicalReasoning(model)}
      <div class="clinical-export-card">
        <div><span>📄</span><div><strong>Synthèse anonyme prête</strong><small>À relire et adapter avant toute insertion dans un dossier.</small></div></div>
        <div><button type="button" onclick="ClinicalAssistant.copySummary()">Copier</button><button type="button" onclick="ClinicalAssistant.printSummary()">Imprimer / PDF</button><button type="button" class="is-danger" onclick="ClinicalAssistant.reset()">Nouveau patient</button></div>
      </div>`;
  }

  function renderClinicalReasoning(model) {
    const investigationGroups = [
      ['immediate', 'Immédiat', 'danger'],
      ['firstLine', 'Première intention', 'primary'],
      ['contextual', 'Selon le contexte', 'context'],
      ['notRoutine', 'Non systématique', 'muted']
    ];
    const hypothesisGroups = [
      ['urgent', 'À éliminer rapidement'],
      ['common', 'Fréquentes'],
      ['reversible', 'Réversibles'],
      ['iatrogenic', 'Iatrogènes']
    ];
    return `
      <section class="clinical-reasoning-grid">
        <article class="clinical-reason-card">
          <h3>Hypothèses à confronter</h3>
          ${hypothesisGroups.map(([key, title]) => `<div class="clinical-reason-group"><strong>${title}</strong><ul>${model.hypotheses[key].map((item) => `<li>${e(itemText(item))}</li>`).join('')}</ul></div>`).join('')}
        </article>
        <article class="clinical-reason-card">
          <h3>Bilans à discuter</h3>
          ${investigationGroups.map(([key, title, cls]) => model.investigations[key].length ? `<div class="clinical-invest-group is-${cls}"><strong>${title}</strong><ul>${model.investigations[key].map((item) => `<li>${e(itemText(item))}</li>`).join('')}</ul></div>` : '').join('')}
        </article>
        <article class="clinical-reason-card">
          <h3>Conduite à tenir</h3>
          <ol>${model.actions.map((item) => `<li>${e(itemText(item))}</li>`).join('')}</ol>
          <h4>Surveillance / réévaluation</h4>
          <ul>${model.monitoring.map((item) => `<li>${e(itemText(item))}</li>`).join('')}</ul>
        </article>
        <article class="clinical-reason-card">
          <h3>Ressources de l’app</h3>
          <div class="clinical-reference-links">
            ${model.chapterIds.map((id) => {
              const chapter = typeof APP_DATA !== 'undefined' ? APP_DATA.chapters.find((ch) => ch.id === id) : null;
              return `<button type="button" onclick="ClinicalAssistant.openChapter('${id}')"><span>Chapitre ${e(id.replace('ch', ''))}</span><strong>${e(chapter ? chapter.t : id)}</strong></button>`;
            }).join('')}
            ${model.protocolIds.map((id) => {
              const protocol = typeof PROTOCOLES_HAS_OFFICIELS !== 'undefined' ? PROTOCOLES_HAS_OFFICIELS.find((p) => p.id === id) : null;
              return `<button type="button" onclick="ClinicalAssistant.openProtocol('${id}')"><span>Protocole intégré</span><strong>${e(protocol ? protocol.title : id)}</strong></button>`;
            }).join('')}
          </div>
          <div class="clinical-source-list">${model.sourceRefs.map((id) => {
            const source = sources()[id];
            return source ? `<span><b>${e(source.organisation)} · ${e(source.date)}</b>${e(source.title)}<small>Vérifié le ${formatDate(source.checkedAt)}</small></span>` : '';
          }).join('')}</div>
        </article>
      </section>`;
  }

  function renderAlertBanner(alerts, compact) {
    return `<section class="clinical-active-alerts ${compact ? 'is-compact' : ''}" role="alert">
      <div class="clinical-active-alerts-title"><span>!</span><div><strong>${alerts.length} alerte${alerts.length > 1 ? 's' : ''} prioritaire${alerts.length > 1 ? 's' : ''}</strong><small>Agir sans attendre la fin de la consultation guidée.</small></div></div>
      <ul>${alerts.map((item) => `<li><b>${e(item.label)}</b><span>${e(item.action)}</span></li>`).join('')}</ul>
    </section>`;
  }

  function renderLiveSnapshot() {
    const history = mergePathwayItems('history');
    const exam = mergePathwayItems('exam');
    const alerts = activeAlerts();
    return `<div class="clinical-snapshot">
      <div class="clinical-snapshot-head"><span>Vue patient</span><button type="button" onclick="ClinicalAssistant.goToStep(5)">Voir l’orientation</button></div>
      <dl>
        <div><dt>Axes explorés</dt><dd>${activePathways().filter((path) => path.id !== 'global').length}</dd></div>
        <div><dt>Alertes</dt><dd class="${alerts.length ? 'is-danger' : ''}">${alerts.length}</dd></div>
        <div><dt>Interrogatoire</dt><dd>${history.filter((item) => state.session.answers[item.id]).length}/${history.length}</dd></div>
        <div><dt>Examen</dt><dd>${exam.filter((item) => state.session.answers[item.id]).length}/${exam.length}</dd></div>
        <div><dt>Scores ajoutés</dt><dd>${Object.keys(state.session.scores || {}).length}</dd></div>
      </dl>
      <p>${alerts.length ? 'Une conduite urgente est affichée en haut de la page.' : 'Les données manquantes restent distinctes des résultats négatifs.'}</p>
    </div>`;
  }

  function getCompletion() {
    const items = [...alertItems(), ...mergePathwayItems('history'), ...mergePathwayItems('exam')];
    const answered = items.filter((item) => state.session.answers[item.id]).length;
    const coreIds = ['chiefComplaint', 'age', 'baseline', 'medications'];
    const coreAnswered = coreIds.filter((id) => state.session.core[id]).length;
    const total = items.length + coreIds.length;
    return { answered: answered + coreAnswered, total, percent: total ? Math.round(((answered + coreAnswered) / total) * 100) : 0 };
  }

  function activeAlerts() {
    if (!state.session) return [];
    return [...automaticAlerts(), ...alertItems().filter((item) => state.session.answers[item.id] === 'yes')];
  }

  function missingCritical() {
    return state.session ? alertItems().filter((item) => !state.session.answers[item.id]) : [];
  }

  function itemText(item) {
    return typeof item === 'string' ? item : item && item.text ? item.text : '';
  }

  function visibleItems(items) {
    return (items || []).filter((item) => {
      if (typeof item === 'string' || !item.when) return true;
      return evaluateCondition(item.when);
    });
  }

  function evaluateCondition(condition) {
    const answers = state.session ? state.session.answers : {};
    if (!condition) return true;
    if (condition.answer) return answers[condition.answer] === (condition.equals || 'yes');
    if (condition.any) return condition.any.some((id) => answers[id] === 'yes');
    if (condition.all) return condition.all.every((id) => answers[id] === 'yes');
    return true;
  }

  function answer(fieldId, value) {
    if (!state.session) return;
    const patientFieldIds = new Set([
      'chiefComplaint', 'onset', 'age', 'sex', 'weight', 'baseline',
      'sbp', 'dbp', 'hr', 'rr', 'spo2', 'temperature', 'glucose',
      'clinicalHistory', 'comorbidities', 'medications', 'freeNotes'
    ]);
    if (patientFieldIds.has(fieldId)) {
      if (value == null || value === '') delete state.session.core[fieldId];
      else state.session.core[fieldId] = String(value);
      recalculateOrientation();
      renderCurrentStep();
      return;
    }
    if (value) state.session.answers[fieldId] = value;
    else delete state.session.answers[fieldId];
    renderCurrentStep();
  }

  function bindGlobalListeners() {
    if (document.documentElement.dataset.clinicalBound === '2') return;
    document.documentElement.dataset.clinicalBound = '2';
    document.addEventListener('input', (event) => {
      if (!state.session) return;
      const core = event.target.closest ? event.target.closest('[data-clinical-core]') : null;
      if (core) {
        const id = core.getAttribute('data-clinical-core');
        state.session.core[id] = core.value;
        recalculateOrientation();
        updateOrientationPreview();
        return;
      }
      const note = event.target.closest ? event.target.closest('[data-clinical-note]') : null;
      if (note) state.session.notes[note.getAttribute('data-clinical-note')] = note.value;
    });
    document.addEventListener('medicalcul:result', (event) => {
      const detail = event && event.detail;
      if (!state.session || !detail || !detail.id || !scoreIds().includes(detail.id)) return;
      importScore(detail.id, detail);
      renderScoreReturnBar();
    });
  }

  function updateOrientationPreview() {
    if (!state.session || state.session.step !== 0) return;
    const panel = document.getElementById('clinicalDetectedAxes');
    const heading = document.getElementById('clinicalCaseHeading');
    const activeStrip = document.getElementById('clinicalActivePaths');
    const completionPercent = document.getElementById('clinicalCompletionPercent');
    const completionTrack = document.getElementById('clinicalCompletionTrack');
    const completionCount = document.getElementById('clinicalCompletionCount');
    if (heading) heading.textContent = state.session.core.chiefComplaint || 'Nouvelle consultation gériatrique';
    if (activeStrip) activeStrip.innerHTML = renderActivePathBadges();
    const completion = getCompletion();
    if (completionPercent) completionPercent.textContent = `${completion.percent}%`;
    if (completionTrack) completionTrack.style.width = `${completion.percent}%`;
    if (completionCount) completionCount.textContent = `${completion.answered} éléments sur ${completion.total}`;
    if (!panel) return;
    const active = activePathways().filter((path) => path.id !== 'global');
    panel.querySelector('.clinical-detected-list').innerHTML = active.map((path) => `<span>${path.icon}<b>${e(path.title)}</b></span>`).join('');
    const old = panel.querySelector('p');
    if (old) old.remove();
    if (active.some((path) => path.id === 'other')) panel.insertAdjacentHTML('beforeend', '<p>Aucun domaine précis n’est encore reconnu : le triage gériatrique général reste actif.</p>');
  }

  function goToStep(index) {
    if (!state.session) return;
    recalculateOrientation();
    state.session.step = Math.max(0, Math.min(STEP_LABELS.length - 1, Number(index) || 0));
    renderCurrentStep();
  }

  function nextStep() {
    if (!state.session) return;
    goToStep(state.session.step + 1);
  }

  function previousStep() {
    if (!state.session) return;
    goToStep(state.session.step - 1);
  }

  function backToCatalogue() {
    if (!state.session) {
      renderStart();
      return;
    }
    if (!confirm('Abandonner cette consultation ? Toutes les données temporaires seront effacées.')) return;
    state.draftSetting = state.session.setting;
    state.session = null;
    state.pendingScoreId = null;
    renderStart();
  }

  function reset(force) {
    if (!state.session) {
      renderStart();
      return;
    }
    if (!force && !confirm('Effacer cette consultation et recevoir un nouveau patient ?')) return;
    const setting = state.session.setting;
    state.session = null;
    state.pendingScoreId = null;
    state.draftSetting = setting;
    renderStart();
  }

  function openScore(id) {
    if (!state.session || !scoreIds().includes(id)) return;
    state.pendingScoreId = id;
    if (typeof sw === 'function') sw('scores');
    window.setTimeout(() => {
      try {
        if (typeof Medicalcul !== 'undefined' && Medicalcul.showDetail) Medicalcul.showDetail(id);
      } catch (error) {
        console.error('[ClinicalAssistant.openScore]', error);
      }
      renderScoreReturnBar();
    }, 20);
  }

  function renderScoreReturnBar() {
    const view = document.getElementById('vScores');
    if (!view) return;
    let bar = document.getElementById('clinicalScoreReturn');
    if (!bar) {
      bar = document.createElement('div');
      bar.id = 'clinicalScoreReturn';
      bar.className = 'clinical-score-return';
      view.insertBefore(bar, view.firstChild);
    }
    if (!state.session || !state.pendingScoreId) {
      bar.remove();
      return;
    }
    const calc = (typeof CALCULATEURS !== 'undefined' ? CALCULATEURS : []).find((item) => item.id === state.pendingScoreId);
    const saved = state.session.scores[state.pendingScoreId];
    bar.innerHTML = `<div><span>Consultation en cours</span><strong>${e(state.session.core.chiefComplaint || 'Patient en cours')}</strong><small>${saved ? `Résultat ajouté : ${e(saved.score || saved.text || '')}` : `Calculer ${e(calc ? calc.nom : state.pendingScoreId)}, puis revenir`}</small></div><button type="button" onclick="ClinicalAssistant.returnFromScore()">← Retour à la consultation</button>`;
  }

  function returnFromScore() {
    if (typeof sw === 'function') sw('clinique');
    state.pendingScoreId = null;
    window.setTimeout(renderCurrentStep, 0);
  }

  function importScore(id, result) {
    if (!state.session || !id) return;
    const norm = typeof result === 'object' && result ? result : { score: String(result || '') };
    state.session.scores[id] = {
      score: String(norm.score != null ? norm.score : norm.text || ''),
      interpretation: String(norm.interpretation || norm.interp || ''),
      manual: !!norm.manual
    };
  }

  function importManualScore(id, value) {
    const text = String(value || '').trim();
    if (!text || !state.session) return;
    importScore(id, { score: text, interpretation: 'Résultat saisi manuellement — interprétation à vérifier dans le calculateur.', manual: true });
    renderCurrentStep();
  }

  function openChapter(chId) {
    if (typeof showCh === 'function') showCh(chId);
  }

  function openProtocol(protocolId) {
    const protocol = typeof PROTOCOLES_HAS_OFFICIELS !== 'undefined' ? PROTOCOLES_HAS_OFFICIELS.find((item) => item.id === protocolId) : null;
    if (typeof sw === 'function') sw('proto');
    window.setTimeout(() => {
      try {
        if (typeof renderProto === 'function') renderProto();
        const scope = document.getElementById('protoScopeFilter');
        const search = document.getElementById('protoSearch');
        if (scope) scope.value = 'has';
        if (search) search.value = protocol ? protocol.title : protocolId;
        if (typeof window.filterProto === 'function') window.filterProto();
        document.getElementById('protoContent')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } catch (_) {}
    }, 30);
  }

  function collectQuestionLines(group, response) {
    return mergePathwayItems(group)
      .filter((item) => state.session.answers[item.id] === response)
      .map((item) => `${item.label}${state.session.notes[item.id] ? ` — ${state.session.notes[item.id]}` : ''}`);
  }

  function buildSummary() {
    if (!state.session) return '';
    const session = state.session;
    const ctx = getContext(session.setting);
    const model = reasoningModel();
    const alerts = activeAlerts();
    const positives = [...collectQuestionLines('history', 'yes'), ...collectQuestionLines('exam', 'yes')];
    const negatives = [...collectQuestionLines('history', 'no'), ...collectQuestionLines('exam', 'no')];
    const missing = missingCritical().map((item) => item.label);
    const core = session.core;
    const vitals = [
      core.sbp && `PA ${core.sbp}${core.dbp ? '/' + core.dbp : ''} mmHg`,
      core.hr && `FC ${core.hr}/min`,
      core.rr && `FR ${core.rr}/min`,
      core.spo2 && `SpO₂ ${core.spo2}%`,
      core.temperature && `T° ${core.temperature} °C`,
      core.glucose && `Glycémie ${core.glucose}`
    ].filter(Boolean);
    const scoreList = Object.entries(session.scores || {}).map(([id, result]) => {
      const calc = (typeof CALCULATEURS !== 'undefined' ? CALCULATEURS : []).find((item) => item.id === id);
      return `${calc ? calc.nom : id} : ${result.score}${result.interpretation ? ` — ${result.interpretation}` : ''}`;
    });
    const groupLines = (label, values) => values.length ? `\n${label}\n${values.map((value) => `- ${itemText(value)}`).join('\n')}` : '';
    const sourceLines = model.sourceRefs.map((id) => sources()[id]).filter(Boolean).map((source) => `- ${source.organisation}, ${source.title}, ${source.date} (vérifié le ${formatDate(source.checkedAt)})`);
    const chapterLines = model.chapterIds.map((id) => {
      const chapter = typeof APP_DATA !== 'undefined' ? APP_DATA.chapters.find((item) => item.id === id) : null;
      return `- Chapitre ${id.replace('ch', '')}${chapter ? ` — ${chapter.t}` : ''}`;
    });

    return [
      'SYNTHÈSE DE CONSULTATION GÉRIATRIQUE — DOCUMENT ANONYME',
      `Générée le ${new Date().toLocaleString('fr-FR')}`,
      '',
      `Contexte : ${ctx ? ctx.label : session.setting}`,
      `Motif d’entrée : ${core.chiefComplaint || 'non renseigné'}`,
      `Temporalité : ${ONSET_LABELS[core.onset] || 'non renseignée'}`,
      `Axes de raisonnement : ${activePathways().filter((path) => path.id !== 'global').map((path) => path.title).join(' · ')}`,
      `Âge : ${core.age || 'non renseigné'}${core.sex ? ` · ${SEX_LABELS[core.sex] || core.sex}` : ''}`,
      `Autonomie habituelle : ${BASELINE_LABELS[core.baseline] || 'non renseignée'}`,
      core.weight ? `Poids : ${core.weight} kg` : '',
      vitals.length ? `Constantes : ${vitals.join(' · ')}` : 'Constantes : non renseignées',
      core.clinicalHistory ? `Histoire déjà recueillie : ${core.clinicalHistory}` : '',
      core.comorbidities ? `Antécédents/comorbidités : ${core.comorbidities}` : '',
      core.medications ? `Traitements : ${core.medications}` : '',
      core.freeNotes ? `Autres éléments : ${core.freeNotes}` : '',
      '',
      'ALERTES PRIORITAIRES',
      alerts.length ? alerts.map((item) => `- ${item.label} → ${item.action}`).join('\n') : '- Aucune alerte actuellement documentée.',
      missing.length ? `Signes de gravité non vérifiés :\n${missing.map((item) => `- ${item}`).join('\n')}` : '',
      groupLines('ÉLÉMENTS RETROUVÉS / RÉALISÉS', positives),
      groupLines('ÉLÉMENTS ABSENTS / NORMAUX', negatives),
      groupLines('SCORES', scoreList),
      groupLines('HYPOTHÈSES À ÉLIMINER RAPIDEMENT', model.hypotheses.urgent),
      groupLines('HYPOTHÈSES FRÉQUENTES', model.hypotheses.common),
      groupLines('CAUSES RÉVERSIBLES À RECHERCHER', model.hypotheses.reversible),
      groupLines('PISTES IATROGÈNES', model.hypotheses.iatrogenic),
      groupLines('BILANS IMMÉDIATS', model.investigations.immediate),
      groupLines('BILANS DE PREMIÈRE INTENTION', model.investigations.firstLine),
      groupLines('BILANS SELON LE CONTEXTE', model.investigations.contextual),
      groupLines('À NE PAS FAIRE SYSTÉMATIQUEMENT', model.investigations.notRoutine),
      groupLines('CONDUITE À TENIR — PRINCIPES', model.actions),
      groupLines('SURVEILLANCE / RÉÉVALUATION', model.monitoring),
      '',
      'RÉFÉRENCES INTERNES',
      chapterLines.join('\n'),
      sourceLines.join('\n'),
      '',
      'Aide structurée à la décision et à la transmission. À relire, adapter au patient, confronter au protocole local et valider sous la responsabilité du praticien.'
    ].filter((line) => line !== '').join('\n').replace(/\n{3,}/g, '\n\n').trim();
  }

  function renderPrintableSummary() {
    return state.session ? `<h1>Synthèse de consultation gériatrique</h1><pre>${e(buildSummary())}</pre>` : '';
  }

  function copySummary() {
    const text = buildSummary();
    if (!text) return;
    const done = () => typeof toast === 'function' && toast('Synthèse anonyme copiée');
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done).catch(() => fallbackCopy(text, done));
    else fallbackCopy(text, done);
  }

  function fallbackCopy(text, done) {
    const area = document.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.style.position = 'fixed';
    area.style.opacity = '0';
    document.body.appendChild(area);
    area.select();
    try { document.execCommand('copy'); } catch (_) {}
    area.remove();
    done();
  }

  function printSummary() {
    const printArea = document.getElementById('clinicalPrintArea');
    if (printArea) printArea.innerHTML = renderPrintableSummary();
    document.body.classList.add('clinical-printing');
    window.setTimeout(() => {
      window.print();
      window.setTimeout(() => document.body.classList.remove('clinical-printing'), 100);
    }, 20);
  }

  function formatDate(value) {
    if (!value) return '';
    const parts = String(value).split('-');
    return parts.length === 3 ? `${parts[2]}/${parts[1]}/${parts[0]}` : value;
  }

  function inspect() {
    if (!state.session) return { active: false, engineVersion: ENGINE_VERSION };
    return {
      active: true,
      engineVersion: ENGINE_VERSION,
      setting: state.session.setting,
      step: state.session.step,
      chiefComplaint: state.session.core.chiefComplaint || '',
      activePathwayIds: [...state.session.activePathwayIds],
      answerCount: Object.keys(state.session.answers).length,
      scoreCount: Object.keys(state.session.scores).length,
      automaticAlertCount: automaticAlerts().length
    };
  }

  const api = {
    init,
    open,
    start,
    answer,
    openScore,
    importScore,
    buildSummary,
    reset,
    chooseSetting,
    choosePathway,
    searchPathways,
    toggleProblem,
    goToStep,
    nextStep,
    previousStep,
    backToCatalogue,
    returnFromScore,
    importManualScore,
    copySummary,
    printSummary,
    openChapter,
    openProtocol,
    inspect
  };

  window.ClinicalAssistant = api;
})();
