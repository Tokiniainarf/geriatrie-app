// Interprétation de biologie — Cas cliniques commentés chez le sujet âgé
const INTERPRETATION_BIOLOGIE = [
  {
    id: 'ib-1',
    examen: 'NFS — anémie',
    cas_clinique: 'Femme de 89 ans, EHPAD, asthénie progressive depuis 6 semaines, vertiges à la station debout, pâleur. Pas de saignement visible. ATCD : insuffisance rénale chronique stade 3, HTA, polymédication (IEC, diurétique). Alimentation réduite, déglutition difficile pour les viandes.',
    resultats: 'Hémoglobine 8,2 g/dL (N 12–16), VGM 78 fL (microcytaire), CCMH normale, leucocytes 6,8 G/L, plaquettes 310 G/L. Réticulocytes 45 G/L (insuffisants pour l\'anémie). Ferritine 12 µg/L, transferrine saturée 8 %, créatinine 148 µmol/L, CRP 8 mg/L.',
    interpretation: 'Anémie normochrome microcytaire hypoproliférative, ferriprive très probable sur terrain inflammatoire léger et IRC (hémodilution, EPO diminuée contributives). Absence de leucocytose ou thrombopénie : peu évocateur de myélodysplasie en première intention.',
    diagnostic: 'Anémie ferriprive chez la personne âgée, probablement sur apports insuffisants et pertes chroniques digestives à explorer.',
    diagnostic_differentiel: 'Anémie inflammatoire (IRC, infection chronique), anémie de carence en vitamine B12/folates (VGM peut être normal en début), hémorragie occulte digestive, myélodysplasie, hémolyse.',
    conduite_tenir: 'Supplémentation martiale per os ou IV si intolérance/malabsorption. Recherche saignement : ECBU, coproculture, test immunologique selles, coloscopie si tolérée et pas de contre-indication. B12, folates, électrophorèse Hb. Adapter objectif transfusionnel (souvent 8–9 g/dL si comorbidités). Réévaluer médicaments (AINS, antiagrégants). Suivi NFS à 4–6 semaines.'
  },
  {
    id: 'ib-2',
    examen: 'NFS — leucocytose',
    cas_clinique: 'Homme de 84 ans, fièvre 38,8 °C, confusion aiguë (delirium), toux grasse. Vit en domicile avec aide. ATCD : BPCO, diabète type 2. Traitement : metformine, inhalateurs. Pas d\'antibiothérapie récente.',
    resultats: 'Leucocytes 18,4 G/L (N 4–10), polynucléaires neutrophiles 15,2 G/L (82 %), lymphocytes 1,1 G/L, monocytes 1,4 G/L. Hémoglobine 11,8 g/dL, plaquettes 420 G/L. CRP 185 mg/L, créatinine 112 µmol/L, glycémie 2,1 g/L.',
    interpretation: 'Leucocytose à prédominance neutrophile avec polynucléose absolue, CRP très élevée : syndrome inflammatoire/infectieux aigu majeur. Plaquettes réactives. Contexte clinique (fièvre, confusion, toux) oriente vers pneumopathie ou infection urinaire chez le sujet âgé.',
    diagnostic: 'Leucocytose réactionnelle sur infection aiguë probable (pneumonie communautaire ou infection urinaire compliquée), avec réponse inflammatoire marquée.',
    diagnostic_differentiel: 'Sepsis d\'autre foyer, leucémie aiguë (myélogramme si formule atypique ou adénopathies), corticothérapie récente, stress physiologique modéré, hémoconcentration.',
    conduite_tenir: 'Prélèvements avant antibiothérapie : hémocultures si fièvre, ECBU, radiographie thorax. Antibiothérapie probabiliste adaptée au terrain et localisation. Hydratation, correction hyperglycémie. Surveillance NFS/CRP à 48–72 h. Rechercher déclencheur delirium (infection, rétention, iatrogénie). Hospitalisation si critères de gravité (NEWS, hypoxie).'
  },
  {
    id: 'ib-3',
    examen: 'Ionogramme sanguin — hyponatrémie',
    cas_clinique: 'Femme de 92 ans, chutes répétées, somnolence diurne. Traitement : hydrochlorothiazide 25 mg/j depuis 10 ans, paroxétine, carbamazépine pour névralgie. Pas de vomissements récents. Poids stable.',
    resultats: 'Sodium 118 mmol/L (N 135–145), potassium 3,9 mmol/L, créatinine 98 µmol/L, urée 6,2 mmol/L, osmolalité plasmatique 252 mOsm/kg. Osmolalité urinaire 520 mOsm/kg, sodium urinaire 65 mmol/L. Glycémie normale.',
    interpretation: 'Hyponatrémie hypotonique vraie modérée à sévère. Urines concentrées avec natriurèse : syndrome de sécrétion inappropriée d\'ADH (SIADH) probable, favorisé par thiazidique, ISRS et antiépileptique. Pas de signe de déshydratation (urée normale).',
    diagnostic: 'Hyponatrémie chronique sur SIADH médicamenteuse (thiazidique ± ISRS/carbamazépine) chez la personne âgée.',
    diagnostic_differentiel: 'Hypovolémie vraie (diurétique avec déshydratation — ici urinaire inadaptée), insuffisance surrénale, hypothyroïdie, polydipsie, insuffisance cardiaque ou cirrhose (hypervolémie).',
    conduite_tenir: 'Arrêt ou réduction thiazidique en priorité ; réévaluer psychotropes avec médecin prescripteur. Restriction hydrique 800–1200 mL/j si SIADH confirmée. Correction lente (objectif < 8–10 mmol/L/24 h) pour éviter myélinolyse osmotique — eau libre ou NaCl 3 % si symptomatique sévère sous surveillance. Monitorage Na toutes les 6–12 h en phase aiguë. Rechercher autre cause SIADH (pneumonie, tumeur) si persistance.'
  },
  {
    id: 'ib-4',
    examen: 'Ionogramme sanguin — hyperkaliémie',
    cas_clinique: 'Homme de 86 ans, IRC stade 4 (DFG ~22 mL/min), prise de ramipril 10 mg, spironolactone 25 mg, furosémide 40 mg. Consultation pour fatigue ; ECG demandé avant chirurgie cataracte programmée.',
    resultats: 'Potassium 6,4 mmol/L (N 3,5–5,0), sodium 138 mmol/L, créatinine 285 µmol/L, urée 28 mmol/L. ECG : ondes T amples symétriques, élargissement QRS modéré. Hémoglobine 10,5 g/dL.',
    interpretation: 'Hyperkaliémie modérée à sévère avec signes électriques précocement visibles. Mécanismes cumulés : insuffisance rénale, IEC, antagoniste minéralocorticoïde, possible hypoaldostéronisme du sujet âgé et diurétique de l\'anse (hypovolémie relative).',
    diagnostic: 'Hyperkaliémie iatrogène et rénale sur polymédication (IEC + spironolactone) chez patient IRC.',
    diagnostic_differentiel: 'Hémolyse sur prélèvement (à répéter), acidose métabolique, rhabdomyolyse, addison, surcharge en K+ (suppléments, substituts de sel).',
    conduite_tenir: 'Urgence relative : arrêt temporaire ramipril et spironolactone, ECG continu. Traitement : gluconate de calcium IV si troubles ECG, insuline-glucose, bêta-2 agoniste nébulisé, résines échangeuses ou patiromer selon disponibilité ; hémodialyse si réfractaire ou oligoanurie. Réintroduction médicaments à dose réduite ou alternatives après stabilisation. Bilan aldostérone/rénine si récidives.'
  },
  {
    id: 'ib-5',
    examen: 'Bilan rénal — insuffisance rénale aiguë (IRA)',
    cas_clinique: 'Femme de 88 ans, oligurie depuis 48 h, confusion. Hospitalisée pour gastro-entérite avec vomissements ; reçoit ibuprofène et métoclopramide. ATCD : HTA, diabète, IRC stade 2 baseline inconnue. PA 95/55 mmHg à l\'admission.',
    resultats: 'Créatinine 420 µmol/L (baseline documentée 3 mois avant : 105 µmol/L), urée 38 mmol/L, DFG estimé 9 mL/min. Ionogramme : Na 134, K 5,6 mmol/L. ECBU : leucocyturie modérée. Pas de myoglobinurie.',
    interpretation: 'IRA fonctionnelle puis possiblement organique : hypovolémie (gastro-entérite) aggravée par AINS (hémodynamique rénale + néphrotoxicité). Créatinine multipliée par 4 en 48 h : critères KDIGO IRA stade 3. Hyperkaliémie associée.',
    diagnostic: 'Insuffisance rénale aiguë sur hypovolémie et néphrotoxicité par AINS chez sujet âgé à fonction rénale limite.',
    diagnostic_differentiel: 'Néphrite interstitielle aiguë (médicaments), obstruction (sonde si rétention), glomérulonéphrite, sepsis, cardiorenal syndrome.',
    conduite_tenir: 'Arrêt immédiat AINS et tout néphrotoxique. Réhydratation IV prudent (balance hydrique, échographie vésicale). Surveillance diurèse, K+, créatinine quotidienne. Éviter produits de contraste. Adapter doses médicaments à DFG. Dialyse si indication (hyperK réfractaire, OAP, urémie symptomatique). Prévention : éviter AINS chez le très âgé, hydratation lors d\'épisodes digestifs.'
  },
  {
    id: 'ib-6',
    examen: 'Bilan hépatique — cytolyse',
    cas_clinique: 'Homme de 81 ans, asthénie, ictère discret conjonctival. ATCD : diabète, dyslipidémie. Nouveau traitement par atorvastatine 40 mg et amoxicilline-clavulanate il y a 3 semaines pour sinusite. Pas d\'alcoolisme connu.',
    resultats: 'ASAT 680 UI/L (N < 40), ALAT 520 UI/L, GGT 210 UI/L, PAL 145 UI/L, bilirubine totale 45 µmol/L (conjugée prédominante). TP 72 %, INR 1,25. Albumine 36 g/L. Créatinine normale.',
    interpretation: 'Syndrome cytolytique hépatique marqué avec cholestase modérée et insuffisance hépatocellulaire légère (TP abaissé). Chronologie compatible avec médicament (statine ou amoxicilline-acide clavulanique — classique pour cette association).',
    diagnostic: 'Hépatite médicamenteuse probable (atorvastatine et/ou amoxicilline-acide clavulanique).',
    diagnostic_differentiel: 'Hépatite virale aiguë (sérologies A, B, C, EBV, CMV), ischémie hépatique, obstruction biliaire, hépatite alcoolique, stéatose avec steato-hépatite.',
    conduite_tenir: 'Arrêt immédiat des médicaments suspects. Hospitalisation si TP < 50 %, encéphalopathie ou bilirubine très élevée. Surveillance bilan hépatique tous les 2–3 jours jusqu\'à résolution. Pas de réintroduction statine sans avis ; alternative lipidique. Sérologies virales. Échographie abdomen si cholestase persistante. Contacter centre régional pharmacovigilance.'
  },
  {
    id: 'ib-7',
    examen: 'Bilan thyroïdien — hypothyroïdie',
    cas_clinique: 'Femme de 85 ans, fatigue, constipation, peau sèche, ralentissement psychomoteur évoquant une dépression. MMS 22/30. Pas de goitre palpable. Traitement : amiodarone depuis 2 ans pour FA.',
    resultats: 'TSH 28 mUI/L (N 0,4–4,0), T4 libre 8 pmol/L (N 12–22), T3 libre basse. Anticorps anti-TPO positifs faiblement. Cholestérol total 2,4 g/L.',
    interpretation: 'Hypothyroïdie primaire franche (TSH élevée, T4L basse). Contexte amiodarone et auto-immunité possible (Hashimoto). Manifestations gériatriques atypiques : confusion, chutes, anémie, hypercholestérolémie.',
    diagnostic: 'Hypothyroïdie primaire, probablement sur thyroidite d\'Hashimoto aggravée ou induite par l\'amiodarone.',
    diagnostic_differentiel: 'Syndrome du sujet âgé euthyroïen (TSH modérément élevée avec T4L normale), dépression, myxœdème coma (si sévère), hypothyroïdie centrale (rare).',
    conduite_tenir: 'Lévothyroxine per os, dose de départ basse (25–50 µg/j) chez le très âgé avec cardiopathie ; titration lente tous les 6–8 semaines selon TSH. Réévaluation amiodarone avec cardiologue. TSH cible souvent 2–4 mUI/L ou plage haute acceptable si > 80 ans fragile. Surveiller FA et os. Ne pas attribuer tous les symptômes à la thyroïde sans réévaluation cognitive.'
  },
  {
    id: 'ib-8',
    examen: 'Glycémie — hyperglycémie',
    cas_clinique: 'Homme de 79 ans, polyurie et soif depuis 5 jours, confusion intermittente. ATCD : diabète type 2 sous metformine seule. Infection urinaire traitée par fosfomycine. Alimentation erratique en EHPAD temporaire.',
    resultats: 'Glycémie à jeun 3,8 g/L (68 mmol/L), glycémie capillaire à l\'admission 4,2 g/L. HbA1c 11,2 %. Cétonurie négative, pH artériel 7,38, bicarbonates 22 mmol/L. Créatinine 165 µmol/L, Na 132 mmol/L.',
    interpretation: 'Hyperglycémie sévère sans acidocétose franche (état hyperglycémique hyperosmolaire possible si osmolarité élevée et déshydratation). IRC limite la metformine ; infection urinaire déclenchante fréquente chez le sujet âgé.',
    diagnostic: 'Décompensation hyperglycémique sévère du diabète type 2, probable état hyperosmolaire ou simple hyperglycémie majeure sur infection et observance.',
    diagnostic_differentiel: 'Acidocétose euglycémique (iSGLT2), diabète type 1 inaugural rare, stress hyperglycémique transitoire, corticothérapie.',
    conduite_tenir: 'Hospitalisation : perfusion NaCl 0,9 %, insuline IV ou SC selon protocole, correction electrolytes (K+). Arrêt metformine si IRC/déshydratation. Traiter infection. Insulinothérapie au long cours souvent nécessaire. Éducation aide-soignants. Prévention récidive : plan sick-day, revue iatrogénie (corticoïdes, diurétiques).'
  },
  {
    id: 'ib-9',
    examen: 'Coagulation — INR élevé',
    cas_clinique: 'Femme de 87 ans sous warfarine pour FA et prothèse mécanique aortique. INR cible 2,5–3,5. Consultation après 10 jours d\'amoxicilline pour bronchite. Gingivorragies, equimoses sur les avant-bras.',
    resultats: 'INR 6,8 (cible thérapeutique 2,5–3,5), TP 9 %. Plaquettes 198 G/L, fibrinogène normal. Hémoglobine 10,8 g/dL stable vs baseline.',
    interpretation: 'Surdosage majeur en antivitamine K, interaction médicamenteuse fréquente avec antibiotiques (flore intestinale, CYP). Risque hémorragique élevé malgré absence de saignement majeur actuel.',
    diagnostic: 'Surdosage en warfarine avec INR supratherapeutique, probablement favorisé par amoxicilline.',
    diagnostic_differentiel: 'Malnutrition (vitamine K basse), insuffisance hépatique, erreur de dose, ingestion variable de vitamine K alimentaire, autre interaction (antiépileptiques, amiodarone).',
    conduite_tenir: 'Selon protocole : arrêt warfarine 1–2 doses, vitamine K orale faible dose (1–2,5 mg) si INR 5–9 sans saignement ; dose plus élevée si saignement actif. INR contrôle à 24–48 h. Reprise warfarine à dose réduite ; éviter même antibiotique si alternative. Carte anticoagulant à jour. Discussion AVK vs DOAC selon valve (mécanique = AVK obligatoire).'
  },
  {
    id: 'ib-10',
    examen: 'Marqueur inflammatoire — CRP élevée',
    cas_clinique: 'Homme de 90 ans, refus alimentaire, somnolence, pas de fièvre à la tympanale. EHPAD. ATCD : démence modérée, incontinence, sonde urinaire à demeure depuis 8 mois.',
    resultats: 'CRP 142 mg/L (N < 5), leucocytes 11,2 G/L, créatinine 128 µmol/L. Procalcitonine 0,8 ng/mL (modérément élevée). Hémoglobine 11,2 g/dL. Température 37,4 °C.',
    interpretation: 'Inflammation biologique marquée sans fièvre franche : fréquent chez le très âgé (réponse thermique blanchie). Sonde urinaire : infection urinaire à pathogène faiblement virulent ou colonisation à distinguer ; CRP élevée oriente vers infection active plutôt que simple colonisation.',
    diagnostic: 'Syndrome inflammatoire aigu évoquant infection (urinaire sur sonde ou autre foyer occulte : pneumonie microaspiration, peau).',
    diagnostic_differentiel: 'Nécrose tissulaire (escarre), thrombose veineuse, tumeur avec réaction, post-chirurgical récent, vascularite.',
    conduite_tenir: 'Examen complet : poumons, peau, articulations, sonde urinaire (ECBU, culture). Antibiothérapie probabiliste si clinique compatible et fragilité (délai court). Réévaluer nécessité sonde à demeure. Hydratation, nutrition. CRP de contrôle à 48–72 h. Objectifs de soins adaptés si fin de vie.'
  },
  {
    id: 'ib-11',
    examen: 'Marqueurs cardiaques — troponine élevée',
    cas_clinique: 'Femme de 83 ans, chute avec syncope, pas de douleur thoracique rapportée (aphasie partielle). FA rapide à l\'ECG. PA instable transitoire. ATCD : HTA, IC avec FEVG 40 %.',
    resultats: 'Troponine I ultrasensible pic à 180 ng/L (99e percentile local 45 ng/L), répétée à 3 h : 210 ng/L (hausse > 20 %). BNP 2400 pg/mL. Créatinine 155 µmol/L. ECG : FA 140/min, pas de sus-ST, onde T négatives V4–V6 anciennes ?',
    interpretation: 'Élévation troponine avec dynamique : lésion myocardique aiguë ou chronicité aggravée. Chez le sujet âgé : SCA type 2 (déséquilibre offre/demande) post-syncope, FA rapide, IC décompensée ; infarctus type 1 possible sans douleur typique.',
    diagnostic: 'Syndrome coronarien aigu probable type 2 ou infarctus sans douleur sur cardiopathie structurelle et FA.',
    diagnostic_differentiel: 'Myocardite, embolie pulmonaire avec cor pulmonale aigu, insuffisance rénale (élimination troponine), rhabdomyolyse, procédure cardiaque récente.',
    conduite_tenir: 'Hospitalisation cardiologique : ECG série, écho cardiaque, coronarographie selon stratification (GRACE, hémodynamique). Traitement FA (contrôle fréquence), IC. Antiagrégation/anticoagulation balance FA + SCA. Ne pas attribuer uniquement à l\'IRC sans courbe dynamique. Réadaptation et prévention chutes.'
  },
  {
    id: 'ib-12',
    examen: 'Marqueurs cardiaques — BNP élevé',
    cas_clinique: 'Homme de 88 ans, dyspnée progressive NYHA III, orthopnée, œdèmes des MI. Poids + 5 kg. Traitement : furosémide 40 mg, bisoprolol 2,5 mg. FA permanente.',
    resultats: 'NT-proBNP 8500 pg/mL (seuils âge-dépendants : très élevé). Troponine négative. Créatinine 178 µmol/L, eGFR 32 mL/min. Na 131 mmol/L. Radiographie thorax : cardiomégalie, redistribution vasculaire.',
    interpretation: 'NT-proBNP très élevé : forte probabilité d\'insuffisance cardiaque. Valeur augmentée par l\'âge, FA et IRC ; seuils diagnostiques plus hauts chez > 75 ans. Association hyponatrémie et surcharge volémique cohérente.',
    diagnostic: 'Insuffisance cardiaque décompensée (probable HFmrEF ou HFrEF) avec congestion systémique et pulmonaire.',
    diagnostic_differentiel: 'EP, pneumopathie, cirrhose avec ascite, syndrome néphrotique, surcharge volémique iatrogène isolée, sepsis.',
    conduite_tenir: 'Échocardiographie urgente si non récente. Optimisation diurétiques (furosémide IV si besoin), restriction sodée. Traitement de fond IC selon FEVG (ARNI, iSGLT2, MRA si tolérés et DFG). Contrôle FA. Interpréter BNP en tendance plutôt qu\'un seul seuil absolu chez le très âgé. Éviter sur-diagnostic si sepsis associé.'
  },
  {
    id: 'ib-13',
    examen: 'Gaz du sang — acidose',
    cas_clinique: 'Femme de 86 ans, BPCO sévère, somnolence matinale, cyanose. Traitement domicile : oxygène 2 L/min nocturne, bronchodilatateurs. Infection respiratoire récente. Polymédication sédatifs pour insomnie.',
    resultats: 'pH 7,28 (N 7,35–7,45), PaCO2 68 mmHg, PaO2 52 mmHg sur O2 2 L (SpO2 86 %), bicarbonates 32 mmol/L. Lactate 1,2 mmol/L. Chlorure 98 mmol/L, Na 140 mmol/L.',
    interpretation: 'Acidose respiratoire chronique aggravée aiguë (pH bas, PaCO2 élevée, bicarbonates compensateurs élevés). Hypoxémie. Tableau typique de décompensation BPCO ± sédation/opiacés chez le sujet âgé.',
    diagnostic: 'Insuffisance respiratoire chronique hypercapnique décompensée sur BPCO, probablement sur infection et/ou sédation excessive.',
    diagnostic_differentiel: 'Acidose métabolique associée (lactate, intoxication), OAP, EP, pneumothorax, défaillance neuromusculaire.',
    conduite_tenir: 'Hospitalisation : O2 titré (cible SpO2 88–92 % en BPCO chronique, éviter hyperoxie qui aggrave hypercapnie). Ventilation non invasive si acidose et travail respiratoire. Antibiothérapie si infection. Arrêt sédatifs. Rééducation, vaccination. Plan de soins anticipés et discussion intubation selon volontés.'
  },
  {
    id: 'ib-14',
    examen: 'ECBU — leucocyturie',
    cas_clinique: 'Femme de 91 ans, agitation nocturne, incontinence fécale et urinaire augmentée. Démence avancée, communication limitée. Pas de fièvre. Pas de sonde urinaire.',
    resultats: 'ECBU : leucocytes > 500/mm³, nitrites positifs, bactéries nombreuses. Culture : Escherichia coli > 10⁵ UFC/mL, sensible à fosfomycine et nitrofurantoïne. Créatinine 102 µmol/L. CRP 45 mg/L.',
    interpretation: 'Leucocyturie et bactériurie significatives avec nitrites : infection urinaire bactérienne probable. Signes cliniques atypiques (agitation, déclin fonctionnel) classiques en gériatrie. CRP modérément élevée soutient l\'infection active.',
    diagnostic: 'Infection urinaire basse symptomatique (cystite) ou pyélonéphrite basse selon contexte, chez patiente cognitively impaired.',
    diagnostic_differentiel: 'Bactériurie asymptomatique (ne pas traiter systématiquement sauf grossesse ou chirurgie urologique), leucocyturie stérile (tuberculose, calcul), vaginite contaminant le prélèvement.',
    conduite_tenir: 'Antibiothérapie ciblée courte (fosfomycine dose unique ou nitrofurantoïne 5 j si fonction rénale OK) selon recommandations âgées. Hydratation, revue constipation (déclencheur). Ne pas traiter bactériurie asymptomatique découverte fortuitement. Réévaluation à 48 h clinique. Prévention : hygiène, éviter sonde si possible.'
  },
  {
    id: 'ib-15',
    examen: 'Hémostase — D-dimères élevés',
    cas_clinique: 'Homme de 82 ans, dyspnée d\'apparition récente à l\'effort, douleur mollet gauche modérée. Alitement 2 semaines après chirurgie prothétique de hanche. Pas d\'anticoagulation prophylactique au domicile (oubli de prescription).',
    resultats: 'D-dimères 4200 µg/L FEU (seuil âge ajusté souvent > âge × 10 en µg/L : 820 µg/L dépassé largement). SpO2 93 % air ambiant, FC 98/min. Troponine négative, BNP 450 pg/mL. Radiographie thorax non contributive.',
    interpretation: 'D-dimères très élevés : forte valeur prédictive négative si bas, mais spécificité faible chez le sugé âgé post-opératoire (inflammation, cicatrisation). Contexte clinique (dyspnée, mollet, immobilisation) impose d\'éliminer une EP malgré d\'autres causes possibles.',
    diagnostic: 'Suspicion clinique forte d\'embolie pulmonaire et/ou thrombose veineuse profonde post-orthopédique ; D-dimères non discriminants mais ne excluent pas.',
    diagnostic_differentiel: 'EP sans D-dimères toujours hauts (cancer, infection, IC, grossesse), pneumonie, OAP, désconditionnement, anémie.',
    conduite_tenir: 'Imagerie : angio-scanner thoracique ou écho cardiaque + Doppler MI selon probabilité (score Wells ou YEARS adapté). Anticoagulation thérapeutique si forte suspicion en attendant imagerie si délai. Prophylaxie post-orthopédique systématique à rappeler (durée 35 j hanche). Interpréter D-dimères avec seuil âge-ajusté sans sur-investigation si probabilité faible et score faible.'
  }
];