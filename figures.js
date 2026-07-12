const FIGURES = {"1.1": {"src": "images/crops/crop_p031_0.jpg", "desc": "Bouchon 1+2+3"}, "2.3": {"src": "images/crops/crop_p049_0.jpg", "desc": "EGS multidim"}, "6.6": {"src": "images/crops/crop_p110_0.jpg", "desc": "Osteoporose T<=-2,5"}, "7.1": {"src": "images/crops/crop_p126_0.jpg", "desc": "Arthrose cartilage"}, "7.2": {"src": "images/crops/crop_p126_0.jpg", "desc": "Heberden/Bouchard"}, "7.3": {"src": "images/crops/crop_p128_0.jpg", "desc": "Coxarthrose"}, "7.5": {"src": "images/crops/crop_p132_0.jpg", "desc": "Gonarthrose"}, "7.6": {"src": "images/crops/crop_p132_0.jpg", "desc": "IRM menisque"}, "7.7": {"src": "images/crops/crop_p133_0.jpg", "desc": "Echo epanchement"}, "7.9": {"src": "images/crops/crop_p136_0.jpg", "desc": "Erosive mante"}, "7.10": {"src": "images/crops/crop_p138_0.jpg", "desc": "Chondrocalcinose"}, "7.11": {"src": "images/crops/crop_p139_0.jpg", "desc": "PPR VS>40"}, "7.12": {"src": "images/crops/crop_p138_0.jpg", "desc": "Horton corticoide"}, "8.3": {"src": "images/p148_0.jpg", "desc": "EVA/ECPA"}, "9.1": {"src": "images/crops/crop_p162_0.jpg", "desc": "IRM Alzheimer hippo"}, "9.2": {"src": "images/crops/crop_p162_0.jpg", "desc": "TDM lacunes"}, "9.3": {"src": "images/crops/crop_p163_0.jpg", "desc": "Lewy fluctuations"}, "9.5": {"src": "images/crops/crop_p166_0.jpg", "desc": "HSD croissant"}, "9.6": {"src": "images/crops/crop_p167_0.jpg", "desc": "Horloge 11h10"}, "12.2": {"src": "images/crops/crop_p215_0.jpg", "desc": "TUG>20s"}, "12.3": {"src": "images/crops/crop_p216_0.jpg", "desc": "Tinetti<19"}, "12.4": {"src": "images/crops/crop_p217_0.jpg", "desc": "Unipodal>5s"}, "13.6": {"src": "images/crops/crop_p234_0.jpg", "desc": "Escarres Norton"}, "13.7": {"src": "images/crops/crop_p237_0.jpg", "desc": "Kine verticalisation"}, "13.10": {"src": "images/crops/crop_p240_0.jpg", "desc": "SNG/gastrostomie"}, "13.11": {"src": "images/crops/crop_p241_0.jpg", "desc": "HBPM"}, "13.12": {"src": "images/crops/crop_p241_0.jpg", "desc": "Contention"}, "15.1": {"src": "images/crops/crop_p271_0.jpg", "desc": "Bubo debitmetrie"}, "15.3": {"src": "images/crops/crop_p276_0.jpg", "desc": "Reeducation perinee"}, "16.1": {"src": "images/crops/crop_p294_0.jpg", "desc": "STOPP/START"}, "18.1": {"src": "images/crops/crop_p334_1.jpg", "desc": "EVC ouvertes"}, "20.1": {"src": "images/crops/crop_p368_8.jpg", "desc": "ECG BAV"}, "20.2": {"src": "images/crops/crop_p371_7.jpg", "desc": "Radio col femoral"}};
const TABLES = {"1.1":{"src":"images/figures/page_035.jpg","page":35,"desc":"Mécanismes cellulaires et moléculaires du vieillissement"},"2.3":{"src":"images/figures/page_055.jpg","page":55,"desc":"Critères de fragilité de Fried"},"3.2":{"src":"images/figures/page_064.jpg","page":64,"desc":"Échelle des activités de la vie quotidienne (AVQ, ou ADL de Katz)"},"3.4":{"src":"images/figures/page_066.jpg","page":66,"desc":"Grille AGGIR (autonomie gérontologie groupes iso-ressources)"},"4.1":{"src":"images/figures/page_079.jpg","page":79,"desc":"Différences entre curatelle et tutelle"},"5.1":{"src":"images/figures/page_091.jpg","page":91,"desc":"Facteurs aggravant une presbyacousie"},"5.2":{"src":"images/figures/page_094.jpg","page":94,"desc":"Facteurs de risque de DMLA"},"6.1":{"src":"images/figures/page_102.jpg","page":102,"desc":"Évolution du capital osseux selon les différentes étapes de la vie"},"6.2":{"src":"images/figures/page_112.jpg","page":112,"desc":"Effets indésirables des bisphosphonates"},"7.1":{"src":"images/figures/page_121.jpg","page":121,"desc":"Dégradation cartilagineuse dans l"},"7.2":{"src":"images/figures/page_122.jpg","page":122,"desc":"Facteurs de risque de l"},"7.3":{"src":"images/figures/page_124.jpg","page":124,"desc":"Indice fonctionnel des coxopathies de Lequesne"},"7.4":{"src":"images/figures/page_131.jpg","page":131,"desc":"Caractéristiques comparées des arthroses fémoro-tibiale et fémoro-patellaire"},"8.1":{"src":"images/figures/page_145.jpg","page":145,"desc":"Les six comportements douloureux et leurs expressions symptomatiques chez la personne âgée"},"8.2":{"src":"images/figures/page_146.jpg","page":146,"desc":"Caractéristiques de la douleur aiguë et de la douleur chronique"},"10.1":{"src":"images/figures/page_182.jpg","page":182,"desc":"Maladies somatiques et médicaments fréquemment associés à la dépression"},"10.3":{"src":"images/figures/page_183.jpg","page":183,"desc":"Geriatric Depression Scale (GDS) : version 4 items"},"12.1":{"src":"images/figures/page_212.jpg","page":212,"desc":"Vieillissement physiologique et pathologique des systèmes d"},"12.3":{"src":"images/figures/page_219.jpg","page":219,"desc":"Facteurs précipitants de la chute"},"12.4":{"src":"images/figures/page_219.jpg","page":219,"desc":"Facteurs iatrogènes"},"13.1":{"src":"images/figures/page_229.jpg","page":229,"desc":"Causes du syndrome d"},"13.3":{"src":"images/figures/page_239.jpg","page":239,"desc":"Échelle de Braden"},"14.1":{"src":"images/figures/page_250.jpg","page":250,"desc":"Chiffres clefs de la nutrition de la personne âgée"},"14.2":{"src":"images/crops/crop_p254_0.jpg","page":254,"desc":"Prévalence de la dénutrition dans la population âgée selon le lieu de vie"},"14.6":{"src":"images/figures/page_261.jpg","page":261,"desc":"Stratégie de prise en charge nutritionnelle d"},"15.1":{"src":"images/figures/page_273.jpg","page":273,"desc":"Facteurs précipitants réversibles d"},"16.2":{"src":"images/figures/page_290.jpg","page":290,"desc":"Rappel sur les vaccins chez les personnes âgées"},"16.4":{"src":"images/figures/page_292.jpg","page":292,"desc":"Interactions pharmacocinétiques de médicaments utilisés en gériatrie (liste non"}};
const PAGE_IMAGES = {"31": ["images/p031_0.jpg", "images/crops/crop_p031_0.jpg"], "39": ["images/p039_0.jpg", "images/crops/crop_p039_0.jpg"], "49": ["images/p049_0.jpg", "images/p049_1.jpg", "images/p049_2.jpg", "images/p049_3.jpg"], "51": ["images/p051_0.jpg", "images/crops/crop_p051_0.jpg"], "62": ["images/p062_0.jpg"], "70": ["images/p070_0.jpg", "images/crops/crop_p070_0.jpg"], "96": ["images/p096_0.jpg"], "104": ["images/p104_0.jpg", "images/p104_1.jpg", "images/p104_2.jpg", "images/crops/crop_p104_0.jpg"], "105": ["images/p105_0.png", "images/crops/crop_p105_0.jpg", "images/crops/crop_p105_1.jpg"], "109": ["images/p109_0.jpg"], "110": ["images/crops/crop_p110_0.jpg"], "111": ["images/p111_0.jpg", "images/crops/crop_p111_0.jpg"], "126": ["images/p126_0.jpg", "images/crops/crop_p126_0.jpg"], "128": ["images/crops/crop_p128_0.jpg"], "129": ["images/p129_0.png", "images/p129_1.jpg", "images/crops/crop_p129_0.jpg", "images/crops/crop_p129_1.jpg"], "132": ["images/p132_0.jpg", "images/p132_1.jpg", "images/p132_2.png", "images/crops/crop_p132_0.jpg"], "133": ["images/p133_0.jpg", "images/crops/crop_p133_0.jpg"], "135": ["images/p135_0.jpg", "images/crops/crop_p135_0.jpg"], "136": ["images/p136_0.jpg", "images/crops/crop_p136_0.jpg"], "138": ["images/crops/crop_p138_0.jpg"], "139": ["images/p139_0.jpg", "images/p139_1.jpg", "images/p139_2.jpg", "images/crops/crop_p139_0.jpg"], "148": ["images/p148_0.jpg"], "152": ["images/p152_0.jpg"], "162": ["images/p162_0.jpg", "images/crops/crop_p162_0.jpg"], "163": ["images/p163_0.png", "images/p163_1.jpg", "images/crops/crop_p163_0.jpg", "images/crops/crop_p163_1.jpg"], "166": ["images/p166_0.jpg", "images/crops/crop_p166_0.jpg"], "167": ["images/p167_0.jpg", "images/p167_1.jpg", "images/crops/crop_p167_0.jpg", "images/crops/crop_p167_1.jpg"], "169": ["images/p169_0.jpg", "images/p169_1.jpg", "images/crops/crop_p169_0.jpg", "images/crops/crop_p169_1.jpg"], "174": ["images/p174_0.jpg"], "188": ["images/p188_0.jpg"], "201": ["images/p201_0.jpg"], "205": ["images/p205_0.jpg"], "215": ["images/p215_0.jpg", "images/p215_1.jpg", "images/crops/crop_p215_0.jpg", "images/crops/crop_p215_1.jpg"], "216": ["images/p216_0.jpg", "images/crops/crop_p216_0.jpg"], "217": ["images/p217_0.jpg", "images/crops/crop_p217_0.jpg"], "221": ["images/p221_0.jpg"], "222": ["images/p222_0.jpg"], "230": ["images/p230_0.jpg"], "234": ["images/p234_0.jpg", "images/crops/crop_p234_0.jpg"], "235": ["images/p235_0.jpg", "images/crops/crop_p235_0.jpg"], "237": ["images/p237_0.jpg", "images/p237_1.jpg", "images/crops/crop_p237_0.jpg", "images/crops/crop_p237_1.jpg"], "240": ["images/p240_0.jpg", "images/p240_1.jpg", "images/p240_2.jpg", "images/p240_3.jpg"], "241": ["images/p241_0.jpg", "images/p241_1.jpg", "images/p241_2.jpg", "images/p241_3.jpg"], "244": ["images/p244_0.jpg"], "253": ["images/p253_0.jpg"], "254": ["images/crops/crop_p254_0.jpg"], "255": ["images/crops/crop_p255_0.jpg"], "262": ["images/p262_0.jpg", "images/p262_1.jpg", "images/p262_2.jpg", "images/p262_3.jpg"], "264": ["images/crops/crop_p264_0.jpg"], "265": ["images/p265_0.jpg"], "271": ["images/p271_0.jpg", "images/crops/crop_p271_0.jpg", "images/crops/crop_p271_1.jpg"], "276": ["images/p276_0.jpg", "images/crops/crop_p276_0.jpg"], "277": ["images/p277_0.jpg", "images/crops/crop_p277_0.jpg"], "278": ["images/p278_0.jpg", "images/crops/crop_p278_0.jpg"], "288": ["images/p288_0.jpg"], "289": ["images/crops/crop_p289_0.jpg"], "291": ["images/crops/crop_p291_0.jpg"], "293": ["images/p293_0.jpg", "images/crops/crop_p293_0.jpg"], "294": ["images/p294_0.jpg", "images/p294_1.jpg", "images/crops/crop_p294_0.jpg", "images/crops/crop_p294_1.jpg"], "295": ["images/p295_0.jpg"], "326": ["images/p326_0.jpg"], "334": ["images/p334_0.jpg", "images/crops/crop_p334_1.jpg"], "343": ["images/p343_0.jpg", "images/crops/crop_p343_1.jpg"], "368": ["images/p368_0.jpg", "images/crops/crop_p368_8.jpg"], "371": ["images/p371_0.jpg", "images/crops/crop_p371_7.jpg"]};
const CHAPTER_ILL = {"ch1": "images/p031_0.jpg", "ch2": "images/p049_0.jpg", "ch3": "images/p062_0.jpg", "ch5": "images/p096_0.jpg", "ch6": "images/p104_0.jpg", "ch7": "images/p126_0.jpg", "ch8": "images/p148_0.jpg", "ch9": "images/p162_0.jpg", "ch10": "images/p188_0.jpg", "ch11": "images/p201_0.jpg", "ch12": "images/p215_0.jpg", "ch13": "images/p230_0.jpg", "ch14": "images/p253_0.jpg", "ch15": "images/p271_0.jpg", "ch16": "images/p288_0.jpg", "ch17": "images/p326_0.jpg", "ch18": "images/p334_0.jpg", "ch20": "images/p368_0.jpg"};;

// CHAPTER_HERO - High-quality AI-generated illustrations using Grok Imagine (enriched)
// Preferred over old PDF crops for chapter headers. Fallback to CHAPTER_ILL if missing.
const CHAPTER_HERO = {
  "ch1": "images/chapters/educational/fried-criteria.jpg",
  "ch2": "images/chapters/ai-heroes/ch2-complex.jpg",
  "ch4": "images/chapters/ai-heroes/ch4-ethics.jpg",
  "ch6": "images/chapters/ai-heroes/ch6-bone.jpg",
  "ch8": "images/chapters/ai-heroes/ch8-pain.jpg",
  "ch9": "images/chapters/educational/delirium-vulnerability.jpg",
  "ch11": "images/chapters/educational/delirium-vulnerability.jpg",
  "ch12": "images/chapters/educational/ch12-falls-edu.jpg",
  "ch14": "images/chapters/ai-heroes/ch14-nutrition.jpg",
  "ch16": "images/chapters/ai-heroes/ch16-prescribing.jpg",
  "ch17": "images/chapters/ai-heroes/ch17-palliative.jpg"
};

// Additional educational visuals (more diagram-like, mechanism focused) for chapters and feed
const CHAPTER_EDU_VISUAL = {
  "ch12": "images/chapters/educational/ch12-tug-edu.jpg"
};

// Educational images for inline content in chapters (key mechanisms, to illustrate paragraphs)
const EDU_VISUALS = {
  "ch1": [
    {match: "physiopathologie|réserve fonctionnelle|vieillissement", img: "images/chapters/educational/ch1-extra-1.jpg", note: "Réserve fonctionnelle : déclin physiologique avec l'âge"},
    {match: "mécanisme|senescence|cellulaire|inflammaging", img: "images/chapters/educational/ch1-extra-2.jpg", note: "Mécanismes de sénescence cellulaire et inflammaging"},
    {match: "vieillissement|fragilité", img: "images/chapters/educational/ch1-1.jpg", note: "Fragilité et réserve fonctionnelle"},
    {match: "autonomie|ADL|indépendance", img: "images/chapters/educational/ch1-2.jpg", note: "Autonomie et évaluation"},
    {match: "cognition|mnésique", img: "images/chapters/educational/ch1-3.jpg", note: "Cognition et troubles"},
    {match: "fragilité|chute|nutrition", img: "images/chapters/educational/ch1-4.jpg", note: "Fragilité, chutes et nutrition"},
    {match: "physiopath|biologie", img: "images/chapters/educational/ch1-5.jpg", note: "Biologie du vieillissement"},
    {match: "prise en charge|prévention", img: "images/chapters/educational/ch1-6.jpg", note: "Prise en charge et prévention"}
  ],
  "ch2": [
    {match: "physiopathologie|évaluation|complexité|CGA|EGM", img: "images/chapters/educational/ch2-extra-1.jpg", note: "Évaluation gériatrique multidimensionnelle (CGA/EGM)"},
    {match: "complexité|évaluation|CGA", img: "images/chapters/educational/ch2-1.jpg", note: "Évaluation globale"},
    {match: "autonomie|ADL", img: "images/chapters/educational/ch2-2.jpg", note: "Autonomie"},
    {match: "cognition|confusion", img: "images/chapters/educational/ch2-3.jpg", note: "Cognition"},
    {match: "chute|risque", img: "images/chapters/educational/ch2-4.jpg", note: "Risque de chute"},
    {match: "prescription|iatrog", img: "images/chapters/educational/ch2-5.jpg", note: "Prescription"},
    {match: "multimorbidité|polypathologie", img: "images/chapters/educational/ch2-6.jpg", note: "Multimorbidité"}
  ],
  "ch3": [
    {match: "autonomie|ADL|IADL|indépendance|évaluation", img: "images/chapters/educational/ch3-extra-1.jpg", note: "Échelles ADL (Katz) vs IADL (Lawton)"},
    {match: "autonomie|ADL|indépendance", img: "images/chapters/educational/ch3-1.jpg", note: "Autonomie"},
    {match: "chute", img: "images/chapters/educational/ch3-2.jpg", note: "Chutes"},
    {match: "cognition", img: "images/chapters/educational/ch3-3.jpg", note: "Cognition"},
    {match: "nutrition", img: "images/chapters/educational/ch3-4.jpg", note: "Nutrition"},
    {match: "prescri", img: "images/chapters/educational/ch3-5.jpg", note: "Prescription"},
    {match: "éthique", img: "images/chapters/educational/ch3-6.jpg", note: "Éthique"}
  ],
  "ch4": [
    {match: "éthique|principes|capacité|autonomie|justice", img: "images/chapters/educational/ch4-extra-1.jpg", note: "Principes éthiques en gériatrie"},
    {match: "éthique|capacité", img: "images/chapters/educational/ch4-1.jpg", note: "Éthique et capacité"},
    {match: "autonomie", img: "images/chapters/educational/ch4-2.jpg", note: "Autonomie"},
    {match: "chute", img: "images/chapters/educational/ch4-3.jpg", note: "Chute"},
    {match: "delirium", img: "images/chapters/educational/ch4-4.jpg", note: "Delirium"},
    {match: "fragilité", img: "images/chapters/educational/ch4-5.jpg", note: "Fragilité"},
    {match: "prescri", img: "images/chapters/educational/ch4-6.jpg", note: "Prescription"}
  ],
  "ch5": [
    {match: "physiopath|sensoriel|vision|audition|presbytie|presbyacousie", img: "images/chapters/educational/ch5-extra-1.jpg", note: "Cascade des déficits sensoriels"},
    {match: "sensoriel|vision|audition", img: "images/chapters/educational/ch5-1.jpg", note: "Déficits sensoriels"},
    {match: "chute", img: "images/chapters/educational/ch5-2.jpg", note: "Chutes et sensoriel"},
    {match: "fragilité", img: "images/chapters/educational/ch5-3.jpg", note: "Fragilité"},
    {match: "prescri", img: "images/chapters/educational/ch5-4.jpg", note: "Prescription"},
    {match: "nutrition", img: "images/chapters/educational/ch5-5.jpg", note: "Nutrition"},
    {match: "cognition", img: "images/chapters/educational/ch5-6.jpg", note: "Cognition"}
  ],
  "ch6": [
    {match: "physiopathologie|remodelage|ostéoporose|déséquilibre|ostéoblastes", img: "images/chapters/educational/ch6-extra-1.jpg", note: "Physiopathologie du remodelage osseux et ostéoporose"},
    {match: "osseux|ostéoporose|os|remodelage", img: "images/chapters/educational/ch6-bone-aging.mp4", note: "Animation du vieillissement osseux"},
    {match: "chute|fracture", img: "images/chapters/educational/ch6-2.jpg", note: "Chutes et fractures"},
    {match: "fragilité|risque", img: "images/chapters/educational/ch6-3.jpg", note: "Facteurs de risque osseux"},
    {match: "densité|DEXA", img: "images/chapters/educational/ch6-4.jpg", note: "Évaluation densité osseuse"},
    {match: "prévention|exercice|vitamine", img: "images/chapters/educational/ch6-prevention-exercise.mp4", note: "Prévention par l'exercice"},
    {match: "physiopath|déséquilibre", img: "images/chapters/educational/ch6-6.jpg", note: "Physiopathologie ostéoporose"}
  ],
  "ch7": [
    {match: "physiopathologie|dégénérescence|cartilage|arthrose|ostéophyte", img: "images/chapters/educational/ch7-extra-1.jpg", note: "Mécanisme de dégénérescence cartilagineuse"},
    {match: "arthrose|articulaire|cartilage", img: "images/chapters/educational/ch7-1.jpg", note: "Vieillissement articulaire et cartilage"},
    {match: "ostéophyte|rétrécissement", img: "images/chapters/educational/ch7-2.jpg", note: "Ostéophytes et pincement articulaire"},
    {match: "genou|hanche|coxarthrose|gonarthrose", img: "images/chapters/educational/ch7-3.jpg", note: "Sites fréquents d'arthrose"},
    {match: "obésité|risque|traumatisme", img: "images/chapters/educational/ch7-4.jpg", note: "Facteurs de risque arthrose"},
    {match: "prise en charge|kiné|prothèse", img: "images/chapters/educational/ch7-5.jpg", note: "Prise en charge de l'arthrose"},
    {match: "physiopath|dégénérescence", img: "images/chapters/educational/ch7-6.jpg", note: "Dégénérescence cartilagineuse"}
  ],
  "ch8": [
    {match: "physiopathologie|mécanisme|nociceptif|neuropathique|douleur", img: "images/chapters/educational/ch8-extra-1.jpg", note: "Mécanismes de la douleur : nociceptif vs neuropathique"},
    {match: "douleur|évaluation|EVA|ECPA", img: "images/chapters/educational/ch8-1.jpg", note: "Évaluation de la douleur (EVA/ECPA)"},
    {match: "nociceptif|neuropathique", img: "images/chapters/educational/ch8-2.jpg", note: "Mécanismes de la douleur"},
    {match: "retentissement|sommeil|mobilité|humeur", img: "images/chapters/educational/ch8-3.jpg", note: "Retentissement de la douleur"},
    {match: "cycle|syndrome gériatrique", img: "images/chapters/educational/ch8-4.jpg", note: "Cycle vicieux de la douleur"},
    {match: "prise en charge|holistique|positionnement", img: "images/chapters/educational/ch8-5.jpg", note: "Prise en charge holistique"},
    {match: "comportementale|non communicant", img: "images/chapters/educational/ch8-6.jpg", note: "Évaluation comportementale"}
  ],
  "ch9": [
    {match: "physiopathologie|plaques|enchevêtrements|hippocampe|Alzheimer|tau|amyloïde", img: "images/chapters/educational/ch9-extra-1.jpg", note: "Physiopathologie Alzheimer : plaques, enchevêtrements et atrophie"},
    {match: "mnésique|plainte|Alzheimer|NCD", img: "images/chapters/educational/ch9-1.jpg", note: "Plainte mnésique vs trouble neurocognitif"},
    {match: "dépistage|MMS|MoCA|horloge", img: "images/chapters/educational/ch9-2.jpg", note: "Dépistage cognitif"},
    {match: "physiopath|plaques|enchevêtrements|hippocampe", img: "images/chapters/educational/ch9-3.jpg", note: "Physiopathologie Alzheimer"},
    {match: "sous-types|Lewy|vasculaire", img: "images/chapters/educational/ch9-4.jpg", note: "Sous-types de troubles neurocognitifs"},
    {match: "différentiel|causes réversibles|dépression", img: "images/chapters/educational/ch9-5.jpg", note: "Diagnostic différentiel et causes réversibles"},
    {match: "approche|famille|soins", img: "images/chapters/educational/ch9-6.jpg", note: "Approche holistique et familiale"}
  ],
  "ch10": [
    {match: "physiopathologie|mécanismes|dépression|atypique|pseudodémence|somatique", img: "images/chapters/educational/ch10-extra-1.jpg", note: "Mécanismes et présentation atypique de la dépression"},
    {match: "thymique|dépression|atypique|somatique", img: "images/chapters/educational/ch10-1.jpg", note: "Présentation atypique de la dépression"},
    {match: "GDS|évaluation", img: "images/chapters/educational/ch10-2.jpg", note: "Évaluation GDS-15"},
    {match: "pseudodémence|réversible", img: "images/chapters/educational/ch10-3.jpg", note: "Pseudodémence vs démence"},
    {match: "mécanismes|sérotonine|HPA|inflammation", img: "images/chapters/educational/ch10-4.jpg", note: "Mécanismes biologiques"},
    {match: "impacts|autonomie|chutes|nutrition", img: "images/chapters/educational/ch10-5.jpg", note: "Retentissement sur l'autonomie"},
    {match: "prise en charge|récupération|écoute", img: "images/chapters/educational/ch10-6.jpg", note: "Prise en charge et récupération"}
  ],
  "ch11": [
    {match: "confusionnel|delirium", img: "images/chapters/educational/ch11-delirium-mecanisme-compact.jpg", note: "Mécanisme du delirium (compact)"},
    {match: "vulnérabilité|précipitant", img: "images/chapters/educational/ch11-delirium-vulnerabilite-precipitants.jpg", note: "Modèle vulnérabilité-précipitants"},
    {match: "vulnérabilité|précipitant|confusion", img: "images/chapters/educational/ch11-delirium-vulnerabilite-precipitants-16x9.jpg", note: "Modèle vulnérabilité-précipitants du delirium (large 16:9)"},
    {match: "chute", img: "images/chapters/educational/ch11-1.jpg", note: "Lien avec chutes"},
    {match: "médicament|iatrog", img: "images/chapters/educational/ch11-2.jpg", note: "Médicaments déclencheurs"},
    {match: "cognition|confusion", img: "images/chapters/educational/ch11-3.jpg", note: "Impact cognitif"},
    {match: "prise en charge|prévention", img: "images/chapters/educational/ch11-4.jpg", note: "Prise en charge et prévention"}
  ],
  "ch12": [
    {match: "chute|risque|multifactoriel", img: "images/chapters/educational/ch12-chutes-multifactoriels-compact.jpg", note: "Risques multifactoriels de chute (compact)"},
    {match: "chute|risque|multifactoriel", img: "images/chapters/educational/ch12-chutes-multifactoriel-16x9.jpg", note: "Risques multifactoriels de chute (large 16:9)"},
    {match: "TUG|démarche|Timed", img: "images/chapters/educational/ch12-tug-edu.jpg", note: "Test TUG en étapes"},
    {match: "fragilité|Fried", img: "images/chapters/educational/ch12-1.jpg", note: "Fragilité"},
    {match: "chute", img: "images/chapters/educational/ch12-chute-multifactorielle-compact.jpg", note: "Démarche diagnostique chutes"},
    {match: "prescription|polyméd", img: "images/chapters/educational/ch12-2.jpg", note: "Médicaments"},
    {match: "nutrition|évaluation", img: "images/chapters/educational/ch12-3.jpg", note: "Nutrition et chutes"},
    {match: "diagnostic|évaluation", img: "images/chapters/educational/ch12-4.jpg", note: "Évaluation du risque"}
  ],
  "ch13": [
    {match: "immobilisation|alitement", img: "images/chapters/educational/ch13-cascade-immobilisation.jpg", note: "Cascade d'immobilisation"},
    {match: "immobilisation|alitement|cascade", img: "images/chapters/educational/ch13-cascade-immobilisation-16x9.jpg", note: "Cascade du syndrome d'immobilisation (large 16:9)"},
    {match: "chute", img: "images/chapters/educational/ch13-1.jpg", note: "Chutes et immobilisation"},
    {match: "fragilité", img: "images/chapters/educational/ch13-2.jpg", note: "Fragilité"},
    {match: "nutrition", img: "images/chapters/educational/ch13-3.jpg", note: "Nutrition"},
    {match: "prescri", img: "images/chapters/educational/ch13-4.jpg", note: "Prescription"},
    {match: "cognition", img: "images/chapters/educational/ch13-5.jpg", note: "Cognition et delirium"},
    {match: "prévention|prise en charge", img: "images/chapters/educational/ch13-6.jpg", note: "Prévention et prise en charge"}
  ],
  "ch14": [
    {match: "nutrition|état nutritionnel|MNA", img: "images/chapters/educational/ch14-evaluation-nutritionnelle.jpg", note: "Évaluation nutritionnelle"},
    {match: "sarcopénie|dénutrition|nutrition", img: "images/chapters/educational/ch14-denutrition-sarcopenie-cycle-16x9.jpg", note: "Cycle de la dénutrition et sarcopénie (16:9)"},
    {match: "fragilité", img: "images/chapters/educational/ch14-1.jpg", note: "Fragilité"},
    {match: "chute", img: "images/chapters/educational/ch14-2.jpg", note: "Chutes"},
    {match: "prescri", img: "images/chapters/educational/ch14-3.jpg", note: "Prescription"},
    {match: "cognition", img: "images/chapters/educational/ch14-4.jpg", note: "Cognition"},
    {match: "sarcopénie|dénutrition", img: "images/chapters/educational/ch14-denutrition-cycle-compact.jpg", note: "Sarcopénie et dénutrition"},
    {match: "diagnostic", img: "images/chapters/educational/ch14-5.jpg", note: "Diagnostic nutritionnel"}
  ],
  "ch15": [
    {match: "vésico|incontinence", img: "images/chapters/educational/ch15-incontinence-classification.jpg", note: "Classification des incontinences"},
    {match: "chute", img: "images/chapters/educational/ch15-1.jpg", note: "Chutes"},
    {match: "fragilité", img: "images/chapters/educational/ch15-2.jpg", note: "Fragilité"},
    {match: "nutrition", img: "images/chapters/educational/ch15-3.jpg", note: "Nutrition"},
    {match: "prescri", img: "images/chapters/educational/ch15-4.jpg", note: "Prescription"},
    {match: "cognition", img: "images/chapters/educational/ch15-5.jpg", note: "Cognition"},
    {match: "évaluation|diagnostic", img: "images/chapters/educational/ch15-6.jpg", note: "Évaluation troubles vésicaux"}
  ],
  "ch16": [
    {match: "prescri|polyméd|iatrog", img: "images/chapters/educational/ch16-prescription-appropriee.jpg", note: "Prescription appropriée"},
    {match: "prescri|polyméd|iatrog|STOPP|START", img: "images/chapters/educational/ch16-prescription-appropriee-flow-16x9.jpg", note: "Prescription appropriée (STOPP/START, 16:9)"},
    {match: "chute", img: "images/chapters/educational/ch16-1.jpg", note: "Chute et médicaments"},
    {match: "delirium|confusion", img: "images/chapters/educational/ch16-2.jpg", note: "Confusion iatrogène"},
    {match: "fragilité", img: "images/chapters/educational/ch16-3.jpg", note: "Fragilité"},
    {match: "cognition", img: "images/chapters/educational/ch16-4.jpg", note: "Cognition"},
    {match: "nutrition", img: "images/chapters/educational/ch16-5.jpg", note: "Nutrition"},
    {match: "évaluation|risque", img: "images/chapters/educational/ch16-6.jpg", note: "Outils d'évaluation"}
  ],
  "ch17": [
    {match: "palliatif|fin de vie", img: "images/chapters/educational/ch17-soins-palliatifs-decision.jpg", note: "Décision en soins palliatifs"},
    {match: "palliatif|fin de vie|décision|accompagnement", img: "images/chapters/educational/ch17-palliatif-decision-16x9.jpg", note: "Décision et accompagnement palliatif (16:9)"},
    {match: "chute", img: "images/chapters/educational/ch17-1.jpg", note: "Chutes"},
    {match: "fragilité", img: "images/chapters/educational/ch17-2.jpg", note: "Fragilité"},
    {match: "nutrition", img: "images/chapters/educational/ch17-3.jpg", note: "Nutrition"},
    {match: "prescri", img: "images/chapters/educational/ch17-4.jpg", note: "Prescription"},
    {match: "cognition", img: "images/chapters/educational/ch17-5.jpg", note: "Cognition"},
    {match: "symptôme|douleur|accompagnement", img: "images/chapters/educational/ch17-6.jpg", note: "Symptômes et accompagnement"}
  ],
  "ch18": [
    {match: "dossier|cas", img: "images/chapters/educational/ch19-20-keyfeatures-revision.jpg", note: "Mini-dossiers et key features"},
    {match: "chute", img: "images/chapters/educational/ch18-1.jpg", note: "Chutes"},
    {match: "delirium", img: "images/chapters/educational/ch18-2.jpg", note: "Delirium"},
    {match: "fragilité", img: "images/chapters/educational/ch18-3.jpg", note: "Fragilité"},
    {match: "prescri", img: "images/chapters/educational/ch18-4.jpg", note: "Prescription"},
    {match: "nutrition", img: "images/chapters/educational/ch18-5.jpg", note: "Nutrition"},
    {match: "progressif|mini", img: "images/chapters/educational/ch18-6.jpg", note: "Cas progressifs"}
  ],
  "ch19": [
    {match: "feature|key", img: "images/chapters/educational/ch19-20-keyfeatures-revision.jpg", note: "Key features problems"},
    {match: "chute", img: "images/chapters/educational/ch19-1.jpg", note: "Chutes"},
    {match: "delirium", img: "images/chapters/educational/ch19-2.jpg", note: "Delirium"},
    {match: "fragilité", img: "images/chapters/educational/ch19-3.jpg", note: "Fragilité"},
    {match: "prescri", img: "images/chapters/educational/ch19-4.jpg", note: "Prescription"},
    {match: "nutrition", img: "images/chapters/educational/ch19-5.jpg", note: "Nutrition"},
    {match: "révision|cas", img: "images/chapters/educational/ch19-6.jpg", note: "Révision key features"}
  ],
  "ch20": [
    {match: "question|révision", img: "images/chapters/educational/ch19-20-keyfeatures-revision.jpg", note: "Questions isolées et révision"},
    {match: "chute", img: "images/chapters/educational/ch20-1.jpg", note: "Chutes"},
    {match: "delirium", img: "images/chapters/educational/ch20-2.jpg", note: "Delirium"},
    {match: "fragilité", img: "images/chapters/educational/ch20-3.jpg", note: "Fragilité"},
    {match: "prescri", img: "images/chapters/educational/ch20-4.jpg", note: "Prescription"},
    {match: "nutrition", img: "images/chapters/educational/ch20-5.jpg", note: "Nutrition"},
    {match: "item|connaissances", img: "images/chapters/educational/ch20-6.jpg", note: "Révision ITEMs"}
  ]
};

/* Exact inventory from Gériatrie 5e éd. Figures are either reconstructed
   diagrams (HTML/SVG) or clinical media extracted from the figure itself.
   Educational AI illustrations remain separate and are never presented as
   manual figures. */
var FIGURE_META = {
  "1.1": {kind:"diagram", title:"Le raisonnement gériatrique : modèle de décompensation 1 + 2 + 3 de Bouchon"},
  "1.2": {kind:"clinical", title:"Doppler mitral en échocardiographie transthoracique", sources:["images/p039_0.jpg"]},
  "2.1": {kind:"diagram", title:"Application du raisonnement gériatrique à des situations fréquentes"},
  "2.2": {kind:"clinical", title:"Personne âgée et polypathologie", sources:["images/p049_0.jpg","images/p049_1.jpg"]},
  "2.3": {kind:"clinical", title:"Pathologies chroniques découvertes sur une radiographie pulmonaire", sources:["images/p049_2.jpg","images/p049_3.jpg"]},
  "2.4": {kind:"diagram", title:"Exemple de cascade gériatrique"},
  "2.5": {kind:"diagram", title:"Cercle vicieux dénutrition - bronchopneumonie"},
  "2.6": {kind:"diagram", title:"Concept de fragilité"},
  "5.1": {kind:"diagram", title:"Différentes causes de surdité"},
  "6.1": {kind:"clinical", title:"Fracture pertrochantérienne gauche", sources:["images/p104_0.jpg"]},
  "6.2": {kind:"clinical", title:"Fracture de l’extrémité inférieure du fémur", sources:["images/p104_1.jpg"]},
  "6.3": {kind:"clinical", title:"Fracture de l’extrémité supérieure de l’humérus", sources:["images/p104_2.jpg"]},
  "6.4": {kind:"clinical", title:"Fractures vertébrales L3 et L2 avant et après cimentoplastie", sources:["images/p105_0.png"]},
  "6.5": {kind:"diagram", title:"Démarche diagnostique et thérapeutique devant une suspicion d’ostéoporose"},
  "6.6": {kind:"diagram", title:"Indications des traitements anti-ostéoporotiques"},
  "6.7": {kind:"diagram", title:"Cycle thérapeutique de l’ostéoporose primitive"},
  "7.1": {kind:"clinical", title:"Coxarthrose", sources:["images/p126_0.jpg"]},
  "7.2": {kind:"diagram", title:"Signes radiographiques d’une coxarthrose polaire supérieure"},
  "7.3": {kind:"clinical", title:"Prothèse totale de hanche à droite et coxarthrose à gauche", sources:["images/p129_0.png"]},
  "7.4": {kind:"clinical", title:"Arthrose fémoro-patellaire avec amincissement de l’interligne externe", sources:["images/p132_0.jpg"]},
  "7.5": {kind:"clinical", title:"Dysplasie trochléo-patellaire", sources:["images/p132_1.jpg"]},
  "7.6": {kind:"clinical", title:"Gonarthrose fémoro-tibiale interne : évolution et varus", sources:["images/p132_2.png"]},
  "7.7": {kind:"clinical", title:"Gonarthrose fémoro-tibiale interne", sources:["images/p133_0.jpg"]},
  "7.8": {kind:"clinical", title:"Arthrose digitale : atteinte des interphalangiennes", sources:["images/p135_0.jpg"]},
  "7.9": {kind:"clinical", title:"Rhizarthrose : pouce adductus", sources:["images/p136_0.jpg"]},
  "7.10": {kind:"clinical", title:"Liseré calcique d’une chondrocalcinose du genou", sources:["images/p139_0.jpg"]},
  "7.11": {kind:"clinical", title:"Calcifications du carpe dans une chondrocalcinose", sources:["images/p139_1.jpg"]},
  "7.12": {kind:"clinical", title:"Calcification arciforme du ligament transverse de l’atlas", sources:["images/p139_2.jpg"]},
  "8.1": {kind:"tool", title:"Échelle visuelle analogique"},
  "8.2": {kind:"tool", title:"Échelle verbale simple"},
  "8.3": {kind:"tool", title:"Échelle Algoplus"},
  "8.4": {kind:"tool", title:"Questionnaire DN4"},
  "8.5": {kind:"diagram", title:"Algorithme d’évaluation de la douleur chez la personne âgée"},
  "9.1": {kind:"clinical", title:"Atrophie hippocampique et leucoencéphalopathie vasculaire en IRM", sources:["images/p162_0.jpg"]},
  "9.2": {kind:"clinical", title:"Encéphalopathie vasculaire diffuse en IRM FLAIR", sources:["images/p163_0.png"]},
  "9.3": {kind:"clinical", title:"Microbleeds en IRM T2*", sources:["images/p163_1.jpg"]},
  "9.4": {kind:"clinical", title:"Atrophie frontotemporale en IRM FLAIR", sources:["images/p166_0.jpg"]},
  "9.5": {kind:"clinical", title:"Hydrocéphalie chronique : dilatation ventriculaire et effacement des sillons", sources:["images/p167_0.jpg"]},
  "9.6": {kind:"clinical", title:"Maladie de Creutzfeldt-Jakob : hypersignal cortical et caudé", sources:["images/p167_1.jpg"]},
  "9.7": {kind:"clinical", title:"IRM et scintigraphie dans une maladie d’Alzheimer", sources:["images/p169_0.jpg","images/p169_1.jpg"]},
  "11.1": {kind:"diagram", title:"Approches du syndrome confusionnel"},
  "11.2": {kind:"diagram", title:"Réserve cognitive et sévérité du facteur précipitant"},
  "11.3": {kind:"diagram", title:"Choix des examens complémentaires devant un syndrome confusionnel"},
  "11.4": {kind:"diagram", title:"Prise en charge de l’agitation du patient âgé confus"},
  "12.1": {kind:"clinical", title:"Complications traumatiques : hématomes sous-duraux", sources:["images/p215_0.jpg"]},
  "12.2": {kind:"clinical", title:"Fractures multiples du bassin", sources:["images/p215_1.jpg"]},
  "12.3": {kind:"clinical", title:"Bloc bifasciculaire", sources:["images/p216_0.jpg"]},
  "12.4": {kind:"clinical", title:"Bloc auriculoventriculaire complet", sources:["images/p217_0.jpg"]},
  "13.1": {kind:"diagram", title:"Conséquences du syndrome d’immobilisation"},
  "13.2": {kind:"diagram", title:"Liens entre masse, force et puissance musculaires et alitement"},
  "13.3": {kind:"diagram", title:"Diminution des capacités en endurance au cours de la vie"},
  "13.4": {kind:"diagram", title:"Déconditionnement et seuil fonctionnel après alitement"},
  "13.5": {kind:"clinical", title:"Fécalome sur une radiographie d’abdomen sans préparation et sur une TDM abdominopelvienne", sources:["images/p234_0.jpg"]},
  "13.6": {kind:"clinical", title:"Syndrome d’Ogilvie", sources:["images/p235_0.jpg"]},
  "13.7": {kind:"diagram", title:"Pression en fonction du positionnement du patient"},
  "13.8": {kind:"diagram", title:"Physiopathogénie de l’escarre"},
  "13.9": {kind:"clinical", title:"Escarre de stade 1", sources:["images/p240_0.jpg"]},
  "13.10": {kind:"clinical", title:"Escarres de stade 2", sources:["images/p240_1.jpg","images/p240_2.jpg","images/p240_3.jpg","images/p240_4.jpg","images/p240_5.jpg","images/p240_6.jpg","images/p240_7.jpg"]},
  "13.11": {kind:"clinical", title:"Escarres de stade 3", sources:["images/p241_0.jpg","images/p241_1.jpg","images/p241_2.jpg"]},
  "13.12": {kind:"clinical", title:"Escarres de stade 4", sources:["images/p241_3.jpg","images/p241_4.jpg","images/p241_5.jpg"]},
  "14.1": {kind:"diagram", title:"Algorithme de dépistage de la sarcopénie"},
  "15.1": {kind:"diagram", title:"Distribution périphérique de l’innervation vésicale"},
  "15.2": {kind:"diagram", title:"Comorbidités et médicaments contribuant à l’incontinence"},
  "15.3": {kind:"diagram", title:"Évaluation et traitement de l’incontinence et de la rétention aiguë"},
  "16.1": {kind:"clinical", title:"Complications du traitement par AVK", sources:["images/p294_0.jpg","images/p294_1.jpg"]},
  "16.2": {kind:"diagram", title:"Modalités d’arrêt des benzodiazépines après 65 ans"},
  "18.1": {kind:"clinical", title:"Radiographie du bassin — signes de coxarthrose", sources:["images/p334_0.jpg"]},
  "18.2": {kind:"clinical", title:"Érythème sacré — évaluation d’une escarre", sources:["images/p343_0.jpg"]},
  "20.1": {kind:"clinical", title:"Imagerie cérébrale axiale — ventriculomégalie", sources:["images/p368_0.jpg"]},
  "20.2": {kind:"clinical", title:"Escarre talonnière avec contact osseux — question isolée", sources:["images/p371_0.jpg"]}
};
// Le registre historique ne doit jamais contredire l’inventaire vérifié.
// Il est dérivé mécaniquement des seuls médias cliniques du manuel.
Object.keys(FIGURES).forEach(function (id) { delete FIGURES[id]; });
Object.keys(FIGURE_META).forEach(function (id) {
  var meta = FIGURE_META[id];
  if (meta && meta.kind === 'clinical' && Array.isArray(meta.sources) && meta.sources[0]) {
    FIGURES[id] = {src:meta.sources[0], desc:meta.title || ('Figure ' + id)};
  }
});
if (typeof window !== 'undefined') window.FIGURE_META = FIGURE_META;

