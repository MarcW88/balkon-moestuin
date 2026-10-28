# Single-page workflow — Basilicum kweken in pot
Date: 2026-10-28. Branch: editorial/shared-workflow-other-pages-20261028.
Article: kruiden-kweken/basilicum-kweken-in-pot/index.html. Commit: 0e4527b3d53fbe7fdd8c09e3c971d95a882e869a.

## AUDIT decision: DEEP_REWRITE in scope
Existing page had superficial short explanatory paragraphs, disconnected variety and steps tables after prose, malformed HTML links already repaired in initial batch. Main user intent: grow and continually harvest basil in a container in NL climate. Existing title, meta, H1, navigation, three cultivar descriptions, six steps, existing contextual links and attribution preserved.

## Research and evidence
RHS https://www.rhs.org.uk/herbs/basil/grow-your-own: warm sunny shelter, seedlings indoor March-July ~20 C, outside after frost / nights consistently >10 C when sowing outside, transplant and hardening, supermarket pots are crowded and RHS biosecurity advice to keep these indoors, summer cuttings, harvesting.
University Minnesota Extension https://extension.umn.edu/garden-and-home/yard-and-garden/yard-and-garden-problems/growing-basil: 6–8 h bright light, regular pruning, container drainage, plants sensitive to cold.
No first-hand test, no quantitative yield claims.

## Changes
- Moved original cultivar and six-step tables next to explanations; added Dutch accessible headers and removed disjoint bottom structure.
- Added realistic supermarket plant limitations and distinction from balcony plants, validated to RHS.
- Added a differential symptom table and explained cuttings.
- Made cold-night decision actionable and retained feeding, watering, pinching, winter and internal navigation.

## Verification
GitHub fetch after write: PASS. 1 main tag pair, 6 section pairs, 3 table pairs, 21 anchor pairs. Broken anchors: 0. Existing two tables preserved and one new diagnostic table added. Domain-specific checks manually performed.
Humanizer / anti-ai-slop: manual editorial pass by the executing assistant; **no separate autonomous specialist was run**. Independent editorial QA: NOT_RUN. Playwright desktop/mobile: NOT_RUN. Full HTML validation: NOT_RUN.
Publish review: NOT READY — human approval required; no merge to main/deploy. Do not continue to next page before approval.
