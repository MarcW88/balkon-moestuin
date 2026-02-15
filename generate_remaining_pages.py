#!/usr/bin/env python3
"""
Générateur automatique pour les pages manquantes du MVP balkon-moestuin.nl
Crée les hubs, pages légales, guides et best-of rapidement
"""

import os
from pathlib import Path

BASE_DIR = Path("/Users/marc/Desktop/balkon-moestuin")

# Template HTML de base réutilisable
def get_page_template(title, description, canonical, h1, breadcrumb_text, content_html, nav_active=""):
    return f'''<!doctype html>
<html lang="nl">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>{title}</title>
  <meta name="description" content="{description}" />
  <link rel="canonical" href="{canonical}" />
  <link rel="stylesheet" href="/assets/css/main.css" />
</head>

<body>
  <a class="skip-link" href="#content">Ga naar inhoud</a>

  <header class="site-header">
    <div class="container header-inner">
      <a class="brand" href="/">🌱 Balkon-Moestuin.nl</a>
      <nav class="nav">
        <a href="/start-hier/">Start hier</a>
        <a href="/gidsen/">Gidsen</a>
        <a href="/planten/">Planten</a>
        <a href="/problemen/">Problemen</a>
        <a href="/beste/">Beste</a>
      </nav>
    </div>
  </header>

  <main id="content" class="container">
    <nav class="breadcrumb">
      <a href="/">Home</a> <span>›</span> {breadcrumb_text}
    </nav>

    <section class="hero">
      <h1>{h1}</h1>
    </section>

    {content_html}

  </main>

  <footer class="site-footer">
    <div class="container">
      <div class="footer-inner">
        <div class="footer-section">
          <h4>🌱 Balkon-Moestuin.nl</h4>
          <p>De #1 gids voor balkonmoestuinen in Nederland & België.</p>
        </div>
        <div class="footer-section">
          <h4>Gidsen</h4>
          <nav class="footer-nav">
            <a href="/start-hier/">Start hier</a>
            <a href="/gidsen/">Alle gidsen</a>
            <a href="/planten/">Planten</a>
          </nav>
        </div>
        <div class="footer-section">
          <h4>Producten</h4>
          <nav class="footer-nav">
            <a href="/beste/">Beste producten</a>
            <a href="/beste/balkonbakken/">Balkonbakken</a>
            <a href="/beste/potgrond/">Potgrond</a>
          </nav>
        </div>
        <div class="footer-section">
          <h4>Over ons</h4>
          <nav class="footer-nav">
            <a href="/over-ons/">Over ons</a>
            <a href="/contact/">Contact</a>
            <a href="/disclaimer-affiliatie/">Disclaimer</a>
          </nav>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© <span id="year">2025</span> Balkon-Moestuin.nl • Alle rechten voorbehouden</p>
      </div>
    </div>
  </footer>

  <script src="/assets/js/main.js" defer></script>
</body>
</html>'''

# Définition des pages à créer
PAGES = {
    # HUBS
    "planten/index.html": {
        "title": "Planten voor Balkonmoestuin: Groenten, Kruiden & Fruit Kweken",
        "description": "Ontdek welke groenten, kruiden en fruit perfect groeien op je balkon. Inclusief zaaitijden, verzorging en tips.",
        "canonical": "https://balkon-moestuin.nl/planten/",
        "h1": "Welke Planten Kan Je Kweken op Je Balkon?",
        "breadcrumb": "<strong>Planten</strong>",
        "content": '''
    <p class="lead">Van tomaten tot aardbeien, van basilicum tot paprika — ontdek welke planten perfect passen bij jouw balkon.</p>

    <section class="content-section">
      <h2>🌿 Kruiden (Makkelijkst voor Beginners)</h2>
      <div class="grid">
        <article class="card">
          <h3><a href="/planten/kruiden-op-balkon/">Kruiden op Balkon Kweken</a></h3>
          <p>Basilicum, peterselie, munt, tijm — perfect voor beginners. Groeit snel, weinig ruimte nodig.</p>
        </article>
      </div>
    </section>

    <section class="content-section">
      <h2>🍅 Groenten</h2>
      <div class="grid grid-3">
        <article class="card">
          <h3><a href="/planten/tomaten-op-balkon/">Tomaten Kweken</a></h3>
          <p>Cherry tomaten en balkon-tomaten. 3-5kg opbrengst per plant!</p>
        </article>
        <article class="card">
          <h3><a href="/planten/sla-op-balkon/">Sla Kweken</a></h3>
          <p>Pluksla groeit snel (4-6 weken) en je kunt continu oogsten.</p>
        </article>
        <article class="card">
          <h3>Paprika & Pepers</h3>
          <p>Groeit prima in potten, veel zon nodig (6+ uur).</p>
        </article>
      </div>
    </section>

    <section class="content-section">
      <h2>🍓 Fruit</h2>
      <div class="grid">
        <article class="card">
          <h3><a href="/planten/aardbeien-op-balkon/">Aardbeien Kweken</a></h3>
          <p>Perfecte balkonplant: hangende bakken mogelijk, zoet fruit gedurende hele zomer.</p>
        </article>
      </div>
    </section>

    <div class="notice success">
      <strong>💡 Tip:</strong> Begin met kruiden en sla. Daarna tomaten. Deze 3 groeien bijna altijd goed.
    </div>

    <section style="text-align: center; margin-top: 3rem;">
      <a href="/start-hier/" class="btn primary">📖 Start met Stappenplan</a>
    </section>
'''
    },

    "problemen/index.html": {
        "title": "Balkonmoestuin Problemen Oplossen: Ziektes, Plagen & Fixes",
        "description": "Gele bladeren, bladluis, schimmel? Los alle problemen op met onze gidsen. Natuurlijke oplossingen zonder chemie.",
        "canonical": "https://balkon-moestuin.nl/problemen/",
        "h1": "Problemen met Je Balkonmoestuin? Oplossingen Hier",
        "breadcrumb": "<strong>Problemen</strong>",
        "content": '''
    <p class="lead">Gele bladeren, plagen, schimmel? Geen paniek. Alle problemen hebben een oplossing — vaak simpeler dan je denkt.</p>

    <section class="content-section">
      <h2>🐛 Meest Voorkomende Problemen</h2>
      <div class="grid">
        <article class="card">
          <h3><a href="/problemen/gele-bladeren/">Gele Bladeren</a></h3>
          <p>Te veel of te weinig water? Stikstoftekort? Diagnose + oplossing.</p>
        </article>
        <article class="card">
          <h3><a href="/problemen/bladluis-op-balkon/">Bladluis Bestrijden</a></h3>
          <p>Groene of zwarte bladluis? 5 natuurlijke trucjes zonder chemie.</p>
        </article>
        <article class="card">
          <h3><a href="/problemen/schimmel-potgrond/">Schimmel op Potgrond</a></h3>
          <p>Witte of groene schimmel? Is het gevaarlijk? Hoe voorkom je het?</p>
        </article>
        <article class="card">
          <h3><a href="/problemen/te-veel-of-te-weinig-water/">Te Veel/Weinig Water</a></h3>
          <p>Verschil herkennen + correctie. Slappe bladeren ≠ altijd droogte!</p>
        </article>
      </div>
    </section>

    <div class="notice info">
      <strong>🔍 Diagnose Tool:</strong> Gele bladeren? Check eerst: (1) Grond vochtigheid, (2) Drainage, (3) Voeding (bemesting).
    </div>
'''
    },

    "beste/index.html": {
        "title": "Beste Balkonmoestuin Producten 2025: Top 5 Reviews (bol.com)",
        "description": "Getest & vergeleken: beste balkonbakken, potgrond, meststoffen, gieters. Eerlijke reviews + prijzen via bol.com.",
        "canonical": "https://balkon-moestuin.nl/beste/",
        "h1": "Beste Balkonmoestuin Producten (2025)",
        "breadcrumb": "<strong>Beste Producten</strong>",
        "content": '''
    <p class="lead">Getest en aanbevolen: de beste producten voor je balkonmoestuin. Eerlijke vergelijkingen + prijzen via bol.com.</p>

    <section class="content-section">
      <h2>🏆 Top Categorieën</h2>
      <div class="grid">
        <article class="card">
          <h3><a href="/beste/balkonbakken/">Beste Balkonbakken 2025</a></h3>
          <p>Top 5 vergelijking: plastic, hout, terracotta. Van €12 tot €35.</p>
        </article>
        <article class="card">
          <h3><a href="/beste/potgrond/">Beste Potgrond 2025</a></h3>
          <p>Universeel, groente-mix, biologisch. Top 5 + prijzen vanaf €6.</p>
        </article>
        <article class="card">
          <h3><a href="/beste/meststoffen/">Beste Meststoffen 2025</a></h3>
          <p>Vloeibaar vs korrels. NPK-waarden vergeleken. Vanaf €6.</p>
        </article>
        <article class="card">
          <h3><a href="/beste/gieter/">Beste Gieters 2025</a></h3>
          <p>Handmatig, druppelsysteem, automatisch. Top 5 vanaf €8.</p>
        </article>
      </div>
    </section>

    <div class="notice">
      <strong>Transparantie:</strong> Sommige links zijn affiliate links naar bol.com. 
      Wij krijgen een kleine commissie, zonder extra kosten voor jou. 
      <a href="/disclaimer-affiliatie/">Lees meer</a>.
    </div>
'''
    },

    # PAGES LÉGALES
    "over-ons/index.html": {
        "title": "Over Balkon-Moestuin.nl: Wie Zijn Wij?",
        "description": "Leer meer over ons team, onze missie en hoe we onze gidsen testen en reviewen.",
        "canonical": "https://balkon-moestuin.nl/over-ons/",
        "h1": "Over Balkon-Moestuin.nl",
        "breadcrumb": "<strong>Over ons</strong>",
        "content": '''
    <section class="content-section">
      <h2>Wie Zijn Wij?</h2>
      <p>
        Balkon-Moestuin.nl is opgericht in 2024 door een team van balkon-tuiniers en content creators in Nederland. 
        Onze missie: <strong>iedereen helpen verse groenten en kruiden te kweken, ook zonder tuin</strong>.
      </p>

      <h2>Onze Werkwijze</h2>
      <ul>
        <li><strong>Praktische ervaring:</strong> We testen zelf alle tips en producten op onze eigen balkons</li>
        <li><strong>Eerlijke reviews:</strong> Geen sponsoring, we kopen producten zelf</li>
        <li><strong>Gratis content:</strong> Alle gidsen zijn 100% gratis toegankelijk</li>
        <li><strong>Transparant affiliate:</strong> We verdienen via bol.com links, maar dit beïnvloedt onze reviews niet</li>
      </ul>

      <h2>Contact</h2>
      <p>Vragen, suggesties of feedback? Mail ons: <a href="mailto:info@balkon-moestuin.nl">info@balkon-moestuin.nl</a></p>
    </section>
'''
    },

    "contact/index.html": {
        "title": "Contact Balkon-Moestuin.nl",
        "description": "Neem contact op met ons team. Vragen, suggesties of samenwerking.",
        "canonical": "https://balkon-moestuin.nl/contact/",
        "h1": "Contact",
        "breadcrumb": "<strong>Contact</strong>",
        "content": '''
    <section class="content-section">
      <h2>Neem Contact Op</h2>
      <p>Heb je een vraag, suggestie of wil je samenwerken? We horen graag van je!</p>

      <h3>📧 Email</h3>
      <p><a href="mailto:info@balkon-moestuin.nl">info@balkon-moestuin.nl</a></p>
      <p class="small">We streven ernaar om binnen 48 uur te antwoorden.</p>

      <h3>💬 Social Media</h3>
      <p>Volg ons op Instagram (@balkonmoestuin) voor dagelijkse tips en inspiratie.</p>

      <h3>🤝 Samenwerking</h3>
      <p>Voor zakelijke vragen of partnerships: <a href="mailto:partnerships@balkon-moestuin.nl">partnerships@balkon-moestuin.nl</a></p>
    </section>
'''
    },

    "disclaimer-affiliatie/index.html": {
        "title": "Disclaimer & Affiliate Kennisgeving | Balkon-Moestuin.nl",
        "description": "Transparantie over onze affiliate links, inkomsten en hoe we reviewen. Eerlijk en duidelijk.",
        "canonical": "https://balkon-moestuin.nl/disclaimer-affiliatie/",
        "h1": "Disclaimer & Affiliate Kennisgeving",
        "breadcrumb": "<strong>Disclaimer</strong>",
        "content": '''
    <section class="content-section">
      <h2>Affiliate Links</h2>
      <p>
        Balkon-Moestuin.nl bevat affiliate links naar bol.com en andere partners. 
        Dit betekent dat we een <strong>kleine commissie verdienen</strong> wanneer je via onze links een product koopt, 
        <strong>zonder extra kosten voor jou</strong>.
      </p>

      <h3>Onze Principes</h3>
      <ul>
        <li>✅ We reviewen alleen producten die we zelf hebben getest of grondig onderzocht</li>
        <li>✅ Affiliate commissies beïnvloeden NIET onze aanbevelingen</li>
        <li>✅ We zeggen altijd de waarheid, ook als een product tegenvalt</li>
        <li>✅ Alle links zijn gemarkeerd met rel="nofollow sponsored"</li>
      </ul>

      <h2>Disclaimer</h2>
      <p>
        De informatie op deze website is bedoeld als educatief hulpmiddel. 
        We doen ons best om accurate informatie te delen, maar kunnen geen garanties geven over resultaten. 
        Gebruik altijd je eigen oordeel en lees productinstructies.
      </p>

      <h2>Copyright</h2>
      <p>© 2025 Balkon-Moestuin.nl. Alle rechten voorbehouden. Content mag niet gekopieerd worden zonder toestemming.</p>
    </section>
'''
    },

    "privacybeleid/index.html": {
        "title": "Privacybeleid | Balkon-Moestuin.nl",
        "description": "Hoe we jouw gegevens beschermen. GDPR compliant.",
        "canonical": "https://balkon-moestuin.nl/privacybeleid/",
        "h1": "Privacybeleid",
        "breadcrumb": "<strong>Privacy</strong>",
        "content": '''
    <section class="content-section">
      <h2>Jouw Privacy is Belangrijk</h2>
      <p>Balkon-Moestuin.nl respecteert je privacy en voldoet aan de AVG (GDPR).</p>

      <h3>Gegevens Die We Verzamelen</h3>
      <ul>
        <li><strong>Analytics:</strong> We gebruiken Google Analytics (geanonimiseerd) om bezoekersstatistieken te bekijken</li>
        <li><strong>Cookies:</strong> Alleen functionele cookies (geen tracking zonder toestemming)</li>
        <li><strong>Email (optioneel):</strong> Als je onze newsletter ontvangt (vrijwillig)</li>
      </ul>

      <h3>Je Rechten</h3>
      <p>Je hebt recht op inzage, correctie en verwijdering van je gegevens. Mail ons: <a href="mailto:privacy@balkon-moestuin.nl">privacy@balkon-moestuin.nl</a></p>

      <h3>Cookies</h3>
      <p>Zie ons <a href="/cookiebeleid/">cookiebeleid</a> voor details.</p>

      <p class="small">Laatste update: December 2025</p>
    </section>
'''
    },

    "cookiebeleid/index.html": {
        "title": "Cookiebeleid | Balkon-Moestuin.nl",
        "description": "Welke cookies gebruiken we en waarom? Transparant overzicht.",
        "canonical": "https://balkon-moestuin.nl/cookiebeleid/",
        "h1": "Cookiebeleid",
        "breadcrumb": "<strong>Cookies</strong>",
        "content": '''
    <section class="content-section">
      <h2>Wat Zijn Cookies?</h2>
      <p>Cookies zijn kleine tekstbestanden die websites op je apparaat opslaan. We gebruiken alleen <strong>essentiële cookies</strong>.</p>

      <h3>Welke Cookies Gebruiken We?</h3>
      <ul>
        <li><strong>Functionele cookies:</strong> Om de website goed te laten werken (bijv. taal, voorkeuren)</li>
        <li><strong>Analytics (Google Analytics):</strong> Geanonimiseerd, om te zien welke content populair is</li>
        <li><strong>Affiliate cookies:</strong> Om bij te houden welke aankopen via onze links komen (bol.com)</li>
      </ul>

      <h3>Cookies Weigeren?</h3>
      <p>Je kunt cookies uitschakelen in je browser-instellingen. Let op: sommige functies werken dan minder goed.</p>

      <p class="small">Laatste update: December 2025</p>
    </section>
'''
    },
}

# Fonction pour créer les fichiers
def create_pages():
    for filepath, data in PAGES.items():
        full_path = BASE_DIR / filepath
        full_path.parent.mkdir(parents=True, exist_ok=True)
        
        html = get_page_template(
            title=data["title"],
            description=data["description"],
            canonical=data["canonical"],
            h1=data["h1"],
            breadcrumb_text=data["breadcrumb"],
            content_html=data["content"]
        )
        
        with open(full_path, 'w', encoding='utf-8') as f:
            f.write(html)
        
        print(f"✅ Created: {filepath}")

if __name__ == "__main__":
    print("🚀 Generating remaining pages for balkon-moestuin.nl MVP...")
    print("=" * 70)
    create_pages()
    print("=" * 70)
    print("🎉 All pages generated successfully!")
