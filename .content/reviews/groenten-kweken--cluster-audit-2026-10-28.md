# Cluster audit — groenten-kweken
Date: 2026-10-28
Branch: agent-infrastructure/horticulture-nl
Scope: section hub and 6 existing vegetable guides, no other page edited.

## Findings and changes
- Existing hub was generic: six cards repeated "Lees de uitgebreide gids", with no way to choose by light, space or maintenance.
- Hub rewritten to give six distinct use cases (lettuce, radish, tomato, pepper, cucumber, potatoes), practical decision signals, and contextual links about light, space and sowing. Commit 8d08d2c478887a953da1703ff83dde39c37a6da3.
- All six guides have distinct titles, H1, canonical and descriptions, and visible links back to hub except potato page which has its breadcrumb link (confirmed from source).
- No empty grid or detached section after </main> found in the six current guide files. All use six tile cards.
- Existing cross-links to shade, small balcony, sowing calendar, maintenance and starters are present in repository (file presence checked for selected destinations). URL health HTTP response NOT_RUN.
- Distinct editorial intents: lettuce leafy repeat harvest, radish quick root crop, tomato support/watering, pepper warmth/long season, cucumber outdoor cultivar/support/pollination, potato grow bags/weight and earthing-up.
- No duplicate canonical or H1 in these seven files from static source review.

## Quality gates
| Gate | Status | Evidence |
|---|---|---|
| Cluster analysis | PASS (static) | 7 source HTML documents inspected |
| Hub Humanizer | PASS (manual full-page) | generic introduction and six repeated generic descriptions replaced by readable decision guidance; commit above |
| Hub Anti-AI-Slop | PASS (manual full-page) | six differentiated cards and contextual links replace six templated descriptions; no invented experience |
| Six guide Humanizer/Anti-AI-Slop | REVIEWED PREVIOUSLY | individual .content/reviews files; not a new independent re-execution in this cluster run |
| Cross-page intent differentiation | PASS (static) | six distinct jobs and unique H1/canonicals |
| Internal link file existence sample | PASS (limited) | nine target paths verified as files in GitHub |
| Complete internal link crawl | NOT_RUN | no browser/server crawl |
| Independent editorial QA | NOT_RUN | no independent reviewer execution |
| Playwright desktop | NOT_RUN | no Playwright test environment with checked-out branch available |
| Playwright mobile and screenshot visual inspection | NOT_RUN | no screenshots generated or inspected |
| Technical SEO crawl/schema/a11y | NOT_RUN | static review only |
| Human validation | PENDING | request before publication |

## Decision
FAIL — KEEP_NOINDEX / NOT READY FOR MERGE OR DEPLOY. Approval can cover editorial hub improvement and existing page corrections only; no independent QA, Playwright or technical release readiness inferred.
No changes to main, robots.txt, sitemap.xml or publication settings in this audit.
