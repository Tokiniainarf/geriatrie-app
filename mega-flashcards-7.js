const MEGA_FLASHCARDS_7 = [
  { id: 'mega7-1', chapter: 'ch1', rang: 'A', question: 'Classification OMS de la fragilité (2023) : trois dimensions ?', answer: '1) Capacités intrinsèques (cognition, locomotion, vitalité, sensoriel, psychologique). 2) Environnement (domicile, accès soins). 3) Interactions capacités-environnement. Complète Fried/Rockwood pour politiques santé et prévention intégrée (rapport Decade of Healthy Ageing).', tags: ['OMS', 'fragilité', 'classification'] },

  { id: 'mega7-2', chapter: 'ch1', rang: 'A', question: 'Recommandation OMS activité physique ≥65 ans (minutes/semaine) ?', answer: '150 min modérée OU 75 min vigoureuse + activités renforcement musculaire ≥2 j/sem + équilibre ≥3 j/sem si risque chute. Adaptation si comorbidités ; « toute activité vaut mieux que rien ». Base prévention sarcopénie et dépendance.', tags: ['OMS', 'activité physique', 'prévention'] },

  { id: 'mega7-3', chapter: 'ch1', rang: 'B', question: 'Décennie OMS du vieillissement en bonne santé (2021-2030) : objectif global ?', answer: 'Améliorer la qualité de vie des personnes âgées, leurs environnements et les systèmes qui les servent. Quatre axes : changer mentalités, créer environnements favorables, soins intégrés, données et recherche. Cadre international au-delà des recommandations nationales HAS.', tags: ['OMS', 'vieillissement', 'stratégie'] },

  { id: 'mega7-4', chapter: 'ch1', rang: 'A', question: 'Coût économique de la dépendance : indicateur LTC (long-term care) OCDE ?', answer: 'Dépenses soins de longue durée en % PIB et par habitant ≥65 ans. France : mix domicile (APA) + établissement. Vieillissement démographique → enjeu soutenabilité financière ; prévention fragilité = levier économique (retard entrée dépendance).', tags: ['économie santé', 'dépendance', 'OCDE'] },

  { id: 'mega7-5', chapter: 'ch1', rang: 'B', question: 'ICD-11 : code vieillissement et fragilité pertinent en gériatrie ?', answer: 'MG2A fragilité de l\'adulte ; XT9R vieillissement normal. Utilisation codage harmonise épidémiologie internationale et registres. Distinction vieillissement physiologique vs syndrome de fragilité pour recherche et indicateurs qualité.', tags: ['ICD-11', 'classification', 'codage'] },

  { id: 'mega7-6', chapter: 'ch2', rang: 'A', question: 'Principe bioéthique de proportionnalité des soins (CIO) appliqué au raisonnement gériatrique ?', answer: 'Bénéfice attendu vs charge (iatrogénie, souffrance, coût, autonomie). Obstination déraisonnable = disproportion. En EVC : hiérarchiser F3 réversible avant chronicités ; time-limited trial documenté.', tags: ['bioéthique', 'proportionnalité', 'CIO'] },

  { id: 'mega7-7', chapter: 'ch2', rang: 'A', question: 'Classification internationale ICF (OMS) : utilité en évaluation gériatrique ?', answer: 'Corps, activités, participation, facteurs environnementaux/personnels. Complète diagnostic médical (CIM) par handicap fonctionnel et barrières sociales. Utile synthèse EGM et objectifs rééducation transnationaux.', tags: ['ICF', 'OMS', 'évaluation'] },

  { id: 'mega7-8', chapter: 'ch2', rang: 'B', question: 'Prévention quaternaire : définition et exemple gériatrique ?', answer: 'Éviter les soins inutiles ou nocifs (surdiagnostic, surtraitement). Ex : arrêt dépistage cancer si espérance vie limitée, déprescription BZD, pas antibiotique sur bactériurie asymptomatique. Réduit iatrogénie et coûts.', tags: ['prévention quaternaire', 'déprescription', 'économie'] },

  { id: 'mega7-9', chapter: 'ch2', rang: 'A', question: 'OMS checklist syndromes gériatriques en soins aigus : intérêt ?', answer: 'Repérage systématique chute, delirium, incontinence, immobilisation, iatrogénie à l\'admission. Améliore qualité et réduit DAFH. Complète approche syndromique française (Bouchon) avec standard international hôpital.', tags: ['OMS', 'syndromes', 'prévention'] },

  { id: 'mega7-10', chapter: 'ch2', rang: 'B', question: 'Analyse coût-efficacité : EGM à domicile vs hospitalisation prolongée (principe) ?', answer: 'EGM précoce peut réduire admissions et dépendance (études variables). Économie santé : comparer coûts directs/indirects et QALY. Argument politique prévention fragilité, pas décision individuelle seule au lit du patient.', tags: ['économie santé', 'EGM', 'coût-efficacité'] },

  { id: 'mega7-11', chapter: 'ch3', rang: 'A', question: 'Classification ISO pour aides techniques autonomie (fauteuils, déambulateurs) ?', answer: 'Normes ISO 9999 (classification produits) et essais stabilité/charge. Prescription ergo : compatibilité environnement, formation utilisateur. Réduit chutes et favorise maintien domicile (coût médico-social vs institution).', tags: ['ISO', 'aides techniques', 'autonomie'] },

  { id: 'mega7-12', chapter: 'ch3', rang: 'A', question: 'Échelle de Zarit (aidant) : seuil surcharge et implication économique ?', answer: 'Score >61 = surcharge sévère. Aidant épuisé → risque arrêt travail, hospitalisation PA, entrée EHPAD. Prévention : répit, APA, groupes soutien = investissement limitant coûts système.', tags: ['Zarit', 'aidant', 'économie santé'] },

  { id: 'mega7-13', chapter: 'ch3', rang: 'B', question: 'WHO Global Age-Friendly Cities : 8 domaines liés à l\'autonomie ?', answer: 'Espaces extérieurs, transports, logements, participation sociale, respect et inclusion, travail, communication, santé communautaire. Urbanisme préventif : accessibilité = maintien IADL/ADL et réduction isolement.', tags: ['OMS', 'ville amie', 'prévention'] },

  { id: 'mega7-14', chapter: 'ch3', rang: 'A', question: 'Principe d\'autonomie (bioéthique) vs mesure de protection (tutelle) : articulation ?', answer: 'Autonomie = décider selon capacités réelles ; protection si mise en danger sans discernement. Subsidiarité : mesure la moins restrictive (curatelle avant tutelle). Évaluation autonomie ≠ seulement score ADL.', tags: ['bioéthique', 'autonomie', 'protection'] },

  { id: 'mega7-15', chapter: 'ch3', rang: 'B', question: 'GIR et financement : logique économique APA (France) en une phrase EVC ?', answer: 'Allocation liée au degré de dépendance (GIR 1-4), modulée revenus, finance plan aide domicile/établissement. Objectif : équité et soutenabilité ; retarder institution par aides à domicile.', tags: ['APA', 'GIR', 'économie santé'] },

  { id: 'mega7-16', chapter: 'ch4', rang: 'A', question: 'Déclaration universelle UNESCO bioéthique 2005 : quatre principes ?', answer: 'Dignité humaine, droits et libertés fondamentales, bénéfice et sécurité, autonomie et consentement éclairé. Cadre international complétant Leonetti/Claeys-Leonetti pour refus, limitation, recherche sur PA vulnérable.', tags: ['UNESCO', 'bioéthique', 'consentement'] },

  { id: 'mega7-17', chapter: 'ch4', rang: 'A', question: 'Principe de non-malfaisance (primum non nocere) en fin de vie PA ?', answer: 'Ne pas causer de tort : éviter réanimation futile, sédation excessive non proportionnée, mais aussi ne pas abandonner analgésie/soins bouche. Distinction intention soignante vs euthanasie (interdite France).', tags: ['bioéthique', 'non-malfaisance', 'fin de vie'] },

  { id: 'mega7-18', chapter: 'ch4', rang: 'A', question: 'Convention Oviedo (1997) : recherche sur personne incapable de consentir ?', answer: 'Bénéfice direct ou groupe même pathologie ; refus possible via représentant/directives ; comité éthique. Protection internationale PA dément pour essais médicamenteux.', tags: ['Oviedo', 'recherche', 'bioéthique'] },

  { id: 'mega7-19', chapter: 'ch4', rang: 'B', question: 'Justice distributive et âge : débat accès soins coûteux (dialyse, ECMO) chez très âgé ?', answer: 'Pas de limite d\'âge légale ; critères clinique (fragilité, bénéfice, volonté). Éthique des ressources rares : transparence, collégialité, pas discrimination âgiste. Économie : coût-opportunité au niveau système.', tags: ['justice', 'bioéthique', 'économie santé'] },

  { id: 'mega7-20', chapter: 'ch4', rang: 'B', question: 'Directive anticipée : validité internationale (voyage) — conseil pratique ?', answer: 'Portée juridique nationale (France : loi Leonetti). À l\'étranger : copie traduite, carte européenne assurance, personne de confiance joignable. Pas d\'harmonisation mondiale ; documenter volontés avant déplacement.', tags: ['directives', 'bioéthique', 'prévention'] },

  { id: 'mega7-21', chapter: 'ch5', rang: 'A', question: 'Classification OMS déficience auditive (GRB) : seuils en dB ?', answer: 'Légère 20-34, modérée 35-49, sévère 50-64, profonde 65-79, complète ≥80 dB meilleure oreille. Harmonise épidémiologie presbyacousie et besoins appareillage ; lien cognition OMS (rapport 2021).', tags: ['OMS', 'audition', 'classification'] },

  { id: 'mega7-22', chapter: 'ch5', rang: 'A', question: 'OMS : dépistage vision et audition PA — recommandation prévention ?', answer: 'Intégrer dépistage régulier ≥60 ans dans soins primaires ; correction lunettes/appareils ; réduction risque chute, dépression, isolement. Coût-efficacité correction sensorielle > traitement complications.', tags: ['OMS', 'dépistage', 'prévention'] },

  { id: 'mega7-23', chapter: 'ch5', rang: 'B', question: 'ICD-11 : codes H54 (cécité/malvoyance) — usage indicateurs santé publique ?', answer: 'Codage uniforme handicaps visuels pour statistiques nationales et OMS. Planification prévention (DMLA, glaucome, diabète) et allocation ressources ophtalmologie gériatrique.', tags: ['ICD-11', 'vision', 'santé publique'] },

  { id: 'mega7-24', chapter: 'ch5', rang: 'A', question: 'Prévention primaire sensorielle : stratégie communautaire OMS (WHO ear care / eye care) ?', answer: 'Éviter bruit excessif, contrôle glycémie/TA, lunettes protection UV ; dépistage scolaire prolongé à la vie adulte. PA : priorité correction aide technique = prévention secondaire chutes/delirium.', tags: ['OMS', 'prévention', 'sensoriel'] },

  { id: 'mega7-25', chapter: 'ch5', rang: 'B', question: 'Coût sociétal surdité non traitée chez PA (modèle économique) ?', answer: 'Isolement, déclin cognitif, dépression, perte autonomie → dépenses médicales et sociales accrues. Appareillage et rééducation auditives : ROI positif à moyen terme dans analyses OMS/OCDE.', tags: ['économie santé', 'audition', 'prévention'] },

  { id: 'mega7-26', chapter: 'ch6', rang: 'A', question: 'OMS critère ostéoporose DMO (T-score) et fracture majeure ?', answer: 'T-score ≤-2,5 au col fémoral total, fémur neck ou rachis L1-L4 (DEXA). Fracture hanche/proximale humérus/vertébrale clinique = ostéoporose clinique même sans DMO. Base stratégies fracture liaison internationales.', tags: ['OMS', 'ostéoporose', 'classification'] },

  { id: 'mega7-27', chapter: 'ch6', rang: 'A', question: 'Fracture Liaison Service (FLiP) OMS/IOF : objectif économique et clinique ?', answer: 'Identifier toute fracture fragilité → bilan os, traitement, prévention rechute. Réduit fractures secondaires et coûts hospitaliers. Standard qualité post-fracture hanche.', tags: ['IOF', 'fracture', 'prévention'] },

  { id: 'mega7-28', chapter: 'ch6', rang: 'B', question: 'Classification OMS fracture atypique fémur sous anti-résorptifs ?', answer: 'Fracture sous-trochantérienne/diaphysaire longue, cortical en bec d\'perroquet, prodromes douleur cuisse. Surveillance internationale ; balance bénéfice fracture ostéoporotique classique vs risque rare.', tags: ['OMS', 'classification', 'pharmacovigilance'] },

  { id: 'mega7-29', chapter: 'ch6', rang: 'A', question: 'Prévention chutes + calcium/vitamine D OMS : message population PA ?', answer: 'Activité équilibre, correction déficits vitamine D, environnement sécurisé, revue médicaments. Supplémentation ciblée si carence ; pas calcium excessif systématique (risque cardiovasculaire débattu).', tags: ['OMS', 'prévention', 'chute'] },

  { id: 'mega7-30', chapter: 'ch6', rang: 'B', question: 'Burden of osteoporosis (OCDE) : indicateur DALY et politique santé ?', answer: 'Années vie ajustées incapacité post-fracture élevées chez ≥65 ans. Investissement prévention (DMO, traitement) vs coût chirurgie/rééducation/institutionnalisation.', tags: ['économie santé', 'ostéoporose', 'OCDE'] },

  { id: 'mega7-31', chapter: 'ch7', rang: 'A', question: 'Classification OMS ICD-11 arthrose (FA00-FA0Z) : intérêt codage ?', answer: 'Localisation (genou, hanche, main) et sévérité harmonisées. Registres épidémiologiques, comparaisons internationales charge arthrose PA, planification PTG/kiné.', tags: ['ICD-11', 'arthrose', 'classification'] },

  { id: 'mega7-32', chapter: 'ch7', rang: 'A', question: 'OMS recommandation exercice arthrose genou : type et bénéfice économique ?', answer: 'Renforcement quadriceps, aérobie faible impact, perte poids si surpoids. Réduit douleur, retard chirurgie ; économie soins conservateurs vs prothèse prématurée.', tags: ['OMS', 'arthrose', 'prévention'] },

  { id: 'mega7-33', chapter: 'ch7', rang: 'B', question: 'Principe bioéthique : consentement chirurgie prothèse chez PA cognitif léger ?', answer: 'Évaluer capacité décisionnelle spécifique à l\'acte ; information loyale bénéfices/risques ; personne de confiance si doute. Refus valide si discernement ; pas opérer sans accord ou urgence vitale.', tags: ['bioéthique', 'consentement', 'chirurgie'] },

  { id: 'mega7-34', chapter: 'ch7', rang: 'A', question: 'OARSI (Osteoarthritis Research Society) : lignes non pharmacologiques 1ère intention ?', answer: 'Éducation, exercice, poids, aides techniques, chaussures. Alignement international avec HAS ; AINS seulement si échec et risque minimisé PA.', tags: ['OARSI', 'recommandations', 'prévention'] },

  { id: 'mega7-35', chapter: 'ch7', rang: 'B', question: 'Coût indirect arthrose (absentéisme aidant, perte mobilité) : message santé publique ?', answer: 'Arthrose = première cause handicap locomoteur âge avancé. Rééducation et adaptation domicile moins coûteuses que dépendance totale ; prévention sédentarité.', tags: ['économie santé', 'arthrose', 'handicap'] },

  { id: 'mega7-36', chapter: 'ch8', rang: 'A', question: 'Classification OMS douleur chronique (ICD-11 MG30) : intérêt gériatrie ?', answer: 'Douleur primaire vs secondaire chronique multisystémique. Reconnaissance entité distincte ; prise en charge multimodale, pas seulement opioïdes. PA : souvent mixte mécanique + neuropathique.', tags: ['ICD-11', 'douleur', 'OMS'] },

  { id: 'mega7-37', chapter: 'ch8', rang: 'A', question: 'OMS ladder analgésie adaptée PA : précaution palier 3 ?', answer: 'Paracétamol palier 1, adjuvants, opioïdes faibles puis forts si besoin. PA : début doses basses, surveillance confusion, constipation, chutes. Principe proportionnalité et non-malfaisance (éviter sous-traitement ET sur-traitement).', tags: ['OMS', 'douleur', 'prévention'] },

  { id: 'mega7-38', chapter: 'ch8', rang: 'B', question: 'Bioéthique : droit à la soulagement vs risque sédation opioïde — équilibre ?', answer: 'Douleur non traitée = violation dignité. Opioïde titré avec consentement information ; double effet accepté si intention analgésique. Documentation objectifs confort.', tags: ['bioéthique', 'douleur', 'opioïde'] },

  { id: 'mega7-39', chapter: 'ch8', rang: 'A', question: 'IASP définition douleur 2020 (révision internationale) : composante PA ?', answer: 'Expérience sensorielle et émotionnelle désagréable, liée ou évoquant lésion tissulaire. Inclut communication chez non verbal (échelles comportementales). Base ECPA, DOLOPLUS validation internationale.', tags: ['IASP', 'douleur', 'classification'] },

  { id: 'mega7-40', chapter: 'ch8', rang: 'B', question: 'Économie : sous-traitement douleur chronique PA — conséquences système ?', answer: 'Dépression, immobilisation, hospitalisations, polymédication. Programmes education douleur et équipes mobile gériatrique = réduction coûts indirects.', tags: ['économie santé', 'douleur', 'qualité'] },

  { id: 'mega7-41', chapter: 'ch9', rang: 'A', question: 'Classification OMS démence (ICD-11 6D8x) : types majeurs ?', answer: 'Alzheimer, vasculaire, corps de Lewy, fronto-temporale, mixte, autre spécifié. Codage uniforme recherche et politiques santé (plans nationaux démence OMS).', tags: ['ICD-11', 'démence', 'OMS'] },

  { id: 'mega7-42', chapter: 'ch9', rang: 'A', question: 'OMS plan action démence 2017-2025 : axe prévention ?', answer: 'Réduire facteurs risque modifiables (activité, HTA, diabète, tabac, alcool, isolement, audition). Pas prévention pharmacologique validée ; dépistage pas systématique population.', tags: ['OMS', 'démence', 'prévention'] },

  { id: 'mega7-43', chapter: 'ch9', rang: 'B', question: 'Principe bioéthique autonomie : conduite automobile et démence — approche ?', answer: 'Évaluation capacité conduite (médecin/ergo) ; information patient/famille ; signalement préfecture si danger. Balance sécurité publique et maintien autonomie sociale.', tags: ['bioéthique', 'autonomie', 'démence'] },

  { id: 'mega7-44', chapter: 'ch9', rang: 'A', question: 'NIA-AA 2018 critères Alzheimer biomarqueurs : rôle vs diagnostic clinique PA ?', answer: 'AT(N) pour recherche et essais ; clinique reste base soins. PET/PLasma coûteux ; pas obligatoire EVC classique. Économie : ciblage thérapies anti-amylose si indication stricte.', tags: ['NIA-AA', 'classification', 'Alzheimer'] },

  { id: 'mega7-45', chapter: 'ch9', rang: 'B', question: 'Coût global démence (OCDE) : composantes directes/indirectes ?', answer: 'Soins formels (hôpital, EHPAD), informels (aidants), perte productivité. Projection démographie → investissement prévention risque et modèles soins communautaires.', tags: ['économie santé', 'démence', 'OCDE'] },

  { id: 'mega7-46', chapter: 'ch10', rang: 'A', question: 'OMS dépression sujets âgés : dépistage recommandé en soins primaires ?', answer: 'Interrogatoire ciblé si facteurs risque (veuvage, maladie chronique, isolement). GDS-15 validé internationalement. Traitement ISRS + psychosocial ; prévention suicide prioritaire.', tags: ['OMS', 'dépression', 'dépistage'] },

  { id: 'mega7-47', chapter: 'ch10', rang: 'A', question: 'Classification ICD-11 troubles dépressifs (6A7x) : spécificité vieillissement ?', answer: 'Pas sous-type « dépression gériatrique » séparé ; attention présentation atypique (somatisation, anxiété). Codage permet statistiques et comparaisons internationales.', tags: ['ICD-11', 'dépression', 'classification'] },

  { id: 'mega7-48', chapter: 'ch10', rang: 'B', question: 'Bioéthique : hospitalisation involontaire dépression suicidaire PA ?', answer: 'Respect procédure légale (péril imminent, discernement altéré). Information droits, durée limitée, soins proportionnés. Alternative : hospitalisation volontaire si possible.', tags: ['bioéthique', 'suicide', 'hospitalisation'] },

  { id: 'mega7-49', chapter: 'ch10', rang: 'A', question: 'Prévention dépression PA : interventions psychosociales OMS (evidence) ?', answer: 'Activité physique, programmes sociaux, traitement sommeil/douleur, réduction solitude. Coût-efficacité supérieure à médication seule légère-modérée.', tags: ['OMS', 'prévention', 'dépression'] },

  { id: 'mega7-50', chapter: 'ch10', rang: 'B', question: 'Charge économique dépression non traitée chez ≥65 ans ?', answer: 'Augmentation consommation soins, non-observance autres pathologies, institutionnalisation. Dépistage GDS en consultation = levier faible coût.', tags: ['économie santé', 'dépression', 'prévention'] },

  { id: 'mega7-51', chapter: 'ch11', rang: 'A', question: 'DSM-5-TR delirium : critères A-D résumés pour EVC international ?', answer: 'A perturbation attention/conscience, B changement aigu/fluctuant, C cause médicale, D non mieux expliqué par autre trouble mental. Aligné concept CAM ; durée variable.', tags: ['DSM-5', 'delirium', 'classification'] },

  { id: 'mega7-52', chapter: 'ch11', rang: 'A', question: 'OMS guide prévention delirium hôpital (HELP inspiré) : bundles ?', answer: 'Orientation, sommeil, mobilisation, hydratation, vision/audition, éviter sédation inutile. Réduction incidence 30-40 % dans études ; économie jours hospitalisation.', tags: ['OMS', 'delirium', 'prévention'] },

  { id: 'mega7-53', chapter: 'ch11', rang: 'B', question: 'ICD-11 6D70 delirium : codage épidémiologie iatrogénie ?', answer: 'Suivi incidence post-chirurgie, EHPAD, USI. Indicateur qualité hôpital et cible programmes prévention médicamenteuse.', tags: ['ICD-11', 'delirium', 'santé publique'] },

  { id: 'mega7-54', chapter: 'ch11', rang: 'A', question: 'Bioéthique : contention physique delirium agité — dernier recours ?', answer: 'Proportionnalité, durée minimale, alternative pharmacologique/environnement d\'abord. Traçabilité ; risque traumatique et aggravation delirium. Respect dignité (CIO).', tags: ['bioéthique', 'contention', 'delirium'] },

  { id: 'mega7-55', chapter: 'ch11', rang: 'B', question: 'Coût delirium hospitalier (méta-analyses internationales) ?', answer: 'Allongement séjour, placement post-acute, mortalité. Investissement protocoles non pharmacologiques = économies nettes estimées millions/an par pays.', tags: ['économie santé', 'delirium', 'prévention'] },

  { id: 'mega7-56', chapter: 'ch12', rang: 'A', question: 'OMS document « Step safely » 2021 : stratégies prévention chutes ?', answer: 'Multisectoriel : exercice équilibre, environnement, médicaments, vision, chaussures, formation professionnels. Objectif SDG réduction mortalité chutes 30 % d\'ici 2030.', tags: ['OMS', 'chute', 'prévention'] },

  { id: 'mega7-57', chapter: 'ch12', rang: 'A', question: 'Classification externe causes chute (ICD-10 W00-W19) : usage ?', answer: 'Codage lieu/mécanisme (glissement, marche, lit). Analyses épidémiologiques et cibles prévention environnement (domicile vs institution).', tags: ['ICD', 'chute', 'classification'] },

  { id: 'mega7-58', chapter: 'ch12', rang: 'B', question: 'Coût fracture chute OCDE : comparaison prévention vs traitement ?', answer: 'Chaque fracture hanche ~ tens of thousands € direct ; prévention multifactorielle (vitamine D, exercice, revue meds) coût inférieur par QALY gagné dans modèles.', tags: ['économie santé', 'chute', 'OCDE'] },

  { id: 'mega7-59', chapter: 'ch12', rang: 'A', question: 'WHO fall prevention in older age : exercice type Otago / Tai Chi ?', answer: 'Programmes structurés renforcement et équilibre ≥3 mois. Efficacité démontrée ; déploiement communautaire = politique santé publique.', tags: ['OMS', 'exercice', 'prévention'] },

  { id: 'mega7-60', chapter: 'ch12', rang: 'B', question: 'Bioéthique : informer PA du risque chute et limiter autonomie domicile ?', answer: 'Vérité progressive ; proposer adaptations (aides, téléalarme) plutôt que restriction arbitraire. Respect choix risqué informé si discernement.', tags: ['bioéthique', 'chute', 'autonomie'] },

  { id: 'mega7-61', chapter: 'ch13', rang: 'A', question: 'Classification NPUAP/EPUAP/NPIAP 2016 (press injury) : stades 1-4 résumé ?', answer: '1 érythème non blanchissant, 2 perte partielle dermis, 3 perte peau complète, 4 tissus profonds. Standard international escarres ; remplace ancienne terminologie NPUAP seule.', tags: ['NPIAP', 'escarre', 'classification'] },

  { id: 'mega7-62', chapter: 'ch13', rang: 'A', question: 'OMS soins de plaie : prévention pression alitement ?', answer: 'Repositionnement, surfaces redistribution pression, nutrition, mobilisation précoce, peau sèche. Bundle qualité réduit incidence institution.', tags: ['OMS', 'escarre', 'prévention'] },

  { id: 'mega7-63', chapter: 'ch13', rang: 'B', question: 'Économie : coût escarre stade III-IV vs prévention Braden ?', answer: 'Traitement plaie complexe, antibiotiques, allongement séjour >> coût matelas et protocoles. Indicateur qualité établissement financé.', tags: ['économie santé', 'escarre', 'prévention'] },

  { id: 'mega7-64', chapter: 'ch13', rang: 'A', question: 'Syndrome immobilisation : prévention OMS (activité physique hospitalière) ?', answer: 'Lever précoce, objectifs quotidiens marche, éviter contention sédative. Réduit pneumonie, TVP, confusion, déconditioning.', tags: ['OMS', 'immobilisation', 'prévention'] },

  { id: 'mega7-65', chapter: 'ch13', rang: 'B', question: 'ICD-11 L89 décubitus : codage mortalité/morbidité internationale ?', answer: 'Localisation anatomique escarre pour registres. Comparaisons pays et cibles réduction iatrogénie alitement.', tags: ['ICD-11', 'escarre', 'classification'] },

  { id: 'mega7-66', chapter: 'ch14', rang: 'A', question: 'OMS dénutrition : critères phénotype GLIM 2018 ?', answer: 'Perte poids + masse musculaire réduite (ou apports réduits, inflammation). Consensus international remplaçant critères hétérogènes ; complète MNA en pratique.', tags: ['GLIM', 'dénutrition', 'classification'] },

  { id: 'mega7-67', chapter: 'ch14', rang: 'A', question: 'IDDSI framework (international) : niveaux 0-7 utilité ?', answer: 'Textures aliments et liquides standardisées (purée 4, nectar 1, etc.). Sécurité dysphagie transfrontalière ; réduit fausses routes.', tags: ['IDDSI', 'classification', 'dysphagie'] },

  { id: 'mega7-68', chapter: 'ch14', rang: 'B', question: 'Économie santé : dénutrition hospitalière PA — impact ?', answer: 'Infections, retard cicatrisation, réadmissions. Dépistage MNA admission + nutrition thérapeutique = économies séjour (études ESPEN).', tags: ['économie santé', 'dénutrition', 'prévention'] },

  { id: 'mega7-69', chapter: 'ch14', rang: 'A', question: 'OMS recommandation apports protéiques personnes âgées ?', answer: '≥1 g/kg/j, jusqu\'à 1,2-1,5 si maladie aiguë/dénutrition. Prévention sarcopénie ; alignement ESPEN/HAS.', tags: ['OMS', 'nutrition', 'prévention'] },

  { id: 'mega7-70', chapter: 'ch14', rang: 'B', question: 'Bioéthique : nutrition artificielle fin de vie dément avancée ?', answer: 'Pas obligation légale ; proportionnalité, confort oral, directives. Distinction dénutrition traitable aigu vs phase terminale.', tags: ['bioéthique', 'nutrition', 'fin de vie'] },

  { id: 'mega7-71', chapter: 'ch15', rang: 'A', question: 'Classification ICS (International Continence Society) types IU ?', answer: 'Effort, urgenturie, mixte, regorgement, fonctionnelle, nocturie. Base diagnostic international ; guide examen urodynamique si doute.', tags: ['ICS', 'incontinence', 'classification'] },

  { id: 'mega7-72', chapter: 'ch15', rang: 'A', question: 'OMS : incontinence comme marqueur de fragilité — dépistage ?', answer: 'Question systématique consultation PA ; pas honte normalisée. Traitement améliore qualité vie et réduit infections/soins peau.', tags: ['OMS', 'incontinence', 'dépistage'] },

  { id: 'mega7-73', chapter: 'ch15', rang: 'B', question: 'Prévention IU : rééducation périnéale niveau evidence OMS/ICS ?', answer: '1ère intention effort/urgenturie légère-modérée mobile ; 8-12 semaines. Économique vs chirurgie/changes long terme.', tags: ['ICS', 'prévention', 'rééducation'] },

  { id: 'mega7-74', chapter: 'ch15', rang: 'A', question: 'ICD-11 MF50 incontinence urinaire : codage morbidité PA ?', answer: 'Statistiques prévalence, cibles formation soignants EHPAD, indicateurs qualité hygiène.', tags: ['ICD-11', 'incontinence', 'santé publique'] },

  { id: 'mega7-75', chapter: 'ch15', rang: 'B', question: 'Économie : coût changes et soins incontinence vs traitement actif ?', answer: 'Charges importantes domicile/EHPAD ; mirabegron, rééducation, optimisation liquides peuvent réduire charge aidante et dermatoses.', tags: ['économie santé', 'incontinence', 'prévention'] },

  { id: 'mega7-76', chapter: 'ch16', rang: 'A', question: 'Critères STOPP/START v2 (international) : objectif vs Beers ?', answer: 'STOPP : prescriptions inappropriées ; START : sous-prescription. Structurés par indication clinique ; utilisés Europe, complément Beers US. Conciliation et déprescription PA.', tags: ['STOPP/START', 'classification', 'iatrogénie'] },

  { id: 'mega7-77', chapter: 'ch16', rang: 'A', question: 'OMS Good Prescribing Practice PA : principes clés ?', answer: 'Liste médicaments essentiels adaptée, doses rénales, polypharmacie review annuelle, éviter anticholinergiques/BZD long cours. Réduction mortalité et coûts iatrogénie.', tags: ['OMS', 'prescription', 'prévention'] },

  { id: 'mega7-78', chapter: 'ch16', rang: 'B', question: 'Anticholinergic Burden Score (ACB) : classification internationale ?', answer: 'Score 1-3 par molécule ; ≥3 associé déclin cognitif, chutes. Outil quantitatif déprescription transnational.', tags: ['ACB', 'classification', 'iatrogénie'] },

  { id: 'mega7-79', chapter: 'ch16', rang: 'A', question: 'Bioéthique déprescription : consentement et non-abandon ?', answer: 'Expliquer rationnel, surveillance, ne pas retirer tous traitements simultanément. Respect autonomie ; alternative non médicamenteuse.', tags: ['bioéthique', 'déprescription', 'consentement'] },

  { id: 'mega7-80', chapter: 'ch16', rang: 'B', question: 'Économie : réduction polymédication (≥10 médicaments) — bénéfices ?', answer: 'Moins hospitalisations évitable, ADE, consultations urgence. Pharmacien clinique et PDA : ROI positif systèmes santé.', tags: ['économie santé', 'polymédication', 'prévention'] },

  { id: 'mega7-81', chapter: 'ch17', rang: 'A', question: 'OMS définition soins palliatifs (2002 révisée) : élargissement au-delà cancer ?', answer: 'Amélioration qualité vie patients et familles face maladie menaçant vie, précocement dans évolution. Démence, BPCO, IC, SLA inclus. Droits humains fondamentaux.', tags: ['OMS', 'palliatif', 'définition'] },

  { id: 'mega7-82', chapter: 'ch17', rang: 'A', question: 'Classification WHO analgesic ladder palliatif : adaptation PA fragile ?', answer: 'Même échelle avec doses réduites, surveillance sédation. Adjuvants (corticoides, antidépresseurs) ; voie SC si oral impossible.', tags: ['OMS', 'douleur', 'palliatif'] },

  { id: 'mega7-83', chapter: 'ch17', rang: 'B', question: 'Bioéthique double effet (Doctrine) : sédation et raccourcissement vie ?', answer: 'Intention primaire soulager ; effet secondaire possible sur survie accepté si proportionné. Distinction légale euthanasie (France). Collégialité SPCMD.', tags: ['bioéthique', 'double effet', 'SPCMD'] },

  { id: 'mega7-84', chapter: 'ch17', rang: 'A', question: 'Lancet Commission valeur soins palliatifs : message économique ?', answer: 'Intégration précoce réduit hospitalisations inutiles, améliore qualité décès. Investissement formation et structures communautaires.', tags: ['économie santé', 'palliatif', 'Lancet'] },

  { id: 'mega7-85', chapter: 'ch17', rang: 'B', question: 'ICD-11 Z64.8 accompagnement palliatif : codage indicateurs ?', answer: 'Suivi accès soins palliatifs population ; OMS indicateur couverture nationale plans palliatifs.', tags: ['ICD-11', 'palliatif', 'santé publique'] },

  { id: 'mega7-86', chapter: 'ch18', rang: 'A', question: 'Mini-dossier EVC : grille OMS ICOPE (Integrated Care Older People) ?', answer: 'Dépistage capacités intrinsèques (mobilité, nutrition, cognition, vue, audition, humeur) → plan personnalisé soins communautaires. Cadre international mini-dossier multidimensionnel.', tags: ['OMS', 'ICOPE', 'EGM'] },

  { id: 'mega7-87', chapter: 'ch18', rang: 'A', question: 'Priorisation problèmes : matrice urgence/importance (santé publique) ?', answer: 'Urgence vitale/réversible d\'abord (sepsis, hypoglycémie) ; puis prévention secondaire (chute, iatrogénie). Optimise ressources limitées consultation.', tags: ['priorisation', 'mini-dossier', 'économie'] },

  { id: 'mega7-88', chapter: 'ch18', rang: 'B', question: 'Bioéthique mini-dossier : divulgation pronostic à PA et aidant ?', answer: 'Vérité progressive, demande patient ; ne pas infantiliser. Personne de confiance incluse selon volonté. Culture et capacité de recevoir l\'information.', tags: ['bioéthique', 'communication', 'pronostic'] },

  { id: 'mega7-89', chapter: 'ch18', rang: 'A', question: 'Transition soins (WHO Integrated Care) : éléments sortie hôpital PA ?', answer: 'Conciliation médicamenteuse, RDV <7 j, plan détection décompensation, lien MT/gériatre/SSIAD. Réduit réadmissions 30 j (indicateur qualité économique).', tags: ['OMS', 'transition', 'prévention'] },

  { id: 'mega7-90', chapter: 'ch18', rang: 'B', question: 'Coût réadmission évitable PA fragile (bundles internationaux) ?', answer: 'Programmes orthogériatrie, liaison infirmière, télémonitoring ciblés ; économies nettes dans RCT certains contextes.', tags: ['économie santé', 'réadmission', 'qualité'] },

  { id: 'mega7-91', chapter: 'ch19', rang: 'A', question: 'Key feature : PA fiévreux sans foyer — approche OMS syndromique infection ?', answer: 'Considérer infection jusqu\'à preuve contraire (urinaire, pulmonaire, peau, cathéter). Delirium/chute = signe infection âgé. Biologie + imagerie ciblée ; antibiothérapie empirique raisonnée après prélèvements.', tags: ['OMS', 'infection', 'key-feature'] },

  { id: 'mega7-92', chapter: 'ch19', rang: 'A', question: 'Key feature : hyponatrémie confusion — classification ICD-11/E87.1 ?', answer: 'Aiguë vs chronique ; hypovolémique, euvolémique (SIADH), hypervolémique. Correction lente sauf sévère symptomatique (risque ODS). Médicaments iatrogènes fréquents PA.', tags: ['ICD-11', 'hyponatrémie', 'key-feature'] },

  { id: 'mega7-93', chapter: 'ch19', rang: 'B', question: 'Key feature : chute + amaurose transitoire — prévention secondaire stroke ?', answer: 'Urgence vasculaire ; classification TOAST/AHA stroke. Antiagrégation/anticoagulation selon cause ; réduction risque récidive = prévention tertiaire OMS.', tags: ['prévention', 'AVC', 'key-feature'] },

  { id: 'mega7-94', chapter: 'ch19', rang: 'A', question: 'Bioéthique key feature : refus hospitalisation PA avec pneumonie ?', answer: 'Capacité décisionnelle, information risque décès, alternative soins domicile/antibiotique oral si possible. Traçabilité ; soins confort si évolution fatale.', tags: ['bioéthique', 'refus', 'key-feature'] },

  { id: 'mega7-95', chapter: 'ch19', rang: 'B', question: 'Key feature : hypercalcémie malignité vs immobilisation — diagnostic rapide ?', answer: 'PTH basse malignité ; PTH élevée hyperparathyroïdie primaire fréquente PA. Traitement hydratation, bisphosphonate ; éviter immobilisation prolongée.', tags: ['classification', 'hypercalcémie', 'key-feature'] },

  { id: 'mega7-96', chapter: 'ch20', rang: 'A', question: 'Calendrier vaccinal OMS/UE PA ≥65 : grippe, pneumocoque, zona, COVID rappels ?', answer: 'Grippe annuelle ; pneumocoque selon schéma national (conjugué + polysaccharide) ; zona recombinant ≥65 ; COVID selon recommandations saisonnières. Prévention primaire infections sévères.', tags: ['OMS', 'vaccination', 'prévention'] },

  { id: 'mega7-97', chapter: 'ch20', rang: 'A', question: 'Classification CKD-EPI DFG : stades G1-G5 utilisation internationale posologie ?', answer: 'G3a <60, G3b <45, G4 <30, G5 dialyse. Ajustement médicaments rénaux global ; formule CKD-EPI recommandée OMS/KDIGO vs Cockcroft seul.', tags: ['KDIGO', 'DFG', 'classification'] },

  { id: 'mega7-98', chapter: 'ch20', rang: 'B', question: 'OMS HTA guideline 2021 : cible PA personnes ≥65 ?', answer: 'Traitement si ≥140/90 confirmé ; cible générale <140/<80 si toléré. Personnaliser fragilité, orthostatisme, comorbidités. Économie : prévention AVC/IC.', tags: ['OMS', 'HTA', 'prévention'] },

  { id: 'mega7-99', chapter: 'ch20', rang: 'A', question: 'Dépistage cancer sein/côlon/prostate PA : approche prévention quaternaire ?', answer: 'HAS/USPSTF : individualiser selon espérance vie et bénéfice ; arrêt dépistage si horizon vie limité sans bénéfice. Évite surdiagnostic coûteux et invasif.', tags: ['prévention quaternaire', 'dépistage', 'économie'] },

  { id: 'mega7-100', chapter: 'ch20', rang: 'B', question: 'Item transversal : gériatrie et ODD (objectifs développement durable) ONU ?', answer: 'ODD3 santé bien-être, ODD10 inégalités réduites (accès soins PA), ODD11 villes durables. Cadre politique international au-delà ITEM français.', tags: ['ONU', 'gériatrie', 'santé publique'] }
];
