// Protocoles de soins de la personne âgée en court séjour — Spécialités
const PROTOCOLES_SPECIALITES = [
  { id: 'psp-1', titre: 'Gériatrie et cardiologie', protocole: '1. HTA: cible 130-140/80-90 chez > 75 ans. 2. FA: anticoagulation si CHA2DS2-VASc ≥ 2. 3. IC: diurétiques + IEC + bêtabloquants. 4. SCA: revascularisation si bénéfice attendu. 5. Éviter AINS.',
    surveillance: 'PA. FC. Poids. Fonction rénale. NYHA.' },
  { id: 'psp-2', titre: 'Gériatrie et neurologie', protocole: '1. AVC: thrombolyse si < 4.5h. 2. Alzheimer: cholinestérasiques. 3. Parkinson: lévodopa. 4. Épilepsie: éviter valproate (tremblements). 5. Éviter BZD.',
    surveillance: 'NIHSS. MMS. UPDRS. EEG. Constantes.' },
  { id: 'psp-3', titre: 'Gériatrie et pneumologie', protocole: '1. BPCO: bronchodilatateurs + corticoïdes inhalés. 2. Pneumopathie: antibiothérapie adaptée. 3. EP: anticoagulation. 4. Oxygénothérapie: cible 88-92% si BPCO.',
    surveillance: 'SpO2. FR. Spirométrie. Rx thoracique.' },
  { id: 'psp-4', titre: 'Gériatrie et néphrologie', protocole: '1. DFG: adapter les doses. 2. IRA: arrêter néphrotoxiques. 3. Hyperkaliémie: gluconate Ca + insuline. 4. Acidose: bicarbonates. 5. Dialyse si indication.',
    surveillance: 'Créatinine. DFG. K. Na. Diurèse.' },
  { id: 'psp-5', titre: 'Gériatrie et gastro-entérologie', protocole: '1. HAD: IPP. 2. Cirrhose: diurétiques + lactulose. 3. Constipation: macrogol. 4. Diarrhée: réhydratation + C. difficile. 5. Hémorragie: endoscopie.',
    surveillance: 'Transit. Poids. Bilan hépatique. Albumine.' },
  { id: 'psp-6', titre: 'Gériatrie et rhumatologie', protocole: '1. Arthrose: paracétamol + kiné. 2. Ostéoporose: Vit D + Ca + biphosphonate. 3. Polyarthrite: DMARDs. 4. Goutte: colchicine. 5. Éviter AINS.',
    surveillance: 'Douleur. Densitométrie. NFS. Bilan hépatique.' },
  { id: 'psp-7', titre: 'Gériatrie et endocrinologie', protocole: '1. Diabète: HbA1c < 8%. 2. Hypothyroïdie: L-T4. 3. Ostéoporose: traitement. 4. Surrénale: hydrocortisone. 5. Éviter hypoglycémies.',
    surveillance: 'Glycémie. HbA1c. TSH. Densitométrie.' },
  { id: 'psp-8', titre: 'Gériatrie et oncologie', protocole: '1. Évaluation gériatrique avant chimio. 2. Réduire doses si fragilité. 3. Prévention NVPO. 4. Soins palliatifs si stade avancé. 5. Autonomie > survie.',
    surveillance: 'NFS. Bilan hépatique. Poids. Autonomie. Douleur.' }
];
