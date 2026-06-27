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
      'ECG (chute = syncope ?)',
      'Bilan : NFS, iono, créatinine, glycémie, TSH',
      'Révision médicamenteuse (BZD, antihypertenseurs)',
      'Si anticoagulant : scanner cerebral si choc',
      'Évaluation Tinetti + risque de re-chute'
    ],
    alert: 'Si patient sous anticoagulant → scanner crânien systématique même sans trauma visible'
  },
  {
    id: 'garde-2', title: 'Confusion aiguë (delirium)',
    icon: '🧠', urgency: 'high',
    tags: ['confusion', 'delirium', 'CAM'],
    checklist: [
      'CAM : (1) Début aigu + (2) Inattention OU (1+3+4)',
      'ECBU (infection urinaire = cause #1)',
      'NFS, CRP, iono, glycémie, gaz du sang',
      'Température (hypothermie possible chez sujet âgé)',
      'Révision médicamenteuse (anticholinergiques, opioïdes)',
      'Rechercher rétention urinaire (sondage si globe)',
      'Halopéridol 0.5mg PO/IM si agitation (éviter si DLB)',
      'Éviter contention, réorienter, horloge/calendrier'
    ],
    alert: 'CONTRE-INDIQUER neuroleptiques si démence à corps de Lewy (hypersensibilité)'
  },
  {
    id: 'garde-3', title: 'Douleur aiguë',
    icon: '💊', urgency: 'medium',
    tags: ['douleur', 'antalgie', 'EVA'],
    checklist: [
      'Évaluation : EVA si communicant, ECPA si non communicant',
      '1ère ligne : paracétamol 1g IV/PO (max 3g/j si < 50kg)',
      '2ème ligne : tramadol 50mg (réduire si > 75 ans)',
      '3ème ligne : morphine SC 0.1mg/kg (titration)',
      'Si douleur neuropathique : gabapentine/pregabaline',
      'Rechercher cause : fracture, infection, constipation, rétention',
      'Réévaluer toutes les 4h'
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
