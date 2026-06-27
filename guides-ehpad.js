// Guides EHPAD — Pratique quotidienne en établissement d'hébergement
const GUIDES_EHPAD = [
  {
    id: 'ehpad-1',
    titre: 'Admission en EHPAD : parcours et évaluation initiale',
    categorie: 'Admission',
    contenu: 'L\'admission marque le début du projet de vie en établissement. Elle doit être structurée sur 15 à 30 jours (période d\'adaptation).\n\nAVANT L\'ENTRÉE :\n- Dossier médical : synthèse hospitalière, traitements, allergies, vaccins, directives anticipées, personne de confiance.\n- Évaluation GIR (groupes iso-ressources) par le médecin coordonnateur.\n- Contrat d\'hébergement et notice d\'information.\n\nJOUR J :\n- Accueil résident + famille (chambre, règlement intérieur, horaires).\n- Inventaire effets personnels.\n- Transmission ciblée (IDE référente, AS, psychomotricien si besoin).\n\nÉVALUATION INITIALE (72 h – 15 j) :\n- Grilles : AGGIR (dépendance), échelles douleur, risque escarre (Norton/Braden), nutrition (MNA), cognition (MMS ou EVA cognitive), chutes (historique + Tinetti si possible).\n- Bilan médicamenteux avec médecin traitant et pharmacie.\n- Évaluation capacités (marche, transferts, continence, communication).\n- Entretien projet de vie : habitudes, préférences alimentaires, culture, spiritualité.\n\nDOCUMENTATION :\n- Projet de soins individualisé (PSI) amorcé.\n- Transmission oral structurée entre équipes.\n- Signalement famille : fréquence visites, personnes à contacter en urgence.',
    points_cles: ['GIR + AGGIR à l\'entrée', 'MNA, escarres, chutes dès J1', 'DA et personne de confiance', 'Période d\'adaptation 15–30 j']
  },
  {
    id: 'ehpad-2',
    titre: 'Rédiger et mettre à jour le projet de soins individualisé (PSI)',
    categorie: 'Projet de soins',
    contenu: 'Le PSI traduit les objectifs thérapeutiques et le quotidien du résident. Il est obligatoire et révisable à tout moment.\n\nCONTENU MINIMAL :\n1. Identité, pathologies, allergies, traitements.\n2. Évaluation dépendance (GIR, secteur soins).\n3. Objectifs par domaine : nutrition, mobilité, cognition, comportement, douleur, peau, élimination, sommeil, social.\n4. Actions concrètes : qui fait quoi, quand (ex. : lever 7 h, aide partielle toilette, texture alimentaire IDDSI 4).\n5. Indicateurs de suivi : poids mensuel, escarres, chutes, comportements.\n\nMÉTHODE :\n- Concertation pluridisciplinaire (médecin coordonnateur, IDE, AS, kiné, psychologue, diététicien, animateur).\n- Implication résident / famille selon capacités et accord.\n- Objectifs SMART : spécifiques, mesurables, réalistes, temporels.\n\nEXEMPLE OBJECTIF :\n« Maintenir autonomie alimentaire 3 mois : texture mixée homogène, aide setup repas, surveillance fausse route, poids stable ± 1 kg. »\n\nRÉVISION :\n- Au moins trimestrielle ou après événement (chute, hospitalisation, agitation, décès conjoint).\n- Trace écrite des modifications + information famille si changement majeur.',
    points_cles: ['Pluridisciplinaire obligatoire', 'Objectifs mesurables par domaine', 'Révision trimestrielle ou événement', 'Lien avec plan de prévention']
  },
  {
    id: 'ehpad-3',
    titre: 'Organiser une réunion de concertation pluriprofessionnelle (RCP)',
    categorie: 'Réunion RCP',
    contenu: 'La RCP structure la décision complexe (comportement, fin de vie, hospitalisation, nutrition artificielle, contention).\n\nQUAND CONVOCQUER :\n- Agitation réfractaire, risque pour autrui.\n- Refus de soins répété.\n- Dénutrition sévère / dysphagie / sonde.\n- Escarre stade III–IV.\n- Sortie d\'hospitalisation avec changement de projet.\n- Sédation ou limitation thérapeutique envisagée.\n\nPARTICIPANTS :\n- Médecin coordonnateur (anime), IDE, AS référents, kiné, psychologue, psychiatre liaison si besoin, direction (selon sujet), famille / personne de confiance (sauf opposition résident).\n\nDÉROULÉ TYPE (45–60 min) :\n1. Rappel situation médicale et fonctionnelle (faits).\n2. Avis de chaque professionnel.\n3. Volontés du résident (directes ou antérieures).\n4. Options thérapeutiques : bénéfices/risques.\n5. Décision collégiale + plan d\'action + date réévaluation.\n6. Compte rendu dans dossier + courrier famille si pertinent.\n\nBONNES PRATIQUES :\n- Pas de décision uniquement par téléphone famille.\n- Traçabilité légale (Loi Claeys-Leonetti si fin de vie).\n- Réévaluation datée.',
    points_cles: ['Décision collégiale écrite', 'Famille informée pas décideuse seule', 'Indications : agitation, nutrition, fin de vie', 'CR dans dossier médical']
  },
  {
    id: 'ehpad-4',
    titre: 'Gérer l\'agitation et les troubles du comportement (TNC)',
    categorie: 'Gestion agitation',
    contenu: 'L\'agitation touche 30–50 % des résidents cognitifs. Approche en cascade : cause → environnement → non médicamenteux → médicamenteux court.\n\nRECHERCHE DE CAUSE (DEMAND) :\n- Douleur (ECPA), constipation, infection, déshydratation, rétention urine.\n- Delirium (CAM), iatrogénie (anticholinergiques, BZD).\n- Ennui, surstimulation, changement personnel/chambre.\n\nMESURES NON MÉDICAMENTEUSES :\n- Routine stable, identification soignants.\n- Activités adaptées (musicothérapie, marche, tactile).\n- Réduction bruit, éclairage adapté.\n- Valorisation rôles (pliage serviettes, jardinage léger).\n- Formation équipe : communication validation, ne pas contredire frontalement.\n\nMÉDICAMENTEUX (si danger ou souffrance) :\n- Dernière ligne, dose minimale, durée courte.\n- Éviter antipsychotiques au long cours (mortalité, AVC).\n- Halopéridol faible dose si psychose sévère ; pas de BZD sauf sevrage.\n- Traçabilité RCP si traitement > 2 semaines.\n\nSÉCURITÉ :\n- Pas de contention physique sauf urgence extrême et alternative échouée (réglementation stricte).\n- Alerte direction et famille si risque blessure.',
    points_cles: ['DEMAND / causes réversibles', 'Non médicamenteux en premier', 'Antipsychotiques courts et tracés', 'Contention = exception réglementée']
  },
  {
    id: 'ehpad-5',
    titre: 'Prévention et prise en charge des escarres',
    categorie: 'Prévention escarres',
    contenu: 'Les escarres sont un indicateur de qualité et un risque médico-légal. Prévention = organisation + soins.\n\nDÉPISTAGE :\n- Score Norton ou Braden à l\'admission puis hebdomadaire si risque.\n- Inspection peau quotidienne (sacrum, talons, trochanters, omoplates, occiput).\n\nPRÉVENTION NIVEAU 1 (tous résidents à risque) :\n- Changement position toutes les 3–4 h, repositionnement 30°.\n- Matelas adapté (mousse haute densité ou air si score très bas).\n- Nutrition : protéines, hydratation.\n- Élimination incontinence gérée (changes, protection sans macération).\n- Pas de massage vigoureux sur prominences.\n\nSTADES (NPUAP) :\n- Stade I : érythème non blanchissant → prévention renforcée.\n- Stade II : perte partielle épiderme → pansement protecteur, pas détersion agressive.\n- Stade III–IV : avis IDE spécialisée, détersion si nécrose, coussin air, RCP si stagne.\n\nTRAÇABILITÉ :\n- Photographie si protocole établissement, mesures (L×l×profondeur).\n- Fiche escarre + objectifs PSI.\n- Signalement famille et médecin traitant.',
    points_cles: ['Braden/Norton régulier', 'Repositionnement + matelas', 'Stade II = pas sous-estimer', 'Photos et mesures si escarre']
  },
  {
    id: 'ehpad-6',
    titre: 'Nutrition et hydratation en EHPAD',
    categorie: 'Nutrition',
    contenu: '30–60 % des résidents présentent dénutrition ou risque. La prise en charge est transversale.\n\nDÉPISTAGE :\n- MNA complet ou court mensuel si risque.\n- Poids mensuel (± 2 % en 1 mois = alerte).\n- Observation repas : temps, aide, plaisir, dysphagie.\n\nACTIONS :\n- Affiche régime et textures IDDSI à chaque repas.\n- Enrichissement (beurre, crème, fromage) sur prescription diététicien.\n- CNO entre repas si apports < besoins (préférence goût résident).\n- Fractionnement 5–6 prises.\n- Ambiance conviviale, temps suffisant (45 min minimum).\n\nDYSPHAGIE :\n- Avis orthophoniste, liquides épaissis, médicaments adaptés.\n- Surveillance toux, pneumonies répétées.\n\nHYDRATATION :\n- Objectif 1,5 L/j si pas restriction cardiaque/rénale.\n- Verres accessibles, rappels, aliments riches en eau (soupes, fruits).\n- Déshydratation = confusion, chutes, constipation.\n\nCAS COMPLEXES :\n- RCP si SNG/PEG envisagée : bénéfice confort vs contrainte éthique en démence avancée.',
    points_cles: ['MNA + poids mensuel', 'IDDSI affiché', 'CNO si apports insuffisants', 'Hydratation = prévention delirium']
  },
  {
    id: 'ehpad-7',
    titre: 'Accompagnement de la fin de vie en EHPAD',
    categorie: 'Fin de vie',
    contenu: 'L\'EHPAD est souvent le lieu du dernier vivre. La loi Claeys-Leonetti encadre les pratiques.\n\nANTICIPATION :\n- Directives anticipées, personne de confiance, projet de fin de vie dans PSI.\n- Identification précoce phase palliative (cancer, démence terminale, insuffisance cardiaque avancée).\n\nSOINS DE CONFORT :\n- Douleur et dyspnée : morphine titration SC, midazolam si anxiété réfractaire.\n- Bouche sèche, nausées, constipation opioïdes.\n- Position, présence, rituels, spiritualité.\n\nLIMITATION / ARRÊT :\n- Traitements disproportionnés : discussion collégiale, trace écrite.\n- Hydratation : voie SC possible si refus IV ; pas d\'obligation artificielle si refus documenté.\n\nSÉDATION PROFONDE CONTINUE :\n- Souffrance réfractaire, pronostic vital engagé, procédure légale.\n\nACCOMPAGNEMENT FAMILLE :\n- Information progressive, autorisation présence 24 h/24 si possible.\n- Soutien après décès (proposition entretien, associations).\n\nAPRÈS DÉCÈS :\n- Certificat, formalités, respect volontés funéraires.',
    points_cles: ['DA et personne de confiance', 'Morphine dyspnée/douleur', 'Sédation = cadre légal strict', 'Famille accompagnée pas seulement informée']
  },
  {
    id: 'ehpad-8',
    titre: 'Travailler avec les familles et l\'entourage',
    categorie: 'Famille',
    contenu: 'La famille est partenaire mais peut aussi être source de tension (culpabilité, conflits fratrie, demandes contradictoires).\n\nCOMMUNICATION :\n- Accueil régulier (réunion d\'accueil, entretien annuel).\n- Un interlocuteur identifié (IDE référente) pour éviter messages contradictoires.\n- Information loyale sur état de santé (avec accord résident si capacité).\n\nRÔLES :\n- Personne de confiance : faire connaître volontés, pas décider à la place du résident capable.\n- Famille n\'a pas droit de veto sur soins si résident consent ; en cas d\'incapacité, cadre légal.\n\nSITUATIONS DIFFICILES :\n- Visites trop longues fatiguant le résident → horaires suggérés avec diplomatie.\n- Plaintes : procédure réclamation établissement + médiation.\n- Maltraitance suspectée (résident ou par proche) : signalement obligatoire (119, OLAF).\n\nPARTENARIAT POSITIF :\n- Impliquer dans activités, transmission mémoire.\n- Respecter intimité couple / amis.\n- Soutien deuil anticipé si démence.',
    points_cles: ['IDE référente interlocuteur', 'Personne de confiance ≠ décideur', 'Signalement si maltraitance', 'Entretien annuel structuré']
  },
  {
    id: 'ehpad-9',
    titre: 'Coordination de l\'équipe soignante et soignante non soignante',
    categorie: 'Équipe',
    contenu: 'La qualité repose sur la transmission et la cohérence des pratiques entre médecin, IDE, AS, auxiliaires de vie, animation, restauration, entretien.\n\nORGANISATION :\n- Réunions de transmission (quotidienne secteur, hebdo pluridisciplinaire).\n- Fiches résident accessibles (traitements, allergies, risques, préférences).\n- Doubles IDE selon effectifs réglementaires.\n\nFORMATION :\n- Gestes techniques, prévention chutes, escarres, BMR.\n- Relation d\'aide, démence, fin de vie.\n- Gestes et postures, violence professionnelle.\n\nANIMATION ET SOINS :\n- Lien activités / comportement (réduction agitation).\n- Restauration : remontée refus alimentaires à l\'IDE.\n\nMÉDECIN COORDONATEUR :\n- Prescriptions, visites programmées, urgences, lien médecin traitant et spécialistes.\n- Pas de substitution à la relation traitant sauf convention.\n\nQUALITÉ VIE AU TRAVAIL :\n- Débriefing post-événement (décès brutal, agression).\n- Prévention burn-out, reconnaissance signalements.',
    points_cles: ['Transmission quotidienne', 'Fiche résident à jour', 'Animation = partie soins', 'Formation continue obligatoire']
  },
  {
    id: 'ehpad-10',
    titre: 'Réglementation EHPAD : droits du résident et obligations',
    categorie: 'Réglementation',
    contenu: 'L\'EHPAD est un établissement médico-social soumis à autorisation ARS et tarification.\n\nTEXTES CLÉS :\n- Code de l\'action sociale et des familles (CASF) : droits personnes âgées dépendantes.\n- Loi 2002 droits des malades (information, consentement, personne de confiance).\n- Claeys-Leonetti (directives anticipées, sédation, limitation).\n- Réglementation contention (acte médical, durée limitée, traçabilité).\n\nDROITS RÉSIDENT :\n- Dignité, respect vie privée, liberté d\'aller et venir (sauf protection juridique).\n- Participation aux décisions, accès dossier médical.\n- Plainte : médiateur, ARS, Défenseur des droits.\n\nOBLIGATIONS ÉTABLISSEMENT :\n- Contrat d\'hébergement, règlement intérieur.\n- Dossier médical partagé, protocoles infections, pharmacie.\n- Indicateurs qualité (escarres, chutes, médicaments psychotropes).\n- RGPD : données santé, consentement famille photos.\n\nTARIFICATION :\n- Hébergement (facturé résident), dépendance (APA), soins (100 % Assurance Maladie via GIR).\n\nCONTRÔLES :\n- Visites ARS, certifications HAS.',
    points_cles: ['CASF + droits malades 2002', 'Contention = acte médical tracé', 'GIR = financement soins', 'Médiateur et ARS si litige']
  }
];