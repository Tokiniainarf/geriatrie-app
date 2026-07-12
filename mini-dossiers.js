// Mini-dossiers progressifs — Cas cliniques avec étapes de révélation
const MINI_DOSSIERS = [
  { id: 'md-1', titre: 'Patient polytraumatisé âgé — étape 1',
    etape: 1, contenu: 'M. Martin, 82 ans, amené par le SAMU pour chute dans l\'escalier. Inconscient à l\'arrivée. PA 85/50, FC 110, T° 35.8°C, SpO2 89%. Fracture ouverte tibia droit. ATCD: HTA, diabète, BPCO. Traitement: amlodipine, metformine, salbutamol.',
    question: 'Quels sont vos 3 premières actions ?', reponse: '1. ABCDE: voie aérienne, oxygène, 2 voies veineuses. 2. Remplissage NaCl 500mL. 3. Bilan lésionnel (FAST, Rx, NFS, iono, groupage).' },
  { id: 'md-2', titre: 'Patient polytraumatisé âgé — étape 2',
    etape: 2, contenu: 'Bilan: Hb 9.2 g/dL, Plaquettes 98, Créatinine 180 µmol/L (DFG 28), K 5.8 mmol/L, Lactates 4.2 mmol/L. FAST positif (épanchement abdominal). Scanner: fracture bassin, hémopéritoine, contusion rénale gauche.',
    question: 'Quelle stratégie thérapeutique ?', reponse: '1. Urgence vitale: transfusion (2 CGR), correction K (gluconate Ca + insuline). 2. Avis chirurgical urgent (hémopéritoine). 3. Adaptation doses (DFG 28). 4. Surveiller lactates.' },
  { id: 'md-3', titre: 'Patient polytraumatisé âgé — étape 3',
    etape: 3, contenu: 'À J3 postopératoire : conscient et stable sur le plan hémodynamique, mais confus la nuit et arrachant son dispositif de drainage. MMS préopératoire 25/30. T° 38,2 °C. CRP 185 mg/L. ECBU positif à E. coli. Escarre sacrée de stade I.',
    question: 'Gérez la confusion et l\'escarre.', reponse: 'Confusion = delirium post-op + infection (ECBU positif). Traitement: antibio (amox-clav), halopéridol 0.5mg si agitation, réorientation. Escarre: matelas anti-escarres, changement position H2, soins locaux.' },
  { id: 'md-4', titre: 'Mme Dupont, 78 ans — consultation gériatrique étape 1',
    etape: 1, contenu: 'Mme Dupont consulte pour "n\'est plus comme avant". Sa fille rapporte: oublis fréquents (rendez-vous, prénoms), ne cuisine plus, a perdu 5 kg en 3 mois, ne sort plus. Vit seule depuis le décès de son mari il y a 8 mois. ATCD: HTA, dépression traitée (sertraline 50mg).',
    question: 'Quelle évaluation proposez-vous ?', reponse: '1. MMS + GDS-15 + ADL/IADL + MNA. 2. Examen clinique complet. 3. Bilan: NFS, TSH, B12, créatinine, albumine. 4. Rechercher deuil pathologique. 5. Évaluer isolement social.' },
  { id: 'md-5', titre: 'Mme Dupont — étape 2',
    etape: 2, contenu: 'Résultats: MMS 21/30, GDS-15 14/15, ADL 5/6, IADL 3/8, MNA 18/30. Albumine 28 g/L. TSH normale, B12 normale. IRM: atrophie hippocampique bilatérale modérée.',
    question: 'Quel diagnostic et quelle prise en charge ?', reponse: '1. Dépression majeure (GDS 14) + probable démence débutante (MMS 21, atrophie hippocampique). 2. Pseudodémence vs démence: traiter la dépression d\'abord. 3. Sertraline 50→100mg. 4. Nutrition: enrichissement + CNO. 5. Réévaluation MMS à 3 mois.' }
];
