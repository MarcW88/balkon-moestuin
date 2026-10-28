# Review — sla kweken in bak
Datum 2026-10-28; branch agent-infrastructure/horticulture-nl.
Besluit: FAIL — KEEP_NOINDEX; HUMAN_APPROVAL_PENDING.

| Gate | Status | Onderbouwing |
| --- | --- | --- |
| Routing en AUDIT | PASS | guide analyse/content volgens AGENTS.md; auditbestand |
| Evidence en brief | PASS (scoped) | RHS bronnen gecontroleerd; evidence en brief |
| Content-and-copy | PASS (scoped) | tabel verplaatst naar soortenkeuze; tekst concreter |
| HUMANIZER | PASS (scoped, not full) | generieke formulering over 'toegankelijke manier' vervangen; geen complete zelfstandige paginapass, dus voor volledige publicatie: NOT_RUN |
| ANTI_AI_SLOP | PASS (scoped, not full) | los aangeplakt tabelblok geïntegreerd en standaardvulling verwijderd; volledige onafhankelijke check: NOT_RUN |
| general-writing | PASS (scoped) | tekst en koppen verbeterd |
| EDITORIAL_QA | NOT_RUN | volledige onafhankelijke controle na laatste wijzigingen ontbreekt |
| SEO onpage | PASS (partial) | metadata, canonical, H1 uit HTML gelezen, geen live URL check |
| Technical SEO / link validation | NOT_RUN | geen volledige browsercrawl |
| Playwright desktop/mobile + screenshotinspectie | NOT_RUN | niet uitgevoerd |
| Human approval | PENDING | gebruikersvalidatie vereist |

Wijzigingen: verwijderd leeg div; vergelijkingstabel met Nederlandstalige kolomkoppen geïntegreerd binnen main; losstaande sectie na main verwijderd; korte formuleringen verbeterd. Geen merge of deploy.
