// ═══════════════════════════════════════════════════════════════
//  Pharmacologie gériatrique — Référence complète par classes
//  Profils médicamenteux adaptés au sujet âgé
// ═══════════════════════════════════════════════════════════════

const PHARMO_COMPLETE = [
  {
    id: 'pc-1',
    classe: 'antalgiques',
    medicaments: [
      {
        nom: 'Paracétamol',
        dose_adaptee_sujet_age: '500 mg–1 g x3–4/j (max 3 g/j si < 50 kg, insuffisance hépatique ou alcoolisme ; max 4 g/j sinon)',
        voie: 'PO, IV, rectal',
        effets_secondaires: 'Hépatotoxicité en surdosage ; rares réactions cutanées sévères (Stevens-Johnson)',
        interactions: 'Warfarine (↑ INR si usage prolongé > 2 g/j) ; association codéine/paracétamol = risque surdosage paracétamol',
        surveillance: 'Bilan hépatique si traitement prolongé à doses élevées ; vérifier toutes les sources de paracétamol (associations)'
      },
      {
        nom: 'Tramadol',
        dose_adaptee_sujet_age: '25–50 mg x2/j PO (max 200 mg/j) ; éviter si > 75 ans ou DFG < 30',
        voie: 'PO, IV',
        effets_secondaires: 'Confusion, chutes, constipation, nausées, saisies (dose-dépendant), syndrome sérotoninergique',
        interactions: 'ISRS/IRSNA, tramadol, IMAO (CI), warfarine (↑ INR), inhibiteurs CYP2D6',
        surveillance: 'Conscience, fréquence respiratoire, transit ; éviter association ISRS sans nécessité absolue'
      },
      {
        nom: 'Morphine',
        dose_adaptee_sujet_age: '2,5–5 mg PO ou 1–2 mg SC/IV q4h ; titration lente (start low, go slow)',
        voie: 'PO, SC, IV, transdermique (fentanyl préférable si IRC)',
        effets_secondaires: 'Sédation, dépression respiratoire, constipation, rétention urinaire, confusion, chutes',
        interactions: 'BZD, anticholinergiques, alcool (synergie sédation/respiration) ; morphine déconseillée si DFG < 30 (M6G)',
        surveillance: 'Échelle douleur, conscience, SpO2, transit (laxatif prophylactique), dépendance'
      },
      {
        nom: 'Gabapentine',
        dose_adaptee_sujet_age: '100–300 mg le soir puis 300 mg x2–3/j (max 900–1200 mg/j) ; adapter DFG',
        voie: 'PO',
        effets_secondaires: 'Somnolence, vertiges, œdèmes, ataxie, chutes',
        interactions: 'Morphiniques (synergie sédation) ; pas d’interaction majeure CYP',
        surveillance: 'Équilibre, somnolence ; DFG pour posologie (DFG < 30 : espacer les prises)'
      }
    ],
    indications_geriatriques: 'Douleur nociceptive légère à modérée (paracétamol 1ère ligne) ; douleur neuropathique (gabapentine, prégabaline) ; douleur modérée à sévère (opioïdes faibles puis forts) ; arthrose, fractures, cancer, névralgies',
    contre_indications: 'Opioïdes : insuffisance respiratoire non ventilée, iléus ; tramadol : épilepsie non contrôlée, IMAO ; paracétamol : hépatite active sévère',
    alternatives: 'AINS topiques (diclofénac, kétoprofène) en local ; prégabaline ; oxycodone/fentanyl si IRC ; kinésithérapie, TENS, massage'
  },
  {
    id: 'pc-2',
    classe: 'antihypertenseurs',
    medicaments: [
      {
        nom: 'Amlodipine',
        dose_adaptee_sujet_age: '2,5–5 mg/j (début 2,5 mg) ; max 10 mg/j',
        voie: 'PO',
        effets_secondaires: 'Œdèmes des membres inférieurs, hypotension orthostatique, flushing, gingivite',
        interactions: 'Simvastatine (limiter 20 mg/j), inhibiteurs CYP3A4 (↑ amlodipine)',
        surveillance: 'PA couchée/debout, œdèmes, pouls ; objectif PA < 140/90 mmHg (souvent 130–140/80 chez PA fragile)'
      },
      {
        nom: 'Ramipril',
        dose_adaptee_sujet_age: '2,5 mg/j puis 5 mg/j (max 10 mg/j) ; début très progressif',
        voie: 'PO',
        effets_secondaires: 'Toux sèche, hypotension, hyperkaliémie, insuffisance rénale aiguë, angio-œdème',
        interactions: 'Diurétiques épargneurs K+, AINS, lithium (↑ lithium), aliskiren (CI si diabète)',
        surveillance: 'Créatinine, K+, PA ; éviter déshydratation ; arrêt temporaire si diarrhée/vomissements'
      },
      {
        nom: 'Bisoprolol',
        dose_adaptee_sujet_age: '1,25–2,5 mg/j (max 10 mg/j) ; titration lente',
        voie: 'PO',
        effets_secondaires: 'Bradycardie, hypotension, fatigue, bronchospasme (BPCO), masquage hypoglycémie',
        interactions: 'Vérapamil/diltiazem (bradycardie), digoxine, insuline/sulfamides',
        surveillance: 'FC, PA, glycémie si diabétique ; ne pas arrêter brutalement'
      },
      {
        nom: 'Hydrochlorothiazide',
        dose_adaptee_sujet_age: '12,5 mg/j (max 25 mg/j) ; souvent en association',
        voie: 'PO',
        effets_secondaires: 'Hypotension orthostatique, hyponatrémie, hypokaliémie, hyperuricémie, dyslipidémie',
        interactions: 'Lithium (↑ toxicité), digoxine (hypokaliémie), AINS (↓ effet antihypertenseur)',
        surveillance: 'Na+, K+, urée/créatinine, acide urique, PA debout'
      }
    ],
    indications_geriatriques: 'HTA essentielle, HTA systolique isolée, insuffisance cardiaque (IEC/ARA2, bêta-bloquant), post-IDM, protection rénale diabète',
    contre_indications: 'IEC/ARA2 : sténose artère rénale bilatérale, grossesse ; bêta-bloquant : asthme sévère, BAV2–3 ; thiazidique : goutte sévère, anurie',
    alternatives: 'Association fixe faible dose ; inhibiteur calcique non-DHP (vérapamil prudent) ; central alpha (réservé) ; mesures hygiéno-diététiques'
  },
  {
    id: 'pc-3',
    classe: 'antidiabétiques',
    medicaments: [
      {
        nom: 'Metformine',
        dose_adaptee_sujet_age: '500 mg x1–2/j avec repas (max 1000–1500 mg/j) ; DFG 30–45 : max 1000 mg/j',
        voie: 'PO',
        effets_secondaires: 'Troubles digestifs, acidose lactique (rare, grave), carence B12 à long terme',
        interactions: 'Iodés IV (arrêt 48 h), alcool, cimétidine (↑ metformine)',
        surveillance: 'DFG (CI si < 30), HbA1c cible 7–8 % souvent chez PA ; B12 si traitement > 4 ans'
      },
      {
        nom: 'Gliclazide',
        dose_adaptee_sujet_age: '30 mg/j LP (max 60–90 mg/j) ; début 30 mg',
        voie: 'PO',
        effets_secondaires: 'Hypoglycémie (risque majeur PA : confusion, chutes), prise de poids',
        interactions: 'AINS, fluconazole, bêta-bloquants (masquent signes hypo), alcool',
        surveillance: 'Glycémie capillaire, HbA1c ; éducation entourage sur signes hypo'
      },
      {
        nom: 'Sitagliptine',
        dose_adaptee_sujet_age: '50 mg/j si DFG 30–50 ; 25 mg/j si DFG < 30',
        voie: 'PO',
        effets_secondaires: 'Peu d’hypoglycémie seule ; pancréatite rare ; arthralgies',
        interactions: 'Digoxine (↑ légère digoxine) ; peu d’interactions CYP',
        surveillance: 'DFG pour adaptation ; HbA1c ; signes digestifs aigus (pancréatite)'
      },
      {
        nom: 'Insuline glargine',
        dose_adaptee_sujet_age: '0,1–0,2 UI/kg/j en une injection ; titration +1–2 UI/3 j selon glycémie',
        voie: 'SC',
        effets_secondaires: 'Hypoglycémie, prise de poids, lipodystrophie injection',
        interactions: 'Bêta-bloquants, fluoroquinolones, corticoïdes (↑ glycémie)',
        surveillance: 'HbA1c, glycémies, poids ; schéma simplifié privilégié (1–2 injections/j)'
      }
    ],
    indications_geriatriques: 'Diabète type 2 ; cibles glycémiques assouplies (HbA1c 7–8 %, éviter hypo) ; diabète type 1 ou DT2 déséquilibré',
    contre_indications: 'Metformine : DFG < 30, acidose, décompensation hépatique ; sulfamides : CI relative si hypo récurrente',
    alternatives: 'iDPP4, iSGLT2 (prudence déshydratation/IRC), GLP-1 RA si obésité ; régime, activité physique adaptée'
  },
  {
    id: 'pc-4',
    classe: 'anticoagulants',
    medicaments: [
      {
        nom: 'Apixaban',
        dose_adaptee_sujet_age: '5 mg x2/j ; 2,5 mg x2/j si ≥ 2 critères : âge ≥ 80 ans, poids ≤ 60 kg, créatinine ≥ 133 µmol/L',
        voie: 'PO',
        effets_secondaires: 'Saignements majeurs/minors, anémie ; pas de surveillance INR',
        interactions: 'Inhibiteurs P-gp/3A4 forts (kétoconazole, ritonavir) ; inducteurs (rifampicine)',
        surveillance: 'Hb, signes hémorragie ; fonction rénale ; respect des contre-indications hémorragiques'
      },
      {
        nom: 'Rivaroxaban',
        dose_adaptee_sujet_age: 'FA : 15 mg/j si DFG 30–49, 20 mg/j si DFG ≥ 50 ; TVP/EP : 15 mg x2/j 21 j puis 20 mg/j',
        voie: 'PO',
        effets_secondaires: 'Saignements digestifs, hématurie, hématomes',
        interactions: 'Inhibiteurs CYP3A4/P-gp, AINS (↑ saignement)',
        surveillance: 'DFG pour dose FA ; éviter si valve mécanique mitrale'
      },
      {
        nom: 'Warfarine',
        dose_adaptee_sujet_age: 'Dose individualisée (souvent 2–5 mg/j) ; INR cible 2–3 (FA, TVP) ; début 5 mg puis ajustement',
        voie: 'PO',
        effets_secondaires: 'Saignements, nécrose cutanée rare, calcifications artérielles à long terme',
        interactions: 'Nombreuses (antibiotiques, amiodarone, paracétamol, vitamine K alimentaire)',
        surveillance: 'INR régulier ; éducation alimentaire ; antidote : vitamine K, PPSB si urgence'
      },
      {
        nom: 'Héparine sodique',
        dose_adaptee_sujet_age: '5000 UI SC x2–3/j prophylaxie ; curatif : 80 UI/kg bolus puis perfusion ajustée anti-Xa',
        voie: 'SC, IV',
        effets_secondaires: 'Hémorragie, thrombopénie HIT, ostéoporose prolongée',
        interactions: 'AINS, antiplaquettaires (↑ saignement)',
        surveillance: 'Plaquettes (HIT), anti-Xa si curatif ; CI si thrombopénie < 100 G/L récente'
      }
    ],
    indications_geriatriques: 'FA non valvulaire (AVK ou AOD), TVP/EP, prothylaxie thromboembolique hospitalisation, valve mécanique (AVK seul)',
    contre_indications: 'Saignement actif majeur, HIT, grossesse (AOD) ; AOD : valve mitrale mécanique, sténose mitrale sévère rhumatismale',
    alternatives: 'Énoxaparine (ajustement poids/DFG) ; dabigatran (ajustement âge/DFG) ; filtre cave si CI anticoagulant'
  },
  {
    id: 'pc-5',
    classe: 'antiagrégants',
    medicaments: [
      {
        nom: 'Acide acétylsalicylique',
        dose_adaptee_sujet_age: '75–100 mg/j (prévention CV) ; éviter doses anti-inflammatoires sauf indication courte',
        voie: 'PO',
        effets_secondaires: 'Hémorragie digestive, ulcère, asthme ASA, acouphènes (doses élevées)',
        interactions: 'Warfarine, AINS, SSRI (↑ saignement GI), méthotrexate',
        surveillance: 'Signes digestifs, Hb si long cours ; protection gastrique si haut risque GI'
      },
      {
        nom: 'Clopidogrel',
        dose_adaptee_sujet_age: '75 mg/j ; charge 300 mg si SCA (selon protocole)',
        voie: 'PO',
        effets_secondaires: 'Saignements, thrombopénie rare, diarrhée',
        interactions: 'Oméprazole (controverse ↓ effet), warfarine, AINS',
        surveillance: 'Saignements ; réponse variable (génotype CYP2C19) ; pas de test routinier'
      },
      {
        nom: 'Prasugrel',
        dose_adaptee_sujet_age: '5 mg/j si ≥ 75 ans ou poids < 60 kg ; 10 mg/j sinon (éviter si ≥ 75 ans sauf haut risque)',
        voie: 'PO',
        effets_secondaires: 'Saignements majeurs ++ chez PA et faible poids',
        interactions: 'Anticoagulants, AINS',
        surveillance: 'Réservé SCA interventionnel ; contre-indiqué si AVC/AIT antérieur'
      }
    ],
    indications_geriatriques: 'Prévention secondaire SCA, AVC athéromateux, artériopathie ; association ASA + clopidogrel courte durée post-SCA/stent',
    contre_indications: 'Saignement actif, ulcère gastroduodénal évolutif ; prasugrel : ≥ 75 ans, antécédent AIT/AVC',
    alternatives: 'Ticagrelor (dyspnée) ; dipyridamole + ASA (AVC) ; statines, contrôle FRCV'
  },
  {
    id: 'pc-6',
    classe: 'antidépresseurs',
    medicaments: [
      {
        nom: 'Sertraline',
        dose_adaptee_sujet_age: '25 mg/j 1 semaine puis 50 mg/j (max 100–150 mg/j)',
        voie: 'PO',
        effets_secondaires: 'Nausées, insomnie, syndrome sérotoninergique, hyponatrémie (SIADH), saignements',
        interactions: 'Tramadol, IMAO (CI), warfarine, inhibiteurs CYP2D6',
        surveillance: 'Humeur, idées suicidaires début traitement, Na+ si confusion ; délai efficacité 4–6 semaines'
      },
      {
        nom: 'Mirtazapine',
        dose_adaptee_sujet_age: '15 mg le soir (max 30–45 mg) ; effet sédatif maximal à 15 mg',
        voie: 'PO',
        effets_secondaires: 'Somnolence, prise de poids, hyperlipidémie, agranulocytose rare',
        interactions: 'IMAO (CI), tramadol, benzodiazépines (sédation)',
        surveillance: 'Poids, appétit (intérêt cachexie/dépression PA) ; NFS si fièvre'
      },
      {
        nom: 'Escitalopram',
        dose_adaptee_sujet_age: '5 mg/j puis 10 mg/j (max 10–20 mg/j chez PA)',
        voie: 'PO',
        effets_secondaires: 'QT allongé à forte dose, hyponatrémie, agitation initiale',
        interactions: 'Médicaments allongeant QT, tramadol, oméprazole (↑ escitalopram)',
        surveillance: 'ECG si cardiopathie ou association QT ; Na+'
      },
      {
        nom: 'Venlafaxine',
        dose_adaptee_sujet_age: '37,5 mg/j puis 75 mg/j LP (max 150 mg/j) ; prudence HTA',
        voie: 'PO',
        effets_secondaires: 'HTA dose-dépendante, syndrome sérotoninergique, sevrage brutal (vertiges)',
        interactions: 'IMAO, tramadol, inhibiteurs CYP2D6',
        surveillance: 'PA, sevrage progressif ; éviter si insuffisance cardiaque sévère'
      }
    ],
    indications_geriatriques: 'Épisode dépressif majeur, troubles anxio-dépressifs, douleur neuropathique (doses antidépresseurs)',
    contre_indications: 'IMAO < 14 j ; association IMAO-ISRS ; CI relative : glaucome angle fermé, hyponatrémie sévère',
    alternatives: 'TCC, activation comportementale, IPT ; duloxétine (douleur) ; trazodone faible dose (sommeil)'
  },
  {
    id: 'pc-7',
    classe: 'antipsychotiques',
    medicaments: [
      {
        nom: 'Halopéridol',
        dose_adaptee_sujet_age: '0,5–1 mg PO/IM/IV ; max 2–3 mg/j ; courte durée (delirium agité)',
        voie: 'PO, IM, IV',
        effets_secondaires: 'Extrapyramidal, QT long, syndrome malin, hyperprolactinémie ; moindre sédation que atypiques',
        interactions: 'Médicaments QT, anticholinergiques, lithium',
        surveillance: 'ECG, signes EPS ; CI corps de Lewy (neuroleptiques hypersensibilité)'
      },
      {
        nom: 'Quétiapine',
        dose_adaptee_sujet_age: '12,5–25 mg le soir (agitation démence) ; max 50–100 mg/j ; titration lente',
        voie: 'PO',
        effets_secondaires: 'Sédation, hypotension orthostatique, syndrome métabolique, confusion',
        interactions: 'CYP3A4 inhibiteurs/inducteurs, QT',
        surveillance: 'PA debout, glycémie, poids ; signal FDA : mortalité ↑ démence (usage limité)'
      },
      {
        nom: 'Rispéridone',
        dose_adaptee_sujet_age: '0,25–0,5 mg x2/j (max 1 mg/j en démence)',
        voie: 'PO',
        effets_secondaires: 'AVC ↑ chez PA déments, EPS, hyperprolactinémie, sédation',
        interactions: 'Carbamazépine (↓ rispéridone), fluoxétine (↑)',
        surveillance: 'Signes neurologiques, PA ; durée minimale, indication documentée'
      }
    ],
    indications_geriatriques: 'Agitation sévère à risque (soi/autrui) après échec non pharmacologique ; psychose ; delirium hyperactif (halopéridol faible dose)',
    contre_indications: 'Corps de Lewy (tous neuroleptiques) ; démence : pas en 1ère intention ; Parkinson : éviter antipsychotiques classiques',
    alternatives: 'Mesures comportementales, correction causes (douleur, infection) ; trazodone ; valproate (bipolarité)'
  },
  {
    id: 'pc-8',
    classe: 'anxiolytiques',
    medicaments: [
      {
        nom: 'Lorazépam',
        dose_adaptee_sujet_age: '0,5 mg x1–2/j (max 1–2 mg/j) ; durée < 4 semaines',
        voie: 'PO, SL, IV',
        effets_secondaires: 'Sédation, chutes, confusion, amnésie, dépendance, syndrome de sevrage',
        interactions: 'Opioïdes (dépression respiratoire), alcool, autres sédatifs',
        surveillance: 'Risque chutes, cognition ; éviter au long cours ; sevrage progressif'
      },
      {
        nom: 'Oxazépam',
        dose_adaptee_sujet_age: '10–15 mg x2–3/j (max 30–45 mg/j) ; demi-vie longue = accumulation',
        voie: 'PO',
        effets_secondaires: 'Sédation diurne, chutes, troubles équilibre, dépendance',
        interactions: 'CNS dépresseurs, cimétidine',
        surveillance: 'Fonction cognitive, chutes ; listes médicaments à éviter (Beers)'
      },
      {
        nom: 'Hydroxyzine',
        dose_adaptee_sujet_age: '25 mg x1–2/j le soir (max 50–100 mg/j)',
        voie: 'PO',
        effets_secondaires: 'Anticholinergique : confusion, rétention urinaire, constipation, sédation',
        interactions: 'Anticholinergiques cumulés, QT',
        surveillance: 'Préférer à BZD pour anxiété courte ; vigilance anticholinergique'
      }
    ],
    indications_geriatriques: 'Anxiété aiguë, insomnie ponctuelle ; éviter traitement chronique ; sevrage alcool (benzodiazépines longues)',
    contre_indications: 'Myasthénie, SAOS sévère non traité, glaucome angle fermé ; BZD : insuffisance respiratoire avec opioïdes',
    alternatives: 'TCC, relaxation ; mirtazapine/trazodone pour anxiété-sommeil ; SSRI pour trouble anxieux généralisé'
  },
  {
    id: 'pc-9',
    classe: 'antibiotiques',
    medicaments: [
      {
        nom: 'Amoxicilline-clavulanate',
        dose_adaptee_sujet_age: '500/62,5 mg x3/j ou 1 g x2/j ; IV 1 g x3/j si sévère ; adapter DFG',
        voie: 'PO, IV',
        effets_secondaires: 'Diarrhée, C. difficile, rash, hépatite cholestatique',
        interactions: 'Warfarine (↑ INR), méthotrexate',
        surveillance: 'Tolérance digestive ; durée minimale efficace ; ECBU si ITU'
      },
      {
        nom: 'Ceftriaxone',
        dose_adaptee_sujet_age: '1–2 g/j IV/IM (pneumonie, ITU compliquée, méningite)',
        voie: 'IV, IM',
        effets_secondaires: 'Lithiase biliaire, diarrhée, rash ; pas d’ajustement rénal habituel',
        interactions: 'Calcium IV (précipitat) ; warfarine',
        surveillance: 'Fonction hépatique si long cours ; cultures avant si possible'
      },
      {
        nom: 'Nitrofurantoïne',
        dose_adaptee_sujet_age: '50 mg x2/j ou 100 mg LP x1/j (cystite simple) ; max 5–7 j',
        voie: 'PO',
        effets_secondaires: 'Troubles digestifs, pneumopathie fibrosante rare, neuropathie',
        interactions: 'Probenécide (↓ effet urinaire)',
        surveillance: 'DFG > 30 recommandé ; éviter si insuffisance rénale sévère'
      },
      {
        nom: 'Ciprofloxacine',
        dose_adaptee_sujet_age: '250–500 mg x2/j ; réserver multirésistance ; adapter DFG',
        voie: 'PO, IV',
        effets_secondaires: 'Tendinopathie/rupture, QT, confusion, C. difficile, hypoglycémie',
        interactions: 'Warfarine, théophylline, antiacides, AOD',
        surveillance: 'Éviter si alternative possible chez PA ; tendons, glycémie'
      }
    ],
    indications_geriatriques: 'Pneumonie communautaire, ITU symptomatique, cellulite, prophylaxie endocardite ; pas de traitement colonisation asymptomatique',
    contre_indications: 'Allergie bêta-lactamine (selon gravité) ; fluoroquinolones : myasthénie, anévrisme aorte',
    alternatives: 'Amoxicilline seule ; fosfomycine (cystite) ; triméthoprime si sensible localement'
  },
  {
    id: 'pc-10',
    classe: 'diurétiques',
    medicaments: [
      {
        nom: 'Furosémide',
        dose_adaptee_sujet_age: '20–40 mg/j PO/IV (début 20 mg) ; max selon réponse',
        voie: 'PO, IV',
        effets_secondaires: 'Déshydratation, hypotension orthostatique, hypokaliémie, hyponatrémie, IRC fonctionnelle',
        interactions: 'AINS, digoxine (hypokaliémie), lithium, AOD',
        surveillance: 'Poids quotidien, PA, ionogramme H48 puis régulier, DFG'
      },
      {
        nom: 'Spironolactone',
        dose_adaptee_sujet_age: '12,5–25 mg/j (IC, HTA résistante) ; max 50 mg/j',
        voie: 'PO',
        effets_secondaires: 'Hyperkaliémie, gynécomastie, troubles digestifs',
        interactions: 'IEC/ARA2, AINS, trimethoprime (↑ K+)',
        surveillance: 'K+, créatinine ; éviter si K+ > 5 mmol/L'
      },
      {
        nom: 'Indapamide',
        dose_adaptee_sujet_age: '1,25 mg/j (max 2,5 mg/j)',
        voie: 'PO',
        effets_secondaires: 'Hypokaliémie moindre que furosémide, hypotension, hyponatrémie',
        interactions: 'Lithium, digoxine',
        surveillance: 'Na+, K+, PA ; intérêt HTA systolique PA'
      }
    ],
    indications_geriatriques: 'Insuffisance cardiaque, œdèmes, HTA (thiazide-like), cirrhose ascite (spironolactone)',
    contre_indications: 'Anurie, hypovolémie sévère, hypokaliémie non corrigée (spironolactone si hyperK)',
    alternatives: 'Restriction sodée, restriction hydrique si hyponatrémie ; association faible dose IEC + diurétique'
  },
  {
    id: 'pc-11',
    classe: 'corticoïdes',
    medicaments: [
      {
        nom: 'Prednisone',
        dose_adaptee_sujet_age: '5–40 mg/j selon indication ; corticoïde équivalent minimal efficace ; sevrage progressif',
        voie: 'PO',
        effets_secondaires: 'Hyperglycémie, ostéoporose, myopathie, confusion, immunosuppression, cataracte',
        interactions: 'AINS (↑ ulcère), anticoagulants, antidiabétiques (ajuster)',
        surveillance: 'Glycémie, PA, densité osseuse si long cours ; supplémentation Ca/Vit D ± bisphosphonate'
      },
      {
        nom: 'Hydrocortisone',
        dose_adaptee_sujet_age: 'Insuffisance surrénalienne : 15–25 mg/j répartis ; stress : double dose',
        voie: 'PO, IV',
        effets_secondaires: 'Identiques si dose anti-inflammatoire ; œdèmes, HTA',
        interactions: 'Inducteurs enzymatiques, antifongiques azolés',
        surveillance: 'Signes insuffisance surrénalienne si sevrage brutal'
      },
      {
        nom: 'Dexaméthasone',
        dose_adaptee_sujet_age: '4–8 mg/j (œdème cérébral, antiémèse) ; courte durée si possible',
        voie: 'PO, IV',
        effets_secondaires: 'Psychose stéroïdienne, hyperglycémie, immunosuppression',
        interactions: 'CYP3A4, vaccins vivants',
        surveillance: 'Glycémie, état mental ; conversion équivalence prednisone x6,25'
      }
    ],
    indications_geriatriques: 'BPCO exacerbation, asthme, vascularites, polymyalgie rhumatismale, insuffisance surrénalienne, antiémèse chimiothérapie',
    contre_indications: 'Infection non contrôlée sans antibiothérapie ; vaccins vivants atténués',
    alternatives: 'Inhalés pour BPCO/asthme ; méthotrexate (corticodépendance) ; physiopathologie causale'
  },
  {
    id: 'pc-12',
    classe: 'antiépileptiques',
    medicaments: [
      {
        nom: 'Lévétiracétam',
        dose_adaptee_sujet_age: '250 mg x2/j puis 500 mg x2/j (max 1500 mg x2/j) ; adapter DFG',
        voie: 'PO, IV',
        effets_secondaires: 'Irritabilité, somnolence, vertiges ; peu d’interactions',
        interactions: 'Minimal (pas induction CYP)',
        surveillance: 'Comportement (surtout démence), DFG ; 1er choix souvent chez PA polymédiqué'
      },
      {
        nom: 'Lamotrigine',
        dose_adaptee_sujet_age: '25 mg/j puis titration lente sur 6–8 semaines (max 200–300 mg/j)',
        voie: 'PO',
        effets_secondaires: 'Rash (Stevens-Johnson si titration rapide), vertiges, insomnia',
        interactions: 'Valproate (↑ lamotrigine), carbamazépine (↓)',
        surveillance: 'Titration stricte ; arrêt si rash étendu'
      },
      {
        nom: 'Carbamazépine',
        dose_adaptee_sujet_age: '100 mg x2/j puis 200 mg x2–3/j ; surveillance Na+',
        voie: 'PO',
        effets_secondaires: 'Hyponatrémie, vertiges, ataxie, induction enzymatique, rash',
        interactions: 'Nombreuses (warfarine, corticoïdes, AOD, antidépresseurs)',
        surveillance: 'Na+, NFS ; éviter si bloc AV ; bilan osseux (inducteur)'
      },
      {
        nom: 'Valproate',
        dose_adaptee_sujet_age: '250 mg x2/j puis 500–1000 mg/j (ajuster selon crise)',
        voie: 'PO, IV',
        effets_secondaires: 'Tremblements, prise de poids, thrombopénie, hyperammonémie, ostéoporose',
        interactions: 'Lamotrigine, carbamazépine, AOD',
        surveillance: 'Plaquettes, ammoniaque si confusion ; CI grossesse (tératogène)'
      }
    ],
    indications_geriatriques: 'Épilepsie début tardif, crises focales, statut épileptique (lévétiracétam IV) ; douleur neuropathique (carbamazépine)',
    contre_indications: 'Valproate : grossesse, maladie mitochondriale ; carbamazépine : aplasie médullaire, bloc cardiaque',
    alternatives: 'Gabapentine (douleur plus qu’épilepsie) ; oxcarbazépine ; topiramate (perte poids)'
  },
  {
    id: 'pc-13',
    classe: 'bronchodilatateurs',
    medicaments: [
      {
        nom: 'Salbutamol',
        dose_adaptee_sujet_age: '100–200 µg inhalé x2–4 prises/j ; nébulisation 2,5 mg si crise',
        voie: 'Inhalation, nébulisation',
        effets_secondaires: 'Tremblements, tachycardie, hypokaliémie, agitation',
        interactions: 'Bêta-bloquants non sélectifs (antagonisme)',
        surveillance: 'FC, K+ si surdosage ; technique inhalation ; spacer recommandé'
      },
      {
        nom: 'Tiotropium',
        dose_adaptee_sujet_age: '18 µg/j inhalé (HandiHaler) ou 2,5 µg x2/j (Respimat)',
        voie: 'Inhalation',
        effets_secondaires: 'Sécheresse buccale, rétention urinaire (anticholinergique), glaucome angle fermé',
        interactions: 'Autres anticholinergiques (cumul)',
        surveillance: 'Rétention urinaire, vision ; intérêt BPCO PA (moins tremblements que bêta-2)'
      },
      {
        nom: 'Budésonide-formotérol',
        dose_adaptee_sujet_age: '1–2 inhalations 200/6 µg x2/j ; schéma fixe BPCO modéré-sévère',
        voie: 'Inhalation',
        effets_secondaires: 'Candidose buccale, dysphonie, contusion cutanée (corticoïde inhalé)',
        interactions: 'Inhibiteurs CYP3A4 (↑ corticoïde systémique)',
        surveillance: 'Rinçage bouche après ; pneumonie inhalation corticoïde chez BPCO'
      }
    ],
    indications_geriatriques: 'BPCO, asthme senior ; réhabilitation respiratoire associée',
    contre_indications: 'Tachycardie non contrôlée (bêta-2) ; glaucome angle fermé, HBP sévère (anticholinergique)',
    alternatives: 'Réhabilitation pulmonaire, vaccins ; oxygénothérapie long terme si indication ; roflumilast (BPCO sévère)'
  },
  {
    id: 'pc-14',
    classe: 'inhibiteurs cholinestérasiques',
    medicaments: [
      {
        nom: 'Donépézil',
        dose_adaptee_sujet_age: '5 mg/j 4 semaines puis 10 mg/j ; max 10 mg/j',
        voie: 'PO',
        effets_secondaires: 'Nausées, diarrhée, bradycardie, syncope, troubles du sommeil, cramps',
        interactions: 'Anticholinergiques (antagonisme), bêta-bloquants (bradycardie), succinylcholine',
        surveillance: 'Poids, FC ; effet modeste symptomatique ; arrêt si intolérance ou absence bénéfice perçu'
      },
      {
        nom: 'Rivastigmine',
        dose_adaptee_sujet_age: 'Patch 4,6 mg/24 h puis 9,5 mg/24 h ; oral 1,5 mg x2/j titration',
        voie: 'Transdermique, PO',
        effets_secondaires: 'Nausées (moins en patch), erythème application, bradycardie',
        interactions: 'Anticholinergiques, autres parasympathomimétiques',
        surveillance: 'Tolérance cutanée ; rotation site patch'
      },
      {
        nom: 'Galantamine',
        dose_adaptee_sujet_age: '8 mg/j puis 16–24 mg/j en 2 prises',
        voie: 'PO',
        effets_secondaires: 'Digestif, bradycardie, syncope, perte poids',
        interactions: 'Anticholinergiques, amiodarone (bradycardie)',
        surveillance: 'Identique donépézil ; adapter si IRC légère'
      },
      {
        nom: 'Mémantine',
        dose_adaptee_sujet_age: '5 mg/j titration sur 4 semaines jusqu’à 20 mg/j (ou 10 mg x2) ; adapter IRC',
        voie: 'PO',
        effets_secondaires: 'Confusion, hallucinations, céphalées, constipation',
        interactions: 'Amantadine, kétamine, autres NMDA ; uriné alkalinisée ↓ élimination',
        surveillance: 'Stade modéré-sévère ; association possible avec IChE ; DFG pour dose'
      }
    ],
    indications_geriatriques: 'Maladie d’Alzheimer légère à modérée (IChE) ; modéré à sévère (mémantine) ; démence à corps de Lewy (rivastigmine)',
    contre_indications: 'Bradycardie sévère, BAV2–3, asthme sévère (IChE) ; hypersensibilité',
    alternatives: 'Stimulation cognitive, activité physique, gestion comportementale ; pas de traitement curatif'
  },
  {
    id: 'pc-15',
    classe: 'laxatifs',
    medicaments: [
      {
        nom: 'Macrogol 4000',
        dose_adaptee_sujet_age: '1–2 sachets/j (10–20 g) dans eau ; ajustement selon selles',
        voie: 'PO',
        effets_secondaires: 'Ballonnements, diarrhée si surdosage ; bien toléré PA',
        interactions: 'Peu d’interactions ; espacer autres médicaments si diarrhée',
        surveillance: 'Fréquence/consistance selles ; hydratation ; 1ère intention constipation chronique'
      },
      {
        nom: 'Lactulose',
        dose_adaptee_sujet_age: '10–20 ml x1–2/j ; titration jusqu’à 2–3 selles molles/j',
        voie: 'PO',
        effets_secondaires: 'Ballonnements, crampes, hypernatrémie si déshydratation',
        interactions: 'Antiacides, néomycine (↓ effet)',
        surveillance: 'Hydratation ; encéphalopathie hépatique (dose différente)'
      },
      {
        nom: 'Bisacodyl',
        dose_adaptee_sujet_age: '5–10 mg le soir PO ou suppositoire 10 mg ; usage court ou ponctuel',
        voie: 'PO, rectal',
        effets_secondaires: 'Crampes, diarrhée, syndrome colon irritable ; dépendance si long cours',
        interactions: 'Antiacides, H2 (entérosolubles : prendre à jeun)',
        surveillance: 'Éviter usage chronique seul ; recherche cause (opioïdes, immobilisation)'
      },
      {
        nom: 'Docusate sodique',
        dose_adaptee_sujet_age: '100 mg x1–2/j (adoucissant fécal)',
        voie: 'PO',
        effets_secondaires: 'Crampes légères ; efficacité modeste',
        interactions: 'Minéral oil (absorption)',
        surveillance: 'Souvent associé à stimulant ou macrogol ; prévention opioïdes'
      }
    ],
    indications_geriatriques: 'Constipation chronique, prévention sous opioïdes/anticholinergiques, impaction fécale (désimpaction manuelle + macrogol)',
    contre_indications: 'Occlusion intestinale, perforation, appendicite aiguë ; phosphate rectal : CI insuffisance cardiaque/renale',
    alternatives: 'Fibres si déglutition OK, hydratation, mobilisation, réglage toilettes ; kinesitherapie périnéale'
  }
,

  {
    id: 'pc-16',
    classe: 'anti-ostéoporotiques',
    medicaments: [
      {
        nom: 'Alendronate (Fosamax)',
        dose_adaptee_sujet_age: '70 mg par semaine PO, à jeun, avec un grand verre d\'eau du robinet, rester en position verticale au moins 30 minutes sans s\'allonger ni manger.',
        voie: 'PO hebdomadaire',
        effets_secondaires: 'Œsophagite, reflux gastrique, douleurs musculo-squelettiques ; rare ostéonécrose de la mâchoire ou fracture fémorale atypique (usage long terme).',
        interactions: 'Calcium, antiacides, fer, nourriture (annulent complètement l\'absorption de l\'alendronate). Respecter 30 min d\'intervalle.',
        surveillance: 'DFG (contre-indiqué si DFG < 35 ml/min), observance stricte des consignes de prise, hygiène bucco-dentaire.'
      },
      {
        nom: 'Acide zolédronique (Aclasta)',
        dose_adaptee_sujet_age: 'Perfusion intraveineuse annuelle de 5 mg sur au moins 15-30 minutes, avec hydratation adéquate avant/après.',
        voie: 'IV annuelle',
        effets_secondaires: 'Syndrome pseudo-grippal (fièvre, arthralgies, myalgies dans les 3 jours), hypocalcémie transitoire, néphrotoxicité.',
        interactions: 'Aminosides, diurétiques de l\'anse (↑ risque hypocalcémie et toxicité rénale).',
        surveillance: 'DFG (contre-indiqué si DFG < 35 ml/min), calcémie et vitamine D pré-perfusion, état dentaire avant traitement.'
      },
      {
        nom: 'Dénosumab (Prolia)',
        dose_adaptee_sujet_age: '60 mg en injection sous-cutanée unique tous les 6 mois. Non éliminé par le rein (utilisable si IRC).',
        voie: 'SC tous les 6 mois',
        effets_secondaires: 'Infections (cellulite), hypocalcémie sévère (surtout si IRC) ; ⚠️ RISQUE MAJEUR de rebond fracturaire à l\'arrêt.',
        interactions: 'Pas d\'interaction médicamenteuse majeure connue.',
        surveillance: 'Calcémie (corriger toute hypocalcémie avant injection), prise quotidienne de Calcium + Vitamine D indispensable ; NE JAMAIS ARRÊTER sans relais immédiat par bisphosphonate.'
      },
      {
        nom: 'Vitamine D + Calcium (Cholécalciférol + Carbonate)',
        dose_adaptee_sujet_age: '800 à 2000 UI/jour de Vitamine D3 + 500 à 1000 mg/jour de Calcium élémentaire en fonction des apports alimentaires.',
        voie: 'PO quotidien',
        effets_secondaires: 'Constipation, ballonnements, hypercalcémie, hypercalciurie, lithiase rénale.',
        interactions: 'Bisphosphonates, fer, fluoroquinolones (chélates, espacer de 2h).',
        surveillance: 'Calcémie, calciurie, dosage 25-OH vit D si nécessaire (cible gériatrique > 30 ng/ml).'
      }
    ],
    indications_geriatriques: 'Ostéoporose documentée (T-score ≤ -2.5), antécédent de fracture ostéoporotique majeure (hanche, vertèbre), corticothérapie prolongée (prednisone ≥ 5mg/j pendant ≥ 3 mois) associée à un T-score ≤ -1.5 (START D1/D2).',
    contre_indications: 'Insuffisance rénale sévère (DFG < 30-35 ml/min pour les bisphosphonates) ; hypocalcémie non corrigée ; troubles de la déglutition ou incapacité à rester debout/assis 30 min (alendronate PO).',
    alternatives: 'Tériparatide (Forsteo) si ≥ 2 fractures vertébrales ; Dénosumab si IRC sévère sous étroite surveillance de la calcémie ; kinésithérapie motrice pour prévention des chutes.'
  },
  {
    id: 'pc-17',
    classe: 'antiparkinsoniens',
    medicaments: [
      {
        nom: 'Lévodopa + Carbidopa (Sinemet, Modopar)',
        dose_adaptee_sujet_age: 'Débuter à 50-100 mg 2 à 3 fois par jour, à adapter progressivement par paliers de 50-100 mg/semaine. Prendre à distance des repas riches en protéines.',
        voie: 'PO',
        effets_secondaires: 'Hypotension orthostatique, hallucinations, confusion, dyskinésies tardives, nausées, somnolence diurne.',
        interactions: 'Neuroleptiques (antagonisme d\'effet - exception clozapine, quétiapine) ; fer (↓ absorption lévodopa).',
        surveillance: 'PA couchée/debout (risque HO), état cognitif, survenue d\'hallucinations (SPCD), mouvements involontaires.'
      },
      {
        nom: 'Pramipexole (Sifrol)',
        dose_adaptee_sujet_age: 'Débuter à 0.088 mg 3 fois par jour, augmenter très lentement. Agoniste dopaminergique.',
        voie: 'PO',
        effets_secondaires: 'Somnolence diurne subite (accès de sommeil), hallucinations, troubles du contrôle des impulsions (jeu pathologique, hypersexualité, achats compulsifs), œdèmes.',
        interactions: 'Neuroleptiques (antagonisme).',
        surveillance: 'Troubles du comportement (impulsivité), somnolence, PA (HO).'
      }
    ],
    indications_geriatriques: 'Maladie de Parkinson modérée à sévère entraînant une gêne fonctionnelle (START C1) ; syndrome des jambes sans repos sévère.',
    contre_indications: 'Démence à corps de Lewy avancée avec hallucinations sévères (préférer lévodopa seule à faible dose) ; psychose active non contrôlée ; BAV non appareillé.',
    alternatives: 'Monothérapie lévodopa (préférable chez le sujet très âgé car mieux tolérée sur le plan neuropsychiatrique que les agonistes dopaminergiques).'
  },
  {
    id: 'pc-18',
    classe: 'statines (hypolipémiants)',
    medicaments: [
      {
        nom: 'Atorvastatine (Tahor)',
        dose_adaptee_sujet_age: '10 à 20 mg/jour le soir. Prudence en prévention primaire au-delà de 75-80 ans. Dose max conseillée 40 mg/jour.',
        voie: 'PO',
        effets_secondaires: 'Myalgies, myopathie, élévation des transaminases, risque accru de diabète induit.',
        interactions: 'Clarithromycine, érythromycine, kétoconazole (inhibition CYP3A4 → ↑↑ risque rhabdomyolyse - STOPP v3) ; jus de pamplemousse.',
        surveillance: 'CPK si myalgies, bilan hépatique (ALAT) avant traitement et si symptômes, tolérance musculaire.'
      },
      {
        nom: 'Rosuvastatine (Crestor)',
        dose_adaptee_sujet_age: '5 à 10 mg/jour le soir. Prudence si origine asiatique ou insuffisance rénale.',
        voie: 'PO',
        effets_secondaires: 'Myalgies, myopathie, rhabdomyolyse, protéinurie tubulaire transitoire.',
        interactions: 'Ciclosporine, gemfibrozil (CI) ; anticoagulants oraux (↑ INR).',
        surveillance: 'CPK et ALAT en cas de symptômes musculaires ou hépatiques.'
      }
    ],
    indications_geriatriques: 'Prévention secondaire cardiovasculaire systématique chez le sujet âgé après AVC ischémique non cardioembolique, coronaropathie ou AOMI stable (START A3). En prévention primaire : bénéfice/risque incertain chez le patient fragile ou après 80 ans.',
    contre_indications: 'Hépatopathie active ; myopathie active ; association aux macrolides ou fibrates (gemfibrozil) sans étroite surveillance.',
    alternatives: 'Ézétimibe (10 mg/j) si statine non tolérée ; arrêt des statines si espérance de vie < 1 an ou démence terminale (déprescription).'
  },
  {
    id: 'pc-19',
    classe: 'inhibiteurs de la pompe à protons (IPP)',
    medicaments: [
      {
        nom: 'Oméprazole (Mopral)',
        dose_adaptee_sujet_age: '10 à 20 mg/jour (dose minimale efficace). Éviter l\'usage chronique prolongé > 8 semaines sans indication claire (STOPP H2).',
        voie: 'PO, IV',
        effets_secondaires: 'Ostéoporose/fractures (usage long terme), hypomagnésémie, carence en B12, colite à Clostridioides difficile, néphrite interstitielle.',
        interactions: 'Clopidogrel (↓ efficacité du clopidogrel par inhibition CYP2C19 - préférer le pantoprazole) ; chélation du fer et calcium.',
        surveillance: 'Magnésémie et hémogramme si traitement prolongé ; évaluer la possibilité de déprescription annuelle.'
      },
      {
        nom: 'Pantoprazole (Inipomp)',
        dose_adaptee_sujet_age: '20 mg/jour (dose de maintenance). Moins d\'interactions CYP que l\'oméprazole.',
        voie: 'PO, IV',
        effets_secondaires: 'Idem oméprazole, céphalées, diarrhées.',
        interactions: 'Pas d\'interaction significative avec le clopidogrel (préféré chez le coronaropathe sous antiagrégant).',
        surveillance: 'Évaluation régulière de la pertinence du traitement.'
      }
    ],
    indications_geriatriques: 'Gastro-protection systématique associée aux AINS au long cours chez les patients avec antécédents d\'ulcère gastroduodénal ou sous bithérapie antiplaquettaire/anticoagulante (START F1/STOPP I1/I5). Reflux gastro-œsophagien sévère ou œsophagite.',
    contre_indications: 'Hypersensibilité aux IPP.',
    alternatives: 'Anti-H2 (famotidine) à dose adaptée à la fonction rénale ; suspension d\'alginate de sodium (Gaviscon) si symptômes mineurs.'
  },
  {
    id: 'pc-20',
    classe: 'traitements urologiques',
    medicaments: [
      {
        nom: 'Tamsulosine (Josir LP)',
        dose_adaptee_sujet_age: '0,4 mg/jour le soir après le repas. Alpha-1 bloquant sélectif.',
        voie: 'PO',
        effets_secondaires: 'Hypotension orthostatique sévère (chutes), vertiges, asthénie, syndrome de l\'iris disquette (chirurgie de la cataracte).',
        interactions: 'Antihypertenseurs (synergie d\'effet hypotenseur - STOPP L2).',
        surveillance: 'Recherche active d\'hypotension orthostatique (PA couchée/debout), examen ophtalmologique pré-opératoire cataracte.'
      },
      {
        nom: 'Mirabégron (Betmiga)',
        dose_adaptee_sujet_age: '25 à 50 mg/jour. Bêta-3 agoniste. Alternative majeure aux anticholinergiques chez le sujet âgé car sans effet cognitif.',
        voie: 'PO',
        effets_secondaires: 'Hypertension artérielle, tachycardie, infections urinaires.',
        interactions: 'Inhibiteurs du CYP2D6 (métoprolol, flécainide).'
      },
      {
        nom: 'Solifénacine (Vesicare)',
        dose_adaptee_sujet_age: '5 mg/jour. Anticholinergique vésical (antimuscarinique).',
        voie: 'PO',
        effets_secondaires: '⚠️ Charge anticholinergique (ACB=3) : sécheresse buccale, constipation sévère, confusion, rétention d\'urine, aggravation de la démence.',
        interactions: 'Autres anticholinergiques (risques cumulés - STOPP L1).',
        surveillance: 'Constipation, résidu post-mictionnel (RPM), évaluation cognitive régulière.'
      }
    ],
    indications_geriatriques: 'Dysurie liée à une hypertrophie bénigne de la prostate (tamsulosine) ; incontinence urinaire par hyperactivité vésicale (mirabégron ou solifénacine après échec de la rééducation).',
    contre_indications: 'Solifénacine/antimuscariniques : glaucome par fermeture de l\'angle non contrôlé, rétention urinaire aiguë, démence sévère (STOPP L1) ; Tamsulosine : hypotension orthostatique documentée.',
    alternatives: 'Rééducation périnéale, mictions programmées toutes les 2 heures, étui pénien pour l\'homme.'
  },
  {
    id: 'pc-21',
    classe: 'hormones thyroïdiennes',
    medicaments: [
      {
        nom: 'Lévothyroxine (Levothyrox)',
        dose_adaptee_sujet_age: 'Débuter à 12,5–25 µg/jour chez le sujet âgé (surtout si coronaropathe), augmenter très lentement par paliers de 12,5–25 µg toutes les 4–6 semaines. Prendre à jeun 30 minutes avant le petit déjeuner.',
        voie: 'PO',
        effets_secondaires: 'Tachycardie, arythmie (FA), angor, ostéoporose (en cas de surdosage).',
        interactions: 'Calcium, fer, IPP (diminuent l\'absorption digestive de la lévothyroxine).',
        surveillance: 'TSH à 6-8 semaines après initiation ou changement de dose (cible gériatrique standard 0.5–4.0 mIU/L, peut être élargie 1.0–6.0 si très âgé ou fragile).'
      }
    ],
    indications_geriatriques: 'Hypothyroïdie primaire documentée (TSH élevée avec T4L basse). Éviter le traitement systématique de l\'hypothyroïdie fruste (TSH entre 4 et 10 avec T4L normale) chez les patients très âgés sauf si symptomatiques.',
    contre_indications: 'Insuffisance surrénale non traitée ; infarctus du myocarde aigu.',
    alternatives: 'Surveillance simple sans traitement si hypothyroïdie fruste asymptomatique chez le patient fragile.'
  },
  {
    id: 'pc-22',
    classe: 'anti-goutteux',
    medicaments: [
      {
        nom: 'Allopurinol',
        dose_adaptee_sujet_age: 'Débuter à 50-100 mg/jour. Augmenter par paliers de 50 mg pour atteindre l\'uricémie cible. Ajuster à la fonction rénale.',
        voie: 'PO',
        effets_secondaires: 'Éruptions cutanées (rare mais grave : syndrome de Lyell/DRESS), troubles digestifs, cytopénies.',
        interactions: 'Azathioprine (CI - ↑ toxicité hématologique majeure).',
        surveillance: 'Uricémie (cible < 360 µmol/L ou < 6 mg/dL), NFS, fonction rénale (créatinine, DFG).'
      },
      {
        nom: 'Colchicine',
        dose_adaptee_sujet_age: '0.5 mg à 1 mg maximum le premier jour, puis 0.5 mg/jour. Réduire les doses si insuffisance rénale ou diarrhée.',
        voie: 'PO',
        effets_secondaires: 'Diarrhées profuses (signe de surdosage), neuromyopathie, aplasie médullaire.',
        interactions: 'Macrolides (clarithromycine - CI absolue car inhibition CYP3A4 → surdosage mortel en colchicine), statines (↑ risque myopathie).',
        surveillance: 'Transit intestinal, NFS, DFG (contre-indiqué si DFG < 10 ml/min sans réduction de dose - STOPP G4).'
      }
    ],
    indications_geriatriques: 'Crise de goutte aiguë (colchicine courte durée - START D4) ; traitement de fond hypouricémiant si crises récidivantes, tophi ou arthropathie uratique (allopurinol - START D5).',
    contre_indications: 'Colchicine : insuffisance rénale ou hépatique sévère en cas d\'association aux inhibiteurs du CYP3A4 (macrolides, ciclosporine).',
    alternatives: 'Cure courte d\'AINS (ibuprofène) si DFG > 50 ml/min ; corticothérapie orale courte (prednisone 30 mg/j pendant 3-5 jours) si insuffisance rénale sévère empêchant la colchicine.'
  },
  {
    id: 'pc-23',
    classe: 'soins palliatifs (fin de vie)',
    medicaments: [
      {
        nom: 'Midazolam (Hypnovel)',
        dose_adaptee_sujet_age: 'Titration initiale : 1 à 3 mg en injection SC ou IV lente. Entretien : 0,5 à 2 mg/heure en perfusion sous-cutanée ou intraveineuse continue (seringue électrique).',
        voie: 'SC, IV',
        effets_secondaires: 'Dépression respiratoire, hypotension, sédation profonde recherchée, réactions paradoxales (rares).',
        interactions: 'Opioïdes, autres sédatifs (synergie d\'effet recherchée en fin de vie).',
        surveillance: 'Profondeur de la sédation (Échelle de Ramsay cible 5-6), évaluation de l\'inconfort ou de la douleur (ALGOPLUS/DOLOPLUS).'
      },
      {
        nom: 'Scopolamine (Butylbromure - Buscopan)',
        dose_adaptee_sujet_age: '0,25 mg à 0,5 mg en injection sous-cutanée toutes les 4 à 6 heures, ou 1 à 2 mg/24 heures en perfusion continue sous-cutanée.',
        voie: 'SC, IV',
        effets_secondaires: 'Sécheresse buccale, tachycardie, rétention d\'urine, constipation. Anticholinergique fort (charge cumulative).',
        interactions: 'Autres anticholinergiques.',
        surveillance: 'Efficacité sur l\'encombrement bronchique ou les râles terminaux, absence de globe vésical.'
      },
      {
        nom: 'Morphine injectable (SC/IV)',
        dose_adaptee_sujet_age: 'Patient naïf d\'opioïdes : 2,5 mg à 5 mg SC toutes les 4 heures si besoin. Patient déjà sous opioïdes : injecter 1/6 de la dose quotidienne par voie SC en cas de douleur ou dyspnée aiguë.',
        voie: 'SC, IV',
        effets_secondaires: 'Dépression respiratoire, myoclonies, prurit, constipation, nausées.',
        interactions: 'Sédatifs (midazolam), anticholinergiques (scopolamine).',
        surveillance: 'Fréquence respiratoire, échelle de douleur, confort global.'
      }
    ],
    indications_geriatriques: 'Sédation profonde et continue maintenue jusqu\'au décès (SPCMD) en cas de détresse respiratoire ou douleur réfractaire (Loi Claeys-Léonetti 2016) ; traitement de l\'encombrement pharyngé terminal (scopolamine) ; ordonnances anticipées en EHPAD.',
    contre_indications: 'Aucune contre-indication en phase terminale (principe du double effet : soulager la souffrance prévaut sur le risque d\'abréger la vie).',
    alternatives: 'Soutien psychologique, hypnose, présence familiale, soins de confort non pharmacologiques.'
  },
  {
    id: 'pc-24',
    classe: 'inhibiteurs de SGLT2 (gliflozines)',
    medicaments: [
      {
        nom: 'Dapagliflozine (Forxiga)',
        dose_adaptee_sujet_age: '10 mg une fois par jour le matin. Non recommandé pour le contrôle glycémique si DFG < 25 ml/min.',
        voie: 'PO',
        effets_secondaires: 'Infections génitales à levures, infections urinaires, déshydratation, hypotension orthostatique, rare acidose cétonique euglycémique.',
        interactions: 'Diurétiques (↑ risque de déshydratation et d\'hypotension).',
        surveillance: 'DFG (utilisable dans l\'insuffisance cardiaque jusqu\'à un DFG de 20 ml/min), état d\'hydratation, pression artérielle, hygiène intime.'
      },
      {
        nom: 'Empagliflozine (Jardiance)',
        dose_adaptee_sujet_age: '10 mg une fois par jour le matin.',
        voie: 'PO',
        effets_secondaires: 'Idem dapagliflozine.',
        interactions: 'Diurétiques, insuline (risque d\'hypoglycémie si associé).',
        surveillance: 'Fonction rénale, glycémie si diabétique.'
      }
    ],
    indications_geriatriques: 'Insuffisance cardiaque chronique à fraction d\'éjection réduite (ICFER) pour réduire le risque de décès cardiovasculaire et d\'hospitalisation (START A7) ; néphroprotection dans la maladie rénale chronique ; diabète de type 2.',
    contre_indications: 'Antécédent d\'acidose cétonique ; DFG < 20 ml/min pour l\'insuffisance cardiaque ; risque élevé d\'amputation (artériopathie sévère instable).',
    alternatives: 'Autres traitements de l\'insuffisance cardiaque (bêta-bloquants, IEC/ARA2/ARNI, diurétiques de l\'anse).'
  },
  {
    id: 'pc-25',
    classe: 'compléments nutritionnels oraux (CNO)',
    medicaments: [
      {
        nom: 'CNO Liquides Hyperprotidiques Hypercaloriques',
        dose_adaptee_sujet_age: '1 à 2 flacons par jour, à consommer à distance des repas (en collation à 10h ou 16h ou le soir au coucher) pour ne pas réduire l\'appétit du repas suivant. Consommer frais et par petites gorgées.',
        voie: 'PO',
        effets_secondaires: 'Satiété précoce, diarrhée ou nausées en cas d\'ingestion trop rapide.',
        interactions: 'Pas d\'interaction médicamenteuse.',
        surveillance: 'Poids du patient (hebdomadaire), observance, tolérance digestive, correction de la dénutrition (HAS 2021).'
      },
      {
        nom: 'CNO Crèmes et Mousses (dysphagie)',
        dose_adaptee_sujet_age: '1 à 2 pots par jour en collation. Texture adaptée aux patients présentant des troubles de la déglutition ou de la mastication.',
        voie: 'PO',
        effets_secondaires: 'Idem liquides.',
        interactions: 'Aucune.',
        surveillance: 'Poids, fausses routes, examen de la cavité buccale.'
      }
    ],
    indications_geriatriques: 'Prise en charge de la dénutrition modérée ou sévère chez le patient âgé de 70 ans et plus après échec de l\'enrichissement alimentaire (MNA-SF ≤ 11, IMC < 22 kg/m² ou perte de poids ≥ 10% en 6 mois - HAS 2021).',
    contre_indications: 'Obstruction digestive ; intolérance totale au lactose ou aux protéines de lait de vache ; phase terminale de fin de vie (sauf confort).',
    alternatives: 'Enrichissement des repas (poudre de lait, fromage râpé, œufs, beurre dans les purées) ; nutrition entérale par sonde naso-gastrique si dénutrition sévère réfractaire.'
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PHARMO_COMPLETE };
}