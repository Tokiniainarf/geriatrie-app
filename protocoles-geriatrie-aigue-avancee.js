// Protocoles de soins de la personne âgée — Gériatrie aiguë avancée
const PROTOCOLES_GERIATRIE_AIGUE_AVANCEE = [
  { id: 'pgaa-1', titre: 'Prise en charge du sepsis chez le sujet âgé', protocole: '1. qSOFA: FR ≥ 22, PAS ≤ 100, GCS < 15. 2. Si ≥ 2: SOFA complet. 3. Hémocultures x2. 4. ECBU. 5. Rx thoracique. 6. Lactates. 7. Antibio IV dans l\'heure. 8. Remplissage 500mL NaCl. 9. Noradrénaline si hypotension persistante.',
    objectif: 'Prise en charge précoce du sepsis. Réduire la mortalité.' },
  { id: 'pgaa-2', titre: 'Prise en charge de l\'AVC ischémique', protocole: '1. NIHSS (gravité). 2. TDM cérébral (exclure hémorragie). 3. Si < 4.5h: alteplase 0.9mg/kg (max 90mg). 4. Si occlusion artère majeure: thrombectomie mécanique. 5. PA cible < 185/110 si thrombolyse. 6. Unité neurovasculaire.',
    objectif: 'Revascularisation précoce. Réduire les séquelles.' },
  { id: 'pgaa-3', titre: 'Prise en charge de l\'OAP', protocole: '1. Position assise. 2. Oxygène haut débit. 3. Furosémide 40-80mg IV. 4. Trinitrine 0.4mg SL (si PAS > 100). 5. Morphine 2-4mg IV si dyspnée sévère. 6. Si échec: ventilation non invasive. 7. Étiologie (SCA, HTA, FA).',
    objectif: 'Stabilisation hémodynamique. Traitement de la cause.' },
  { id: 'pgaa-4', titre: 'Prise en charge de l\'hyperkaliémie', protocole: '1. Si K > 6.5 ou ECG anormal: gluconate de Ca 10% IV. 2. Insuline 10UI + glucose 50% 50mL IV. 3. Salbutamol 10-20mg nébulisation. 4. Bicarbonates si acidose. 5. Kayexalate 30g PO. 6. Dialyse si réfractaire.',
    objectif: 'Stabilisation myocardique. Correction du potassium.' },
  { id: 'pgaa-5', titre: 'Prise en charge de l\'hypoglycémie', protocole: '1. Si conscient: 15g de sucre oral. 2. Si inconscient: glucose 30% IV 30-50mL. 3. Réévaluation glycémique H1, H2, H4. 4. Si persistance: perfusion glucose 10%. 5. Rechercher cause. 6. Adapter le traitement.',
    objectif: 'Correction rapide de l\'hypoglycémie. Prévenir la récidive.' },
  { id: 'pgaa-6', titre: 'Prise en charge de la TVP/EP', protocole: '1. Échographie Doppler MI si TVP suspectée. 2. Angio-TDM thoracique si EP suspectée. 3. HBPM (énaxaparine 1mg/kg SC q12h). 4. Si hémodynamiquement instable: thrombolyse. 5. Anticoagulation 3-6 mois. 6. Filtre cave si CI anticoagulation.',
    objectif: 'Diagnostic précoce. Traitement anticoagulant.' },
  { id: 'pgaa-7', titre: 'Prise en charge de l\'anaphylaxie', protocole: '1. Adrénaline 0.5mg IM (cuisse). 2. Position Trendelenburg. 3. Oxygène haut débit. 4. Remplissage NaCl 500-1000mL. 5. Hydrocortisone 200mg IV. 6. Antihistaminique IV. 7. Répéter adrénaline si nécessaire toutes les 5 min.',
    objectif: 'Traitement d\'urgence de l\'anaphylaxie. Stabilisation.' },
  { id: 'pgaa-8', titre: 'Prise en charge des convulsions', protocole: '1. Protection du patient (position latérale de sécurité). 2. Diazépam 10mg IV lente ou rectal. 3. Répéter x1 après 5 min. 4. Si prolongé: phénytoïne 15mg/kg IV. 5. Bilan (glycémie, iono, scanner). 6. Rechercher cause (infection, métabolique, médicamenteuse).',
    objectif: 'Arrêter les convulsions. Rechercher et traiter la cause.' }
];
