// ═══════════════════════════════════════════════════════════════
//  Fiches de Garde — Quick reference pour gardes gériatriques
//  Situations d'urgence, protocoles rapides, check-lists
// ═══════════════════════════════════════════════════════════════

const FICHES_GARDE = [
  {
    id: 'garde-1', title: 'Chute au domicile',
    icon: '🚨', urgency: 'high',
    tags: ['chute', 'urgence', 'trauma'],
    checklist: [
      'Examen clinique complet (neuro, cardio, locomoteur)',
      'Rechercher fracture : hanche, poignet, vertèbre',
      'ECG si malaise, perte de connaissance ou suspicion cardiaque',
      'Examens complémentaires orientés par la clinique ; glycémie si diabète',
      'Révision médicamenteuse (BZD, antihypertenseurs)',
      'Si traumatisme crânien ou signe neurologique : appliquer la filière locale d’imagerie, avec vigilance accrue sous anticoagulant',
      'Évaluation Tinetti + risque de re-chute'
    ],
    alert: 'HAS : pas d’imagerie cérébrale systématique après une chute sans indication clinique précise.'
  },
  {
    id: 'garde-2', title: 'Confusion aiguë (delirium)',
    icon: '🧠', urgency: 'high',
    tags: ['confusion', 'delirium', 'CAM'],
    checklist: [
      'CAM positive : début aigu/fluctuation + inattention + (pensée désorganisée ou niveau de conscience altéré)',
      'Rechercher méthodiquement une cause aiguë : infection, douleur, globe, fécalome, déshydratation, hypoxie, trouble métabolique ou médicament',
      'Examens biologiques et microbiologiques guidés par l’interrogatoire et l’examen',
      'Température (hypothermie possible chez sujet âgé)',
      'Révision médicamenteuse (anticholinergiques, opioïdes)',
      'Rechercher un globe vésical ; traiter la cause selon le protocole local',
      'Traitement médicamenteux seulement si danger ou soins indispensables compromis, à faible dose et pour la durée la plus courte',
      'Éviter contention, réorienter, horloge/calendrier'
    ],
    alert: 'Éviter les neuroleptiques en cas de maladie à corps de Lewy ; privilégier d’abord les mesures non médicamenteuses.'
  },
  {
    id: 'garde-3', title: 'Douleur aiguë',
    icon: '💊', urgency: 'medium',
    tags: ['douleur', 'antalgie', 'EVA'],
    checklist: [
      'Évaluation : auto-évaluation si possible ; Algoplus pour douleur aiguë non communicante, ECPA/Doloplus selon contexte',
      'Choisir l’antalgique selon intensité, cause, poids, fonction rénale/hépatique, traitements et fragilité',
      'Éviter les automatismes de palier et réévaluer après chaque intervention',
      'Rechercher cause : fracture, infection, constipation, rétention',
      'Réévaluer avec la même échelle et adapter la fréquence à la situation'
    ],
    alert: 'Éviter AINS chez le sujet âgé (risque rénal, digestif, cardiovasculaire)'
  },
  {
    id: 'garde-4', title: 'Fièvre chez le sujet âgé',
    icon: '🌡️', urgency: 'high',
    tags: ['fièvre', 'infection', 'sepsis'],
    checklist: [
      'Seuil : > 37.8°C (hypothermie possible !)',
      'ECBU + hémocultures AVANT antibiothérapie',
      'NFS, CRP, procalcitonine, lactates',
      'Rechercher : pneumopathie, ITU, escarre infectée, cholécystite',
      'Si sepsis : lactates > 2 → remplissage + antibio large spectre',
      'Correction hydro-électrolytique (déshydratation fréquente)',
      'Surveillance PA, diurèse, conscience'
    ],
    alert: 'Le sujet âgé peut être AFEBRILE malgré une infection sévère. Toujours doser CRP/PCT.'
  },
  {
    id: 'garde-5', title: 'Dyspnée aiguë',
    icon: '🫁', urgency: 'high',
    tags: ['dyspnée', 'respiratoire', 'urgence'],
    checklist: [
      'SpO2, fréquence respiratoire, auscultation',
      'Gaz du sang artériel',
      'ECG (insuffisance cardiaque, embolie)',
      'Radiographie thoracique',
      'Causes : OAP, pneumopathie, embolie, BPCO exacerbée',
      'Oxygène si SpO2 < 92% (lentilles si BPCO : cible 88-92%)',
      'Si OAP : furosémide 40mg IV + dérivés nitrés',
      'Si pneumopathie : antibio probabiliste'
    ],
    alert: 'BPCO : O2 lentules 2-4L/min pour éviter l\'hypercapnie (cible SpO2 88-92%)'
  },
  {
    id: 'garde-6', title: 'Hypoglycémie',
    icon: '💉', urgency: 'high',
    tags: ['glycémie', 'diabète', 'urgence'],
    checklist: [
      'Seuil : glycémie < 0.7 g/L (3.9 mmol/L)',
      'Si conscient : sucre oral (15g) + recontrôler à 15min',
      'Si inconscient : glucagon 1mg IM ou glucose 10% IV',
      'Rechercher cause : repas manqué, surdosage antidiabétique',
      'Réduire doses d\'insuline/sulfamide si hypoglycémies répétées',
      'Surveillance glycémique toutes les 2h pendant 12h',
      'HbA1c : cible 7-8% chez le sujet âgé (pas < 7%)'
    ],
    alert: 'Sujet âgé : hypoglycémie = facteur de chutes et de confusion. Éviter les cibles strictes.'
  },
  {
    id: 'garde-7', title: 'Rétention urinaire',
    icon: '🏥', urgency: 'medium',
    tags: ['urologie', 'sondage', 'prostate'],
    checklist: [
      'Signes : globe vésical, douleur hypogastrique, anurie',
      'Échographie vésicale ou percussion sus-pubienne',
      'Sondage uritaire aseptique (CH16-18)',
      'Si échec : avis urologique (sonde guidée, cystoscopie)',
      'Étiologie : HBP, constipation, médicaments (anticholinergiques)',
      'Déclage progressif (clamp 3h puis libération)',
      'Si récidive : avis urologique pour TURP'
    ],
    alert: 'Ne jamais forcer un sondage. Si résistance → avis urologique.'
  },
  {
    id: 'garde-8', title: 'Constipation aiguë',
    icon: '💊', urgency: 'low',
    tags: ['digestif', 'constipation', 'iléus'],
    checklist: [
      'Rechercher occlusion : météorisme, arrêt des matières et gaz',
      'Abdomen sans préparation (niveaux hydro-aériques ?)',
      'Si simple : laxatif osmotique (macrogol) + lavement',
      'Si iléus : NGT, jeûne, IVSE, avis chirurgical',
      'Révision médicamenteuse (opioïdes, anticholinergiques, fer)',
      'Hydratation, mobilisation, fibres si tolérées',
      'Prévention : macrogol 1 sachet/j si traitement opioïde'
    ],
    alert: 'Constipation + confusion + fièvre = impaction fécale. Toucher rectal systématique.'
  },
  {
    id: 'garde-9', title: 'ESC — Échelle de sédation',
    icon: '📋', urgency: 'low',
    tags: ['sédation', 'Richmond', 'RASS'],
    checklist: [
      'RASS (Richmond Agitation-Sedation Scale) : -5 à +4',
      '+4 : combatif, +3 : très agité, +2 : agité, +1 : inquiet',
      '0 : alerte et calme',
      '-1 : somnolent, -2 : sédation légère, -3 : modérée',
      '-4 : sédation profonde, -5 : non réveillable',
      'Cible : 0 à -2 en réanimation',
      'Sédation si agité : halopéridol 0.5-2mg ou midazolam 1-2mg'
    ],
    alert: 'Sujet âgé : cible RASS 0 à -1. Sédation excessive = facteur de confusion prolongée.'
  },
  {
    id: 'garde-10', title: 'Checklist de garde — arrivée',
    icon: '✅', urgency: 'low',
    tags: ['organisation', 'garde', 'checklist'],
    checklist: [
      'Vérifier le dossier de chaque patient (ATCD, traitements)',
      'Connaître les DNR/DNI (ne pas réanimer/intuber)',
      'Vérifier les perfusions en cours et débits',
      'Contrôler les constantes vitales de la soirée',
      'Vérifier les résultats biologiques en attente',
      'Connaître le plan thérapeutique du médecin traitant',
      'Numéro du senior de garde et du réanimateur',
      'Localisation du chariot d\'urgence et du défibrillateur'
    ],
    alert: 'Toujours vérifier les directives anticipées AVANT toute décision thérapeutique.'
  }
];
