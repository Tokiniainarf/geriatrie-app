// ═══════════════════════════════════════════════════════════════
//  Sujets EVC Gériatrie — Années 2001, 2002, 2003 (épreuves complètes)
//  Format: consigne, temps, barème, sujet complet, corrigé point par point
// ═══════════════════════════════════════════════════════════════
const SUJETS_EVC_2001_2003 = [
  {
    id: 'evc-2001-denutrition-iathrogenie',
    annee: 2001,
    session: 'Printemps',
    duree: '30 minutes (15 min préparation + 15 min oral)',
    bareme: '20 points total',
    consigne: 'Vous êtes médecin coordonnateur en EHPAD. M. Lefebvre présente une dénutrition sévère et une polypathologie sous polythérapie. Rédigez l\'évaluation nutritionnelle, l\'analyse iatrogénique et un plan de soins intégrant déprescription et renutrition.',
    sujet: `M. LEFEBVRE Henri, 81 ans, est résident en EHPAD depuis 8 mois, adressé pour « perte d'autonomie après hospitalisation pour pneumonie ».

ANTÉCÉDENTS MÉDICAUX :
- BPCO stade III (VEMS 42 % théorique, hospitalisations répétées)
- Insuffisance cardiaque gauche modérée (FEVG 45 % il y a 2 ans)
- Diabète type 2 depuis 12 ans
- IRC stade 3a (créatinine habituelle 115–130 µmol/L)
- HBP symptomatique (nycturie 4–5/nuit)
- Glaucome à angle ouvert
- Dépression majeure post-hospitalisation (diagnostic il y a 10 mois)
- Pas de démence documentée ; MMS à l'admission EHPAD : 24/30

TRAITEMENT ACTUEL (14 molécules, revue pharmacie EHPAD) :
- Salmétérol/fluticasone 50/250 µg 2 bouffées x2/j
- Tiotropium 18 µg/j
- Furosémide 40 mg matin + 20 mg midi
- Lisinopril 10 mg/j
- Bisoprolol 5 mg/j
- Spironolactone 25 mg/j
- Metformine 850 mg x2/j
- Gliclazide 60 mg/j
- Tamsulosine 0,4 mg/j
- Timolol collyre 0,5 % x2/j
- Brinzolamide collyre x2/j
- Sertraline 100 mg/j
- Lorazépam 1 mg x2/j + 1,5 mg au coucher (prescrit depuis pneumonie)
- Oméprazole 20 mg/j (depuis 4 ans, « protection gastrique »)
- Paracétamol 1 g x3/j
- Codéine 30 mg x3/j (toux chronique, prescrit MG il y a 6 mois)
- Carbonate de calcium 500 mg + vitamine D 800 UI/j

HISTOIRE NUTRITIONNELLE (6 derniers mois) :
- Poids admission EHPAD : 62 kg (taille 1,74 m, IMC 20,5)
- Poids actuel : 51 kg (−11 kg, −18 %)
- Refus fréquent du déjeuner ; grignotage biscuit au goûter seulement
- Dysphagie non explorée ; toux post-prandiale intermittente
- Denture supérieure mal adaptée (prothèse 12 ans, non refaite)
- Hydratation : ~800 mL/j estimés (carnet IDE)
- Selles : 1 tous les 3–4 jours, efforts de défécation
- Pas de vomissements ; flatulences après repas

CONTEXTE SOCIAL :
- Veuf depuis 3 ans ; fils unique 58 ans, visite hebdomadaire
- Pas de personne de confiance ; pas de directives anticipées
- Fils souhaite « tous les traitements » et s'oppose à arrêt de codéine (« il tousse moins »)

ÉVALUATION GÉRIATRIQUE À J0 :
- PA 108/62 mmHg assise ; FC 76 bpm ; T° 36,4 °C ; SpO2 91 % air ambiant (stable habituel)
- Muqueuses pâles et sèches ; pli cutané 3 s ; circonférence bras 24 cm (G)
- ADL (Katz) : 2/6 — aide pour toilette, habillage, transferts partiels
- IADL : 1/8
- MMS : 22/30 (légère baisse vs admission)
- GDS-15 : 9/15
- MNA court : 6/14 → MNA complet : 9/30 (dénutrition avérée)
- NRS-2002 : 5 (risque nutritionnel)
- MUST : 4 (risque élevé)
- EAT-10 : 18/40 (dysphagie à confirmer)
- Braden : 12/23 (risque escarre)
- Force préhension : 14 kg
- Orthostatisme : PA 108/62 assis → 88/54 debout à 1 min, vertiges
- Toux productive matinale ; sibilants diffus
- Oedèmes chevilles grade 1

BIOLOGIE (jeun, hier matin) :
- NFS : Hb 10,2 g/dL, VGM 88 fL, GB 7 100/mm³, plaquettes 312 000/mm³
- Ferritine 18 ng/mL, CST 11 %, récepteur soluble transferrine élevé
- Créatinine 148 µmol/L → DFG (MDRD) 42 mL/min/1,73 m²
- Urée 14 mmol/L
- Ionogramme : Na 133 mmol/L, K 5,1 mmol/L, Cl 98 mmol/L
- Glycémie à jeun 1,65 g/L ; HbA1c 8,2 %
- Albumine 22 g/L ; préalbumine 0,07 g/L
- CRP 22 mg/L
- ProBNP 890 pg/mL
- TSH 1,8 mUI/L ; T4L normale
- 25-OH vitamine D : 8 ng/mL
- ASAT 28 UI/L, ALAT 22 UI/L, PAL 142 UI/L, GGT 68 UI/L
- Protéinurie bandelette : +
- Gaz du sang (SpO2 basse) : pH 7,38, PaCO2 48 mmHg, PaO2 62 mmHg sous O2 2 L/min

IMAGERIE ET EXAMENS :
- Rx thorax (semaine dernière) : hyperinflation, pas d'infiltrat nouveau, cardiomégalie modérée
- Échographie cardiaque (il y a 18 mois) : FEVG 45 %, HVG, IA modérée
- Densitométrie non faite
- Consultation dentaire EHPAD : prothèse mobile, muqueuse irritée
- ECG : rythme sinusal, HBAI, pas d'arythmie
- Échographie thyroïdienne : non indiquée (TSH normale)

OBSERVATION REPAS (5 jours) :
- Apports moyens : 1 050 kcal/j et 38 g protéines/j
- Temps moyen repas : 55 min avec incitations
- Nombre de chutes au fauteuil repas : 0 ; somnolence post-prandiale (codéine ?)

QUESTIONS :
1. Caractérisez la dénutrition de M. Lefebvre (critères HAS, scores) et analysez les mécanismes contributifs (pathologiques, fonctionnels, iatrogènes, environnementaux). (4 points)
2. Identifiez les médicaments inappropriés ou à risque (charge anticholinergique, effets sur appétit, digestion, chutes) et proposez une hiérarchisation pour la déprescription. (5 points)
3. Quel bilan complémentaire ciblez-vous (dysphagie, carences, décompensation métabolique) avant le plan nutritionnel ? (3 points)
4. Élaborez un plan de renutrition oral et pluridisciplinaire réaliste en EHPAD (objectifs, textures, supplémentation, suivi). (4 points)
5. Comment abordez-vous avec le fils la balance bénéfice–risque (codéine, benzodiazépines, diurétiques) et la prévention des réhospitalisations ? (4 points)`,

    corrigé: `1. DÉNUTRITION — CARACTÉRISATION ET MÉCANISMES (4 points) :
- Dénutrition protéino-énergétique sévère : perte > 10 % poids sur 6 mois, IMC 16,8, albumine 22 g/L, MNA 9/30, apports < 60 % besoins théoriques (~1 800 kcal, 70 g protéines).
- Mécanismes pathologiques : BPCO (hypercatabolisme, dyspnée repas), IC (anorexie, congestion digestive), IRC (nausées, urée), dépression (GDS 9), infection chronique bas grade (CRP 22).
- Fonctionnels : dysphagie suspectée (EAT-10, toux post-prandiale), prothèse inadaptée, constipation (effort, appétit), orthostatisme (repas debout difficile).
- Iatrogènes : codéine (nausées, constipation, sédation), lorazépam (sédation, chutes), polymédication (12+ molécules), metformine + IRC (nausées possibles).
- Environnement : temps repas long, isolement veuvage, pas d'accompagnant repas systématique.

2. IATROGÉNIE ET DÉPRESCRIPTION (5 points) :
- Lorazépam : inapproprié au long cours (sédation, chutes, confusion, dépendance) — arrêt prioritaire ou sevrage progressif après stabilisation nutritionnelle.
- Codéine : opioïde faible — constipation majeure, sédation, dysphagie ; alternative : paracétamol seul + kiné respiratoire/BPCO ; arrêt si toux non productive dominante.
- Oméprazole 4 ans sans indication forte : risque carences (B12, Mg), fractures — essai arrêt 4 semaines si pas d'ulcère/IBP documenté.
- Spironolactone + furosémide + lisinopril + IRC + K 5,1 : risque hyperkaliémie et IRA fonctionnelle — réévaluer indication triple diurétique en dénutrition.
- Gliclazide + metformine : hypoglycémie si apports bas ; HbA1c 8,2 — adapter cible PA (8–8,5 %), réduire gliclazide en priorité.
- Salmétérol/fluticasone + tiotropium : justifiés BPCO ; technique inhalation à vérifier (apports énergétiques toux).
- Sertraline : maintenir si dépression active ; surveiller hyponatrémie (Na 133 limite).
- Tamsulosine : orthostatisme cumulatif — horaire matin, surveiller PA.
- Hiérarchisation : (1) codéine + lorazépam, (2) oméprazole, (3) gliclazide dose, (4) spironolactone si K/PA le permettent, (5) une modification / 2 semaines avec suivi.

3. BILAN COMPLÉMENTAIRE (3 points) :
- Orthophoniste : évaluation déglutition, textures, test volume–viscosité ; dentisterie urgente (prothèse).
- Carences : fer oral si ferritine 18 et tolérance ; vitamine D chargement puis entretien ; B12/folates si oméprazole arrêté.
- Métabolique : ionogramme, K, créatinine hebdo post-modifications ; glycémie capillaire avant repas.
- Cardio-respiratoire : pas d'écho urgente si stable ; SpO2 cible BPCO 88–92 % ; pesée quotidienne 3 jours.
- Recherche infection urinaire si confusion nouvelle ; ECBU si fièvre.
- Pas de TDM abdominal en routine ; électrophorèse si doute myelome (Hb basse).

4. PLAN DE RENUTRITION (4 points) :
- Objectifs : 30–35 kcal/kg/j progressif (~1 500–1 700 kcal), protéines 1,2–1,5 g/kg/j (60–75 g) sur 4–8 semaines.
- Textures adaptées dysphagie : haché mixé si besoin ; liquides épaissis si fausses routes.
- 5–6 prises, enrichissement (huile olive, beurre, fromage), supplémentation orale HP-HC 200 mL x2 entre repas.
- Équipe : IDE pesée 2x/semaine, diététicien, orthophoniste, kiné (BPCO + déglutition), psychologue (deuil, dépression).
- Constipation : laxatif osmotique quotidien après arrêt codéine ; hydratation 1,5 L si cardiaque OK.
- Escarre : Braden 12 — repositionnement + nutrition = pilier.
- Indicateurs : poids, albumine J30, MNA, circonférence bras.

5. ENTRETIEN FILS ET PRÉVENTION (4 points) :
- Pédagogie : codéine masque toux utile mais bloque renutrition (constipation, somnolence) ; bénéfice court terme vs dénutrition mortelle.
- Benzodiazépines : jamais solution longue durée post-hospitalisation ; alternatives non médicamenteuses sommeil.
- Proposer réunion coordonnée (médecin, IDE, fils) ; documenter décisions ; personne de confiance à désigner.
- Prévention réhospitalisations : plan BPCO (crise), vaccination, suivi créatinine, téléphone fils ; critères alerte (SpO2 < 88 %, jeûne 48 h, confusion).
- Ne pas arrêter tous psychotropes/diurétiques d'un coup en phase aiguë nutritionnelle — séquentialité.`,

    juryTips: '2001 = dénutrition + iathrogénie : MNA < 17 = sévère, citer HAS (perte poids, albumine, apports). Codéine en BPCO = piège classique (constipation). Lorazépam post-pneumonie souvent oublié. Triple diurétique + IRC. Gliclazide + jeûn partiel = hypoglycémie. Oméprazole sans indication. EAT-10 avant textures. Prothèse dentaire = cause réversible. SpO2 91 % BPCO : ne pas sur-oxygéner. Déprescription séquentielle, pas brutale. Ferritine + fer si tolérance digestive.'
  },

  {
    id: 'evc-2002-chute-avc',
    annee: 2002,
    session: 'Automne',
    duree: '30 minutes (15 min préparation + 15 min oral)',
    bareme: '20 points total',
    consigne: 'Vous êtes médecin en USG. Mme Moreau est admise après une chute avec découverte d\'un AVC récent. Rédigez l\'analyse du lien chute–AVC, la stratification des risques et la prise en charge globale préventive et rééducative.',
    sujet: `Mme MOREAU Suzanne, 86 ans, est admise en unité de soins gériatriques à J2 après chute dans sa cuisine.

ANTÉCÉDENTS MÉDICAUX (dossier MG) :
- HTA traitée depuis 25 ans
- Fibrillation atriale permanente (diagnostiquée il y a 8 ans)
- Ostéoporose (T-score −3,1 col fémoral il y a 3 ans)
- Arthrose cervicale et genoux
- Pas d'AVC connu antérieurement
- Pas de démence ; MMS il y a 1 an : 27/30
- Surdité modérée non appareillée

TRAITEMENT À DOMICILE :
- Warfarine (AVK) — dernier INR connu il y a 3 semaines : 2,8 (carnet)
- Amlodipine 5 mg/j
- Hydrochlorothiazide 12,5 mg/j
- Atorvastatine 20 mg/j
- Paracétamol à la demande
- Diclofénac gel topique genoux (automédication quotidienne)
- Médicament « pour dormir » : lormétazépam 1 mg (prescrit depuis 2 ans)

CIRCONSTANCES DE LA CHUTE :
- Vers 7h, se lève pour préparer café, jambe « qui lâche » côté droit, chute latérale gauche
- Pas de syncope rapportée ; pas de malaise ; tête heurtée meuble bas (pas de PC)
- Restée au sol 45 min (impossibilité se relever, appel à voix)
- Fille retrouve à 8h, appelle SAMU
- Pas de perte de connaissance

DEPUIS L'ADMISSION :
- Céphalées modérées occipitales résiduelles J1
- Déficit moteur : hémiplégie/spasticité membre supérieur droit, parésie jambe droite (force 2/5)
- Faciès droit avec composante supérieure
- Langage : dysarthrie modérée, compréhension préservée, pas d'aphasie fluente évidente
- MMS : 21/30 (désorientation date, attention altérée)
- NIHSS estimé : 9
- Rankin pré-chute théorique : 0–1 ; actuel : 4
- GDS-15 : 6/15
- Tinetti avec aide : 6/28
- Timed Up and Go : non réalisable debout seule
- Appui unipodal : impossible côté droit
- Historique chutes : 1 chute sans fracture il y a 14 mois (tapis)
- Orthostatisme : PA 128/72 assis → 118/68 debout (pas de hypotension significative)

EXAMEN COMPLÉMENTAIRE :
- Cou : raideur modérée rotation droite (arthrose + spasticité)
- AVC pas de signe méningé
- Ceintures scapulaire et pelvienne douloureuses à gauche (contusion chute)
- Rx bassin + hanche : pas de fracture
- Peau : hématome hanche gauche, pas d'escarre

BIOLOGIE (J1) :
- NFS : Hb 11,4 g/dL, GB 8 900/mm³, plaquettes 210 000/mm³
- INR : 4,2 (prise warfarine veille)
- Créatinine 98 µmol/L → DFG 52 mL/min/1,73 m²
- Ionogramme : Na 136, K 4,0
- Glycémie 1,12 g/L
- CRP 18 mg/L
- Albumine 34 g/L
- Ca corrigé 2,18 mmol/L
- 25-OH vitamine D : 11 ng/mL
- TSH 3,1 mUI/L

IMAGERIE :
- Scanner cérébral sans injection (urgences) : infarctus ischémique récent territoire sylvien superficiel gauche (petite taille, < 15 mm sur séquence non injectée décrite), pas d'hémorragie, pas d'effet de masse ; leucoaraïose modérée ; atrophie modérée
- IRM cérébrale (J2, programmée) : infarctus aigu hémicérébelleux ? — en réalité rapport USG : infarctus récent pariétal gauche avec restriction diffusion, pas de saignement ; sténose intracrânienne non évaluée
- Échographie carotidienne (J3) : plaque mixte carotide interne gauche sténose 60 % (NASCET), droite 30 %, pas d'hémodynamique critique
- ECG : FA 78 bpm, pas d'ischémie aiguë
- Échocardiographie transthoracique : oreillette gauche dilatée, pas de thrombus visible, FEVG 55 %, pas de valvulopathie sévère
- Holter 24 h : FA permanente, pas de pause > 3 s, extrasystoles ventriculaires isolées

ENVIRONNEMENT :
- Vit seule appartement 2e étage sans ascenseur
- Fille habite à 30 km, visite 2x/semaine
- Pas de téléassistance
- Tapis couloir, pas de barres salle de bain

QUESTIONS :
1. Analysez le lien temporel et physiopathologique entre l'AVC et la chute : l'AVC est-il cause, conséquence ou cofacteur ? Quels éléments du dossier orientent ? (4 points)
2. Stratifiez le risque thromboembolique et hémorragique (FA, AVK, INR 4,2, AVC récent) : quelle stratégie antithrombotique à J2–J14 et à 3 mois ? (4 points)
3. Listez les facteurs de risque de chute avant et après AVC ; quels outils avez-vous utilisés et quelles cibles rééducatives ? (4 points)
4. Proposez un plan de prise en charge USG puis retour domicile (rééducation, anticoagulation, aménagement, aidants). (4 points)
5. Quels critères de gravité prognostique (NIHSS, Rankin, déglutition) et quel dépistage des complications aiguës (déglutition, douleur, dépression) ? (4 points)`,

    corrigé: `1. LIEN CHUTE–AVC (4 points) :
- Scénario le plus probable ici : AVC ischémique récent (pariétal gauche) → déficit jambe droit brutal au lever = chute mécanique sur déficit moteur, pas syncope primaire.
- Arguments : pas de prodromes malaise/vision noire ; PA stable debout ; déficit focal congruent infarctus ; temps au sol par impossibilité relever (hémiplégie) plus que confusion post-syncope.
- Cofacteurs chute : lormétazépam (sédation, équilibre), ostéoporose, arthrose, environnement (tapis), INR supratherapeutique (pas cause chute mais risque hématome si trauma).
- AVC ne serait conséquence de chute que si trauma crânien sévère — scanner sans hémorragie, pas de PC significatif.
- Chute peut révéler AVC silencieux antérieur mais IRM « récent » et tableau aigu plaide pour causalité AVC → chute.

2. ANTITHROMBOTIQUE FA + AVC (4 points) :
- FA permanente : indication anticoagulation longue durée (CHA2DS2-VASc élevé : âge, sexe, HTA, vasculaire).
- AVC ischémique aigu + INR 4,2 : suranticoagulation — arrêt warfarine temporaire, vitamine K si INR > 10 ou saignement (ici 4,2 : surveiller, pas de K systématique), recherche cause INR (diurétique, alimentation, interaction).
- Phase aiguë (< 2 semaines) : selon guidelines époque/recommandations — éviter anticoagulation pleine dose immédiate si infarctus > certaine taille ; ici petit infarctus superficiel, pas d'hémorragie : reprise AVK ou relais héparine fractionnée à dose prophylactique puis curative après J3–14 selon imagerie et NIHSS stable.
- Alternative moderne (hors époque 2002 mais esprit jury) : AVK avec cible INR 2–3 après stabilisation ; pas d'antiagrégant seul en FA + AVC récent.
- Statine maintenir ; pas d'arrêt atorvastatine.

3. RISQUE CHUTE ET OUTILS (4 points) :
- Avant : âge, FA, BZD, ostéoporose, arthrose, vitamine D basse, pas téléassistance, chute antérieure.
- Après AVC : hémiplégie, dysarthrie, MMS 21, Tinetti 6/28, TUG non faisable, Rankin 4.
- Outils : Tinetti, TUG, appui unipodal, Morse hospitalier (élevé), historique chutes = prévention secondaire.
- Cibles rééducation : équilibre, transferts, marche avec aide technique, renforcement côté sain, orthèse si pied équin.

4. PLAN USG ET DOMICILE (4 points) :
- USG : kiné motricité quotidienne, orthophoniste (déglutition, dysarthrie), ergothérapie ADL ; prévention escarre côté paralytique ; anticoagulation surveillée INR ; correction vitamine D ; arrêt lormétazépam.
- Sortie : critères NIHSS stable, déglutition sécurisée, transfert avec aide, fille disponible ; SSR ou HAD si pas montée escaliers.
- Domicile : téléassistance, barres, suppression tapis, repas livraison, warfarine avec suivi INR domicile IDE ; ne pas monter seule 2e étage — relocation à discuter.
- Ostéoporose : traitement anti-ostéoporotique si pas contre-indication ; calcium/vitamine D.

5. GRAVITÉ ET COMPLICATIONS (4 points) :
- Pronostic : NIHSS 9 = modéré ; Rankin 4 à aigu — objectif Rankin 2–3 à 3 mois si rééducation.
- Dépistage : test déglutition systématique (déglutition saline, EAT-10) — pneumopathie aspiration ; score NIHSS quotidien J1–7 ; dépression GDS 6 à surveiller.
- Douleur : contusion hanche, spasticité — paracétamol, éviter AINS + AVK ; diclofénac gel à arrêter si plaquettes/INR.
- Surveillance neuro : aggravation NIHSS → scanner ; convulsions rares.
- Éducation fille : signes alerte AVC, horaires médicaments, pas de double dose warfarine.`,

    juryTips: '2002 chute + AVC : déficit au lever = AVC cause chute, pas l\'inverse sans trauma crânien. INR 4,2 = gérer avant reprise pleine anticoagulation. Petit infarctus superficiel vs gros infarctus pour délai AVK. Lormétazépam = facteur chute modifiable. Tinetti 6 post-AVC = rééducation longue. FA : pas arrêter anticoagulation à long terme sans raison. Carotide 60 % : traitement médical, pas chirurgie urgente. Ostéoporose + chute : fracture évitée mais risque persistant. Déglutition = complication silencieuse. MMS baisse peut être lésionnel + dépression.'
  },

  {
    id: 'evc-2003-confusion-fin-de-vie',
    annee: 2003,
    session: 'Printemps',
    duree: '30 minutes (15 min préparation + 15 min oral)',
    bareme: '20 points total',
    consigne: 'Vous êtes médecin en EHPAD. M. Bernard, 89 ans, cancer métastatique connu, présente une confusion aiguë. La famille demande « tout faire ». Rédigez la démarche diagnostique, la distinction delirium–fin de vie et un plan de soins proportionnés.',
    sujet: `M. BERNARD André, 89 ans, est résident en EHPAD depuis 3 mois pour « impossible de rester seul à domicile » (épouse décédée 6 mois).

ANTÉCÉDENTS MÉDICAUX :
- Adénocarcinome pancréatique métastatique hépatique (diagnostic il y a 5 mois, stade IV)
- Chimiothérapie FOLFIRINOX : 2 cycles, arrêt il y a 6 semaines (toxicité + choix patient « qualité de vie »)
- Cirrhose hépatique alcoolique compensée (abstinence 10 ans)
- HTA, fibrillation atriale
- Pas de démence antérieure ; MMS à l'admission EHPAD : 26/30

TRAITEMENT ACTUEL :
- Morphine sulfate LP 30 mg x2/j (douleur épigastrique, prescrite oncologue il y a 4 semaines)
- Morphine IR 10 mg si douleur (2–3 prises/j)
- Métoclopramide 10 mg x3/j (nausées)
- Dexaméthasone 4 mg/j (appétit, anti-inflammatoire)
- Enoxaparine 4000 UI/j (FA + immobilisation)
- Bisoprolol 2,5 mg/j
- Furosémide 20 mg/j (oedèmes légers)
- Lactulose 15 mL x2/j
- Paracétamol 1 g x4/j
- Lorazépam 0,5 mg si agitation (2 prises/semaine en moyenne)

ÉVOLUTION RÉCENTE (10 jours) :
- Somnolence diurne progressive
- Refus alimentaire quasi total depuis 5 jours
- Urines foncées ; selles pâles intermittentes
- Douleur : EVA 4/10 au repos sous morphine LP (était 6/10 avant)
- Poids EHPAD : 58 kg à admission → 52 kg

ÉPISODE AIGU (depuis 36 h) :
- Agitation nocturne, arrachement perfusions (pas de VVC actuellement)
- Hallucinations visuelles (« des enfants dans le couloir »)
- Fluctuation : lucide et communicant le matin 1 h, puis confusion
- Fièvre 37,9 °C hier soir
- Pas de chute

EXAMEN J0 (14h, médecin + IDE) :
- GCS 13–14 fluctuant (E3–4 V4 M6)
- CAM : positif (aiguë, fluctuation, inattention, désorganisation)
- MMS : 15/30 (non suffisant seul pour diagnostiquer démence en phase aiguë)
- EVA douleur : 5/10 à la palpation épigastre
- PA 92/54 mmHg ; FC 98 bpm irrégulier ; T° 37,6 °C ; FR 18/min ; SpO2 93 % air ambiant
- Ictère conjonctival ++ ; ascite modérée ; hépatomégalie douloureuse
- Oedèmes chevilles grade 2
- Pas de raideur méningée ; pas de déficit focal nouveau
- Peau : ensoleillement, xérose ; pas d'escarre sacrum (Braden 14)

CONTEXTE FAMILIAL ET ÉTHIQUE :
- Deux fils (55 et 52 ans) : l'aîné demande transfert aux urgences et « réhydratation IV » ; le cadet évoque « qu'il ne souffre pas »
- Pas de directives anticipées rédigées ; M. Bernard avait dit oralement « ne pas me réanimer » à l'IDE il y a 1 mois (non documenté officiellement)
- Oncologue référent joignable ; dernier contact : « soins de support »

BIOLOGIE (ce matin) :
- NFS : Hb 9,8 g/dL, GB 12 400/mm³ (PNN 78 %), plaquettes 98000/mm³
- Créatinine 118 µmol/L → DFG 48 mL/min/1,73 m²
- Urée 22 mmol/L
- Na 131 mmol/L, K 4,6, Cl 94
- Glycémie 0,92 g/L
- Albumine 24 g/L
- Bilirubine totale 186 µmol/L, PAL 420 UI/L, GGT 380 UI/L, ASAT 88, ALAT 62
- TP 42 %, INR 1,6
- Ammoniaque 98 µmol/L (légèrement élevée)
- CRP 78 mg/L
- Lactates 2,4 mmol/L
- ECBU en cours (prélèvement difficile, sonde pas posée)

IMAGERIE :
- Rx thorax : épanchement pleural droit modéré, pas de condensations lobaires
- Échographie FAST (médecin EHPAD) : ascite modérée, métastases hépatiques multiples, pas d'épanchement péricardique significatif
- Scanner abdominal (il y a 3 semaines) : masse pancréatique, métastases hépatiques, pas d'occlusion intestinale
- Pas de scanner cérébral (pas d'indication si CAM + pathologie évidente)

QUESTIONS :
1. Confirmez le delirium (CAM) et hiérarchisez les causes réversibles vs irréversibles chez M. Bernard (hépatique, infection, opioïdes, métabolique). (4 points)
2. Comment distinguez-vous delirium réversible et entrée en phase terminale ? Quels critères cliniques et pronostiques utilisez-vous ? (4 points)
3. Analysez la demande familiale contradictoire : quelle démarche de concertation et quels outils de communication (prognostic, objectifs de soins) ? (4 points)
4. Proposez un plan de soins à 48 h et à 2 semaines (douleur, delirium, nutrition/hydratation, infection) proportionné au stade évolutif. (4 points)
5. Quelles mesures de fin de vie et de documentation (directives, sédation, refus réanimation) en EHPAD en 2003 ? (4 points)`,

    corrigé: `1. DELIRIUM — CAUSES (4 points) :
- Delirium avéré : CAM positif, aigu 36 h, fluctuation, hallucinations, inattention sur cognition antérieure relativement préservée (MMS 26 récent).
- Réversibles partiellement : infection (fièvre, CRP 78, ECBU en cours, possible aspiration/pleurésie) ; hyperammonémie légère + encéphalopathie hépatique (ictère, TP 42 %) ; hyponatrémie 131 ; déshydratation relative.
- Opioïdes : dose morphine augmentée récemment ? — agitation peut être douleur non traitée OU neurotoxicité morphine (myoclonies non décrites) ; métoclopramide (effets extrapyramidaux, confusion).
- Irréversibles : progression tumorale hépatique, thrombopénie 98 000, albumine 24 — terrain fin de vie proche.
- Hiérarchisation pratique : traiter infection si confirmée ; ajuster morphine (douleur EVA 5) ; lactulose si encephalopathie ; corriger Na lentement si symptomatique.

2. DELIRIUM VS FIN DE VIE (4 points) :
- Signes phase terminale : refus alimentaire prolongé, somnolence, aggravation hépatique rapide, thrombopénie, ascite, perte poids 10 %, échec chimiothérapie.
- Delirium réversible si : infection traitable, surdosage morphine, hyponatrémie — amélioration possible 48–72 h.
- Distinction opérationnelle : réponse à traitement ciblé 48 h ; si pas d'amélioration + critères pronostiques oncologie pancréas métastatique (semaines à quelques mois médiane, ici déjà arrêt traitement spécifique).
- Outils : score palliatif (PPI, PaP) ; pas de réanimation ; concertation équipe.
- Ne pas attribuer à « démence » : MMS bas en aigu seul.

3. CONCERTATION FAMILLE (4 points) :
- Entretien séparé puis commun : écouter « tout faire » (deuil anticipé, culpabilité) vs « ne pas souffrir ».
- Expliciter pronostic : cancer pancréas stade IV post-chimiothérapie, complications hépatiques, delirium fréquent en fin de vie.
- Objectifs de soins : confort, dignité, pas d'obstination (cadre légal français évolutif, esprit 2003 : collégialité, refus acharnement).
- Oncologue et médecin EHPAD alignés ; IDE témoin des propos antérieurs patient (« ne pas réanimer ») — formaliser si possible.
- Pas de transfert urgences systématique si soins palliatifs adaptables sur place (sauf demande après information éclairée).

4. PLAN DE SOINS (4 points) :
- 48 h : ECBU + antibiotique si infection urinaire/pneumonie si objectif symptomatique (amoxicilline ou selon antibiogramme, dose IRC) ; morphine titration douleur (EVA 5 → ajuster LP ou doses IR) ; haloperidol faible dose si agitation sévère (éviter lorazépam si encephalopathie) ; lactulose ; restriction liquides IV seulement si soif ou delirium hyperactif réfractaire — pas de réhydratation massive si anasarque/IC.
- Nutrition : pas de nutrition artificielle forcée si refus et phase avancée ; confort oral (glace, humidification bouche).
- 2 semaines : soins palliatifs EHPAD ; revue hebdo douleur ; prévention escarre ; drainage ascite si dyspnée/tension (ponction symptomatique) ; épanchement pleural si dyspnée.
- Arrêt enoxaparine si thrombopénie < 100 000 et bénéfice faible fin de vie — discussion risque embolique vs saignement.

5. FIN DE VIE ET DOCUMENTATION (4 points) :
- Directives anticipées : encourager rédaction si lucidité matinale ; personne de confiance.
- Protocole refus réanimation et limitation thérapeutique : trace écrite dossier EHPAD, signature médecin après concertation.
- Sédation : pas en routine ; si détresse réfractaire agitation/douleur — morphine + sédatif dose proportionnée, loi française postérieure (Claeys-Leonetti 2016) mais esprit 2003 : proportionnalité, équipe.
- Autopsie clinique : pas nécessaire ; certificat décès médecin traitant.
- Accompagnement fils : psychologue, soignant référent ; carnet de soins fin de vie.
- Agitation : environnement calme, présence familiale, lumière jour/nuit.`,

    juryTips: '2003 confusion + fin de vie : CAM obligatoire. Cancer pancréas métastatique = contexte. Ne pas hospitaliser systématiquement si palliatif EHPAD possible. Morphine : agitation = sous-dosage douleur OU surdosage — titrer. Lorazépam + encéphalopathie hépatique = éviter. Métoclopramide confusion. Famille divisée : communication structurée, pas prendre parti. Hydratation IV « tout faire » : discuter proportionnalité. TP 42 %, ammoniaque, CRP = multi-causes delirium. Propos oral « ne pas réanimer » : documenter. Pas de gastrostomie/SNG en fin de vie avancée sans bénéfice. Thrombopénie + enoxaparine. Distinction réversible 48 h test thérapeutique.'
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SUJETS_EVC_2001_2003 };
}