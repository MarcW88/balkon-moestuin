#!/usr/bin/env python3
"""Local-only, reproducible Playwright visual and structural audit for four approved guides.

Run in a checked-out copy of editorial/shared-workflow-other-pages-20261028:
  python -m pip install playwright
  python -m playwright install chromium
  python scripts/preview_four_approved_pages.py

No production deployment, no git writes and no external network dependencies.
"""
from __future__ import annotations
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from threading import Thread
from playwright.sync_api import sync_playwright
import json

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / ".content" / "reviews" / "playwright-four-guides"
PAGES = {
    "basilicum": "/kruiden-kweken/basilicum-kweken-in-pot/",
    "tomaten": "/groenten-kweken/tomaten-kweken-in-pot/",
    "radijs": "/groenten-kweken/radijs-kweken-in-pot/",
    "aardbeien": "/fruit-kweken/aardbeien-kweken-in-pot/",
}
VIEWPORTS = {"desktop": (1440, 900), "mobile": (390, 844)}


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    handler = partial(SimpleHTTPRequestHandler, directory=str(ROOT))
    server = ThreadingHTTPServer(("127.0.0.1", 0), handler)
    thread = Thread(target=server.serve_forever, daemon=True)
    thread.start()
    origin = f"http://127.0.0.1:{server.server_port}"
    results = []
    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            for name, path in PAGES.items():
                for device, (width, height) in VIEWPORTS.items():
                    page = browser.new_page(viewport={"width": width, "height": height}, device_scale_factor=1)
                    errors = []
                    page.on("pageerror", lambda err: errors.append(str(err)))
                    response = page.goto(origin + path, wait_until="load", timeout=15000)
                    page.evaluate("document.fonts.ready")
                    page.screenshot(path=str(OUT / f"{name}-{device}.png"), full_page=True)
                    result = {
                        "page": name, "device": device, "url": path,
                        "http": response.status if response else None,
                        "title": page.title(),
                        "h1": page.locator("h1").count(),
                        "main": page.locator("main").count(),
                        "tables": page.locator("table").count(),
                        "horizontal_overflow_px": page.evaluate(
                            "() => Math.max(0, document.documentElement.scrollWidth - innerWidth)"
                        ),
                        "broken_internal_links": [],
                        "console_page_errors": errors,
                    }
                    for href in page.locator('a[href^="/"]').evaluate_all(
                        "(els) => [...new Set(els.map(e => e.getAttribute('href')))]"
                    ):
                        target = ROOT / href.lstrip("/") / "index.html"
                        if not target.exists() and href != "/":
                            result["broken_internal_links"].append(href)
                    results.append(result)
                    page.close()
            browser.close()
    finally:
        server.shutdown()
    (OUT / "results.json").write_text(json.dumps(results, indent=2, ensure_ascii=False), encoding="utf-8")
    for result in results:
        print(result)
    assert all(r["http"] == 200 and r["h1"] == 1 and r["main"] == 1 for r in results)
    assert all(r["horizontal_overflow_px"] == 0 for r in results)
    assert all(not r["broken_internal_links"] for r in results)
    assert all(not r["console_page_errors"] for r in results)


if __name__ == "__main__":
    main()
