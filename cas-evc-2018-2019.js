// Cas EVC 2018–2019 — Dix scénarios d'examen (ch1, ch4, ch9, ch14, ch16)
const CAS_EVC_2018_2019 = [
  {
    id: 'evc18-1',
    year: 2018,
    chapter: 'ch1',
    difficulty: 'A',
    title: 'Vieillissement physiologique et fragilité',
    situation: 'Mme Durand, 78 ans, consulte pour « fatigue » et ralentissement depuis 1 an. Autonome (ADL 5/6, seule la toilette est difficile). IMC 22. PA 135/80. Pas de pathologie chronique majeure. Marche 400 m sans aide. Perte de 2 kg en 6 mois. Vitesse de marche mesurée : 0,7 m/s. Pas de dénutrition (albumine 38 g/L). MMS 28/30.',
    questions: [
      {
        q: 'Distinguez vieillissement physiologique et syndrome de fragilité chez cette patiente.',
        a: 'Physiologique : ralentissement modéré, autonomie conservée, MMS normal, marche encore > 0,8 m/s limite (ici 0,7 = limite basse). Fragilité (critères Fried) : perte de poids involontaire ✓ (2 kg), faiblesse non mesurée ici, épuisement subjectif ✓, activité réduite ?, lenteur ✓ (vitesse < 0,8). Probable pré-fragilité ou fragilité débutante (≥ 3 critères si épuisement + lenteur + perte poids). Pas encore dépendance ni sarcopénie sévère.',
        points: 5
      },
      {
        q: 'Quels examens et scores complémentaires proposez-vous ?',
        a: 'Force de préhension (dynamomètre, seuil < 16 kg femme). MNA court, albumine déjà normale. Tinetti ou Timed Up and Go. Bilan thyroïdien (TSH), NFS, ferritine, B12. Évaluation nutritionnelle détaillée. Dépistage dépression (GDS-15). Pas de bilan « anti-âge » inutile.',
        points: 3
      },
      {
        q: 'Quelle prise en charge non médicamenteuse privilégiez-vous ?',
        a: 'Activité physique adaptée (marche + renforcement musculaire 2–3×/sem, programme type OSSP ou kiné). Apports protéiques 1–1,2 g/kg/j. Vitamine D 800 UI/j si carence ou faible ensoleillement. Prévention chutes (bilan domicile). Suivi annuel fragilité. Pas de prescription de médicaments « toniques ».',
        points: 4
      }
    ],
    juryTips: 'Le jury attend la distinction vieillissement normal / pré-fragilité / fragilité avec les critères de Fried. Ne pas médicaliser une fatigue isolée sans retentissement.'
  },
  {
    id: 'evc18-2',
    year: 2018,
    chapter: 'ch4',
    difficulty: 'A',
    title: 'Personne de confiance et refus de soins',
    situation: 'M. Roche, 86 ans, démence Alzheimer stade modéré (MMS 18/30), vit en EHPAD. Refuse le traitement d\'une pneumonie (antibiothérapie, oxygène). Personne de confiance : son fils, désigné sur la carte Vitale. Fille opposée au fils, demande « tout faire ». Directives anticipées absentes. Patient conscient, exprime clairement « laissez-moi tranquille ».',
    questions: [
      {
        q: 'Qui décide et sur quelle base légale (France) ?',
        a: 'Patient encore capable d\'exprimer sa volonté → son refus prime (autonomie du patient, code de déontologie). Personne de confiance consultée pour comprendre volontés antérieures, pas pour imposer les soins si le patient est lucide sur le refus. Pas de décision familiale à la majorité. Si incapacité totale : personne de confiance + équipe, refus contraignant si cohérent avec DA ou volontés connues. Loi Claeys-Leonetti : refus de traitement injustifié = poursuivre dialogue, soins de confort obligatoires.',
        points: 5
      },
      {
        q: 'Comment gérez-vous le conflit fils / fille ?',
        a: 'Entretien séparé puis commun si possible. Rappeler rôle de la personne de confiance (faire connaître la volonté du patient, pas décider à sa place). Médiation soignante. Documenter refus exprimé par le patient. Proposer soins palliatifs de la pneumonie (antipyrétiques, morphine si dyspnée, hydratation subcutanée si acceptée). Pas de contention pour traiter.',
        points: 4
      },
      {
        q: 'Quels soins maintenez-vous malgré le refus d\'antibiothérapie ?',
        a: 'Soins de confort : analgesie, traitement dyspnée, bouche humide, repositionnement, présence. Information transparente sur évolution probable. Réévaluation si changement d\'avis du patient. Signalement à l\'équipe éthique si pression familiale excessive. Pas de sédation pour imposer un geste invasif.',
        points: 3
      }
    ],
    juryTips: 'Refus lucide du patient > volonté de la famille. Citer personne de confiance, DA, soins de confort. Le conflit fratrie est un classique EVC éthique.'
  },
  {
    id: 'evc18-3',
    year: 2018,
    chapter: 'ch9',
    difficulty: 'A',
    title: 'Trouble cognitif léger et conduite diagnostique',
    situation: 'M. Bernard, 72 ans, cadre retraité, signale des oublis depuis 18 mois (rendez-vous, noms). Entourage inquiet. MMS 26/30 (erreurs calcul, rappel). MoCA non fait. GDS-15 4/15. Pas de trouble de l\'humeur majeur. ATCD : HTA équilibrée. Traitement : ramipril 5 mg. IRM demandée : atrophie hippocampique bilatérale modérée, Fazekas 1. TSH, B12, folates normaux.',
    questions: [
      {
        q: 'Diagnostic syndromique et étiologique le plus probable.',
        a: 'Syndrome : trouble cognitif léger (TCL) ou démence légère selon retentissement ADL/IADL (à préciser). MMS 26 = altération légère. Étiologie : maladie d\'Alzheimer probable (âge, évolution progressive 18 mois, atrophie hippocampique, pas de cause réversible). Écarter dépression majeure (GDS bas). Hypertension = facteur de risque vasculaire associé.',
        points: 4
      },
      {
        q: 'Quels tests complémentaires et pourquoi ?',
        a: 'MoCA ou neuropsychologie complète (mémoire épisodique, praxies, attention). Évaluation IADL/ADL, conduite automobile. Dosage Aβ/tau dans LCR si essai thérapeutique ou recherche ; pas obligatoire au quotidien. Pas de répétition IRM immédiate. Dépistage apnée du sommeil si ronflement/somnolence.',
        points: 3
      },
      {
        q: 'Annonce et plan de suivi initial.',
        a: 'Annonce progressive avec conjoint, documents (France Alzheimer). Traitement : inhibiteur cholinestérase si démence légère confirmée (donépézil faible dose), contrôle PA. Activité physique et cognitive. Anticipation légale (mandat protection future, personne de confiance). Suivi 6 mois : cognition, comportement, autonomie.',
        points: 4
      }
    ],
    juryTips: 'TCL vs démence = retentissement fonctionnel. IRM hippocampe + MMS insuffisants seuls : mentionner neuropsychologie et exclusion dépression.'
  },
  {
    id: 'evc18-4',
    year: 2018,
    chapter: 'ch14',
    difficulty: 'A',
    title: 'Dénutrition protéino-énergétique en hospitalisation',
    situation: 'Mme Faure, 81 ans, hospitalisée 10 jours pour décompensation cardiaque. Perte 4 kg depuis l\'entrée. IMC 19. Albumine 28 g/L. Apports estimés < 1200 kcal/j (refus partiel des plateaux). MNA 17/30. Oedèmes des membres inférieurs en amélioration. DFG 48 mL/min. Démence légère (MMS 21). Aide pour repas nécessaire.',
    questions: [
      {
        q: 'Diagnostiquez et stadifiez le syndrome nutritionnel.',
        a: 'Dénutrition protéino-énergétique confirmée : perte de poids récente, albumine basse, MNA < 17,5 (ici 17), apports insuffisants. Forme aiguë hospitalière aggravant une probable dénutrition chronique (IMC limite). Facteurs : cardiaque (anorexie), âge, cognition, aide repas insuffisante. Pas de refeeding syndrome immédiat si pas de grand malnutri anorexique prolongé, mais prudence.',
        points: 4
      },
      {
        q: 'Plan nutritionnel à l\'hôpital puis à la sortie.',
        a: 'Hospitalier : enrichissement (PPA), fractionnement 5–6 repas, présence aide à la prise, CNO hyperprotéinées 200–400 kcal entre repas si acceptées. Objectif 30 kcal/kg/j, protéines 1,2 g/kg/j. Sortie : évaluation aide domicile repas, livraison, CNO si persistance. Réévaluation MNA à 1 mois. Traiter cause cardiaque pour améliorer appétit.',
        points: 4
      },
      {
        q: 'Indications et limites de la nutrition artificielle chez elle.',
        a: 'SNG si dysphagie ou apports impossibles à l\'oral malgré aides — pas indiquée si seule anorexie modérée et déglutition conservée. PEG seulement si dysphagie prolongée et projet de vie compatible (démence : décision collégiale, bénéfice confort). IRC modérée : adapter protéines et volume. Hydratation orale prioritaire.',
        points: 3
      }
    ],
    juryTips: 'MNA + albumine + apports = triade EVC nutrition. Toujours proposer aides orales avant sonde. Démence = nuance éthique sur PEG.'
  },
  {
    id: 'evc18-5',
    year: 2018,
    chapter: 'ch16',
    difficulty: 'A',
    title: 'Adaptation posologique et fonction rénale',
    situation: 'M. Girard, 85 ans, polymédiqué : metformine 1000 mg ×2, gliclazide 60 mg, ramipril 10 mg, spironolactone 25 mg, apixaban 5 mg ×2, furosémide 40 mg, allopurinol 200 mg. DFG 32 mL/min (CKD-EPI). K+ 5,6 mmol/L. HbA1c 7,8 %. Poids 62 kg. Consultation de bilan annuel.',
    questions: [
      {
        q: 'Quels médicaments sont mal adaptés au DFG et à l\'hyperkaliémie ?',
        a: 'Metformine : contre-indiquée si DFG < 30 (ici limite 32 → réduire dose ou arrêter selon guidelines, risque acidose). Gliclazide : risque hypoglycémie prolongée, préférer réduction dose. Spironolactone + ramipril + K+ 5,6 = triple risque hyperkaliémie → arrêt ou forte réduction spironolactone, surveillance K+. Apixaban 5 mg : vérifier critères réduction (âge ≥ 80 + poids ≤ 60 → 2,5 mg ×2 possible). Allopurinol : dose adaptée à 100 mg si DFG < 30.',
        points: 5
      },
      {
        q: 'Proposez une révision thérapeutique concrète.',
        a: 'Arrêt metformine, bascule insuline basale faible dose ou sitagliptine si DFG permet. Arrêt spironolactone, contrôle K+ à 48 h. Apixaban 2,5 mg ×2 si critères. Réduire gliclazide 30 mg. Maintenir ramipril si K+ normalisé. Allopurinol 100 mg. Réévaluer furosémide (risque déshydratation). Bilan médicamenteux documenté.',
        points: 4
      },
      {
        q: 'Quels paramètres surveiller après modification ?',
        a: 'K+ et créatinine à J2–J7 puis mensuel 1 mois. Glycémie capillaire ×3/j 1 semaine. PA orthostatique. Poids. Interaction apixaban si nouveaux médicaments. Éviter AINS et compléments K+. Pharmacien d\'officine informé pour pilulier.',
        points: 3
      }
    ],
    juryTips: 'DFG + K+ = pivot prescription gériatrique. Citer apixaban dose réduite et metformine seuil 30. Le jury veut une liste d\'actions, pas seulement des principes.'
  },
  {
    id: 'evc19-1',
    year: 2019,
    chapter: 'ch1',
    difficulty: 'B',
    title: 'Sarcopénie et perte d\'autonomie progressive',
    situation: 'M. Lambert, 80 ans, 3 chutes en 6 mois sans fracture. Canne permanente. Difficulté lever de chaise (test chair stand lent). IMC 24. Albumine 36 g/L. DFG 70. Vitamine D 12 ng/mL. Testosterone normale. Pas de polyarthrite. Traitement : vitamine D jamais prescrite, aténolol 50 mg.',
    questions: [
      {
        q: 'Comment documentez la sarcopénie ?',
        a: 'Clinique EWGSOP2 : faible force (préhension ou chair stand) + faible masse musculaire (DEXA ou impédance si dispo) + performance basse (vitesse marche ou SPPB). Ici chutes + lever chaise = forte suspicion même sans DEXA. Carence vitamine D contributive. Écarter neuropathie, Parkinson, hypothyroïdie (TSH).',
        points: 4
      },
      {
        q: 'Plan thérapeutique global (sans « hormone anti-âge »).',
        a: 'Vitamine D charge puis entretien 800–1000 UI/j, cible > 30 ng/mL. Protéines 1,2–1,5 g/kg/j réparties. Rééducation résistance supervisée 2–3×/sem. Révision aténolol (bradycardie/fatigue ?). Dépistage causes secondaires. Pas de testostérone si taux normaux. Prévention chutes (Tinetti, adaptation domicile).',
        points: 4
      },
      {
        q: 'Quel objectif fonctionnel à 3 mois ?',
        a: 'Amélioration chair stand, vitesse marche > 0,8 m/s, réduction chutes. Pas de promesse d\'indépendance canne si comorbidités. Indicateurs : SPPB, activité quotidienne. Réévaluation nutrition et observance vitamine D.',
        points: 3
      }
    ],
    juryTips: 'Sarcopénie = force + masse + performance. Vitamine D carencée est le levier simple souvent oublié. Distinguer sarcopénie et simple déconditionnement post-hospitalisation.'
  },
  {
    id: 'evc19-2',
    year: 2019,
    chapter: 'ch4',
    difficulty: 'A',
    title: 'Sédation profonde et continuée en fin de vie',
    situation: 'Mme Colin, 91 ans, cancer bronchique métastatique, refus de nutrition artificielle et de chimiothérapie documentés. Dyspnée majeure, agitation réfractaire aux morphiniques titrés. Équipe et famille demandent « une sédation pour qu\'elle ne souffre plus ». Survie estimée quelques jours.',
    questions: [
      {
        q: 'Cadre légal de la sédation profonde et continue jusqu\'au décès (Claeys-Leonetti).',
        a: 'Conditions : maladie grave incurable, pronostic vital engagé à court terme, souffrance réfractaire aux traitements adaptés. Procédure collégiale, information patient ou personne de confiance. Sédation = dernier recours après optimisation antalgiques/anxiolytiques. Arrêt traitements disproportionnés possible. Nutrition/hydratation : pas obligatoires artificiellement si refus ou inutiles.',
        points: 5
      },
      {
        q: 'Comment distinguez-vous sédation proportionnée et euthanasie ?',
        a: 'Intention : soulager souffrance réfractaire, pas provoquer la mort. Moyens : midazolam ou équivalent titration, arrêt nutrition artificielle si refus ≠ injection létale. Mort attendue par maladie. Traçabilité dossier, 2e avis si possible. Euthanasie = acte illégal en France.',
        points: 4
      },
      {
        q: 'Conduite pratique immédiate avant sédation.',
        a: 'Réévaluer dyspnée : morphine SC titration, oxygène si confort, position demi-assise, anxiolyse faible dose si angoisse. Antipsychotique si délire réfractaire (halopéridol faible dose). Si échec documenté → proposition sédation, consentement famille/patient, protocole midazolam perfusion, soins bouche/peau, présence famille.',
        points: 3
      }
    ],
    juryTips: 'Maîtriser les 4 conditions Claeys-Leonetti et la souffrance réfractaire. Le jury sanctionne la confusion avec euthanasie ou la sédation « pour faire dormir » sans réfractarité.'
  },
  {
    id: 'evc19-3',
    year: 2019,
    chapter: 'ch9',
    difficulty: 'A',
    title: 'Confusion aiguë vs décompensation démentielle',
    situation: 'Mme Arnaud, 84 ans, Alzheimer connu (MMS habituel 20/30). Admission EHPAD il y a 3 ans. Depuis 48 h : somnolence diurne, hallucinations visuelles, agitation nocturne. T° 37,8 °C. Na+ 152 mmol/L. Pas de chute. Traitement : donépézil 10 mg, quétiapine 25 mg le soir, paracétamol.',
    questions: [
      {
        q: 'CAM et diagnostics différentiels prioritaires.',
        a: 'CAM probablement positif (aigu, fluctuation, inattention, altération conscience). Causes : hypernatrémie (déshydratation), infection intercurrente (surinfection urine, pneumonie), quétiapine (sédation, confusion), douleur non traitée. Décompensation démence seule n\'explique pas hypernatrémie ni fièvre. Delirium sur fond démentiel = diagnostic principal.',
        points: 4
      },
      {
        q: 'Bilan et traitement étiologique dans les 24 h.',
        a: 'ECBU, NFS, CRP, gaz du sang si sévère, hydratation orale/IV selon tolérance et cardiaque. Corriger Na+ lentement (< 10 mmol/24 h). Rechercher foyer infectieux. Réduire/arrêter quétiapine si possible (antipsychotique = facteur delirium). Pas de contention. Environnement calme, lunettes/appareils auditifs.',
        points: 4
      },
      {
        q: 'Gestion de l\'agitation si persistance après traitement cause.',
        a: 'Halopéridol 0,5 mg PO/IM dose unique, répéter prudemment. Éviter benzodiazépines. Présence soignant, mobilisation douce. Retour au niveau cognitif habituel attendu si cause traitée ; sinon évaluer progression démence.',
        points: 3
      }
    ],
    juryTips: 'Toujours chercher cause réversible sur démence (infection, ionogramme, iatrogénie). CAM + hypernatrémie = classique. Arrêt antipsychotique au long cours si possible.'
  },
  {
    id: 'evc19-4',
    year: 2019,
    chapter: 'ch14',
    difficulty: 'A',
    title: 'Dysphagie et risque de fausse route en EHPAD',
    situation: 'M. Mercier, 88 ans, Parkinson avancé, résident EHPAD. Toux après chaque repas liquides, voix mouillée. Perte 5 kg en 4 mois. MNA 14/30. MMS 15. Pas de pneumonie actuelle. Texture actuelle : mixée mal homogénéisée. Médicaments écrasés dans compote.',
    questions: [
      {
        q: 'Évaluation de la dysphagie oropharyngée.',
        a: 'Signes cliniques : toux post-prandiale, voix mouillée = pénétration. Demander examen déglutition (orthophoniste) : test volume, textures (nectar, miel, pudding IDDSI). Vidéofluoroscopie ou FEES si doute ou avant décision sonde. Évaluer salive, fatigue fin repas, posture. Parkinson : dysphagie fréquente phase pharyngée.',
        points: 4
      },
      {
        q: 'Adaptations alimentaires et médicamenteuses.',
        a: 'Textures IDDSI 4 (purée homogène) ou 3 selon avis ortho ; liquides épaissis niveau miel. Repas fractionnés, position 90°, temps prolongé. Médicaments : formes orodispersibles, liquides épaissis, ou changement voie (patch, SC) si fausse route répétée. Pas d\'écrasement dans compote sans vérifier galénique.',
        points: 4
      },
      {
        q: 'Quand discuter nutrition entérale ? Projet de soins.',
        a: 'Si dysphagie sévère et apports oraux insuffisants malgré textures → SNG temporaire ou PEG selon projet. Parkinson terminal : PEG rarement indiquée si qualité de vie limitée ; privilégier plaisir oral sécurisé et CNO si acceptées. Réunion famille, directives, confort. Prévention pneumonie aspiration (soins bucco-dentaires).',
        points: 3
      }
    ],
    juryTips: 'IDDSI / orthophoniste = mots attendus. Médicaments écrasés = piège iatrogène. Nuancer PEG en Parkinson avancé.'
  },
  {
    id: 'evc19-5',
    year: 2019,
    chapter: 'ch16',
    difficulty: 'A',
    title: 'Déprescription des benzodiazépines au long cours',
    situation: 'Mme Vasseur, 79 ans, insomnie chronique. Lorazépam 2 mg et zolpidem 10 mg chaque soir depuis 12 ans. Chutes ×2 le dernier mois. MMS 27/30. GDS-15 à 6/15, à explorer. Elle demande le renouvellement de « ses somnifères » au médecin traitant. DFG 58 mL/min.',
    questions: [
      {
        q: 'Quels sont chez elle les risques des hypnotiques et des benzodiazépines au long cours ?',
        a: 'Somnolence et baisse de vigilance, troubles de la mémoire, chutes et fractures, accidents de conduite ou comportements automatiques avec le zolpidem. S’ajoutent la tolérance, la dépendance et le risque de syndrome de sevrage en cas d’arrêt brutal. Le bénéfice et l’indication de chaque molécule doivent donc être réévalués.',
        points: 4
      },
      {
        q: 'Proposez une stratégie de déprescription progressive et partagée.',
        a: 'Réévaluer les indications, expliquer les bénéfices attendus et décider avec la patiente d’un calendrier écrit. Diminuer progressivement, par paliers adaptés aux symptômes, sur quelques semaines à plusieurs mois ; ralentir ou revenir au palier précédent si des signes non graves apparaissent. Une substitution par diazépam n’est pas systématique : elle ne se discute que dans certaines situations de dépendance ou d’échecs antérieurs, après vérification hépatique. Associer agenda sommeil-éveil, règles de sommeil et accompagnement non médicamenteux, sans traitement substitutif automatique.',
        points: 5
      },
      {
        q: 'Que surveiller pendant le sevrage et comment définir sa réussite ?',
        a: 'Surveiller l’insomnie rebond, l’anxiété, l’irritabilité, les symptômes sensoriels, la somnolence diurne et les chutes. Une confusion, des hallucinations, des troubles de vigilance ou des convulsions imposent une évaluation urgente et une hospitalisation. L’arrêt est l’objectif, mais une diminution durable de dose constitue déjà un résultat favorable ; rechercher aussi une meilleure vigilance et l’absence de nouvelle chute.',
        points: 3
      }
    ],
    juryTips: 'Déprescription BZD = classique ch16. Citer Beers, sevrage progressif, hygiène sommeil. Ne pas renouveler par facilité.'
  }
];
