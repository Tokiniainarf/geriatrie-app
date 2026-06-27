// Cas EVC 2020–2022 — Quinze scénarios d'examen (gériatrie / médecine générale)
const CAS_EVC_2020_2022 = [
  {
    id: 'evc20-1',
    year: 2020,
    chapter: 'ch6',
    difficulty: 'A',
    title: 'Fracture du col fémoral et ostéoporose non traitée',
    situation: 'Mme Moreau, 82 ans, admission aux urgences après chute dans sa cuisine (sol sec). Douleur hanche gauche, impotence fonctionnelle. ATCD : ménopause à 48 ans, pas de traitement calcique ni bisphosphonate. Traitement : ramipril 5 mg, paracétamol à la demande. IMC 21. DFG 62 mL/min. Radiographie : fracture sub-capitale gauche. Densitométrie jamais réalisée.',
    questions: [
      {
        q: 'Comment confirmez et stadifiez l\'ostéoporose dans ce contexte ?',
        a: 'Fracture du col fémoral à faible énergie chez femme ≥ 65 ans = ostéoporose majeure (critère FRAX/clinique) même sans DXA. DXA T-score ≤ −2,5 à prévoir dès que possible. Rechercher causes secondaires : hyperthyroïdie, myélome, corticothérapie (ici absents). Score FRAX élevé post-fracture → traitement anti-ostéoporotique indiqué après stabilisation chirurgicale.',
        points: 5
      },
      {
        q: 'Quel traitement de fond proposez-vous à la sortie (2020) ?',
        a: 'Calcium 1000 mg/j + vitamine D 800–1000 UI/j si apports insuffisants. Bisphosphonate oral (alendronate 70 mg/sem) ou IV (zoledronate) si DFG > 35 et trouble œsophagien absent ; sinon dénosumab 60 mg/6 mois si IRC. Évaluer risque chute (Tinetti). Rééducation à la marche + renforcement. Pas d\'estrogènes à 82 ans.',
        points: 4
      },
      {
        q: 'Organisation post-opératoire et prévention récidive.',
        a: 'SSR ou HAD kiné 3 semaines minimum. Aide à domicile, adaptation domicile (barres, éclairage). Contrôle PA orthostatique (IEC). Bilan vision, chaussures. Réévaluation DXA à 1 an. Information fracture = marqueur de risque vital élevé (mortalité 1 an ~20 %).',
        points: 3
      }
    ],
    juryTips: 'Ne pas attendre la DXA pour traiter après fracture du col fémoral. Le jury sanctionne l\'oubli de vitamine D et l\'absence de bilan chutes.'
  },
  {
    id: 'evc20-2',
    year: 2020,
    chapter: 'ch7',
    difficulty: 'B',
    title: 'Gonarthrose bilatérale et polymédication',
    situation: 'M. Lemaire, 77 ans, gonalgies bilatérales depuis 10 ans, raideur matinale < 30 min. Difficulté escaliers, canne occasionnelle. ATCD : HTA, RGO. Traitement : ibuprofène 400 mg x3/j auto-médication + oméprazole 20 mg, amlodipine 5 mg. Rx genoux : pincement interligne médial, ostéophytes. Pas d\'épanchement. ALAT normales, créatinine DFG 55.',
    questions: [
      {
        q: 'Diagnostic différentiel et éléments pour arthrose vs arthrite inflammatoire.',
        a: 'Arthrose : douleur mécanique, raideur brève, âge, facteurs mécaniques, Rx pincement/ostéophytes, pas de synovite majeure. Écarter polyarthrite rhumatoïde (raideur > 30 min, synovite, CRP élevée), goutte (crise aiguë monoarticulaire), arthrose inflammatoire si épanchement. Ici profil typique gonarthrose grade II–III.',
        points: 4
      },
      {
        q: 'Pourquoi l\'ibuprofène est-il problématique et quelle alternative ?',
        a: 'AINS : risque RGO (même sous IPP), IRC (DFG 55), HTA, cardiovasculaire chez > 65 ans. Durée et dose auto-médiquées excessives. Alternative : paracétamol 3 g/j max, topique diclofénac si peau intacte, kinésithérapie, perte poids si surpoids, canne du bon côté. AINS si échec = dose minimale courte + surveillance créatinine/PA.',
        points: 4
      },
      {
        q: 'Indications de la prothèse totale du genou chez ce patient.',
        a: 'Échec traitement médical bien conduit 3–6 mois, douleur invalidante, retentissement ADL, Rx compatible. Évaluer comorbidités (risque per-op), obésité, dépression. Attente réaliste : amélioration fonction, pas sport intensif. Avant arthroplastie : sevrage AINS, optimisation HTA, bilan dentaire si besoin.',
        points: 3
      }
    ],
    juryTips: 'Gonarthrose EVC = AINS + âge + IRC. Proposer paracétamol + rééducation avant chirurgie. Mentionner critères de Beers sur AINS chroniques.'
  },
  {
    id: 'evc20-3',
    year: 2020,
    chapter: 'ch8',
    difficulty: 'A',
    title: 'Douleur neuropathique du diabétique âgé',
    situation: 'Mme Blanc, 84 ans, diabète type 2 depuis 25 ans, brûlures et fourmillements nocturnes des pieds depuis 6 mois, EVA 7/10. HbA1c 8,2 %. Neuropathie périphérique clinique (monofilament absent). Traitement : metformine 1000 mg x2, gliclazide 60 mg, tramadol 50 mg x2/j prescrit par un confrère. MMS 28/30. Pas de plaie du pied.',
    questions: [
      {
        q: 'Comment caractérisez et classez cette douleur ?',
        a: 'Douleur neuropathique diabétique : type brûlure, paroxystique, nocturne, territoire chaussette, allodynie possible. Échelle DN4 positive. Distinction douleur nociceptive (arthrose, ischémie) : ici profil neuropathique pur. Rechercher artériopathie (pouls, TcPO2) et ulcère caché.',
        points: 4
      },
      {
        q: 'Traitement de première intention adapté à l\'âge (hors opioïde).',
        a: 'Optimisation glycémique (objectif HbA1c réaliste 8 % si fragile). Prégabaline faible dose (25–50 mg le soir) ou gabapentine titration lente, ou duloxétine si pas d\'IRC sévère. Paracétamol adjuvant. Arrêt ou réduction tramadol (confusion, chutes). Éducation pied diabétique, chaussures.',
        points: 5
      },
      {
        q: 'Quand hospitaliser ou orienter en urgence ?',
        a: 'Ulcère infecté, signes ischémie critique, charcot, fièvre, sepsis. Pas ici. Avis pluridisciplinaire diabétologie si pied à risque. Suivi EVA et effets indésirables anticonvulsivants (sédation, œdèmes).',
        points: 3
      }
    ],
    juryTips: 'Douleur neuropathique ≠ tramadol en première ligne chez le sujet âgé. Citer prégabaline/gabapentine et objectif glycémique individualisé.'
  },
  {
    id: 'evc20-4',
    year: 2020,
    chapter: 'ch10',
    difficulty: 'A',
    title: 'Dépression du veuvage et isolement',
    situation: 'M. Perrin, 79 ans, veuf depuis 4 mois. Consultation à la demande de sa fille : repli, pleurs, insomnie, perte d\'appétit 6 kg. GDS-15 13/15. MMS 29/30. ATCD : coronaropathie stable. Traitement : aspirine 100 mg, atorvastatine 20 mg. Pas d\'idées suicidaires exprimées mais « à quoi bon ». Vit seul.',
    questions: [
      {
        q: 'Diagnostic et gravité ; que rechercher en urgence ?',
        a: 'Épisode dépressif majeur probable (GDS ≥ 11, retentissement sommeil/appétit/poids, deuil compliqué > 2 mois). Écarter trouble bipolaire (antécédents maniaques). Urgence : idées suicidaires actives, plan, moyens (arme, médicaments stockés), capacité de passage à l\'acte. Échelle suicide si doute. Ici risque modéré → évaluation psychiatrique rapide si aggravation.',
        points: 5
      },
      {
        q: 'Prise en charge psychothérapeutique et sociale.',
        a: 'Entretien empathique, validation deuil, lien social (club seniors, téléphone fille), aide ménage, repas. TCC ou entretiens de soutien structurés. Activité physique adaptée (marche). Pas d\'isolement prolongé. Impliquer fille avec accord patient.',
        points: 3
      },
      {
        q: 'Traitement médicamenteux chez coronarien de 79 ans.',
        a: 'ISRS première ligne : sertraline 25–50 mg ou escitalopram 5–10 mg (moins d\'interactions que paroxétine). Surveillance Na+ (SIADH rare), saignement avec aspirine (information). Réponse 4–6 semaines. Pas de tricycliques (proarythmique, anticholinergique). Hospitalisation jour ou courte si risque suicidaire.',
        points: 4
      }
    ],
    juryTips: 'Deuil vs dépression : retentissement fonctionnel + GDS 13 = traiter. Toujours évaluer le risque suicidaire explicitement à l\'EVC.'
  },
  {
    id: 'evc20-5',
    year: 2020,
    chapter: 'ch12',
    difficulty: 'A',
    title: 'Chute avec commotion et syncope cardiaque ?',
    situation: 'M. Fontaine, 86 ans, chute dans la rue, témoin : perte de connaissance brève (< 1 min), reprise rapide. Traumatisme crânien léger, pas de fracture. PA 100/60, FC 48 régulière. Traitement : bisoprolol 5 mg, amiodarone 200 mg, apixaban 5 mg x2 pour FA. ECG : FA lente, pauses 3,2 s la nuit sur Holter récent. Créatinine DFG 40.',
    questions: [
      {
        q: 'Syncope vs chute mécanique : arguments et conduite.',
        a: 'Syncope : perte conscience, récupération complète, témoin. Ici syncope probable (bradycardie, amiodarone + bêta-bloquant, pauses nocturnes). Chute mécanique si glissade sans lipothymie. Hospitalisation courte si traumatisme crânien + anticoagulant (apixaban) : imagerie cérébrale selon critères. Bilan syncope prioritaire.',
        points: 4
      },
      {
        q: 'Facteurs iatrogènes et modifications thérapeutiques.',
        a: 'Bradycardie médicamenteuse : réduire bisoprolol 5→2,5 mg, réévaluer nécessité amiodarone (alternatives contrôle FC FA). Apixaban : vérifier dose (2,5 mg x2 si ≥ 2 critères âge/poids/créatinine). Pas d\'arrêt brutal anticoagulant sans avis cardio. Mesure PA orthostatique.',
        points: 4
      },
      {
        q: 'Prévention des rechutes.',
        a: 'Avis cardiologie : pacemaker si pauses symptomatiques ou très longues. Kiné équilibre, retrait tapis, lunettes. Ne pas conduire jusqu\'à bilan syncope. Éducation famille sur malaises. Réévaluation Holter après modification traitement.',
        points: 3
      }
    ],
    juryTips: 'Chute + anticoagulant + traumatisme crânien = protocole imagerie. Le jury attend le lien FA lente / amiodarone / syncope.'
  },
  {
    id: 'evc21-1',
    year: 2021,
    chapter: 'ch13',
    difficulty: 'A',
    title: 'Alitement prolongé et escarres du sujet âgé',
    situation: 'Mme Rousseau, 88 ans, alitée depuis 3 semaines après pneumopathie sévère. Vit à domicile avec aide-soignante 2x/j. Plaie sacrée stade III (perte substance), talon droit stade II. Incontinence fécale occasionnelle. Albumine 25 g/L. MMS 24/30. Douleur au pansement EVA 5. Pas de fièvre.',
    questions: [
      {
        q: 'Facteurs de risque d\'escarre dans ce cas et prévention.',
        a: 'Immobilisation, âge, dénutrition (albumine basse), incontinence (macération), friction au transfert, cognitif altéré. Prévention : changement position toutes les 2–4 h, matelas anti-escarre si risque élevé, peau sèche/propre, nutrition protéinée, mobilisation précoce dès amélioration respiratoire, pas de massage sur prominences.',
        points: 4
      },
      {
        q: 'Traitement local stade II–III et indication antibiotique.',
        a: 'Stade III : détersion (auto-lytique ou chirurgicale si tissu nécrotique), pansement adapté phase (hydrocolloïde/hydrofibre/alginate selon exsudat), contrôle douleur (paracétamol, morphine si pansement douloureux). Antibiotique systémique seulement si infection clinique (érythème étendu, cellulite, ostéite, sepsis) — pas ici sans fièvre ni CREP.',
        points: 5
      },
      {
        q: 'Objectif de mobilisation et organisation des soins à domicile.',
        a: 'Lever assis dès possible, fauteuil, verticalisation progressive avec kiné à domicile. Si échec domicile : hospitalisation courte ou SSR. Plan soins : infirmière 3x/sem pansements, médecin coordination, objectif cicatrisation 8–12 semaines. Discuter EHPAD si charge soins insoutenable.',
        points: 3
      }
    ],
    juryTips: 'Alitement = escarre prévisible. Distinguer colonisation vs infection. Le jury veut repositionnement + nutrition, pas que le pansement.'
  },
  {
    id: 'evc21-2',
    year: 2021,
    chapter: 'ch15',
    difficulty: 'B',
    title: 'Incontinence urinaire mixte chez la femme âgée',
    situation: 'Mme Lambert, 81 ans, fuites quotidiennes à l\'effort (toux, marche) et urgences avec impériosité. 4 protections/jour. ATCD : hysterectomie, constipation chronique. Traitement : oxybutynine 5 mg x2 prescrite il y a 2 ans, furosémide 20 mg. MMS 26/30. Pas de brûlures mictionnelles. ECBU récent négatif. Résidu post-mictionnel échographie 80 mL.',
    questions: [
      {
        q: 'Type d\'incontinence et limites de l\'oxybutynine.',
        a: 'Incontinence mixte (effort + urgenturie). Oxybutynine anticholinergique : efficacité urgenturie mais confusion, constipation aggravée, rétention, chutes (Beers). Résidu 80 mL = attention obstruction basse possible (prolapsus, sténose) + effet anticholinergique. Rechercher prolapsus à l\'examen.',
        points: 4
      },
      {
        q: 'Prise en charge non médicamenteuse et médicamenteuse.',
        a: 'Constipation traitée (fibres, laxatifs osmotiques). Rééducation périnéale, miction programmée, perte poids si IMC élevé. Arrêt ou réduction oxybutynine ; alternative mirabégron si urgenturie persistante (moins anticholinergique). Réévaluer furosémide (diurèse → urgenturie). Pas de double anticholinergique avec cognitif fragile.',
        points: 4
      },
      {
        q: 'Indications chirurgicales et suivi.',
        a: 'Chirurgie stress (bandelettes) si stress pur ou prédominant après échec rééducation, patiente opérable. Ici mixte : traiter composante urgenturie d\'abord. Suivi voiding diary, qualité de vie, escarres péri-anales si fuites importantes. Avis uro-gynécologie si résidu > 100 mL ou hématurie.',
        points: 3
      }
    ],
    juryTips: 'Incontinence mixte + anticholinergique + MMS 26 = piège iatrogénie. Toujours mesurer résidu post-mictionnel avant de poursuivre l\'oxybutynine.'
  },
  {
    id: 'evc21-3',
    year: 2021,
    chapter: 'ch17',
    difficulty: 'A',
    title: 'Cancer bronchique avancé — dyspnée et sédation',
    situation: 'M. Mercier, 78 ans, cancer bronchique métastatique osseux, soins palliatifs à domicile (SAP). Dyspnée au moindre effort, anxiété, morphine 30 mg/j en LP. Directives anticipées : pas de réanimation, pas de réhospitalisation pour acharnement. Famille demande « qu\'il ne souffre pas à la fin ». Conscience claire, EVA dyspnée 6.',
    questions: [
      {
        q: 'Traitement de la dyspnée en phase palliative.',
        a: 'Morphine faibles doses fractionnées (2,5–5 mg SC si besoin) même sans douleur thoracique — effet sur dyspnée centrale. Oxygène si hypoxie symptomatique (pas systématique). Ventilation, position demi-assise, anxiolyse (méthotrimeprazine faible dose). Traiter causes réversibles limitées (épanchement pleural ponction si confort).',
        points: 4
      },
      {
        q: 'Sédation profonde et continue : cadre légal et conditions.',
        a: 'Loi Claeys-Leonetti : sédation profonde et continue jusqu\'au décès si souffrance réfractaire ET demande expresse du patient (ou directives). Collegialité, traçabilité. Distinction vs euthanasie (interdite). Anticipation avec patient encore lucide : qui décide, quels symptômes cibles.',
        points: 5
      },
      {
        q: 'Rôle du médecin traitant et coordination SAP.',
        a: 'Prescription morphine et antalgiques, adaptation doses, kit urgence domicile, disponibilité téléphonique. Coordination infirmière SAP, aide-soignant, psychologue. Pas d\'abandon : soins bouche, escarres, présence. Deuil anticipé famille. Certificat décès et déclaration sans obstacle si processus connu.',
        points: 3
      }
    ],
    juryTips: 'Palliatif EVC : dyspnée traitée par morphine à faible dose. Citer souffrance réfractaire + demande expresse pour sédation, pas « euthanasie ».'
  },
  {
    id: 'evc21-4',
    year: 2021,
    chapter: 'ch3',
    difficulty: 'B',
    title: 'Perte d\'autonomie et évaluation ADL/IADL',
    situation: 'Mme Giraud, 85 ans, fille signale : oublis de cuisson (casserole brûlée), courses impossibles, hygiène partielle. Vit seule en appartement. ADL : toilette 1/1 (aide), habillage 0/1, continence 1/1, transferts 1/1, alimentation 1/1 → score partiel dépendance. IADL : 2/8. MMS 23/30. Pas de chute récente. Revenus modestes.',
    questions: [
      {
        q: 'Interprétation des scores et niveau de dépendance.',
        a: 'ADL partiellement altéré + IADL très bas = dépendance modérée domestique, risque isolement et malnutrition. MMS 23 : démence légère probable avec retentissement fonctionnel (pas plainte bénigne). Évaluer GIR approximatif pour orientation APA/EHPAD : souvent GIR 3–4 selon aide horaire.',
        points: 4
      },
      {
        q: 'Plan de maintien à domicile vs institution.',
        a: 'Maintien si sécurité acceptable : aide à domicile (ménage, toilette), portage repas, téléassistance, adaptation gaz/cuisson (coupe gaz), MDPH (APA). EHPAD si danger (feu, errance) ou épuisement aidant. Pas de placement sans évaluation sociale et consentement éclairé (tutelle si incapacité).',
        points: 4
      },
      {
        q: 'Bilan gériatrique complémentaire.',
        a: 'Vision, audition, dépression (GDS), nutrition (MNA), risque chute (Tinetti), iatrogénie. Bilon cognitif (4AT confusion, IRM si indication). Plan soins personnalisé, réunion famille, médecin coordonnateur ALZ si démence confirmée.',
        points: 3
      }
    ],
    juryTips: 'Autonomie = ADL + IADL + retentissement réel. Le jury attend des solutions concrètes (APA, sécurité cuisine) pas seulement « EHPAD ».'
  },
  {
    id: 'evc21-5',
    year: 2021,
    chapter: 'ch5',
    difficulty: 'A',
    title: 'Déficit visuel et auditif — retentissement sur les chutes',
    situation: 'M. Durand, 80 ans, 2 chutes en 2 mois dans l\'escalier. Cataracte bilatérale non opérée (« je vois assez »). Surdité non appareillée, téléphone volume maximal. Lunettes obsolètes (> 5 ans). Tinetti 14/28. MMS 27/30. Pas de hypotension orthostatique mesurée initialement.',
    questions: [
      {
        q: 'Lien entre déficits sensoriels et chutes ; bilan à prescrire.',
        a: 'Déficit visuel : profondeur, contraste, obstacles (escalier). Surdité : équilibre (oreille interne), alertes environnement. Bilan : acuité visuelle, réfraction, fond œil, consultation ophtalmo cataracte ; audiogramme, orientation ORL/audioprothèse. Réévaluation lunettes. Mesure PA orthostatique obligatoire en parallèle.',
        points: 5
      },
      {
        q: 'Conduite concernant la cataracte et l\'appareillage auditif.',
        a: 'Cataracte symptomatique + retentissement ADL/chutes = indication chirurgicale même à 80 ans si bilan cardio OK. Bénéfice rapide sur contraste. Appareillage auditif après audiogramme, essai 30 jours, rééducation auditive. Vérifier compatibilité avec éventuelle pacemaker (IRM).',
        points: 4
      },
      {
        q: 'Adaptations domicile et communication.',
        a: 'Éclairage escaliers, bandes contrastées, retrait obstacles, sonnette lumineuse/vibration, téléphone amplifié, écrire consignes si besoin. Kiné équilibre après correction sensorielle. Ne pas attribuer chutes qu\'à l\'âge seul.',
        points: 3
      }
    ],
    juryTips: 'Sensoriel sous-estimé aux EVC. Cataracte opérable à 80 ans + chutes = indication. Mesurer PA debout dans tout cas de chute.'
  },
  {
    id: 'evc22-1',
    year: 2022,
    chapter: 'ch6',
    difficulty: 'B',
    title: 'Fractures vertébrales ostéoporotiques multiples',
    situation: 'Mme Vasseur, 76 ans, lombalgies aiguës après effort de soulèvement (sac courses). Cyphose thoracique progressive connue. IMC 19. Traitement : calcium OTC irrégulier, pas de vitamine D prescrite. DFG 48. Radiographie : tassement T12 et L2 récent. Pas de déficit neurologique.',
    questions: [
      {
        q: 'Diagnostic et recherche de causes secondaires.',
        a: 'Fractures vertébrales ostéoporotiques (tassements en galette). Causes secondaires : myélome (NFS, protéine monoclonale), hyperparathyroïdie (Ca, PTH), corticoïdes, hypogonadisme. IMC bas = risque. DXA + bilan biologique minimal avant traitement spécifique.',
        points: 4
      },
      {
        q: 'Traitement antalgique et orthopédique aigu.',
        a: 'Paracétamol + AINS courte durée si DFG et RGO OK, ou tramadol court terme seulement. Éviter alitement prolongé (risque thrombose, déconditionnement). Corset si douleur majeure (avis kiné). Pas de corset systématique long cours. Mobilisation précoce douce.',
        points: 4
      },
      {
        q: 'Traitement de l\'ostéoporose à moyen terme (IRC modérée).',
        a: 'Vit D 800 UI + calcium si apports < 800 mg. Dénosumab 60 mg/6 mois ou zoledronate annuel si DFG > 35 ; éviter bisphosphonate oral si œsophagite. Teriparatide si fractures sévères récidivantes (durée limitée). Rééducation posture, renforcement paravertébral, prévention chutes.',
        points: 4
      }
    ],
    juryTips: 'Fracture vertébrale = ne pas immobiliser des semaines. Adapter anti-ostéoporotique au DFG (dénosumab souvent cité en 2022).'
  },
  {
    id: 'evc22-2',
    year: 2022,
    chapter: 'ch7',
    difficulty: 'A',
    title: 'Coxarthrose et indication de prothèse chez le sujet fragile',
    situation: 'M. Bonnet, 81 ans, douleur hanche droite invalidante, distance marche < 100 m, canne permanente. Rx : pincement joint coxo-fémoral, géodésie. ATCD : BPCO modérée, FEVG 50 %. Traitement : paracétamol inefficace, morphine 10 mg/j depuis 3 mois (prescrit aux urgences). MNA 20/30. GDS 8/15.',
    questions: [
      {
        q: 'Évaluation pré-opératoire chez le sujet âgé fragile.',
        a: 'Risque per-op : BPCO (bilan respi, sevrage tabac), cardiaque (écho récente), dénutrition (optimiser avant chirurgie), morphine (perte autonomie, confusion). Évaluation gériatrique : objectif prothèse si gain fonction > risques. Score ASA, avis anesthésie. Pas d\'âge seul comme contre-indication.',
        points: 4
      },
      {
        q: 'Pourquoi réduire la morphine avant chirurgie et alternative douleur.',
        a: 'Morphine chronique : tolérance, sédation, constipation, retard rééducation post-op. Optimiser paracétamol 3 g, AINS si possible, infiltration, kiné. Protocole analgésie multimodale per-op. Sevrage morphine progressif si faible dose.',
        points: 4
      },
      {
        q: 'Rééducation post-prothèse et objectifs réalistes.',
        a: 'Kiné préhabilitation si délai chirurgie. Post-op : lever J1 selon protocole, prévention luxation (consignes), anticoagulation 35 j, surveillance confusion post-op. Objectif : marche intérieur autonome, pas course. SSR si retour domicile impossible seul.',
        points: 3
      }
    ],
    juryTips: 'Coxarthrose + morphine = mauvaise analgésie de fond. Le jury attend évaluation gériatrique pré-op, pas refus automatique à 81 ans.'
  },
  {
    id: 'evc22-3',
    year: 2022,
    chapter: 'ch12',
    difficulty: 'A',
    title: 'Syndrome post-chute et peur de rechuter',
    situation: 'Mme Colin, 79 ans, chute avec fracture humérus traitée orthopédiquement il y a 6 semaines. Depuis : ne sort plus, peur de marcher (échelle FES-I élevée). ADL dégradés. Traitement inchangé : zolpidem 10 mg, citalopram 20 mg. Tinetti 11/28. Pas de nouvelle mesure PA debout depuis la chute.',
    questions: [
      {
        q: 'Définir syndrome post-chute et facteurs psychologiques.',
        a: 'Réduction activité, peur de chuter (kinesiophobie), déconditionnement, risque rechute accru. FES-I utile. Dépression/anxiété (citalopram) peut coexister. Zolpidem : chutes nocturnes (Beers). Cercle : peur → immobilité → faiblesse → rechute.',
        points: 4
      },
      {
        q: 'Programme de réentraînement à la marche.',
        a: 'Kiné progressive : renforcement, équilibre, exposition graduée aux situations évitées. Aidant rassurant mais pas surprotection. Arrêt zolpidem (sevrage), hygiène sommeil. Rééducation humérus selon protocole. Vitamine D si carence.',
        points: 4
      },
      {
        q: 'Bilan médical complémentaire de la chute initiale.',
        a: 'Refaire PA couché/debout, glycémie, vision, revue médicaments (zolpidem, psychotropes). Holter si palpitations. Pas d\'IRM cérébrale systématique si chute mécanique claire. Documenter plan prévention personnalisé.',
        points: 3
      }
    ],
    juryTips: 'Post-chute = peur + déconditionnement. Zolpidem est le piège 2022. Proposer réentraînement concret, pas seulement « rassurer ».'
  },
  {
    id: 'evc22-4',
    year: 2022,
    chapter: 'ch8',
    difficulty: 'B',
    title: 'Douleur lombaire chronique et polymédication',
    situation: 'M. André, 83 ans, lombalgies chroniques depuis 15 ans, pas de sciatalgie actuelle. Épisodes de lombosciatique passés. Traitement : paracétamol-codeine 500/30 x4/j, diazepam 5 mg x2, cyclobenzaprine (myorelaxant) non disponible — remplacé par baclofène 10 mg x3. Constipation sévère, MMS 25/30. Rx : discarthrose L4-L5.',
    questions: [
      {
        q: 'Analyse iatrogénie et critères de Beers.',
        a: 'Codéine opioïde faible : constipation, confusion, chutes. Diazepam BZD : sédation, dépendance. Baclofène : sédation, chutes. Association = cascade (constipation → effort → douleur). Lombalgie chronique : éviter opioïdes long cours en première intention chez > 75 ans.',
        points: 5
      },
      {
        q: 'Stratégie analgésique non opioïde et sevrage.',
        a: 'Paracétamol seul 3 g/j, kiné, activité physique adaptée, TCC douleur si accès. Réduction codéine 25 %/semaine, laxatifs osmotiques. Sevrage diazepam par équivalence diazépam paliers. Arrêt baclofène progressif. Infiltration épidurale si radiculalgie aiguë limitée.',
        points: 4
      },
      {
        q: 'Signes de gravité nécessitant imagerie urgente.',
        a: 'Syndrome queue de cheval, déficit moteur progressif, fièvre + lombalgie (spondylodiscite), cancer connu, traumatisme majeur, incontinence/sphincter. Ici lombalgie chronique stable : pas d\'IRM urgente ; IRM si signes neurologiques ou échec 6 semaines traitement bien conduit.',
        points: 3
      }
    ],
    juryTips: 'Lombalgie chronique + codéine + BZD = classique EVC iatrogénie. Le jury veut un plan de déprescription chiffré, pas un nouvel opioïde.'
  },
  {
    id: 'evc22-5',
    year: 2022,
    chapter: 'ch10',
    difficulty: 'B',
    title: 'Dépression et refus de soins chez l\'EHPAD',
    situation: 'Mme Henry, 87 ans, entrée EHPAD il y a 2 mois après hospitalisation pour déshydratation. Refuse soins d\'hygiène, agressivité verbale aux soignants, isolement chambre. GDS-15 14/15. MMS 18/30 (démence modérée Alzheimer). Pas de douleur identifiée. Traitement : donepezil 10 mg, quétiapine 25 mg le soir « pour dormir ».',
    questions: [
      {
        q: 'Dépression vs comportement de démence : approche diagnostique.',
        a: 'Chez démence modérée, dépression fréquente (GDS 14 très évocateur) : apathie, pleurs, refus soins peuvent être mixtes. Évaluer douleur non verbale (Algoplus). Quétiapine : sédation, risque AVC/mortalité démence (hors indication psychose validée). Donepezil ne traite pas dépression.',
        points: 4
      },
      {
        q: 'Traitement de la dépression en EHPAD avec démence.',
        a: 'ISRS sertraline 12,5–25 mg (titration lente), surveillance hyponatrémie. Non pharma : activités adaptées, lien familial, routine, lumière matinale. Éviter antipsychotiques pour comportement sans danger immédiat ; si agitation : causes réversibles (infection, constipation, douleur) d\'abord.',
        points: 4
      },
      {
        q: 'Communication avec l\'équipe et la famille.',
        a: 'Réunion soignants : plan soins cohérent, pas de confrontation. Famille : explication dépression comorbide, limites quétiapine. Objectifs réalistes (confort, participation aux soins doux). Réévaluation GDS à 6 semaines. Directive soins si agitation majeure (sédation exceptionnelle collegiale).',
        points: 3
      }
    ],
    juryTips: 'EHPAD + GDS 14 + démence = traiter la dépression, pas augmenter quétiapine. Citer HAS sur antipsychotiques en démence.'
  }
];