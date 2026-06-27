// Protocoles de réanimation cardio-pulmonaire — Guide EVC
const PROTOCOLES_RCP = [
  { id: 'prcp-1', titre: 'Algorithme BLS (Basic Life Support)', etapes: '1. Vérifier conscience (stimulation verbale + physique). 2. Appeler le SAMU (15). 3. Vérifier respiration (voir, entendre, sentir pendant 10s max). 4. Si pas de respiration: 30 compressions / 2 insufflations. 5. Compression: 5-6cm de profondeur, 100-120/min. 6. Continuer jusqu\'à l\'arrivée du SAMU.',
    criteres_arret: 'Patient inconscient + pas de respiration normale = démarrer RCP' },
  { id: 'prcp-2', titre: 'Algorithme ALS (Advanced Life Support)', etapes: '1. RCP 30:2. 2. Monitorer (ECG, SpO2). 3. Adrénaline 1mg IV toutes les 3-5 min. 4. Si FV/TV: choc 150J → 200J → 300J. 5. Amiodarone 300mg IV si FV/TV réfractaire. 6. Traitement cause réversible (5H5T).',
    criteres_arret: 'Arrêter si: pas de rythme après 20 min RCP optimale + comorbidités sévères' },
  { id: 'prcp-3', titre: '5H5T — Causes réversibles d\'arrêt cardiaque', etapes: 'H: Hypovolémie, Hypoxie, Hydrogène (acidose), Hypo/Hyperkaliémie, Hypothermie. T: Thrombose coronaire, Thrombose EP, Tension pneumothorax, Tamponnade, Toxiques.',
    criteres_arret: 'Toujours rechercher et traiter les causes réversibles' },
  { id: 'prcp-4', titre: 'Fibrillation ventriculaire / Tachycardie ventriculaire sans pouls', etapes: '1. Choc 150J bifasique (200J monophasique). 2. RCP 2 min. 3. Adrénaline 1mg IV. 4. Choc 200J. 5. RCP 2 min. 6. Amiodarone 300mg IV. 7. Choc 300J. 8. RCP 2 min.',
    criteres_arret: 'Chaque choc = décharge immédiate suivie de 2 min RCP' },
  { id: 'prcp-5', titre: 'Asystolie / PEA', etapes: '1. RCP 30:2. 2. Adrénaline 1mg IV immédiatement. 3. Répéter adrénaline toutes les 3-5 min. 4. Rechercher cause réversible (5H5T). 5. Pas de choc (pas de rythme à défibriller).',
    criteres_arret: 'Pronostic très sombre. Réévaluer après 20 min si cause non trouvée.' }
];
