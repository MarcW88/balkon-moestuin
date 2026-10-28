# PUBLISH_REVIEW — paprika kweken in pot
Datum: 2026-10-28. Branch: agent-infrastructure/horticulture-nl. Besluit: FAIL — KEEP_NOINDEX, HUMAN_APPROVAL_PENDING.

| Gate | Status | Bewijs / beperking |
|---|---|---|
| AUDIT | PASS | .content/audits dossier; bestaande pagina volledig gelezen |
| Research/fact-check | PASS (scoped) | RHS teeltbron onderzocht en getoetst; .content/evidence |
| Brief | PASS | .content/briefs dossier |
| HUMANIZER | PASS (manual full-text review) | generieke intro en 4 labels concreter, zaaitaal genuanceerd; commit f276cd2; geen autonome subagent bewezen |
| ANTI_AI_SLOP | PASS (manual full-page review) | losse template-tabel buiten main en lege div verwijderd; keuzes geïntegreerd waar gebruiker ze nodig heeft; commit f276cd2; geen autonome subagent bewezen |
| General-writing/content-and-copy | PASS (scoped) | tekstconsistentie en publieksgerichtheid verbeterd |
| EDITORIAL_QA independent | NOT_RUN | dezelfde uitvoerder deed analyse en tekstcontrole, geen onafhankelijke reviewer geactiveerd |
| SEO onpage | PASS (static partial) | title, meta, canonical, H1 nagelezen; geen live crawl |
| SEO technical | NOT_RUN | live link/route/structured data validatie ontbreekt |
| Playwright desktop and mobile | NOT_RUN | geen browserrender en visuele screenshotinspectie |
| HUMAN_APPROVAL | PENDING | alleen geselecteerde pagina ter validatie |

Uitgevoerd: tabel in main geïntegreerd, kolommen vertaald, lege div verwijderd, zaaiaanpak verduidelijkt, stijl en labels aangepast. Andere pagina's ongemoeid; geen merge, deploy, robots of sitemap wijzigingen. PUBLISH_REVIEW kan niet PASS worden zolang onafhankelijke QA en browserinspectie ontbreken.
