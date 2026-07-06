/* ═══════════════════════════════════════════════════════════════
   MEGA-FLASHCARDS — Généré automatiquement depuis les 5 lots cliniques
   Sources: Gériatrie 5e éd. + 28 PDFs NotebookLM
   Chapitres: ch1-ch4  |  50 flashcards par chapitre
   ═══════════════════════════════════════════════════════════════ */

const MEGA_FLASHCARDS = [
  {
    id: 3001,
    chapter: "ch1",
    rang: "A",
    question: "Définition du vieillissement physiologique ?",
    answer: "Ensemble des processus physiologiques lents et progressifs qui modifient la structure et les fonctions de l'organisme à partir de l'âge mûr. Il est la résultante de facteurs génétiques, environnementaux et stochastiques (aléatoires). Il diminue la réserve fonctionnelle de l'organisme sans pour autant provoquer d'insuffisance d'organe au repos, mais il constitue un facteur de vulnérabilité face à un stress aigu.",
    tags: ["vieillissement", "physiologie", "définition"]
  },
    {
    id: 3002,
    chapter: "ch1",
    rang: "A",
    question: "Définition de la gérontologie ?",
    answer: "Étude du vieillissement dans tous ses aspects : biomédical, sociologique, psychologique, démographique, économique et culturel. C'est un champ multidisciplinaire situé au carrefour des sciences médicales et humaines, qui étudie le processus de vieillissement individuel et populationnel.",
    tags: ["gérontologie", "définition"]
  },
    {
    id: 3003,
    chapter: "ch1",
    rang: "A",
    question: "Définition de la gériatrie ?",
    answer: "Médecine des personnes âgées. Spécialité médicale (reconnue en France par un DES depuis 2017) prenant en charge les patients âgés polypathologiques et fragiles. Elle repose sur une approche globale (médicale, psychologique, sociale et fonctionnelle) et sur l'Évaluation Gériatrique Standardisée (EGS).",
    tags: ["gériatrie", "définition"]
  },
    {
    id: 3004,
    chapter: "ch1",
    rang: "A",
    question: "Définition de l'âgisme et son impact clinique ?",
    answer: "Attitude de discrimination négative ou d'a priori négatifs envers les personnes âgées du seul fait de leur grand âge. En médecine, il peut mener à un rejet de soins lourds (réanimation, chirurgie invasive) sans évaluation objective du rapport bénéfice/risque. L'approche gériatrique objective s'y oppose en évaluant l'autonomie, les comorbidités et la qualité de vie future.",
    tags: ["âgisme", "éthique"]
  },
    {
    id: 3005,
    chapter: "ch1",
    rang: "A",
    question: "Seuils chronologiques de la vieillesse en France et selon l'OMS ?",
    answer: "1. À partir de 60 ans pour l'octroi des prestations sociales en France (ex: APA). 2. À partir de 65 ans selon l'OMS pour définir une personne âgée. 3. À partir de 75 ans pour le risque accru de perte d'autonomie et de fragilité (seuil d'entrée habituel en service de gériatrie, avec une moyenne d'âge supérieure à 80 ans).",
    tags: ["vieillesse", "seuil", "démographie"]
  },
    {
    id: 3006,
    chapter: "ch1",
    rang: "A",
    question: "Différence entre espérance de vie (EV) et espérance de vie sans incapacité (EVSI) ?",
    answer: "L'espérance de vie (EV) est le nombre moyen d'années qu'il reste à vivre à un âge donné sous les conditions de mortalité actuelles. L'espérance de vie sans incapacité (EVSI) ou espérance de vie en bonne santé est le nombre d'années qu'une personne peut s'attendre à vivre sans limitation d'activité ni handicap. L'objectif gériatrique est de rapprocher l'EVSI de l'EV totale.",
    tags: ["espérance de vie", "EVSI", "démographie"]
  },
    {
    id: 3007,
    chapter: "ch1",
    rang: "B",
    question: "Données épidémiologiques clés de l'espérance de vie en France en 2020 ?",
    answer: "L'espérance de vie à la naissance est de 85,2 ans pour les femmes et de 79,2 ans pour les hommes. À 60 ans, elle est de 27 ans chez les femmes et de 23 ans chez les hommes. L'espérance de vie augmente globalement de 1,3 an tous les 10 ans en France, s'accompagnant d'une réduction du temps vécu en incapacité sévère.",
    tags: ["espérance de vie", "épidémiologie", "France"]
  },
    {
    id: 3008,
    chapter: "ch1",
    rang: "B",
    question: "Conséquences économiques et sociales du vieillissement démographique ?",
    answer: "1. Économiques : Augmentation des dépenses de santé, des coûts des prestations sociales (Allocation Personnalisée d'Autonomie - APA) et des besoins de places en EHPAD/USLD. C'est aussi le développement de la 'silver économie' (gérontotechnologies, services à la personne). 2. Sociales : Rôle accru des aidants proches, familles multigénérationnelles et participation des jeunes retraités à la vie bénévole et politique.",
    tags: ["démographie", "économie", "société"]
  },
    {
    id: 3009,
    chapter: "ch1",
    rang: "A",
    question: "Concept de 'vieillissement réussi' (successful aging) et piliers de prévention ?",
    answer: "Vieillissement caractérisé par une faible diminution des capacités fonctionnelles et le maintien de réserves importantes, permettant de faire face à des stress majeurs. Ses piliers sont : la préservation du capital intellectuel et physique, la prévention des maladies (vaccinations, risque cardiovasculaire) et la prise en charge précoce des troubles de la marche, de l'état nutritionnel et sensoriel.",
    tags: ["vieillissement réussi", "prévention"]
  },
    {
    id: 3010,
    chapter: "ch1",
    rang: "A",
    question: "Notions de vulnérabilité et de réserve fonctionnelle chez le patient âgé ?",
    answer: "La réserve fonctionnelle est l'écart entre le niveau de fonctionnement basal d'un organe et son seuil d'insuffisance symptomatique. Le vieillissement et les maladies chroniques réduisent cette réserve. La vulnérabilité est la conséquence directe de cette diminution : au repos, le patient est asymptomatique, mais au moindre stress (infection, déshydratation), la réserve est dépassée, déclenchant une décompensation d'organe.",
    tags: ["vulnérabilité", "réserve fonctionnelle"]
  },
    {
    id: 3011,
    chapter: "ch1",
    rang: "B",
    question: "Mécanisme biologique du vieillissement : Instabilité génomique ?",
    answer: "Accumulation progressive de lésions de l'ADN nucléaire et mitochondrial avec l'âge. Ces lésions découlent de facteurs endogènes (réplication cellulaire défaillante, radicaux libres) et exogènes (expositions environnementales). Avec l'âge, les mécanismes de réparation de l'ADN s'altèrent, entraînant une perte de l'intégrité génomique et un risque de dysfonctionnement cellulaire.",
    tags: ["biologie", "génétique", "instabilité génomique"]
  },
    {
    id: 3012,
    chapter: "ch1",
    rang: "B",
    question: "Mécanisme biologique du vieillissement : Attrition/raccourcissement des télomères ?",
    answer: "Les télomères sont des séquences répétitives non codantes (GGGTTA) aux extrémités des chromosomes, protégeant la chromatine. À chaque division cellulaire, les télomères raccourcissent. Quand ils atteignent une taille critique, la cellule entre en sénescence ou meurt (limite de Hayflick). La longueur des télomères est de 9 kilobases à la naissance, et leur attrition rapide est liée aux maladies dégénératives.",
    tags: ["biologie", "télomères", "Hayflick"]
  },
    {
    id: 3013,
    chapter: "ch1",
    rang: "B",
    question: "Rôle de la télomérase et ses limites chez l'Homme ?",
    answer: "La télomérase est une enzyme capable de restaurer la longueur des télomères en ajoutant des séquences répétitives d'ADN. Elle est active principalement dans les cellules souches et les cellules germinales, mais inactive dans la majorité des cellules somatiques humaines adultes. L'activation artificielle de la télomérase pose un risque de cancérisation (prolifération cellulaire incontrôlée).",
    tags: ["biologie", "télomérase"]
  },
    {
    id: 3014,
    chapter: "ch1",
    rang: "B",
    question: "Mécanisme biologique du vieillissement : Altérations épigénétiques ?",
    answer: "Modifications de l'activité des gènes sans modification de la séquence d'ADN, transmissibles lors des divisions. Elles incluent les variations de la méthylation de l'ADN, l'acétylation des histones et le remodelage de la chromatine. Contrairement aux mutations génétiques, les altérations épigénétiques sont réversibles et fortement influencées par l'environnement et le mode de vie.",
    tags: ["biologie", "épigénétique"]
  },
    {
    id: 3015,
    chapter: "ch1",
    rang: "B",
    question: "Mécanisme biologique du vieillissement : Perte de protéostasie ?",
    answer: "Altération du maintien de l'intégrité et du repliement correct des protéines cellulaires. Sous l'effet du stress oxydatif ou de la température, les protéines se replient mal, s'agrègent et deviennent toxiques. Ce défaut de clairance des protéines anormales (par autophagie ou protéasome) est impliqué dans les cancers et les maladies neurodégénératives (Alzheimer, Parkinson).",
    tags: ["biologie", "protéostasie", "protéine"]
  },
    {
    id: 3016,
    chapter: "ch1",
    rang: "B",
    question: "Mécanisme du vieillissement : Dérégulation de la détection des nutriments (voie mTOR/TOR) ?",
    answer: "La protéine kinase TOR (mTOR chez les mammifères) régule la synthèse protéique, la croissance et l'autophagie en réponse aux niveaux d'acides aminés et d'énergie. Avec le vieillissement, cette détection se dérégule : l'activation persistante de mTOR bloque l'autophagie (nettoyage cellulaire) et favorise l'insulinorésistance, l'obésité et le diabète de type 2.",
    tags: ["biologie", "mTOR", "nutriments"]
  },
    {
    id: 3017,
    chapter: "ch1",
    rang: "B",
    question: "Mécanisme biologique du vieillissement : Dysfonction mitochondriale ?",
    answer: "Diminution progressive de l'efficacité de la chaîne respiratoire mitochondriale avec l'âge. Cela entraîne une baisse de la production d'ATP et une augmentation de la production d'espèces réactives de l'oxygène (radicaux libres). Ces radicaux libres causent des dommages secondaires à l'ADN mitochondrial, aux membranes lipidiques et aux protéines, accélérant le déclin cellulaire.",
    tags: ["biologie", "mitochondrie", "radicaux libres"]
  },
    {
    id: 3018,
    chapter: "ch1",
    rang: "B",
    question: "Mécanisme biologique du vieillissement : Sénescence cellulaire et phénotype sécrétoire (SASP) ?",
    answer: "Arrêt irréversible du cycle cellulaire en réponse à des dommages à l'ADN. Les cellules sénescentes ne se divisent plus mais restent métaboliquement actives. Elles acquièrent un phénotype sécrétoire associé à la sénescence (SASP) caractérisé par la sécrétion de cytokines et chimiokines pro-inflammatoires, ce qui altère les tissus voisins et propage la sénescence.",
    tags: ["biologie", "sénescence", "SASP"]
  },
    {
    id: 3019,
    chapter: "ch1",
    rang: "B",
    question: "Concept d'inflamm-aging (inflammation à bas bruit liée à l'âge) ?",
    answer: "État pro-inflammatoire systémique, chronique et de bas grade caractérisé par l'augmentation des cytokines circulantes (comme l'IL-6, le TNF-alpha et l'IL-1) chez le sujet âgé. Il est favorisé par la sénescence cellulaire massive (sécrétion SASP) et l'activation du système immunitaire inné, contribuant aux maladies chroniques (athérosclérose, sarcopénie, déclin cognitif).",
    tags: ["inflamm-aging", "inflammation", "immunologie"]
  },
    {
    id: 3020,
    chapter: "ch1",
    rang: "B",
    question: "Mécanisme biologique du vieillissement : Épuisement des cellules souches ?",
    answer: "Diminution du potentiel de régénération et de division des cellules souches adultes avec l'âge. Ses manifestations cliniques majeures sont l'immunosénescence (épuisement des cellules souches hématopoïétiques, restriction du répertoire T) et des maladies dégénératives comme l'ostéoporose (cellules souches mésenchymateuses), la sarcopénie et l'athérome.",
    tags: ["biologie", "cellules souches", "régénération"]
  },
    {
    id: 3021,
    chapter: "ch1",
    rang: "B",
    question: "Mécanisme biologique du vieillissement : Altération des communications intercellulaires ?",
    answer: "Dysfonctionnement des voies de communication hormonales, neuroendocriniennes et neuronales avec l'âge. Il se traduit par une résistance hormonale (insuline, IGF-1), des anomalies de signalisation rénine-angiotensine, un déclin de la plasticité neuronale et une immunosénescence favorisant une susceptibilité accrue aux infections et aux maladies auto-immunes.",
    tags: ["biologie", "communication intercellulaire"]
  },
    {
    id: 3022,
    chapter: "ch1",
    rang: "A",
    question: "Quels sont les 5 critères de fragilité de Fried ?",
    answer: "1. Perte de poids involontaire dans l'année écoulée (≥ 4,5 kg ou ≥ 5 %). 2. Sensation subjective d'épuisement/fatigue (évaluée par questionnaire). 3. Diminution de l'activité physique hebdomadaire. 4. Diminution de la vitesse de marche (mesurée sur 4 mètres). 5. Diminution de la force musculaire de préhension (mesurée par hand grip).",
    tags: ["fragilité", "Fried", "dépistage"]
  },
    {
    id: 3023,
    chapter: "ch1",
    rang: "A",
    question: "Seuils et mesure de la vitesse de marche dans le phénotype de Fried ?",
    answer: "La vitesse de marche est mesurée sur une distance de 4 mètres, à allure normale. Le seuil de fragilité est défini par une vitesse de marche inférieure à 0,8 m/s (soit un temps supérieur à 5 secondes pour parcourir les 4 mètres), ajusté selon le sexe et la taille du patient. C'est un marqueur fort de déclin fonctionnel et de mortalité.",
    tags: ["marche", "vitesse", "Fried"]
  },
    {
    id: 3024,
    chapter: "ch1",
    rang: "A",
    question: "Seuils et mesure de la force de préhension (hand grip) dans le phénotype de Fried ?",
    answer: "La force de préhension est mesurée à l'aide d'un dynamomètre manuel de type Jamar. Le patient doit serrer l'appareil avec sa force maximale (bras dominant). Le seuil de fragilité est défini par les 20 % les plus bas de la population de référence, ajusté selon le sexe et l'indice de masse corporelle (IMC) (ex. < 30 kg chez l'homme, < 18 kg chez la femme).",
    tags: ["force musculaire", "hand grip", "Fried"]
  },
    {
    id: 3025,
    chapter: "ch1",
    rang: "A",
    question: "Différence entre sujets robustes, pré-fragiles et fragiles selon Fried ?",
    answer: "La classification repose sur le nombre de critères de Fried validés par le patient : 1. Sujet robuste : aucun des 5 critères n'est présent. 2. Sujet pré-fragile : présence de 1 ou 2 critères (risque de transition vers la fragilité). 3. Sujet fragile : présence d'au moins 3 critères sur 5 (risque majeur d'hospitalisation, d'institutionnalisation et de décès).",
    tags: ["fragilité", "Fried", "classification"]
  },
    {
    id: 3026,
    chapter: "ch1",
    rang: "B",
    question: "Modèle de fragilité de Rockwood (index de déficit accumulé) ?",
    answer: "Modèle quantitatif alternatif au phénotype de Fried. Il considère la fragilité comme le résultat de l'accumulation de déficits multidimensionnels (symptômes, signes cliniques, maladies, incapacités). L'index de fragilité est le ratio entre le nombre de déficits présents chez le patient et le nombre total de déficits possibles évalués (souvent 30 à 70 variables).",
    tags: ["fragilité", "Rockwood", "déficits"]
  },
    {
    id: 3027,
    chapter: "ch1",
    rang: "A",
    question: "Différence clinique entre vieillissement normal, fragilité et dépendance ?",
    answer: "1. Vieillissement normal : diminution de la réserve fonctionnelle mais patient autonome et résistant aux stress mineurs. 2. Fragilité : syndrome clinique caractérisé par une vulnérabilité accrue aux stress mineurs, potentiellement réversible. 3. Dépendance (ou perte d'autonomie) : incapacité fonctionnelle installée nécessitant l'aide d'un tiers pour les actes de la vie quotidienne.",
    tags: ["fragilité", "dépendance", "vieillissement"]
  },
    {
    id: 3028,
    chapter: "ch1",
    rang: "A",
    question: "Réversibilité de la fragilité et types d'interventions ciblées ?",
    answer: "Contrairement à la dépendance installée, la fragilité est un état dynamique et réversible. Les interventions efficaces sont pluridisciplinaires : 1. Renforcement musculaire et réentraînement à l'effort (activité physique adaptée). 2. Supplémentation nutritionnelle protéino-énergétique et correction des carences (vitamine D). 3. Revue de la prescription médicale (réduction de la iatrogénie).",
    tags: ["fragilité", "réversibilité", "prise en charge"]
  },
    {
    id: 3029,
    chapter: "ch1",
    rang: "A",
    question: "Modifications de la composition corporelle et métaboliques liées à l'âge ?",
    answer: "1. Diminution de la masse maigre (en particulier musculaire : sarcopénie). 2. Augmentation proportionnelle et redistribution de la masse grasse, en particulier viscérale (abdominale). 3. Légère augmentation de la résistance à l'insuline (insulinorésistance) favorisant l'intolérance au glucose. 4. Diminution de l'eau corporelle totale (majore le risque de déshydratation).",
    tags: ["composition corporelle", "sarcopénie", "métabolisme"]
  },
    {
    id: 3030,
    chapter: "ch1",
    rang: "A",
    question: "Vieillissement cardiovasculaire : Rigidité artérielle et conséquences ?",
    answer: "Modifications de la matrice extracellulaire (désorganisation de l'élastine, glycation non enzymatique du collagène) entraînant la perte d'élasticité des gros troncs artériels. Conséquences : diminution de l'amortissement du flux systolique, augmentation de la pression artérielle systolique (PAS) et de la pression pulsée (PP = PAS - PAD) et accélération de l'onde de pouls réfléchie aortique.",
    tags: ["cardiovasculaire", "rigidité artérielle", "HTA"]
  },
    {
    id: 3031,
    chapter: "ch1",
    rang: "A",
    question: "Vieillissement cardiovasculaire : Trouble de la relaxation myocardique ?",
    answer: "Altération du fonctionnement des myocytes par défaut de recapture du calcium par le réticulum endoplasmique, entraînant un défaut de compliance myocardique en début de diastole. Le remplissage passif du ventricule gauche en début de diastole est diminué, obligeant l'organisme à mettre en place un mécanisme compensateur basé sur la systole auriculaire tardive.",
    tags: ["cardiovasculaire", "diastole", "relaxation"]
  },
    {
    id: 3032,
    chapter: "ch1",
    rang: "A",
    question: "Rôle de la systole auriculaire après 80 ans et flux mitral Doppler ?",
    answer: "Chez le jeune, le remplissage diastolique repose à 90 % sur la phase passive (onde E prédominante au Doppler). Après 80 ans, le trouble de la relaxation ventriculaire inversera le rapport (onde A de la systole auriculaire prédominante, rapport E/A < 1). En cas de fibrillation atriale, la perte de la contraction auriculaire supprime cette compensation et provoque une décompensation cardiaque.",
    tags: ["cardiovasculaire", "Doppler", "fibrillation atriale"]
  },
    {
    id: 3033,
    chapter: "ch1",
    rang: "A",
    question: "Vieillissement cardiaque : Fréquence cardiaque maximale et paramètres inchangés ?",
    answer: "La fréquence cardiaque maximale à l'effort diminue avec l'âge (environ 220 - âge), réduisant la tolérance à l'effort et augmentant la sensibilité à l'ischémie. Les paramètres de repos qui restent strictement inchangés au cours du vieillissement physiologique sont le débit cardiaque de repos, la fréquence cardiaque de repos et la fraction d'éjection du ventricule gauche (FEVG).",
    tags: ["cardiovasculaire", "fréquence cardiaque", "débit cardiaque"]
  },
    {
    id: 3034,
    chapter: "ch1",
    rang: "A",
    question: "Effets du vieillissement sur l'appareil respiratoire ?",
    answer: "Diminution de la compliance pulmonaire (perte d'élasticité alvéolaire) et de la compliance thoracique (enraidissement costovertébral). Il en résulte une diminution du volume expiratoire maximal par seconde (VEMS) et de la capacité vitale, ainsi qu'une baisse de la force des muscles respiratoires. Les réserves ventilatoires sont diminuées face à un stress aigu.",
    tags: ["respiratoire", "compliance", "vieillissement"]
  },
    {
    id: 3035,
    chapter: "ch1",
    rang: "A",
    question: "Effets du vieillissement sur l'appareil urinaire et le rein ?",
    answer: "Réduction de la masse rénale (surtout corticale) avec perte de 20 à 40 % des glomérules fonctionnels à 70 ans. Le débit de filtration glomérulaire (DFG) diminue en moyenne de 0,5 à 1 mL/min/1,73 m² par an à partir de 50 ans. On observe aussi une diminution de la capacité de concentration et de dilution des urines, limitant l'adaptation aux pertes d'eau et de sel.",
    tags: ["rénal", "DFG", "glomérule"]
  },
    {
    id: 3036,
    chapter: "ch1",
    rang: "A",
    question: "Le piège de la créatininémie isolée chez le patient âgé ?",
    answer: "La créatinine sérique dépend directement de la masse musculaire. En raison de la sarcopénie physiologique et de la dénutrition fréquente chez la personne âgée fragile, la production endogène de créatinine est très faible. Une créatininémie normale (ex: 70 µmol/L) peut donc masquer une insuffisance rénale sévère. Il faut toujours calculer le DFG estimé (formule CKD-EPI).",
    tags: ["rénal", "créatinine", "piège"]
  },
    {
    id: 3037,
    chapter: "ch1",
    rang: "A",
    question: "Effets du vieillissement sur l'appareil digestif ?",
    answer: "1. Diminution du flux salivaire et modifications bucco-dentaires (risques de dénutrition). 2. Hypochlorhydrie gastrique par diminution de la sécrétion acide des cellules pariétales. 3. Ralentissement du péristaltisme intestinal (constipation). 4. Diminution de la masse et du débit sanguin hépatiques, ralentissant le métabolisme de premier passage des médicaments.",
    tags: ["digestif", "foie", "constipation"]
  },
    {
    id: 3038,
    chapter: "ch1",
    rang: "A",
    question: "Vieillissement du système nerveux central : Sommeil et soif ?",
    answer: "1. Sommeil : réduction de l'efficacité, déstructuration (diminution du sommeil lent profond, réveils nocturnes fréquents). 2. Soif : diminution de la sensation de soif par perte de sensibilité des osmorécepteurs centraux et modifications de l'arginine-vasopressine. Cela expose directement le patient âgé à une déshydratation non perçue lors de fortes chaleurs ou de fièvre.",
    tags: ["neurologie", "sommeil", "soif"]
  },
    {
    id: 3039,
    chapter: "ch1",
    rang: "A",
    question: "Vieillissement du système nerveux autonome et baroréflexe ?",
    answer: "On observe une diminution de la sensibilité des récepteurs aux catécholamines avec augmentation compensatrice des catécholamines circulantes. Le fonctionnement de la boucle baroréflexe est altéré, réduisant la vasoconstriction reflexe lors du passage à la station debout. Cela favorise l'hypotension orthostatique (chute de la PA systolique ≥ 20 mmHg lors du lever).",
    tags: ["neurologie", "baroréflexe", "hypotension orthostatique"]
  },
    {
    id: 3040,
    chapter: "ch1",
    rang: "A",
    question: "Vieillissement du système nerveux périphérique et proprioception ?",
    answer: "Diminution de la sensibilité proprioceptive (perte de fibres nerveuses sensorielles myélinisées, augmentation des temps de conduction nerveuse). Cette altération de la sensibilité profonde diminue la perception de la position du corps dans l'espace, favorisant directement l'instabilité posturale et augmentant le risque de chute.",
    tags: ["neurologie", "proprioception", "chute"]
  },
    {
    id: 3041,
    chapter: "ch1",
    rang: "A",
    question: "Vieillissement de l'appareil locomoteur : Muscle, os, cartilage ?",
    answer: "1. Muscle : perte de masse et de force musculaire (sarcopénie), principalement par diminution des fibres de type II (rapides). 2. Os : diminution de la densité minérale osseuse (ostéopénie/ostéoporose) et baisse de la résistance mécanique. 3. Cartilage : amincissement, déshydratation, diminution du nombre de chondrocytes, favorisant l'arthrose.",
    tags: ["locomoteur", "sarcopénie", "ostéoporose"]
  },
    {
    id: 3042,
    chapter: "ch1",
    rang: "A",
    question: "Effets du vieillissement sur la peau et les phanères ?",
    answer: "Atrophie cutanée par dégradation du tissu élastique, amincissement du derme et aplanissement de la jonction dermo-épidermique. On observe une diminution de l'activité des glandes sébacées et sudoripares (sécheresse cutanée ou xérose) et une baisse des mélanocytes (grisonnement des cheveux, taches séniles). La peau est plus fragile et sensible aux forces de cisaillement (escarres).",
    tags: ["peau", "phanères", "escarre"]
  },
    {
    id: 3043,
    chapter: "ch1",
    rang: "A",
    question: "Effets du vieillissement sur l'œil et la vision ?",
    answer: "1. Presbytie : diminution physiologique du pouvoir d'accommodation liée à la perte d'élasticité du cristallin, gênant la lecture de près. 2. Cataracte : opacification progressive du cristallin avec baisse de l'acuité visuelle et photophobie. 3. Diminution de la sensibilité aux contrastes et adaptation plus lente aux variations de luminosité (facteurs de chute).",
    tags: ["vision", "presbytie", "cataracte"]
  },
    {
    id: 3044,
    chapter: "ch1",
    rang: "A",
    question: "Presbyacousie : Définition, caractéristiques et impact cognitif ?",
    answer: "Baisse progressive, bilatérale et symétrique de l'audition liée à l'âge, portant préférentiellement sur les fréquences aiguës (gêne la compréhension de la parole en milieu bruyant). Si elle n'est pas corrigée par appareillage auditif précoce, la presbyacousie favorise l'isolement social, le repli sur soi, l'état dépressif et constitue un facteur de risque indépendant de déclin cognitif.",
    tags: ["ORL", "audition", "presbyacousie"]
  },
    {
    id: 3045,
    chapter: "ch1",
    rang: "A",
    question: "Vieillissement du système immunitaire (immunosénescence) ?",
    answer: "1. Immunité innée : état pro-inflammatoire chronique à bas bruit ('inflamm-aging'). 2. Immunité adaptative : involution du thymus entraînant une baisse de production des lymphocytes T naïfs et une restriction du répertoire T. On observe aussi une diminution de l'affinité des anticorps produits, ce qui explique la susceptibilité accrue aux infections et la moindre réponse vaccinale.",
    tags: ["immunologie", "immunosénescence", "infection"]
  },
    {
    id: 3046,
    chapter: "ch1",
    rang: "B",
    question: "Régimes restrictifs chez la personne âgée : Pourquoi sont-ils à proscrire ?",
    answer: "La restriction calorique volontaire ou les régimes hypocalcifants stricts exposent le patient âgé à une perte de masse maigre (musculaire) rapide et souvent définitive (sarcopénie accélérée). Lors de la reprise de poids, celle-ci se fait principalement sous forme de masse grasse. Les régimes hypocaloriques et restrictifs (sans sel, sans cholestérol) sont à proscrire sauf indication médicale stricte.",
    tags: ["nutrition", "régime", "sarcopénie"]
  },
    {
    id: 3047,
    chapter: "ch1",
    rang: "A",
    question: "Rôle de l'activité physique dans la prévention du vieillissement pathologique ?",
    answer: "L'activité physique régulière est la seule intervention validée pour ralentir la perte de masse et de fonction musculaire liée à l'âge. Elle améliore la sensibilité à l'insuline (lutte contre l'insulinorésistance), préserve les réserves cardiorespiratoires, maintient la densité minérale osseuse et la plasticité neuronale cérébrale, réduisant significativement le risque de chutes.",
    tags: ["activité physique", "prévention", "sarcopénie"]
  },
    {
    id: 3048,
    chapter: "ch1",
    rang: "B",
    question: "Médecine anti-âge : Efficacité démontrée des antioxydants et hormones ?",
    answer: "Toutes les grandes études contrôlées à long terme testant des suppléments antioxydants (vitamine E, C, A, Ginkgo Biloba) ou des traitements hormonaux (DHEA, hormone de croissance) ont été négatives quant à l'allongement de l'espérance de vie, la prévention cardiovasculaire ou le déclin cognitif. De plus, ces hormones présentent des risques tumoraux ou métaboliques. Seul le traitement substitutif de la ménopause a des indications précises.",
    tags: ["anti-âge", "antioxydants", "hormone"]
  },
    {
    id: 3049,
    chapter: "ch1",
    rang: "A",
    question: "Rôle de la vitamine D chez les personnes de plus de 80 ans ?",
    answer: "L'administration systématique de vitamine D (qui agit comme une hormone) présente un intérêt majeur chez les personnes âgées de plus de 80 ans (souvent carencées par manque d'ensoleillement et de synthèse cutanée). Elle permet la prévention de l'ostéoporose (en favorisant l'absorption du calcium) et de la sarcopénie (récepteurs musculaires à la vitamine D), diminuant le risque de chute de 20 %.",
    tags: ["vitamine D", "ostéoporose", "chute"]
  },
    {
    id: 3050,
    chapter: "ch1",
    rang: "A",
    question: "Régime méditerranéen et oméga-3 chez la personne âgée ?",
    answer: "Le régime méditerranéen (riche en fruits, légumes, huile d'olive, poisson et pauvre en graisses saturées) a montré un effet protecteur significatif vis-à-vis des pathologies cardiovasculaires, des cancers et des troubles neurocognitifs. Les acides gras oméga-3 (acides gras polyinsaturés présents dans les poissons gras) ont également un effet bénéfique documenté sur la préservation des fonctions cognitives.",
    tags: ["régime méditerranéen", "oméga-3", "cognition"]
  },
    {
    id: 3451,
    chapter: "ch10",
    rang: "B",
    question: "Quelle est la prévalence estimée de la dépression chez les personnes âgées à domicile vs en institution ?",
    answer: "La prévalence de la dépression augmente nettement avec la dépendance et le lieu de vie. Elle est estimée entre 10 et 15 % chez les personnes âgées vivant à domicile. Cependant, elle atteint 30 à 40 % chez les résidents en EHPAD (établissement d'hébergement pour personnes âgées dépendantes) ou les patients hospitalisés en soins de suite et réadaptation.",
    tags: ["dépression", "prévalence", "EHPAD", "épidémiologie"]
  },
    {
    id: 3452,
    chapter: "ch10",
    rang: "A",
    question: "Pourquoi la dépression est-elle souvent sous-diagnostiquée et sous-traitée chez le sujet âgé ?",
    answer: "Pour trois raisons principales : 1. L'âgisme ou la fausse croyance (partagée par le patient, sa famille et parfois le soignant) que la tristesse et l'inactivité sont des conséquences normales du vieillissement. 2. L'atypisme clinique, marqué par des plaintes somatiques exclusives (douleur, troubles digestifs) masquant l'humeur triste. 3. La confusion avec les symptômes d'un trouble neurocognitif débutant (apathie, retrait social) ou l'indifférence affective.",
    tags: ["dépression", "sous-diagnostic", "âgisme", "sémiologie atypique"]
  },
    {
    id: 3453,
    chapter: "ch10",
    rang: "A",
    question: "Quels sont les critères diagnostiques majeurs d'un épisode dépressif caractérisé (EDC) selon le DSM-5 ?",
    answer: "Le diagnostic nécessite la présence d'au moins 5 symptômes sur 9 pendant au moins 2 semaines consécutives, représentant un changement par rapport au fonctionnement antérieur, dont au moins l'un des deux premiers : 1. Humeur dépressive (tristesse, pleurs). 2. Perte d'intérêt ou de plaisir (anhedonie). Les autres critères sont : perte/gain de poids ou d'appétit, insomnie/hypersomnie, agitation/ralentissement psychomoteur, fatigue, sentiment de dévalorisation/culpabilité, diminution de l'aptitude à penser/se concentrer, idées de mort ou pensées suicidaires récurrentes.",
    tags: ["EDC", "DSM-5", "diagnostic", "anhedonie"]
  },
    {
    id: 3454,
    chapter: "ch10",
    rang: "A",
    question: "Quelles sont les particularités sémiologiques de la dépression chez le sujet âgé (symptomatologie atypique) ?",
    answer: "La dépression gériatrique est caractérisée par : 1. La prédominance de plaintes somatiques (douleurs rebelles, troubles du transit, céphalées) et d'anxiété. 2. L'apathie et le repli relationnel. 3. Les troubles cognitifs au premier plan (attention, mémoire). 4. La présentation sous forme de 'dépression hostile' (irritabilité, colère). 5. Les idées délirantes de ruine, de culpabilité ou d'incurabilité (syndrome de Cotard). L'humeur triste est souvent banalisée ou non exprimée.",
    tags: ["dépression gériatrique", "sémiologie atypique", "somatisation", "anxiété"]
  },
    {
    id: 3455,
    chapter: "ch10",
    rang: "A",
    question: "Qu'est-ce que la 'pseudodémence dépressive' et comment la différencier d'un trouble neurocognitif majeur ?",
    answer: "C'est un état de déclin cognitif apparent entièrement réversible après traitement efficace de la dépression. Pour la différencier de la démence : dans la pseudodémence, le début des troubles est souvent plus identifiable et rapide ; le patient se plaint énormément de ses pertes de mémoire et répond volontiers 'je ne sais pas' aux tests ; ses performances sont fluctuantes et s'améliorent avec l'encouragement. À l'inverse, le patient dément a tendance à minimiser ou ignorer ses troubles (anosognosie) et fait des erreurs persévératives.",
    tags: ["pseudodémence", "dépression", "démence", "diagnostic différentiel"]
  },
    {
    id: 3456,
    chapter: "ch10",
    rang: "A",
    question: "Quelles sont les caractéristiques cliniques de la mélancolie gériatrique (dépression mélancolique) ?",
    answer: "La dépression mélancolique se caractérise par : 1. Une anhédonie totale et une absence totale de réactivité aux stimuli agréables. 2. Un ralentissement psychomoteur majeur (pouvant aller jusqu'au catatonie/stupeur) ou au contraire une agitation anxieuse extrême. 3. Une aggravation matinale des symptômes. 4. Un réveil précoce. 5. Une anorexie majeure avec perte de poids. 6. Des idées délirantes congruentes à l'humeur (culpabilité, ruine, négation des organes ou syndrome de Cotard).",
    tags: ["mélancolie", "Cotard", "délire", "urgence"]
  },
    {
    id: 3457,
    chapter: "ch10",
    rang: "A",
    question: "Pourquoi la dépression mélancolique constitue-t-elle une urgence médicale absolue en gériatrie ?",
    answer: "Elle constitue une urgence en raison du risque vital immédiat lié à : 1. Un passage à l'acte suicidaire violent et déterminé. 2. Une déshydratation et une dénutrition rapides secondaires au refus total de s'alimenter et de boire (clinophilie, stupeur mélancolique). 3. Les complications de décubitus (phlébite, embolie pulmonaire) dues à l'inactivité motrice complète. Elle impose une hospitalisation immédiate, souvent en psychiatrie ou gériatrie aiguë.",
    tags: ["mélancolie", "urgence médicale", "suicide", "dénutrition"]
  },
    {
    id: 3458,
    chapter: "ch10",
    rang: "A",
    question: "Quelles maladies somatiques sont fréquemment associées ou inductrices de dépression chez le sujet âgé ?",
    answer: "Plusieurs pathologies somatiques chroniques ou aiguës favorisent la dépression : 1. Les pathologies neurologiques (maladie de Parkinson, accident vasculaire cérébral - particulièrement frontal gauche, sclérose en plaques, démence). 2. Les endocrinopathies (hypothyroïdie, hyperparathyroïdie, diabète). 3. Les néoplasies (particulièrement le cancer du pancréas). 4. Les maladies cardiovasculaires (insuffisance cardiaque, infarctus du myocarde récent). 5. Les syndromes douloureux chroniques.",
    tags: ["comorbidités somatiques", "dépression secondaire", "Parkinson", "AVC"]
  },
    {
    id: 3459,
    chapter: "ch10",
    rang: "A",
    question: "Quels médicaments d'usage courant chez la personne âgée peuvent induire un état dépressif ?",
    answer: "De nombreux médicaments peuvent induire ou aggraver un état dépressif : 1. Les corticoïdes systémiques. 2. Certains antihypertenseurs (bêta-bloquants, en particulier ceux passant la barrière hémato-encéphalique comme le propranolol). 3. Les benzodiazépines au long cours (effet dépresseur direct et aggravation cognitive). 4. Certains neuroleptiques. 5. Les traitements hormonaux (analogues de la LHRH). 6. Des antiparkinsoniens en cas de sevrage ou ajustement rapide.",
    tags: ["iatrogénie", "dépression médicamenteuse", "corticoïdes", "bêta-bloquants"]
  },
    {
    id: 3460,
    chapter: "ch10",
    rang: "A",
    question: "Qu'est-ce que l'échelle GDS-15 (Geriatric Depression Scale) et comment l'utiliser ?",
    answer: "La GDS-15 est une échelle simplifiée de dépistage de la dépression validée pour le sujet âgé, composée de 15 questions fermées par 'Oui' ou 'Non' (ce qui évite les biais des échelles visuelles ou analogiques). Un score supérieur ou égal à 5/15 indique une probabilité élevée d'épisode dépressif et impose une confirmation par entretien clinique. Un score >= 10 confirme presque toujours la dépression.",
    tags: ["GDS-15", "dépistage", "échelle", "dépression"]
  },
    {
    id: 3461,
    chapter: "ch10",
    rang: "A",
    question: "Quelles sont les 4 questions du Mini-GDS (GDS-4) et comment interpréter son score ?",
    answer: "Le GDS-4 comporte les questions suivantes : 1. Vous sentez-vous souvent abattu(e) et triste ? (Oui=1) 2. Avez-vous le sentiment que votre vie est vide ? (Oui=1) 3. Êtes-vous heureux(se) la plupart du temps ? (Non=1) 4. Pensez-vous que votre situation est sans espoir ? (Oui=1). Un score supérieur ou égal à 1/4 indique une forte suspicion de dépression et nécessite de compléter l'évaluation.",
    tags: ["Mini-GDS", "GDS-4", "dépistage rapide", "questions"]
  },
    {
    id: 3462,
    chapter: "ch10",
    rang: "A",
    question: "Comment se caractérise le risque suicidaire chez la personne âgée par rapport aux sujets plus jeunes ?",
    answer: "Chez le sujet âgé, le risque de suicide est caractérisé par une létalité beaucoup plus importante : les tentatives de suicide sont moins fréquentes mais beaucoup plus souvent réussies (ratio de 1 mort pour 4 tentatives chez la personne âgée, contre 1 pour 20 chez le jeune). Les moyens utilisés sont plus violents et déterminés. Le suicide de la personne âgée est rarement impulsif et s'associe souvent à une planification silencieuse.",
    tags: ["suicide", "risque suicidaire", "létalité", "prévention"]
  },
    {
    id: 3463,
    chapter: "ch10",
    rang: "A",
    question: "Quels sont les facteurs de risque spécifiques de suicide chez le sujet âgé ?",
    answer: "1. Le sexe masculin. 2. L'âge supérieur à 80 ans. 3. Le veuvage récent, le deuil et l'isolement social/géographique. 4. L'existence d'une maladie somatique douloureuse, invalidante ou incurable (perte d'autonomie). 5. Un antécédent personnel de tentative de suicide. 6. La présence d'un syndrome dépressif sévère. 7. Le sentiment d'inutilité ou d'être 'un fardeau' pour ses proches.",
    tags: ["suicide", "facteurs de risque", "isolement", "veuvage"]
  },
    {
    id: 3464,
    chapter: "ch10",
    rang: "A",
    question: "Comment évaluer le risque suicidaire de manière directe et respectueuse lors de la consultation ?",
    answer: "L'évaluation doit être systématique devant tout patient suspect de dépression, par des questions graduelles : 'Est-ce que vous vous sentez fatigué de vivre ?', 'Pensez-vous parfois que ce serait plus simple si vous ne vous réveilliez pas ?', 'Avez-vous des idées de mettre fin à vos jours ?'. Il faut évaluer l'imminence (le patient a-t-il un plan précis ?), l'intentionnalité, et rechercher la formule de passage à l'acte ('Je veux rejoindre mon conjoint', 'Je veux cesser d'être une charge'). Poser ces questions n'induit pas le geste, mais permet de le prévenir.",
    tags: ["suicide", "entretien clinique", "évaluation", "communication"]
  },
    {
    id: 3465,
    chapter: "ch10",
    rang: "A",
    question: "Quelles sont les indications d'hospitalisation d'urgence pour un épisode dépressif chez le sujet âgé ?",
    answer: "L'hospitalisation (parfois sous contrainte) s'impose d'urgence en cas de : 1. Risque suicidaire élevé ou planifié (idées suicidaires actives, scénario précis). 2. Dépression mélancolique ou délirante. 3. Refus alimentaire complet menaçant le pronostic vital (déshydratation, dénutrition aiguë). 4. Épuisement total ou rupture de l'entourage familial (patient isolé sans surveillance possible). 5. Résistance thérapeutique documentée avec mise en danger à domicile.",
    tags: ["hospitalisation", "indications", "urgence", "suicide", "refus alimentaire"]
  },
    {
    id: 3466,
    chapter: "ch10",
    rang: "A",
    question: "Quels antidépresseurs sont recommandés en première intention chez le sujet âgé et pourquoi ?",
    answer: "Les Inhibiteurs Sélectifs de la Recapture de la Sérotonine (ISRS, comme la sertraline ou l'escitalopram) sont recommandés en première intention. Ils ont une efficacité équivalente aux antidépresseurs plus anciens, mais présentent un profil de tolérance cardiovasculaire et anticholinergique nettement supérieur, ce qui limite le risque de confusion, de rétention d'urine, d'hypotension orthostatique et de troubles conductifs chez le patient âgé comorbide.",
    tags: ["ISRS", "antidépresseurs", "première intention", "sertraline", "escitalopram"]
  },
    {
    id: 3467,
    chapter: "ch10",
    rang: "A",
    question: "Pourquoi les antidépresseurs tricycliques (imipraminiques) doivent-ils être évités chez le sujet âgé ?",
    answer: "Ils ont des effets anticholinergiques puissants provoquant : confusion mentale, somnolence, constipation sévère (risque de fécalome), rétention d'urine (risque de globe vésical), sécheresse buccale, mydriase (risque de glaucome aigu à angle fermé). De plus, ils induisent une hypotension orthostatique (chutes) et des troubles de conduction cardiaque (arythmies, blocs conductifs), les rendant particulièrement dangereux sur ce terrain.",
    tags: ["tricycliques", "anticholinergiques", "contre-indication", "iatrogénie", "danger"]
  },
    {
    id: 3468,
    chapter: "ch10",
    rang: "A",
    question: "Quelles sont les règles d'introduction et d'augmentation posologique des antidépresseurs chez la personne âgée ?",
    answer: "La règle d'or est : 'Start low, go slow, but go' (commencer à posologie faible, augmenter lentement, mais atteindre la dose thérapeutique). On débute généralement à la moitié de la dose de l'adulte jeune (ex: sertraline 25 mg/j) pour limiter les effets secondaires initiaux (anxiété, nausées). L'augmentation se fait par paliers de 1 à 2 semaines jusqu'à la dose cible. Il faut éviter l'erreur fréquente de laisser le patient à une dose infrathérapeutique inefficace.",
    tags: ["antidépresseurs", "posologie", "iatrogénie", "règles de prescription"]
  },
    {
    id: 3469,
    chapter: "ch10",
    rang: "A",
    question: "Quelle est la durée minimale recommandée d'un traitement antidépresseur après un premier épisode dépressif ?",
    answer: "Pour un premier épisode dépressif caractérisé bien toléré et répondeur, le traitement doit être poursuivi à dose efficace (la même dose qui a permis la rémission, sans réduction) pendant une durée minimale de 6 à 9 mois après l'obtention de la rémission clinique complète. Un arrêt prématuré expose à un risque de rechute supérieur à 50 % chez le sujet âgé.",
    tags: ["antidépresseurs", "durée de traitement", "rechute", "observance"]
  },
    {
    id: 3470,
    chapter: "ch10",
    rang: "A",
    question: "Quel est le risque de récidive dépressive chez la personne âgée et comment adapter la durée du traitement d'entretien ?",
    answer: "Le risque de récidive augmente avec le nombre d'épisodes antérieurs. Après deux épisodes dépressifs, le risque de récidive à 2 ans dépasse 70 %. En cas de dépression récurrente (au moins 2 ou 3 épisodes documentés), ou si le dernier épisode était sévère, mélancolique ou suicidaire, le traitement antidépresseur d'entretien doit être maintenu au long cours, voire à vie, à dose efficace constante.",
    tags: ["récidive", "traitement d'entretien", "chronique", "antidépresseurs"]
  },
    {
    id: 3471,
    chapter: "ch10",
    rang: "A",
    question: "Quelle complication biologique grave (trouble hydro-électrolytique) peut survenir après l'introduction d'un ISRS ?",
    answer: "C'est l'hyponatrémie d'expression souvent insidieuse, secondaire à un syndrome de sécrétion inappropriée d'hormone antidiurétique (SIADH) induit par les ISRS (ou IRSNA). Elle survient généralement dans les 2 à 4 premières semaines du traitement. Elle se manifeste par une asthénie, des nausées, des céphalées, des troubles de la marche (chutes) ou une confusion. Une surveillance de l'ionogramme sanguin (natrémie) est conseillée avant et 2 semaines après l'introduction.",
    tags: ["hyponatrémie", "SIADH", "ISRS", "iatrogénie", "natrémie"]
  },
    {
    id: 3472,
    chapter: "ch10",
    rang: "A",
    question: "Quel est le risque d'association des ISRS avec les AINS ou les antiagrégants plaquettaires ?",
    answer: "L'association d'un ISRS avec un Anti-Inflammatoire Non Stéroïdien (AINS) ou de l'aspirine majore significativement le risque d'hémorragie digestive haute. En effet, les ISRS inhibent la recapture de la sérotonine par les plaquettes, altérant leur capacité d'agrégation. Si cette association est indispensable, une surveillance étroite et la prescription concomitante d'un inhibiteur de la pompe à protons (IPP) en prévention gastrique sont recommandées.",
    tags: ["ISRS", "AINS", "hémorragie digestive", "iatrogénie", "interactions"]
  },
    {
    id: 3473,
    chapter: "ch10",
    rang: "A",
    question: "Quel antidépresseur (parmi les ISRS/IRSNA) présente un risque d'allongement de l'intervalle QT et impose une surveillance ECG ?",
    answer: "Le citalopram (et son énantiomère l'escitalopram) présente un risque dose-dépendant d'allongement de l'intervalle QT, pouvant favoriser la survenue d'arythmies ventriculaires graves (torsades de pointes). Chez le sujet âgé de plus de 65 ans, la dose maximale de citalopram est limitée à 20 mg/jour (10 mg/jour pour l'escitalopram). Un ECG de contrôle doit être réalisé avant traitement pour vérifier l'absence d'espace QT long (> 450 ms chez l'homme, > 470 ms chez la femme).",
    tags: ["citalopram", "QT long", "ECG", "antidépresseurs", "sécurité"]
  },
    {
    id: 3474,
    chapter: "ch10",
    rang: "B",
    question: "Quel est l'intérêt de la mirtazapine en gériatrie et quels sont ses effets secondaires bénéfiques chez certains patients ?",
    answer: "La mirtazapine est un antidépresseur tétracyclique noradrénergique et sérotoninergique spécifique (NaSSA). Ses propriétés pharmacologiques induisent deux effets secondaires qui peuvent être cliniquement bénéfiques chez le sujet âgé dénutri et insomniaque : 1. Un effet sédatif marqué (par blocage des récepteurs H1 à l'histamine), utile en prise vespérale pour améliorer le sommeil. 2. Un effet orexigène (stimulation de l'appétit) favorisant la reprise de poids.",
    tags: ["mirtazapine", "sommeil", "appétit", "dénutrition", "gériatrie"]
  },
    {
    id: 3475,
    chapter: "ch10",
    rang: "A",
    question: "Quelles sont les indications de l'électroconvulsivothérapie (sismothérapie) chez le sujet âgé ?",
    answer: "La sismothérapie est un traitement de choix en gériatrie pour : 1. Les épisodes dépressifs sévères avec pronostic vital engagé à court terme (mélancolie stuporeuse, refus alimentaire et hydrique complet). 2. Les dépressions caractérisées avec un risque suicidaire imminent et majeur. 3. Les dépressions résistantes à au moins deux lignes d'antidépresseurs bien conduits. 4. Les contre-indications absolues aux traitements antidépresseurs pharmacologiques.",
    tags: ["sismothérapie", "ECT", "dépression résistante", "mélancolie"]
  },
    {
    id: 3476,
    chapter: "ch10",
    rang: "B",
    question: "Quels sont les effets secondaires cognitifs transitoires possibles après une séance de sismothérapie ?",
    answer: "L'effet secondaire principal de la sismothérapie est la survenue de troubles de la mémoire, principalement une amnésie antérograde (difficulté à mémoriser des faits récents) et une amnésie rétrograde lacunaire concernant la période entourant les soins. Ces troubles sont généralement transitoires, se résolvant spontanément en quelques semaines après la fin de la cure cure de traitement.",
    tags: ["sismothérapie", "effets indésirables", "mémoire", "amnésie"]
  },
    {
    id: 3477,
    chapter: "ch10",
    rang: "A",
    question: "Quelle est l'importance de la psychothérapie de soutien ou des thérapies cognitives et comportementales (TCC) ?",
    answer: "La psychothérapie (notamment TCC, thérapies interpersonnelles ou de réminiscence) doit toujours être associée au traitement médicamenteux. Elle aide le patient à élaborer les facteurs de stress (deuils, perte d'autonomie, entrée en institution), à lutter contre les pensées dysfonctionnelles et à réinvestir des activités valorisantes. Chez le sujet âgé avec dépression légère à modérée, la psychothérapie seule peut être proposée en première intention.",
    tags: ["psychothérapie", "TCC", "prise en charge globale", "non-médicamenteux"]
  },
    {
    id: 3478,
    chapter: "ch10",
    rang: "A",
    question: "Comment la dépression impacte-t-elle l'autonomie fonctionnelle (AVD/IADL) de la personne âgée ?",
    answer: "La dépression gériatrique entraîne un déclin fonctionnel rapide et marqué : le ralentissement psychomoteur, la perte d'énergie (anergie) et le manque de motivation conduisent le patient à négliger ses soins personnels, son alimentation et la gestion de ses médicaments. La dépression double le risque de dépendance pour les activités de base (ADL) et constitue un facteur prédictif majeur d'institutionnalisation.",
    tags: ["autonomie", "déclin fonctionnel", "ADL", "IADL"]
  },
    {
    id: 3479,
    chapter: "ch10",
    rang: "B",
    question: "Qu'est-ce que la 'dépression vasculaire' et ses caractéristiques neuropsychologiques ?",
    answer: "C'est un sous-type de dépression survenant tardivement chez des patients présentant des facteurs de risque cardiovasculaires et des lésions vasculaires cérébrales (infarcissements lacunaires ou leucopathie périventriculaire à l'IRM). Sur le plan neuropsychologique, elle est caractérisée par un syndrome dysexécutif prédominant (difficultés d'organisation, de planification), un ralentissement marqué et une moins bonne réponse aux antidépresseurs classiques.",
    tags: ["dépression vasculaire", "leucopathie", "syndrome dysexécutif", "cardiovasculaire"]
  },
    {
    id: 3480,
    chapter: "ch10",
    rang: "B",
    question: "Comment différencier cliniquement une apathie isolée d'un syndrome dépressif gériatrique ?",
    answer: "L'apathie (perte d'initiative et de motivation) est un symptôme fréquent des TNC (Alzheimer, DFT) et de la dépression. Dans l'apathie pure (sans dépression), le patient ne présente pas de tristesse de l'humeur, pas d'auto-dépréciation, pas de sentiments de culpabilité ou d'incurabilité, pas d'anxiété douloureuse, et pas d'idées suicidaires. Le patient apathique présente une indifférence émotionnelle globale, alors que le patient déprimé exprime une souffrance morale active.",
    tags: ["apathie", "dépression", "diagnostic différentiel", "sémiologie"]
  },
    {
    id: 3481,
    chapter: "ch10",
    rang: "A",
    question: "Quel est le lien entre le syndrome de glissement et la dépression chez le sujet âgé ?",
    answer: "Le syndrome de glissement est un état de détérioration globale rapide, physique et psychique, survenant après un intervalle libre après une agression aiguë (chute, infection, deuil). Il est marqué par un mutisme, un refus alimentaire et hydrique total, une opposition aux soins et un désir de mort exprimé ou passif. Bien que proche de la mélancolie stuporeuse, il s'en distingue par son caractère souvent réfractaire aux antidépresseurs et sa mortalité très élevée. Il nécessite une prise en charge palliative et nutritionnelle rapide.",
    tags: ["syndrome de glissement", "refus alimentaire", "pronostic", "mélancolie"]
  },
    {
    id: 3482,
    chapter: "ch10",
    rang: "A",
    question: "Quelles sont les mesures non médicamenteuses essentielles à associer au traitement antidépresseur ?",
    answer: "1. L'activité physique régulière (marche), qui stimule la neurogenèse et a un effet antidépresseur propre démontré. 2. La resocialisation (clubs de retraités, visites régulières, ateliers collectifs). 3. La lutte contre la privation sensorielle (correction des troubles de l'audition et de la vision). 4. La structuration de l'agenda quotidien (maintien d'heures de lever, de repas et de coucher fixes) pour resynchroniser le patient.",
    tags: ["mesures non médicamenteuses", "activité physique", "socialisation", "rythme circadien"]
  },
    {
    id: 3483,
    chapter: "ch10",
    rang: "A",
    question: "Comment le deuil pathologique (compliqué) se distingue-t-il d'une dépression caractérisée gériatrique ?",
    answer: "Le deuil normal ou compliqué est centré sur la perte de l'être cher (pensées obsédantes sur le défunt, vagues de douleur déclenchées par des rappels). Dans la dépression caractérisée, la souffrance morale est plus globale, non limitée au défunt, et s'accompagne d'une autodépréciation sévère, d'une culpabilité morbide disproportionnée (ne portant pas uniquement sur des manquements envers le défunt), d'un ralentissement psychomoteur majeur et d'un désir actif de mourir.",
    tags: ["deuil pathologique", "dépression", "deuil compliqué", "diagnostic différentiel"]
  },
    {
    id: 3484,
    chapter: "ch10",
    rang: "A",
    question: "Quels sont les signes cliniques de la dépression masquée ou hypocondriaque chez le sujet âgé ?",
    answer: "Le patient présente des plaintes multiples centrées sur le corps : douleurs diffuses rebelles aux antalgiques (rachialgies, brûlures), troubles digestifs chroniques (constipation opiniâtre, colopathie fonctionnelle), sensations de fatigue inexpliquées, vertiges ou craintes obsédantes d'être atteint d'une maladie incurable (cancer, sénilité). L'interrogatoire attentif retrouve souvent un infléchissement récent du fonctionnement social et familial et une perte de plaisir (anhédonie).",
    tags: ["dépression masquée", "hypocondrie", "somatisation", "sémiologie"]
  },
    {
    id: 3485,
    chapter: "ch10",
    rang: "A",
    question: "Pourquoi l'évaluation de la fonction rénale est-elle indispensable avant d'initier un traitement psychotrope ?",
    answer: "Le vieillissement s'accompagne d'une baisse physiologique du débit de filtration glomérulaire (DFG), augmentant le risque d'accumulation des molécules hydrophiles ou de leurs métabolites actifs éliminés par voie rénale. L'évaluation de la fonction rénale (formule de Cockcroft-Gault ou CKD-EPI) permet d'adapter la posologie initiale des antidépresseurs ou psychotropes prescrits afin de limiter le surdosage et la iatrogénie.",
    tags: ["fonction rénale", "clairance", "iatrogénie", "psychotropes", "posologie"]
  },
    {
    id: 3486,
    chapter: "ch10",
    rang: "A",
    question: "Quel est le risque d'une association antidépresseur + neuroleptique chez un patient déprimé âgé ?",
    answer: "Cette association (parfois prescrite dans les dépressions psychotiques ou l'agitation anxieuse) majore de manière critique le risque iatrogénique : 1. Risque d'hypotension orthostatique (chute). 2. Majoration des effets anticholinergiques (confusion, constipation, rétention urinaire). 3. Syndrome extrapyramidal ou dyskinésies tardives. 4. Risque d'allongement cumulé du QT (torsade de pointes). Cette coprescription exige un suivi clinique et électrocardiographique renforcé.",
    tags: ["neuroleptiques", "interactions", "iatrogénie", "QT", "cardiovasculaire"]
  },
    {
    id: 3487,
    chapter: "ch10",
    rang: "A",
    question: "Comment s'organise le suivi clinique d'un patient âgé après l'instauration d'un traitement antidépresseur ?",
    answer: "Le suivi doit être rapproché : 1. À une semaine : évaluer la tolérance initiale (nausées, anxiété rebelle) et l'observance. 2. À deux semaines : contrôler la natrémie (recherche de SIADH) et évaluer la tolérance. 3. À 4 semaines : évaluer l'efficacité thérapeutique (début d'action attendu). 4. Si la réponse est partielle ou nulle à 4-6 semaines à posologie efficace, il faut envisager une augmentation de dose ou un changement de classe.",
    tags: ["suivi clinique", "tolérance", "natrémie", "efficacité", "antidépresseurs"]
  },
    {
    id: 3488,
    chapter: "ch10",
    rang: "A",
    question: "Quel est le délai d'action habituel des antidépresseurs chez le sujet âgé ?",
    answer: "Chez le sujet âgé, le délai d'action des antidépresseurs est souvent plus long que chez l'adulte jeune. Une amélioration clinique significative (humeur, appétit, sommeil) n'est généralement observée qu'après 4 à 6 semaines de traitement continu à posologie efficace. Le patient et sa famille doivent être informés de ce délai pour éviter un découragement et un arrêt prématuré du traitement.",
    tags: ["délai d'action", "observance", "pharmacologie", "antidépresseurs"]
  },
    {
    id: 3489,
    chapter: "ch10",
    rang: "B",
    question: "Quel est le rôle de la stimulation magnétique transcrânienne (SMTr) dans la dépression résistante gériatrique ?",
    answer: "La SMTr est une technique de neuromodulation non invasive de plus en plus utilisée chez le sujet âgé présentant une dépression résistante aux antidépresseurs. Elle consiste à appliquer des impulsions magnétiques répétées sur le cortex préfrontal dorsolatéral gauche pour stimuler l'activité neuronale. C'est une alternative sûre, bien tolérée (pas d'anesthésie nécessaire, pas d'effet délétère sur la mémoire), particulièrement chez les patients fragiles.",
    tags: ["SMTr", "neuromodulation", "dépression résistante", "gériatrie"]
  },
    {
    id: 3490,
    chapter: "ch10",
    rang: "A",
    question: "Comment aborder les thérapies familiales et le soutien de l'entourage dans la prise en charge de la dépression ?",
    answer: "Il faut expliquer à la famille que la dépression est une véritable maladie médicale, et non un manque de volonté ou une 'comédie'. L'entourage doit être guidé pour adopter une attitude de soutien bienveillant sans hyperprotection ni reproches infantilisants ('secouez-vous'). Il est également crucial d'évaluer la charge psychologique de l'aidant familial pour prévenir son propre épuisement ou sa dépression réactionnelle.",
    tags: ["famille", "aidant", "éducation thérapeutique", "psychothérapie"]
  },
    {
    id: 3491,
    chapter: "ch10",
    rang: "A",
    question: "Quels sont les risques liés à l'automédication chez un sujet âgé déprimé ?",
    answer: "La dépression favorise l'anxiété et l'insomnie, poussant le patient à l'automédication iatrogène. Les risques majeurs incluent : 1. L'utilisation de benzodiazépines résiduelles (chutes, confusion, dépendance). 2. La prise de spécialités sédatives en vente libre (ex: antihistaminiques H1) ayant des effets anticholinergiques puissants. 3. La prise de millepertuis (phytothérapie anti-dépressive) provoquant des interactions médicamenteuses sévères par induction enzymatique (cytochrome P450).",
    tags: ["automédication", "millepertuis", "anticholinergiques", "iatrogénie", "benzodiazépines"]
  },
    {
    id: 3492,
    chapter: "ch10",
    rang: "B",
    question: "Quel est le lien entre la dépression gériatrique et le risque de survenue ultérieure d'un trouble neurocognitif ?",
    answer: "Il existe un lien bidirectionnel fort. La dépression à début tardif (après 60 ans) peut être le prodrome (symptôme inaugural) d'un trouble neurocognitif sous-jacent (maladie d'Alzheimer, démence vasculaire). De plus, les épisodes dépressifs répétés entraînent une neurotoxicité hippocampique (par hypercortisolémie chronique) qui altère la réserve cognitive, constituant un facteur de risque indépendant de survenue d'un TNC majeur à long terme.",
    tags: ["dépression", "facteurs de risque", "Alzheimer", "réserve cognitive"]
  },
    {
    id: 3493,
    chapter: "ch10",
    rang: "A",
    question: "Pourquoi la carence en vitamine D ou l'hypothyroïdie doivent-elles être systématiquement recherchées devant un syndrome dépressif ?",
    answer: "L'hypothyroïdie (même fruste) et la carence sévère en vitamine D sont très fréquentes chez le sujet âgé et peuvent mimer ou aggraver un état dépressif en provoquant asthénie, ralentissement psychomoteur, troubles de la concentration et apathie. Le traitement substitutif (lévothyroxine) ou la supplémentation vitaminique permet souvent de corriger ou d'améliorer grandement ces symptômes.",
    tags: ["vitamine D", "hypothyroïdie", "causes réversibles", "diagnostic différentiel"]
  },
    {
    id: 3494,
    chapter: "ch10",
    rang: "A",
    question: "Quelles précautions prendre lors du sevrage (arrêt) d'un traitement antidépresseur chez le sujet âgé ?",
    answer: "L'arrêt d'un traitement antidépresseur doit toujours être progressif, sur une période minimale de 4 à 8 semaines, en réduisant lentement les doses par paliers. Un arrêt brutal expose au syndrome de sevrage (anxiété, vertiges, paresthésies, nausées, sueurs) et augmente de manière critique le risque de rechute précoce. Le sevrage ne doit être envisagé qu'après une période prolongée de rémission complète stable.",
    tags: ["sevrage", "antidépresseurs", "rechute", "tolérance"]
  },
    {
    id: 3495,
    chapter: "ch10",
    rang: "A",
    question: "Quels sont les critères de rémission complète d'un épisode dépressif gériatrique ?",
    answer: "La rémission complète correspond à la disparition quasi-totale des symptômes cliniques de l'épisode dépressif (score GDS < 5/15) pendant au moins 2 mois consécutifs, avec un retour au niveau de fonctionnement et d'autonomie antérieur du patient. La rémission partielle (persistance de symptômes résiduels comme l'insomnie ou l'anxiété) est un facteur de risque majeur de rechute rapide.",
    tags: ["rémission", "suivi", "pronostic", "rechute"]
  },
    {
    id: 3496,
    chapter: "ch10",
    rang: "A",
    question: "Comment la douleur chronique et la dépression s'auto-entretiennent-elles (le cercle vicieux douleur-dépression) ?",
    answer: "La douleur chronique et la dépression partagent des voies neurobiologiques communes impliquant la sérotonine et la noradrénaline. La douleur non soulagée induit un stress chronique favorisant la dépression. Réciproquement, l'état dépressif abaisse le seuil de tolérance à la douleur (hyperalgésie) et majore les plaintes somatiques. La prise en charge thérapeutique doit cibler simultanément les deux dimensions (ex: prescription d'un IRSNA comme la duloxétine ayant une efficacité sur la dépression et les douleurs neuropathiques).",
    tags: ["douleur chronique", "dépression", "cercle vicieux", "duloxétine", "IRSNA"]
  },
    {
    id: 3497,
    chapter: "ch10",
    rang: "A",
    question: "Quelle est la place des anxiolytiques (benzodiazépines) en appoint du traitement antidépresseur chez le sujet âgé ?",
    answer: "Leur prescription doit être très limitée, uniquement en début de traitement antidépresseur pour contrôler une anxiété majeure ou une insomnie sévère, pour une durée maximale de 2 à 4 semaines. Il faut privilégier les molécules de demi-vie courte sans métabolites actifs (oxazépam, lorazépam) à posologie minimale. L'usage au long cours est à proscrire en raison du risque de dépendance, d'aggravation cognitive, de troubles de l'équilibre (chutes) et de confusion.",
    tags: ["benzodiazépines", "anxiété", "iatrogénie", "chutes", "sécurité"]
  },
    {
    id: 3498,
    chapter: "ch10",
    rang: "A",
    question: "Quels sont les risques cardiovasculaires associés aux antidépresseurs tricycliques ?",
    answer: "Les tricycliques (amitriptyline, clomipramine) ont des effets pro-arythmiques de type stabilisants de membrane : ils provoquent un allongement de la conduction cardiaque (blocs sino-atrial, auriculo-ventriculaire, intraventriculaire), un allongement du QT, une tachycardie sinusale réflexe (par effet anticholinergique) et une hypotension orthostatique sévère. Ils sont formellement contre-indiqués en cas d'insuffisance cardiaque, d'infarctus récent ou de bloc de conduction non appareillé.",
    tags: ["tricycliques", "cardiovasculaire", "arythmies", "contre-indication"]
  },
    {
    id: 3499,
    chapter: "ch10",
    rang: "A",
    question: "Comment se manifeste le ralentissement psychomoteur dans la dépression gériatrique ?",
    answer: "Il se manifeste par une bradykinésie (lenteur des mouvements), une mimique figée (hypomimie), une voix monocorde avec augmentation du temps de latence avant de répondre aux questions (bradypsychie). Sur le plan comportemental, le patient peut présenter une clinophilie (rester allongé toute la journée) et un apragmatisme (incapacité à initier les gestes de la vie quotidienne comme se laver ou s'habiller), mimant un syndrome parkinsonien ou un TNC sévère.",
    tags: ["ralentissement psychomoteur", "clinophilie", "apragmatisme", "sémiologie"]
  },
    {
    id: 3500,
    chapter: "ch10",
    rang: "B",
    question: "Quel est l'intérêt du score de Charlson (comorbidités) dans l'évaluation globale d'un patient déprimé ?",
    answer: "Le score de Charlson permet d'évaluer de manière quantitative la charge et la sévérité des comorbidités somatiques d'un patient. C'est un facteur prédictif indépendant majeur de mortalité et de perte d'autonomie. En présence d'un score de Charlson élevé, la prise en charge de la dépression doit être particulièrement vigilante concernant la tolérance des traitements et les interactions médicamenteuses.",
    tags: ["Charlson", "comorbidités", "évaluation", "pronostic"]
  }
];

if (typeof module !== 'undefined' && module.exports) { module.exports = { MEGA_FLASHCARDS }; }
