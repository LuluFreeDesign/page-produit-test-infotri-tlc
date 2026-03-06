# CLAUDE.md

## Projet

Page produit fictive de démonstration pour le widget Info-Tri ADEME (filière TLC). Hébergée sur GitHub Pages.

## Stack

- HTML / CSS / JS vanilla — pas de framework, pas de build
- Images Unsplash (via URL directe)
- Fonts Google Fonts (Inter + Playfair Display)
- Widget Info-Tri chargé via script externe ADEME

## Structure

```
index.html   — page unique, fiche produit complète
style.css    — design system (variables CSS, responsive)
script.js    — interactions (onglets, galerie, sélecteurs)
```

## Conventions

- CSS : variables dans `:root`, BEM-like avec noms explicites
- Palette : noir `#1a1a1a` + vert naturel `#2d6a4f` + gris `#f7f6f4`
- Responsive : breakpoints à 900px (tablette) et 640px (mobile)
- Pas de dépendances npm — tout est statique

## Widget Info-Tri

Le widget est intégré dans la section QCE (onglet "Qualités & Caractéristiques Environnementales") via :

```html
<script src="https://quefairedemesdechets.ademe.fr/infotri/iframe.js" data-config="categorie=textile&consigne=3&avec_phrase=true"></script>
```

Ne pas modifier cette URL — elle provient du configurateur officiel ADEME.

## Déploiement

Push sur `main` → GitHub Pages déploie automatiquement.
URL : https://lulufreedesign.github.io/page-produit-test-infotri-tlc/

## Commandes utiles

```bash
# Serveur local
npx serve .

# Ou simplement ouvrir index.html dans le navigateur
open index.html
```

## ⚠️ RÈGLE IMPORTANTE

**Ne JAMAIS commit, push ou merge sans l'approbation explicite de l'utilisateur.**

Avant toute action de versioning :
1. Proposer les changements et attendre confirmation
2. Montrer un aperçu du code si pertinent
3. Obtenir un "oui" explicite avant git commit/push

Cette règle est stricte et non négociable.
