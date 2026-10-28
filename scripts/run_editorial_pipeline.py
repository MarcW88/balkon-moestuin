#!/usr/bin/env python3
"""Sequential editorial orchestration, no publishing privileges."""
import argparse, pathlib, subprocess, sys
root=pathlib.Path(__file__).resolve().parents[1]
stages=["audit","research","brief","substance_draft","humanizer","anti_ai_slop","fact_check","seo","editorial_qa"]
p=argparse.ArgumentParser()
p.add_argument("--page",required=True)
p.add_argument("--agent-command",default="codex")
p.add_argument("--dry-run",action="store_true")
a=p.parse_args()
page=a.page.strip("/")
if page.count("/")!=1 or not (root/page/"index.html").is_file():
    p.error("Pass one existing editorial page")
for stage in stages:
    command=[sys.executable,str(root/"scripts/run_editorial_stage.py"),"--page",page,"--stage",stage,"--agent-command",a.agent_command]
    print("STAGE",stage,flush=True)
    if a.dry_run:
        continue
    result=subprocess.run(command,cwd=root)
    if result.returncode:
        sys.exit(f"BLOCKED: {stage} agent failed; no subsequent stages launched")
if a.dry_run:
    print("Dry run: no agents invoked")
else:
    gate=subprocess.run([sys.executable,str(root/"scripts/editorial_quality_gate.py"),"--page",page],cwd=root)
    if gate.returncode:
        sys.exit("BLOCKED: incomplete evidence; no approval to publish")
    print("Agent pipeline finished. Human approval required; no push, merge or deploy.")
