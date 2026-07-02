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

NAV = '''    <nav class="navbar">
        <div class="container"><div class="nav-container">
            <a href="{prefix}index.html" class="nav-brand">Balkon-Moestuin.nl</a>
            <button class="mobile-menu-toggle" id="menuToggle" aria-label="Menu">
                <span></span><span></span><span></span>
            </button>
            <ul class="nav-menu" id="navMenu">
                <li><a href="{prefix}index.html" class="nav-link">Home</a></li>
                <li class="nav-item dropdown"><a href="{prefix}gidsen/index.html" class="nav-link dropdown-toggle">Gidsen</a>
                    <ul class="dropdown-menu">
                        <li><a href="{prefix}gidsen/index.html" class="dropdown-link">Alle gidsen</a></li>
                        <li><a href="{prefix}planten/index.html" class="dropdown-link">Planten</a></li>
                        <li><a href="{prefix}problemen/index.html" class="dropdown-link">Problemen</a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown"><a href="{prefix}shop/index.html" class="nav-link dropdown-toggle active">Shop</a>
                    <ul class="dropdown-menu">
                        <li><a href="{prefix}shop/index.html" class="dropdown-link">Alle producten</a></li>
                        <li><a href="{prefix}shop/categories/balkonbakken.html" class="dropdown-link">Balkonbakken</a></li>
                        <li><a href="{prefix}shop/categories/bewatering.html" class="dropdown-link">Bewatering</a></li>
                        <li><a href="{prefix}shop/categories/potgrond.html" class="dropdown-link">Potgrond</a></li>
                        <li><a href="{prefix}shop/categories/meststoffen.html" class="dropdown-link">Meststoffen</a></li>
                        <li><a href="{prefix}shop/categories/gereedschap.html" class="dropdown-link">Gereedschap</a></li>
                        <li><a href="{prefix}shop/categories/kweeklampen.html" class="dropdown-link">Kweeklampen</a></li>
                        <li><a href="{prefix}shop/categories/zaden.html" class="dropdown-link">Zaden</a></li>
                    </ul>
                </li>
            </ul>
        </div></div>
    </nav>
    <div class="mobile-menu-overlay" id="menuOverlay"></div>
    <script>
    (function(){{
        var toggle=document.getElementById('menuToggle'),menu=document.getElementById('navMenu'),overlay=document.getElementById('menuOverlay');
        function close(){{menu.classList.remove('active');toggle.classList.remove('active');overlay.classList.remove('active');}}
        toggle.addEventListener('click',function(){{menu.classList.toggle('active');toggle.classList.toggle('active');overlay.classList.toggle('active');}});
        overlay.addEventListener('click',close);
    }})();
    </script>'''

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
    return f'''            <div style="border:1px solid var(--border);overflow:hidden;background:white;transition:border-color 0.2s;border-radius:0.5rem;display:flex;flex-direction:column;height:100%;" onmouseover="this.style.borderColor='var(--leaf)'" onmouseout="this.style.borderColor='var(--border)'">
                <div style="background:#f5faf0;padding:1rem;text-align:center;"><img src="{img}" alt="{name}" loading="lazy" style="height:160px;width:100%;object-fit:contain;" onerror="this.src='{prefix}assets/img/pixel-plant.svg'"></div>
                <div style="padding:1rem;flex:1;display:flex;flex-direction:column;">
                    <div style="display:flex;gap:0.35rem;flex-wrap:wrap;margin-bottom:0.5rem;">{badge_html}</div>
                    <h3 style="font-size:0.88rem;font-weight:600;line-height:1.35;margin-bottom:0.5rem;flex:1;overflow:hidden;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;">{name}</h3>
                    <div style="margin-bottom:0.75rem;">
                        <span style="font-size:1.1rem;font-weight:700;color:var(--leaf);">{price_str}</span>
                    </div>
                    <a href="{aff}" target="_blank" rel="sponsored noopener" style="display:block;text-align:center;padding:0.55rem;background:var(--leaf);color:white;text-decoration:none;border-radius:0.3rem;font-size:0.82rem;font-weight:600;">Bekijk op Bol.com</a>
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


def render(kind, slug, products, title, h1, description, faq_items, prefix, css_prefix):
    url_path = 'shop/index.html' if kind == 'shop' else f'shop/categories/{slug}.html'
    canonical = f'{SITE}/{url_path}'
    products_json = json.dumps(products, ensure_ascii=False)
    base_url = url_path
    cat_links = category_links(css_prefix)
    faq_section = faq_html(faq_items)

    return f'''<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{html.escape(title)} | Balkon-Moestuin.nl</title>
    <meta name="description" content="{html.escape(description)}">
    <link rel="canonical" href="{canonical}">
    <link rel="stylesheet" href="{css_prefix}assets/css/main.css">
    <link rel="icon" type="image/svg+xml" href="{css_prefix}assets/img/pixel-plant.svg">
</head>
<body>
{NAV.format(prefix=css_prefix)}
    <section style="background:#f5faf0;padding:3rem 0 2.5rem;">
        <div class="container" style="max-width:780px;">
            <p style="font-size:0.78rem;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:0.75rem;"><a href="{css_prefix}index.html" style="color:var(--text-light);text-decoration:none;">Home</a> <span style="margin:0 0.4rem;">›</span> Shop</p>
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
        <p id="page-info" style="color:var(--text-dim);margin-bottom:1.5rem;font-size:0.9rem;">Laden…</p>
        <div id="products-grid" class="shop-product-grid"></div>
        <div id="pagination"></div>
    </main>
{faq_section}
{FOOTER.format(prefix=css_prefix)}
    <script>
    const allProducts = {products_json};
    const perPage = {PER_PAGE};
    const baseUrl = '{base_url}';

    function toggleFaq(id, btn) {{
        const el = document.getElementById('faq-' + id);
        const sp = btn.querySelector('span');
        if (!el) return;
        if (el.style.display === 'none') {{ el.style.display = 'block'; sp.textContent = '-'; }}
        else {{ el.style.display = 'none'; sp.textContent = '+'; }}
    }}

    function getPageUrl(page) {{ return page === 1 ? baseUrl : baseUrl + '?page=' + page; }}
    function getPageFromUrl() {{ const p = parseInt(new URLSearchParams(window.location.search).get('page')); return isNaN(p) ? 1 : p; }}

    function renderPage(page) {{
        const start = (page - 1) * perPage;
        const items = allProducts.slice(start, start + perPage);
        const totalPages = Math.ceil(allProducts.length / perPage);

        document.getElementById('products-grid').innerHTML = items.map(p => {{
            const badges = [];
            if (p.brand && p.brand !== 'Merkloos') badges.push(p.brand);
            if (p.subgroup && p.subgroup.length < 30) badges.push(p.subgroup);
            const badgeHTML = badges.slice(0,2).map(b => `<span style="font-size:0.72rem;color:var(--text-light);border:1px solid var(--border);padding:0.2rem 0.5rem;border-radius:0.5rem;">${{b}}</span>`).join('');
            const price = p.price ? '€' + p.price.toFixed(2).replace('.', ',') : '';
            const img = p.image || '{css_prefix}assets/img/pixel-plant.svg';
            return `<div style="border:1px solid var(--border);overflow:hidden;background:white;transition:border-color 0.2s;border-radius:0.5rem;display:flex;flex-direction:column;height:100%;" onmouseover="this.style.borderColor='var(--leaf)'" onmouseout="this.style.borderColor='var(--border)'">
                <div style="background:#f5faf0;padding:1rem;text-align:center;"><img src="${{img}}" alt="${{p.name}}" loading="lazy" style="height:160px;width:100%;object-fit:contain;" onerror="this.src='{css_prefix}assets/img/pixel-plant.svg'"></div>
                <div style="padding:1rem;flex:1;display:flex;flex-direction:column;">
                    <div style="display:flex;gap:0.35rem;flex-wrap:wrap;margin-bottom:0.5rem;">${{badgeHTML}}</div>
                    <h3 style="font-size:0.88rem;font-weight:600;line-height:1.35;margin-bottom:0.5rem;flex:1;overflow:hidden;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;">${{p.name}}</h3>
                    <div style="margin-bottom:0.75rem;"><span style="font-size:1.1rem;font-weight:700;color:var(--leaf);">${{price}}</span></div>
                    <a href="${{p.affiliate_url || '#'}}" target="_blank" rel="sponsored noopener" style="display:block;text-align:center;padding:0.55rem;background:var(--leaf);color:white;text-decoration:none;border-radius:0.3rem;font-size:0.82rem;font-weight:600;">Bekijk op Bol.com</a>
                </div>
            </div>`;
        }}).join('');

        document.getElementById('page-info').textContent = `Pagina ${{page}} van ${{totalPages}} · ${{start + 1}}–${{Math.min(start + perPage, allProducts.length)}} van ${{allProducts.length}} producten`;

        let pag = '';
        if (page > 1) pag += `<a href="${{getPageUrl(page-1)}}" class="pagination-link">&#8592; Vorige</a>`;
        const s = Math.max(1, page-2), e = Math.min(totalPages, page+2);
        if (s > 1) {{ pag += `<a href="${{getPageUrl(1)}}" class="pagination-link">1</a>`; if (s > 2) pag += '<span class="pagination-gap">…</span>'; }}
        for (let i = s; i <= e; i++) pag += `<a href="${{getPageUrl(i)}}" class="pagination-link${{i===page?' active':''}}">${{i}}</a>`;
        if (e < totalPages) {{ if (e < totalPages-1) pag += '<span class="pagination-gap">…</span>'; pag += `<a href="${{getPageUrl(totalPages)}}" class="pagination-link">${{totalPages}}</a>`; }}
        if (page < totalPages) pag += `<a href="${{getPageUrl(page+1)}}" class="pagination-link">Volgende &#8594;</a>`;
        document.getElementById('pagination').innerHTML = pag;

        window.scrollTo({{top: 0, behavior: 'smooth'}});
        history.replaceState(null, '', page === 1 ? window.location.pathname : '?page=' + page);
    }}

    window.addEventListener('popstate', () => renderPage(getPageFromUrl()));
    document.addEventListener('DOMContentLoaded', () => renderPage(getPageFromUrl()));
    </script>
</body>
</html>'''


def main():
    data = json.loads((ROOT / 'all_products.json').read_text(encoding='utf-8'))
    # Sort by price ascending (budget-first)
    data = sorted(data, key=lambda p: (p.get('price') or 9999))

    urls = []
    sitemap_entries = []
    today = date.today().isoformat()

    # --- Main shop page (all products, capped) ---
    all_capped = data[:CAP_PER_CAT]
    shop_path = ROOT / 'shop' / 'index.html'
    shop_path.parent.mkdir(parents=True, exist_ok=True)
    shop_path.write_text(render(
        'shop', '', all_capped,
        'Balkontuin producten kopen',
        'Alle producten voor je balkontuin',
        f'Vergelijk {len(data):,} producten voor balkontuin: bakken, bewatering, potgrond, meststoffen en meer.',
        [],
        '../', '../'
    ), encoding='utf-8')
    print(f"shop/index.html → {len(all_capped)} producten")
    sitemap_entries.append(('shop/index.html', '0.9'))

    # --- Category pages ---
    (ROOT / 'shop' / 'categories').mkdir(parents=True, exist_ok=True)
    for slug, cfg in CATEGORY_CONFIG.items():
        items = [p for p in data if cfg['filter'](p)][:CAP_PER_CAT]
        path = ROOT / 'shop' / 'categories' / f'{slug}.html'
        path.write_text(render(
            'category', slug, items,
            cfg['title'], cfg['h1'], cfg['description'],
            cfg.get('faq', []),
            '../../', '../../'
        ), encoding='utf-8')
        print(f"shop/categories/{slug}.html → {len(items)} producten")
        sitemap_entries.append((f'shop/categories/{slug}.html', '0.8'))

    # --- Sitemap ---
    sm = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    for url, prio in sitemap_entries:
        sm.append(f'  <url><loc>{SITE}/{url}</loc><lastmod>{today}</lastmod><changefreq>weekly</changefreq><priority>{prio}</priority></url>')
    sm.append('</urlset>')
    (ROOT / 'sitemap-shop.xml').write_text('\n'.join(sm) + '\n', encoding='utf-8')

    print(f"\n✓ {len(sitemap_entries)} pages générées")
    print(f"✓ sitemap-shop.xml sauvegardé")


if __name__ == '__main__':
    main()
