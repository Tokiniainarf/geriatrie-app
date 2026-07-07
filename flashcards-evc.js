/* ===============================================================
   EVC_FLASHCARDS - 200 flashcards format vignette clinique EVC
   Chapitres : ch9 (Confusion), ch10 (Demences), ch11 (Chutes),
               ch14 (Denutrition), ch16 (Iatrogenie)
   40 cartes par chapitre - Questions type EVC avec vignette clinique
   Sources : College Geriatrie 5e ed. + NotebookLM + Referentiels EVC
   =============================================================== */

const EVC_FLASHCARDS = [
  {
    id: 9001,
    chapter: "ch9",
    rang: "A",
    question: "Homme 84 ans, opéré d'une PTH hier. Cette nuit : agitation, désorientation temporo-spatiale, propos incohérents, endormi dans la journée. Quel est le diagnostic ?",
    answer: "Syndrome confusionnel post-opératoire (delirium). Caractérisé par : début brutal, fluctuation sur 24h, trouble de l'attention, désorientation, inversion du rythme veille-sommeil.",
    tags: ["confusion", "post-op", "delirium"]
  },

    {
    id: 9002,
    chapter: "ch9",
    rang: "A",
    question: "Quel outil validé utilise-t-on pour dépister un delirium en service de soins aigus ?",
    answer: "CAM (Confusion Assessment Method). Positif si : 1) début brutal + fluctuation ET 2) trouble de l'attention ET 3) pensée désorganisée OU 4) altération de la conscience.",
    tags: ["CAM", "dépistage", "delirium"]
  },

    {
    id: 9003,
    chapter: "ch9",
    rang: "A",
    question: "Femme 79 ans, ATCD de démence légère, hospitalisée pour pneumonie. Elle devient confuse. Quelle est la 1ère étape de la prise en charge ?",
    answer: "Recherche et traitement de la CAUSE : bilan infectieux (NFS, CRP, ECBU, hémocultures, Rx thorax), ionogramme (natrémie, calcémie, glycémie), bilan médicamenteux (iatrogénie), éliminer une rétention urinaire ou fécalome.",
    tags: ["confusion", "cause", "bilan"]
  },

    {
    id: 9004,
    chapter: "ch9",
    rang: "A",
    question: "Quelles sont les 4 grandes familles de causes d'un syndrome confusionnel chez le sujet âgé ?",
    answer: "1. Infectieuses (pneumonie, IU, sepsis). 2. Métaboliques (hyponatrémie, hypoglycémie, hypercalcémie, IRA). 3. Iatrogènes (BZD, anticholinergiques, opiacés). 4. Neurologiques (AVC, épilepsie, hématome sous-dural).",
    tags: ["confusion", "causes", "étiologies"]
  },

    {
    id: 9005,
    chapter: "ch9",
    rang: "A",
    question: "Homme 82 ans confus, agité, s'arrache la voie veineuse. Quelle est la mesure NON MÉDICAMENTEUSE prioritaire ?",
    answer: "Réorientation répétée (nom, lieu, date), présence rassurante d'un proche, environnement calme et éclairé, éviter les contentions physiques, maintenir les lunettes et prothèse auditive, favoriser la mobilisation précoce.",
    tags: ["confusion", "non-médicamenteux", "soins"]
  },

    {
    id: 9006,
    chapter: "ch9",
    rang: "B",
    question: "Un patient confus est très agité et met en danger sa sécurité. Quel médicament peut-on utiliser en 1ère intention et à quelle dose ?",
    answer: "Halopéridol (Haldol) PO ou IM : 0,5 à 1 mg, à renouveler si nécessaire. Dose minimale efficace. Contre-indiqué dans la démence à corps de Lewy (risque de rigidité sévère).",
    tags: ["halopéridol", "traitement", "agitation"]
  },

    {
    id: 9007,
    chapter: "ch9",
    rang: "A",
    question: "Pourquoi les benzodiazépines sont-elles contre-indiquées dans le traitement du delirium, sauf exception ?",
    answer: "Elles aggravent la confusion, augmentent le risque de chute, allongent la durée du delirium et peuvent induire un effet paradoxal. Exception : sevrage alcoolique ou aux benzodiazépines.",
    tags: ["BZD", "contre-indication", "confusion"]
  },

    {
    id: 9008,
    chapter: "ch9",
    rang: "A",
    question: "Femme 88 ans, confusion post-opératoire, ATCD de démence à corps de Lewy. Quel neuroleptique est formellement contre-indiqué ?",
    answer: "Tous les neuroleptiques (typiques et atypiques) sont contre-indiqués dans la démence à corps de Lewy : risque de syndrome malin et rigidité sévère potentiellement fatale.",
    tags: ["corps de Lewy", "neuroleptiques", "contre-indication"]
  },

    {
    id: 9009,
    chapter: "ch9",
    rang: "A",
    question: "Quelle est la différence clinique principale entre confusion et démence pour orienter le diagnostic ?",
    answer: "Confusion : début brutal (heures à jours), fluctuation rapide, trouble de l'attention au premier plan. Démence : début insidieux (mois à années), déclin progressif, trouble de la mémoire au premier plan, conscience préservée.",
    tags: ["confusion", "démence", "diagnostic différentiel"]
  },

    {
    id: 9010,
    chapter: "ch9",
    rang: "B",
    question: "Homme 76 ans, delirium hypoactif : somnolent, mutique, répond peu. Quel risque majeur justifie une surveillance étroite ?",
    answer: "Le delirium hypoactif est souvent sous-diagnostiqué et de moins bon pronostic. Risques : fausses routes (pneumonie d'inhalation), escarre, dénutrition, déshydratation, mortalité plus élevée à 6 mois.",
    tags: ["delirium hypoactif", "pronostic", "surveillance"]
  },

    {
    id: 9011,
    chapter: "ch9",
    rang: "A",
    question: "Homme 80 ans, confusion, natrémie à 118 mmol/L. Quelle est la vitesse maximale de correction autorisée ?",
    answer: "Correction maximale : +8 à +10 mmol/L par 24h (jamais plus de +12 mmol/L/24h) pour éviter la myélinolyse centropontine. Vitesse de correction : 0,5 mmol/L/h maximum.",
    tags: ["hyponatrémie", "correction", "myélinolyse"]
  },

    {
    id: 9012,
    chapter: "ch9",
    rang: "A",
    question: "Quelles sont les 3 formes cliniques du delirium ?",
    answer: "1. Hyperactif (agitation, hallucinations — le plus reconnu). 2. Hypoactif (somnolence, mutisme — le plus fréquent et le plus sous-diagnostiqué). 3. Mixte (alternance des deux formes).",
    tags: ["delirium", "formes cliniques"]
  },

    {
    id: 9013,
    chapter: "ch9",
    rang: "B",
    question: "Quel est le facteur prédisposant le plus important au développement d'un delirium ?",
    answer: "La démence préexistante (multiplie le risque par 5). Autres facteurs : âge >75 ans, déficits sensoriels, polymédication, déshydratation, immobilisation.",
    tags: ["facteurs de risque", "démence", "delirium"]
  },

    {
    id: 9014,
    chapter: "ch9",
    rang: "A",
    question: "Femme 82 ans, confusion, ECBU : leucocyturie 10^5/mL, E.coli, apyrétique. La bactériurie est-elle forcément la cause de la confusion ?",
    answer: "Non : la bactériurie asymptomatique est très fréquente chez la femme âgée (30-50%). Il faut rechercher d'autres causes. Ne pas traiter une bactériurie asymptomatique systématiquement — c'est un piège classique de l'EVC.",
    tags: ["bactériurie", "IU", "confusion", "piège"]
  },

    {
    id: 9015,
    chapter: "ch9",
    rang: "B",
    question: "Quelles mesures préventives réduisent le risque de delirium en post-opératoire chez le sujet âgé ?",
    answer: "Programme HELP (Hospital Elder Life Program) : mobilisation précoce, orientation répétée, hydratation, correction des déficits sensoriels, hygiène du sommeil, éviter les cathéters urinaires inutiles, analgésie optimale.",
    tags: ["prévention", "HELP", "post-opératoire"]
  },

    {
    id: 9016,
    chapter: "ch9",
    rang: "A",
    question: "Homme 78 ans, fièvre 39°C, confusion, nuque raide. Quelle urgence diagnostique ne pas manquer ?",
    answer: "Méningite bactérienne. Ponction lombaire en urgence (après scanner si signes focaux). Antibiothérapie probabiliste à démarrer immédiatement si délai pour la PL (C3G + amoxicilline + dexaméthasone).",
    tags: ["méningite", "urgence", "confusion fébrile"]
  },

    {
    id: 9017,
    chapter: "ch9",
    rang: "B",
    question: "Quel est le pronostic du delirium en hospitalisation chez le sujet âgé ?",
    answer: "Mauvais pronostic : mortalité hospitalière 10-26%, accélération du déclin cognitif, institutionnalisation accrue, durée de séjour prolongée. Le delirium est un marqueur de fragilité sévère.",
    tags: ["delirium", "pronostic", "mortalité"]
  },

    {
    id: 9018,
    chapter: "ch9",
    rang: "A",
    question: "Femme 84 ans, confusion aiguë, arrêt brutal de Valium (diazépam) prescrit depuis 10 ans. Quel mécanisme et traitement ?",
    answer: "Syndrome de sevrage aux benzodiazépines : hyperexcitabilité du SNC par levée de l'inhibition GABAergique. Traitement : réintroduire diazépam et décroissance très progressive sur plusieurs semaines.",
    tags: ["sevrage BZD", "confusion", "mécanisme"]
  },

    {
    id: 9019,
    chapter: "ch9",
    rang: "B",
    question: "Patient confus avec vision de petits animaux et agitation nocturne après 48h d'arrêt d'alcool. Quel syndrome et traitement ?",
    answer: "Delirium tremens (sevrage alcoolique sévère). Urgence vitale. Traitement : benzodiazépines (diazépam ou oxazépam), hydratation IV, vitamine B1 IV (thiamine 500 mg x3/j) AVANT tout apport glucosé.",
    tags: ["delirium tremens", "alcool", "sevrage", "urgence"]
  },

    {
    id: 9020,
    chapter: "ch9",
    rang: "A",
    question: "Homme 80 ans confus à J3 post-op PTH, Glasgow à 14. Quel examen d'imagerie réaliser en urgence si apparition de signes focaux ?",
    answer: "Scanner cérébral sans injection en urgence (pour éliminer AVC, hématome sous-dural, hémorragie intracérébrale). IRM si scanner normal et forte suspicion neurologique.",
    tags: ["imagerie", "confusion", "urgence"]
  },

    {
    id: 9021,
    chapter: "ch9",
    rang: "A",
    question: "Quels médicaments anticholinergiques fréquemment prescrits peuvent déclencher un syndrome confusionnel ?",
    answer: "Antihistaminiques (hydroxyzine, doxylamine), antispasmodiques urinaires (oxybutynine), tricycliques (amitriptyline), certains antipsychotiques, antiparkinsoniens. Utiliser le score anticholinergique (ACB) pour évaluer l'ordonnance.",
    tags: ["anticholinergiques", "iatrogénie", "confusion"]
  },

    {
    id: 9022,
    chapter: "ch9",
    rang: "B",
    question: "Comment distinguer une confusion d'une crise d'angoisse aiguë chez un sujet âgé ?",
    answer: "Confusion : altération de la conscience et de l'orientation, fluctuation, début souvent nocturne. Crise d'angoisse : conscience préservée, orientation conservée, sujet peut décrire son ressenti, durée brève. EEG si doute avec comitialité.",
    tags: ["diagnostic différentiel", "angoisse", "confusion"]
  },

    {
    id: 9023,
    chapter: "ch9",
    rang: "A",
    question: "Femme 85 ans, confusion, Hb 7 g/dL, écho cardiaque normale. Quel traitement en urgence ?",
    answer: "Transfusion de culots globulaires (cible Hb ≥8-9 g/dL chez sujet âgé symptomatique). La confusion peut être le seul signe d'une anémie sévère chez le sujet âgé. Recherche de la cause de l'anémie en parallèle.",
    tags: ["anémie", "transfusion", "confusion"]
  },

    {
    id: 9024,
    chapter: "ch9",
    rang: "B",
    question: "Quel est le rôle de l'EEG dans le bilan d'un syndrome confusionnel ?",
    answer: "Utile si suspicion de crises épileptiques non convulsivantes (état de mal épileptique partiel), confusion post-critique ou encéphalite. Montre un ralentissement diffus dans le delirium (non spécifique). Demandé après bilan biologique et scanner négatifs.",
    tags: ["EEG", "épilepsie", "bilan"]
  },

    {
    id: 9025,
    chapter: "ch9",
    rang: "A",
    question: "Homme 77 ans, confusion, urée 28 mmol/L, créatinine 380 µmol/L, ATCD de rein unique. Quel diagnostic et quelle urgence ?",
    answer: "Insuffisance rénale aiguë sévère (encéphalopathie urémique). Urgences : échographie rénale/vésicale (cause obstructive ?), arrêt des néphrotoxiques, hydratation prudente, discuter dialyse si oligurie persistante.",
    tags: ["IRA", "encéphalopathie urémique", "urgence"]
  },

    {
    id: 9026,
    chapter: "ch9",
    rang: "A",
    question: "Femme 90 ans, calcémie à 3,2 mmol/L, confusion, polyurie, constipation. Quelle est la triade clinique et le traitement ?",
    answer: "Hypercalcémie sévère : triade 'bones, stones, groans, moans'. Traitement : hyperhydratation IV NaCl 0,9%, bisphosphonates IV (zolédronate) si étiologie tumorale, recherche de la cause (PTHrp, PTH, gammapathie).",
    tags: ["hypercalcémie", "triade", "traitement"]
  },

    {
    id: 9027,
    chapter: "ch9",
    rang: "B",
    question: "Pourquoi la contention physique est-elle déconseillée dans la prise en charge du delirium ?",
    answer: "La contention aggrave l'agitation, augmente le risque de chute lors des tentatives d'évasion, favorise escarres, thrombose et immobilisation. Elle est traumatisante psychologiquement. À éviter sauf danger vital immédiat et uniquement sur prescription médicale avec réévaluation horaire.",
    tags: ["contention", "contre-indication", "delirium"]
  },

    {
    id: 9028,
    chapter: "ch9",
    rang: "A",
    question: "Homme 80 ans, confus, constipation depuis 10 jours, ampoule rectale pleine au TR. Quel diagnostic et traitement ?",
    answer: "Fécalome : cause fréquente et réversible de confusion chez le sujet âgé. Traitement : lavement évacuateur, extraction manuelle si nécessaire (sous antalgiques), puis laxatifs osmotiques au long cours.",
    tags: ["fécalome", "constipation", "confusion", "réversible"]
  },

    {
    id: 9029,
    chapter: "ch9",
    rang: "A",
    question: "Femme 78 ans, confusion, globe vésical à l'écho (600 mL) sans douleur. Quel mécanisme et traitement ?",
    answer: "Rétention aiguë d'urine indolore (fréquente chez le sujet âgé). Mécanisme : médicaments anticholinergiques ou opiacés, douleur, sepsis. Traitement immédiat : sondage urinaire évacuateur.",
    tags: ["rétention urinaire", "sondage", "confusion"]
  },

    {
    id: 9030,
    chapter: "ch9",
    rang: "B",
    question: "Homme 82 ans, confusion depuis 3 semaines, scanner : collection bilatérale extra-cérébrale, ATCD de chute il y a 1 mois. Quel diagnostic ?",
    answer: "Hématome sous-dural chronique bilatéral. Présentation possible : confusion progressive ou fluctuante. Traitement neurochirurgical (trou de trépan). Arrêt des anticoagulants et antiagrégants avant la chirurgie.",
    tags: ["hématome sous-dural", "confusion chronique", "traumatisme"]
  },

    {
    id: 9031,
    chapter: "ch9",
    rang: "A",
    question: "Comment prévenir la récidive du delirium après la sortie d'hospitalisation ?",
    answer: "Revoir et simplifier l'ordonnance (déprescrire anticholinergiques, BZD, opiacés), organiser un suivi rapproché, transmettre les informations à la famille et aux aidants, traiter les facteurs de risque modifiables (déshydratation, troubles sensoriels, douleur).",
    tags: ["prévention récidive", "post-hospitalisation", "ordonnance"]
  },

    {
    id: 9032,
    chapter: "ch9",
    rang: "B",
    question: "Quelle est la durée habituelle d'un épisode de delirium en hospitalisation ?",
    answer: "Variable : quelques jours à plusieurs semaines. Chez le sujet âgé dément, le delirium peut persister des mois. Environ 30% des patients n'ont pas complètement récupéré à 6 mois.",
    tags: ["durée", "évolution", "pronostic"]
  },

    {
    id: 9033,
    chapter: "ch9",
    rang: "A",
    question: "Patient 79 ans, confusion, bilan standard normal. On suspecte une encéphalite auto-immune. Quels examens ?",
    answer: "IRM cérébrale (hypersignal temporal), EEG, PL (cellules, protéines, cultures, PCR HSV), anticorps anti-NMDA, anti-LGI1, anti-CASPR2 dans sérum et LCR. Bilan paranéoplasique si anticorps positifs.",
    tags: ["encéphalite auto-immune", "anticorps", "bilan"]
  },

    {
    id: 9034,
    chapter: "ch9",
    rang: "B",
    question: "Femme 85 ans, hypothyroïdie non traitée depuis 2 mois, confuse, hypotherme, bradycarde. Quel diagnostic et traitement d'urgence ?",
    answer: "Coma myxœdémateux. Urgence vitale. Traitement : L-thyroxine IV + hydrocortisone IV (insuffisance surrénalienne associée possible), réchauffement progressif, réanimation en USI.",
    tags: ["hypothyroïdie", "coma myxœdémateux", "urgence"]
  },

    {
    id: 9035,
    chapter: "ch9",
    rang: "A",
    question: "Homme 83 ans, confusion post-opératoire, EVA 7/10. La famille refuse les opiacés 'ça va l'endormir'. Que répondre ?",
    answer: "La douleur non traitée est elle-même une cause majeure de confusion. Une analgésie efficace (palier adapté incluant les opiacés si nécessaire) améliore le delirium. L'éducation de la famille est indispensable.",
    tags: ["douleur", "analgésie", "confusion"]
  },

    {
    id: 9036,
    chapter: "ch9",
    rang: "B",
    question: "Quel outil évalue la douleur chez un patient confus non communicant ?",
    answer: "Échelle ALGOPLUS ou DOLOPLUS-2 (comportementales). Évaluent : visage crispé, gémissements, agitation, positions antalgiques, comportements de protection. À utiliser systématiquement chez tout sujet âgé confus non communicant.",
    tags: ["douleur", "ALGOPLUS", "DOLOPLUS", "non-communicant"]
  },

    {
    id: 9037,
    chapter: "ch9",
    rang: "A",
    question: "Femme 81 ans, confusion post-AVC ischémique à J5. Pourquoi l'halopéridol est-il à éviter ?",
    answer: "L'halopéridol dans les premières semaines post-AVC bloque la plasticité neuronale dopaminergique et aggrave la récupération fonctionnelle. Privilégier les mesures non médicamenteuses. Rechercher une complication (infection, épilepsie, récidive AVC).",
    tags: ["post-AVC", "halopéridol", "contre-indication relative"]
  },

    {
    id: 9038,
    chapter: "ch9",
    rang: "B",
    question: "Quel est le lien entre confusion et malnutrition chez le sujet âgé hospitalisé ?",
    answer: "La dénutrition est à la fois facteur de risque et conséquence du delirium. Pendant l'épisode : apports insuffisants, risque de fausse route, perte pondérale. Renutrition active avec textures adaptées et enrichissement indispensable.",
    tags: ["dénutrition", "alimentation", "delirium"]
  },

    {
    id: 9039,
    chapter: "ch9",
    rang: "A",
    question: "Homme 80 ans, Parkinson connu, confusion depuis 48h, rigidité majeure, fièvre 39,5°C, CPK 2000 UI/L. Quel diagnostic urgent ?",
    answer: "Syndrome malin des neuroleptiques (SMN) si un neuroleptique a été introduit ou si arrêt brutal du traitement dopaminergique. Traitement : arrêt immédiat du neuroleptique, réintroduction L-DOPA, bromocriptine, dantrolène, réanimation.",
    tags: ["syndrome malin", "neuroleptiques", "Parkinson", "urgence"]
  },

    {
    id: 9040,
    chapter: "ch9",
    rang: "A",
    question: "Homme 77 ans, confusion, lithiémie à 2,4 mmol/L. Quelle conduite tenir ?",
    answer: "Intoxication au lithium (toxique >1,5 mmol/L). Arrêt immédiat du lithium, hyperhydratation IV, surveillance cardiaque. Dialyse si lithiémie >3,5 mmol/L ou symptômes sévères (convulsions, coma).",
    tags: ["lithium", "intoxication", "dialyse"]
  },

    {
    id: 10001,
    chapter: "ch10",
    rang: "A",
    question: "Homme 76 ans, perte de mémoire des faits récents depuis 18 mois progressive, difficultés à trouver ses mots. MMSE = 22/30. Quel diagnostic évoquer en 1er ?",
    answer: "Maladie d'Alzheimer probable (début insidieux, progression lente, troubles mnésiques des faits récents au premier plan, troubles du langage). MMSE 20-26 = démence légère. Confirmer par bilan neuropsychologique et IRM.",
    tags: ["Alzheimer", "MMSE", "diagnostic"]
  },

    {
    id: 10002,
    chapter: "ch10",
    rang: "A",
    question: "Quel est le bilan de 1ère intention face à un syndrome démentiel débutant ?",
    answer: "Biologie : NFS, ionogramme, glycémie, TSH, B12/B9, calcémie, bilan hépatique, créatinine, sérologie syphilis. Imagerie : IRM cérébrale (atrophie hippocampique, AVC, leucoaraïose). +/- EEG, PL si présentation atypique.",
    tags: ["bilan démence", "biologique", "IRM"]
  },

    {
    id: 10003,
    chapter: "ch10",
    rang: "A",
    question: "Femme 78 ans, MMSE = 19/30, maladie d'Alzheimer confirmée. Quel traitement médicamenteux proposer en 1ère intention ?",
    answer: "Inhibiteurs de la cholinestérase (IChE) : donépézil 5-10 mg/j, rivastigmine 6-12 mg/j (ou patch), galantamine 16-24 mg/j. OU mémantine 20 mg/j si stade modéré-sévère (MMSE <20). Association possible aux stades sévères.",
    tags: ["Alzheimer", "IChE", "mémantine", "traitement"]
  },

    {
    id: 10004,
    chapter: "ch10",
    rang: "A",
    question: "Comment distinguer cliniquement une dépression d'une démence débutante chez un sujet âgé ?",
    answer: "Dépression : début daté, plaintes mnésiques mais meilleures performances aux tests qu'annoncées, humeur basse, anhédonie. Démence : début insidieux, anosognosie (patient minimise), performances réellement altérées aux tests.",
    tags: ["dépression", "démence", "diagnostic différentiel"]
  },

    {
    id: 10005,
    chapter: "ch10",
    rang: "B",
    question: "Femme 80 ans, démence à corps de Lewy suspectée. Quelles sont les 3 caractéristiques cardinales ?",
    answer: "1. Fluctuations cognitives (somnolence diurne, confusion épisodique). 2. Hallucinations visuelles précoces (bien formées, zoopsies). 3. Syndrome parkinsonien (rigidité, bradykinésie). + Troubles du comportement en sommeil paradoxal.",
    tags: ["corps de Lewy", "diagnostic", "triade"]
  },

    {
    id: 10006,
    chapter: "ch10",
    rang: "A",
    question: "Homme 74 ans, démence fronto-temporale (DFT). Quels signes comportementaux sont caractéristiques ?",
    answer: "Désinhibition sociale (propos choquants), apathie, impulsivité, hyperoralité, stéréotypies gestuelles ou verbales. Troubles mnésiques tardifs. Atteinte des fonctions exécutives prédomine (vs mémoire dans Alzheimer).",
    tags: ["DFT", "désinhibition", "comportement"]
  },

    {
    id: 10007,
    chapter: "ch10",
    rang: "A",
    question: "Qu'est-ce que le MMSE évalue et quelles sont ses 2 limites principales chez le sujet âgé ?",
    answer: "MMSE (30 pts) évalue : orientation, apprentissage, attention/calcul, rappel, langage, praxies. Limites : 1. Biaisé par le niveau d'éducation (faux négatifs chez sujets très cultivés, faux positifs chez peu diplômés). 2. Ne détecte pas les démences frontales précoces.",
    tags: ["MMSE", "limites", "évaluation"]
  },

    {
    id: 10008,
    chapter: "ch10",
    rang: "B",
    question: "Femme 82 ans, Alzheimer modéré, coups sur les soignants lors des soins d'hygiène. Quelle est la 1ère approche ?",
    answer: "Non médicamenteux en 1ère ligne : identifier le déclencheur (douleur ? peur ?), technique de distraction, adapter les soins (toilette partielle, proche connu présent), approche Humanitude ou Validation, formation des soignants.",
    tags: ["SCPD", "non médicamenteux", "Alzheimer"]
  },

    {
    id: 10009,
    chapter: "ch10",
    rang: "A",
    question: "Homme 79 ans, Alzheimer, hallucinations visuelles nocturnes. Quel médicament est contre-indiqué et que proposer ?",
    answer: "Contre-indiqués : neuroleptiques typiques (risque AVC, mortalité). Privilégier : traitement de la cause, mélatonine, luminothérapie matinale, chambre sans miroir. Si corps de Lewy : tous neuroleptiques contre-indiqués.",
    tags: ["hallucinations", "neuroleptiques", "Alzheimer"]
  },

    {
    id: 10010,
    chapter: "ch10",
    rang: "A",
    question: "Femme 77 ans, dépression sévère, MMSE 27/30. Quel antidépresseur éviter en 1ère intention et pourquoi ?",
    answer: "Éviter les tricycliques (amitriptyline, imipramine) : effet anticholinergique majeur (confusion, rétention urinaire, constipation), hypotension orthostatique, troubles du rythme (QT long). Préférer les IRS (sertraline, escitalopram) ou IRSNA (venlafaxine).",
    tags: ["dépression", "tricycliques", "contre-indication"]
  },

    {
    id: 10011,
    chapter: "ch10",
    rang: "A",
    question: "Homme 80 ans, antidépresseur IRS depuis 6 semaines, toujours déprimé. Quand parler de résistance et que vérifier ?",
    answer: "Résistance : absence de réponse après 4-8 semaines à dose thérapeutique bien observé. Vérifier : observance, dose suffisante, absence de cause organique (hypothyroïdie, douleur chronique), diagnostic correct (dépression vs apathie de démence).",
    tags: ["dépression", "résistance", "IRS"]
  },

    {
    id: 10012,
    chapter: "ch10",
    rang: "B",
    question: "Quelle est la différence entre apathie et dépression dans la maladie d'Alzheimer ?",
    answer: "Apathie : perte de motivation sans tristesse ni culpabilité. Pas de réponse aux antidépresseurs. Dépression : tristesse, pleurs, idées noires, anhédonie, réponse partielle aux IRS. L'apathie ne doit PAS être traitée par antidépresseurs.",
    tags: ["apathie", "dépression", "Alzheimer", "distinction"]
  },

    {
    id: 10013,
    chapter: "ch10",
    rang: "A",
    question: "Femme 84 ans, Alzheimer sévère (MMSE = 8), refus alimentaire, perte de 8 kg en 3 mois. La sonde nasogastrique est-elle indiquée ?",
    answer: "Non. Dans la démence sévère, la SNG n'améliore pas la survie, le statut nutritionnel ni le confort. Elle augmente les complications (inhalation, agitation). HAS : alimentation orale adaptée (textures modifiées, enrichissement) à maintenir le plus longtemps possible.",
    tags: ["SNG", "démence sévère", "alimentation", "éthique"]
  },

    {
    id: 10014,
    chapter: "ch10",
    rang: "A",
    question: "Homme 78 ans, démence vasculaire. Quels éléments permettent d'orienter vers ce diagnostic plutôt que l'Alzheimer ?",
    answer: "ATCD d'AVC/AIT, début en marches d'escalier (aggravations brutales), prédominance des troubles exécutifs sur la mémoire, signes focaux neurologiques, IRM : leucoaraïose, lacunes multiples, infarctus stratégiques.",
    tags: ["démence vasculaire", "diagnostic", "AVC"]
  },

    {
    id: 10015,
    chapter: "ch10",
    rang: "B",
    question: "Quel score évalue les symptômes comportementaux et psychologiques de la démence (SCPD) ?",
    answer: "NPI (Neuropsychiatric Inventory) : évalue 12 domaines (idées délirantes, hallucinations, agitation, dépression, anxiété, euphorie, apathie, désinhibition, irritabilité, comportements moteurs, sommeil, appétit). Score de fréquence x sévérité par domaine.",
    tags: ["NPI", "SCPD", "score"]
  },

    {
    id: 10016,
    chapter: "ch10",
    rang: "A",
    question: "Homme 72 ans, démence à évolution rapide (6 semaines), myoclonies, EEG : complexes triphasiques périodiques. Quel diagnostic redouter ?",
    answer: "Maladie de Creutzfeldt-Jakob (MCJ). Maladie à prions, toujours fatale. Confirmation : IRM (hypersignal diffusion des noyaux gris centraux), PL (protéine 14-3-3), EEG caractéristique. Déclaration obligatoire (maladie à déclaration obligatoire).",
    tags: ["Creutzfeldt-Jakob", "prions", "évolution rapide"]
  },

    {
    id: 10017,
    chapter: "ch10",
    rang: "A",
    question: "Femme 81 ans, démence, chute, scanner : hydrocéphalie à pression normale (HPN). Quelle est la triade clinique ?",
    answer: "Triade de Hakim-Adams : 1. Marche magnétique (petits pas, base élargie). 2. Incontinence urinaire. 3. Troubles cognitifs (sous-corticaux, ralentissement). Traitement : dérivation ventriculo-péritonéale si réversibilité confirmée (test de soustraction de LCR).",
    tags: ["HPN", "triade Hakim", "dérivation"]
  },

    {
    id: 10018,
    chapter: "ch10",
    rang: "B",
    question: "Quelle est l'utilité du test à la L-DOPA dans le bilan différentiel des syndromes parkinsoniens ?",
    answer: "Test L-DOPA positif (amélioration ≥30% du score UPDRS moteur) : oriente vers la maladie de Parkinson idiopathique. Peu ou pas de réponse : syndromes parkinsoniens atypiques (PSP, AMS, DCB). Dans la DCL, le test peut être positif mais les neuroleptiques restent CI.",
    tags: ["test DOPA", "Parkinson", "diagnostic différentiel"]
  },

    {
    id: 10019,
    chapter: "ch10",
    rang: "A",
    question: "Homme 80 ans, dépression traitée par escitalopram et milnacipran. Il présente agitation, myoclonies, fièvre, tachycardie. Quel diagnostic ?",
    answer: "Syndrome sérotoninergique (accumulation de sérotonine). Triade : agitation/confusion, hyperactivité neurovégétative (fièvre, tachycardie), anomalies neuromusculaires (myoclonies, hyperréflexie). Arrêt immédiat de tous les sérotoninergiques.",
    tags: ["syndrome sérotoninergique", "IRS", "urgence"]
  },

    {
    id: 10020,
    chapter: "ch10",
    rang: "A",
    question: "Quels sont les critères diagnostiques d'un épisode dépressif majeur (EDM) selon le DSM-5 ?",
    answer: "≥5 symptômes sur 2 semaines incluant OBLIGATOIREMENT : humeur dépressive OU anhédonie. + parmi : troubles du sommeil, fatigue, modifications appétit/poids, troubles de la concentration, agitation/ralentissement, dévalorisation/culpabilité, idées suicidaires.",
    tags: ["dépression", "DSM-5", "critères"]
  },

    {
    id: 10021,
    chapter: "ch10",
    rang: "B",
    question: "Pourquoi la dépression est-elle souvent sous-diagnostiquée chez le sujet âgé ?",
    answer: "Présentation atypique : plaintes somatiques au 1er plan, absence de tristesse exprimée ('dépression masquée'), 'syndrome de glissement', comorbidités masquant les symptômes, banalisation par l'entourage ('normal à cet âge').",
    tags: ["dépression", "sous-diagnostic", "présentation atypique"]
  },

    {
    id: 10022,
    chapter: "ch10",
    rang: "A",
    question: "Quel outil de dépistage de la dépression est recommandé chez le sujet âgé ?",
    answer: "GDS-15 (Geriatric Depression Scale) : score ≥5/15 = dépression probable. GDS-4 pour dépistage ultra-rapide. Chez sujet avec troubles cognitifs : Cornell Scale for Depression in Dementia (hétéro-évaluation par soignant/aidant).",
    tags: ["GDS", "dépistage", "dépression"]
  },

    {
    id: 10023,
    chapter: "ch10",
    rang: "B",
    question: "Femme 86 ans, Alzheimer modéré-sévère en EHPAD. Elle arrache ses vêtements et déambule la nuit. Quelle intervention non médicamenteuse en 1ère ligne ?",
    answer: "Musicothérapie, aromathérapie, luminothérapie (pour inversion du rythme veille/sommeil), activités physiques adaptées en journée, approche Snoezelen (stimulation sensorielle), aménagement de l'environnement (déambulation sécurisée en boucle).",
    tags: ["SCPD", "non médicamenteux", "EHPAD"]
  },

    {
    id: 10024,
    chapter: "ch10",
    rang: "A",
    question: "Homme 78 ans, Alzheimer. Son fils demande une mise sous tutelle car il veut continuer à conduire. Quelle démarche médicale ?",
    answer: "Évaluation de l'aptitude à conduire par médecin agréé (préfecture). Rédaction d'un certificat médical de contre-indication à la conduite. La tutelle/curatelle ne concerne pas directement la conduite mais peut être envisagée pour protection globale.",
    tags: ["conduite", "démence", "aptitude", "légal"]
  },

    {
    id: 10025,
    chapter: "ch10",
    rang: "A",
    question: "Qu'est-ce que le MCI (Mild Cognitive Impairment) et quel est son risque évolutif ?",
    answer: "MCI : déclin cognitif objectivé aux tests sans retentissement sur les activités de la vie quotidienne. Risque de conversion en démence : 10-15%/an (vs 1-2% en population générale). Surveillance tous les 6-12 mois. Pas de traitement médicamenteux validé.",
    tags: ["MCI", "conversion", "surveillance"]
  },

    {
    id: 10026,
    chapter: "ch10",
    rang: "B",
    question: "Sur quelle ALD est prise en charge la maladie d'Alzheimer ?",
    answer: "ALD 23 (affections psychiatriques de longue durée). Prise en charge à 100% des soins en rapport avec la maladie : médicaments spécifiques (IChE, mémantine), consultations spécialisées, aides à domicile.",
    tags: ["ALD", "Alzheimer", "prise en charge"]
  },

    {
    id: 10027,
    chapter: "ch10",
    rang: "A",
    question: "Homme 82 ans, Alzheimer sévère, famille refusant l'entrée en EHPAD. Quels arguments médicaux développer ?",
    answer: "Sécurité du patient (fugues, chutes, risque d'incendie), épuisement des aidants (burn-out), soins spécialisés en EHPAD (UHR, PASA), maintien du lien social, accompagnement de fin de vie. L'EHPAD n'est pas un 'abandon'.",
    tags: ["EHPAD", "aidants", "éthique"]
  },

    {
    id: 10028,
    chapter: "ch10",
    rang: "B",
    question: "Homme 75 ans, Alzheimer. Un notaire demande s'il peut rédiger un testament. Quelle procédure ?",
    answer: "Évaluation de la capacité de discernement au moment de l'acte (un diagnostic de démence ≠ incapacité à tester). Si tutelle en place : autorisation du juge des tutelles requise. Consultation médicale pour attestation de capacité recommandée.",
    tags: ["capacité", "testament", "tutelle", "légal"]
  },

    {
    id: 10029,
    chapter: "ch10",
    rang: "A",
    question: "Homme 77 ans, Alzheimer, sous rivastigmine patch. Quels effets indésirables surveiller ?",
    answer: "Effets cholinergiques : nausées, vomissements (moindres avec patch vs comprimé), diarrhées, perte de poids, bradycardie. Locaux pour le patch : érythème au site d'application (rotation des sites indispensable). Débuter à faible dose et augmenter progressivement.",
    tags: ["rivastigmine", "patch", "effets indésirables"]
  },

    {
    id: 10030,
    chapter: "ch10",
    rang: "B",
    question: "Quelle est la place de la PL dans le bilan d'une maladie d'Alzheimer ?",
    answer: "Biomarqueurs LCR dans l'Alzheimer typique : Aβ42 diminué, Tau totale et phospho-Tau augmentées. Utiles en cas de présentation atypique, sujet jeune (<65 ans), ou pour confirmer le diagnostic. De plus en plus utilisés pour les thérapies anti-amyloïdes en essai.",
    tags: ["PL", "biomarqueurs", "Tau", "amyloïde"]
  },

    {
    id: 10031,
    chapter: "ch10",
    rang: "A",
    question: "Homme 78 ans, dépression sous venlafaxine. À J5 : oedème des jambes, prise de poids de 3 kg, confusion. Quel diagnostic ?",
    answer: "SIADH sous IRS/IRSNA : hyponatrémie probable. Doser la natrémie en urgence. Si <125 mmol/L : arrêt de l'antidépresseur, bilan électrolytique complet, restriction hydrique. Correction lente (risque de myélinolyse centropontine si correction trop rapide).",
    tags: ["SIADH", "IRS", "hyponatrémie", "urgence"]
  },

    {
    id: 10032,
    chapter: "ch10",
    rang: "B",
    question: "Femme 85 ans, Alzheimer, famille épuisée. Quels dispositifs de répit proposer ?",
    answer: "Accueil de jour (quelques jours/semaine), hébergement temporaire en EHPAD (1-2 mois/an), SSIAD/HAD, plateformes de répit pour aidants (financement CNSA), groupes de parole France Alzheimer.",
    tags: ["répit", "aidants", "épuisement", "dispositifs"]
  },

    {
    id: 10033,
    chapter: "ch10",
    rang: "A",
    question: "Homme 80 ans, Alzheimer sans dépression, sous escitalopram prescrit par son généraliste. Est-ce justifié ?",
    answer: "Non. Les IRS ne sont pas indiqués dans l'apathie sans dépression ni dans l'Alzheimer sans symptômes dépressifs. Les études montrent des bénéfices uniquement sur les symptômes dépressifs concomitants, pas sur la cognition. C'est un piège de l'EVC.",
    tags: ["IRS", "Alzheimer", "indication", "apathie"]
  },

    {
    id: 10034,
    chapter: "ch10",
    rang: "B",
    question: "Quel test de dépistage cognitif rapide peut remplacer le MMSE en consultation courte ?",
    answer: "MoCA (Montreal Cognitive Assessment) : plus sensible que le MMSE pour les MCI et démences légères. Score ≤25/30 : atteinte probable. Test de l'horloge : rapide, dépiste surtout les troubles visuospatiaux et exécutifs.",
    tags: ["MoCA", "dépistage", "test cognitif"]
  },

    {
    id: 10035,
    chapter: "ch10",
    rang: "A",
    question: "Homme 82 ans, démence sévère, refus de soins lors des changes. Que dit la loi Claeys-Leonetti ?",
    answer: "Loi Claeys-Leonetti (2016) : droit à la sédation profonde et continue en cas de souffrance réfractaire en fin de vie. Respecter les directives anticipées et la personne de confiance. Pour les refus de soins ponctuels : adapter les soins, éviter l'obstination déraisonnable.",
    tags: ["Claeys-Leonetti", "refus de soins", "directives anticipées"]
  },

    {
    id: 10036,
    chapter: "ch10",
    rang: "A",
    question: "Test des 5 mots de Dubois : quel profil mnésique oriente vers la maladie d'Alzheimer ?",
    answer: "Rappel indicé faible ET rappel libre faible = profil hippocampique (défaut de stockage). La catégorisation n'aide pas dans l'Alzheimer car le déficit est au niveau de l'encodage. À distinguer du profil sous-cortical où le rappel indicé améliore les performances.",
    tags: ["test 5 mots", "Dubois", "encodage", "profil"]
  },

    {
    id: 10037,
    chapter: "ch10",
    rang: "B",
    question: "Qu'est-ce que le 'syndrome de glissement' chez le sujet âgé ?",
    answer: "Forme de dépression grave du grand vieillard : refus alimentaire total, prostration, mutisme, régression globale et rapide des fonctions vitales. Peut être fatal en quelques semaines. Traitement en urgence : antidépresseurs (IV si nécessaire), stimulation relationnelle intensive.",
    tags: ["syndrome de glissement", "dépression grave", "urgence"]
  },

    {
    id: 10038,
    chapter: "ch10",
    rang: "A",
    question: "Femme 79 ans, Alzheimer, prise en soin par sa fille unique. Comment évaluer la charge de l'aidant ?",
    answer: "Échelle de Zarit (22 items) : score >20 = charge légère, >40 = modérée, >60 = sévère. Aussi : GHQ-12, HAD pour dépression de l'aidant. L'épuisement de l'aidant est une indication à l'entrée en EHPAD même si le patient n'est pas en danger immédiat.",
    tags: ["aidant", "Zarit", "charge", "épuisement"]
  },

    {
    id: 10039,
    chapter: "ch10",
    rang: "B",
    question: "Quel est le mécanisme des troubles du sommeil en phase de démence sévère ?",
    answer: "Dégénérescence des noyaux suprachiasmatiques (horloge circadienne) et du locus cœruleus. Résultat : inversion du rythme veille/sommeil, déambulation nocturne. Traitement : luminothérapie matinale (10 000 lux, 30 min), activités physiques en journée, mélatonine (niveau de preuve faible).",
    tags: ["sommeil", "démence", "circadien", "mélatonine"]
  },

    {
    id: 10040,
    chapter: "ch10",
    rang: "A",
    question: "Homme 76 ans, Alzheimer débutant. Son fils pose la question des directives anticipées. Que lui expliquer ?",
    answer: "Les directives anticipées doivent être rédigées MAINTENANT, tant que le patient a ses capacités de discernement. Elles sont contraignantes pour les médecins. Elles peuvent être modifiées à tout moment. Accompagner par la désignation d'une personne de confiance.",
    tags: ["directives anticipées", "capacité", "personne de confiance"]
  },

    {
    id: 11001,
    chapter: "ch11",
    rang: "A",
    question: "Femme 78 ans, 3ème chute en 6 mois, sans perte de connaissance. Quel est le bilan minimal à réaliser ?",
    answer: "Interrogatoire (circonstances, prodrome). Examen : PA couché/debout (HO), neurologique, cardiovasculaire, locomoteur, vision. Tests : TUG, appui unipodal. Biologie : NFS, ionogramme, glycémie. ECG si suspicion cardiaque.",
    tags: ["chute", "bilan", "évaluation"]
  },

    {
    id: 11002,
    chapter: "ch11",
    rang: "A",
    question: "Homme 82 ans, chute à domicile, au sol depuis 12h. Quelles sont les 2 complications urgentes à rechercher ?",
    answer: "1. Rhabdomyolyse : CPK, myoglobinurie (IRA). 2. Hypothermie (température centrale). Aussi : déshydratation, escarres de pression, traumatisme (fracture, hématome sous-dural), détresse psychologique et syndrome post-chute.",
    tags: ["chute", "long séjour au sol", "rhabdomyolyse", "hypothermie"]
  },

    {
    id: 11003,
    chapter: "ch11",
    rang: "A",
    question: "Homme 80 ans, chute, TA couché 145/80, TA debout à 1 min : 110/65. Quel diagnostic et conduite ?",
    answer: "Hypotension orthostatique (HO) : baisse ≥20 mmHg PAS ou ≥10 mmHg PAD à 1-3 min de lever. Causes : déshydratation, médicaments (IEC, diurétiques, antidépresseurs, alpha-bloquants, L-Dopa), dysautonomie. Traitement : hydratation, bas de contention, révision médicamenteuse.",
    tags: ["hypotension orthostatique", "définition", "traitement"]
  },

    {
    id: 11004,
    chapter: "ch11",
    rang: "A",
    question: "Quel test fonctionnel simple prédit le risque de chute et comment l'interpréter ?",
    answer: "TUG (Timed Up and Go) : lever d'une chaise, marcher 3 m, demi-tour, revenir s'asseoir. <10 sec : normal. 10-20 sec : risque modéré. >20 sec : risque élevé, nécessite rééducation et aide technique.",
    tags: ["TUG", "test fonctionnel", "risque de chute"]
  },

    {
    id: 11005,
    chapter: "ch11",
    rang: "A",
    question: "Femme 79 ans, fracture de la hanche droite. Quelle est la prise en charge chirurgicale et dans quel délai ?",
    answer: "Ostéosynthèse ou prothèse totale selon le type. Délai : idéalement <48h (mortalité augmente avec chaque jour de délai). Anesthésie locorégionale préférée. Rééducation débutée dès J1 post-opératoire. Évaluation gériatrique préopératoire.",
    tags: ["fracture hanche", "chirurgie", "délai"]
  },

    {
    id: 11006,
    chapter: "ch11",
    rang: "A",
    question: "Homme 84 ans, 2 chutes en 3 mois. Il prend furosémide, amlodipine, zopiclone, alprazolam, metformine. Quels médicaments modifier en priorité ?",
    answer: "Zopiclone et alprazolam (BZD/Z-drugs) : risque de chute multiplié par 2-3, sevrer progressivement. Furosémide : HO et déshydratation. Amlodipine : HO. Critères STOPP identifient ces médicaments comme inappropriés chez le chuteuse.",
    tags: ["médicaments", "chute", "BZD", "STOPP"]
  },

    {
    id: 11007,
    chapter: "ch11",
    rang: "B",
    question: "Quel est le score de Tinetti et à partir de quel seuil existe-t-il un risque élevé de chute ?",
    answer: "Tinetti : 28 pts (16 pts équilibre + 12 pts marche). <19 pts : risque élevé de chute. 19-24 pts : risque modéré. ≥25 pts : faible risque. Évalue posture, lever de chaise, demi-tour, marche.",
    tags: ["Tinetti", "score", "risque de chute"]
  },

    {
    id: 11008,
    chapter: "ch11",
    rang: "A",
    question: "Homme 77 ans, fracture de la hanche, T-score col fémoral = -3,2 à l'ostéodensitométrie. Quel traitement initier ?",
    answer: "Ostéoporose confirmée (T-score ≤-2,5). Après fracture : bisphosphonate oral (alendronate 70 mg/sem) ou IV (zolédronate 5 mg/an si intolérance), calcium 1200 mg/j + vitamine D 1000 UI/j. Dénosumab si IRC sévère.",
    tags: ["ostéoporose", "fracture", "bisphosphonate", "traitement"]
  },

    {
    id: 11009,
    chapter: "ch11",
    rang: "A",
    question: "Femme 82 ans, bilan de chute normal, très anxieuse à l'idée de remarcher. Quel syndrome et prise en charge ?",
    answer: "Syndrome post-chute (peur de chuter). Cercle vicieux : peur → restriction des activités → déconditionnement → nouvelles chutes. PEC : kinésithérapie (renforcement, équilibre), programmes de réhabilitation, thérapie cognitivo-comportementale.",
    tags: ["syndrome post-chute", "peur de chuter", "kinésithérapie"]
  },

    {
    id: 11010,
    chapter: "ch11",
    rang: "B",
    question: "Quels sont les éléments d'un programme de prévention des chutes validé en EHPAD ?",
    answer: "Programme multimodal : exercices d'équilibre et renforcement (tai-chi), revue médicamenteuse (réduction BZD, antihypertenseurs), correction des troubles visuels, aménagement de l'environnement (éclairage, barres d'appui), supplémentation vitamine D.",
    tags: ["prévention", "chute", "EHPAD", "multimodal"]
  },

    {
    id: 11011,
    chapter: "ch11",
    rang: "A",
    question: "Homme 80 ans, fracture du poignet (Pouteau-Colles) à énergie modérée. Quelle est sa signification en termes de risque osseux ?",
    answer: "Fracture ostéoporotique sentinelle : multiplie par 2-4 le risque de fracture de hanche dans les 5 ans suivants. Indication à ostéodensitométrie et traitement anti-ostéoporotique même si asymptomatique.",
    tags: ["fracture sentinelle", "Pouteau-Colles", "ostéoporose"]
  },

    {
    id: 11012,
    chapter: "ch11",
    rang: "A",
    question: "Quel est l'apport de la vitamine D dans la prévention des chutes chez le sujet âgé ?",
    answer: "La vitamine D améliore la force musculaire et l'équilibre (effet musculaire direct via récepteurs VDR). Réduction des chutes d'environ 19% avec supplémentation >700 UI/j. Cible : 25-OH vit D ≥75 nmol/L. Dose : 800-1000 UI/j ou 100 000 UI/3 mois.",
    tags: ["vitamine D", "chute", "prévention", "muscle"]
  },

    {
    id: 11013,
    chapter: "ch11",
    rang: "B",
    question: "Homme 79 ans, chute, hypotension orthostatique, sous fludrocortisone. Quels sont les risques de ce traitement ?",
    answer: "Fludrocortisone (minéralocorticoïde) : risque d'hypokaliémie, HTA, oedèmes des MI, insuffisance cardiaque. À utiliser avec précaution. Mesures en 1ère ligne : hydratation 2L/j, sel alimentaire non restreint, contention veineuse.",
    tags: ["fludrocortisone", "HO", "effets indésirables"]
  },

    {
    id: 11014,
    chapter: "ch11",
    rang: "A",
    question: "Femme 85 ans, chute, n'arrive plus à se relever seule. Quel test évalue la force des quadriceps ?",
    answer: "Test du lever de chaise : se lever 5 fois de suite (sans les bras) en <15 secondes. Positif si >15 sec ou impossible : sarcopénie probable, risque élevé de chute et dépendance. Confirmer par dynamométrie (force de préhension).",
    tags: ["lever de chaise", "sarcopénie", "quadriceps"]
  },

    {
    id: 11015,
    chapter: "ch11",
    rang: "A",
    question: "Homme 76 ans, marche à petits pas, festination, rétropulsion. Quel syndrome et quelles étiologies rechercher ?",
    answer: "Syndrome parkinsonien. Étiologies : maladie de Parkinson idiopathique (test L-DOPA), médicaments (neuroleptiques, métoclopramide, métopimazine), HPN, AVC (syndrome parkinsonien vasculaire). Chercher une cause iatrogène en priorité.",
    tags: ["marche parkinsonienne", "festination", "étiologies"]
  },

    {
    id: 11016,
    chapter: "ch11",
    rang: "B",
    question: "Quelle est la place des protecteurs de hanche dans la prévention des fractures en EHPAD ?",
    answer: "Protecteurs de hanche externes : réduction du risque de fracture de 50-60% si portés lors de la chute. Problème majeur : observance faible (<50% de port effectif). Proposer aux patients à très haut risque de fracture et de chute.",
    tags: ["protecteurs de hanche", "fracture", "observance"]
  },

    {
    id: 11017,
    chapter: "ch11",
    rang: "A",
    question: "Femme 80 ans, chute nocturne pour aller aux WC. Quelle cause médicamenteuse fréquente et comment corriger ?",
    answer: "Nycturie liée aux diurétiques (furosémide) pris le soir → lever nocturne à risque (HO, obscurité). Recommandation : prendre les diurétiques le matin, installer un urinoir ou bassin la nuit, veilleuse, sonnette d'appel.",
    tags: ["nycturie", "diurétiques", "chute nocturne"]
  },

    {
    id: 11018,
    chapter: "ch11",
    rang: "A",
    question: "Homme 83 ans, fracture de hanche : quels indicateurs de qualité de la prise en charge sont recommandés ?",
    answer: "Délai chirurgie <48h, mobilisation à J1, renutrition précoce, prévention MTEV (HBPM), correction anémie, prévention du delirium post-op, dépistage et traitement de l'ostéoporose avant la sortie. Programme de liaison anesthésiste-gériatre recommandé.",
    tags: ["fracture hanche", "qualité", "indicateurs"]
  },

    {
    id: 11019,
    chapter: "ch11",
    rang: "B",
    question: "Quels sont les troubles de la marche d'origine frontale et leur mécanisme ?",
    answer: "Marche frontale (astasie-abasie) : pieds 'collés au sol', démarche magnétique, base élargie, demi-tours décomposés. Mécanisme : déconnexion frontostriatale (AVC lacunaires, HPN, leucoaraïose diffuse). Chercher triade HPN (incontinence + troubles cognitifs).",
    tags: ["marche frontale", "HPN", "leucoaraïose"]
  },

    {
    id: 11020,
    chapter: "ch11",
    rang: "A",
    question: "Femme 81 ans, chute, Romberg positif (instabilité les yeux fermés). Quel type d'ataxie et quelles causes ?",
    answer: "Romberg positif = ataxie proprioceptive (cordons postérieurs). Causes : carence B12 (neuropathie), neuropathie périphérique (diabète, alcool), myélopathie cervicale, neurosyphilis. Bilan : EMG, B12, IRM médullaire.",
    tags: ["Romberg", "ataxie proprioceptive", "B12"]
  },

    {
    id: 11021,
    chapter: "ch11",
    rang: "A",
    question: "Homme 80 ans, chute, ECG : BAV du 2ème degré Mobitz II. Quel traitement ?",
    answer: "Indication à un stimulateur cardiaque (pacemaker) définitif. Le BAV Mobitz II est instable et peut évoluer vers un BAV complet avec syncope. Cause de chute par syncope cardiogénique. Hospitalisation en cardiologie en urgence.",
    tags: ["BAV", "pacemaker", "syncope", "chute"]
  },

    {
    id: 11022,
    chapter: "ch11",
    rang: "B",
    question: "Quelles sont les 3 principales causes de chute par syncope vasovagale chez le sujet âgé ?",
    answer: "1. Hypersensibilité du sinus carotidien (massage carotidien positif). 2. Syncope vasovagale situationnelle (miction, défécation, toux). 3. Hypotension orthostatique sévère. Holter-ECG et tilt-test aident au diagnostic.",
    tags: ["syncope vasovagale", "sinus carotidien", "tilt-test"]
  },

    {
    id: 11023,
    chapter: "ch11",
    rang: "A",
    question: "Femme 76 ans, gonarthrose bilatérale sévère, marche douloureuse avec boiterie. Quel est l'impact sur le risque de chute et la prise en charge ?",
    answer: "La gonarthrose augmente le risque de chute par douleur (réduction des réflexes posturaux), instabilité articulaire, déficit du quadriceps, limitation de mobilité. PEC : antalgiques adaptés, kinésithérapie, orthèse de genou, infiltrations.",
    tags: ["gonarthrose", "chute", "douleur", "quadriceps"]
  },

    {
    id: 11024,
    chapter: "ch11",
    rang: "B",
    question: "Quel est l'impact de la correction des troubles visuels sur le risque de chute ?",
    answer: "La correction de la cataracte réduit le risque de chute de 34% (méta-analyses). Attention : les verres progressifs (double foyer) augmentent le risque dans les escaliers. La correction réfractive simple est bénéfique.",
    tags: ["cataracte", "vision", "prévention chute"]
  },

    {
    id: 11025,
    chapter: "ch11",
    rang: "A",
    question: "Homme 85 ans, alité depuis 3 semaines, marchant avant. Quel syndrome menace et comment le prévenir ?",
    answer: "Syndrome d'immobilisation : sarcopénie rapide (1-5% masse musculaire/jour d'alitement), rétractions, escarres, phlébite, constipation, pneumonie. Prévention : mobilisation dès que possible (kiné, verticalisation), nutrition adaptée, dès J1 si possible.",
    tags: ["immobilisation", "sarcopénie", "prévention"]
  },

    {
    id: 11026,
    chapter: "ch11",
    rang: "A",
    question: "Homme 79 ans, fracture vertébrale T12 sans traumatisme. Quel diagnostic et quelle exploration ?",
    answer: "Fracture vertébrale ostéoporotique (tassement sans énergie). Bilan : ostéodensitométrie (T-score), bilan étiologique secondaire (calcium, PTH, 25-OH vit D, EPP, PSA, TSH). Traitement anti-ostéoporotique à débuter.",
    tags: ["fracture vertébrale", "ostéoporose", "tassement"]
  },

    {
    id: 11027,
    chapter: "ch11",
    rang: "B",
    question: "Femme 82 ans, chute, Babinski bilatéral, spasticité des membres inférieurs. Quelle localisation lésionnelle ?",
    answer: "Syndrome pyramidal bilatéral = lésion de la moelle épinière (myélopathie cervicale arthrosique, compression médullaire). IRM médullaire en urgence. Causes : canal cervical rétréci, hernie discale, métastase, hématome épidural.",
    tags: ["Babinski", "myélopathie", "moelle épinière", "IRM"]
  },

    {
    id: 11028,
    chapter: "ch11",
    rang: "A",
    question: "Quelle est la définition de la sarcopénie selon le consensus européen EWGSOP2 ?",
    answer: "Sarcopénie : diminution de la force musculaire (dynamométrie <27 kg H / <16 kg F) ET diminution de la masse musculaire (DEXA ou impédancemétrie). Sévère si + limitation de la performance physique (TUG >20 sec, vitesse de marche <0,8 m/s).",
    tags: ["sarcopénie", "EWGSOP2", "définition", "dynamométrie"]
  },

    {
    id: 11029,
    chapter: "ch11",
    rang: "A",
    question: "Homme 80 ans, chute, neuropathie périphérique connue. Quels signes cliniques caractérisent la démarche ?",
    answer: "Démarche en steppage : releveurs déficients → flexion exagérée de hanche et genou pour éviter l'accrochage du pied. Chercher : ataxie proprioceptive, hyporéflexie achilléenne, hypoesthésie distale 'en chaussette'. EMG pour type de neuropathie.",
    tags: ["steppage", "neuropathie", "démarche"]
  },

    {
    id: 11030,
    chapter: "ch11",
    rang: "B",
    question: "Quelle est l'indication des analyses de marche instrumentées dans le bilan des chutes ?",
    answer: "Indications : chutes récidivantes sans cause évidente, bilan complexe, préparation à une chirurgie du genou/hanche, prescription d'orthèse spécifique. Disponibles dans les centres spécialisés chutes/troubles de la marche.",
    tags: ["analyse de marche", "indication", "spécialisé"]
  },

    {
    id: 11031,
    chapter: "ch11",
    rang: "A",
    question: "Femme 78 ans, fracture du col du fémur, anticoagulée pour ACFA par apixaban. Quelle conduite pour la chirurgie ?",
    answer: "Urgence chirurgicale <48h. AOD : vérifier délai dernière prise (apixaban : chirurgie possible après 24h si DFG normal). Antidote si urgence absolue : andexanet alfa. Reprendre anticoagulation dès J1 post-op (HBPM bridge puis AOD à J3).",
    tags: ["anticoagulants", "fracture hanche", "chirurgie", "AOD"]
  },

    {
    id: 11032,
    chapter: "ch11",
    rang: "B",
    question: "Femme 83 ans, diabétique, chute, pieds : ongles épais, callosités, orteils en griffe. Quel risque podologique et prévention ?",
    answer: "Pied diabétique : risque d'ulcération et gangrène. Facteurs de chute : neuropathie sensitivo-motrice, déformations (hallux valgus). Prévention : soins podologiques réguliers remboursés, chaussures orthopédiques adaptées, inspection quotidienne des pieds.",
    tags: ["pied diabétique", "neuropathie", "podologie"]
  },

    {
    id: 11033,
    chapter: "ch11",
    rang: "A",
    question: "Homme 82 ans, refuse catégoriquement les aides techniques (canne, déambulateur). Comment le convaincre ?",
    answer: "Approche motivationnelle : expliquer que la canne améliore l'autonomie plutôt qu'elle ne l'entrave, démonstration par le kinésithérapeute, essai progressif à domicile, tenir compte de l'aspect esthétique (cannes design), impliquer la famille dans la décision.",
    tags: ["aide technique", "canne", "adhésion", "éducation"]
  },

    {
    id: 11034,
    chapter: "ch11",
    rang: "A",
    question: "Femme 84 ans, chute à la salle de bain. Quels aménagements du domicile recommander ?",
    answer: "Salle de bain : barres d'appui WC et douche, tapis antidérapant, siège de douche, douche à l'italienne. Domicile général : enlever les tapis, améliorer l'éclairage (veilleuses), rampe dans les escaliers, téléalarme détection de chute.",
    tags: ["aménagement domicile", "salle de bain", "prévention"]
  },

    {
    id: 11035,
    chapter: "ch11",
    rang: "B",
    question: "Quel est le rôle de l'ergothérapeute dans la prévention des chutes ?",
    answer: "Visite à domicile : évaluation des risques environnementaux, prescription des aides techniques (siège de douche, barres d'appui), adaptation des activités quotidiennes, conseils chaussures (semelles antidérapantes), formation de la famille.",
    tags: ["ergothérapeute", "domicile", "aides techniques"]
  },

    {
    id: 11036,
    chapter: "ch11",
    rang: "A",
    question: "Homme 77 ans, 1ère chute simple, bilan normal. Quelle est la recommandation HAS sur la prise en charge ?",
    answer: "Programme de prévention multifactorielle même après 1ère chute : exercices d'équilibre et renforcement musculaire (kiné), revue médicamenteuse, correction des troubles sensoriels, aménagement du domicile (ergothérapeute), vitamine D si carence.",
    tags: ["HAS", "prévention", "1ère chute", "multifactoriel"]
  },

    {
    id: 11037,
    chapter: "ch11",
    rang: "B",
    question: "Quelle est la prévalence des chutes chez les personnes âgées de plus de 65 ans à domicile ?",
    answer: "1/3 des personnes >65 ans chutent chaque année (30-33%), 1/2 chez les >80 ans, >60% en EHPAD. Seul 1 chuteur sur 2 en parle à son médecin ('sous-déclaration'). La chute est le 1er motif d'hospitalisation accidentelle chez le sujet âgé.",
    tags: ["prévalence", "chute", "épidémiologie"]
  },

    {
    id: 11038,
    chapter: "ch11",
    rang: "A",
    question: "Femme 80 ans, fracture de l'extrémité supérieure de l'humérus. Quel traitement et quelle rééducation ?",
    answer: "Non déplacée : orthopédique (bras au corps 3 semaines) puis kiné précoce (mobilisation pendulaire puis active). Déplacée/comminutive : prothèse d'épaule inversée. Kinésithérapie prolongée 3-6 mois. Évaluer l'ostéoporose.",
    tags: ["fracture humérus", "épaule", "rééducation"]
  },

    {
    id: 11039,
    chapter: "ch11",
    rang: "A",
    question: "Quel est le lien entre les médicaments psychotropes et le risque de chute ?",
    answer: "Les psychotropes augmentent le risque de chute de 50-80% : BZD (sédation, ataxie), tricycliques (HO), IRS (hyponatrémie), neuroleptiques (sédation, extrapyramidal, HO), Z-drugs (zopiclone). Réduire au minimum indispensable ou sevrer.",
    tags: ["psychotropes", "chute", "risque", "BZD"]
  },

    {
    id: 11040,
    chapter: "ch11",
    rang: "B",
    question: "Homme 81 ans, chute, anémie ferriprive Hb 8 g/dL. Quel impact sur le risque de chute et conduite ?",
    answer: "L'anémie augmente le risque de chute par fatigue musculaire, dyspnée d'effort, tachycardie avec HO, altération cognitive. Bilan de l'anémie (recherche de saignement digestif). Supplémentation martiale PO ou IV selon tolérance et délai.",
    tags: ["anémie", "chute", "ferritine"]
  },

    {
    id: 14001,
    chapter: "ch14",
    rang: "A",
    question: "Femme 78 ans, poids actuel 52 kg, poids habituel il y a 6 mois : 57 kg. Répond-elle aux critères HAS de dénutrition ?",
    answer: "Perte de poids = (57-52)/57 × 100 = 8,8% en 6 mois. Critère HAS dénutrition modérée : perte ≥5% en 1 mois OU ≥10% en 6 mois. Ici : 8,8% en 6 mois = NON atteint pour dénutrition (seuil 10%), mais significatif. Compléter par IMC et albuminémie.",
    tags: ["dénutrition", "critères HAS", "perte de poids"]
  },

    {
    id: 14002,
    chapter: "ch14",
    rang: "A",
    question: "Quels sont les critères HAS 2021 de dénutrition SÉVÈRE chez le sujet âgé de plus de 70 ans ?",
    answer: "Au moins 1 critère phénotypique sévère : perte de poids ≥10% en 1 mois OU ≥15% en 6 mois OU IMC <17 kg/m². ET confirmation par albuminémie <30 g/L (avec CRP) ou critère étiologique (réduction apports, malabsorption).",
    tags: ["dénutrition sévère", "critères HAS 2021", "IMC", "albumine"]
  },

    {
    id: 14003,
    chapter: "ch14",
    rang: "A",
    question: "Quel outil de dépistage de la dénutrition est recommandé chez le sujet âgé en ville et en institution ?",
    answer: "MNA (Mini Nutritional Assessment) : dépistage rapide avec MNA-SF (6 items, score ≤11 = à risque) puis évaluation complète (MNA complet 18 items, score ≤23,5 = dénutri). En hospitalisation : NRS-2002.",
    tags: ["MNA", "dépistage", "dénutrition"]
  },

    {
    id: 14004,
    chapter: "ch14",
    rang: "A",
    question: "Femme 82 ans, dénutrition modérée, mange peu à chaque repas. Quelle est la 1ère mesure nutritionnelle ?",
    answer: "Conseils nutritionnels oraux : enrichissement des repas (poudre de lait, fromage râpé, oeuf, huile), fractionnement (3 repas + 2-3 collations/j), textures adaptées si dysphagie, respect des préférences alimentaires, manger en compagnie.",
    tags: ["dénutrition", "enrichissement", "conseils nutritionnels"]
  },

    {
    id: 14005,
    chapter: "ch14",
    rang: "A",
    question: "Quand débuter une complémentation nutritionnelle orale (CNO) chez le sujet âgé dénutri ?",
    answer: "CNO en 2ème ligne si conseils nutritionnels insuffisants après 2-4 semaines. Objectif : +400 kcal et +30 g protéines/j (2 CNO/j). Donner ENTRE les repas (ne pas remplacer les repas). Varier les parfums pour l'observance.",
    tags: ["CNO", "complémentation", "dénutrition"]
  },

    {
    id: 14006,
    chapter: "ch14",
    rang: "A",
    question: "Homme 79 ans, dénutrition sévère, IMC 15,5, anorexie complète. Quelle voie d'alimentation artificielle privilégier ?",
    answer: "Si tube digestif fonctionnel : nutrition entérale (sonde nasogastrique ou nasojéjunale). La voie orale doit rester prioritaire si possible. Nutrition parentérale uniquement si tube digestif non fonctionnel (occlusion, grêle court, malabsorption sévère).",
    tags: ["nutrition entérale", "SNG", "nutrition parentérale"]
  },

    {
    id: 14007,
    chapter: "ch14",
    rang: "B",
    question: "Qu'est-ce que le syndrome de renutrition inapproprié (refeeding syndrome) et comment le prévenir ?",
    answer: "Lors de la renutrition rapide d'un dénutri sévère : chute brutale du phosphore, potassium, magnésium (entrée cellulaire). Risque : arythmies, insuffisance cardiaque, convulsions. Prévention : renutrition progressive (commencer à 50% des besoins), supplémentation phosphore et B1.",
    tags: ["refeeding syndrome", "renutrition", "phosphore", "prévention"]
  },

    {
    id: 14008,
    chapter: "ch14",
    rang: "A",
    question: "Femme 80 ans, dénutrie, dysphagie aux liquides. Quel test diagnostique et quelle adaptation ?",
    answer: "Test de déglutition (eau gélifiée, GUSS) ou bilan orthophonique complet. Si dysphagie aux liquides : épaississement des boissons (nectarifié, mielé), éviter eau pure. Si sévère : nasofibroscopie, vidéofluoroscopie.",
    tags: ["dysphagie", "déglutition", "épaississement", "orthophonie"]
  },

    {
    id: 14009,
    chapter: "ch14",
    rang: "A",
    question: "Quel est le niveau de protéines recommandé chez un sujet âgé dénutri en phase de renutrition ?",
    answer: "Apports protéiques : 1,5 à 2 g/kg/j en cas de dénutrition ou maladie aiguë (vs 1,2-1,5 g/kg/j sujet âgé sain vs 0,8 g/kg/j adulte jeune). Apport calorique recommandé : 30-40 kcal/kg/j.",
    tags: ["protéines", "apports", "renutrition", "besoins"]
  },

    {
    id: 14010,
    chapter: "ch14",
    rang: "B",
    question: "Femme 85 ans, dénutrie, 25-OH vitamine D = 18 nmol/L. Quel schéma de supplémentation ?",
    answer: "Carence avérée : charge initiale 100 000 UI vitamine D3 puis entretien 100 000 UI tous les 3 mois (ou équivalent quotidien 1000-2000 UI/j). Cible : 25-OH vitamine D ≥75 nmol/L. Surveiller calcémie (intoxication rare).",
    tags: ["vitamine D", "carence", "supplémentation"]
  },

    {
    id: 14011,
    chapter: "ch14",
    rang: "A",
    question: "Homme 77 ans, dénutri, albumine 28 g/L, CRP 45 mg/L. Peut-on utiliser l'albuminémie seule pour diagnostiquer la dénutrition ?",
    answer: "Non : l'albumine est un réactant négatif de l'inflammation (baisse en cas de syndrome inflammatoire indépendamment de l'état nutritionnel). Toujours interpréter avec la CRP. Si CRP élevée, préférer la transthyrétine (préalbumine, demi-vie 2 jours).",
    tags: ["albumine", "CRP", "interprétation", "transthyrétine"]
  },

    {
    id: 14012,
    chapter: "ch14",
    rang: "A",
    question: "Femme 82 ans, Alzheimer sévère, perd 2 kg/mois depuis 3 mois, refuse de manger. Quelle prise en charge nutritionnelle ?",
    answer: "Adapter textures et présentations (mixé, enrichi), repas petite quantité très fréquents, alimentation aidée, respecter les préférences, identifier et traiter une douleur buccale. Ne PAS poser de SNG/gastrostomie dans la démence sévère (recommandation HAS).",
    tags: ["démence sévère", "anorexie", "alimentation", "éthique"]
  },

    {
    id: 14013,
    chapter: "ch14",
    rang: "B",
    question: "Homme 80 ans, dénutri sévère, opération programmée dans 2 semaines. Quel impact sur le pronostic opératoire ?",
    answer: "La dénutrition préopératoire multiplie par 3-5 le risque de complications post-opératoires (infection, retard de cicatrisation, durée d'hospitalisation prolongée, mortalité). Immunonutrition préopératoire recommandée 7-14 jours si possible.",
    tags: ["préopératoire", "dénutrition", "complications", "immunonutrition"]
  },

    {
    id: 14014,
    chapter: "ch14",
    rang: "A",
    question: "Femme 79 ans, hospitalisée pour pneumonie, pesée à l'admission : 58 kg pour 1,65 m. Comment évaluer le risque de dénutrition ?",
    answer: "IMC = 21,3 kg/m² (normal). Mais bilan incomplet. Appliquer le MNA-SF, rechercher perte de poids par interrogatoire (patient/famille), évaluer les apports récents, doser albumine + CRP. La pesée systématique à chaque hospitalisation est recommandée par la HAS.",
    tags: ["MNA", "dépistage", "hospitalisation", "pesée"]
  },

    {
    id: 14015,
    chapter: "ch14",
    rang: "B",
    question: "Quels sont les mécanismes spécifiques de l'anorexie liée au vieillissement ?",
    answer: "1. Altération de l'odorat et du goût (plaisir alimentaire diminué). 2. Retard de la vidange gastrique (satiété précoce). 3. Réduction des peptides orexigènes (ghréline) et augmentation de la leptine. 4. Isolement social. 5. Troubles dentaires. 6. Dépression.",
    tags: ["anorexie", "vieillissement", "mécanismes"]
  },

    {
    id: 14016,
    chapter: "ch14",
    rang: "A",
    question: "Homme 78 ans, cancer du côlon, chimiothérapie, perd 8% de son poids en 1 mois. Quel objectif nutritionnel ?",
    answer: "Dénutrition en contexte oncologique. Objectifs : maintenir l'état nutritionnel pour tolérer la chimiothérapie, préserver la qualité de vie. Prescription de CNO, puis nutrition entérale si apports oraux <60% des besoins. Évaluation par diététicien.",
    tags: ["cancer", "chimiothérapie", "dénutrition", "CNO"]
  },

    {
    id: 14017,
    chapter: "ch14",
    rang: "A",
    question: "Femme 81 ans, insuffisance cardiaque et dénutrition. Quel est l'enjeu du régime hyposodé dans ce contexte ?",
    answer: "Le régime hyposodé strict (<2 g NaCl/j) peut aggraver la dénutrition (aliments peu appétissants, restriction calorique). En gériatrie : régime peu salé modéré (4-6 g/j) et prioriser la renutrition sur la restriction sodée si dénutrition sévère.",
    tags: ["régime hyposodé", "insuffisance cardiaque", "dénutrition", "compromis"]
  },

    {
    id: 14018,
    chapter: "ch14",
    rang: "B",
    question: "Quel est l'impact de la dénutrition sur la cicatrisation des escarres ?",
    answer: "La dénutrition protéique retarde la synthèse de collagène et la régénération tissulaire. Objectif : protéines ≥1,5-2 g/kg/j, enrichissement en zinc (cofacteur enzymatique), vitamine C (synthèse collagène), arginine (si escarre stade III-IV : Cubitan ou Forticare).",
    tags: ["escarres", "cicatrisation", "protéines", "zinc"]
  },

    {
    id: 14019,
    chapter: "ch14",
    rang: "A",
    question: "Femme 84 ans, dénutrition, MNA = 18/30, vit seule, ne sort plus. Quelles aides à domicile proposer ?",
    answer: "Portage des repas à domicile, aide ménagère (CCAS, APA), auxiliaire de vie pour aide aux repas, SAAD, accueil de jour avec repas, SSIAD si nécessaire. Évaluer les aides sociales disponibles (APA, aide sociale du département).",
    tags: ["aides à domicile", "dénutrition", "portage repas", "isolement"]
  },

    {
    id: 14020,
    chapter: "ch14",
    rang: "B",
    question: "Quels sont les indicateurs de surveillance d'une nutrition entérale chez le sujet âgé ?",
    answer: "Poids 2-3x/semaine, transit (diarrhée, résidu gastrique si SNG), tolérance digestive, position demi-assise pendant et après l'alimentation (prévention inhalation), glycémie, ionogramme (phosphore, K, Mg), état cutané au point d'entrée de la sonde.",
    tags: ["nutrition entérale", "surveillance", "tolérance"]
  },

    {
    id: 16001,
    chapter: "ch16",
    rang: "A",
    question: "Homme 82 ans, metformine (DFG 38 mL/min), digoxine 0,25 mg/j, spironolactone. Quels risques iatrogènes majeurs ?",
    answer: "Metformine : risque acidose lactique si DFG <30 (prudence 30-45). Digoxine : accumulation si IR (marge thérapeutique étroite, surveiller digoxinémie). Spironolactone + IR : risque d'hyperkaliémie sévère. Réévaluer et adapter les doses.",
    tags: ["iatrogénie", "insuffisance rénale", "digoxine", "metformine"]
  },

    {
    id: 16002,
    chapter: "ch16",
    rang: "A",
    question: "Qu'est-ce que la polymédication et à partir de combien de médicaments est-elle considérée problématique ?",
    answer: "Polypharmacie : ≥5 médicaments simultanément (hyperpolypharmacie ≥10). Augmente le risque d'interactions médicamenteuses, d'effets indésirables, de non-observance. En moyenne 5-8 médicaments/j chez le sujet âgé hospitalisé.",
    tags: ["polypharmacie", "définition", "médicaments"]
  },

    {
    id: 16003,
    chapter: "ch16",
    rang: "A",
    question: "Femme 79 ans, chuteuse, alprazolam 0,25 mg matin + zopiclone le soir depuis 8 ans. Comment sevrer en sécurité ?",
    answer: "Sevrage progressif sur minimum 4-12 semaines : réduction de 10-25% de la dose toutes les 1-2 semaines. Si difficile : substituer par diazépam puis décroissance. Traiter l'insomnie sous-jacente par TCC-i (thérapie cognitivo-comportementale de l'insomnie).",
    tags: ["sevrage BZD", "zopiclone", "progressif", "TCC-i"]
  },

    {
    id: 16004,
    chapter: "ch16",
    rang: "A",
    question: "Femme 80 ans, ACFA, sous rivaroxaban, clairance créatinine 28 mL/min. Que faire ?",
    answer: "Rivaroxaban : CI si DFG <15 mL/min, adapter à 15 mg/j (au lieu de 20) si DFG 15-49. DFG 28 mL/min : réduire à 15 mg/j. Si DFG <15 : préférer un AVK (warfarine, INR 2-3). Surveillance rapprochée de la fonction rénale.",
    tags: ["rivaroxaban", "insuffisance rénale", "AOD", "adaptation"]
  },

    {
    id: 16005,
    chapter: "ch16",
    rang: "A",
    question: "Homme 84 ans, insuffisance cardiaque sous IEC + béta-bloquant + furosémide. Créatinine +30% en 1 semaine. Que faire ?",
    answer: "IRA fonctionnelle : réduire ou arrêter le diurétique (furosémide) en 1ère intention. Hydratation orale si déshydratation. Conserver IEC et béta-bloquant si pas d'hyperkaliémie ni d'oligoanurie. Surveiller ionogramme, créatinine, PA, poids quotidiennement.",
    tags: ["IEC", "diurétique", "IRA fonctionnelle", "insuffisance cardiaque"]
  },

    {
    id: 16006,
    chapter: "ch16",
    rang: "A",
    question: "Quels sont les outils validés pour identifier les médicaments potentiellement inappropriés (MPI) chez le sujet âgé ?",
    answer: "1. Critères de Beers (Société Américaine de Gériatrie) : liste MPI à éviter ≥65 ans. 2. Critères STOPP/START (européens) : STOPP = médicaments à arrêter, START = traitements manquants. 3. Critères LAROCHE (français). Complémentaires.",
    tags: ["Beers", "STOPP/START", "MPI", "ordonnance"]
  },

    {
    id: 16007,
    chapter: "ch16",
    rang: "A",
    question: "Femme 78 ans, ostéoporose, corticothérapie prolongée (prednisone 10 mg/j depuis 2 ans). Quelles complications et prévention ?",
    answer: "Risques : ostéoporose cortisonique (fractures vertébrales), myopathie (chutes), HTA, diabète cortisonique, infections. Prévention : calcium 1200 mg/j + vitamine D 800 UI/j, bisphosphonates (alendronate), dépistage HTA et diabète.",
    tags: ["corticothérapie", "ostéoporose", "prévention", "complications"]
  },

    {
    id: 16008,
    chapter: "ch16",
    rang: "A",
    question: "Homme 77 ans, HBP, prescrit hydroxyzine pour anxiété. Quel effet indésirable redouter ?",
    answer: "Hydroxyzine = antihistaminique à fort effet anticholinergique. Chez l'homme avec HBP : risque de rétention aiguë d'urine. Aussi : confusion, constipation, sécheresse buccale, glaucome par fermeture de l'angle. Contre-indiqué. Alternatives : IRS, buspirone.",
    tags: ["hydroxyzine", "anticholinergique", "rétention urinaire", "HBP"]
  },

    {
    id: 16009,
    chapter: "ch16",
    rang: "B",
    question: "Comment le vieillissement modifie-t-il la pharmacocinétique des médicaments ? (4 modifications principales)",
    answer: "1. Absorption : inchangée. 2. Distribution : eau corporelle diminuée (concentration hydrophiles augmentée), masse grasse augmentée (accumulation liposolubles), albumine diminuée (fraction libre augmentée). 3. Métabolisme hépatique diminué. 4. Élimination rénale diminuée (DFG réduit).",
    tags: ["pharmacocinétique", "vieillissement", "distribution", "élimination"]
  },

    {
    id: 16010,
    chapter: "ch16",
    rang: "A",
    question: "Femme 80 ans, sous warfarine. Elle démarre amoxicilline-clavulanate. Quel risque et conduite ?",
    answer: "Les antibiotiques inhibent la flore intestinale productrice de vitamine K → potentialisation des AVK → risque de surdosage (INR augmenté). Contrôler l'INR à J3-5 après l'introduction. Informer la patiente des signes de surdosage (saignements).",
    tags: ["AVK", "warfarine", "antibiotique", "interaction", "INR"]
  },

    {
    id: 16011,
    chapter: "ch16",
    rang: "A",
    question: "Homme 82 ans, atorvastatine 80 mg/j depuis 6 mois, douleurs musculaires. Quels examens et conduite ?",
    answer: "Doser les CPK. Si CPK >5N : arrêt de la statine. Si CPK <5N mais myalgies invalidantes : réduire la dose ou changer de statine (rosuvastatine 5-10 mg/j). À 82 ans, réévaluer l'indication de la statine en prévention primaire (bénéfice souvent limité).",
    tags: ["statine", "myopathie", "CPK", "déprescription"]
  },

    {
    id: 16012,
    chapter: "ch16",
    rang: "A",
    question: "Femme 79 ans, sous tramadol 50 mg x3/j. Nausées, vertiges et confusion légère. Quels mécanismes et alternatives ?",
    answer: "Tramadol : opioïde + inhibiteur recapture sérotoninergique/noradrénergique. EI fréquents chez sujet âgé : nausées, vertiges, confusion, syndrome sérotoninergique, convulsions (seuil abaissé). Alternative : oxycodone LP 5 mg ou morphine orale. STOPP recommande d'éviter tramadol >75 ans.",
    tags: ["tramadol", "effets indésirables", "STOPP", "alternatives"]
  },

    {
    id: 16013,
    chapter: "ch16",
    rang: "B",
    question: "Quel est l'impact de la dénutrition sur la pharmacocinétique des médicaments ?",
    answer: "Dénutrition : albumine diminuée → fraction libre augmentée des médicaments très liés aux protéines (phénytoïne, valproate, AVK, AINS) → risque de surdosage à dose habituelle. Aussi : débit hépatique réduit (métabolisme diminué), masse musculaire réduite (volume distribution réduit).",
    tags: ["dénutrition", "pharmacocinétique", "albumine", "fraction libre"]
  },

    {
    id: 16014,
    chapter: "ch16",
    rang: "A",
    question: "Homme 76 ans, ACFA asymptomatique, CHADS2-VASc = 4. Quel traitement anticoagulant proposer ?",
    answer: "AOD en 1ère intention (dabigatran, rivaroxaban, apixaban, edoxaban) sauf CI (valvulopathie mitrale, valve mécanique). AVK si DFG <15 ou compliance aux AOD mauvaise. Apixaban 2,5 mg x2/j si ≥2 critères parmi : âge ≥80 ans, poids ≤60 kg, créatinine ≥133 µmol/L.",
    tags: ["ACFA", "anticoagulation", "CHADS2-VASc", "AOD"]
  },

    {
    id: 16015,
    chapter: "ch16",
    rang: "A",
    question: "Femme 84 ans, AINS (ibuprofène) pour douleurs articulaires, DFG 55 mL/min, HTA traitée. Quels risques et alternative ?",
    answer: "AINS chez sujet âgé : risque IRA (vasoconstriction rénale), rétention hydrosodée (aggravation HTA et IC), ulcère gastroduodénal. Alternative : paracétamol 1g x4/j (1ère intention), opioïdes faibles si insuffisant. Si AINS indispensable : associer un IPP.",
    tags: ["AINS", "contre-indication", "rein", "alternative"]
  },

    {
    id: 16016,
    chapter: "ch16",
    rang: "B",
    question: "Qu'est-ce que la 'cascade médicamenteuse' ? Donnez un exemple clinique.",
    answer: "Prescription d'un nouveau médicament pour traiter l'effet indésirable d'un médicament préexistant (au lieu de stopper le responsable). Exemple : AINS → HTA → antihypertenseur supplémentaire. Ou : métoclopramide prescrit pour nausées → syndrome parkinsonien → antiparkinsonien.",
    tags: ["cascade médicamenteuse", "iatrogénie", "exemple"]
  },

    {
    id: 16017,
    chapter: "ch16",
    rang: "A",
    question: "Homme 80 ans, Parkinson, traité par L-DOPA. Son médecin prescrit du métoclopramide pour nausées. Quel risque ?",
    answer: "Interaction majeure : métoclopramide = antagoniste dopaminergique central → aggravation sévère du syndrome parkinsonien (rigidité, akinésie, risque de chute). Formellement contre-indiqué dans la maladie de Parkinson. Alternative : dompéridone (action périphérique).",
    tags: ["Parkinson", "métoclopramide", "antagoniste dopaminergique", "interaction"]
  },

    {
    id: 16018,
    chapter: "ch16",
    rang: "A",
    question: "Femme 78 ans, sous amlodipine, démarre clarithromycine prescrite par ORL. Le lendemain : hypotension sévère. Quelle interaction ?",
    answer: "Clarithromycine = inhibiteur puissant du CYP3A4 → inhibition du métabolisme de l'amlodipine (substrat CYP3A4) → accumulation d'amlodipine → hypotension sévère. À éviter. Alternative : azithromycine (moins d'interaction CYP3A4).",
    tags: ["CYP3A4", "amlodipine", "clarithromycine", "interaction"]
  },

    {
    id: 16019,
    chapter: "ch16",
    rang: "A",
    question: "Homme 83 ans, ACFA sous apixaban, hématome sous-dural. INR non applicable (AOD). Comment antagoniser ?",
    answer: "AOD anti-Xa (apixaban, rivaroxaban) : antidote = andexanet alfa (Ondexxya). Si non disponible : CCP 4 facteurs (50 UI/kg). Évaluer : heure dernière prise, DFG (accumulation si IRC). Chirurgie neurochirurgicale urgente si nécessaire.",
    tags: ["apixaban", "antagoniste", "andexanet alfa", "hématome"]
  },

    {
    id: 16020,
    chapter: "ch16",
    rang: "B",
    question: "Femme 81 ans, douleurs cancéreuses, morphine 30 mg LP x2/j. Elle a une constipation sévère. Quel traitement systématique associer ?",
    answer: "Laxatif stimulant systématique dès l'introduction des opioïdes : macrogol (PEG) + bisacodyl. Ou naloxégol (Moventig) : antagoniste périphérique des récepteurs µ aux opioïdes, efficace sur la constipation induite par opioïdes sans antagoniser l'analgésie centrale.",
    tags: ["morphine", "constipation", "laxatif", "naloxégol"]
  },

    {
    id: 16021,
    chapter: "ch16",
    rang: "A",
    question: "Homme 84 ans, diabétique type 2, DFG 32 mL/min. Il prend metformine 850 mg x2/j. Que faire ?",
    answer: "DFG 30-45 mL/min : metformine demi-dose (850 mg/j max) avec surveillance trimestrielle de la fonction rénale. Si DFG <30 mL/min : arrêt définitif. Alternative : inhibiteur DPP-4 (sitagliptine), insuline basale, gliclazide à faible dose.",
    tags: ["metformine", "diabète", "insuffisance rénale", "adaptation"]
  },

    {
    id: 16022,
    chapter: "ch16",
    rang: "A",
    question: "Femme 77 ans, sous IPP (oméprazole) depuis 5 ans pour 'protection gastrique'. Est-ce justifié et quels risques au long cours ?",
    answer: "IPP au long cours : carence magnésium, B12, calcium (ostéoporose), infections digestives (C.difficile, pneumonies). Réévaluer l'indication : IPP justifié si RGO documenté, AINS au long cours, ATCD ulcère. Si non justifié : déprescrire progressivement (effet rebond possible).",
    tags: ["IPP", "déprescription", "long cours", "complications"]
  },

    {
    id: 16023,
    chapter: "ch16",
    rang: "B",
    question: "Comment évaluer la fonction rénale pour adapter les posologies chez le sujet âgé très dénutri ?",
    answer: "Cockcroft-Gault sous-estime le DFG chez le dénutri (faible créatinine musculaire). Pour l'adaptation médicamenteuse : Cockcroft reste la référence des SmPC. CKD-EPI (sans prise en compte du poids) est plus fiable pour estimer le DFG réel. Cystatine C si doute majeur.",
    tags: ["DFG", "Cockcroft", "CKD-EPI", "dénutrition"]
  },

    {
    id: 16024,
    chapter: "ch16",
    rang: "A",
    question: "Homme 79 ans, HTA, prescrit tamsulozine (alpha-bloquant) pour HBP. Il consulte pour malaise post-mictionnel. Quel mécanisme ?",
    answer: "Hypotension orthostatique post-mictionnelle : les alpha-1 bloquants induisent une vasodilatation périphérique, potentialisée par les antihypertenseurs. Le malaise post-mictionnel est une forme de syncope vasovagale. Conseils : se lever lentement, réévaluer le traitement antihypertenseur.",
    tags: ["tamsulozine", "alpha-bloquant", "hypotension orthostatique", "HBP"]
  },

    {
    id: 16025,
    chapter: "ch16",
    rang: "A",
    question: "Femme 82 ans, prescription d'alendronate pour ostéoporose. Quelles sont les règles de prise impératives ?",
    answer: "Alendronate 70 mg/semaine : prise à jeun, debout ou assis (jamais couché), avec un grand verre d'eau plate, 30-60 minutes avant tout aliment ou médicament. Ne pas s'allonger pendant 30-60 min (risque d'oesophagite). Bilan dentaire avant traitement (risque ONM).",
    tags: ["alendronate", "bisphosphonate", "règles de prise", "oesophagite"]
  },

    {
    id: 16026,
    chapter: "ch16",
    rang: "B",
    question: "Qu'est-ce que la déprescription et quels principes guident la démarche chez le sujet âgé fragile ?",
    answer: "Déprescription : réduction ou arrêt délibéré de médicaments inappropriés. Principes : 1. Lister tous les médicaments et leurs indications. 2. Identifier les MPI (STOPP, Beers). 3. Prioriser les médicaments à risque élevé. 4. Arrêter progressivement. 5. Informer le patient et la famille.",
    tags: ["déprescription", "STOPP", "principes", "fragile"]
  },

    {
    id: 16027,
    chapter: "ch16",
    rang: "A",
    question: "Homme 81 ans, douleurs ostéoarthrosiques EVA 6/10, sous paracétamol 4g/j insuffisant. Quelle est la prochaine étape analgésique ?",
    answer: "Palier 2 : codéine (attention constipation, confusion) ou opioïde faible (tapentadol 25-50 mg x2/j). Alternative palier 3 faible dose : oxycodone 5 mg LP/12h. Éviter le tramadol >75 ans (STOPP). Toujours associer un laxatif aux opioïdes.",
    tags: ["douleur", "paliers", "opioïdes", "analgésie"]
  },

    {
    id: 16028,
    chapter: "ch16",
    rang: "A",
    question: "Femme 76 ans, ACFA valvulaire (prothèse mitrale mécanique). Quel anticoagulant est indiqué ?",
    answer: "AVK (warfarine ou fluindione) obligatoires. Les AOD sont formellement contre-indiqués en cas de FA valvulaire (prothèse mécanique, sténose mitrale sévère). INR cible : 2,5-3,5 selon le type de valve.",
    tags: ["valve mécanique", "AVK", "AOD contre-indiqué", "anticoagulation"]
  },

    {
    id: 16029,
    chapter: "ch16",
    rang: "B",
    question: "Homme 85 ans, ICFEp, sous furosémide et IEC. Son médecin veut ajouter de la spironolactone. Quels risques ?",
    answer: "Hyperkaliémie (triple blocage SRAA : IEC + spironolactone + si DFG réduit). Risque majoré si DFG <45 mL/min. Avant introduction : vérifier K+ et DFG (K+ <5, DFG >30). Surveillance hebdomadaire du K+ les 4 premières semaines.",
    tags: ["spironolactone", "hyperkaliémie", "ICFEp", "surveillance"]
  },

    {
    id: 16030,
    chapter: "ch16",
    rang: "A",
    question: "Femme 79 ans, dépression, IRS prescrit. À J5 : oedème des jambes, prise de poids 3 kg, confusion. Quel diagnostic ?",
    answer: "SIADH sous IRS : hyponatrémie probable. Bilan ionique en urgence. Arrêt de l'IRS si Na+ <130 mmol/L. Correction lente (risque de myélinolyse si correction trop rapide). Réévaluer le choix de l'antidépresseur.",
    tags: ["SIADH", "IRS", "hyponatrémie", "urgence"]
  },

    {
    id: 16031,
    chapter: "ch16",
    rang: "A",
    question: "Homme 80 ans, Alzheimer sous donépézil 10 mg/j. Famille signale bradycardie sinusale à 45 bpm. Quelle cause médicamenteuse ?",
    answer: "Donépézil (IChE) : effet cholinergique → bradycardie, blocs auriculo-ventriculaires, surtout si association avec béta-bloquants ou diltiazem. Conduite : ECG, Holter. Réduire à 5 mg/j ou passer à la galantamine. Arrêt si BAV ou bradycardie symptomatique.",
    tags: ["donépézil", "bradycardie", "IChE", "cholinergique"]
  },

    {
    id: 16032,
    chapter: "ch16",
    rang: "B",
    question: "Homme 78 ans, diabétique sous gliclazide. Quels facteurs aggravent le risque d'hypoglycémie nocturne chez le sujet âgé ?",
    answer: "Facteurs de risque : IRC (accumulation du sulfamide), âge >75 ans (diminution du glucagon et gluconéogenèse), jeûne, interactions médicamenteuses (fluconazole, AVK). Prévention : dose minimale efficace de gliclazide, éducation sur les signes d'hypoglycémie, collation nocturne.",
    tags: ["sulfamide", "hypoglycémie", "gliclazide", "facteurs de risque"]
  },

    {
    id: 16033,
    chapter: "ch16",
    rang: "A",
    question: "Quelle est la règle de la 1ère prescription chez le sujet âgé pour limiter la iatrogénie ?",
    answer: "'Start low, go slow' : commencer à la plus faible dose efficace, augmenter progressivement, fixer un objectif thérapeutique clair, réévaluer régulièrement l'indication et la tolérance, surveiller les effets indésirables, simplifier l'ordonnance, adapter à la fonction rénale.",
    tags: ["start low go slow", "prescription", "iatrogénie"]
  },

    {
    id: 16034,
    chapter: "ch16",
    rang: "A",
    question: "Femme 82 ans, décompensation cardiaque, furosémide augmenté de 40 à 80 mg/j. Quels paramètres surveiller à J3 ?",
    answer: "Ionogramme sanguin (hypokaliémie : risque de troubles du rythme sous digitaliques), créatinine (IRA fonctionnelle), natrémie, poids quotidien, PA, diurèse. Supplémenter en potassium si K+ <3,5 mmol/L.",
    tags: ["furosémide", "surveillance", "ionogramme", "insuffisance cardiaque"]
  },

    {
    id: 16035,
    chapter: "ch16",
    rang: "B",
    question: "Quel est le score utilisé pour évaluer le risque hémorragique sous anticoagulants chez le sujet âgé ?",
    answer: "Score HAS-BLED (Hypertension, Abnormal renal/liver function, Stroke, Bleeding history, Labile INR, Elderly >65 ans, Drugs/Alcohol) : score ≥3 = risque hémorragique élevé. Ne contre-indique pas l'anticoagulation si CHADS2-VASc élevé, mais oriente vers des mesures de réduction du risque.",
    tags: ["HAS-BLED", "hémorragie", "anticoagulants", "score"]
  },

    {
    id: 16036,
    chapter: "ch16",
    rang: "A",
    question: "Homme 80 ans, démence légère, olanzapine 10 mg pour agitation nocturne. Quels sont les risques spécifiques des neuroleptiques atypiques chez le dément ?",
    answer: "Risques : excès de mortalité (x1,6-1,7), AVC ischémique (x3), sédation excessive, syndrome extrapyramidal, HO, diabète, QT long. Black box warning FDA. Utiliser uniquement si échec des approches non médicamenteuses et risque vital.",
    tags: ["neuroleptiques", "démence", "mortalité", "black box"]
  },

    {
    id: 16037,
    chapter: "ch16",
    rang: "A",
    question: "Femme 83 ans, sous IRS depuis 6 mois et ibuprofène régulièrement pour douleurs. Quel risque d'interaction ?",
    answer: "IRS + AINS = risque majoré de saignement digestif (surtout gastrique). Les IRS réduisent l'agrégation plaquettaire (déplétion sérotonine plaquettaire). L'AINS inhibe les COX, favorisant les ulcères. Éviter cette association ou protéger par IPP si indispensable.",
    tags: ["IRS", "AINS", "saignement", "interaction", "plaquettes"]
  },

    {
    id: 16038,
    chapter: "ch16",
    rang: "B",
    question: "Homme 79 ans, épileptique sous phénytoïne depuis 20 ans. Quelle surveillance spécifique et quel risque osseux ?",
    answer: "Dosage plasmatique régulier (marge thérapeutique : 10-20 µg/mL), NFS (aplasie). Risque osseux : induction des CYP hépatiques → catabolisme accru de la vitamine D → ostéomalacie/ostéoporose. Supplémenter en vitamine D systématiquement.",
    tags: ["phénytoïne", "surveillance", "ostéomalacie", "vitamine D"]
  },

    {
    id: 16039,
    chapter: "ch16",
    rang: "A",
    question: "Femme 80 ans, sous AVK pour phlébite ancienne. INR à 5,2 sans saignement actif. Quelle conduite ?",
    answer: "INR 5-9 sans saignement : arrêt 1-2 prises d'AVK + vitamine K orale 1-2,5 mg + contrôle INR à 24-48h. Si INR >9 ou saignement majeur : vitamine K 5-10 mg IV + PPSB IV (CCP4 facteurs) selon urgence. Rechercher la cause du surdosage.",
    tags: ["AVK", "surdosage", "INR", "vitamine K", "PPSB"]
  },

    {
    id: 16040,
    chapter: "ch16",
    rang: "A",
    question: "Homme 85 ans, 10 médicaments. Comment organiser la conciliation médicamenteuse à l'entrée en hospitalisation ?",
    answer: "Conciliation médicamenteuse : 1. Recueillir la liste exhaustive (ordonnances, pharmacie, patient). 2. Comparer avec la prescription hospitalière. 3. Documenter les divergences. 4. Corriger les erreurs. 5. Transmettre à la sortie. Rôle clé du pharmacien clinicien.",
    tags: ["conciliation médicamenteuse", "hospitalisation", "pharmacien", "erreur"]
  }
];

if (typeof module !== 'undefined' && module.exports) { module.exports = { EVC_FLASHCARDS }; }
