# Audit transversal — Moestuin verzorgen — 2026-10-29

Branche `editorial/moestuin-verzorgen-hub-20261029`; **cinq pages éditorialement approuvées** : hub, water-geven, potgrond, bemesten, drainage. Pas de fusion ni déploiement.

## Contrôles GitHub réellement exécutés
- Lecture effective des cinq HTML sur la branche.
- SEO : cinq URL canoniques distinctes et cohérentes, titres, descriptions, H1 uniques, `lang=nl`, viewport.
- Contrôle statique de structure : paires des balises ciblées `main`, `section`, `div`, `a`, `table`, `tr`, `td`, `th`, `h1`, `h2`, `h3` équilibrées sur les cinq pages; tous tableaux dans `main`.
- Accessibilité de base : les cinq pages ont un skip-link clavier vers `main#hoofdinhoud`; quatre guides comportent chacun un tableau en région scroll clavier avec entêtes de colonnes explicites, à confirmer au navigateur.
- Maillage : le hub renvoie à ses quatre guides ; les quatre guides renvoient au hub; liens croisés contextuels et liens vers les pages de cultures, problèmes, zaaikalender et aménagement. Les destinations internes échantillonnées `munt-kweken-in-pot`, `problemen`, `moestuin-in-bakken`, `verticale-moestuin`, `blauwe-bessen-kweken-in-pot` ont bien un fichier index dans le dépôt.
- Recommandations cohérentes entre les pages : humidité de la zone racinaire avant arrosage, pot avec trous de drainage, substrat adapté et fertilisation d'après l'étiquette et la croissance réelle; ne pas confondre feuille jaune et déficit hydrique/nutritif.

## Fact-check transversal
- RHS https://www.rhs.org.uk/container-gardening/how-to-water-containers : vérifier humidité en profondeur; pas de rythme fixe; éviter arrosages excessifs et eau en soucoupe à long terme; adapter au vent, au volume et à la saison.
- RHS https://www.rhs.org.uk/container-gardening/growing-plants-in-containers : drainage en pot essentiel, risques d'excès d'eau en hiver, besoins eau/engrais liés au volume limité de substrat.
- UMN Extension https://extension.umn.edu/garden-and-home/yard-and-garden/gardening-in-minnesota/fertilizing-and-watering-container-plants : démarrage possible des apports après ~2–6 semaines selon substrat/produit/croissance, éviter excès d'engrais et perte nutritive par lessivage.
Aucune preuve d'essais horticoles propres au site n'est alléguée. Fact-check ciblé et transversal, pas certification botanique phrase par phrase.

## Limites techniques
- Contrôle de structure par équilibrage ciblé, pas validation HTML5 complète.
- QA navigateur confiée au workflow `.github/workflows/moestuin-verzorgen-visual-qa.yml`, run GitHub Actions https://github.com/MarcW88/balkon-moestuin/actions/runs/40874971406. Tester réellement le statut, `results.json` et les dix captures avant de déclarer réussite visuelle.
- Les autres pages du site, les liens HTTP externes, WCAG complète et Lighthouse ne sont pas exhaustivement audités.
- Ne pas publier directement la branche si elle contient des rapports et scripts de QA : un éventuel lot de publication doit être isolé aux cinq HTML approuvés, avec décision explicite de l'utilisateur.
