// Cadre juridique et éthique — Référence pour la pratique gériatrique
const CADRE_JURIDIQUE = [
  {
    id: 'cj-1',
    loi: 'Loi Kouchner (droits des malades)',
    annee: 2002,
    articles_cles: ['L. 1111-1 à L. 1111-9 CSP', 'L. 1112-1 CSP', 'L. 1114-1 CSP'],
    dispositions_principales: [
      'Droit à l\'information loyale, claire et appropriée sur l\'état de santé, les investigations et les traitements',
      'Consentement libre et éclairé obligatoire avant tout acte (sauf urgence vitale)',
      'Droit d\'accès au dossier médical et droit de le faire compléter',
      'Droit au secret médical et à la confidentialité des données',
      'Possibilité de désigner une personne de confiance (article L. 1111-6 CSP)',
      'Charte de la personne hospitalisée (établissements publics et privés conventionnés)'
    ],
    application_geriatrique: 'Information adaptée aux capacités cognitives (langage simple, répétition, support écrit). Personne de confiance systématiquement proposée à l\'admission EHPAD/USLD. Consentement éclairé pour chaque nouvelle prescription ou acte invasif. En cas de déficience cognitive : recueillir l\'avis du tuteur/curateur ou de la personne de confiance tout en respectant la volonté exprimée antérieurement.'
  },
  {
    id: 'cj-2',
    loi: 'Loi Leonetti (fin de vie, refus obstination déraisonnable)',
    annee: 2005,
    articles_cles: ['L. 1110-5 CSP', 'L. 1110-5-1 CSP', 'L. 1110-5-2 CSP', 'L. 1110-10 CSP'],
    dispositions_principales: [
      'Interdiction de l\'obstination déraisonnable (actes inutiles, disproportionnés, sans autre effet que le maintien artificiel de la vie)',
      'Droit à des soins palliatifs et à l\'accompagnement',
      'Possibilité de limiter ou d\'arrêter un traitement (y compris nutrition/hydratation artificielles) en phase terminale',
      'Procédure collégiale si patient hors d\'état d\'exprimer sa volonté et famille divisée',
      'Sédation profonde et continue jusqu\'au décès en cas de souffrances réfractaires (anticipée par Claeys-Leonetti 2016)'
    ],
    application_geriatrique: 'Projet de fin de vie anticipé en EHPAD (personne âgée fragile, comorbidités). Discussion précoce sur les limites thérapeutiques (réanimation, antibiothérapie lourde, hospitalisation). Limitation des traitements ≠ euthanasie : soins de confort maintenus. Procédure collégiale documentée si famille en désaccord sur arrêt de traitement chez patient inconscient.'
  },
  {
    id: 'cj-3',
    loi: 'Loi Claeys-Leonetti (nouveaux droits en fin de vie)',
    annee: 2016,
    articles_cles: ['L. 1110-5-2 CSP', 'L. 1110-5-3 CSP', 'L. 1110-5-4 CSP', 'L. 1110-5-5 CSP', 'L. 1110-5-6 CSP'],
    dispositions_principales: [
      'Droit à une sédation profonde et continue jusqu\'au décès si souffrances réfractaires et pronostic vital engagé à court terme',
      'Directives anticipées opposables (sauf urgence vitale et si le médecin estime qu\'elles ne correspondent pas à la situation médicale)',
      'Mandat de protection future pour anticiper la mesure de protection',
      'Procédure collégiale renforcée (second avis médical, consultation équipe soignante, trace écrite)',
      'Refus de nutrition/hydratation artificielles en fin de vie si volonté exprimée ou directives'
    ],
    application_geriatrique: 'Recueil systématique des directives anticipées à l\'admission (ou vérification de leur existence). Sédation en fin de vie chez le très grand âge : indication stricte (souffrance réfractaire + pronostic <48-72h en pratique). Mandat de protection future avant déclin cognitif majeur. Formation équipes EHPAD à la procédure collégiale et à la rédaction des protocoles de sédation.'
  },
  {
    id: 'cj-4',
    loi: 'Loi sur la protection des majeurs (tutelle, curatelle, sauvegarde de justice)',
    annee: 2007,
    articles_cles: ['Art. 425 à 440 Code civil', 'Art. 459 et s. Code civil', 'L. 471-1 à L. 471-6 CASF'],
    dispositions_principales: [
      'Sauvegarde de justice : mesure d\'urgence (6 mois renouvelable), actes de la vie courante',
      'Curatelle : assistance pour actes importants (soins lourds, placement), personne conserve capacité d\'exprimer sa volonté',
      'Tutelle : représentation pour majeur totalement incapable (actes de disposition, consentement aux soins si patient ne peut plus exprimer sa volonté)',
      'Mesure judiciaire d\'assistance administrative (MJIA) : alternative allégée',
      'Juge des contentieux de la protection des majeurs (JCPM) : seul habilité à ouvrir/modifier une mesure'
    ],
    application_geriatrique: 'Évaluation de l\'autonomie décisionnelle (pas seulement fonctionnelle). Signalement au procureur si risque pour la personne (négligence, isolement, refus de soins dangereux). Consentement aux soins : curateur consulté pour actes invasifs ; tuteur consent si patient hors d\'état d\'exprimer sa volonté. Placement en EHPAD : accord du majeur protégé ou autorisation judiciaire si refus. Révision annuelle des mesures.'
  },
  {
    id: 'cj-5',
    loi: 'Code de la santé publique — Autonomie et consentement',
    annee: 'Codification (dispositions Kouchner/Leonetti intégrées)',
    articles_cles: ['L. 1111-1 à L. 1111-9 CSP', 'L. 1111-4 CSP', 'L. 1111-6 CSP', 'R. 4127-35 à R. 4127-37 CSP (déontologie)'],
    dispositions_principales: [
      'Toute personne majeure a le droit de refuser un traitement, même si refus met la vie en danger',
      'Consentement du mineur émancipé ou du majeur ; représentant légal si incapacité juridique',
      'Personne de confiance : informée et consultée si patient ne peut exprimer sa volonté',
      'Secret professionnel (L. 1110-4 CSP) et exceptions (déclarations obligatoires, mise en danger)',
      'Projet de soins personnalisé en EHPAD (L. 311-3-3 CASF)'
    ],
    application_geriatrique: 'Refus de soins chez le sujet âgé lucide : respecter même si médicalement discutable (information, trace, réévaluation). Personne de confiance identifiée dans le dossier. Projet de soins individualisé (PSP) révisé trimestriellement. Secret professionnel vs protection : signalement enfance en danger, EVC, certaines infections (pas de violation pour simple conflit familial).'
  },
  {
    id: 'cj-6',
    loi: 'Loi relative aux EHPAD et à la médicalisation',
    annee: 2002,
    articles_cles: ['L. 311-1 à L. 311-8 CASF', 'L. 313-1 à L. 313-25 CASF', 'Décret n° 2002-637'],
    dispositions_principales: [
      'Établissement d\'hébergement pour personnes âgées dépendantes : hébergement + soins + accompagnement',
      'Contrat de séjour et règlement de fonctionnement',
      'Projet personnalisé d\'accompagnement (PPA) et projet de soins',
      'Médecin coordonnateur obligatoire ; protocoles de soins infirmiers',
      'Droits des résidents : dignité, intimité, liberté d\'aller et venir, participation aux décisions',
      'Commission d\'évaluation de la qualité des soins'
    ],
    application_geriatrique: 'Admission : évaluation GIR, contrat signé, PPA sous 30 jours. Médecin traitant + coordonnateur : cohérence des prescriptions. Sorties et transferts : information famille et trace. Contentions et mesures restrictives : justification médicale, durée limitée, trace réglementaire. Visites et liberté de circulation sauf danger pour autrui ou soi.'
  },
  {
    id: 'cj-7',
    loi: 'Loi sur les directives anticipées',
    annee: 2016,
    articles_cles: ['L. 1111-11 à L. 1111-12 CSP', 'L. 1111-6 CSP (personne de confiance)'],
    dispositions_principales: [
      'Toute personne majeure peut rédiger des directives anticipées (DA) sur les traitements en fin de vie',
      'DA opposables au médecin sauf urgence vitale ou si considérées inappropriées à la situation clinique (motivation obligatoire)',
      'Conservation : dossier médical, registre national (depuis 2023), remise à la personne de confiance',
      'Révision possible à tout moment ; dernière version prévaut',
      'Pas de formalisme obligatoire (écrit daté signé recommandé)'
    ],
    application_geriatrique: 'Proposition de rédaction des DA dès l\'admission si capacité cognitive suffisante (ou antérieurement en médecine de ville). Vérification registre national et dossier EHPAD à chaque hospitalisation. DA ≠ refus de tous soins : préciser limites (réanimation, antibiotiques, nutrition artificielle). En cas de démence évolutive : DA rédigées avant perte de capacité restent opposables.'
  },
  {
    id: 'cj-8',
    loi: 'Code de déontologie médicale',
    annee: 'R. 4127-35 à R. 4127-100 CSP',
    articles_cles: ['R. 4127-35 CSP (devoirs généraux)', 'R. 4127-37 CSP (consentement)', 'R. 4127-48 CSP (secret)', 'R. 4127-76 CSP (fin de vie)'],
    dispositions_principales: [
      'Devoir de secours, de compétence, de disponibilité et de conscience',
      'Information loyale et consentement libre et éclairé',
      'Secret professionnel absolu sauf exceptions légales',
      'Interdiction de toute discrimination (âge inclus) dans l\'accès aux soins',
      'Obligation de formation continue ; collégialité en situations complexes',
      'Refus de soins inappropriés ou disproportionnés en fin de vie'
    ],
    application_geriatrique: 'Pas de discrimination par l\'âge (âgisme) : évaluation bénéfice/risque individualisée, pas de refus automatique de réanimation sans discussion. Secret : ne pas divulguer l\'état de santé à la famille sans accord du patient lucide. Fin de vie : accompagner, soulager, ne pas abandonner. Conflit famille/équipe : médiation, procédure collégiale, pas de décision unilatérale hâtive.'
  },
  {
    id: 'cj-9',
    loi: 'Loi sur le secret professionnel et exceptions',
    annee: 'L. 1110-4 CSP ; Code pénal art. 226-13',
    articles_cles: ['L. 1110-4 CSP', 'Art. 226-13 et 226-14 CP', 'L. 226-14 (dénonciation enfance en danger)'],
    dispositions_principales: [
      'Secret couvre tout ce qui est venu à la connaissance du professionnel dans l\'exercice (état de santé, vie privée, confidences)',
      'Dérogations : consentement du patient, partage entre professionnels pour les soins (secret partagé), déclarations obligatoires (décès suspects, EVC, maladies à déclaration)',
      'Levée du secret possible si intérêt du patient ou protection d\'autrui (danger imminent)',
      'Sanctions pénales en cas de violation (1 an, 15 000 €)',
      'Secret survivant au décès (sauf intérêt des héritiers ou raison impérieuse)'
    ],
    application_geriatrique: 'Famille demandant informations : accord du résident lucide obligatoire. Personne de confiance : peut recevoir informations si désignée à cet effet. Maltraitance ou négligence : signalement possible (117, procureur) sans violer le secret si protection de la personne. Dossier EHPAD : accès résident/tuteur ; pas d\'accès automatique de tous les enfants. Après décès : certificat et informations nécessaires aux héritiers pour succession/assurance.'
  },
  {
    id: 'cj-10',
    loi: 'Loi sur les soins psychiatriques sans consentement (SPSC)',
    annee: 2011,
    articles_cles: ['L. 3211-1 à L. 3223-9 CSP', 'Soin psychiatrique à la demande d\'un tiers (SDT)', 'Soin psychiatrique sur décision du représentant de l\'État (SDE)'],
    dispositions_principales: [
      'Trois modalités : consentement libre, SDT (pétition famille + certificats médicaux, autorisation préfectorale), SDE (danger imminent, urgence)',
      'Personne majeure : présomption de consentement sauf altération du discernement',
      'Contrôle judiciaire et commissions de contrôle (CCSD)',
      'Durée limitée, réévaluation, droits du patient (information, recours)',
      'Exception : personnes présentant un trouble mental mettant en danger leur sécurité ou celle d\'autrui'
    ],
    application_geriatrique: 'Delirium aigu chez personne âgée : en principe soins sur consentement (réhydratation, traitement cause) ; contention chimique/physique = dernier recours, trace et durée minimale. Démence avec agitation sévère : pas de SDT/SDE pour simple agitation EHPAD — privilégier soins non contraints et procédure de protection civile si danger. SDT rare en gériatrie (psychose aiguë, suicide). Toujours distinguer trouble mental organique réversible (delirium) vs trouble psychiatrique chronique.'
  }
];