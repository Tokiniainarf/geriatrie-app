// ═══════════════════════════════════════════════════════════════
//  Sujets EVC Gériatrie — Années 2004, 2005, 2006 (épreuves complètes)
//  Format: consigne, temps, barème, sujet complet, corrigé point par point
// ═══════════════════════════════════════════════════════════════
const SUJETS_EVC_2004_2006 = [
  {
    id: 'evc-2004-alzheimer-denutrition',
    annee: 2004,
    session: 'Printemps',
    duree: '30 minutes (15 min préparation + 15 min oral)',
    bareme: '20 points total',
    consigne: 'Vous êtes médecin coordonnateur en EHPAD secteur Alzheimer. Mme Rousseau présente une aggravation cognitive et une dénutrition sévère. Rédigez votre évaluation gérontologique, le lien Alzheimer–nutrition et un plan de soins coordonné.',
    sujet: `Mme ROUSSEAU Marguerite, 79 ans, est résidente en EHPAD secteur « unité Alzheimer » depuis 14 mois, adressée par le médecin traitant pour « oublis répétés, errance, refus alimentaire ».

ANTÉCÉDENTS MÉDICAUX :
- Maladie d'Alzheimer probable (diagnostic clinique il y a 3 ans, pas de bilan biomarqueur)
- HTA essentielle bien contrôlée
- Fibrillation atriale paroxystique (2 épisodes documentés, pas d'anticoagulation permanente — refus initial du conjoint décédé)
- Ostéoporose connue (fracture Colles droite il y a 8 ans)
- Hypothyroïdie substituée depuis 15 ans
- Pas d'ATCD digestif majeur ; appendicectomie jeune adulte
- Surdité presbyacousie modérée (appareillage partiel, souvent oublié)

TRAITEMENT ACTUEL :
- Donépezil 10 mg le soir (depuis 2 ans)
- Lévothyroxine 75 µg/j
- Amlodipine 5 mg/j
- Mirtazapine 15 mg au coucher (prescrite il y a 6 mois pour « anorexie et insomnie »)
- Halopéridol 0,5 mg matin + 1 mg soir (troubles comportement depuis 4 mois : agressivité envers autres résidents)
- Carbonate de calcium 500 mg x2/j
- Cholécalciférol 800 UI/j
- Dafalgan 1 g x3/j si douleur
- Laxatif osmotique (macrogol) à la demande

HISTOIRE RÉCENTE (3 derniers mois) :
- Perte d'autonomie alimentaire : nécessite aide totale au repas depuis 6 semaines
- Régurgitations occasionnelles sur aliments « mal mâchés »
- Épisodes de confusion nocturne (2–3/semaine), résolus le matin
- Poids EHPAD : 52 kg à l'admission (il y a 14 mois : 58 kg) ; 46 kg aujourd'hui
- Hydratation : refuse souvent le verre d'eau ; sodas acceptés de façon erratique
- Chute sans fracture il y a 3 semaines (salle de jour, chaussures inadaptées)
- Pas de fièvre récente ; toux sèche intermittente

CONTEXTE FAMILIAL :
- Veuve depuis 1 an (décès conjoint cancer) ; fille unique 54 ans, visite 2x/semaine, culpabilité et conflit avec équipe sur halopéridol
- Pas de directives anticipées rédigées ; personne de confiance non désignée officiellement
- Fille demande « ne pas laisser mourir de faim » et envisage gastrostomie si nécessaire

ÉVALUATION À J0 (consultation coordonnateur + diététicienne) :
- Poids 46 kg, taille 1,62 m → IMC 17,5 kg/m²
- Perte documentée : −12 kg en 14 mois (−21 % par rapport au poids d'admission EHPAD)
- PA 118/68 mmHg ; FC 88 bpm irrégulier ; T° 36,7 °C ; SpO2 96 % air ambiant
- Muqueuses sèches, pli cutané > 2 s, élastique cutanée diminuée
- ADL (Katz) : 1/6 — aide totale pour tous items sauf transferts partiels avec 2 aides
- IADL : 0/8
- MMS : 9/30 (désorientation temps/lieu, mémoire épisodique abolie, langage pauvre)
- Échelle FAST : stade 6d (dépendance toilette, incontinence urinaire fréquente)
- GDS-15 : 11/15 (symptômes dépressifs majeurs)
- NPI (Neuropsychiatric Inventory) : score total 38 — agitation, agressivité, apathie dominants
- MNA complet : 11/30 (dénutrition avérée)
- MUST : 3 (risque nutritionnel élevé)
- EAT-10 (dépistage dysphagie) : 22/40 (dysphagie probable)
- Test volume–viscosité (IDE) : fausses routes sur liquide fin, nectar toléré avec lenteur
- Braden : 14/23 (risque modéré d'escarre — sacrum rougeur persistante)
- Force préhension : 11 kg (sarcopénie)
- EVA douleur : 2/10 au repos ; grimaces à la mobilisation hanche droite (pas de chute récente)

BIOLOGIE (prise à jeun, hier) :
- NFS : Hb 10,6 g/dL, VGM 90 fL, GB 6 800/mm³, plaquettes 245 000/mm³
- Ferritine 22 ng/mL, CST 12 % (carence martiale associée)
- Créatinine 78 µmol/L → DFG (CKD-EPI) 68 mL/min/1,73 m²
- Ionogramme : Na 134 mmol/L, K 4,2 mmol/L
- Glycémie à jeun 0,88 g/L
- Albumine 24 g/L ; préalbumine 0,09 g/L
- CRP 8 mg/L
- TSH 3,8 mUI/L ; T4L 12 pmol/L (normale)
- Vitamine B12 : 198 pg/mL (limite basse)
- Folates érythrocytaires normaux
- 25-OH vitamine D : 6 ng/mL
- ASAT/ALAT, PAL, GGT normales
- Protéinurie bandelette : trace
- INR non demandé (pas d'anticoagulant)

IMAGERIE ET EXAMENS :
- Rx thorax (mois dernier) : cardiomégalie légère, pas d'infiltrat
- TDM cérébral (il y a 2 ans, avant admission) : atrophie cortico-sous-corticale diffuse, hippocampes amincis, leucoaraïose modérée, pas d'hydrocéphalie, pas d'infarctus récent
- IRM non réalisée (claustrophobie et agitation antérieure)
- Densitométrie (J5 EHPAD) : T-score col fémoral −2,9 ; rachis L1–L4 −2,6
- Échographie thyroïdienne (il y a 5 ans) : goitre multinodulaire stable
- Fibroscopie : non indiquée en première intention si dysphagie oropharyngée probable
- ECG : fibrillation atriale, FC 85, pas de signe d'ischémie aiguë

OBSERVATION REPAS (3 jours, carnet IDE) :
- Ingesta moyenne 850 kcal/j et 32 g protéines/j (estimation pondérée)
- Refus protéines animales fréquents ; accepte purées sucrées
- Temps repas > 45 min avec incitations répétées

QUESTIONS :
1. Caractérisez la maladie d'Alzheimer de Mme Rousseau (stade, complications comportementales) et expliquez les mécanismes liant démence et dénutrition. (4 points)
2. Évaluez la dénutrition (critères HAS, scores) et proposez un bilan complémentaire ciblé (dysphagie, causes réversibles). (4 points)
3. Analysez l'iatrogénie médicamenteuse (halopéridol, mirtazapine, donépezil) et les interactions avec l'état nutritionnel et comportemental. (4 points)
4. Proposez un plan nutritionnel et comportemental pluridisciplinaire adapté au secteur Alzheimer (textures, horaires, environnement, équipe). (4 points)
5. La fille évoque une gastrostomie : quels critères, alternatives et démarche éthique proposez-vous ? (4 points)`,

    corrigé: `1. ALZHEIMER — STADE ET LIEN AVEC DÉNUTRITION (4 points) :
- Stade : démence Alzheimer modérée–sévère (MMS 9, FAST 6d) : perte autonomie ADL, incontinence, besoin assistance alimentation, troubles comportement majeurs (NPI élevé).
- Complications : syndrome psycho-comportemental (agitation, agressivité), apathie alternée, errance passée, dépression (GDS 11).
- Mécanismes nutritionnels : oubli repas et satiété, dysexécution (ne termine pas), dysphagie neurogène (EAT-10 ↑, fausses routes), hyperoralexie/absence possible ici plutôt refus ; dépression post-veuvage ; effets médicamenteux (halopéridol extrapyramidal, sédation) ; douleur non verbalisée ; environnement bruyant secteur Alzheimer.
- Sarcopénie et fragilité : cercle vicieux immobilisation–perte masse maigre.

2. DÉNUTRITION — CARACTÉRISATION ET BILAN (4 points) :
- Dénutrition protéino-énergétique sévère : IMC 17,5, perte > 10 % sur période prolongée, albumine 24 g/L, MNA 11/30, apports < 50 % besoins estimés (~1 600 kcal, 60 g protéines théoriques).
- Bilan complémentaire : évaluation orthophoniste complète (vidéofluoroscopie si doute) ; dentisterie (prothèse, caries) ; recherche infection urinaire (bandelette, ECBU si fièvre) ; B12 à corriger (198) ; fer si ferritine basse après stabilisation ; électrophorèse si doute myélome (Hb basse) ; pesée 2x/semaine, circonférence bras ; carnet alimentaire 7 jours.
- Pas de TDM abdominal en routine ; TSH déjà contrôlée.

3. IATROGÉNIE MÉDICAMENTEUSE (4 points) :
- Halopéridol : inapproprié au long cours (Beers) — parkinsonisme, dysphagie, sédation, QTc, aggravation cognitive ; lien avec refus alimentaire et rigidité ; à réduire/arrêter avec alternative non pharmacologique d'abord.
- Mirtazapine : paradoxe — orexigène possible mais sédation et prise de poids théorique non observée ici ; anticholinergique modéré ; maintenir temporairement si sevrage neuroleptique.
- Donépezil : bénéfice marginal stade FAST 6 ; risque bradycardie, nausées, troubles digestifs ; discussion arrêt si dysphagie sévère et absence de bénéfice documenté (pas d'amélioration 14 mois).
- Amlodipine : oedèmes rares ; pas de polypathologie extrême mais 6 molécules + psychotropes = vigilance.
- FA sans anticoagulation : risque thromboembolique vs chutes — à réévaluer avec fille (CHADS-VASc).
- Carence martiale : fer oral si tolérance digestive ; surveiller constipation.

4. PLAN NUTRITIONNEL ET COMPORTEMENTAL (4 points) :
- Objectifs : 30 kcal/kg/j (~1 400 kcal réalistes progressivement), protéines 1,2–1,5 g/kg/j (55–70 g) par textures mixées–hachées–purées selon dysphagie ; liquides épaissis nectar.
- 5–6 prises, ambiance calme, même soignant « référent repas » ; contraste visuel assiette ; musique douce testée.
- Enrichissement systématique (beurre, crème, huile olive) ; supplémentation orale HP-HC 200 mL x2/j entre repas si acceptée.
- Équipe : IDE alimentation, diététicien, orthophoniste, kiné déglutition, psychomotricien ; protocole bientraitance SPC (erreur thérapeutique, stimulation, activités).
- Escarre : repositionnement, nutrition = pilier.
- Dépression : entretien fille, activités adaptées, revoir mirtazapine dose ; pas d'ISRS sans suivi si dysphagie.
- Chutes : chaussures, lunettes, lunette auditive rappelée.

5. GASTROSTOMIE ET ÉTHIQUE (4 points) :
- Indications HAS : nutrition entérale si déglutition unsafe persistante ET espérance de vie > quelques semaines ET bénéfice qualité de vie — ici Alzheimer FAST 6d : gastrostomie souvent non recommandée (pas d'amélioration survie/qualité, complications) sauf décision collégiale exceptionnelle.
- Alternatives : SNG courte durée essai 2–4 semaines si aiguë réversible (infection, delirium à écarter) ; hydratation subcutanée si soins de confort en fin de vie ultérieure.
- Démarche : entretien fille (attentes, deuil anticipé), équipe soignante, avis gériatre ; documenter refus/acceptation ; proposer directives anticipées et personne de confiance.
- Objectif proportionné : confort, plaisir alimentaire oral maximal, pas d'obstination déraisonnable (cadre Leonetti anticipé 2005).`,

    juryTips: '2004 = Alzheimer + dénutrition : citer FAST et MMS, pas seulement « stade sévère ». Dysphagie (EAT-10, textures) est attendue avant gastrostomie. Halopéridol en EHPAD = piège jury — toujours proposer réduction et bientraitance. Donépezil stade 6 : discussion arrêt. MNA < 12 = sévère. Lien veuvage + GDS. Gastrostomie Alzheimer avancé : argumenter HAS, pas dogme. B12 limite basse à traiter. FA sans AVK : citer score embolique.'
  },

  {
    id: 'evc-2005-chute-prevention',
    annee: 2005,
    session: 'Automne',
    duree: '30 minutes (15 min préparation + 15 min oral)',
    bareme: '20 points total',
    consigne: 'Vous êtes médecin en unité de court séjour gériatrique. M. Girard est admis après une chute avec traumatisme crânien léger. Rédigez l\'analyse étiologique, la stratification du risque et un programme de prévention primaire et secondaire.',
    sujet: `M. GIRARD Paul, 84 ans, est admis en USG (unité de soins gériatriques) à J3 après chute dans sa salle de bain à domicile.

ANTÉCÉDENTS MÉDICAUX :
- Parkinson léger (diagnostiqué il y a 4 ans, Hoehn & Yahr stade II)
- HTA, dyslipidémie
- Diabète type 2 équilibré (HbA1c habituelle 7,1 %)
- Hypertrophie bénigne prostate (résidu post-mictionnel 80 mL il y a 1 an)
- Glaucome chronique à angle ouvert
- Pas d'ATCD cardiaque symptomatique documenté
- Myopie forte corrigée

TRAITEMENT À DOMICILE :
- Lévodopa/benserazide 100/25 mg x3/j
- Rasagiline 1 mg/j
- Ramipril 5 mg/j
- Atorvastatine 20 mg/j
- Metformine 850 mg x2/j
- Tamsulosine 0,4 mg/j
- Timolol collyre 0,5 % x2/j
- Brimonidine collyre le soir
- Acétazolamide 250 mg x2/j (ajouté par ophtalmologue il y a 2 mois)
- Zopiclone 3,75 mg au coucher (prescrit par médecin généraliste depuis 1 an)
- Aspirine 100 mg/j

CIRCONSTANCES DE LA CHUTE :
- Vers 6h30, en sortant de la douche, malaise décrit : « tout a tourné », vision noire 10 secondes, chute assise contre paroi
- Pas de perte de connaissance initiale ; céphalées postérieures modérées
- Témoin : épouse (82 ans) présente dans l'appartement
- Pas de fracture ; traumatisme crânien occipital sans plaie ouverte
- SAMU : GCS 15, pas d'hémorragie intracrânienne au scanner

DEPUIS L'ADMISSION USG :
- Céphalées résiduelles EVA 3/10 ; nausées passagères J1
- Marche : petits pas, festination, blocages aux voltes
- Orthostatisme : PA 142/78 assis → 98/62 debout à 3 min, symptômes reproduits
- MMS : 26/30
- GDS-15 : 4/15
- Tinetti (avec aide) : 14/28
- Timed Up and Go : 18 secondes avec canne
- Test appui unipodal : < 3 secondes bilatéral
- Score de Morse (hospitalier) : 75 (risque élevé)
- Historique chutes : 2 chutes sans traumatisme majeur dans les 12 derniers mois

EXAMEN CARDIOVASCULAIRE :
- Auscultation : souffle systolique 2/6 foyer aortique
- ECG : rythme sinusal 68 bpm, HBAI gauche, pas d'arythmie
- Pas d'oedème des MI

BIOLOGIE (J2) :
- NFS : Hb 12,8 g/dL, GB 7 400/mm³, plaquettes 198 000/mm³
- Glycémie à jeun 1,38 g/L ; HbA1c 7,4 %
- Créatinine 102 µmol/L (DFG 62 mL/min/1,73 m²)
- Ionogramme : Na 138, K 4,3, Mg 0,65 mmol/L (limite basse)
- 25-OH vitamine D : 14 ng/mL
- Ca corrigé albumine 2,22 mmol/L
- TSH 2,4 mUI/L
- Albumine 36 g/L
- CRP 5 mg/L

IMAGERIE :
- Scanner cérébral sans injection (urgences) : pas d'hémorragie, pas de fracture ; atrophie cérébrale modérée ; leucoaraïose
- Rx bassin et fémurs : pas de fracture
- Échographie cardiaque (non faite) : à discuter selon syncope
- Holter ECG 24 h (programmé J4) : en attente

ENVIRONNEMENT DOMICILE :
- Appartement rez-de-chaussée, salle de bain baignoire avec rebord haut (pas de barre antidérapante)
- Éclairage faible couloir nuit
- Épouse gère les médicaments (pilulier hebdomadaire)
- Pas de téléassistance

QUESTIONS :
1. Classifiez cette chute (syncope, chute mécanique, mixte) et argumentez. Quels éléments orientent vers une hypotension orthostatique ? (4 points)
2. Listez les facteurs de risque intrinsèques et extrinsèques ; appliquez au moins deux outils de stratification (Morse, Tinetti, TUG). (4 points)
3. Quel bilan étiologique complémentaire proposez-vous (cardiovasculaire, neurologique, métabolique, iatrogénique) ? (4 points)
4. Élaborez un programme de prévention des chutes à la sortie : médicaments, rééducation, aménagement, éducation du couple. (5 points)
5. Quels critères de sortie, de suivi à 1 et 6 mois, et quand réadresser en urgence ? (3 points)`,

    corrigé: `1. CLASSIFICATION DE LA CHUTE (4 points) :
- Chute mixte : prodromes syncopaux (vision noire, rotation) + contexte mécanique (sortie douche, sol mouillé) ; hypotension orthostatique documentée (Δ PAS ≥ 20 mmHg, symptômes).
- Éléments orthostatiques : PA chute assis→debout, zopiclone (vasodilatation, nuit), acétazolamide (diurèse, acidose), déshydratation relative, Parkinson (dysautonomie), tamsulosine (alpha-bloquant), ramipril.
- TC léger sans complication scanner : surveillance clinique USG suffisante.
- Différentiel syncope : arythmie (Holter), sténose aortique (souffle à confirmer par écho), hypoglycémie (glycémie capillaire si malaise).

2. FACTEURS DE RISQUE ET OUTILS (4 points) :
- Intrinsèques : Parkinson (festination, blocages), âge, orthostatisme, hypomagnésémie, vitamine D basse, polyurie nocturne prostate, cognition relativement préservée mais TUG altéré, antécédents chutes.
- Extrinsèques : baignoire, sol mouillé, éclairage insuffisant, absence téléassistance.
- Morse 75 = risque élevé en hospitalisation ; Tinetti 14/28 = déficit équilibhe et marche ; TUG 18 s = risque chutes accru (seuil souvent > 13–14 s) ; historique 3 chutes/12 mois = prévention secondaire obligatoire.

3. BILAN COMPLÉMENTAIRE (4 points) :
- Cardiovasculaire : échocardiographie (souffle aortique, FEVG) ; Holter 24–72 h ; massage sinus carotidien si pas de sténose carotidienne connue (prudence) ; ECG allongé QT si zopiclone.
- Neurologique : Parkinson déjà connu — ajuster lévodopa si fluctuations ; pas d'IRM cérébrale systématique post-TC si GCS stable.
- Métabolique : magnésium à corriger ; vitamine D ; glycémie capillaire matin (hypoglycémie matinale rare metformine seule) ; Na/K.
- Iatrogénie : zopiclone (Beers — arrêt), acétazolamide + antihypertenseur + tamsulosine (triple risque orthostatique) ; revoir rasagiline interactions.
- Prostate : résidu post-mictionnel contrôle ; infection urinaire si pollakiurie.
- Vision : pression intraoculaire, champ visuel si chutes directionnelles.

4. PROGRAMME DE PRÉVENTION (5 points) :
- Médicaments : arrêt zopiclone (hygiène sommeil non pharmacologique) ; réévaluation acétazolamide avec ophtalmo (alternative si possible) ; ramipril dose ou horaire (prise soir → risque matin) ; tamsulosine maintenir si HBP symptomatique mais surveiller orthostatisme ; aspirine maintenir si indication.
- Rééducation : kiné Parkinson (BIG, équilibre, double tâche), kiné respiratoire si besoin ; ergothérapie ADL douche ; canne ou déambulateur adapté ; exercices appui unipodal sécurisés.
- Aménagement : barres douche, siège douche, tapis antidérapant, éclairage détecteur, suppression obstacles ; conversion douche italienne si budget.
- Éducation : lever progressif 3 temps ; hydratation journée ; téléassistance ; épouse ne porte pas seul le pilulier sans revue médicamenteuse.
- Magnésium oral + vitamine D chargement puis entretien.
- Diabète : pas d'hypoglycémiant majeur ; surveiller HbA1c.

5. SORTIE, SUIVI, ALERTES (3 points) :
- Sortie si : orthostatisme géré (PA stable protocole), TUG amélioration ou plan kiné domicile, aménagements planifiés, zopiclone arrêté, pas de signe neurologique focal post-TC.
- M1 : pas de nouvelle chute, PA domicile debout, TUG ; M6 : historique chutes, tolérance traitement, écho si souffle.
- Urgences : syncope avec trauma, céphalée brutale, déficit neurologique, fracture, GCS < 15.`,

    juryTips: '2005 chute + prévention : reproduire orthostatisme en consultation = points. Syncope vs chute mécanique : prodromes ici essentiels. Zopiclone + PA matinale douche = classique. Acétazolamide souvent oublié dans iatrogénie. Parkinson : nommer festination et H&Y II. Morse ET Tinetti/TUG obligatoires. Pas de fracture ne diminue pas gravité prognostic chutes. Écho pour souffle. Magnésium 0,65 à traiter. Téléassistance et ergonomie douche = extrinsèque facile.'
  },

  {
    id: 'evc-2006-confusion-polypharmacie',
    annee: 2006,
    session: 'Printemps',
    duree: '30 minutes (15 min préparation + 15 min oral)',
    bareme: '20 points total',
    consigne: 'Vous êtes médecin traitant appelé pour confusion aiguë chez une patiente polymédiquée vivant à domicile. Rédigez la démarche diagnostique du delirium, l\'analyse de la polypharmacie et un plan de déprescription sécurisé.',
    sujet: `Mme DURAND Claire, 87 ans, est vue en visite à domicile à la demande de sa fille pour « confusion, hallucinations, agitation » évoluant depuis 72 heures.

ANTÉCÉDENTS MÉDICAUX :
- Insuffisance cardiaque à fraction d'éjection préservée (HFpEF) diagnostiquée il y a 2 ans
- Fibrillation atriale permanente
- Arthrose polyarticulaire sévère (genoux, hanches) — mobilité réduite
- Reflux gastro-œsophagien
- Constipation chronique
- Pas de démence connue ; MMS il y a 6 mois chez le généraliste : 28/30
- Surdité modérée

TRAITEMENT (liste pharmacie + fille — 16 lignes actives) :
- Furosémide 40 mg matin
- Spironolactone 25 mg/j
- Bisoprolol 2,5 mg/j
- Rivaroxaban 20 mg/j
- Atorvastatine 20 mg/j
- Oméprazole 20 mg/j
- Paracétamol 1 g x4/j
- Tramadol LP 100 mg x2/j (depuis 3 mois, douleur genou)
- Pregabaline 75 mg matin + 150 mg soir
- Duloxétine 60 mg/j (douleur neuropathique associée)
- Lorazépam 1 mg x2/j + 2 mg au coucher (anxiété depuis 5 ans)
- Zolpidem 10 mg au coucher
- Trazodone 50 mg au coucher
- Lactulose 15 mL x2/j
- Bisacodyl suppositoire 2x/semaine
- Denosumab 60 mg SC tous les 6 mois (dernière injection il y a 4 mois)

CONTEXTE AIGU :
- Fièvre 38,1 °C depuis 48 h, dysurie, urine trouble (fille)
- Constipation : pas de selles depuis 5 jours malgré laxatifs
- Alimentation réduite ; prise médicamenteuse complexe (fille donne le pilulier, erreurs possibles)
- Chute sans fracture hier dans le salon (tapis)
- Pas de traumatisme crânien

EXAMEN À DOMICILE (médecin + IDE) :
- T° 38,3 °C ; PA 104/58 mmHg assise ; FC 102 bpm irrégulier ; FR 20/min ; SpO2 94 % air ambiant
- Poids 61 kg (habituel 64 kg)
- GCS 14 (E4 V4 M6) — fluctuation en 30 min (E4 V3 M6)
- CAM : positif (aiguë + fluctuation + inattention + pensée désorganisée/hallucinations visuelles)
- MMS : 19/30 (non interprétable seul en phase aiguë)
- Pas de déficit moteur focal ; cou raide absent
- Abdomen : distension, douleur hypogastrique, matité sus-pubienne
- Poumons : crépitants bases bilatéraux discrets
- Oedèmes chevilles grade 2
- Peau : xérose, ecchymoses membres supérieurs

BIOLOGIE (IDE prélèvement, résultats faxés J0) :
- NFS : Hb 11,8 g/dL, GB 14 200/mm³ (PNN 82 %), plaquettes 165 000/mm³
- Créatinine 156 µmol/L (habituelle 110) → DFG 32 mL/min/1,73 m²
- Urée 19 mmol/L
- Na 128 mmol/L, K 5,4 mmol/L, Cl 92 mmol/L
- Glycémie 1,22 g/L
- CRP 95 mg/L
- Albumine 31 g/L
- ProBNP 1 240 pg/mL
- ECBU : leucocytes +++, nitrites +, E. coli > 10^5 (antibiogramme en cours)
- Bandelette urinaire concordante

IMAGERIE :
- Rx thorax (cabinet partenaire, hier) : cardiomégalie, lignes Kerley B discrètes, pas de condensations francs
- Échographie vésicale (IDE mobile) : résidu post-mictionnel 350 mL, paroi trabéculée
- Scanner cérébral : non réalisé (pas d'indication si CAM + infection évidente et pas de traumatisme crânien sévère — à discuter si non amélioration)

TRAITEMENT DÉJÀ DÉBUTÉ PAR FILLE (automédication) :
- Ibuprofène 400 mg x2 depuis 2 jours « pour fièvre » (en plus du tramadol)

QUESTIONS :
1. Confirmez le diagnostic de delirium (CAM) et établissez la hiérarchisation des causes (infection, métabolique, iatrogène, rétention urinaire). (4 points)
2. Analysez la polypharmacie selon les critères d'inappropriété (Beers) : listez au moins 6 médicaments problématiques et leurs mécanismes de toxicité chez Mme Durand. (5 points)
3. Priorisez la prise en charge médicale des 48 premières heures (infection urinaire, IRA, hyponatrémie, rétention, constipation). (4 points)
4. Proposez un plan de déprescription structuré à moyen terme (benzodiazépines, hypnotiques, analgésie, diurétiques) après résolution du delirium. (4 points)
5. Quelles mesures de prévention du delirium et de sécurisation médicamenteuse au domicile avec la fille ? (3 points)`,

    corrigé: `1. DELIRIUM — DIAGNOSTIC ET CAUSES (4 points) :
- Delirium avéré : CAM positif (critères A–D) ; aigu 72 h, fluctuation, hallucinations, inattention sur fond de cognition antérieure préservée (MMS 28 récent).
- Hiérarchisation : 1) infection urinaire + probable rétention (350 mL, dysurie, fièvre, CRP ↑) ; 2) hyponatrémie 128 (SIADH possible diurétiques, ou hypovolémique relative — contexte déshydratation + diurétiques) ; 3) IRA sur sepsis + AINS (ibuprofène) ; 4) hyperkaliémie limite (spironolactone + IRC) ; 5) constipation/douleur ; 6) surcharge IC (oedèmes, BNP) ; 7) iatrogénie psychotropes majeurs (lorazépam, zolpidem, trazodone, tramadol, pregabaline) ; 8) chute conséquence, pas cause principale.
- Hospitalisation à discuter : sepsis, rétention, Na 128, polypathologie — court séjour ou hospitalisation à domicile selon fille.

2. POLYPHARMACIE — BEERS ET MÉCANISMES (5 points) :
- Lorazépam : BZD — sédation, chutes, confusion, dépendance ; anticholinergique faible mais cumul.
- Zolpidem : hypnotique Z — chutes, confusion, amnésie ; inapproprié PA.
- Trazodone : sédation, orthostatisme, confusion chez PA fragile.
- Tramadol : opioïde faible — confusion, constipation, risque convulsions avec SSRI (duloxétine) ; QTc.
- Duloxétine + pregabaline : double analgésie neurologique + sédation ; syndrome sérotoninergique théorique avec tramadol.
- Ibuprofène (ajout fille) : AINS — IRA, hyponatrémie, IC décompensation, interaction rivaroxaban (saignement).
- Oméprazole long cours : fracture, carences, pas d'indication forte ici.
- Spironolactone + furosémide + IRC + K 5,4 : hyperkaliémie.
- Rivaroxaban 20 mg : dose à 15 mg si DFG 30–49 (adaptation nécessaire).
- Denosumab : hypocalcémie possible si carence D (vigilance).
- Au moins 6 points jury : triple psychotrope nuit + opioïde + gabapentinoïde.

3. PRISE EN CHARGE 48 H (4 points) :
- Hospitaliser ou HAD si sonde vésicale/drainage nécessaire : antibiothérapie IV ou PO selon gravité (E. coli, adapter IRC — éviter néphrotoxiques) ; arrêt immédiat ibuprofène ; sonde urinaire à dérivation si rétention aiguë symptomatique (durée minimale).
- IRA : réhydratation prudente (IC) ; surveiller diurèse ; arrêt AINS ; dose rivaroxaban corrigée.
- Hyponatrémie : bilan osmolarité, Na urinaire ; correction lente (< 8–10 mmol/24 h) ; arrêt/revoir diurétiques.
- K+ 5,4 : ECG, arrêt spironolactone temporaire si monte ; résine si urgent.
- IC : furosémide dose ajustée après remplissage ; pesée quotidienne.
- Delirium : traiter causes ; environnement calme ; pas de nouvelle BZD ; réduire tramadol si possible ; paracétamol seul temporaire.
- Constipation : lavement si fécalome ; ensuite laxatif osmotique.

4. DÉPRESCRIPTION MOYEN TERME (4 points) :
- Semaine 1–2 post-résolution : arrêt zolpidem et trazodone ; sevrage progressif lorazépam (réduction 25 % / 1–2 semaines).
- Analgésie : descendre tramadol puis arrêt ; maintenir paracétamol régulier ; une seule molécule neuropathique (pregabaline dose minimale ou duloxétine, pas les deux).
- Diurétiques : réintroduire spironolactone seulement si K et PA OK ; furosémide dose minimale efficace.
- Oméprazole : essai arrêt 4 semaines.
- Rivaroxaban : 15 mg/j si DFG stable 30–49 ; revue CHA2DS2-VASc maintenu.
- Atorvastatine : maintenir si indication vasculaire.
- Documentation : une modification à la fois ; pharmacien d'officine ; ordonnance simplifiée (dosettes).

5. PRÉVENTION DELIRIUM ET DOMICILE (3 points) :
- Lunettes, audition, hydratation planifiée, éclairage jour/nuit ; horaires réguliers ; éviter changements environnement.
- Fille : formation pilulier (pas d'auto-AINS) ; liste médicaments unique ; contact médecin si confusion.
- IDE surveillance post-sonde ; réévaluation résidu ; prévention chutes (tapis, orthostatisme post-sevrage).
- MMS et CAM si symptôme nouveau ; protocole infection urinaire récidive (hygiène, suivi résidu).`,

    juryTips: '2006 = confusion + polypharmacie : CAM 4 critères obligatoire. Ne pas attribuer à « démence » sans preuve antérieure (MMS 28). Rétention 350 mL + IU = cause classique. Ibuprofène ajouté par famille = toujours demander automédication. Rivaroxaban 20 vs DFG 32 = piège dose 15 mg. Triple sédatif nuit (lorazépam + zolpidem + trazodone) = élimination prioritaire. Tramadol + duloxétine + pregabaline = redondance. Hyponatrémie lente correction. Beers : citer au moins 5 noms. Déprescription séquentielle, pas tout arrêter d\'un coup en aigu sauf toxiques (AINS).'
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SUJETS_EVC_2004_2006 };
}