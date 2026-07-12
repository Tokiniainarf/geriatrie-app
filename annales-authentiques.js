/*
 * Annales réellement sourcées. Les recueils 2009-2024 sont conservés tels
 * qu'ils ont été rendus publics : aucune correction ni réécriture locale.
 * La séparation voie interne / voie externe n'existe qu'à partir de 2025.
 */
const ANNALES_AUTHENTIQUES = {
  archives: [
    {
      id: 'evcf-2009-2024',
      title: 'Connaissances fondamentales (EVCF)',
      period: '2009-2024',
      format: 'Ancien format national',
      pages: 34,
      file: 'assets/annales/evcf-geriatrie-2009-2024.pdf',
      sourceUrl: 'https://prepevc.fr/annales-evc-geriatrie-non-corrigees/',
      provenance: 'Recueil de sujets CNG reproduit par PrepEVC',
      note: 'Sujet non corrigé. Certaines sessions récentes n’ont pas été publiées directement par le CNG.'
    },
    {
      id: 'evcp-2009-2024',
      title: 'Connaissances pratiques (EVCP)',
      period: '2009-2024',
      format: 'Ancien format national',
      pages: 42,
      file: 'assets/annales/evcp-geriatrie-2009-2024.pdf',
      sourceUrl: 'https://prepevc.fr/annales-evc-geriatrie-non-corrigees/',
      provenance: 'Recueil de sujets CNG reproduit par PrepEVC',
      note: 'Sujet non corrigé. Le PDF original est intégré sans découpage ni réinterprétation.'
    }
  ],
  session2025: {
    internal: {
      title: '2025 - voie interne',
      format: 'QCM - épreuve unique de 2 h',
      completeness: 'Extrait public : 10 premiers QCM seulement',
      sourceUrl: 'https://prepevc.fr/annales-evc-geriatrie-2025-correction/',
      provenance: 'Énoncés reproduits par PrepEVC ; scan CNG public non retrouvé',
      questions: [
        { q: 'IRM cérébrale chez un homme de 86 ans atteint de maladie d’Alzheimer : quelles anomalies sont habituellement retrouvées ?', options: ['Atrophie hippocampique', 'Atrophie du mésencéphale', 'Lésions de la substance blanche', 'Atrophie cortico-sous-corticale avec dilatation ventriculaire', 'Hypersignal cortical en diffusion'] },
        { q: 'Examens biologiques sanguins de première intention devant une hypercalcémie symptomatique chez un patient âgé : quelles propositions sont exactes ?', options: ['Glycémie à jeun', 'Albuminémie', 'Électrophorèse des protéines sanguines', 'Dosage de la parathormone', 'Kaliémie'] },
        { q: 'Idées suicidaires chez la personne âgée : quelles propositions sont exactes ?', options: ['La crise suicidaire comporte des idées de plus en plus envahissantes', 'Les rechercher augmente le risque de passage à l’acte', 'Le suicide abouti est particulièrement fréquent chez l’homme âgé', 'Un scénario suicidaire est un facteur de risque', 'Elles n’existent pas en cas de trouble neurocognitif majeur'] },
        { q: 'Vieillissement des organes des sens : quelles propositions sont exactes ?', options: ['Le glaucome correspond à une opacification cornéenne', 'La grille d’Amsler dépiste des symptômes de DMLA', 'La cataracte ne baisse pas l’acuité visuelle', 'La presbyacousie atteint d’abord les fréquences graves', 'Une audiométrie vocale dans le bruit peut révéler une presbyacousie débutante'] },
        { q: 'Vieillissement cognitif physiologique : quelles propositions sont exactes ?', options: ['Le trouble neurocognitif majeur retentit sur l’autonomie', 'Le manque du mot sur les noms propres signe une maladie d’Alzheimer', 'Une maladie d’Alzheimer typique n’entraîne pas de plainte mnésique', 'La double tâche est habituellement moins performante avec l’âge', 'La mémoire procédurale s’altère fortement après 80 ans'] },
        { q: 'Soins palliatifs gériatriques : quelles propositions sont exactes ?', options: ['Ils imposent l’arrêt de tout traitement actif', 'La loi Claeys-Leonetti a instauré la sédation profonde et continue dans ses indications', 'Des LISP peuvent se trouver en gériatrie ou en SMR gériatrique', 'La scopolamine peut être utilisée contre les râles agoniques', 'La majorité des décès survient à l’hôpital malgré un souhait fréquent de mourir à domicile'] },
        { q: 'Sauvegarde de justice : quelles propositions sont exactes ?', options: ['La personne conserve en principe l’exercice de ses droits civils', 'Elle permet d’anticiper une future représentation', 'Elle permet de choisir systématiquement le lieu de vie à la place de la personne', 'Certains actes contraires à l’intérêt du majeur peuvent être remis en cause', 'Le médecin traitant peut toujours la déclencher seul'] },
        { q: 'Prescription de psychotropes chez le sujet âgé : quelles propositions sont exactes ?', options: ['La fluoxétine peut favoriser une hyponatrémie par SIADH', 'Le tiapride peut entraîner un syndrome extrapyramidal', 'La rispéridone provoque habituellement une hypertension', 'L’arrêt brutal de l’alprazolam peut entraîner un sevrage', 'Tramadol et paroxétine exposent à un syndrome sérotoninergique'] },
        { q: 'Attribution de l’APA : quelles propositions sont exactes ?', options: ['Être de nationalité française', 'Être classé GIR 1 à 4', 'Être en ALD', 'Avoir moins de 1 500 euros de revenus mensuels', 'Ne pas vivre en EHPAD'] },
        { q: 'Administration sous-cutanée de ceftriaxone en l’absence de voie IV : quelles propositions sont exactes ?', options: ['La voie SC dispose d’une AMM récente', 'Elle est contre-indiquée en cas de sepsis sévère', 'Le site sous-cutané doit être surveillé au moins quotidiennement', 'La posologie est identique aux voies usuelles selon le contexte', 'Un relais oral précoce est à privilégier s’il devient possible'] }
      ]
    },
    external: {
      title: '2025 - voie externe',
      format: 'Deux écrits anonymes de 2 h : fondamentale + pratique',
      completeness: 'Sujet complet non intégré',
      sourceUrl: 'https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000051751111/2026-02-06',
      provenance: 'Format officiel Legifrance ; sujet de gériatrie retrouvé uniquement dans des ressources commerciales',
      note: 'L’app n’invente pas le sujet et ne copie pas un ouvrage payant. Ajouter ici le scan autorisé dès qu’il est disponible.'
    }
  }
};

