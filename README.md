# Balkon Moestuin — nieuwe SEO + affiliate basis

Next.js App Router, TypeScript, Nederlandse contentarchitectuur.

## Starten

```bash
npm install
npm run dev
npm run build
```

## Inhoud

- `data/catalog.json`: centrale taxonomie met 9 silo's en geplande gidsen.
- `app/page.tsx`: homepage.
- `app/[section]/page.tsx`: categoriepagina's.
- `app/[section]/[slug]/page.tsx`: toekomstige artikelroutes; **noindex** totdat de inhoud geverifieerd en gepubliceerd is.
- `app/sitemap.ts`: bevat uitsluitend homepage en bestaande inhoudshubs, geen geplande artikelen.

## Redactionele workflow

1. Controleer zoekintentie en bronnen per onderwerp.
2. Schrijf een eigen, controleerbare gids, met concrete potmaten, licht, grond, zaaiperiode en verzorging indien relevant.
3. Controleer feiten en verwijs naar naburige gidsen.
4. Publiceer pas na QA: vervang de placeholder, schakel indexatie in, voeg de URL toe aan de sitemap.
5. Vergelijk bij een live migratie de oude crawl/GSC-URL's vóórdat redirects worden toegevoegd.

## Opmerking

Dit is een startbasis, geen voltooide contentpublicatie. Affiliate links, juridische teksten, analyses en echte producttests zijn bewust niet verzonnen. Hosting/domein en deployments moeten apart worden gecontroleerd.
