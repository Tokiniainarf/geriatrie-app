// ═══════════════════════════════════════════════════════════════
//  Sujets EVC Gériatrie — Années 1998, 1999, 2000 (épreuves complètes)
//  Format: consigne, temps, barème, sujet complet, corrigé point par point
// ═══════════════════════════════════════════════════════════════
const SUJETS_EVC_1998_2000 = [
  {
    id: 'evc-1998-alzheimer-soins',
    annee: 1998,
    session: 'Printemps',
    duree: '30 minutes (15 min préparation + 15 min oral)',
    bareme: '20 points total',
    consigne: 'Vous êtes médecin coordonnateur en EHPAD. Mme Rousseau présente une maladie d\'Alzheimer évolutive avec troubles du comportement et dépendance croissante. Rédigez l\'évaluation gériatrique, le plan de soins non médicamenteux et médicamenteux, et l\'accompagnement des aidants.',
    sujet: `Mme ROUSSEAU Marguerite, 79 ans, est résidente en EHPAD depuis 14 mois, adressée initialement pour « démence et épisodes d'agressivité à domicile ».

ANTÉCÉDENTS MÉDICAUX :
- Maladie d'Alzheimer probable (diagnostic il y a 4 ans, neurologue) ; IRM cérébrale antérieure : atrophie hippocampique bilatérale modérée, pas d'infarctus
- HTA ancienne, bien contrôlée historiquement
- Hypothyroïdie substituée depuis 20 ans
- Ostéoporose connue (fracture Colles droite il y a 12 ans)
- Pas d'AVC, pas de parkinsonisme documenté
- Surdité presbyacousie modérée ; myopie corrigée
- Pas d'antécédent psychiatrique avant démence

TRAITEMENT ACTUEL (revue pharmacie + MG) :
- Donepezil 10 mg/j (depuis 18 mois)
- Lévothyroxine 75 µg/j
- Amlodipine 5 mg/j
- Carbonate de calcium 500 mg + vitamine D 400 UI/j (ancienne posologie)
- Paracétamol 1 g x2/j (arthralgies)
- Trazodone 50 mg au coucher (prescrit il y a 3 mois pour insomnie)
- Halopéridol 0,5 mg matin + 1 mg soir (depuis crise agitation il y a 6 semaines, urgences)
- Lactulose 10 mL x2/j (constipation chronique)

HISTOIRE DE LA MALADIE (6 derniers mois) :
- MMS à l'admission EHPAD : 18/30 ; MMS actuel : 12/30
- Perte progressive langage (aphasie de Wernicke-like), désorientation permanente
- Épisodes d'errance nocturne (2–3/semaine), tentatives de sortie
- Cris et refus de soins hygiéniques 3–4 fois/semaine (toilette intime)
- Accusations envers voisine de chambre (« elle vole mes affaires ») — pas de hallucinations visuelles rapportées
- Appétit fluctuant ; préférence sucrée ; grignotage nocturne
- Sommeil fragmenté ; sieste diurne prolongée
- Chute sans fracture il y a 2 mois (salle de bain, glissade)

CONTEXTE FAMILIAL :
- Veuve depuis 6 ans ; fille unique 52 ans (infirmière), visite 4x/semaine, très investie
- Fils 48 ans, vit à l'étranger, contacts téléphoniques mensuels
- Fille demande arrêt halopéridol (« elle n'est plus elle-même ») mais craint agressivité envers personnel
- Pas de personne de confiance ; pas de directives anticipées rédigées
- Patient antérieurement exprimait refus « d'être attachée » (propos rapportés fille, non documentés)

ÉVALUATION GÉRIATRIQUE À J0 :
- PA 132/78 mmHg ; FC 84 bpm ; T° 36,7 °C ; SpO2 97 % air ambiant
- Poids 54 kg (taille 1,62 m, IMC 20,6) ; poids admission 57 kg
- Muqueuses légèrement sèches ; peau fine, ecchymoses avant-bras
- ADL (Katz) : 1/6 — aide totale toilette, habillage, continence partielle (protection jour)
- IADL : 0/8
- MMS : 12/30 (désorientation 0/10, mémorisation 0/3, attention 0/5, rappel 0/3, langage 5/9, praxies 2/2)
- Test de l'horloge : impossible
- NPI (Neuropsychiatric Inventory) estimé : 42/144 — domaines élevés : irritabilité, agitation, aberration croyance, apathie
- GDS-15 : non fiable (démence) ; Cornell dépression démentielle : 8/38 (symptômes modérés)
- Braden : 14/23 (risque escarre modéré)
- Tinetti (avec aide) : 8/28
- Force préhension : 12 kg (G)
- Déglutition : pas de fausses routes observées ; temps repas 40 min avec incitations
- Douleur : Algoplus 2/5 (faciès, gémissements à la mobilisation genoux)

BIOLOGIE (jeun, hier) :
- NFS : Hb 11,8 g/dL, VGM 92 fL, GB 6 400/mm³, plaquettes 245 000/mm³
- Ferritine 32 ng/mL, CST 18 %
- Créatinine 78 µmol/L → DFG (Cockcroft) 62 mL/min
- Ionogramme : Na 141 mmol/L, K 4,2 mmol/L
- Glycémie à jeun 0,98 g/L ; HbA1c 5,6 %
- TSH 8,2 mUI/L ; T4L 12 pmol/L (limite basse)
- 25-OH vitamine D : 14 ng/mL
- Albumine 32 g/L ; préalbumine 0,15 g/L
- B12 280 pg/mL ; folates sériques 4,2 ng/mL
- ASAT 22 UI/L, ALAT 18 UI/L, PAL 98 UI/L
- CRP 4 mg/L
- ECBU (bandelette) : leucocytes +, nitrites − (à confirmer)

IMAGERIE ET EXAMENS :
- Scanner cérébral (il y a 8 mois, agitation aiguë) : atrophie diffuse, predominance temporopariétale, leucoaraïose légère, pas d'hématome, pas d'hydrocéphalie
- Rx thorax : pas d'infiltrat
- Rx bassin : pas de fracture récente ; ostéopénie diffuse
- DMO (il y a 5 ans) : T-score −2,4 col fémoral
- ECG : rythme sinusal, pas de trouble conductif
- Consultation ORL EHPAD : cérumen bilatéral partiel (débouchage prévu)
- Observation 72 h repas : apports ~1 450 kcal/j, protéines 42 g/j

QUESTIONS :
1. Caractérisez le stade de la maladie d'Alzheimer et les troubles neuropsychiatriques (NPI) ; quels diagnostics différentiels de l'agitation restent à écarter ? (4 points)
2. Analysez l'appropriateness du traitement actuel (donepezil, halopéridol, trazodone) au regard des recommandations et des risques gériatriques. (5 points)
3. Quel bilan complémentaire minimal et ciblé proposez-vous cette semaine (biologie, infection, douleur, sensoriel) ? (3 points)
4. Élaborez un plan de soins global en EHPAD : approches non pharmacologiques, hygiène de vie, prévention chutes et escarres, nutrition. (4 points)
5. Comment organisez-vous l'accompagnement de la fille et la concertation sur les antipsychotiques et les soins contraignants ? (4 points)`,

    corrigé: `1. STADE ALZHEIMER ET TROUBLES NEUROPSYCHIQUES (4 points) :
- Stade modéré–sévère : MMS 12/30, dépendance ADL quasi totale, aphasie, désorientation complète, besoin encadrement 24 h/24.
- Syndrome comportemental et psychologique de la démence (SCPD) : agitation verbale/physique, errance, idées délirantes simples (vol), irritabilité (NPI élevé sur agitation et aberration croyance).
- Cornell 8 : dépression associée possible (apathie, pleurs) — traiter causes somatiques avant antidépresseur.
- DD à écarter en priorité : infection urinaire (bandelette +), douleur non verbalisée (arthrose, mobilisation), constipation (lactulose insuffisante ?), hypothyroïdie mal équilibrée (TSH 8,2), déficit sensoriel (surdité, cérumen), delirium superposé (pas de fièvre, CRP basse — moins probable), effet iatrogène halopéridol (akathisie, rigidité paradoxale).

2. TRAITEMENT MÉDICAMENTEUX (5 points) :
- Donepezil 10 mg : stade modéré–sévère — bénéfice cognitif marginal attendu ; maintenir si bonne tolérance digestive et pas d'arythmie (surveillance FC) ; arrêt discutable si absolue dépendance et pas d'objectif de stabilisation (discussion fille, pas d'arrêt brutal).
- Halopéridol : antipsychotique typique — risque extrapyramidal, QT, sédation, mortalité en démence (méta-analyses postérieures) ; en 1998 usage fréquent mais durée 6 semaines = réévaluer ; objectif : crise courte, pas traitement de fond ; sevrage progressif si SCPD contrôlé par non-médicamenteux ; si maintien temporaire : dose minimale, durée < 3 mois, réévaluation hebdo.
- Trazodone 50 mg : acceptable insomnie si pas d'orthostatisme ; surveiller sédation diurne cumulée avec halopéridol.
- Lévothyroxine 75 µg : TSH 8,2 + T4L basse limite → sous-dosage probable ; augmenter prudemment (25 µg) et contrôle TSH à 6–8 semaines.
- Pas d'indication nouvelle benzodiazépine ; paracétamol maintenir si douleur.

3. BILAN COMPLÉMENTAIRE (3 points) :
- ECBU + culture (leucocytes +) ; traiter infection urinaire si confirmée (antibiotique adapté DFG, éviter fluoroquinolone si possible selon contexte 1998).
- Réévaluation douleur : Algoplus systématique, essai paracétamol régulier 3 jours, recherche arthrose genoux.
- TSH/T4L contrôle après ajustement thyroïde ; B12/folates : B12 limite — supplémentation orale à discuter.
- Vitamine D : 14 ng/mL → chargement puis 800–1000 UI/j (réactualiser prescription 400 UI obsolète).
- Débouchage cérumen ; test audition grossier ; vision si chutes.
- Pas de scanner urgent si pas de dégradation aiguë neurologique ; pas de ponction LCR.

4. PLAN DE SOINS EHPAD (4 points) :
- Non pharmacologique (1re intention SCPD) : routine stable, éclairage jour/nuit, activités sensorielles adaptées, musique, marche accompagnée errance, validation émotionnelle, éviter confrontation sur délire.
- Hygiène : toilette fractionnée, préserver intimité, même soignant si possible ; habillage simplifié.
- Nutrition : enrichissement protéiné, 5 prises, textures normales tant que déglutition OK ; surveiller perte poids ; hydratation 1,2–1,5 L.
- Chutes : Tinetti 8 — alarme lit, chaussures antidérapantes, dégagement couloir, toilette assistée.
- Escarre : Braden 14 — changement position, protection talons, nutrition.
- Continence : programme toilette régulière, protections respectueuses.

5. AIDANTS ET CONCERTATION (4 points) :
- Entretien fille (compétence soignante) : expliquer SCPD = symptôme maladie, pas « caractère » ; bénéfices/risques halopéridol (tranquillisation vs parkinsonisme, confusion).
- Plan partagé : essai sevrage halopéridol sur 2–3 semaines si infection traitée + non-médicamenteux renforcés ; critères réintroduction (danger autrui/soignant).
- Propos « refus attachation » : consigner dans dossier ; rechercher alternatives (fauteuil bas, accompagnement) ; cadre légal soins sous contrainte EHPAD (procédure collégiale, pas contention routine).
- Soutien fille : groupe Alzheimer, répit, culpabilité ; frère informé par écrit.
- Directives anticipées : proposer rédaction tant que lucidité fugace possible (fenêtres matinales) ; personne de confiance.`,

    juryTips: '1998 Alzheimer + soins : MMS < 15 = sévère. SCPD avant psychotrope — infection urinaire piège classique. Halopéridol long cours = erreur jury. Donepezil stade sévère = discussion arrêt. TSH 8,2 + T4L basse = augmenter L-thyroxine. NPI nommer. Cornell vs GDS en démence. Non-pharmacologique HAS-like même avant 2000. Contention/attachation : éthique + alternatives. Vitamine D 400 UI obsolète. Bandelette + = ECBU. Fille infirmière = adapter langage pro. Pas de nouvelle benzo. Braden + nutrition. Propos oral refus soins = documenter.'
  },

  {
    id: 'evc-1999-chute-prevention',
    annee: 1999,
    session: 'Automne',
    duree: '30 minutes (15 min préparation + 15 min oral)',
    bareme: '20 points total',
    consigne: 'Vous êtes médecin en consultation de gériatrie après hospitalisation pour fracture. M. Bernard présente une chute avec fracture du col fémoral et une cascade iatrogénique. Rédigez l\'analyse étiologique de la chute, la stratification des risques et un programme de prévention primaire et secondaire.',
    sujet: `M. BERNARD Pierre, 82 ans, est vu en consultation gériatrique à J21 post-opératoire d'une ostéosynthèse par clou gamma droit (fracture col fémoral droit, chute domicile).

ANTÉCÉDENTS MÉDICAUX :
- HTA depuis 30 ans
- Diabète type 2 depuis 15 ans (suivi irrégulier)
- Insuffisance cardiaque diastolique (échographie il y a 2 ans : FEVG 58 %, HVG, dysfonction diastolique grade II)
- Fibrillation atriale paroxystique (2 épisodes documentés, pas d'anticoagulation chronique « par peur des chutes »)
- BPCO légère (ex-fumeur)
- DMLA bilatérale ; cataracte débutante
- Pas de démence ; MMS pré-chute : 26/30
- Historique : 3 chutes en 18 mois dont 2 sans fracture

TRAITEMENT AVANT CHUTE (polymédication) :
- Ramipril 5 mg x2/j
- Furosémide 40 mg matin
- Metformine 850 mg x2/j
- Gliclazide 30 mg/j
- Salmétérol 50 µg x2/j
- Béclométasone inhalée 200 µg x2/j
- Digoxine 0,125 mg/j (prescrit depuis 4 ans, « pour FA »)
- Aspirine 100 mg/j
- Fluoxétine 20 mg/j (depuis deuil épouse il y a 14 mois)
- Zolpidem 10 mg au coucher (depuis 8 mois)
- Tamsulosine 0,4 mg/j
- Prednisone 5 mg/j (prescrite pour BPCO par MG il y a 6 mois, automédication maintenue)
- Carbonate calcium 1 g/j + vitamine D 800 UI/j

CIRCONSTANCES DE LA CHUTE FRACTURAIRE :
- 6h30, se lève pour uriner, vertige brutal, vision « tout noir » 2 secondes, chute latérale droite sur carrelage salle de bain
- Pas de perte de connaissance prolongée ; confusion 10 min (fille présente)
- Délai au sol : ~25 min (impossibilité relever, douleur hanche)
- Téléphone non porté ; pas de téléassistance

DEPUIS CHIRURGIE :
- Rééducation débutée ; appui partiel autorisé
- MMS : 24/30 (baisse attention)
- Confusion nocturne intermittente J5–J10 (résolue)
- PA orthostatique à J14 : 118/70 assis → 92/58 debout à 3 min, FC 88 → 102
- Tinetti en consultation : 11/28
- Timed Up and Go : 28 secondes avec déambulateur (aide IDE)
- Appui unipodal : 2 secondes (gauche)
- Force quadriceps droit : 2/5
- EVA douleur hanche repos : 2/10 ; à la marche : 6/10
- GDS-15 : 7/15

EXAMEN CLINIQUE CONSULTATION :
- Poids 71 kg (pré-chute 74 kg) ; taille 1,78 m ; IMC 22,4
- Marche : boiterie douloureuse, pas de signe thrombose veineuse profonde
- Pieds : neuropathie périphérique (monofilament 4/10 points), ongles épaissis
- Proprioception chevilles diminuée
- Baisse acuité visuelle (Snellen ~6/10 bilatéral sans correction récente)
- Pas de raideur nuque ; pas de déficit focal nouveau

BIOLOGIE (J20) :
- NFS : Hb 10,6 g/dL, VGM 88 fL, GB 7 800/mm³, plaquettes 198 000/mm³
- Créatinine 132 µmol/L → DFG 48 mL/min/1,73 m²
- Ionogramme : Na 134 mmol/L, K 4,6 mmol/L
- Glycémie à jeun 1,72 g/L ; HbA1c 8,4 %
- Albumine 31 g/L
- 25-OH vitamine D : 9 ng/mL
- Ca corrigé albumine 2,12 mmol/L ; PTH 78 pg/mL
- TSH 2,4 mUI/L
- Digoxinémie 1,8 ng/mL (fourchette thérapeutique haute)
- CRP 22 mg/L

IMAGERIE :
- Rx hanche contrôle : agrafes en place, pas de descellement
- DMO (il y a 4 ans) : T-score −2,8 col fémoral gauche, −2,5 L4
- Rx thorax : cardiomégalie modérée, pas d'infiltrat
- Scanner cérébral (hospitalisation, confusion) : atrophie légère, pas d'hémorragie, pas d'infarctus aigu
- ECG : extrasystoles auriculaires, pas de FA permanente, QTc 445 ms
- Échographie cardiaque (il y a 2 ans) : voir antécédents ; pas de répétition urgente si clinique stable

ENVIRONNEMENT DOMICILE :
- Vit seul pavillon ; salle de bain sans barre d'appui ; WC nuit au rez-de-chaussée
- Tapis salle de bain ; éclairage faible couloir
- Fille 55 ans habite à 15 km ; aide ménage 2h x2/semaine
- Pas de téléassistance ; pas de monte-escalier

QUESTIONS :
1. Classifiez le mécanisme de la chute (syncope, vertige, accident mécanique) et argumentez à partir du récit et de l'examen. (4 points)
2. Dressez une liste hiérarchisée des facteurs de risque intrinsèques et extrinsèques ; quels scores/outils citez-vous ? (5 points)
3. Analysez la iatrogénie (digoxine, diurétiques, zolpidem, prednisone, antidiabétiques) et proposez un plan de déprescription ou réajustement post-fracture. (4 points)
4. Quel programme de prévention secondaire (os, muscle, équilibre, vision, domicile) et quel suivi pluridisciplinaire sur 6 mois ? (4 points)
5. La FA paroxystique et l'absence d'anticoagulation : réévaluez le rapport bénéfice–risque après fracture et chutes répétées. (3 points)`,

    corrigé: `1. MÉCANISME DE CHUTE (4 points) :
- Probable hypotension orthostatique / dysautonomie avec miction nocturne (syncope ou presyncope) : vertige, vision noire brève, contexte lever nocturne, PA 92/58 à 3 min en consultation.
- Chute secondaire sur sol dur → fracture col fémoral ; pas de syncope prolongée ni prodromes cardiaques typiques.
- Arguments contre épilepsie : pas de morsure langue, récupération relativement rapide.
- Contribuant : zolpidem + fluoxétine (somnolence, hypotension), digoxine (arythmie, nausées), déshydratation relative (furosémide, Na 134), hypoglycémie possible (gliclazide + jeûn nocturne) — glycémie 1,72 g/L à jeun consultation élevée mais nocturne inconnue.
- Accident mécanique pur peu probable sans déficit préalable jambe.

2. FACTEURS DE RISQUE ET OUTILS (5 points) :
- Intrinsèques : âge 82, FA, IC diastolique, orthostatisme, neuropathie diabétique pieds, baisse vision, sarcopénie post-immobilisation, antécédent 3 chutes, dépression (GDS 7), polymédication psychoactives.
- Extrinsèques : salle de bain glissante, pas de barres, tapis, éclairage insuffisant, seul la nuit, pas téléassistance.
- Outils : Tinetti 11/28 (risque élevé), TUG 28 s anormal, STRATIFY en EHPAD si retour structure, échelle orthostatique systématique, test appui unipodal, MNA si perte poids.
- Ostéoporose : T-score −2,8, fracture fragilité = sévère ; FRAX si disponible concept 1999 limité — fracture = traitement.
- Hiérarchisation : (1) orthostatisme/iatrogénie nocturne, (2) vision/pieds, (3) environnement, (4) force/équilibre.

3. IATROGÉNIE ET DÉPRESCRIPTION (4 points) :
- Zolpidem : arrêt prioritaire post-fracture (chutes, confusion hospitalière) — hygiène sommeil, lever nocturne sécurisé (lampe, urinal).
- Digoxine 0,125 + digoxinémie 1,8 : risque toxicité, arythmie, confusion — arrêt si FA non permanente et pas d'IC systolique ; alternative bêtabloquant si indication rythme.
- Prednisone 5 mg long cours sans indication claire BPCO : arrêt progressif si possible (osteoporose, myopathie, glycémie).
- Furosémide 40 mg : réévaluer en IC diastolique stable ; risque déshydratation/orthostatisme — dose minimale ou arrêt test avec pesée.
- Fluoxétine : demi-vie longue, hyponatrémie (Na 134) — maintenir si dépression active mais surveiller Na ; alternative mirtazapine non prioritaire.
- Gliclazide + metformine : HbA1c 8,4 — risque hypoglycémie nocturne ; réduire gliclazide, cible assouplie post-chute.
- Ramipril : contribue orthostatisme — maintenir si IC/HTA mais horaire matin, surveiller PA.
- Séquentialité : zolpidem arrêt immédiat ; digoxine arrêt sous surveillance ; prednisone sevrage 4 semaines.

4. PRÉVENTION SECONDAIRE 6 MOIS (4 points) :
- Os : vitamine D chargement puis 800–1200 UI + calcium alimentaire ; bifosphonate oral (alendronate) si DFG > 35 et œsophage OK — après cicatrisation ; continuer 5 ans minimum.
- Muscle/rééducation : kiné 3x/semaine 3 mois puis 2x — renforcement quadriceps, équilibre, marche ; ergothérapeute domicile.
- Vision : consultation ophtalmo, correction cataracte si indiquée après stabilisation hanche.
- Pieds : podologue, chaussures fermées antidérapantes.
- Domicile : barres salle de bain, retrait tapis, éclairage détecteur, téléassistance, possible WC surélevé.
- Suivi : consultation gériatrie M1, M3, M6 — Tinetti, PA orthostatique, poids, HbA1c, créatinine, 25-OH D.
- Nutrition : protéines 1,2 g/kg, dénutrition légère (albumine 31).

5. FA ET ANTICOAGULATION (3 points) :
- CHA2DS2-VASc élevé (âge, HTA, diabète, IC, sexe) — indication anticoagulation forte ; HAS futur — en 1999 AVK courants.
- Risque hémorragique : chutes répétées, pas d'anticoagulation actuelle = sous-traitement thromboembolique.
- Post-fracture : retarder initiation 4–8 semaines si saignement chirurgical résolu ; puis AVK ou aspirine seule insuffisante en FA.
- Balance : anticoagulation + prévention chutes (téléassistance, kiné) > abstention par peur ; éduquer patient/fille.
- Si FA paroxystique confirmée Holter : même indication que permanente si facteurs risque.
- Aspirine seule : insuffisant FA thromboembolique.`,

    juryTips: '1999 chute + prévention : orthostatisme nocturne + miction = classique. Zolpidem arrêt. Digoxine 1,8 ng/mL = toxicité possible. Prednisone BPCO = erreur. Tinetti + TUG citer. 3 chutes = récidive. Vitamine D 9 ng/mL. Fracture col = ostéoporose sévère traiter. T-score −2,8. Neuropathie diabète pieds. FA sans anticoag « peur chutes » = sous-traitement — argumenter balance. STRATIFY si EHPAD. Pas téléassistance = modifiable. Fluoxétine + hyponatrémie Na 134. Gliclazide nuit. Programme 6 mois structuré. DMO ancienne pas excuse pas traiter. Confusion post-op = delirium résolu mentionner.'
  },

  {
    id: 'evc-2000-confusion-ethique',
    annee: 2000,
    session: 'Printemps',
    duree: '30 minutes (15 min préparation + 15 min oral)',
    bareme: '20 points total',
    consigne: 'Vous êtes médecin responsable en USG. M. Girard est admis pour confusion aiguë post-chirurgicale. La famille demande des soins agressifs alors que le patient avait exprimé des limites. Rédigez l\'évaluation du delirium, la démarche étiologique et la concertation éthique avec proposition de plan de soins proportionné.',
    sujet: `M. GIRARD Marcel, 87 ans, est admis en unité de soins gériatriques à J3 après chirurgie programmée pour occlusion intestinale aiguë sur bride (colectomie segmentaire gauche, J2 opératoire).

ANTÉCÉDENTS MÉDICAUX :
- Cancer colorectal opéré il y a 9 ans (résection droite, pas de chimiothérapie adjuvante)
- HTA, cardiopathie ischémique (IDM il y a 12 ans, angioplastie)
- Insuffisance rénale chronique stade 3b
- BPCO modérée
- Pas de démence connue ; MMS il y a 6 mois chez MG : 25/30
- Éthylisme sevré depuis 20 ans

TRAITEMENT HABITUEL :
- Bisoprolol 5 mg/j
- Aspirine 100 mg/j
- Atorvastatine 20 mg/j
- Ramipril 2,5 mg/j
- Tiotropium 18 µg/j
- Paracétamol à la demande

CONTEXTE ÉTHIQUE (notes MG + fils) :
- Il y a 2 ans, après hospitalisation pneumonie, patient aurait dit au fils : « Si je redeviens fou ou trop souffrir, ne me réanimez pas » (propos oral, non écrits)
- Fils (60 ans), médecin retraité, demande « tout faire » : réanimation si arrêt cardiaque, dialyse si besoin, transfert réa si détresse
- Petite-fille 32 ans (infirmière) rappelle les propos du grand-père et refuse intubation
- Pas de personne de confiance désignée ; pas de directives anticipées
- Épouse décédée il y a 5 ans ; patient vit seul avec aide domicile 4h/j

ÉVOLUTION POST-OPÉRATOIRE :
- J0–J1 : éveil lent mais orienté
- J2 soir : agitation, arrachage perfusions ; contention mains 4 h (IDE)
- J3 matin : confusion floride, hallucinations visuelles (« rats au plafond »), agitation physique, refus soins
- Douleur rapportée EVA 7/10 abdomen si questionné dans un moment lucide
- Pas de fièvre jusqu'à J3 14h : 38,1 °C

EXAMEN J3 (fluctuant, évalué sur 2 passes) :
- Pass 1 (agité) : PA 98/56 mmHg ; FC 112 bpm ; FR 24/min ; SpO2 93 % O2 2 L/min ; T° 38,1 °C
- Pass 2 (1 h après, plus calme) : orienté sur prénom, désorienté date/lieu
- Abdomen : distension modérée, cicatrice propre, défense diffuse, pas de signe péritonitis franc
- Poumons : ronchi diffus
- Oedèmes chevilles 1+
- Diurèse : 450 mL/24 h (sonde urinaire J1–J2, retirée J2)
- Score CAM (Confusion Assessment Method) : positif (début aigu, fluctuation, inattention, désorganisation pensée)
- 4AT : 10/12 (delirium probable)
- MMS : 9/30
- APACHE II non pertinent ; NEWS2 estimé : 7
- AlgoDouce (si douleur) : 5/5 sur épisode mobilisation

BIOLOGIE (J3, 8h) :
- NFS : Hb 9,8 g/dL, GB 14 200/mm³ (PNN 88 %), plaquettes 420 000/mm³
- Créatinine 198 µmol/L (baseline 145) → DFG ~28 mL/min
- Urée 22 mmol/L
- Ionogramme : Na 131 mmol/L, K 5,4 mmol/L, Cl 96 mmol/L
- Glycémie 1,45 g/L
- CRP 186 mg/L
- Procalcitonine non disponible (établissement 2000)
- Lactates 2,8 mmol/L
- Albumine 26 g/L
- TP 62 %, INR 1,3
- Ammoniaque 42 µmol/L (normale)
- Gaz du sang : pH 7,32, PaCO2 48 mmHg, PaO2 68 mmHg, HCO3 22 mmol/L (FiO2 ~28 %)
- ECBU prélevé J3 : en attente

IMAGERIE :
- TDM abdomen post-op J1 : pas de collection, pas d'anastomose déhiscente évidente ; iléus paralytique modéré
- Rx thorax J3 : opacité base droite floue (atélectasie vs pneumonie)
- Scanner cérébral J2 (agitation) : pas d'hémorragie, pas d'infarctus aigu, atrophie modérée, leucoaraïose
- ECG : tachycardie sinusale, pas d'ischémie aiguë, QTc 460 ms

TRAITEMENT EN COURS USG :
- Morphine titration PCA 0,5 mg bolus (faible débit)
- Métoclopramide 10 mg x3/j (nausées)
- Oméprazole IV
- Cefotaxime 2 g x2/j (prophylaxie → prolongé J2 pour fièvre)
- Ringer lactate 1 L/24 h
- O2 lunettes 2 L/min
- Halopéridol 1 mg IM x1 J2 nuit (agitation)

QUESTIONS :
1. Confirmez le diagnostic de delirium (CAM, 4AT) et classez les facteurs prédisposants et précipitants chez M. Girard (pathologie, chirurgie, médicaments, métabolique). (4 points)
2. Proposez une démarche diagnostique étiologique priorisée (infectieux, abdominal, métabolique, douleur, hypoxie) avec examens complémentaires. (4 points)
3. Décrivez la prise en charge non pharmacologique et pharmacologique du delirium en respectant douleur et évitement iatrogénie. (4 points)
4. Analysez le conflit familial et la validité des propos antérieurs du patient : comment menez-vous la concertation et fixez-vous les objectifs de soins ? (4 points)
5. En cas de détresse respiratoire ou choc septique, quelle décision proposez-vous (réanimation, soins intermédiaires, limitation) et comment la documentez-vous ? (4 points)`,

    corrigé: `1. DELIRIUM — DIAGNOSTIC ET FACTEURS (4 points) :
- Delirium hyperactif + composante hypoactive fluctuante : CAM positif, 4AT 10/12, début J2 post-op, MMS 9 vs 25.
- Prédisposants : âge 87, IRC, BPCO, cardiopathie, antécédent cognitif limite (MMS 25), hypoalbuminémie, éthylisme ancien.
- Précipitants : chirurgie abdominale majeure, douleur sous-traitée (EVA 7, AlgoDouce 5/5), infection/sepsis débutant (CRP 186, GB 14 200, T° 38,1, Rx pneumonie), hypoxie (PaO2 68), déshydratation/IRA fonctionnelle (créat 198, diurèse faible), Na 131, K 5,4, iléus, immobilisation, métoclopramide et morphine (iatrogénie), halopéridol (peut aggraver ou calmer temporairement), contention (stress).
- DD : encéphalopathie hépatique peu probable (ammoniaque normale) ; AVC : scanner négatif ; complication anastomotique à exclure.

2. DÉMARCHE ÉTIOLOGIQUE (4 points) :
- Urgent : examen abdominal chirurgical, lactates, hémocultures x2, ECBU, antibiogramme ; Rx abdomen si doute iléus/obstruction ; consultation chirurgien si défense majorée, TP bas.
- Infectieux : pneumonie + possible foyer urinaire/abdominal ; adapter cefotaxime IRC (dose, durée) ; ponction pleurale si épanchement.
- Métabolique : corriger Na progressivement si symptomatique ; K 5,4 — ECG, arrêt apports K, réévaluer ramipril ; gaz du sang répété.
- Douleur : réévaluer morphine PCA — sous-dosage agite, surdosage hypoventilation.
- Cardio : troponine si suspicion ; ETT si choc.
- Pas de nouvelle imagerie cérébrale si stable neurologiquement.

3. PRISE EN CHARGE DELIRIUM (4 points) :
- Non pharma : présence famille calme, lunettes/appareils auditifs, mobilisation précoce si possible, cycle lumière, éviter changement chambre, retirer contention dès sécurité OK, réorientation verbale.
- Douleur : morphine adaptée IRC (titération, pas meperidine) ; alternative opioïde faible si besoin.
- Arrêt métoclopramide (effet extrapyramidal, confusion).
- Halopéridol : si agitation mettant en danger — dose minimale IV/IM, courte durée ; éviter benzodiazépines sauf sevrage alcool (non actif ici).
- Hypoxie : O2 cible BPCO 88–92 % si hypercapnie ; kiné respiratoire.
- Hydratation prudente IRC : éviter surcharge ; monitorer diurèse, créatinine.
- Environnement : une personne référente soignant.

4. CONCERTATION ÉTHIQUE (4 points) :
- Propos oral « ne pas réanimer » : valeur dans cadre français (loi Kouchner 2002 approche) — témoignage fils vs petite-fille ; rechercher cohérence avec valeurs vie entière (autonomie, refus souffrance).
- Absence directives écrites : décision collégiale médecin équipe + famille ; pas de fils seul « tout faire » si témoignage crédible contraire.
- Personne de confiance : proposer désignation urgente si patient lucide par fenêtre.
- Objectifs de soins : traiter causes réversibles delirium (infection, douleur) = proportionné ; réanimation invasive si arrêt cardiaque = discutable selon volontés et état (cancer ancien, IRC, age) — limitation possible.
- Médiation fils / petite-fille : entretien séparé puis commun ; clarifier pronostic delirium souvent réversible partiellement.
- Tracer : note consultation éthique dossier, qui était présent, décision provisoire réévaluation 48 h.

5. DÉTRESSE RESPIRATOIRE / CHOC (4 points) :
- Si détresse aiguë réversible (pneumonie, sepsis) : O2, ventilation non invasive si BPCO et candidat, antibiothérapie, remplissage prudent, pas de dialyse systématique.
- Réanimation invasive (IOT, vasopresseurs) : refus ou limitation acceptable si volontés patient crédibles + fragilité extrême + état septique — décision collégiale, pas acharnement.
- Soins intermédiaires USG : maximum dans l'unité si limite posée ; transfert réa seulement si objectifs réanimation validés famille après information loyale.
- Documentation : formulaire limitation thérapeutique (esprit post-2005, en 2000 trace écrite médecin responsable), horodatage, révision si delirium résolu et patient exprime nouveau choix.
- Dialyse : pas d'urgence sauf indication vitale absolue ; discussion proportionnalité IRC chronique + sepsis.
- Ne pas intuber sur seule demande fils sans analyse éthique.`,

    juryTips: '2000 confusion + éthique : CAM + 4AT obligatoires. Post-op colique = delirium classique. Métoclopramide arrêt. Morphine douleur vs agitation. Contention = facteur precipitant. CRP 186 + Rx pneumonie. Na 131 correction prudente IRC. Propos oral patient = poids éthique. Fils médecin ≠ décision unilatérale. Pas directives = concertation. Halopéridol dose min. BPCO PaO2 cible. Lactates 2,8 surveiller sepsis. Petite-fille infirmière témoin. Limitation réa documenter. Réversible delirium vs pronostic global. K 5,4 ramipril. Scanner cérébral déjà fait. Ne pas dialyser par défaut. Famille divisée : médiation.'
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SUJETS_EVC_1998_2000 };
}