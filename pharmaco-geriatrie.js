// ═══════════════════════════════════════════════════════════════
//  Pharmacologie gériatrique — Adaptations posologiques
//  Médicaments courants, ajustements DFG, interactions
// ═══════════════════════════════════════════════════════════════

const PHARMO_GERIATRIE = [
  // ── ANTALGIQUES ──
  { id: 'ph-1', category: 'Antalgiques', drug: 'Paracétamol',
    doseNormale: '1g x4/j (max 4g/j)', doseIdem: '1g x3/j (max 3g/j si < 50kg ou hépatique)',
    renal: 'Aucun ajustement', hepatic: 'Réduire à 2g/j si insuffisance hépatique',
    precautions: 'Médicament de 1ère ligne chez le sujet âgé. Vérifier les associations (Doliprane + Codéol = surdosage).',
    interactions: 'Warfarine (↑ INR si traitement prolongé)' },
  { id: 'ph-2', category: 'Antalgiques', drug: 'Tramadol',
    doseNormale: '50-100mg x2-3/j (max 400mg/j)', doseIdem: '25-50mg x2/j (max 200mg/j)',
    renal: 'Éviter si DFG < 30 (métabolites actifs)', hepatic: 'Réduire dose de 50%',
    precautions: 'Éviter si > 75 ans (chutes, confusion, constipation). Saisies possibles. Syndrome sérotoninergique avec ISRS.',
    interactions: 'ISRS/IRSNA (sérotonine), IMAO (contre-indiqué), warfarine (↑ INR)' },
  { id: 'ph-3', category: 'Antalgiques', drug: 'Morphine',
    doseNormale: '0.1-0.2mg/kg SC/IV q4h', doseIdem: '0.05-0.1mg/kg (demi-dose)',
    renal: 'Éviter morphine (métabolite actif M6G). Préférer fentanyl ou oxycodone.',
    hepatic: 'Réduire dose de 50%',
    precautions: 'Sujet âgé : start low, go slow. Surveillance conscience, respiration, transit. Anti-émétique systématique.',
    interactions: 'Anticholinergiques (rétention urinaire), BZD (dépression respiratoire)' },

  // ── CARDIOVASCULAIRE ──
  { id: 'ph-4', category: 'Cardiovasculaire', drug: 'Amlodipine',
    doseNormale: '5-10mg/j', doseIdem: '2.5-5mg/j (start low)',
    renal: 'Aucun ajustement', hepatic: 'Réduire dose',
    precautions: 'Hypotension orthostatique, œdèmes des chevilles. Monitoring PA debout/couché.',
    interactions: 'Simvastatine (↑ statine, max 20mg), CYP3A4 inhibiteurs' },
  { id: 'ph-5', category: 'Cardiovasculaire', drug: 'Furosémide',
    doseNormale: '20-80mg/j PO/IV', doseIdem: '20mg/j (start low)',
    renal: 'Pas d\'ajustement (agit sur le rein)', hepatic: 'Aucun',
    precautions: 'Déshydratation, hyponatrémie, hypokaliémie, hypotension orthostatique, goutte. Peser tous les jours. Surveillance iono H48.',
    interactions: 'AINS (↓ effet diurétique), lithium (↑ lithium), digoxine (hypokaliémie → toxicité)' },
  { id: 'ph-6', category: 'Cardiovasculaire', drug: 'Digoxine',
    doseNormale: '0.125-0.25mg/j', doseIdem: '0.0625-0.125mg/j',
    renal: 'Adapter selon DFG. DFG 10-50 : 0.0625mg/j. DFG < 10 : éviter.',
    hepatic: 'Aucun ajustement',
    precautions: 'Index thérapeutique étroit. Dosage plasmatique (0.5-2 ng/mL). Toxicité : nausées, troubles visuels, arythmie.',
    interactions: 'Amiodarone (↑ digoxine x2), diurétiques (hypokaliémie → toxicité), quinine' },

  // ── ANTIBIOTIQUES ──
  { id: 'ph-7', category: 'Antibiotiques', drug: 'Amoxicilline',
    doseNormale: '1g x3/j', doseIdem: '1g x2/j',
    renal: 'DFG 10-30 : 1g x2/j. DFG < 10 : 1g/j',
    hepatic: 'Aucun ajustement',
    precautions: 'Risque de diarrhée à C. difficile. Réaction cutanée (exanthème). Vérifier allergie pénicilline.',
    interactions: 'Méthotrexate (↓ élimination), warfarine (↑ INR)' },
  { id: 'ph-8', category: 'Antibiotiques', drug: 'Ciprofloxacine',
    doseNormale: '500mg x2/j', doseIdem: '250-500mg x2/j',
    renal: 'DFG 30-50 : 250-500mg x2/j. DFG < 30 : 250mg x2/j',
    hepatic: 'Aucun',
    precautions: 'ÉVITER chez le sujet âgé si possible (QT, tendinopathie, confusion, C. difficile). Réserve si multirésistant.',
    interactions: 'Théophylline (↑ théophylline), warfarine (↑ INR), antiacides (↓ absorption)' },

  // ── PSYCHOTROPES ──
  { id: 'ph-9', category: 'Psychotropes', drug: 'Sertraline',
    doseNormale: '50-200mg/j', doseIdem: '25-50mg/j (start low)',
    renal: 'Aucun ajustement', hepatic: 'Réduire dose de 50%',
    precautions: 'ISRS de 1ère ligne chez sujet âgé. Hyponatrémie (SIADH), saignements, syndrome sérotoninergique. Délai 4-6 semaines.',
    interactions: 'Tramadol (sérotonine), IMAO (contre-indiqué), warfarine (↑ saignements)' },
  { id: 'ph-10', category: 'Psychotropes', drug: 'Mirtazapine',
    doseNormale: '15-45mg/j le soir', doseIdem: '15mg/j le soir',
    renal: 'Aucun ajustement', hepatic: 'Réduire dose',
    precautions: 'Intérêt chez sujet âgé : améliore appétit, sommeil, anxiété. Effet sédatif (surtout 15mg). Prise de poids. Rare agranulocytose.',
    interactions: 'IMAO (contre-indiqué), tramadol (sérotonine)' },

  // ── ANTIDIABÉTIQUES ──
  { id: 'ph-11', category: 'Antidiabétiques', drug: 'Metformine',
    doseNormale: '500-2500mg/j', doseIdem: '500-1000mg/j',
    renal: 'DFG 30-45 : 500mg/j max. DFG < 30 : CONTRE-INDIQUÉ',
    hepatic: 'CONTRE-INDIQUÉ si insuffisance hépatique',
    precautions: 'Acidose lactique (rare mais grave). Arrêter 48h avant scanner iodé. Troubles digestifs fréquents. Cible HbA1c : 7-8% chez sujet âgé.',
    interactions: 'Alcool (↑ risque lactique), iodés (acidose lactique)' },
  { id: 'ph-12', category: 'Antidiabétiques', drug: 'Gliclazide',
    doseNormale: '30-120mg/j', doseIdem: '30mg/j (start low)',
    renal: 'Réduire dose si DFG < 30', hepatic: 'Éviter',
    precautions: 'Hypoglycémie = risque majeur chez sujet âgé (confusion, chute, coma). Adapter doses très prudemment.',
    interactions: 'AINS (↑ effet), miconazole (↑ hypoglycémie), alcool (effet antabuse)' }
];
