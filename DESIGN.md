# Balkon Moestuin — design contract

## Karakter
Rustige, heldere, praktische Nederlandse balkonmoestuin-publicatie. De visuele hiërarchie moet gebruikers helpen kiezen op basis van licht, beschikbare ruimte, seizoen en onderhoud. Geen generieke webwinkel of opeenstapeling identieke AI-kaarten.

## Familiecomponenten
- Home: oriëntatie en snelle route naar relevante teelt- en koopinformatie.
- Sectiehub: duidelijke intro, subthema's, logische kaartgroepering, geen links naar lege of voorlopige pagina's.
- Teeltgids: direct antwoord, omstandigheden, pot/grond/licht/water, stappen, fouten, referenties.
- Zaaikalender: maand en seizoenscontext, binnen/buiten, weers- en vorstafhankelijkheid, vervolgstappen.
- Probleemgids: herkenbare symptomen, mogelijke oorzaken, uitsluiten, veilige acties, escalatie.
- Koopadvies: keuzecriteria vóór producten, eerlijke beperkingen, transparantie over affiliate links.
- Alle pagina's: consistente header/footer, leesbare tekstkolom, duidelijke h1/h2, toegankelijke focus, mobiel bruikbare tabellen en kaarten.

## Visual QA
Per gekozen paginatype desktop (ongeveer 1440px) én mobile (ongeveer 390px): screenshots van top, midden en footer, visuele inspectie op overflow, spacing, typografie, kopstructuur, contrast, verhouding beeld/tekst, kaarten, navigatie, footer, afbeeldingen en CTA's. Controleer toetsenbordnavigatie en links. Automatische metingen alleen zijn onvoldoende.
Log screenshots, viewport, datum, bevindingen, fixes en hercontrole. Als Playwright ontbreekt: markeer NOT_RUN, claim geen visueel PASS.
