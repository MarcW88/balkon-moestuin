#!/usr/bin/env python3
"""Verify shared routing and required skills without invoking agents."""
import json, pathlib, sys
root=pathlib.Path(__file__).resolve().parents[1]
cfg=json.loads((root/'.agents/shared-routing.json').read_text(encoding='utf-8'))
missing=[]
if not (root/cfg['context']).is_file(): missing.append(cfg['context'])
for family,skills in cfg['families'].items():
    for skill in skills:
        p=root/'.agents/skills'/skill/'SKILL.md'
        if not p.is_file(): missing.append(str(p.relative_to(root)))
for route,family in cfg['routes'].items():
    if family not in cfg['families']: missing.append('route family '+route)
if missing: sys.exit('FAIL: '+', '.join(missing))
print('PASS: routes and required shared workflow files present. No AI execution verified.')
