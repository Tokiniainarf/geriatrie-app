// Protocoles de soins de la personne âgée en court séjour — Médecine aiguë
const PROTOCOLES_COURT_SEJOUR = [
  { id: 'pcs-1', titre: 'Admission en court séjour gériatrique', protocole: '1. Évaluation gériatrique dans les 24h (ADL, MMS, MNA, Tinetti, Braden, GDS, douleur). 2. Projet de soins. 3. Plan de sortie anticipé. 4. Communication médecin traitant. 5. Prévention iatrogénie.',
    objectif: 'Prise en charge rapide. Prévention complications. Sortie optimisée.' },
  { id: 'pcs-2', titre: 'Prévention de la confusion en hospitalisation', protocole: '1. Évaluation CAM quotidienne. 2. Maintien cycle veille-sommeil. 3. Réorientation. 4. Présence familiale. 5. Éviter BZD et anticholinergiques. 6. Mobilisation précoce.',
    objectif: 'Zéro confusion évitable. Détection précoce.' },
  { id: 'pcs-3', titre: 'Prévention de la perte d\'autonomie', protocole: '1. Lever précoce (J0 si possible). 2. Mobilisation quotidienne. 3. Aide aux AVD. 4. Maintien des habitudes. 5. Kinésithérapie précoce.',
    objectif: 'Autonomie à la sortie ≥ autonomie à l\'entrée.' },
  { id: 'pcs-4', titre: 'Prévention des chutes en hospitalisation', protocole: '1. Évaluation Tinetti à l\'admission. 2. Identification patient à risque (bracelet). 3. Lit en position basse. 4. Sonnette à portée. 5. Chaussures antidérapantes. 6. Éclairage de nuit.',
    objectif: 'Zéro chute évitable.' },
  { id: 'pcs-5', titre: 'Prévention des infections nosocomiales', protocole: '1. Hygiène des mains. 2. Éviter sondage urinaire. 3. Éviter abord veineux inutile. 4. Soins cutanés. 5. Vaccination à jour. 6. Antibiothérapie raisonnée.',
    objectif: 'Zéro infection nosocomiale évitable.' },
  { id: 'pcs-6', titre: 'Préparation de la sortie', protocole: '1. Plan de sortie dès J1. 2. Ordonnance de sortie. 3. RDV de suivi. 4. Aide à domicile si nécessaire. 5. Adaptation domicile. 6. Éducation patient. 7. Lettre au médecin traitant.',
    objectif: 'Sortie sécurisée. Réhospitalisation évitée.' },
  { id: 'pcs-7', titre: 'Réunion de concertation pluridisciplinaire', protocole: '1. Hebdomadaire. 2. Participants: médecin, infirmier, kiné, ergo, diététicien, psychologue, assistant social. 3. Ordre du jour: chaque patient. 4. Décisions partagées. 5. Documentation.',
    objectif: 'Coordination. Décisions collégiales.' },
  { id: 'pcs-8', titre: 'Sortie et transition', protocole: '1. Évaluation finale (ADL, Tinetti). 2. Ordonnance complète. 3. RDV médecin traitant (7 jours). 4. Bilan biologique J15. 5. Aide à domicile. 6. SSR si nécessaire. 7. EHPAD si nécessaire.',
    objectif: 'Transition fluide. Continuité des soins.' }
];
