#!/usr/bin/env python3
"""Extract balkon-moestuin products from Bol.com feeds and save to all_products.json"""
import gzip
import csv
import json
import re
from pathlib import Path

FOLDER = Path('/Users/marc/Desktop/balkon-moestuin')
OUTPUT = FOLDER / 'all_products.json'

FEEDS = [
    FOLDER / 'product-feed_garden-lighting-v2.csv.gz',
    FOLDER / 'product-feed_outdoor-mobility-v2.csv.gz',
    FOLDER / 'product-feed_kitchen-household-v2.csv.gz',
    FOLDER / 'product-feed_supermarket-v2.csv.gz',
    FOLDER / 'product-feed_home-interior-v2.csv.gz',
    FOLDER / 'product-feed_sda-v2.csv.gz',
]

INCLUDE_KW = [
    # Containers — mots précis uniquement
    'plantenbak', 'bloembak', 'balkonbak', 'bloempot', 'terracotta pot',
    'plantpot', 'hanging basket', 'hangende bak', 'railing planter',
    'kweekbak', 'moestuinbak', 'raised bed', 'hochbeet', 'verhoogd bed',
    'plantentoren', 'aardbeientoren', 'kruidenrek', 'vensterbank bak',
    'plantenbakken', 'bloempotten', 'balkonbakken',
    # Soil & substrate — mots précis
    'potgrond', 'tuinaarde', 'moestuinaarde', 'perliet', 'kokosvezel',
    'kokosgrond', 'hydrokorrels', 'groeimedium', 'bladaarde',
    'composteerder', 'compostvat', 'wormenbak',
    # Fertilizer
    'meststof', 'plantvoeding', 'tuinmest', 'organische mest',
    'vloeibare mest', 'koemest', 'wormmest', 'guano', 'tomatenmest',
    'groentemest', 'plantenmest', 'moestuinmest',
    # Seeds — mots précis
    'groentezaad', 'kruidenzaad', 'zaadpakket', 'zaaigoed',
    'tomaten zaden', 'basilicum zaden', 'sla zaden', 'radijs zaden',
    'bloemzaad', 'zaadset', 'zaaischijfje',
    # Watering — mots précis
    'gieter', 'sproeikop', 'druppelaar', 'druppelsysteem',
    'druppelirrigatie', 'irrigatiekit', 'waterreservoir',
    'automatisch bewateren', 'bewateringssysteem', 'druppelslang',
    # Tools — mots précis
    'troffel', 'handschoffel', 'plantschop', 'wiedhak', 'transplanter',
    'snoeischaar', 'tuinschaar', 'bloemensnijder', 'tuingereedschapset',
    # Grow lights
    'kweeklamp', 'groeilamp', 'led grow', 'phytolamp', 'plantenlamp',
    'grow light', 'kweekverlichting',
    # Specific garden/balcony combos
    'moestuin balkon', 'balkon moestuin', 'urban gardening',
    'moestuinset', 'stadsmoestuin',
]

# Marques à exclure systématiquement (jamais pertinentes)
HARD_EXCLUDE_BRANDS = [
    'postermonkey', 'textileposters', 'stickersnake', 'muchowow',
    'posterlounge', 'wallart', 'pixers', 'photowall', 'desenio',
    'mica decorations', 'mega collections', 'garronda', 'klasebo',
]

EXCLUDE_KW = [
    # Voertuigen & sport
    'fiets', 'auto ', 'motor ', 'scooter', 'barbecue', 'grill', 'zwembad',
    'grasmaaier', 'heggenschaar', 'kettingzaag', 'bladblazer', 'boor', 'cirkelzaag',
    # Meubels & textiel
    'tuinstoel', 'tuintafel', 'parasol', 'ligstoel', 'hangmat',
    'gordijn', 'gordijnen', 'tafelkleed', 'vloerkleed', 'tapijt', 'deken',
    'kussen', 'dekbed', 'sprei', 'matras', 'bedlaken',
    # Posters, stickers & decoratie
    'poster', 'sticker', 'toile de fond', 'wall art', 'muurdecoratie',
    'muurschildering', 'fotoafdruk', 'canvas print', 'canvas doek',
    'wanddecoratie', 'wandkunst', 'print op', 'foto op', 'schilderij',
    'afbeelding op', 'decoratieve print', 'postermonkey', 'textileposters',
    'stickersnake', 'muchowow', 'posterlounge',
    # Kantoor & schrijfwaren
    'agenda', 'notitieboek', 'pen ', 'schrift', 'bureau', 'laptop', 'telefoon',
    # Grote huishoudapparaten
    'wasmachine', 'vaatwasser', 'koelkast', 'oven ', 'magnetron', 'droger',
    # Verlichting (niet kweek)
    'vliegenlamp', 'muggenlamp', 'insectenlamp', 'dakgootverlichting',
    'kerstverlichting', 'prikkabel', 'tuinverlichting', 'buitenlamp',
    # Overige niet-tuin
    'speelgoed', 'puzzel', 'bordspel', 'fitnessmat', 'yogamat',
    'handtas', 'rugzak', 'koffer', 'paraplu', 'zonnebril',
    'supplement', 'vitamine', 'proteïne', 'capsule',
    'fotolijst', 'spiegel', 'klok', 'kaars', 'geurkaars',
    'badkamer', 'toilet', 'douche', 'wastafel',
]


def matches(title, desc, cat, brand):
    brand_low = brand.lower()
    # Hard-exclude brands — jamais pertinentes
    if any(b in brand_low for b in HARD_EXCLUDE_BRANDS):
        return False
    text = (title + ' ' + desc + ' ' + cat).lower()
    # Soft-exclude: exclure sauf override fort
    if any(kw in text for kw in EXCLUDE_KW):
        if not any(kw in text for kw in ['potgrond', 'plantenbak', 'meststof', 'groentezaad', 'gieter', 'druppelsysteem', 'kweeklamp']):
            return False
    return any(kw in text for kw in INCLUDE_KW)


def detect_category(title, desc, cat):
    text = (title + ' ' + desc + ' ' + cat).lower()
    if any(kw in text for kw in ['potgrond', 'tuinaarde', 'moestuinaarde', 'substraat', 'kokos', 'perliet', 'compost', 'hydrokorrels', 'bladaarde', 'groeimedium']):
        return 'potgrond'
    if any(kw in text for kw in ['meststof', 'plantvoeding', 'mest', 'guano', 'wormmest']):
        return 'meststoffen'
    if any(kw in text for kw in ['zaad', 'zaaigoed', 'zaadpakket']):
        return 'zaden'
    if any(kw in text for kw in ['gieter', 'sproeier', 'druppel', 'bewat', 'irrigat', 'waterreservoir']):
        return 'bewatering'
    if any(kw in text for kw in ['kweeklamp', 'groeilamp', 'led grow', 'plantenlamp', 'phytolamp', 'grow light']):
        return 'kweeklampen'
    if any(kw in text for kw in ['troffel', 'schoffel', 'schop', 'snoeischaar', 'tuinschaar', 'handschoffel', 'wiedhak']):
        return 'gereedschap'
    if any(kw in text for kw in ['plantenbak', 'bloembak', 'balkonbak', 'bloempot', 'pot', 'bak', 'basket', 'raised bed', 'hochbeet', 'kweekbak', 'toren']):
        return 'balkonbakken'
    return 'overig'


def slugify(text):
    s = text.lower().strip()
    for a, b in [('à','a'),('á','a'),('â','a'),('ã','a'),('ä','a'),
                 ('è','e'),('é','e'),('ê','e'),('ë','e'),
                 ('ì','i'),('í','i'),('î','i'),('ï','i'),
                 ('ò','o'),('ó','o'),('ô','o'),('ö','o'),
                 ('ù','u'),('ú','u'),('û','u'),('ü','u')]:
        s = s.replace(a, b)
    s = re.sub(r'[^a-z0-9]+', '-', s)
    return s.strip('-')[:80]


def parse_price(val):
    if not val:
        return 0.0
    try:
        return round(float(val.strip('"').replace(',', '.')), 2)
    except:
        return 0.0


def main():
    products = []
    seen_ids = set()

    for feed_path in FEEDS:
        if not feed_path.exists():
            print(f"[skip] {feed_path.name} not found")
            continue

        feed_name = feed_path.name.replace('product-feed_', '').replace('-v2.csv.gz', '')
        count = 0
        print(f"\nScanning {feed_name}...")

        with gzip.open(feed_path, 'rt', encoding='utf-8', errors='replace') as f:
            reader = csv.reader(f, delimiter='|', quotechar='"')
            header = [h.strip('"') for h in next(reader)]
            col = {h: i for i, h in enumerate(header)}

            for row in reader:
                def get(field, default=''):
                    idx = col.get(field)
                    if idx is None or idx >= len(row):
                        return default
                    return row[idx].strip('"')

                pid = get('productId')
                if not pid or pid in seen_ids:
                    continue

                title = get('title')
                desc = get('description')[:300]
                cat = ' '.join([
                    get('Category.category'),
                    get('Category.productgroup'),
                    get('Category.subgroup'),
                    get('Category.subssubgroup'),
                ])

                brand_raw = get('brand')
                if not matches(title, desc, cat, brand_raw):
                    continue

                deliverable = get('OfferNL.isDeliverable').upper() == 'Y'
                price = parse_price(get('OfferNL.sellingPrice'))
                list_price = parse_price(get('OfferNL.listPrice'))

                if not deliverable or price <= 0:
                    continue

                seen_ids.add(pid)
                count += 1

                url_nl = get('productPageUrlNL')
                affiliate_url = (
                    f"https://partner.bol.com/click/click?p=2&t=url&s=1519207&f=TXL"
                    f"&url={url_nl.replace(':', '%3A').replace('/', '%2F')}"
                    f"&name={title[:50].replace(' ', '%20')}"
                )

                category = detect_category(title, desc, cat)
                slug = slugify(title)
                brand = brand_raw
                if brand.lower() in ('merkloos / sans marque', 'merkloos', ''):
                    brand = 'Merkloos'

                products.append({
                    'id': pid,
                    'ean': get('ean'),
                    'name': title,
                    'slug': slug,
                    'category': category,
                    'brand': brand,
                    'price': price,
                    'list_price': list_price,
                    'image': get('imageUrl'),
                    'url_bol': url_nl,
                    'affiliate_url': affiliate_url,
                    'productgroup': get('Category.productgroup'),
                    'subgroup': get('Category.subgroup'),
                    'subssubgroup': get('Category.subssubgroup'),
                    'deliverable': deliverable,
                    'feed': feed_name,
                    'description': desc,
                })

        print(f"  → {count} produits trouvés dans {feed_name}")

    print(f"\n{'='*50}")
    print(f"TOTAL: {len(products)} produits pertinents (livrables, avec prix)")

    from collections import Counter
    cats = Counter(p['category'] for p in products)
    print("\nPar catégorie:")
    for cat, n in cats.most_common():
        print(f"  {n:4d}x  {cat}")

    brands = Counter(p['brand'] for p in products if p['brand'] != 'Merkloos')
    print("\nTop marques:")
    for b, n in brands.most_common(15):
        print(f"  {n:4d}x  {b}")

    OUTPUT.write_text(json.dumps(products, indent=2, ensure_ascii=False), encoding='utf-8')
    print(f"\n✓ Sauvegardé: {OUTPUT} ({len(products)} produits)")


if __name__ == '__main__':
    main()
