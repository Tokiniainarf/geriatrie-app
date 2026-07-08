// ═══════════════════════════════════════════════════════════════
//  Protocoles d'urgence gériatriques
//  Situations critiques — conduite à tenir immédiate
// ═══════════════════════════════════════════════════════════════

const PROTOCOLES_URGENCE = [
  {
    id: 'proto-sepsis', title: 'Sepsis chez le sujet âgé',
    icon: '🔴', category: 'urgence',
    steps: [
      '1. Reconnaître : confusion + hypothermie/fièvre + hypotension + tachycardie',
      '2. Hémocultures x2 AVANT antibiothérapie',
      '3. ECBU, Rx thoracique, NFS, CRP, PCT, lactates, iono, hépato, coagulation',
      '4. Remplissage : NaCl 0.9% 500mL en 30min (réévaluer PA, diurèse)',
      '5. Antibiothérapie probabiliste dans l\'heure : amoxicilline-clavulanat 2g IV + gentamicine 5mg/kg',
      '6. Si lactates > 2 mmol/L : répéter remplissage, surveillance H2',
      '7. Noradrénaline si MAP < 65 malgré remplissage (cible MAP 65-75)',
      '8. Bilan de source : scanner abdominal, écho cardiaque, IRM si besoin'
    ],
    alert: 'Le sujet âgé masque le sepsis : pas de fièvre, pas de leucocytose. CRP/PCT = meilleurs marqueurs.'
  },
  {
    id: 'proto-avc', title: 'Code AVC — checklist SAU (FAST)',
    icon: '🧠', category: 'urgence',
    steps: [
      '1. FAST : Face (asymétrie), Arm (chute bras), Speech (dysarthrie), Time (heure début)',
      '2. Scanner cérébral SANS injection < 30min (éliminer hémorragie)',
      '3. Si ischémique < 4.5h : alteplase 0.9mg/kg (max 90mg) — 10% bolus, 90% en 1h',
      '4. Contre-indications thrombolyse : anticoagulant, chirurgie récente, HTA > 185/110',
      '5. Si AVCI < 24h : thrombectomie mécanique si occlusion gros vaisseau (imagerie vasculaire)',
      '6. Monitoring : neurologique H1, PA H1, glycémie H1',
      '7. Unité neurovasculaire dès que possible',
      '8. Prévention complications : escarres, déglutition, TVP'
    ],
    alert: 'Fenêtre thrombolyse : 4.5h. Fenêtre thrombectomie : 24h. CHAQUE MINUTE COMPTE.'
  },
  {
    id: 'proto-oap', title: 'OAP — checklist SAU (position / diurétique / VNI)',
    icon: '🫁', category: 'urgence',
    steps: [
      '1. Position assise, jambes pendantes',
      '2. Oxygène : lunettes 6-10L/min ou masque à haute concentration',
      '3. Furosémide 40-80mg IV (dose selon traitement diurétique habituel)',
      '4. Dérivés nitrés : trinitrine 0.4mg sublinguale (si PAS > 100)',
      '5. Si détresse respiratoire sévère : CPAP ou VNI (Pression positive)',
      '6. Morphine 2-4mg IV lente (si anxiété/dyspnée réfractaire)',
      '7. Bilan : ECG, iono, troponine, gaz du sang, écho cardiaque',
      '8. Rechercher cause : IDM, HTA sévère, valvulopathie, arythmie'
    ],
    alert: 'Si OAP cardiogénique : PAS < 90 → pas de dérivés nitrés. Si OAP lésionnel : pas de furosémide.'
  },
  {
    id: 'proto-hypona', title: 'Hyponatrémie aiguë — checklist SAU',
    icon: '⚡', category: 'urgence',
    steps: [
      '1. Seuil : Na < 135 mmol/L. Critique : Na < 120',
      '2. Osmolarité plasmatique et urinaire',
      '3. Volémie : hypovolique, euvolique, hypervolique',
      '4. Si Na < 120 : NaCl 3% 100-150mL en 20min (max correction 8-10 mmol/L/24h)',
      '5. SIADH fréquent : restriction hydrique 800mL/j, déméclocycline',
      '6. Causes : diurétiques, SIADH, hypothyroïdie, insuffisance surrénale',
      '7. Correction lente (max 10 mmol/L/24h) pour éviter myélinolyse',
      '8. Surveillance Na toutes les 4-6h'
    ],
    alert: 'CORRECTION LENTE ! Max 10 mmol/L/24h. Correction trop rapide → myélinolyse osmotique centrale (irréversible).'
  },
  {
    id: 'proto-hyperk', title: 'Hyperkaliémie — checklist SAU (ECG + protection)',
    icon: '⚡', category: 'urgence',
    steps: [
      '1. Seuil : K > 5.5 mmol/L. Critique : K > 6.5 ou ECG anormal',
      '2. ECG : ondes T pointues, élargissement QRS, perte onde P',
      '3. Si ECG anormal : gluconate de calcium 10% 10mL IV (protection myocardique)',
      '4. Insuline 10UI + glucose 50% 50mL (entrée K dans cellules)',
      '5. Salbutamol 10-20mg nébulisé (effet adjuvant)',
      '6. Bicarbonate de Na 140mL si acidose',
      '7. Résine échangeuse : sulfonate de polystyrène 15-30g PO',
      '8. Cause : IRA, IEC/ARA2, spironolactone, AINS, destruction tissulaire'
    ],
    alert: 'K > 6.5 ou ECG anormal = URGENCE VITALE. Gluconate de calcium EN PREMIER (protection cardiaque).'
  },
  {
    id: 'proto-tvp', title: 'Thrombose veineuse profonde',
    icon: '🦵', category: 'urgences',
    steps: [
      '1. Signes : jambe gonflée, douloureuse, chaude, rouge (pas toujours)',
      '2. Score de Wells (≥ 2 = probable)',
      '3. D-dimères (si < 500 ng/mL et Wells < 2 → TVP exclue)',
      '4. Écho-Doppler veineux des membres inférieurs',
      '5. Traitement : HBPM (énaxoparine 1mg/kg x2/j ou tinzaparine 175UI/kg/j)',
      '6. Relais AVK (INR cible 2-3) ou AOD (rivaroxaban 15mg x2/j 21j puis 20mg/j)',
      '7. Contention veineuse 30-40 mmHg',
      '8. Durée : 3 mois minimum (6 mois si facteur de risque persistant)'
    ],
    alert: 'Sujet âgé : risque hémorragique accru. Adapter doses HBPM si ClCr < 30mL/min.'
  },
  {
    id: 'proto-idm', title: 'Infarctus du myocarde',
    icon: '❤️', category: 'urgence',
    steps: [
      '1. Douleur thoracique rétrosternale (ATYPIQUE chez sujet âgé : dyspnée, confusion)',
      '2. ECG 12 dérivations < 10min',
      '3. Troponine hs à H0 et H3',
      '4. Aspirine 250mg IV + clopidogrel 300mg (ou ticagrélor 180mg)',
      '5. Héparine NF 60UI/kg bolus puis 12UI/kg/h',
      '6. Si ST+ : coronarographie < 120min (angioplastie primaire)',
      '7. Si ST- : traitement médical + coronarographie < 72h',
      '8. Morphine 2-4mg si douleur, O2 si SpO2 < 90%'
    ],
    alert: 'Sujet âgé : présentation ATYPIQUE (pas de douleur). Toute confusion + facteur de risque cardio = ECG + troponine.'
  },
  {
    id: 'proto-constipation', title: 'Iléo post-opératoire',
    icon: '🏥', category: 'post-op',
    steps: [
      '1. Signes : absence matières/gaz, météorisme, nausées, vomissements',
      '2. ASP (niveaux hydro-aériques ?)',
      '3. Jeûne absolu, NGT (sonde naso-gastrique)',
      '4. IVSE (NaCl 0.9% + KCl selon iono)',
      '5. Réanimation hydro-électrolytique',
      '6. Kinésithérapie abdominale',
      '7. Si pas de résolution en 48h : TDM abdominale (occlusion mécanique ?)',
      '8. Si occlusion mécanique : avis chirurgical'
    ],
    alert: 'Post-op gériatrique : iléo fréquent. Ne PAS confondre avec constipation simple.'
  }
];
