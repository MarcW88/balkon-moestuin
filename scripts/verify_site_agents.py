#!/usr/bin/env python3
"""Verify full shared routing and pinned source identity; this is not AI execution."""
import hashlib, json, pathlib, sys
root=pathlib.Path(__file__).resolve().parents[1]
cfg=json.loads((root/'.agents/shared-routing.json').read_text(encoding='utf-8'))
lock=json.loads((root/'.agents/site-agents.lock.json').read_text(encoding='utf-8'))
errors=[]
ctx=root/cfg['context']
if not ctx.is_file(): errors.append(f"Missing context: {cfg['context']}")
for family,skills in cfg['families'].items():
    for skill in skills:
        file=root/'.agents/skills'/skill/'SKILL.md'
        if not file.is_file(): errors.append(f"Missing {family}: {skill}")
for route,family in cfg['routes'].items():
    if family not in cfg['families']: errors.append(f"Invalid route {route}: {family}")
for path,want in lock['files'].items():
    file=root/path
    if not file.is_file(): errors.append(f"Missing pinned file {path}"); continue
    data=file.read_bytes()
    actual=hashlib.sha1(b'blob '+str(len(data)).encode()+bytes([0])+data).hexdigest()
    if actual!=want: errors.append(f"SHA mismatch {path}: expected {want}, got {actual}")
if errors: sys.exit('FAIL: '+'; '.join(errors))
print(f"PASS: {len(cfg['families'])} workflow families, {len(cfg['routes'])} routes, {len(lock['files'])} pinned files match source Git blob SHA.")
print("NOTE: no autonomous agent run, Playwright or editorial QA is implied by this verification.")
