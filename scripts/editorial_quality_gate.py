#!/usr/bin/env python3
"""Inspect staged agent evidence; fail closed. Does not execute AI calls or publish."""
import argparse, json, pathlib, sys
root=pathlib.Path(__file__).resolve().parents[1]
stages=["audit","serp","evidence","brief","substance_draft","humanizer","anti_ai_slop","fact_check","seo","editorial_qa","visual_qa"]
p=argparse.ArgumentParser()
p.add_argument("--page",required=True)
p.add_argument("--evidence-dir",default=None)
a=p.parse_args()
slug=a.page.strip("/").replace("/","--")
folder=root/".content"/"runs"/slug if a.evidence_dir is None else pathlib.Path(a.evidence_dir).resolve()
if not (root/a.page/"index.html").is_file() or not folder.is_relative_to(root):
    sys.exit("BLOCKED: invalid source page or evidence directory")
report=[]
for stage in stages:
    file=folder/(stage+".json")
    try:
        obj=json.loads(file.read_text())
        passed=obj.get("status")=="PASS" and isinstance(obj.get("evidence"),list) and bool(obj["evidence"])
    except (OSError,ValueError,TypeError):
        passed=False
    report.append({"stage":stage,"status":"PASS" if passed else "NOT_RUN_OR_FAIL"})
print(json.dumps(report,indent=2))
if any(x["status"]!="PASS" for x in report):
    sys.exit("BLOCKED: incomplete workflow. No merge or deployment allowed.")
print("QUALITY GATES COMPLETE; HUMAN APPROVAL STILL REQUIRED")
