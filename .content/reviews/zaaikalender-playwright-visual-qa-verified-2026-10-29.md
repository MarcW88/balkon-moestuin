# QA visuelle Playwright vérifiée — Zaaikalender — 2026-10-29

Dépôt MarcW88/balkon-moestuin. Branche editorial/shared-workflow-other-pages-20261028. **Aucune fusion sur main ni aucun déploiement.**

## Exécution GitHub Actions vérifiée
- Workflow : `.github/workflows/zaaikalender-visual-qa.yml`.
- Run ID **40856440722**, commit testé **d909bb0bf2e27e99f4ba9eb98d862d2acb5c4da7**, déclencheur push, statut **completed**, conclusion **success**, 2026-10-29T10:17:55Z–10:18:43Z.
- Job visual-qa ID 123388481548, conclusion success. Logs effectivement téléchargés. Étape Playwright : `{ "checked": 26, "issues": [] }`.
- Artefact ID **12889661551** `zaaikalender-playwright-visual-results`, téléchargé et inspecté : **27 fichiers** dont 26 PNG (13 URL × 375×812 et 1440×900) et `results.json`.
- Les captures ont été examinées en planches-contact mobile et desktop; inspection rapprochée du haut du hub mobile. Sur la capture mobile le lien « Direct naar inhoud » apparaît en haut parce que le script appuie volontairement sur Tab avant de prendre le screenshot afin de vérifier sa visibilité, pas parce que le lien reste toujours visible.
- Aucun débordement document, aucun lien skip manquant, aucun main manquant, aucun tableau sans entête scope ni région navigable, aucune image cassée, erreur de page, erreur HTTP 200 ni anomalie de focus détecté par ce script. Aucun défaut visuel suffisamment confirmé pour justifier une correction CSS supplémentaire.
- Le warning `curl: (7) Failed to connect` concerne la première tentative avant démarrage du serveur; la boucle a attendu que le serveur soit prêt et la suite est passée. Warnings Node de dépréciation non bloquants.

## Portée et limites
Ce run teste une prévisualisation locale statique de la branche **au commit d909bb0** et non le site publié. Le commit de suivi créé ultérieurement n'a pas été retesté mais ne touche pas au HTML/CSS (documentation seulement). Tests automatisés couvrent 13 URL, viewport, screenshots, overflow document, tableaux, images, erreurs JS, focus au premier Tab et structure de base. Inspection humaine des planches de captures, sans anomalie manifeste détectée. Il **ne constitue pas** un audit WCAG exhaustif, un contrôle de contrastes mesurés, une validation stricte HTML5, une étude UX sur appareil physique, un test Lighthouse ou une garantie contre les défauts visuels invisibles aux captures.

## Décision
QA visuelle desktop/mobile vérifiée **réussie sur le périmètre défini**. Aucune correction supplémentaire appliquée faute de défaut avéré. Demander autorisation avant fusion/publication; vérifier le diff complet de la branche, qui peut contenir des modifications hors Zaaikalender, avant toute fusion sélective.
