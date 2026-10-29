# QA visuelle vérifiée — cinq pages Moestuin verzorgen — 29 octobre 2026

## GitHub Actions
Workflow `.github/workflows/moestuin-verzorgen-visual-qa.yml`, exécution **40874971406** (https://github.com/MarcW88/balkon-moestuin/actions/runs/40874971406), commit testé `d9083a0e2d8d898e557d3f291eb8d000f9d0432f`, conclusion **success**. Artefact **12897089135** `moestuin-verzorgen-playwright-results`, téléchargé et ouvert : 11 fichiers dont `results.json` et **10 captures** (5 URLs en mobile 375×812 et desktop 1440×900). JSON : `count: 10`, `issues: []`, 10/10 contrôles `ok: true`.

Contrôles automatiques : chargement HTTP 200 de la prévisualisation statique, un H1, absence de débordement global, présence main/skip-link, focus au premier Tab visible, tableaux avec scope et région défilable au clavier, images cassées et erreurs JS. Inspections des planches-contact desktop et mobile : mise en page en colonnes sur desktop, empilement mobile, aucun défaut manifeste confirmable. Les captures mobile sont des vues pleine page très longues ; examen visuel global et non contrôle pixel par pixel de toutes les portions. Les images prises après Tab affichent le skip-link au focus de façon attendue.

## Audit transversal
Les 5 HTML ont lang=nl, canonical propre, title, meta et H1 uniques, liens hub→quatre guides, quatre guides→hub, balises ciblées équilibrées et tableaux internes à main. Destinations internes échantillonnées (munt-kweken, problemen, moestuin-in-bakken, verticale-moestuin, blauwe-bessen) existent dans le dépôt. Sources recoupées : RHS How to water containers, RHS Growing plants in containers, UMN Extension Fertilizing and watering container plants. Aucun conflit factuel important relevé dans les éléments vérifiés. Aucun besoin de correction du HTML/CSS établi par cette QA ; seules les nouvelles pièces de QA et de documentation ont été ajoutées à la branche lors de cet audit.

## Limites
Ne constitue pas un audit WCAG complet, Lighthouse, HTML5 strict ou test du domaine de production; contrastes non quantifiés. La QA concerne la prévisualisation locale du commit indiqué, le rapport ultérieur étant de la documentation uniquement. Ne pas fusionner ni déployer sans validation explicite. Lors de la publication, isoler les 5 HTML des scripts et documents d'audit si souhaité.
