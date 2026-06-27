// ═══════════════════════════════════════════════════════════════
//  Annales EVC Gériatrie — Vrais sujets avec cas détaillés
//  Chaque cas = situation complète + examen + biologie + imagerie
//  Questions = type EVC (4-5 questions par cas, barème 20 points)
// ═══════════════════════════════════════════════════════════════
const ANNALES_V2 = [
  {
    id: 'av2-1', year: 2024, chapter: 'ch12', difficulty: 'A',
    title: 'Chute récidivante chez une patiente polymédiquée',
    situation: `Mme DUPONT Marie, 84 ans, amenée par sa fille aux urgences après sa 3ème chute en 2 mois. Elle vit seule dans un appartement au 3ème étage sans ascenseur. Marche avec une canne depuis 6 mois.

ATCD: HTA (amlodipine 10mg), diabète T2 (metformine 1000mg x2), arthrose genou (tramadol 50mg x2), insomnie (zolpidem 10mg), anxiété (lorazepam 1mg).

DERNIÈRE CHUTE: ce matin en se levant des toilettes. Pas de perte de connaissance. Douleur au poignet droit.

EXAMEN: PA 145/85 couché, 115/65 debout. FC 88. T° 36.8. MMS 23/30 (était 26 il y a 1 an). Tinetti 14/28. EVA 4/10 poignet. Poignet droit tuméfié, mobilité douloureuse.`,
    questions: [
      { q: 'Listez les facteurs de risque de chute identifiés chez cette patiente.', a: 'Facteurs intrinsèques: âge 84 ans, hypotension orthostatique (PA -30/-20 mmHg), troubles de l\'équilibre (Tinetti 14/28), déficit visuel probable, arthrose genou, déclin cognitif (MMS 23→26). Facteurs extrinsèques: appartement 3ème sans ascenseur, toilettes (lieu de chute fréquent). Facteurs iatrogènes: tramadol (sédation), zolpidem (somnambulisme, chute nocturne), lorazepam (BZD = risque de chute ++, critères Beers), amlodipine (hypotension orthostatique).' },
      { q: 'Quels examens complémentaires demandez-vous ?', a: 'Rx poignet droit (fracture ?). ECG (syncope ? arythmie ?). Bilan orthostatique complet (PA couché/debout à 1 min et 3 min). NFS, iono, créatinine, glycémie, TSH, Vit D, calcémie. Échographie des parties molles si douleur persistante.' },
      { q: 'Quelle est votre stratégie de déprescription ?', a: '1. Arrêt zolpidem (somnambulisme, chute nocturne) → hygiène du sommeil + mélatonine 2mg. 2. Arrêt lorazepam (sevrage progressif 2 semaines, BZD = Beers). 3. Remplacement tramadol par paracétamol 1g x3/j (douleur légère). 4. Maintien amlodipine mais surveillance PA orthostatique. 5. Réévaluation à 1 semaine.' },
      { q: 'Quelles mesures non médicamenteuses proposez-vous ?', a: 'Rééducation équilibre (kiné 3x/sem, Tinetti objectif > 24). Vit D 800UI/j. Correction visuelle (RDV ophtalmo). Adaptation domicile: barres d\'appui toilettes/salle de bain, rehausseur WC, tapis antidérapant, éclairage nocturne. Chaussures antidérapantes. Téléalarme. Évaluation retour domicile vs EHPAD.' },
      { q: 'Que répondez-vous à la fille qui demande si sa mère peut encore vivre seule ?', a: 'Évaluer l\'autonomie réelle (ADL/IADL). Si ADL ≥ 4 et IADL ≥ 4 avec aides techniques → domicile possible avec aide renforcée. Si ADL < 4 ou chutes malgré mesures → EHPAD ou résidence avec services. Discuter avec la patiente (autonomie). Prévoir réévaluation à 1 mois après déprescription et rééducation.' }
    ],
    juryTips: 'Le piège est de traiter la fracture sans chercher la cause de la chute. Le jury attend que vous identifiiez l\'iatrogénie (BZD + tramadol) comme cause principale et que vous proposiez une déprescription argumentée. L\'hypotension orthostatique doit être documentée (PA couché/debout).'
  },
  {
    id: 'av2-2', year: 2024, chapter: 'ch11', difficulty: 'A',
    title: 'Confusion aiguë post-opératoire',
    situation: `M. GARCIA Henri, 79 ans, J2 post-op prothèse de hanche droite (fracture col fémoral). L\'infirmière de nuit le trouve agité, il essaie de se lever, parle de ses enfants (décédés il y a 10 ans).

ATCD: HTA (périndopril 5mg), diabète T2 (gliclazide 60mg), BPCO (salbutamol), dépression (sertraline 50mg). Ex-fumeur.

TRAITEMENT POST-OP: paracétamol 1g IV x4, tramadol 100mg/j, enoxaparine 40mg SC, amoxicilline-clavulanate 2g IV.

EXAMEN: T° 38.2°C. PA 140/85. FC 98. FR 22. SpO2 93% (O2 2L). MMS 16/30 (pré-op 24/30). CAM positive (début aigu, inattention, fluctuation). ECPA 5/10. Pas de déficit neurologique focal. Globe vésical non palpé. Pas de rougeur cutanée.

BIOLOGIE: GB 14 000 (PNN 82%), CRP 145, créatinine 135 (habituelle 90), Na 146, K 4.5, glycémie 1.9g/L.`,
    questions: [
      { q: 'Confirmez le diagnostic avec les critères CAM.', a: 'CAM positive: (1) Début aigu et fluctuation ✓ (J2 post-op, agité la nuit). (2) Inattention ✓ (ne suit pas les consignes). (3) Pensée désorganisée ✓ (parle de ses enfants décédés). (4) Niveau de conscience altéré ✓ (agitité, désorienté). Diagnostic: confusion aiguë (delirium) post-opératoire.' },
      { q: 'Listez les causes possibles de cette confusion.', a: '1. Post-opératoire (anesthésie, stress chirurgical). 2. Infection (T° 38.2, GB 14 000, CRP 145 → infection urinaire, pulmonaire ou plaie). 3. Déshydratation (Na 146, créatinine 135 vs 90). 4. Iatrogénie (tramadol 100mg → confusion ++). 5. Hypoglycémie (1.9 g/L sous gliclazide). 6. Douleur (ECPA 5/10). 7. Constipation (fréquente post-op).' },
      { q: 'Quelle est votre prise en charge immédiate ?', a: '1. Arrêt tramadol → paracétamol IV seul. 2. Réhydratation NaCl 0.9% 500mL. 3. Correction glycémique (sucre si < 0.7, arrêt gliclazide si < 1.5). 4. ECBU + hémocultures. 5. Rx thoracique. 6. Halopéridol 0.5mg PO si agitation sévère. 7. Pas de contention. 8. Réorientation (lumière, horloge, présence familiale).' },
      { q: 'Quels médicaments NE devez-vous PAS utiliser et pourquoi ?', a: '1. BZD (lorazepam, diazepam) → aggravent la confusion, sédation paradoxale. 2. Anticholinergiques → aggravent la confusion. 3. AINS → néphrotoxiques (créatinine déjà élevée). 4. Gliclazide → hypoglycémie (1.9 g/L). 5. Tramadol → confusion ++ (à arrêter).' },
      { q: 'Quelle surveillance mettez-vous en place ?', a: 'CAM toutes les 8h. T°, PA, FC, SpO2, glycémie toutes les 4h. Diurèse. ECPA toutes les 4h. Bilan biologique J3 (créatinine, Na, K, GB, CRP). Réévaluation à J4: si amélioration → réintroduction progressive des traitements. Si persistance → recherche cause complémentaire.' }
    ],
    juryTips: 'Le jury attend que vous utilisiez la CAM de manière structurée. Le tramadol est le médicament le plus suspect (confusion chez le sujet âgé). L\'hypoglycémie à 1.9 g/L est un facteur contributif. Ne pas oublier de chercher une infection (T°, GB, CRP).'
  },
  {
    id: 'av2-3', year: 2023, chapter: 'ch14', difficulty: 'A',
    title: 'Dénutrition sévère et escarre',
    situation: `Mme PETIT Louise, 86 ans, hospitalisée pour dénutrition sévère. Sa fille rapporte que sa mère ne mange presque plus depuis 3 mois, reste au lit, a perdu 8 kg.

ATCD: Alzheimer stade GDS 5, HTA (ramipril 5mg), ostéoporose (alendronate 70mg/sem + Vit D 1000UI), FA permanente (warfarine INR 2-3), dépression (paroxétine 20mg).

ÉVALUATION: MMS 8/30. GDS-15 14/15. ADL 2/6. IADL 0/8. MNA 9/30. Tinetti 6/28. Braden 12/23. ECPA 4/10. Poids 42 kg (IMC 16.2). Taille 155 cm.

BIOLOGIE: Albumine 22 g/L. Pré-albumine 0.08 g/L. Hb 10.5 g/dL. Vit D 8 ng/mL. Créatinine 95 (DFG 52). INR 3.8.

EXAMEN: Escarre sacrée stade II (3x4 cm, fond fibrineux). Peau sèche, turgescence diminuée. Sarcopénie sévère.`,
    questions: [
      { q: 'Analysez la dénutrition de cette patiente (causes, sévérité, conséquences).', a: 'Sévérité: MNA 9/30 = dénutrition sévère. IMC 16.2 = dénutrition sévère. Albumine 22 g/L = dénutrition sévère. Perte 8 kg en 3 mois (~16% du poids). Causes: Alzheimer (oublie de manger, perte autonomie), isolement social, dépression, dysphagie probable, perte d\'appétit. Conséquences: sarcopénie, escarre, immunodépression, risque fracture.' },
      { q: 'Quel plan nutritionnel détaillé proposez-vous ?', a: '1. Enrichissement alimentaire (crème, beurre, fromage, œufs). 2. CNO x3/j (Delical 2kcal, 200mL). 3. Fractionnement 6 repas/j. 4. Protéines 1.5g/kg/j (63g). 5. Vit D 100 000UI en bolus puis 1000UI/j. 6. Calcium 1g/j. 7. Si échec 1 semaine: nutrition entérale par SNG. 8. Aide à l\'alimentation (aide-soignante). 9. Surveillance: poids 2x/sem, albumine J15.' },
      { q: 'Comment gérez-vous l\'INR à 3.8 ?', a: 'INR 3.8 = surdosage warfarine. 1. Arrêt warfarine 1-2 jours. 2. Si INR > 5: vitamine K1 1-2mg PO. 3. Réévaluation INR dans 48h. 4. Reprendre warfarine à dose réduite. 5. Rechercher cause: déshydratation (Na ?), interaction médicamenteuse (paroxétine inhibe CYP2D6 → ↑ warfarine). 6. Surveillance INR 2x/sem pendant 2 semaines.' },
      { q: 'Quelle est votre attitude concernant la nutrition artificielle ?', a: 'En Alzheimer modéré-sévère (GDS 5), la nutrition artificielle (PEG) n\'améliore pas la qualité de vie ni la survie (recommandations HAS). Discussion avec la famille: objectif = confort, pas survie. Si la patiente accepte la SNG → essai 2 semaines. Si refus ou échec → soins palliatifs confort. Ne pas imposer de nutrition artificielle.' },
      { q: 'Quel est le pronostic et quelle est votre attitude éthique ?', a: 'Pronostic réservé: Alzheimer sévère + dénutrition sévère + escarre + isolation. Discussion avec la famille sur les objectifs de soins. Directives anticipées ? Personne de confiance ? Si détérioration rapide → soins palliatifs. Si stabilisation → maintien en EHPAD avec soins adaptés. Accompagnement de la fille (préparation du deuil).' }
    ],
    juryTips: 'Le jury attend une analyse complète de la dénutrition (causes multiples), une stratégie nutritionnelle adaptée (pas de PEG en Alzheimer avancé), et une discussion éthique sur la nutrition artificielle. L\'INR à 3.8 est un piège — il faut l\'expliquer et le gérer.'
  },
  {
    id: 'av2-4', year: 2023, chapter: 'ch16', difficulty: 'A',
    title: 'Polymédication et cascade iatrogénique',
    situation: `M. DUBOIS Pierre, 82 ans, consulte pour chutes répétées, constipation et confusion. Sa femme dit qu\'il n\'est "plus le même" depuis 6 mois.

TRAITEMENT ACTUEL (9 médicaments):
1. Oxazepam 10mg le soir (depuis 2 ans)
2. Amitriptyline 50mg le soir (depuis 3 ans)
3. Codéine 30mg x3/j (depuis 1 an)
4. Amlodipine 10mg/j
5. Gliclazide 80mg/j
6. Oméprazole 20mg/j
7. Furosémide 20mg/j
8. Aspirine 100mg/j
9. Donezepil 10mg/j (depuis 6 mois)

EXAMEN: PA 130/80 couché, 100/60 debout. FC 68. MMS 20/30 (était 24 il y a 1 an). Tinetti 16/28. Transit: selles tous les 5 jours. EVA 3/10 (douleurs diffuses). Poids 62 kg (était 68 kg il y a 6 mois).`,
    questions: [
      { q: 'Identifiez tous les médicaments inappropriés (critères de Beers) et argumentez.', a: '1. Oxazepam (BZD) → chutes, confusion, sédation, dépendance. 2. Amitriptyline (tricyclique) → confusion, constipation++, sècheresse buccale, rétention urinaire, chutes. 3. Codéine → constipation+++, confusion, sédation. Les 3 sont critères de Beers. Donezepil peut aussi aggraver la confusion en cas de surdosage.' },
      { q: 'Décrivez la cascade iatrogénique chez ce patient.', a: 'Oxazepam → chute + confusion. Amitriptyline → constipation → codéine pour traiter → constipation aggravée + confusion. Amitriptyline → hypotension orthostatique (PA -30/-20) → chute. Codéine → confusion → donezepil prescrit pour la "démence" alors que c\'est iatrogénique. Cascade: BZD + tricyclique + opioïde = confusion + chutes + constipation.' },
      { q: 'Quelle est votre stratégie de déprescription ?', a: '1. Arrêt oxazepam (sevrage progressif 4 semaines, substitution diazepam si besoin). 2. Arrêt amitriptyline (demi-dose 1 semaine puis arrêt). 3. Arrêt codéine (paracétamol 1g x3/j). 4. Réévaluation donezepil après déprescription (si confusion réversible → arrêter). 5. Un médicament à la fois. 6. Surveillance PA, transit, douleur.' },
      { q: 'Quels examens demandez-vous pour évaluer l\'amélioration ?', a: 'MMS à 1 mois (amélioration attendue si confusion iatrogénique). Tinetti à 1 mois (réduction chutes). Transit (constipation résolutive). PA orthostatique. Poids. GDS-15 (dépression ?). Évaluation ADL/IADL. Si MMS s\'améliore → pas de démence, c\'est iatrogénique.' },
      { q: 'Que répondez-vous à la femme qui pense que son mari a Alzheimer ?', a: 'La confusion est probablement iatrogénique (médicaments), pas une démence. La déprescription va améliorer la cognition. Si MMS remonte à 24+ après arrêt des médicaments → diagnostic: confusion iatrogénique, pas Alzheimer. Le donezepil a été prescrit pour une "démence" qui n\'en est peut-être pas une. Réévaluation à 1 mois.' }
    ],
    juryTips: 'Le jury attend que vous identifiiez TOUTE la cascade iatrogénique, pas seulement les Beers. Le donezepil prescrit pour une "démence" iatrogénique est le piège ultore. La déprescription doit être progressive et surveillée.'
  },
  {
    id: 'av2-5', year: 2022, chapter: 'ch9', difficulty: 'A',
    title: 'Troubles cognitifs et diagnostic différentiel',
    situation: `Mme MARTIN Jeanne, 78 ans, adressée par son médecin traitant pour "perte de mémoire". Sa fille dit qu\'elle oublie les rendez-vous, répète les mêmes questions, a perdu 5 kg en 4 mois.

ATCD: HTA (losartan 50mg), dyslipidémie (atorvastatine 20mg), dépression traitée (amitriptyline 75mg depuis 2 ans).

EXAMEN: MMS 21/30. GDS-15 14/15. ADL 5/6. IADL 4/8. MNA 20/30. PA 135/80 couché, 110/65 debout. Poids 60 kg (était 65 kg). Albumine 32 g/L. TSH normale. B12 normale. Créatinine 110 (DFG 58). IRM: atrophie hippocampique modérée, leucoaraïose périventriculaire.`,
    questions: [
      { q: 'Quels sont les diagnostics à évoquer ? Argumentez.', a: '1. Dépression majeure (GDS 14/15 = sévère) → pseudodémence possible (perte mémoire + perte poids + tristesse). 2. Démence débutante (MMS 21/30, atrophie hippocampique, troubles mémoire 4 mois). 3. Iatrogénie (amitriptyline 75mg = anticholinergique → confusion, sécheresse, constipation). 4. Hypotension orthostatique (PA -25/-15) → fatigue, chutes. 5. Dénutrition (perte 5 kg, albumine 32).' },
      { q: 'Quels examens complémentaires demandez-vous ?', a: '1. Bilan mémoire complet (MoCA, épreuves neuropsychologiques). 2. Bilan dépression (entretien psychiatrique, HDRS). 3. Évaluation orthostatique complète. 4. Bilan nutritionnel (MNA complet). 5. Échographie rénale (DFG 58). 6. Pas de ponction lombaire (pas d\'urgence). 7. Réévaluation après arrêt amitriptyline.' },
      { q: 'Quelles modifications médicamenteuses proposez-vous ?', a: '1. Arrêt amitriptyline (anticholinergique = Beers, confusion, sécheresse) → ISRS (sertraline 25mg). 2. Réduction alfuzosine (hypotension orthostatique). 3. Maintien losartan (adapté). 4. Maintien atorvastatine. 5. Maintien metformine (surveiller DFG). 6. Maintien aspirine.' },
      { q: 'Si le diagnostic de démence est confirmé, quel traitement instaurez-vous ?', a: 'Inhibiteur de cholinestérasique: donépezil 5mg/j pendant 1 mois → 10mg/j. Si mal toléré: rivastigmine patch 4.6mg → 9.5mg. Pas de mémantine (stade léger). Surveillance: bradycardie, troubles digestifs. Éducation patient + famille.' },
      { q: 'Quel suivi proposez-vous ?', a: 'Réévaluation à 1 mois (MMS, GDS, tolérance traitement). Bilan biologique à 3 mois (DFG, glycémie). RDV neurologue à 6 mois. Évaluation autonomie trimestrielle. Préparation des directives anticipées. Information sur les aides (APA, EHPAD si évolution).' }
    ],
    juryTips: 'Le jury attend que vous distinguiez pseudodémence (dépression) vs démence vraie. L\'amitriptyline est le piège principal — anticholinergique qui aggrave les troubles cognitifs. L\'hypotension orthostatique explique la fatigue et les chutes potentielles.'
  },
  {
    id: 'av2-6', year: 2022, chapter: 'ch11', difficulty: 'A',
    title: 'Confusion nocturne en EHPAD — Démence à corps de Lewy',
    situation: `M. GARCIA Henri, 82 ans, résident en EHPAD depuis 8 mois, retrouvé agité à 2h du matin.

ATCD: Démence à corps de Lewy (diagnostiquée il y a 2 ans), HTA (amlodipine 5mg), diabète T2 (metformine 500mg x2), BPH (tamsulosine 0.4mg). ATCD de syndrome malin des neuroleptiques (sous halopéridol il y a 1 an).

TRAITEMENT: amlodipine 5mg, metformine 500mg x2, oméprazole 20mg, tamsulosine 0.4mg, donépezil 10mg, mélatonine 2mg, mirtazapine 15mg le soir.

SITUATION: Agité, crie, dit qu\'il doit "aller travailler", frappe l\'aide-soignante. T° 37.8°C. PA 150/90. FC 95. Glycémie 1.8 g/L. ECPA 6/10.`,
    questions: [
      { q: 'Quel est le diagnostic et quels sont les critères diagnostiques ?', a: 'Confusion aiguë (delirium) sur démence à corps de Lewy. CAM: (1) Début aigu ✓ (2h vs habituel). (2) Inattention ✓. (3) Fluctuation ✓. (4) Niveau conscience altéré ✓. DLB = terrain à risque de confusion + hypersensibilité neuroleptique.' },
      { q: 'Listez les causes possibles de cette agitation.', a: '1. Douleur (ECPA 6/10, difficile à évaluer en DLB). 2. Infection (T° 37.8°C). 3. Hypoglycémie (1.8 g/L = relative chez diabétique). 4. Iatrogénie (mirtazapine = sédation, tamsulosine = confusion). 5. Environnement (nuit, désorientation). 6. Constipation (fréquente sous donépezil).' },
      { q: 'Quels médicaments NE DEVEZ-VOUS PAS donner et pourquoi ?', a: '1. Halopéridol: CONTRE-INDIQUÉ en DLB (syndrome malin des neuroleptiques, ATCD). 2. BZD (diazépam, lorazépam): confusion paradoxale, chutes. 3. Anticholinergiques: aggravation confusion. 4. Métopimazine: neuroleptique → même risque.' },
      { q: 'Quelle est votre prise en charge immédiate ?', a: '1. Environnement: lumière douce, voix calme, présence rassurante. 2. Pas de contention. 3. Réorientation (horloge, calendrier, photos). 4. Si douleur: paracétamol 1g PO. 5. Si hypoglycémie: sucre oral. 6. Si agitation sévère: quétiapine 12.5-25mg PO. 7. Surveillance: T°, glycémie, ECPA toutes les 2h.' },
      { q: 'Comment prévenir les récidives ?', a: '1. Maintenir un environnement stable (même chambre, même personnel). 2. Lumière naturelle le jour, veilleuse la nuit. 3. Activités structurées la journée. 4. Éviter les changements brusques. 5. Révision médicamenteuse (mirtazapine, tamsulosine). 6. Évaluation douleur systématique (ECPA 2x/j). 7. Éducation équipe (DLB = hypersensibilité neuroleptique).' }
    ],
    juryTips: 'Le piège principal est de donner de l\'halopéridol — CI absolue en DLB (ATCD syndrome malin). Le jury attend que vous connaissiez l\'hypersensibilité neuroleptique de la DLB et que vous proposiez la quétiapine comme alternative. La douleur est souvent sous-estimée chez les patients déments.'
  }
];
