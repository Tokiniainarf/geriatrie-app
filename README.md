# Gériatrie 5e éd. — CNEG (PWA hors-ligne)

Application web progressive (PWA) permettant la lecture **hors-ligne** du manuel de référence *Gériatrie, 5e édition* (CNEG – Pr Jacques Boddaert, Elsevier Masson 2021).

- **20 chapitres**
- **344 pages** de contenu structuré
- **33 figures** sélectionnées
- Conçu pour la préparation ECN (ITEMs intégrés)

## Fonctionnalités principales

- Lecture fluide en mode continu ou **page par page**
- Recherche plein texte
- Favoris par chapitre
- Progression par chapitre (pages visitées)
- Table des matières + navigation par page
- Index des ITEMs ECN
- Galerie de figures
- Mode sombre / taille du texte / interligne ajustable
- 100 % utilisable hors-ligne une fois installé
- Swipe sur mobile
- Raccourcis clavier (`/` pour rechercher, flèches)

## Installation & utilisation

### En local (développement)

```bash
# Avec Python
python -m http.server 8080
# ou
python3 -m http.server 8080
```

Puis ouvrir http://localhost:8080

Sur Windows vous pouvez aussi utiliser `serve.bat`.

### Installer comme application (PWA)

1. Ouvrez l’application dans Chrome / Edge / Safari
2. Cliquez sur le bouton **Installer** qui apparaît en bas
3. L’application s’installe sur l’écran d’accueil / bureau et fonctionne complètement hors-ligne

## Structure du projet

```
index.html   # UI + styles (vanilla)
app.js       # Logique complète (navigation, rendu, stockage local)
data.js      # Contenu complet des 20 chapitres (généré)
figures.js   # Cartographie des illustrations
sw.js        # Service Worker (offline)
manifest.json
tools/       # Scripts Python d’extraction depuis le PDF source
images/      # Illustrations extraites (crops + pages)
```

Le contenu provient d’un travail d’extraction et de nettoyage depuis le PDF (PyMuPDF + scripts de nettoyage).

## Améliorations récentes (UI/UX)

- Suivi précis de la progression par chapitre (pages visitées)
- Barres de progression visuelles dans la liste des chapitres
- Interligne réglable
- Meilleure lisibilité (typographie, espacement, callouts)
- Recherche améliorée (contexte + saut direct vers la page)
- Lightbox figures amélioré
- Indicateurs de progression globaux
- Transitions et polissage visuel général

## Raccourcis clavier

- `/` → Ouvrir la recherche
- `←` `→` → Chapitre ou page précédente/suivante (selon mode)
- `Échap` → Fermer overlays

## Remarques

- Cette application est un outil d’étude personnel.
- Le contenu est la propriété de l’éditeur et du CNEG.
- Les scripts de `tools/` permettent de régénérer `data.js` et les images à partir du PDF original si nécessaire.

## Crédits

Manuel : **Gériatrie – 5e édition**  
Coordination : Pr Jacques Boddaert  
Éditeur : Elsevier Masson – CNEG

---

Bonnes révisions !
```

This is a solid French README.

Now, let's also improve the on-boarding text slightly if needed.

Finally, to make the app even nicer, let's add a small improvement to the stats in the home and perhaps update manifest description.

Update the manifest to be more accurate with 344 pages.