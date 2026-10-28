# Shared-agent smoke test — munt-kweken-in-pot
Date: 2026-10-28
Branch: agent-infrastructure/horticulture-nl
Page: kruiden-kweken/munt-kweken-in-pot/index.html

## Verified
- Read AGENTS.md, .agents/shared-routing.json and .agents/site-context.shared.md through GitHub connector.
- Route `/kruiden-kweken/` selects `guide`, i.e. guide-analysis-workflow followed by guide-content-workflow only if audit decision justifies it.
- Verified existence of full guide-analysis-workflow (16,518 chars) and specialist seo-content-audit, seo-keyword, search-intent, fact-check and editorial-qa.
- Read current HTML in full (13,371 chars). No page mutation performed.
- Actual public SERP/source lookup performed: https://www.rhs.org.uk/herbs/mint/grow-your-own ; https://zelfthuiskweken.nl/kweekgidsen/kruiden/munt.html ; https://www.compo.nl/advies/planten/kruiden-groenten-fruit/munt .
- Content findings: revised article covers mint rhizomes, water, potting, harvest, propagation, overwintering and rust. Still need proof of independent editorial quality and layout. Repetition of semantic H2 questions should be reviewed in a rendered page and against the topic, not accepted on character count.

## Real execution matrix
| Step | Status |
|---|---|
| GitHub routing file resolution | PASS |
| Required specialist skill file presence sample | PASS |
| Manual public SERP and horticultural source lookup | PASS |
| Full agent execution via ChatGPT Work | NOT_RUN (Work runtime not invoked through this GitHub connector) |
| Distinct autonomous sub-agent execution | NOT_RUN |
| Independent editorial QA | NOT_RUN |
| Playwright rendered desktop/mobile screenshots | NOT_RUN |
| Merge / deploy | NOT_RUN, intentionally forbidden |

## Decision
ROUTING_SMOKE_TEST_PASS; AUTONOMOUS_EXECUTION_NOT_VERIFIED. A manual GitHub fetch/read and web lookup is not equivalent to a Work agent-run. Do not mark PUBLISH_REVIEW PASS. Maintain FAIL — KEEP_NOINDEX until the actual Work run and relevant independent/visual gates produce verifiable evidence.
