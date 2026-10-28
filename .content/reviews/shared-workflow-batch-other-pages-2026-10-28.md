# Editorial shared-workflow batch — 2026-10-28

Scope: first batch of four non-mint guides on a branch off main. Mint page not touched.

## Pages edited and preserved
- `kruiden-kweken/basilicum-kweken-in-pot/index.html`: preserve variety and six-step tables; explain variety choice and weather acclimatisation; replace empty layout containers; repair malformed links; place existing summary tables inside main.
- `groenten-kweken/tomaten-kweken-in-pot/index.html`: explain determinate bush vs indeterminate cordon pruning and support; replace empty variety container with useful decision content; repair malformed links.
- `groenten-kweken/radijs-kweken-in-pot/index.html`: improve no-root diagnosis (spacing, heat, dry soil); preserve variety table; repair malformed anchors and section nesting.
- `fruit-kweken/aardbeien-kweken-in-pot/index.html`: improve damp-fruit and crown care; translate English table labels into Dutch; remove empty placeholders, put existing comparison within main.

## Sources retrieved and checked
- https://www.rhs.org.uk/herbs/basil/grow-your-own
- https://www.rhs.org.uk/vegetables/tomatoes/grow-your-own
- https://www.rhs.org.uk/vegetables/radishes/grow-your-own
- https://www.rhs.org.uk/fruit/strawberries/grow-your-own

## QA
GitHub readback for all four changed files: 1 H1, 1 opening/closing main, matched section tags, matched opening/closing anchor tags, matched table tags. No broken `</a` tokens, no empty div-grid placeholders. Preservation of existing tables and original page slug verified for these files.
Independent humanizer and editorial QA subagent runs: NOT_RUN.
Playwright visual QA: NOT_RUN. Full crawl/link verification: NOT_RUN.
No merge to main or deployment. This is an initial batch, not the full site's remaining pages, and is not a claim of fully autonomous subagent orchestration.
