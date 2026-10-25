# Balkon Moestuin — werkregels

De methodologische skills onder `.agents/skills/` zijn overgenomen uit `MarcW88/bloc-notes-numerique`. Hun oorspronkelijke domein-specifieke voorbeelden gelden niet als kennis over tuinbouw; voor balkon-moestuin.nl moet elk dossier op zijn eigen bronnen worden onderzocht.

## Routing
- Startpagina en redactionele hubs: guide-analysis-workflow en guide-content-workflow, aangepast aan de rol van de landingspagina.
- Teeltgidsen in `moestuin-beginnen`, `groenten-kweken`, `kruiden-kweken`, `fruit-kweken`, `balkon-inrichten`, `moestuin-verzorgen`, `zaaikalender`, `problemen`: dezelfde twee guide workflows.
- Koopadvies in `beste-producten`: comparison-analysis-workflow en comparison-content-workflow.

## Verplichte volgorde, één pagina tegelijk
1. Analyseer intentie, concurrentie, overlap en eigen toegevoegde waarde. Voor bestaande pagina: AUDIT.
2. Verzamel actuele betrouwbare bronnen en registreer claims, beperkingen en onzekerheden in `.content/evidence/`.
3. Leg het maatwerk-brief vast onder `.content/briefs/`.
4. Redigeer met content-and-copy, daarna onafhankelijke passes humanizer, general-writing en anti-ai-slop.
5. Controleer feiten, interne links, SEO-onpage, technisch gedrag, beeldbehoefte en editorial-qa.
6. Leg de PUBLISH_REVIEW vast onder `.content/reviews/`.
7. Wijzig uitsluitend de geselecteerde pagina, commit op main en vraag menselijke validatie. Ga nooit naar een volgende pagina zonder expliciete goedkeuring.
8. Voorlopige gidsen blijven noindex en ontbreken uit de sitemap. Haal noindex niet weg zonder uitdrukkelijke toestemming.

## Waarheidsgrens
Geen verzonnen eigen ervaring, teeltresultaten, producttests, prijzen of productbeschikbaarheid. Claim niet dat een skill is uitgevoerd als alleen het SKILL.md-bestand is gekopieerd. Vermijd links naar lege gidsen alsof deze af zijn. Volledige redactionele afwerking en technische CI-validatie zijn aparte controles.
