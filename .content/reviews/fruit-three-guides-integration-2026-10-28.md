# Fruit kweken — integration and preservation review
Date 2026-10-28. Branch editorial/shared-workflow-other-pages-20261028. User approved Aardbeien, Blauwe bessen, Frambozen. No main merge or deploy during this review.

## GitHub comparison
| Guide | main length | branch length | equal Git blobs | release action |
|---|---:|---:|---|---|
| aardbeien-kweken-in-pot | 13775 | 13775 | yes (508e978d0fca3ee5b08515470cc37cbd8e629aa9) | none |
| blauwe-bessen-kweken-in-pot | 9529 | 16199 | no | only this HTML file |
| frambozen-kweken-in-pot | 9116 | 16098 | no | only this HTML file |

Changed pages received substantive guides, choice tables, six-step tiles and troubleshooting tables; existing content concepts and URL targets were retained. Aardbeien is already identical to main. No new content edits were made during this QA report.

## Structural/SEO assertions from read-back
All 3 pages: title, meta description, H1 and canonical unchanged compared with main, exactly one h1/main; all original internal and external link URLs preserved; all checked HTML opening/closing tag counts matched for main, section, div, a, table, tr, th, td, h1, h2, h3; no empty grid div; no malformed </a closure; all tables within main.

Counts:
- Aardbeien: main 1/1, sections 3/3, div 14/14, a 20/20, tables 2/2, tr 10/10, th 6/6, td 24/24, h1 1/1, h2 9/9.
- Blauwe bessen: main 1/1, sections 4/4, div 24/24, a 21/21, tables 2/2, tr 11/11, th 6/6, td 27/27, h1 1/1, h2 13/13, h3 6/6.
- Frambozen: main 1/1, sections 4/4, div 24/24, a 22/22, tables 2/2, tr 10/10, th 7/7, td 27/27, h1 1/1, h2 14/14, h3 6/6.

17 distinct internal route destinations including root were all verified as existing path/index.html on the editorial branch (17/17). This does NOT certify HTTP status, rendered UI, nor links to remote RHS sites.

## Limitations and release gate
Humanizer / Anti-AI-Slop and targeted source-based fact checking from prior page reviews were manual; independent specialized subagents were not run.
NOT RUN: strict HTML5 validator/DOM parser, actual Playwright desktop and mobile screenshots and visual inspection, a11y automated tests, responsive overflow or JS console test, HTTP checks of public site, external website availability check, deployment verification. The earlier Playwright workspace access blocker still applies.
CONTENT_USER_APPROVED. STATIC_INTEGRITY_PASS (limited scope). REPOSITORY_INTERNAL_TARGETS_PASS. VISUAL_QA_NOT_RUN. RELEASE_NOT_AUTHORIZED.
If the user later authorizes publication, selectively copy only the final approved Blauwe bessen and Frambozen HTML files to main. Do not merge entire branch because it contains work in other categories; independently verify file SHA equality and public deployment. Do not touch Aardbeien already matched.
