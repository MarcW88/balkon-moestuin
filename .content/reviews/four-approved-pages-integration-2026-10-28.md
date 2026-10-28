# Bilan d'intégration — quatre pages validées
Date: 2026-10-28. Branch: editorial/shared-workflow-other-pages-20261028. NO merge and NO deployment.
Approved by user: Basilicum, Tomaten, Radijs, Aardbeien (individual approvals in conversation).

## Page results (comparison with main)
| Page | main HTML characters | branch HTML characters | delta | preserved |
|---|---:|---:|---:|---|
| kruiden-kweken/basilicum-kweken-in-pot/index.html | 10219 | 13464 | +3245 | title, meta, H1, canonical, all URLs |
| groenten-kweken/tomaten-kweken-in-pot/index.html | 8863 | 14844 | +5981 | title, meta, H1, canonical, all internal URLs |
| groenten-kweken/radijs-kweken-in-pot/index.html | 7148 | 12393 | +5245 | title, meta, H1, canonical, all URLs |
| fruit-kweken/aardbeien-kweken-in-pot/index.html | 7720 | 13775 | +6055 | title, meta, H1, canonical, all URLs |

Total source HTML: 33950 -> 54412, +20462 characters. Size increase is not an independent quality metric.

## Editorial summary
Basilicum: crop varieties and previously disconnected six-step table placed by user decisions; cold nights, supermarket plants, cuttings, diagnosis.
Tomaten: 6 original cultivation tiles preserved; bush vs cordon habit, stable pots, watering and nutrition, blossom-end rot, blight and harvest; one symptom table.
Radijs: original cultivar comparison preserved, spacing and sowing type differentiated; root vs leaf problems, heat, moisture and sowing seasons; one symptom table.
Aardbeien: original once-bearing/perpetual/alpine comparison preserved; crown placement, runners, harvesting, grey mould, freeze damage, pruning and replacement; one symptom table.

## Integrity
Readback directly from GitHub branch for all 4 files (not inferred from commit output).
- title, meta description, H1 and canonical: exactly unchanged vs main for all 4.
- Removed INTERNAL href targets: none in all 4.
- Current distinct internal route targets checked with GitHub fetch_file(index.html): 15/15 exist on branch. Root URL and all direct page links are known, but no runtime HTTP status checks.
- All four: one main open/close, one H1 open/close, matched section/div/link/table/tr/th/td/H2 start/end counts.
- No empty div/grid placeholders in the four pages.
- External-source URL changes were limited to Tomaten: the longer valid RHS tomatoes-in-container URL and RHS blossom-end rot link were verified through public web lookup on this date.
- No newly inserted image assets in this batch; source files showed no img tags.

## Limits — mandatory honest reporting
- Full parser-based HTML5 validation: NOT_RUN; matched tag counts are not equivalent to HTML conformance or DOM correctness.
- Playwright desktop/mobile screenshots: NOT_RUN. Chromium and Playwright libraries are installed, but container DNS fails for public website and GitHub Raw; browser cannot retrieve branch HTML/CSS. The public site also fails to load from external web tool. Never claim visual PASS.
- Automated independent Humanizer, Anti-AI-Slop and Editorial-QA subagents: NOT_RUN. Manual checks were applied during individual editorial work; this does not prove independent execution.
- Server routing, redirects, full HTTP link crawl, deployment checks and sitemap inspection: NOT_RUN.
- External source pages validated as reachable include RHS tomatoes in container and RHS blossom-end rot.
- GitHub branch contains earlier batch work on all 4 and reports; only after user approval should it be integrated. Avoid merging the whole branch if unrelated commits may be included without reviewing diff first.

## Gate
CONTENT_APPROVED_BY_USER; STATIC_PRESERVATION_CHECKS_PASS; LINK_TARGETS_EXIST_IN_REPO; VISUAL_QA_NOT_RUN; FULL_RELEASE_GATE_NOT_PASSED.
No merge or deploy. Request explicit further authorization before release.
