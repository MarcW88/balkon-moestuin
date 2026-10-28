# Preview preparation — four approved guides
2026-10-28. Branch editorial/shared-workflow-other-pages-20261028 only.
Files used via GitHub branch: style.css and four guide index.html files. All five retrieved/read by GitHub connector. Independent browser in working container has installed Chromium and Python Playwright, verified by launching Chromium and rendering a local h1.
BLOCKER: container cannot resolve/reach raw.githubusercontent.com or public site; GitHub connector data not mounted into browser filesystem. Therefore the browser cannot load exact branch files. No real article screenshots were generated or visually inspected, and no browser-based defect correction has been claimed.
Prepared reproducible runner at scripts/preview_four_approved_pages.py. Run from a branch checkout; it serves local site, captures 1440x900 and 390x844 full-page screenshots for Basilicum/Tomaten/Radijs/Aardbeien, checks unique H1/main, horizontal overflow, internal link file targets and page errors, emits .content/reviews/playwright-four-guides/results.json. Script was created but NOT EXECUTED on actual article files.
CSS review of style.css: global @import fonts; responsive nav and grid breakpoint at 760px; table min-width 680px inside .scroll overflow container; focus-visible outline defined. These are code observations, not visual passes.
No HTML/CSS edits made in this preview preparation stage because no verified visual rendering defect was observed.
No merge to main; no deployment or production hosting changes.
