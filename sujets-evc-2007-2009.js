// ═══════════════════════════════════════════════════════════════
//  Sujets EVC Gériatrie — Années 2007, 2008, 2009 (épreuves complètes)
//  Format: consigne, temps, barème, sujet complet, corrigé point par point
// ═══════════════════════════════════════════════════════════════
const SUJETS_EVC_2007_2009 = [
  {
    id: 'evc-2007-denutrition-polypharmacie',
    annee: 2007,
    session: 'Printemps',
    duree: '30 minutes (15 min préparation + 15 min oral)',
    bareme: '20 points total',
    consigne: 'Vous êtes médecin coordonnateur en EHPAD. M. Fontaine est hospitalisé depuis 3 semaines pour dénutrition et altération de l\'état général. Rédigez votre évaluation gérontologique, analysez la iatrogénie médicamenteuse et proposez un plan nutritionnel et de déprescription.',
    sujet: `M. FONTAINE Henri, 86 ans, est admis en EHPAD secteur « soins de longue durée » depuis 21 jours, à la suite d'une hospitalisation en court séjour gériatrique pour « amaigrissement, asthénie, chutes à répétition ».

ANTÉCÉDENTS MÉDICAUX :
- Insuffisance cardiaque chronique stade NYHA II–III (FEVG 40 % en 2005)
- Fibrillation atriale permanente (anticoagulation depuis 8 ans)
- BPCO stade modéré (VEMS 55 % théorique)
- Diabète type 2 depuis 20 ans (complications : neuropathie périphérique, rétinopathie stabilisée)
- IRC stade 3b (créatinine habituelle 140–160 µmol/L)
- Lithiase urinaire récidivante
- Glaucome à angle ouvert
- Pas d'ATCD cognitif documenté ; MMS à l'entrée EHPAD : 22/30

TRAITEMENT À L'ENTRÉE EN EHPAD (liste transmise par l'hôpital et la pharmacie de ville) :
- Furosémide 40 mg matin + 20 mg midi
- Spironolactone 25 mg/j
- Bisoprolol 5 mg/j
- Warfarine (ajustement INR cible 2–3) — dernière dose hier
- Digoxine 0,125 mg/j (prescrit depuis 12 ans)
- Amlodipine 10 mg/j
- Ramipril 5 mg/j
- Metformine 850 mg x2/j
- Gliclazide MR 60 mg/j
- Atorvastatine 40 mg/j
- Tamsulosine 0,4 mg/j
- Tiotropium 1 inhalation/j
- Salbutamol à la demande
- Omérazole 20 mg/j (depuis 6 ans, « pour protéger l'estomac »)
- Paracétamol 1 g x4/j (prescrit par IDE domicile)
- Tramadol 50 mg x3/j (douleur lombaire chronique)
- Alprazolam 0,25 mg x2/j + 0,5 mg au coucher (anxiété)
- Hydroxyzine 25 mg au coucher (insomnie)
- Latanoprost collyre le soir
- Acétazolamide 250 mg x2/j (glaucome — ajouté il y a 4 mois par ophtalmologue)
- Carbonate de calcium + vitamine D 500 mg/400 UI x2/j
- Fer sulfate 80 mg/j (Hb basse en mars)
- Multivitamines « senior »

CONTEXTE DE VIE AVANT EHPAD :
- Veuf depuis 2 ans ; vivait seul en appartement (3e étage sans ascenseur)
- Fille unique (58 ans), aide 2 fois/semaine, épuisement aidant
- Retraité ouvrier ; revenus modestes
- Perte d'appétit progressive depuis le deuil ; repas « picotage »
- 4 chutes en 6 mois (dernière : fracture du poignet gauche traitée orthopédiquement)
- Poids à domicile : non pesé régulièrement ; dernière valeur connue 58 kg (il y a 1 an : 72 kg)

HISTOIRE DEPUIS L'ADMISSION EHPAD :
- Refus alimentaire initial (anxiété d'adaptation), amélioration partielle
- Toux productive chronique, expectorations jaunâtres le matin
- Constipation (selles tous les 4–5 jours malgré laxatifs occasionnels)
- Somnolence diurne importante (sieste > 3 h/j)
- Confusion intermittente le soir (2 épisodes en 10 jours, résolus en < 24 h)
- Escarre stade II talon droit (découverte à J5)

ÉVALUATION À J21 (consultation médecin coordonnateur) :
- Poids 51 kg, taille 1,72 m → IMC 17,2 kg/m²
- Perte de poids documentée : −11 kg en 12 mois (−17 % du poids habituel estimé 62 kg)
- PA 102/58 mmHg assise, 88/52 mmHg debout à 3 min (malaise rapporté)
- FC 58 bpm irrégulier ; FR 20/min ; SpO2 93 % air ambiant
- T° 36,4 °C
- Signes de déshydratation : muqueuses sèches, pli cutané lent, urine concentrée
- ADL (Katz) : 2/6 — aide totale toilette et habillage ; alimentation avec assistance ; continence urinaire altérée (protections)
- IADL (Lawton) : 0/8
- MMS : 20/30 (fluctuation selon horaire)
- GDS-15 : 8/15
- MNA complet : 14/30 (dénutrition avérée)
- MUST : 4 (risque nutritionnel élevé)
- Force de préhension : 14 kg main droite (sarcopénie)
- Calf circumference : 28 cm (< 31 cm = sarcopénie probable)
- Douleur lombaire : EVA 5/10 ; pas de douleur abdominale actuelle
- Oedèmes membres inférieurs grade 1 ; crépitants bases pulmonaires bilatéraux discrets
- Abdomen : distension modérée, timpanisme, pas de défense
- Peau : fragilité, ecchymoses avant-bras (anticoagulation + chutes)

BIOLOGIE (prise à jeun, J20) :
- NFS : Hb 10,8 g/dL, VGM 88 fL, MCV normale, GB 5 200/mm³, plaquettes 198 000/mm³
- Ferritine 45 ng/mL, transferrine 1,8 g/L, CST 18 %
- Créatinine 168 µmol/L → DFG estimé (CKD-EPI) 32 mL/min/1,73 m²
- Urée 12,4 mmol/L
- Ionogramme : Na 132 mmol/L, K 5,1 mmol/L, Cl 98 mmol/L
- Glycémie à jeun 1,42 g/L ; HbA1c 7,8 %
- Albumine 28 g/L ; préalbumine 0,12 g/L
- CRP 18 mg/L
- ProBNP 1 850 pg/mL
- INR 3,4 (prise J19)
- Digoxinémie 1,8 ng/mL (fourchette thérapeutique 0,8–2)
- TSH 1,9 mUI/L ; T4L normale
- Vitamine B12 : 280 pg/mL (limite basse)
- Folates sériques normaux
- 25-OH vitamine D : 8 ng/mL
- ASAT/ALAT normales ; PAL 145 UI/L
- Magnésium 0,72 mmol/L

IMAGERIE ET EXAMENS :
- Rx thorax (J8) : cardiomégalie, redistribution vasculaire, pas d'infiltrat franc
- Échographie cardiaque (hôpital, il y a 3 semaines) : FEVG 38 %, dilatation oreillette gauche, HTAP légère
- TDM abdominal (hôpital) : pas d'occlusion ; fécalome rectal ; reins atrophiques modérés
- Densitométrie (jamais faite) : indication forte (âge, IMC bas, vitamine D)
- ECG : fibrillation atriale, FC moyenne 65, pas de surcharge ventriculaire aiguë

QUESTIONS :
1. Définissez et caractérisez la dénutrition de M. Fontaine (critères HAS, MNA, conséquences gériatriques). Quel bilan complémentaire proposez-vous ? (4 points)
2. Analysez la polypharmacie et l'iatrogénie : médicaments inappropriés (critères Beers / STOPP), interactions, lien avec dénutrition, chutes, confusion. (5 points)
3. Proposez un plan nutritionnel et de réhabilitation nutritionnelle adapté à l'EHPAD et à ses comorbidités (IRC, IC, diabète). (4 points)
4. Élaborez une stratégie de déprescription priorisée et sécurisée (anticoagulation, IC, douleur, psychotropes). (4 points)
5. Quels objectifs de suivi à 1 et 3 mois ? Indicateurs de réponse et critères d'alerte. (3 points)`,

    corrigé: `1. DÉNUTRITION — CARACTÉRISATION ET BILAN (4 points) :
- Définition : dénutrition protéino-énergétique avérée (HAS 2007) : IMC < 18,5 OU perte de poids > 10 % en 6 mois / > 15 % en 3 mois OU albumine < 30 g/L + contexte inflammatoire/chronique.
- Ici : IMC 17,2, perte ~17 %/12 mois, albumine 28 g/L, MNA 14/30, MUST 4, préalbumine basse = dénutrition sévère avec composante cachexie cardiaque et probable malnutrition chronique post-veuvage.
- Conséquences : sarcopénie (préhension, circonférence mollet), risque escarres, infections (toux, CRP ↑), confusion (déshydratation, polypills), prolongation récupération fracture, mortalité ↑.
- Bilan complémentaire : évaluation déglutition (EAT-10, test texture si toux) ; dentisterie/prothèse ; coproculture si diarrhée ; recherche malabsorption si stagnation ; écho testiculaire non indiqué ; suivi poids 2x/semaine, circonférence bras ; bilan nutrition IDE (ingesta 3 jours) ; densitométrie quand stabilisé ; gastro si suspicion SIBO/œsophagite (oméprazole long cours).

2. POLYPHARMACIE ET IATROGÉNIE (5 points) :
- Définition : ≥ 5 médicaments (ici ~20) = polypathologie + risque ADE majeur.
- Beers / inappropriés PA : digoxine sans indication stricte si FA + IC (bénéfice faible, toxicité) ; digoxinémie haute limite + IRC ; hydroxyzine + alprazolam (sédation, anticholinergique, chutes, confusion) ; tramadol + anticoagulation (saignement) ; omérazole long terme sans indication forte ; metformine si DFG < 30 (contre-indication relative < 30) ; spironolactone + furosémide + ramipril + IRC (hyperkaliémie, hypotension) ; acétazolamide + furosémide (déshydratation, acidose) ; fer oral si constipation / tolérance.
- Interactions : warfarine + multiples (antibiotiques futurs, omérazole faible) ; INR 3,4 = suranticoagulation (chutes, ecchymoses).
- Lien dénutrition : anorexie (digoxine, métformine GI), nausées, constipation (opioïdes, fer), dysgueusie ; hyperhydratation théorique IC vs déshydratation réelle (diurétiques).
- Chutes : hypotension orthostatique, benzodiazépines, tramadol, hypoglycémie possible (gliclazide + repas irréguliers).
- Confusion : anticholinergiques, opioïdes, hyponatrémie (132), déshydratation, sepsis pulmonaire à écarter.

3. PLAN NUTRITIONNEL EHPAD (4 points) :
- Objectif : 30–35 kcal/kg/j réelles (~1 600–1 800 kcal), protéines 1,2–1,5 g/kg/j (60–75 g/j) si IRC stable sans dialyse (adapter à 1,1 si hyperphosphorémie future).
- Voie orale prioritaire : textures adaptées si dysphagie ; 5–6 prises ; enrichissement (crème, huile, protéines lactées) ; collations ; environnement calme, aide humaine à chaque repas.
- Supplémentation orale hypercalorique hyperprotidique 200–400 mL/j (type HP-HC) entre repas ; pas à jeun pour IC.
- Diabète : surveiller glycémies capillaires, adapter gliclazide si apports irréguliers ; éviter hypoglycémie > hyperglycémie modérée chez PA dénutri.
- IRC : limiter K+ si > 5,5 ; pas de restriction protéique sévère (dénutrition prime) ; hydratation 1–1,5 L si IC compensée et Na stable.
- IC : repas fractionnés, pauvres en sel ; surveiller surcharge ; pas de surhydratation forcée.
- Escarre : nutrition = pilier ; repositionnement ; protocole plaie.
- Équipe : diététicien, IDE pesée, kiné mobilisation, orthophoniste si besoin.

4. DÉPRESCRIPTION PRIORISÉE (4 points) :
- Urgent : réduire/arrêter hydroxyzine et alprazolam (sevrage progressif benzodiazépines) ; revoir tramadol (paracétamol seul ou faible dose, topique) ; arrêter digoxine si pas de preuve bénéfice récent ; métformine arrêt si DFG < 30 ; fer si pas de carence martiale claire ou switch IV si nécessaire ultérieurement.
- Court terme : omérazole — essai arrêt si pas d'ulcère/REF ; spironolactone — réévaluer K+ et PA ; acétazolamide — coordination ophtalmo ; multivitamines inutiles.
- Warfarine : décision collégiale risque/bénéfice (chutes, INR labile vs FA + FEVG basse) ; si poursuite : education, INR cible 2–3, revoir interactions ; alternative AVK si critères NOAC (selon DFG et poids).
- IC : maintenir bisoprolol faible dose si PA tolérée ; furosémide dose minimale efficace ; ramipril si créat stable.
- Anticoagulation : ne pas arrêter sans plan ; corriger surdosage (INR 3,4).
- Méthode : une modification à la fois ; suivi 1–2 semaines ; implication patient/fille ; pharmacien clinique.

5. SUIVI 1 ET 3 MOIS (3 points) :
- 1 mois : poids +1 à 2 kg objectif ; albumine stable ou ↑ ; pas de confusion nouvelle ; 0 chute avec fracture ; INR dans cible ; K+ et créat stables ; MNA > 17 ; escarre stade en amélioration.
- 3 mois : IMC > 18,5 ou gain 5 % poids initial admission ; ADL stable ou +1 item ; reprise préhension ; déprescription au moins 4–5 molécules documentée.
- Alertes : perte poids > 2 %/mois, Na < 130, K+ > 5,5, INR > 4, infection, refus alimentaire total > 48 h → réhospitalisation ou nutrition entérale si consentement/fille.`,

    juryTips: 'En 2007 le jury valorise la grille MNA/MUST et la loi nutrition EHPAD (repas, enrichissement). Polypharmacie > 10 lignes : citer Beers explicitement. Digoxine + FA est piège classique. Métformine et DFG 32 = à arrêter. Ne pas oublier escarre et dénutrition comme cercle vicieux. Déprescription structurée (START/STOPP avant l\'ère nommée STOPP). INR élevé + chutes = urgence sécurité. Distinction cachexie cardiaque vs dénutrition pure (BNP, oedèmes).'
  },

  {
    id: 'evc-2008-chute-prevention',
    annee: 2008,
    session: 'Automne',
    duree: '30 minutes (15 min préparation + 15 min oral)',
    bareme: '20 points total',
    consigne: 'Vous êtes médecin en consultation de gériatrie hospitalière. Mme Lefebvre est adressée après une chute avec fracture du col fémoral opérée. Rédigez l\'évaluation du risque de chute, le bilan étiologique et un programme de prévention secondaire à la sortie.',
    sujet: `Mme LEFEBVRE Suzanne, 81 ans, est vue en consultation pré- sortie à J12 après ostéosynthèse d'une fracture sous-trochantérienne gauche (vis gamma nail, voie percutanée).

ANTÉCÉDENTS MÉDICAUX :
- Ostéoporose post-ménopausique (fracture tassement T12 il y a 5 ans, non traitée au long cours)
- HTA essentielle
- Syndrome dépressif majeur en rémission sous traitement depuis 3 ans
- Hypothyroïdie auto-immune substituée
- Syndrome des jambes sans repos modéré
- Pas de diabète ; pas d'ATCD vasculaire cérébral
- Cataracte opérée bilatérale (vision correcte avec correction)
- Surdité presbyacousie (appareillage refusé)

TRAITEMENT AVANT CHUTE :
- Lévothyroxine 100 µg/j
- Amlodipine 5 mg/j
- Lisinopril 10 mg/j
- Sertraline 50 mg/j
- Zolpidem 10 mg au coucher (prescrit il y a 2 ans pour insomnie)
- Prégabaline 75 mg x2/j (douleur neuropathique « jambes »)
- Ropinirole 0,5 mg le soir (SJSR)
- Carbonate de calcium 1 g x2/j + cholécalciférol 800 UI/j (prescrit après fracture vertébrale puis arrêté par la patiente après 6 mois)
- Dafalgan à la demande

CIRCONSTANCES DE LA CHUTE (témoignage patiente et fils) :
- Chute nocturne à 2h du matin en se levant pour les toilettes, sans éclairage
- Glissade sur tapis de la chambre ; pas de syncope rapportée, pas de malaise
- Impossible de se relever ; téléalarme non portée (abonnement résilié 1 an avant)
- Délai secours 45 min ; pas de traumatisme crânien
- Hospitalisation orthopédique ; rééducation précoce débutée

ÉTAT ACTUEL (J12, consultation gériatrique) :
- Poids 54 kg, taille 1,58 m → IMC 21,6 kg/m² (perte 3 kg depuis l'accident)
- PA 128/72 mmHg assise ; orthostatisme : PA 108/65 mmHg à 1 min, 102/60 à 3 min, vertiges et palpitations
- FC 76 bpm ; SpO2 97 %
- Hémoglobine (J10) : 10,2 g/dL (saignement per-opératoire + anémie chronique)
- Douleur hanche : EVA 4/10 au repos, 7/10 à la mobilisation
- MMS : 27/30
- GDS-15 : 5/15
- Timed Up and Go (avec déambulateur, aide humaine) : non réalisable en sécurité ; lever-chaise 5 répétitions : impossible côté gauche
- Tinetti (version simplifiée assis) : équilibre assis 10/16 — appui unipodal impossible
- Get Up and Go alternatif : 22 secondes avec aide (cible < 14 s)
- 4 stages balance test : tenue pieds rapprochés 10 s, semi-tandem 5 s, tandem < 3 s
- Force quadriceps : manuelle 3/5 gauche, 4/5 droite
- ROM hanche gauche : flexion 70°, douloureuse
- Marche : déambulateur à 3 roues, pas de charge selon chirurgien jusqu'à J21
- Peur de chuter (échelle FES-I) : score 42/64 (peur modérée à sévère)

ENVIRONNEMENT DOMICILE :
- Appartement 2e étage avec ascenseur ; salle de bain douche à l'italienne (barre installée)
- Vit seule ; fils à 15 km, présent 3 jours/semaine
- Tapis dans chambre et couloir ; pas de lampe de chevet accessible
- Chien petit format (risque de glissade mentionné par fils)

BIOLOGIE (J11) :
- NFS : Hb 10,2 g/dL, VGM 92 fL, GB 7 100/mm³, plaquettes 310 000/mm³
- Créatinine 88 µmol/L (DFG 58 mL/min/1,73 m²)
- Ionogramme : Na 141, K 4,0, Ca corrigé albumine 2,18 mmol/L
- Phosphore 1,12 mmol/L
- 25-OH vitamine D : 11 ng/mL
- PTH 78 pg/mL
- TSH 2,1 mUI/L
- Glycémie à jeun 0,92 g/L
- Albumine 34 g/L
- CRP 22 mg/L (post-opératoire)

IMAGERIE :
- Rx hanche post-op (J2) : matériel en place, pas de descellement
- Densitométrie (réalisée à J8) : T-score col fémoral −3,2 ; rachis L1–L4 −2,8 ; fracture vertébrale T12 confirmée
- Rx thorax : normal
- TDM cérébral (non faite) : pas d'indication si pas de traumatisme crânien

ÉVALUATION ORTHOPÉDIQUE :
- Charge partielle autorisée à partir de J21 selon consolidation
- Kinésithérapie 5 séances/semaine en SSR ou à domicile à organiser

QUESTIONS :
1. Classifiez cette chute (typologie) et listez les facteurs intrinsèques et extrinsèques identifiés. Utilisez un outil de stratification du risque. (4 points)
2. Quel bilan étiologique complémentaire proposez-vous (cardiovasculaire, neurologique, ostéoporose, iatrogénie) ? (4 points)
3. Détaillez le programme de prévention secondaire : traitement de l'ostéoporose, rééducation, adaptation du domicile, médicaments à revoir. (5 points)
4. Construisez le parcours de soins post-fracture (coordination SSR, kiné, IDE, social) pour les 3 premiers mois. (4 points)
5. Comment évaluez-vous le retour à domicile et quels critères de réhospitalisation ou placement temporaire ? (3 points)`,

    corrigé: `1. CLASSIFICATION ET FACTEURS DE CHUTE (4 points) :
- Typologie : chute « accidentelle » nocturne à l'occasion d'un lever pour miction, glissade (tapis, obscurité) ; pas de syncope établie mais hypotension orthostatique contributive possible ; fracture ostéoporotique = chute de faible énergie.
- Intrinsèques : ostéoporose sévère (T-score −3,2), sarcopénie relative, peur de chuter, douleur, force quadriceps diminuée, SJSR (lever nocturne), hypotension orthostatique, zolpidem, prégabaline (sédation), âge, anémie (fatigue).
- Extrinsèques : tapis, absence éclairage, pas de téléalarme, chien.
- Outils : STRATIFY ou score de Morse en contexte hospitalier ; en ambulatoire : Timed Up and Go, Tinetti, historique chutes ; ici risque très élevé post-fracture (50 % rechute à 1 an sans programme).
- Fracture sous-trochantérienne = zone ostéoporotique majeure, risque réfracture hanche controlatérale élevé.

2. BILAN ÉTIOLOGIQUE COMPLÉMENTAIRE (4 points) :
- Cardiovasculaire : ECG ; éventuellement ETT si souffle/syncope future ; test orthostatique répété ; Holter si palpitations (pas obligatoire ici).
- Neurologique : pas de signe focal ; si troubles marche post-rééducation : recherche parkinsonisme, neuropathie (glycémie, B12).
- Ostéoporose : DGT déjà faite ; Ca, P, vitamine D, PTH — carence D avérée ; bilan phosphocalcique complet ; pas de myélome si Hb seule basse (électrophorèse si doute).
- Iatrogénie : zolpidem (Beers — chutes), prégabaline sédatif, association antihypertenseurs + orthostatisme ; sertraline : QTc si associé autres molécules.
- Miction nocturne : recherche infection urinaire, résidu post-mictionnel (échographie), diurèse nocturne (limiter apports soir).
- Cognition : MMS bon ; confusion post-op à surveiller.
- Vision : mise à jour correction ; audition (équilibre).

3. PRÉVENTION SECONDAIRE (5 points) :
- Ostéoporose : biphosphonate oral (alendronate 70 mg/sem) ou IV (zoledronate annuel) si GI ou dysphagie — après cicatrisation et Ca > 2,0, vitamine D rechargée ; calcium alimentaire prioritaire ; supplémentation D 800–1000 UI/j + chargement si < 20 ng/mL ; durée traitement anti-résorptif 3–5 ans minimum ; dénomosumab alternative si IRC sévère future.
- Rééducation : kiné renforcement quadriceps, équilibre, marche sécurisée, apprentissage déambulateur puis canne ; ergothérapie ADL, toilette ; 3–6 mois ; protocole fracture liaison (Fracture Liaison Service idéal).
- Domicile : suppression tapis ; éclairage détecteur mouvement nuit ; téléalarme réabonnement ; barres WC ; siège douche ; chaussures antidérapantes ; chien géré (barrière nuit).
- Médicaments : arrêt zolpidem (sevrage) ; réduire prégabaline si possible ; lisinopril + amlodipine : une seule si orthostatisme (horaire ou dose) ; ropinirole maintenir si SJSR ; pas d'anticholinergiques.
- Anémie : fer si carence ; transfusion si symptomatique (Hb 10,2 limite).
- Vitamine D : chargement 50 000 UI/semaine x 8 semaines puis entretien.

4. PARCOURS 3 MOIS (4 points) :
- S0–2 : SSR ou hospitalisation à domicile (HAD kiné) si fils disponible.
- Semaine 3–12 : kiné 3x/semaine domicile ; IDE surveillance plaie, anticoagulation si thromboprophylaxie ; médecin traitant à J30.
- Consultation gériatre / rhumatologue M1 et M3 : DMO contrôle, tolérance biphosphonate, TUG.
- Assistante sociale : aide ménage, portage repas, téléalarme.
- Chirurgien orthopédique : contrôle Rx M6.
- Objectifs : marche autonome avec aide technique, TUG < 20 s puis < 14 s, pas de nouvelle chute, traitement anti-ostéoporotique en cours.

5. RETOUR DOMICILE ET CRITÈRES (3 points) :
- Faisabilité : fils disponible, ascenseur, aménagements réalisés avant sortie ; visite domicile ergo idéale.
- Critères sortie : patiente stable, douleur contrôlée, transferts sécurisés, plan ostéoporose initié, orthostatisme géré.
- Réhospitalisation / placement temporaire : échec rééducation domicile, nouvelle chute, complication orthopédique, isolement critique, épuisement fils → SSR ou EHPAD temporaire rééducation (pas EHPAD définitif sans évaluation).`,

    juryTips: 'Chute 2008 : toujours séparer syncope vs mécanique vs mixte. Post-fracture fémorale = traiter ostéoporose sans délai (piège : oublier biphosphonate). Zolpidem = élimination quasi obligatoire au jury. Orthostatisme + 2 antihypertenseurs = classique. Citer FLS / coordination fracture. T-score et seuil −2,5. Téléalarme et tapis = extrinsèque facile à noter. Peur de chuter (kinesiophobie) prolonge incapacité — la nommer.'
  },

  {
    id: 'evc-2009-confusion-ethique',
    annee: 2009,
    session: 'Printemps',
    duree: '30 minutes (15 min préparation + 15 min oral)',
    bareme: '20 points total',
    consigne: 'Vous êtes médecin traitant appelé aux urgences pour confusion aiguë chez un patient âgé. Après stabilisation, des décisions éthiques se posent concernant l\'hospitalisation et les traitements. Rédigez votre démarche diagnostique, thérapeutique et éthique.',
    sujet: `M. BERNARD Robert, 88 ans, est admis aux urgences à 4h du matin pour agitation et confusion depuis 48 heures.

ANTÉCÉDENTS MÉDICAUX :
- Démence mixte (vasculaire + composante Alzheimer) diagnostiquée il y a 18 mois
- MMS il y a 4 mois : 16/30 ; stade modéré à sévère
- HTA, cardiopathie ischémique (IDM silencieux connu, FEVG 45 %)
- BPCO modérée
- IRC stade 3 (créatinine ~120 µmol/L)
- Adénome prostatique
- Surdité importante

TRAITEMENT HABITUEL :
- Ramipril 5 mg/j
- Bisoprolol 2,5 mg/j
- Furosémide 20 mg/j
- Aspirine 100 mg/j
- Atorvastatine 20 mg/j
- Tiotropium
- Tamsulosine
- Donépezil 10 mg/j
- Mémantine 20 mg/j
- Quetiapine 25 mg le soir (troubles comportement nocturnes depuis 6 mois)
- Paracétamol si douleur

CONTEXTE :
- Vit en EHPAD secteur Alzheimer depuis 8 mois (admission après syndrome psycho-comportemental et épuisement de l'épouse)
- Directives anticipées rédigées il y a 2 ans avec médecin traitant : « pas de réanimation, pas d'intubation, pas d'hospitalisation en réanimation » ; personne de confiance : épouse (78 ans), arthrose sévère, ne peut plus visiter seule la nuit
- Fils (52 ans) demande « tout faire » ; épouse rappelle les volontés du mari

HISTOIRE DE LA MALADIE :
- Fièvre 38,2 °C depuis 36 h, toux, encombrement bronchique
- Agitation, refus des soins, agressivité verbale envers personnel
- Chute sans fracture dans la chambre hier (12h)
- Alimentation quasi nulle depuis 48 h
- Pas de traumatisme crânien objectivé

À L'ADMISSION URGENCES :
- T° 38,6 °C ; PA 98/54 mmHg ; FC 112 bpm ; FR 26/min ; SpO2 89 % sous 2 L/min O2
- Poids estimé 62 kg (perte récente non chiffrée)
- GCS 13 (E4 V3 M6) — fluctuant
- MMS non réalisable ; CAM (Confusion Assessment Method) : positif (début aigu, fluctuation, inattention, désorganisation)
- Douleur : difficulté évaluation ; grimaces à la palpation hypochondre droit
- Déshydratation clinique
- Poumons : ronchi diffus, crépitants base droite
- Abdomen : distension, timpanisme, défense hypochondre droit modérée
- Peau : escarre stade I sacrum

BIOLOGIE :
- NFS : Hb 11,4 g/dL, GB 18 500/mm³ (PNN 88 %), plaquettes 420 000/mm³
- Créatinine 198 µmol/L (habituelle 125) → DFG 28 mL/min/1,73 m²
- Urée 18 mmol/L
- Na 151 mmol/L, K 5,6 mmol/L
- Glycémie 1,68 g/L
- CRP 210 mg/L, PCT 8 ng/mL
- Lactates 2,8 mmol/L
- Gaz du sang : pH 7,32, PaCO2 48 mmHg, PaO2 62 mmHg, HCO3 22 mmol/L (FiO2 28 %)
- Troponine ultrasensible : 45 ng/L (limite haute âge)
- ECBU en cours

IMAGERIE :
- Rx thorax : opacité lobaire inférieure droite
- TDM cérébral sans injection : pas d'hémorragie ni infarctus aigu ; atrophie modérée ; leucoaraïose sévère
- Échographie FAST à la marge : pas d'épanchement abdominal libre massif ; vésicule paroi épaissie 5 mm, lithiase, pas de dilatation des voies biliaires principales

ÉVOLUTION À H6 SOUS URGENCES :
- Perfusions, antibiothérapie ceftriaxone + azithromycine débutée
- Agitation persistante malgré quetiapine 50 mg
- PA 85/48 mmHg sous remplissage 500 mL
- Diurèse 15 mL/h
- Médecin EHPAD joint : souhaite retour rapide si possible
- Anesthésiste réanimation informe : en cas d'intubation, pronostic réservé (démence, BPCO, IRC)

QUESTIONS :
1. Établissez le diagnostic principal et les diagnostics différentiels de la confusion aiguë. Justifiez l'utilisation du CAM. (4 points)
2. Priorisez la prise en charge médicale des 24 premières heures (infection, déshydratation, insuffisance rénale, hypoxie). (4 points)
3. Analysez les facteurs favorisants du delirium chez M. Bernard (organiques, iatrogènes, environnementaux). (3 points)
4. Situation éthique : hospitalisation en réanimation, antibiothérapie invasive, nutrition artificielle — comment articulez-vous directives anticipées, personne de confiance, fils, et intérêt du patient ? (5 points)
5. Proposez un plan de sortie et de prévention du delirium si retour EHPAD (4 points)`,

    corrigé: `1. DIAGNOSTIC CONFUSION AIGUË (4 points) :
- Diagnostic principal : delirium hyperactif sur pneumonie communautaire lobaire droite + probable cholécystite aiguë lithiasique (fièvre, douleur hypochondre, écho vésicule épaissie, CRP très élevée) + déshydratation / IRA fonctionnelle sur sepsis.
- CAM positif : critère A (début aigu 48 h) + B (fluctuation) + C (inattention) + D (désorganisation/agitation) = delirium.
- Différentiels à écarter : méningite/encéphalite (TDM non contributif, pas de raideur nuque) ; AVC (pas de déficit focal) ; sepsis seul sans delirium (ici les deux liés) ; aggravation démence seule (pas d'acuité) ; intoxication quetiapine (possible contributeur).
- Chute : conséquence delirium + faiblesse, pas cause principale.

2. PRISE EN CHARGE 24 H (4 points) :
- ABCDE : O2 cible SpO2 88–92 % (BPCO), éviter hyperoxie ; voie veineuse ; remplissage prudent (IC, IRC) avec réévaluation PA/diurèse ; noradrénaline si choc persistant après 2–3 L (discuter réa — voir éthique).
- Infection : pneumonie confirmée → antibiothérapie adaptée IRC (ceftriaxone dose réduite ou cefépime selon protocole ; azithro si atypique) ; ajouter couverture biliaire si cholécystite (métronidazole + adaptation) ; hémocultures, ECBU ; drainage chirurgical si cholécystite sévère — balance bénéfice/invvasivité.
- IRA : néphrotoxiques arrêtés ; hydratation si hypotension corrigée ; surveiller K+ 5,6 (ECG, résines si urgent) ; hypernatrémie 151 : eau libre lente si stable hémodynamique.
- Delirium : traiter cause ; éviter contention physique ; quetiapine dose minimale temporaire ; environnement calme, présence familiale diurne ; pas de benzodiazépines.
- Escarre : prévention immédiate.
- Troponine : surveillance ECG, répéter si douleur thoracique (IDM silencieux possible).

3. FACTEURS FAVORISANTS DELIRIUM (3 points) :
- Organiques : pneumonie, sepsis, hypoxie, déshydratation, hypernatrémie, IRA, douleur (hypochondre, escarre), cholécystite, chute récente.
- Iatrogéniques : quetiapine (sédation variable), anticholinergiques (tiotropium faible), polypharmacie ; pas de benzo récent.
- Démence de base = substrat majeur (risque delirium x5).
- Environnement : transfert urgences, bruit, privation sommeil, changement repères.
- Sensoriel : surdité non compensée aggrave désorientation.

4. DÉMARCHE ÉTHIQUE (5 points) :
- Cadre : loi Leonetti (2005) — refus traitements inutiles, obstination déraisonnable ; droit directives anticipées ; personne de confiance consultée pour exprimer volontés si patient incapable.
- Directives : pas de réanimation/intubation = contraignantes sauf si non applicables au contexte (ici pneumonie traitable médicalement) ; distinguer réanimation (intubation) vs hospitalisation soins intensifs vs antibiothérapie IV en médecine.
- Intérêt patient : bénéfice raisonnable antibiothérapie + oxygénothérapie + remplissage = proportionné ; intubation si échec respiratoire = probablement disproportionné (démence sévère, directives, pronostic).
- Personne de confiance (épouse) : exprime volontés connues — priorité sur fils « tout faire » dans cadre légal ; entretien tripartite médecin, épouse, fils : expliquer pronostic, limites, confort.
- Nutrition artificielle : pas d'indication urgente si sepsis réversible ; si coma prolongé — décision collégiale, refus possible selon directives.
- Cholécystite : chirurgie à haut risque ; alternative antibiothérapie seule si non opérable ; décision partagée.
- Traçabilité : écrit dans dossier, qui décide, collégiale si arrêt traitement.
- Pas d'euthanasie : sédation proportionnée seulement si détresse réfractaire en phase terminale.

5. PLAN SORTIE ET PRÉVENTION DELIRIUM EHPAD (4 points) :
- Sortie si : apyrétie 48 h, PA stable, SpO2 stable air ou O2 faible, oral possible, delirium en résolution, CAM négatif intermittent.
- Transitional : pas retour EHPAD si besoin soins infirmiers 24h non assurés — USG ou court séjour gériatrique.
- Prévention récidive : hygiène délirante (lunettes, audition, horloge, présence familiale) ; déprescription quetiapine si possible après stabilisation ; hydratation planifiée ; éviter changement chambre ; protocole infection EHPAD.
- Soins de fin de vie si échec : si détresse terminale malgré traitement — morphine, midazolam proportionné, retour EHPAD chambre seule, épouse accompagnement.
- Suivi : MMS post-delirium souvent non retour baseline ; réévaluation capacités et directives.`,

    juryTips: '2009 = confusion + éthique : CAM obligatoire, 4 critères. Ne pas confondre réanimation et hospitalisation simple. Directives anticipées Leonetti 2005 : citer texte. Personne de confiance ≠ décideur légal sauf tutelle. Fils « tout faire » vs épouse : méthode entretien, pas jugement moral. Cholécystite sur PA = décision chirurgie vs médical. Quetiapine et delirium = piège (antipsychotique parfois nécessaire mais favorise parfois). SpO2 88–92 % BPCO. Documenter collégiale. Sédation proportionnée ≠ euthanasie.'
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SUJETS_EVC_2007_2009 };
}