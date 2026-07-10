# Audit conservateur de complétude

Date de l'audit : 10 juillet 2026<br>
Référence immuable : branche `main`, commit `9a624a4`

## Conclusion

L'application conserve son apparence, son organisation, ses modules et ses formulations validés. L'audit a restauré uniquement douze pages substantielles dont l'absence a été confirmée dans le PDF fourni, ajouté les deux tableaux correspondants qui n'avaient aucun équivalent, et réparé deux défauts techniques démontrés. La page physique 329, simple intercalaire « Entraînement II », reste volontairement absente.

Après correction, les pages substantielles 29 à 382 du manuel sont toutes expliquées : 356 pages uniques sont embarquées et l'unique absence est la page 329 non éditoriale. Aucun numéro de page ni texte de page n'est dupliqué.

## Omissions corrigées

| Chapitre | Pages physiques | Contenu confirmé dans le PDF |
|---|---:|---|
| 9 | 154 | Objectifs et hiérarchisation de l'ITEM 132 |
| 10 | 178 | Objectifs et hiérarchisation de l'ITEM 70 |
| 12 | 208 | Objectifs et hiérarchisation des ITEM 109 et 131 |
| 16 | 311–316 | Anémie, indications et étapes de la transfusion, suivi et événements indésirables |
| 17 | 317–318 | Ouverture du chapitre et objectifs de soins palliatifs |
| 18 | 331 | Début des mini-dossiers progressifs, dont le DP 1 |

Ajouts visuels strictement nécessaires :

- tableau 16.5, « Événements indésirables receveurs à rechercher » ;
- tableau 16.6, « Signes cardinaux et de mauvaise tolérance d'un EIR ».

Tous les identifiants de figures et tableaux détectés dans le corps du PDF disposent désormais d'un équivalent dans les données visuelles de l'application. Aucun visuel existant n'a été retiré.

## Défauts techniques réparés

- Suppression de la génération automatique de noms de médias inexistants : la liste éditoriale `EDU_VISUALS` est désormais la seule source, ce qui supprime la requête 404 vers `ch16-extra-1.jpg` sans retirer d'illustration réelle.
- Retour à la ligne des filtres de flashcards sous 480 px : le débordement horizontal observé à 390 px disparaît.
- Synchronisation mécanique de `data.js` et de sa section dans `data-bundle.js`, ainsi que de `faithful-visuals.js` dans le bundle.
- Passage du cache PWA et des ressources publiées à la version 210, uniquement parce que les fichiers publiés changent.
- Réparation des chemins et heuristiques de scripts d'audit, sans incidence sur l'application publiée.

## Matrice des options testées

Les 16 vues principales ont été ouvertes sur desktop et mobile, en thèmes sombre et clair. Chaque vue s'active, contient son rendu attendu et ne produit ni erreur console, ni réponse locale en échec, ni débordement horizontal.

| Vue ou fonction | Contrôles réalisés | Résultat |
|---|---|---|
| Accueil | chapitres, statistiques, accès rapides, navigation | Conforme |
| Carte des liens | ouverture et retour | Conforme |
| Synthèses | fiches, présentations Notebook, codes ITEM | Conforme |
| Flashcards | tous, rang A, rang B, filtre chapitre, précédent, mélange, suivant, retournement | Conforme |
| Lecture | 20 chapitres, retour, favori, notes, mode dense, points clés | Conforme |
| Favoris | état vide, ajout et retrait persistants | Conforme |
| Progression | ouverture et données locales | Conforme |
| Erreurs | ouverture et état | Conforme |
| Quiz | démarrage mixte et rendu d'une question | Conforme |
| Scores | filtres et ouverture des 56 calculateurs ; calculs ponctuels AGGIR, SPPB, Barthel, GDS-15 | Conforme |
| Feed | ouverture et révision quotidienne | Conforme |
| Dictionnaire | recherche et navigation de concept | Conforme |
| Garde | ouverture des fiches | Conforme |
| Annales | cas cliniques, sujets complets et filtres | Conforme |
| Protocoles | 136 fiches, filtres et corps non vides | Conforme |
| Réglages | thème, taille 20 px, interligne 1,9, persistance puis restauration | Conforme |
| Traitements | médiathèque, interactions, effets/syndromes, urgences/doses, recherche et filtre cardio | Conforme |
| Données personnelles | note sauvegardée, favori ajouté/retiré, progression persistante | Conforme |
| PWA | installation des ressources, rechargement hors ligne, mise à jour du Service Worker | Conforme |

## Frontend et couche de données

L'application est une PWA statique sans serveur applicatif, API, base distante ni authentification. La couche tenant lieu de backend est constituée des scripts de données, de `data-bundle.js`, de `localStorage` et du Service Worker.

- 20 chapitres et 356 pages uniques sont présents.
- 391 chemins d'assets statiques ont été vérifiés ; aucun fichier ne manque.
- Les données source et leur section embarquée ont la même empreinte.
- 56 calculateurs s'ouvrent et possèdent des identifiants uniques.
- 136 protocoles fusionnés possèdent des identifiants et titres exacts uniques, ainsi qu'un corps visible.
- Les notes, favoris, réglages et progression restent dans `localStorage` et survivent à un rechargement.
- Le démarrage hors ligne du cœur de l'application réussit après amorçage du cache.
- Aucun HTML ou SVG utilisateur n'est envoyé à un backend. Les notes sont réinjectées avec échappement HTML dans le champ d'édition.

Limites conservées : les polices Google sont externes, mais leur indisponibilité ne bloque pas l'application grâce aux polices de repli. Il n'existe pas de synchronisation multiappareil ni de sauvegarde distante des données personnelles.

## Répétitions et incohérences observées, laissées intactes

L'audit a parcouru 141 jeux de données structurés et 2 938 enregistrements. Aucun doublon d'identifiant n'a été détecté. Les points suivants sont consignés sans modification, conformément au principe de conservation :

- `REVISION_FLASHCARDS` réutilise des intitulés génériques comme « Points clés : Introduction » dans plusieurs chapitres. Le contexte de chapitre diffère : ce ne sont pas des doublons stricts.
- Six flashcards de révision semblent courtes ou tronquées par l'extraction du PDF. Leur correction exigerait une décision éditoriale et n'a donc pas été appliquée.
- Les séries « stades d'escarre 1 à 4 » et « GIR 1 à 6 » sont proches lexicalement mais pédagogiquement intentionnelles.
- Le chapitre 13 contient quatre courts blocs de définition ; les chapitres 17 à 20 ont un faible ratio de paragraphes selon l'heuristique automatisée. Leur rendu est toutefois non vide et cohérent avec la structure particulière des objectifs et exercices.
- Les pages 383 à 385 de l'index sont déjà présentes alors que les pages 386 à 388 ne le sont pas. Ce reliquat préexistant, hors corps des chapitres 29–382, est laissé intact faute d'omission pédagogique certaine dans les modules validés.
- Onze mentions de page intentionnellement blanche, 17 marqueurs OCR inversés `stnioP`, 20 en-têtes de copyright et 857 coupures de mots potentielles préexistent dans les données. Ils ne sont pas normalisés afin d'éviter toute reformulation massive.

## Valeur de l'application

L'application vaut la peine comme support personnel de révision : la couverture du manuel est désormais explicable, la navigation est rapide, le mode hors ligne est fonctionnel et les flashcards, quiz, annales, scores et protocoles couvrent des usages complémentaires.

- **EVC** : utile pour la répétition, les synthèses, les ITEM, les cas et le repérage rapide ; les six flashcards suspectes doivent rester secondaires jusqu'à une validation éditoriale.
- **Stages** : utile comme aide-mémoire pour scores, garde, médicaments et protocoles ; les décisions critiques doivent toujours être recoupées avec les recommandations HAS/ANSM et les protocoles locaux à jour.
- **Révision personnelle** : très utile grâce aux favoris, notes, progression, réglages de lecture et fonctionnement hors ligne.

Le manuel source datant de 2021, l'application ne doit pas être considérée comme une source clinique unique ni comme une base réglementaire actualisée.

## Validation exécutée

- suite E2E : 52/52 tests réussis ;
- vérification des 20 chapitres : exécution réussie, aucun chapitre vide ;
- audit des sections vides : zéro section vide ;
- cohérence scores/protocoles : `COHERENCE_OK` ;
- audit assets : 391 références, zéro manquante ;
- audit PDF : zéro page substantielle manquante, page non éditoriale 329 explicitée ;
- navigateur : 20 chapitres, 16 vues et sous-modes sans erreur console ni requête locale en échec ;
- responsive : largeur 390/390 px après correction des flashcards ;
- PWA : rechargement hors ligne réussi après amorçage du cache.

## Captures

Les captures avant et après sont conservées dans `audit-evidence/`. Les captures « avant/après » de l'accueil et du chapitre 1 servent à vérifier l'absence de changement structurel ; les captures du chapitre 16 documentent les deux nouveaux tableaux.
