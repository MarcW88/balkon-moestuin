# QA finale — Zaaikalender — 29 octobre 2026

Branche : `editorial/shared-workflow-other-pages-20261028`. Périmètre : `/zaaikalender/` + 12 URL `wat-zaaien-in-[maand]/`. Validation éditoriale reçue pour l'ensemble. **Aucune fusion sur main ni déploiement.**

## Résultat de la QA statique GitHub
- 13/13 fichiers récupérés et relus après correction.
- Chaque page possède `<html lang="nl">`, viewport, un H1 et un canonical canonique distinct sur `balkon-moestuin.nl`.
- Paires des balises HTML ciblées équilibrées sur 13/13 fichiers : html, head, body, main, section, div, a, table, tr, th, td, h1/h2/h3.
- Le hub possède 12 cartes mensuelles uniques, pointant chacune vers la bonne URL existante ; les guides renvoient au calendrier par le fil d'Ariane, et contiennent des renvois entre mois adjacents. Les 24 destinations d'articles internes du corpus avaient été vérifiées par fetch GitHub dans l'audit global antérieur.
- 12/12 guides comprennent un tableau dans main, avec en-têtes `<th scope="col">`. Février et mars contiennent chacun deux tableaux. 14 tableaux au total, tous insérés dans une région horizontalement défilable.
- Aucun tableau orphelin hors main; aucune grille d'étapes vide; SEO title et description mensuels conservés. La title/meta hub avait été optimisée à l'étape précédente.
- Pas d'anomalie HTML structurelle bloquante détectée par ces contrôles ciblés. Ce n'est pas une validation HTML5 complète.

## Corrections réellement appliquées sur la branche
- 13/13 pages : ajout d'un lien clavier « Direct naar inhoud » visible au focus, avec cible `<main id="hoofdinhoud">`; style CSS limité au focus et caché hors focus.
- 14/14 tableaux : leurs wrappers `.scroll` sont désormais navigables au clavier (`tabindex="0"`) avec `role="region"` et `aria-label` descriptif du défilement horizontal. Les en-têtes de colonnes `scope="col"` étaient déjà présents.
- Ces correctifs n'ont changé ni l'URL, ni la copie éditoriale, ni les canonical, ni les tableaux ou la hiérarchie des titres. 13/13 relus après commits ; présence effective des nouveaux liens, cibles et attributs ARIA confirmée.

## Playwright / responsive — blocage concret, non validé
Le module Python Playwright est disponible, mais son Chromium headless téléchargé est absent. Le dépôt GitHub n'est pas accessible via le réseau de l'environnement local (« Could not resolve host github.com »). Un exécutable Chromium système existe, mais il n'a pas été possible de charger une vraie prévisualisation de la branche et ses assets dans le navigateur depuis ce contexte. Les captures desktop/mobile, détection visuelle de débordements, tests de focus réels, contraste et rendu CSS **n'ont donc pas été exécutés**. Ne pas transformer l'existence du navigateur installé en preuve de test réussi. Avant publication : fournir URL de preview de la branche ou lancer Playwright dans CI GitHub sur la branche, puis vérifier 375 px et 1440 px, défilement des tableaux, navigation au clavier, menu, focus visible, captures et débordements. 
Autres limites : pas de validation HTML5 stricte, WCAG complète, HTTP des liens externes, Lighthouse/CWV ni contrôle d'indexabilité live. Ces points empêchent de revendiquer une QA visuelle finale.

## Recommandation de publication
Le contenu et les contrôles statiques sont prêts pour décision. **Préconisation : ne pas publier avant la QA visuelle réelle** ; l'utilisateur peut autoriser explicitement la publication malgré cette réserve après en avoir été informé. Aucun merge, PR ni déploiement n'ont été exécutés.
