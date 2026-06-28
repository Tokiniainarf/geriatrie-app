// ═══════════════════════════════════════════════════════════════
//  Sujets EVC Gériatrie — Années 1995, 1996, 1997 (épreuves complètes)
//  Format: consigne, temps, barème, sujet complet, corrigé point par point
// ═══════════════════════════════════════════════════════════════
const SUJETS_EVC_1995_1997 = [
  {
    id: 'evc-1995-alzheimer-denutrition',
    annee: 1995,
    session: 'Printemps',
    duree: '30 minutes (15 min préparation + 15 min oral)',
    bareme: '20 points total',
    consigne: 'Vous êtes médecin en unité de court séjour gériatrique. Mme Lefebvre présente une maladie d\'Alzheimer avec dénutrition protéino-énergétique et perte d\'autonomie. Rédigez l\'évaluation gériatrique, le diagnostic étiologique de la dénutrition et un plan thérapeutique nutritionnel et global.',
    sujet: `Mme LEFEBVRE Henriette, 76 ans, est hospitalisée en USC gériatrique pour « amaigrissement, asthénie et aggravation des troubles de mémoire » depuis 4 mois.

ANTÉCÉDENTS MÉDICAUX :
- Maladie d'Alzheimer probable (diagnostic neurologique il y a 2 ans) ; IRM : atrophie hippocampique bilatérale, pas de vascularisation significative
- HTA modérée
- Lithiase vésiculaire asymptomatique
- Arthrose polyarticulaire (genoux, mains)
- Pas d'AVC, pas de BPCO
- Surdité modérée bilatérale ; lunettes myopie
- Pas d'antécédent digestif majeur (pas de chirurgie bariatrique, pas de maladie inflammatoire)

TRAITEMENT À DOMICILE (revue fille + pharmacie) :
- Donepezil 5 mg/j (depuis 14 mois)
- Amlodipine 5 mg/j
- Paracétamol 1 g x3/j (arthralgies)
- Lactulose 15 mL/j (constipation)
- Multivitamines « senior » 1 cp/j (automédication)
- Pas de psychotrope, pas de benzodiazépine

HISTOIRE DE LA MALADIE :
- Vit avec fille 48 ans (infirmière libérale) et petit-fils 16 ans
- Perte appétit progressive ; refus certains plats (viande, légumes) ; préférence liquides et sucrés
- Poids habituel il y a 1 an : 62 kg ; poids actuel fille : 51 kg (−11 kg en 10 mois)
- MMS il y a 1 an : 22/30 ; MMS actuel : 17/30
- Oublis médicaments fréquents (donepezil oublié 3–4 j/semaine selon fille)
- 2 épisodes de « faiblesse » avec malaise sans perte de connaissance
- Chute unique il y a 3 semaines (salon, tapis) sans fracture
- Humeur plate ; pas de cris ; sommeil correct
- Continence préservée jour ; 1–2 nycturies

CONTEXTE SOCIAL :
- Fille très investie, culpabilité « je ne nourris pas assez bien maman »
- Aide ménage 3h/semaine ; pas d'APA formalisée
- Pas de personne de confiance ; pas de directives anticipées

ÉVALUATION GÉRIATRIQUE À L'ADMISSION (J0) :
- PA 108/64 mmHg ; FC 76 bpm ; T° 36,4 °C ; SpO2 98 % air ambiant
- Poids 51 kg ; taille 1,58 m ; IMC 20,4 kg/m² (maigreur relative à perte dynamique)
- Muqueuses pâles, peau fine, plis cutanés marqués (biceps, triceps)
- ADL (Katz) : 4/6 — aide partielle toilette et habillage, marche avec canne
- IADL : 1/8 (téléphone seul)
- MMS : 17/30 (désorientation 2/10, mémorisation 0/3, attention 2/5, rappel 0/3, langage 7/9, praxies 2/2)
- MNA (Mini Nutritional Assessment) : 7/30 (dénutrition)
- GDS-15 : 5/15
- Braden : 16/23
- Tinetti : 16/28
- Force préhension : 14 kg (G)
- Déglutition : pas de fausses routes ; temps repas 55 min avec incitations
- Douleur : EVA 4/10 genoux à la marche

BIOLOGIE (jeun, J0) :
- NFS : Hb 10,2 g/dL, VGM 88 fL, GB 5 900/mm³, plaquettes 312 000/mm³
- Ferritine 18 ng/mL, CST 12 %
- Créatinine 68 µmol/L → DFG (Cockcroft) 72 mL/min
- Ionogramme : Na 138 mmol/L, K 3,9 mmol/L
- Glycémie à jeun 0,88 g/L ; HbA1c 5,4 %
- TSH 3,1 mUI/L ; T4L 14 pmol/L
- 25-OH vitamine D : 11 ng/mL
- Albumine 28 g/L ; préalbumine 0,12 g/L ; transferrine 1,8 g/L
- B12 210 pg/mL ; folates érythrocytaires 180 ng/mL
- ASAT 19 UI/L, ALAT 16 UI/L, PAL 112 UI/L, GGT 28 UI/L
- CRP 6 mg/L
- Protéinurie bandelette trace ; créatininurie non faite
- ECBU : leucocytes −, nitrites −

IMAGERIE ET EXAMENS COMPLÉMENTAIRES :
- Scanner cérébral (il y a 2 ans) : atrophie temporopariétale, leucoaraïose grade 1, pas d'hydrocéphalie
- Rx thorax : pas d'infiltrat ; cardiomégalie légère
- Échographie abdominale (J1) : vésicule lithiasique, pas d'ascite, foie homogène, pas de masse
- DMO (il y a 3 ans) : T-score −2,1 col fémoral
- ECG : rythme sinusal 72/min, pas de trouble repolarisation
- Bandelette urinaire répétée J2 : normale
- Journal alimentaire 3 jours (fille) : ~1 050 kcal/j, protéines estimées 32 g/j
- Observation repas USC : apports réels J1–J2 : 920 et 1 100 kcal ; protéines 28–35 g/j

QUESTIONS :
1. Définissez la dénutrition de Mme Lefebvre (critères, sévérité) et listez les mécanismes possibles dans le contexte Alzheimer + vieillissement. (4 points)
2. Interprétez la biologie (anémie, syndrome inflammatoire, marqueurs nutritionnels, carences) et proposez un bilan complémentaire ciblé. (4 points)
3. Analysez le rôle de la maladie d'Alzheimer et des facteurs iatrogènes/comportementaux dans l'amaigrissement ; place du donepezil. (3 points)
4. Élaborez un plan nutritionnel et de réhabilitation (objectifs, textures, supplémentation, suivi) adapté à la démence modérée. (5 points)
5. Proposez une stratégie de sortie, d'accompagnement de la fille et de prévention des complications (chutes, escarres, réhospitalisation). (4 points)`,

    corrigé: `1. DÉNUTRITION — DÉFINITION ET MÉCANISMES (4 points) :
- Perte de poids significative : −11 kg/10 mois (>10 % poids habituel) = dénutrition sévère/protéino-énergétique même si IMC 20,4 encore « normal ».
- MNA 7/30 : dénutrition avérée ; albumine 28, préalbumine 0,12 : déplétion protéique.
- Mécanismes : apports insuffisants (journal <35 g protéines, <1100 kcal) ; démence modérée (oublis repas, anosognosie faim) ; douleur arthrosique limitant activité ; possible dépression légère (GDS 5) ; carence fer/B12 contribuant asthénie ; vitamine D basse (sarcopénie, chutes) ; pas d'hypercatabolisme majeur (CRP 6 modérée).
- Exclure en parallèle : cancer occulte (âge, anémie), malabsorption (moins probable sans diarrhée), hyperthyroïdie (TSH normale), insuffisance cardiaque (clinique stable).

2. BIOLOGIE ET BILAN COMPLÉMENTAIRE (4 points) :
- Anémie microcytaire légère (Hb 10,2, VGM 88, ferritine 18, CST 12 %) : carence martiale probable sur apports + peut-être saignements occultes à écarter (Hemoccult ou coloscopie selon tolérance/facteurs risque).
- Albumine/préalbumine basses : malnutrition + inflammation bas grade (CRP 6).
- B12 210 limite basse ; folates érythrocytaires 180 bas : supplémentation B12/folates indiquée après confirmation (acide méthylmalonique si doute).
- Vitamine D 11 ng/mL : carence ; PAL normale ; foie OK.
- Bilan ciblé : NFS contrôle post-fer ; électrophorèse protéines si albumine persiste basse ; TSH déjà OK ; TSH/T4L pas de répétition ; éventuellement T3 si doute ; recherche sang occulte ; pas de scanner corps entier systématique — écho abdo déjà rassurante.
- Réévaluation déglutition si textures modifiées (logopède).

3. ALZHEIMER ET FACTEURS DE PERTE DE POIDS (3 points) :
- Stade démence modérée (MMS 17) : oublis alimentaires, difficulté préparation repas, besoin supervision ; donepezil oublié souvent = efficacité cognitive/nutrition non optimale.
- Donepezil 5 mg : maintenir si bonne tolérance et objectif stabilisation cognitive pour autonomie alimentaire ; pas cause amaigrissement ; vérifier observance (pilulier, fille).
- Comportement alimentaire : hyperoralité sucrée possible stade modéré mais ici surtout hypophagie ; pas de psychotrope favorisant anorexie.
- Constipation (lactulose) : inconfort abdominal possible — optimiser transit.
- Pas d'iatrogénie anorexiante majeure (pas de digoxine, pas de fluoxétine).

4. PLAN NUTRITIONNEL ET RÉHABILITATION (5 points) :
- Objectifs : stopper perte poids, +0,5–1 kg/semaine initial si possible, protéines 1,2–1,5 g/kg/j (~60–75 g), 1 800–2 000 kcal/j fractionnées.
- Voie orale prioritaire : 5–6 prises, enrichissement (lait, œufs, fromage), plats plaisir, ambiance calme, même aidant repas.
- Textures : normale tant que déglutition OK ; si fatigue : mixée temporaire pas systématique.
- Supplémentation : boisson hyperprotéinée 200 mL x2/j entre repas ; fer oral si toléré ; vitamine D chargement puis entretien 800–1000 UI ; B12 IM ou orale haute dose si absorption douteuse.
- Réhab : kinésithérapie renforcement membres inférieurs, marche assistée ; ergothérapie aide à la prise des repas.
- Suivi : pesée 2x/semaine, MNA mensuel, albumine à 3 semaines.

5. SORTIE ET ACCOMPAGNEMENT (4 points) :
- Sortie possible si gain poids stabilisé + plan nutrition écrit ; USC puis retour domicile avec IDE nutrition si possible.
- Fille : formation repas enrichis, ne pas forcer seule — fractionner ; groupe Alzheimer ; répit ; lever culpabilité (maladie neurodégénérative).
- APA / aide repas à domicile ; téléassistance si chutes récidive.
- Prévention : Tinetti 16 — canne, chaussures ; Braden 16 — mobilisation ; ostéoporose + vitamine D ; traiter anémie.
- Coordination MG : donepezil observance, suivi poids mensuel, réadmission si −2 kg.`,

    juryTips: '1995 Alzheimer + dénutrition : perte >10 % = dénutrition même IMC normal. MNA nommer. Protéines 32 g/j = échec. Albumine + préalbumine. B12 210 + folates bas. Ferritine/CST carence fer. Donepezil observance pas arrêt. Pas de psychotrope à incriminer. Journal alimentaire 3 j. Apports 1,2–1,5 g/kg protéines. Voie orale avant sonde. Fille infirmière soutien. MMS 17 modéré. CRP 6 inflammation bas grade. Vitamine D 11. Écho abdo rassurante. Chute unique prévenir. MNA 7 sévère.'
  },

  {
    id: 'evc-1996-chute-iatrogenie',
    annee: 1996,
    session: 'Automne',
    duree: '30 minutes (15 min préparation + 15 min oral)',
    bareme: '20 points total',
    consigne: 'Vous êtes médecin traitant. M. Girard a fait une chute grave à domicile. Analysez la cascade iatrogénique, les facteurs intrinsèques et extrinsèques de chute, et proposez une révision thérapeutique et un plan de prévention.',
    sujet: `M. GIRARD Marcel, 79 ans, est adressé en consultation gériatrique 10 jours après hospitalisation brève pour commotion et plaies faciales (chute dans l'escalier).

ANTÉCÉDENTS MÉDICAUX :
- HTA depuis 25 ans
- Diabète type 2 depuis 12 ans
- Cardiopathie ischémique (IDM il y a 8 ans, angioplastie ; FEVG 50 % dernière écho)
- Fibrillation atriale permanente depuis 3 ans
- Insuffisance rénale chronique stade 3a
- Glaucome à angle ouvert
- Pas de démence ; MMS : 25/30
- 4 chutes en 2 ans dont celle-ci la plus sévère

TRAITEMENT ACTUEL (12 molécules) :
- Bisoprolol 5 mg/j
- Ramipril 10 mg/j
- Furosémide 40 mg matin + 20 mg 16h
- Amiodarone 200 mg/j
- Apixaban 2,5 mg x2/j (adapté poids/âge)
- Atorvastatine 40 mg/j
- Metformine 850 mg x2/j
- Gliclazide MR 60 mg/j
- Trazodone 100 mg au coucher (insomnie)
- Lévothyroxine 100 µg/j
- Prednisolone 7,5 mg/j (prescrit pour « polyarthralgies » par rhumatologue, en cours depuis 9 mois)
- Oméprazole 20 mg/j

CIRCONSTANCES DE LA CHUTE :
- 2h du matin, descente escalier pour WC ; jambes « coupées », vision trouble, syncope probable orthostatique
- Pas de fracture ; traumatisme facial ; scanner cérébral sans hémorragie
- Hospitalisation 48 h surveillance ; pas d'anticoagulant arrêté

DEPUIS LA CHUTE :
- Peur de chuter (syndrome post-chute)
- Marche avec déambulateur à l'intérieur
- PA cabinet : 124/72 assis ; 98/62 debout à 1 min ; 92/58 à 3 min
- FC 58/min (bisoprolol + amiodarone)
- Tinetti : 9/28
- Timed Up and Go : 32 s
- EVA dos 5/10 (déjà connu)
- GDS-15 : 8/15

EXAMEN :
- Proprioception chevilles diminuée ; monofilament pieds 3/10
- Acuité visuelle corrigée 4/10 œil droit (glaucome)
- Raideur cervical légère
- Pas de déficit neurologique focal

BIOLOGIE (veille consultation) :
- NFS : Hb 11,4 g/dL, VGM 90 fL
- Créatinine 145 µmol/L → DFG 42 mL/min
- Na 131 mmol/L, K 4,8 mmol/L, Cl 98 mmol/L
- Glycémie 1,48 g/L ; HbA1c 7,9 %
- TSH 0,8 mUI/L ; T4L 22 pmol/L (limite haute)
- 25-OH vitamine D : 13 ng/mL
|- Albumine 33 g/L
|- Digoxinémie non dosée (pas de digoxine)
|- Amiodarone : TSH basse suspecte dysthyroïdie iatrogène
|- BNP 420 pg/mL (limite haute ; surcharge volémique possible)
|- Lipides : LDL 1,42 g/L, HDL 0,38 g/L, TG 1,85 g/L
|- PAL 98 UI/L, GGT 62 UI/L (statine + amiodarone)
|- CRP 8 mg/L ; ECBU : leucocytes −, nitrites −
|- Glycémie capillaire nocturne (fille) : 0,62 g/L à 4h un épisode la semaine précédente (non rapporté aux urgences)

IMAGERIE ET EXAMENS COMPLÉMENTAIRES :
|- Scanner cérébral post-chute : pas de saignement, atrophie légère
- Rx bassin et rachis dorso-lombaire : pas de fracture ; ostéopénie
- DMO (5 ans) : T-score −2,6
|- ECG : FA 58/min, QTc 468 ms
|- Échographie cardiaque (6 mois) : FEVG 48 %, hypokinésie inférieure, pas de thrombus visible
|- Holter 24 h (il y a 4 mois, palpitations) : pauses <2 s, extrasystoles ventriculaires 2 %, pas de tachycardie prolongée documentée
|- Fond d'œil : rétinopathie diabétique modérée, glaucome traité
|- Échographie rénale : reins de taille normale, pas de dilatation pyélocalicielle
|- Test orthostatique répété cabinet (3 mesures) : même chute PA ; FC passe de 58 à 64 debout sans compensation adéquate
|- Inventaire IPP : 12 médicaments, 4 à risque chute (psychotrope, diurétique, bêta-bloquant, hypoglycémiant)

ENVIRONNEMENT :
- Maison 2 étages ; chambre à l'étage, WC rez-de-chaussée
- Pas de barres d'appui escalier
- Veuf, fils à 40 km ; voisin aide courses

QUESTIONS :
1. Classifiez la chute (type, circonstances) et hiérarchisez les facteurs de risque intrinsèques et extrinsèques. (4 points)
2. Analysez la iatrogénie : hypotension orthostatique, psychotropes, diurétiques, bêta-bloquants, corticoïdes, interactions. (5 points)
3. Quels examens et scores utilisez-vous pour stratifier le risque de récidive et les fractures ? (3 points)
4. Proposez une révision médicamenteuse concrète (arrêts, substitutions, surveillance) en tenant compte FA et IRC. (4 points)
5. Plan de prévention multimodal à domicile et critères de réévaluation. (4 points)`,

    corrigé: `1. CLASSIFICATION ET FACTEURS DE CHUTE (4 points) :
- Chute « syncopale » nocturne probable : hypotension orthostatique + environnement (escalier, éclairage nocturne) ; pas de chute d'appui simple.
- Intrinsèques : âge, FA, cardiopathie (FEVG 48 %), neuropathie diabétique, hypovitaminose D, peur post-chute, Tinetti 9, PA orthostatique majeure (Δ systolique >20 mmHg).
- Extrinsèques : escalier 2h du matin, WC éloigné, pas de main courante, polymédication.
- MMS 25 : pas de démence mais attention vigilance nocturne (trazodone).

2. CASCADE IATROGÈNE (5 points) :
- Furosémide 60 mg/j + ramipril : déshydratation, Na 131, hypotension orthostatique.
- Bisoprolol 5 + amiodarone : bradycardie 58, moins compensation orthostatique.
- Trazodone 100 mg : sédation, levers nocturnes risqués, hypotension.
- Prednisolone 7,5 mg prolongé : myopathie cortisonique, ostéoporose, hyperglycémie ; indication à reconsidérer.
- Metformine + IRC (DFG 42) : risque acidose/lactate ; gliclazide : hypoglycémie nocturne possible (glycémie 1,48).
- Amiodarone : TSH 0,8 + T4L haute → thyrotoxicose factice ou mixte, palpitations/chutes.
- Apixaban : nécessaire FA ; ne pas arrêter sans indication ; pas cause chute mais gravité hémorragique si trauma.
- Oméprazole long cours : interactions mineures ; pas premier facteur chute.

3. STRATIFICATION (3 points) :
- Scores : Tinetti, TUG, appui unipodal, PA orthostatique série (1 et 3 min), MMS.
- Fracture : DMO T −2,6, vitamine D 13, corticoïdes → risque ostéoporotique élevé.
- Équilibre : test « get up and go », recherche vertige positionnel (DVPPB si suggestif).
- Pas d'EEG systématique ; Holter si syncope non orthostatique suspectée (ici orthostatisme documenté).

4. RÉVISION MÉDICAMENTEUSE (4 points) :
- Réduire/arrêter furosémide 16h ; réévaluer indication double diurétique ; hydratation.
- Trazodone : réduire à 50 mg ou arrêt essai ; hygiène sommeil ; WC au plus proche.
- Prednisolone : sevrage progressif si polyarthralgies permettent ; alternative AINS topique/paracétamol.
- Bisoprolol : dose minimale efficace (2,5 mg ?) si PA/FC le permet.
- Amiodarone : bilan thyroïdien complet ; discuter arrêt/switch si dysthyroïdie ; contrôle TSH q6 semaines.
- Metformine : arrêt si DFG <45 (proche seuil) ; adapter antidiabétique (iDPP4 ou insuline basale selon 1996 contexte).
- Maintenir apixaban FA + CHA2DS2 élevé ; pas d'aspirine en plus.
- Vitamine D supplémentation ; pas de calcium excessif IRC.

5. PRÉVENTION DOMICILE (4 points) :
- Aménagement : barre escalier, éclairage détecteur, lit rez-de-chaussée ou lit surélevé, antidérapant.
- Téléassistance ; chaussures ; déambulateur approprié.
- Rééducation équilibre kiné 10–15 séances ; renforcement quadriceps.
- Révision PA à 1 semaine post-modifs traitement ; Tinetti cible >18.
- Fils impliqué ; pharmacie concertée ; carnet de chutes.`,

    juryTips: '1996 chute + iatrogénie : PA 92/58 à 3 min = star. Furosémide x2 + IEC. Trazodone 100 nocturne. Prednisolone 9 mois myopathie. Amiodarone TSH basse. Metformine DFG 42 limite. Apixaban garder FA. Pas arrêter anticoagulant sans raison. Na 131 déshydratation. Tinetti 9. Syndrome post-chute. Escalier 2h WC. Révision polymédication 12 molécules. Vitamine D 13. DMO −2,6. QTc 468 amiodarone trazodone. Glycémie 1,48 gliclazide. Oméprazole secondaire. Holter si doute syncope. Environnement barres. Kiné équilibre.'
  },

  {
    id: 'evc-1997-confusion-avc',
    annee: 1997,
    session: 'Printemps',
    duree: '30 minutes (15 min préparation + 15 min oral)',
    bareme: '20 points total',
    consigne: 'Vous êtes médecin aux urgences puis en neurologie/vascularisation. M. Mercier présente une confusion aiguë survenue 12 h après un AVC ischémique. Rédigez le diagnostic différentiel, la prise en charge du delirium et la stratégie thrombolyse/anticoagulation secondaire.',
    sujet: `M. MERCIER Robert, 81 ans, est transporté aux urgences pour confusion brutale et agitation depuis 4 heures.

ANTÉCÉDENTS MÉDICAUX :
- HTA, diabète type 2, dyslipidémie
- FA paroxystique (non anticoagulé : hématurie ancienne, « peur des saignements »)
- BPCO modérée
- Pas de démence ; MMS il y a 1 mois : 27/30
- AVC ischémique territorial droit (syndrome hemispherique partiel) il y a 36 heures, hospitalisé en neurologie

ÉVOLUTION AVC (H0–H36) :
- Début : hémiplégie gauche modérée NIHSS 9 → 6 à H24 sous aspirine 250 mg/j (charge puis 100 mg)
- Scanner initial : infarctus sylvien droit récent, pas d'hémorragie, ASPECTS 7
- Écho-Doppler : sténose carotide interne gauche 60 %, pas d'occlusion
- À H30 : NIHSS 5, patient alerte, compréhension conservée

ÉPISODE CONFUSIONNEL (H36) :
- Agitation, désorientation, refus perfusion, arrachement sonde urinaire
- T° 37,9 °C ; PA 168/94 ; FC 112 FA ; SpO2 93 % air ambiant
- Pas de nouveau déficit focal évident (équipe note « hémiplégie stable »)
- MMS impossible (agitation) ; score confusion estimation clinique type 4AT positif

TRAITEMENT EN COURS À H36 :
- Aspirine 100 mg/j
- Atorvastatine 40 mg/j
- Ramipril 5 mg/j
- Metformine 500 mg x2/j
- Salbutamol + ipratropium nébulisations
- Halopéridol 2 mg IM (1ère dose il y a 2 h pour agitation)
- Midazolam 2 mg IV (urgence infirmière, 1 bolus)

EXAMEN URGENCES :
- Somnolent après midazolam, réveillable
- Hémiplégie bras gauche 3/5, jambe 4/5 ; hémianopsie gauche
- Pas de raideur méningée ; pas de signe méningé
- Déshydratation cutanée ; globe vésical douloureux puis sondé
- Douleur : non évaluable initialement ; après sédation EVA 0

BIOLOGIE (H38) :
- NFS : Hb 13,8 g/dL, GB 12 400/mm³, PNN 10 200/mm³
- Plaquettes 210 000/mm³
- Créatinine 118 µmol/L → DFG 52 mL/min
- Na 147 mmol/L, K 3,6 mmol/L, urée 12 mmol/L
- Glycémie 2,05 g/L
- CRP 48 mg/L
- Procalcitonine non disponible (1997)
- ECBU prélevé : en cours
|- Gaz du sang : pH 7,48, PaCO2 32 mmHg, PaO2 68 mmHg, HCO3 24
|- Lactates 1,8 mmol/L ; troponine I 0,04 ng/mL (pas d'infarctus récent associé)
|- ASAT 48 UI/L, ALAT 35 UI/L (légère cytolyse post-AVC)
|- BNP 280 pg/mL
|- TSH 2,1 mUI/L ; HbA1c 7,2 %
|- Ionogramme urinaire : Na urinaire 45 mmol/L (déshydratation relative)
|- ECBU H40 : leucocyturie 80 000/mL, culture en cours ; nitrites −

IMAGERIE ET EXAMENS COMPLÉMENTAIRES :
|- Scanner cérébral contrôle H38 (indication transformation hémorragique / extension) :
  * Infarctus sylvien droit établi, pas de saignement parenchymateux
  * Pas d'hydrocéphalie aiguë
- Rx thorax : infiltrat basal droit flou (probable pneumopathie aspiration)
|- ECG : FA rapide 112/min, pas d'ischémie aiguë
|- Échographie veineuse membres inférieurs : pas de TVP
|- IRM cérébrale (H12, bilan initial) : DWI hyperintensité sylvienne droite, ADC bas, pas de saignement, leucoaraïose grade 2
|- Doppler TSA H0 : plaque carotide gauche mixte 60 % NASCET, pas d'occlusion intracrânienne
|- Échographie cardiaque transthoracique H18 : oreillette gauche 42 mL, pas de thrombus visible, FEVG 55 %
|- Vidéofluoroscopie déglutition (H40, demandée) : pénétration laryngée silencieuse liquides fins, altération déglutition post-AVC droit
|- NIHSS détaillé H38 après réveil : score 7 (conscience 0, regard 0, champ visuel 2, langage 0, négligence 1, motor arm G 2, motor leg G 1, sensibilité 0, dysarthrie 1, extinction 0)
|- Bandelette urinaire H38 : nitrites −, leucocytes +++, protéines +

CONTEXTE :
- Épouse 78 ans présente, demande « ne pas l'endormir encore »
- Pas de directives anticipées
- Chambre double unité neuro : bruit, privation sommeil 2 nuits

QUESTIONS :
1. Distinction confusion post-AVC, delirium aigu, complication neurologique (extension, hémorragie) : démarche diagnostique aux urgences. (4 points)
2. Interprétez biologie et imagerie (hypernatrémie, hyperglycémie, CRP, Rx pneumonie) dans la genèse du delirium. (4 points)
3. Prise en charge du delirium hyperactif : erreurs déjà commises, conduite non pharmacologique et pharmacologique adaptée au contexte AVC. (4 points)
4. Stratégie antithrombotique après AVC ischémique récent en présence de FA et pneumonie : timing anticoagulation, alternatives. (4 points)
5. Prévention secondaire AVC, réhabilitation et organisation sortie (équipe, famille). (4 points)`,

    corrigé: `1. DIAGNOSTIC DIFFÉRENTIEL CONFUSION POST-AVC (4 points) :
- Scanner H38 : pas d'hémorragie transformation, pas d'extension volumique significative → moins d'urgence neurochirurgicale.
- Delirium aigu superposé à AVC : fluctuation, agitation, désorientation, facteurs précipitants multiples (infection, rétention urinaire, déshydratation, douleur, privation sommeil, iatrogénie benzodiazépine/antipsychotique).
- Confusion post-stroke possible mais ici tableau hyperactif + fièvre + CRP = delirium multifactoriel dominant.
- Réévaluation NIHSS après réveil midazolam ; si nouveau déficit → nouveau scanner / AVCI récidive.
- 4AT/CAM : documenter delirium ; pas confondre avec aphasie seule.

2. BIOLOGIE ET IMAGERIE (4 points) :
- Hypernatrémie 147 + urée élevée : déshydratation (diurèse insensible, apports faibles post-AVC) → confusion majeure.
- Hyperglycémie 2,05 : stress + diabète + cortisol ; traiter insuline si protocole.
- CRP 48 + Rx infiltrat droit + fièvre 37,9 + BPCO : pneumonie aspiration probable post-AVC (déglutition altérée) → antibiothérapie, O2, kiné respiratoire.
- Leucocytose : infection ; pas seul AVC explique.
- Hypoxémie PaO2 68 : contribue delirium ; O2 cible BPCO (risque hypercapnie — surveiller).
- ECBU : traiter infection urinaire si positive (sonde récente).

3. PRISE EN CHARGE DELIRIUM (4 points) :
- Erreurs : midazolam (aggrave confusion, chutes) ; halopéridol 2 mg IM en première intention sans corriger causes ; contention implicite sonde arrachée.
- Non pharmacologique : présence épouse, lunettes/appareils auditifs, réorientation horaire, éclairage jour/nuit, éviter changement chambre, traiter rétention/douleur, hydratation, O2.
- Pharmacologique : corriger infection Na glycémie ; si sédatif nécessaire : petite dose antipsychotique atypique ou halopéridol 0,5 mg avec surveillance QT ; éviter benzo sauf sevrage alcool ; pas de midazolam routinier.
- Surveillance : PA, SpO2, NIHSS q4–6 h, scanner si dégradation.

4. ANTICOAGULATION ET FA (4 points) :
- AVC ischémique récent (36 h) : anticoagulation immédiate contre-indiquée (transformation hémorragique).
- Aspirine 100 mg maintenue phase aiguë si pas d'hémorragie.
- FA : indication anticoagulation long terme (CHA2DS2 élevé) ; débuter apixaban/warfarine après stabilisation infarcte, souvent J10–J14 si scanner stable, pas de pneumonie sévère non contrôlée — concertation neuro+cardio.
- Pneumonie : traiter avant ; pas d'arrêt aspirine sans motif.
- Thrombolyse déjà hors délai ; pas de re-thrombolyse.

5. PRÉVENTION SECONDAIRE ET SORTIE (4 points) :
- Statine haute dose, ramipril, contrôle TA, arrêt tabac si actif.
- Écho carotide : sténose 60 % — traitement médical, pas endartériectomie urgente si asymptomatique côté droit (AVC droit = probablement cardioembolique FA).
- Anticoagulation planifiée ; éducation épouse risque hémorragique vs AVC.
- Rééducation précoce plagiothérapie, orthophonie déglutition (prévention aspiration).
- Sortie : USR ou domicile avec HAD kiné ; MMS suivi ; prévention delirium récidive hospitalisation.`,

    juryTips: '1997 confusion + AVC : scanner contrôle hémorragie obligatoire. Delirium > confusion post-stroke seul. 4AT/CAM. Midazolam + halopéridol = erreurs jury. Na 147 déshydratation. Glycémie 2,05. CRP 48 pneumonie aspiration post-AVC. FA non anticoagulé avant = leçon. Anticoagulation différée J10–14. Aspirine phase aiguë. NIHSS stable. ASPECTS 7 déjà connu. O2 BPCO prudence PaCO2 32. Sonde urinaire rétention. Épouse présence réorientation. Sténose carotide 60 % pas chirurgie urgente. Statine secondary prevention. Déglutition orthophonie. Pas thrombolyse H36. Leucocytose infection.'
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SUJETS_EVC_1995_1997 };
}
