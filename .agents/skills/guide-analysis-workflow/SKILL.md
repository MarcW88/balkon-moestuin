---
name: guide-analysis-workflow
description: AUDIT, CLUSTER_AUDIT en PUBLISH_REVIEW voor Nederlandstalige balkonmoestuin-gidsen, sectiehubs, kalenders en probleemdiagnoses.
metadata:
  adapted_for: balkon-moestuin.nl
---
# Analyse — Balkon Moestuin
Lees AGENTS.md, .agents/WORKFLOW.md, .agents/SECTION-MATRIX.md en doelpagina. Activeer voor alle secties behalve beste-producten.
AUDIT: analyseer intentie, huidige pagina, gebruiker, nabije URLs, unieke waarde, veiligheid, betrouwbaarheid en Nederlands seizoen. Gebruik seo-keyword; inspecteer echte SERP/competitors waar mogelijk, anders NOT_RUN. Controleer relevante teeltvoorwaarden (licht, pot/grond, drainage, water, periode), voor balkon-inrichten draagkracht en wind, voor zaaikalender binnen/buiten + weeronzekerheid, voor problemen symptoom → mogelijke oorzaken → controle → veilige actie.
Bepaal KEEP / LIGHT_UPDATE / DEEP_REWRITE / MERGE / NOINDEX, motiveer en schrijf .content/audits/<section>--<slug>.md.
CLUSTER_AUDIT: controleer herhaalde inhoud, cannibalisatie, navigatie en gebroken/voorlopige interne links.
PUBLISH_REVIEW: controleer aantoonbare evidence, brief, edit-passes, fact-check, seo-onpage, seo-technical, editorial-qa, site-design-review met werkelijke desktop/mobile screenshotinspectie. Ontbrekend bewijs = NOT_RUN en FAIL — KEEP_NOINDEX. Alleen volledig geslaagde controle = PASS — READY_FOR_HUMAN_VALIDATION; geen toestemming tot publicatie.
