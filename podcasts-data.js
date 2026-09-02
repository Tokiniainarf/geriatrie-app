/* ===============================================================
   PODCASTS_DATA — 28 Masterclasses & Podcasts Audio EVC Gériatrie
   Issus du Studio Gemini Notebook & Référentiel National CNEG / SFGG
   =============================================================== */

const PODCASTS_DATA = [
  {
    id: "pod-01",
    title: "Prescrire des psychotropes au cerveau vieillissant",
    audioFilename: "Le_paradoxe_mortel_des_médicaments_pour_seniors.m4a",
    duration: "20:48",
    durationSec: 1248,
    category: "pharmacology",
    categoryLabel: "💊 Pharmacologie",
    chapter: "ch16",
    chapterTitle: "Prescription médicamenteuse appropriée",
    tags: ["Psychotropes", "Benzodiazépines", "Neuroleptiques", "Iatrogénie", "Rein"],
    summary: "Règles d'or de la prescription chez le sujet âgé : modifications pharmacocinétiques (baisse du DFG, clairance hépatique), cascades iatrogènes, pièges des benzodiazépines et gestion sécurisée des antidépresseurs et antipsychotiques atypiques.",
    keyPoints: [
      "Start Low, Go Slow : débuter à 1/3 ou 1/2 de la posologie adulte.",
      "Éviter absolument les benzodiazépines à demi-vie longue (Diazépam, Bromazépam).",
      "Évaluer la clairance rénale selon Cockcroft-Gault avant toute titration.",
      "Privilégier la déprescription active dès stabilisation clinique."
    ]
  },
  {
    id: "pod-02",
    title: "Soigner les seniors sans les briser : la bientraitance active",
    audioFilename: "Soigner_les_seniors_sans_les_briser.m4a",
    duration: "19:48",
    durationSec: 1188,
    category: "ethics",
    categoryLabel: "⚖️ Éthique & Bientraitance",
    chapter: "ch4",
    chapterTitle: "Éthique, bientraitance et fin de vie",
    tags: ["Bientraitance", "Contention", "Éthique", "Liberté d'aller et venir", "EHPAD"],
    summary: "Comprendre et appliquer la démarche de bientraitance en milieu hospitalier et médico-social. Cadre légal et déontologique de la contention physique passive, conciliation entre sécurité et liberté d'aller et venir.",
    keyPoints: [
      "La contention passive est un acte médical exceptionnel : prescription écrite de 24h max.",
      "Surveillance horaire obligatoire et recherche quotidienne d'alternatives douces.",
      "Prévention de l'immobilisation forcée et de la perte d'autonomie induite.",
      "Prise en compte des volontés du patient et désignation de la personne de confiance."
    ]
  },
  {
    id: "pod-03",
    title: "Quand l'hôpital rend les seniors dépendants (Dépendance iatrogène)",
    audioFilename: "Quand_l_hôpital_rend_les_seniors_dépendants.m4a",
    duration: "23:53",
    durationSec: 1433,
    category: "mobility",
    categoryLabel: "🦴 Mobilité & Autonomie",
    chapter: "ch13",
    chapterTitle: "Alitement et immobilisation",
    tags: ["Alitement", "Dépendance iatrogène", "Escarres", "Kinésithérapie précoce", "HAS"],
    summary: "Décryptage de la dépendance iatrogène hospitalière selon la HAS : la cascade du déconditionnement moteur, la dénutrition accélérée par le jeûne péri-opératoire et la stratégie du lever précoce en service aigu.",
    keyPoints: [
      "40% des personnes âgées hospitalisées perdent au moins 1 point d'ADL sans rapport avec le motif d'admission.",
      "Lever au fauteuil dès les premières 24h et kinésithérapie précoce.",
      "Éviction des sondes urinaires et perfusions inutiles qui entravent la marche.",
      "Organisation d'un environnement capacitant (chaussures fermées, lunettes, appareils auditifs)."
    ]
  },
  {
    id: "pod-04",
    title: "L'insuffisance cardiaque : ce caméléon gériatrique & Protocole Hanon",
    audioFilename: "L_insuffisance_cardiaque_ce_caméléon_gériatrique.m4a",
    duration: "16:09",
    durationSec: 969,
    category: "cardio",
    categoryLabel: "🫀 Cardio-Gériatrie",
    chapter: "ch16",
    chapterTitle: "Insuffisance cardiaque du sujet âgé",
    tags: ["Insuffisance cardiaque", "Hanon", "4 fantastiques", "HFpEF", "Titration"],
    summary: "Guide pratique de la cardiogériatrie moderne : HFpEF vs HFrEF, pièges de la sémiologie fruste (confusion, asthénie isolée), mise en place des 4 piliers thérapeutiques et application stricte des 4 feux rouges du Pr Hanon.",
    keyPoints: [
      "4 Fantastiques : ARNi/IEC + Bêtabloquant + ARM + inhibiteur SGLT2.",
      "Titration par paliers de 2 à 4 semaines avec contrôle créatininémie et kaliémie à J7-J14.",
      "4 feux rouges : PAS < 90 mmHg, FC < 50 bpm, K+ > 5.5 mmol/L, Créatinine +30-50%.",
      "Proscrire les régimes sans sel stricts responsables d'anorexie et d'IRA fonctionnelle."
    ]
  },
  {
    id: "pod-05",
    title: "Quinze secondes pour éviter la chute : dépistage et syndrome post-chute",
    audioFilename: "Quinze_secondes_pour_éviter_la_chute.m4a",
    duration: "22:41",
    durationSec: 1361,
    category: "mobility",
    categoryLabel: "🦴 Mobilité & Autonomie",
    chapter: "ch12",
    chapterTitle: "Chutes et troubles de la marche",
    tags: ["Chutes", "TUG", "Syndrome post-chute", "Station unipodale", "Rhabdomyolyse"],
    summary: "Analyse multifactorielle de la chute chez le senior : tests moteurs rapides (Timed Up and Go > 20s, station unipodale < 5s), bilan étiologique immédiat, repérage de la rhabdomyolyse et prise en charge d'urgence du syndrome post-chute.",
    keyPoints: [
      "Le syndrome post-chute est une urgence gériatrique : désadaptation posturale, rétropulsion et anxiété majeure.",
      "Relever précoce et rééducation motrice d'urgence pour éviter l'alitement définitif.",
      "Recherche systématique des facteurs médicamenteux hypotenseurs et sédatifs.",
      "Dosage des CPK et fonction rénale si séjour prolongé au sol (> 1 heure)."
    ]
  },
  {
    id: "pod-06",
    title: "Pourquoi le corps âgé nous trompe : sémiologie gériatrique atypique",
    audioFilename: "Pourquoi_le_corps_âgé_nous_trompe.m4a",
    duration: "15:21",
    durationSec: 921,
    category: "general",
    categoryLabel: "🩺 Général & EGS",
    chapter: "ch1",
    chapterTitle: "Comprendre le vieillissement",
    tags: ["Sémiologie atypique", "Bouchon", "Infection apyrétique", "Infarctus silencieux"],
    summary: "Les pièges sémiologiques du grand âge : absence de fièvre dans les pneumopathies et pyélonéphrites, ischémie myocardique indolore révélée par un malaise ou une confusion, et défaillance d'organe en cascade.",
    keyPoints: [
      "Le premier signe d'une infection somatique chez le vieillard est souvent un syndrome confusionnel ou une chute.",
      "Diminution de la réponse fébrile : considérer 37.8°C ou une baisse de 1.5°C par rapport au niveau de base comme suspect.",
      "Toujours vérifier les constantes complètes (SpO2, glycémie capillaire, ECG, bandelette urinaire)."
    ]
  },
  {
    id: "pod-07",
    title: "Pourquoi vieillir n'est pas une maladie : biologie et réserve homéostatique",
    audioFilename: "Pourquoi_vieillir_n_est_pas_une_maladie (1).m4a",
    duration: "15:51",
    durationSec: 951,
    category: "general",
    categoryLabel: "🩺 Général & EGS",
    chapter: "ch1",
    chapterTitle: "Biologie du vieillissement",
    tags: ["Homéostasie", "Fragilité", "Réserve fonctionnelle", "Sénescence"],
    summary: "Les mécanismes moléculaires et physiologiques du vieillissement normal : diminution de la réserve fonctionnelle organique, stress oxydatif, sénescence cellulaire et distinction cruciale entre vieillissement réussi, fragile et dépendant.",
    keyPoints: [
      "Le vieillissement est un processus universel mais hétérogène et non pathologique en soi.",
      "La réserve homéostatique diminue : un stress mineur peut faire basculer l'équilibre.",
      "L'activité physique et la nutrition adaptée sont les leviers majeurs prouvés de préservation."
    ]
  },
  {
    id: "pod-08",
    title: "Dénutrition gériatrique : les nouveaux critères HAS 2021 et pièges du SRI",
    audioFilename: "Dénutrition_et_sarcopénie_du_sujet_âgé.m4a",
    duration: "18:15",
    durationSec: 1095,
    category: "nutrition",
    categoryLabel: "🥗 Nutrition & Métabolisme",
    chapter: "ch14",
    chapterTitle: "Dénutrition et troubles nutritionnels",
    tags: ["Dénutrition", "HAS 2021", "IMC", "Albumine", "SRI", "Vitamine B1"],
    summary: "Maîtriser les critères actualisés de la HAS pour le diagnostic de la dénutrition chez les plus de 70 ans : seuils IMC < 22, albuminémie, dépistage de la sarcopénie et protocole de prévention du Syndrome de Renutrition Inappropriée (SRI).",
    keyPoints: [
      "Dénutrition standard : Perte de poids ≥ 5% en 1 mois / ≥ 10% en 6 mois, ou IMC < 22 kg/m².",
      "Dénutrition sévère : Perte de poids ≥ 10% en 1 mois, IMC < 20 kg/m², ou Albuminémie < 30 g/L.",
      "Apports cibles : 35-40 kcal/kg/j et 1.2-1.5 g de protéines/kg/j.",
      "Prévention du SRI : surveillance phosphore/potassium + recharge préalable en Vitamine B1."
    ]
  },
  {
    id: "pod-09",
    title: "Lécanémab : espoir thérapeutique et vigilance absolue sur les ARIA (SFGG 2025)",
    audioFilename: "Les_mécanismes_des_troubles_neurocognitifs_majeurs.m4a",
    duration: "17:40",
    durationSec: 1060,
    category: "neuro",
    categoryLabel: "🧠 Neuro-Gériatrie",
    chapter: "ch9",
    chapterTitle: "Troubles neurocognitifs majeurs",
    tags: ["Lécanémab", "Alzheimer", "ARIA-E", "ARIA-H", "ApoE4", "IRM", "SFGG"],
    summary: "Recommandations officielles des centres mémoire français pour la prescription sécurisée du Lécanémab : sélection des patients MCI/Alzheimer léger (MMSE ≥ 22-24), biomarqueurs confirmés, contre-indications strictes (anticoagulants, homozygotes ApoE4) et protocole de surveillance IRM.",
    keyPoints: [
      "ARIA-E (œdème vasogénique en FLAIR) et ARIA-H (microhémorragies en T2*/SWI).",
      "Contre-indication absolue sous traitement anticoagulant curatif ou en présence de > 4 microbleeds.",
      "Calendrier IRM obligatoire avant inclusion, puis avant les 5e, 7e et 14e perfusions.",
      "Arrêt immédiat du traitement dès l'apparition de céphalées ou troubles visuels évocateurs d'ARIA."
    ]
  },
  {
    id: "pod-10",
    title: "Syndrome confusionnel : l'urgence somatique et l'outil CAM",
    audioFilename: "L_urgence_vitale_du_syndrome_confusionnel_gériatrique.m4a",
    duration: "21:10",
    durationSec: 1270,
    category: "neuro",
    categoryLabel: "🧠 Neuro-Gériatrie",
    chapter: "ch11",
    chapterTitle: "Syndrome confusionnel",
    tags: ["Confusion", "CAM", "Globe", "Fécalome", "Benzodiazépines", "Urgence"],
    summary: "Démarche diagnostique et thérapeutique devant un délirium chez le sujet âgé : score CAM en 4 points, élimination systématique des 5 urgences somatiques courantes (globe, fécalome, douleur, hypoxie, infection) et proscription des neuroleptiques et BZD en première intention.",
    keyPoints: [
      "Critères CAM : Début aigu et fluctuant + Inattention + (Pensée désorganisée OU Vigilance altérée).",
      "Toucher rectal et palpation vésicale / bladder-scan systématiques.",
      "Éviction formelle des benzodiazépines qui aggravent la confusion et induisent un délire paradoxal.",
      "Mesures non médicamenteuses prioritaires : présence rassurante, réorientation spatio-temporelle, chambre calme."
    ]
  },
  {
    id: "pod-11",
    title: "Incontinence urinaire gériatrique : les causes réversibles DIAPPERS",
    audioFilename: "L_incontinence_gériatrique_au-delà_des_couches.m4a",
    duration: "16:30",
    durationSec: 990,
    category: "general",
    categoryLabel: "🩺 Général & EGS",
    chapter: "ch15",
    chapterTitle: "Incontinence urinaire",
    tags: ["Incontinence", "DIAPPERS", "Globe urinaire", "Regorgement"],
    summary: "Approche méthodique des troubles vésico-sphinctériens aigus et chroniques : mnémonique DIAPPERS pour rechercher les causes réversibles, diagnostic du globe par regorgement et choix des traitements adaptés.",
    keyPoints: [
      "DIAPPERS : Delirium, Infection, Atrophie, Pharmacologie, Psychologie, Endocrino, Restriction mobilité, Selles (fécalome).",
      "Toujours éliminer une rétention aiguë avec miction par trop-plein avant tout traitement anticholinergique.",
      "Limiter au maximum le recours à la sonde à demeure (privilégier étuis péniens, garnitures adaptées)."
    ]
  },
  {
    id: "pod-12",
    title: "Ostéoporose et risque fracturaire : au-delà du T-score",
    audioFilename: "L_ostéoporose_gériatrique_et_ses_pièges_cliniques.m4a",
    duration: "19:05",
    durationSec: 1145,
    category: "mobility",
    categoryLabel: "🦴 Mobilité & Autonomie",
    chapter: "ch6",
    chapterTitle: "Ostéoporose et fractures",
    tags: ["Ostéoporose", "T-Score", "Fracture sévère", "Biphosphonates", "Vitamine D"],
    summary: "Prise en charge de la fragilité osseuse : distinction entre fractures sévères et non sévères, indication des traitements anti-ostéoporotiques (Bisphosphonates, Denosumab, Tériparatide) même en l'absence d'ostéodensitométrie chez le fracturé sévère.",
    keyPoints: [
      "Toute fracture par traumatisme de faible énergie chez le senior est une fracture ostéoporotique jusqu'à preuve du contraire.",
      "Fractures sévères (extrémité supérieure du fémur, vertèbres, humérus proximal, bassin) = traitement immédiat.",
      "Supplémentation systématique en Calcium et Vitamine D (cible 25-OH-D > 30 ng/mL).",
      "Bilan dentaire obligatoire avant instauration des bisphosphonates ou du denosumab."
    ]
  },
  {
    id: "pod-13",
    title: "Douleur du sujet âgé non communicant : l'échelle Algoplus",
    audioFilename: "Traquer_la_douleur_invisible_des_aînés.m4a",
    duration: "18:50",
    durationSec: 1130,
    category: "pharmacology",
    categoryLabel: "💊 Pharmacologie",
    chapter: "ch8",
    chapterTitle: "Évaluation et prise en charge de la douleur",
    tags: ["Douleur", "Algoplus", "ECPA", "Palier 1 2 3", "Non communicant"],
    summary: "Dépistage et traitement antalgique chez le patient atteint de troubles cognitifs sévères : 5 items comportementaux d'Algoplus (seuil ≥ 2/5), maniement sécurisé des morphiniques et proscription absolue des AINS systémiques.",
    keyPoints: [
      "Algoplus : Visage, Regard, Plaintes, Corps, Comportements (cotation en moins de 60 secondes).",
      "Seuil ≥ 2/5 = mise en place d'un traitement antalgique et réévaluation à 30-45 minutes.",
      "Morphine : initier à faible dose (ex. 2.5 à 5 mg équivalent per os) en associant systématiquement un laxatif osmotique.",
      "AINS systémiques contre-indiqués chez le sujet âgé (risque d'ulcère, hémorragie, IRA, poussée d'IC)."
    ]
  },
  {
    id: "pod-14",
    title: "STOPP-START et sécurisation médicamenteuse : éviter le piège des AVK",
    audioFilename: "Le_paradoxe_mortel_des_médicaments_pour_seniors.m4a",
    duration: "22:15",
    durationSec: 1335,
    category: "pharmacology",
    categoryLabel: "💊 Pharmacologie",
    chapter: "ch16",
    chapterTitle: "Prescription médicamenteuse et iatrogénie",
    tags: ["STOPP-START", "AVK", "AOD", "Surdosage", "Antidote"],
    summary: "Guide pratique de la réévaluation médicamenteuse : critères STOPP (prescriptions inappropriées) et START (omissions thérapeutiques), gestion des anticoagulants directs (AOD) vs AVK et algorithme d'urgence en cas de surdosage hémorragique.",
    keyPoints: [
      "Critères STOPP : arrêt des anticholinergiques, des BZD longues, des IPP prolongés sans indication.",
      "Critères START : introduction des anticoagulants dans la FA sans contre-indication, statines en prévention secondaire ciblée.",
      "Surdosage AVK asymptomatique : saut de prise + Vitamine K selon l'INR (seuil INR > 4.5 ou > 6).",
      "Hémorragie grave sous AVK : CCP (Complexe Prothrombinique) + Vitamine K 10 mg IV en urgence vitale."
    ]
  },
  {
    id: "pod-15",
    title: "Arthrose et Rhumatologie gériatrique : coxarthrose et gonarthrose",
    audioFilename: "Pièges_de_l_arthrose_gériatrique_aux_EVC.m4a",
    duration: "17:25",
    durationSec: 1045,
    category: "mobility",
    categoryLabel: "🦴 Mobilité & Autonomie",
    chapter: "ch7",
    chapterTitle: "Arthrose et pathologies articulaires",
    tags: ["Arthrose", "Coxarthrose", "Gonarthrose", "Infiltrations", "Kinésithérapie"],
    summary: "Prise en charge médicale et indications chirurgicales de l'arthrose chez le senior : traitement physique et postural, antalgiques locaux, infiltrations articulaires d'acide hyaluronique / corticoïdes et bilan préopératoire de pose de prothèse (PTH/PTG).",
    keyPoints: [
      "La radiographie standard suffit le plus souvent : pincement interligne, ostéophytes, ostéosclérose sous-chondrale.",
      "Activité physique adaptée et perte de poids prudente pour soulager les contraintes articulaires.",
      "L'âge chronologique n'est pas une contre-indication à la prothèse : décision basée sur le statut fonctionnel et l'EGS."
    ]
  },
  {
    id: "pod-16",
    title: "Dépression masquée et risque suicidaire : l'échelle RUD et GDS",
    audioFilename: "La_dépression_masquée_des_seniors.m4a",
    duration: "19:30",
    durationSec: 1170,
    category: "neuro",
    categoryLabel: "🧠 Neuro-Gériatrie",
    chapter: "ch10",
    chapterTitle: "Dépression du sujet âgé",
    tags: ["Dépression", "GDS", "Score RUD", "Suicide", "ISRS"],
    summary: "Repérer la dépression du sujet âgé derrière les plaintes somatiques : score GDS (Mini-GDS 4 items), évaluation du risque suicidaire par le score RUD (Risque, Urgence, Dangerosité) et choix d'un ISRS bien toléré (Sertraline, Escitalopram).",
    keyPoints: [
      "La dépression gériatrique est souvent atypique : régression psychomotrice, plaintes hypocondriaques, refus alimentaire.",
      "Le suicide chez les hommes de plus de 80 ans est le taux le plus élevé de toutes les tranches d'âge.",
      "Antidépresseurs : privilégier les ISRS à faible risque d'interactions et sans effet anticholinergique.",
      "Surveillance de la natrémie à J7-J14 (risque de SIADH et d'hyponatrémie sous ISRS)."
    ]
  },
  {
    id: "pod-17",
    title: "Troubles sensoriels : préserver la vision et l'audition pour sauver le cerveau",
    audioFilename: "Vision_audition_et_autonomie_en_gériatrie.m4a",
    duration: "16:45",
    durationSec: 1005,
    category: "general",
    categoryLabel: "🩺 Général & EGS",
    chapter: "ch5",
    chapterTitle: "Troubles sensoriels",
    tags: ["DMLA", "Glaucome", "Presbyacousie", "Déclin cognitif", "Isolement"],
    summary: "Le rôle pivot des déficits visuels (cataracte, DMLA, glaucome) et auditifs (presbyacousie) dans la genèse du déclin cognitif, des chutes et de l'isolement social : dépistage systématique et appareillage précoce.",
    keyPoints: [
      "La presbyacousie non appareillée double le risque de survenue d'un trouble neurocognitif majeur.",
      "Correction optique et lumineuse adaptée pour réduire de 30% le risque de chute domestique.",
      "Bilan sensoriel annuel indispensable dès 75 ans ou à l'entrée en EHPAD."
    ]
  },
  {
    id: "pod-18",
    title: "Éthique en fin de vie : proportionnalité des soins et directives anticipées",
    audioFilename: "L_éthique_médicale_selon_la_loi_Claeys-Leonetti.m4a",
    duration: "20:15",
    durationSec: 1215,
    category: "ethics",
    categoryLabel: "⚖️ Éthique & Bientraitance",
    chapter: "ch17",
    chapterTitle: "Soins palliatifs et fin de vie",
    tags: ["Soins palliatifs", "Loi Claeys-Leonetti", "Sédation profonde", "Obstination déraisonnable"],
    summary: "Application pratique de la loi Claeys-Leonetti en gériatrie : procédure collégiale, refus de l'obstination déraisonnable, recueil des directives anticipées, désignation de la personne de confiance et protocole de sédation profonde et continue.",
    keyPoints: [
      "L'obstination déraisonnable (acharnement thérapeutique) est proscrite par la loi.",
      "Procédure collégiale obligatoire pour toute décision d'arrêt ou de limitation des thérapeutiques actives.",
      "Les directives anticipées s'imposent au médecin sauf urgence vitale le temps de l'évaluation.",
      "Contrôle optimal de la détresse respiratoire (râles agoniques, dyspnée) et de la douleur."
    ]
  },
  {
    id: "pod-19",
    title: "Grille AGGIR et plan d'aide APA : évaluer pour autonomiser",
    audioFilename: "Quinze_secondes_pour_évaluer_votre_autonomie.m4a",
    duration: "18:40",
    durationSec: 1120,
    category: "mobility",
    categoryLabel: "🦴 Mobilité & Autonomie",
    chapter: "ch3",
    chapterTitle: "Évaluation de l'autonomie",
    tags: ["AGGIR", "GIR 1-6", "APA", "Aides à domicile", "Plan personnalisé"],
    summary: "Maîtriser l'évaluation médico-sociale : cotation des 10 variables discriminantes et 7 illustratives de la grille AGGIR, attribution des GIR 1 à 6, constitution du dossier d'Allocation Personnalisée d'Autonomie (APA) et plan d'aide à domicile.",
    keyPoints: [
      "GIR 1 à 4 : ouverture des droits au plan d'aide APA (domicile ou établissement).",
      "GIR 5 et 6 : autonomes pour les actes essentiels, éligibles aux aides des caisses de retraite.",
      "Évaluation globale incluant le fardeau de l'aidant (score de Zarit) et l'adaptation du logement."
    ]
  },
  {
    id: "pod-20",
    title: "Escarres de décubitus : de l'évaluation Braden aux pansements modernes",
    audioFilename: "Mouvement_et_nutrition_contre_les_escarres.m4a",
    duration: "17:55",
    durationSec: 1075,
    category: "mobility",
    categoryLabel: "🦴 Mobilité & Autonomie",
    chapter: "ch13",
    chapterTitle: "Escarres et décubitus",
    tags: ["Escarres", "Braden", "Norton", "Stades", "Hydrocellulaire", "Mobilisation"],
    summary: "Prévention et traitement des plaies de pression : échelle de Braden, identification des 4 stades anatomopathologiques, interdiction absolue des massages sur érythème de stade 1 et choix des pansements selon la phase de cicatrisation.",
    keyPoints: [
      "Stade 1 : érythème persistant ne blanchissant pas = alerte rouge, décharge immédiate, NE PAS MASSER.",
      "Changement de position toutes les 2 à 3 heures avec matelas dynamique à air motorisé.",
      "Nutrition hyperprotéique (≥ 1.5 g/kg/j) indispensable pour soutenir le bourgeonnement tissulaire.",
      "Pansements : hydrocellulaires en phase de détersion modérée, alginates si plaie très exsudative."
    ]
  },
  {
    id: "pod-21",
    title: "BPCO du patient âgé et antibiothérapie ciblée (Critères d'Anthonisen)",
    audioFilename: "L_alitement_est_une_urgence_gériatrique_absolue.m4a",
    duration: "19:10",
    durationSec: 1150,
    category: "cardio",
    categoryLabel: "🫀 Cardio-Gériatrie",
    chapter: "ch16",
    chapterTitle: "Pathologies respiratoires du sujet âgé",
    tags: ["BPCO", "Anthonisen", "SpO2 88-92%", "VNI", "Amoxicilline"],
    summary: "Prise en charge d'une décompensation respiratoire aiguë sur BPCO : évaluation de la gravité par les critères d'Anthonisen, cible d'oxygénothérapie restrictive (88-92%), antibiothérapie de première intention et indications de la VNI.",
    keyPoints: [
      "Anthonisen Stade 1 (Dyspnée accrue + Volume accru + Expectorations purulentes) = antibiothérapie d'emblée.",
      "Oxygénothérapie à bas débit (1-2 L/min) avec cible stricte SpO2 88-92% pour éviter la narcose hypercapnique.",
      "Corticothérapie systémique courte (5 jours max à 40 mg de Prednisone).",
      "VNI en pression positive (BiPAP) indiquée en première intention si pH < 7.35 et PaCO2 > 45 mmHg."
    ]
  },
  {
    id: "pod-22",
    title: "Fragilité selon Fried et filières de soins gériatriques (EGS)",
    audioFilename: "La_chute_n_est_jamais_banale.m4a",
    duration: "21:35",
    durationSec: 1295,
    category: "general",
    categoryLabel: "🩺 Général & EGS",
    chapter: "ch2",
    chapterTitle: "Évaluation Gériatrique Standardisée",
    tags: ["Fried", "Fragilité", "EGS", "Filière gériatrique", "Court séjour"],
    summary: "Le concept central de la médecine gériatrique moderne : les 5 critères de Fried (perte de poids, fatigue, force, vitesse, sédentarité), la démarche d'Évaluation Gériatrique Standardisée (EGS) et l'orientation optimale entre Court Séjour, SMR, USLD et EHPAD.",
    keyPoints: [
      "La fragilité est un état dynamique et réversible intermédiaire entre autonomie et dépendance.",
      "L'EGS est pluridisciplinaire : médecin, IDE, ergothérapeute, kiné, assistante sociale.",
      "Objectif thérapeutique : éviter l'hospitalisation non programmée et sécuriser le maintien à domicile."
    ]
  },
  {
    id: "pod-23",
    title: "Iatrogénie hospitalière et chutes aux urgences : la filière directe",
    audioFilename: "Quand_l_hôpital_aggrave_la_dépendance.m4a",
    duration: "20:00",
    durationSec: 1200,
    category: "general",
    categoryLabel: "🩺 Général & EGS",
    chapter: "ch2",
    chapterTitle: "Urgences gériatriques",
    tags: ["Urgences", "Filière directe", "Admission directe", "Iatrogénie"],
    summary: "Comment court-circuiter les urgences conventionnelles pour le sujet âgé polypathologique : mise en place des lignes d'admission directe en court séjour gériatrique, limitation du temps sur brancard et évaluation précoce du risque iatrogène.",
    keyPoints: [
      "Le passage aux urgences augmente de 30% le risque de confusion et d'escarre de décubitus.",
      "L'admission directe par appel du médecin traitant au gériatre réduit la durée moyenne de séjour.",
      "Revue médicamenteuse immédiate dès l'entrée en unité de soins."
    ]
  },
  {
    id: "pod-24",
    title: "Sarcopénie et activité physique adaptée : sauver le capital musculaire",
    audioFilename: "Dénutrition_et_sarcopénie_du_sujet_âgé.m4a",
    duration: "18:20",
    durationSec: 1100,
    category: "nutrition",
    categoryLabel: "🥗 Nutrition & Métabolisme",
    chapter: "ch14",
    chapterTitle: "Sarcopénie et masse musculaire",
    tags: ["Sarcopénie", "Dynamomètre", "Protéines", "Activité physique", "EWGSOP2"],
    summary: "Diagnostic et prise en charge de la sarcopénie selon le consensus EWGSOP2 : mesure de la force musculaire au dynamomètre, vitesse de marche, association synergique exercice de renforcement contre résistance + apports protéiques optimisés.",
    keyPoints: [
      "La sarcopénie est le substrat anatomique de la fragilité motrice et du risque de chute.",
      "La prescription d'exercices physiques contre résistance est le traitement le plus efficace.",
      "Apports protéiques fractionnés (au moins 25-30g de protéines par repas) pour stimuler l'anabolisme."
    ]
  },
  {
    id: "pod-25",
    title: "Troubles du comportement BPSD dans l'Alzheimer : stratégie non pharmacologique",
    audioFilename: "Maître_de_son_corps_malgré_la_tutelle.m4a",
    duration: "22:50",
    durationSec: 1370,
    category: "neuro",
    categoryLabel: "🧠 Neuro-Gériatrie",
    chapter: "ch9",
    chapterTitle: "Symptômes comportementaux et psychologiques",
    tags: ["BPSD", "SCPD", "Agitation", "Approches non médicamenteuses", "Alzheimer"],
    summary: "Gérer l'agitation, l'agressivité, les déambulations et les cris chez le patient dément : méthode DICE (Describe, Investigate, Create, Evaluate), recherche d'une douleur sous-jacente et techniques de désescalade relationnelle.",
    keyPoints: [
      "Tout changement comportemental brutal traduit une douleur physique ou un inconfort somatique non exprimé.",
      "Les neuroleptiques augmentent le risque de mortalité cardiovasculaire et d'AVC chez le dément.",
      "Approches non médicamenteuses prioritaires : validation relationnelle, musicothérapie, ateliers sensoriels Snoezelen."
    ]
  },
  {
    id: "pod-26",
    title: "Pneumopathies d'inhalation et dysphagie : adapter les textures",
    audioFilename: "Sédation_profonde_et_dignité_en_gériatrie.m4a",
    duration: "17:10",
    durationSec: 1030,
    category: "nutrition",
    categoryLabel: "🥗 Nutrition & Métabolisme",
    chapter: "ch14",
    chapterTitle: "Troubles de la déglutition",
    tags: ["Dysphagie", "Fausse route", "Pneumopathie d'inhalation", "Eau gélifiée", "Orthophonie"],
    summary: "Dépistage des troubles de la déglutition aux liquides et aux solides : test de déglutition à l'eau au lit du patient, adaptation des textures alimentaires (eau gélifiée, textures mixées lisses), posture à 90° et hygiène bucco-dentaire stricte.",
    keyPoints: [
      "La pneumopathie d'inhalation est une cause majeure de mortalité chez le patient neurocognitif.",
      "Ne jamais donner à boire ou à manger à un patient allongé à plat dos (position assise à 90° obligatoire).",
      "Épaississants et eau gélifiée pour sécuriser l'hydratation.",
      "L'hygiène bucco-dentaire réduit significativement la charge bactérienne inhalée."
    ]
  },
  {
    id: "pod-27",
    title: "Hypertension artérielle du grand âge : cibles et pièges de l'orthostatisme",
    audioFilename: "Les_pièges_du_diagnostic_en_gériatrie.m4a",
    duration: "18:05",
    durationSec: 1085,
    category: "cardio",
    categoryLabel: "🫀 Cardio-Gériatrie",
    chapter: "ch16",
    chapterTitle: "Hypertension artérielle gériatrique",
    tags: ["HTA", "Hypotension orthostatique", "Cibles tensionnelles", "Chutes", "SPRINT"],
    summary: "Définir les cibles tensionnelles adaptées chez le patient âgé : cibles PAS 130-139 mmHg si bien toléré, dépistage systématique de l'hypotension orthostatique (chute PAS ≥ 20 mmHg à 1-3 min de lever) et déprescription des antihypertenseurs chez le sujet très fragile.",
    keyPoints: [
      "Toujours mesurer la pression artérielle couchée puis debout à 1 et 3 minutes.",
      "Une hypotension orthostatique iatrogène double le risque de traumatisme crânien par chute.",
      "Privilégier les IEC/ARAII et inhibiteurs calciques à longue durée d'action.",
      "Chez le patient très dépendant ou dénutri, tolérer une PAS jusqu'à 150-160 mmHg pour préserver la perfusion cérébrale."
    ]
  },
  {
    id: "pod-28",
    title: "L'art de la synthèse clinique à l'EVC : réussir l'épreuve pratique",
    audioFilename: "Maîtriser_le_raisonnement_gériatrique_aux_EVC.m4a",
    duration: "24:15",
    durationSec: 1455,
    category: "general",
    categoryLabel: "🩺 Général & EGS",
    chapter: "ch2",
    chapterTitle: "Méthodologie EVC Gériatrie",
    tags: ["EVC", "Méthodologie", "Synthèse clinique", "Plan d'action", "Jury"],
    summary: "Guide méthodologique stratégique pour les candidats à l'EVC de Gériatrie et Médecine Générale : structure d'une présentation de cas clinique gériatrique, priorisation des problèmes actifs, projet de soins personnalisé et pièges à éviter face au jury.",
    keyPoints: [
      "Structurer son raisonnement selon le Modèle de Bouchon 1+2+3.",
      "Détailler le volet médical, fonctionnel (ADL/IADL), psycho-cognitif et social/aidants.",
      "Toujours proposer un plan d'action thérapeutique hiérarchisé à court, moyen et long terme.",
      "Montrer sa maîtrise des référentiels HAS/SFGG et de la bientraitance éthique."
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PODCASTS_DATA };
}
