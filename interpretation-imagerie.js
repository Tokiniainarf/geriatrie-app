// Interprétation d'imagerie — Cas cliniques commentés chez le sujet âgé
const INTERPRETATION_IMAGERIE = [
  {
    id: 'ii-1',
    examen: 'Radiographie thoracique — pneumopathie',
    cas_clinique: 'Homme de 86 ans, EHPAD, fièvre à 38,5 °C depuis 24 h, toux productive, SpO2 91 % en air ambiant, pas de douleur thoracique. ATCD : BPCO modérée, diabète type 2. Traitement : metformine, bronchodilatateurs. Confusion légère rapportée par l\'IDE.',
    image_description: 'Rx thorax face en inspiration modérée. Opacité alvéolaire dense du lobe inférieur droit avec bronchogramme aérien visible ; silhouette cardiaque modérément élargie (cardiothoracic index ~0,52). Sinus costo-diaphragmatique droit comblé en partie. Pas de pneumothorax. Rachis dorsal : tassements vertébraux anciens.',
    interpretation: 'Condensation alvéolaire lobaire inférieure droite évocatrice d\'une pneumonie bactérienne communautaire. Épanchement pleural associé possible (comblement du sinus droit). Cardiomégalie chronique compatible avec l\'âge et comorbidités. Qualité technique acceptable malgré inspiration incomplète typique du sujet âgé.',
    diagnostic: 'Pneumonie acquise en communauté du lobo inférieur droit, probablement bactérienne ; épanchement pleural parapneumonique léger à confirmer.',
    diagnostic_differentiel: 'Atélectasie par sécrétions (alité, faible toux), OAP focal rare, infarctus pulmonaire si contexte embolique, tumeur masquée par surinfection (à réévaluer après traitement).',
    conduite_tenir: 'Hospitalisation ou surveillance rapprochée selon fragilité (score ISAR, NEWS). Antibiothérapie probabiliste adaptée au terrain (amoxicilline-acide clavulanique ou respiratoire fluoroquinolone si allergie/BPCO sévère). Oxygénothérapie cible SpO2 92–96 %, éviter hyperoxie. Bilan : NFS, CRP, créatinine, hémocultures si fièvre élevée. Réévaluation clinique à 48–72 h ; écho pleurale si épanchement persistant. Rechercher déclencheur (déshydratation, aspiration, rétention urinaire). Vaccination pneumocoque/influenza à programmer.'
  },
  {
    id: 'ii-2',
    examen: 'Radiographie thoracique — œdème aigu du poumon (OAP)',
    cas_clinique: 'Femme de 91 ans, dyspnée brutale nocturne, orthopnée, toux mousseuse rosée. PA 180/95 mmHg, FC 115/min régulier, crépitants bilatéraux aux bases, jugulaires turgescentes. ATCD : HTA, FA permanente, insuffisance rénale chronique stade 3. Traitement : furosémide 40 mg/j, amlodipine, apixaban.',
    image_description: 'Rx thorax face semi-assise. Redistribution vasculaire avec vaisseaux hilaires dilatés ; opacités alvéolo-interstitielles bilatérales prédominant aux champs moyens et inférieurs (« ailes de papillon »). Lignes de Kerley B aux bases. Cardiomégalie marquée. Épanchements pleuraux bilatéraux de faible abondance. Pas de condensation lobaire isolée.',
    interpretation: 'Syndrome interstitiel et alvéolaire bilatéral aigu, cardiomégalie et signes de surcharge hydrostatique : tableau typique d\'OAP cardiogénique. Contexte HTA, FA et surcharge volémique (IRC) concordant.',
    diagnostic: 'Œdème aigu du poumon cardiogénique sur poussée hypertensive / surcharge volémique, probablement sur FA mal contrôlée et fonction rénale dégradée.',
    diagnostic_differentiel: 'Pneumonie bilatérale (contexte infectieux, fièvre), SDRA, surcharge volémique iatrogène isolée, EP avec infarctus (asymétrie possible), fibrose interstitielle décompensée.',
    conduite_tenir: 'Urgence : O2, position demi-assise, furosémide IV 40–80 mg (adapter IRC), dérivés nitrés si PA permet. Monitorage, diurèse horaire, ionogramme, créatinine. ECG : contrôle FA (rythme, surcharge). Échocardiographie dès stabilisation. Limiter apports sodés et hydriques ; réévaluer apixaban si hypotension majeure. Ne pas confondre avec pneumonie : BNP/NT-proBNP utiles. Prévention récidive : optimisation IC, balance des diurétiques, suivi poids.'
  },
  {
    id: 'ii-3',
    examen: 'Radiographie de la colonne — fracture vertébrale',
    cas_clinique: 'Femme de 84 ans, chute de sa hauteur dans sa chambre, douleur lombaire intense à la mobilisation, pas de déficit neurologique. Ostéoporose connue, traitement par raloxifène arrêté il y a 6 mois. DMO non refaite depuis 5 ans.',
    image_description: 'Rx lombaire face et profil. En L1, tassement du plateau supérieur avec coin antérieur (cyphose locale ~15°), trait de fracture visible en profil, pas d\'atteinte du mur postérieur. Autres vertèbres : tassements anciens L3 et T12 avec condensation des plateaux. Ostéopénie diffuse.',
    interpretation: 'Fracture par compression récente de L1 sur fond ostéoporotique, sans signe radiographique d\'instabilité majeure (mur postérieur respecté). Antécédents de fractures vertébrales anciennes.',
    diagnostic: 'Fracture vertébroplastique ostéoporotique aiguë de L1 post-traumatique mineure.',
    diagnostic_differentiel: 'Fracture pathologique métastatique (suspicion si mur postérieur atteint, masse des parties molles) ; spondylodiscite (pincement discal adjacent, fièvre) ; tassement ancien réactivé.',
    conduite_tenir: 'Antalgie (paracétamol, paliers adaptés, éviter AINS si IRC). Mobilisation précoce encadrée, corset souple si douleur à la station debout. Bilan : calcémie, phosphore, 25-OH vitamine D, TSH. DEXA si non récente ; traitement anti-ostéoporotique (biphosphonate IV ou anabolisant selon tolérance). Évaluation fracture vertébrale (IRM si doute neurologique ou diagnostic incertain). Prévention chutes, calcium/vitamine D. Avis rhumatologie ou gériatrie si fractures répétées.'
  },
  {
    id: 'ii-4',
    examen: 'TDM cérébral — accident vasculaire cérébral ischémique',
    cas_clinique: 'Homme de 79 ans, aphasie et hémiplégie droite brutales depuis 2 h. PA 165/90, glycémie 1,45 g/L. FA connue sous rivaroxaban (observance incertaine). NIHSS estimé à 14 à l\'admission.',
    image_description: 'Scanner cérébral sans injection, coupes axiales. Hypodensité précoce du territoire de l\'artère cérébrale moyenne gauche (insulaire, operculaire), perte de différenciation substance grise/blanche, effacement des sillons corticaux. Signe de l\'artère hyperdense en segment M1 gauche. Pas d\'hyperdensité hémorragique. Ligne médiane centrée. Leucoaraïose péri-ventriculaire modérée.',
    interpretation: 'AVC ischémique aigu du territoire ACM gauche, occlusion proximale probable (M1 hyperdense). Absence d\'hémorragie : patient éligible à discussion thrombolyse/thrombectomie selon fenêtre et contre-indications.',
    diagnostic: 'AVC ischémique aigu du territoire carotidien gauche (ACM), occlusion M1, sur FA emboligène probable.',
    diagnostic_differentiel: 'Tumeur avec infarctus sur tumeur, migraine avec aura prolongée (contexte atypique), convulsions post-ictales avec déficit transitoire, hémorragie non encore visible (répéter si doute).',
    conduite_tenir: 'Filière AVC : thrombolyse IV si < 4,5 h et critères remplis ; thrombectomie mécanique si occlusion proximale et fenêtre étendue selon imagerie. Contrôle PA (seuils thrombolyse), neurosurveillance. Anticoagulation : temporisation post-thrombolyse ; reprise DOAC ou AVK selon délai et taille infarctus. Bilan étiologique : ECG, écho cardiaque, Doppler carotidien. Rééducation précoce. Prévention secondaire : statine, antiagrégant ou anticoagulant, contrôle FRCV.'
  },
  {
    id: 'ii-5',
    examen: 'TDM cérébral — hématome intracérébral',
    cas_clinique: 'Femme de 88 ans, chute avec traumatisme crânien, puis somnolence progressive. Anticoagulation par warfarine (INR 3,2). HTA mal contrôlée. GCS 12 à l\'admission, confusion, vomissements.',
    image_description: 'Scanner sans injection : hyperdensité spontanée intra-parenchymateuse de 35 × 28 mm en profondeur du lobe pariétal gauche, avec œdème péri-lésionnel hypodense et effet de masse modéré (déviation ligne médiane 4 mm). Pas d\'extension ventriculaire ni d\'hémorragie sous-arachnoïdienne franche. Atrophie cérébrale diffuse.',
    interpretation: 'Hématome intracérébral lobar gauche, volume modéré, avec effet de masse. Contexte anticoagulation surdosée et HTA : hémorragie probablement hypertensive/amyloïde lobar ± contribution traumatique.',
    diagnostic: 'Hématome intracérébral lobar pariétal gauche, probable angiopathie amyloïde et/ou hypertension, aggravé par anticoagulation.',
    diagnostic_differentiel: 'Hématome traumatique contusif, métastase hémorragique, transformation hémorragique d\'AVC ischémique, tumeur sous-jacente.',
    conduite_tenir: 'Neurochirurgie si détérioration neurologique, effet de masse majeur ou hydrocephalie. Réverser anticoagulation (vitamine K, PPSB ou idarucizumab selon traitement). Contrôle PA (cible souple, éviter hypotension). Monitorage neuro, prévention complications (AVC, pneumopathie). Réévaluation indication anticoagulation à distance. IRM ou angio-CT si suspicion cause secondaire. Soins de support et décision avancée adaptée à l\'âge et aux volontés.'
  },
  {
    id: 'ii-6',
    examen: 'IRM cérébrale — maladie d\'Alzheimer',
    cas_clinique: 'Homme de 81 ans, troubles de la mémoire épisodique progressifs depuis 3 ans, désorientation temporo-spatiale, difficultés pour la gestion des finances. MMS 19/30. Pas de fluctuation majeure ni hallucinations visuelles. ATCD : HTA, dyslipidémie.',
    image_description: 'IRM : séquences T1, FLAIR, T2. Atrophie hippocampique bilatérale modérée à sévère (plus marquée à gauche), atrophie corticale temporopariétale bilatérale. FLAIR : leucoaraïose péri-ventriculaire grade 2 (Fazekas). Pas de restriction diffusion aiguë, pas de microbleeds nombreux, pas de prise de contraste pathologique.',
    interpretation: 'Atrophie mésio-temporale et temporopariétale bilatérale disproportionnée par rapport à l\'âge, compatible avec une neurodégénérescence de type Alzheimer. Leucoaraïose modérée peut contribuer aux troubles exécutifs.',
    diagnostic: 'Syndrome démentiel probable maladie d\'Alzheimer (critères cliniques + atrophie hippocampique IRM), forme amnésique typique.',
    diagnostic_differentiel: 'Démence vasculaire mixte, démence à corps de Lewy (hallucinations, fluctuations), démence fronto-temporale (profil comportemental), dépression (pseudodémence), hydrocéphalie à pression normale (triade marche/incontinence).',
    conduite_tenir: 'Confirmation clinique : entretien informateur, échelles (MMS, MoCA, ADAS-Cog si essai). Bilogique : B12, folates, TSH, sérologies si contexte. Traitement : inhibiteur cholinestérase si indication et tolérance ; memantine stade modéré-sévéré. Éducation famille, planification légale (curatelle), conduite automobile. Activités cognitives et sociales. Rechercher comorbidités modifiables. Discussion anti-amyloïdes si critères récents et centre référent. Suivi régulier EHPAD ou domicile.'
  },
  {
    id: 'ii-7',
    examen: 'Échographie abdominale — ascite',
    cas_clinique: 'Femme de 87 ans, distension abdominale progressive, prise de poids, dyspnée d\'effort. ATCD : cirrhose alcoolique compensée, FA. Examen : matité des flancs, onde de liquide. Albumine 24 g/L, bilirubine normale, INR 1,4.',
    image_description: 'Échographie : épanchement intrapéritonéal diffus, anses intestinales flottantes, liquide anéchogène homogène. Foie : contours irréguliers, hypertrophie du lobe gauche, pas de masse focale hépatique identifiée. Vésicule alithiasique. Rate 13 cm. Pas de dilatation des voies biliaires. Reins : taille conservée, pas d\'hydronephrose.',
    interpretation: 'Ascite de grande abondance sur cirrhose morphologique. Pas de signe échographique de carcinomatose péritonéale évidente sur cet examen (séquelles limitées).',
    diagnostic: 'Ascite sur cirrhose hépatique (hypertension portale), probablement décompensation sur surcharge sodée ou progression hépatique.',
    diagnostic_differentiel: 'Ascite cardiogénique (écho cardiaque), carcinose péritonéale, tuberculose péritonéale, syndrome néphrotique, chylascite.',
    conduite_tenir: 'Ponction d\'ascite diagnostique (cellules, albumine gradient sérum-ascite, culture) avant diurétique si première épisode ou fièvre. Restriction sodée, spironolactone ± furosémide. Éviter AINS. Dépistage PBE si fièvre ou douleur. Échographie cardiaque si doute IC. Surveillance poids, tour de taille. Discussion TIPS ou transplantation selon âge et comorbidités souvent limitées chez le très âgé ; objectifs de confort si soins palliatifs.'
  },
  {
    id: 'ii-8',
    examen: 'Échocardiographie — insuffisance cardiaque',
    cas_clinique: 'Homme de 83 ans, dyspnée d\'effort classe NYHA III, œdèmes des MI, prise de 6 kg en 3 semaines. ATCD : infarctus ancien, FA. BNP 1850 pg/mL. Créatinine 145 µmol/L.',
    image_description: 'Échographie transthoracique : FEVG estimée à 35 %, hypokinésie antéro-septale et apicale, dilatation du VG (DTD 62 mm), dilatation bi-atriale modérée. IM modérée à sévère fonctionnelle. IT permettant estimation PAPS ~55 mmHg. Pas d\'épanchement péricardique significatif. VCI dilatée peu variante à l\'inspiration.',
    interpretation: 'Cardiopathie ischémique avec dysfonction systolique gauche modérée à sévère, remplissage élevé des pressions (IM, IT, VCI), compatible avec IC décompensée.',
    diagnostic: 'Insuffisance cardiaque à fraction d\'éjection réduite (HFrEF) sur cardiopathie ischémique, décompensée.',
    diagnostic_differentiel: 'IC à FEVG préservée (autre profil diastolique), valvulopathie aortique sévère, EP chronique avec cœur pulmonaire, surcharge volémique rénale.',
    conduite_tenir: 'Diurétiques (furosémide, ajuster selon diurèse et fonction rénale). Traitement de fond HFrEF : IEC/ARA2 ou ARNI si toléré, bêtabloquant titré, antagoniste minéralocorticoïde, iSGLT2 si indication. Contrôle FA (rythme ou fréquence). Réhabilitation cardiaque adaptée à l\'âge. Éviter surdosage diurétique (IRC). Réévaluation FEVG et valves à 3–6 mois. Discussion ICD rarement chez très âgé ; prioriser qualité de vie et soins de confort si fin de vie.'
  },
  {
    id: 'ii-9',
    examen: 'Écho-Doppler des carotides — sténose',
    cas_clinique: 'Femme de 80 ans, AIT récent : amaurose fugace droite durant 10 min, régression complète. FA sous apixaban. Souffle carotidien gauche à l\'auscultation. Pas de déficit moteur résiduel.',
    image_description: 'Doppler carotidien bilatéral : plaque mixte épaisse au bulbe carotide interne gauche avec sténose estimée à 75 % (NASCET), VPS ICA gauche 420 cm/s, ratio ICA/CCA 4,2, turbulences post-sténose. Carotide droite : plaque non sténosante. Vertébrales antérogrades. Pas de dissection.',
    interpretation: 'Sténose carotidienne interne gauche hémodynamiquement sévère, symptomatique (territoire oculaire droit = artère ophtalmique gauche). Plaque athéromateuse instable possible dans contexte AIT récent.',
    diagnostic: 'Sténose carotidienne gauche sévère symptomatique récente, responsable de l\'AIT.',
    diagnostic_differentiel: 'Sténose modérée surévaluée (angle Doppler), source embolique cardiaque seule (FA), artère ophtalmique autre cause, migraine avec aura.',
    conduite_tenir: 'Discussion endartériectomie ou stenting dans délai optimal (souvent < 2 semaines si AIT) balance bénéfice/risque âge et comorbidités. Continuer anticoagulation FA + antiagrégant selon protocole post-procédure. Contrôle FRCV : statine haute dose, PA, tabac. Si intervention refusée ou trop risquée : traitement médical optimal et surveillance Doppler. Échocardiographie pour autres sources emboliques.'
  },
  {
    id: 'ii-10',
    examen: 'Écho-Doppler des membres inférieurs — thrombose veineuse profonde (TVP)',
    cas_clinique: 'Homme de 85 ans, alité depuis fracture du col fémoral opérée J12, œdème et douleur du mollet gauche. Pas de dyspnée. Anticoagulation prophylactique par HBPM 40 mg/j (poids 72 kg). D-dimères élevés.',
    image_description: 'Écho-Doppler veineux MI : veine poplitée et fémorale superficielle gauches non compressibles sur plusieurs centimètres, matériel hypoéchogène endoluminal, pas de flux Doppler spontané. Veines du côté droit compressibles. Pas d\'extension iliaque visualisée (fenêtre limitée).',
    interpretation: 'Thrombose veineuse profonde du membre inférieur gauche, segment poplité-fémoral, malgré prophylaxie (sous-dosage ou immobilisation prolongée).',
    diagnostic: 'TVP proximale du membre inférieur gauche post-orthopédique, sous prophylaxie insuffisante.',
    diagnostic_differentiel: 'Cellulite, hématome post-chirurgical, rupture musculaire, lymphœdème, thrombose superficielle (veine saphene).',
    conduite_tenir: 'Anticoagulation curative : HBPM dose thérapeutique ou AVK/DOAC selon fonction rénale et interactions. Durée minimale 3 mois, prolonger si immobilisation. Compression élastique si tolérée. Rechercher EP si dyspnée ou tachycardie (angio-CT ou écho cardiaque). Adapter prophylaxie future (dose poids, durée). Mobilisation progressive dès possible. Contre-indications relatives à la mobilisation selon avis chirurgical.'
  },
  {
    id: 'ii-11',
    examen: 'DEXA (ostéodensitométrie) — ostéoporose',
    cas_clinique: 'Femme de 78 ans, ménopause à 50 ans, sans traitement hormonal. Chute récente sans fracture. Mère fracture du col fémoral. IMC 21, pas de corticothérapie. Vitamine D supplémentée.',
    image_description: 'DEXA : colonne lombaire L1–L4 T-score -3,1 ; col fémoral gauche T-score -2,8 ; total hanche gauche T-score -2,6. Qualité du scan correcte, pas d\'artefact de calcification aortique majeur sur colonne.',
    interpretation: 'Ostéoporose densitométrique sévère au rachis et ostéoporose au col fémoral selon critères OMS (T-score ≤ -2,5). Risque fracturaire élevé (FRAX à compléter cliniquement).',
    diagnostic: 'Ostéoporose post-ménopausique sévère, densitométrique.',
    diagnostic_differentiel: 'Ostéopénie isolée, ostéomalacie (douleurs, faiblesse, biologie), hyperparathyroïdie, myélome (si anomalies biologiques).',
    conduite_tenir: 'Traitement anti-ostéoporotique de première intention : biphosphonate oral ou IV, ou dénosumab si intolerance ; discuter romosozumab ou tériparatide si très haut risque. Calcium alimentaire + vitamine D maintenus. FRAX ou outil fracture risk pour adjuster durée. Prévention chutes (équilibre, vue, médicaments sédatifs). Contrôle DEXA à 1–2 ans. Dentiste avant biphosphonate IV. Éducation patient.'
  },
  {
    id: 'ii-12',
    examen: 'Scanner thoracique — embolie pulmonaire (EP)',
    cas_clinique: 'Femme de 89 ans, dyspnée aiguë, tachycardie 125/min, SpO2 88 %, douleur thoracique pleurale droite. Alitement récent pour grippe. D-dimères très élevés. Rx thorax : atelectasie base droite, pas d\'infiltrat.',
    image_description: 'Angio-CT thoracique après injection : défauts de remplissage en bande dans les branches de l\'artère lobaire inférieure droite et segmentaires droites, signe du wagon-lit dans une branche segmentaire. Pas d\'élargissement du ventricule droit majeur sur les coupes. Pas d\'épanchement pleural significatif. Pas de condensation parenchymateuse lobar.',
    interpretation: 'Embolies pulmonaires segmentaires et sous-segmentaires droites, charge embolique modérée. Signes de surcharge ventriculaire droite discrets sur cet examen.',
    diagnostic: 'Embolie pulmonaire aiguë bilatérale droite prédominante, contexte immobilisation infectieuse.',
    diagnostic_differentiel: 'Pneumonie, OAP, pneumothorax, dissection aortique, infarctus du myocarde, anxieté/hyperventilation.',
    conduite_tenir: 'Anticoagulation immédiate si pas de contre-indication (HBPM ou DOAC). Évaluation gravité : troponine, BNP, écho cardiaque (dysfonction VD). Thrombolyse réservée à l\'instabilité hémodynamique, balance risque hémorragique chez le très âgé. Oxygène, éviter surcharge hydrique. Rechercher TVP aux MI. Durée anticoagulation 3–6 mois minimum, traitement cause. Contre-indications relatives : hémorragie récente, plaquettes basses.'
  },
  {
    id: 'ii-13',
    examen: 'TEP-TDM (PET-Scan) — métastases',
    cas_clinique: 'Homme de 76 ans, cancer bronchique non petites cellules connu (stade IIIA), bilan d\'extension avant décision thérapeutique. Perte de poids 8 kg, douleurs osseuses dorsales. NFS : anemia modérée.',
    image_description: 'PET-18FDG : hyperfixation intense (SUVmax 12) masse hilaire droite et adénopathies médiastinales. Multiples foyers hypermétaboliques vertébraux (D7, L2), ceinture scapulaire droite, surrénale gauche. Pas d\'hyperfixation cérébrale pathologique sur le champ couvert. Foie et rate sans foyer suspect.',
    interpretation: 'Hypermétabolisme tumoral primaire pulmonaire et dissémination ganglionnaire médiastinale, métastases osseuses vertébrales et scapulaire, suspecte métastase surrénalienne gauche : stadification M1 osseuse et viscérale.',
    diagnostic: 'Extension métastatique d\'un cancer bronchique (osseuse, surrénalienne, ganglionnaire) — stadification avancée.',
    diagnostic_differentiel: 'Inflammation infectieuse (tuberculose, pneumonie), autres tumeurs primitives, réaction post-traumatique osseuse hyperfixante, second cancer.',
    conduite_tenir: 'Confirmation histologique si nécessaire, bilan moléculaire (EGFR, ALK, PD-L1) pour thérapie ciblée ou immunothérapie. IRM médullaire si suspicion compression. Discussion radio-chimiothérapie, immunothérapie ou soins de support selon performance status et volontés. Antalgie osseuse, biphosphonates ou dénosumab. Radiothérapie antalgique vertébrale. Évaluation gériatrique complète (CGA) avant traitement lourd.'
  },
  {
    id: 'ii-14',
    examen: 'Scintigraphie osseuse — fracture',
    cas_clinique: 'Femme de 82 ans, chute sur le trottoir, douleur hanche droite à la marche, radiographie hanche : doute sur impact du col. Ostéoporose. Impossible IRM (claustrophobie majeure).',
    image_description: 'Scintigraphie osseuse corps entier : hyperfixation focale intense et linéaire au niveau du col fémoral droit, uptake modéré sur la grande trochanter. Pas de multiples foyers métastatiques ailleurs. Rein et vessie d\'élimination normale.',
    interpretation: 'Hyperfixation localisée du col fémoral droit très évocatrice de fracture récente ou contusion osseuse significative, en cohérence avec le traumatisme.',
    diagnostic: 'Fracture du col fémoral droit récente ou fracture par insuffisance stress, confirmée indirectement par scintigraphie.',
    diagnostic_differentiel: 'Arthrose de hanche hyperfixante, métastase unique (moins linéaire), ostéomyélite (contexte différent), contusion des parties molles.',
    conduite_tenir: 'Traiter comme fracture du col jusqu\'à preuve du contraire : immobilisation, consultation orthopédique urgente, TDM hanche si Rx non concluant. Antalgie, prévention thromboembolique. Chirurgie (ostéosynthèse ou prothèse) selon type fracture et état général. Bilan ostéoporose et traitement. Rééducation. Scintigraphie utile quand IRM indisponible mais SPECT/CT ou TDM préférables si accessible.'
  },
  {
    id: 'ii-15',
    examen: 'Échographie thyroïdienne — nodule',
    cas_clinique: 'Femme de 81 ans, nodule cervical antérieur gauche découvert à la palpation lors d\'un bilan de routine. Euthyroïdie (TSH 2,1 mUI/L). Pas de dysphagie ni dysphonie. ATCD : irradiation cervicale dans l\'enfance inconnue.',
    image_description: 'Échographie : lobe thyroïdien gauche avec nodule solide hypoéchogène de 14 × 11 × 10 mm, contours légèrement irréguliers, microcalcifications punctiformes, orientation plus haute que large sur une coupe, vascularisation mixte au Doppler. Lobe droit sans nodule dominant. Pas d\'adénopathie cervicale suspecte.',
    interpretation: 'Nodule thyroïdien gauche avec critères échographiques suspects (EU-TIRADS 4–5) : hypoéchogénicité, microcalcifications, taller-than-wide.',
    diagnostic: 'Nodule thyroïdien suspect de malignité (probable carcinome papillaire) sur critères EU-TIRADS élevés.',
    diagnostic_differentiel: 'Nodule bénin (adenome colloïde atypique), thyroïdite nodulaire, kyste complexe, métastase cervicale rare.',
    conduite_tenir: 'Cytoponction à l\'aiguille fine (FNA) sous échographie, classification Bethesda. Avis endocrinino-chirurgical si Bethesda III–VI. Ne pas opérer sans cytoponction sauf compression ou Bethesda V–VI. Si carcinome : thyroïdectomie adaptée à l\'âge (lobectomie vs totale selon taille et facteurs de risque). Éviter sur-investigation des micro-nodules < 5 mm sans facteurs de risque. Balance bénéfice/risque chirurgie chez le très âgé (comorbidités, qualité de vie, croissance lente des PTC).'
  }
];