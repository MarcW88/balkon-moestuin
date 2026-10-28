# Moestuin beginnen — integration and release gate
Date: 2026-10-28. Branch: editorial/shared-workflow-other-pages-20261028. Five guides individually approved by user. No merge, no deployment.

## GitHub comparison
| Guide | main HTML chars | editorial HTML chars | identical git blob? |
|---|---:|---:|---|
| balkon-op-het-noorden | 8563 | 13797 | No |
| balkon-op-het-zuiden | 9009 | 15478 | No |
| balkon-met-weinig-zon | 7244 | 14299 | No |
| klein-balkon | 8697 | 14389 | No |
| wat-heb-je-nodig | 9992 | 14757 | No |
Total main 43505; branch 72720, difference +29215 HTML chars across five files. Character count is not an editorial quality metric.

## Source-level SEO, preservation and structural checks
All five pages (5/5): title, meta description, canonical URL and H1 text are byte-for-byte unchanged compared with main; all original internal/external href destinations retained; exactly one <main> and one <h1>; matched opening/closing counts for main, section, div, a, table, tr, th, td, h1, h2, h3; no empty grid containers; zero malformed anchor closing syntax; every table appears before </main>.
On editorial branch: north has 1 table/26 anchors, south 2 tables/25 anchors, low sun 2 tables/25 anchors, small balcony 1 table/24 anchors, starter checklist 1 table/25 anchors.
All 23 distinct internal URL targets across these five guides were directly queried using GitHub fetch_file(ref=editorial branch,path=index.html) and were found (23/23). This proves repository file presence, NOT HTTP reachability, final response status, or rendering.
No files were edited in the five guide HTML files during this integration review.

## Content preservation summary
- North-facing: sunlight reality and appropriate leafy crops, growing expectations and safety.
- South-facing: actual sunlight hours, container heat and watering, suitable crops.
- Low sun: 1–2 vs 3–5 sun hours, realistic edible crop choice, troubleshooting.
- Small balcony: safe circulation/loads, stable layout, crop choices and drainage.
- Essentials: 9-item purchase table, must-have vs optional, starter steps and budget-awareness.
Reports for each exist under .content/audits, briefs, evidence, reviews.

## Limits (not run)
- Strict HTML5 parser or W3C validator and DOM nesting correctness, accessibility audit, browser console checks.
- Browser-based Playwright desktop and mobile screenshot capture, manual visual inspection, responsive overflow checks or reruns.
- HTTP 200 check on public website, external URL availability, actual deployment monitoring.
- Autonomous independent Humanizer/Anti-AI-Slop/fact-check subagents: manual editorial passes only in earlier individual page tasks.

## Release recommendation
CONTENT_USER_APPROVED. STATIC_SOURCE_CHECK_PASS. REPOSITORY_INTERNAL_LINK_TARGET_CHECK_PASS. FULL_HTML5_QA_NOT_RUN. VISUAL_QA_NOT_RUN. RELEASE_NOT_AUTHORIZED.
If user later approves publishing, selectively copy only these five finalized HTML files to main. Do NOT merge editorial branch wholesale. Re-read resulting main and branch files, confirm matching blob SHA for all five, then verify public deployment separately.
