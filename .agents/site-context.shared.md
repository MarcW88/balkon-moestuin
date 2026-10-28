# Shared agents — Balkon Moestuin site adapter

Language: nl-NL. Domain: balkon-moestuin.nl. Source of truth: static HTML/CSS index.html and style.css, no generator, Node, TS, runtime JS.

## Method authority
Read AGENTS.md, .agents/shared-routing.json, .agents/site-agents.lock.json, this context, and original full specialized SKILL.md files. The canonical shared methods come from MarcW88/bloc-notes-numerique; aspirateurs-chantier offers complementary workflows. NEVER shorten the canonical workflow. French examples within shared skills are methodological examples; actual final content must be natural Dutch and agronomically verified. Route names in the reference /guides/, /usages/, /comparatifs/, /marques/ are not literal paths on this site. Do not run any archived French generator or action.

## Route bindings
- /moestuin-beginnen/, /groenten-kweken/, /kruiden-kweken/, /fruit-kweken/, /balkon-inrichten/, /moestuin-verzorgen/, /zaaikalender/, /problemen/ → guide (including their hubs).
- /beste-producten/ → comparison.
- Trust and design selected by task.

## Native bindings
Work only on the explicitly authorized URL on agent-infrastructure/horticulture-nl. Keep static HTML and CSS. Use real research, evidence, substantive writing, individual specialist passes, and actual browser checks; missing tools remain NOT_RUN. No claim of autonomous execution from skill files alone. No merge, push to main, deploy, sitemap or indexing changes without user approval.

## Automation boundary
In ChatGPT Work, the executing agent reads these files and orchestrates skills in the current session without a separately configured API key. These repository files are routing/instructions, not autonomous daemons or proof that Work ran. Do not require a custom codex CLI or OPENAI_API_KEY unless a user separately requests external unattended execution.

## Installation assurance
The 9 original shared workflow families are installed. Critical canonical files are pinned by Git blob hash in .agents/site-agents.lock.json and verified by python3 scripts/verify_site_agents.py. Unlike the full reference repository's 555-file archive, this is an active-skill integration, not a claim that the complete archival reference tree was copied. Active guides and comparisons are mapped by Dutch site paths; the other shared families are available but not automatically assigned to unrelated page families. A successful verifier means installed instructions are coherent, not that Work agents executed independently.
