/* Assistant clinique gériatrique — référentiel déterministe, sans donnée patient persistée.
 * Les formulations sont des repères de raisonnement et non des prescriptions automatiques.
 */

const CLINICAL_SOURCES = Object.freeze({
  manual: {
    id: 'manual',
    organisation: 'CNEG',
    title: 'Gériatrie, 5e édition',
    date: '2021',
    checkedAt: '2026-07-23'
  },
  'has-chutes': {
    id: 'has-chutes',
    organisation: 'HAS',
    title: 'Évaluation et prise en charge des personnes âgées faisant des chutes répétées',
    date: '2009',
    checkedAt: '2026-07-23'
  },
  'has-chutes-ap': {
    id: 'has-chutes-ap',
    organisation: 'HAS',
    title: 'Personnes âgées à risque de chute — prescription d’activité physique',
    date: '2024',
    checkedAt: '2026-07-23'
  },
  'has-confusion': {
    id: 'has-confusion',
    organisation: 'HAS',
    title: 'Confusion aiguë chez la personne âgée : prise en charge initiale de l’agitation',
    date: '2009',
    checkedAt: '2026-07-23'
  },
  'has-denutrition': {
    id: 'has-denutrition',
    organisation: 'HAS',
    title: 'Diagnostic de la dénutrition chez la personne de 70 ans et plus',
    date: '2021',
    checkedAt: '2026-07-23'
  },
  'has-prescription': {
    id: 'has-prescription',
    organisation: 'HAS',
    title: 'Sécuriser les prescriptions chez la personne âgée',
    date: '2014',
    checkedAt: '2026-07-23'
  },
  'has-iatrogenie': {
    id: 'has-iatrogenie',
    organisation: 'HAS',
    title: 'Prévenir la dépendance iatrogène liée à l’hospitalisation',
    date: '2017',
    checkedAt: '2026-07-23'
  },
  'has-escarres': {
    id: 'has-escarres',
    organisation: 'HAS',
    title: 'Prévention et traitement des escarres',
    date: '2001–2006',
    checkedAt: '2026-07-23'
  },
  'has-douleur': {
    id: 'has-douleur',
    organisation: 'HAS',
    title: 'Douleur chez la personne présentant des troubles de la communication',
    date: '2000–2006',
    checkedAt: '2026-07-23'
  },
  'has-antibiotherapie': {
    id: 'has-antibiotherapie',
    organisation: 'HAS',
    title: 'Choix et durées d’antibiothérapies dans les infections courantes',
    date: '2021–2025',
    checkedAt: '2026-07-23'
  },
  'has-psychotropes': {
    id: 'has-psychotropes',
    organisation: 'HAS',
    title: 'Limiter les psychotropes chez la personne âgée',
    date: '2007–2009',
    checkedAt: '2026-07-23'
  },
  'has-alzheimer': {
    id: 'has-alzheimer',
    organisation: 'HAS',
    title: 'Maladie d’Alzheimer et autres démences — parcours et actes',
    date: '2012',
    checkedAt: '2026-07-23'
  }
});

const CLINICAL_CONTEXTS = Object.freeze([
  { id: 'admission', icon: '🚑', label: 'Urgences / admission', hint: 'Prioriser gravité, stabilisation et orientation.' },
  { id: 'hospital', icon: '🏥', label: 'Hospitalisation', hint: 'Diagnostic, soins quotidiens et prévention iatrogène.' },
  { id: 'consult', icon: '🩺', label: 'Consultation', hint: 'Évaluation programmée, prévention et coordination.' },
  { id: 'ehpad', icon: '🏡', label: 'EHPAD', hint: 'Décision proportionnée, surveillance et coordination sur place.' }
]);

const clinicalQuestion = (id, label, help = '') => ({ id, label, help });
const clinicalAlert = (id, label, action) => ({ id, label, action });
const clinicalPathway = (config) => Object.freeze({
  contexts: ['admission', 'hospital', 'consult', 'ehpad'],
  sourceRefs: ['manual'],
  chapterIds: [],
  protocolIds: [],
  scores: [],
  redFlags: [],
  history: [],
  exam: [],
  hypotheses: { urgent: [], common: [], reversible: [], iatrogenic: [] },
  investigations: { immediate: [], firstLine: [], contextual: [], notRoutine: [] },
  actions: [],
  monitoring: [],
  ...config
});

const CLINICAL_PATHWAYS = Object.freeze([
  clinicalPathway({
    id: 'global',
    icon: '🩺',
    title: 'Consultation ou admission gériatrique globale',
    summary: 'Évaluation multidimensionnelle, priorisation des syndromes gériatriques et plan de soins.',
    aliases: ['egs', 'bilan gériatrique', 'première consultation', 'admission', 'polypathologie', 'fragilité'],
    chapterIds: ['ch1', 'ch2', 'ch3', 'ch14', 'ch16'],
    protocolIds: ['has-off-dependance-iatrogene', 'has-off-prescription'],
    sourceRefs: ['manual', 'has-iatrogenie', 'has-prescription'],
    redFlags: [
      clinicalAlert('global_instability', 'Instabilité respiratoire, circulatoire ou neurologique actuelle', 'Évaluation ABCDE immédiate, monitorage et avis sénior sans attendre la fin du bilan gériatrique.'),
      clinicalAlert('global_acute_change', 'Rupture aiguë par rapport à l’état habituel', 'Rechercher en priorité une affection aiguë, une iatrogénie ou une décompensation d’organe.'),
      clinicalAlert('global_unsafe', 'Retour ou maintien dans le lieu de vie non sécurisé', 'Sécuriser la situation et organiser une évaluation médico-sociale avant la sortie.')
    ],
    history: [
      clinicalQuestion('global_expectation', 'Motif, attentes et objectif prioritaire du patient ou de l’aidant'),
      clinicalQuestion('global_baseline', 'Autonomie, cognition, mobilité et alimentation habituelles précisées'),
      clinicalQuestion('global_recent_events', 'Chute, confusion, perte de poids ou hospitalisation récente'),
      clinicalQuestion('global_support', 'Lieu de vie, aides, aidant principal et isolement recherchés'),
      clinicalQuestion('global_meds', 'Liste médicamenteuse complète, automédication et observance vérifiées')
    ],
    exam: [
      clinicalQuestion('global_vitals', 'Constantes, poids et évolution pondérale documentés'),
      clinicalQuestion('global_cognition', 'Attention, orientation, cognition et humeur évaluées'),
      clinicalQuestion('global_function', 'Transferts, marche, équilibre, ADL et IADL évalués'),
      clinicalQuestion('global_sensory', 'Vision, audition, bouche, pieds et peau examinés'),
      clinicalQuestion('global_goals', 'Objectifs de soins et préférences du patient recueillis')
    ],
    scores: ['egs', 'adl', 'iadl', 'four_at', 'mna_sf', 'tug', 'charlson'],
    hypotheses: {
      urgent: ['Affection aiguë responsable d’une rupture fonctionnelle', 'Confusion aiguë ou décompensation d’organe'],
      common: ['Fragilité ou perte d’autonomie', 'Polypathologie avec besoins de coordination'],
      reversible: ['Dénutrition, douleur, trouble sensoriel, déconditionnement ou isolement'],
      iatrogenic: ['Effet indésirable, interaction, sous-traitement ou traitement sans bénéfice actuel']
    },
    investigations: {
      immediate: ['Examens uniquement dictés par les signes de gravité et l’examen clinique.'],
      firstLine: ['Conciliation médicamenteuse', 'Poids/IMC, autonomie, cognition, humeur, nutrition et mobilité'],
      contextual: ['Biologie, ECG ou imagerie orientés par les symptômes et les comorbidités.'],
      notRoutine: ['Batterie exhaustive d’examens sans question clinique préalable.']
    },
    actions: ['Hiérarchiser trois à cinq problèmes avec le patient.', 'Prévenir la dépendance iatrogène dès l’admission.', 'Définir responsable, échéance et critère de réévaluation pour chaque action.'],
    monitoring: ['Évolution fonctionnelle et cognitive', 'Poids, apports, douleur, transit et continence', 'Tolérance des modifications thérapeutiques']
  }),

  clinicalPathway({
    id: 'fall',
    icon: '🚶',
    title: 'Chute, chutes répétées ou syndrome post-chute',
    summary: 'Distinguer traumatisme, cause aiguë et facteurs multiples de récidive.',
    aliases: ['chute', 'tombe', 'chutes répétées', 'peur de tomber', 'post chute'],
    chapterIds: ['ch6', 'ch12', 'ch13', 'ch16'],
    protocolIds: ['has-off-chutes', 'has-off-osteoporose'],
    sourceRefs: ['manual', 'has-chutes', 'has-chutes-ap'],
    redFlags: [
      clinicalAlert('fall_head', 'Traumatisme crânien, perte de connaissance ou amnésie', 'Évaluation traumatique et neurologique urgente; discuter l’imagerie selon le contexte et les règles locales.'),
      clinicalAlert('fall_anticoag', 'Anticoagulant ou trouble connu de l’hémostase', 'Majorer la vigilance hémorragique et vérifier rapidement molécule, dernière prise, fonction rénale et protocole local.'),
      clinicalAlert('fall_injury', 'Douleur intense, déformation, impotence ou suspicion de fracture', 'Antalgie, immobilisation adaptée et imagerie ciblée sans mobilisation dangereuse.'),
      clinicalAlert('fall_long_lie', 'Temps prolongé au sol ou impossibilité de se relever', 'Rechercher hypothermie, déshydratation, rhabdomyolyse, escarre et complication traumatique.'),
      clinicalAlert('fall_cardiac_neuro', 'Douleur thoracique, dyspnée, déficit focal ou syncope associée', 'Traiter comme une urgence cardio-neurologique et non comme une chute mécanique simple.')
    ],
    history: [
      clinicalQuestion('fall_context', 'Circonstances, activité, lieu, témoins et mécanisme précisés'),
      clinicalQuestion('fall_prodromes', 'Prodromes, palpitations, vertige, malaise ou perte de connaissance recherchés'),
      clinicalQuestion('fall_count', 'Nombre de chutes sur douze mois et blessures antérieures documentés'),
      clinicalQuestion('fall_rise', 'Capacité à se relever et durée au sol précisées'),
      clinicalQuestion('fall_fear', 'Peur de rechuter et restriction d’activité recherchées'),
      clinicalQuestion('fall_drugs', 'Psychotropes, antihypertenseurs, hypoglycémiants et médicaments récemment modifiés revus')
    ],
    exam: [
      clinicalQuestion('fall_trauma_exam', 'Examen traumatique complet, douleur et appui évalués'),
      clinicalQuestion('fall_ortho', 'Pression artérielle couchée puis debout si réalisable en sécurité'),
      clinicalQuestion('fall_neuro', 'Examen neurologique, marche et équilibre adaptés à la sécurité'),
      clinicalQuestion('fall_feet', 'Vision, audition, pieds, chaussures et aides techniques vérifiés'),
      clinicalQuestion('fall_environment', 'Facteurs environnementaux et aides au domicile recherchés')
    ],
    scores: ['tug', 'tinetti', 'sppb', 'frax', 'four_at'],
    hypotheses: {
      urgent: ['Fracture ou traumatisme crânien', 'Syncope rythmique, ischémique ou neurologique', 'Infection ou trouble métabolique aigu'],
      common: ['Chute multifactorielle', 'Trouble de marche, sarcopénie ou désadaptation psychomotrice'],
      reversible: ['Hypotension orthostatique, trouble sensoriel, chaussage ou environnement', 'Douleur, dénutrition ou carence documentée'],
      iatrogenic: ['Psychotrope, hypotenseur, hypoglycémiant, anticholinergique ou interaction']
    },
    investigations: {
      immediate: [
        { text: 'Imagerie et bilan traumatique ciblés.', when: { any: ['fall_head', 'fall_injury', 'fall_anticoag'] } },
        { text: 'ECG, glycémie et bilan urgent orienté par le malaise.', when: { any: ['fall_prodromes', 'fall_cardiac_neuro'] } }
      ],
      firstLine: ['Recherche clinique complète des facteurs de risque sans s’arrêter au premier facteur.', 'Conciliation médicamenteuse et mesure orthostatique si possible.'],
      contextual: ['NFS, ionogramme, créatinine, glycémie ou CK selon contexte.', 'Évaluation osseuse et prévention fracturaire selon antécédents.'],
      notRoutine: ['Imagerie cérébrale, Doppler ou Holter sans élément clinique orientant.']
    },
    actions: ['Traiter la cause aiguë et les conséquences traumatiques.', 'Construire une intervention multifactorielle : activité/rééducation, médicaments, vision, pieds, aides et environnement.', 'Informer patient et aidant sur le relevé du sol et la prévention de récidive.'],
    monitoring: ['Récidive de chute et peur de tomber', 'Mobilité, transferts et autonomie', 'Tolérance de la verticalisation et des modifications médicamenteuses']
  }),

  clinicalPathway({
    id: 'syncope',
    icon: '💫',
    title: 'Malaise, perte de connaissance ou syncope',
    summary: 'Identifier les causes menaçantes, distinguer syncope, chute et trouble neurologique.',
    aliases: ['malaise', 'syncope', 'lipothymie', 'perte de connaissance', 'pc', 'vertige'],
    chapterIds: ['ch2', 'ch12', 'ch16'],
    protocolIds: [],
    redFlags: [
      clinicalAlert('syncope_exertion', 'Syncope à l’effort ou en décubitus', 'Avis cardiologique urgent et monitorage selon le contexte.'),
      clinicalAlert('syncope_cardiac', 'Douleur thoracique, palpitations persistantes, dyspnée ou cardiopathie connue', 'ECG immédiat, monitorage et recherche d’une cause cardiovasculaire grave.'),
      clinicalAlert('syncope_neuro', 'Déficit focal, céphalée brutale ou confusion persistante', 'Évaluation neurologique urgente.'),
      clinicalAlert('syncope_injury', 'Traumatisme associé ou anticoagulant', 'Évaluation traumatique et hémorragique immédiate.')
    ],
    history: [
      clinicalQuestion('syncope_witness', 'Récit du patient et d’un témoin obtenu si possible'),
      clinicalQuestion('syncope_duration', 'Début, durée, récupération et confusion post-critique précisés'),
      clinicalQuestion('syncope_trigger', 'Position, effort, miction, douleur, émotion ou repas recherchés'),
      clinicalQuestion('syncope_seizure', 'Morsure latérale, mouvements prolongés ou déficit post-critique recherchés'),
      clinicalQuestion('syncope_meds', 'Diurétiques, hypotenseurs, bradycardisants et médicaments allongeant le QT revus')
    ],
    exam: [
      clinicalQuestion('syncope_vitals', 'Constantes, glycémie et saturation mesurées'),
      clinicalQuestion('syncope_ortho', 'Pression couchée/debout si l’état le permet'),
      clinicalQuestion('syncope_cardio', 'Examen cardiaque, pouls, souffle et signes d’insuffisance cardiaque'),
      clinicalQuestion('syncope_neuro_exam', 'Examen neurologique et recherche de traumatisme')
    ],
    scores: ['news2', 'glasgow'],
    hypotheses: {
      urgent: ['Trouble du rythme, syndrome coronarien, embolie pulmonaire ou obstacle cardiaque', 'AVC/hémorragie ou crise comitiale'],
      common: ['Hypotension orthostatique ou réflexe vagal', 'Déshydratation ou malaise médicamenteux'],
      reversible: ['Hypoglycémie, anémie, infection ou trouble hydroélectrolytique'],
      iatrogenic: ['Hypotenseur, diurétique, bradycardisant, psychotrope ou association allongeant le QT']
    },
    investigations: {
      immediate: ['ECG 12 dérivations et glycémie capillaire.', 'Examens ciblés par les signes de gravité.'],
      firstLine: ['Mesure orthostatique, examen cardiovasculaire et neurologique.'],
      contextual: ['Biologie, télémétrie/Holter ou échocardiographie selon suspicion.', 'Imagerie neurologique uniquement si contexte compatible.'],
      notRoutine: ['Doppler des troncs supra-aortiques pour une syncope isolée sans signe neurologique focal.']
    },
    actions: ['Sécuriser chute et traumatisme.', 'Corriger le facteur réversible identifié.', 'Tracer les restrictions temporaires et l’orientation selon le risque.'],
    monitoring: ['Récidive, rythme et pression artérielle', 'État neurologique', 'Tolérance après correction ou modification thérapeutique']
  }),

  clinicalPathway({
    id: 'gait',
    icon: '🦯',
    title: 'Trouble de la marche ou de l’équilibre',
    summary: 'Décrire le phénotype de marche et rechercher les causes neurologiques, locomotrices et sensorielles.',
    aliases: ['marche', 'équilibre', 'instabilité', 'boiterie', 'déambulation', 'mobilité'],
    chapterIds: ['ch5', 'ch7', 'ch12', 'ch13'],
    sourceRefs: ['manual', 'has-chutes', 'has-chutes-ap'],
    protocolIds: ['has-off-chutes'],
    redFlags: [
      clinicalAlert('gait_acute', 'Installation brutale ou déficit focal', 'Évaluation neurologique urgente.'),
      clinicalAlert('gait_no_weight', 'Impossibilité aiguë d’appui ou douleur traumatique', 'Rechercher fracture ou lésion aiguë avant tout test de marche.'),
      clinicalAlert('gait_cord', 'Troubles sphinctériens nouveaux, niveau sensitif ou déficit bilatéral', 'Évaluation médullaire urgente.')
    ],
    history: [
      clinicalQuestion('gait_onset', 'Début, progression, fluctuations et périmètre de marche précisés'),
      clinicalQuestion('gait_falls', 'Chutes, quasi-chutes et peur de tomber recherchées'),
      clinicalQuestion('gait_pain', 'Douleur, raideur, fatigabilité ou claudication précisées'),
      clinicalQuestion('gait_aid', 'Aide technique actuelle et adéquation évaluées'),
      clinicalQuestion('gait_drugs', 'Sédatifs, neuroleptiques et hypotenseurs revus')
    ],
    exam: [
      clinicalQuestion('gait_observe', 'Lever, départ, demi-tour, longueur du pas et balancement observés'),
      clinicalQuestion('gait_neuro', 'Force, tonus, sensibilité, proprioception et signes extrapyramidaux'),
      clinicalQuestion('gait_joint', 'Articulations, rachis, pieds et chaussage examinés'),
      clinicalQuestion('gait_sensory', 'Vision et audition dépistées')
    ],
    scores: ['tug', 'tinetti', 'sppb', 'bbs', 'sarcopenie'],
    hypotheses: {
      urgent: ['AVC, compression médullaire ou fracture'],
      common: ['Déconditionnement, sarcopénie, arthrose ou trouble neurologique chronique'],
      reversible: ['Douleur, déficit sensoriel, chaussage, hypotension ou aide technique inadaptée'],
      iatrogenic: ['Sédatif, neuroleptique, hypotenseur ou polymédication']
    },
    investigations: {
      immediate: ['Imagerie uniquement si traumatisme, douleur aiguë ou signe neurologique.'],
      firstLine: ['Observation standardisée de la marche et examen neuro-locomoteur.'],
      contextual: ['Biologie ou imagerie orientées par le phénotype et l’examen.'],
      notRoutine: ['Exploration extensive sans caractérisation clinique préalable.']
    },
    actions: ['Sécuriser les transferts et choisir l’aide technique.', 'Prescrire rééducation individualisée et activité régulière.', 'Corriger douleur, vision, pieds, environnement et iatrogénie.'],
    monitoring: ['Vitesse et sécurité de marche', 'Chutes/quasi-chutes', 'Autonomie de transfert']
  }),

  clinicalPathway({
    id: 'delirium',
    icon: '🧠',
    title: 'Confusion, agitation ou baisse de vigilance',
    summary: 'Reconnaître aussi les formes hypoactives et rechercher rapidement les causes multiples.',
    aliases: ['confusion', 'delirium', 'agitation', 'somnolence', 'vigilance', 'désorientation', 'hypoactif'],
    chapterIds: ['ch9', 'ch11', 'ch13', 'ch16'],
    protocolIds: ['has-off-confusion', 'has-off-psychotropes-confusion-alzheimer'],
    sourceRefs: ['manual', 'has-confusion', 'has-psychotropes'],
    redFlags: [
      clinicalAlert('delirium_airway', 'Coma, protection des voies aériennes incertaine ou détresse respiratoire', 'ABCDE, glycémie, oxygénation et avis urgent.'),
      clinicalAlert('delirium_focal', 'Déficit focal, céphalée brutale, crise ou traumatisme crânien', 'Évaluation neurologique et imagerie urgente selon contexte.'),
      clinicalAlert('delirium_sepsis', 'Instabilité hémodynamique, hypoxémie ou sepsis possible', 'Bilan et traitement urgents de la cause, sans attendre un score cognitif complet.'),
      clinicalAlert('delirium_danger', 'Danger immédiat pour le patient ou l’entourage', 'Sécurisation humaine et environnementale; médication uniquement si indispensable et surveillée.')
    ],
    history: [
      clinicalQuestion('delirium_baseline', 'État cognitif habituel obtenu auprès d’un proche ou du dossier'),
      clinicalQuestion('delirium_acute', 'Début aigu et évolution fluctuante établis'),
      clinicalQuestion('delirium_hypo', 'Retrait, somnolence ou ralentissement recherchés'),
      clinicalQuestion('delirium_triggers', 'Douleur, rétention, constipation, privation sensorielle et sommeil évalués'),
      clinicalQuestion('delirium_meds', 'Introduction, arrêt ou modification récente de médicaments recherchés'),
      clinicalQuestion('delirium_substances', 'Alcool, benzodiazépines ou autre sevrage envisagé selon contexte')
    ],
    exam: [
      clinicalQuestion('delirium_vitals', 'Constantes complètes, glycémie et saturation mesurées'),
      clinicalQuestion('delirium_attention', 'Attention et niveau de vigilance évalués'),
      clinicalQuestion('delirium_neuro', 'Examen neurologique et recherche de traumatisme'),
      clinicalQuestion('delirium_focus', 'Recherche clinique d’infection, douleur, globe, fécalome et déshydratation'),
      clinicalQuestion('delirium_sensory', 'Lunettes et aides auditives remises si disponibles')
    ],
    scores: ['four_at', 'cam', 'glasgow', 'news2'],
    hypotheses: {
      urgent: ['Hypoxie, hypoglycémie, sepsis, AVC, crise, rétention ou intoxication/sevrage'],
      common: ['Syndrome confusionnel multifactoriel sur vulnérabilité cognitive'],
      reversible: ['Douleur, globe, fécalome, déshydratation, privation sensorielle ou dette de sommeil'],
      iatrogenic: ['Anticholinergique, psychotrope, opioïde, corticoïde ou modification médicamenteuse']
    },
    investigations: {
      immediate: ['Glycémie, saturation, constantes et ECG selon contexte.', 'Examens guidés par l’ABCDE et les signes focaux.'],
      firstLine: ['NFS, ionogramme, fonction rénale et bilan ciblé selon l’examen.', 'Conciliation médicamenteuse et recherche de causes simples au lit.'],
      contextual: ['Imagerie, gaz du sang, prélèvements ou ponction lombaire selon signes d’appel.'],
      notRoutine: ['Sédation systématique ou bilan infectieux non orienté sans évaluation clinique.']
    },
    actions: ['Traiter simultanément la cause et les facteurs précipitants.', 'Mesures non médicamenteuses : repères, présence, hydratation, mobilité, sommeil et aides sensorielles.', 'Éviter contention et psychotropes systématiques; si indispensable, dose minimale et surveillance.'],
    monitoring: ['Vigilance, attention et fluctuations jour/nuit', 'Constantes et cause identifiée', 'Effets indésirables des traitements']
  }),

  clinicalPathway({
    id: 'cognition',
    icon: '🧩',
    title: 'Plainte cognitive ou déclin neurocognitif',
    summary: 'Distinguer plainte, trouble chronique, dépression et confusion aiguë.',
    aliases: ['mémoire', 'cognition', 'démence', 'alzheimer', 'oubli', 'trouble neurocognitif'],
    chapterIds: ['ch3', 'ch9', 'ch10', 'ch11'],
    protocolIds: ['has-off-ald-alzheimer', 'has-off-alzheimer-tcp'],
    sourceRefs: ['manual', 'has-alzheimer'],
    redFlags: [
      clinicalAlert('cog_acute', 'Début aigu ou fluctuations marquées', 'Rechercher une confusion aiguë et sa cause avant de conclure à une maladie neurocognitive.'),
      clinicalAlert('cog_neuro', 'Déficit focal, crise, céphalée inhabituelle ou progression très rapide', 'Évaluation neurologique spécialisée urgente.'),
      clinicalAlert('cog_safety', 'Errance, conduite dangereuse, erreurs médicamenteuses ou vulnérabilité financière', 'Mettre en place immédiatement des mesures de sécurité proportionnées.')
    ],
    history: [
      clinicalQuestion('cog_informant', 'Histoire corroborée par un proche avec accord du patient'),
      clinicalQuestion('cog_course', 'Date de début, progression, fluctuations et domaines atteints'),
      clinicalQuestion('cog_function', 'Retentissement sur IADL puis ADL documenté'),
      clinicalQuestion('cog_mood', 'Humeur, anxiété, sommeil et idées suicidaires recherchés'),
      clinicalQuestion('cog_behavior', 'Hallucinations, apathie, désinhibition ou troubles moteurs recherchés'),
      clinicalQuestion('cog_drugs', 'Charge anticholinergique et psychotropes revus')
    ],
    exam: [
      clinicalQuestion('cog_test', 'Test cognitif adapté au niveau scolaire, sensoriel et linguistique'),
      clinicalQuestion('cog_neuro_exam', 'Examen neurologique, marche et recherche de parkinsonisme'),
      clinicalQuestion('cog_sensory', 'Vision et audition corrigées avant interprétation des tests'),
      clinicalQuestion('cog_capacity', 'Capacité décisionnelle évaluée pour la décision concernée')
    ],
    scores: ['mms', 'moca', 'cdr', 'iadl', 'gds15', 'npi'],
    hypotheses: {
      urgent: ['Confusion aiguë, lésion neurologique ou encéphalopathie rapidement progressive'],
      common: ['Trouble neurocognitif majeur ou léger', 'Plainte cognitive avec trouble de l’humeur'],
      reversible: ['Dépression, trouble sensoriel, trouble du sommeil ou cause métabolique documentée'],
      iatrogenic: ['Anticholinergique, benzodiazépine, opioïde ou psychotrope']
    },
    investigations: {
      immediate: ['Si début aigu : parcours confusion et bilan urgent orienté.'],
      firstLine: ['Évaluation cognitive et fonctionnelle, NFS, ionogramme, fonction rénale, TSH et vitamine B12 selon contexte clinique.'],
      contextual: ['Imagerie cérébrale et avis spécialisé selon présentation et impact attendu.'],
      notRoutine: ['Multiplier les tests sans tenir compte de la fatigue, de la langue ou des déficits sensoriels.']
    },
    actions: ['Expliquer le niveau de certitude et organiser l’annonce.', 'Sécuriser médicaments, finances, conduite et domicile.', 'Soutenir l’aidant et planifier la réévaluation.'],
    monitoring: ['Autonomie et sécurité', 'Évolution cognitive et comportementale', 'Fardeau de l’aidant']
  }),

  clinicalPathway({
    id: 'functional-decline',
    icon: '📉',
    title: 'Perte d’autonomie, fragilité ou déclin fonctionnel',
    summary: 'Rechercher une cause aiguë réversible avant d’attribuer le déclin à l’âge.',
    aliases: ['perte autonomie', 'fragilité', 'déclin', 'grabatisation', 'alitement', 'asthénie', 'aeg'],
    chapterIds: ['ch1', 'ch2', 'ch3', 'ch13', 'ch14'],
    protocolIds: ['has-off-dependance-iatrogene'],
    sourceRefs: ['manual', 'has-iatrogenie'],
    redFlags: [
      clinicalAlert('decline_acute', 'Déclin brutal en heures ou jours', 'Rechercher infection, événement neurologique/cardiaque, douleur, rétention, iatrogénie ou trouble métabolique.'),
      clinicalAlert('decline_intake', 'Absence d’apports, dysphagie ou déshydratation sévère', 'Évaluer rapidement gravité, voie d’hydratation/nutrition et risque de renutrition.'),
      clinicalAlert('decline_unsafe', 'Transferts impossibles ou lieu de vie immédiatement dangereux', 'Sécuriser les soins et mobiliser l’équipe médico-sociale.')
    ],
    history: [
      clinicalQuestion('decline_timeline', 'Chronologie et niveau fonctionnel antérieur documentés'),
      clinicalQuestion('decline_domain', 'ADL/IADL, marche, cognition et alimentation comparés à l’état habituel'),
      clinicalQuestion('decline_symptoms', 'Douleur, dyspnée, fièvre, transit, miction et sommeil recherchés'),
      clinicalQuestion('decline_context', 'Hospitalisation récente, chute, deuil ou changement d’environnement'),
      clinicalQuestion('decline_meds', 'Médicaments récents et effets indésirables recherchés')
    ],
    exam: [
      clinicalQuestion('decline_vitals', 'Constantes, poids, hydratation et examen somatique complet'),
      clinicalQuestion('decline_function', 'Transferts, force, équilibre et marche évalués en sécurité'),
      clinicalQuestion('decline_skin', 'Peau, points d’appui, bouche et pieds examinés'),
      clinicalQuestion('decline_cognition', 'Vigilance, attention et humeur évaluées')
    ],
    scores: ['egs', 'adl', 'iadl', 'barthel', 'sppb', 'sarcopenie', 'mna_sf'],
    hypotheses: {
      urgent: ['Décompensation aiguë, confusion ou affection neurologique'],
      common: ['Fragilité, déconditionnement ou syndrome d’immobilisation'],
      reversible: ['Douleur, dénutrition, déshydratation, dépression ou obstacle environnemental'],
      iatrogenic: ['Alitement, sonde/contention, psychotrope ou traitement non adapté']
    },
    investigations: {
      immediate: ['Bilan orienté par les signes vitaux et la rupture fonctionnelle.'],
      firstLine: ['Évaluation clinique multidimensionnelle et conciliation médicamenteuse.'],
      contextual: ['Biologie, ECG et imagerie selon symptômes et examen.'],
      notRoutine: ['Attribuer le déclin au vieillissement sans rechercher de facteur précipitant.']
    },
    actions: ['Traiter les facteurs précipitants.', 'Mobilisation précoce, nutrition, hydratation, douleur, continence et sommeil.', 'Planifier aides, rééducation et objectifs fonctionnels.'],
    monitoring: ['ADL/IADL et transferts', 'Temps hors du lit et marche', 'Apports, poids et cognition']
  }),

  clinicalPathway({
    id: 'pain',
    icon: '🫶',
    title: 'Douleur aiguë, chronique ou patient non communicant',
    summary: 'Mesurer, caractériser, rechercher la cause et surveiller le retentissement.',
    aliases: ['douleur', 'algie', 'patient douloureux', 'non communicant', 'antalgiques'],
    chapterIds: ['ch7', 'ch8', 'ch13', 'ch16', 'ch17'],
    protocolIds: ['has-off-douleur-communication'],
    sourceRefs: ['manual', 'has-douleur', 'has-prescription'],
    redFlags: [
      clinicalAlert('pain_sudden', 'Douleur brutale, maximale d’emblée ou avec instabilité', 'Rechercher immédiatement une urgence vasculaire, thoracique, abdominale ou neurologique.'),
      clinicalAlert('pain_trauma', 'Traumatisme, déformation ou impotence fonctionnelle', 'Évaluation traumatique et imagerie ciblée.'),
      clinicalAlert('pain_neuro', 'Déficit neurologique, anesthésie en selle ou trouble sphinctérien nouveau', 'Évaluation neurologique/médullaire urgente.')
    ],
    history: [
      clinicalQuestion('pain_self', 'Auto-évaluation recherchée avant l’hétéro-évaluation'),
      clinicalQuestion('pain_pattern', 'Localisation, temporalité, type, irradiation et facteurs modifiants'),
      clinicalQuestion('pain_impact', 'Retentissement sur sommeil, humeur, mobilité et autonomie'),
      clinicalQuestion('pain_treatment', 'Traitements essayés, efficacité, tolérance et observance'),
      clinicalQuestion('pain_bowel', 'Constipation, rétention et effets indésirables des opioïdes recherchés')
    ],
    exam: [
      clinicalQuestion('pain_behavior', 'Comportements douloureux observés au repos et au mouvement'),
      clinicalQuestion('pain_target', 'Examen ciblé de la zone et recherche de cause réversible'),
      clinicalQuestion('pain_neuropathic', 'Allodynie, brûlures, décharges ou déficit sensitif recherchés'),
      clinicalQuestion('pain_function', 'Objectif fonctionnel défini avec le patient')
    ],
    scores: ['eva_en', 'algoplus', 'doloplus', 'ecpa', 'dn4'],
    hypotheses: {
      urgent: ['Cause vasculaire, viscérale, infectieuse, traumatique ou neurologique aiguë'],
      common: ['Douleur musculosquelettique, neuropathique ou mixte'],
      reversible: ['Fécalome, rétention, escarre, mauvais positionnement ou soin douloureux'],
      iatrogenic: ['Sous-traitement, surdosage, interaction ou effet indésirable antalgique']
    },
    investigations: {
      immediate: ['Examens dictés par les signes de gravité.'],
      firstLine: ['Échelle adaptée et examen clinique étiologique.'],
      contextual: ['Biologie ou imagerie si elles modifient la prise en charge.'],
      notRoutine: ['Escalade antalgique sans réévaluation de la cause et de la fonction rénale/hépatique.']
    },
    actions: ['Associer traitement de cause, mesures non médicamenteuses et antalgie adaptée.', 'Commencer bas, réévaluer tôt et prévenir les effets indésirables.', 'Utiliser les protocoles médicaments internes pour toute dose.'],
    monitoring: ['Intensité au repos et au mouvement', 'Fonction et sommeil', 'Vigilance, transit, nausées et fonction rénale']
  }),

  clinicalPathway({
    id: 'bone-joint',
    icon: '🦴',
    title: 'Traumatisme, fracture, ostéoporose ou plainte ostéoarticulaire',
    summary: 'Ne pas méconnaître une fracture et relier l’épisode à la prévention secondaire.',
    aliases: ['fracture', 'ostéoporose', 'arthrose', 'articulation', 'hanche', 'rachis', 'traumatisme'],
    chapterIds: ['ch6', 'ch7', 'ch8', 'ch12'],
    protocolIds: ['has-off-osteoporose', 'has-off-chutes'],
    sourceRefs: ['manual', 'has-chutes'],
    redFlags: [
      clinicalAlert('bone_hip', 'Membre raccourci/roté, douleur de hanche ou impossibilité d’appui', 'Suspicion de fracture proximale du fémur : antalgie, mobilisation prudente et imagerie urgente.'),
      clinicalAlert('bone_spine', 'Douleur rachidienne aiguë avec déficit ou trouble sphinctérien', 'Évaluation neurologique et imagerie urgente.'),
      clinicalAlert('bone_infection', 'Articulation chaude, fièvre ou douleur inflammatoire aiguë', 'Éliminer une arthrite septique ou autre urgence inflammatoire.')
    ],
    history: [
      clinicalQuestion('bone_trauma', 'Mécanisme, énergie du traumatisme et possibilité d’appui'),
      clinicalQuestion('bone_fracture_history', 'Fractures de fragilité et perte de taille antérieures'),
      clinicalQuestion('bone_risk', 'Corticoïdes, ménopause, tabac, alcool, dénutrition et chutes'),
      clinicalQuestion('bone_function', 'Retentissement fonctionnel et douleur nocturne/inflammatoire'),
      clinicalQuestion('bone_treatment', 'Traitements osseux, calcium/vitamine D et observance')
    ],
    exam: [
      clinicalQuestion('bone_local', 'Inspection, palpation, amplitudes et examen neurovasculaire distal'),
      clinicalQuestion('bone_spine_exam', 'Rachis, cyphose et douleur provoquée évalués'),
      clinicalQuestion('bone_gait', 'Marche évaluée seulement si elle est sûre'),
      clinicalQuestion('bone_fall', 'Facteurs de chute recherchés')
    ],
    scores: ['frax', 'lequesne', 'tug'],
    hypotheses: {
      urgent: ['Fracture, arthrite septique ou compression neurologique'],
      common: ['Arthrose, fracture de fragilité ou douleur mécanique'],
      reversible: ['Déconditionnement, chaussage, déficit musculaire ou risque environnemental'],
      iatrogenic: ['Corticoïde, sédatif ou traitement osseux mal toléré/non pris']
    },
    investigations: {
      immediate: ['Radiographie ou imagerie ciblée selon traumatisme et localisation.'],
      firstLine: ['Évaluation douleur, autonomie, chutes et risque fracturaire.'],
      contextual: ['Ostéodensitométrie et bilan étiologique si résultat susceptible de modifier le traitement.'],
      notRoutine: ['Imagerie répétée d’une arthrose stable sans changement clinique.']
    },
    actions: ['Antalgie et orientation orthopédique si fracture.', 'Prévention secondaire : chutes, activité, nutrition et traitement osseux selon indication.', 'Maintenir mobilité et autonomie dans les limites de sécurité.'],
    monitoring: ['Douleur et appui', 'Complications d’immobilisation', 'Adhésion au plan anti-chute et osseux']
  }),

  clinicalPathway({
    id: 'mood',
    icon: '🌤️',
    title: 'Dépression, anxiété ou risque suicidaire',
    summary: 'Rechercher le risque immédiat, les causes somatiques et le retentissement fonctionnel.',
    aliases: ['dépression', 'humeur', 'anxiété', 'suicide', 'tristesse', 'apathie'],
    chapterIds: ['ch9', 'ch10', 'ch16', 'ch17'],
    protocolIds: ['has-off-psychotropes'],
    sourceRefs: ['manual', 'has-psychotropes'],
    redFlags: [
      clinicalAlert('mood_suicide', 'Idées suicidaires actuelles, scénario, moyens ou intention', 'Ne pas laisser seul; évaluation psychiatrique urgente et sécurisation des moyens.'),
      clinicalAlert('mood_refusal', 'Refus d’alimentation/boisson ou ralentissement majeur', 'Évaluer gravité somatique, dépression sévère, confusion et capacité décisionnelle.'),
      clinicalAlert('mood_mania', 'Agitation avec désinhibition, réduction du sommeil ou symptômes psychotiques nouveaux', 'Évaluation urgente d’une cause psychiatrique, neurologique, toxique ou médicamenteuse.')
    ],
    history: [
      clinicalQuestion('mood_core', 'Humeur et perte d’intérêt/plaisir recherchées'),
      clinicalQuestion('mood_duration', 'Durée, événement déclenchant et épisodes antérieurs'),
      clinicalQuestion('mood_sleep', 'Sommeil, appétit, énergie, culpabilité et concentration'),
      clinicalQuestion('mood_somatic', 'Douleur, dyspnée, endocrine, neurologique et substances considérées'),
      clinicalQuestion('mood_support', 'Isolement, deuil, maltraitance et ressources de soutien'),
      clinicalQuestion('mood_meds', 'Corticoïdes, psychotropes et médicaments pouvant modifier l’humeur revus')
    ],
    exam: [
      clinicalQuestion('mood_mental', 'Examen mental, psychomotricité et symptômes psychotiques'),
      clinicalQuestion('mood_cognition', 'Attention et cognition évaluées pour exclure une confusion'),
      clinicalQuestion('mood_function', 'Retentissement ADL/IADL, nutrition et observance'),
      clinicalQuestion('mood_safety_plan', 'Plan de sécurité et personne ressource identifiés')
    ],
    scores: ['gds15', 'gds30', 'phq9', 'mms'],
    hypotheses: {
      urgent: ['Risque suicidaire, dépression mélancolique ou cause organique aiguë'],
      common: ['Épisode dépressif, trouble anxieux ou réaction d’adaptation'],
      reversible: ['Douleur, isolement, deuil compliqué, déficit sensoriel ou trouble du sommeil'],
      iatrogenic: ['Corticoïde, psychotrope, interaction ou sevrage']
    },
    investigations: {
      immediate: ['Évaluation du risque suicidaire et de la sécurité.'],
      firstLine: ['Examen somatique, cognition et revue médicamenteuse.'],
      contextual: ['Biologie orientée par la clinique et l’évolution.'],
      notRoutine: ['Attribuer apathie ou ralentissement à une démence sans rechercher dépression/confusion.']
    },
    actions: ['Sécuriser et organiser l’avis adapté au niveau de risque.', 'Associer soutien, activité, traitement des causes et psychothérapie/traitement selon indication.', 'Surveiller étroitement au début et après toute modification.'],
    monitoring: ['Idées suicidaires et plan de sécurité', 'Sommeil, apports et activité', 'Tolérance, observance et risque de chute']
  }),

  clinicalPathway({
    id: 'nutrition',
    icon: '🥣',
    title: 'Perte de poids, dénutrition ou baisse des apports',
    summary: 'Poser le diagnostic avec critères phénotypiques et étiologiques, puis évaluer la sévérité.',
    aliases: ['dénutrition', 'perte de poids', 'anorexie', 'mange moins', 'amaigrissement', 'nutrition'],
    chapterIds: ['ch1', 'ch13', 'ch14', 'ch17'],
    protocolIds: ['has-off-denutrition-diagnostic', 'has-off-denutrition-prise-en-charge'],
    sourceRefs: ['manual', 'has-denutrition'],
    redFlags: [
      clinicalAlert('nut_no_intake', 'Apports quasi nuls, vomissements persistants ou impossibilité d’avaler', 'Évaluer déshydratation, obstacle, risque de fausse route et indication d’hospitalisation.'),
      clinicalAlert('nut_refeeding', 'Dénutrition profonde ou apports très faibles prolongés', 'Prévenir et surveiller le syndrome de renutrition selon le protocole local.'),
      clinicalAlert('nut_acute', 'Perte de poids rapide avec altération aiguë ou signe de cancer/infection', 'Bilan étiologique rapide orienté par la clinique.')
    ],
    history: [
      clinicalQuestion('nut_weight', 'Poids actuel, poids antérieur daté et pourcentage de perte calculables'),
      clinicalQuestion('nut_intake', 'Quantité et durée de la réduction des apports'),
      clinicalQuestion('nut_causes', 'Douleur, bouche, dysphagie, nausée, transit, humeur et isolement'),
      clinicalQuestion('nut_disease', 'Inflammation, maladie aiguë/chronique ou malabsorption recherchée'),
      clinicalQuestion('nut_help', 'Accès aux repas, aide et préférences alimentaires précisés'),
      clinicalQuestion('nut_drugs', 'Médicaments anorexigènes ou causant nausée/sécheresse revus')
    ],
    exam: [
      clinicalQuestion('nut_measure', 'Poids, taille/IMC et évolution documentés'),
      clinicalQuestion('nut_muscle', 'Masse/force musculaire et mobilité évaluées'),
      clinicalQuestion('nut_mouth', 'Bouche, dents, prothèses et déglutition examinées'),
      clinicalQuestion('nut_edema', 'Œdèmes, déshydratation et signes de carence recherchés')
    ],
    scores: ['mna_sf', 'mna_complet', 'nrs2002', 'sarcopenie'],
    hypotheses: {
      urgent: ['Déshydratation sévère, obstacle digestif, fausse route ou syndrome de renutrition'],
      common: ['Dénutrition liée à maladie et/ou réduction des apports'],
      reversible: ['Douleur buccale, dysphagie, dépression, isolement ou aide insuffisante'],
      iatrogenic: ['Restriction injustifiée, médicament anorexigène ou effet digestif']
    },
    investigations: {
      immediate: ['Ionogramme, fonction rénale, phosphore/magnésium selon gravité et risque de renutrition.'],
      firstLine: ['Diagnostic par au moins un critère phénotypique et un critère étiologique chez la personne de 70 ans ou plus.', 'Un IMC normal ou élevé n’exclut pas une dénutrition.', 'Évaluation de la sévérité après le diagnostic.'],
      contextual: ['Biologie et examens étiologiques guidés par l’histoire et l’examen.'],
      notRoutine: ['Utiliser l’albuminémie seule pour diagnostiquer la dénutrition.']
    },
    actions: ['Traiter les causes et enrichir l’alimentation selon les capacités.', 'Définir objectifs d’apports, aide aux repas et suivi pondéral.', 'Évaluer dysphagie et préférences; proportionner toute nutrition artificielle aux objectifs de soins.'],
    monitoring: ['Poids et apports', 'Hydratation et électrolytes', 'Force, tolérance et objectifs du patient']
  }),

  clinicalPathway({
    id: 'dysphagia',
    icon: '🥄',
    title: 'Dysphagie ou fausses routes',
    summary: 'Sécuriser la déglutition sans prolonger inutilement le jeûne.',
    aliases: ['dysphagie', 'fausse route', 'déglutition', 'tousse en mangeant', 'étouffement'],
    chapterIds: ['ch5', 'ch13', 'ch14', 'ch17'],
    redFlags: [
      clinicalAlert('dys_airway', 'Obstruction aiguë, stridor ou incapacité à gérer les sécrétions', 'Urgence des voies aériennes.'),
      clinicalAlert('dys_neuro', 'Dysphagie brutale avec déficit neurologique', 'Évaluation AVC urgente et maintien à jeun selon protocole.'),
      clinicalAlert('dys_pneumonia', 'Détresse respiratoire ou pneumopathie d’inhalation suspectée', 'Évaluer oxygénation et gravité, puis traiter selon le contexte.')
    ],
    history: [
      clinicalQuestion('dys_phase', 'Difficulté orale, oropharyngée ou œsophagienne caractérisée'),
      clinicalQuestion('dys_texture', 'Liquides, solides, comprimés et texture la plus sûre précisés'),
      clinicalQuestion('dys_cough', 'Toux, voix mouillée, blocage ou régurgitation recherchés'),
      clinicalQuestion('dys_weight', 'Perte de poids, hydratation et pneumopathies antérieures'),
      clinicalQuestion('dys_goals', 'Objectifs de soins et plaisir alimentaire discutés')
    ],
    exam: [
      clinicalQuestion('dys_mouth', 'Bouche, dentition, motricité faciale et sécrétions'),
      clinicalQuestion('dys_neuro_exam', 'Examen neurologique et vigilance'),
      clinicalQuestion('dys_meal', 'Observation sécurisée d’une prise si indiquée et compétente'),
      clinicalQuestion('dys_resp', 'Saturation, respiration et température')
    ],
    scores: ['mna_sf', 'news2'],
    hypotheses: {
      urgent: ['AVC, obstruction ou inhalation sévère'],
      common: ['Dysphagie neurogène, presbyphagie décompensée ou trouble œsophagien'],
      reversible: ['Mauvais positionnement, bouche douloureuse, texture ou comprimé inadapté'],
      iatrogenic: ['Sédatif, neuroleptique, sécheresse médicamenteuse ou forme galénique inadaptée']
    },
    investigations: {
      immediate: ['Évaluation respiratoire et neurologique si signes aigus.'],
      firstLine: ['Évaluation clinique de déglutition par professionnel formé.'],
      contextual: ['Exploration instrumentale ou digestive selon mécanisme suspecté.'],
      notRoutine: ['Épaississement ou jeûne prolongé sans réévaluation de l’hydratation, du bénéfice et des préférences.']
    },
    actions: ['Adapter posture, rythme, texture et environnement après évaluation.', 'Optimiser bouche, aides et formes médicamenteuses.', 'Associer orthophonie, nutrition et discussion des objectifs de soins.'],
    monitoring: ['Toux/voix pendant les repas', 'Apports, hydratation et poids', 'Signes respiratoires']
  }),

  clinicalPathway({
    id: 'dehydration',
    icon: '💧',
    title: 'Déshydratation ou trouble hydroélectrolytique',
    summary: 'Évaluer gravité, mécanisme et vitesse de correction.',
    aliases: ['déshydratation', 'hypernatrémie', 'hyponatrémie', 'ionogramme', 'insuffisance rénale', 'boit peu'],
    chapterIds: ['ch1', 'ch13', 'ch14', 'ch16'],
    redFlags: [
      clinicalAlert('hyd_shock', 'Hypotension, marbrures, oligurie ou altération de vigilance', 'Évaluation hémodynamique urgente et remplissage prudent selon comorbidités.'),
      clinicalAlert('hyd_severe_na', 'Symptômes neurologiques ou anomalie sévère du sodium suspectée/connue', 'Correction monitorée avec vitesse adaptée; avis sénior urgent.'),
      clinicalAlert('hyd_overload', 'Dyspnée, œdèmes ou insuffisance cardiaque concomitante', 'Évaluer congestion avant toute expansion volémique.')
    ],
    history: [
      clinicalQuestion('hyd_intake', 'Apports hydriques récents et accès aux boissons'),
      clinicalQuestion('hyd_losses', 'Fièvre, diarrhée, vomissements, polyurie ou pertes cutanées'),
      clinicalQuestion('hyd_thirst', 'Soif, dysphagie, dépendance ou trouble cognitif'),
      clinicalQuestion('hyd_drugs', 'Diurétiques, laxatifs, IEC/ARA2, AINS et psychotropes revus'),
      clinicalQuestion('hyd_baseline', 'Fonction rénale, sodium et poids habituels disponibles')
    ],
    exam: [
      clinicalQuestion('hyd_vitals', 'Constantes, poids, diurèse et orthostatisme si possible'),
      clinicalQuestion('hyd_volume', 'Signes de déplétion et de congestion recherchés'),
      clinicalQuestion('hyd_neuro', 'Vigilance, confusion et signes neurologiques'),
      clinicalQuestion('hyd_mouth', 'Bouche, accès aux boissons et capacité à boire')
    ],
    scores: ['news2'],
    hypotheses: {
      urgent: ['Choc, dysnatrémie symptomatique ou insuffisance rénale aiguë'],
      common: ['Apports insuffisants avec pertes ou dépendance'],
      reversible: ['Accès aux boissons, dysphagie, fièvre ou diarrhée'],
      iatrogenic: ['Diurétique, laxatif, restriction ou association néphrotoxique']
    },
    investigations: {
      immediate: ['Ionogramme, urée/créatinine, glycémie et ECG selon anomalie suspectée.'],
      firstLine: ['Bilan entrée-sortie, poids et comparaison aux valeurs antérieures.'],
      contextual: ['Osmolalités et ions urinaires selon le trouble documenté.'],
      notRoutine: ['Correction rapide d’une dysnatrémie chronique sans calcul ni surveillance.']
    },
    actions: ['Corriger la cause et choisir la voie d’hydratation adaptée.', 'Adapter vitesse/volume aux comorbidités et au trouble biologique.', 'Réviser médicaments et organisation des boissons.'],
    monitoring: ['Vigilance, pression, diurèse et poids', 'Ionogramme et fonction rénale', 'Signes de surcharge']
  }),

  clinicalPathway({
    id: 'urinary',
    icon: '🚻',
    title: 'Incontinence, symptômes urinaires ou rétention',
    summary: 'Distinguer symptôme chronique, rétention, infection et cause fonctionnelle.',
    aliases: ['incontinence', 'urines', 'dysurie', 'rétention', 'globe', 'pollakiurie', 'brûlures urinaires'],
    chapterIds: ['ch3', 'ch13', 'ch15', 'ch16'],
    protocolIds: ['has-off-atb-cystite', 'has-off-atb-pyelo'],
    sourceRefs: ['manual', 'has-antibiotherapie'],
    redFlags: [
      clinicalAlert('uri_retention', 'Globe douloureux, anurie ou rétention aiguë', 'Confirmer rapidement et drainer selon protocole avec recherche de cause.'),
      clinicalAlert('uri_sepsis', 'Fièvre/instabilité avec douleur lombaire ou obstacle suspecté', 'Évaluer sepsis et infection urinaire compliquée/obstructive en urgence.'),
      clinicalAlert('uri_neuro', 'Rétention avec déficit, anesthésie en selle ou trouble sphinctérien nouveau', 'Évaluation neurologique/médullaire urgente.')
    ],
    history: [
      clinicalQuestion('uri_type', 'Urgence, effort, mixte, regorgement ou incontinence fonctionnelle caractérisée'),
      clinicalQuestion('uri_symptoms', 'Dysurie, brûlures, pollakiurie, hématurie et douleur'),
      clinicalQuestion('uri_timing', 'Début, calendrier mictionnel et retentissement nocturne'),
      clinicalQuestion('uri_bowel', 'Constipation/fécalome et mobilité évalués'),
      clinicalQuestion('uri_drugs', 'Diurétiques, anticholinergiques, opioïdes et médicaments favorisant rétention/incontinence'),
      clinicalQuestion('uri_device', 'Sonde actuelle, indication et date de pose vérifiées')
    ],
    exam: [
      clinicalQuestion('uri_vitals', 'Constantes et signes de sepsis'),
      clinicalQuestion('uri_abdomen', 'Abdomen, globe, fosses lombaires et organes génitaux selon indication'),
      clinicalQuestion('uri_residual', 'Résidu post-mictionnel évalué si rétention/regorgement suspecté'),
      clinicalQuestion('uri_function', 'Accès aux toilettes, transferts, cognition et aides')
    ],
    scores: ['adl', 'iadl', 'news2'],
    hypotheses: {
      urgent: ['Rétention aiguë, pyélonéphrite obstructive ou syndrome médullaire'],
      common: ['Incontinence d’urgence, d’effort, mixte ou fonctionnelle'],
      reversible: ['Fécalome, mobilité, environnement, infection symptomatique ou atrophie'],
      iatrogenic: ['Diurétique, anticholinergique, opioïde ou sonde non indiquée']
    },
    investigations: {
      immediate: ['Bladder scan/échographie et bilan urgent si rétention ou sepsis.'],
      firstLine: ['Calendrier, examen clinique et bandelette/ECBU seulement selon symptômes et contexte.'],
      contextual: ['Bilan urologique si hématurie, récidive, obstacle ou échec.'],
      notRoutine: ['Traiter une bactériurie asymptomatique ou maintenir une sonde sans indication réévaluée.']
    },
    actions: ['Traiter urgence, obstacle ou cause réversible.', 'Mesures comportementales, accès aux toilettes et rééducation selon type.', 'Réviser médicaments et nécessité de la sonde.'],
    monitoring: ['Diurèse et résidu', 'Symptômes, continence et peau', 'Tolérance des mesures et infections']
  }),

  clinicalPathway({
    id: 'constipation',
    icon: '🌀',
    title: 'Constipation ou fécalome',
    summary: 'Rechercher occlusion, médicaments et complications du décubitus.',
    aliases: ['constipation', 'fécalome', 'transit', 'selles', 'diarrhée paradoxale', 'occlusion'],
    chapterIds: ['ch8', 'ch13', 'ch14', 'ch16', 'ch17'],
    redFlags: [
      clinicalAlert('bowel_obstruction', 'Douleur intense, vomissements, distension ou arrêt des gaz', 'Évaluer une occlusion en urgence; ne pas administrer de laxatif avant avis.'),
      clinicalAlert('bowel_bleeding', 'Rectorragie importante, méléna ou instabilité', 'Évaluation hémorragique urgente.'),
      clinicalAlert('bowel_peritonitis', 'Défense, contracture ou sepsis', 'Avis chirurgical/urgent immédiat.')
    ],
    history: [
      clinicalQuestion('bowel_last', 'Dernières selles/gaz, fréquence habituelle et changement récent'),
      clinicalQuestion('bowel_stool', 'Consistance, efforts, douleur, sang et diarrhée paradoxale'),
      clinicalQuestion('bowel_intake', 'Hydratation, fibres, mobilité et accès aux toilettes'),
      clinicalQuestion('bowel_drugs', 'Opioïdes, anticholinergiques, fer, calcium et laxatifs revus'),
      clinicalQuestion('bowel_history', 'Chirurgie, cancer, hernie et troubles neurologiques')
    ],
    exam: [
      clinicalQuestion('bowel_vitals', 'Constantes et hydratation'),
      clinicalQuestion('bowel_abdomen', 'Inspection, auscultation, palpation et recherche de hernie'),
      clinicalQuestion('bowel_rectal', 'Toucher rectal si indication et consentement'),
      clinicalQuestion('bowel_function', 'Mobilité, posture et intimité aux toilettes')
    ],
    scores: [],
    hypotheses: {
      urgent: ['Occlusion, perforation, ischémie ou hémorragie'],
      common: ['Constipation fonctionnelle ou fécalome'],
      reversible: ['Déshydratation, immobilité, faible apport ou environnement'],
      iatrogenic: ['Opioïde, anticholinergique, fer, calcium ou laxatif inadapté']
    },
    investigations: {
      immediate: ['Biologie/imagerie si signe d’occlusion, complication ou début récent inexpliqué.'],
      firstLine: ['Histoire, examen abdominal et rectal selon indication.'],
      contextual: ['Exploration étiologique si signe d’alarme ou constipation récente persistante.'],
      notRoutine: ['Imagerie d’une constipation chronique simple sans signe d’alarme.']
    },
    actions: ['Traiter fécalome et cause selon protocole.', 'Hydratation, mobilité, fibres si adaptées et routine de toilettes.', 'Prévenir systématiquement sous opioïde.'],
    monitoring: ['Transit, douleur et distension', 'Hydratation', 'Tolérance des laxatifs']
  }),

  clinicalPathway({
    id: 'infection',
    icon: '🌡️',
    title: 'Fièvre ou suspicion d’infection',
    summary: 'La personne âgée peut présenter une infection sans fièvre; rechercher le foyer et la gravité.',
    aliases: ['fièvre', 'infection', 'sepsis', 'frissons', 'antibiotique', 'hypothermie'],
    chapterIds: ['ch2', 'ch11', 'ch13', 'ch16'],
    protocolIds: ['has-off-atb-principes', 'has-off-atb-cystite', 'has-off-atb-pyelo', 'has-off-atb-pac-adulte'],
    sourceRefs: ['manual', 'has-antibiotherapie'],
    redFlags: [
      clinicalAlert('inf_shock', 'Hypotension, marbrures, oligurie ou lactate élevé connu', 'Prise en charge urgente d’un sepsis/choc selon protocole local.'),
      clinicalAlert('inf_resp', 'Hypoxémie ou détresse respiratoire', 'Oxygénation, gaz du sang/imagerie selon contexte et avis urgent.'),
      clinicalAlert('inf_neuro', 'Altération aiguë de vigilance, raideur méningée ou déficit focal', 'Évaluation neurologique/infectieuse urgente.'),
      clinicalAlert('inf_neutro', 'Immunodépression sévère ou neutropénie possible', 'Voie rapide infectieuse et prélèvements/traitement selon protocole.')
    ],
    history: [
      clinicalQuestion('inf_baseline', 'Rupture par rapport à l’état habituel, même sans fièvre'),
      clinicalQuestion('inf_focus', 'Signes respiratoires, urinaires, cutanés, digestifs, dentaires et dispositifs'),
      clinicalQuestion('inf_exposure', 'Hospitalisation, antibiotiques, voyage/contage et bactéries résistantes'),
      clinicalQuestion('inf_devices', 'Sonde, cathéter, plaie ou matériel implanté'),
      clinicalQuestion('inf_goals', 'Projet de soins et niveau d’intervention connus')
    ],
    exam: [
      clinicalQuestion('inf_vitals', 'Température, pression, fréquence cardiaque/respiratoire, saturation et diurèse'),
      clinicalQuestion('inf_full_exam', 'Examen clinique complet incluant bouche, peau, dos et dispositifs'),
      clinicalQuestion('inf_cognition', 'Attention/vigilance comparées au niveau habituel'),
      clinicalQuestion('inf_hydration', 'Hydratation et perfusion périphérique')
    ],
    scores: ['news2', 'qsofa', 'sofa'],
    hypotheses: {
      urgent: ['Sepsis/choc, détresse respiratoire ou infection du système nerveux'],
      common: ['Infection respiratoire, urinaire symptomatique, cutanée ou digestive'],
      reversible: ['Dispositif, inhalation, rétention, plaie ou foyer dentaire'],
      iatrogenic: ['Antibiothérapie récente, immunosuppresseur ou dispositif invasif']
    },
    investigations: {
      immediate: ['Prélèvements et bilan de gravité sans retarder le traitement si sepsis.', 'Imagerie guidée par le foyer suspecté.'],
      firstLine: ['Examen clinique répété et revue des dispositifs.', 'Biologie adaptée au contexte et aux objectifs.'],
      contextual: ['Hémocultures, ECBU ou prélèvement ciblé selon symptômes et gravité.'],
      notRoutine: ['Antibiotique pour bactériurie asymptomatique ou prélèvements en série sans question clinique.']
    },
    actions: ['Stabiliser, prélever si pertinent et traiter selon foyer, gravité, fonction rénale et protocole local.', 'Retirer les dispositifs inutiles et contrôler la source.', 'Réévaluer précocement pour adaptation/désescalade.'],
    monitoring: ['Constantes, vigilance et diurèse', 'Réponse clinique et résultats microbiologiques', 'Tolérance et fonction rénale']
  }),

  clinicalPathway({
    id: 'dyspnea',
    icon: '🫁',
    title: 'Dyspnée, hypoxémie, toux ou pneumopathie',
    summary: 'Évaluer immédiatement l’oxygénation et distinguer causes respiratoires, cardiaques et métaboliques.',
    aliases: ['dyspnée', 'essoufflement', 'hypoxémie', 'toux', 'pneumonie', 'bpcO', 'saturation'],
    chapterIds: ['ch2', 'ch11', 'ch13', 'ch16', 'ch17'],
    protocolIds: ['has-off-atb-pac-adulte', 'has-off-atb-eabpco'],
    sourceRefs: ['manual', 'has-antibiotherapie'],
    redFlags: [
      clinicalAlert('resp_distress', 'Signes de lutte, épuisement, silence auscultatoire ou cyanose', 'ABCDE, oxygénation adaptée, gaz du sang et avis urgent.'),
      clinicalAlert('resp_hypox', 'Hypoxémie nouvelle ou rapidement croissante', 'Monitorage et recherche immédiate de la cause.'),
      clinicalAlert('resp_chest', 'Douleur thoracique, hémoptysie, asymétrie ou choc', 'Rechercher embolie pulmonaire, syndrome coronarien, pneumothorax ou autre urgence.'),
      clinicalAlert('resp_aspiration', 'Fausse route ou inhalation récente', 'Sécuriser voie aérienne/déglutition et évaluer pneumopathie d’inhalation.')
    ],
    history: [
      clinicalQuestion('resp_onset', 'Début, progression, orthopnée et facteur déclenchant'),
      clinicalQuestion('resp_infect', 'Toux, expectoration, fièvre/hypothermie et contage'),
      clinicalQuestion('resp_cardiac', 'Douleur, palpitations, œdèmes et prise de poids'),
      clinicalQuestion('resp_risk', 'Immobilisation, cancer, antécédent thromboembolique et anticoagulation'),
      clinicalQuestion('resp_swallow', 'Dysphagie, vomissements ou inhalation recherchés'),
      clinicalQuestion('resp_baseline', 'Saturation, oxygène et capacité fonctionnelle habituels')
    ],
    exam: [
      clinicalQuestion('resp_vitals', 'FR, SpO₂, pression, pouls, température et vigilance'),
      clinicalQuestion('resp_exam', 'Auscultation, symétrie, signes de lutte et encombrement'),
      clinicalQuestion('resp_volume', 'Signes d’insuffisance cardiaque et état volémique'),
      clinicalQuestion('resp_legs', 'Membres inférieurs et signes thromboemboliques')
    ],
    scores: ['news2', 'curb65', 'psi_port', 'qsofa', 'nyha'],
    hypotheses: {
      urgent: ['Détresse respiratoire, embolie pulmonaire, OAP, pneumothorax ou syndrome coronarien'],
      common: ['Pneumopathie, exacerbation BPCO, insuffisance cardiaque ou inhalation'],
      reversible: ['Encombrement, anémie, douleur, atélectasie ou déconditionnement'],
      iatrogenic: ['Sédatif/opioïde, surcharge, aspiration médicamenteuse ou anticoagulation inadéquate']
    },
    investigations: {
      immediate: ['ECG, gaz du sang et imagerie thoracique selon gravité.', 'Biologie orientée et prélèvements si infection sévère.'],
      firstLine: ['Évaluation respiratoire et cardiaque complète.'],
      contextual: ['D-dimères/imagerie vasculaire seulement selon probabilité clinique.', 'Échocardiographie ou explorations ciblées.'],
      notRoutine: ['Antibiothérapie ou diurétiques sans argument clinique et réévaluation.']
    },
    actions: ['Oxygéner avec cible adaptée au terrain et traiter la cause.', 'Prévenir inhalation, immobilité et iatrogénie.', 'Réévaluer rapidement la réponse et le niveau de soins.'],
    monitoring: ['FR, SpO₂, vigilance et travail respiratoire', 'Pression, diurèse et congestion', 'Réponse au traitement']
  }),

  clinicalPathway({
    id: 'skin',
    icon: '🩹',
    title: 'Escarre, plaie ou risque cutané',
    summary: 'Stade, cause, pression, perfusion, douleur et nutrition doivent être évalués ensemble.',
    aliases: ['escarre', 'plaie', 'peau', 'rougeur', 'ulcère', 'pansement'],
    chapterIds: ['ch8', 'ch13', 'ch14', 'ch16', 'ch17'],
    protocolIds: ['has-off-escarres', 'has-off-douleur-communication'],
    sourceRefs: ['manual', 'has-escarres', 'has-douleur'],
    redFlags: [
      clinicalAlert('skin_sepsis', 'Cellulite extensive, crépitation, nécrose rapide ou sepsis', 'Avis chirurgical/infectieux urgent et prise en charge du sepsis.'),
      clinicalAlert('skin_ischemia', 'Ischémie aiguë, pied froid ou douleur de repos', 'Évaluation vasculaire urgente.'),
      clinicalAlert('skin_deep', 'Exposition os/tendon, collection ou suspicion d’ostéite', 'Évaluation spécialisée et bilan ciblé.')
    ],
    history: [
      clinicalQuestion('skin_onset', 'Date, évolution, circonstances et soins antérieurs'),
      clinicalQuestion('skin_pressure', 'Mobilité, temps au lit/fauteuil et supports actuels'),
      clinicalQuestion('skin_continence', 'Humidité, continence et friction/cisaillement'),
      clinicalQuestion('skin_nutrition', 'Apports, poids et risque de dénutrition'),
      clinicalQuestion('skin_pain', 'Douleur au repos et pendant les soins'),
      clinicalQuestion('skin_goals', 'Objectifs curatifs ou de confort clarifiés')
    ],
    exam: [
      clinicalQuestion('skin_stage', 'Localisation, dimensions, profondeur et stade documentés'),
      clinicalQuestion('skin_infection', 'Exsudat, odeur, inflammation et signes systémiques'),
      clinicalQuestion('skin_perfusion', 'Perfusion, œdème et neuropathie évalués'),
      clinicalQuestion('skin_full', 'Inspection de tous les points d’appui')
    ],
    scores: ['braden', 'norton', 'mna_sf', 'algoplus'],
    hypotheses: {
      urgent: ['Infection profonde, fasciite ou ischémie'],
      common: ['Lésion de pression, plaie vasculaire ou liée à l’humidité'],
      reversible: ['Pression, cisaillement, support, nutrition ou continence'],
      iatrogenic: ['Dispositif, pansement traumatique ou immobilisation évitable']
    },
    investigations: {
      immediate: ['Bilan de sepsis/ischémie si signes de gravité.'],
      firstLine: ['Description standardisée, douleur, nutrition et pression.'],
      contextual: ['Imagerie/prélèvement profond si suspicion d’infection profonde et impact thérapeutique.'],
      notRoutine: ['Écouvillonnage superficiel d’une plaie colonisée sans signe clinique d’infection.']
    },
    actions: ['Décharge/repositionnement et support adaptés.', 'Soins locaux selon tissu, exsudat, peau périphérique et objectifs.', 'Traiter douleur, nutrition, continence et mobilité.'],
    monitoring: ['Dimensions et tissu', 'Douleur et infection', 'Observance de la décharge et apports']
  }),

  clinicalPathway({
    id: 'iatrogeny',
    icon: '💊',
    title: 'Polymédication, effet indésirable ou iatrogénie',
    summary: 'Relier tout symptôme nouveau à une introduction, un arrêt, une dose ou une interaction.',
    aliases: ['médicament', 'iatrogénie', 'polymédication', 'effet indésirable', 'interaction', 'ordonnance'],
    chapterIds: ['ch2', 'ch3', 'ch11', 'ch12', 'ch16'],
    protocolIds: ['has-off-prescription', 'has-off-bzd-arret', 'has-off-psychotropes'],
    sourceRefs: ['manual', 'has-prescription', 'has-psychotropes'],
    redFlags: [
      clinicalAlert('drug_anaphylaxis', 'Détresse respiratoire, œdème ou choc après médicament', 'Prise en charge immédiate d’une anaphylaxie selon protocole.'),
      clinicalAlert('drug_bleed', 'Hémorragie, chute avec traumatisme ou surdosage anticoagulant possible', 'Évaluer gravité, molécule, dernière prise, fonction rénale et antidote/protocole.'),
      clinicalAlert('drug_toxic', 'Trouble du rythme, coma, convulsions ou syndrome toxique', 'Centre antipoison/avis urgent et traitement symptomatique monitoré.')
    ],
    history: [
      clinicalQuestion('drug_list', 'Liste complète réconciliée avec ordonnances, pharmacie, automédication et plantes'),
      clinicalQuestion('drug_timeline', 'Chronologie symptôme–introduction–arrêt–augmentation de dose'),
      clinicalQuestion('drug_indication', 'Indication et objectif actuels de chaque traitement'),
      clinicalQuestion('drug_adherence', 'Observance, capacité à gérer et erreurs de prise'),
      clinicalQuestion('drug_renal', 'Poids et fonctions rénale/hépatique récents disponibles'),
      clinicalQuestion('drug_cascade', 'Cascade médicamenteuse recherchée')
    ],
    exam: [
      clinicalQuestion('drug_syndrome', 'Syndrome clinique recherché : chute, confusion, hypotension, saignement, rétention, constipation'),
      clinicalQuestion('drug_vitals', 'Constantes, ECG ou glycémie selon médicaments'),
      clinicalQuestion('drug_function', 'Cognition, mobilité et autonomie comparées à l’état antérieur')
    ],
    scores: ['acb', 'hasbled', 'charlson'],
    hypotheses: {
      urgent: ['Toxicité, hémorragie, anaphylaxie ou trouble du rythme'],
      common: ['Effet indésirable dose-dépendant ou interaction'],
      reversible: ['Mauvaise observance, doublon, forme galénique ou horaire inadapté'],
      iatrogenic: ['Médicament sans indication, omission d’un traitement utile ou cascade de prescription']
    },
    investigations: {
      immediate: ['ECG, glycémie, coagulation ou dosage ciblé selon syndrome et molécule.'],
      firstLine: ['Conciliation et revue indication–bénéfice–risque–dose–durée pour chaque ligne.'],
      contextual: ['Biologie ciblée selon organe, interaction et élimination.'],
      notRoutine: ['Arrêt brutal d’une benzodiazépine, d’un corticoïde ou autre traitement à risque de sevrage.']
    },
    actions: ['Suspendre/adapter seulement après évaluation du risque de sevrage et de la gravité.', 'Prioriser une modification à la fois lorsque la situation le permet.', 'Utiliser le protocole médicament interne et vérifier le protocole local pour les doses.'],
    monitoring: ['Disparition du symptôme et syndrome de sevrage', 'Fonction rénale, pression, vigilance et chutes', 'Compréhension du nouveau plan']
  }),

  clinicalPathway({
    id: 'sensory',
    icon: '👁️',
    title: 'Trouble visuel ou auditif',
    summary: 'Distinguer urgence sensorielle et déficit chronique contribuant aux chutes, à l’isolement et à la confusion.',
    aliases: ['vision', 'audition', 'surdité', 'voit mal', 'entend mal', 'sensoriel'],
    chapterIds: ['ch5', 'ch9', 'ch11', 'ch12'],
    redFlags: [
      clinicalAlert('sense_eye', 'Baisse visuelle brutale, œil rouge douloureux ou déficit du champ', 'Avis ophtalmologique/neurologique urgent.'),
      clinicalAlert('sense_hearing', 'Surdité brutale ou vertige aigu avec signe neurologique', 'Avis ORL/neurologique urgent.'),
      clinicalAlert('sense_safety', 'Déficit sensoriel compromettant immédiatement la sécurité', 'Adapter environnement, communication et aide humaine.')
    ],
    history: [
      clinicalQuestion('sense_onset', 'Début brutal/progressif, unilatéral/bilatéral et fluctuation'),
      clinicalQuestion('sense_devices', 'Lunettes, appareils auditifs, entretien et utilisation'),
      clinicalQuestion('sense_impact', 'Retentissement communication, lecture, marche, cognition et humeur'),
      clinicalQuestion('sense_drugs', 'Médicaments ototoxiques ou anticholinergiques revus')
    ],
    exam: [
      clinicalQuestion('sense_screen', 'Dépistage fonctionnel avec correction habituelle'),
      clinicalQuestion('sense_eye_exam', 'Inspection oculaire et signes neurologiques selon plainte'),
      clinicalQuestion('sense_ear_exam', 'Conduit auditif et bouchon de cérumen recherchés'),
      clinicalQuestion('sense_environment', 'Éclairage, bruit et stratégies de communication')
    ],
    scores: ['mms', 'tug'],
    hypotheses: {
      urgent: ['AVC, occlusion vasculaire rétinienne, glaucome aigu ou surdité brusque'],
      common: ['Cataracte, presbyacousie, DMLA ou bouchon'],
      reversible: ['Correction/appareil inadapté, cérumen ou environnement'],
      iatrogenic: ['Médicament ototoxique, sécheresse ou déficit non compensé à l’hôpital']
    },
    investigations: {
      immediate: ['Avis urgent si installation brutale ou signe douloureux/neurologique.'],
      firstLine: ['Dépistage fonctionnel et examen simple des yeux/oreilles.'],
      contextual: ['Bilan spécialisé selon déficit confirmé et objectifs.'],
      notRoutine: ['Interpréter un test cognitif sans corriger au mieux vision et audition.']
    },
    actions: ['Corriger obstacle simple et remettre les aides disponibles.', 'Adapter communication et environnement.', 'Organiser bilan spécialisé et prévention des chutes.'],
    monitoring: ['Usage réel des aides', 'Communication et participation', 'Chutes, confusion et isolement']
  }),

  clinicalPathway({
    id: 'preoperative',
    icon: '🛡️',
    title: 'Préparation préopératoire du patient âgé',
    summary: 'Évaluer fragilité, cognition, autonomie et risques modifiables en complément de l’anesthésie.',
    aliases: ['préopératoire', 'chirurgie', 'opération', 'anesthésie', 'pré-op'],
    chapterIds: ['ch2', 'ch3', 'ch4', 'ch13', 'ch14', 'ch16'],
    protocolIds: ['has-off-dependance-iatrogene', 'has-off-prescription'],
    sourceRefs: ['manual', 'has-iatrogenie', 'has-prescription'],
    redFlags: [
      clinicalAlert('preop_unstable', 'Affection aiguë non stabilisée ou décompensation d’organe', 'Réévaluer urgence/bénéfice et optimisation avec chirurgien-anesthésiste.'),
      clinicalAlert('preop_capacity', 'Consentement incertain ou capacité décisionnelle altérée', 'Adapter l’information et appliquer le cadre de représentation sans retarder une urgence vitale.'),
      clinicalAlert('preop_antithrombotic', 'Anticoagulant/antiagrégant sans plan périopératoire clair', 'Clarifier molécule, indication, dernière prise, fonction rénale et plan spécialisé.')
    ],
    history: [
      clinicalQuestion('preop_goal', 'Urgence, bénéfice fonctionnel attendu et alternative précisés'),
      clinicalQuestion('preop_baseline', 'Autonomie, cognition, mobilité et lieu de vie habituels'),
      clinicalQuestion('preop_delirium', 'Antécédent de confusion et facteurs de risque'),
      clinicalQuestion('preop_cardioresp', 'Capacité d’effort et symptômes cardiorespiratoires'),
      clinicalQuestion('preop_meds', 'Conciliation et plan pour anticoagulants, diabète et psychotropes'),
      clinicalQuestion('preop_preferences', 'Compréhension, préférences et personne de confiance')
    ],
    exam: [
      clinicalQuestion('preop_vitals', 'Constantes et examen cardiorespiratoire'),
      clinicalQuestion('preop_function', 'Fragilité, transferts et marche'),
      clinicalQuestion('preop_cognition', 'Attention/cognition de référence'),
      clinicalQuestion('preop_nutrition', 'Poids, perte pondérale et nutrition'),
      clinicalQuestion('preop_skin', 'Peau, bouche et dispositifs/aides')
    ],
    scores: ['egs', 'charlson', 'four_at', 'mna_sf', 'adl'],
    hypotheses: {
      urgent: ['Décompensation aiguë rendant le risque disproportionné'],
      common: ['Fragilité et risque de confusion/déclin fonctionnel postopératoire'],
      reversible: ['Dénutrition, anémie, douleur, déshydratation ou aide sensorielle absente'],
      iatrogenic: ['Plan médicamenteux incomplet, benzodiazépine ou médicament non adapté à la fonction rénale']
    },
    investigations: {
      immediate: ['Examens dictés par l’urgence chirurgicale et l’instabilité.'],
      firstLine: ['Bilan anesthésique plus repères de fragilité, cognition, nutrition et autonomie.'],
      contextual: ['Examens cardiaques/respiratoires uniquement si indication susceptible de modifier la stratégie.'],
      notRoutine: ['Retarder une chirurgie urgente pour une exploration sans impact décisionnel.']
    },
    actions: ['Partager une synthèse gériatrique avec anesthésiste/chirurgien.', 'Plan de prévention confusion, douleur, dénutrition, immobilité et rétention.', 'Anticiper rééducation, aides sensorielles et sortie.'],
    monitoring: ['Vigilance et douleur', 'Mobilité, nutrition et complications', 'Retour au niveau fonctionnel antérieur']
  }),

  clinicalPathway({
    id: 'palliative',
    icon: '🕊️',
    title: 'Soins palliatifs ou symptômes de fin de vie',
    summary: 'Clarifier objectifs, soulager les symptômes et éviter l’obstination déraisonnable.',
    aliases: ['palliatif', 'fin de vie', 'agonie', 'confort', 'directives anticipées', 'sédation'],
    chapterIds: ['ch4', 'ch8', 'ch14', 'ch16', 'ch17'],
    protocolIds: ['has-off-douleur-communication'],
    sourceRefs: ['manual', 'has-douleur'],
    redFlags: [
      clinicalAlert('pal_distress', 'Symptôme réfractaire ou détresse aiguë non contrôlée', 'Soulagement immédiat, appel de l’équipe référente et protocole local.'),
      clinicalAlert('pal_conflict', 'Désaccord majeur sur les objectifs ou volonté du patient inconnue', 'Décision collégiale, recherche des volontés et traçabilité.'),
      clinicalAlert('pal_reversible', 'Cause facilement réversible dont le traitement est cohérent avec les objectifs', 'Proposer un traitement proportionné sans opposer soins palliatifs et soins actifs.')
    ],
    history: [
      clinicalQuestion('pal_understanding', 'Compréhension de la situation par le patient et l’entourage'),
      clinicalQuestion('pal_wishes', 'Directives, personne de confiance et souhaits actuels'),
      clinicalQuestion('pal_symptoms', 'Douleur, dyspnée, anxiété, agitation, nausée et sécrétions'),
      clinicalQuestion('pal_place', 'Lieu de soins souhaité et ressources disponibles'),
      clinicalQuestion('pal_spiritual', 'Besoins psychologiques, sociaux et spirituels')
    ],
    exam: [
      clinicalQuestion('pal_comfort', 'Évaluation répétée du confort avec échelle adaptée'),
      clinicalQuestion('pal_reversible_exam', 'Causes réversibles simples recherchées selon objectifs'),
      clinicalQuestion('pal_route', 'Voie d’administration et capacité à avaler'),
      clinicalQuestion('pal_family', 'Compréhension de l’entourage et plan d’appel')
    ],
    scores: ['eva_en', 'algoplus', 'doloplus', 'ecpa'],
    hypotheses: {
      urgent: ['Détresse symptomatique nécessitant soulagement immédiat'],
      common: ['Douleur, dyspnée, anxiété, confusion ou encombrement de fin de vie'],
      reversible: ['Globe, fécalome, mauvais positionnement, bouche sèche ou médicament'],
      iatrogenic: ['Traitement sans bénéfice actuel ou effet indésirable majorant l’inconfort']
    },
    investigations: {
      immediate: ['Uniquement les examens susceptibles de modifier rapidement le confort ou une décision cohérente avec les objectifs.'],
      firstLine: ['Évaluation clinique répétée des symptômes et des volontés.'],
      contextual: ['Examens ciblés si bénéfice attendu clair.'],
      notRoutine: ['Bilans systématiques sans impact sur le confort ou le projet de soins.']
    },
    actions: ['Plan symptomatique anticipé et voie d’administration adaptée.', 'Déprescrire ce qui n’apporte plus de bénéfice pertinent.', 'Coordonner équipe, entourage, lieu de soins et plan de crise.'],
    monitoring: ['Confort et symptômes', 'Effets indésirables', 'Compréhension et épuisement de l’entourage']
  }),

  clinicalPathway({
    id: 'ethics',
    icon: '⚖️',
    title: 'Consentement, refus de soins, protection ou situation éthique',
    summary: 'Évaluer la capacité pour la décision précise, rechercher la volonté et proportionner les soins.',
    aliases: ['consentement', 'refus', 'éthique', 'protection', 'tutelle', 'curatelle', 'maltraitance'],
    chapterIds: ['ch2', 'ch3', 'ch4', 'ch9', 'ch17'],
    redFlags: [
      clinicalAlert('ethic_danger', 'Danger vital immédiat avec impossibilité de recueillir la volonté', 'Agir de façon nécessaire et proportionnée selon le cadre légal, puis tracer et informer.'),
      clinicalAlert('ethic_abuse', 'Suspicion de maltraitance, emprise ou danger au domicile', 'Mettre en sécurité, documenter factuellement et activer les procédures adaptées.'),
      clinicalAlert('ethic_conflict', 'Conflit aigu patient–entourage–équipe', 'Suspendre ce qui peut l’être, clarifier les faits et organiser une discussion collégiale.')
    ],
    history: [
      clinicalQuestion('ethic_decision', 'Décision précise et degré d’urgence clarifiés'),
      clinicalQuestion('ethic_information', 'Information compréhensible et adaptée délivrée'),
      clinicalQuestion('ethic_capacity', 'Comprendre, apprécier, raisonner et exprimer un choix évalués'),
      clinicalQuestion('ethic_wishes', 'Volontés antérieures, directives et personne de confiance recherchées'),
      clinicalQuestion('ethic_rep', 'Mesure de protection et rôle exact du représentant vérifiés'),
      clinicalQuestion('ethic_values', 'Valeurs, objectifs et bénéfices/risques pour cette personne')
    ],
    exam: [
      clinicalQuestion('ethic_delirium', 'Confusion, douleur, trouble sensoriel ou barrière linguistique corrigés autant que possible'),
      clinicalQuestion('ethic_private', 'Entretien individuel proposé si emprise possible'),
      clinicalQuestion('ethic_trace', 'Participants, faits, arguments et décision tracés')
    ],
    scores: ['four_at', 'mms'],
    hypotheses: {
      urgent: ['Danger immédiat, maltraitance ou incapacité transitoire par confusion'],
      common: ['Refus éclairé, conflit de valeurs ou compréhension insuffisante'],
      reversible: ['Douleur, trouble sensoriel, langage, anxiété ou information inadaptée'],
      iatrogenic: ['Sédation, contrainte ou organisation empêchant une décision authentique']
    },
    investigations: {
      immediate: ['Évaluation clinique des causes altérant temporairement la capacité.'],
      firstLine: ['Analyse décisionnelle et recherche des volontés.'],
      contextual: ['Avis éthique, juridique, psychiatrique ou social selon la situation.'],
      notRoutine: ['Déduire l’incapacité d’un diagnostic de démence ou d’une mesure de protection seule.']
    },
    actions: ['Respecter un refus éclairé d’une personne capable après information adaptée.', 'Si incapacité, rechercher la volonté et décider de façon proportionnée/collégiale.', 'Tracer clairement et réévaluer si la capacité peut fluctuer.'],
    monitoring: ['Capacité et volontés', 'Sécurité et absence de contrainte disproportionnée', 'Compréhension partagée du plan']
  }),

  clinicalPathway({
    id: 'other',
    icon: '🧭',
    title: 'Autre motif ou symptôme non classé',
    summary: 'Triage gériatrique universel sans produire de diagnostic automatique.',
    aliases: ['autre', 'symptôme', 'motif inconnu', 'non classé'],
    chapterIds: ['ch2', 'ch3', 'ch16'],
    protocolIds: ['has-off-dependance-iatrogene', 'has-off-prescription'],
    sourceRefs: ['manual', 'has-iatrogenie', 'has-prescription'],
    redFlags: [
      clinicalAlert('other_instability', 'Instabilité respiratoire, circulatoire ou neurologique', 'ABCDE, monitorage et avis sénior immédiat.'),
      clinicalAlert('other_acute', 'Rupture aiguë de l’état habituel', 'Rechercher une affection aiguë et les facteurs précipitants.'),
      clinicalAlert('other_safety', 'Risque immédiat de chute, fugue, erreur thérapeutique ou retour non sûr', 'Sécuriser avant de poursuivre l’évaluation.')
    ],
    history: [
      clinicalQuestion('other_story', 'Symptôme principal décrit avec début, évolution, gravité et retentissement'),
      clinicalQuestion('other_baseline', 'État fonctionnel et cognitif habituel précisé'),
      clinicalQuestion('other_associated', 'Signes associés cardio-respiratoires, neurologiques, digestifs, urinaires et infectieux'),
      clinicalQuestion('other_drugs', 'Médicaments et changements récents revus'),
      clinicalQuestion('other_goals', 'Attentes et objectifs du patient clarifiés')
    ],
    exam: [
      clinicalQuestion('other_vitals', 'Constantes complètes, glycémie selon contexte et douleur'),
      clinicalQuestion('other_exam', 'Examen somatique orienté mais suffisamment global'),
      clinicalQuestion('other_cognition', 'Vigilance, attention et cognition comparées à l’état habituel'),
      clinicalQuestion('other_function', 'Mobilité, autonomie, nutrition et sécurité')
    ],
    scores: ['news2', 'four_at', 'egs'],
    hypotheses: {
      urgent: ['Affection aiguë menaçant le pronostic vital ou fonctionnel'],
      common: ['Décompensation d’une maladie chronique ou syndrome gériatrique'],
      reversible: ['Douleur, déshydratation, dénutrition, infection, rétention ou environnement'],
      iatrogenic: ['Introduction, arrêt, dose, interaction ou observance médicamenteuse']
    },
    investigations: {
      immediate: ['Examens dictés par les signes de gravité et le syndrome clinique.'],
      firstLine: ['Histoire, examen, constantes et comparaison à l’état antérieur.'],
      contextual: ['Biologie, ECG ou imagerie uniquement pour répondre à une hypothèse explicite.'],
      notRoutine: ['Bilan exhaustif non orienté ou conclusion fondée sur l’âge seul.']
    },
    actions: ['Stabiliser et traiter les causes simples immédiatement accessibles.', 'Demander un avis sénior si le motif reste non classé ou la trajectoire inhabituelle.', 'Tracer les éléments manquants et le délai de réévaluation.'],
    monitoring: ['Constantes et symptômes', 'Fonction et cognition', 'Évolution après intervention']
  })
]);

if (typeof window !== 'undefined') {
  window.CLINICAL_SOURCES = CLINICAL_SOURCES;
  window.CLINICAL_CONTEXTS = CLINICAL_CONTEXTS;
  window.CLINICAL_PATHWAYS = CLINICAL_PATHWAYS;
}
