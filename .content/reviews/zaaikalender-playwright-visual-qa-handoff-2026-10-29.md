# Zaaikalender — Playwright visual QA handoff (2026-10-29)

Repository MarcW88/balkon-moestuin, branch `editorial/shared-workflow-other-pages-20261028`. No main merge or production deployment.

## Implemented in actual GitHub branch
- `.github/qa/zaaikalender-visual.cjs` (commit 7e714ec3b85879a9c4c6d9c6c856bf602fe20b00).
- `.github/workflows/zaaikalender-visual-qa.yml` (commit d909bb0bf2e27e99f4ba9eb98d862d2acb5c4da7).
The workflow checks out the branch, installs Chromium via Playwright, runs a local Python static server, performs 13 pages × 2 viewports (375x812 and 1440x900), screenshots each page, checks HTTP 200, overflow, one H1, canonical captured, image loads, keyboard skip link first focus/visibility, main target, table scoped headers and keyboard-focusable scroll region, page JavaScript errors; JSON+PNG artifacts uploaded on success or failure. Test command: `node .github/qa/zaaikalender-visual.cjs` after launching static server; workflow runs automatically on pushes matching paths or can be dispatched.

## Verified here
The two files were written to and re-fetched successfully from the requested GitHub branch. The earlier static review of all 13 pages after accessibility changes found 13 valid skip-link/targets and all 14 scroll-region wrappers; balanced HTML target tags and 13 unique canonicals.

## Important execution limitation
The assistant's local environment has `/usr/bin/chromium` and Python Playwright installed, but it cannot retrieve GitHub files directly because github.com DNS resolution failed. The supplied GitHub connector can read/write files but does not provide a generic GitHub Actions run listing or a trigger action. The public GitHub Actions run view was not accessible from available browser tool. Therefore **no verified GitHub Actions run, zero completed Playwright screenshots and zero actual desktop/mobile rendered-page test results can be claimed in this turn**. The workflow is prepared to run on branch push, but its run status is unconfirmed. Its action execution and any discovered visual failures need review before merging.

## Next step before deployment
Open https://github.com/MarcW88/balkon-moestuin/actions/workflows/zaaikalender-visual-qa.yml and check branch run. If GitHub Actions is enabled, use Run workflow -> branch editorial/shared-workflow-other-pages-20261028. Download `zaaikalender-playwright-visual-results`, inspect 26 screenshots and results.json, fix any confirmed issues, repeat until green. This is a quality gate, not permission to merge/deploy.
