// Interactions médicamenteuses critiques en gériatrie
const INTERACTIONS_CRITIQUES = [
  { id: 'int-1', drugA: 'Warfarine', drugB: 'Amiodarone', risque: '↑↑ INR (x2)', action: 'Réduire warfarine de 50%, surveiller INR H3' },
  { id: 'int-2', drugA: 'Metformine', drugB: 'Produit de contraste iodé', risque: 'Acidose lactique', action: 'Arrêter metformine 48h avant scanner, reprendre si créatinine normale' },
  { id: 'int-3', drugA: 'IEC/ARA2', drugB: 'AINS', risque: 'Insuffisance rénale aiguë', action: 'Éviter association. Si nécessaire: surveillance créatinine + iono H48' },
  { id: 'int-4', drugA: 'Digoxine', drugB: 'Amiodarone', risque: '↑↑ digoxine (x2)', action: 'Réduire digoxine de 50%, dosage plasmatique' },
  { id: 'int-5', drugA: 'Sertraline', drugB: 'Tramadol', risque: 'Syndrome sérotoninergique', action: 'Éviter association. Alternative: paracétamol + morphine' },
  { id: 'int-6', drugA: 'BZD', drugB: 'Opioïdes', risque: 'Dépression respiratoire', action: 'CI absolue. Arrêter BZD si opioïde nécessaire' },
  { id: 'int-7', drugA: 'Amlodipine', drugB: 'Simvastatine', risque: '↑↑ simvastatine', action: 'Max simvastatine 20mg/j avec amlodipine' },
  { id: 'int-8', drugA: 'Anticholinergiques', drugB: 'Inhibiteurs cholinestérasiques', risque: 'Antagonisme direct', action: 'CI. Arrêter amitriptyline avant donépézil' },
  { id: 'int-9', drugA: 'Spironolactone', drugB: 'IEC + ARA2', risque: 'Hyperkaliémie sévère', action: 'Éviter trithérapie. Surveillance K+ hebdomadaire' },
  { id: 'int-10', drugA: 'Méthotrexate', drugB: 'AINS', risque: '↑↑ méthotrexate (toxicité)', action: 'Éviter. Si nécessaire: surveillance NFS + hépato H15' },
  { id: 'int-11', drugA: 'Fluoroquinolones', drugB: 'Corticoïdes', risque: 'Tendinopathie (rupture tendon)', action: 'Éviter chez >60 ans. Alternative: amoxicilline' },
  { id: 'int-12', drugA: 'Omeprazole', drugB: 'Clopidogrel', risque: '↓↓ efficacité clopidogrel (CYP2C19)', action: 'Remplacer oméprazole par pantoprazole' }
];
