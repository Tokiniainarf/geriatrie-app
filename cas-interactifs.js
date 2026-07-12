// Cas cliniques interactifs — Simulation EVC complète
const CAS_INTERACTIFS = [
  {
    id: 'cas-1', chapitre: 'ch9', difficulte: 'A', duree: '30min',
    titre: 'Troubles cognitifs et chutes — cas intégrateur',
    situation: `M. Martin, 78 ans, est amené par sa fille aux urgences pour confusion et chute. 

ATCD : HTA (amlodipine 10mg), diabète type 2 (metformine 1000mg), dépression (amitriptyline 50mg), BPH (tamsulosine 0.4mg).

Ce matin : trouvé au sol dans sa cuisine, ne se souvient pas de la chute. Sa fille rapporte qu'il oublie les rendez-vous depuis 6 mois, répète les mêmes questions, et a perdu 5 kg en 3 mois.

Examen : PA 135/85 couché, 110/70 debout. FC 78. T° 36.8°C. Confus, désorienté dans le temps. MMS 20/30. GDS-15 11/15. ADL 4/6. IADL 3/8. Ecchymose frontale. Pas de déficit neurologique focal.`,
    questions: [
      { q: 'Listez les 5 diagnostics principaux à évoquer, classés par probabilité.', a: '1. Syndrome confusionnel aigu sur terrain démentiel (chute + confusion aiguë + médicaments iatrogènes). 2. Démence débutante probable Alzheimer (déclin mnésique 6 mois, MMS 20, perte poids). 3. Hypotension orthostatique iatrogène (PA -25/-15 mmHg, amlodipine + tamsulosine). 4. Dépression sévère (GDS 15 = 11, amitriptyline insuffisante ?). 5. Dénutrition (perte 5 kg, IMC probablement bas).', points: 5 },
      { q: 'Quels examens complémentaires demandez-vous et pourquoi ?', a: 'NFS (anémie ?), TSH (hypothyroïdie = confusion + dépression + chute), B12/folates (carence = confusion), iono (hyponatrémie = confusion), créatinine + DFG (adaptation doses), glycémie + HbA1c (équilibre diabète), calcémie (hypercalcémie = confusion), hépato + albumine (dénutrition), ECBU (infection urinaire silencieuse), ECG (arythmie = syncope ?). IRM cérébrale (atrophie hippocampique ? AVC lacunaire ?).', points: 4 },
      { q: 'Quelle est votre stratégie thérapeutique immédiate ?', a: '1. Arrêt amitriptyline (anticholinergique → confusion + chute + constipation). 2. Réduire amlodipine 10→5mg (hypotension orthostatique). 3. Bilan orthostatique complet. 4. Correction hyponatrémie si < 130. 5. Si confusion persiste : halopéridol 0.5mg PRN. 6. Pas de contention. 7. Réorientation (horloge, lumière naturelle). 8. Avis gériatrique pour EGM complète.', points: 5 }
    ],
    juryTips: 'Le jury attend : 1) La reconnaissance de la cascade iatrogénique, 2) L\'EGM systématique, 3) La distinction confusion/démence, 4) Le plan de sortie (domicile avec aides ? SSR ? EHPAD ?).'
  },
  {
    id: 'cas-2', chapitre: 'ch14', difficulte: 'A', duree: '30min',
    titre: 'Dénutrition sévère et escarre — cas intégrateur',
    situation: `Mme Garcia, 84 ans, est hospitalisée en SSR après une fracture du col fémoral opérée il y a 3 semaines.

ATCD : HTA, BPCO, dépression traitée (sertraline 100mg). Vit seule, fille à 200 km.

Évolution postopératoire : escarre sacrée de stade II découverte à J10. Agitation nocturne, arrêt de l'alimentation. MMS préopératoire 24/30.

Examen aujourd'hui : amaigrie visiblement. IMC 17. Albumine 20 g/L. MNA 12/30. Escarre sacrée 4×3 cm avec fond fibrineux. MMS 20/30. GDS-15 13/15. ADL 2/6. Se lève avec aide, marche 10 mètres avec déambulateur.`,
    questions: [
      { q: 'Analysez la cascade dénutrition → escarre → dépendance.', a: 'Dénutrition (MNA 12, albumine 20) → fonte musculaire + fragilité cutanée → escarre (stade II) → douleur + infection → anorexie → aggravation dénutrition → retard cicatrisation → perte autonomie → dépression (GDS 13). Cercle vicieux classique du sujet âgé polymorbide. L\'immobilisation post-op a déclenché le processus.', points: 4 },
      { q: 'Proposez un plan de prise en charge nutritionnelle et de l\'escarre.', a: 'Nutrition : 1) Enrichissement alimentaire + CNO x3/j. 2) Protéines 1.5 g/kg/j (whey si tolérance). 3) Vit D 800UI + Ca 1.2g. 4) B12/folates si carence. 5) Si échec 1 semaine : nutrition entérale par SNG → PEG si prolongé. Escarre : 1) Matelas anti-escarres. 2) Mobilisation H2. 3) Pansement hydrocolloïde. 4) Soins locaux par IDE. 5) Surveillance taille toutes les 48h.', points: 5 },
      { q: 'Quel pronostic et quel plan de sortie ?', a: 'Pronostic réservé : âge 84, dénutrition sévère, escarre, dépendante (ADL 2), dépression sévère (GDS 13). Plan : 1) SSR 6-8 semaines minimum. 2) Rééducation progressive (objectif marche avec canne). 3) Traitement antidépresseur (sertraline 100→150mg ?). 4) Évaluation capacité retour domicile : si ADL ≥ 4 + aide domicile. 5) Si échec : EHPAD. 6) Fille informée et impliquée.', points: 4 }
    ],
    juryTips: 'Cascade nutrition → escarre → dépendance = classique. Le jury veut voir que vous comprenez le cercle vicieux et que vous proposez une prise en charge MULTIDISCIPLINAIRE (médecin + diététicien + kiné + IDE + psychologue).'
  }
];
