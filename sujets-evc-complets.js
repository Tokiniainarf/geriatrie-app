// ═══════════════════════════════════════════════════════════════
//  Vrais sujets EVC Gériatrie — Épreuves complètes
//  Format: consigne, temps, barème, sujet complet, corrigé
// ═══════════════════════════════════════════════════════════════
const SUJETS_EVC_COMPLETS = [
  {
    id: 'evc-complet-1',
    annee: 2024,
    session: 'Printemps',
    duree: '30 minutes (15 min préparation + 15 min oral)',
    bareme: '20 points total',
    consigne: 'Vous êtes interne de gériatrie aux urgences. Vous recevez ce patient à 23h. Rédigez votre prise en charge initiale et argumentez vos décisions.',
    sujet: `M. DUBOIS Jean, 84 ans, est amené par le SAMU à 23h pour confusion aiguë depuis 6 heures.

ANTÉCÉDENTS :
- HTA traitée par amlodipine 10mg/j
- Diabète type 2 traité par metformine 1000mg x2/j + gliclazide 80mg/j
- BPCO stade GOLD II traitée par salbutamol à la demande
- Adénome prostatique traité par tamsulosine 0.4mg/j
- Ex-fumeur (30 paquets-année, sevré depuis 5 ans)
- AVC ischémique temporal gauche il y a 3 ans (séquelles: aphasie de Wernicke légère)

TRAITEMENT ACTUEL :
- Amlodipine 10mg/j
- Metformine 1000mg x2/j
- Gliclazide 80mg/j
- Tamsulosine 0.4mg/j
- Salbutamol à la demande
- Oméprazole 20mg/j
- Aspirine 100mg/j

SITUATION ACTUELLE :
Sa fille le trouve confus à 17h. Il ne reconnaît pas son appartement, parle de manière incohérente, essaie de se lever constamment. Elle appelle le SAMU à 23h.

AUX URGENCES :
- T°: 38.4°C
- PA: 145/85 mmHg
- FC: 105 bpm
- FR: 22/min
- SpO2: 92% en air ambulant
- Poids: 68 kg (habituel: 72 kg)
- MMS: 14/30 (avant: 24/30 il y a 6 mois)
- GDS-15: 6/15
- ADL: 3/6 (habillage et toilette altérés)
- IADL: 2/8
- Douleur: EVA 3/10 (flanc droit)
- Tinetti: 12/28

EXAMEN CLINIQUE :
- Confus, désorienté dans le temps et l'espace
- Agité, essaie de se lever
- Sécheresse cutanée, turgescence cutanée diminuée
- Poumon: crépitants basaux droits
- Abdomen: globe vésical palpable
- Pas de déficit neurologique focal
- Peau: pas d'escarre, pas de foyer cutané

BIOLOGIE :
- NFS: Hb 13.2 g/dL, GB 15 000/mm³ (PNN 85%), Plaquettes 280 000
- Créatinine: 145 µmol/L (habituelle: 95), DFG: 38 mL/min
- Na: 148 mmol/L, K: 4.8 mmol/L
- Glycémie: 2.8 g/L
- CRP: 125 mg/L
- TSH: normale
- Gaz du sang: pH 7.48, PaCO2 32 mmHg, PaO2 68 mmHg, HCO3 24 mmol/L

IMAGERIE :
- Rx thoracique: infiltrat basal droit
- TDM cérébral: pas de lésion aiguë, atrophie corticale modérée

QUESTIONS :
1. Listez les diagnostics différentiels et argumentez le diagnostic le plus probable (4 points)
2. Quels sont les facteurs de risque de confusion chez ce patient ? (3 points)
3. Proposez un bilan étiologique complémentaire (3 points)
4. Quelle est votre prise en charge thérapeutique immédiate ? (5 points)
5. Quelle est votre stratégie de déprescription ? (3 points)
6. Quel plan de sortie envisagez-vous ? (2 points)`,

    corrigé: `1. DIAGNOSTICS DIFFÉRENTIELS (4 points) :
- Confusion aiguë (delirium) → LE PLUS PROBABLE : début aigu (6h), fluctuation, inattention, agitation. CAM positive.
- AVC récent : peu probable (pas de déficit focal, TDM normal)
- Crise comitiale : possible (ATCD AVC) mais pas de mouvements anormaux observés
- Hypoglycémie : contributive (glycémie 2.8) mais ne suffit pas à expliquer le tableau complet
- Dépression (pseudodémence) : GDS 6/15 = légère, ne suffit pas

Diagnostic retenu: Confusion aiguë (delirium) multi-factorielle.

2. FACTEURS DE RISQUE (3 points) :
- Âge avancé (84 ans)
- ATCD AVC (fragilité cognitive)
- Polymédication (7 médicaments, dont Beers: tamsulosine)
- Infection pulmonaire (fièvre, CRP, crépitants)
- Rétention urinaire (globe vésical)
- Déshydratation (Na 148, perte 4 kg)
- Hypoglycémie (2.8 g/L sous gliclazide)
- Insuffisance rénale aiguë (créatinine 145 vs 95)

3. BILAN ÉTIOLOGIQUE (3 points) :
- ECBU (rétention urinaire → infection ?)
- Hémocultures (fièvre, syndrome inflammatoire)
- Ionogramme complet (hypernatrémie)
- Lactates (hypoperfusion ?)
- Troponine (ischémie myocardique silencieuse)
- Gaz du sang (alcalose respiratoire = hyperventilation)
- Échographie vésicale (résidu post-mictionnel)

4. PRISE EN CHARGE IMMÉDIATE (5 points) :
- Antibiothérapie: amoxicilline-clavulanate 1g IV (pneumopathie)
- Réhydratation: NaCl 0.9% 500mL puis réévaluer
- Correction hypoglycémie: arrêt gliclazide, glucose 30% si nécessaire
- Sondage urinaire si rétention confirmée
- Oxygène 2L/min si SpO2 < 92%
- Halopéridol 0.5mg PO si agitation sévère
- Pas de contention
- Réorientation, lumière, présence familiale
- Surveillance: T°, PA, FC, SpO2, glycémie, diurèse toutes les 4h

5. STRATÉGIE DE DÉPRESCRIPTION (3 points) :
- Arrêt gliclazide (hypoglycémie + IRA)
- Réduction metformine (DFG 38 → CI si < 30)
- Arrêt tamsulosine (Beers, confusion)
- Réduction amlodipine (hypotension orthostatique ?)
- Maintien aspirine (ATCD AVC)
- Maintien oméprazole (protection gastrique)
- Réévaluation à J7

6. PLAN DE SORTIE (2 points) :
- Si amélioration: retour domicile avec aide à domicile renforcée
- SSR si perte d'autonomie persistante
- RDV médecin traitant à J7
- Bilan biologique à J15
- Réévaluation cognitive à 1 mois (MMS)
- Éducation thérapeutique (diabète, médicaments)`,

    juryTips: 'Le jury attend que vous identifiiez la confusion aiguë comme diagnostic principal, que vous listiez TOUTES les causes (infection, rétention, déshydratation, hypoglycémie, IRA, iatrogénie), et que vous proposiez une prise en charge globale (traitement cause + symptôme + prévention). La déprescription est un point clé — le gliclazide est le médicament le plus dangereux ici.'
  },

  {
    id: 'evc-complet-2',
    annee: 2024,
    session: 'Automne',
    duree: '30 minutes (15 min préparation + 15 min oral)',
    bareme: '20 points total',
    consigne: 'Vous êtes médecin en EHPAD. Ce résident est admis ce matin. Rédigez le projet de soins initial.',
    sujet: `Mme MARTIN Marie, 88 ans, est admise en EHPAD ce matin en provenance de son domicile.

ANTÉCÉDENTS :
- Maladie d'Alzheimer stade GDS 5 (modéré-sévère)
- HTA traitée par périndopril 5mg/j
- Ostéoporose traitée par alendronate 70mg/sem + Vit D 1000UI/j
- FA permanente traitée par apixaban 5mg x2/j
- Arthrose genou bilatérale
- Fracture col fémoral gauche opérée il y a 6 mois (prothèse)
- Chute récidivante (4 chutes en  derniers 6 mois)

TRAITEMENT ACTUEL :
- Périndopril 5mg/j
- Apixaban 5mg x2/j
- Alendronate 70mg/sem
- Vit D 1000UI/j
- Paracétamol 1g x3/j
- Tramadol 50mg x2/j
- Oméprazole 20mg/j
- Mirtazapine 15mg le soir
- Donépezil 10mg/j

CONTEXTE SOCIAL :
- Vit seule depuis le décès de son mari il y a 2 ans
- 2 enfants: fils à Paris (visite 1x/mois), fille à Lyon (visite 1x/trimestre)
- Aide à domicile 2h/j (toilette + repas)
- Livraison de repas à domicile
- Téléalarme (ne l'utilise plus car ne comprend plus)
- Dernier MMS à domicile: 12/30 (il y a 3 mois)
- Chute grave il y a 2 semaines (pas de fracture)
- La fille demande l'admission en EHPAD

ÉVALUATION À L'ADMISSION :
- MMS: 10/30
- GDS-15: 12/15
- ADL: 2/6 (alimentation + continence)
- IADL: 0/8
- MNA: 17/30
- Tinetti: 8/28
- Braden: 14/23
- Douleur: ECPA 5/10
- Poids: 48 kg (IMC 18.5)
- Albumine: 28 g/L

QUESTIONS :
1. Analysez le risque de chute de cette résidente (4 points)
2. Proposez un plan de prévention des escarres (3 points)
3. Quelle est votre stratégie nutritionnelle ? (3 points)
4. Quels médicaments modifiez-vous et pourquoi ? (4 points)
5. Comment organisez-vous la communication avec la famille ? (3 points)
6. Quel projet de soins proposez-vous à 3 mois ? (3 points)`,

    corrigé: `1. ANALYSE DU RISQUE DE CHUTE (4 points) :
- Tinetti 8/28 = risque TRÈS ÉLEVÉ (< 19)
- Facteurs intrinsèques: Alzheimer (désorientation, troubles de l'équilibre), ostéoporose (risque fracture), arthrose (douleur, raideur), ATCD fracture col fémoral
- Facteurs extrinsèques: polymédication (9 médicaments), tramadol (sédation), mirtazapine (sédation), apixaban (risque hémorragique si chute)
- Facteurs iatrogéniques: tramadol + mirtazapine = majoration sédation
- Plan: révision médicamenteuse, rééducation, adaptation chambre, Vit D, matelas anti-chute

2. PLAN DE PRÉVENTION ESCARRES (3 points) :
- Braden 14/23 = risque modéré
- Facteurs: dénutrition (MNA 17, albumine 28), IMC 18.5, mobilité réduite, ATCD fracture
- Plan: matelas anti-escarres, changement position H2, nutrition enrichie, soins cutanés, surveillance hebdomadaire

3. STRATÉGIE NUTRITIONNELLE (3 points) :
- MNA 17 = risque de dénutrition
- Albumine 28 g/L = dénutrition
- Plan: enrichissement alimentaire, CNO x3/j, fractionnement 6 repas/j, protéines 1.2g/kg/j, Vit D + calcium, surveillance poids hebdomadaire

4. MODIFICATIONS MÉDICAMENTEUSES (4 points) :
- Arrêt tramadol (sédation, chute, confusion) → paracétamol seul
- Réduction mirtazapine 15→7.5mg (sédation) → évaluer si besoin
- Maintien donépezil (bénéfice cognitif modéré mais réel)
- Réduction apixaban 5→2.5mg x2/j (poids 48kg < 60kg, âge)
- Maintien périndopril (HTA)
- Maintien alendronate + Vit D (ostéoporose)
- Maintien oméprazole (protection gastrique)

5. COMMUNICATION FAMILLE (3 points) :
- Contact avec la fille (décisionnaire) dans les 48h
- Réunion de concertation à 1 mois
- Transmission régulière (état de santé, événements)
- Implication dans le projet de soins
- Préparation du deuil (maladie évolutive)

6. PROJET DE SOINS À 3 MOIS (3 points) :
- Maintien de l'autonomie actuelle (ADL 2/6)
- Prévention des chutes (objectif: 0 chute grave)
- Stabilisation du poids (objectif: > 50kg)
- Réévaluation cognitive (MMS à 3 mois)
- Activités de stimulation cognitive
- Accompagnement de fin de vie si déclin rapide`,

    juryTips: 'Le jury attend une analyse complète du risque de chute (Tinetti, médicaments, environnement), une stratégie nutritionnelle adaptée (pas de nutrition artificielle en Alzheimer modéré-sévère), et une déprescription raisonnée (tramadol = priorité absolue). La communication avec la famille est un point clé — ne pas oublier de mentionner le projet de soins à long terme.'
  },

  {
    id: 'evc-complet-3',
    annee: 2023,
    session: 'Printemps',
    duree: '30 minutes (15 min préparation + 15 min oral)',
    bareme: '20 points total',
    consigne: 'Vous êtes interne en gériatrie. Ce patient est adressé par son médecin traitant pour bilan gériatrique.',
    sujet: `M. DUPONT Pierre, 79 ans, adressé par son médecin traitant pour "perte de mémoire et fatigue".

MOTIF DE CONSULTATION :
Le patient consulte pour des troubles de mémoire depuis 1 an. Il oublie les rendez-vous, répète les mêmes questions, a perdu 6 kg en 6 mois. Sa femme dit qu'il "n'est plus le même".

ANTÉCÉDENTS :
- HTA traitée par losartan 50mg/j
- Dyslipidémie traitée par atorvastatine 20mg/j
- Diabète type 2 traité par metformine 850mg x2/j
- BPH traitée par alfuzosine 10mg/j
- Dépression traitée par amitriptyline 75mg/j (depuis 2 ans)
- Ex-fumeur (20 paquets-année)

TRAITEMENT ACTUEL :
- Losartan 50mg/j
- Atorvastatine 20mg/j
- Metformine 850mg x2/j
- Alfuzosine 10mg/j
- Amitriptyline 75mg/j
- Aspirine 100mg/j

ÉVALUATION :
- MMS: 21/30
- GDS-15: 14/15
- ADL: 5/6
- IADL: 4/8
- MNA: 20/30
- Tinetti: 22/28
- PA: 135/80 mmHg (couché), 110/65 mmHg (debout)
- Poids: 65 kg (habituel: 71 kg)
- Albumine: 32 g/L
- TSH: normale
- B12: 180 pg/mL (normale)
- Créatinine: 110 µmol/L (DFG 58)
- NFS: normale
- IRM cérébrale: atrophie hippocampique modérée, leucoaraïose périventriculaire

QUESTIONS :
1. Quels sont les diagnostics à évoquer ? Argumentez. (4 points)
2. Quels examens complémentaires demandez-vous ? (3 points)
3. Analysez le traitement actuel et proposez des modifications. (4 points)
4. Quelle prise en charge non médicamenteuse proposez-vous ? (3 points)
5. Si le diagnostic de démence est confirmé, quel traitement pharmacologique instaurez-vous ? (3 points)
6. Quel suivi proposez-vous ? (3 points)`,

    corrigé: `1. DIAGNOSTICS (4 points) :
- Dépression majeure (GDS 14/15 = sévère) → pseudodémence possible
- Démence débutante (MMS 21/30, atrophie hippocampique, troubles mémoire 1 an)
- Iatrogénie (amitriptyline = anticholinergique → confusion, sécheresse, constipation)
- Hypotension orthostatique (PA -25/-15 mmHg) → fatigue, chutes
- Dénutrition (perte 6 kg, albumine 32)

Diagnostic principal: démence débutante (Alzheimer probable) sur terrain dépressif avec iatrogénie contributive.

2. EXAMENS COMPLÉMENTAIRES (3 points) :
- Bilan mémoire complet (MMS + MoCA + épreuves neuropsychologiques)
- Bilan dépression (GDS, entretien psychiatrique)
- Évaluation orthostatique complète
- Bilan nutritionnel (MNA complet)
- Échographie rénale (DFG 58)
- Pas de ponction lombaire (pas d'urgence)

3. MODIFICATIONS MÉDICAMENTEUSES (4 points) :
- Arrêt amitriptyline (anticholinergique = Beers, confusion, sécheresse) → ISRS (sertraline 25mg)
- Réduction alfuzosine (hypotension orthostatique)
- Maintien losartan (adapté)
- Maintien atorvastatine (prévention cardiovasculaire)
- Maintien metformine (surveiller DFG)
- Maintien aspirine (prévention cardiovasculaire)

4. PRISE EN CHARGE NON MÉDICAMENTEUSE (3 points) :
- Éducation thérapeutique (patient + femme)
- Rééducation cognitive (stimulation mémoire)
- Activité physique (marche 30 min/j)
- Nutrition enrichie (CNO si nécessaire)
- Correction orthostatique (lever progressivement)
- Soutien psychologique (patient + conjoint)
- Aide à domicile renforcée

5. TRAITEMENT PHARMACOLOGIQUE DÉMENCE (3 points) :
- Inhibiteur de cholinestérasique: donépezil 5mg/j pendant 1 mois → 10mg/j
- Si mal toléré: rivastigmine patch 4.6mg → 9.5mg
- Pas de mémantine (stade léger)
- Surveillance: bradycardie, troubles digestifs

6. SUIVI (3 points) :
- Réévaluation à 1 mois (MMS, GDS, tolérance traitement)
- Bilan biologique à 3 mois (DFG, glycémie)
- RDV neurologue à 6 mois
- Évaluation autonomie trimestrielle
- Préparation des directives anticipées
- Information sur les aides (APA, EHPAD si évolution)`,

    juryTips: 'Le jury attend que vous distinguiez pseudodémence (dépression) vs démence vraie. L\'iatrogénie par amitriptyline est le piège principal — c\'est un anticholinergique qui aggrave les troubles cognitifs. L\'hypotension orthostatique explique la fatigue et les chutes potentielles. Le traitement de la démence doit être discuté avec le patient et la conjointe.'
  },

  {
    id: 'evc-complet-4',
    annee: 2023,
    session: 'Automne',
    duree: '30 minutes (15 min préparation + 15 min oral)',
    bareme: '20 points total',
    consigne: 'Vous êtes médecin de garde en EHPAD. Ce résident est retrouvé agité à 2h du matin.',
    sujet: `M. GARCIA Henri, 82 ans, résident en EHPAD depuis 8 mois, est retrouvé agité à 2h du matin par l'aide-soignante de nuit.

ANTÉCÉDENTS :
- Démence à corps de Lewy (diagnostiquée il y a 2 ans)
- HTA traitée par amlodipine 5mg/j
- Diabète type 2 traité par metformine 500mg x2/j
- RGO traité par oméprazole 20mg/j
- BPH traitée par tamsulosine 0.4mg/j
- Antécédent de syndrome malin des neuroleptiques (sous halopéridol il y a 1 an)

TRAITEMENT ACTUEL :
- Amlodipine 5mg/j
- Metformine 500mg x2/j
- Oméprazole 20mg/j
- Tamsulosine 0.4mg/j
- Donépezil 10mg/j
- Mélatonine 2mg le soir
- Mirtazapine 15mg le soir

ÉVALUATION À L'ADMISSION EN EHPAD :
- MMS: 14/30
- GDS-15: 8/15
- ADL: 3/6
- IADL: 1/8
- MNA: 22/30
- Tinetti: 14/28

SITUATION ACTUELLE (2h du matin) :
Le résident est agité, crie, essaie de se lever, dit qu'il doit "aller travailler". Il ne reconnaît pas sa chambre. Il frappe l'aide-soignante quand elle essaie de le rassurer.

ÉVALUATION :
- T°: 37.8°C
- PA: 150/90 mmHg
- FC: 95 bpm
- FR: 20/min
- SpO2: 95% en air ambulant
- Glycémie capillaire: 1.8 g/L
- ECPA: 6/10 (douleur ?)
- Pas de globe vésical
- Pas de foyer infectieux évident

QUESTIONS :
1. Quel est le diagnostic et quels sont les critères diagnostiques ? (3 points)
2. Listez les causes possibles de cette agitation. (4 points)
3. Quelle est votre prise en charge immédiate ? (4 points)
4. Quels médicaments NE DEVEZ-VOUS PAS donner et pourquoi ? (3 points)
5. Quelle est la conduite à tenir à moyen terme ? (3 points)
6. Comment prévenir les récidives ? (3 points)`,

    corrigé: `1. DIAGNOSTIC (3 points) :
Confusion aiguë (delirium) sur démence à corps de Lewy.
Critères CAM: (1) Début aigu ✓ (2h vs habituel), (2) Inattention ✓, (3) Fluctuation ✓, (4) Niveau conscience altéré ✓.
Démence à corps de Lewy = terrain à risque de confusion + hypersensibilité neuroleptique.

2. CAUSES POSSIBLES (4 points) :
- Douleur (ECPA 6/10, mais difficile à évaluer en DLB)
- Infection (T° 37.8°C, mais fièvre modérée)
- Hypoglycémie (1.8 g/L = hypoglycémie relative chez diabétique)
- Iatrogénie (mirtazapine = sédation, tamsulosine = confusion)
- Environnement (nuit, désorientation, chambre inconnue)
- Constipation (fréquente sous donépezil)
- Rétention urinaire (BPH, mais globe non palpé)

3. PRISE EN CHARGE IMMÉDIATE (4 points) :
- Environnement: lumière douce, voix calme, présence rassurante
- Pas de contention
- Éviter la stimulation excessive
- Réorientation (horloge, calendrier, photos)
- Si douleur: paracétamol 1g PO
- Si hypoglycémie: sucre oral
- Si agitation sévère: quétiapine 12.5-25mg PO (PAS halopéridol)
- Surveillance: T°, glycémie, ECPA toutes les 2h

4. MÉDICAMENTS À NE PAS DONNER (3 points) :
- Halopéridol: CONTRE-INDIQUÉ en DLB (syndrome malin des neuroleptiques, ATCD)
- BZD (diazépam, lorazépam): confusion paradoxale, chutes
- Anticholinergiques: aggravation confusion
- Métopimazine: neuroleptique → même risque

5. CONDUITE À MOYEN TERME (3 points) :
- Bilan biologique au matin (NFS, CRP, iono, glycémie, créatinine, ECBU)
- Évaluation douleur approfondie au matin
- Révision médicamenteuse (mirtazapine, tamsulosine)
- Maintien donépezil (bénéfice en DLB)
- Si récidive agitation: quétiapine à dose minimale
- Communication avec la famille (explication de l'épisode)

6. PRÉVENTION RÉCIDIVES (3 points) :
- Maintenir un environnement stable (même chambre, même personnel)
- Lumière naturelle le jour, veilleuse la nuit
- Activités structurées la journée
- Éviter les changements brusques
- Révision médicamenteuse régulière
- Évaluation douleur systématique (ECPA 2x/j)
- Éducation de l'équipe (DLB = hypersensibilité neuroleptique)`,

    juryTips: 'Le piège principal est de donner de l\'halopéridol — CI absolue en DLB (ATCD syndrome malin). Le jury attend que vous connaissiez l\'hypersensibilité neuroleptique de la DLB et que vous proposiez la quétiapine comme alternative. La douleur est souvent sous-estimée chez les patients déments — toujours l\'évaluer (ECPA). L\'hypoglycémie relative (1.8 g/L chez un diabétique) peut déclencher une confusion.'
  },

  {
    id: 'evc-complet-5',
    annee: 2022,
    session: 'Printemps',
    duree: '30 minutes (15 min préparation + 15 min oral)',
    bareme: '20 points total',
    consigne: 'Vous êtes interne en gériatrie. Ce patient est hospitalisé pour dénutrition sévère.',
    sujet: `Mme PETIT Louise, 86 ans, hospitalisée pour dénutrition sévère.

MOTIF D'HOSPITALISATION :
Perte de poids progressive depuis 6 mois. Sa fille rapporte que sa mère ne mange presque plus, reste au lit, ne sort plus.

ANTÉCÉDENTS :
- Maladie d'Alzheimer stade GDS 6 (sévère)
- HTA traitée par ramipril 5mg/j
- Ostéoporose traitée par raloxifène 60mg/j
- FA permanente traitée par warfarine (INR cible 2-3)
- Dépression traitée par paroxétine 20mg/j
- Ex-fumeur (15 paquets-année)

TRAITEMENT ACTUEL :
- Ramipril 5mg/j
- Raloxifène 60mg/j
- Warfarine (dose variable, INR 2.5)
- Paroxétine 20mg/j
- Donépezil 10mg/j

CONTEXTE SOCIAL :
- Vit seule depuis le décès de son mari il y a 3 ans
- 1 fille (visite 2x/semaine)
- Aide à domicile 1h/j (toilette)
- Refuse la livraison de repas
- Ne sort plus de chez elle

ÉVALUATION :
- MMS: 8/30
- GDS-15: 14/15
- ADL: 2/6
- IADL: 0/8
- MNA: 9/30 (dénutrition sévère)
- Tinetti: 6/28
- Braden: 12/23 (risque élevé escarres)
- Douleur: ECPA 4/10
- Poids: 42 kg (IMC 16.2)
- Taille: 155 cm
- Albumine: 22 g/L
- Pré-albumine: 0.08 g/L
- Hb: 10.5 g/dL
- Vit D: 8 ng/mL
- Créatinine: 95 µmol/L (DFG 52)
- INR: 3.8

QUESTIONS :
1. Analysez la dénutrition de cette patiente (4 points)
2. Quels sont les risques immédiats ? (3 points)
3. Proposez un plan nutritionnel détaillé (4 points)
4. Quels médicaments modifiez-vous ? (3 points)
5. Comment gérez-vous l'INR à 3.8 ? (3 points)
6. Quel est le pronostic et quelle est votre attitude éthique ? (3 points)`,

    corrigé: `1. ANALYSE DÉNUTRITION (4 points) :
- MNA 9/30 = dénutrition sévère
- IMC 16.2 = dénutrition sévère (< 18.5)
- Albumine 22 g/L = dénutrition sévère (< 35)
- Perte 6 kg en 6 mois (~14% du poids)
- Causes: Alzheimer (oublie de manger), isolement social, dépression, dysphagie probable, perte d'autonomie

2. RISQUES IMMÉDIATS (3 points) :
- Escarres (Braden 12, albumine 22)
- Infection (immunodépression)
- Chutes (Tinetti 6, faiblesse musculaire)
- Troubles de la coagulation (INR 3.8)
- Insuffisance rénale (DFG 52, déshydratation)
- Thrombose (FA + alitement)

3. PLAN NUTRITIONNEL (4 points) :
- Enrichissement alimentaire (crème, beurre, fromage)
- CNO x3/j (Delical 2kcal, 200mL)
- Fractionnement 6 repas/j
- Protéines 1.5g/kg/j (63g/j)
- Vit D 100 000UI en bolus puis 1000UI/j
- Calcium 1g/j
- Si échec 1 semaine: nutrition entérale par SNG
- Aide à l'alimentation (aide-soignante)
- Surveillance: poids 2x/sem, albumine J15

4. MODIFICATIONS MÉDICAMENTEUSES (3 points) :
- Arrêt raloxifène (risque thromboembolique + INR élevé)
- Réduction warfarine (INR 3.8 = surdosage)
- Maintien paroxétine (dépression)
- Maintien donépezil (Alzheimer sévère = bénéfice limité mais pas d'alternative)
- Maintien ramipril (HTA)
- Ajouter: Vit D + calcium

5. GESTION INR 3.8 (3 points) :
- Arrêt warfarine 1-2 jours
- Si INR > 5: vitamine K1 1-2mg PO
- Réévaluation INR dans 48h
- Reprendre warfarine à dose réduite
- Rechercher cause (déshydratation, interaction médicamenteuse)
- Surveillance INR 2x/sem pendant 2 semaines

6. PRONOSTIC ET ÉTHIQUE (3 points) :
- Pronostic réservé: Alzheimer sévère + dénutrition sévère + isolement
- Discussion avec la famille: objectif de soins (maintien qualité de vie)
- Pas de nutrition artificielle si Alzheimer avancé (discuter avec famille)
- Soins palliatifs si détérioration rapide
- Directives anticipées ? Personne de confiance ?
- Accompagnement de la fille (préparation du deuil)`,

    juryTips: 'Le jury attend une analyse complète de la dénutrition (causes, conséquences, plan nutritionnel). L\'INR à 3.8 est un piège — il faut l\'expliquer (déshydratation ? interaction ?) et le gérer. L\'attitude éthique est cruciale — ne pas proposer de nutrition artificielle sans discussion avec la famille en Alzheimer sévère. Le pronostic est sombre mais le maintien de la qualité de vie est l\'objectif principal.'
  }
];
