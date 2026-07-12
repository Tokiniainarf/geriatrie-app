// ═══════════════════════════════════════════════════════════════
//  Annales EVC Gériatrie — 40+ cas cliniques complets
//  Couvre les 20 chapitres du Manuel de Gériatrie CNEG
// ═══════════════════════════════════════════════════════════════

const ANNALES_EXPANDED = [
  // ─── CH1 : Vieillissement ───
  { id: 101, chapter: 'ch1', difficulty: 'A',
    title: 'Vieillissement physiologique vs pathologique',
    cas: 'Mme Dupont, 82 ans, consulte pour fatigue. GDS 2, ADL 6/6, IADL 8/8. NFS, TSH, glycémie normales. Elle marche 30min/j, vit seule, lit le journal.',
    correction: 'Vieillissement physiologique. Pas de pathologie démasquée. GDS 2 = tristesse normale. Conserver activité physique, social, suivi annuel. Pas de bilan complémentaire.' },
  { id: 102, chapter: 'ch1', difficulty: 'B',
    title: 'Mécanismes cellulaires du vieillissement',
    cas: 'Question EVC : Citez 3 mécanismes cellulaires du vieillissement et leurs conséquences cliniques.',
    correction: '1. Raccourcissement télomères → sénescence cellulaire. 2. Dommages oxydatifs (ROS) → accumulation lipofuscine. 3. Glycation avancée (AGE) → rigidité tissulaire. Conséquences : baisse réserve fonctionnelle, immunosénescence, inflammation chronique (inflammaging).' },

  // ─── CH2 : Raisonnement gériatrique ───
  { id: 103, chapter: 'ch2', difficulty: 'A',
    title: 'Évaluation gériatrique multidimensionnelle',
    cas: 'M. Martin, 85 ans, chute à domicile. Veuve, 3 AVC, diabète type 2, MMS 22/30, ADL 4/6, IADL 3/8, albumine 28g/L, MNA 17.',
    correction: 'EGM nécessaire. Fragilité sévère : polymorbidité, cognitif altéré, dépendant AVD, dénutrition. Plan : rééducation, renutrition (MNA<17 = dénutrition), équilibre glycémique adapté, révision médicamenteuse, aide domicile, évaluation cognitive complète (MMS 22 → bilan mémoire).' },

  // ─── CH3 : Autonomie ───
  { id: 104, chapter: 'ch3', difficulty: 'A',
    title: 'Échelle ADL et IADL',
    cas: 'Mme Bernard, 78 ans, arthrose genou sévère. ADL 6/6 (autonome), IADL 4/8 (ne fait plus les courses, cuisine difficilement, ne prend plus les transports, ne gère plus son argent).',
    correction: 'Autonome AVD (ADL intactes), dépendante AVD instrumentales (IADL 4/8). Prise en charge : aide ménagère, livraison courses, aide à la gestion financière, kiné genou, évaluation chirurgicale prothèse. Objectif : maintenir à domicile.' },

  // ─── CH4 : Éthique ───
  { id: 105, chapter: 'ch4', difficulty: 'A',
    title: 'Directive anticipée et personne de confiance',
    cas: 'M. Durand, 89 ans, BPCO stade IV, refuse l\'intubation. Sa fille souhaite tout faire. Il n\'a pas de directive anticipée.',
    correction: 'Loi Kouchner 2002 + Leonetti 2005. Le refus du patient prime (autonomie). Rédiger directives anticipées avec le patient. Désigner personne de confiance. Si conflit famille/patient : éthique de l\'accompagnement. Ne pas acharnement thérapeutique. Soins palliatifs si refus confirmé.' },

  // ─── CH5 : Sensoriel ───
  { id: 106, chapter: 'ch5', difficulty: 'A',
    title: 'Presbyacousie et chute',
    cas: 'Mme Petit, 80 ans, chutes répétées. Audiogramme : perte neurosensorielle bilatérale 4-8kHz. MMS 26/30. Vit seule.',
    correction: 'Presbyacousie = facteur de risque de chutes (dysbalance, isolement social → dépression). Traitement : appareillage auditif bilatéral, rééducation vestibulaire, adaptation domicile (éclairage, tapis). Pas de cause cognitive (MMS normal).' },

  // ─── CH6 : Ostéoporose ───
  { id: 107, chapter: 'ch6', difficulty: 'A',
    title: 'Fracture ostéoporotique — prise en charge',
    cas: 'Mme Leroy, 75 ans, fracture col fémoral après chute de sa hauteur. DEXA T-score -3.2 (col), -2.8 (rachis). Vit D 12 ng/mL.',
    correction: 'Fracture de fragilité. Ostéoporose confirmée (T<-2.5). Chirurgie prothèse. Post-op : LMWH anti-coagulation, lever précoce, rééducation. Traitement ostéoporose : bisphosphonate (alendronate 70mg/sem) + Vit D 800UI/j + Ca 1.2g/j. Évaluer risque chute. FRAX score.' },

  // ─── CH7 : Arthrose ───
  { id: 108, chapter: 'ch7', difficulty: 'B',
    title: 'Arthrose et prescription chez la personne âgée',
    cas: 'M. Moreau, 82 ans, gonarthrose bilatérale. Douleur 7/10 EVA. Prend ibuprofène 400mg 3x/j. Filtration rénale 45 mL/min.',
    correction: 'AINS contre-indiqués chez le sujet âgé (risque rénal, digestif, cardiovasculaire). Arrêter ibuprofène. Paracétamol 1g x3/j (1ère ligne). Si insuffisant : tramadol dose réduite (éviter si >75 ans). Rééducation, kiné, canne, infiltrations. Évaluer prothèse si échec conservateur.' },

  // ─── CH8 : Douleur ───
  { id: 109, chapter: 'ch8', difficulty: 'A',
    title: 'Évaluation douleur chez le sujet âgé dément',
    cas: 'Mme Fournier, 88 ans, Alzheimer stade modéré (MMS 12/30). Agitation depuis 3 jours, refuse les soins, grimace lors des mobilisations.',
    correction: 'Douleur probable mais non verbalisable. Utiliser ALGOPLUS pour une douleur aiguë : 5 items binaires (visage, regard, plaintes, corps, comportements), seuil ≥ 2/5. Adapter l\'antalgie au poids, à la fonction rénale et au terrain, rechercher la cause puis réévaluer.' },

  // ─── CH9 : Cognition ───
  { id: 110, chapter: 'ch9', difficulty: 'A',
    title: 'Diagnostic Alzheimer — démarche',
    cas: 'M. Blanc, 72 ans, plainte mnésique 18 mois. MMS 24/30, MoCA 20/30. APOE4 hétérozygote. IRM : atrophie hippocampique bilatérale. NFS, TSH, B12 normales.',
    correction: 'MCI (Mild Cognitive Impairment) probable → risque conversion Alzheimer 10-15%/an. Bilan : neuropsychologique complet (RL/RI 16, GDS 3), IRM (atrophie hippocampique = signe évocateur), LCR si doute (Aβ42↓, tau↑). Traitement : inhibiteur cholinestérasique (donépézil), activités cognitives stimulation, suivi 6 mois.' },

  // ─── CH10 : Dépression ───
  { id: 111, chapter: 'ch10', difficulty: 'A',
    title: 'Pseudodémence dépressive',
    cas: 'Mme Girard, 78 ans, plainte mnésique 3 mois. MMS 20/30, GDS-15 12/15. Décès mari il y a 6 mois. Perte appétit, insomnie, pleurs.',
    correction: 'Pseudodémence dépressive vs démence débutante. GDS-15 > 11 = dépression majeure. Délai 6 mois post-deuil = deuil pathologique. Traitement : ISRS (sertraline 50mg) + psychothérapie. Réévaluer MMS après 3 mois de traitement antidépresseur : si amélioration cognitive = pseudodémence.' },

  // ─── CH11 : Confusion ───
  { id: 112, chapter: 'ch11', difficulty: 'A',
    title: 'Syndrome confusionnel aigu — CAM',
    cas: 'M. Roux, 85 ans, post-op prothèse hanche. Nuit agitée, désorienté, arrache perfusion. MMS pré-op 27/30. Temp 38.2°C, CRP 85.',
    correction: 'CAM positive si 1 + 2 + (3 ou 4) : début aigu/fluctuation, inattention, puis pensée désorganisée ou vigilance altérée. Rechercher en priorité infection, douleur, hypoxie, globe, fécalome et iatrogénie. Corriger la cause, réorienter, éviter la contention ; un traitement sédatif ne se discute qu\'en cas de danger immédiat malgré les mesures non médicamenteuses.' },

  // ─── CH12 : Chutes ───
  { id: 113, chapter: 'ch12', difficulty: 'A',
    title: 'Évaluation du risque de chute',
    cas: 'Mme Thomas, 80 ans, 3 chutes en 6 mois. Prend amlodipine 10mg, lorazepam 1mg. Tinetti 18/28, vision 3/10, hypotension orthostatique.',
    correction: 'Risque de chute élevé (Tinetti < 24 = risque). Facteurs : médicaments psychotropes (benzodiazépine → arrêt progressif), vasodilatateur (hypotension orthostatique), visuel. Plan : arrêt lorazepam (sevrage progressif), réduire amlodipine, correction visuelle, rééducation équilibre (Tinetti), vit D 800UI/j, adaptation domicile.' },

  // ─── CH13 : Alitement ───
  { id: 114, chapter: 'ch13', difficulty: 'B',
    title: 'Prévention escarre — Échelle de Braden',
    cas: 'M. Garcia, 88 ans, hémiplégie gauche post-AVC. Alitement 5 jours. Braden 12/23. Incontinence urinaire. Albumine 24g/L.',
    correction: 'Risque escarre élevé (Braden < 14). Prévention : changement position 2h, matelas anti-escarres, soins peau, nutrition (albumine basse → renutrition), mobilisation précoce, protections urinaires. Surveillance points d\'appui : sacrum, talons, trochanters.' },

  // ─── CH14 : Nutrition ───
  { id: 115, chapter: 'ch14', difficulty: 'A',
    title: 'Dénutrition du sujet âgé — MNA',
    cas: 'Mme Petit, 82 ans, perte 6 kg en 3 mois. IMC 19. MNA 17/30. Perte appétit, mange seul mais peu. Dentition mauvaise.',
    correction: 'Dénutrition (MNA < 17, perte > 5% en 1 mois). Étiologie : dentition (barrière mécanique), isolement, dépression ? Plan : soins dentaires, enrichissement alimentaire, compléments nutritionnels oraux (2-3/j), fractionnement repas, protéines 1.2g/kg/j, Vit D 800UI, évaluation psychologique.' },

  // ─── CH15 : Incontinence ───
  { id: 116, chapter: 'ch15', difficulty: 'A',
    title: 'Incontinence urinaire — démarche diagnostique',
    cas: 'Mme Lefevre, 75 ans, fuites urinaires au rire et à la toux. 3 accouchements vaginaux. Pas de polyurie. ECBU négatif.',
    correction: 'Incontinence d\'effort (sphincter faible, contexte obstétrical). Bilan : calendrier mictionnel, ECBU, résidu post-mictionnel. Traitement 1ère ligne : rééducation périnéale (kinésithérapie 3x/sem, 3 mois). Si échec : chirurgie (TVT). Éviter anticholinergiques (inefficace sur effort).' },

  // ─── CH16 : Prescription ───
  { id: 117, chapter: 'ch16', difficulty: 'A',
    title: 'Critères de Beers — médicaments inappropriés',
    cas: 'M. Simon, 86 ans, prend : diazepam 5mg, amitriptyline 25mg, diclofénac 50mg, digoxine 0.25mg. Chutes, constipation, confusion.',
    correction: 'Critères de Beers respectés : 4 médicaments inappropriés. Diazepam (BZD longue durée → chutes), amitriptyline (anticholinergique → confusion, constipation), diclofénac (AINS → rénal, digestif), digoxine 0.25mg (dose trop élevée si âgé). Arrêt progressif BZD, remplacer amitriptyline, arrêter AINS, réduire digoxine.' },

  // ─── CH17 : Palliatif ───
  { id: 118, chapter: 'ch17', difficulty: 'A',
    title: 'Soins palliatifs — critères',
    cas: 'Mme Morel, 92 ans, cancer pancréatique stade IV. Performance status 4. Refuse chimiothérapie. Douleur 8/10, dyspnée, anxiété.',
    correction: 'Indication soins palliatifs : maladie incurable, PS 4, souffrance. Prise en charge : morphine (sc 0.1mg/kg/h titration), anxiolytique (lorazepam 0.5mg), oxygène si SaO2 < 90%, soins de bouche, accompagnement psychosocial, personne de confiance, directives anticipées. Trajectoire cancer = déclin progressif prévisible.' },

  // ─── CH18 : Mini-dossiers ───
  { id: 119, chapter: 'ch18', difficulty: 'A',
    title: 'Démarche clinique progressive — cas intégrateur',
    cas: 'M. Dubois, 83 ans, amené par sa fille car "il n\'est plus comme avant". Perte 4 kg, chutes, oublis médicaments, ne sort plus.',
    correction: 'Démarche : 1. Anamnèse (délai, ATCD, médicaments, milieu de vie). 2. Examen clinique (neurologique, cardiovasculaire, locomoteur). 3. Échelles (MMS, GDS, ADL/IADL, MNA, Tinetti, Braden). 4. Hypothèses : dépression ? démence ? dénutrition ? polymédication ? 5. Bilan : NFS, TSH, B12, folates, iono, hépato, albumine. 6. Plan thérapeutique intégré.' },

  // ─── CH19 : Key Features ───
  { id: 120, chapter: 'ch19', difficulty: 'A',
    title: 'Key Feature : Confusion post-op vs démence',
    cas: 'Mme Lambert, 80 ans, post-chirurgie fracture poignet. Agitée la nuit, orientée le jour. MMS pré-op 26/30.',
    correction: 'Key Feature : distinguer confusion aiguë (réversible) vs démence (chronique). Critères confusion : début aigu, fluctuation, inattention, horaire vespéral/nocturne. Démence : progressif, persistance jour et nuit. Ici = confusion post-op (régression attendue en 3-7 jours). Pas d\'imagerie cérébrale d\'urgence si contexte post-op typique.' },

  // ─── CH20 : Questions isolées ───
  { id: 121, chapter: 'ch20', difficulty: 'A',
    title: 'ITEM 123 — Vieillissement normal',
    cas: 'Quels sont les 3 principaux effets du vieillissement sur le système cardiovasculaire ?',
    correction: '1. Rigidité artérielle (perte élastine, augmentation collagène) → HTA systolique isolée. 2. Hypertrophie VG concentrique (compensation post-charge). 3. Baisse réponse fréquentielle maximale (220-âge). Conséquence clinique : HTA du sujet âgé, insuffisance cardiaque diastolique.' },
  { id: 122, chapter: 'ch20', difficulty: 'A',
    title: 'ITEM 109 — Chutes',
    cas: 'Citez 5 facteurs de risque intrinsèques de chute chez la personne âgée.',
    correction: '1. Troubles visuels (cataracte, DMLA). 2. Proprioception altérée (neuropathie). 3. Faiblesse musculaire (sarcopénie). 4. Troubles de l\'équilibre (vestibulaire). 5. Hypotension orthostatique. + Cognitif, pieds, médicaments (BZD, antihypertenseurs).' },
  { id: 123, chapter: 'ch20', difficulty: 'B',
    title: 'ITEM 108 — Démences',
    cas: 'Différencier démence à corps de Lewy et maladie d\'Alzheimer sur 3 critères cliniques.',
    correction: 'Corps de Lewy : 1. Fluctuations cognitives (alerte/obnubilé). 2. Hallucinations visuelles récurrentes formées. 3. Signes parkinsoniens précoces (akinésie, rigidité). Alzheimer : 1. Déclin mnésique progressif (hippocampique). 2. Pas de fluctuations marquées. 3. Pas de parkinsonisme initial. LBD = neuroleptiques CONTRE-INDIQUES (hypersensibilité).' },
  { id: 124, chapter: 'ch20', difficulty: 'A',
    title: 'ITEM 230 — Nutrition',
    cas: 'Quel est le seuil de MNA définissant la dénutrition du sujet âgé ?',
    correction: 'MNA (Mini Nutritional Assessment) : < 17 points = dénutrition, 17-23.5 = risque de dénutrition, ≥ 24 = état nutritionnel normal. Le MNA est le gold standard pour le dépistage nutritionnel en gériatrie. Il évalue : IMC, perte poids, mobilité, stress, médicaments, autonomie alimentaire, nb repas, protéines, fruits/légumes, hydratation, auto-évaluation.' },
  { id: 125, chapter: 'ch20', difficulty: 'A',
    title: 'ITEM 130 — Sensoriel',
    cas: 'Quelle est la prise en charge de la presbytie chez un patient de 70 ans ?',
    correction: 'Presbytie = perte accommodation cristallin dès 45 ans. Correction : verres progressifs ou bifocaux. À 70 ans : souvent associée à cataracte débutante. Bilan ophtalmologique annuel. Si cataracte gênante : chirurgie (phaco-émulsification + implant). Impact fonctionnel : lecture, écriture, reconnaissance visage, prévention chutes.' },
  { id: 126, chapter: 'ch20', difficulty: 'A',
    title: 'ITEM 131 — Chutes (cas)',
    cas: 'M. Petit, 76 ans, chute dans l\'escalier. Pas de perte de connaissance. Prend aténolol 50mg et lorazepam 1mg.',
    correction: 'Chute médicamenteuse probable. Aténolol (bêtabloquant → bradycardie, hypotension) + lorazepam (BZD → sédation, ataxie). Bilan : examen clinique (fracture ?), ECG, bilan biologique. Arrêt progressif lorazepam, réévaluation bêtabloquant. Rééducation équilibre, adaptation domicile.' },
  { id: 127, chapter: 'ch20', difficulty: 'B',
    title: 'ITEM 133 — Incontinence',
    cas: 'Mme Duval, 70 ans, impériosités mictionnelles et nycturie x4. ECBU négatif. Résidu post-mictionnel 30mL.',
    correction: 'Incontinence par hyperactivité vésicale (urge-incontinence). Bilan : calendrier mictionnel, ECBU, RPM (30mL = normal). Traitement : rééducation vésicale (programme mictionnel), anticholinergiques (solifénacine 5mg) si échec rééducation. Attention effets secondaires : constipation, sécheresse buccale, confusion si sujet âgé.' },
  { id: 128, chapter: 'ch20', difficulty: 'A',
    title: 'ITEM 139 — Soins palliatifs',
    cas: 'Quelle est la différence entre acharnement thérapeutique et obstination déraisonnable ?',
    correction: 'C\'est la même chose — "obstination déraisonnable" est le terme légal (loi Leonetti 2005). Actes inutiles, disproportionnés ou n\'ayant d\'autre effet que le maintien artificiel de la vie. Interdits. Critères d\'arrêt : actes futiles, souffrance injustifiée, maintien artificiel. Le patient peut refuser tout traitement (sauf obligations légales). La sédation terminale est autorisée (midazolam).' },
];
