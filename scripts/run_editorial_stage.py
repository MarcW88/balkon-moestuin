#!/usr/bin/env python3
"""Run one editorial agent phase at a time, with checkpoint verification."""
import argparse, pathlib, subprocess, sys
root=pathlib.Path(__file__).resolve().parents[1]
stages=["audit","research","brief","substance_draft","humanizer","anti_ai_slop","fact_check","seo","editorial_qa"]
p=argparse.ArgumentParser()
p.add_argument("--page",required=True)
p.add_argument("--stage",required=True,choices=stages)
p.add_argument("--agent-command",required=True,help="Installed agent command executable (e.g. codex)")
a=p.parse_args()
target=root/a.page/"index.html"
if not target.exists() or a.page.count("/")!=1:
    p.error("Invalid single-page target")
skill={"audit":"guide-analysis-workflow","research":"fact-check","brief":"content-brief-authoring","substance_draft":"content-and-copy","humanizer":"humanizer","anti_ai_slop":"anti-ai-slop","fact_check":"fact-check","seo":"seo-onpage","editorial_qa":"editorial-qa"}[a.stage]
skillfile=root/".agents"/"skills"/skill/"SKILL.md"
if not skillfile.exists():
    sys.exit("BLOCKED: skill not installed")
prompt=f"""Read AGENTS.md, .agents/WORKFLOW.md and {skillfile.relative_to(root)}.
Execute {a.stage} on ONLY {a.page}/index.html, following the complete methods in the repository.
Respect prior stage evidence. Record your real outputs in the corresponding .content dossier.
Do not call an unexecuted gate PASS. Do not push, merge, deploy, or change indexation."""
result=subprocess.run([a.agent_command,"exec",prompt],cwd=root,check=False)
sys.exit(result.returncode)
