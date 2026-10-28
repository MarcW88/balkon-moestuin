# Integration and release gate — six Groenten kweken guides
Date: 2026-10-28. Branch: editorial/shared-workflow-other-pages-20261028. User has approved all six guides. **No merge or deployment authorized or executed during this review.**

## GitHub main versus editorial branch
| Guide | Main chars | Branch chars | Main already identical? | Needs selective publication? |
|---|---:|---:|---|---|
| tomaten-kweken-in-pot | 14844 | 14844 | YES | NO |
| sla-kweken-in-bak | 9417 | 12791 | NO | YES |
| paprika-kweken-in-pot | 10627 | 15304 | NO | YES |
| komkommer-kweken-in-pot | 10688 | 14915 | NO | YES |
| radijs-kweken-in-pot | 12393 | 12393 | YES | NO |
| aardappelen-kweken-in-zak | 8129 | 14633 | NO | YES |

Totals: main 66098; editorial 84880 HTML characters. +18782 characters are limited to four not-yet-merged guides. HTML character count is not itself a qualitative metric.
Editorial result:
- Tomaten: growth habits, water/feeding, flower-end rot and diagnoses.
- Sla: cut-and-come-again/baby-leaf/heads, six steps, staggered sowing, bolting.
- Paprika: cultivar choice, sunny warm siting, container requirements, fruit set, food-quality issues.
- Komkommer: outdoor versus greenhouse and pollination, stable trellis, sowing, diagnosis.
- Radijs: variety choice, growing roots, timing/temperature, water, diagnosis.
- Aardappelen: seed potatoes, chitting, safe bag siting, earthing up, harvest and green-tuber risks.

## Exact static SEO and HTML checks
Direct GitHub readback of all 12 snapshots: six guides at main and same six at editorial branch.
- Page URLs/canonical unchanged per guide; title, meta description, h1 identical to main for all six (6/6).
- Six pages each have exactly one main tag and one h1, with matched section, div, anchor, table, tr, th, td and heading tag counts.
- No HTML closing anchor anomalies / malformed closing anchors in all six; no empty grid divs found.
- All tables are before </main> in branch for all six.
- All former internal URL destinations retained (6/6), as well as all former external link URL destinations.
- The distinct 16 internal route targets (including /) all resolve to a branch index.html in GitHub (16/16); not equivalent to HTTP 200 verification.
- Main vs branch: Tomaten and Radijs have identical Git blob sha; only 4 other guides need selective promotion.

## Nonexecuted checks and limitations
- No independent HTML5 parser/validator; tag-count balancing is not DOM/tree validation.
- No real Playwright desktop/mobile page screenshots, visual inspections or browser console checks. Chromium and Playwright were previously installed but network access to the exact branch files was blocked. Treat all visual UX/responsive checks as NOT_RUN.
- No complete crawl of live URLs, HTTP status verification or redirect checks.
- No independent Humanizer, Anti-AI-Slop or fact-check subagents; previous individual reviews were manual.
- No live deployment or publish check.
- Avoid merging entire editorial branch because it contains additional work in other sections and reports. If approval to deploy is later given, publish ONLY these four outstanding guide HTML files (Sla, Paprika, Komkommer, Aardappelen), then compare main blob SHAs to branch and verify the site.

## Gate
CONTENT_APPROVED. STATIC_PRESERVATION_PASS. INTERNAL_REPOSITORY_LINK_TARGETS_PASS. FULL_HTML5_VALIDATION_NOT_RUN. PLAYWRIGHT_VISUAL_QA_NOT_RUN. RELEASE_NOT_AUTHORIZED.
