// Tableaux comparatifs — Aide-mémoire visuel pour l'examen
const TABLEAUX_COMPARATIFS = [
  { id: 'tc-1', titre: 'Types de démences',
    colonnes: ['Critère', 'Alzheimer', 'Corps de Lewy', 'Fronto-temporale', 'Vasculaire'],
    lignes: [
      { cellules: ['Prévalence', '60-70%', '10-15%', '5-10%', '15-20%'] },
      { cellules: ['Début', 'Insidieux', 'Subaigu/Fluctuant', 'Précoce (50-60 ans)', 'En marches'] },
      { cellules: ['Mémoire', 'Atteinte précoce', 'Variable', 'Préservée initialement', 'Exécutive > mémoire'] },
      { cellules: ['Signes clés', 'Aphasie, apraxie', 'Hallucinations + Parkinson', 'Changement comportemental', 'Déficits focaux'] },
      { cellules: ['Traitement', 'Cholinestérasiques', 'Cholinestérasiques (MEILLEUR)', 'ISRS', 'Prévention cardio'] },
      { cellules: ['CI absolue', '—', 'Neuroleptiques !', 'Cholinestérasiques', '—'] }
    ], notes: 'DLB = neuroleptiques CONTRE-INDIQUÉS (hypersensibilité)' },
  { id: 'tc-2', titre: 'ISRS vs IRSN vs Tricycliques',
    colonnes: ['Critère', 'ISRS (sertraline)', 'IRSN (venlafaxine)', 'Tricycliques (amitriptyline)'],
    lignes: [
      { cellules: ['Mécanisme', 'Bloque recapture sérotonine', 'Sérotonine + noradrénaline', 'Sérotonine + NA + anticholinergique'] },
      { cellules: ['Efficacité', 'Bonne', 'Bonne (douleur aussi)', 'Bonne mais effets secondaires'] },
      { cellules: ['Effets SA', 'Hyponatrémie, saignements', 'HTA, nausées', 'Confusion, constipation, rétention, chute'] },
      { cellules: ['Sujet âgé', '1ère ligne ✅', '2ème ligne', 'CONTRE-INDIQUÉ (Beers) ❌'] },
      { cellules: ['Délai action', '4-6 semaines', '4-6 semaines', '2-4 semaines'] }
    ], notes: 'Tricycliques = Beers criteria. ISRS = 1ère ligne sujet âgé.' },
  { id: 'tc-3', titre: 'Types d\'incontinence',
    colonnes: ['Type', 'Mécanisme', 'Symptôme', 'Traitement 1ère ligne'],
    lignes: [
      { cellules: ['Effort', 'Sphincter faible', 'Fuite à l\'effort (toux, rire)', 'Rééducation périnéale'] },
      { cellules: ['Urgence', 'Détrusor hyperactif', 'Impériosité, fuite urgente', 'Anticholinergiques'] },
      { cellules: ['Mixte', 'Les deux', 'Effort + urgence', 'Rééducation + anticholinergiques'] },
      { cellules: ['Par regorgement', 'Rétention chronique', 'Globe vésical, goutte-à-goutte', 'Sondage, traiter cause'] },
      { cellules: ['Fonctionnelle', 'Cognitive/mobilité', 'Ne arrive pas à temps', 'Aide toilettes, horaires'] }
    ], notes: 'Évaluer TOUJOURS le type avant de prescrire. Calendrier mictionnel = outil de base.' },
  { id: 'tc-4', titre: 'Critères de Beers — Top 10',
    colonnes: ['Classe', 'Exemples', 'Risque', 'Alternative'],
    lignes: [
      { cellules: ['BZD', 'Diazépam, lorazépam', 'Chutes, confusion', 'Mélatonine, hydroxyzine'] },
      { cellules: ['Anticholinergiques', 'Amitriptyline, diphénhydramine', 'Confusion, constipation', 'ISRS'] },
      { cellules: ['AINS', 'Ibuprofène, diclofénac', 'IRA, HAD, HTA', 'Paracétamol → tramadol'] },
      { cellules: ['Digoxine > 0.125mg', 'Digoxine', 'Toxicité (arythmie)', '0.0625-0.125mg/j'] },
      { cellules: ['Antipsychotiques', 'Halopéridol, quétiapine', 'AVC, mortalité', 'Pas d\'alternative sûre'] },
      { cellules: ['Relaxants', 'Cyclobenzaprine, méthocarbamol', 'Sédation, confusion', 'Kinésithérapie'] }
    ], notes: 'Les critères de Beers sont une liste de médicaments inappropriés chez > 65 ans.' },
  { id: 'tc-5', titre: 'Trajectoires de fin de vie',
    colonnes: ['Type', 'Évolution', 'Durée', 'Prise en charge'],
    lignes: [
      { cellules: ['Cancer', 'Déclin progressif et prévisible', 'Mois', 'Soins palliatifs programmés'] },
      { cellules: ['Maladie dégénérative', 'En dents de scie (chutes/reprises)', 'Années', 'Ajustement progressif'] },
      { cellules: ['Vieillesse fragide', 'Déclin lent puis terminal', 'Mois-années', 'Accompagnement global'] },
      { cellules: ['Défaillance d\'organe', 'Épisodes aigus puis stabilisation', 'Années', 'Réanimation + palliatif'] }
    ], notes: 'Identifier la trajectoire = adapter la communication et les décisions thérapeutiques.' }
];
