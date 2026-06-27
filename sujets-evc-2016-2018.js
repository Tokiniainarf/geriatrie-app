// ═══════════════════════════════════════════════════════════════
//  Sujets EVC Gériatrie — Années 2016, 2017, 2018 (épreuves complètes)
//  Format: consigne, temps, barème, sujet complet, corrigé point par point
// ═══════════════════════════════════════════════════════════════
const SUJETS_EVC_2016_2018 = [
  {
    id: 'evc-2016-alzheimer-soins',
    annee: 2016,
    session: 'Printemps',
    duree: '30 minutes (15 min préparation + 15 min oral)',
    bareme: '20 points total',
    consigne: 'Vous êtes médecin coordonnateur en EHPAD. Mme Lefèvre est admise ce matin pour prise en charge de sa maladie d\'Alzheimer et organisation des soins. Rédigez votre évaluation initiale et votre projet de soins personnalisé.',
    sujet: `Mme LEFÈVRE Suzanne, 86 ans, est admise en EHPAD ce matin en provenance de son domicile (demande de la fille, aidante principale épuisée).

ANTÉCÉDENTS MÉDICAUX :
- Maladie d'Alzheimer diagnostiquée il y a 4 ans (IRM : atrophie hippocampique bilatérale modérée)
- Stade évolutif : GDS 5 (modéré-sévère) selon le dernier bilan à domicile (il y a 2 mois)
- HTA traitée par ramipril 5 mg/j
- FA paroxystique (2 épisodes en 18 mois) — pas d'anticoagulation actuellement (refus du patient à l'époque)
- Ostéoporose : fracture vertébrale T12 il y a 3 ans (traitement médical)
- Glaucome à angle ouvert (collyre bétaxolol)
- Incontinence urinaire mixte depuis 1 an

TRAITEMENT À L'ADMISSION :
- Ramipril 5 mg/j
- Donépezil 10 mg le soir
- Mémantine 20 mg/j (10 mg matin + 10 mg soir)
- Paracétamol 1 g x3/j à la demande
- Bétaxolol collyre 1 goutte x2/j
- Laxatif osmotique (macrogol) à la demande
- Patch fentanyl 12 µg/h (douleur lombaire chronique) prescrit par le médecin traitant il y a 3 semaines

CONTEXTE SOCIAL ET FONCTIONNEL :
- Veuve depuis 8 ans, vit seule dans un T3 jusqu'à hier
- Fille unique (58 ans) : aide 4 h/j + nuits de garde 2x/semaine, arrêt maladie prolongé
- Petite-fille en contact hebdomadaire par téléphone
- Dernier MMS à domicile : 14/30 (il y a 2 mois) ; avant : 18/30 (il y a 1 an)
- 2 hospitalisations pour « confusion » en 12 mois (delirium sur infection urinaire)
- Refus catégorique de la patiente pour le port de couches — la fille impose l'admission

ÉVALUATION À L'ADMISSION (8h30) :
- Poids : 52 kg (habituel 58 kg il y a 6 mois) ; taille 1,62 m → IMC 19,8 kg/m²
- PA : 128/72 mmHg ; FC : 88 bpm irrégulier ; T° : 36,8°C
- MMS : 12/30 (désorientation temps/lieu, troubles attention, rappel différé abolé)
- GDS-15 : 8/15
- Échelle de Cohen-Mansfield (agitation) : 42/54 (agitation modérée : errance, déshabillage)
- NPI (troubles comportementaux) : score total 38/144 (irritabilité, anxiété, aberrations nocturnes)
- ADL : 2/6 (alimentation partielle, continence absente ; habillage, toilette, transferts, déplacements impossibles sans aide)
- IADL : 0/8
- MNA court : 19/30 (risque de dénutrition)
- Braden : 13/23 (risque d'escarre modéré)
- Tinetti (avec aide) : 11/28
- Douleur : algoplus 2/5 (comportementale)
- Hydratation : muqueuses légèrement sèches, pli cutané lent

EXAMEN CLINIQUE :
- Patiente calme à l'accueil puis agitation après 20 min (veut « rentrer chez elle »)
- Peau fine, quelques ecchymoses membres inférieurs sans traumatisme rapporté
- Pas d'escarre ; talons rouges
- Cardio : arythmie irrégulière, pas de souffle
- Poumons : MV normal, pas de crépitants
- Abdomen : souple, pas douloureux
- Neurologique : pas de déficit focal ; marche impossible (refus + peur de chuter)
- État bucco-dentaire : 4 dents résiduelles, candidose buccale débutante

BIOLOGIE (prise ce matin à jeun) :
- NFS : Hb 11,8 g/dL, VGM 88 fL, GB 7 200/mm³, plaquettes 245 000/mm³
- Ionogramme : Na 142, K 4,1, Cl 104 mmol/L
- Créatinine : 98 µmol/L (DFG estimé 48 mL/min/1,73 m² — CKD-EPI)
- Uree : 8,2 mmol/L
- Glycémie à jeun : 1,02 g/L
- Albumine : 30 g/L
- Préalbumine : 0,15 g/L (N > 0,20)
- CRP : 8 mg/L
- TSH : 2,1 mUI/L ; T4L : normale
- Vitamine B12 : 380 pg/mL ; folates : normaux
- Ferritine : 45 µg/L
- Calcémie corrigée : 2,22 mmol/L
- 25-OH vitamine D : 18 ng/mL (carence)
- ECBU (sondage résiduel 80 mL) : leucocyturie 50 000/mL, nitrites négatifs, culture en cours

IMAGERIE ET EXAMENS :
- Radiographie thorax (admission) : cardiomégalie modérée, pas d'infiltrat
- Échographie cardiaque (il y a 6 mois, rapport joint) : FEVG 55 %, oreillette gauche dilatée (42 mL/m²), pas d'HTAP significative
- TDM cérébral (il y a 18 mois) : atrophie temporale médiane bilatérale, leucoaraïose périventriculaire Fazekas 2, pas d'hémorragie ni infarctus récent
- Densitométrie (il y a 2 ans) : T-score col fémoral -2,8 ; rachis -2,5
- ECG admission : fibrillation atriale, FC moyenne 85 bpm, pas de surcharge ventriculaire

QUESTIONS :
1. Caractérisez le stade de la maladie d'Alzheimer et les troubles neuropsychiatriques. Quel impact sur le projet de soins ? (4 points)
2. Analysez la situation nutritionnelle et proposez une prise en charge diététique et soignante adaptée à la démence. (4 points)
3. Évaluez le traitement médicamenteux (efficacité, risques, iatrogénie) et proposez des modifications argumentées. (4 points)
4. Organisez la prise en charge des soins d'hygiène, de l'incontinence et de la prévention des escarres dans le respect de la personne. (3 points)
5. Quelle stratégie face aux troubles du comportement (agitation, errance) et à la douleur ? (3 points)
6. Comment structurez-vous la relation avec la fille, l'équipe soignante et le médecin traitant (coordination des soins) ? (2 points)`,

    corrigé: `1. STADE ALZHEIMER ET TROUBLES NEUROPSYCHIATRIQUES (4 points) :
- Stade : démence modérée-sévère (GDS 5, MMS 12/30) — perte d'autonomie ADL majeure, IADL nulles, désorientation, troubles de la mémoire épisodique et de l'exécution.
- Troubles neuropsychiatriques (NPI élevé, CMAI 42) : agitation psycho-motrice (errance, déshabillage), anxiété, possible syndrome crépusculaire.
- Impact projet de soins : objectifs réalistes = qualité de vie, confort, sécurité, pas de récupération cognitive ; soins centrés sur la personne (approche non pharmacologique en premier) ; anticipation fin de vie et directives si pas déjà faites ; adaptation environnement (unité Alzheimer si disponible).

2. NUTRITION ET SOINS (4 points) :
- Dénutrition protéino-énergétique : perte 6 kg/6 mois, albumine 30, préalbumine 0,15, MNA 19, IMC limite bas.
- Causes : Alzheimer (oublis repas, apathie), douleur lombaire, dépression (GDS 8), infection urinaire possible, patch fentanyl (nausées ?).
- Prise en charge : plan nutritionnel écrit (apports protéiques 1,2–1,5 g/kg/j ≈ 65–80 g/j), fractionnement 5–6 repas, textures adaptées (IDDSI 5–6 si déglutition à évaluer), enrichissement (CNO 200 kcal x2/j si acceptées), pesée hebdomadaire, albumine mensuelle.
- Soins : aide à la prise des repas (temps calme, étayage visuel), hydratation offerte toutes les 2 h, orthophonie si signes de dysphagie ; traiter candidose (antifongique local) ; corriger vitamine D (chargement puis entretien).

3. TRAITEMENT MÉDICAMENTEUX (4 points) :
- Donépezil + mémantine : stade modéré-sévère — mémantine indiquée ; donépezil bénéfice modeste à ce stade, à réévaluer (effets secondaires bradycardie, troubles digestifs) ; pas d'arrêt brutal (risque décompensation).
- Patch fentanyl 12 µg : BEERS / risque confusion, chutes, constipation — à réévaluer en priorité ; douleur algoplus 2 → essayer paracétamol régulier + palier faible si insuffisant ; rotation analgésique si douleur lombaire chronique documentée.
- Ramipril : maintenir si PA correcte et DFG > 30.
- Pas d'anticoagulation malgré FA : réévaluer CHA2DS2-VASc (âge, sexe, HTA ≈ 4–5) vs HAS-BLED (âge, chutes, polymédication) — discussion collégiale et avec fille ; pas d'imposer si refus antérieur documenté sans nouveau consentement substitué.
- Laxatif : maintenir si opioïdes ; prévention constipation systématique.
- Déprescription : éviter psychotropes majeurs non indiqués ; pas d'anticholinergiques.

4. HYGIÈNE, INCONTINENCE, ESCARRES (3 points) :
- Incontinence mixte : bilan (infection en cours — traiter si confirmée), horaires toilette 2–3 h, changes respectueux, pas de contention ; couches si acceptées par représentant légal si incapacité — expliciter à la fille le respect de la dignité.
- Escarres : Braden 13 → prévention = repositionnement 3 h, talonnières, matelas clinovisco, peau sèche et hydratée, éliminer macération.
- Hygiène : toilette partielle ou complète selon tolérance, approche douce (expliquer chaque geste), routine stable (réduit agitation).

5. COMPORTEMENT ET DOULEUR (3 points) :
- Approche non pharma en 1ère intention : routine, réduction stimuli, activités sensorielles, validation émotionnelle, éviter confrontation.
- Si échec et danger : antipsychotique à faible dose à durée limitée (risométriquel ou quétiapine faible) — HAS : indication stricte, ECG (QT), métabolisme.
- Douleur sous-estimée en démence : réévaluation après optimisation paracétamol ; retirer fentanyl si possible ; ALGOPLUS régulier.
- Errance : sécurisation unité, bracelet identification, pas de contention physique.

6. COORDINATION (2 points) :
- Réunion d'admission avec fille sous 48 h : projet de soins, niveau d'intervention, urgence vitale, nutrition artificielle (limites).
- Liaison médecin traitant + synthèse biologique ; protocole de soins Alzheimer (troubles comportement, nutrition) ; transmission ciblée équipe ; réunion de concertation pluridisciplinaire à 1 mois.`,

    juryTips: 'En 2016 le jury valorise la personnalisation des soins en Alzheimer modéré-sévère : ne pas proposer réanimation invasive ni nutrition entérale systématique sans discussion. Le patch fentanyl chez une patiente confusée est un piège classique (iatrogénie). Montrer que les soins = hygiène, dignité, prévention, pas seulement les médicaments anti-Alzheimer. Citer GDS, MMS, MNA, Braden avec seuils.'
  },

  {
    id: 'evc-2017-ic-denutrition',
    annee: 2017,
    session: 'Automne',
    duree: '30 minutes (15 min préparation + 15 min oral)',
    bareme: '20 points total',
    consigne: 'Vous êtes interne de médecine interne / gériatrie. M. Bernard est hospitalisé pour décompensation cardiaque et amaigrissement. Rédigez votre stratégie diagnostique et thérapeutique intégrant insuffisance cardiaque et dénutrition.',
    sujet: `M. BERNARD Henri, 81 ans, est admis aux urgences puis en unité de court séjour gériatrique pour dyspnée et œdèmes des membres inférieurs.

MOTIF ET HISTOIRE :
- Dyspnée d'effort progressive depuis 3 mois, devenue dyspnée de repos depuis 5 jours
- Prise de poids initiale mal notée, puis amaigrissement 5 kg en 2 mois
- Anorexie, satiété précoce, fatigue à l'effort minimale
- Orthopnée 2 oreillers, toux nocturne sèche
- Pas de douleur thoracique, pas de palpitations rapportées
- Vivait seul ; voisins alertent le SAMU car « ne mange plus »

ANTÉCÉDENTS :
- Insuffisance cardiaque à fraction d'éjection réduite connue depuis 4 ans (post-infarctus antérieur étendu)
- Coronaropathie : stent IVA il y a 5 ans, rétrécissement modéré non revascularisé
- HTA, diabète type 2 (HbA1c habituelle 7,2 %)
- BPCO GOLD II
- IRC stade 3a (créatinine base 115 µmol/L)
- Ex-tabagisme actif 1 paquet/j

TRAITEMENT HABITUEL (parfois mal observé selon la fille) :
- Furosémide 40 mg matin
- Bisoprolol 5 mg/j
- Ramipril 5 mg/j
- Atorvastatine 40 mg/j
- Metformine 850 mg x2/j
- Aspirine 75 mg/j
- Spironolactone 25 mg/j (arrêté « faute de renouvellement » il y a 6 semaines)
- Budésonide/formotérol inhalé

À L'ADMISSION :
- Poids : 61 kg (taille 1,74 m, IMC 20,1) — carnet de santé : 66 kg il y a 3 mois
- PA : 102/64 mmHg ; FC : 96 bpm ; FR : 26/min ; SpO2 : 91 % air ambiant, 95 % sous 2 L/min O2
- T° : 36,9°C ; Diurèse aux urgences : 400 mL/12 h malgré furosémide IV
- Jugulaires turgescentes à 45°, reflux hépatojugulaire +
- Crépitants bilatéraux jusqu'aux champs moyens, œdèmes MI jusqu'aux genoux, ascite minime
- Foie palpable 2 cm sous le rebord costal, sensible
- Pas de souffle nouveau
- Confusion légère fluctuante (horodatée par l'infirmière) — MMS 22/30

ÉCHELLES ET DÉPENDANCE :
- NYHA : IV à l'admission
- ADL : 4/6 ; IADL : 3/8
- MNA complet : 16/30 (dénutrition)
- SARC-F : 6/10 (risque sarcopénie)
- Tinetti : 16/28

BIOLOGIE :
- NFS : Hb 10,9 g/dL, VGM 90 fL, GB 8 100/mm³
- Créatinine : 168 µmol/L (DFG 36 mL/min) ; urée 18 mmol/L
- Na 131 mmol/L, K 5,3 mmol/L, Cl 98 mmol/L
- Glycémie 1,68 g/L ; HbA1c : 7,8 %
- BNP : 1 850 pg/mL (NT-proBNP : 6 200 pg/mL)
- Troponine hs : 28 ng/L (légèrement élevée, sans courbe)
- CRP : 22 mg/L
- Albumine : 27 g/L ; préalbumine : 0,12 g/L
- ASAT 42 UI/L, ALAT 38, ALP 145, GGT 88, bilirubine normale
- Fer sérique bas, ferritine 280 µg/L, CST 18 % (anémie inflammation + fer)
- TSH normale
- Protéinurie sur bandelette ++

IMAGERIE :
- Rx thorax : cardiothorax 0,58, redistribution vasculaire, lignes de Kerley B, épanchement pleural droit minime
- Échographie cardiaque au lit (urgences) : FEVG 30 %, hypokinésie antéro-septo-apicale, VG dilaté (DTD 62 mm), IM modérée, PAPS estimée 48 mmHg, VCI dilatée non collapsante
- Échographie abdominale : foie congestif, pas de thrombose porte, rein droit 9 cm
- TDM thorax (non injecté, IRC) : pas d'embolie visible, épanchement pleural droit 150 mL

QUESTIONS :
1. Synthétisez les syndromes en jeu et le diagnostic principal. Quels éléments relient IC et dénutrition ? (4 points)
2. Classifiez l'insuffisance cardiaque et proposez la prise en charge médicale aiguë puis de consolidation (diurétiques, IEC, bêta-bloquant, antialdostérone). (4 points)
3. Caractérisez la dénutrition (étiologies, gravité) et proposez une prise en charge nutritionnelle adaptée à l'IC et à l'âge. (4 points)
4. Analysez les comorbidités (IRC, diabète, BPCO, anémie) et leur impact sur le traitement. (3 points)
5. Le patient est stabilisé à J5 (poids 63 kg, NYHA III). Quel programme de réhabilitation cardiaque et nutritionnelle en SSR vs domicile ? (3 points)
6. Quels objectifs de pronostic, d'éducation thérapeutique et de déprescription / observance ? (2 points)`,

    corrigé: `1. SYNDROMES ET LIEN IC–DÉNUTRITION (4 points) :
- Syndromes : décompensation IC gauche/droite (œdème pulmonaire basse pression, congestion systémique), dénutrition protéino-énergétique, hyponatrémie dilutionnelle, IRA sur IC, anémie chronique, confusion mineure (hypoperfusion, âge).
- Diagnostic principal : décompensation d'IC FEVG réduite (30 %), déclenchée par arrêt spironolactone + observance diurétique probable + surcharge hydrosodée.
- Lien IC–dénutrition : anorexie métabolique (TNF, congestion digestive), satiété précoce (hépatomégalie congestive), effort respiratoire ↑ (repas = effort), cachexie cardiaque (sarcopénie, albumine 27) ; dénutrition aggrave IC (masse contractile, faiblesse).

2. PRISE EN CHARGE IC (4 points) :
- Classification : IC à FEVG réduite, NYHA IV aigu → III après traitement ; stade C D.
- Aigu : O2 si SpO2 < 94 %, diurétique de l'anse IV (furosémide 40–80 mg puis adaptation diurèse > 0,5 mL/kg/h), restriction sodée 2 g/j, restriction hydrique 1,5 L/j si hyponatrémie ; surveiller K, créatinine quotidien.
- Consolidation : réintroduire / optimiser IEC (ramipril titration si PA/IRC), bêta-bloquant (bisoprolol si euvolémie), antialdostérone (spironolactone 25 mg si K < 5, DFG > 30) — arrêt 6 semaines = erreur à corriger ; iSGLT2 si indication récente selon filière 2017 (évoquer si disponible) ; pas d'intensification pendant décompensation sévère.
- Éducation poids quotidien, signes d'alerte.

3. DÉNUTRITION (4 points) :
- Gravité : MNA 16 = dénutrition avérée ; albumine 27, perte 5 kg, SARC-F positif.
- Étiologies : IC (principal), inflammation (CRP), anémie, âge, possible dépression, BPCO hypermétabolisme.
- Prise en charge : objectifs apports 30–35 kcal/kg/j (≈ 1800–2000 kcal) et protéines 1,2–1,5 g/kg/j si IRC stable ; fractionner repas ; restriction sodée compatible avec plaisir alimentaire ; supplémentation orale hypercalorique hyposodée 200–400 kcal x2/j entre repas (pas pendant repas en IC sévère initiale).
- Pas de nutrition entérale en première intention si déglutition OK ; réévaluer poids 3x/semaine.
- Traiter anémie si Hb < 10 symptomatique (fer IV si CST bas et inflammation) — discussion transfusion si symptomatique aigu.

4. COMORBIDITÉS (3 points) :
- IRC : créatinine 168 — adapter IEC, éviter AINS, surveiller K avec spironolactone ; métformine : réduire ou arrêter si DFG < 45 (ici 36 → arrêt metformine, alternative insuline ou DPP4 si besoin).
- Diabète : hyperglycémie de stress ; adapter traitement, pas d'hypoglycémie pendant dénutrition.
- BPCO : continuer bronchodilatateurs, pas de bêta-bloquant contre-indiqué si BPCO stable (bisoprolol β1).
- Anémie : fer + inflammation ; pas d'EPO en routine sans néphrologie.

5. SSR VS DOMICILE (3 points) :
- SSR cardiologique ou gériatrique si NYHA III persistante, sarcopénie, seul, observance faible — réhabilitation multidisciplinaire (kinésithérapie endurance/musculation adaptée, diététique, psycho).
- Critères domicile : euvolémie stable, MNA amélioré > 20, entourage, IDE si besoin.
- Programme : reconditionnement progressif, renforcement quadriceps, éducation IC, supplémentation orale poursuivie 3 mois minimum.

6. PRONOSTIC ET SUIVI (2 points) :
- Pronostic réservé (FEVG 30 %, âge, comorbidités) — pas d'acharnement ; discussion objectifs de soins.
- Observance : pilulier, IDE, réconciliation médicamenteuse (spironolactone indispensable).
- Déprescription : pas de médicaments inutiles ; revue trimestrielle.`,

    juryTips: 'L\'arrêt de spironolactone est le déclencheur à ne pas manquer en 2017 (preuve de mortalité en FEVG réduite). Relier cachexie cardiaque et MNA. Hyponatrémie 131 = restriction hydrique, pas surcharge. Le jury attend l\'équilibre restriction sodée vs apports nutritionnels. Adapter metformine à la DFG. Citer FEVG, BNP, NYHA.'
  },

  {
    id: 'evc-2018-avc-reeducation',
    annee: 2018,
    session: 'Printemps',
    duree: '30 minutes (15 min préparation + 15 min oral)',
    bareme: '20 points total',
    consigne: 'Vous êtes interne en médecine physique et réadaptation (ou gériatrie). M. Girard est admis en SSR 12 jours après un AVC ischémique. Élaborez le programme de rééducation et la stratégie de prévention secondaire.',
    sujet: `M. GIRARD Paul, 78 ans, est admis en SSR gériatrique J12 après AVC ischémique sylvien gauche complet.

HISTOIRE DE LA MALADIE :
- AVC ischémique du territoire de l'artère cérébrale moyenne gauche, survenue à domicile à 6h30 (début brutal : hémiplégie droite, aphasie)
- Thrombolyse IV non réalisée (délai > 4h30 à l'arrivée)
- Thrombectomie mécanique non indiquée (occlusion M1 mais ASPECTS 6, territoire établi)
- Hospitalisation initiale en neurologie : NIHSS admission 18, NIHSS J7 = 12
- Transfert SSR pour rééducation intensive

ANTÉCÉDENTS :
- HTA mal équilibrée (observance inconstante)
- Diabète type 2 depuis 12 ans
- Fibrillation atriale découverte à l'hospitalisation (non anticoagulée avant)
- Dyslipidémie
- Tabagisme actif 30 paquets-année
- Pas d'ATCD d'AVC

TRAITEMENT À L'ARRIVÉE EN SSR :
- Nicardipine si PA > 180/105
- Atorvastatine 80 mg/j
- Apixaban 5 mg x2/j (introduit à J3 en neurologie)
- Insuline rapide selon glycémie + glargine 12 UI le soir
- Paracétamol si douleur
- Lansoprazole 30 mg/j

ÉTAT À L'ADMISSION SSR (J12) :
- Poids 74 kg, taille 1,70 m ; PA 142/78 mmHg, FC 78 bpm FA
- NIHSS : 11 (hémiplégie facio-brachio-crurale droite 4+4+3, aphasie mixte modérée 2, hémi-anopsie 1, négligence 1)
- Rankin modifié pré-AVC : 0 ; actuel : 4 (aide pour transferts et marche)
- Barthel index : 45/100
- FAC (functional ambulation categories) : 1 (non ambulant avec 2 personnes)
- Échelle de Berg : 12/56
- MMSE : non réalisable (aphasie) ; test de compréhension simple : ordres 1 étape OK, 2 étapes difficiles
- Douleur épaule droite à mobilisation : EVA 5/10 (suspicion capsulite post-AVC débutante)
- Dépression : PHQ-2 positif ; GDS-15 : 10/15
- Dysphagie : EAT-10 = 22/40 ; vidéofluoroscopie en neurologie J5 : pénétration laryngée avec liquides fins, pas d'aspiration massive — textures mixées et liquides épaissis (IDDSI 3)

BIOLOGIE J12 :
- NFS : Hb 12,4 g/dL, GB 8 500/mm³
- Créatinine 88 µmol/L (DFG 72)
- Na 139, K 4,0 mmol/L
- Glycémie à jeun 1,45 g/L ; HbA1c 8,1 %
- LDL 0,82 g/L (sous atorvastatine 80)
- HDL 0,38 g/L, TG 1,6 g/L
- CRP 5 mg/L

IMAGERIE :
- IRM cérébrale J2 : infarctus MCA gauche étendu (fronto-pariéto-temporal), ADC restriction, FLAIR hyperintense, pas d'hémorragie de transformation significative (HI1)
- Angio-IRM : occlusion résiduelle segment M2, artères intracrâniennes atheromateuses
- Doppler TSA : plaque carotide interne gauche 60 % sténose hémodynamiquement non significative
- Échographie cardiaque : FEVG 60 %, oreillette gauche 42 mL, pas de thrombus visible
- Scanner cérébral J10 : pas d'hémorragie, infarctus établi

ÉVALUATION MOTEUR ET SENSORIEL :
- Force membre supérieur droit : 1/5 proximal, 0/5 distal ; inférieur droit : 3/5
- Spasticité Ashworth : coude droit 1+, poignet 1
- Sensibilité : hypoesthésie droite, négligence spatiale gauche
- Trophicité : amyotrophie avant-bras droit

QUESTIONS :
1. Analysez les déficiences et handicaps selon la classification CIF (ou ICF). Quels sont les objectifs de rééducation à J12 ? (4 points)
2. Proposez un programme de rééducation moteur, de la prise en charge de l'épaule douloureuse et de la négligence spatiale. (4 points)
3. Prise en charge de l'aphasie, de la dysphagie et de la communication avec l'entourage. (4 points)
4. Prévention secondaire vasculaire : justifiez chaque traitement et les objectifs tensionnels, lipidiques, glycémiques. (3 points)
5. Évaluez le risque de chute, d'escarre et les complications à prévenir en SSR. (3 points)
6. À J21, le patient marche 10 m avec une personne (FAC 3). Quel projet de sortie (domicile, HAD, EHPAD) et quelles aides ? (2 points)`,

    corrigé: `1. DÉFICIENCES, HANDICAPS, OBJECTIFS (4 points) :
- Déficiences : hémiplégie droite, aphasie, hémi-anopsie, négligence, troubles déglutition, douleur épaule.
- Limitations activité : transferts, marche, communication, alimentation autonome.
- Restrictions participation : isolement social risque, dépendance ADL.
- Objectifs J12–J30 : sécuriser déglutition, prévenir complications (bronchopneumopathie, TVP, escarre), récupération marche avec aide technique, améliorer communication (aphasie), autonomie partielle toilette/habillage, préparer sortie ; pas d'objectif de marche sans aide à J12 (réaliste Rankin 3–4 à 3 mois).

2. RÉÉDUCATION MOTEUR ET ÉPAULE (4 points) :
- Moteur : kinésithérapie 2x/j — mobilisation passive/active-assistée MS droit, renforcement MI droit, apprentissage transferts, verticalisation progressive, FES si indication équipe ; ergothérapie : positionnement, orthèse poignet si fléchissons, préhension assistée.
- Épaule douloureuse : pas de mobilisation brutale ; positionnement coude sur coussin ; éviter subluxation (écharpe repos partiel) ; antalgiques ; si capsulite : mobilisation douce, possible infiltration après avis ; pas de kiné agressive.
- Négligence : rééducation visuo-spatiale (scanning, ancrage côté gauche), environnement sécurisé (approche côté non négligé).

3. APHASIE, DYSPHAGIE, ENTourage (4 points) :
- Aphasie : orthophonie quotidienne (compréhension, production, alternative communication : gestes, images, tableau) ; éviter surprotection ; impliquer la femme (formation).
- Dysphagie : textures IDDSI 4–5, liquides épaissis ; position 90°, petites bouchées ; surveillance signes aspiration ; réévaluation EAT-10 hebdo ; pas de liquides fins tant que VF non normalisée.
- Entourage : information réaliste sur pronostic, temps de récupération 6–12 mois ; soutien dépression (GDS 10) — psychologue, éventuel ISRS si persistant ; anticoagulation : éducation observance apixaban.

4. PRÉVENTION SECONDAIRE (3 points) :
- FA + AVC ischémique : anticoagulation à vie — apixaban 5 mg x2 (ou 2,5 si critères âge/poids) — justifié.
- Statine haute intensité : atorvastatine 80 mg, LDL cible < 0,7 g/L (LDL déjà 0,82 — poursuivre).
- PA : cible < 140/90 en phase aiguë récupération (éviter hypotension cérébrale) ; traitement chronique IEC/ARA2 à réintroduire si pas contre-indication.
- Diabète : HbA1c 8,1 — insuline en SSR puis schéma simplifié ; objectif HbA1c 7–8 % chez sujet âgé post-AVC (éviter hypoglycémie).
- Tabac : sevrage obligatoire ; bupropion ou substituts si besoin.
- Antiagrégation : pas d'aspirine en plus d'anticoicoagulant (sauf indication stent récent — pas le cas).

5. RISQUES SSR (3 points) :
- Chutes : Berg 12, FAC 1 — lever surveillé, fauteuil roulant, lit bas ; chaussures antidérapantes ; Tinetti si possible.
- Escarres : Braden à calculer (immobilité, incontinence ?) — prévention talons, sacrum ; mobilisation.
- TVP : mobilisation précoce, bas de contention si pas d'ischémie aiguë majore ; anticoagulation thérapeutique couvre prophylaxie.
- Infection : bronchopneumopathie par aspiration — dysphagie stricte ; sonde si échec (dernier recours).
- Spasticité : surveiller, baclofène si gênante plus tard.

6. PROJET DE SORTIE J21 (2 points) :
- FAC 3 = marche courte avec supervision → domicile possible si femme disponible + aménagements (barres, suppression seuils) + IDE 2–3x/semaine + kiné à domicile (prescription 30 séances).
- Si femme fragile : HAD kiné/orthophonie ou accueil temporaire EHPAD courte durée.
- Aides : APA, véhicule adapté si besoin, téléalarme ; MDPH si handicap persistant ; conduite automobile interdite (aphasie + déficit).`,

    juryTips: 'En 2018 le jury attend une rééducation structurée (objectifs SMART), pas seulement « kiné 2x/j ». Dysphagie = textures + orthophonie, jamais eau fine. Anticoagulation seule sans double antiagrégation sauf stent récent. Épaule post-AVC : ne pas brutaliser. Citer NIHSS, Barthel, FAC, IDDSI. Pronostic fonctionnel honnête à 78 ans avec infarctus étendu.'
  }
];