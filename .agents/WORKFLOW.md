# Workflow contract — bewijsbare uitvoering

## Contract en artefacten
Voor iedere geselecteerde URL:
- `.content/audits/<slug>.md`: URL, datum, status, intentie, overlap, KEEP/LIGHT_UPDATE/DEEP_REWRITE/MERGE/NOINDEX.
- `.content/evidence/<slug>.md`: claim, bronlink, publicatie/update datum waar bekend, relevante Nederlandse context, verificatiestatus, onzekerheid en checked-on datum.
- `.content/briefs/<slug>.md`: doelgroep, zoekintentie, onderscheidende waarde, format en uit te werken vragen, intern-linkplan, visuals.
- `.content/reviews/<slug>.md`: afzonderlijke gates met PASS/FAIL/NOT_RUN, bewijs en wijzigingen; expliciet HUMAN_APPROVAL_PENDING.
Bestandsnamen met sectieprefix voor unieke slugs: bijv. `groenten-kweken--tomaten-kweken-in-pot.md`. Maak directories pas bij een echte run.

## Gates (in deze volgorde)
1. ANALYSIS: bestaande pagina en cluster, SERP waar beschikbaar, cannibalisatie en besluit.
2. RESEARCH: concrete informatiebehoeften, recente gezaghebbende bronnen; geen gefingeerd onderzoek.
3. BRIEF: pagina-specifieke aanpak; geen uniforme template.
4. EDIT: content-and-copy → HUMANIZER → general-writing → ANTI_AI_SLOP; voer iedere pass afzonderlijk uit op de volledige pagina. Registreer per gate datum, exacte problemen, voor/na-bewijs en resultaat. HUMANIZER mag pas PASS krijgen bij natuurlijke Nederlandse formulering zonder mechanische overgangen; ANTI_AI_SLOP pas PASS bij unieke paginawaarde, geen herhaalde templates of generieke blokken. Een eerdere PASS kan door latere wijziging ongeldig worden.
5. FACT_CHECK: fact-check + Nederlandse tuinbouwspecifieke toets; onbekend = onzeker of verwijderen.
6. SEO: seo-keyword, seo-onpage en seo-technical volgens relevante pagina-intentie.
7. VISUAL_QA: site-design-review + echte screenshotinspectie desktop/mobile; als niet uitvoerbaar NOT_RUN.
8. EDITORIAL_QA als derde, afzonderlijke redactionele gate op de volledige eindversie; hercontroleer ook HUMANIZER en ANTI_AI_SLOP na laatste correcties. PUBLISH_REVIEW mag alleen PASS als alle drie expliciet PASS zijn en bewijs per gate vastligt. Een eerdere editor mag eigen fouten niet stilzwijgend wegvinken.
9. HUMAN_APPROVAL: handmatige vrijgave voor de pagina; volgende URL pas na aparte instemming.

## Stopvoorwaarden
Geen betrouwbare bronnen voor belangrijke claims; brandveiligheid/gewicht/constructieve zekerheid onbewezen; onduidelijke affiliate herkomst; verlopen prijzen; niet-werkende interne links; ontbrekende benodigde skill; onvoldoende bewijs van QA of screenshotinspectie.

## Activatie en bewijs
De router wordt geactiveerd doordat de uitvoerende agent AGENTS.md leest. `SKILL.md` is instructie, geen autonome daemon, trigger of bewijs van uitvoering. GitHub push op zichzelf voert geen skills uit. Gebruik de QA-checklist van `.agents/QA-CHECKLIST.md` bij iedere pagina. Noteer handmatig wat daadwerkelijk gedaan is en welke tools zijn gebruikt.
