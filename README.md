# Balkon Moestuin

Pure static HTML/CSS site (no JavaScript, TypeScript, Node.js or Next.js).

The root `index.html` is the homepage. Each editorial URL lives at `<section>/<slug>/index.html` and renders directly in GitHub Pages or any static web host. `style.css`, `sitemap.xml`, `robots.txt` and `CNAME` are at the repository root.

The editorial catalogue is documented in `data/catalog.json` and research records are retained in `.content/`; neither is required for the published site.

**Important:** `robots.txt` temporarily disallows crawling until technical/visual checks and public release approval. After that, replace `Disallow: /` with `Allow: /`. Privacy/contact content still needs finalization.
