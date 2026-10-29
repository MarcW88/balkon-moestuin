# Audit transversal — Zaaikalender (29 oktober 2026)

## Périmètre et statut
Dépôt MarcW88/balkon-moestuin, branche editorial/shared-workflow-other-pages-20261028. Lecture effective de 13 fichiers HTML : page /zaaikalender/ et douze guides de januari à december. Aucun changement de contenu réalisé pendant cet audit. Les douze réécritures déjà validées restent sur la branche, non fusionnées/non déployées.

## Résultats structurels vérifiés
- Les 13 URL et fichiers de la section existent sur la branche.
- Chaque page possède un titre, une meta description, un canonical HTTPS propre à son URL, un H1 unique et une navigation de site.
- 13/13 pages ont les paires des balises contrôlées équilibrées (main, section, div, a, table, tr, td, th, h1, h2, h3).
- Aucun des douze guides n'a de grille .grid complètement vide; aucun tableau n'est placé après </main>.
- Les 12 guides comportent un bloc de sources et de transparence, mais la page principale n'en comporte pas (normal pour un index, à compléter par une méthodologie concise).
- La page principale lie bien les 12 mois, et les 12 guides renvoient tous vers la page principale par fil d'Ariane. Les liens adjacents sont présents pour janvier→février, février→janvier/mars, … novembre→octobre/décembre, décembre→janvier/novembre. Il n'y a pas de lien janvier→décembre, non bloquant.
- Les 24 destinations internes de guides vers autres sections identifiées dans le corpus ont été vérifiées par accès GitHub au fichier index.html sur cette branche : elles existent. La navigation du site et les 12 liens de mois sont également présents. Les destinations légales non vérifiées séparément.
- Aucune preuve de rendu navigateur ni d'absence de CSS overflow : le contrôle effectué porte sur le code source, pas le rendu.

## Audit de la page principale /zaaikalender/ — PRIORITÉ HAUTE
Actuellement page de seulement 3 862 caractères HTML : titre « Zaaikalender | Balkon Moestuin », meta description générique « Een seizoensgerichte gids voor zaaien, uitplanten en oogsten. », H1 « Wat kun je deze maand zaaien? », intro générique, puis 12 cartes répétitives « Lees de uitgebreide gids over wat zaaien in …? ». Les douze liens existent, mais la valeur éditoriale est faible et la promesse de réponse « cette mois-ci » n'est pas réellement satisfaite.
Recommandation : transformer la page en véritable hub éditorial, SANS dupliquer 12 articles : introduction sur le climat néerlandais, semis à l'intérieur / sous protection / en extérieur, mini tableau synthèse par saison, orientation selon type de balcon, repères pour les semis sensibles au gel, et 12 cartes avec phrases spécifiques (au lieu d'un texte automatique identique). Ajouter un bloc « hoe lees je deze zaaikalender » et méthodologie / transparence, renvois vers guides légumes, potgrond, drainage et initiation. Garder les douze URL et canonical de la page. Réviser titre/meta avec intention hub après validation; ne pas réécrire le hub sans accord.
Cannibalisation : le hub doit répondre à « zaaikalender balkon » et « wanneer zaaien », les 12 guides à « wat zaaien in [maand] ». Éviter 12 calendriers exhaustifs répétés sur le hub.

## Cohérence éditoriale et fact-check transversal
- Janvier–février : préparation, semis protégés limités; ne pas présenter des semis dans une pièce sombre comme viables. Cohérent avec RHS « Vegetable seeds: sowing » : décembre/janvier sont principalement consacrés à la planification, les salades protégées commencent généralement en février.
- Mars–avril : meilleure distinction entre semis froids dehors, tomates d'extérieur en fin mars / début avril et courgettes/concombres démarrés en avril. Attention aux phrases trop catégoriques : dépendance au ras, à la température et à l'exposition.
- Mai–juin : haricots quand le sol est chaud et gel passé, sur balcon souvent fin mai/début juin. Pas de date universelle à IJsheiligen. Juin conserve cultures de succession et variations selon variété.
- Juillet–septembre : légumes feuilles asiatiques et pak-choï adaptés à l'arrière-saison, risque de montaison quand chaud et sec. Méfiance pour veldsla pendant les chaleurs; croissance ralentie en automne.
- Octobre–décembre : distinction claire plantation des caïeux d'ail / oignons et semis à graines, croissance hivernale lente, laitue d'hiver généralement semée plus tôt. Pour l'ail, RHS : caïeux ~15 cm entre eux, pointe ~2,5 cm sous terre en automne/début hiver, bon drainage.
Sources principales relues : https://www.rhs.org.uk/vegetables/seeds-sowing ; https://www.rhs.org.uk/vegetables/pak-choi/grow-your-own ; https://www.rhs.org.uk/vegetables/garlic/grow-your-own ; https://www.rhs.org.uk/education-learning/school-gardening/resources/food-growing/month-by-month-guide-to-food-growing-autumn-term .
LIMITATION : ce contrôle est transversal et ciblé, pas validation botanique ligne par ligne de tous les conseils et calendriers de variétés.

## E-E-A-T, anti-IA-slop et risques
Points positifs : sources institutionnelles sur guides, absence de prétention à des essais personnels, conseils ajustés aux poteries et au microclimat de balcon. Risque structurel encore visible : chacune des 12 pages suit presque exactement le même patron (bannière, tableau, « zes stappen » avec six tuiles, section FAQ, notice). Ceci crée un effet de contenu produit en série, même si le texte est différent; à corriger sélectivement par des modules propres à certains mois, de vrais exemples de hauteur de balcon, taille de pots, délais régionaux sourcés — sans inventer de tests. Pas d'avis pseudo-personnel ni « nous avons testé ».
L'intention « zaaien » est parfois mélangée à planter/entretien; c'est légitime en hiver mais il faut bien délimiter ces actions. Vérifier noms botaniques/variétés si l'on ajoute des dates précises et avoir le minimum de dimensions factuelles accompagnées de sources.

## Priorités de correction
P0 : aucune anomalie structurelle HTML/SEO bloquante détectée dans le périmètre statique vérifié.
P1 : enrichir le hub principal avec vraie réponse à l'intention; différencier les 12 cartes et ajouter méthodologie/maillage.
P1 : faire vraie QA navigateur desktop/mobile sur 13 URL de preview de la branche (Playwright, screenshots, overflow, accessibilité des tableaux et six cartes) ; preview inaccessible dans ce contexte.
P2 : atténuer l'aspect répétitif de template entre les 12 guides ; améliorer les cas pratiques différenciés.
P2 : tester URLs externes en HTTP et les pages légales, contrôler sitemap/robots/structured data et vitesse/CWV; hors périmètre de la lecture HTML.
P2 : approfondir le fact-check de variétés et des nuances NL vs UK avant publication, particulièrement automne et hiver.

## Tests effectivement exécutés et limites
Exécutés : 13 fetch GitHub, extraction SEO et maillage, comptage et équilibrage des balises ciblées, vérification des 24 destinations internes spécifiques par fetch GitHub, relecture factuelle ciblée RHS. Pas de fusion.
NON EXÉCUTÉS : parseur HTML5 strict, Playwright desktop/mobile, screenshots, rendu CSS réel, HTTP status 200 du preview/production, audit complet des liens externes, tests WCAG, Lighthouse, agents indépendants Humanizer/Anti-AI-Slop.
La documentation QA précédente des guides est une QA statique, pas une certification visuelle; pas d'affirmation de déploiement.

## Décision demandée
Valider la refonte éditoriale de /zaaikalender/ sur la branche avec conservation des 12 URLs, puis vérifier les modifications, sans fusion ni déploiement. Ou privilégier une vraie QA visuelle de la branche si un environnement Playwright/preview connecté est mis à disposition.