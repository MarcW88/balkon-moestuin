#!/usr/bin/env python3
import os
import re
from pathlib import Path

# Footer from homepage
NEW_FOOTER = '''<footer>
<div style="background:var(--leaf);padding:2.5rem 0;">
<div class="container">
<div style="display:grid;grid-template-columns:1fr 1fr;gap:3rem;align-items:center;">
<div><p style="font-family:var(--font-serif);font-size:1.4rem;color:white;margin-bottom:0.5rem;">Heb je een vraag?</p>
<p style="color:rgba(255,255,255,0.85);font-size:0.9rem;line-height:1.6;margin:0;">Vind snel het antwoord in onze <a href="/start-hier/" style="color:white;text-decoration:underline;">beginnersgids</a> of neem <a href="/contact/" style="color:white;text-decoration:underline;">contact</a> op.</p>
</div>
<div><p style="font-family:var(--font-serif);font-size:1.4rem;color:white;margin-bottom:0.5rem;">Balkon moestuin tips in je inbox</p>
<p style="color:rgba(255,255,255,0.85);font-size:0.9rem;margin-bottom:1rem;">Seizoenstips, gidsen en de beste productaanbevelingen.</p>
<form onsubmit="return false;" style="display:flex;gap:0.5rem;flex-wrap:wrap;">
<input type="email" placeholder="Jouw e-mailadres" style="flex:1;min-width:200px;padding:0.6rem 1rem;border:none;border-radius:0.3rem;font-size:0.9rem;outline:none;">
<button type="submit" style="padding:0.6rem 1.4rem;background:#1a2e10;color:white;border:none;border-radius:0.3rem;font-size:0.9rem;font-weight:600;cursor:pointer;white-space:nowrap;">Inschrijven</button>
</form>
</div>
</div>
</div>
</div>
<div style="background:#1a2e10;padding:3rem 0 2rem;">
<div class="container">
<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:2.5rem;margin-bottom:2.5rem;">
<div><h4 style="color:white;font-size:0.8rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:1.2rem;padding-bottom:0.6rem;border-bottom:1px solid #2d4a1e;">Info</h4>
<ul style="list-style:none;padding:0;margin:0;">
<li style="margin-bottom:0.6rem;"><a href="/over-ons/" style="color:#bbb;font-size:0.85rem;text-decoration:none;">Over ons</a></li>
<li style="margin-bottom:0.6rem;"><a href="/contact/" style="color:#bbb;font-size:0.85rem;text-decoration:none;">Contact</a></li>
<li style="margin-bottom:0.6rem;"><a href="/privacybeleid/" style="color:#bbb;font-size:0.85rem;text-decoration:none;">Privacybeleid</a></li>
<li style="margin-bottom:0.6rem;"><a href="/disclaimer-affiliatie/" style="color:#bbb;font-size:0.85rem;text-decoration:none;">Disclaimer</a></li>
<li style="margin-bottom:0.6rem;"><a href="/cookiebeleid/" style="color:#bbb;font-size:0.85rem;text-decoration:none;">Cookiebeleid</a></li>
</ul></div>
<div><h4 style="color:white;font-size:0.8rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:1.2rem;padding-bottom:0.6rem;border-bottom:1px solid #2d4a1e;">Gidsen</h4>
<ul style="list-style:none;padding:0;margin:0;">
<li style="margin-bottom:0.6rem;"><a href="/start-hier/" style="color:#bbb;font-size:0.85rem;text-decoration:none;">Start hier</a></li>
<li style="margin-bottom:0.6rem;"><a href="/gidsen/" style="color:#bbb;font-size:0.85rem;text-decoration:none;">Alle gidsen</a></li>
<li style="margin-bottom:0.6rem;"><a href="/gidsen/zaai-oogstkalender/" style="color:#bbb;font-size:0.85rem;text-decoration:none;">Seizoenskalender</a></li>
<li style="margin-bottom:0.6rem;"><a href="/gidsen/water-geven-balkon/" style="color:#bbb;font-size:0.85rem;text-decoration:none;">Bewatering</a></li>
<li style="margin-bottom:0.6rem;"><a href="/problemen/" style="color:#bbb;font-size:0.85rem;text-decoration:none;">Problemen</a></li>
</ul></div>
<div><h4 style="color:white;font-size:0.8rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:1.2rem;padding-bottom:0.6rem;border-bottom:1px solid #2d4a1e;">Shop</h4>
<ul style="list-style:none;padding:0;margin:0;">
<li style="margin-bottom:0.6rem;"><a href="/beste/" style="color:#bbb;font-size:0.85rem;text-decoration:none;">Alle producten</a></li>
<li style="margin-bottom:0.6rem;"><a href="/beste/balkonbakken/" style="color:#bbb;font-size:0.85rem;text-decoration:none;">Balkonbakken</a></li>
<li style="margin-bottom:0.6rem;"><a href="/beste/potgrond/" style="color:#bbb;font-size:0.85rem;text-decoration:none;">Potgrond</a></li>
<li style="margin-bottom:0.6rem;"><a href="/beste/meststoffen/" style="color:#bbb;font-size:0.85rem;text-decoration:none;">Meststoffen</a></li>
<li style="margin-bottom:0.6rem;"><a href="/beste/irrigatie/" style="color:#bbb;font-size:0.85rem;text-decoration:none;">Bewatering</a></li>
</ul></div>
<div><h4 style="color:white;font-size:0.8rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:1.2rem;padding-bottom:0.6rem;border-bottom:1px solid #2d4a1e;">Planten</h4>
<ul style="list-style:none;padding:0;margin:0;">
<li style="margin-bottom:0.6rem;"><a href="/planten/" style="color:#bbb;font-size:0.85rem;text-decoration:none;">Alle planten</a></li>
<li style="margin-bottom:0.6rem;"><a href="/planten/tomaten-op-balkon/" style="color:#bbb;font-size:0.85rem;text-decoration:none;">Tomaten</a></li>
<li style="margin-bottom:0.6rem;"><a href="/planten/sla-op-balkon/" style="color:#bbb;font-size:0.85rem;text-decoration:none;">Sla & rucola</a></li>
<li style="margin-bottom:0.6rem;"><a href="/planten/aardbeien-op-balkon/" style="color:#bbb;font-size:0.85rem;text-decoration:none;">Aardbeien</a></li>
<li style="margin-bottom:0.6rem;"><a href="/planten/makkelijke-groenten-beginners/" style="color:#bbb;font-size:0.85rem;text-decoration:none;">Voor beginners</a></li>
</ul></div>
</div>
<div style="border-top:1px solid #2d4a1e;padding-top:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;">
<div style="display:flex;align-items:center;gap:1rem;">
<span style="font-family:var(--font-serif);font-size:1rem;color:white;">Balkon Moestuin</span>
<span style="color:#555;font-size:0.75rem;">|</span>
<span style="color:#666;font-size:0.78rem;">Dé gids voor balkon moestuinen in Nederland &amp; België</span>
</div>
<div style="display:flex;gap:1.5rem;flex-wrap:wrap;">
<a href="/privacybeleid/" style="color:#666;font-size:0.78rem;text-decoration:none;">Privacy</a>
<a href="/disclaimer-affiliatie/" style="color:#666;font-size:0.78rem;text-decoration:none;">Disclaimer</a>
<a href="/cookiebeleid/" style="color:#666;font-size:0.78rem;text-decoration:none;">Cookies</a>
<span style="color:#666;font-size:0.78rem;">© 2026 Balkon-Moestuin.nl</span>
</div>
</div>
<p style="color:#555;font-size:0.75rem;margin:0.75rem 0 0;text-align:center;">Deze site bevat partnerlinks. Bij aankoop via onze links ontvangen wij een kleine commissie, zonder extra kosten voor jou.</p>
</div>
</div>
</footer>'''

# New menu with Cluster 1 sub-pages
NEW_MENU = '''<li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="/gidsen/">Gidsen</a>
<ul class="dropdown-menu">
<li><a class="dropdown-link" href="/start-hier/">Start hier</a></li>
<li><a class="dropdown-link" href="/start-hier/balkonmoestuin-in-1-weekend/">Start in 1 weekend</a></li>
<li><a class="dropdown-link" href="/start-hier/wat-heb-je-nodig/">Wat heb je nodig?</a></li>
<li><a class="dropdown-link" href="/start-hier/fouten-beginners/">Fouten beginners</a></li>
<li><a class="dropdown-link" href="/start-hier/balkonmoestuin-voor-huurders/">Voor huurders</a></li>
<li><a class="dropdown-link" href="/gidsen/">Alle gidsen</a></li>
<li><a class="dropdown-link" href="/gidsen/zaai-oogstkalender/">Seizoenskalender</a></li>
<li><a class="dropdown-link" href="/problemen/">Problemen</a></li>
</ul>
</li>'''

# Old menu pattern to replace
OLD_MENU_PATTERN = r'<li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="/gidsen/">Gidsen</a>\s*<ul class="dropdown-menu">\s*<li><a class="dropdown-link" href="/start-hier/">Start hier</a></li>.*?</ul>\s*</li>'

def update_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    
    # Replace footer
    content = re.sub(r'<footer>.*?</footer>', NEW_FOOTER, content, flags=re.DOTALL)
    
    # Replace menu
    content = re.sub(OLD_MENU_PATTERN, NEW_MENU, content, flags=re.DOTALL)
    
    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

# Main pages to update (excluding shop and products)
pages = [
    'index.html',
    'start-hier/index.html',
    'start-hier/balkonmoestuin-in-1-weekend/index.html',
    'start-hier/wat-heb-je-nodig/index.html',
    'start-hier/fouten-beginners/index.html',
    'start-hier/balkonmoestuin-voor-huurders/index.html',
    'gidsen/index.html',
    'planten/index.html',
    'problemen/index.html',
    'contact/index.html',
    'over-ons/index.html',
    'privacybeleid/index.html',
    'disclaimer-affiliatie/index.html',
    'cookiebeleid/index.html',
    'beste/index.html',
    'beste/balkonbakken/index.html',
    'reviews/index.html',
]

base_dir = Path('/Users/marc/Desktop/balkon-moestuin')
updated = []

for page in pages:
    filepath = base_dir / page
    if filepath.exists():
        if update_file(filepath):
            updated.append(str(filepath))
            print(f'Updated: {page}')
        else:
            print(f'No changes: {page}')
    else:
        print(f'Not found: {page}')

print(f'\nTotal updated: {len(updated)}')
