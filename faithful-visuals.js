/**
 * faithful-visuals.js — Versions fidèles reconstituées (CNEG 5e / Boddaert)
 * Tableaux HTML structurés + schémas pédagogiques.
 * Priorité : clarté mobile, contenu exact du manuel, pas de scan PDF.
 */
(function (global) {
  'use strict';

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function thead(cols) {
    return '<thead><tr>' + cols.map(function (c) {
      return '<th scope="col">' + esc(c) + '</th>';
    }).join('') + '</tr></thead>';
  }

  function tbody(rows) {
    return '<tbody>' + rows.map(function (row) {
      return '<tr>' + row.map(function (cell, i) {
        var tag = i === 0 && row.length > 1 ? 'th' : 'td';
        var scope = tag === 'th' ? ' scope="row"' : '';
        return '<' + tag + scope + '>' + cell + '</' + tag + '>';
      }).join('') + '</tr>';
    }).join('') + '</tbody>';
  }

  function tableWrap(id, title, rang, htmlTable, note) {
    return (
      '<div class="faithful-table" data-table="' + esc(id) + '">' +
        '<div class="faithful-table-hd">' +
          '<span class="faithful-badge">Tableau ' + esc(id) + (rang ? ' · Rang ' + esc(rang) : '') + '</span>' +
          '<span class="faithful-title">' + esc(title) + '</span>' +
        '</div>' +
        '<div class="faithful-table-scroll">' + htmlTable + '</div>' +
        (note ? '<p class="faithful-note">' + note + '</p>' : '') +
      '</div>'
    );
  }

  function simpleTable(headers, rows) {
    return '<table class="faithful-grid">' + thead(headers) + tbody(rows.map(function (r) {
      return r.map(function (c) { return esc(c); });
    })) + '</table>';
  }

  function listTable(titleCol, items) {
    // items: [label, value] or string
    var rows = items.map(function (it) {
      if (Array.isArray(it)) return [esc(it[0]), esc(it[1])];
      return [esc(it)];
    });
    var headers = items[0] && Array.isArray(items[0]) && items[0].length > 1
      ? [titleCol || 'Item', 'Détail']
      : [titleCol || 'Éléments'];
    return '<table class="faithful-grid">' + thead(headers) + tbody(rows) + '</table>';
  }

  // ═══════════════════════════════════════════════════════════
  // TABLEAUX FIDÈLES
  // ═══════════════════════════════════════════════════════════
  var FAITHFUL_TABLES = {

    '1.1': function () {
      return tableWrap('1.1', 'Mécanismes cellulaires et moléculaires du vieillissement', 'B',
        simpleTable(
          ['Mécanismes moléculaires primaires', 'Mécanismes antagonistes (réponse aux lésions)', 'Facteurs intégratifs'],
          [
            ['Instabilité génomique', 'Sénescence cellulaire', 'Épuisement des cellules souches'],
            ['Attrition des télomères', 'Dysfonction mitochondriale', 'Altérations de la communication intercellulaire'],
            ['Altérations épigénétiques', 'Dérégulation de la sensibilité aux nutriments', 'Perte de protéostasie']
          ]
        ),
        'Les facteurs endogènes (réplication, ROS) et exogènes (environnement) accumulent les lésions ADN ; la réparation diminue avec l’âge.'
      );
    },

    '2.1': function () {
      return tableWrap('2.1', 'Cumulative Illness Rating Scale-Geriatric (CIRS-G)', 'B',
        listTable('Domaine', [
          ['Cotation', '14 items · 1 (absence) → 4 (atteinte sévère menaçant le pronostic)'],
          ['Total max', '56 points'],
          ['Usage', 'Charge de comorbidité · variante pondérée pour l’âge']
        ]),
        'Principale échelle de comorbidité en gériatrie avec l’index de Charlson.'
      );
    },

    '2.2': function () {
      return tableWrap('2.2', 'Index de Charlson (et variante pondérée pour l’âge)', 'B',
        simpleTable(
          ['Principe', 'Détail'],
          [
            ['But', 'Prédire la mortalité à partir des comorbidités'],
            ['Pondération', 'Chaque pathologie a un poids (1, 2, 3 ou 6)'],
            ['Âge', 'Variante : +1 point par décennie après 40 ans'],
            ['Usage EVC', 'Charge morbide · pronostic · comparabilité des populations']
          ]
        )
      );
    },

    '2.3': function () {
      return tableWrap('2.3', 'Critères de fragilité de Fried', 'B',
        simpleTable(
          ['Critère', 'Mesure usuelle'],
          [
            ['Perte de poids involontaire', '≥ 4,5 kg ou ≥ 5 % en 1 an'],
            ['Faiblesse musculaire', 'Force de préhension (dynamomètre)'],
            ['Fatigue / épuisement', 'Auto-questionnaire (CES-D)'],
            ['Lenteur de marche', 'Vitesse < 0,8 m/s (souvent déterminant)'],
            ['Faible activité physique', 'Dépense calorique / questionnaire']
          ]
        ),
        '0 critère = robuste · 1–2 = préfragile · ≥ 3 = fragile.'
      );
    },

    '3.1': function () {
      return tableWrap('3.1', 'Six principales causes de dépendance iatrogène (HAS 2017)', 'B',
        listTable('Cause', [
          'Médicaments (sédatifs, anticholinergiques, hypotenseurs…)',
          'Contention physique / ridelles inappropriées',
          'Sondage urinaire / dispositifs limitant la mobilité',
          'Alitement / immobilisation non justifiée',
          'Sous-nutrition / hydratation insuffisante',
          'Environnement inadapté (accès toilettes, chaussage, aide humaine)'
        ]),
        'La dépendance iatrogène est en grande partie évitable par des bonnes pratiques hospitalières.'
      );
    },

    '3.2': function () {
      return tableWrap('3.2', 'Échelle des activités de la vie quotidienne (ADL de Katz)', 'A',
        simpleTable(
          ['Activité', '1 — autonome', '0,5 — aide partielle', '0 — dépendant'],
          [
            ['Toilette', 'Aucune aide', 'Une seule partie du corps', 'Plusieurs parties / impossible'],
            ['Habillage', 'Aucune aide', 'Aide lacets / boutons', 'Aide pour prendre vêtements'],
            ['Aller aux WC', 'Aucune aide*', 'Besoin d’aide', 'Ne va pas aux WC'],
            ['Locomotion', 'Lit ↔ chaise sans aide*', 'Besoin d’aide', 'Ne quitte pas le lit'],
            ['Continence', 'Contrôle complet', 'Accidents occasionnels', 'Incontinence totale'],
            ['Alimentation', 'Aucune aide', 'Couper viande / beurrer', 'Aide complète / artificielle']
          ]
        ),
        '* Canne / fauteuil possible. Score /6 : 6 = autonomie complète · &lt; 3 = dépendance sévère. (Katz et al., JAMA 1963)'
      );
    },

    '3.3': function () {
      return tableWrap('3.3', 'Activités instrumentales de la vie quotidienne (IADL de Lawton)', 'A',
        listTable('Activité', [
          'Téléphone',
          'Courses',
          'Préparation des repas',
          'Entretien ménager',
          'Linge',
          'Moyens de transport',
          'Responsabilité des médicaments',
          'Gestion de l’argent'
        ]),
        'Plus sensibles que l’ADL pour détecter une perte d’autonomie débutante (domicile, TNCM).'
      );
    },

    '3.4': function () {
      return tableWrap('3.4', 'Grille AGGIR (groupes iso-ressources)', 'A',
        simpleTable(
          ['Cotation', 'Signification'],
          [
            ['A', 'Fait seule, totalement, habituellement, correctement'],
            ['B', 'Fait partiellement'],
            ['C', 'Ne fait pas']
          ]
        ) +
        listTable('Variables discriminantes (extraits)', [
          '1. Transferts', '2. Déplacement intérieur', '3. Toilette (haut / bas)',
          '4. Élimination urinaire et fécale', '5. Habillage (haut / moyen / bas)',
          '6. Cuisine', '7. Alimentation (se servir / manger)',
          '… jusqu’à 17 variables (dont illustratives)'
        ]),
        'Classe en GIR 1 (aide maximale) → GIR 6 (autonome). Outil médico-social (APA), pas un score clinique fin.'
      );
    },

    '4.1': function () {
      return tableWrap('4.1', 'Différences entre curatelle et tutelle', 'A',
        simpleTable(
          ['Acte / droit', 'Curatelle simple', 'Tutelle'],
          [
            ['Actes strictement personnels', '+', '+'],
            ['Actes de disposition (ventes, legs, crédits…)', '–', '–'],
            ['Mariage, PACS', '+', '+'],
            ['Testament seul', '+', '–*'],
            ['Actes d’administration', '+', '–'],
            ['Droit de vote', '+', '+'],
            ['Renouvellement titre d’identité', '+', '–'],
            ['Vie civile', 'Assistance pour certains actes', 'Représentation pour tous les actes']
          ]
        ),
        '* Peut être autorisé par le juge. + = possible · – = restreint / représenté.'
      );
    },

    '5.1': function () {
      return tableWrap('5.1', 'Facteurs aggravant une presbyacousie', 'A',
        simpleTable(
          ['Catégorie', 'Exemples'],
          [
            ['Troubles métaboliques', 'Diabète, dyslipidémie, HTA'],
            ['Exposition au bruit', 'Professionnelle ou loisirs'],
            ['Ototoxicité systémique', 'Aminosides, érythromycine, vancomycine, diurétiques de l’anse, sels de platine, aspirine HD'],
            ['Ototoxicité locale', 'Gouttes si perforation tympanique (aminoside, glycopeptide, antiseptique)']
          ]
        ),
        'Avant ototoxique : vérifier l’audition · pas d’aminosides sans indication formelle · adapter à la fonction rénale · vérifier le tympan avant gouttes.'
      );
    },

    '5.2': function () {
      return tableWrap('5.2', 'Facteurs de risque de DMLA', 'B',
        listTable('Facteur', [
          'Âge', 'Tabagisme', 'Hypertension artérielle', 'Obésité',
          'Exposition solaire', 'Prédisposition génétique (familiale)'
        ]),
        'Formes sèche (atrophique) vs humide (néovasculaire) — consultation ophtalmo urgente si déformation des lignes / scotome central.'
      );
    },

    '6.1': function () {
      return tableWrap('6.1', 'Évolution du capital osseux selon les étapes de la vie', 'B',
        simpleTable(
          ['Période', 'Événement clé'],
          [
            ['Adolescence', 'Formation du capital osseux (génétique, Ca²⁺, protéines, activité en charge)'],
            ['Adulte jeune', 'Masse osseuse maximale vers 35–40 ans'],
            ['Adulte vieillissant', 'Perte progressive · femme dès 40–45 ans (accélération post-ménopause) · homme 50–60 ans'],
            ['Sujet > 75 ans', 'Femme : ~40 % de perte (20–80 ans), surtout spongieuse · Homme : ~30 %, plus linéaire']
          ]
        )
      );
    },

    '6.2': function () {
      return tableWrap('6.2', 'Effets indésirables des bisphosphonates', 'B',
        simpleTable(
          ['Effet indésirable', 'Fréquence', 'Prévention'],
          [
            ['Syndrome pseudo-grippal', 'Très fréquent (IV)', 'Paracétamol'],
            ['Toxicité digestive (contact)', 'Fréquente', 'À jeun, assis, grand verre d’eau non minéralisée · rester vertical · pas de Ca concomitant'],
            ['Ostéonécrose de mâchoire', 'Exceptionnelle', 'Bilan / soins dentaires avant traitement'],
            ['Fractures fémorales atypiques', 'Exceptionnelles', 'Arrêt définitif si survenue']
          ]
        )
      );
    },

    '7.1': function () {
      return tableWrap('7.1', 'Dégradation cartilagineuse dans l’arthrose', 'B',
        simpleTable(
          ['Stade initial', 'Stade intermédiaire', 'Stade final'],
          [
            ['Œdème · surproduction protéoglycanes · hyperhydratation · néocollagène type I',
             'Fissures superficielles · enzymes protéolytiques · cytokines dans le synovium · hypertrophie puis apoptose des chondrocytes',
             'Destruction couches profondes · os sous-chondral à nu · chondrolyse (débris, microcristaux)']
          ]
        )
      );
    },

    '7.2': function () {
      return tableWrap('7.2', 'Facteurs de risque de l’arthrose', 'A',
        listTable('Facteur', [
          'Âge', 'Surpoids', 'Hérédité',
          'Statut hormonal (femmes, post-ménopause ++)',
          'Biomécanique (charges, traumatismes, lésion ménisco-ligamentaire)',
          'Métabolique (diabète, microcristaux, hémochromatose)',
          'Architecture des membres (genu varum / valgum…)'
        ])
      );
    },

    '7.3': function () {
      return tableWrap('7.3', 'Indice fonctionnel des coxopathies de Lequesne', 'B',
        simpleTable(
          ['Item', 'Cotation (résumé)'],
          [
            ['Douleur nocturne', '0 aucune · 1 mouvements · 2 même immobile'],
            ['Dérouillage matinal', '0 < 1 min · 1 quelques min · 2 > 15 min'],
            ['Station debout / piétinement 30 min', '0 aucune · 1 douleur'],
            ['Marche', '0 aucune · 1 après distance · 2 dès les premiers pas'],
            ['Station assise prolongée', '0 aucune · 1 douleur'],
            ['Distance max de marche', '0 → 6 (&lt; 100 m) · +1/+2 si canne(s)'],
            ['Gestes (chaussette, ramasser, étage, voiture, sexualité)', '0 à 2 chacun']
          ]
        ),
        'Indication chirurgicale à discuter vers 10–12 points. Cotation difficultés : 0 sans · 0,5 assez facile · 1 difficile · 1,5 très difficile · 2 impossible.'
      );
    },

    '7.4': function () {
      return tableWrap('7.4', 'Arthrose fémoro-tibiale vs fémoro-patellaire', 'A',
        simpleTable(
          ['', 'Fémoro-tibiale', 'Fémoro-patellaire'],
          [
            ['Épidémiologie', 'Femme > 65 ans · surpoids · charges · sport intense · compartiment interne ++', 'Femme > 40 ans · bilatérale · compartiment externe'],
            ['Douleur', 'Mécanique diffuse · latéralisée · marche / escaliers · repos soulage', 'Face antérieure · extension (descente, assise prolongée, agenouillement)'],
            ['Examen', 'Déviations axiales · craquements · choc rotulien · kyste poplité', 'Syndrome rotulien · rabot · Zohlen'],
            ['Radio', 'Face en charge · profil · schuss', 'Incidences axiales 30° / 60°']
          ]
        )
      );
    },

    '8.1': function () {
      return tableWrap('8.1', 'Six comportements douloureux (personne âgée)', 'A',
        simpleTable(
          ['Comportement', 'Expressions'],
          [
            ['Expressions faciales', 'Grimaces, froncements, front crispé…'],
            ['Verbalisation / vocalisation', 'Gémissements, soupirs, appels, cris…'],
            ['Mouvements du corps', 'Protection, rigidité, déambulation incessante…'],
            ['Relations sociales', 'Agressivité, résistance aux soins, repli…'],
            ['Activités', 'Refus alimentaire, modification du sommeil'],
            ['État psychique', 'Irritabilité, confusion, pleurs…']
          ]
        ),
        'Base des échelles comportementales (Doloplus, Algoplus, ECPA…).'
      );
    },

    '8.2': function () {
      return tableWrap('8.2', 'Douleur aiguë vs douleur chronique', 'A',
        simpleTable(
          ['', 'Aiguë', 'Chronique'],
          [
            ['Rôle', 'Signal d’alarme, protecteur', 'Inutile · détruit physique / psychique / social'],
            ['Durée', 'Transitoire', '> 3 mois · permanente ou récurrente'],
            ['Mécanisme', 'Unifactoriel', 'Plurifactoriel'],
            ['Réponses', 'Végétatives (tachycardie, sueurs…)', 'Conditionnées'],
            ['Psychisme', 'Anxiété / stress réversibles', 'Dépression souvent minimisée'],
            ['Traitement', 'Étiologique + antalgique', 'Antalgique + réadaptation']
          ]
        )
      );
    },

    '9.1': function () {
      return tableWrap('9.1', 'Maladie à corps de Lewy — points clés (rappel tableau clinique)', 'B',
        listTable('Critère / trait', [
          ['Troubles cognitifs', 'Fluctuants · attention · exécutif · visuospatial'],
          ['Hallucinations', 'Visuelles bien formées, précoces'],
          ['Parkinsonisme', 'Spontané, souvent bilatéral'],
          ['RBD', 'Trouble du comportement en sommeil paradoxal'],
          ['Sensibilité', 'Neuroleptiques (hypersensibilité)']
        ]),
        'À distinguer de l’Alzheimer et de la démence Parkinson (chronologie cognition / motricité).'
      );
    },

    '10.1': function () {
      return tableWrap('10.1', 'Maladies et médicaments associés à la dépression', 'A',
        simpleTable(
          ['Catégorie', 'Exemples'],
          [
            ['Neurologiques', 'AVC, Alzheimer et autres TNCM, Parkinson, hydrocéphalie à pression normale'],
            ['Cardiovasculaires', 'Infarctus, insuffisance cardiaque'],
            ['Endocriniennes', 'Diabète, dysthyroïdie, hyperparathyroïdie, hypercorticisme, déficit androgénique'],
            ['Divers', 'Cancers, douleur chronique'],
            ['Médicaments', 'Corticoïdes, clonidine, β-bloquants, L-dopa, amantadine, neuroleptiques']
          ]
        )
      );
    },

    '10.2': function () {
      return tableWrap('10.2', 'Symptômes de la dépression chez la personne âgée', 'B',
        simpleTable(
          ['Quel que soit l’âge', 'Plus spécifiques au sujet âgé'],
          [
            ['Tristesse, anhédonie, anhédonie sociale', 'Plaintes somatiques au premier plan'],
            ['Troubles du sommeil / appétit', 'Isolement, repli, plaintes cognitives (« pseudo-démence »)'],
            ['Fatigue, culpabilité, idées suicidaires', 'Irritabilité, anxiété, refus de soins, déni de tristesse']
          ]
        )
      );
    },

    '10.3': function () {
      return tableWrap('10.3', 'Geriatric Depression Scale (GDS) — version 4 items', 'A',
        simpleTable(
          ['Principe', 'Détail'],
          [
            ['Passation', 'Autoquestionnaire · se situer sur la semaine passée (pas toute la vie)'],
            ['Score', 'Total ≥ 1 → très forte probabilité de dépression'],
            ['Rôle', 'Repérage (pas le diagnostic) · très utilisé chez le sujet âgé']
          ]
        )
      );
    },

    '12.1': function () {
      return tableWrap('12.1', 'Vieillissement des systèmes d’équilibration', 'B',
        simpleTable(
          ['', 'Proprioception', 'Vision', 'Vestibule'],
          [
            ['Rôle', 'Sol et position des segments', 'Champ visuel, contraste, acuité', 'Tête verticale · accélérations'],
            ['Déclin', '↓ récepteurs, conduction (MI >> MS)', '↓ champ, contraste, acuité', 'Mise au repos relative ; rôle majeur si autre déficit'],
            ['Pathologies', 'Diabète, carences B12/D…', 'Cataracte, DMLA, glaucome, presbytie', 'VPPB…']
          ]
        ),
        'La marche âgée : + oscillations, − vitesse / longueur / hauteur de pas, + double appui, − balancier des bras.'
      );
    },

    '12.2': function () {
      return tableWrap('12.2', 'Évaluation après chute — axes d’examen (synthèse)', 'A',
        listTable('Axe', [
          ['Chronologie', 'Avant / pendant / après la chute'],
          ['Cardio', 'Pouls, TA couché/debout, souffle, ECG'],
          ['Neuro', 'Déficit focal, pyramidal, parkinson, confusion'],
          ['Locomoteur', 'Douleur, boiterie, hanche, rachis'],
          ['Sensoriel', 'Vision, audition, vestibule'],
          ['Iatrogénie', 'Nouveaux traitements, psychotropes']
        ])
      );
    },

    '12.3': function () {
      return tableWrap('12.3', 'Facteurs précipitants de la chute', 'A',
        simpleTable(
          ['Groupe', 'Exemples'],
          [
            ['Cardiovasculaires', 'Troubles du rythme/conduction, SCA, EP, RA serré, HO, syncope neurocardiogénique'],
            ['Neurologiques', 'Déficit transitoire/constitué, confusion, crise convulsive'],
            ['Vestibulaires', 'Vertige, instabilité, nystagmus'],
            ['Infectieux', 'Fièvre, hypovolémie, signes de foyer'],
            ['Métaboliques', 'Hypoglycémie (iatrogène ++), hyponatrémie, déshydratation, hyperCa'],
            ['Toxiques / iatrogénie', 'Alcool, sevrage · toute introduction/modification de posologie'],
            ['Comportementaux', 'Prise de risque (lever précipité, escabeau…)']
          ]
        )
      );
    },

    '12.4': function () {
      return tableWrap('12.4', 'Facteurs iatrogènes de chute', 'A',
        simpleTable(
          ['Classe', 'Facteur prédisposant', 'Facteur précipitant'],
          [
            ['Psychotropes', 'Trouble vigilance / attention', 'Somnolence'],
            ['Anticholinergiques', 'Trouble de la vigilance', 'Confusion'],
            ['Antihypertenseurs', 'PA basse', 'Hypotension orthostatique'],
            ['β-bloquant, inhib. calcique, digoxine', 'FC basse', 'Syncope'],
            ['Diurétiques', 'PA basse', 'Déshydratation'],
            ['Neuroleptiques', 'Syndrome parkinsonien', 'Confusion']
          ]
        ),
        'Un même traitement peut être prédisposant chronique et précipitant aigu.'
      );
    },

    '13.1': function () {
      return tableWrap('13.1', 'Causes du syndrome d’immobilisation', 'A',
        simpleTable(
          ['Catégorie', 'Exemples'],
          [
            ['Musculosquelettique', 'Arthrose, fracture col / vertèbres, hallux valgus, chutes répétées'],
            ['Neurologique', 'AVC, neuropathies, Parkinson, Alzheimer, Lewy'],
            ['Cardiovasculaire', 'IC, SCA, hypotension orthostatique'],
            ['Pulmonaire', 'Pneumopathie, IR'],
            ['Sensoriel', 'Cécité'],
            ['Psychiatrique', 'Dépression, anxiété, peur de tomber'],
            ['Environnement / social', 'Contention, sonde, ridelles, manque d’aide, maltraitance'],
            ['Douleur', 'Plaie, cancer, douleur neurogène'],
            ['Iatrogénie', 'Psychotropes, traitements ↑ chute'],
            ['Autres', 'Sarcopénie, cachexie, dénutrition, post-chirurgie']
          ]
        )
      );
    },

    '13.2': function () {
      return tableWrap('13.2', 'Facteurs de risque d’escarre (prévention)', 'B',
        listTable('Facteur', [
          'Pression prolongée / immobilité',
          'Cisaillement et frictions',
          'Humidité (incontinence, sueurs)',
          'Dénutrition / hypoalbuminémie',
          'Troubles de la perfusion (choc, artériopathie)',
          'Troubles de la sensibilité',
          'Âge, comorbidités sévères'
        ]),
        'Échelles Braden (13.3) et Norton (13.4) pour stratifier le risque.'
      );
    },

    '13.3': function () {
      return tableWrap('13.3', 'Échelle de Braden', 'B',
        simpleTable(
          ['Score', 'Perception sensorielle', 'Humidité', 'Activité'],
          [
            ['1', 'Absente', 'Constante', 'Alité'],
            ['2', 'Très limitée', 'Très humide', 'Fauteuil'],
            ['3', 'Légèrement limitée', 'Parfois humide', 'Marche rare'],
            ['4', 'Non altérée', 'Rarement humide', 'Marche fréquente']
          ]
        ) +
        simpleTable(
          ['Score', 'Mobilité', 'Nutrition', 'Frictions / cisaillements'],
          [
            ['1', 'Immobile', 'Très pauvre', 'Problème'],
            ['2', 'Très limitée', 'Inadéquate', 'Problème potentiel'],
            ['3', 'Légèrement limitée', 'Adéquate', 'Pas de problème'],
            ['4', 'Non altérée', 'Excellente', '—']
          ]
        ),
        'Score total bas = risque élevé d’escarre (seuils usuels ≤ 16 ou ≤ 18 selon contexte).'
      );
    },

    '13.4': function () {
      return tableWrap('13.4', 'Échelle de Norton', 'B',
        simpleTable(
          ['', 'État général', 'État mental', 'Activité', 'Mobilité', 'Incontinence'],
          [
            ['4', 'Bon', 'Bon', 'Sans aide', 'Totale', 'Aucune'],
            ['3', 'Moyen', 'Apathique', 'Avec aide', 'Diminuée', 'Occasionnelle'],
            ['2', 'Mauvais', 'Confus', 'Fauteuil', 'Très limitée', 'Urinaire'],
            ['1', 'Très mauvais', 'Stuporeux', 'Alité', 'Immobile', 'Urinaire + fécale']
          ]
        ),
        'Score &gt; 14 : sans risque · Score &lt; 14 : risque.'
      );
    },

    '14.1': function () {
      return tableWrap('14.1', 'Chiffres clefs de la nutrition de la personne âgée', 'A',
        simpleTable(
          ['Énergie', 'Protides', 'Glucides', 'Lipides'],
          [['30 kcal/kg/j', '1 à 1,2 g/kg/j', '50 % AET', '≈ 40 % AET']]
        ) +
        simpleTable(
          ['AGE', 'Eau', 'Fibres', 'Calcium', 'Vitamine D'],
          [['9–10 g/j', '40 ml/kg/j', '30 g/j', '1 000 mg/j', '15 μg/j']]
        ),
        'AET = apport énergétique total.'
      );
    },

    '14.2': function () {
      return tableWrap('14.2', 'Prévalence de la dénutrition selon le lieu de vie', 'A',
        simpleTable(
          ['', 'Domicile', 'Institution', 'Hospitalisation'],
          [['Dénutrition', '4–10 %', '15–40 %', '30–70 %']]
        )
      );
    },

    '14.3': function () {
      return tableWrap('14.3', 'Facteurs de risque de dénutrition (personnes âgées)', 'A',
        listTable('Facteur', [
          'Troubles neurocognitifs', 'Dépendance', 'Dépression', 'Cancer',
          'Pathologie sévère (cardiaque, respiratoire, rénale…)',
          'Troubles bucco-dentaires / déglutition',
          'Isolement social', 'Polymédication', 'Pauvreté'
        ])
      );
    },

    '14.4': function () {
      return tableWrap('14.4', 'Critères diagnostiques de dénutrition (HAS 2007)', 'A',
        simpleTable(
          ['Critère', 'Dénutrition', 'Dénutrition sévère'],
          [
            ['Perte de poids', '≥ 5 % en 1 mois ou ≥ 10 % en 6 mois', '≥ 10 % en 1 mois ou ≥ 15 % en 6 mois'],
            ['IMC', '< 21', '< 18'],
            ['Albuminémie*', '< 35 g/L', '< 30 g/L'],
            ['MNA', 'Score indicatif de risque / dénutrition', 'Formes sévères']
          ]
        ),
        '* Albuminémie interprétable hors inflammation majeure (CRP).'
      );
    },

    '14.5': function () {
      return tableWrap('14.5', 'Sarcopénie — repères', 'B',
        listTable('Élément', [
          ['Définition', 'Perte de masse + force/fonction musculaire'],
          ['Conséquences', 'Chutes, dépendance, mortalité'],
          ['Facteurs', 'Âge, dénutrition protidique, sédentarité, inflammation, hormones'],
          ['Prise en charge', 'Protéines adaptées + exercice de résistance']
        ])
      );
    },

    '14.6': function () {
      return tableWrap('14.6', 'Stratégie nutritionnelle (HAS 2007) — synthèse', 'B',
        simpleTable(
          ['Apports / statut', 'Normal', 'Dénutrition', 'Dénutrition sévère'],
          [
            ['Apports normaux', 'Surveillance', 'Conseils + enrichissement · rééval. 1 mois', 'Idem + CNO · rééval. 15 j'],
            ['Apports > ½ habituels', 'Conseils + enrichissement', 'Idem · si échec CNO', 'Enrichissement + CNO · si échec NE'],
            ['Apports < ½ habituels', 'Enrichissement ± CNO', 'CNO · rééval. rapide', 'NE d’emblée si effondrement']
          ]
        ),
        'CNO = compléments nutritionnels oraux · NE = nutrition entérale (si tube digestif fonctionnel).'
      );
    },

    '14.7': function () {
      return tableWrap('14.7', 'Conseils d’enrichissement alimentaire', 'A',
        listTable('Mesure', [
          '3 repas + collations',
          'Enrichir (beurre, crème, fromage, œuf, lait en poudre, huile…)',
          'Privilégier protéines à chaque repas',
          'Textures adaptées (déglutition)',
          'Aide humaine / convivialité des repas',
          'Surveiller poids et ingesta'
        ])
      );
    },

    '15.1': function () {
      return tableWrap('15.1', 'DIAPPERS — facteurs précipitants réversibles d’IU', 'A',
        simpleTable(
          ['Lettre', 'Signification', 'Point clé'],
          [
            ['D', 'Delirium', 'Confusion ↔ RAU / globe · chercher rétention'],
            ['I', 'Infection urinaire', 'Symptomatique ≠ bactériurie asymptomatique'],
            ['A', 'Atrophie vaginale', 'Jamais seule cause · 1re ligne chez la femme'],
            ['P', 'Psychologique', 'Dépression / anxiété · bidirectionnel avec IU'],
            ['P', 'Pharmacologique', 'Polymédication / iatrogénie'],
            ['E', 'Excès de diurèse', 'Perfusions, diurétiques, hyperglycémie, hyperCa'],
            ['R', 'Restriction de mobilité', 'IU fonctionnelle · contentions, accès WC'],
            ['S', 'Selles (constipation)', 'Cause sous-estimée · ± incontinence fécale']
          ]
        ),
        'Devant toute IU aiguë : rechercher et corriger DIAPPERS avant bilan urologique lourd.'
      );
    },

    '15.2': function () {
      return tableWrap('15.2', 'Évaluation d’une incontinence urinaire', 'A',
        listTable('Étape', [
          'Histoire (type, fréquence, nycturie, fuites à l’effort / urgenturie)',
          'Catalogues mictionnels',
          'Questionnaires (USP®, CONTILIFE®)',
          'Examen (globe, toucher, plancher pelvien, neurologique)',
          'BU ± ECBU si symptômes',
          'Écho résidu post-mictionnel si suspect'
        ])
      );
    },

    '16.1': function () {
      return tableWrap('16.1', 'Patient âgé : risque pharmacologique (repères)', 'A',
        listTable('Facteur', [
          'Polymédication (> 5 médicaments → interactions imprévisibles)',
          'Modifications PK/PD (clairance rénale, albumine, sensibilité CNS)',
          'Comorbidités et syndromes gériatriques',
          'Observance, dénutrition, automédication',
          'Médicaments inappropriés (Beers, STOPP/START)'
        ])
      );
    },

    '16.2': function () {
      return tableWrap('16.2', 'Vaccins chez les personnes âgées (rappel)', 'B',
        simpleTable(
          ['Vaccin', 'Indication (synthèse)', 'Schéma'],
          [
            ['dTPolio', 'Rappels rapprochés ≥ 65 ans', '65, 75, 85, 95 ans…'],
            ['Zona', '65–74 ans révolus', '1 dose (vivant CI si ID)'],
            ['Grippe', '≥ 65 ans (entre autres)', '1 injection / an'],
            ['COVID-19', 'Recommandée', 'Calendrier variable'],
            ['Pneumocoque', 'ID, IC, IR, BPCO, diabète non équilibré…', 'VPC13 puis VPP23 (schémas selon antécédents)'],
            ['Hépatite A', 'Hépatopathie chronique, HSH…', '2 doses / 6 mois si séro−'],
            ['Coqueluche', 'Cocooning', 'dTcaPolio si dernière dose > 10 ans']
          ]
        ),
        'Toujours vérifier le calendrier vaccinal officiel actualisé (HCSP / Ministère).'
      );
    },

    '16.3': function () {
      return tableWrap('16.3', 'Facteurs de risque d’effets indésirables médicamenteux', 'B',
        listTable('Mécanisme', [
          'Interactions entre comorbidités et médicaments',
          'Altération des organes d’élimination (rein, foie)',
          'Réserve fonctionnelle réduite (chute, confusion…)',
          'Cascade de prescriptions',
          'Automédication et produits de phytothérapie'
        ])
      );
    },

    '16.4': function () {
      return tableWrap('16.4', 'Interactions pharmacocinétiques (extraits)', 'B',
        simpleTable(
          ['Étape', 'Influence des co-médications'],
          [
            ['Absorption', 'IPP, antiacides · résines (cholestyramine) · chélateurs'],
            ['Métabolisme', 'Inducteurs / inhibiteurs CYP · hépatotoxiques (paracétamol HD, AINS, antituberculeux…)'],
            ['Excrétion', 'Néphrotoxiques (aminosides, platines, produits iodés, antiviraux…)']
          ]
        ),
        'Au-delà de 5 médicaments concomitants, efficacité et toxicité deviennent imprévisibles · réduire le nombre · attention pamplemousse, millepertuis, graisses/produits laitiers.'
      );
    },

    '16.5': function () {
      return tableWrap('16.5', 'Événements indésirables receveurs à rechercher', 'B',
        listTable('Événement indésirable receveur', [
          'Allo-immunisation isolée',
          'Réaction fébrile non hémolytique',
          'TACO (Transfusion-related Cardiac Overload)',
          'Incompatibilité immunologique (accident ABO)',
          'Réaction allergique',
          'TRALI (Transfusion-Related Acute Lung Injury)',
          'Infection bactérienne, parasitaire (paludisme), virale'
        ])
      );
    },

    '16.6': function () {
      var left = '<ul><li>Fièvre</li><li>Dyspnée</li><li>Allergie</li><li>Modification hémodynamique</li></ul>';
      var right = '<ul><li>Hypotension, tachycardie, marbrures, oligurie, trouble de conscience, choc</li><li>Détresse respiratoire</li><li>Hyperthermie/Frissons</li><li>Douleurs lombaires ou abdominales</li><li>Nausées, vomissements</li><li>Prurit, urticaire</li></ul>';
      return tableWrap('16.6', 'Signes cardinaux et de mauvaise tolérance d’un EIR', 'B',
        '<table class="faithful-grid">' +
          thead(['Signes cardinaux', 'Signes de mauvaise tolérance : arrêt immédiat']) +
          tbody([[left, right]]) +
        '</table>'
      );
    }
  };

  // ═══════════════════════════════════════════════════════════
  // FIGURES FIDÈLES (schémas pédagogiques HTML/SVG)
  // ═══════════════════════════════════════════════════════════
  function figCard(id, title, bodyHtml, kind) {
    return (
      '<div class="faithful-fig" data-fig="' + esc(id) + '">' +
        '<div class="faithful-fig-hd">' +
          '<span class="faithful-badge">Figure ' + esc(id) + (kind ? ' · ' + esc(kind) : '') + '</span>' +
          '<span class="faithful-title">' + esc(title) + '</span>' +
        '</div>' +
        '<div class="faithful-fig-body">' + bodyHtml + '</div>' +
      '</div>'
    );
  }

  function flowSteps(steps) {
    return '<ol class="faithful-flow">' + steps.map(function (s) {
      return '<li><strong>' + esc(s.t) + '</strong>' + (s.d ? '<span>' + esc(s.d) + '</span>' : '') + '</li>';
    }).join('') + '</ol>';
  }

  function chipGrid(items, colorClass) {
    return '<div class="faithful-chips ' + (colorClass || '') + '">' + items.map(function (it) {
      if (typeof it === 'string') return '<span class="faithful-chip">' + esc(it) + '</span>';
      return '<span class="faithful-chip"><b>' + esc(it.t) + '</b> ' + esc(it.d || '') + '</span>';
    }).join('') + '</div>';
  }

  var FAITHFUL_FIGURES = {
    '1.1': function () {
      return figCard('1.1', 'Modèle de décompensation gériatrique de Bouchon (1+2+3)',
        '<div class="faithful-bouchon">' +
          '<div class="fb-zone fb-z1"><b>(1)</b> Vieillissement physiologique<br><small>↓ réserve fonctionnelle progressive</small></div>' +
          '<div class="fb-zone fb-z2"><b>(2)</b> Maladie(s) chronique(s)<br><small>accélère le déclin de réserve</small></div>' +
          '<div class="fb-zone fb-z3"><b>(3)</b> Stress aigu<br><small>infection, iatrogénie, chute… → bascule sous le seuil</small></div>' +
          '<div class="fb-threshold">Seuil d’insuffisance d’organe / d’autonomie</div>' +
        '</div>' +
        '<p class="faithful-note">Intervention (rééducation, nutrition, arrêt iatrogène…) peut relever la réserve au-dessus du seuil.</p>',
        'Schéma');
    },
    '1.2': function () {
      return figCard('1.2', 'Mécanismes du vieillissement (vue d’ensemble)',
        chipGrid([
          'Instabilité génomique', 'Télomères', 'Épigénétique', 'Protéostasie',
          'Mitochondries', 'Sénescence', 'Cellules souches', 'Communication intercellulaire',
          'Nutrisensing', 'Inflammaging'
        ]),
        'Schéma');
    },
    '2.1': function () {
      return figCard('2.1', 'Raisonnement gériatrique appliqué aux situations de départ',
        flowSteps([
          { t: 'Situation de départ', d: 'chute, confusion, dénutrition, dyspnée…' },
          { t: 'Physiopathologie du « 1+2+3 »', d: 'réserve + chroniques + facteur précipitant' },
          { t: 'Diagnostics simultanés', d: 'étiologie + syndromes gériatriques + iatrogénie' },
          { t: 'Plan de soins multidomaine', d: 'médical, fonctionnel, social, prévention' }
        ]),
        'Schéma');
    },
    '2.2': function () {
      return figCard('2.2', 'Hétérogénéité de la population âgée',
        chipGrid([
          { t: 'Robuste', d: 'réserve élevée' },
          { t: 'Préfragile', d: '1–2 critères Fried' },
          { t: 'Fragile', d: '≥ 3 critères' },
          { t: 'Dépendant', d: 'ADL altérées' }
        ]),
        'Schéma');
    },
    '2.3': function () {
      return figCard('2.3', 'EGS multidimensionnelle — domaines',
        chipGrid(['Médical', 'Cognitif', 'Thymique', 'Fonctionnel', 'Nutrition', 'Sensoriel', 'Social', 'Médicaments']),
        'Schéma');
    },
    '2.4': function () {
      return figCard('2.4', 'Cascade de décompensation',
        flowSteps([
          { t: 'Facteur précipitant' },
          { t: 'Décompensation d’organe' },
          { t: 'Syndromes gériatriques associés' },
          { t: 'Perte d’autonomie / institutionnalisation' }
        ]),
        'Schéma');
    },
    '2.5': function () {
      return figCard('2.5', 'Évaluation gériatrique standardisée (logique)',
        flowSteps([
          { t: 'Repérage' },
          { t: 'Évaluation multidomaine' },
          { t: 'Plan d’intervention personnalisé' },
          { t: 'Réévaluation' }
        ]),
        'Schéma');
    },
    '2.6': function () {
      return figCard('2.6', 'Concept de fragilité',
        '<p class="faithful-note">État de vulnérabilité multidimensionnelle ↑ risque d’événements défavorables (chute, hospitalisation, décès, dépendance) pour un stress même mineur.</p>' +
        chipGrid(['Phénotype de Fried', 'Cumulative deficit (Rockwood)', 'Vitesse de marche']),
        'Concept');
    },
    '3.1': function () {
      return figCard('3.1', 'Autonomie — continuum',
        flowSteps([
          { t: 'Indépendance', d: 'IADL + ADL intactes' },
          { t: 'Perte IADL', d: 'domicile fragile' },
          { t: 'Perte ADL', d: 'dépendance sévère' },
          { t: 'Institution', d: 'besoin d’aide permanent' }
        ]),
        'Schéma');
    },
    '5.1': function () {
      return figCard('5.1', 'Cascade sensorielle et retentissement',
        flowSteps([
          { t: 'Déficit vision / audition' },
          { t: 'Isolement · chute · confusion' },
          { t: 'Perte d’autonomie · dépression' }
        ]),
        'Schéma');
    },
    '6.1': function () {
      return figCard('6.1', 'Remodelage osseux',
        chipGrid([
          { t: 'Ostéoclastes', d: 'résorption' },
          { t: 'Ostéoblastes', d: 'formation' },
          { t: 'Déséquilibre', d: 'âge / ménopause → perte nette' }
        ]),
        'Schéma');
    },
    '6.2': function () {
      return figCard('6.2', 'Sites fracturaires d’ostéoporose',
        chipGrid(['Vertèbres', 'Extrémité supérieure du fémur', 'Poignet (Pouteau-Colles)', 'Humérus proximal']),
        'Schéma');
    },
    '6.3': function () {
      return figCard('6.3', 'T-score et densitométrie',
        simpleTable(
          ['T-score', 'Interprétation OMS'],
          [
            ['≥ −1', 'Normal'],
            [']−2,5 ; −1[', 'Ostéopénie'],
            ['≤ −2,5', 'Ostéoporose'],
            ['≤ −2,5 + fracture', 'Ostéoporose sévère']
          ]
        ),
        'Schéma');
    },
    '6.4': function () {
      return figCard('6.4', 'Fractures vertébrales et cimentoplastie (principe)',
        flowSteps([
          { t: 'Fracture-tassement douloureux' },
          { t: 'Imagerie (TDM/IRM) confirme' },
          { t: 'Cimentoplastie / vertébroplastie si indication' },
          { t: 'Rééducation + traitement de fond ostéoporose' }
        ]),
        'Principe');
    },
    '6.5': function () {
      return figCard('6.5', 'Démarche devant suspicion d’ostéoporose',
        flowSteps([
          { t: 'Terrain + fracture fragilité / facteurs de risque' },
          { t: 'DXA ± radiographies' },
          { t: 'Bilan étiologique (biologique)' },
          { t: 'Traitement : calcium/vit. D, anti-résorbeurs, chute' }
        ]),
        'Algo');
    },
    '6.6': function () {
      return figCard('6.6', 'Ostéoporose densitométrique (T ≤ −2,5)',
        chipGrid([
          { t: 'T-score ≤ −2,5', d: 'ostéoporose' },
          { t: 'Fracture', d: 'sévère si associée' },
          { t: 'FRAX', d: 'risque fracturaire absolu' }
        ]),
        'Schéma');
    },
    '6.7': function () {
      return figCard('6.7', 'Prévention des chutes et fractures',
        chipGrid(['Révision des médicaments', 'Exercice / équilibre', 'Vision', 'Chaussage', 'Vitamine D', 'Aménagement domicile']),
        'Schéma');
    },
    '7.1': function () {
      return figCard('7.1', 'Arthrose — dégradation cartilagineuse',
        flowSteps([
          { t: 'Cartilage sain' },
          { t: 'Fissures · perte de protéoglycanes' },
          { t: 'Ostéophytes · os sous-chondral' },
          { t: 'Inflammation synoviale paroxystique' }
        ]),
        'Schéma');
    },
    '7.2': function () {
      return figCard('7.2', 'Nodules d’Heberden / Bouchard',
        chipGrid([
          { t: 'Heberden', d: 'IPD' },
          { t: 'Bouchard', d: 'IPP' },
          { t: 'Contexte', d: 'arthrose digitale, femmes ++' }
        ]),
        'Schéma');
    },
    '7.3': function () {
      return figCard('7.3', 'Coxarthrose — retentissement',
        chipGrid(['Douleur mécanique aine/fesse', 'Boiterie', 'Limitation rotation interne', 'Indice de Lequesne']),
        'Schéma');
    },
    '7.4': function () {
      return figCard('7.4', 'Incidences radiographiques du genou',
        chipGrid(['Face en charge', 'Profil', 'Schuss / Fick', 'Axiales fémoro-patellaires 30–60°']),
        'Schéma');
    },
    '7.5': function () {
      return figCard('7.5', 'Gonarthrose fémoro-tibiale',
        flowSteps([
          { t: 'Douleur mécanique latéralisée' },
          { t: 'Pincement compartimental' },
          { t: 'Ostéophytes · géodes' },
          { t: 'Déviation axiale (varum/valgum)' }
        ]),
        'Schéma');
    },
    '7.6': function () {
      return figCard('7.6', 'Imagerie méniscale / cartilage (principe)',
        '<p class="faithful-note">L’IRM précise les lésions méniscales, l’œdème osseux et l’état cartilagineux lorsque la radio ne suffit pas au projet thérapeutique.</p>',
        'Principe');
    },
    '7.7': function () {
      return figCard('7.7', 'Épanchement du genou',
        chipGrid(['Choc rotulien', 'Écho : liquide anéchogène', 'Kyste poplité si abondant']),
        'Schéma');
    },
    '7.8': function () {
      return figCard('7.8', 'Prise en charge de l’arthrose (pyramide)',
        flowSteps([
          { t: 'Hygiène de vie', d: 'poids, activité adaptée, kiné' },
          { t: 'Traitements locaux / oraux', d: 'topiques, paracétamol, AINS courts…' },
          { t: 'Infiltrations' },
          { t: 'Chirurgie prothétique si échec' }
        ]),
        'Algo');
    },
    '7.9': function () {
      return figCard('7.9', 'Arthrose érosive des mains',
        chipGrid(['Douleurs inflammatoires paroxystiques', 'Érosions centrales', 'IPD ++', 'Diagnostic différentiel PR / microcristaux']),
        'Schéma');
    },
    '7.10': function () {
      return figCard('7.10', 'Chondrocalcinose',
        chipGrid(['Dépôts de pyrophosphate', 'Liseré radio cartilagineux', 'Accès pseudo-goutteux', 'Genou / poignet ++']),
        'Schéma');
    },
    '7.11': function () {
      return figCard('7.11', 'Pseudo-polyarthrite rhizomélique (repères)',
        chipGrid(['Douleur ceintures', 'Raideur matinale', 'VS/CRP ↑', 'Réponse spectaculaire aux corticoïdes', 'Chercher Horton']),
        'Schéma');
    },
    '7.12': function () {
      return figCard('7.12', 'Maladie de Horton — urgence',
        chipGrid(['Céphalées temporales', 'Claudication mâchoire', 'Amaurose', 'Corticoïdes en urgence', 'BAT si possible sans retarder']),
        'Urgence');
    },
    '8.1': function () {
      return figCard('8.1', 'Échelles d’auto-évaluation de la douleur',
        chipGrid(['EVA', 'EN 0–10', 'Échelle verbale simple']),
        'Outil');
    },
    '8.2': function () {
      return figCard('8.2', 'Voies de la douleur (simplifié)',
        flowSteps([
          { t: 'Nocicepteur' },
          { t: 'Moelle (gate control)' },
          { t: 'Voies ascendantes' },
          { t: 'Cortex · modulation descendante' }
        ]),
        'Schéma');
    },
    '8.3': function () {
      return figCard('8.3', 'EVA / ECPA — choix de l’outil',
        simpleTable(
          ['Patient', 'Outil'],
          [
            ['Communicant', 'EVA, EN, EVS'],
            ['Non communicant / TNCM', 'ECPA, Doloplus, Algoplus']
          ]
        ),
        'Outil');
    },
    '8.4': function () {
      return figCard('8.4', 'Questionnaire DN4 (neuropathique)',
        '<p class="faithful-note">DN4 : interview + examen. Score ≥ 4/10 évoque une douleur neuropathique (brûlures, fourmillements, engourdissement, hypoesthésie, allodynie…).</p>',
        'Outil');
    },
    '8.5': function () {
      return figCard('8.5', 'Cycle vicieux de la douleur chronique',
        flowSteps([
          { t: 'Douleur' },
          { t: 'Immobilité / isolement' },
          { t: 'Dépression / anxiété' },
          { t: 'Amplification de la douleur' }
        ]),
        'Schéma');
    },
    '9.1': function () {
      return figCard('9.1', 'IRM — atrophie hippocampique (Alzheimer)',
        '<p class="faithful-note">Schéma pédagogique (pas une image DICOM) : atrophie de l’hippocampe et du cortex temporo-mésial, élargissement des cornes temporales — en faveur d’une MA dans un contexte clinico-biologique compatible.</p>' +
        chipGrid(['Hippocampe ↓', 'Corne temporale ↑', 'Cortex pariétal souvent touché']),
        'Schéma radio');
    },
    '9.2': function () {
      return figCard('9.2', 'TDM/IRM — lacunes et leucoaraïose (vasculaire)',
        chipGrid(['Lacunes des noyaux gris', 'Leucoaraïose sous-corticale', 'Infarctus stratégiques', 'Profil dysexécutif']),
        'Schéma radio');
    },
    '9.3': function () {
      return figCard('9.3', 'Maladie à corps de Lewy — fluctuations',
        chipGrid(['Fluctuations cognitives', 'Hallucinations visuelles', 'Parkinsonisme', 'RBD', 'Hypersensibilité neuroleptiques']),
        'Schéma');
    },
    '9.4': function () {
      return figCard('9.4', 'Microsaignements / angiopathie amyloïde',
        '<p class="faithful-note">Microsaignements corticaux-sous-corticaux en SWI/T2* orientent vers une angiopathie amyloïde ; distribution profonde plutôt HTA.</p>',
        'Schéma');
    },
    '9.5': function () {
      return figCard('9.5', 'Hématome sous-dural chronique (croissant)',
        flowSteps([
          { t: 'Traumatisme souvent mineur (sujet âgé ± anticoagulant)' },
          { t: 'Collection en croissant extracérébral' },
          { t: 'Troubles cognitifs / déficit / céphalées' },
          { t: 'Indication de drainage selon clinique + imagerie' }
        ]),
        'Schéma radio');
    },
    '9.6': function () {
      return figCard('9.6', 'Test de l’horloge',
        '<p class="faithful-note">Consigne type : « Dessinez une horloge indiquant 11 h 10 ». Évalue planification, visuospatial, mémoire sémantique des chiffres. Altéré dans TNCM, Parkinson, etc.</p>',
        'Outil');
    },
    '9.7': function () {
      return figCard('9.7', 'Parcours diagnostic d’une plainte mnésique',
        flowSteps([
          { t: 'Anamnèse patient + aidant' },
          { t: 'Tests (MMS, MoCA, 5 mots…)' },
          { t: 'Bilan biologique + imagerie' },
          { t: 'Diagnostic syndromique puis étiologique' }
        ]),
        'Algo');
    },
    '11.1': function () {
      return figCard('11.1', 'CAM — diagnostic de confusion',
        flowSteps([
          { t: '1. Début aigu + fluctuation' },
          { t: '2. Inattention' },
          { t: '3. Pensée désorganisée' },
          { t: '4. Altération de la conscience' }
        ]) +
        '<p class="faithful-note">CAM positif : (1) + (2) + (3 ou 4).</p>',
        'Algo');
    },
    '11.2': function () {
      return figCard('11.2', 'Facteurs prédisposants vs précipitants (delirium)',
        simpleTable(
          ['Prédisposants', 'Précipitants'],
          [
            ['TNCM, âge, sensoriel, dénutrition, polymédication', 'Infection, iatrogénie, rétention, fécalome, douleur, immobilisation, sevrage']
          ]
        ),
        'Schéma');
    },
    '11.3': function () {
      return figCard('11.3', 'Examens complémentaires — syndrome confusionnel',
        chipGrid(['Glycémie', 'NFS-CRP', 'Ionogramme', 'Créatinine', 'BU/ECBU', 'Radio thorax', 'ECG', 'TDM si focal / trauma / AVK']),
        'Algo');
    },
    '11.4': function () {
      return figCard('11.4', 'Prévention non médicamenteuse du delirium',
        chipGrid(['Orientation', 'Lunettes/appareils', 'Sommeil', 'Mobilisation', 'Hydratation', 'Éviter psychotropes', 'Douleur contrôlée', 'Famille présente']),
        'Schéma');
    },
    '12.1': function () {
      return figCard('12.1', 'Chaîne causale des chutes',
        flowSteps([
          { t: 'Prédisposants', d: 'fragilité, iatrogénie, sensoriel…' },
          { t: 'Précipitant', d: 'malaise, obstacle, infection…' },
          { t: 'Chute' },
          { t: 'Conséquences', d: 'fracture, peur, immobilisation' }
        ]),
        'Schéma');
    },
    '12.2': function () {
      return figCard('12.2', 'Timed Up and Go (TUG)',
        '<p class="faithful-note">Se lever d’une chaise, marcher 3 m, demi-tour, revenir s’asseoir. TUG &gt; 20 s : risque de chute accru / mobilité altérée (seuils variables selon sources ; &gt; 14–20 s souvent retenu).</p>',
        'Outil');
    },
    '12.3': function () {
      return figCard('12.3', 'Échelle de Tinetti (repère)',
        '<p class="faithful-note">Équilibre + marche. Score bas (souvent &lt; 19–24/28 selon version) = risque de chute élevé.</p>',
        'Outil');
    },
    '12.4': function () {
      return figCard('12.4', 'Appui unipodal',
        '<p class="faithful-note">Tenir en appui unipodal yeux ouverts. &lt; 5 s : équilibre précaire, risque de chute.</p>',
        'Outil');
    },
    '13.1': function () {
      return figCard('13.1', 'Syndrome d’immobilisation — cercle vicieux',
        flowSteps([
          { t: 'Alitement' },
          { t: 'Sarcopénie · escarre · TVP · confusion' },
          { t: 'Perte d’autonomie' },
          { t: 'Nouvel alitement' }
        ]),
        'Schéma');
    },
    '13.2': function () {
      return figCard('13.2', 'Masse, force, puissance et alitement',
        chipGrid([
          { t: 'Masse', d: 'volume musculaire' },
          { t: 'Force', d: 'contraction max' },
          { t: 'Puissance', d: 'force × vitesse — chute ++' }
        ]) +
        '<p class="faithful-note">L’alitement fait chuter rapidement force et puissance, même avant la perte de masse visible.</p>',
        'Schéma');
    },
    '13.3': function () {
      return figCard('13.3', 'Conséquences multi-organes de l’alitement',
        chipGrid(['Cardio : ↓ VO₂', 'Respi : atélectasie', 'Muscle : sarcopénie', 'Os : résorption', 'Cutané : escarre', 'Psycho : confusion', 'Coag : TVP/EP']),
        'Schéma');
    },
    '13.4': function () {
      return figCard('13.4', 'Réserve d’endurance et alitement',
        '<p class="faithful-note">Une personne à faible réserve bascule vite sous le seuil d’autonomie à l’effort après quelques jours d’alitement — d’où verticalisation précoce.</p>',
        'Schéma');
    },
    '13.5': function () {
      return figCard('13.5', 'Stades d’escarre (NPUAP)',
        chipGrid([
          { t: '1', d: 'Érythème non blanchissant' },
          { t: '2', d: 'Perte cutanée partielle' },
          { t: '3', d: 'Perte totale — subcutané' },
          { t: '4', d: 'Os / muscle exposés' }
        ]),
        'Schéma');
    },
    '13.6': function () {
      return figCard('13.6', 'Échelle de Norton — usage',
        '<p class="faithful-note">Cinq items (général, mental, activité, mobilité, incontinence). Score &lt; 14 = risque d’escarre → prévention renforcée.</p>',
        'Outil');
    },
    '13.7': function () {
      return figCard('13.7', 'Pression et positionnement',
        flowSteps([
          { t: 'Points d’appui (sacrum, talons, trochanters)' },
          { t: 'Pression × temps = risque' },
          { t: 'Changements de position / supports' },
          { t: 'Verticalisation / kiné' }
        ]),
        'Schéma');
    },
    '13.8': function () {
      return figCard('13.8', 'Prévention thromboembolique',
        chipGrid(['HBPM si indication', 'Bas / compression', 'Hydratation', 'Mobilisation précoce']),
        'Schéma');
    },
    '13.9': function () {
      return figCard('13.9', 'Nutrition et immobilisation',
        chipGrid(['Protéines ↑', 'Calories adaptées', 'Vitamine D', 'Surveillance poids']),
        'Schéma');
    },
    '13.10': function () {
      return figCard('13.10', 'SNG / gastrostomie — principes',
        simpleTable(
          ['Voie', 'Quand'],
          [
            ['SNG', 'Nutrition entérale courte durée'],
            ['Gastrostomie', 'Besoin prolongé, tube digestif OK'],
            ['Parentérale', 'Tube non fonctionnel / échec entérale']
          ]
        ),
        'Schéma');
    },
    '13.11': function () {
      return figCard('13.11', 'HBPM en prévention',
        '<p class="faithful-note">Adapter la dose à la fonction rénale (clairance) · surveillance plaquettes si schéma prolongé · lever précoce = prévention non médicamenteuse essentielle.</p>',
        'Schéma');
    },
    '13.12': function () {
      return figCard('13.12', 'Contention — dernier recours',
        flowSteps([
          { t: 'Évaluer bénéfice / risque' },
          { t: 'Alternatives (surveillance, aménagement)' },
          { t: 'Prescription limitée dans le temps' },
          { t: 'Réévaluation fréquente · traçabilité' }
        ]),
        'Éthique');
    },
    '14.1': function () {
      return figCard('14.1', 'Pyramide nutritionnelle gériatrique',
        flowSteps([
          { t: 'Base : alimentation orale enrichie' },
          { t: 'CNO' },
          { t: 'Nutrition entérale' },
          { t: 'Nutrition parentérale' }
        ]),
        'Schéma');
    },
    '15.1': function () {
      return figCard('15.1', 'Types d’incontinence (vue d’ensemble)',
        chipGrid([
          { t: 'Effort', d: '↑ pression abdominale' },
          { t: 'Urgenturie', d: 'hyperactivité détrusor' },
          { t: 'Overflow', d: 'rétention / regorgement' },
          { t: 'Fonctionnelle', d: 'mobilité / cognition' }
        ]),
        'Schéma');
    },
    '15.2': function () {
      return figCard('15.2', 'Iatrogénie et incontinence',
        chipGrid(['Diurétiques', 'Sédatifs', 'Anticholinergiques', 'α-bloquants', 'IEC (toux)']),
        'Schéma');
    },
    '15.3': function () {
      return figCard('15.3', 'Rééducation périnéale — principes',
        chipGrid(['Prise de conscience', 'Contractions contrôlées', 'Biofeedback', 'Observance']),
        'Schéma');
    },
    '16.1': function () {
      return figCard('16.1', 'Cascade iatrogénique',
        flowSteps([
          { t: 'Médicament A (effet indésirable)' },
          { t: 'Médicament B pour traiter l’EI' },
          { t: 'Nouveaux EI' },
          { t: 'Hospitalisation / chute / confusion' }
        ]),
        'Schéma');
    },
    '16.2': function () {
      return figCard('16.2', 'Arrêt des benzodiazépines (> 65 ans)',
        flowSteps([
          { t: 'Évaluer indication réelle' },
          { t: 'Information patient / aidant' },
          { t: 'Décroissance progressive' },
          { t: 'Mesures non médicamenteuses du sommeil' }
        ]),
        'Algo');
    },
    '18.1': function () {
      return figCard('18.1', 'Méthode des mini-dossiers progressifs',
        '<p class="faithful-note">Questions successives sur un même dossier : chaque réponse oriente la suite. Entraînement type EVC — lire tout le dossier avant de répondre aux items liés.</p>',
        'Méthode');
    },
    '18.2': function () {
      return figCard('18.2', 'Grille de lecture d’un dossier EVC',
        chipGrid(['Âge / autonomie', 'Comorbidités', 'Traitements', 'Facteur précipitant', 'Syndromes gériatriques', 'Objectifs de soins']),
        'Méthode');
    },
    '20.1': function () {
      return figCard('20.1', 'Lecture d’ECG — BAV (principe pédagogique)',
        '<p class="faithful-note">Repérer : onde P et QRS · allongement PR (BAV1) · ondes P bloquées (BAV2) · dissociation (BAV3). Contexte gériatrique : syncope, digoxine, β-bloquant, ischémie.</p>',
        'Schéma');
    },
    '20.2': function () {
      return figCard('20.2', 'Fracture du col fémoral — repères radio',
        chipGrid(['Raccourcissement', 'Rotation externe', 'Trait de fracture', 'Classification Garden / Pauwels (rappels)', 'Urgence orthogériatrique']),
        'Schéma radio');
    }
  };

  /* Correctifs éditoriaux v216 : ces entrées suivent le numéro et le sujet
     exacts du manuel. Elles remplacent les anciens schémas génériques dont le
     titre pouvait être exact mais dont le contenu décrivait une autre figure. */
  Object.assign(FAITHFUL_FIGURES, {
    '2.1': function () { return figCard('2.1', 'Application du raisonnement gériatrique à des situations fréquentes', flowSteps([
      {t:'Identifier le symptôme aigu',d:'chute, confusion, perte d’autonomie ou dénutrition'},
      {t:'Séparer 1 + 2 + 3',d:'vieillissement, maladies chroniques, facteur précipitant'},
      {t:'Évaluer le retentissement',d:'somatique, fonctionnel, cognitif et social'},
      {t:'Agir sur le réversible',d:'traiter la cause et prévenir la cascade'}
    ]),'Raisonnement'); },
    '2.4': function () { return figCard('2.4', 'Exemple de cascade gériatrique', flowSteps([
      {t:'Événement aigu',d:'infection, chute ou médicament'},
      {t:'Réduction de mobilité',d:'alitement et désadaptation'},
      {t:'Complications',d:'confusion, dénutrition, escarre, thrombose'},
      {t:'Perte d’autonomie',d:'retour à domicile compromis'}
    ]),'Cascade'); },
    '2.5': function () { return figCard('2.5', 'Cercle vicieux dénutrition - bronchopneumonie', flowSteps([
      {t:'Dénutrition',d:'immunité et force musculaire diminuées'},
      {t:'Troubles de déglutition et toux moins efficace'},
      {t:'Bronchopneumonie',d:'inflammation et hypercatabolisme'},
      {t:'Anorexie et fonte musculaire',d:'aggravation de la dénutrition'}
    ]),'Cercle vicieux'); },
    '2.6': function () { return figCard('2.6', 'Concept de fragilité', chipGrid([
      {t:'Robuste',d:'réserve suffisante'}, {t:'Préfragile',d:'réserve réduite'},
      {t:'Fragile',d:'faible stress → décompensation'}, {t:'Dépendant',d:'récupération incomplète'}
    ]),'Continuum'); },
    '5.1': function () { return figCard('5.1', 'Différentes causes de surdité', chipGrid([
      {t:'Transmission',d:'cérumen, tympan, oreille moyenne'},
      {t:'Perception',d:'presbyacousie, bruit, ototoxicité'},
      {t:'Rétrocochléaire',d:'nerf auditif et voies centrales'},
      {t:'Mixte',d:'association de mécanismes'}
    ]),'Repères'); },
    '8.1': function () { return figCard('8.1', 'Échelle visuelle analogique', '<div class="faithful-scale"><span>Pas de douleur</span><input type="range" min="0" max="10" value="0" aria-label="Échelle visuelle analogique de 0 à 10"><span>Douleur maximale imaginable</span></div>','Échelle interactive'); },
    '8.2': function () { return figCard('8.2', 'Échelle verbale simple', chipGrid(['Absente','Faible','Modérée','Intense','Extrêmement intense']),'Échelle'); },
    '8.4': function () { return figCard('8.4', 'Questionnaire DN4', chipGrid(['Brûlure','Froid douloureux','Décharges électriques','Fourmillements','Picotements','Engourdissement','Démangeaisons','Hypoesthésie au tact','Hypoesthésie à la piqûre','Allodynie au frottement']),'Questionnaire'); },
    '8.5': function () { return figCard('8.5', 'Algorithme d’évaluation de la douleur chez la personne âgée', flowSteps([
      {t:'Communication possible ?',d:'oui : auto-évaluation EVA, EVS ou EN'},
      {t:'Communication impossible ?',d:'hétéro-évaluation Algoplus ou ECPA'},
      {t:'Caractériser',d:'siège, intensité, mécanisme, retentissement'},
      {t:'Traiter puis réévaluer',d:'efficacité et effets indésirables'}
    ]),'Algorithme'); },
    '11.1': function () { return figCard('11.1', 'Approches du syndrome confusionnel', chipGrid([
      {t:'Prédisposition',d:'âge, cognition, fragilité'}, {t:'Précipitant',d:'infection, douleur, médicament'},
      {t:'Présentation',d:'hyperactive, hypoactive ou mixte'}, {t:'Réponse',d:'cause + mesures non médicamenteuses'}
    ]),'Modèle'); },
    '11.2': function () { return figCard('11.2', 'Réserve cognitive et sévérité du facteur précipitant', '<div class="faithful-bouchon"><div class="fb-zone fb-z1"><b>Réserve élevée</b><br><small>facteur important nécessaire</small></div><div class="fb-zone fb-z2"><b>Réserve intermédiaire</b><br><small>stress modéré</small></div><div class="fb-zone fb-z3"><b>Réserve faible</b><br><small>stress minime suffisant</small></div><div class="fb-threshold">Seuil de confusion</div></div>','Relation'); },
    '11.3': function () { return figCard('11.3', 'Choix des examens complémentaires devant un syndrome confusionnel', flowSteps([
      {t:'Clinique et constantes',d:'douleur, globe, fécalome, hydratation, médicaments'},
      {t:'Biologie orientée',d:'NFS, ionogramme, glycémie, fonction rénale ± autres'},
      {t:'ECG, imagerie ou ponction',d:'uniquement selon signes d’appel'},
      {t:'Réévaluation répétée',d:'évolution fluctuante et réponse au traitement'}
    ]),'Algorithme'); },
    '11.4': function () { return figCard('11.4', 'Prise en charge de l’agitation du patient âgé confus', flowSteps([
      {t:'Sécuriser sans contention réflexe'}, {t:'Traiter douleur et facteur causal'},
      {t:'Réorientation et présence rassurante'}, {t:'Médicament seulement si danger',d:'dose minimale, durée brève, surveillance'}
    ]),'Algorithme'); },
    '13.1': function () { return figCard('13.1', 'Conséquences du syndrome d’immobilisation', chipGrid(['Fonte musculaire','Hypotension orthostatique','Encombrement bronchique','Thrombose veineuse','Constipation et rétention','Confusion','Escarres','Perte d’autonomie']),'Systèmes'); },
    '13.2': function () { return figCard('13.2', 'Masse, force et puissance musculaires', flowSteps([{t:'Masse musculaire ↓'},{t:'Force ↓ davantage'},{t:'Puissance ↓ plus rapidement'},{t:'Marche, transferts et équilibre altérés'}]),'Relations'); },
    '13.3': function () { return figCard('13.3', 'Diminution des capacités en endurance au cours de la vie', '<div class="faithful-bouchon"><div class="fb-zone fb-z1"><b>Adulte</b><br><small>réserve élevée</small></div><div class="fb-zone fb-z2"><b>Vieillissement</b><br><small>déclin progressif</small></div><div class="fb-zone fb-z3"><b>Inactivité / maladie</b><br><small>accélération du déclin</small></div><div class="fb-threshold">Seuil de dépendance</div></div>','Courbe conceptuelle'); },
    '13.4': function () { return figCard('13.4', 'Faible réserve et déclin fonctionnel après alitement', flowSteps([{t:'Réserve fonctionnelle basse'},{t:'Quelques jours d’alitement'},{t:'Passage sous le seuil fonctionnel'},{t:'Récupération lente ou incomplète'}]),'Trajectoire'); },
    '13.5': function () { return figCard('13.5', 'Démarche diagnostique devant une suspicion de thrombose veineuse profonde', flowSteps([{t:'Estimer la probabilité clinique'},{t:'Probabilité faible',d:'D-dimères ; si négatifs, TVP écartée'},{t:'Probabilité forte ou D-dimères positifs',d:'écho-Doppler veineux'},{t:'Imagerie positive',d:'anticoagulation adaptée'}]),'Algorithme'); },
    '13.7': function () { return figCard('13.7', 'Pression en fonction du positionnement du patient', chipGrid([{t:'Décubitus dorsal',d:'occiput, sacrum, talons'},{t:'Décubitus latéral',d:'oreille, trochanter, malléoles'},{t:'Assis',d:'ischions et sacrum'},{t:'Procubitus',d:'thorax, genoux, orteils'}]),'Carte des appuis'); },
    '13.8': function () { return figCard('13.8', 'Physiopathogénie de l’escarre', flowSteps([{t:'Pression + cisaillement'},{t:'Compression microcirculatoire'},{t:'Ischémie et hypoxie tissulaire'},{t:'Nécrose cutanée et profonde'}]),'Mécanisme'); },
    '14.1': function () { return figCard('14.1', 'Algorithme de dépistage de la sarcopénie', flowSteps([{t:'SARC-F ou suspicion clinique'},{t:'Force musculaire',d:'préhension ou lever de chaise'},{t:'Masse musculaire',d:'DXA ou impédancemétrie'},{t:'Performance physique',d:'vitesse de marche, SPPB ou TUG'}]),'EWGSOP'); },
    '15.1': function () { return figCard('15.1', 'Distribution périphérique de l’innervation vésicale', chipGrid([{t:'Parasympathique S2-S4',d:'contraction du détrusor'},{t:'Sympathique T10-L2',d:'stockage et col vésical'},{t:'Somatique pudendal',d:'sphincter externe volontaire'}]),'Neuroanatomie'); },
    '15.2': function () { return figCard('15.2', 'Comorbidités et médicaments contribuant à l’incontinence', chipGrid(['Diabète','Insuffisance cardiaque','Trouble cognitif','Mobilité réduite','Diurétiques','Sédatifs','Anticholinergiques','Alpha-bloquants']),'Facteurs'); },
    '15.3': function () { return figCard('15.3', 'Évaluation et traitement de l’incontinence et de la rétention aiguë', flowSteps([{t:'Rechercher une cause transitoire',d:'DIAPPERS, fécalome, infection, médicament'},{t:'Mesurer le résidu post-mictionnel'},{t:'Rétention aiguë',d:'drainage puis cause'},{t:'Incontinence persistante',d:'type, calendrier et traitement ciblé'}]),'Algorithme'); },
    '16.2': function () { return figCard('16.2', 'Modalités d’arrêt des benzodiazépines après 65 ans', flowSteps([{t:'Informer et décider avec le patient'},{t:'Réduire progressivement',d:'paliers individualisés'},{t:'Surveiller le sevrage et le sommeil'},{t:'Maintenir les mesures non médicamenteuses'}]),'Algorithme'); }
  });

  // simpleTable helper used inside figure cards
  function simpleTable(headers, rows) {
    return '<table class="faithful-grid">' + thead(headers) + tbody(rows.map(function (r) {
      return r.map(function (c) { return esc(c); });
    })) + '</table>';
  }

  function renderFaithfulTable(id) {
    var fn = FAITHFUL_TABLES[id];
    if (!fn) return '';
    try { return fn(); } catch (e) { console.warn('faithful table', id, e); return ''; }
  }

  function renderFaithfulFigure(id) {
    var fn = FAITHFUL_FIGURES[id];
    if (!fn) return '';
    try { return fn(); } catch (e) { console.warn('faithful fig', id, e); return ''; }
  }

  function hasFaithfulTable(id) { return !!FAITHFUL_TABLES[id]; }
  function hasFaithfulFigure(id) { return !!FAITHFUL_FIGURES[id]; }

  global.FAITHFUL_TABLES = FAITHFUL_TABLES;
  global.FAITHFUL_FIGURES = FAITHFUL_FIGURES;
  global.renderFaithfulTable = renderFaithfulTable;
  global.renderFaithfulFigure = renderFaithfulFigure;
  global.hasFaithfulTable = hasFaithfulTable;
  global.hasFaithfulFigure = hasFaithfulFigure;
})(typeof window !== 'undefined' ? window : globalThis);
