// ═══════════════════════════════════════════════════════════════
//  Sujets EVC Gériatrie — Années 2013, 2014, 2015 (épreuves complètes)
//  Format: consigne, temps, barème, sujet complet, corrigé point par point
// ═══════════════════════════════════════════════════════════════
const SUJETS_EVC_2013_2015 = [
  {
    id: 'evc-2013-denutrition-escarres',
    annee: 2013,
    session: 'Printemps',
    duree: '30 minutes (15 min préparation + 15 min oral)',
    bareme: '20 points total',
    consigne: 'Vous êtes médecin coordonnateur en EHPAD. M. Girard présente une dénutrition sévère et une escarre du sacrum stade III. Rédigez votre évaluation gériatrique complète et votre plan de soins pluridisciplinaire.',
    sujet: `M. GIRARD Pierre, 89 ans, est résident en EHPAD depuis 14 mois (admission après fracture du col fémoral opérée).

ANTÉCÉDENTS MÉDICAUX :
- Fracture du col fémoral gauche (ostéosynthèse DHS) il y a 14 mois — séquelles : marche avec déambulateur, raideur hanche
- Démence vasculaire (leucoaraïose, infarctus lacunaires multiples sur IRM il y a 3 ans) — stade modéré
- HTA ancienne, cardiopathie ischémique stable (angor d'effort classe II CCS)
- BPCO GOLD II (VEMS 58 % prédit)
- IRC stade 3b (DFG chronique 35–40 mL/min)
- Glaucome, surdité presbyacousie sévère
- Dépression majeure post-fracture (épisode traité, rémission partielle)

TRAITEMENT HABITUEL :
- Ramipril 5 mg/j
- Bisoprolol 2,5 mg/j
- Atorvastatine 20 mg/j
- Tramadol 50 mg x2/j (douleur hanche)
- Paracétamol 1 g x3/j
- Quétiapine 25 mg le soir (troubles du comportement nocturne)
- Lactulose 10 mL x2/j
- Collyre timolol
- Compléments nutritionnels prescrits il y a 4 mois (1 boîte/j) — observance faible

CONTEXTE ET MOTIF DE CONSULTATION :
- Infirmière signale : « ne finit plus ses plateaux », amaigrissement visible, odeur lors des soins du sacrum
- Poids à l'admission EHPAD : 74 kg ; poids il y a 3 mois : 68 kg ; poids ce matin : 61 kg
- Escarre découverte il y a 8 jours lors d'un change (classée stade III par IDE référente plaies)

ÉVALUATION CLINIQUE (ce matin) :
- Taille : 1,75 m → IMC actuel 19,9 kg/m² (perte ~17 % du poids habituel en 14 mois, accélération récente)
- PA : 102/58 mmHg assis ; orthostatisme : 88/52 mmHg debout (symptômes : étourdissement)
- FC : 62 bpm ; FR : 22/min ; SpO2 : 93 % en air ambiant
- T° : 37,4 °C
- MMS : 16/30 (désorientation modérée, troubles attention)
- GDS-15 : 7/15
- MNA complet : 14/30 (dénutrition)
- NRS 2002 : 5 (risque nutritionnel élevé)
- Braden : 9/23 (risque escarre très élevé)
- ADL : 2/6 ; IADL : 0/8
- Algoplus : 3/5 (comportement de douleur à la mobilisation)
- État général : maigreur visible, sarcopénie, peau sèche, cheveux cassants
- Oedèmes des chevilles ++ (compression laisse marque)
- Auscultation cardiaque : bruits assourdis, pas de souffle franc
- Auscultation pulmonaire : ronchi diffus bilatéraux, pas de crépitants francs
- Abdomen : plat, pas douloureux, transit lent
- Escarre sacrum : 4,5 x 3 cm, perte de substance jusqu'au fascia, bourgeonnement modéré, légère exhudat séro-purulent, pas d'odeur fétide, pas de cellulite péri-lésionnelle
- Talons : érythème, pas d'escarre ouverte
- Incontinence fécale et urinaire (changes 4–5/j)

BIOLOGIE (prise à jeun ce matin) :
- NFS : Hb 10,2 g/dL, VGM 92 fL, GB 11 400/mm³ (PN 8 900), plaquettes 410 000/mm³
- CRP : 42 mg/L
- Protéine C réactive + VS : VS 65 mm/h
- Albumine : 24 g/L
- Préalbumine : 0,10 g/L
- Transferrine : 1,8 g/L ; coefficient de saturation transferrine 18 %
- Ionogramme : Na 131 mmol/L, K 4,6, Cl 98 mmol/L
- Urée : 18 mmol/L ; créatinine : 145 µmol/L (DFG CKD-EPI 38 mL/min)
- Glycémie à jeun : 0,92 g/L
- TSH : 4,8 mUI/L ; T4L : 11 pmol/L (limite basse)
- Ferritine : 280 µg/L ; vitamine B12 : 210 pg/mL
- 25-OH vitamine D : 8 ng/mL
- Procalcitonine : 0,35 ng/mL
- ECBU (sondage résiduel 120 mL) : leucocyturie 80 000/mL, nitrites positifs, culture en cours
- HbA1c : 5,4 %

IMAGERIE ET EXAMENS :
- Radiographie thorax (hier) : cardiomégalie, redistribution vasculaire, épanchement pleural droit minime, pas de foyer consolidatif franc
- Échographie cardiaque (il y a 8 mois, rapport) : FEVG 48 %, hypokinésie inféro-latérale, IA modérée, PAPS 38 mmHg
- ECG : sinus bradycardie 58 bpm, onde Q inférieure ancienne, pas de sus-décalage ST
- Dénutrition : pas de TDM abdominal récent
- Photographie escarre (protocole plaie) : stade III NPUAP, fond 30 % jaune, 70 % rouge, bords macérés

QUESTIONS :
1. Caractérisez la dénutrition (critères, mécanismes, facteurs de risque chez ce patient) et hiérarchisez les causes à rechercher. (4 points)
2. Proposez une prise en charge nutritionnelle complète (objectifs, voie orale, compléments, surveillance) adaptée à l'IRC et à la démence. (4 points)
3. Décrivez la prise en charge de l'escarre du sacrum (nettoyage, pansement, décharge, indication chirurgicale) et les mesures de prévention des autres sites. (4 points)
4. Analysez les données cardiorespiratoires et biologiques (œdèmes, hyponatrémie, CRP) : quels diagnostics évoquez-vous et quelle conduite à tenir ? (4 points)
5. Réévaluez le traitement médicamenteux (iatrogénie, anticholinergique, analgésie) et les mesures non médicamenteuses des troubles comportementaux. (2 points)
6. Organisez le suivi pluridisciplinaire et les indicateurs de qualité (pesée, albumine, évolution plaie) sur 3 mois. (2 points)`,

    corrigé: `1. DÉNUTRITION — CARACTÉRISATION ET CAUSES (4 points) :
- Dénutrition protéino-énergétique sévère : perte > 15 % du poids en 14 mois, accélération (7 kg en 3 mois), albumine 24 g/L, préalbumine 0,10, MNA 14/30, NRS 5.
- Mécanismes : apports insuffisants (démence, dépression, douleur, dyspnée), hypercatabolisme possible (infection urinaire, inflammation plaie), pertes digestives non évoquées en premier.
- Facteurs gériatriques : sarcopénie, BPCO (coût ventilatoire), IC (anorexie, congestion), orthostatisme (peur de manger debout), incontinence (isolement), iatrogénie (quétiapine sédation).
- Causes à hiérarchiser : infection urinaire (ECBU, fièvre 37,4, CRP 42), décompensation cardiaque (œdèmes, Rx redistribution), hypothyroïdie limite, dépression, douleur non contrôlée, dénutrition d'entretien insuffisante malgré CNO prescrits.

2. PRISE EN CHARGE NUTRITIONNELLE (4 points) :
- Objectifs : 30–35 kcal/kg/j ≈ 1900–2100 kcal, protéines 1,2–1,5 g/kg/j (ajuster si IRC stade 4–5 : 0,8–1 g/kg discuté ; ici DFG 38 → 1,1–1,3 g/kg réaliste avec nephro).
- Voie orale privilégiée : textures IDDSI 4–5 si dysphagie à dépister, 5–6 repas, assistance à chaque repas, environnement calme.
- Compléments : CNO hypercaloriques hyperprotéinés 400 kcal x2/j entre repas (pas à jeun pour satiété), enrichissement farines, beurre.
- IRC : éviter excès K si hyperkaliémie ; pas de restriction protéique sévère au stade 3b sans dialyse ; surveiller K, P, acide urique.
- Surveillance : pesée 2x/semaine, journal alimentaire 3 jours, albumine/préalbumine à 2–4 semaines, MNA mensuel.

3. ESCARRE SACRUM STADE III (4 points) :
- Nettoyage : lavage eau tiède ou sérum physiologique, pas de povidone iodée en cavité, pas de pression hydrophile agressive.
- Pansement : autolytique ou interface + hydrocellulaire selon exsudat modéré ; alginates si bourgeonnement ; objectif : détersion douce, humidité contrôlée.
- Décharge obligatoire : repositionnement 2–3 h, matelas clinovisco, coussin de décharge sacrée (clino-orthostatique si toléré), éviter glissements linge.
- Pas d'indication chirurgicale immédiate si pas de nécrose étendue ni ostéite ; biopsie ou IRM si doute ostéomyélite (fièvre, CRP très élevée, os palpable).
- Prévention autres sites : talonnières, angles chevilles, surveillance quotidienne peau, Braden réévalué chaque semaine.

4. CARDIORESPIRATOIRE ET BIOLOGIE (4 points) :
- IC décompensée possible : œdèmes, dyspnée FR 22, SpO2 93 %, Rx redistribution, FEVG 48 %, ramipril + bisoprolol mais PA basse/orthostatisme → sous-remplissage relatif vs surdosage ?
- Hyponatrémie 131 : syndrome de perte de sel (diurétiques ? pas de furosemide listé — ramipril, dénutrition, polydipsie ?) ou SIADH si BPCO/IC ; bilan urinaire osmolarité si persistant.
- CRP 42 : infection urinaire + inflammation plaie ; traiter infection (antibiothérapie adaptée DFG, culture), réévaluer CRP à 48–72 h.
- Conduite : ECG + troponine si douleur thoracique ; rechercher décompensation (BPNP si dispo), adapter diurétique prudent si surcharge (furosémide faible dose, surveillance Na/K/DFG), oxygénothérapie si SpO2 < 88–90 % cible, ne pas sur-restrict hydrique si dénutrition.

5. TRAITEMENT ET COMPORTEMENT (2 points) :
- Quétiapine 25 mg : anticholinergique faible mais sédation, chutes, confusion — réduire ou arrêter avec approche non pharma (routine, lumière jour/nuit).
- Tramadol : risque confusion, constipation — maintenir si douleur Algoplus 3, sinon paracétamol régulier ; laxatif osmotique.
- Ramipril/bisoprolol : réévaluer PA et orthostatisme ; pas d'arrêt brutal bêtabloquant.
- Pas d'anticholinergiques supplémentaires ; revue STOPP/START.

6. SUIVI PLURIDISCIPLINAIRE (2 points) :
- Réunion hebdo IDE + médecin + diététicien + kiné (mobilisation douce, verticalisation) ; psychomotricien si agitation.
- Indicateurs : poids (+), albumine à 1 mois, surface escarre et stade photos, CRP post-antibiothérapie, Braden, Algoplus.
- Projet de soins écrit : nutrition, plaie, infection, objectifs réalistes (pas de réanimation invasive si démence avancée sans volontés).`,

    juryTips: 'En 2013 le jury attend la triade dénutrition–escarre–immobilité avec Braden < 12 = urgence soins. Ne pas oublier infection urinaire comme facteur aggravant la dénutrition. IRC stade 3 : pas de restriction protéique excessive. Escarre = décharge avant pansement coûteux. Citer HAS plaies et protocole nutrition EHPAD. Orthostatisme sous IEC/β-bloquant = piège classique.'
  },

  {
    id: 'evc-2014-chute-cardiologie',
    annee: 2014,
    session: 'Automne',
    duree: '30 minutes (15 min préparation + 15 min oral)',
    bareme: '20 points total',
    consigne: 'Vous êtes médecin aux urgences puis en unité de gériatrie aiguë. Mme Rousseau est admise après une chute avec traumatisme crânien. Intégrez l\'évaluation cardiologique dans votre prise en charge. Rédigez votre stratégie diagnostique et thérapeutique.',
    sujet: `Mme ROUSSEAU Marie, 82 ans, est admise aux urgences à 14h après une chute dans sa salle de bain ce matin.

CIRCONSTANCES DE LA CHUTE :
- Témoin : aucun ; retrouvée par la fille (visite quotidienne) allongée sur le carrelage, conscience altérée initialement selon la fille
- Pas de prodrome mémorisé par la patiente (amnésie de l'épisode)
- Terrain glissant (pas de tapis antidérapant), levée nocturne pour uriner
- Pas de syncope rapportée mais malaise possible « avant de ne plus se souvenir »
- Traumatisme : contusion frontale, pas d'éjection du sang, vomissements x1 à l'arrivée du SAMU

ANTÉCÉDENTS :
- HTA depuis 20 ans
- Fibrillation atriale permanente diagnostiquée il y a 5 ans
- Insuffisance cardiaque à FEVG préservée (HFpEF) depuis 2 ans (hospitalisation pour OAP il y a 18 mois)
- Valvulopathie : rétrécissement aortique modéré (surface 1,2 cm², gradient moyen 28 mmHg — écho il y a 1 an)
- Diabète type 2 (HbA1c habituelle 7,2 %)
- Ostéoporose : T-score -3,0 rachis
- Hypothyroïdie substituée
- Pas de démence connue ; MMS domicile il y a 6 mois : 26/30

TRAITEMENT À DOMICILE :
- Furosémide 40 mg le matin
- Spironolactone 25 mg/j
- Bisoprolol 5 mg/j
- Apixaban 2,5 mg x2/j (posologie réduite : âge > 80, poids 54 kg)
- Ramipril 5 mg/j
- Metformine 850 mg x2/j
- Lévothyrox 75 µg/j
- Carbonate de calcium + vitamine D
- Zolpidem 10 mg au coucher (prescrit il y a 2 mois pour insomnie)
- Paracétamol à la demande

CONTEXTE SOCIAL :
- Vit seule dans un F3 (2e étage sans ascenseur)
- Fille à 15 km, présence quotidienne
- Autonomie : Katz 5/6 (aide pour le ménage), IADL 6/8
- 2 chutes antérieures en 12 mois sans fracture (dont une dans escalier)
- Tinetti domicile : 19/28

EXAMEN À L'ADMISSION (URGENCES, H+2) :
- Poids 54 kg, taille 1,58 m → IMC 21,6
- PA : 148/88 mmHg couchée ; 118/72 mmHg debout à 1 min (étourdissement rapporté)
- FC : 92 bpm irrégulier ; SpO2 : 96 % AA
- T° : 36,9 °C ; glycémie capillaire : 1,78 g/L
- GCS : 14 (E4 V4 M6) — confusion modérée, désorientation temps
- Pupilles isocores réactives ; pas de déficit moteur ; pas de signe méningé
- Plaie frontale 2 cm suturée par urgences
- Auscultation : crépitants bases bilatéraux discrets, souffle systolique 3/6 foyer aortique irradiant carotides
- Oedèmes MI jusqu'aux chevilles
- Pas de signe de fracture évident ; douleur hanche droite à la mobilisation (à surveiller)

BIOLOGIE (admission) :
- NFS : Hb 12,8 g/dL, GB 9 100/mm³, plaquettes 198 000/mm³
- Créatinine : 112 µmol/L (DFG 42 mL/min) — baseline fille : ~95 µmol/L
- Na 134, K 4,8, Cl 102 mmol/L
- Glycémie : 1,82 g/L
- Troponine ultrasensible : 28 ng/L (seuil local 14) — 2e prélèvement H+6 : 32 ng/L
- BNP : 680 pg/mL
- TSH : 2,4 mUI/L
- Calcium corrigé : 2,35 mmol/L
- CRP : 6 mg/L
- ECBU : leucocytes 10 000/mL, nitrites négatifs

IMAGERIE :
- Scanner cérébral sans injection : pas d'hémorragie intracrânienne, pas de fracture de voûte ; atrophie cérébrale modérée, leucoaraïose
- Radiographie bassin + hanche droite : pas de fracture visible (à compléter si douleur persistante)
- Radiographie thorax : cardiomégalie, lignes de Kerley B discrètes, pas d'infiltrat
- ECG : fibrillation atriale, FC 94, pas d'ischémie aiguë, hypertrophie VG, HBAI gauche
- Échographie cardiaque bedside (urgences) : non réalisée ; dernier rapport (1 an) : FEVG 58 %, RAo modéré, hypertrophie VG concentrique, OGA dilatée

ÉVALUATION GÉRIATRIQUE (J1, USG) :
- MMS : 22/30 (troubles attention, orientation)
- Confusion Assessment Method (CAM) : positif (début brutal, fluctuation, inattention, désorganisation pensée)
- Get-up and Go : impossible (douleur hanche + vertiges)
- Timed Up and Go : non réalisable
- Orthostatisme : chute PA 30 mmHg systolique, symptômes
- Liste médicaments : zolpidem + furosémide matin + polymédication cardio

QUESTIONS :
1. Classifiez la chute (mécanisme, circonstances) et identifiez les facteurs de risque intrinsèques et extrinsèques. (3 points)
2. Le traumatisme crânien sous anticoagulation : quelle surveillance et quels examens ? Quand hospitaliser en neurochirurgie ? (3 points)
3. Analysez le profil cardiologique (FA, RAo, HFpEF, troponine, BNP) : quelles étiologies de chute/syncope retenez-vous ? (4 points)
4. Proposez un bilan complémentaire cardiologique et une prise en charge de l'insuffisance cardiaque en lien avec la chute. (4 points)
5. Prise en charge du delirium aigu et révision de la iatrogénie (zolpidem, antihypertenseurs, diurétiques). (3 points)
6. Projet de sortie et prévention des rechutes (équipements, rééducation, anticoagulation). (3 points)`,

    corrigé: `1. CLASSIFICATION DE LA CHUTE (3 points) :
- Chute non witnessée, probablement mécanique + facteurs multiples ; syncope non prouvée mais hypotension orthostatique et arythmie possibles.
- Intrinsèques : âge 82, HF, FA, RAo modéré, orthostatisme, hypoglycémie 1,78–1,82 g/L, ostéoporose, possible delirium post-chute.
- Extrinsèques : salle de bain glissante, nuit, zolpidem (risque chute x2), pas de téléalarme mentionnée, éclairage ?
- Antécédents : 2 chutes/12 mois, Tinetti 19 = risque élevé.

2. TCC SOUS APIXABAN (3 points) :
- GCS 14, scanner initial négatif : surveillance neuro 24–48 h minimum (guidelines traumatisme léger anticoagulés).
- Répéter scanner si dégradation neurologique, vomissements répétés, anticoagulation récente < 6 h (ici chute matinale).
- Pas d'indication neurochirurgie si pas d'hémorragie ; contre-indication relative à hémostase invasive sauf urgence vitale.
- Surveillance PA, éviter hypotension ; pas d'arrêt systématique apixaban sans balance bénéfice (FA, CHA2DS2 élevé) — discussion cas par cas si intervention.

3. PROFIL CARDIOLOGIQUE ET ÉTIOLOGIES (4 points) :
- FA permanente : risque syncope par bradycardie (bisoprolol 5 mg) ou tachycardie mal tolérée.
- RAo modéré : syncope d'effort ou orthostatique possible (gradient 28 mmHg — modéré mais symptomatique chez sujet âgé).
- HFpEF décompensée légère : BNP 680, crépitants, œdèmes — orthopnée nocturne, levers nocturnes, fatigue.
- Troponine légèrement élevée stable : myocardiopathie chronique, pas de SCA typique sans douleur ; infarctus type 2 possible si hypotension — ECG sans sus-ST.
- Étiologies chute retenues : orthostatisme (diurétiques, déshydratation), hypoglycémie, arythmie, RAo, delirium nocturne (zolpidem).

4. BILAN CARDIO ET PRISE EN CHARGE IC (4 points) :
- Bilan : ETT complet (FEVG, gradients RAo à l'effort si doute, PAPS), Holter ECG 24–48 h si syncope suspectée, épreuve orthostatique documentée.
- IC : réévaluer surcharge — furosémide 40 peut aggraver orthostatisme ; ajuster dose ou fractionner ; spironolactone maintenir si K OK et DFG > 30.
- Ramipril : maintenir si PA tolérée debout.
- Bisoprolol : ralentir si FC < 60 ou syncope ; pas d'arrêt brutal.
- Apixaban 2,5 mg x2 : dose correcte (2 critères réduction) ; ne pas sous-doser sans raison ni sur-doser.
- Glycémie : ajuster metformine / surveillance ; hypoglycémie = cause reversible majeure.

5. DELIRIUM ET IATROGÉNIE (3 points) :
- CAM positif : delirium hyperactif/hypoactif mixte post-chute, infection à écarter, métabolique (glycémie, Na), douleur hanche, environnement.
- Mesures : lunettes, appareils auditifs, réorientation, sommeil protégé, éviter contention.
- Zolpidem : arrêt — BEERS, facteur chute et confusion.
- Pas d'antipsychotique en première intention sauf danger ; halopéridol faible dose courte si agitation sévère.
- Réhydratation prudente si déshydratation + IC.

6. SORTIE ET PRÉVENTION (3 points) :
- Hanche : imagerie complète si douleur (IRM si Rx négative et suspicion fracture occulte).
- Sortie si MMS stable, pas de fracture, orthostatisme traité : kiné, ergo, tapis salle de bain, barres, téléalarme, éclairage nocturne.
- Réduction polymédication documentée ; éducation fille.
- Anticoagulation : poursuivre apixaban si CHA2DS2-VASc ≥ 4 (âge, sexe, HTA, DM, IC) vs HAS-BLED (chutes, âge) — pas d'arrêt automatique ; casque non requis mais environnement sécurisé.
- Suivi cardiologie + gériatre à 1 mois ; programme chutes (Tinetti, renforcement musculaire).`,

    juryTips: 'En 2014 le jury croise chute–syncope–cœur : toujours orthostatisme et glycémie chez le diabétique. Apixaban 2,5 mg : vérifier les 2 critères de dose réduite. Zolpidem = erreur fréquente à critiquer. Troponine faible sans douleur ≠ SCA systématique. Delirium post-chute : CAM. Ne pas oublier fracture occulte hanche si Rx initiale négative.'
  },

  {
    id: 'evc-2015-confusion-polypharmacie',
    annee: 2015,
    session: 'Printemps',
    duree: '30 minutes (15 min préparation + 15 min oral)',
    bareme: '20 points total',
    consigne: 'Vous êtes médecin en unité de court séjour gériatrique. M. Lemaire est hospitalisé pour confusion aiguë. Réalisez une analyse de la polymédication et un plan de déprescription argumenté.',
    sujet: `M. LEMAIRE André, 86 ans, est admis en USG depuis 48 h pour confusion aiguë et agitation.

MOTIF D'HOSPITALISATION :
- Agitation nocturne, hallucinations visuelles (« des enfants dans la chambre »), refus de soins
- Famille : altération brutale sur 72 h, avant autonomie conservée pour les actes essentiels
- Médecin traitant : hospitalisation pour « bilan de confusion »

ANTÉCÉDENTS :
- Parkinson léger (diagnostic il y a 4 ans, rigidité modérée, pas de fluctuations motrices majeures)
- HTA, artériopathie oblitérante des MI (claudication 150 m)
- HBP symptomatique
- Reflux gastro-œsophagien
- Douleurs lombaires chroniques (spondylarthrose)
- Pas d'antécédent psychiatrique ; MMS il y a 1 mois (cabinet) : 27/30

TRAITEMENT AVANT ADMISSION (liste pharmacie + DMP) — 14 molécules :
1. Lévodopa/Benserazide 100/25 mg x3/j
2. Pramipexole 0,7 mg x3/j
3. Amlodipine 10 mg/j
4. Périndopril 4 mg/j
5. Atorvastatine 40 mg/j
6. Clopidogrel 75 mg/j
7. Tamsulosine 0,4 mg/j
8. Oméprazole 20 mg/j
9. Paracétamol 1 g x4/j
10. Tramadol LP 100 mg x2/j
11. Pregabaline 75 mg matin + 150 mg soir
12. Diazépam 5 mg si crise d'angoisse (1–2x/semaine)
13. Hydroxyzine 25 mg au coucher (prescrit par confrère il y a 3 semaines pour insomnie)
14. Mirtazapine 15 mg au coucher (initié il y a 10 jours pour « anorexie »)

HOSPITALISATION J0–J2 :
- Température 38,2 °C à J1 → antibiothérapie ceftriaxone (infection respiratoire suspectée)
- Depuis J2 : agitation diurne, somnolence alternée, chute sans fracture en chambre (surveillance renforcée)

EXAMEN CLINIQUE (J2, 10h) :
- PA : 134/76 mmHg ; FC : 88 bpm ; FR : 20/min ; SpO2 94 % AA
- T° : 37,6 °C
- GCS 13–14 fluctuant
- Tremblement de repos modéré, rigidité cog-wheel, marche petits pas possible avec aide
- Pas de déficit focal, pas de raideur méningée
- Muqueuses sèches ; peau plicaturée
- Auscultation : râles crépitants base droite
- Abdomen souple ; globe vésical non perçu
- Pas d'ictère

ÉVALUATION COGNITIVE ET COMPORTEMENT :
- MMS : 18/30 (fluctuant : 22 hier soir)
- CAM : positif (critères 1+2+3+4)
- 4AT : 8/12 (confusion + changement cognitif + agitation + anticholinergiques)
- NPI : agitation 8/12, hallucinations 6/12, sommeil 7/12
- Anticholinergic Cognitive Burden (ACB) score estimé : 6 (hydroxyzine 3, mirtazapine 1, pramipexole 0, oméprazole faible, etc.)

BIOLOGIE (J2 à jeun) :
- NFS : Hb 13,1 g/dL, GB 12 600/mm³ (PN 10 200), plaquettes 165 000/mm³
- CRP : 78 mg/L (35 à J0)
- Procalcitonine : 0,8 ng/mL
- Na 147 mmol/L, K 3,9, Cl 108 mmol/L
- Urée 12 mmol/L, créatinine 108 µmol/L (DFG 58 mL/min) — baseline 90 µmol/L
- Glycémie 1,15 g/L
- Albumine 32 g/L
- Calcium corrigé 2,28 mmol/L
- TSH 1,9 mUI/L
- ASAT/ALAT normales ; GGT 68 UI/L
- Ammoniaémie : 42 µmol/L (N < 50)
- ECBU : leucocyturie 5000/mL, culture négative
- Hémocultures en cours

IMAGERIE :
- Scanner cérébral (J0) : pas d'hémorragie, pas d'hydrocéphalie ; atrophie modérée, leucoaraïose Fazekas 2, pas d'infarctus récent
- Radiographie thorax J1 : foyer alvéolaire lobe inférieur droit
- Échographie vésicale : résidu post-mictionnel 80 mL (sondage intermittent fait)

REVUE MÉDICAMENTEUSE (contexte) :
- Dernière modification : mirtazapine + hydroxyzine récentes
- Observance : fille rapporte oublis occasionnels mais « il prend tout le soir dans un pilulier »
- Pas d'interaction officine signalée

QUESTIONS :
1. Confirmez le diagnostic de delirium (CAM, étiologies) et proposez un diagnostic différentiel ciblé chez ce patient parkinsonien. (4 points)
2. Classez les facteurs précipitants (infection, déshydratation, médicaments) par ordre de priorité actionnable. (3 points)
3. Analysez la polymédication : score anticholinergique, opioïdes, benzodiazépines, psychotropes — quels médicaments arrêter en premier et comment ? (5 points)
4. Quelle prise en charge du Parkinson pendant le delirium (lévodopa, pramipexole, risque syndrome malin) ? (3 points)
5. Traitement non médicamenteux et médicamenteux symptomatique de l'agitation (HAS, durée limitée). (3 points)
6. Plan de sortie : traitement allégé cible, surveillance, prévention de récidive. (2 points)`,

    corrigé: `1. DELIRIUM ET DIAGNOSTIC DIFFÉRENTIEL (4 points) :
- Delirium confirmé : CAM positif, début aigu < 72 h, fluctuation MMS 18–22, altération conscience.
- Étiologies DELIRIUM (I WATCH DEATH) : Infection pneumopathie (Rx foyer, CRP 78, fièvre), Withdrawal (diazépam rare), Acute metabolic (hypernatrémie 147, déshydratation), Trauma (chute), CNS : scanner sans cause aiguë, Parkinson + médicaments, Drugs (hydroxyzine, mirtazapine, tramadol, pramipexole), Hypoxie légère.
- Différentiel parkinsonien : syndrome malin des neuroleptiques (à éviter avec antipsychotiques classiques), démence à corps de Lewy (fluctuations, hallucinations — chronologie ici aiguë post-médicaments), psychose médicamenteuse pramipexole.

2. FACTEURS PRÉCIPITANTS PRIORISÉS (3 points) :
1) Infection bronchopneumopathie — traiter antibiothérapie adaptée, oxygène si besoin, kiné respiratoire.
2) Iatrogénie récente : hydroxyzine + mirtazapine + tramadol + pregabaline = cascade CNS.
3) Déshydratation / hypernatrémie 147 : réhydratation lente, surveiller Na.
4) Rétention urinaire partielle (résidu 80 mL) — tamsulosine + surveillance.
5) Douleur lombaire sous-traitée ou sur-traitée (tramadol) — réévaluer.

3. POLYMÉDICATION ET DÉPRESCRIPTION (5 points) :
- ACB élevé : hydroxyzine ARRÊT immédiat (anticholinergique fort, BEERS).
- Mirtazapine : arrêt (ajout récent 10 j, confusion, interaction sédation) — pas d'antidépresseur sedatif en delirium.
- Diazépam : arrêt progressif si prise fréquente ; ici 1–2/sem — éviter au long cours.
- Tramadol LP + pregabaline : double analgésie CNS — réduire tramadol en premier (sevrage progressif 25 % / semaine) ou remplacer par paracétamol régulier si douleur modérée.
- Pramipexole : lien hallucinations Parkinson — réduire dose ou arrêt progressif sous neuro si possible (risque akinesie) ; discuter avec neurologue.
- Oméprazole : réévaluer indication long terme (déprescription si pas d'ulcère).
- Maintenir : lévodopa (ne pas arrêter brutalement), antihypertenseurs si PA OK, clopidogrel si AOMI/stent indication, statine secondaire prévention.
- Outils : liste STOPP/START, bilan médicamenteux partagé avec pharmacien, fille pour observance.

4. PARKINSON PENDANT DELIRIUM (3 points) :
- Lévodopa : maintenir horaires stricts, pas de réduction brutale (risque akinetic crisis).
- Pramipexole : agoniste dopaminergique associé aux hallucinations — réduction progressive si agitation/hallucinations, surveillance rigidité.
- Contre-indication : antipsychotiques D2 bloquants (halopéridol classique) — syndrome malin (hyperthermie, rigidité, CPK).
- Si neuroleptique nécessaire : quétiapine faible dose ou clozapine (spécialiste) ; pimavanserin si hallucinations Parkinson chroniques pas ici delirium aigu.

5. AGITATION — PRISE EN CHARGE (3 points) :
- Non pharma : réorientation, présence famille, lunettes, éclairage jour/nuit, réduction bruit, mobilisation douce, douleur traitée.
- Pharma si danger : quétiapine 12,5–25 mg PO, durée < 1 semaine, réévaluation quotidienne ; éviter halopéridol IV si Parkinson.
- Pas de contention physique sauf extrême urgence documentée.
- HAS : traiter cause, pas de sédation de confort systématique.

6. PLAN DE SORTIE (2 points) :
- Cible ≤ 8–9 médicaments si possible : lévodopa, 1 AH, statine, clopidogrel si indiqué, tamsulosine, paracétamol, oméprazole à réévaluer.
- Pas de hydroxyzine, mirtazapine, tramadol LP (ou palier unique faible), pas de BZD au long cours.
- Education fille : signes delirium, hydratation, pilulier IDE si besoin.
- Suivi médecin traitant J+7 et J+30 ; MMS et CAM à domicile ; prévention : éviter nouveaux psychotropes « pour dormir ».`,

    juryTips: 'En 2015 le jury attend une revue médicamenteuse structurée (STOPP, ACB, chronologie des introductions). Mirtazapine + hydroxyzine en 3 semaines = cause iatrogène majeure. Parkinson : jamais halopéridol sans réflexion syndrome malin. Pramipexole et hallucinations : lien connu. Infection doit être traitée en parallèle de la déprescription — pas tout attribuer aux médicaments. Citer CAM, 4AT, durée limitée neuroleptiques.'
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SUJETS_EVC_2013_2015 };
}