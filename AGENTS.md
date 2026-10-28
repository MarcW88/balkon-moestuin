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

## Herstel kwaliteitsnorm (2026-10-28)
De vorige handmatige HTML-passes op groenten-kweken en kruiden-kweken tonen geen volwaardige onderzoeksgebaseerde contentproductie. Eerdere PASS voor Humanizer / Anti-AI-Slop geldt NIET als definitieve validatie van inhoudelijke volledigheid. De oude pagina's moeten een nieuwe AUDIT op substantie krijgen vóór enige publicatie.
Voor DEEP_REWRITE: echte SERP-coverage en claim-by-claim research vóór de brief, dan SUBSTANCE_DRAFT vóór HTML-layout. Geen vaste 6 kaarten, tabellen of minimale wijzigingen als proxy voor goede inhoud. Een inhoudelijk te dunne pagina = ANTI_AI_SLOP FAIL, ongeacht de taalstijl. Afwezige onafhankelijke QA en browser = NOT_RUN. Skill-instructie ≠ werkelijke agentuitvoering.

## Eén pagina tegelijk
AUDIT → RESEARCH → EVIDENCE → BRIEF → DRAFT → EDIT → FACT_CHECK → SEO → VISUAL_QA → PUBLISH_REVIEW → HUMAN_APPROVAL.
Drie afzonderlijke verplichte redactionele gates: HUMANIZER, ANTI_AI_SLOP en EDITORIAL_QA. Elk vereist een eigen PASS/FAIL/NOT_RUN, bevindingen en aantoonbare fixes in .content/reviews; een gecombineerde PASS is verboden. FAIL of NOT_RUN blokkeert PUBLISH_REVIEW PASS. Een integrale paginacontrole is verplicht, niet slechts een steekproef.
Verplicht: seo-keyword, content-and-copy, humanizer, general-writing, anti-ai-slop, fact-check, seo-onpage, seo-technical, editorial-qa en site-design-review volgens de relevante fase. Werkelijke uitvoering vastleggen in .content/audits, .content/evidence, .content/briefs en .content/reviews. Geen bestanden/skill-instructies als bewijs van uitvoering claimen. PASS, FAIL en NOT_RUN eerlijk onderscheiden. Screenshot-inspectie desktop/mobile vereist voor visuele PASS; Playwright zonder uitvoer = NOT_RUN.

## Redactionele waarheidsgrens
Geen gefingeerde ervaringen, resultaten, tests, prijzen, actuele voorraad of bronnen. Nederlandse klimatologische en veiligheidscontext expliciet meewegen. Onzekere draagkracht en bevestiging nooit als veilig goedkeuren. Oude voorbeelden voor koffie en elektronische notitieblokken zijn niet toepasbaar.

## Publicatie
KEEP/LIGHT_UPDATE/DEEP_REWRITE/MERGE/NOINDEX uit de audit. MERGE of NOINDEX vereist voorafgaand menselijk besluit. Geen ongeautoriseerde indexatie, robots/sitemap-noindex-wijziging, merge, deploy of vervolgpagina. Vraag voor iedere pagina expliciete gebruikersvalidatie.
