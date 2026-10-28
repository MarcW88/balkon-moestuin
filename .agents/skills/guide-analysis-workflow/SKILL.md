---
name: guide-analysis-workflow
description: Onderzoek één Balkon Moestuin-pagina vóór elke wijziging; AUDIT, CLUSTER_AUDIT, PUBLISH_REVIEW. Gebaseerd op de diepgaande workflows van bloc-notes-numerique en aspirateurs-chantier.
metadata:
  adapted_for: balkon-moestuin.nl
  role: analysis_only
---
# Guide Analysis Workflow — diepgaand, bewijsbaar

## Basiscontract
Dit skill analyseert en beoordeelt; het schrijft GEEN pagina. Lees AGENTS.md, DESIGN.md, .agents/WORKFLOW.md, de doelpagina, de pagina's in de buurt en de gespecialiseerde skills. Een bestand lezen is geen uitvoering van een skill.

## AUDIT (verplicht vóór redactie)
1. Bepaal de exacte zoekvraag, gebruikerstaak, verwachte praktische uitkomst, doelgroep, Nederland-specifieke beperkingen.
2. Lees de COMPLETE bestaande hoofdinhoud en controleer of de beloofde taak uitvoerbaar is. Registreer inhoudelijke gaten, niet alleen lege HTML, headings en markup.
3. Vergelijk minstens de nabije clusterpagina's op intentie, informatie-overlap, kunstmatige overeenkomst in structuur, herhaalde tekst en ontbrekende stappen. Alleen werkelijk gelezen URL's rapporteren.
4. Verricht actuele SERP/concurrentieverkenning wanneer mogelijk; rapporteer URL, datum, bijzonderheden en ongedekte gebruikersvragen. Zonder onderzoek: NOT_RUN. Voor DEEP_REWRITE is een echte SERP/coverage-rapportage verplicht; als niet mogelijk: stop vóór een onbewezen volledige PASS.
5. Doe een claiminventaris: voor soortspecifieke details seizoenen NL, temperatuur, pot/grond, wortels, water, voeding, snoei, plagen, oogst, risico's en uitzonderingen, uitsluitend waar relevant.
6. Bepaal KEEP / LIGHT_UPDATE / DEEP_REWRITE / MERGE / NOINDEX. Een lege grid repareren is NOOIT op zich bewijs dat de inhoud diepgaand genoeg is.
7. Schrijf audit in .content/audits/<section>--<slug>.md met inhoudsgaten, wat blijft, de benodigde nieuwe research, risico's en gekozen scope.

## CLUSTER_AUDIT
Beoordeel de feitelijke inhoud, intenties en eindgebruikersvragen van alle betrokken pagina's; detecteer duplicatie, ongedekte thema's en geïndustrialiseerde sjablonen. Niet beperken tot unieke canonical/H1 of bestandsaanwezigheid.

## PUBLISH_REVIEW (afzonderlijke fase)
Ga terug naar de vragen en hiaten uit AUDIT en het brief. Verifieer met bewijs dat ieder essentieel informatiegat is behandeld, dat primaire claims fact-checked zijn en dat de pagina als zelfstandig antwoord werkt. Controleer aparte Humanizer, Anti-AI-Slop, SEO, link QA, onafhankelijke editorial QA en echte Playwright-captures. Zonder onafhankelijke review of screenshots = NOT_RUN; status FAIL — KEEP_NOINDEX. Alleen PASS — READY_FOR_HUMAN_VALIDATION na alle daadwerkelijke gates. Geen merge/deploy/indexatie.
