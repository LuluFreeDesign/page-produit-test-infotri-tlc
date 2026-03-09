# Page Produit Démo — Info-Tri TLC

Page web fictive simulant une fiche produit e-commerce (pull en coton biologique) pour démontrer l'intégration du widget **Info-Tri** de l'ADEME dans le contexte de la filière **TLC** (Textiles, Linge de maison, Chaussures).

## Objectif

Permettre aux partenaires et entreprises de la filière TLC de :
- **Visualiser** le rendu du widget Info-Tri sur une fiche produit réaliste
- **Comprendre** comment l'intégrer dans une section QCE (Qualités & Caractéristiques Environnementales)
- **Tester** le widget en conditions réelles (cliquable, interactif)

## Démo en ligne

👉 **https://lulufreedesign.github.io/page-produit-test-infotri-tlc/**

## Contenu de la page

- Fiche produit classique : galerie photo, sélecteur taille/couleur, prix, avis
- Section **QCE** avec 3 thématiques :
  - Recyclabilité
  - Réparabilité
  - Possibilité de réemploi
- **Widget Info-Tri ADEME** intégré via le configurateur : https://quefairedemesdechets.ademe.fr/infotri/

## Intégration du widget Info-Tri

Le widget s'intègre avec une seule ligne de code :

```html
<script src="https://quefairedemesdechets.ademe.fr/infotri/iframe.js" data-config="categorie=textile&consigne=3&avec_phrase=true"></script>
```

Pour configurer votre propre widget, rendez-vous sur le [configurateur Info-Tri](https://quefairedemesdechets.ademe.fr/infotri/).

## Intégrer la démo sur votre site

Intégration ultra-simple : **une seule ligne de code**.

### Usage

```html
<script src="https://lulufreedesign.github.io/page-produit-test-infotri-tlc/embed.js"
        data-width="100%" data-height="1200px"></script>
```

### Options

- `data-width` : largeur du conteneur (défaut: `100%`)
- `data-height` : hauteur de l'iframe (défaut: `1200px`)

**Exemples** :

```html
<!-- Pleine largeur -->
<script src="..." data-width="100%"></script>

<!-- Largeur fixe -->
<script src="..." data-width="600px" data-height="900px"></script>

<!-- Défauts (identique à aucun attribut) -->
<script src="..."></script>
```

### Avantages

✅ **Une seule ligne** — le script se positionne lui-même
✅ Toujours à jour — pointe vers la dernière version GitHub Pages
✅ Zéro dépendance — script auto-contenu
✅ Responsive — s'adapte à votre mise en page
✅ Pas de configuration — suffit de copier/coller

## Stack technique

HTML / CSS / JS vanilla — aucune dépendance, aucun build nécessaire.

## Liens utiles

- [Configurateur Info-Tri](https://quefairedemesdechets.ademe.fr/infotri/)
- [Présentation de la démarche](https://quefairedemesdechets.ademe.fr/nos-outils/integrer-info-tri/)
- [Que Faire de Mes Déchets](https://quefairedemesdechets.ademe.fr/)
