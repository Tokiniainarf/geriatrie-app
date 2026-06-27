// ═══════════════════════════════════════════════════════════════
//  Sujets EVC Gériatrie — Annales 2019 à 2021
//  Format: consigne, temps, barème, sujet complet, corrigé point par point
// ═══════════════════════════════════════════════════════════════
const SUJETS_EVC_2019_2021 = [
  {
    id: 'evc-2019-chute-iatrogenie',
    annee: 2019,
    session: 'Printemps',
    duree: '30 minutes (15 min préparation + 15 min oral)',
    bareme: '20 points total',
    consigne: 'Vous êtes interne aux urgences. M. Bernard est admis après une chute à domicile. Rédigez votre démarche diagnostique et thérapeutique initiale.',
    sujet: `M. BERNARD Henri, 86 ans, est admis aux urgences à 14h pour chute avec traumatisme crânien.

CONTEXTE :
Chute ce matin vers 8h dans la salle de bain. Sa voisine l'a trouvé au sol, conscient mais confus. Pas de témoin direct. Il ne se souvient pas des circonstances. SAMU appelé à 10h.

ANTÉCÉDENTS :
- HTA essentielle depuis 25 ans
- Fibrillation atriale paroxystique (anticoagulation depuis 4 ans)
- Insuffisance cardiaque stade NYHA II (FEVG 45% il y a 1 an)
- Glaucome à angle ouvert
- Prostate hypertrophiée
- Chute il y a 8 mois (fracture du poignet gauche, plâtre 6 semaines)
- Ex-alcool (sevré depuis 15 ans)

TRAITEMENT HABITUEL (ordonnance du médecin traitant, 12 médicaments) :
- Ramipril 10 mg/j le matin
- Furosémide 40 mg/j le matin
- Apixaban 5 mg x2/j
- Bisoprolol 5 mg/j
- Atorvastatine 40 mg/j le soir
- Tamsulosine 0,4 mg/j
- Timolol collyre 1 goutte x2/j
- Paracétamol 1 g x3/j (douleurs arthrosiques)
- Tramadol LP 100 mg x2/j (prescrit il y a 3 semaines pour lombalgie)
- Zolpidem 10 mg au coucher (depuis 2 ans)
- Oméprazole 20 mg/j
- Latanoprost collyre le soir

MODE DE VIE :
Vit seul dans un T3 (3e étage sans ascenseur). Aide à domicile 2x/semaine (ménage). Fille à 80 km, visite mensuelle.

À L'ADMISSION :
- T° : 36,8°C
- PA couché : 128/72 mmHg — PA debout à 1 min : 98/58 mmHg (symptômes : vertiges, vision trouble)
- FC : 88 bpm irrégulier
- FR : 18/min
- SpO2 : 96% air ambiant
- Glycémie capillaire : 1,12 g/L
- Poids : 62 kg (habituel 65 kg il y a 3 mois)
- Douleur : EVA 4/10 (occiput)

EXAMEN CLINIQUE :
- Patient conscient, orienté temps/espace mais ralentissement psychomoteur
- Hématome occipital 4 cm, pas de plaie ouverte
- Pas de déficit moteur ou sensitif des 4 membres
- Pupilles isocores réactives
- Marche impossible (douleur lombaire + vertiges)
- Tinetti (assis) : 8/28
- Get Up and Go : > 30 secondes, instable
- Peau : sécheresse modérée, pas d'escarre
- Pas de globe vésical

ÉCHELLES :
- MMS : 26/30 (erreurs orientation jour, calcul, rappel 2/3)
- GDS-15 : 4/15
- ADL : 4/6 (toilette et habillage partiellement aidés depuis 1 mois)
- IADL : 3/8
- Confusion Assessment Method (CAM) : négatif ce jour

BIOLOGIE (prise à 11h) :
- NFS : Hb 12,8 g/dL, VGM 88 fL, GB 8 200/mm³, plaquettes 245 000/mm³
- Ionogramme : Na 138, K 4,2, Cl 102, créatinine 118 µmol/L (habituelle 95), DFG CKD-EPI 52 mL/min/1,73 m²
- Glycémie : 1,08 g/L à jeun
- CRP : 8 mg/L
- Troponine hs : < 14 ng/L
- TP 78%, INR non interprétable (apixaban)
- TSH : 2,1 mUI/L
- Vitamine D (25-OH) : 14 ng/mL
- Albumine : 34 g/L
- NT-proBNP : 890 pg/mL

IMAGERIE :
- Scanner cérébral sans injection (11h30) : pas d'hémorragie intracrânienne, pas de fracture de la voûte ; atrophie cérébrale modérée ; leucoaraïose périventriculaire
- Radiographie du rachis lombaire : pas de fracture vertébrale évidente ; discarthrose L4-L5
- Radiographie bassin + hanches : pas de fracture
- ECG : fibrillation atriale, FC 85, pas de sus-décalage ST

QUESTIONS :
1. Analysez les causes de la chute chez ce patient (facteurs intrinsèques, extrinsèques, iatrogènes). (5 points)
2. Interprétez la biologie et l'imagerie ; quels diagnostics retenez-vous en urgence ? (4 points)
3. Quelle surveillance et quels examens complémentaires proposez-vous dans les 24 premières heures ? (3 points)
4. Proposez une stratégie de révision médicamenteuse argumentée (liste Beers / STOPP). (5 points)
5. Quel plan de sortie et de prévention des rechutes élaborez-vous ? (3 points)`,

    corrigé: `1. CAUSES DE LA CHUTE (5 points) — attendu : ≥3 catégories avec exemples liés au cas
- Facteurs intrinsèques (2 pts) : âge 86 ans ; antécédent de chute récente (risque x2) ; hypotension orthostatique clinique (PA -30/-14 mmHg debout, symptômes) ; insuffisance cardiaque (fatigue, faiblesse) ; troubles de la marche (Tinetti 8/28, GUG anormal) ; déficit vitamine D (14 ng/mL) ; possible fragilité (perte 3 kg).
- Facteurs extrinsèques (1 pt) : logement 3e sans ascenseur ; salle de bain (risque glissant) ; isolement (délai découverte).
- Facteurs iatrogènes (2 pts) : polymédication (12 médicaments) ; furosémide + ramipril → hypotension, déshydratation ; bisoprolol → bradycardie, fatigue ; tramadol (récent) → sédation, vertiges ; zolpidem → chutes nocturnes/matinales (Beers) ; tamsulosine → hypotension orthostatique (STOPP) ; apixaban → risque hémorragique post-chute (ici scanner négatif).

2. BIOLOGIE / IMAGERIE / DIAGNOSTICS URGENCE (4 points)
- Créatinine 118 vs 95 = IRA fonctionnelle probable (déshydratation, diurétique) — 0,5 pt
- Vit D insuffisante, albumine limite : fragilité — 0,5 pt
- NT-proBNP élevé cohérent avec IC connue, pas de décompensation aiguë isolée — 0,5 pt
- Scanner : exclusion hémorragie sous apixaban = priorité — 1 pt
- Diagnostic retenu : chute multifactorielle + traumatisme crânien bénin + lombalgie post-chute ; pas de syndrome confusionnel ce jour — 1,5 pt

3. SURVEILLANCE 24 h (3 points)
- Monitoring neurologique (Glasgow, pupilles) q2-4h pendant 24 h post-TC — 1 pt
- Surveillance PA couché/debout avant levée — 0,5 pt
- Bilan rénal J1, ionogramme — 0,5 pt
- Réévaluation marche / kiné — 0,5 pt
- Échographie cardiaque si dyspnée ou BNP en hausse (optionnel argumenté) — 0,5 pt

4. RÉVISION MÉDICAMENTEUSE (5 points)
- Arrêt ou réduction zolpidem (Beers : sédatifs-hypnotiques) — 1 pt
- Réévaluer tramadol : arrêt ou remplacement par paracétamol seul si douleur modérée — 1 pt
- Réduire ou suspendre furosémide temporairement si hypotension / IRA — 0,75 pt
- Réévaluer tamsulosine (orthostase) ; alternative ou dose — 0,75 pt
- Maintenir apixaban si pas de saignement (balance bénéfice FA) — 0,5 pt
- Maintenir bisoprolol/ramipril avec adaptation doses selon PA et fonction rénale — 0,5 pt
- Oméprazole : réévaluer indication long terme (iPPE et chutes faible lien mais déprescription globale) — 0,5 pt

5. PLAN DE SORTIE / PRÉVENTION (3 points)
- Hospitalisation courte ou retour domicile si surveillance neurologique rassurante et aidant disponible — 0,75 pt
- Aide à domicile renforcée, téléalarme, adaptation salle de bain — 0,75 pt
- Rééducation à la marche, chaussures, correction vitamine D — 0,75 pt
- Consultation gériatrique / MT à J7-15, réévaluation Tinetti — 0,75 pt`,

    juryTips: 'En 2019 le jury sanctionnait l\'oubli de l\'hypotension orthostatique mesurée et des hypnotiques. Toujours lier chaque médicament à un mécanisme de chute. Le scanner normal sous anticoagulant doit être dit explicitement. Ne pas hospitaliser « par défaut » : argumenter court séjour vs domicile avec surveillance.'
  },

  {
    id: 'evc-2020-confusion-fin-de-vie',
    annee: 2020,
    session: 'Automne',
    duree: '30 minutes (15 min préparation + 15 min oral)',
    bareme: '20 points total',
    consigne: 'Vous êtes interne en unité de soins de courte durée gériatrique. Mme Lefèvre est transférée ce matin pour confusion. Une partie du dossier concerne aussi les souhaits de fin de vie exprimés antérieurement.',
    sujet: `Mme LEFÈVRE Suzanne, 91 ans, est transférée en USCD gériatrique pour confusion aiguë et refus alimentaire.

ANTÉCÉDENTS :
- Démence type Alzheimer (diagnostic il y a 4 ans, stade modéré à sévère)
- HTA, cardiopathie ischémique (IDM silencieux 2015, coronarographie : 2 stents)
- Insuffisance rénale chronique stade 3a
- Fracture du col fémoral droit il y a 14 mois (ostéosynthèse, appareillage partiel)
- Surinfections urinaires à répétition (3 épisodes en 12 mois)

TRAITEMENT À DOMICILE (EHPAD depuis 6 mois) :
- Mémantine 20 mg/j
- Donepezil 10 mg/j (introduit il y a 2 ans)
- Amlodipine 5 mg/j
- Furosémide 20 mg/j
- Atorvastatine 20 mg/j
- Paracétamol 1 g x3/j
- Lactulose si constipation
- Mirtazapine 15 mg au coucher (insomnie + anorexie)
- Risperidone 0,5 mg matin et soir (agitation, depuis 3 semaines)

HISTOIRE DE LA MALADIE :
Depuis 5 jours : somnolence diurne, refus des repas, agitation nocturne, deux chutes sans fracture. Ce matin : température 38,6°C, urine trouble selon l'AS. Directrice EHPAD demande « bilan complet ».

DIRECTIVES ANTICIPÉES (dossier EHPAD 2018, révisées 2020) :
- Personne de confiance : fille aînée Claire
- « Ne pas réanimer, ne pas intuber »
- « Si maladie grave réversible, traiter ; si phase terminale, privilégier le confort »
- Refus d'hospitalisation en réanimation exprimé par la patiente en 2018 (vidéo archivée)

À L'ADMISSION USCD (11h) :
- T° : 38,2°C
- PA : 102/58 mmHg
- FC : 96 bpm
- FR : 24/min
- SpO2 : 91% air ambiant
- Diurèse : 450 mL sur 12 h (sonde urinaire posée à l'EHPAD ce matin)

EXAMEN :
- Somnolente, ouvre les yeux à la stimulation verbale
- Désorientée temps/lieu, pas de langage intelligible durable
- Muqueuses sèches, plis cutanés persistants
- Crépitants bases pulmonaires bilatéraux discrets
- Abdomen souple, pas de défense
- Oedèmes des chevilles ++
- Score douleur Algoplus : 2/5 (grimaces à la mobilisation hanche)

ÉCHELLES :
- MMS : non réalisable (évaluation antérieure : 12/30 il y a 2 mois)
- CAM : positif (fluctuation, inattention, désorganisation)
- NPI : agitation modérée, apathie sévère
- ADL : 1/6
- Braden : 12/23 (risque escarre élevé)
- Échelle de dépression Cornell : non interprétable

BIOLOGIE :
- NFS : Hb 10,2 g/dL, GB 14 500/mm³ (PNN 88%), plaquettes 310 000
- Créatinine : 168 µmol/L (habituelle 135), DFG 28 mL/min
- Na 151 mmol/L, K 3,4 mmol/L, Cl 112
- Protéines totales 58 g/L, albumine 26 g/L
- CRP 186 mg/L, PCT 1,2 ng/mL
- Lactates 2,8 mmol/L
- Gaz du sang (lunettes 2 L/min) : pH 7,48, PaCO2 32, PaO2 68, HCO3 24
- ECBU (EHPAD) : leucocyturie > 500/mm³, nitrites positifs, culture en cours

IMAGERIE :
- Rx thorax : cardiomégalie, redistribution vasculaire, pas de condensations francs
- Échographie vésico-rénale : rein gauche dilatation pyélocalicielle grade 1, vessie avec sonde, résidu nul
- Scanner cérébral (faite à 80 ans pour AVC) : atrophie diffuse, pas de répétition demandée ce jour

QUESTIONS :
1. Définissez le tableau clinique actuel et les diagnostics syndromiques (confusion, déshydratation, infection…). (4 points)
2. Proposez une prise en charge étiologique et symptomatique des 48 premières heures. (5 points)
3. Analysez le traitement neuropsychiatrique (donepezil, mémantine, mirtazapine, risperidone) dans ce contexte. (4 points)
4. La fille demande « tout faire » ; comment intégrez-vous les directives anticipées et la personne de confiance ? (4 points)
5. À J+5, absence d'amélioration cognitive, sepsis contrôlé mais état général fragile : quelle démarche de soins de fin de vie / palliatifs proposez-vous en USCD ou retour EHPAD ? (3 points)`,

    corrigé: `1. TABLEAU ET DIAGNOSTICS SYNDROMIQUES (4 points)
- Confusion aiguë (delirium) sur démence : CAM +, fluctuation, aigu — 1 pt
- Probable infection urinaire compliquée / pyélonéphrite (fièvre, CRP, ECBU, douleur à mobilisation) — 1 pt
- Hypernatrémie 151 = déshydratation chronique aiguë aggravée — 0,75 pt
- Insuffisance rénale aiguë sur IRC (168 vs 135) — 0,5 pt
- Hypoxémie, surcharge hydrique (oedèmes, IC) — 0,75 pt

2. PRISE EN CHARGE 48 h (5 points)
- Antibiothérapie adaptée au DFG : ceftriaxone ou équivalent selon local ; ajuster après antibiogramme — 1 pt
- Réhydratation prudente (hypernatrémie : eau entérale si possible, sinon NaCl 0,45% ou glucose 5% sous monitoring Na) — 1,25 pt
- Oxygénothérapie cible SpO2 94-98%, pas d'hyperoxie — 0,5 pt
- Réévaluer diurétique, balance hydrique, poids — 0,5 pt
- Douleur : paracétamol, éviter AINS ; Algoplus régulier — 0,5 pt
- Prévention escarres, nursing, pas de contention physique — 0,5 pt
- Surveillance : diurèse, Na q12-24h, signes sepsis — 0,75 pt

3. TRAITEMENT NEUROPSYCHIATRIQUE (4 points)
- Risperidone : dernier recours, durée courte, risque AVC/mortalité en démence ; ici réévaluer arrêt si agitation contrôlable autrement — 1,25 pt
- Mirtazapine : sédation, chutes ; réévaluer au-delà de l'anorexie — 0,75 pt
- Donepezil / mémantine : pas utile en phase terminale ou delirium sévère ; arrêt discutable si peu d'oral et stade sévère (déprescription) — 1,5 pt
- Privilégier approche non médicamenteuse delirium (réorientation, lunettes, auditives, présence fille) — 0,5 pt

4. DIRECTIVES ET PERSONNE DE CONFIANCE (4 points)
- Personne de confiance consultée pour décisions si patiente incapable — 1 pt
- Réconciliation souhaits patiente (2018-2020) vs fille : entretien, pas de réanimation/intubation — 1,25 pt
- Proportionnalité des soins : traiter infection réversible ≠ acharnement — 1 pt
- Trace écrite du colloque, révision objectifs de soins — 0,75 pt

5. FIN DE VIE / PALLIATIFS J+5 (3 points)
- Reconnaissance phase avancée / risque de déclin malgré traitement infection — 0,75 pt
- Soins palliatifs : confort, bouche, douleur, anxiété ; hydratation selon confort pas systématique IV — 1 pt
- Retour EHPAD possible avec protocole palliatif et MT coordonnateur ; pas d'hospitalisation inutile — 0,75 pt
- Sédation proportionnée si détresse réfractaire (cadre légal) — 0,5 pt`,

    juryTips: 'Session 2020 : confusion + éthique. Le jury attend l\'articulation CAM, causes organiques multiples et déprescription des anticholinestérasiques en fin de phase. Ne pas confondre « tout traiter l\'infection » et « tout faire en réanimation ». Citer la personne de confiance et les DMP/directives par leur nom.'
  },

  {
    id: 'evc-2021-polymedication-sortie-ehpad',
    annee: 2021,
    session: 'Printemps',
    duree: '30 minutes (15 min préparation + 15 min oral)',
    bareme: '20 points total',
    consigne: 'Vous êtes médecin coordinateur en EHPAD. M. Girard revient d\'hospitalisation (pneumonie). Rédigez la réconciliation médicamenteuse et le projet de sortie de soins à 30 jours.',
    sujet: `M. GIRARD Robert, 82 ans, retour en EHPAD « Les Tilleuls » après hospitalisation de 9 jours pour pneumonie communautaire.

ANTÉCÉDENTS :
- BPCO GOLD III (VEMS 42% théorique)
- Diabète type 2 (HbA1c habituelle 7,8%)
- Insuffisance cardiaque à FEVG préservée (55%)
- FA permanente anticoagulée
- Obésité (IMC 32)
- Apnées du sommeil (PPC non utilisée régulièrement à l'EHPAD)
- Dépression post-veuvage (diagnostic 2019)

HOSPITALISATION (feuille de liaison) :
- Amoxicilline-acide clavulanique IV puis amoxicilline per os (arrêt à la sortie)
- Oxygénothérapie sevrée (actuellement air ambiant SpO2 94%)
- Insuline rapide puis retour metformine
- Surdosage inadvertant : introduction temporaire prednisone 30 mg/j x5 jours (arrêté à J8)
- Nouvelle prescription à la sortie : salbutamol + budésonide/formétérol en inhalateur

TRAITEMENT EHPAD AVANT HOSPITALISATION (relevé infirmier) :
1. Metformine 1000 mg x2/j
2. Gliclazide MR 60 mg/j
3. Ramipril 5 mg/j
4. Furosémide 40 mg/j
5. Bisoprolol 2,5 mg/j
6. Rivaroxaban 20 mg/j
7. Atorvastatine 40 mg/j
8. Tiotropium 18 mcg/j
9. Salbutamol 100 mcg à la demande
10. Sertraline 50 mg/j
11. Lorazépam 1 mg au coucher SOS (utilisé 4-5x/semaine)
12. Oméprazole 20 mg/j
13. Paracétamol 1 g x3/j
14. Vitamine D 800 UI/j
15. Lactulose

TRAITEMENT À LA SORTIE HÔPITAL (14 médicaments + inhalateurs) :
Hôpital a ajouté sans retirer l'ancien : prednisolone 5 mg/j « à décroître », calcium + vitamine D forte dose, metformine maintenue, gliclazide maintenu, ramipril, furosémide, bisoprolol, rivaroxaban, atorvastatine, sertraline, oméprazole ; budésonide/formétérol 2 inh x2/j ; tiotropium maintenu ; lorazépam non mentionné (oubli liaison).

À L'ADMISSION RETOUR EHPAD (J0 sortie) :
- T° 37,1°C — PA 134/78 — FC 78 FA — FR 20 — SpO2 93% repos
- Poids 94 kg (92 kg avant hospi, 96 kg il y a 6 mois)
- Glycémie capillaire 2,22 g/L à 17h (post-déjeuner)
- Pas de confusion (MMS 27/30)
- Toux résiduelle, pas d'expectoration purulente
- Oedèmes chevilles légers
- Pas de douleur thoracique

BIOLOGIE J0 (hôpital le matin même) :
- NFS : Hb 13,1, GB 9 800, plaquettes 220 000
- Créatinine 142 µmol/L (habituelle EHPAD 125), DFG 48
- Na 136, K 4,6
- Glycémie à jeun 1,98 g/L
- HbA1c : 8,9%
- NT-proBNP 1 450 pg/mL
- CRP 22 mg/L (en baisse, 180 à l'entrée hospi)
- ALAT 48 UI/L, GGT 72 UI/L
- Albumine 31 g/L

IMAGERIE :
- Rx thorax sortie : résidu infiltrat base droite, pas d'épanchement
- ECG : FA 75 bpm, pas d'ischémie aiguë

ÉVALUATION AUTONOMIE :
- ADL : 5/6 (aide partielle habillage)
- IADL : 4/8
- Tinetti : 19/28
- MNA : 22/30
- GDS-15 : 7/15

QUESTIONS :
1. Réalisez une réconciliation médicamenteuse : listez les problèmes de prescription (doublons, oublis, iatrogénie). (5 points)
2. Proposez une ordonnance optimisée à J0 avec justification (STOPP/START, Beers). (5 points)
3. Interprétez la biologie et les comorbidités pour le risque métabolique et cardiorénal post-hospitalisation. (3 points)
4. Définissez le projet de soins à 30 jours (pneumonie résiduelle, BPCO, diabète, sortie « sociale » au sens maintien EHPAD). (4 points)
5. Quels indicateurs et quel suivi pour éviter une réhospitalisation à 30 jours ? (3 points)`,

    corrigé: `1. RÉCONCILIATION — PROBLÈMES (5 points)
- Doublon bronchodilatateur : tiotropium + LABA/CSI (formétérol/budésonide) = à rationaliser selon BPCO — 1 pt
- Gliclazide + metformine + glycémie 2,22 et HbA1c 8,9% : risque hypoglycémie post-hospi — 1 pt
- Prednisone/prednisolone : arrêt brutal vs relais 5 mg à clarifier (sevrage adrenal) — 0,75 pt
- Lorazépam oublié liaison : risque sevrage ou usage non tracé — 0,75 pt
- Double vitamine D si calcium + forte dose hôpital + EHPAD 800 UI — 0,5 pt
- Rivaroxaban 20 mg avec DFG 48 : dose 15 mg à discuter (règles 2021) — 0,75 pt
- Oméprazole long cours sans indication claire post-AAC — 0,25 pt

2. ORDONNANCE OPTIMISÉE J0 (5 points)
- BPCO : maintenir LABA/CSI + arrêt tiotropium OU inverse selon protocole local ; salbutamol SOS — 1,25 pt
- Diabète : metformine si DFG>30 ; réduire ou arrêter gliclazide (hypoglycémie, âge) ; éducation glycémie — 1,25 pt
- Sevrage corticoïde : arrêt prednisolone 5 mg si déjà weaning hospi, pas de reprise sans indication — 0,75 pt
- Rivaroxaban 15 mg/j si DFG 30-49 (FA) — 0,75 pt
- Arrêt ou substitution lorazépam (Beers) ; traiter anxiété par non médicamenteux + sertraline — 0,75 pt
- Maintenir IC : ramipril, furosémide, bisoprolol avec surveillance poids/Na — 0,5 pt
- Une seule supplémentation Vit D ; réévaluer oméprazole — 0,75 pt

3. BIOLOGIE / RISQUE MÉTABOLIQUE CARDIORÉNAL (3 points)
- IRA sur IRC (142 vs 125) : hydratation, éviter AINS, adapter metformine/DOAC — 1 pt
- BNP élevé : surcharge légère, surveiller diurétique — 0,75 pt
- HbA1c 8,9% et hyperglycémie post-prandiale : déséquilibre per et intra-hospi — 0,75 pt
- CRP résiduelle : surveillance clinique pneumonie — 0,5 pt

4. PROJET DE SOINS 30 JOURS (4 points)
- Pneumonie : surveillance clinique, pas d'antibiotique si apyrète et CRP en baisse (durée totale déjà complète) — 1 pt
- BPCO : réhabilitation respiratoire, vaccination grippe/pneumocoque à jour — 0,75 pt
- Diabète : plan glycémique, pas d'objectif trop strict en EHPAD — 0,75 pt
- Maintien EHPAD : pas de « sortie » vers domicile sauf demande familiale ; objectif stabilisation et prévention réhospitalisation — 1 pt
- PPC apnées : réévaluation observance — 0,5 pt

5. INDICATEURS / SUIVI ANTI-RÉHOSPITALISATION (3 points)
- Poids 3x/semaine, signes décompensation IC — 0,75 pt
- Glycémie capillaire courbe avant/après modif traitement — 0,75 pt
- RDV MT ou gériatre à J15, bilan créatinine — 0,75 pt
- Coordination fille / personne de confiance, feuille de liaison complétée — 0,75 pt`,

    juryTips: '2021 : la réconciliation post-hospitalisation est le cœur du sujet. Le jury note la lecture de la feuille de liaison et le comptage des médicaments (15→14 avec oublis). Mentionner rivaroxaban dose-rénale et sulfamides hypoglycémiants en gériatrie. « Sortie EHPAD » ici = retour après hospi, pas sortie vers domicile — bien préciser.'
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SUJETS_EVC_2019_2021 };
}