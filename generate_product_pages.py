#!/usr/bin/env python3
"""Generate individual product pages for balkon-moestuin.nl.
Generates pages for the cheapest CAP products (those shown in shop pages).
Usage: python3 generate_product_pages.py
"""
import json
import re
import html as html_mod
from pathlib import Path

ROOT = Path('/Users/marc/Desktop/balkon-moestuin')
OUT_DIR = ROOT / 'producten'
OUT_DIR.mkdir(exist_ok=True)
CAP = 3000   # generate pages for CAP cheapest products (covers all shop pages)
SITE = 'https://balkon-moestuin.nl'

CATEGORY_LABELS = {
    'balkonbakken': 'Balkonbakken & bloempotten',
    'bewatering':   'Bewatering & irrigatie',
    'potgrond':     'Potgrond & substraat',
    'meststoffen':  'Meststoffen & plantvoeding',
    'gereedschap':  'Tuingereedschap',
    'kweeklampen':  'Kweeklampen & groeiverlichting',
    'zaden':        'Zaden & kiemen',
    'overig':       'Tuinproducten',
}

CATEGORY_SHOP = {
    'balkonbakken': 'shop/categories/balkonbakken.html',
    'bewatering':   'shop/categories/bewatering.html',
    'potgrond':     'shop/categories/potgrond.html',
    'meststoffen':  'shop/categories/meststoffen.html',
    'gereedschap':  'shop/categories/gereedschap.html',
    'kweeklampen':  'shop/categories/kweeklampen.html',
    'zaden':        'shop/categories/zaden.html',
    'overig':       'shop/index.html',
}

CATEGORY_INTROS = {
    'balkonbakken':  'een mooie plantenbak of bloempot voor je balkon',
    'bewatering':    'een handig bewateringssysteem voor je balkontuin',
    'potgrond':      'de juiste potgrond of substraat voor je planten',
    'meststoffen':   'plantvoeding of meststof voor gezonde groei',
    'gereedschap':   'tuingereedschap voor je balkon of moestuin',
    'kweeklampen':   'een kweeklamp voor zaailingen of kamerplanten',
    'zaden':         'zaad voor je balkontuin of moestuin',
    'overig':        'een handig tuinproduct',
}


def h(text):
    return html_mod.escape(str(text or ''))


def clean_desc(raw):
    """Strip HTML tags from description."""
    return re.sub(r'<[^>]+>', ' ', str(raw or '')).strip()


def find_similar(product, all_products, n=4):
    same_cat = [p for p in all_products
                if p['id'] != product['id']
                and p.get('category') == product.get('category')
                and p.get('deliverable')
                and p.get('price', 0) > 0]
    same_brand = [p for p in same_cat if p.get('brand') == product.get('brand')]
    others = [p for p in same_cat if p.get('brand') != product.get('brand')]
    candidates = same_brand[:2] + others[:2]
    if len(candidates) < n:
        candidates = (same_brand + others)[:n]
    return candidates[:n]


def generate_page(p, all_products):
    name = h(p['name'])
    slug = p['slug']
    brand = h(p.get('brand') or 'Onbekend')
    price = p.get('price', 0)
    list_price = p.get('list_price', 0)
    image = p.get('image', '')
    affiliate = p.get('affiliate_url', '#')
    category = p.get('category', 'overig')
    subgroup = h(p.get('subgroup') or '')
    subsgroup = h(p.get('subssubgroup') or '')
    ean = p.get('ean', '')
    desc_raw = clean_desc(p.get('description', ''))
    cat_label = CATEGORY_LABELS.get(category, 'Tuinproducten')
    cat_shop = CATEGORY_SHOP.get(category, 'shop/index.html')
    cat_intro = CATEGORY_INTROS.get(category, 'een tuinproduct')

    price_display = f"€{price:,.2f}".replace(',', 'X').replace('.', ',').replace('X', '.')

    intro = f'Op zoek naar {cat_intro}? {p["name"][:60]}{"…" if len(p["name"])>60 else ""} is direct leverbaar via Bol.com.'
    if brand and brand != 'Onbekend' and brand != 'Merkloos':
        intro = f'Op zoek naar {cat_intro} van {brand}? Dit product is direct leverbaar via Bol.com met gratis verzending.'

    pros = []
    if brand and brand not in ('Onbekend', 'Merkloos', 'Overig'):
        pros.append(f'✓ {brand} kwaliteit')
    pros.append(f'✓ {cat_label}')
    if subgroup:
        pros.append(f'✓ {p.get("subgroup", "")}')
    pros.append('✓ Gratis verzending')
    pros.append('✓ Gratis retour binnen 30 dagen')

    similar = find_similar(p, all_products)
    similar_html = ''
    for s in similar:
        sp = f"€{s['price']:,.2f}".replace(',', 'X').replace('.', ',').replace('X', '.')
        similar_html += f'''                <a href="{s['slug']}.html" class="similar-card">
                    <img src="{h(s.get('image',''))}" alt="{h(s['name'][:60])}" loading="lazy" onerror="this.style.display='none'">
                    <h4>{h(s['name'][:65])}</h4>
                    <span class="card-price">{sp}</span>
                </a>\n'''

    price_old_html = ''
    if list_price and list_price > price > 0:
        lp = f"€{list_price:,.2f}".replace(',', 'X').replace('.', ',').replace('X', '.')
        discount = round((1 - price / list_price) * 100)
        price_old_html = (f'<span style="text-decoration:line-through;color:#999;font-size:1.1rem;'
                          f'margin-left:0.5rem;">{lp}</span> '
                          f'<span style="background:#e8f5e9;color:#2e7d32;font-size:0.8rem;'
                          f'padding:0.2rem 0.5rem;border-radius:4px;margin-left:0.5rem;">-{discount}%</span>')

    desc_text = desc_raw[:400] + '…' if len(desc_raw) > 400 else desc_raw
    if not desc_text:
        desc_text = f'{p["name"]} — direct beschikbaar via Bol.com. Bekijk alle productdetails op de productpagina van Bol.com.'

    ld_json = json.dumps({
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": p['name'],
        "description": desc_raw[:200] or p['name'],
        "brand": {"@type": "Brand", "name": p.get('brand', '')},
        "category": cat_label,
        "image": image,
        "url": f"{SITE}/producten/{slug}.html",
        **({"gtin13": ean} if ean and len(str(ean)) == 13 else {}),
        "offers": {
            "@type": "Offer",
            "price": str(price),
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock",
            "seller": {"@type": "Organization", "name": "Bol.com"}
        }
    }, ensure_ascii=False)

    return f'''<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{name} kopen | Balkon-Moestuin.nl</title>
    <meta name="description" content="{name} kopen? Prijs: {price_display}. {h(cat_label)}. Direct leverbaar via Bol.com met gratis verzending.">
    <link rel="stylesheet" href="../assets/css/main.css">
    <link rel="canonical" href="{SITE}/producten/{slug}.html">
    <link rel="icon" type="image/svg+xml" href="../assets/img/pixel-plant.svg">
    <meta name="theme-color" content="#6b9e48">
    <script type="application/ld+json">{ld_json}</script>
    <style>
        .product-layout{{max-width:1180px;margin:0 auto;padding:2rem 1.5rem}}
        .product-breadcrumb{{font-size:.85rem;color:#888;margin-bottom:2.5rem}}
        .product-breadcrumb a{{color:#888;text-decoration:none}}.product-breadcrumb a:hover{{color:var(--leaf)}}
        .product-hero{{display:grid;grid-template-columns:minmax(260px,.8fr) minmax(0,1.2fr);gap:3rem;align-items:start;margin-bottom:3.5rem}}
        .product-gallery img{{width:100%;max-height:460px;object-fit:contain;background:#f5faf0;border-radius:16px;padding:2rem}}
        .product-summary h1{{font-size:clamp(1.6rem,3vw,2.4rem);line-height:1.15;margin-bottom:.75rem;color:#111}}
        .product-kicker{{font-size:.85rem;color:#888;text-transform:uppercase;letter-spacing:1px;margin-bottom:.5rem}}
        .product-intro{{font-size:1.05rem;line-height:1.7;color:#555;margin-bottom:1.5rem;max-width:580px}}
        .product-quick-pros{{display:flex;flex-wrap:wrap;gap:.5rem}}
        .product-quick-pros span{{font-size:.85rem;color:#333;background:#f0f7eb;padding:.4rem .75rem;border-radius:4px}}
        .content-grid{{display:grid;grid-template-columns:minmax(0,1fr) 320px;gap:3rem;align-items:start}}
        .product-content{{display:flex;flex-direction:column;gap:2.5rem}}
        .buy-box{{position:sticky;top:90px;border:1px solid #e5e5e5;border-radius:12px;padding:1.75rem}}
        .buy-box .price{{font-size:2.2rem;font-weight:700;color:var(--leaf);margin-bottom:1.25rem}}
        .buy-box .cta{{display:block;width:100%;text-align:center;background:var(--leaf);color:white;padding:1rem;text-decoration:none;border-radius:8px;font-size:1rem;font-weight:600;margin-bottom:1.25rem;transition:opacity .2s}}
        .buy-box .cta:hover{{opacity:.88}}
        .buy-box .trust{{font-size:.8rem;color:#666;line-height:1.8}}
        .buy-box .trust span{{display:block}}
        .buy-box .specs{{border-top:1px solid #eee;margin-top:1.25rem;padding-top:1.25rem;list-style:none;padding-left:0;margin-bottom:0}}
        .buy-box .specs li{{display:flex;justify-content:space-between;font-size:.85rem;padding:.4rem 0;color:#444}}
        .buy-box .specs li span:first-child{{font-weight:600}}
        .section-title{{font-size:1.2rem;font-weight:600;color:#111;margin-bottom:1rem}}
        .description p{{color:#444;line-height:1.8;font-size:.95rem;margin-bottom:1rem}}
        .similar-section{{margin-top:3.5rem;border-top:1px solid #eee;padding-top:2.5rem}}
        .similar-section h2{{font-size:1.2rem;font-weight:600;margin-bottom:1.5rem;color:#111}}
        .similar-grid{{display:grid;grid-template-columns:repeat(4,1fr);gap:1.25rem}}
        .similar-card{{text-decoration:none;color:inherit;border:1px solid #eee;border-radius:8px;padding:1rem;transition:box-shadow .2s}}
        .similar-card:hover{{box-shadow:0 4px 12px rgba(0,0,0,.08)}}
        .similar-card img{{width:100%;height:100px;object-fit:contain;margin-bottom:.75rem;background:#f5faf0;border-radius:6px;padding:.5rem}}
        .similar-card h4{{font-size:.8rem;line-height:1.4;margin-bottom:.5rem;color:#333;font-weight:500;height:2.2rem;overflow:hidden}}
        .similar-card .card-price{{font-size:.95rem;font-weight:700;color:var(--leaf)}}
        @media(max-width:900px){{
            .product-hero{{grid-template-columns:1fr}}
            .content-grid{{grid-template-columns:1fr}}
            .buy-box{{position:static}}
            .similar-grid{{grid-template-columns:repeat(2,1fr)}}
        }}
    </style>
</head>
<body>
    <nav class="navbar">
        <div class="container"><div class="nav-container">
            <a href="../index.html" class="nav-brand">Balkon-Moestuin.nl</a>
            <button class="mobile-menu-toggle" id="menuToggle" aria-label="Menu"><span></span><span></span><span></span></button>
            <ul class="nav-menu" id="navMenu">
                <li><a href="../index.html" class="nav-link">Home</a></li>
                <li class="nav-item dropdown"><a href="../gidsen/index.html" class="nav-link dropdown-toggle">Gidsen</a>
                    <ul class="dropdown-menu">
                        <li><a href="../gidsen/index.html" class="dropdown-link">Alle gidsen</a></li>
                        <li><a href="../planten/index.html" class="dropdown-link">Planten</a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown"><a href="../shop/index.html" class="nav-link dropdown-toggle active">Shop</a>
                    <ul class="dropdown-menu">
                        <li><a href="../shop/index.html" class="dropdown-link">Alle producten</a></li>
                        <li><a href="../shop/categories/balkonbakken.html" class="dropdown-link">Balkonbakken</a></li>
                        <li><a href="../shop/categories/bewatering.html" class="dropdown-link">Bewatering</a></li>
                        <li><a href="../shop/categories/potgrond.html" class="dropdown-link">Potgrond</a></li>
                        <li><a href="../shop/categories/meststoffen.html" class="dropdown-link">Meststoffen</a></li>
                        <li><a href="../shop/categories/gereedschap.html" class="dropdown-link">Gereedschap</a></li>
                        <li><a href="../shop/categories/kweeklampen.html" class="dropdown-link">Kweeklampen</a></li>
                        <li><a href="../shop/categories/zaden.html" class="dropdown-link">Zaden</a></li>
                    </ul>
                </li>
            </ul>
        </div></div>
    </nav>
    <div class="mobile-menu-overlay" id="menuOverlay"></div>
    <script>(function(){{var t=document.getElementById('menuToggle'),m=document.getElementById('navMenu'),o=document.getElementById('menuOverlay');function c(){{m.classList.remove('active');t.classList.remove('active');o.classList.remove('active');}}t.addEventListener('click',function(){{m.classList.toggle('active');t.classList.toggle('active');o.classList.toggle('active');}});o.addEventListener('click',c);}})();</script>

    <main>
    <div class="product-layout">
        <nav class="product-breadcrumb">
            <a href="../index.html">Home</a> /
            <a href="../{cat_shop}">{h(cat_label)}</a> /
            <strong>{h(p['name'][:55])}{"…" if len(p["name"])>55 else ""}</strong>
        </nav>

        <div class="product-hero">
            <div class="product-gallery">
                <img src="{h(image)}" alt="{name}" onerror="this.src='../assets/img/pixel-plant.svg'" loading="eager">
            </div>
            <div class="product-summary">
                <p class="product-kicker">{brand}{f" · {p.get('subgroup','')}" if p.get('subgroup') else ""}</p>
                <h1>{name}</h1>
                <p class="product-intro">{h(intro)}</p>
                <div class="product-quick-pros">
                    {''.join(f'<span>{h(pr)}</span>' for pr in pros)}
                </div>
            </div>
        </div>

        <div class="content-grid">
            <div class="product-content">
                <section>
                    <h2 class="section-title">Productbeschrijving</h2>
                    <div class="description">
                        <p>{h(desc_text)}</p>
                    </div>
                </section>

                <section>
                    <h2 class="section-title">Specificaties</h2>
                    <table style="width:100%;border-collapse:collapse;font-size:.9rem;">
                        <tr style="border-bottom:1px solid #eee;"><td style="padding:.6rem 0;font-weight:600;color:#333;width:40%;">Merk</td><td style="padding:.6rem 0;color:#555;">{brand}</td></tr>
                        <tr style="border-bottom:1px solid #eee;"><td style="padding:.6rem 0;font-weight:600;color:#333;">Categorie</td><td style="padding:.6rem 0;color:#555;">{h(cat_label)}</td></tr>
                        {f'<tr style="border-bottom:1px solid #eee;"><td style="padding:.6rem 0;font-weight:600;color:#333;">Productgroep</td><td style="padding:.6rem 0;color:#555;">{subgroup}</td></tr>' if subgroup else ''}
                        {f'<tr style="border-bottom:1px solid #eee;"><td style="padding:.6rem 0;font-weight:600;color:#333;">Subcategorie</td><td style="padding:.6rem 0;color:#555;">{subsgroup}</td></tr>' if subsgroup else ''}
                        {f'<tr style="border-bottom:1px solid #eee;"><td style="padding:.6rem 0;font-weight:600;color:#333;">EAN</td><td style="padding:.6rem 0;color:#555;">{h(str(ean))}</td></tr>' if ean else ''}
                        <tr><td style="padding:.6rem 0;font-weight:600;color:#333;">Beschikbaarheid</td><td style="padding:.6rem 0;color:#3a7a2a;font-weight:600;">✓ Direct leverbaar</td></tr>
                    </table>
                </section>
            </div>

            <aside class="buy-box">
                <div class="price">{price_display}{price_old_html}</div>
                <a href="{h(affiliate)}" target="_blank" rel="sponsored noopener" class="cta">Koop op Bol.com →</a>
                <div class="trust">
                    <span>✓ Gratis verzending</span>
                    <span>✓ Gratis retourneren binnen 30 dagen</span>
                    <span>✓ Snelle levering via Bol.com</span>
                    <span>✓ Veilig betalen</span>
                </div>
                <ul class="specs">
                    <li><span>Merk</span><span>{brand}</span></li>
                    <li><span>Categorie</span><span>{h(cat_label)}</span></li>
                    {f'<li><span>Groep</span><span>{subgroup}</span></li>' if subgroup else ''}
                </ul>
            </aside>
        </div>

        <section class="similar-section">
            <h2>Vergelijkbare producten</h2>
            <div class="similar-grid">
{similar_html}            </div>
        </section>
    </div>
    </main>

    <footer class="footer"><div class="container">
        <div class="footer-content">
            <div><p style="font-family:var(--font-serif);font-size:1.2rem;color:white;margin-bottom:1rem;">Balkon-Moestuin.nl</p><p style="color:#999;font-size:.85rem;line-height:1.7;margin-bottom:0;">Onafhankelijke gids voor balkontuin en moestuin op kleine ruimtes.</p></div>
            <div><h4>Gidsen</h4><a href="../gidsen/index.html">Alle gidsen</a><a href="../planten/index.html">Planten</a></div>
            <div><h4>Shop</h4><a href="../shop/categories/balkonbakken.html">Balkonbakken</a><a href="../shop/categories/bewatering.html">Bewatering</a><a href="../shop/categories/meststoffen.html">Meststoffen</a><a href="../shop/categories/zaden.html">Zaden</a></div>
            <div><h4>Info</h4><a href="../over-ons/index.html">Over ons</a><a href="../disclaimer-affiliatie/index.html">Affiliate</a><a href="../privacybeleid/index.html">Privacy</a></div>
        </div>
        <div class="footer-bottom">© 2025 Balkon-Moestuin.nl · <a href="../disclaimer-affiliatie/index.html" style="color:#9CA3AF;">Affiliate disclaimer</a></div>
    </div></footer>
</body>
</html>'''


def main():
    all_products = json.loads((ROOT / 'all_products.json').read_text(encoding='utf-8'))
    deliverable = [p for p in all_products if p.get('deliverable') and p.get('price', 0) > 0]
    deliverable.sort(key=lambda p: p.get('price', 9999))
    to_generate = deliverable[:CAP]

    print(f"Generating {len(to_generate)} product pages (out of {len(deliverable)} deliverable)…")

    generated = 0
    for i, p in enumerate(to_generate):
        page_html = generate_page(p, to_generate)
        out_file = OUT_DIR / f"{p['slug']}.html"
        out_file.write_text(page_html, encoding='utf-8')
        generated += 1
        if (i + 1) % 500 == 0:
            print(f"  …{i + 1} pages done")

    print(f"\n✓ {generated} product pages in /producten/")

    by_cat = {}
    for p in to_generate:
        c = p.get('category', '?')
        by_cat[c] = by_cat.get(c, 0) + 1
    for cat, cnt in sorted(by_cat.items(), key=lambda x: -x[1]):
        print(f"  {cat}: {cnt}")


if __name__ == '__main__':
    main()
