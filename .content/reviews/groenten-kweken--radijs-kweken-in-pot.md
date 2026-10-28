# PUBLISH_REVIEW — Radijs kweken in pot
Datum: 2026-10-28; branch agent-infrastructure/horticulture-nl.
Besluit: FAIL — KEEP_NOINDEX. HUMAN_APPROVAL_PENDING voor de redactionele correcties.

| Gate | Status | Bewijs |
|---|---|---|
| AUDIT | PASS | bronpagina gelezen; .content/audits dossier |
| Horticultural evidence/fact check | PASS (scoped) | RHS pagina's gecontroleerd; .content/evidence |
| Brief | PASS | .content/briefs dossier |
| Humanizer | PASS (handmatige full-page pass) | introductie, labels en waterformulering aangepast in commit 3c177ec; geen autonome subagent-run geclaimd |
| Anti-AI-Slop | PASS (handmatige full-page pass) | echte zes stappen op de plek van de lege grid, soortenvergelijking op het beslismoment in plaats van losse tabel; commit 3c177ec |
| Content-and-copy/general-writing | PASS (scoped) | duidelijkere gebruikerstaak, schrapte generieke vulling |
| Editorial QA onafhankelijk | NOT_RUN | geen afzonderlijke onafhankelijke reviewer aantoonbaar |
| SEO onpage | PASS (statisch gedeeltelijk) | bestaande title, description, H1 en canonical behouden; geen live-check |
| Technical SEO / links | NOT_RUN | geen browsercrawl of volledige linkvalidatie |
| Playwright desktop en mobile + screenshots | NOT_RUN | geen echte browserrun voor deze branch uitgevoerd |
| Human approval | PENDING | uitsluitend redactionele wijziging te valideren |

Geen merge, geen deploy, geen robots-/sitemapwijziging. Publicatiegate blijft geblokkeerd totdat ontbrekende verificaties uitgevoerd zijn.
