# PUBLISH_REVIEW — Basilicum kweken in pot
Datum 2026-10-28 | Branch agent-infrastructure/horticulture-nl
Decision: FAIL — KEEP_NOINDEX; HUMAN_APPROVAL_PENDING (editorial modifications only).

| Gate | Status | Evidence |
| --- | --- | --- |
| AUDIT and brief | PASS | source HTML reviewed; audit and brief files |
| Horticultural fact-check | PASS (scoped) | RHS and UMN sources checked; evidence dossier |
| HUMANIZER | PASS (manual full-page review) | corrected repetitive lead, weak headings, vague introductory sentences and supermarket advice; commit c06136a |
| ANTI_AI_SLOP | PASS (manual full-page review) | removed generic detached tables, restored 6 missing step cards and positioned cultivar choice; commit c06136a |
| General-writing/content-and-copy | PASS (scoped) | clarified real conditions rather than promising summer harvests |
| EDITORIAL_QA independent | NOT_RUN | no independent reviewer executed; manual self-review does not count as independent validation |
| SEO onpage | PASS (static partial) | title, description, H1, canonical and static internal link syntax retained |
| SEO technical / links | NOT_RUN | no full browser crawl or live request check |
| Playwright desktop/mobile screenshots | NOT_RUN | no rendered screenshots generated or inspected |
| Human approval | PENDING | user validation requested before next page |

Changes: cultivar table moved into section and Dutch headers corrected; 6 existing steps converted into cards inside main; detached sections and empty containers removed; copy strengthened and supermarket basil cautioned. No merge or deploy; robots/sitemap untouched.
