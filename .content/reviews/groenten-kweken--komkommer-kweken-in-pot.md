# PUBLISH_REVIEW — Komkommer kweken in pot
Date: 2026-10-28. Branch: agent-infrastructure/horticulture-nl
Result: FAIL — KEEP_NOINDEX; HUMAN_APPROVAL_PENDING.

| Gate | Status | Evidence |
| --- | --- | --- |
| Routing / analysis | PASS | guide-analysis/content workflow read, audit dossier |
| Research / horticultural check | PASS (scoped) | RHS source verified with date, evidence dossier |
| Brief | PASS | brief dossier |
| Humanizer | PASS (manual whole-page inspection) | Intro and section-label tightening, readability and semantic improvements, commit 865ff989; no autonomous subagent asserted |
| Anti-AI-Slop | PASS (manual whole-page inspection) | Removed generic detached choices/steps tables, restored six usable steps in main, made cultivar comparison contextual; commit 865ff989 |
| Editorial QA | NOT_RUN (independent) | Same executor made changes and reviewed them; cannot assert independent reviewer |
| SEO onpage | PASS (static partial) | Existing title, canonical, description, H1 preserved, no external live inspection |
| SEO technical and link check | NOT_RUN | No complete crawl, asset, accessibility or live link tests |
| Playwright desktop/mobile and visual inspection | NOT_RUN | No authenticated local clone/browser run, no screenshots |
| Human approval | PENDING | User approval requested for editorial changes only |

Concrete changes: moved cultivar table into cultivar section and translated all column headers; fixed empty six-step grid by converting six detached rows to actual cards within main; removed detached sections after main; refined headings and ambiguous wording about failed fruit set and support placement. No merge or deployment. Gate remains failed until actual independent QA and browser checks are complete.
