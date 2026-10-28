# Balkon Moestuin — agent routing (NL)

Lees altijd eerst AGENTS.md, DESIGN.md, .agents/WORKFLOW.md, .agents/SECTION-MATRIX.md en .agents/QA-CHECKLIST.md. Gebruik uitsluitend statische HTML en CSS: geen Next.js, Node.js, TypeScript of runtime JavaScript.

## Routing
- Home en sectiehubs: guide-analysis-workflow → guide-content-workflow; navigatie en clusterstructuur.
- moestuin-beginnen: guide workflows; starten, licht, oriëntatie en balkonveiligheid.
- groenten-kweken: guide workflows; soortspecifieke teelt in pot.
- kruiden-kweken: guide workflows; kruid, standplaats en oogst.
- fruit-kweken: guide workflows; soorten, bestuiving en overwinteren.
- balkon-inrichten: guide workflows; gewicht, wind, drainage, veiligheid.
- moestuin-verzorgen: guide workflows; voeding, water, onderhoud.
- zaaikalender: guide workflows; Nederlandse seizoenen en binnen/buiten.
- problemen: guide workflows; symptomen, oorzaken en veilige correctie.
- beste-producten: comparison-analysis-workflow → comparison-content-workflow; onafhankelijke productkeuze.

## Eén pagina tegelijk
AUDIT → RESEARCH → EVIDENCE → BRIEF → DRAFT → EDIT → FACT_CHECK → SEO → VISUAL_QA → PUBLISH_REVIEW → HUMAN_APPROVAL.
Drie afzonderlijke verplichte redactionele gates: HUMANIZER, ANTI_AI_SLOP en EDITORIAL_QA. Elk vereist een eigen PASS/FAIL/NOT_RUN, bevindingen en aantoonbare fixes in .content/reviews; een gecombineerde PASS is verboden. FAIL of NOT_RUN blokkeert PUBLISH_REVIEW PASS. Een integrale paginacontrole is verplicht, niet slechts een steekproef.
Verplicht: seo-keyword, content-and-copy, humanizer, general-writing, anti-ai-slop, fact-check, seo-onpage, seo-technical, editorial-qa en site-design-review volgens de relevante fase. Werkelijke uitvoering vastleggen in .content/audits, .content/evidence, .content/briefs en .content/reviews. Geen bestanden/skill-instructies als bewijs van uitvoering claimen. PASS, FAIL en NOT_RUN eerlijk onderscheiden. Screenshot-inspectie desktop/mobile vereist voor visuele PASS; Playwright zonder uitvoer = NOT_RUN.

## Redactionele waarheidsgrens
Geen gefingeerde ervaringen, resultaten, tests, prijzen, actuele voorraad of bronnen. Nederlandse klimatologische en veiligheidscontext expliciet meewegen. Onzekere draagkracht en bevestiging nooit als veilig goedkeuren. Oude voorbeelden voor koffie en elektronische notitieblokken zijn niet toepasbaar.

## Publicatie
KEEP/LIGHT_UPDATE/DEEP_REWRITE/MERGE/NOINDEX uit de audit. MERGE of NOINDEX vereist voorafgaand menselijk besluit. Geen ongeautoriseerde indexatie, robots/sitemap-noindex-wijziging, merge, deploy of vervolgpagina. Vraag voor iedere pagina expliciete gebruikersvalidatie.
