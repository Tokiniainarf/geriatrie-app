// Protocoles de nutrition artificielle — Guide complet
const PROTOCOLES_NUTRITION = [
  { id: 'pn-1', titre: 'Enrichissement alimentaire', indication: 'MNA 17-23.5 (risque) ou perte poids modérée',
    protocole: '1. Ajouter crème fraîche, beurre, fromage râpé aux plats. 2. Compléter avec yaourt entier + miel. 3. Œufs mollets entre les repas. 4. Fromage en collation. 5. Pain trempé dans huile d\'olive.',
    surveillance: 'Poids hebdomadaire. MNA mensuel. Albumine trimestrielle.' },
  { id: 'pn-2', titre: 'Compléments nutritionnels oraux (CNO)', indication: 'MNA < 17 ou perte poids > 5%/mois',
    protocole: '1. Fresubin 2kcal (200mL, 400kcal) x2-3/j. 2. Delical (400mL, 600kcal) x2/j. 3. Entre les repas (pas pendant). 4. Choisir goût apprécié. 5. Si refus: essayer différents goûts.',
    surveillance: 'Poids hebdomadaire. MNA mensuel. Tolérance digestive.' },
  { id: 'pn-3', titre: 'Nutrition entérale par SNG', indication: 'Dénutrition sévère + impossibilité oral > 7 jours',
    protocole: '1. Pose SNG (vérifier position: pH < 5 ou Rx). 2. Débit initial: 20mL/h. 3. Augmenter de 20mL toutes les 12h. 4. Objectif: 50-60mL/h (1200-1500 kcal/j). 5. Position semi-assise (30°). 6. Aspiration gastrique avant chaque bolus.',
    surveillance: 'Résidu gastrique (aspirer avant chaque bolus). Glycémie. Ionogramme. Transit. Poids.' },
  { id: 'pn-4', titre: 'Nutrition parentérale (NP)', indication: 'Insuffisance intestinale ou contre-indication NE',
    protocole: '1. Voie veineuse centrale (PICC ou cathéter central). 2. Débit: 25-35 kcal/kg/j. 3. Protéines: 1.2-1.5g/kg/j. 4. Lipides: 30-40% des calories. 5. Glucides: 50-60%. 6. Oligo-éléments + vitamines.',
    surveillance: 'Glycémie H6. Ionogramme quotidien. Bilan hépatique. PN. Température (infection cathéter).' },
  { id: 'pn-5', titre: 'Sevrage nutrition entérale', indication: 'Reprise alimentation orale progressive',
    protocole: '1. Tester texture mixée d\'abord. 2. Si toléré: texture normale. 3. Réduire NE de 50%. 4. Si toléré 48h: arrêt NE. 5. Si non toléré: reprendre NE 100%. 6. CNO en complément.',
    surveillance: 'Poids. MNA. Transit. Aspiration (toux pendant repas).' },
  { id: 'pn-6', titre: 'Hydratation', indication: 'Tout sujet âgé hospitalisé ou en EHPAD',
    protocole: '1. Objectif: 1.5L/j minimum. 2. Eau, tisanes, bouillon, jus. 3. Fractionner (8 verres/j). 4. Si refus: eau aromatisée. 5. Si déshydratation: NaCl 0.9% IV 500mL. 6. Surveillance: urine claire = bien hydraté.',
    surveillance: 'Diurèse. Poids. Ionogramme. Créatinine. Peau (turgescence).' }
];
