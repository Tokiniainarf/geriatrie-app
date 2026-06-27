const HAS_EXPANDED = [
  {
    id: 'has-1',
    theme: 'Fragilité',
    chapter: 'ch1',
    objectif: 'Identifier précocement la fragilité pour organiser un parcours de soins adapté chez la personne âgée.',
    recommandations: [
      'Dépister la fragilité dès 65 ans en médecine de ville (phénotype de Fried ou échelle de fragilité de Rockwood).',
      'Réaliser une évaluation gériatrique standardisée (EGS) en cas de fragilité ou de perte d\'autonomie récente.',
      'Proposer activité physique adaptée, optimisation nutritionnelle et revue des traitements iatrogènes.',
      'Orienter vers équipe gériatrique ou CMP si besoins complexes (cognition, chutes, polymédication).'
    ]
  },
  {
    id: 'has-2',
    theme: 'Prévention des chutes',
    chapter: 'ch12',
    objectif: 'Réduire l\'incidence des chutes et leurs conséquences fonctionnelles chez le sujet âgé.',
    recommandations: [
      'Dépister annuellement le risque de chute (Timed Up and Go, historique des chutes, troubles de la marche).',
      'Rechercher facteurs modifiables : vision, audition, médicaments psychotropes, hypotension orthostatique, environnement.',
      'Prescrire un programme d\'exercices combinant renforcement musculaire et travail de l\'équilibre.',
      'Mettre en place un plan personnalisé après chute avec réévaluation à 3 mois.'
    ]
  },
  {
    id: 'has-3',
    theme: 'Dénutrition du sujet âgé',
    chapter: 'ch14',
    objectif: 'Dépister et traiter la dénutrition pour limiter la perte d\'autonomie et la morbidité.',
    recommandations: [
      'Dépister systématiquement avec le MNA : score < 17 = dénutrition, 17–23,5 = risque.',
      'Considérer IMC < 21 kg/m² ou perte de poids involontaire ≥ 5 % en 1 mois comme alerte.',
      'Privilégier enrichissement alimentaire et accompagnement diététique avant les compléments nutritionnels oraux.',
      'Supplémenter en vitamine D et surveiller le syndrome de renutrition lors de la réalimentation.'
    ]
  },
  {
    id: 'has-4',
    theme: 'Maladie d\'Alzheimer et troubles neurocognitifs',
    chapter: 'ch9',
    objectif: 'Diagnostiquer tôt les troubles cognitifs et proposer une prise en charge globale personnalisée.',
    recommandations: [
      'Évaluer toute plainte mnésique ou trouble du comportement avec MMSE et/ou MoCA.',
      'Réaliser un bilan étiologique complet (biologie, imagerie cérébrale selon filière HAS).',
      'Informer la personne et l\'aidant, proposer plan de soins, directives anticipées et personne de confiance.',
      'Traiter les symptômes selon stade (inhibiteurs de la cholinestérase, mémantine) et non-médicamenteux en priorité.'
    ]
  },
  {
    id: 'has-5',
    theme: 'Douleur chez la personne âgée',
    chapter: 'ch8',
    objectif: 'Garantir une évaluation et un soulagement efficaces de la douleur, y compris chez le patient non communicant.',
    recommandations: [
      'Dépister la douleur à chaque consultation ou séjour (EVA, EN, échelles comportementales si besoin).',
      'Adapter l\'échelle au contexte (DOLOPLUS-2, Algoplus, ECPA selon communication et contexte).',
      'Suivre la stratégie par paliers OMS : paracétamol en palier 1, éviter AINS si possible.',
      'Réévaluer régulièrement l\'efficacité, les effets indésirables et le risque de sédation/chutes.'
    ]
  },
  {
    id: 'has-6',
    theme: 'Ostéoporose',
    chapter: 'ch6',
    objectif: 'Prévenir les fractures ostéoporotiques et traiter l\'ostéoporose avérée chez le sujet âgé.',
    recommandations: [
      'Indiquer une ostéodensitométrie (DEXA) selon âge, sexe et facteurs de risque de fracture.',
      'Traiter si ostéoporose avérée (T-score ≤ -2,5) ou fracture à faible énergie.',
      'Associer calcium alimentaire, vitamine D (800–1000 UI/j) et bisphosphonates ou alternative selon tolérance.',
      'Traiter systématiquement l\'ostéoporose secondaire à fracture du col du fémur après stabilisation.'
    ]
  },
  {
    id: 'has-7',
    theme: 'Dépression du sujet âgé',
    chapter: 'ch10',
    objectif: 'Améliorer le repérage et la prise en charge de la dépression souvent atypique chez la personne âgée.',
    recommandations: [
      'Dépister avec la GDS-15 : score > 5 oriente vers une évaluation clinique approfondie.',
      'Rechercher présentation somatique, irritabilité, plaintes cognitives ou refus alimentaire.',
      'Privilégier ISRS bien tolérés (escitalopram, sertraline) et psychothérapie de soutien.',
      'Évaluer le risque suicidaire, l\'isolement et l\'impact sur l\'autonomie.'
    ]
  },
  {
    id: 'has-8',
    theme: 'Prescription et iatrogénie médicamenteuse',
    chapter: 'ch16',
    objectif: 'Réduire la polymédication inappropriée et les effets indésirables chez la personne âgée.',
    recommandations: [
      'Réaliser une revue médicamenteuse régulière si ≥ 5 médicaments (critères STOPP/START, Beers).',
      'Appliquer « start low, go slow » et adapter les posologies à la fonction rénale et hépatique.',
      'Éviter les cascades iatrogènes et les psychotropes sans indication formalisée.',
      'Réévaluer chaque trimestre la pertinence de poursuite (déprescription encadrée).'
    ]
  },
  {
    id: 'has-9',
    theme: 'Prévention et traitement des escarres',
    chapter: 'ch13',
    objectif: 'Prévenir l\'apparition des escarres et traiter rapidement les lésions chez le sujet à risque.',
    recommandations: [
      'Évaluer le risque à l\'admission et hebdomadairement (échelle de Braden, Norton ou Waterlow).',
      'Prévenir par repositionnement, matelas adapté, soins cutanés et nutrition optimisée.',
      'Classifier les lésions (stades 1 à 4) et traiter selon protocole local avec avis spécialisé si profondes.',
      'Mobiliser précocement pour limiter l\'alitement prolongé.'
    ]
  },
  {
    id: 'has-10',
    theme: 'Soins palliatifs et fin de vie',
    chapter: 'ch17',
    objectif: 'Assurer une prise en charge globale de la douleur, des symptômes et de l\'accompagnement en fin de vie.',
    recommandations: [
      'Intégrer une démarche palliative dès le diagnostic de maladie grave évolutive.',
      'Proposer directives anticipées et désignation d\'une personne de confiance (loi Claeys-Leonetti).',
      'Soulager symptômes réfractaires (douleur, dyspnée, anxiété) sans acharnement thérapeutique.',
      'Soutenir l\'aidant et coordonner ville-hôpital-EHPAD.'
    ]
  },
  {
    id: 'has-11',
    theme: 'Incontinence urinaire',
    chapter: 'ch15',
    objectif: 'Identifier le type d\'incontinence et proposer une prise en charge adaptée, non stigmatisante.',
    recommandations: [
      'Dépister l\'incontinence lors de chaque évaluation gériatrique.',
      'Classifier : effort, urgentielle, mixte, fonctionnelle ou par regorgement.',
      'Privilégier rééducation périnéale, rééducation vésicale et mesures comportementales.',
      'Limiter sondage permanent et anticholinergiques à mauvais ratio bénéfice/risque chez le sujet âgé.'
    ]
  },
  {
    id: 'has-12',
    theme: 'Évaluation de l\'autonomie',
    chapter: 'ch3',
    objectif: 'Mesurer l\'autonomie pour adapter aides, prévention et orientation sociale.',
    recommandations: [
      'Évaluer régulièrement avec la grille AGGIR pour le GIR et les AVD pour le suivi fonctionnel.',
      'Documenter les variations d\'autonomie après hospitalisation, chute ou épisode aigu.',
      'Proposer rééducation, aides techniques et aides humaines selon le niveau de dépendance.',
      'Orienter vers APA, MDPH ou structure médico-sociale si GIR 1–4.'
    ]
  },
  {
    id: 'has-13',
    theme: 'Troubles sensoriels (vue et audition)',
    chapter: 'ch5',
    objectif: 'Corriger les déficits sensoriels pour préserver autonomie, équilibre et qualité de vie.',
    recommandations: [
      'Dépister troubles visuels et auditifs lors de l\'EGS et avant rééducation à la marche.',
      'Prescrire correction optique à jour et dépistage DMLA/glaucome selon filière ophtalmologique.',
      'Proposer appareillage auditif si surdité compensable et vérifier son usage.',
      'Intégrer les déficits sensoriels dans le plan de prévention des chutes.'
    ]
  },
  {
    id: 'has-14',
    theme: 'Syndrome confusionnel (delirium)',
    chapter: 'ch11',
    objectif: 'Prévenir, dépister et traiter le syndrome confusionnel aigu chez la personne âgée hospitalisée.',
    recommandations: [
      'Dépister avec la CAM à l\'admission et en cas de modification du comportement.',
      'Rechercher cause somatique (infection, déshydratation, médicament, douleur, rétention).',
      'Mettre en place mesures non médicamenteuses : repères, lunettes/prothèses, hydratation, mobilisation.',
      'Éviter contention et benzodiazépines ; traiter la cause et la douleur en priorité.'
    ]
  },
  {
    id: 'has-15',
    theme: 'Conséquences de l\'alitement',
    chapter: 'ch13',
    objectif: 'Limiter les complications de l\'immobilisation prolongée chez le sujet âgé.',
    recommandations: [
      'Mobiliser dès que possible avec kinésithérapie respiratoire et musculaire.',
      'Prévenir thrombose, escarres, dénutrition et pneumopathie d\'inhalation.',
      'Assurer hydratation, transit, soins bucco-cutanés et prévention de la douleur.',
      'Planifier levée d\'alitement avec objectifs fonctionnels partagés avec l\'équipe soignante.'
    ]
  },
  {
    id: 'has-16',
    theme: 'Arthrose du sujet âgé',
    chapter: 'ch6',
    objectif: 'Soulager la douleur arthrosique et maintenir la mobilité sans iatrogénie.',
    recommandations: [
      'Confirmer le diagnostic clinique et limiter l\'imagerie si tableau typique.',
      'Combiner éducation thérapeutique, activité physique adaptée et perte de poids si surpoids.',
      'Paracétamol en première intention ; éviter AINS prolongés et opioïdes forts en première ligne.',
      'Envisager infiltration ou chirurgie (PTG, PTH) selon retentissement et comorbidités.'
    ]
  },
  {
    id: 'has-17',
    theme: 'Éthique et décision médicale partagée',
    chapter: 'ch17',
    objectif: 'Respecter l\'autonomie du patient âgé dans les décisions thérapeutiques complexes.',
    recommandations: [
      'Informer clairement sur bénéfices, risques et alternatives avec langage adapté.',
      'Rechercher volontés anticipées et personne de confiance avant décision majeure.',
      'Évaluer le rapport bénéfice/risque au regard de la qualité de vie et des comorbidités.',
      'Documenter le processus décisionnel et réviser les objectifs de soins si évolution clinique.'
    ]
  },
  {
    id: 'has-18',
    theme: 'Nutrition et hydratation du sujet âgé',
    chapter: 'ch14',
    objectif: 'Maintenir un apport nutritionnel et hydrique suffisant au domicile et en institution.',
    recommandations: [
      'Évaluer apports, déglutition, dentition et environnement des repas à chaque EGS.',
      'Adapter textures et enrichissement en protéines/énergie selon appétit et capacités.',
      'Surveiller déshydratation (confusion, chute, constipation) surtout en période de canicule.',
      'Coordonner diététicien, soins de support et aidants pour les repas.'
    ]
  },
  {
    id: 'has-19',
    theme: 'Hypertension artérielle chez le sujet âgé',
    chapter: 'ch7',
    objectif: 'Contrôler la pression artérielle en limitant les effets indésirables et les chutes.',
    recommandations: [
      'Mesurer PA assise et debout pour dépister hypotension orthostatique.',
      'Cibler une PA < 140/90 mmHg chez sujet autonome ; personnaliser si fragilité ou comorbidités.',
      'Privilégier IEC/ARA2 ou inhibiteur calcique ; éviter association excessive d\'antihypertenseurs.',
      'Réévaluer traitement après chute, déshydratation ou introduction de psychotropes.'
    ]
  },
  {
    id: 'has-20',
    theme: 'Diabète de type 2 chez le sujet âgé',
    chapter: 'ch7',
    objectif: 'Équilibrer le contrôle glycémique et la sécurité (hypoglycémies, qualité de vie).',
    recommandations: [
      'Personnaliser l\'objectif HbA1c selon espérance de vie, fragilité et risque hypoglycémique.',
      'Privilégier metformine si fonction rénale compatible ; éviter sulfamides chez sujet fragile.',
      'Surveiller hypoglycémies, pied diabétique, vision et fonction rénale.',
      'Éduquer patient et aidant sur signes d\'alerte et adaptation des traitements en cas d\'intercurrent.'
    ]
  },
  {
    id: 'has-21',
    theme: 'BPCO et insuffisance respiratoire chronique',
    chapter: 'ch4',
    objectif: 'Réduire dyspnée, exacerbations et dépendance chez le patient âgé BPCO.',
    recommandations: [
      'Confirmer diagnostic par spirométrie et évaluer sévérité, comorbidités et capacité d\'effort.',
      'Prescrire bronchodilatateurs adaptés, réhabilitation respiratoire et sevrage tabagique.',
      'Vacciner contre grippe et pneumocoque ; plan d\'action écrit pour exacerbation.',
      'Dépister insuffisance respiratoire chronique et indiquer oxygénothérapie longue durée si critères.'
    ]
  },
  {
    id: 'has-22',
    theme: 'Insuffisance cardiaque du sujet âgé',
    chapter: 'ch4',
    objectif: 'Optimiser le traitement de l\'insuffisance cardiaque et prévenir les réhospitalisations.',
    recommandations: [
      'Confirmer FEVG et phénotype (FE réduite, intermédiaire, préservée) pour stratégie thérapeutique.',
      'Associer IEC/ARA2, bêtabloquants, diurétiques et traitements de fond selon recommandations actuelles.',
      'Surveiller congestion, fonction rénale, hypotension et interactions médicamenteuses.',
      'Éduquer sur poids quotidien, restriction sodée et signes d\'alerte ; coordonner ville-hôpital.'
    ]
  },
  {
    id: 'has-23',
    theme: 'Évaluation gériatrique standardisée (EGS)',
    chapter: 'ch1',
    objectif: 'Identifier en une consultation les domaines à risque pour construire un plan de soins intégré.',
    recommandations: [
      'Réaliser EGS en cas de fragilité, hospitalisation récente, polymorbidité ou perte d\'autonomie.',
      'Couvrir cognition, humeur, nutrition, mobilité, chutes, continence, vision, audition, médicaments.',
      'Prioriser les problèmes selon retentissement fonctionnel et préférences du patient.',
      'Programmer réévaluation à 3–6 mois ou après événement aigu.'
    ]
  },
  {
    id: 'has-24',
    theme: 'Troubles du sommeil et du rythme veille-sommeil',
    chapter: 'ch11',
    objectif: 'Améliorer le sommeil sans recours systématique aux psychotropes chez le sujet âgé.',
    recommandations: [
      'Rechercher causes somatiques, douleur, syndrome d\'apnées, dépression ou iatrogénie.',
      'Privilégier hygiène du sommeil, lumière diurne, activité physique et limitation siestes longues.',
      'Limiter benzodiazépines et antihistaminiques sédatifs (risque chutes, confusion).',
      'Traiter la cause sous-jacente avant toute prescription hypnotique.'
    ]
  },
  {
    id: 'has-25',
    theme: 'Constipation chronique',
    chapter: 'ch14',
    objectif: 'Prévenir et traiter la constipation pour améliorer confort et autonomie.',
    recommandations: [
      'Rechercher médicaments constipants, déshydratation, immobilité et troubles neurologiques.',
      'Augmenter fibres, hydratation et activité physique si possible.',
      'Utiliser laxatifs osmotiques ou stimulants selon sévérité, avec surveillance électrolytique.',
      'Éviter usage chronique de lavements sans indication et rechercher cause organique si signes d\'alarme.'
    ]
  },
  {
    id: 'has-26',
    theme: 'Troubles de la déglutition et fausses routes',
    chapter: 'ch14',
    objectif: 'Réduire le risque de fausses routes et pneumopathies d\'inhalation.',
    recommandations: [
      'Dépister dysphagie si toux à l\'alimentation, pneumonies à répétition ou maladie neurologique.',
      'Demander avis orthophoniste pour évaluation clinique et adaptation des textures.',
      'Surveiller hydratation et état nutritionnel après modification des consistances.',
      'Réévaluer régulièrement la capacité de déglutition après AVC ou maladie neurodégénérative.'
    ]
  },
  {
    id: 'has-27',
    theme: 'Prévention des infections chez le sujet âgé',
    chapter: 'ch4',
    objectif: 'Diminuer la morbidité infectieuse par vaccination et mesures simples.',
    recommandations: [
      'Mettre à jour calendrier vaccinal : grippe annuelle, COVID-19, pneumocoque, zona selon âge.',
      'Vacciner contre diphtérie-tétanos-poliomyélite et selon exposition (hépatite B professionnelle).',
      'Prévenir infections urinaires par hydratation et limitation des sondages.',
      'Traiter rapidement infections pour éviter décompensation et syndrome confusionnel.'
    ]
  },
  {
    id: 'has-28',
    theme: 'Anémie du sujet âgé',
    chapter: 'ch4',
    objectif: 'Identifier la cause de l\'anémie et corriger les déficits modifiables.',
    recommandations: [
      'Ne pas attribuer l\'anémie à l\'âge sans bilan étiologique (NFS, ferritine, B12, folates, créatinine).',
      'Rechercher saignement digestif occulte, inflammation chronique, insuffisance rénale ou myélodysplasie.',
      'Supplémenter fer, B12 ou folates selon déficit documenté.',
      'Réévaluer tolérance à l\'effort et risque de chute après correction.'
    ]
  },
  {
    id: 'has-29',
    theme: 'Troubles de l\'équilibre et vertiges',
    chapter: 'ch12',
    objectif: 'Différencier vertige vrai, instability et peur de chuter pour traitement ciblé.',
    recommandations: [
      'Interroger sur contexte des vertiges, médicaments, hypotension orthostatique et pathologie vestibulaire.',
      'Réaliser examen otoneurologique et évaluation de la marche.',
      'Adapter traitement selon cause (rééducation vestibulaire, correction PA, révision médicamenteuse).',
      'Associer renforcement musculaire et suppression obstacles domestiques.'
    ]
  },
  {
    id: 'has-30',
    theme: 'Aidants et soutien psychosocial',
    chapter: 'ch17',
    objectif: 'Prévenir l\'épuisement de l\'aidant et sécuriser le maintien à domicile.',
    recommandations: [
      'Identifier l\'aidant principal et évaluer sa charge, santé et niveau de stress.',
      'Informer sur droits (APA, répit, associations) et coordonner avec travailleur social.',
      'Proposer répit régulier et plan d\'urgence en cas d\'hospitalisation du patient.',
      'Intégrer l\'aidant dans les décisions thérapeutiques dans le respect du patient.'
    ]
  },
  {
    id: 'has-31',
    theme: 'Troubles comportementaux dans la démence',
    chapter: 'ch9',
    objectif: 'Gérer agitation et troubles du comportement en privilégiant approches non médicamenteuses.',
    recommandations: [
      'Rechercher facteurs déclenchants : douleur, infection, environnement, privation sensorielle.',
      'Mettre en place mesures comportementales et adaptation de l\'environnement.',
      'Limiter antipsychotiques (risque AVC, sédation, mortalité) aux situations sévères et brèves.',
      'Coordonner avec équipe gériatrique ou psychiatrie liaison si persistance.'
    ]
  },
  {
    id: 'has-32',
    theme: 'Prévention du risque suicidaire',
    chapter: 'ch10',
    objectif: 'Repérer et prendre en charge le risque suicidaire, particulièrement chez l\'homme âgé.',
    recommandations: [
      'Dépister dépression, deuil, isolement, douleur chronique et antécédents suicidaires.',
      'Évaluer explicitement l\'idéation suicidaire lors de tout contexte à risque.',
      'Mettre en place plan de sécurité, contacts d\'urgence et suivi rapproché.',
      'Limiter accès aux moyens létaux et impliquer entourage avec consentement du patient.'
    ]
  },
  {
    id: 'has-33',
    theme: 'Canicule et personnes âgées',
    chapter: 'ch1',
    objectif: 'Prévenir déshydratation, hyperthermie et décompensation lors des épisodes de forte chaleur.',
    recommandations: [
      'Identifier sujets à très haut risque : dépendance, pathologies cardiaques/rénales, traitements diurétiques.',
      'Assurer hydratation régulière, pièce fraîche et surveillance des signes d\'alerte.',
      'Adapter traitements (diurétiques, neuroleptiques) selon recommandations saisonnières.',
      'Coordonner avec aidants et services sociaux pour visites de contrôle.'
    ]
  },
  {
    id: 'has-34',
    theme: 'Transitions de soins (ville–hôpital–EHPAD)',
    chapter: 'ch16',
    objectif: 'Sécuriser les transitions pour éviter réadmissions, erreurs médicamenteuses et perte d\'autonomie.',
    recommandations: [
      'Établir lettre de liaison et ordonnance de sortie compréhensibles pour le médecin traitant.',
      'Réconcilier les traitements à chaque entrée et sortie d\'hospitalisation.',
      'Planifier consultations et soins à domicile dans les 7 jours post-sortie si risque élevé.',
      'Transmettre synthèse EGS et objectifs de rééducation à la structure d\'accueil.'
    ]
  },
  {
    id: 'has-35',
    theme: 'Prévention de la perte d\'autonomie (maintien à domicile)',
    chapter: 'ch3',
    objectif: 'Retarder l\'entrée en institution par prévention ciblée et coordination des professionnels.',
    recommandations: [
      'Proposer programme d\'activité physique et stimulation cognitive adaptés au profil.',
      'Installer aides techniques, aménagement du domicile et téléassistance si besoin.',
      'Coordonner médecin traitant, IDE, kinésithérapeute, ergothérapeute et services sociaux.',
      'Réévaluer le projet de vie et les aides toutes les 6 mois ou après événement dégradant.'
    ]
  },
  {
    id: 'has-36',
    theme: 'Troubles sexuels et intimité du sujet âgé',
    chapter: 'ch10',
    objectif: 'Prendre en compte la sexualité et l\'intimité dans une approche globale de santé.',
    recommandations: [
      'Aborder le sujet avec respect si le patient l\'évoque ou en contexte de pathologie impactante.',
      'Rechercher causes médicamenteuses, hormonales, dépressives ou relationnelles.',
      'Adapter conseils et traitements au contexte médical (cardiopathie, démence, institution).',
      'Garantir confidentialité et consentement dans les structures médico-sociales.'
    ]
  }
];