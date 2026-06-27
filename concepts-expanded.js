/**
 * concepts-expanded.js — Expanded medical concept glossary for GeriatrieApp
 * Each entry: definition, primary chapter, and related terms for cross-linking.
 */

const CONCEPT_MAP_EXPANDED = {
  'ADL': {
    definition: 'Activities of Daily Living : activités de la vie quotidienne (toilette, habillage, alimentation, transferts). Évaluent l\'autonomie de base chez le sujet âgé.',
    chapter: 'ch3',
    related: ['IADL', 'AGGIR', 'AVD', 'Tinetti']
  },
  'IADL': {
    definition: 'Instrumental Activities of Daily Living : activités instrumentales (courses, gestion des finances, médicaments, transport). Plus sensibles que les ADL pour détecter une perte d\'autonomie précoce.',
    chapter: 'ch3',
    related: ['ADL', 'AGGIR', 'MCI']
  },
  'MMS': {
    definition: 'Mini Mental State (MMSE) : test cognitif de 30 points évaluant orientation, mémoire, attention, langage et praxies. Standard pour dépister et suivre une démence.',
    chapter: 'ch9',
    related: ['MCI', 'Alzheimer', 'CAM', 'GDS']
  },
  'GDS': {
    definition: 'Geriatric Depression Scale : échelle de dépression gériatrique en oui/non, adaptée aux personnes âgées (souvent version 15 items). Dépistage rapide en consultation.',
    chapter: 'ch10',
    related: ['dépression', 'sertraline', 'APA']
  },
  'MNA': {
    definition: 'Mini Nutritional Assessment : outil validé pour dépister la dénutrition et le risque nutritionnel chez le sujet âgé, en institution ou à domicile.',
    chapter: 'ch14',
    related: ['dénutrition', 'nutrition', 'IMC']
  },
  'CAM': {
    definition: 'Confusion Assessment Method : algorithme clinique pour diagnostiquer le delirium (confusion aiguë) selon critères DSM, très utilisé en gériatrie aiguë.',
    chapter: 'ch11',
    related: ['confusion', 'haloperidol', 'ECPA']
  },
  'ECPA': {
    definition: 'Échelle Comportementale pour Personnes Âgées : évalue agitation, agressivité et troubles du comportement en EHPAD ou hospitalisation, pour adapter les soins.',
    chapter: 'ch11',
    related: ['CAM', 'Alzheimer', 'haloperidol']
  },
  'EVA': {
    definition: 'Échelle Visuelle Analogique : mesure subjective de l\'intensité de la douleur sur une ligne de 0 à 10. Utile si le patient peut communiquer.',
    chapter: 'ch8',
    related: ['douleur', 'tramadol']
  },
  'DEXA': {
    definition: 'Dual-Energy X-ray Absorptiometry (ostéodensitométrie) : examen de référence pour mesurer la densité minérale osseuse et diagnostiquer l\'ostéoporose.',
    chapter: 'ch6',
    related: ['ostéoporose', 'FRAX', 'ostéodensitométrie']
  },
  'FRAX': {
    definition: 'Fracture Risk Assessment Tool : calcule le risque de fracture majeure sur 10 ans à partir de facteurs cliniques et parfois de la DMO. Guide le traitement anti-ostéoporotique.',
    chapter: 'ch6',
    related: ['DEXA', 'ostéoporose', 'chute']
  },
  'DFG': {
    definition: 'Débit de filtration glomérulaire : estimation de la fonction rénale (formule CKD-EPI ou MDRD). Essentiel pour adapter posologies et iatrogénie médicamenteuse.',
    chapter: 'ch16',
    related: ['IRA', 'polymédication', 'metformine']
  },
  'IMC': {
    definition: 'Indice de masse corporelle (poids/taille²). Chez le sujet âgé, un IMC « normal » peut masquer une sarcopénie ; la dénutrition se définit aussi par perte de poids.',
    chapter: 'ch14',
    related: ['MNA', 'dénutrition', 'sarcopénie']
  },
  'BPCO': {
    definition: 'Bronchopneumopathie chronique obstructive : maladie respiratoire fréquente chez l\'âgé, facteur de dyspnée, déconditionnement et exacerbations à risque vital.',
    chapter: 'ch4',
    related: ['HTA', 'DM2', 'fragilité']
  },
  'HTA': {
    definition: 'Hypertension artérielle : très prévalente après 65 ans. Le traitement réduit le risque d\'AVC et d\'IC ; les objectifs tensionnels sont adaptés à la fragilité et aux comorbidités.',
    chapter: 'ch4',
    related: ['AVC', 'IC', 'DM2']
  },
  'DM2': {
    definition: 'Diabète mellitus de type 2 : fréquent en gériatrie ; objectifs glycémiques souvent assouplis chez le fragile pour éviter hypoglycémies et iatrogénie.',
    chapter: 'ch4',
    related: ['metformine', 'HTA', 'AOMI']
  },
  'AVC': {
    definition: 'Accident vasculaire cérébral : cause majeure de handicap chez le sujet âgé. Rééducation, prévention secondaire (anticoagulation si FA) et évaluation des facteurs de chute.',
    chapter: 'ch4',
    related: ['FA', 'HTA', 'Tinetti']
  },
  'EP': {
    definition: 'Embolie pulmonaire : urgence fréquente chez l\'âgé, parfois atypique (confusion, dyspnée isolée). Suspicion élevée si alitement, cancer ou TVP récente.',
    chapter: 'ch4',
    related: ['TVP', 'scanner']
  },
  'TVP': {
    definition: 'Thrombose veineuse profonde : risque accru avec immobilisation, cancer et âge. Peut se compliquer d\'EP ; anticoagulation adaptée à la fonction rénale.',
    chapter: 'ch4',
    related: ['EP', 'DFG']
  },
  'IRA': {
    definition: 'Insuffisance rénale aiguë : fréquente à l\'hospitalisation du sujet âgé (déshydratation, médicaments, sepsis). Réversible si prise en charge précoce.',
    chapter: 'ch16',
    related: ['DFG', 'ITU', 'polymédication']
  },
  'ITU': {
    definition: 'Infection des voies urinaires : cause fréquente de confusion, chute ou décompensation chez la personne âgée, parfois sans fièvre ni symptômes urinaires typiques.',
    chapter: 'ch11',
    related: ['CAM', 'incontinence', 'IRA']
  },
  'DMLA': {
    definition: 'Dégénérescence maculaire liée à l\'âge : première cause de malvoyance chez les plus de 50 ans ; impact sur autonomie, conduite et risque de chute.',
    chapter: 'ch5',
    related: ['presbyacousie', 'chute', 'IADL']
  },
  'AR': {
    definition: 'Arythmie ou fibrillation auriculaire (souvent notée FA en français) : augmente le risque d\'AVC ; anticoagulation oral à évaluer selon scores CHA₂DS₂-VASc et risque hémorragique.',
    chapter: 'ch4',
    related: ['FA', 'AVC', 'IC']
  },
  'FA': {
    definition: 'Fibrillation auriculaire : arythmie la plus fréquente chez l\'âgé. Nécessite évaluation du risque thromboembolique et du saignement pour la décision d\'anticoagulation.',
    chapter: 'ch4',
    related: ['AVC', 'IC', 'HTA']
  },
  'DLB': {
    definition: 'Démence à corps de Lewy : démence avec fluctuations cognitives, hallucinations visuelles et parkinsonisme. Sensibilité extrême aux neuroleptiques classiques.',
    chapter: 'ch9',
    related: ['Parkinson', 'Alzheimer', 'haloperidol']
  },
  'FTD': {
    definition: 'Dégénérescence fronto-temporale : démence précoce avec troubles du comportement ou du langage, moins fréquente qu\'Alzheimer mais importante à reconnaître.',
    chapter: 'ch9',
    related: ['Alzheimer', 'MCI']
  },
  'MCI': {
    definition: 'Mild Cognitive Impairment (trouble cognitif léger) : déficit cognitif objectif sans retentissement majeur sur l\'autonomie ; risque de progression vers une démence.',
    chapter: 'ch9',
    related: ['MMS', 'Alzheimer', 'donepezil']
  },
  'SCC': {
    definition: 'Syndrome de carence cognitive ou contexte de soins — selon usage local, peut désigner un suivi cognitif structuré ou une unité spécialisée ; à contextualiser avec le dossier patient.',
    chapter: 'ch9',
    related: ['MMS', 'MCI']
  },
  'APA': {
    definition: 'Activité physique adaptée : prescription structurée d\'exercice chez le sujet âgé pour prévenir sarcopénie, chutes et dépression, selon capacités et comorbidités.',
    chapter: 'ch1',
    related: ['sarcopénie', 'Tinetti', 'Berg']
  },
  'SSR': {
    definition: 'Soins de suite et de réadaptation : prise en charge post-aiguë (AVC, fracture, décompensation) pour restaurer autonomie avant retour domicile ou EHPAD.',
    chapter: 'ch3',
    related: ['EHPAD', 'HAD', 'Tinetti']
  },
  'EHPAD': {
    definition: 'Établissement d\'hébergement pour personnes âgées dépendantes : hébergement médicalisé pour patients nécessitant une aide importante aux actes quotidiens.',
    chapter: 'ch3',
    related: ['AGGIR', 'HAD', 'ECPA']
  },
  'HAD': {
    definition: 'Hospitalisation à domicile : soins hospitaliers au domicile pour éviter ou raccourcir une hospitalisation classique, adaptée aux patients stabilisés mais encore soignés intensivement.',
    chapter: 'ch3',
    related: ['EHPAD', 'SSR']
  },
  'Alzheimer': {
    definition: 'Maladie d\'Alzheimer : démence neurodégénérative la plus fréquente, progressive, avec déficit de mémoire épisodique puis troubles du langage et de l\'autonomie.',
    chapter: 'ch9',
    related: ['MMS', 'donepezil', 'MCI', 'DLB']
  },
  'Parkinson': {
    definition: 'Maladie de Parkinson : syndrome extrapyramidal avec akinésie, rigidité, tremblement et instabilité posturale ; risque élevé de chutes et de démence à long terme.',
    chapter: 'ch9',
    related: ['chute', 'DLB', 'Berg']
  },
  'IC': {
    definition: 'Insuffisance cardiaque : syndrome clinique fréquent chez l\'âgé (souvent FEVG préservée). Dyspnée, œdèmes, fatigue ; polymédication et surveillance du poids.',
    chapter: 'ch4',
    related: ['FA', 'HTA', 'BPCO']
  },
  'AOMI': {
    definition: 'Artériopathie oblitérante des membres inférieurs : ischémie chronique des jambes, claudication, risque de plaies et d\'amputation ; souvent associée au DM2 et à l\'HTA.',
    chapter: 'ch4',
    related: ['DM2', 'HTA', 'chute']
  },
  'BPH': {
    definition: 'Hypertrophie bénigne de la prostate : cause fréquente de troubles mictionnels chez l\'homme âgé ; impact sur qualité de vie, infections et incontinence.',
    chapter: 'ch15',
    related: ['incontinence', 'ITU']
  },
  'arthrose': {
    definition: 'Arthrose : usure cartilagineuse avec douleur mécanique et raideur, très fréquente aux articulations portantes. Limite la mobilité et favorise sédentarité et chutes.',
    chapter: 'ch7',
    related: ['douleur', 'Kellgren', 'tramadol']
  },
  'ostéoporose': {
    definition: 'Ostéoporose : diminution de la masse et de la qualité osseuse augmentant le risque de fracture (col fémoral, vertébrale). Dépistage par DEXA et FRAX.',
    chapter: 'ch6',
    related: ['DEXA', 'FRAX', 'chute']
  },
  'Tinetti': {
    definition: 'Échelle d\'évaluation de la marche et de l\'équilibre de Tinetti : prédit le risque de chute en institution ou à domicile ; score bas = risque élevé.',
    chapter: 'ch12',
    related: ['chute', 'Berg', 'APA']
  },
  'Braden': {
    definition: 'Échelle de Braden : évalue le risque d\'escarre selon perception sensorielle, humidité, activité, mobilité, nutrition et frottements. Standard en soins.',
    chapter: 'ch13',
    related: ['escarre', 'Norton', 'MNA']
  },
  'Norton': {
    definition: 'Échelle de Norton : score de risque d\'escarre basé sur l\'état physique, mental, activité, mobilité et incontinence. Utilisée en EHPAD et services de gériatrie.',
    chapter: 'ch13',
    related: ['Braden', 'escarre', 'Norton modifié']
  },
  'Norton modifié': {
    definition: 'Version actualisée de l\'échelle de Norton pour le risque d\'escarre, avec pondération adaptée aux pratiques actuelles de prévention en établissement.',
    chapter: 'ch13',
    related: ['Norton', 'Braden']
  },
  'Charlson': {
    definition: 'Index de comorbidité de Charlson : quantifie le fardeau des maladies associées et prédit la mortalité ; utile pour stratifier les patients gériatriques.',
    chapter: 'ch1',
    related: ['fragilité', 'polymédication']
  },
  'Berg': {
    definition: 'Berg Balance Scale : 14 items évaluant l\'équilibre fonctionnel ; sensible pour détecter les déficits posturaux et planifier la rééducation anti-chute.',
    chapter: 'ch12',
    related: ['Tinetti', 'chute', 'APA']
  },
  'Kellgren': {
    definition: 'Classification de Kellgren-Lawrence : grades radiographiques 0 à 4 de sévérité de l\'arthrose. Corrèle partiellement avec les symptômes cliniques.',
    chapter: 'ch7',
    related: ['arthrose', 'scanner']
  },
  'metformine': {
    definition: 'Metformine : antidiabétique oral de première intention du DM2 ; attention à la fonction rénale (DFG) et à l\'arrêt temporaire en cas de déshydratation ou d\'IRA.',
    chapter: 'ch16',
    related: ['DM2', 'DFG', 'IRA']
  },
  'tramadol': {
    definition: 'Tramadol : opioïde faible pour douleur modérée ; risque de confusion, constipation et chutes chez l\'âgé ; à éviter en association sédative.',
    chapter: 'ch16',
    related: ['douleur', 'EVA', 'iatrogénie']
  },
  'sertraline': {
    definition: 'Sertraline : ISRS souvent utilisé pour la dépression du sujet âgé ; débuter à faible dose, surveiller hyponatrémie et interactions médicamenteuses.',
    chapter: 'ch16',
    related: ['GDS', 'dépression', 'SSR']
  },
  'haloperidol': {
    definition: 'Halopéridol : neuroleptique typique parfois utilisé à faible dose en delirium sévère ; risque d\'effets extrapyramidaux et allongement QT, surtout à éviter en DLB.',
    chapter: 'ch16',
    related: ['CAM', 'ECPA', 'DLB']
  },
  'donepezil': {
    definition: 'Donépézil : inhibiteur de la cholinestérase indiqué dans la maladie d\'Alzheimer légère à modérée ; effet modeste sur la cognition et possible effet sur les comportements.',
    chapter: 'ch16',
    related: ['Alzheimer', 'MCI', 'MMS']
  },
  'PEG': {
    definition: 'Gastrostomie percutanée endoscopique : alimentation entérale à long terme quand la déglutition est définitivement compromise ; décision collégiale et éthique en gériatrie.',
    chapter: 'ch14',
    related: ['SNG', 'nutrition', 'soins palliatifs']
  },
  'SNG': {
    definition: 'Sonde nasogastrique : nutrition ou médication entérale temporaire ; inconfort et risques de fausses routes ; alternative transitoire avant PEG si besoin prolongé.',
    chapter: 'ch14',
    related: ['PEG', 'nutrition']
  },
  'TVT': {
    definition: 'Tension-free vaginal tape ou contexte urologique — en gériatrie souvent lié aux troubles mictionnels féminins ; évaluer indication selon fragilité et objectifs du patient.',
    chapter: 'ch15',
    related: ['incontinence', 'BPH']
  },
  'IRM': {
    definition: 'Imagerie par résonance magnétique : examen de choix pour certaines pathologies neurologiques, articulaires et tumorales ; contraintes (claustrophobie, implants) fréquentes chez l\'âgé.',
    chapter: 'ch4',
    related: ['scanner', 'AVC']
  },
  'scanner': {
    definition: 'Tomodensitométrie (CT) : imagerie rapide utile en urgence (AVC, EP, traumatisme). Exposition aux rayons à pondérer si examens répétés.',
    chapter: 'ch4',
    related: ['IRM', 'EP', 'AVC']
  },
  'fragilité': {
    definition: 'Syndrome de fragilité : vulnérabilité accrue au stressor avec risque de décompensation, chutes, hospitalisation et mortalité ; évaluée par critères de Fried ou outils cliniques.',
    chapter: 'ch1',
    related: ['sarcopénie', 'Charlson', 'chute']
  },
  'sarcopénie': {
    definition: 'Sarcopénie : perte de masse et de force musculaire liée à l\'âge ; contribue aux chutes, à l\'immobilité et à la dénutrition. Traitement : nutrition et APA.',
    chapter: 'ch1',
    related: ['fragilité', 'IMC', 'APA']
  },
  'dépression': {
    definition: 'Dépression du sujet âgé : souvent manifestations somatiques ou pseudo-démence ; sous-diagnostiquée. Dépistage par GDS et prise en charge psychothérapeutique et médicamenteuse prudente.',
    chapter: 'ch10',
    related: ['GDS', 'sertraline', 'MMS']
  },
  'confusion': {
    definition: 'Confusion aiguë (delirium) : trouble de la conscience et de l\'attention, fluctuant, aigu ; cause organique fréquente (infection, médicament, douleur non traitée).',
    chapter: 'ch11',
    related: ['CAM', 'ITU', 'haloperidol']
  },
  'chute': {
    definition: 'Chute : événement majeur en gériatrie, cause de fracture, perte d\'autonomie et entrée en institution. Bilan multifactoriel (médicaments, vision, marche, environnement).',
    chapter: 'ch12',
    related: ['Tinetti', 'ostéoporose', 'Parkinson']
  },
  'douleur': {
    definition: 'Douleur chronique : très fréquente et souvent sous-traitée chez l\'âgé ; évaluation par EVA ou échelles adaptées si communication limitée. Éviter la sédation excessive.',
    chapter: 'ch8',
    related: ['EVA', 'tramadol', 'arthrose']
  },
  'incontinence': {
    definition: 'Incontinence urinaire ou fécale : retentissement social et cutané majeur ; causes multiples (infection, médicaments, BPH, mobilité). Bilan ciblé et mesures conservatrices d\'abord.',
    chapter: 'ch15',
    related: ['ITU', 'BPH', 'Braden']
  },
  'nutrition': {
    definition: 'Nutrition du sujet âgé : besoins protéiques souvent augmentés malgré apports diminués ; dépistage par MNA et prise en charge multidisciplinaire.',
    chapter: 'ch14',
    related: ['MNA', 'dénutrition', 'PEG']
  },
  'dénutrition': {
    definition: 'Dénutrition : déficit énergétique et/ou protéique avec conséquences sur immunité, plaies et autonomie ; fréquente à l\'hospitalisation et en EHPAD.',
    chapter: 'ch14',
    related: ['MNA', 'IMC', 'Braden']
  },
  'escarre': {
    definition: 'Escarre (ulcère de pression) : lésion cutanée par pression prolongée chez le sujet alité ou en fauteuil ; prévention par mobilisation et échelles Braden/Norton.',
    chapter: 'ch13',
    related: ['Braden', 'Norton', 'incontinence']
  },
  'soins palliatifs': {
    definition: 'Soins palliatifs : prise en charge de la douleur et des symptômes en phase avancée de maladie, avec accompagnement psychosocial ; ne signifie pas abandon des soins actifs utiles.',
    chapter: 'ch17',
    related: ['douleur', 'PEG', 'EHPAD']
  },
  'polymédication': {
    definition: 'Polymédication : utilisation simultanée de plusieurs médicaments, très fréquente après 75 ans ; source majeure d\'iatrogénie, chutes et hospitalisations.',
    chapter: 'ch16',
    related: ['iatrogénie', 'DFG', 'chute']
  },
  'iatrogénie': {
    definition: 'Iatrogénie : complication induite par les soins, surtout médicamenteuse chez l\'âgé ; révision régulière de la liste médicamenteuse indispensable.',
    chapter: 'ch16',
    related: ['polymédication', 'CAM', 'IRA']
  },
  'AGGIR': {
    definition: 'Grille AGGIR : évalue le degré de dépendance (GIR 1 à 6) pour l\'allocation personnalisée d\'autonomie et l\'orientation vers l\'aide à domicile ou l\'EHPAD.',
    chapter: 'ch3',
    related: ['ADL', 'EHPAD', 'AVD']
  },
  'AVD': {
    definition: 'Activités de la vie domestique : terme proche des IADL en français gériatrique ; évalue la capacité à gérer le foyer et les tâches quotidiennes complexes.',
    chapter: 'ch3',
    related: ['IADL', 'ADL', 'AGGIR']
  },
  'presbyacousie': {
    definition: 'Presbyacousie : perte auditive liée à l\'âge, progressive et bilatérale ; isole socialement et peut mimer une confusion ou aggraver une démence.',
    chapter: 'ch5',
    related: ['DMLA', 'MMS']
  },
  'critères de Fried': {
    definition: 'Critères de Fried pour la fragilité : perte de poids involontaire, exhaustion, faible activité, lenteur de marche, faiblesse musculaire ; trois critères = fragilité.',
    chapter: 'ch1',
    related: ['fragilité', 'sarcopénie']
  },
  'cascade gériatrique': {
    definition: 'Cascade gériatrique : enchaînement où un petit incident (ex. infection) déclenche immobilisation, déconditionnement, confusion et perte d\'autonomie durable.',
    chapter: 'ch2',
    related: ['fragilité', 'CAM', 'chute']
  },
  'ostéodensitométrie': {
    definition: 'Synonyme courant de l\'examen DEXA pour mesurer la densité osseuse au col fémoral et au rachis lombaire dans le bilan ostéoporotique.',
    chapter: 'ch6',
    related: ['DEXA', 'FRAX']
  },
  'MMSE': {
    definition: 'Mini-Mental State Examination : équivalent international du MMS, test cognitif standardisé pour le dépistage et le suivi des troubles neurocognitifs.',
    chapter: 'ch9',
    related: ['MMS', 'Alzheimer']
  },
  'insuffisance cardiaque': {
    definition: 'Forme développée de l\'abréviation IC : dysfonction cardiaque avec symptômes d\'œdème ou de congestion ; prise en charge diurétique, IEC et suivi du poids.',
    chapter: 'ch4',
    related: ['IC', 'FA', 'HTA']
  },
  'hypertrophie bénigne de la prostate': {
    definition: 'Développement de BPH : obstacle sous-vésical chez l\'homme âgé ; symptômes du bas appareil urinaire et risque de rétention aiguë.',
    chapter: 'ch15',
    related: ['BPH', 'incontinence']
  },
  'démence': {
    definition: 'Démence : syndrome de déficit cognitif multiple avec retentissement sur l\'autonomie ; causes principales Alzheimer, vasculaire, Lewy, fronto-temporale.',
    chapter: 'ch9',
    related: ['Alzheimer', 'MMS', 'DLB', 'FTD']
  },
  'delirium': {
    definition: 'Delirium : synonyme anglo-saxon de confusion aiguë ; urgence gériatrique à traiter la cause et sécuriser l\'environnement.',
    chapter: 'ch11',
    related: ['CAM', 'confusion']
  },
  'anticoagulation': {
    definition: 'Traitement anticoagulant oral ou injectable pour prévenir AVC et EP, notamment en FA ; balance bénéfice/risque hémorragique renforcée chez le fragile.',
    chapter: 'ch16',
    related: ['FA', 'AVC', 'TVP']
  },
  'rééducation': {
    definition: 'Rééducation fonctionnelle : kinésithérapie et ergothérapie pour restaurer marche, équilibre et autonomie après AVC, fracture ou hospitalisation prolongée.',
    chapter: 'ch3',
    related: ['SSR', 'Tinetti', 'APA']
  },
  'hypoglycémie': {
    definition: 'Hypoglycémie iatrogène : complication fréquente des antidiabétiques chez l\'âgé ; provoque chutes, confusion et complications cardiaques ; objectifs glycémiques assouplis.',
    chapter: 'ch16',
    related: ['DM2', 'metformine', 'CAM']
  },
  'anémie': {
    definition: 'Anémie du sujet âgé : souvent multifactorielle (carences, inflammation, hémopathies) ; contribue à fatigue, chutes et décompensation cardiaque.',
    chapter: 'ch4',
    related: ['fragilité', 'dénutrition']
  },
  'déshydratation': {
    definition: 'Déshydratation : fréquente chez le sujet âgé (diminution de la soif, diurétiques) ; cause d\'IRA, confusion et constipation.',
    chapter: 'ch14',
    related: ['IRA', 'CAM', 'DFG']
  },
  'constipation': {
    definition: 'Constipation chronique : très fréquente, favorisée par immobilité, opioïdes et déshydratation ; peut mimer une confusion ou une occlusion.',
    chapter: 'ch14',
    related: ['tramadol', 'polymédication']
  },
  'dysphagie': {
    definition: 'Dysphagie : trouble de la déglutition augmentant le risque de fausses routes et pneumopathies d\'inhalation ; bilan orthophonique et textures adaptées.',
    chapter: 'ch14',
    related: ['SNG', 'PEG', 'AVC']
  },
  'pneumopathie': {
    definition: 'Pneumopathie aiguë ou chronique : première cause infectieuse de mortalité chez l\'âgé ; présentation atypique possible (confusion seule).',
    chapter: 'ch4',
    related: ['BPCO', 'dysphagie']
  },
  'plaie chronique': {
    definition: 'Plaie du sujet âgé (jambe, pied diabétique) : cicatrisation lente liée à vascularisation, nutrition et immobilité ; soins locaux et cause systémique.',
    chapter: 'ch13',
    related: ['AOMI', 'DM2', 'escarre']
  },
  'vertige': {
    definition: 'Vertige positionnel ou central : facteur de chute majeur ; distinguer VPPB traitable par manœuvres et causes centrales nécessitant imagerie.',
    chapter: 'ch12',
    related: ['chute', 'presbyacousie']
  },
  'déficit visuel': {
    definition: 'Baisse d\'acuité visuelle (cataracte, DMLA, glaucome) : modifie repères spatiaux et augmente le risque de chute ; correction et éclairage adaptés.',
    chapter: 'ch5',
    related: ['DMLA', 'chute']
  },
  'cataracte': {
    definition: 'Cataracte : opacification du cristallin, cause fréquente de malvoyance curable par chirurgie ambulatoire chez le sujet âgé bien sélectionné.',
    chapter: 'ch5',
    related: ['DMLA', 'déficit visuel']
  },
  'glaucome': {
    definition: 'Glaucome chronique : neuropathie optique souvent asymptomatique jusqu\'à stade avancé ; dépistage ophtalmologique régulier recommandé.',
    chapter: 'ch5',
    related: ['DMLA', 'chute']
  },
  'troubles du sommeil': {
    definition: 'Insomnie et fragmentation du sommeil : fréquents en gériatrie ; éviter benzodiazépines prolongées (chutes, confusion) et traiter causes réversibles.',
    chapter: 'ch10',
    related: ['CAM', 'iatrogénie']
  },
  'benzodiazépine': {
    definition: 'Benzodiazépines et apparentés : à limiter chez l\'âgé (Beers) pour risque de sédation, chutes, confusion et dépendance ; sevrage progressif si usage chronique.',
    chapter: 'ch16',
    related: ['iatrogénie', 'chute', 'CAM']
  },
  'liste de Beers': {
    definition: 'Critères de Beers : liste de médicaments potentiellement inappropriés chez la personne âgée ; outil pour réduire polymédication et iatrogénie.',
    chapter: 'ch16',
    related: ['polymédication', 'iatrogénie']
  },
  'anticipation légale': {
    definition: 'Directives anticipées et personne de confiance : permettent de documenter les volontés du patient sur les soins en fin de vie ou en perte d\'autonomie décisionnelle.',
    chapter: 'ch17',
    related: ['soins palliatifs', 'démence']
  },
  'personne de confiance': {
    definition: 'Interlocuteur désigné pour être consulté si le patient ne peut plus exprimer sa volonté ; rôle central dans les décisions éthiques gériatriques.',
    chapter: 'ch17',
    related: ['anticipation légale', 'soins palliatifs']
  },
  'restriction hydrique': {
    definition: 'Mesure parfois utile en IC ou hyponatrémie mais risquée chez le sujet âgé confus ; évaluer bénéfice réel et risque de déshydratation.',
    chapter: 'ch4',
    related: ['IC', 'déshydratation']
  },
  'hyponatrémie': {
    definition: 'Hyponatrémie : fréquente sous ISRS, diurétiques ou SIADH ; cause de chutes, confusion et convulsions ; correction prudente pour éviter myélinolyse.',
    chapter: 'ch16',
    related: ['sertraline', 'CAM']
  },
  'syndrome inflammatoire': {
    definition: 'Élévation des marqueurs inflammatoires (CRP, VS) : orienter vers infection, pathologie inflammatoire ou tumeur chez le sujet âgé fébrile ou dégradé.',
    chapter: 'ch4',
    related: ['ITU', 'pneumopathie']
  },
  'prothèse de hanche': {
    definition: 'Arthroplastie de hanche après fracture du col fémoral : enjeu de rééducation précoce et de prévention des complications thromboemboliques et confusionnelles.',
    chapter: 'ch7',
    related: ['ostéoporose', 'chute', 'SSR']
  },
  'fracture du col fémoral': {
    definition: 'Fracture ostéoporotique majeure après chute ; mortalité et perte d\'autonomie élevées. Prévention par traitement de l\'ostéoporose et programmes anti-chute.',
    chapter: 'ch6',
    related: ['ostéoporose', 'chute', 'Tinetti']
  },
  'immobilisation': {
    definition: 'Alitement ou sédentarité prolongée : déconditionnement rapide chez l\'âgé, favorise TVP, escarres et cascade gériatrique ; lever précoce dès que possible.',
    chapter: 'ch2',
    related: ['cascade gériatrique', 'escarre', 'TVP']
  },
  'déconditionnement': {
    definition: 'Perte rapide de force et d\'endurance après immobilisation ; réversible partiellement par APA et SSR si prise en charge précoce.',
    chapter: 'ch1',
    related: ['APA', 'sarcopénie', 'immobilisation']
  },
  'bilan gériatrique standardisé': {
    definition: 'BGS : évaluation multidimensionnelle (médical, fonctionnel, cognitif, social) pour construire un plan de soins personnalisé chez le sujet âgé complexe.',
    chapter: 'ch3',
    related: ['AGGIR', 'Charlson', 'MNA']
  },
  'BGS': {
    definition: 'Abréviation de bilan gériatrique standardisé : outil d\'évaluation globale en consultation gériatrique ou hospitalisation.',
    chapter: 'ch3',
    related: ['bilan gériatrique standardisé', 'EHPAD']
  },
  'CHA2DS2-VASc': {
    definition: 'Score stratifiant le risque thromboembolique en fibrillation auriculaire ; guide l\'indication d\'anticoagulation chez le sujet âgé.',
    chapter: 'ch4',
    related: ['FA', 'anticoagulation', 'AVC']
  },
  'HAS-BLED': {
    definition: 'Score estimant le risque hémorragique sous anticoagulation ; à croiser avec CHA₂DS₂-VASc pour décision partagée en FA.',
    chapter: 'ch4',
    related: ['anticoagulation', 'FA']
  },
  'orthostatisme': {
    definition: 'Hypotension orthostatique : chute de tension au lever, cause fréquente de chutes et lipothymies ; revoir diurétiques et antihypertenseurs.',
    chapter: 'ch12',
    related: ['chute', 'HTA', 'polymédication']
  },
  'lipothymie': {
    definition: 'Syncope brève par baisse de perfusion cérébrale ; chez l\'âgé, rechercher rythme, orthostatisme ou obstruction cardiaque.',
    chapter: 'ch4',
    related: ['orthostatisme', 'FA', 'chute']
  },
  'cancer': {
    definition: 'Cancer du sujet âgé : incidence élevée ; prise en charge adaptée à l\'espérance de vie et aux comorbidités, sans refus systématique de traitement curatif.',
    chapter: 'ch4',
    related: ['Charlson', 'soins palliatifs']
  },
  'décompensation': {
    definition: 'Aggravation aiguë d\'une maladie chronique (IC, BPCO, DM) déclenchant hospitalisation ; souvent révélatrice de fragilité ou d\'iatrogénie.',
    chapter: 'ch2',
    related: ['cascade gériatrique', 'IC', 'BPCO']
  },
  'isolement social': {
    definition: 'Réduction des liens sociaux : facteur de dépression, dénutrition et abandon des traitements ; évaluation systématique en consultation gériatrique.',
    chapter: 'ch10',
    related: ['dépression', 'GDS']
  },
  'aidant': {
    definition: 'Aidant familial : soutien indispensable à domicile ; risque d\'épuisement ; évaluer charge de l\'aidant dans le plan de soins.',
    chapter: 'ch3',
    related: ['HAD', 'EHPAD', 'IADL']
  },
  'maladie vasculaire cérébrale': {
    definition: 'Démence ou séquelles cognitives d\'origine vasculaire : souvent associée à HTA, DM2 et AVC multiples ; progression par paliers.',
    chapter: 'ch9',
    related: ['AVC', 'démence', 'HTA']
  },
  'inhibiteur de la cholinestérase': {
    definition: 'Classe médicamenteuse (donépézil, rivastigmine) pour maladie d\'Alzheimer légère à modérée ; effets collatéraux digestifs et bradycardie possibles.',
    chapter: 'ch16',
    related: ['donepezil', 'Alzheimer']
  },
  'ISRS': {
    definition: 'Inhibiteurs sélectifs de la recapture de la sérotonine (ex. sertraline) : antidépresseurs de première ligne chez l\'âgé avec surveillance des interactions.',
    chapter: 'ch16',
    related: ['sertraline', 'GDS', 'hyponatrémie']
  },
  'neuroleptique': {
    definition: 'Antipsychotique : à réserver aux situations sévères (delirium, psychose) avec dose minimale et durée courte ; contre-indication relative en DLB.',
    chapter: 'ch16',
    related: ['haloperidol', 'DLB', 'ECPA']
  },
  'opioïde': {
    definition: 'Morphiniques pour douleur sévère ; chez l\'âgé, débuter bas, titrer lentement et surveiller sédation, constipation et confusion.',
    chapter: 'ch8',
    related: ['tramadol', 'douleur', 'soins palliatifs']
  },
  'vaccination grippale': {
    definition: 'Vaccin antigrippal annuel recommandé chez le sujet âgé et entourage pour réduire pneumopathies et décompensations chroniques.',
    chapter: 'ch4',
    related: ['pneumopathie', 'BPCO']
  },
  'vaccin pneumocoque': {
    definition: 'Vaccination contre Streptococcus pneumoniae : réduit infections invasives et pneumopathies chez le sujet âgé à risque.',
    chapter: 'ch4',
    related: ['pneumopathie']
  },
  'troubles comportementaux': {
    definition: 'Agitation, errance, agressivité en démence : approche non médicamenteuse d\'abord ; médication si danger, avec ECPA pour suivi.',
    chapter: 'ch9',
    related: ['ECPA', 'Alzheimer', 'haloperidol']
  },
  'errance': {
    definition: 'Déambulation sans but en démence : risque de fugue et chute ; sécurisation de l\'environnement et activités adaptées.',
    chapter: 'ch9',
    related: ['troubles comportementaux', 'chute']
  },
  'fugue': {
    definition: 'Sortie non contrôlée du domicile ou de l\'unité : urgence en démence ; prévention par bracelet, environnement sécurisé et repérage des déclencheurs.',
    chapter: 'ch9',
    related: ['errance', 'Alzheimer']
  },
  'capacité décisionnelle': {
    definition: 'Aptitude à comprendre, apprécier et décider d\'un acte médical ; à évaluer avant consentement ; protection juridique si altération durable.',
    chapter: 'ch17',
    related: ['anticipation légale', 'démence']
  },
  'sédation': {
    definition: 'Réduction de la conscience pour soulager une détresse réfractaire en fin de vie ; cadre légal strict, distinct de l\'euthanasie.',
    chapter: 'ch17',
    related: ['soins palliatifs', 'douleur']
  },
  'douleur neuropathique': {
    definition: 'Douleur liée à lésion du système nerveux (diabète, zona) ; peut répondre à adjuvants non opioïdes ; souvent sous-diagnostiquée chez l\'âgé.',
    chapter: 'ch8',
    related: ['douleur', 'DM2']
  },
  'zona': {
    definition: 'Réactivation du virus varicelle-zona : éruption douloureuse unilatérale ; risque de neuropathie post-zostérienne accru avec l\'âge.',
    chapter: 'ch4',
    related: ['douleur neuropathique']
  },
  'rhabdomyolyse': {
    definition: 'Nécrose musculaire avec libération de myoglobine ; favorisée par immobilisation prolongée, statines et déshydratation chez le sujet âgé.',
    chapter: 'ch16',
    related: ['IRA', 'immobilisation']
  },
  'statine': {
    definition: 'Hypolipémiant : bénéfice cardiovasculaire mais risque myalgies et interactions ; adapter la dose à la fonction hépatique et rénale.',
    chapter: 'ch16',
    related: ['HTA', 'AVC', 'polymédication']
  },
  'diurétique': {
    definition: 'Médicament augmentant la diurèse ; utile en IC mais cause d\'orthostatisme, déshydratation et IRA chez le sujet âgé fragile.',
    chapter: 'ch16',
    related: ['IC', 'orthostatisme', 'IRA']
  },
  'IEC': {
    definition: 'Inhibiteur de l\'enzyme de conversion : traitement de l\'HTA et de l\'IC ; surveiller fonction rénale et potassium, risque de toux.',
    chapter: 'ch16',
    related: ['HTA', 'IC', 'DFG']
  },
  'anticholinergique': {
    definition: 'Médicaments à charge anticholinergique cumulative : aggravent cognition, constipation et rétention urinaire ; à réduire selon échelles anticholinergiques.',
    chapter: 'ch16',
    related: ['iatrogénie', 'CAM', 'incontinence']
  },
  'fausse route': {
    definition: 'Inhalation de bol alimentaire ou salivaire : cause de pneumopathie d\'inhalation ; prévention par évaluation de la déglution et postures adaptées.',
    chapter: 'ch14',
    related: ['dysphagie', 'pneumopathie']
  },
  'textures modifiées': {
    definition: 'Aliments mixés ou épaissis selon recommandations IDDSI pour sécuriser l\'alimentation orale en dysphagie tout en préservant le plaisir de manger.',
    chapter: 'ch14',
    related: ['dysphagie', 'nutrition']
  },
  'IDDSI': {
    definition: 'International Dysphagia Diet Standardisation Initiative : nomenclature internationale des textures et liquides pour patients dysphagiques.',
    chapter: 'ch14',
    related: ['textures modifiées', 'dysphagie']
  },
  'contention': {
    definition: 'Contention physique : mesure de dernier recours en agitation majeure ; risques juridiques et médicaux ; alternatives comportementales prioritaires.',
    chapter: 'ch11',
    related: ['ECPA', 'troubles comportementaux']
  },
  'environnement thérapeutique': {
    definition: 'Aménagement calme, éclairage, repères temporels pour limiter confusion et agitation en unité de gériatrie aiguë ou EHPAD.',
    chapter: 'ch11',
    related: ['CAM', 'confusion']
  },
  'unité de gériatrie aiguë': {
    definition: 'UGA ou service court séjour dédié au sujet âgé hospitalisé : prise en charge multidisciplinaire anti-cascade et réhabilitation précoce.',
    chapter: 'ch2',
    related: ['cascade gériatrique', 'CAM', 'SSR']
  },
  'UGA': {
    definition: 'Unité de gériatrie aiguë : structure hospitalière spécialisée pour éviter la cascade iatrogène et restaurer l\'autonomie post-aiguë.',
    chapter: 'ch2',
    related: ['unité de gériatrie aiguë', 'rééducation']
  },
  'médiation thérapeutique': {
    definition: 'Entretien structuré pour améliorer l\'observance et la compréhension des traitements chez le patient polymédiqué ou cognitif fragile.',
    chapter: 'ch16',
    related: ['polymédication', 'aidant']
  },
  'observance': {
    definition: 'Adhésion au traitement : souvent réduite par complexité des ordonnances, coût ou troubles cognitifs ; simplifier les schémas thérapeutiques.',
    chapter: 'ch16',
    related: ['polymédication', 'médiation thérapeutique']
  },
  'ordonnance simplifiée': {
    definition: 'Réduction du nombre de prises et choix de médicaments à double indication pour limiter erreurs et iatrogénie chez l\'âgé.',
    chapter: 'ch16',
    related: ['polymédication', 'iatrogénie']
  },
  'potomanie': {
    definition: 'Boissons excessives par habitude ou confusion ; peut aggraver IC ; éducation et adaptation des apports hydriques individualisés.',
    chapter: 'ch4',
    related: ['IC', 'déshydratation']
  },
  'troubles mnésiques': {
    definition: 'Difficultés de mémorisation rapportées par le patient ou l\'entourage ; distinguer trouble léger, dépression pseudo-démence et démence établie.',
    chapter: 'ch9',
    related: ['MCI', 'MMS', 'dépression']
  },
  'pseudo-démence': {
    definition: 'Syndrome cognitif majeur mimant une démence mais lié à une dépression traitable ; amélioration après prise en charge antidépressive.',
    chapter: 'ch10',
    related: ['dépression', 'troubles mnésiques']
  },
  'aphasie': {
    definition: 'Trouble du langage après lésion cérébrale (souvent AVC) ; évaluation orthophonique et rééducation pour restaurer la communication.',
    chapter: 'ch9',
    related: ['AVC', 'rééducation']
  },
  'hémiparésie': {
    definition: 'Faiblesse d\'un hémicorps post-AVC : facteur de chute et dépendance ; rééducation motrice et aides techniques au quotidien.',
    chapter: 'ch3',
    related: ['AVC', 'chute', 'ADL']
  },
  'aide technique': {
    definition: 'Canne, déambulateur, lit médicalisé : compensent déficits moteurs ou cognitifs ; prescription adaptée et formation de l\'aidant.',
    chapter: 'ch3',
    related: ['hémiparésie', 'chute', 'Tinetti']
  },
  'déambulateur': {
    definition: 'Cadre de marche à roues ou sans : améliore stabilité mais nécessite apprentissage ; mauvais usage possible si trouble cognitif.',
    chapter: 'ch12',
    related: ['aide technique', 'Parkinson']
  },
  'télémédecine': {
    definition: 'Consultation ou suivi à distance : utile pour suivi chronicité et éviter déplacements chez le sujet âgé à mobilité réduite.',
    chapter: 'ch3',
    related: ['HAD', 'aidant']
  },
  'conciliation médicamenteuse': {
    definition: 'Revue systématique des traitements à l\'admission et à la sortie d\'hospitalisation pour éviter omissions et doublons.',
    chapter: 'ch16',
    related: ['polymédication', 'iatrogénie']
  },
  'sortie de secours': {
    definition: 'Plan de sortie anticipé : ordonnance, suivi, aides à domicile pour limiter réhospitalisation précoce après passage aigu.',
    chapter: 'ch3',
    related: ['HAD', 'aidant', 'SSR']
  },
  'réhospitalisation': {
    definition: 'Nouvelle admission peu après la sortie : indicateur de qualité des soins de transition ; souvent liée à polymédication ou absence d\'aidant.',
    chapter: 'ch2',
    related: ['cascade gériatrique', 'polymédication']
  },
  'espérance de vie': {
    definition: 'Horizon de survie estimé : utile pour décisions proportionnées (dépistages, chimiothérapie, anticoagulation) en médecine gériatrique.',
    chapter: 'ch17',
    related: ['Charlson', 'soins palliatifs']
  },
  'proportionnalité des soins': {
    definition: 'Adapter l\'intensité des soins au bénéfice attendu et aux valeurs du patient ; pilier de l\'éthique gériatrique.',
    chapter: 'ch17',
    related: ['espérance de vie', 'anticipation légale']
  },
  'BPCO exacerbée': {
    definition: 'Poussée aiguë de BPCO avec dyspnée et infection : cause fréquente d\'hospitalisation ; corticoïdes et antibiotiques ciblés, réhabilitation respiratoire.',
    chapter: 'ch4',
    related: ['BPCO', 'pneumopathie']
  },
  'réhabilitation respiratoire': {
    definition: 'Programme d\'exercices et d\'éducation pour patients BPCO : améliore tolérance à l\'effort et qualité de vie malgré l\'âge avancé.',
    chapter: 'ch4',
    related: ['BPCO', 'APA']
  },
  'anémie ferriprive': {
    definition: 'Carence martiale fréquente par saignements digestifs occultes chez l\'âgé ; explorer endoscopiquement selon recommandations.',
    chapter: 'ch4',
    related: ['anémie', 'dénutrition']
  },
  'saignement digestif': {
    definition: 'Hémorragie haute ou basse : urgence chez le sujet sous anticoagulant ou antiagrégant ; présentation par méléna, hématémèse ou anémie.',
    chapter: 'ch4',
    related: ['anticoagulation', 'anémie']
  },
  'antiagrégant plaquettaire': {
    definition: 'Aspirine ou P2Y12 : prévention cardiovasculaire ; balance avec risque hémorragique en cas de chute ou ulcère.',
    chapter: 'ch16',
    related: ['AVC', 'saignement digestif']
  },
  'troubles de la marche': {
    definition: 'Petits pas, freezing, instabilité : signes d\'alerte pour Parkinson, hydrocephalie ou causes médicamenteuses ; évaluation par Tinetti ou Berg.',
    chapter: 'ch12',
    related: ['Parkinson', 'Tinetti', 'polymédication']
  },
  'hydrocephalie à pression normale': {
    definition: 'Triade marche, incontinence, troubles cognitifs ; traitement neurochirurgical possible chez sujets sélectionnés âgés.',
    chapter: 'ch9',
    related: ['troubles de la marche', 'incontinence']
  },
  'modèle de Bouchon': {
    definition: 'Représentation de la fragilité comme accumulation de déficits (bouchons) dans un entonnoir jusqu\'à décompensation ; concept pédagogique du manuel.',
    chapter: 'ch2',
    related: ['fragilité', 'cascade gériatrique']
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CONCEPT_MAP_EXPANDED };
}