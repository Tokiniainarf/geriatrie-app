// Cas EVC 2023 — Dix scénarios d'examen (année 2023, gériatrie / médecine générale)
const CAS_EVC_2023 = [
  {
    id: 'evc23-1',
    chapter: 'ch9',
    difficulty: 'A',
    title: 'Démence débutante vs dépression — MMS et GDS',
    situation: 'Mme Lefebvre, 81 ans, vue par le médecin traitant pour « oublis » depuis 1 an. Vit seule, fils inquiet. ATCD : HTA, arthrose. Traitement : ramipril 5 mg, paracétamol. MMS 24/30 (déficit attention et rappel différé), GDS-15 9/15, pas de trouble du comportement. IMC 26. Pas de chute récente.',
    questions: [
      {
        q: 'Comment distinguez-vous démence légère, trouble dépressif et plainte mnésique bénigne ?',
        a: 'Démence : déficit cognitif objectif (MMS < 26 avec retentissement ADL), progression, pas d\'amélioration rapide à l\'épreuve thérapeutique. Dépression : GDS élevé, plainte > performance aux tests, « je ne sais pas » aux items, amélioration possible sous antidépresseur. Plainte bénigne : MMS normal, pas de retentissement. Ici : zone grise MMS 24 + GDS 9 → pseudodémence et début Alzheimer possibles.',
        points: 5
      },
      {
        q: 'Quel bilan minimal et quelle orientation en 2023 ?',
        a: 'Bilan reversible : NFS, ionogramme, créatinine, TSH, B12, folates, sérologies si contexte. IRM cérébrale si suspicion démence (atrophie hippocampique). Évaluation gériatrique : ADL/IADL, risque chute, conduite automobile. Orientation : médecin coordonnateur ALZ, HAD si besoin, pas d\'anticholinestérasique sans diagnostic structuré.',
        points: 4
      },
      {
        q: 'Que proposez-vous au fils et à la patiente concernant l\'autonomie ?',
        a: 'Entretien avec fils (avec accord patiente) : signes d\'alerte, aide à domicile progressive, téléassistance, mise en sécurité cuisine/gaz. Pas de retirer clés sans évaluation officielle si possible. Procurations, directives anticipées. Réévaluation MMS/GDS à 3 mois après traitement dépressif si GDS persistant.',
        points: 3
      }
    ],
    juryTips: 'Le jury 2023 attend la triade MMS + GDS + retentissement fonctionnel. Ne pas conclure « Alzheimer » sans IRM/bilan et sans avoir écarté la dépression traitable.'
  },
  {
    id: 'evc23-2',
    chapter: 'ch11',
    difficulty: 'A',
    title: 'Confusion aiguë du sujet âgé hospitalisé (CAM)',
    situation: 'M. Bernard, 87 ans, J3 hospitalisation pour pneumopathie. Fièvre en baisse, O2 2 L/min. Cette nuit : agitation, arrache sonde urinaire, ne reconnaît pas l\'infirmière. MMS à l\'admission 28/30. Na 131 mmol/L. ECBU positif traité par ceftriaxone. Reçoit tramadol 50 mg x3/j pour douleur lombaire chronique.',
    questions: [
      {
        q: 'Appliquez les 4 critères de la CAM et concluez.',
        a: '1) Début aigu et fluctuation ✓ (J3, agitation nocturne). 2) Inattention ✓ (ne reconnaît pas soignant). 3) Pensée désorganisée possible (à préciser à l\'interrogatoire). 4) Altération niveau de conscience ✓ (hyperactif ou somnolent alterné). Si ≥ 1 + 2 + (3 ou 4) → CAM positive = syndrome confusionnel.',
        points: 4
      },
      {
        q: 'Listez les facteurs favorisants dans ce cas.',
        a: 'Infection (pneumopathie, ECBU), âge, hospitalisation, hyponatrémie légère, tramadol (opioïde), douleur non contrôlée, privation sensorielle (nuit), déshydratation possible. MMS pré-admission normal → plutôt confusion qu\'aggravation démence seule.',
        points: 4
      },
      {
        q: 'Prise en charge non pharmacologique et pharmacologique.',
        a: 'Non pharma : réorientation (horloge, jour/nuit), lunettes/appareils, présence familiale, mobilisation précoce, éviter contention. Pharma : traiter infection/hyponatrémie, arrêter/réduire tramadol (paracétamol), halopéridol 0,5 mg si danger immédiat seulement, pas de BZD. Surveillance scope si agitation sévère.',
        points: 4
      }
    ],
    juryTips: 'Confusion réversible = message clé EVC. Le tramadol est le piège médicamenteux classique ; le jury sanctionne la contention systématique.'
  },
  {
    id: 'evc23-3',
    chapter: 'ch12',
    difficulty: 'B',
    title: 'Hypotension orthostatique et syncope',
    situation: 'Mme Roche, 78 ans, 2 lipothymies en 1 mois, toujours le matin au lever. ATCD : HTA, diabète type 2. Traitement : indapamide 1,5 mg, ramipril 10 mg, metformine 1000 mg x2, sitagliptine. PA couchée 158/72, debout à 1 min : 92/58, FC 88 régulière. Pas de traumatisme. ECG : BAV 1, pas de ischémie.',
    questions: [
      {
        q: 'Définissez l\'hypotension orthostatique et confirmez le diagnostic.',
        a: 'Chute PA systolique ≥ 20 mmHg ou diastolique ≥ 10 mmHg dans les 3 min après passage couché → debout. Ici : 158→92 = −66 systolique → hypotension orthostatique symptomatique. Rechercher causes : iatrogénie (IEC + diurétique), déshydratation, diabète (neuropathie), réveil matinal (pic antihypertenseur).',
        points: 4
      },
      {
        q: 'Quelles modifications thérapeutiques proposez-vous ?',
        a: 'Réduire ramipril (5 mg) ou espacer indapamide, hydratation, lever progressif (mise en tension jambes), bas de contention si pas d\'artériopathie. Réévaluer cible PA chez diabétique âgé (éviter orthostase). Pas de nouveau antihypertenseur sans mesure orthostatique répétée.',
        points: 4
      },
      {
        q: 'Quel bilan complémentaire si syncope récidivante ?',
        a: 'ECG 12 dérivations + Holter si palpitations, échocardiographie si souffle, bilan métabolique, HbA1c, fer si anémie. Score syncope (ESG) : si cardiaque suspect → avis cardio. IRM cérébrale non systématique si orthostase claire et contexte évident.',
        points: 3
      }
    ],
    juryTips: 'Mesurer PA debout est obligatoire à l\'EVC dès qu\'on parle syncope/chute. Le jury veut des chiffres et une décision sur l\'indapamide + IEC.'
  },
  {
    id: 'evc23-4',
    chapter: 'ch14',
    difficulty: 'A',
    title: 'Dénutrition et sarcopénie post-hospitalisation',
    situation: 'M. Duval, 84 ans, sortie J10 après fracture col fémoral opérée. Perte 5 kg en 2 mois. Albumine 28 g/L, préalbumine basse. MNA-SF 10/14. Appétit faible, vit seul, aide ménage 2x/semaine. Créatinine DFG 48 mL/min. Pas de dysphagie déclarée.',
    questions: [
      {
        q: 'Comment confirmez et stadifiez la dénutrition ?',
        a: 'Critères GLIM : phénotype (perte poids non intentionnelle, IMC bas, masse musculaire réduite) + étiologie (apport réduit, maladie aiguë). MNA < 11 = dénutrition avérée. Albumine basse = inflammation + dénutrition. Sarcopénie : force grip + masse musculaire (DEXA/impédance) si disponible.',
        points: 4
      },
      {
        q: 'Plan nutritionnel adapté à la fracture et à l\'IRC modérée.',
        a: 'Apports protéiques 1,2–1,5 g/kg/j si DFG le permet, fractionnement 5–6 repas, enrichissement, CNO hypercalorique hyperprotéiné 200–400 mL x2/j entre les repas. Vit D 800–1000 UI + calcium si apports faibles. Rééducation à la marche + renforcement. Évaluer dysphagie (test déglutition) si toux aux liquides.',
        points: 5
      },
      {
        q: 'Organisation de la sortie et suivi.',
        a: 'Prolongation SSR ou HAD kiné + diététique si autonomie insuffisante. Aide repas, portage, téléconsultation diététique. Poids hebdomadaire, albumine à 1 mois. Réévaluation placement si isolement et dénutrition réfractaire.',
        points: 3
      }
    ],
    juryTips: 'Lier fracture, sarcopénie et dénutrition en cercle vicieux. Proposer des grammes de protéines/j et pas seulement « bien manger ».'
  },
  {
    id: 'evc23-5',
    chapter: 'ch16',
    difficulty: 'A',
    title: 'Critères de Beers et déprescription des benzodiazépines',
    situation: 'Mme Faure, 76 ans, insomnie depuis 15 ans. Prend lorazépam 2,5 mg au coucher prescrit par un confrère. Chute il y a 6 mois sans fracture. MMS 27/30. Demande renouvellement « car impossible sans ».',
    questions: [
      {
        q: 'Pourquoi la lorazépam est-elle inappropriée selon les critères de Beers (2023) ?',
        a: 'BZD : risque chutes, fractures, confusion, dépendance, conduite, syndrome de sevrage. Durée > quelques semaines non recommandée chez > 65 ans. Lorazépam demi-vie intermédiaire mais métabolites actifs chez sujet âgé. Alternative : hygiène du sommeil, TCC-I, mélatonine LP faible dose si besoin.',
        points: 4
      },
      {
        q: 'Décrivez un schéma de sevrage progressif.',
        a: 'Information patiente + entourage, objectif réaliste (réduction dose). Substitution diazépam équivalent pour paliers (ex. lorazépam 2,5 → diazépam 15 mg puis réduction 10 % toutes les 1–2 semaines). Suivi rapproché, pas d\'arrêt brutal (risque convulsion rare mais crise d\'angoisse). Kiné/chutes si anxiété.',
        points: 4
      },
      {
        q: 'Que répondez-vous à la demande de renouvellement ?',
        a: 'Refus du renouvellement au long cours tel quel ; proposition contrat de sevrage, consultation infirmière ou MG hebdo au début. Si refus patiente : documenter information risques, dose minimale temporaire en diminution programmée, pas de double prescription ailleurs (DMP, courrier).',
        points: 3
      }
    ],
    juryTips: 'Beers + sevrage concret = classique. Le jury pénalise le « je renouvelle pour éviter le conflit » sans plan.'
  },
  {
    id: 'evc23-6',
    chapter: 'ch10',
    difficulty: 'B',
    title: 'Insuffisance cardiaque du sujet âgé — dyspnée et œdèmes',
    situation: 'M. Girard, 89 ans, dyspnée d\'effort progressive, orthopnée 2 oreillers, prise de poids 4 kg en 10 jours. ATCD : FA permanente, FEVG 45 % (écho 1 an). Traitement : furosémide 40 mg, bisoprolol 2,5 mg, apixaban 2,5 mg x2, ramipril 5 mg. Créatinine stable, K+ 4,2. Rx : cardiomégalie, redistribution vasculaire.',
    questions: [
      {
        q: 'Décompensation : causes déclenchantes à rechercher.',
        a: 'Non observance sel, alimentation, iatrogénie (AINS ?), infection pulmonaire, FA mal contrôlée (FC), ischémie, crise HTA, progression valvulopathie. Ici : surcharge hydrosodée + FA + FEVG modérément réduite = IC aiguë sur chronique.',
        points: 3
      },
      {
        q: 'Traitement de la décompensation en ambulatoire vs hospitalisation.',
        a: 'Si pas de détresse : augmenter furosémide 40→60–80 mg, restriction sodée, pesée quotidienne, O2 si SpO2 < 92 %. Hospitaliser si OAP, SpO2 bas, confusion, insuffisance rénale aiguë, besoin IV. Vérifier apixaban dose âge/poids (2,5 mg si ≥ 2 critères).',
        points: 4
      },
      {
        q: 'Objectifs thérapeutiques à long terme chez ce patient de 89 ans.',
        a: 'Soulagement symptômes, pas d\'hospitalisation récurrente, qualité de vie. Optimiser IEC/bêta-bloquant si toléré, anticoagulation FA, contrôle FC. Discuter limite thérapeutique et directives anticipées. Pas de viser FEVG normalisée.',
        points: 4
      }
    ],
    juryTips: 'Gériatrie IC = balance bénéfice/âge. Mentionner apixaban 2,5 mg et le poids corporel montre la mise à jour 2023.'
  },
  {
    id: 'evc23-7',
    chapter: 'ch13',
    difficulty: 'A',
    title: 'Infection urinaire et confusion — traiter ou non ?',
    situation: 'Mme Blanc, 92 ans, EHPAD. Somnolence depuis 48 h, refus alimentation. Pas de fièvre, pas de brûlures. Sondée à demeure depuis 2 ans. ECBU prélevé sans symptôme : leucocyturie, E. coli multi-sensible. Créatinine +20 % vs baseline.',
    questions: [
      {
        q: 'ECBU positif chez patiente confuse : infection ou colonisation ?',
        a: 'Chez porteuse sonde : colonisation très fréquente. Critères symptômes : fièvre, douleur sus-pubienne, hématurie, modification état mental AVEC contexte infectieux autre, ou leucocytose. Confusion seule insuffisante pour diagnostiquer cystite sans autre signe (recommandations IDSA/infirmiers EHPAD).',
        points: 5
      },
      {
        q: 'Quelle conduite tenir pour cette patiente ?',
        a: 'Rechercher autre cause confusion : déshydratation, constipation, douleur, AVC, médicaments. Hydratation, révision traitement, ECBU seul ne impose pas antibiotique si asymptomatique urinaire. Si décision traiter (fièvre ou instabilité) : 7 jours adapté à créatinine, réévaluer sonde (indication ?).',
        points: 4
      },
      {
        q: 'Prévention des réhospitalisations liées aux « UTI ».',
        a: 'Éviter ECBU de dépistage, formation soignants signes vrais, programme constipation/douleur, minimiser sondes, protocole déshydratation EHPAD. Antibiotic stewardship : pas de fluoroquinolone de confort.',
        points: 3
      }
    ],
    juryTips: 'Piège EVC majeur : antibiotique pour tout ECBU + confusion. Le jury 2023 suit les reco « ne pas traiter l\'urine ».'
  },
  {
    id: 'evc23-8',
    chapter: 'ch15',
    difficulty: 'B',
    title: 'Douleur chronique et opioïdes chez le sujet fragile',
    situation: 'M. Moreau, 80 ans, cancer prostate métastatique osseuses. Douleur lombaire EVA 7/10 malgré paracétamol 3 g/j et ibuprofène 1200 mg/j (IRC eGFR 35). Morphine LP 30 mg x2 initiée il y a 1 mois. Somnolence diurne, constipation 5 j sans selles, MMS passé de 29 à 25.',
    questions: [
      {
        q: 'Évaluez les effets indésirables et la balance bénéfice/risque.',
        a: 'Opioïde : sédation, confusion (MMS ↓), constipation (urgence fonctionnelle), risque chute. AINS contre-indiqué si eGFR 35 (aggravation IRC). Objectif : analgésie acceptable (EVA 4 acceptable ?) avec moindre dose morphine + laxatif osmotique + prokinétique.',
        points: 4
      },
      {
        q: 'Optimisation antalgique selon l\'OMS palier 3 adapté au sujet âgé.',
        a: 'Arrêt ibuprofène. Paracétamol maintenu. Morphine : réduire dose ou passer morphine IR titration, laxatif (macrogol + bisacodyl si besoin). Adjuvants : corticoïde faible dose si infiltration métastase, biphosphonate, radiothérapie antalgique. Kinésithérapie douce.',
        points: 4
      },
      {
        q: 'Quand orienter vers équipe mobile soins palliatifs ?',
        a: 'Dès maintenant si cancer avancé + opioïde + retentissement cognitif : coordination soins, plan constipation, directives anticipées, antipation crise osseuse, information famille. Pas attendre les « derniers jours ».',
        points: 3
      }
    ],
    juryTips: 'Montrer qu\'on sait arrêter l\'AINS et traiter la constipation opioïde — sinon le jury considère la prescription dangereuse.'
  },
  {
    id: 'evc23-9',
    chapter: 'ch8',
    difficulty: 'A',
    title: 'Chute avec traumatisme crânien sous anticoagulant',
    situation: 'Mme Lambert, 85 ans, chute dans sa salle de bain, traumatisme occipital, pas de perte de connaissance rapportée. Traitement : apixaban 5 mg x2 pour FA, atorvastatine. GCS 14 (confusion légère à l\'arrivée SAMU). PA 145/80, pas de déficit focal. Antécédent HTA.',
    questions: [
      {
        q: 'Indications du scanner cérébral en urgence.',
        a: 'Sujet âgé + anticoagulant oral + traumatisme crânien = indication forte TDM (risque hémorragie retardée). Score Canadian CT Head Rule adapté : GCS < 15, vomissements, coagulopathie, chute importante. Ici GCS 14 → scanner.',
        points: 4
      },
      {
        q: 'Conduite si scanner sans saignement : surveillance.',
        a: 'Hospitalisation ou surveillance 24 h selon protocole local, répéter neuro, arrêt apixaban temporaire 24–48 h si haut risque saignement puis reprise ? (balance thrombose). Information famille signes alerte. Pas de lumbago si stable.',
        points: 4
      },
      {
        q: 'Prévention secondaire des chutes.',
        a: 'Tinetti, revue médicaments (hypotension), vision, éclairage salle de bain, barres, tapis antidérapants, chaussures, rééducation équilibre, vitamine D si carence.',
        points: 3
      }
    ],
    juryTips: 'Anticoagulant + TC = scanner quasi systématique. Ne pas minimiser GCS 14 chez 85 ans.'
  },
  {
    id: 'evc23-10',
    chapter: 'ch17',
    difficulty: 'A',
    title: 'Fin de vie et directives anticipées en EHPAD',
    situation: 'M. Perrin, 91 ans, démence Alzheimer stade sévère (MMS 8), pneumopathie aspiration récurrente. Troisième épisode en 4 mois. Refus famille de réhospitaliser. Patiente grabataire, dysphagie, déshydratation légère. Directives anticipées rédigées il y a 5 ans : « pas de réanimation, pas d\'intubation ».',
    questions: [
      {
        q: 'Comment organisez-vous la prise en charge de cet épisode infectieux ?',
        a: 'Soins de confort : O2 si dyspnée, morphine faible dose si détresse, hydratation subcutanée si refus perfusion, pas d\'antibiotique IV lourd si objectif confort (discuter ATB oral/simple avec famille selon souhait). Respect directives : pas de transfert SMUR réanimation.',
        points: 5
      },
      {
        q: 'Rôle de la famille et du médecin coordonnateur.',
        a: 'Réunion explicative : pronostic court/moyen terme, signes fin de vie, suction si sécrétions, plan antipation. Consentement familial éclairé pour limitation. Traçabilité dossier EHPAD + MT. SAD ou médecin EHPAD pour visite.',
        points: 4
      },
      {
        q: 'Quels soins ne pas abandonner en phase palliative ?',
        a: 'Hygiène bouche, repositionnement, analgésie (douleur sous-diagnostiquée), traitement anxiété/dyspnée, présence humaine, accompagnement spirituel si souhaité. Pas de nutrition artificielle si dysphagie terminale sans bénéfice (reco HAS).',
        points: 3
      }
    ],
    juryTips: 'EVC éthique 2023 : montrer que limitation ≠ abandon. Citer les directives et la loi Claeys-Leonetti (sédation profonde si demande).'
  }
];