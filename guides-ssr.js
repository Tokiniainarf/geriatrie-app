// Guides SSR — Pratique en service de soins de suite et rééducation
const GUIDES_SSR = [
  {
    id: 'ssr-1',
    titre: 'Admission en SSR : critères, dossier et évaluation initiale',
    categorie: 'Admission SSR',
    contenu: 'L\'admission en SSR (soins de suite et rééadaptation) fait suite à une hospitalisation aiguë lorsque le patient nécessite encore une prise en charge médicale et rééducative avant retour domicile ou entrée en EHPAD.\n\nCRITÈRES D\'ADMISSION (principes) :\n- Stabilisation médicale en médecine aiguë (pas de surveillance critique continue).\n- Besoin rééducatif identifiable : motricité, orthophonie, adaptation ADL, sevrage, nutrition.\n- Potentiel de récupération fonctionnelle réaliste (projet rééducatif).\n- Durée prévisible : classiquement 2 à 6 semaines (variable selon pathologie).\n\nMODALITÉS :\n- Demande d\'admission par le médecin de l\'établissement d\'origine (formulaire CERFA / plateforme régionale selon ARS).\n- Accord du médecin SSR après analyse du dossier.\n- Transfert par transport adapté (assis, brancard selon état).\n\nDOSSIER À TRANSMETTRE :\n- Synthèse hospitalière, comptes rendus opératoires, imagerie récente utile.\n- Traitements en cours, allergies, antécédents, vaccins.\n- Évaluations : ADL/IADL pré-admission, scores cognitifs si pertinent.\n- Directives anticipées, personne de confiance, projet de lieu de vie envisagé.\n- Ordonnances et carnets de suivi.\n\nÉVALUATION INITIALE SSR (72 h) :\n- Visite médicale SSR : reprise du motif, comorbidités, objectifs de sortie.\n- Bilan rééducatif pluridisciplinaire : kinésithérapeute, ergothérapeute, orthophoniste, psychologue, diététicien selon besoins.\n- Grilles : risque escarre, nutrition (MNA), douleur, chutes, dépression (GDS-15).\n- Rédaction du projet de soins rééducatif individualisé (PSRI) avec objectifs mesurables et date de réévaluation (souvent à 2 semaines).',
    points_cles: ['Stabilisation aiguë avant transfert', 'PSRI avec objectifs mesurables', 'DA et projet de sortie dès J1', 'Plateforme / accord médecin SSR']
  },
  {
    id: 'ssr-2',
    titre: 'Rééducation post-opératoire orthopédique (PTH, PTG, fracture)',
    categorie: 'Rééducation post-op',
    contenu: 'La SSR post-prothèse ou fracture du membre inférieur vise la reprise de la marche sécurisée, l\'autonomie des transferts et la prévention des complications.\n\nPHASE IMMÉDIATE (J0–J3 SSR) :\n- Antalgie multimodale (éviter surdosage opioïdes → confusion, constipation).\n- Prévention thromboembolique selon protocole.\n- Prévention delirium : orientation, lunettes/appareils, sommeil, hydratation.\n- Kinésithérapie précoce : mobilisation passive/active assistée, verticalisation progressive.\n- Ergothérapie : transferts lit/fauteuil/toilettes, techniques de protection de l\'opéré.\n\nRÉÉDUCATION À LA MARCHE :\n- Protocole selon chirurgien (appui total/partiel, décharges).\n- Aides techniques : déambulateur puis canne, hauteur adaptée.\n- Travail équilibre, montée d\'escaliers simulés si retour domicile avec étages.\n- Objectifs chiffrés : distance parcourue, TUG, autonomie habillage bas du corps.\n\nCOMPLICATIONS À SURVEILLER :\n- Infection site opératoire, hématome, luxation (PTH).\n- Escarre sacrée/talon, phlébite.\n- Décompensation cardiaque, anémie, dénutrition.\n\nSORTIE :\n- Critères : marche sécurisée avec aide technique prévue, transferts autonomes ou avec aide humaine organisée, douleur contrôlée, pas de complication active.\n- Prescription kiné domicile ou SSR prolongée selon plateau.',
    points_cles: ['Verticalisation précoce', 'Protocole appui chirurgical', 'Delirium et antalgie', 'TUG / distance marche objectifs']
  },
  {
    id: 'ssr-3',
    titre: 'Rééducation post-AVC en SSR',
    categorie: 'Rééducation post-AVC',
    contenu: 'Après AVC stabilisé en neurologie/vasculaire, la SSR coordonne récupération motrice, langage, cognition et autonomie.\n\nÉVALUATION INITIALE :\n- Score NIHSS résiduel, topographie déficit (hémiplégie, hémi-hypoesthésie).\n- Dysphagie : test clinique, avis orthophoniste, textures IDDSI avant oral.\n- Aphasie/dysarthrie : bilan orthophonique, communication alternative si besoin.\n- Cognition et négligence : MMS/MoCA, tests d\'attention.\n- Humeur : GDS-15 (post-AVC dépression fréquente).\n\nPRISES EN CHARGE :\n- Kinésithérapie : renforcement, équilibre, apprentissage marche, membre supérieur si potentiel.\n- Ergothérapie : ADL, compensation one-handed, aménagement domicile.\n- Orthophonie : rééducation langage, déglutition, communication.\n- Neuropsychologie si troubles attentionnels exécutifs impactant autonomie.\n\nPRÉVENTION SECONDARIE :\n- Contrôle TA, statine, anticoagulant/antiplaquettaire selon cardio-embolique.\n- Éducation patient/aidant (signes alerte, observance).\n\nOBJECTIFS DE SORTIE :\n- Dysphagie sécurisée ou nutrition alternative tracée.\n- Niveau d\'autonomie compatible avec lieu de vie (domicile aidé, EHPAD).\n- Aidant formé aux transferts si besoin.',
    points_cles: ['Dysphagie avant oral', 'Pluridisciplinaire motricité + langage', 'Dépression post-AVC', 'Prévention secondaire']
  },
  {
    id: 'ssr-4',
    titre: 'Rééducation post-fracture du membre supérieur et du rachis',
    categorie: 'Rééducation post-fracture',
    contenu: 'Fractures fréquentes en SSR : poignet (Pouteau-Colles), humérus proximal, fractures vertébrales ostéoporotiques, pelvis stable.\n\nMEMBRE SUPÉRIEUR :\n- Immobilisation selon orthopédiste (plâtre, orthèse, délai mobilisation).\n- Kinésithérapie : mobilisation précoce doigts/coude selon tolérance, prévention raideur.\n- Ergothérapie : techniques one-handed pour repas, toilette, habillage.\n- Ostéoporose : bilan et traitement si fracture fragilité.\n\nFRACTURES VERTÉBRALES :\n- Antalgie, orthèse éventuelle, pas de repos prolongé.\n- Renforcement paravertébral, éducation postures, prévention chutes.\n- Recherche cause (ostéoporose, myélome si tableau atypique).\n\nDOULEUR ET AUTONOMIE :\n- EVA régulière, adaptation analgésie chez sujet âgé (éviter excès opioïdes).\n- Maintenir déambulation si fracture membre inférieur non concerné.\n\nINDICATEURS :\n- Amplitude articulaire, force préhension, réalisation ADL ciblées (ex. : se coiffer, boutonner).',
    points_cles: ['Mobilisation précoce selon protocole', 'One-handed ergo pour MS', 'Ostéoporose post-fracture', 'Pas de repos prolongé rachis']
  },
  {
    id: 'ssr-5',
    titre: 'Transition de soins : liaison hôpital — SSR — ville',
    categorie: 'Transition soins',
    contenu: 'La transition vise la continuité thérapeutique et la sécurité du patient entre secteurs.\n\nÀ L\'ADMISSION SSR :\n- Réconciliation médicamenteuse : comparer ordonnance sortie aiguë et réalité du patient.\n- Reprise des traitements essentiels ; arrêt des prescriptions « courte durée aiguë » devenues inutiles.\n- Contact médecin traitant (courrier, téléphone) sous 48–72 h.\n\nPENDANT LE SÉJOUR :\n- Compte rendu d\'évolution hebdomadaire si séjour long ou pathologie complexe.\n- Anticipation sortie dès la semaine 2 : évaluation sociale (MDPH, aide domicile, EHPAD).\n- Protocole de soins infirmiers si plaie, anticoagulation, insulinothérapie.\n\nÀ LA SORTIE :\n- Ordonnance de sortie claire, durée limitée avec mention « à réévaluer par MT ».\n- Courrier SSR au traitant et spécialistes (résumé rééducation, recommandations kiné/orthophonie).\n- Rendez-vous médical de contrôle daté (< 7 j si possible).\n- Transmission aux IDE libérales ou SSIAD si soins à domicile.\n\nOUTILS :\n- Dossier pharmaceutique, carnet de liaison, fiche « alertes » (chutes, dysphagie, confusion).',
    points_cles: ['Réconciliation médicamenteuse', 'MT informé < 72 h', 'Ordonnance sortie + RDV contrôle', 'Évaluation sociale précoce']
  },
  {
    id: 'ssr-6',
    titre: 'Kinésithérapie en SSR : prescription et objectifs',
    categorie: 'Kinésithérapie',
    contenu: 'La kinésithérapie est au cœur de la SSR ; la prescription médicale précise le diagnostic fonctionnel et les objectifs.\n\nPRESCRIPTION TYPE :\n- Motif : post-PTH gauche, déconditionnement post-pneumonie, hémiplégie droite post-AVC, etc.\n- Objectifs : verticalisation, marche 50 m avec déambulateur, renforcement quadriceps, drainage bronchique.\n- Fréquence : souvent 1–2 séances/j ouvré selon intensité (forfait SSR régional).\n\nCONTENU DES SÉANCES :\n- Rééducation à la marche et équilibre (Tinetti, TUG en fin de séjour).\n- Renforcement musculaire progressif, étirements.\n- Respiratoire : toux assistée, aérosol si prescrit, entraînement à l\'effort.\n- Douleur : respecter seuil, glace/chaleur selon protocole.\n\nSUIVI :\n- Compte rendu kiné au médecin SSR (plateau, blocages).\n- Adaptation si fatigue, fièvre, douleur aiguë, décompensation cardiaque.\n- Préparation sevrage aide technique ou prescription matériel (LAM, canne).',
    points_cles: ['Prescription médicale motivée', 'Objectifs fonctionnels chiffrés', 'TUG / marche en indicateurs', 'CR kiné au médecin SSR']
  },
  {
    id: 'ssr-7',
    titre: 'Ergothérapie en SSR : autonomie et aménagement',
    categorie: 'Ergothérapie',
    contenu: 'L\'ergothérapie évalue et restaure la capacité à réaliser les activités de la vie quotidienne (AVQ/ADL) et prépare le retour à domicile.\n\nÉVALUATION :\n- Observation des gestes : toilette, habillage, repas, transferts sanitaires.\n- Bilan cognitif fonctionnel si besoin (sécurité cuisinière, médicaments).\n- Visite domicile simulée ou réelle si retour envisagé (barriers, salle de bain).\n\nINTERVENTIONS :\n- Apprentissage compensations (membre valide, aides techniques).\n- Prescription : chaises de douche, rehausseurs WC, pinces, déambulateur.\n- Entraînement cuisine sécurisée, préparation médicaments (pilulier).\n- Éducation aidant : techniques transferts sans lombalgie.\n\nINDICATEURS :\n- Scores ADL avant/après, temps pour habillage, niveau d\'aide humaine nécessaire.\n- Recommandations écrites pour MDPH ou aide à domicile (heures ménage/TOILETTE).',
    points_cles: ['ADL observés en situation', 'Aides techniques prescrites', 'Visite domicile si retour', 'Formation aidant']
  },
  {
    id: 'ssr-8',
    titre: 'Diététique et nutrition en SSR',
    categorie: 'Diététique',
    contenu: 'La dénutrition post-aiguë est fréquente ; la diététique SSR vise la couverture des besoins et la sécurité des prises alimentaires.\n\nDÉPISTAGE :\n- MNA à l\'admission, poids bi-hebdomadaire, apports observés.\n- Dysphagie : collaboration orthophoniste, textures IDDSI affichées.\n\nSTRATÉGIES :\n- Enrichissement énergétique et protéique (30 kcal/kg/j, 1,2 g protéines/kg/j si dénutri).\n- Fractionnement des repas, collations hyperprotéinées (CNO).\n- Supplémentation orale entre repas si déficit persistant.\n- Hydratation : 1,5 L/j si pas restriction cardiaque/rénale.\n\nCAS PARTICULIERS :\n- Diabète : pas de restriction excessive chez dénutri (équilibre glycémique + apports).\n- IRC : adapter protéines et potassium selon néphrologue.\n- Nutrition entérale si dysphagie prolongée : décision collégiale, durée et objectifs.\n\nSORTIE :\n- Prescription CNO si besoin, consignes texture, suivi poids par traitant.',
    points_cles: ['MNA admission + poids', 'Protéines et calories cibles', 'IDDSI + orthophonie', 'CNO si déficit persistant']
  },
  {
    id: 'ssr-9',
    titre: 'Psychologie et soutien psycho-social en SSR',
    categorie: 'Psychologie',
    contenu: 'Le séjour SSR survient souvent après un événement brutal (AVC, chirurgie, perte d\'autonomie) ; la dimension psychologique influence la rééducation.\n\nINDICATIONS :\n- Dépression (GDS-15 ≥ 5), anxiété, troubles du sommeil.\n- Deuil du corps « d\'avant », peur de rechute/chute.\n- Troubles cognitifs légers impactant motivation ou compréhension consignes.\n- Conflits familiaux sur projet de sortie (domicile vs EHPAD).\n\nINTERVENTIONS :\n- Entretiens individuels, psychoéducation sur maladie et récupération attendue.\n- Techniques relaxation, gestion douleur et anxiété.\n- Soutien aidant (burn-out, culpabilité).\n- Liaison psychiatre si dépression majeure, idées suicidaires, psychose.\n\nLIEN AVEC RÉÉDUCATION :\n- Humeur et cognition modulent participation aux séances ; adapter horaires, durée.\n- Signalement équipe si refus de soins répété (cause psychique vs médicale).\n\nCONFIDENTIALITÉ et consentement pour partage d\'informations avec équipe.',
    points_cles: ['GDS-15 à l\'admission', 'Motivation et rééducation liées', 'Soutien aidant', 'Liaison psychiatre si sévérité']
  },
  {
    id: 'ssr-10',
    titre: 'Sortie SSR : critères, orientation et suivi',
    categorie: 'Sortie SSR',
    contenu: 'La sortie est une étape médicale : elle suppose stabilité clinique et projet de soins viable dans le lieu suivant.\n\nCRITÈRES DE SORTIE MÉDICALE :\n- Stabilité pathologie ayant motivé l\'admission (pas de décompensation active).\n- Objectifs rééducatifs atteints ou plateau documenté (pas d\'amélioration attendue en SSR).\n- Douleur et autres symptômes contrôlés ou prise en charge transférable.\n- Dysphagie sécurisée ou nutrition artificielle organisée à domicile si indiquée.\n\nORIENTATIONS :\n- Domicile : avec ou sans aide (SSIAD, IDE, kiné libéral, téléalarme, portage repas).\n- EHPAD : si dépendance durable et impossibilité maintien domicile ; dossier en cours avant sortie.\n- Nouvelle hospitalisation si complication.\n- SSR autre établissement rare (transfert spécialisé).\n\nDOCUMENTS DE SORTIE :\n- Courrier détaillé au médecin traitant, synthèse rééducation, traitements, examens à faire.\n- Ordonnances (kiné, orthophonie, matériel).\n- Fiche transmission aux structures d\'accueil (EHPAD, HAD).\n\nSUIVI :\n- Consultation contrôle 7–15 j ; réévaluation autonomie à 1–3 mois.',
    points_cles: ['Plateau ou objectifs atteints', 'Projet domicile/EHPAD anticipé', 'Courrier traitant complet', 'Kiné / orthophonie ordonnancés']
  }
];