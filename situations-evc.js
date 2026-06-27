// ═══════════════════════════════════════════════════════════════
//  Situations EVC — Mises en situation réalistes
//  Format examen EVC avec questions-guidées
// ═══════════════════════════════════════════════════════════════

const SITUATIONS_EVC = [
  {
    id: 'evc-1', chapter: 'ch9', difficulty: 'A',
    title: 'Troubles cognitifs progressifs — bilan initial',
    situation: 'M. Lambert, 76 ans, est adressé par son médecin traitant pour troubles de la mémoire évoluant depuis 18 mois. Sa femme rapporte qu\'il oublie les rendez-vous, répète les mêmes questions et a perdu 3 kg. Il est anxieux et dort mal. ATCD : HTA, diabète type 2. Traitement : amlodipine 5mg, metformine 1000mg, lorazepam 1mg.',
    questions: [
      { q: 'Quels sont les 3 diagnostics différentiels principaux ?', a: '1. Maladie d\'Alzheimer (déclin mnésique progressif, 70% des démences). 2. Démence vasculaire (ATCD HTA/DM2, déclin en marches). 3. Dépression (pseudodémence : plainte mnésique, anxiété, insomnie, perte poids).' },
      { q: 'Quels examens complémentaires demandez-vous en première intention ?', a: 'NFS, TSH, B12, folates, iono, créatinine, glycémie, HbA1c, calcémie, albumine. MMS, GDS-15 (dépression). IRM cérébrale (atrophie hippocampique, leucoaraïose). Bilan médicamenteux (lorazepam = cause iatrogénique de troubles cognitifs).' },
      { q: 'Quel traitement modifiez-vous en priorité ?', a: 'Sevrage progressif du lorazepam (BZD longue durée = confusion iatrogénique, chutes, dépendance). Sevrage sur 4-8 semaines avec substitution par diazepam si nécessaire.' }
    ]
  },
  {
    id: 'evc-2', chapter: 'ch12', difficulty: 'A',
    title: 'Chutes récidivantes — évaluation et prévention',
    situation: 'Mme Petit, 82 ans, est aux urgences pour sa 3ème chute en 2 mois. Cette fois, elle est tombée dans l\'escalier en descendant à la cave. Pas de perte de connaissance. Fracture du poignet gauche. ATCD : HTA, arthrose genou, dépression. Traitement : losartan 50mg, amitriptyline 25mg, ibuprofène 400mg.',
    questions: [
      { q: 'Quels sont les facteurs de risque de chute identifiés ?', a: 'Intrinsèques : âge (82), arthrose genou (douleur, raideur), troubles de l\'équilibre probables. Extrinsèques : amitriptyline (anticholinergique → sédation, hypotension orthostatique), ibuprofène (AINS → vertiges, insuffisance rénale), escalier (environnement).' },
      { q: 'Quelle évaluation complémentaire proposez-vous ?', a: 'Tinetti (marche + équilibre), Timed Up and Go, bilan orthostatique (PA couché/debout), évaluation visuelle, examen neurologique (proprioception, réflexes), évaluation podologique, bilan de l\'habitat.' },
      { q: 'Quelles mesures thérapeutiques mettez-vous en place ?', a: '1. Arrêt amitriptyline (remplacer par ISRS si dépression). 2. Arrêt ibuprofène (AINS contre-indiqué). 3. Rééducation équilibre (kiné 3x/sem). 4. Correction visuelle. 5. Vit D 800UI/j. 6. Adaptation domicile (éclairage, barres d\'appui, tapis antidérapants). 7. Évaluation cognitive (chute = signe de démence ?).' }
    ]
  },
  {
    id: 'evc-3', chapter: 'ch14', difficulty: 'A',
    title: 'Dénutrition sévère — prise en charge',
    situation: 'Mme Garcia, 85 ans, est hospitalisée pour asthénie et amaigrissement. Veuve depuis 6 mois, elle mange seule, peu, et a perdu 8 kg en 3 mois. IMC 17. Albumine 22 g/L. MNA 14/30. MMS 24/30. GDS-15 10/15. Dentition très dégradée.',
    questions: [
      { q: 'Le diagnostic de dénutrition est-il confirmé ? Selon quels critères ?', a: 'Oui. Critères : perte > 5% en 1 mois ou > 10% en 6 mois (8 kg en 3 mois = ~10%). IMC < 18.5 (17). Albumine < 35 g/L (22). MNA < 17 (14 = dénutrition). Score NRS 2002 probablement ≥ 3.' },
      { q: 'Quelles sont les étiologies probables ?', a: '1. Deuil (isolement social, perte d\'appétit). 2. Dentition (barrière mécanique). 3. Dépression probable (GDS-15 10/15). 4. Isolement (mange seule). 5. Carence B12/folates à vérifier.' },
      { q: 'Quel plan de prise en charge nutritionnelle ?', a: '1. Soins dentaires urgents (prothèses, soins). 2. Enrichissement alimentaire (crème, beurre, fromage). 3. Compléments nutritionnels oraux x2-3/j (Delical, Fresubin). 4. Si échec : nutrition entérale par sonde (SNG/PEG). 5. Vit D 800UI, B12 1000µg si carence. 6. Traitement antidépresseur. 7. Aide repas à domicile. 8. Protéines 1.2-1.5 g/kg/j.' }
    ]
  },
  {
    id: 'evc-4', chapter: 'ch16', difficulty: 'A',
    title: 'Iatrogénie médicamenteuse — cascade',
    situation: 'M. Dubois, 88 ans, consulte pour chutes, constipation et confusion. Traitement : oxazepam 10mg, amitriptyline 50mg, codéine 30mg, amlodipine 10mg, gliclazide 80mg. Il prend aussi un mélangeur d\'eau minérale riche en calcium.',
    questions: [
      { q: 'Identifiez les médicaments inappropriés (critères de Beers).', a: '1. Oxazepam (BZD > 65 ans → chutes, confusion, dépendance). 2. Amitriptyline (anticholinergique → confusion, constipation, rétention urinaire, chute). 3. Codéine (opioïde → constipation, confusion, chute). Tous 3 = critères de Beers.' },
      { q: 'Quelle est la cascade iatrogénique ?', a: 'Oxazepam → chute → douleur → codéine → constipation → confusion → diagnostic erroné de démence. Amitriptyline → constipation → codéine (aggrave). Amitriptyline → hypotension orthostatique → chute (amlodipine aggrave).' },
      { q: 'Quelle est votre stratégie de déprescription ?', a: '1. Arrêt oxazepam (sevrage progressif 2-4 semaines). 2. Arrêt amitriptyline (demi-dose 1 semaine puis arrêt). 3. Arrêt codéine. 4. Réduire amlodipine 10→5mg (hypotension orthostatique). 5. Surveillance glycémique (arrêter gliclazide si HbA1c < 8%). 6. Réévaluation à 1 mois.' }
    ]
  },
  {
    id: 'evc-5', chapter: 'ch17', difficulty: 'A',
    title: 'Accompagnement de fin de vie',
    situation: 'Mme Morel, 91 ans, est en EHPAD. Cancer du côlon stade IV avec métastases hépatiques. Performance status 4. Elle dort beaucoup, s\'alimente peu, est confuse le soir. Sa fille demande "qu\'on fasse tout pour la maintenir en vie". Le médecin traitant évoque les soins palliatifs.',
    questions: [
      { q: 'Quels sont les critères d\'indication des soins palliatifs ici ?', a: '1. Maladie incurable stade IV. 2. Performance status 4 (alité > 50% du temps). 3. Symptômes réfractaires (douleur, confusion, anorexie). 4. Fin de vie probable dans les jours/semaines. La loi Leonetti interdit l\'obstination déraisonnable.' },
      { q: 'Comment gérez-vous le conflit avec la fille ?', a: '1. Entretien avec la fille, le médecin traitant, l\'équipe soignante. 2. Expliquer que "tout faire" = souffrance inutile pour la patiente. 3. Évoquer les directives anticipées de la patiente si elles existent. 4. Proposer un projet de soins palliatifs centré sur le confort. 5. Nommer une personne de confiance. 6. Si conflit persistant : recours au collège de médecins.' },
      { q: 'Quelle prise en charge symptomatique ?', a: '1. Douleur : morphine SC (0.1mg/kg/h) ou fentanyl transdermique. 2. Agitation/confusion : midazolam SC 0.5-1mg/h. 3. Nausées : halopéridol 0.5mg ou métoclopramide. 4. Soins de bouche toutes les 2h. 5. Hydratation cutanée (pas de perfusion systématique). 6. Position anti-décubitus. 7. Accompagnement psychosocial (fille, aumônerie).' }
    ]
  },
  {
    id: 'evc-6', chapter: 'ch11', difficulty: 'A',
    title: 'Confusion post-opératoire',
    situation: 'M. Garcia, 85 ans, est opéré d\'une prothèse de hanche pour fracture cervicale. J1 post-op : agité la nuit, arrache sa perfusion, appelle sa femme (décédée). MMS pré-op : 26/30. Température 38.1°C. CRP 95. Il prend du tramadol 100mg/j.',
    questions: [
      { q: 'Confirmez le diagnostic avec la CAM.', a: 'CAM+ : (1) Début aigu post-op ✓ (horizon temporel J1). (2) Inattention ✓ (ne suit pas les consignes). (3) Fluctuation ✓ (agité la nuit, calme le jour). (4) Niveau de conscience altéré ✓ (confusion). CAM+ = syndrome confusionnel aigu confirmé.' },
      { q: 'Quelles sont les causes probables ?', a: '1. Post-opératoire (anesthésie, douleur, stress chirurgical). 2. Infection (T° 38.1, CRP 95 → prothèse infectée ? ITU ?). 3. Tramadol (opioïde → confusion chez sujet âgé). 4. Deuil non résolu (appelle sa femme décédée). 5. Hypoxie post-op ?' },
      { q: 'Quelle prise en charge ?', a: '1. Correction cause : bilan infectieux complet (ECBU, hémocultures, Rx thoracique). 2. Réduire/arrêter tramadol (paracétamol IV 4g/j). 3. Si agitation sévère : halopéridol 0.5mg PO/IM. 4. Pas de contention (aggrave la confusion). 5. Réorientation (horloge, calendrier, lumière naturelle). 6. Présence familiale. 7. Surveillance neurologique H4.' }
    ]
  },
  {
    id: 'evc-7', chapter: 'ch15', difficulty: 'B',
    title: 'Incontinence urinaire — démarche diagnostique',
    situation: 'Mme Duval, 72 ans, consulte pour fuites urinaires depuis 6 mois. Elle fuit quand elle tousse, rit ou porte des charges. 3 accouchements vaginaux. Polyurie non. Pas de dysurie. ECBU négatif.',
    questions: [
      { q: 'Quel type d\'incontinence ?', a: 'Incontinence d\'effort (fuites à l\'effort : toux, rire, port de charges). Contexte obstétrical (3 accouchements vaginaux = lésions du plancher pelvien). Pas de signe d\'hyperactivité vésicale (pas d\'impériosité, pas de polyurie).' },
      { q: 'Quel bilan demandez-vous ?', a: '1. Calendrier mictionnel (fréquence, volume). 2. ECBU (éliminer infection). 3. Résidu post-mictionnel (échographie vésicale). 4. Examen gynécologique (prolapsus ?). 5. Pad test (quantification des fuites). 6. Pas de cystomanométrie d\'emblée (si échec traitement).' },
      { q: 'Quel traitement première ligne ?', a: 'Rééducation périnéale par kinésithérapeute spécialisé : biofeedback, électrostimulation, exercices de Kegel. 3 séances/semaine pendant 3 mois. Objectif : contraction volontaire du plancher pelvien. Si échec après 3 mois : chirurgie (TVT — bandelette sous-urétrale). Éviter anticholinergiques (inefficace sur incontinence d\'effort).' }
    ]
  },
  {
    id: 'evc-8', chapter: 'ch8', difficulty: 'A',
    title: 'Douleur chez le patient dément',
    situation: 'Mme Fournier, 88 ans, Alzheimer stade modéré (MMS 12/30), est agitée depuis 3 jours. Elle crie lors des soins, se raidit quand on la mobilise, a le visage crispé. Elle ne peut pas verbaliser sa douleur.',
    questions: [
      { q: 'Comment évaluez-vous la douleur ?', a: 'Échelle ECPA (Échelle Comportementale de la Douleur chez la Personne Âgée non communicante) : 5 items cotés 0-2. 1. Respiration (normale/accélérée/rythme irrégulier). 2. Vocalisation (normale/gémissements/pleurs). 3. Expression facale (sourire/grimace/visage crispé). 4. Corps (relaxé/tendu/raidité). 5. Consolabilité (pas consolable/consolable). Score ≥ 4/10 = douleur probable.' },
      { q: 'Quelles sont les causes possibles ?', a: '1. Escarre (points d\'appui). 2. Fracture non diagnostiquée (chute ?). 3. Constipation/impaction fécale. 4. Infection (ITU, pneumopathie). 5. Rétention urinaire. 6. Douleur musculo-squelettique (arthrose). 7. Douleur neuropathique.' },
      { q: 'Quel traitement antalgique ?', a: '1. Paracétamol 1g x3/j systématique (première ligne). 2. Si insuffisant : tramadol 50mg 1-2x/j (dose réduite). 3. Éviter morphine d\'emblée (effets secondaires confusion). 4. Rechercher et traiter la cause. 5. Réévaluer ECPA toutes les 24h.' }
    ]
  }
];
