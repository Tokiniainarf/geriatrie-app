// Protocoles d'anesthésie gériatrique — Chirurgie du sujet âgé
const PROTOCOLES_ANESTHESIE = [
  { id: 'pa-1', titre: 'Évaluation pré-opératoire', protocole: '1. ASA score. 2. Évaluation gériatrique (ADL, MMS, MNA). 3. ÉCG. 4. NFS, iono, créatinine, TP. 5. Si cardiaque: écho cardiaque. 6. Si respiratoire: spirométrie. 7. Révision médicamenteuse (arrêter AVK 5j, AINS 3j, metformine J0).',
    risques: 'Confusion post-op (30%). Perte autonomie (20%). Mortalité 30j (5-10% selon ASA).' },
  { id: 'pa-2', titre: 'Choix du type d\'anesthésie', protocole: '1. Loco-régionale PREFERRED si possible (moins de confusion). 2. Rachi-anesthésie: bupivacaïne 7.5-10mg (réduire dose). 3. Péridurale: ropivacaïne 0.2%. 4. Générale: réduire doses d\'induction (propofol 1-1.5mg/kg, pas 2mg/kg). 5. Éviter kétamine (confusion).',
    risques: 'Hypotension (réduire doses de 30-50%). Bradycardie (atropine à portée). Hypothermie.' },
  { id: 'pa-3', titre: 'Prévention confusion post-opératoire', protocole: '1. Éviter BZD (midazolam préop). 2. Analgésie multimodale (paracétamol + kétamine faible dose). 3. Maintenir cycle veille-sommeil (lumière le jour). 4. Éviter contention. 5. Réveil précoce. 6. Réorientation (horloge, calendrier). 7. Présence familiale.',
    risques: 'Confusion = +30% mortalité 30j. +50% séjour prolongé. +40% perte autonomie.' },
  { id: 'pa-4', titre: 'Gestion de l\'hypothermie per-opératoire', protocole: '1. T° cible > 36°C. 2. Couverture chauffante. 3. Solutés de rinçage réchauffés. 4. Surveillance T° toutes les 30 min. 5. Réchauffement actif si T° < 36°C.',
    risques: 'Hypothermie = +300% saignement. +200% infection. +200% confusion. +150% événements cardiaques.' },
  { id: 'pa-5', titre: 'Prévention des nausées et vomissements post-op', protocole: '1. Facteurs de risque: femme, non-fumeur, cinétose, opioïdes. 2. Prophylaxie: dexaméthasone 4mg + ondansétron 4mg. 3. Éviter protoxyde d\'azote. 4. Hydratation précoce.',
    risques: 'NVPO = +50% aspiration. +30% séjour prolongé.' },
  { id: 'pa-6', titre: 'Prévention thrombo-embolique post-op', protocole: '1. HBPM (énaxaparine 40mg/j) dès J0 si chirurgie majeure. 2. Bas de contention. 3. Lever précoce (J0 si possible). 4. Hydratation. 5. Durée: 4-6 semaines si prothèse (hanche, genou).',
    risques: 'EP = 1ère cause mortalité post-op précoce chez sujet âgé.' },
  { id: 'pa-7', titre: 'Gestion de la douleur post-op', protocole: '1. Paracétamol IV 4g/j systématique. 2. Kétamine 0.25mg/kg IV per-op. 3. Morphine PCA (bolus 1mg, lockout 8 min). 4. Si loco-régionale: relais per os. 5. Évaluer ECPA si non communicant.',
    risques: 'Sous-dosage morphine = confusion + agitation + décompensation.' },
  { id: 'pa-8', titre: 'Prévention escarre post-op', protocole: '1. Matelas anti-escarres dès le bloc. 2. Changement position H2. 3. Éviter draps ridés. 4. Hydratation cutanée. 5. Nutrition précoce. 6. Surveiller points d\'appui.',
    risques: 'Escarre = +50% séjour prolongé. +30% infection.' }
];
