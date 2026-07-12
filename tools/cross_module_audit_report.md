# Audit transversal de pertinence et répétitions — v232

- 141 jeux de données structurés chargés, 2983 enregistrements.
- BrainFeed rendu : 71 cartes (quiz_flash 24, cas_choc 21, visual 14, piege_exam 12).
- Identifiants dupliqués dans un même jeu : 0.
- Textes strictement dupliqués dans un même jeu : 0.
- Paires quasi-identiques dans les modules principaux : 0.
- Cartes Feed strictement dupliquées : 0; quasi-identiques : 0; trop longues : 0.

- Flashcards rendues : 1000; anciennes cartes OCR rendues : 0; cartes excessivement longues : 0.

## Identifiants dupliqués

- Aucun.

## Doublons stricts internes

- Aucun.

## Quasi-doublons internes

- Aucun.

## Chevauchements exacts entre modules

- SYNTHESIS ↔ SYNTHESIS_EXPANDED : « Évaluation de l'autonomie »
- ANNALES_EXPANDED ↔ CAS_EVC_2015_2017 : « Vieillissement physiologique vs pathologique »
- ANNALES_EXPANDED ↔ SITUATIONS_EVC : « Incontinence urinaire — démarche diagnostique »
- PROTOCOLES_COMPLETS ↔ GUIDES_INFECTIOLOGIE : « Infection à Clostridioides difficile »
- PROTOCOLES_COMPLETS ↔ SITUATIONS_EVC : « Douleur chez le patient dément »
- PROTOCOLES_COMPLETS ↔ SYNDROMES_GERIATRIQUES : « Hypotension orthostatique »
- SITUATIONS_EVC ↔ SITUATIONS_GARDE ↔ CAS_EVC_2024 : « Confusion post-opératoire »
- MEMOS_RAPIDES ↔ MEMOS_VISUELS : « Braden — 6 facteurs escarre »
- MEMOS_RAPIDES ↔ CLINICAL_REFERENCE : « ALGOPLUS — douleur aiguë non communicante »
- MEMOS_RAPIDES ↔ MEMOS_VISUELS : « Tinetti — équilibre + marche »
- ANNALES_ARCHIVE ↔ CAS_EVC_2015_2017 : « Incontinence urinaire mixte »
- SYNTHESIS_EXPANDED ↔ ITEMS_EVC : « Ostéoporose et fractures »
- CAS_EVC_2024 ↔ ANNALES_V2 : « Polymédication et cascade iatrogénique »
- MEMOS_VISUELS ↔ OUTILS_EVALUATION : « MNA (Mini Nutritional Assessment) »
- GUIDES_PHYSIOTHERAPIE ↔ PROTOCOLES_READAPTATION : « Rééducation de la marche »
- GUIDES_ONCOLOGIE ↔ GUIDES_UROLOGIE : « Cancer de la prostate chez le sujet âgé »

## Artefacts ou incohérences lexicales

- Aucun.

## Artefacts conservés uniquement pour traçabilité (non rendus)

- REVISION_AIDS[17] 
- REVISION_AIDS[24] 
- REVISION_AIDS[37] 
- REVISION_AIDS[40] 
- REVISION_AIDS[43] 
- REVISION_AIDS[46] 
- REVISION_AIDS[48] 
- REVISION_AIDS[51] 
- REVISION_AIDS[55] 
- REVISION_AIDS[58] 
- REVISION_AIDS[68] 
- REVISION_FLASHCARDS[17] Points clés — Ostéoporose et fractures : VII. Prévention de l'ostéoporose
- REVISION_FLASHCARDS[24] Points clés — Douleur : V. Traitement
- REVISION_FLASHCARDS[37] Points clés — Du vieillissement articulaire à l'arthrose : IV. Traitements de la douleur
- REVISION_FLASHCARDS[40] Points clés — Troubles neurocognitifs : IV. Prise en charge et traitement des troubles neurocognitifs majeurs du patient
- REVISION_FLASHCARDS[43] Points clés — Dépression : IV. Prise en charge et traitement d'un épisode dépressif du patient âgé
- REVISION_FLASHCARDS[46] Points clés — Syndrome confusionnel : IV. Prise en charge et traitement de la confusion du patient âgé
- REVISION_FLASHCARDS[48] Points clés — Chutes et marche : V. Prise en charge des personnes âgées après une chute
- REVISION_FLASHCARDS[51] Points clés — Alitement : IV. Prévention du syndrome d'immobilisation
- REVISION_FLASHCARDS[55] Points clés — Nutrition : IV. Prise en charge nutritionnelle chez la personne âgée
- REVISION_FLASHCARDS[58] Points clés — Évaluer l'état nutritionnel et en comprendre l'importance : III. Prise en charge multidisciplinaire
- REVISION_FLASHCARDS[68] Points clés — Questions isolées : Introduction

## BrainFeed — doublons stricts

- Aucun.

## BrainFeed — quasi-doublons

- Aucun.

## BrainFeed — contenus trop longs

- Aucun.

## Lecture fonctionnelle

- Les chevauchements entre protocole, garde, synthèse et flashcard sont acceptables lorsqu’ils servent des contextes différents ; ils ne doivent pas produire deux cartes identiques dans la même vue.
- REVISION_AIDS, REVISION_FLASHCARDS et ANNALES_ARCHIVE restent dans le bundle historique mais sont explicitement exclus des vues actives.
- La référence clinique historique n’expose plus ses anciennes posologies génériques dans la recherche ; seuls les scores relus restent indexés.
- Les contrôles automatiques n’établissent pas la validité clinique : ils signalent les éléments nécessitant une relecture ciblée.