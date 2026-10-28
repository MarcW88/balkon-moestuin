# Review — sla kweken in bak
Datum 2026-10-28; branch agent-infrastructure/horticulture-nl.
Besluit: FAIL — KEEP_NOINDEX; HUMAN_APPROVAL_PENDING.

| Gate | Status | Onderbouwing |
| --- | --- | --- |
| Routing en AUDIT | PASS | guide analyse/content volgens AGENTS.md; auditbestand |
| Evidence en brief | PASS (scoped) | RHS bronnen gecontroleerd; evidence en brief |
| Content-and-copy | PASS (scoped) | tabel verplaatst naar soortenkeuze; tekst concreter |
| HUMANIZER | NOT_RUN | gerichte formuleringen verbeterd, maar geen volledige zelfstandige controle met bewijs |
| ANTI_AI_SLOP | NOT_RUN | generiek tabelblok verbeterd, maar geen complete zelfstandige pass aangetoond |
| general-writing | PASS (scoped) | tekst en koppen verbeterd |
| EDITORIAL_QA | NOT_RUN | volledige onafhankelijke controle na laatste wijzigingen ontbreekt |
| SEO onpage | PASS (partial) | metadata, canonical, H1 uit HTML gelezen, geen live URL check |
| Technical SEO / link validation | NOT_RUN | geen volledige browsercrawl |
| Playwright desktop/mobile + screenshotinspectie | NOT_RUN | niet uitgevoerd |
| Human approval | PENDING | gebruikersvalidatie vereist |

Wijzigingen: verwijderd leeg div; vergelijkingstabel met Nederlandstalige kolomkoppen geïntegreerd binnen main; losstaande sectie na main verwijderd; korte formuleringen verbeterd. Geen merge of deploy.
