---
name: guide-content-workflow
description: Diepgaande, onderzoeksgedreven productie van Nederlandstalige balkonteeltgidsen na guide-analysis-workflow/AUDIT.
metadata:
  adapted_for: balkon-moestuin.nl
  orchestration_target: specialized skills first
---
# Guide Content Workflow — inhoud vóór opmaak

## Precondities
Lees de volledige page, AUDIT, beschikbare clusterpagina's en de relevante skills: seo-keyword, content-and-copy, humanizer, general-writing, anti-ai-slop, fact-check, editorial-qa, seo-onpage, seo-technical en site-design-review. Gebruik aanvullende skills indien aanwezig; noteer NOT_INSTALLED voor ontbrekende afhankelijkheden, verzin geen activatie.

### 1. Zoekintentie en onderzoeksdekking
Niet direct HTML repareren. Begrijp wat de lezer moet kunnen beslissen of doen, wat de echte verschillen zijn met andere gewassen, en welke aspecten het bestaande artikel niet beantwoordt. Bij DEEP_REWRITE: actuele SERP-coverage en onderzoek per belangrijke ontbrekende vraag vóór redactie; geen generieke 'RHS onderzocht'-verklaring.

### 2. Bewijsdossier per claim
Registreer claim, bron-URL, raadpleegdatum, precieze reikwijdte, NL-klimaat, uitzondering en zekerheid in .content/evidence. Specifieke afmetingen, temperaturen, kalenderdata en veiligheid kunnen niet op modelgeheugen alleen steunen. Geen gefingeerde teeltproeven of persoonlijke resultaten.

### 3. Pagina-eigen brief
Schrijf .content/briefs met intentie, unieke invalshoek, te behouden waarde, vragen die beantwoord moeten worden, open researchproblemen, secties die uit bewijs voortkomen, scenario's en interne links. Geen vaste zes stappen, tabellen, FAQ's, 'kort antwoord' of symmetrische hoofdstukindeling. Het artikel dient de lezer, niet het template.

### 4. SUBSTANCE_DRAFT — de verplichte ontbrekende stap
Gebruik content-and-copy om een volledige, inhoudelijk sterke tekst te schrijven. Vervang een korte schets niet alleen door gerepareerde tegels. Elke noodzakelijke sectie moet concrete, soortspecifieke, operationeel bruikbare uitleg bevatten (wat, waarom, onder welke omstandigheden, hoe te controleren, wat als het niet lukt), geen oppervlakkige parafrase. Vul niet tot een kunstmatige woordgrens. De redacteur legt in de review voor/na inhoudsgaten vast en toont welke feitelijke nieuwe informatie is toegevoegd. Bij onvoldoende bewijs: BLOCKED_RESEARCH, niet een cosmetische PASS.

### 5. Fact-check en maillage
Check alle nieuwe feiten NA het schrijven tegen bronnen. Verifieer routes intern, behandel elke onzekerheid openlijk. Gebruik kooplinks alleen waar zij een nuttige beslissing ondersteunen.

### 6. HUMANIZER → general-writing → ANTI_AI_SLOP
Afzonderlijke integrale passes op de VOLLEDIGE eindtekst. Humanizer corrigeert taal en ritme zonder informatieverlies. Anti-AI-Slop beoordeelt tevens inhoudelijke leegte, clichématige structuren, duplicatie over clusterpagina's, generieke kaarten, terugkerende afsluitingen en gebrek aan eigen soortspecifieke waarde. Een artikel met weinig bruikbare substantie krijgt FAIL, ook als de tekst natuurlijk klinkt.

### 7. SEO, EDITORIAL_QA en werkelijke visual QA
Lees seo-onpage, seo-technical en editorial-qa; test waar tools beschikbaar zijn. Editorial QA door onafhankelijke uitvoerder is een afzonderlijke gate. Visual PASS vereist echte desktop/mobile screenshots plus visuele inspectie. Kan het niet: NOT_RUN, niet PASS.

### 8. PUBLISH_REVIEW
Roep guide-analysis-workflow/PUBLISH_REVIEW aan op bewijs, inhoud en QA. Maak .content/reviews met concrete gaten, voor/na-delta, bronsupport en pass statuses; vraag menselijke validatie van slechts één pagina. Onuitgevoerde QA houdt FAIL — KEEP_NOINDEX. Geen auto-indexatie, merge of deploy.
