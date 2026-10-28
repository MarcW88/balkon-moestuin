---
name: site-design-review
description: Visuele en toegankelijkheidsaudit voor statische HTML/CSS op balkon-moestuin.nl, met echte Playwright desktop/mobile screenshots en visuele inspectie.
metadata:
  adapted_for: balkon-moestuin.nl
---
# Visual QA — Balkon Moestuin
Lees DESIGN.md, AGENTS.md en de gekozen HTML-pagina. Gebruik waar uitvoerbaar een lokale statische webserver en Playwright om screenshots te nemen op ca. 1440px en 390px (top, midden en footer); open en inspecteer deze daadwerkelijk. Beoordeel navigatie, H1/H2, bodybreedte, kaarten, tabellen, afbeeldingen en alt, overloop, spacing, focus, contrast, footer, gebroken links en commerciële CTA's. Controleer bij hubs navigatie, teeltgidsen infoblokken, kalenders leesbaarheid, problemen symptoomflow en productpagina's vergelijkingen. Rapporteer screenshotlocaties, bevindingen, verbeteringen en hertest in .content/reviews. Als browser/testomgeving ontbreekt: expliciet NOT_RUN, nooit claimen dat Playwright of visuele review geslaagd is. Geen auto-deploy.
