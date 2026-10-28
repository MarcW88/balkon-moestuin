# Balkon Moestuin — afdwingbare onderzoeks- en productieketen

Dit contract herstelt de inhoudelijke workflow geïnspireerd door bloc-notes-numerique, aspirateurs-chantier en behandeling van complexe onderwerpen op traitement-air. Files in .agents zijn INSTRUCTIES, geen autonome agents.

## Verplichte volgorde: één URL
1. PRECHECK: juiste branch, originele bronfile, routing, volledige skills; geen automatische volgende pagina.
2. AUDIT: inhoudelijk tekort, zoekintentie, concurrenten/SERP, cluster, KEEP/LIGHT_UPDATE/DEEP_REWRITE/MERGE/NOINDEX. Audit bevat een expliciete lijst ontbrekende vragen.
3. RESEARCH: onderzoek elke materiële lacune. Als deep rewrite zonder echte informatie-/SERP-verkenning nodig is: markeer BLOCKED_RESEARCH, geen schijnreview.
4. EVIDENCE: controleer claims met precieze bronpassages/links, datum, voorwaarden en NL-context.
5. BRIEF: origineel plan uit lezersvragen en bewijs, niet uit een vast aantal kaarten, H2's, tabellen of woorden.
6. SUBSTANCE_DRAFT: schrijf VOLLEDIGE operationeel nuttige tekst met content-and-copy. Controleer dat alle relevante hiaten zijn opgelost, niet alleen lege grids.
7. FACT_CHECK, interne links en inhoudelijke vergelijking met buurpagina's.
8. HUMANIZER + general-writing + ANTI_AI_SLOP: drie aparte passes met concrete voor/na voorbeelden. Anti-AI-Slop kan expliciet FAIL geven wegens inhoudelijke oppervlakkigheid.
9. SEO, technische validatie, onafhankelijke EDITORIAL_QA, Playwright desktop/mobile en handmatige screenshotinspectie. Afwezige tools = NOT_RUN.
10. guide-analysis-workflow / PUBLISH_REVIEW + HUMAN_APPROVAL. Slechts bij alle echte PASS READY_FOR_HUMAN_VALIDATION; anders FAIL — KEEP_NOINDEX.

## Artefacten
.content/audits/<section>--<slug>.md (gaps en decision)
.content/evidence/<section>--<slug>.md (claim per bron)
.content/briefs/<section>--<slug>.md (reader task, coverage, opbouw)
.content/reviews/<section>--<slug>.md (inhoudelijke delta, QA, exact tools/evidence, PASS/FAIL/NOT_RUN)

## Verboden shortcut
- Geen LIGHT_UPDATE alleen omdat wat HTML ontbreekt: audit oordeelt over inhoudelijke taakdekking.
- Geen automatische zes-stappenstructuur.
- Geen "Humanizer PASS" bij een handvol cosmetische zinswijzigingen of generieke korte teksten.
- Geen "Anti-AI-Slop PASS" als de pagina leeg, ongedifferentieerd of inhoudelijk onvoldoende is.
- Geen verzonnen externe onafhankelijke reviewer of Playwright.
- Geen nieuwe pagina, merge, deploy, robots/sitemap wijziging zonder aparte expliciete toestemming.
