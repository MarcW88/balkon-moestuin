#!/usr/bin/env python3
"""Generate shop pages for balkon-moestuin.nl — same structure as italiaanse-percolator."""
from pathlib import Path
import json
import math
import html
from datetime import date

ROOT = Path('/Users/marc/Desktop/balkon-moestuin')
PER_PAGE = 24
CAP_PER_CAT = 2000   # max products embedded per page (JSON size control)
SITE = 'https://balkon-moestuin.nl'
PRODUCT_SLUGS: set = set()  # populated in main() from producten/ directory

CATEGORY_CONFIG = {
    'balkonbakken': {
        'title': 'Balkonbakken & bloempotten kopen',
        'h1': 'Balkonbakken & bloempotten',
        'description': 'Vergelijk plantenbakken, bloempotten en balkonbakken voor elk formaat balkon of terras.',
        'filter': lambda p: p.get('category') == 'balkonbakken',
        'faq': [
            ('Welke maat plantenbak is geschikt voor een balkon?',
             'Voor een balkon is een diepte van minimaal 20 cm nodig voor de meeste groenten en kruiden. Grotere bakken (40–60 cm diep) zijn nodig voor tomaten of courgettes. Denk ook aan het gewicht: een volle aarden bak kan 50–100 kg wegen — kies dan liever voor lichtgewicht kunststof of gerecycled materiaal.'),
            ('Welk materiaal is het best voor buitenpotten?',
             'Kunststof is lichtgewicht en vochtbestendig, ideaal voor balkons. Terracotta ademt goed maar droogt snel uit. Geglazuurde keramiek is mooi maar zwaar. Gerecyclede kunststof bakken (zoals Elho) combineren duurzaamheid met laag gewicht — een populaire keuze voor balkontuinen.'),
            ('Hoeveel afvoergaten heeft een plantenbak nodig?',
             'Minimaal één afvoergat per bak, maar meer is beter. Zonder goede afwatering rotten wortels snel. Leg altijd een laag hydrokorrels onderin (2–3 cm) als extra bufferlaag, ook als de bak al gaten heeft.'),
            ('Kan ik houten balkonbakken buiten laten staan in de winter?',
             'Ja, mits het hout behandeld of van nature duurzaam is (zoals Douglas of hardhout). Onbehandeld vurenhout vergaat snel door vocht. Bescherm houten bakken met een deklaag of verplaats ze tijdens strenge vorstperioden.'),
        ],
    },
    'bewatering': {
        'title': 'Bewateringssystemen & gieters kopen',
        'h1': 'Bewatering & irrigatie',
        'description': 'Vind gieters, druppelirrigatie en automatische bewateringssystemen voor balkon en moestuin.',
        'filter': lambda p: p.get('category') == 'bewatering',
        'faq': [
            ('Hoe vaak moet ik mijn balkonplanten water geven?',
             'In de zomer dagelijks of om de dag, afhankelijk van de potgrootte, het materiaal en de temperatuur. Kleine kunststof potten drogen sneller uit dan grote terracottabakken. Test door je vinger 2–3 cm in de aarde te steken: is de grond droog, dan moet je water geven.'),
            ('Wat is druppelirrigatie en hoe werkt het?',
             'Druppelirrigatie levert water langzaam en direct bij de wortels via kleine druppelleidingen. Het spaart water (tot 50% minder dan gieten) en vermindert schimmelziekten omdat het blad droog blijft. Ideaal voor vakantie of als je regelmatig vergeet water te geven.'),
            ('Welke gieter is het best voor kruiden op het balkon?',
             'Een smalspotige gieter met een lange tuit geeft je precies controle waar je water terecht komt. Voor kruiden in kleine potten is een gieter van 1–2 liter handig. Kies voor een met een fijne broes om zaailingen niet om te spoelen.'),
            ('Kan ik een automatisch bewateringssysteem aansluiten op een buitenkraan?',
             'Ja, de meeste automatische systemen zijn ontworpen voor een standaard buitenkraan (3/4"). Je sluit een programmeerbare timer aan, koppelt de druppelslangen en stelt het schema in. Handig als je op vakantie gaat of een drukke agenda hebt.'),
        ],
    },
    'potgrond': {
        'title': 'Potgrond & tuinaarde kopen',
        'h1': 'Potgrond & substraat',
        'description': 'Vergelijk potgrond, moestuinaarde, kokosvezel en substraten voor balkontuin en kweek.',
        'filter': lambda p: p.get('category') == 'potgrond',
        'faq': [
            ('Welke potgrond gebruik ik voor groenten op het balkon?',
             'Gebruik moestuinaarde of universele potgrond verrijkt met compost. Voeg 10–20% perliet toe voor betere drainage in potten. Vermijd gewone tuinaarde: die is te zwaar en klontert samen in potten, waardoor wortels geen lucht krijgen.'),
            ('Hoe vaak moet ik de potgrond vervangen?',
             'Na één à twee groeiseizoenen is potgrond uitgeput. Ververs het elk voorjaar of vul bij met compost en meststof. Je kunt oude potgrond deels hergebruiken door het te mengen met verse grond en extra voeding.'),
            ('Wat is perliet en waarom voeg ik het toe?',
             'Perliet is een vulkanisch mineraal dat licht en poreus is. Het verbetert de drainage en luchtigheid van de grond, voorkomt verdichting en houdt tegelijk vocht vast. Ideaal voor groenten in potten die niet te nat mogen staan.'),
            ('Is kokosvezel een goed alternatief voor potgrond?',
             'Ja, kokosvezel (coir) is een duurzaam bijproduct van kokosnoten. Het houdt goed vocht vast, is licht en heeft een neutrale pH. Meng het met perliet en compost voor een complete kweekgrond. Populair voor kiemen en stekken.'),
        ],
    },
    'meststoffen': {
        'title': 'Meststoffen & plantvoeding kopen',
        'h1': 'Meststoffen & plantvoeding',
        'description': 'Vind organische en vloeibare meststoffen voor groenten, kruiden en bloemen in potten.',
        'filter': lambda p: p.get('category') == 'meststoffen',
        'faq': [
            ('Hoe vaak moet ik planten in potten bemesten?',
             'In het groeiseizoen (april–september) elke 1 à 2 weken met vloeibare mest bij het water. Granulaat of langzaamwerkende mest (slow release) geef je 1–2 keer per seizoen. In de winter rusten planten en hebben ze geen of zeer weinig voeding nodig.'),
            ('Wat betekenen de NPK-waarden op meststof?',
             'NPK staat voor Stikstof (N), Fosfor (P) en Kalium (K). N stimuleert bladgroei (goed voor kruiden), P bevordert wortels en bloei, K versterkt de plant en verbetert de smaak van groenten. Voor tomaten gebruik je een meststof met hogere K-waarde.'),
            ('Is organische mest beter dan kunstmest?',
             'Organische mest (wormmest, compost, guano) verbetert de bodemstructuur en voert langzamer maar stabieler voeding af. Kunstmest geeft een snelle boost maar verbetert de grond niet. Voor balkontuin is organische mest duurzamer en veiliger voor eetbare gewassen.'),
            ('Kan ik dezelfde meststof gebruiken voor alle groenten?',
             'Een universele meststof werkt voor de meeste groenten, maar specifieke mesten — zoals tomatenmest of kruidenmest — zijn beter afgestemd op de behoeften. Tomaten hebben meer kalium nodig, terwijl bladgroenten (sla, spinazie) meer stikstof nodig hebben.'),
        ],
    },
    'gereedschap': {
        'title': 'Tuingereedschap voor balkontuin kopen',
        'h1': 'Tuingereedschap',
        'description': 'Vergelijk handgereedschap, trofels, scharen en sets voor balkon- en containertuinieren.',
        'filter': lambda p: p.get('category') == 'gereedschap',
        'faq': [
            ('Welk gereedschap heb ik minimaal nodig voor een balkontuin?',
             'Een troffel (kleine schop), een handschoffel of wiedhak, een gieter en een snoeischaar zijn de basis. Met deze vier tools kom je een heel eind voor zaaien, planten, wieden en oogsten op een balkon.'),
            ('Wat is het verschil tussen een troffel en een handschoffel?',
             'Een troffel is een kleine schopvorm om gaten te graven en te planten. Een handschoffel heeft een platte of gebogen kling om onkruid te verwijderen en grond los te maken. Voor een balkontuin zijn beide nuttig.'),
            ('Welk materiaal is het best voor tuingereedschap?',
             'Roestvrij staal of gecoat staal gaat het langst mee. Houten handvatten zijn comfortabel maar kunnen splitsen als ze nat worden. Ergonomische handvatten in rubber of kunststof zijn aangenamer bij langer gebruik.'),
        ],
    },
    'kweeklampen': {
        'title': 'Kweeklampen & groeiverlichting kopen',
        'h1': 'Kweeklampen & groeiverlichting',
        'description': 'Vind LED kweeklampen en groeilichten voor zaailingen, kruiden en groenten binnenshuis.',
        'filter': lambda p: p.get('category') == 'kweeklampen',
        'faq': [
            ('Hoeveel uur licht hebben kweekplanten nodig?',
             'Zaailingen en jonge planten hebben 14–18 uur licht nodig per dag. Volwassen groenten doen het goed met 12–16 uur. Zorg altijd voor een donkerperiode: planten hebben nacht nodig voor hun rustfase. Gebruik een timer om het schema automatisch te houden.'),
            ('LED of HPS kweeklamp: wat is beter?',
             'LED kweeklampen zijn efficiënter, produceren minder warmte en hebben een langere levensduur. Ze zijn ideaal voor binnentuin en kleine ruimtes. HPS lampen geven meer licht per watt maar worden warm en verbruiken meer stroom. Voor balkontuin is LED bijna altijd de beste keuze.'),
            ('Welk lichtspectrum heb ik nodig voor groenten?',
             'Voor zaailingen en bladgroenten (sla, kruiden) gebruik je een lamp met veel blauw licht (400–500 nm). Voor bloemende en vruchtzettende planten (tomaten, paprika) is meer rood licht (600–700 nm) nodig. Full-spectrum LED-lampen dekken beide fasen.'),
            ('Op welke hoogte hang ik een kweeklamp?',
             'LED kweeklampen hangen op 15–60 cm boven de planten, afhankelijk van het vermogen. Te dicht geeft verbrandingsplekken, te ver weg geeft strekte (lange dunne stengels). Begin op 30 cm en pas aan op basis van hoe de plant reageert.'),
        ],
    },
    'zaden': {
        'title': 'Groentezaden & kruidenzaden kopen',
        'h1': 'Zaden voor balkontuin',
        'description': 'Vind zaadpakketten, groentezaden en kruidenzaden speciaal voor balkons en kleine tuinen.',
        'filter': lambda p: p.get('category') == 'zaden',
        'faq': [
            ('Wanneer kan ik beginnen met zaaien voor het balkon?',
             'Binnen voorkultivar kun je al in februari–maart beginnen met tomaten, paprika en aubergine. Kruiden als basilicum, peterselie en koriander zaai je binnen vanaf maart. Directe buiten-zaai (sla, radijs, veldsla) kan vanaf april–mei als de nachtvorst voorbij is.'),
            ('Moet ik zaden voorkweken of direct buiten zaaien?',
             'Voorkweken binnen geeft een voorsprong van 4–8 weken en beschermt kiemen voor nachtvorst. Tomaten, paprika en courgette moeten altijd worden voorgekweekt. Radijs, sla en boontjes kun je direct buiten zaaien zodra het warm genoeg is.'),
            ('Welke groenten zijn het makkelijkst te kweken op een balkon?',
             'Radijs (klaar in 3–4 weken), kruiden (basilicum, munt, peterselie), snijsla, kiemgroenten en cherrytomaten zijn ideaal voor beginners op het balkon. Ze hebben weinig ruimte nodig, groeien snel en zijn weinig gevoelig voor ziektes.'),
            ('Wat is het verschil tussen F1-hybride en open bestuifde zaden?',
             'F1-hybride zaden geven uniforme, productieve planten maar het zaad van de oogst kun je niet bewaren. Open bestuifde of erfgoedrassen kun je elk jaar opnieuw van eigen zaad kweken, wat goedkoper en duurzamer is. Voor de balkontuin zijn beide geschikt.'),
        ],
    },
}

NAV = '''<nav class="navbar">
<div class="container"><div class="nav-container">
<a class="nav-brand" href="/">Balkon-Moestuin.nl</a>
<button class="mobile-menu-toggle" id="menuToggle" aria-label="Menu"><span></span><span></span><span></span></button>
<ul class="nav-menu" id="navMenu">
<li><a class="nav-link" href="/">Home</a></li>
<li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="/gidsen/">Gidsen</a>
<ul class="dropdown-menu">
<li><a class="dropdown-link" href="/start-hier/">Start hier</a></li>
<li><a class="dropdown-link" href="/gidsen/">Alle gidsen</a></li>
<li><a class="dropdown-link" href="/gidsen/zaai-oogstkalender/">Seizoenskalender</a></li>
<li><a class="dropdown-link" href="/problemen/">Problemen</a></li>
</ul>
</li>
<li><a class="nav-link" href="/planten/">Planten</a></li>
<li class="nav-item dropdown"><a class="nav-link dropdown-toggle active" href="/shop/">Shop</a>
<ul class="dropdown-menu">
<li><a class="dropdown-link" href="/shop/">Alle producten</a></li>
<li><a class="dropdown-link" href="/shop/categories/balkonbakken.html">Balkonbakken</a></li>
<li><a class="dropdown-link" href="/shop/categories/bewatering.html">Bewatering</a></li>
<li><a class="dropdown-link" href="/shop/categories/potgrond.html">Potgrond</a></li>
<li><a class="dropdown-link" href="/shop/categories/meststoffen.html">Meststoffen</a></li>
<li><a class="dropdown-link" href="/shop/categories/gereedschap.html">Gereedschap</a></li>
<li><a class="dropdown-link" href="/shop/categories/kweeklampen.html">Kweeklampen</a></li>
<li><a class="dropdown-link" href="/shop/categories/zaden.html">Zaden</a></li>
</ul>
</li>
</ul>
</div></div>
</nav>
<div class="mobile-menu-overlay" id="menuOverlay"></div>
<script>(function(){{var t=document.getElementById('menuToggle'),m=document.getElementById('navMenu'),o=document.getElementById('menuOverlay');function c(){{m.classList.remove('active');t.classList.remove('active');o.classList.remove('active');}}t.addEventListener('click',function(){{m.classList.toggle('active');t.classList.toggle('active');o.classList.toggle('active');}});o.addEventListener('click',c);}})();</script>'''

FOOTER = '''    <footer class="footer"><div class="container">
        <div class="footer-content">
            <div><p style="font-family:var(--font-serif);font-size:1.2rem;color:white;margin-bottom:1rem;">Balkon-Moestuin.nl</p><p style="color:#999;font-size:0.85rem;line-height:1.7;margin-bottom:0;">Onafhankelijke gids voor balkontuin en moestuin op kleine ruimtes.</p></div>
            <div><h4>Gidsen</h4><a href="{prefix}gidsen/index.html">Alle gidsen</a><a href="{prefix}planten/index.html">Planten kiezen</a><a href="{prefix}problemen/index.html">Problemen oplossen</a></div>
            <div><h4>Shop</h4><a href="{prefix}shop/categories/balkonbakken.html">Balkonbakken</a><a href="{prefix}shop/categories/bewatering.html">Bewatering</a><a href="{prefix}shop/categories/meststoffen.html">Meststoffen</a><a href="{prefix}shop/categories/zaden.html">Zaden</a></div>
            <div><h4>Info</h4><a href="{prefix}over-ons/index.html">Over ons</a><a href="{prefix}contact/index.html">Contact</a><a href="{prefix}disclaimer-affiliatie/index.html">Affiliate</a><a href="{prefix}privacybeleid/index.html">Privacy</a></div>
        </div>
        <div class="footer-bottom">© 2025 Balkon-Moestuin.nl · Alle rechten voorbehouden · <a href="{prefix}disclaimer-affiliatie/index.html" style="color:#9CA3AF;">Affiliate disclaimer</a></div>
    </div></footer>'''


def fmt_price(p):
    price = p.get('price')
    return f"€{price:.2f}".replace('.', ',') if isinstance(price, (int, float)) and price > 0 else ''


def card(p, prefix):
    badges = []
    if p.get('brand') and p['brand'] != 'Merkloos':
        badges.append(p['brand'])
    subgroup = p.get('subgroup') or p.get('productgroup') or ''
    if subgroup and len(subgroup) < 30:
        badges.append(subgroup)
    badge_html = ''.join(
        f'<span style="font-size:0.72rem;color:var(--text-light);border:1px solid var(--border);padding:0.2rem 0.5rem;border-radius:0.5rem;">{html.escape(str(b))}</span>'
        for b in badges[:2]
    )
    name = html.escape(p.get('name') or '')
    img = html.escape(p.get('image') or f'{prefix}assets/img/placeholder-product.jpg')
    aff = html.escape(p.get('affiliate_url') or '#')
    price_str = fmt_price(p)
    slug = p.get('slug') or ''
    has_page = slug in PRODUCT_SLUGS
    if has_page:
        cta_row = (f'<a href="{prefix}producten/{slug}.html" style="flex:1;display:block;text-align:center;padding:0.5rem;border:1px solid var(--leaf);color:var(--leaf);text-decoration:none;border-radius:0.3rem;font-size:0.8rem;font-weight:600;">Details</a>'
                   f'<a href="{aff}" target="_blank" rel="sponsored noopener" style="flex:2;display:block;text-align:center;padding:0.5rem;background:var(--leaf);color:white;text-decoration:none;border-radius:0.3rem;font-size:0.8rem;font-weight:600;">Bol.com \u2192</a>')
    else:
        cta_row = f'<a href="{aff}" target="_blank" rel="sponsored noopener" style="display:block;text-align:center;padding:0.5rem;background:var(--leaf);color:white;text-decoration:none;border-radius:0.3rem;font-size:0.8rem;font-weight:600;">Bol.com \u2192</a>'
    return f'''            <div style="border:1px solid var(--border);overflow:hidden;background:white;transition:border-color 0.2s;border-radius:0.5rem;display:flex;flex-direction:column;height:100%;" onmouseover="this.style.borderColor='var(--leaf)'" onmouseout="this.style.borderColor='var(--border)'">
                <div style="background:#f5faf0;padding:1rem;text-align:center;"><img src="{img}" alt="{name}" loading="lazy" style="height:160px;width:100%;object-fit:contain;" onerror="this.src='{prefix}assets/img/pixel-plant.svg'"></div>
                <div style="padding:1rem;flex:1;display:flex;flex-direction:column;">
                    <div style="display:flex;gap:0.35rem;flex-wrap:wrap;margin-bottom:0.5rem;">{badge_html}</div>
                    <h3 style="font-size:0.88rem;font-weight:600;line-height:1.35;margin-bottom:0.5rem;flex:1;overflow:hidden;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;">{name}</h3>
                    <div style="margin-bottom:0.75rem;">
                        <span style="font-size:1.1rem;font-weight:700;color:var(--leaf);">{price_str}</span>
                    </div>
                    <div style="display:flex;gap:0.5rem;margin-top:auto;">{cta_row}</div>
                </div>
            </div>'''


def category_links(prefix):
    cats = [
        ('balkonbakken', 'Balkonbakken'),
        ('bewatering', 'Bewatering'),
        ('potgrond', 'Potgrond'),
        ('meststoffen', 'Meststoffen'),
        ('gereedschap', 'Gereedschap'),
        ('kweeklampen', 'Kweeklampen'),
        ('zaden', 'Zaden'),
    ]
    return ''.join(
        f'<a href="{prefix}shop/categories/{slug}.html" class="category-chip">{label}</a>'
        for slug, label in cats
    )


def faq_html(items):
    if not items:
        return ''
    blocks = ''.join(f'''
                <div>
                    <button onclick="toggleFaq('{i}',this)" style="width:100%;text-align:left;padding:1rem;background:white;border:1px solid var(--border);border-radius:0.5rem;font-size:1rem;font-weight:600;cursor:pointer;display:flex;justify-content:space-between;align-items:center;">{html.escape(q)} <span>+</span></button>
                    <div id="faq-{i}" style="display:none;padding:1rem;color:var(--text-dim);line-height:1.7;">{html.escape(a)}</div>
                </div>''' for i, (q, a) in enumerate(items))
    return f'''    <section style="padding:3rem 0;border-top:1px solid var(--border);">
        <div class="container" style="max-width:800px;">
            <h2 style="font-family:var(--font-serif);font-size:1.8rem;font-weight:400;margin-bottom:2rem;">Veelgestelde vragen</h2>
            <div style="display:flex;flex-direction:column;gap:1rem;">{blocks}
            </div>
        </div>
    </section>'''


def pagefile(kind, slug, page):
    """Return relative file path for a given page."""
    if kind == 'shop':
        return 'shop/index.html' if page == 1 else f'shop/index-page-{page}.html'
    return f'shop/categories/{slug}.html' if page == 1 else f'shop/categories/{slug}-page-{page}.html'


def page_url(kind, slug, page):
    """Return absolute URL for a given page."""
    if kind == 'shop':
        return '/shop/' if page == 1 else f'/shop/index-page-{page}.html'
    return f'/shop/categories/{slug}.html' if page == 1 else f'/shop/categories/{slug}-page-{page}.html'


def generate_pagination(kind, slug, page, total_pages):
    """Generate static pagination HTML with links to real files."""
    parts = ['<div id="pagination">']
    if page > 1:
        parts.append(f'<a href="{page_url(kind, slug, page-1)}" class="pagination-link">&#8592; Vorige</a>')
    s = max(1, page - 2)
    e = min(total_pages, page + 2)
    if s > 1:
        parts.append(f'<a href="{page_url(kind, slug, 1)}" class="pagination-link">1</a>')
        if s > 2:
            parts.append('<span class="pagination-gap">&#8230;</span>')
    for i in range(s, e + 1):
        active = ' active' if i == page else ''
        parts.append(f'<a href="{page_url(kind, slug, i)}" class="pagination-link{active}">{i}</a>')
    if e < total_pages:
        if e < total_pages - 1:
            parts.append('<span class="pagination-gap">&#8230;</span>')
        parts.append(f'<a href="{page_url(kind, slug, total_pages)}" class="pagination-link">{total_pages}</a>')
    if page < total_pages:
        parts.append(f'<a href="{page_url(kind, slug, page+1)}" class="pagination-link">Volgende &#8594;</a>')
    parts.append('</div>')
    return ''.join(parts)


def render(kind, slug, page, total_pages, items, all_count, title, h1, description, faq_items, css_prefix):
    """Render a single static page with products pre-rendered as HTML."""
    canonical = f'{SITE}/{pagefile(kind, slug, page)}'
    if kind == 'shop' and page == 1:
        canonical = f'{SITE}/shop/'
    page_title = title if page == 1 else f'{title} \u2014 pagina {page} van {total_pages}'
    start = (page - 1) * PER_PAGE
    end = min(start + PER_PAGE, all_count)
    page_info = f'Pagina {page} van {total_pages} \u00b7 {start + 1}\u2013{end} van {all_count} producten'
    products_html = '\n'.join(card(p, css_prefix) for p in items)
    pagination_html = generate_pagination(kind, slug, page, total_pages)
    faq_section = faq_html(faq_items) if page == 1 else ''
    cat_links = category_links(css_prefix)
    breadcrumb_page = f' <span style="margin:0 0.3rem;">&#8250;</span> Pagina {page}' if page > 1 else ''

    return f'''<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{html.escape(page_title)} | Balkon-Moestuin.nl</title>
    <meta name="description" content="{html.escape(description)}">
    <link rel="canonical" href="{canonical}">
    <link rel="stylesheet" href="{css_prefix}assets/css/main.css">
    <link rel="icon" type="image/svg+xml" href="{css_prefix}assets/img/pixel-plant.svg">
</head>
<body>
{NAV.format(prefix=css_prefix)}
    <section style="background:#f5faf0;padding:3rem 0 2.5rem;">
        <div class="container" style="max-width:780px;">
            <p style="font-size:0.78rem;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:0.75rem;"><a href="{css_prefix}index.html" style="color:var(--text-light);text-decoration:none;">Home</a> <span style="margin:0 0.4rem;">&#8250;</span> Shop{breadcrumb_page}</p>
            <h1 style="font-family:var(--font-serif);font-size:clamp(1.8rem,3vw,2.4rem);font-weight:400;margin-bottom:0.75rem;">{html.escape(h1)}</h1>
            <p style="color:var(--text-dim);font-size:1rem;max-width:540px;">{html.escape(description)}</p>
        </div>
    </section>
    <div style="border-bottom:1px solid var(--border);padding:1rem 0;overflow-x:auto;">
        <div class="container" style="display:flex;gap:0.75rem;flex-wrap:wrap;font-size:0.85rem;">
            {cat_links}
        </div>
    </div>
    <main class="container" style="padding:2.5rem 0;">
        <p style="color:var(--text-dim);margin-bottom:1.5rem;font-size:0.9rem;">{page_info}</p>
        <div class="shop-product-grid">
{products_html}
        </div>
{pagination_html}
    </main>
{faq_section}
{FOOTER.format(prefix=css_prefix)}
    <script>
    function toggleFaq(id, btn) {{
        var el = document.getElementById('faq-' + id);
        var sp = btn.querySelector('span');
        if (!el) return;
        if (el.style.display === 'none') {{ el.style.display = 'block'; sp.textContent = '-'; }}
        else {{ el.style.display = 'none'; sp.textContent = '+'; }}
    }}
    </script>
</body>
</html>'''


def main():
    global PRODUCT_SLUGS
    PRODUCT_SLUGS = {f.stem for f in (ROOT / 'producten').glob('*.html')}
    print(f'Loaded {len(PRODUCT_SLUGS)} existing product pages')

    data = json.loads((ROOT / 'all_products.json').read_text(encoding='utf-8'))
    data = sorted(data, key=lambda p: (p.get('price') or 9999))

    today = date.today().isoformat()
    sitemap_entries = []
    total_files = 0

    def generate_pages(kind, slug, all_products, title, h1, description, faq_items, prefix, css_prefix):
        nonlocal total_files
        n = len(all_products)
        total_pages = math.ceil(n / PER_PAGE) if n else 1
        for page in range(1, total_pages + 1):
            start = (page - 1) * PER_PAGE
            items = all_products[start:start + PER_PAGE]
            content = render(kind, slug, page, total_pages, items, n, title, h1, description, faq_items, css_prefix)
            filepath = ROOT / pagefile(kind, slug, page)
            filepath.parent.mkdir(parents=True, exist_ok=True)
            filepath.write_text(content, encoding='utf-8')
            total_files += 1
            prio = '0.9' if (page == 1 and kind == 'shop') else '0.8' if page == 1 else '0.5'
            sitemap_entries.append((pagefile(kind, slug, page), prio))
        print(f"{pagefile(kind, slug, 1)} \u2192 {n} producten, {total_pages} pagina's")

    # Main shop
    generate_pages('shop', '', data[:CAP_PER_CAT],
                   'Balkontuin producten kopen',
                   'Alle producten voor je balkontuin',
                   f'Vergelijk {len(data):,} producten voor balkontuin: bakken, bewatering, potgrond, meststoffen en meer.',
                   [], '../', '../')

    # Categories
    for slug, cfg in CATEGORY_CONFIG.items():
        items = [p for p in data if cfg['filter'](p)][:CAP_PER_CAT]
        generate_pages('category', slug, items,
                       cfg['title'], cfg['h1'], cfg['description'],
                       cfg.get('faq', []), '../../', '../../')

    # Sitemap
    sm = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    for url, prio in sitemap_entries:
        sm.append(f'  <url><loc>{SITE}/{url}</loc><lastmod>{today}</lastmod><changefreq>weekly</changefreq><priority>{prio}</priority></url>')
    sm.append('</urlset>')
    (ROOT / 'sitemap-shop.xml').write_text('\n'.join(sm) + '\n', encoding='utf-8')

    print(f"\n\u2713 {total_files} fichiers g\u00e9n\u00e9r\u00e9s")
    print(f"\u2713 sitemap-shop.xml sauvegard\u00e9")


if __name__ == '__main__':
    main()
