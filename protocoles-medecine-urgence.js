// Protocoles de soins de la personne âgée — Médecine d'urgence
const PROTOCOLES_MEDECINE_URGENCE = [
  { id: 'pmu-1', titre: 'Prise en charge initiale aux urgences', protocole: '1. Triage (score triage). 2. Évaluation gériatrique dans les 2h. 3. Bilan complet. 4. Prévention iatrogénie. 5. Plan de sortie anticipé.',
    objectif: 'Prise en charge rapide. Prévention complications.' },
  { id: 'pmu-2', titre: 'Évaluation gériatrique aux urgences', protocole: '1. ADL/IADL. 2. MMS. 3. MNA. 4. Tinetti. 5. Braden. 6. GDS-15. 7. Douleur (ECPA). 8. Chute ? 9. Confusion ?',
    objectif: 'Dépister les problèmes gériatriques. Orienter la prise en charge.' },
  { id: 'pmu-3', titre: 'Prévention de la confusion aux urgences', protocole: '1. Maintenir le cycle veille-sommeil. 2. Réorientation. 3. Présence familiale. 4. Éviter BZD. 5. Éviter contention. 6. Lumière naturelle.',
    objectif: 'Prévenir le delirium. Détection précoce.' },
  { id: 'pmu-4', titre: 'Prévention de la perte d\'autonomie', protocole: '1. Mobilisation précoce. 2. Aide aux AVD. 3. Maintien des habitudes. 4. Éviter la sédentarité. 5. Kinésithérapie précoce.',
    objectif: 'Maintenir l\'autonomie. Prévenir le déclin.' },
  { id: 'pmu-5', titre: 'Gestion de la douleur aux urgences', protacole: '1. Évaluer (EVA/ECPA). 2. Paracétamol IV 1g. 3. Si insuffisant: morphine SC 0.05mg/kg. 4. Réévaluation H1. 5. Cause ?',
    objectif: 'Soulager la douleur. Éviter la sous-dosage.' },
  { id: 'pmu-6', titre: 'Sortie des urgences', protocole: '1. Évaluation autonomie finale. 2. Ordonnance de sortie. 3. RDV de suivi. 4. Aide à domicile si nécessaire. 5. Éducation patient. 6. Lettre au médecin traitant.',
    objectif: 'Sortie sécurisée. Réhospitalisation évitée.' },
  { id: 'pmu-7', titre: 'Hospitalisation si nécessaire', protocole: '1. Critères: confusion, chute grave, dénutrition sévère, déshydratation, douleur ingérable, perte autonomie. 2. Choisir: court séjour, SSR, EHPAD.',
    objectif: 'Orientation adaptée. Continuité des soins.' },
  { id: 'pmu-8', titre: 'Réévaluation et suivi', protocole: '1. Réévaluation quotidienne. 2. Communication avec l\'équipe. 3. Plan de sortie mis à jour. 4. Réunion de concertation. 5. Transition soins.',
    objectif: 'Qualité des soins. Coordination.' }
];
