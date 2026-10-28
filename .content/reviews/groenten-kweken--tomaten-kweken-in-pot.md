# PUBLISH_REVIEW — pilot
Checked: 2026-10-28
Branch: agent-infrastructure/horticulture-nl
Page: /groenten-kweken/tomaten-kweken-in-pot/
Decision: FAIL — KEEP_NOINDEX (testpilot, geen toestemming om te publiceren).

| Gate | Status | Evidence |
| --- | --- | --- |
| Routing | PASS | AGENTS.md + guide-analysis-workflow en guide-content-workflow aanwezig en voor deze pilot gelezen/toegepast |
| AUDIT | PASS | .content/audits/groenten-kweken--tomaten-kweken-in-pot.md |
| Research and evidence | PASS (scoped) | RHS brondocumenten onderzocht; .content/evidence dossier |
| Brief | PASS | .content/briefs dossier |
| Edit / content-and-copy | PASS (scoped) | gerichte correctie HTML, rassenkeuze, belasting en vorstrisico |
| HUMANIZER | NOT_RUN | Geen afzonderlijke volledige-pagina pass met before/after bewijs bij eerdere pilot |
| ANTI_AI_SLOP | NOT_RUN | Geen afzonderlijke volledige-pagina structuur- en waardecontrole met bewijs bij eerdere pilot |
| General-writing | PASS (scoped) | Beperkte formuleringstoets, geen integrale pass |
| Horticultural fact-check | PASS (scoped) | RHS claims vergeleken, veiligheidsgrens expliciet |
| SEO onpage | PASS (static partial) | canonical, title, H1 en aanwezige interne links in HTML gecontroleerd; live links niet getest |
| SEO technical | NOT_RUN | geen live crawl / validatie van alle targets, schema, sitemap of browser |
| Visual Playwright desktop | NOT_RUN | GitHub clone geblokkeerd door DNS-resolutie in uitvoeromgeving |
| Visual Playwright mobile | NOT_RUN | idem; geen screenshot of visuele inspectie |
| EDITORIAL_QA | NOT_RUN | Eerdere beperkte review is onvoldoende voor onafhankelijke volledige-pagina PASS |
| Full cluster audit | NOT_RUN | geen volledige SERP-/pagina-overlapanalyse |
| Human approval | PENDING | expliciete validatie vereist |

Changes committed: breadcrumb HTML closing-tag fixed; removed empty div; strengthened cultivar selection, balcony safety and weather caution.
No merge, no deploy, no robots/noindex change.
Next action: obtain environment capable of checkout/browser, run full Playwright screenshots + inspection and link/technical checks; then re-run PUBLISH_REVIEW and ask human approval.
