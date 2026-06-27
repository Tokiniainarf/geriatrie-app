// Scores cliniques avancés — Aide-mémoire rapide (gériatrie & médecine interne)
const SCORES_AVANCES = [
  {
    id: 'av-nihss',
    nom: 'NIHSS',
    domaine: 'Neurologie — AVC',
    description: 'National Institutes of Health Stroke Scale — gravité du déficit neurologique aigu.',
    calcul: '15 items pondérés : conscience, regard, champs visuels, paralysie faciale, motricité bras/jambe (gauche/droite), ataxie, sensibilité, langage, dysarthrie, extinction/négligence. Score total 0-42.',
    seuils: '0 = pas de déficit · 1-4 = AVC mineur · 5-15 = modéré · 16-20 = sévère · 21-42 = très sévère',
    interpretation: 'Plus le score est élevé, plus le déficit est important. Évolution entre deux mesures reflète l\'évolution clinique.',
    utilisation: 'Triage AVC, indication thrombolyse/thrombectomie, pronostic, suivi neurologique en unité neurovasculaire.'
  },
  {
    id: 'av-glasgow',
    nom: 'Glasgow (GCS)',
    domaine: 'Neurologie — Conscience',
    description: 'Glasgow Coma Scale — niveau de conscience après traumatisme ou atteinte neurologique.',
    calcul: 'Ouverture des yeux (1-4) + réponse verbale (1-5) + réponse motrice (1-6). Total 3-15.',
    seuils: '15 = normal · 13-14 = trouble léger · 9-12 = modéré · ≤8 = coma sévère (voie aérienne)',
    interpretation: 'Score ≤8 associé à risque d\'insuffisance ventilatoire ; réévaluer fréquemment (fluctuations fréquentes chez le sujet âgé).',
    utilisation: 'Surveillance post-chute, AVC, métabolique, infection sévère ; critère d\'intubation et d\'admission en réanimation.'
  },
  {
    id: 'av-qsofa',
    nom: 'qSOFA',
    domaine: 'Infectiologie — Sepsis',
    description: 'Quick SOFA — dépistage rapide de sepsis sévère au lit, sans biologie immédiate.',
    calcul: '1 point chacun : FR ≥22/min · PAS ≤100 mmHg · altération de la conscience (GCS <15). Total 0-3.',
    seuils: '≥2 = suspicion de sepsis sévère → bilan et SOFA complet',
    interpretation: 'Sensibilité modérée mais spécificité correcte pour mauvais pronostic ; ne remplace pas le diagnostic clinique.',
    utilisation: 'Triage aux urgences, EHPAD, post-opératoire ; déclenchement d\'antibiothérapie et hémocultures selon protocole local.'
  },
  {
    id: 'av-sofa',
    nom: 'SOFA',
    domaine: 'Réanimation — Défaillance d\'organe',
    description: 'Sequential Organ Failure Assessment — dysfonction organique aiguë (sepsis, choc, polytraumatisme).',
    calcul: '6 systèmes (0-4 chacun) : respiration (PaO2/FiO2), coagulation (plaquettes), foie (bilirubine), cardiovasculaire (PAM/vasopresseurs), neurologique (GCS), rénal (créatinine/diurèse). Total 0-24.',
    seuils: '0 = normal · 1-2 = dysfonction légère · 3-5 = modérée · ≥6 = sévère · Δ≥2 en 24-48 h = aggravation',
    interpretation: 'Corrélation avec mortalité ; chez le sujet âgé, seuils rénaux et neurologiques souvent déjà altérés à la baseline.',
    utilisation: 'Sepsis-3, critères d\'admission et de sortie de réanimation, essais cliniques, communication inter-équipes.'
  },
  {
    id: 'av-news2',
    nom: 'NEWS2',
    domaine: 'Urgences — Détresse physiologique',
    description: 'National Early Warning Score 2 — détection précoce de détérioration clinique.',
    calcul: 'FR, SpO2 (avec échelle O2), température, PAS, FC, niveau de conscience (AVPU), O2 supplémentaire. Pondération 0-3 par paramètre + bonus O2.',
    seuils: '0-4 = risque faible · 5-6 = risque modéré (réévaluer ≤1 h) · ≥7 = risque élevé (urgence médicale)',
    interpretation: 'Score unique ou tendance ; chez le sujet âgé, adapter le seuil SpO2 si DPOC chronique (échelle 2).',
    utilisation: 'Surveillance hospitalière, EHPAD, post-intervention ; protocoles d\'escalade (médecin, équipe rapide).'
  },
  {
    id: 'av-grace',
    nom: 'GRACE',
    domaine: 'Cardiologie — SCA',
    description: 'Global Registry of Acute Coronary Events — risque mortalité et complications à 6 mois après SCA.',
    calcul: 'Variables à l\'admission : âge, FC, PAS, créatinine, classe Killip, arrêt cardiaque, déviation ST, biomarqueurs cardiaques. Score calculé via table ou calculateur (typ. 1-372).',
    seuils: '<108 = très faible · 109-140 = faible · 141-166 = intermédiaire · >185 = très haut risque',
    interpretation: 'Guide la stratégie invasive précoce vs différée ; moins performant si choc ou insuffisance rénale sévère.',
    utilisation: 'Syndrome coronarien aigu (STEMI/NSTEMI), décision coronarographie, information pronostique au patient et à la famille.'
  },
  {
    id: 'av-wells',
    nom: 'Wells (EP)',
    domaine: 'Pneumologie — Embolie pulmonaire',
    description: 'Score de Wells — probabilité clinique d\'embolie pulmonaire avant imagerie.',
    calcul: 'Signes TVP (3) · EP plus probable qu\'autre diagnostic (3) · FC >100 (1,5) · immobilisation/chirurgie récente (1,5) · EP/antécédent (1,5) · hémoptysie (1) · cancer (1). Alternative : −3 si autre diagnostic plus probable.',
    seuils: '<4 = faible probabilité · 4-6 = intermédiaire · >6 = haute probabilité (versions à 2 ou 3 seuils selon protocole)',
    interpretation: 'Combiner avec D-dimères en probabilité faible/intermédiaire ; chez le sujet âgé, D-dimères souvent élevés sans EP.',
    utilisation: 'Tri aux urgences, éviter scanner inutile, indication anticoagulation en attente d\'imagerie.'
  },
  {
    id: 'av-geneva',
    nom: 'Geneva (EP)',
    domaine: 'Pneumologie — Embolie pulmonaire',
    description: 'Score de Genève (révisé) — probabilité d\'EP, alternative ou complément au score de Wells.',
    calcul: 'Âge >65 (1) · antécédent TVP/EP (3) · chirurgie/fracture récente (2) · cancer actif (2) · signes TVP (3) · hémoptysie (2) · FC 75-94 (3) ou ≥95 (5) · douleur thoracique (3) · diminution SpO2 (4).',
    seuils: '0-3 = faible · 4-10 = intermédiaire · ≥11 = haute probabilité',
    interpretation: 'Performance comparable à Wells ; utile si équipe habituée au score de Genève ou protocole local standardisé.',
    utilisation: 'Même indications que Wells ; choisir un seul score par filière pour homogénéité des décisions.'
  },
  {
    id: 'av-curb65',
    nom: 'CURB-65',
    domaine: 'Pneumologie — Pneumonie',
    description: 'Critères de gravité de la pneumonie communautaire — décision hospitalisation.',
    calcul: '1 point : Confusion (nouvelle) · Urée >7 mmol/L (BUN >19) · FR ≥30 · PA systolique <90 ou diastolique ≤60 · Âge ≥65. Total 0-5.',
    seuils: '0-1 = traitement ambulatoire possible · 2 = hospitalisation courte · ≥3 = hospitalisation, ≥4 = réanimation à discuter',
    interpretation: 'Simple et mémorisable ; mortalité ~3 % (0-1), ~15 % (3), ~40 % (5).',
    utilisation: 'Pneumonie aiguë chez l\'adulte, notamment sujet âgé fragile ; ne remplace pas le jugement clinique (hypoxie, comorbidités).'
  },
  {
    id: 'av-psi',
    nom: 'PSI / PORT',
    domaine: 'Pneumologie — Pneumonie',
    description: 'Pneumonia Severity Index — stratification fine du risque de mortalité à 30 jours.',
    calcul: 'Score dérivé de l\'âge, sexe, comorbidités (insuffisance cardiaque, cancer, etc.) et signes vitaux/examen (température, FC, PAS, conscience, laboratoire). Classes I-V.',
    seuils: 'Classe I-II : ambulatoire · III : courte hospitalisation · IV-V : hospitalisation prolongée / soins intensifs',
    interpretation: 'Plus précis que CURB-65 pour le pronostic ; calcul plus lourd (souvent via calculateur).',
    utilisation: 'Pneumonie communautaire, allocation ressources, information pronostique ; attention aux faux négatifs si dénutrition ou faible réaction inflammatoire.'
  },
  {
    id: 'av-cha2ds2vasc',
    nom: 'CHA₂DS₂-VASc',
    domaine: 'Cardiologie — Fibrillation atriale',
    description: 'Risque thromboembolique annuel en fibrillation atriale non valvulaire.',
    calcul: 'IC (1) · HTA (1) · âge ≥75 (2) · diabète (1) · AVC/AIT/thromboembolisme (2) · maladie vasculaire (1) · âge 65-74 (1) · sexe féminin (1). Total 0-9.',
    seuils: 'Homme 0 / Femme 1 = faible (souvent pas d\'anticoagulation) · ≥1 homme ou ≥2 femme = indication d\'anticoagulation à discuter · ≥2 = anticoagulation recommandée',
    interpretation: 'Le sexe féminin seul ne justifie pas l\'anticoagulation ; intégrer préférences du patient et HAS-BLED.',
    utilisation: 'FA chronique ou paroxystique, décision AVK/DOAC, suivi ambulatoire et EHPAD.'
  },
  {
    id: 'av-hasbled',
    nom: 'HAS-BLED',
    domaine: 'Cardiologie — Anticoagulation',
    description: 'Risque hémorragique majeur sous anticoagulation (surtout FA).',
    calcul: 'HTA non contrôlée (1) · fonction rénale/hépatique anormale (1 chacun) · AVC (1) · antécédent saignement (1) · INR labile (1) · âge >65 (1) · médicaments (AINS, antiagrégants) ou alcool (1 chacun). Total 0-9.',
    seuils: '0-2 = risque faible · 3 = modéré · ≥4 = risque élevé (surveillance renforcée, pas contre-indication absolue)',
    interpretation: 'Identifier facteurs modifiables (HTA, alcool, AINS) plutôt que refuser l\'anticoagulation.',
    utilisation: 'Couplé à CHA₂DS₂-VASc pour décision partagée ; suivi gériatrique polymédiqué.'
  },
  {
    id: 'av-killip',
    nom: 'KILLIP',
    domaine: 'Cardiologie — IDM / IC aiguë',
    description: 'Classification clinique de l\'insuffisance cardiaque aiguë post-infarctus.',
    calcul: 'Classe I : pas de crépitants · II : crépitants <50 % champ pulmonaire · III : OAP (crépitants étendus) · IV : choc cardiogénique.',
    seuils: 'I = mortalité ~6 % · II ~17 % · III ~30 % · IV ~60 % (ordres de grandeur historiques)',
    interpretation: 'Évaluation à l\'admission ; chez le sujet âgé, comorbidités BPCO et infection peuvent mimer classe II-III.',
    utilisation: 'SCA, tri réanimation, complément au score GRACE ; guide diurétiques et support hémodynamique.'
  },
  {
    id: 'av-nyha',
    nom: 'NYHA',
    domaine: 'Cardiologie — Insuffisance cardiaque',
    description: 'New York Heart Association — symptômes fonctionnels de l\'insuffisance cardiaque chronique.',
    calcul: 'Classe I : pas de limitation · II : limitation effort ordinaire · III : limitation effort léger · IV : symptômes au repos.',
    seuils: 'I à IV (classification ordinale, pas de score numérique)',
    interpretation: 'Corrélation imparfaite avec FEVG ; utile pour suivi longitudinal et indication ICD/resynchronisation avec autres critères.',
    utilisation: 'IC chronique, évaluation avant rééducation, adaptation traitement et projet de soins chez le sujet très âgé.'
  },
  {
    id: 'av-childpugh',
    nom: 'Child-Pugh',
    domaine: 'Hépatologie — Cirrhose',
    description: 'Sévérité de la cirrhose et risque opératoire / hémorragie variqueuse.',
    calcul: 'Bilirubine, albumine, INR, ascite, encéphalopathie — chaque critère 1-3 points. Total 5-15.',
    seuils: '5-6 = classe A (compensée) · 7-9 = classe B (décompensation modérée) · 10-15 = classe C (sévère)',
    interpretation: 'Mortalité péri-opératoire et pronostic à 1-2 ans corrélés à la classe ; encéphalopathie fréquente chez le sujet âgé déshydraté.',
    utilisation: 'Cirrhose, choix du traitement du carcinome hépatocellulaire, indication transplant (souvent complété par MELD).'
  },
  {
    id: 'av-meld',
    nom: 'MELD',
    domaine: 'Hépatologie — Priorité transplant',
    description: 'Model for End-Stage Liver Disease — gravité hépatique et priorisation greffe foie.',
    calcul: 'MELD = 9,57×ln(Cr) + 3,78×ln(bilirubine) + 11,2×ln(INR) + 6,43 (ajustements dialyse, sodium MELD-Na en certains pays).',
    seuils: '<10 = faible mortalité à 3 mois · 10-19 = modéré · 20-29 = élevé · ≥30 = très élevé (souvent >40 = critique)',
    interpretation: 'Recalculer à chaque décompensation ; créatinine sous-estimée si sarcopénie / faible masse musculaire chez le sujet âgé.',
    utilisation: 'Liste d\'attente transplant, pronostic courte durée, décisions thérapeutiques limitées en soins palliatifs hépatiques.'
  },
  {
    id: 'av-apache',
    nom: 'APACHE II',
    domaine: 'Réanimation — Gravité initiale',
    description: 'Acute Physiology and Chronic Health Evaluation — mortalité prédite en réanimation (score historique).',
    calcul: '12 variables physiologiques (pire valeur 24 h) + âge + état de santé chronique + diagnostic. Score typique 0-71.',
    seuils: 'Interprétation via courbes mortalité prédite (ex. >25 = risque élevé) ; seuils absolus dépendent de la population',
    interpretation: 'Moins utilisé seul aujourd\'hui ; utile recherche et comparaison de cohortes ; APACHE IV plus récent.',
    utilisation: 'Admission USI, audit qualité, essais ; chez le sujet âgé, pondération âge intégrée mais comorbidités gériatriques parfois sous-représentées.'
  },
  {
    id: 'av-saps',
    nom: 'SAPS II / SAPS 3',
    domaine: 'Réanimation — Pronostic',
    description: 'Simplified Acute Physiology Score — gravité et mortalité prédite en soins intensifs.',
    calcul: 'SAPS II : 17 variables + âge + type admission. SAPS 3 : variables admission + contexte (chirurgie, infection, etc.), score 0-217.',
    seuils: 'Mortalité prédite via formules officielles ; SAPS 3 calibré sur populations récentes',
    interpretation: 'SAPS 3 souvent préféré en Europe ; ne doit pas seul dicter l\'arrêt des soins.',
    utilisation: 'USI, indicateurs de performance, information famille avec prudence éthique chez le sujet très âgé.'
  },
  {
    id: 'av-braden-mod',
    nom: 'Braden modifié',
    domaine: 'Gériatrie — Risque d\'escarre',
    description: 'Échelle de Braden adaptée au sujet âgé immobilisé (perception, humidité, friction).',
    calcul: '6 sous-échelles (1-4 ou 1-3) : perception sensorielle, humidité, activité, mobilité, nutrition, friction/cisaillement. Total 6-23.',
    seuils: '≤9 = risque très élevé · 10-12 = élevé · 13-14 = modéré · 15-18 = faible · 19-23 = pas de risque significatif',
    interpretation: 'Chez le sujet âgé : baisser le seuil d\'alerte si dénutrition, incontinence, anticoagulants, oedèmes.',
    utilisation: 'EHPAD, USI, post-orthopédie ; plan de prévention (changes de position, surfaces, nutrition, soins de peau).'
  },
  {
    id: 'av-norton-mod',
    nom: 'Norton modifié',
    domaine: 'Gériatrie — Risque d\'escarre',
    description: 'Échelle de Norton révisée — alternative rapide au Braden en institution.',
    calcul: '5 dimensions (0-4) : état physique, état mental, activité, mobilité, incontinence. Total 5-20.',
    seuils: '<14 = risque élevé · 14-17 = risque modéré · >17 = risque faible (seuils variables selon versions)',
    interpretation: 'Plus rapide que Braden ; moins sensible aux nuances nutritionnelles — compléter par évaluation clinique.',
    utilisation: 'Dépistage quotidien en EHPAD, équipes soignantes ; réévaluation après chaque changement d\'état (fièvre, chute, hospitalisation).'
  }
];