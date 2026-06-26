const HAS_RECOMMANDATIONS = [
  // ── Fragilité ──
  { id: 'has-1', theme: 'Fragilité', chapter: 'ch1',
    reco: "La HAS recommande un dépistage systématique de la fragilité chez toute personne âgée de plus de 65 ans consultant en médecine générale, à l'aide du phénotype de Fried ou du score de Rockwood.",
    details: "Phénotype de Fried : perte de poids ≥4.5kg/an, fatigue (échelle), réduction activité physique, vitesse marche <0.8m/s, faible force préhension. ≥3 critères = fragile. Score de Rockwood : évaluation multidimensionnelle (comorbidités, mobilité, nutrition, cognition, humeur).",
    niveau: "Grade B",
    source: "HAS 2015 - Parcours de soins des personnes âgées fragiles"
  },

  // ── Chutes ──
  { id: 'has-2', theme: 'Prévention des chutes', chapter: 'ch12',
    reco: "La HAS recommande un dépistage annuel du risque de chute chez les personnes de plus de 65 ans, en particulier les femmes ménopausées, à l'aide du test de Timed Up and Go (TUG).",
    details: "TUG > 20 secondes = risque élevé. Évaluation multidimensionnelle : troubles de la marche et de l'équilibre, médicaments (psychotropes, antihypertenseurs), troubles visuels, environnement domestique. Programme d'exercices physiques ciblés (équilibre, renforcement musculaire) recommandé.",
    niveau: "Grade A",
    source: "HAS 2009 - Prévention des chutes chez les personnes âgées"
  },

  // ── Nutrition ──
  { id: 'has-3', theme: 'Dénutrition du sujet âgé', chapter: 'ch14',
    reco: "La HAS recommande un dépistage systématique de la dénutrition chez la personne âgée à l'aide du MNA (Mini Nutritional Assessment). Un score < 17/30 définit la dénutrition, entre 17 et 23,5 un risque de dénutrition.",
    details: "IMC < 21 chez la personne âgée = dénutrition. Supplémentation en vitamine D systématique. Enrichissement de l'alimentation en première intention. Compléments nutritionnels oraux (CNO) si enrichissement insuffisant. Réalimentation progressive pour éviter le syndrome de renutrition (hypophosphatémie, hypokaliémie, hypomagnésémie).",
    niveau: "Grade A",
    source: "HAS 2007 - Évaluation et prise en charge de la dénutrition"
  },

  // ── Démence ──
  { id: 'has-4', theme: 'Maladie d\'Alzheimer', chapter: 'ch9',
    reco: "La HAS recommande un dépistage des troubles cognitifs chez toute personne de plus de 65 ans consultant pour des plaintes de mémoire, à l'aide du MMSE ou du MoCa.",
    details: "MMSE < 24 = examen complémentaire nécessaire. MoCa plus sensible pour les formes légères. Bilan étiologique obligatoire : NFS, glycémie, fonction rénale, TSH, vitamine B12, folates, ionogramme, calcémie, syphilis, VIH. IRM cérébrale. Inhibiteurs de cholinestérase (donépézil, rivastigmine, galantamine) en première intention. Mémantine en stade modéré-avancé.",
    niveau: "Grade A",
    source: "HAS 2008 - Maladie d'Alzheimer : prise en charge"
  },

  // ── Douleur ──
  { id: 'has-5', theme: 'Douleur chez la personne âgée', chapter: 'ch8',
    reco: "La HAS recommande un dépistage systématique de la douleur chez la personne âgée, même non communicante, à l'aide d'échelles adaptées (EVA, EN, échelles comportementales).",
    details: "Personne communicante : EVA ou EN (échelle numérique). Personne non communicante : échelle ECPA ou DOLOPLUS-2. Échelle des paliers OMS adaptée : paracétamol = palier 1 de référence (3g/j max, adapter au poids). Éviter AINS. Tramadol à doses réduites si palier 1 insuffisant. Morphine à doses réduites si nécessaire, en surveillant la fonction rénale.",
    niveau: "Grade A",
    source: "HAS 2006 - Douleur chronique : stratégie thérapeutique"
  },

  // ── Ostéoporose ──
  { id: 'has-6', theme: 'Ostéoporose', chapter: 'ch6',
    reco: "La HAS recommande un dépistage de l'ostéoporose par DEXA chez les femmes de plus de 65 ans présentant des facteurs de risque de fracture, et chez toute femme de plus de 70 ans.",
    details: "T-score ≤ -2.5 = ostéoporose. T-score entre -1 et -2.5 = ostéopénie. Traitement : bisphosphonates (alendronate, zolédronate) en première intention. Supplémentation calcium 1000-1200mg/j + vitamine D 800-1000UI/j. Traitement anti-ostéoporotique systématique après fracture du col fémoral.",
    niveau: "Grade A",
    source: "HAS 2006 - Ostéoporose : prévention et traitement"
  },

  // ── Dépression ──
  { id: 'has-7', theme: 'Dépression du sujet âgé', chapter: 'ch10',
    reco: "La HAS recommande un dépistage de la dépression chez la personne âgée à l'aide de la GDS (Geriatric Depression Scale) en 15 items. Un score > 5/15 est en faveur d'une dépression.",
    details: "La dépression gériatrique est souvent sous-diagnostiquée (présentation atypique : plaintes somatiques, irritabilité, troubles cognitifs). ISRS en première intention (escitalopram, sertraline). Éviter les tricycliques (effets anticholinergiques). Psychothérapie de soutien. Activité physique. Surveillance du risque suicidaire (taux de suicide le plus élevé chez l'homme de plus de 75 ans).",
    niveau: "Grade A",
    source: "HAS 2003 - Dépression chez la personne âgée"
  },

  // ── Prescrire ──
  { id: 'has-8', theme: 'Prescription chez la personne âgée', chapter: 'ch16',
    reco: "La HAS recommande une revue médicamenteuse régulière chez toute personne âgée polymédiquée (≥5 médicaments), en utilisant les critères STOPP/START et les critères Beers.",
    details: "Principes : Start low, go slow. Évaluer l'indication de chaque molécule. Adapter aux fonctions rénales/hépatiques. Rechercher les interactions. Éviter la cascade iatrogénique (un médicament pour traiter l'effet indésirable d'un autre). Critères Beers = médicaments à éviter chez la personne âgée. STOPP = médicaments potentiellement inappropriés. START = médicaments indiqués mais non prescrits.",
    niveau: "Grade A",
    source: "HAS 2007 - Démarche de soins chez la personne âgée"
  },

  // ── Escarres ──
  { id: 'has-9', theme: 'Prévention des escarres', chapter: 'ch13',
    reco: "La HAS recommande une évaluation du risque d'escarre chez toute personne hospitalisée ou institutionnalisée à l'aide d'échelles validées (Waterlow, Braden, Norton) et une réévaluation régulière.",
    details: "Score de Waterlow > 20 = risque très élevé. Mesures préventives : matelas anti-escarres, changement de position toutes les 2 heures, soins cutanés, supplémentation nutritionnelle, mobilisation précoce. Classification des escarres : stade 1 (érythème), stade 2 (décollement cutané), stade 3 (nécrose dermique), stade 4 (nécrose profonde).",
    niveau: "Grade A",
    source: "HAS 2010 - Escarres : prévention et traitement"
  },

  // ── Soins palliatifs ──
  { id: 'has-10', theme: 'Soins palliatifs et fin de vie', chapter: 'ch17',
    reco: "La HAS recommande une démarche palliative précoce chez toute personne atteinte d'une maladie chronique évolutive, en complément des traitements curatifs.",
    details: "Loi Claeys-Leonetti 2016 : droit à la sédation profonde et continue jusqu'au décès en cas de souffrance réfractaire. Directives anticipées valables sans limitation de durée. Personne de confiance : avis consultatif. Obstination déraisonnable (acharnement thérapeutique) interdite. Accompagnement de fin de vie : soins de confort, douleur, anxiété, soins buccaux, peau.",
    niveau: "Grade A",
    source: "HAS 2006 - Accompagnement en fin de vie"
  },

  // ── Incontinence ──
  { id: 'has-11', theme: 'Incontinence urinaire', chapter: 'ch15',
    reco: "La HAS recommande un dépistage de l'incontinence urinaire chez la personne âgée et une évaluation du type d'incontinence (effort, urgente, mixte, fonctionnelle) avant tout traitement.",
    details: "IUE (effort) : rééducation périnéale en 1ère intention, pessaire, chirurgie (bandelette). IUU (urgente) : rééducation vésicale, anticholinergiques (à éviter chez la personne âgée si possible), bêta-3 agoniste (mirabégron). Incontinence fonctionnelle : traiter la cause (mobilité, cognition, environnement). Éviter les sondages au long cours.",
    niveau: "Grade A",
    source: "HAS 2009 - Incontinence urinaire de la femme"
  },

  // ── Autonomie ──
  { id: 'has-12', theme: 'Évaluation de l\'autonomie', chapter: 'ch3',
    reco: "La HAS recommande une évaluation régulière de l'autonomie de la personne âgée à l'aide de la grille AGGIR pour le GIR et de l'échelle des AVD pour le suivi fonctionnel.",
    details: "Grille AGGIR : 10 variables discriminantes (cohérence, orientation, toilette, habillage, alimentation, continence, transferts, déplacement intérieur, déplacement extérieur, communication). GIR 1-2 = dépendance lourde. GIR 3-4 = dépendance partielle. GIR 5-6 = peu ou pas dépendant. GIR 1-4 ouvrent droit à l'APA.",
    niveau: "Grade A",
    source: "HAS 2004 - Évaluation gérontologique standardisée"
  },

  // ── Troubles sensoriels ──
  { id: 'has-13', theme: 'Troubles sensoriels du sujet âgé', chapter: 'ch5',
    reco: "La HAS recommande un dépistage des troubles sensoriels (vue, audition) chez la personne âgée, en particulier avant toute rééducation de l'autonomie ou de l'équilibre.",
    details: "Presbyacousie : dépistage par audiogramme. Appareillage auditif recommandé si surdité légère à modérée. DMLA : dépistage par OCT, injections intravitréennes de anti-VEGF pour la forme humide. Déficit visuel : facteur de risque de chute indépendant. Correction visuelle optimale recommandée.",
    niveau: "Grade B",
    source: "HAS 2008 - Troubles sensoriels et prévention des chutes"
  },

  // ── Syndrome confusionnel ──
  { id: 'has-14', theme: 'Syndrome confusionnel', chapter: 'ch11',
    reco: "La HAS recommande un dépistage systématique du syndrome confusionnel chez toute personne âgée hospitalisée, en utilisant la CAM (Confusion Assessment Method).",
    details: "CAM : 1. Début aigu et fluctuant, 2. Inattention, 3. Désorganisation de la pensée, 4. Altération du niveau de conscience. Critères 1+2 + (3 ou 4) = delirium. Prévention : repères temporo-spatiaux, hydratation, traitement de la douleur, éviter les contenants physiques, limiter les psychotropes. Le syndrome confusionnel hypoactif est le plus fréquent et le plus sous-diagnostiqué.",
    niveau: "Grade A",
    source: "HAS 2010 - Évaluation gérontologique : cognition"
  },

  // ── Alitement ──
  { id: 'has-15', theme: 'Conséquences de l\'alitement', chapter: 'ch13',
    reco: "La HAS recommande une mobilisation précoce et une kinésithérapie respiratoire et musculaire chez toute personne âgée alitée pour prévenir les complications de l'immobilisation.",
    details: "Complications de l'alitement : escarres, pneumopathie d'inhalation, thrombose veineuse profonde, dénutrition, constipation, rétraction tendineuse, déminéralisation osseuse (1-2% de perte osseuse/semaine), dépression. Prévention : mobilisation précoce, kinésithérapie respiratoire, anticoagulation préventive, supplémentation nutritionnelle, soins cutanés.",
    niveau: "Grade A",
    source: "HAS 2005 - Évaluation gérontologique : alitement"
  }
];
