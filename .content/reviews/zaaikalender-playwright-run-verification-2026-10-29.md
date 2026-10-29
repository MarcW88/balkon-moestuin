# Vérification de l'exécution Playwright — 29 octobre 2026

Branche : editorial/shared-workflow-other-pages-20261028.

## Actions effectuées
- Vérification des outils GitHub connectés : consultation de runs par commit possible seulement avec restriction aux runs associés aux pull requests; il n'y a pas d'action de liste globale des runs par workflow/branche ni de dispatch général dans ce connecteur.
- Appel `fetch_commit_workflow_runs` sur le commit 08a9f16fded8cae0be3e7836ab4e3ea626513683 : `workflow_runs: []`. **Ne prouve pas** l'absence de runs push sur la branche.
- Tentative d'accès public à la page Actions et à l'API des runs par navigateur web : refus d'accès.
- Vérification de l'environnement local : `/usr/bin/chromium` installé, module Python `playwright` installé ; tentative de télécharger les sources de la branche depuis raw.githubusercontent.com : échec DNS (`Could not resolve host`).

## Conclusion
Impossible de vérifier qu'un run de la CI a fini ni de récupérer `zaaikalender-playwright-visual-results`; aucun JSON ni aucune des 26 captures desktop/mobile n'ont été examinés. Aucun défaut de rendu vérifié ne peut être attribué aux pages; ne pas modifier le CSS sur une hypothèse.

## Garde-fou de publication
Les 13 pages et les fichiers de workflow restent uniquement sur la branche. Ne pas fusionner sur main ni déployer avant QA visuelle réellement réussie et nouvelle validation explicite.

## Blocage et voie de résolution
Dans https://github.com/MarcW88/balkon-moestuin/actions/workflows/zaaikalender-visual-qa.yml vérifier l'exécution sur branche `editorial/shared-workflow-other-pages-20261028` et lire les logs et l'artifact `zaaikalender-playwright-visual-results`. Si aucun run n'existe, vérifier que GitHub Actions est activé, puis déclencher Run workflow sur la branche ou pousser un changement qui correspond aux filtres de paths; une action nouvellement créée sur une branche peut ne pas être visible en workflow_dispatch tant qu'elle n'est pas présente sur default. Une fois disponible, inspecter 26 captures et results.json, corriger et repasser les tests.

Nouveaux fichiers de contenu : aucun; rapport de vérification uniquement.
