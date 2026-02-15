# 🌱 Balkon-Moestuin.nl — MVP

**De #1 gids voor balkonmoestuinen in Nederland & België**

---

## 📋 **Project Overview**

Balkon-Moestuin.nl is een SEO-geoptimaliseerde content site gericht op mensen die verse groenten, kruiden en fruit willen kweken op hun balkon. Het MVP bevat 15+ pagina's met praktische gidsen, vergelijkingen en affiliate-mogelijkheden via bol.com.

---

## 🎯 **Doelgroep**

- **Primair:** Beginners zonder tuinervaring (25-45 jaar, stedelijk, Nederland/België)
- **Secundair:** Gevorderde balkontuin

iers die willen optimaliseren
- **Pain points:** Geen ruimte, weinig tijd, onzeker waar te beginnen
- **Intent:** Informationeel (hoe-to) + transactioneel (product aankopen)

---

## 🏗️ **Sitemap (MVP)**

### **📌 Pages Fondation** (11 pagina's)
```
/                          Homepage (hero, FAQ, populaire gidsen)
/start-hier/               7-stappen stappenplan (PILLAR)
/gidsen/                   Hub - Alle gidsen
/planten/                  Hub - Groenten, kruiden, fruit
/problemen/                Hub - Ziektes, plagen, oplossingen
/beste/                    Hub - Product reviews (affiliate)
/over-ons/                 Over ons team
/contact/                  Contact formulier
/disclaimer-affiliatie/    Transparantie affiliate links
/privacybeleid/            GDPR compliant
/cookiebeleid/             Cookie policy
```

### **📚 Gidsen** (Ready for expansion)
```
/gidsen/balkonmoestuin-stappenplan/    (IN PROGRESS)
/gidsen/potgrond-voor-moestuin/        (TODO)
/gidsen/pottenbakken-kiezen/           (TODO)
/gidsen/zon-of-schaduw-balkon/         (TODO)
/gidsen/wind-op-balkon-planten-beschermen/ (TODO)
/gidsen/water-geven-op-balkon/         (TODO)
/gidsen/drainage-hydrokorrels/         (TODO)
/gidsen/meststoffen-balkonmoestuin/    (TODO)
```

### **🌿 Planten** (Ready for expansion)
```
/planten/kruiden-op-balkon/      (TODO)
/planten/tomaten-op-balkon/      (TODO)
/planten/sla-op-balkon/          (TODO)
/planten/aardbeien-op-balkon/    (TODO)
```

### **🐛 Problemen** (Ready for expansion)
```
/problemen/gele-bladeren/         (TODO)
/problemen/bladluis-op-balkon/    (TODO)
/problemen/schimmel-potgrond/     (TODO)
/problemen/te-veel-of-te-weinig-water/ (TODO)
```

### **💰 Best-of (Affiliate/Monétisation)** (Ready for expansion)
```
/beste/balkonbakken/    Top 5 balkonbakken (bol.com)  (TODO)
/beste/potgrond/        Top 5 potgrond (bol.com)      (TODO)
/beste/meststoffen/     Top 5 meststoffen (bol.com)   (TODO)
/beste/gieter/          Top 5 gieters (bol.com)       (TODO)
```

---

## 🎨 **Tech Stack**

- **Frontend:** Vanilla HTML5 + CSS3 + JavaScript (geen framework)
- **Styling:** CSS custom properties (variables), responsive grid
- **SEO:** Schema.org (Article, HowTo, BreadcrumbList, FAQPage, ItemList)
- **Performance:** Lazy loading images, minified CSS/JS (déploiement)
- **Affiliate:** bol.com partner links (rel="nofollow sponsored")

---

## 📂 **File Structure**

```
balkon-moestuin/
├── assets/
│   ├── css/
│   │   └── main.css          ← Tous les styles (variables, grid, cards, FAQ)
│   ├── js/
│   │   └── main.js           ← FAQ toggle, filter, smooth scroll
│   └── img/                  ← Images (webp)
│
├── gidsen/
│   ├── index.html            ← Hub gidsen
│   ├── balkonmoestuin-stappenplan/
│   └── [autres gidsen]/
│
├── planten/
│   ├── index.html            ← Hub planten
│   └── [planten pages]/
│
├── problemen/
│   ├── index.html            ← Hub problemen
│   └── [problemen pages]/
│
├── beste/
│   ├── index.html            ← Hub best-of
│   └── [best-of pages]/
│
├── start-hier/
│   └── index.html            ← PILLAR page (7 stappen)
│
├── over-ons/
│   └── index.html
│
├── contact/
│   └── index.html
│
├── disclaimer-affiliatie/
│   └── index.html
│
├── privacybeleid/
│   └── index.html
│
├── cookiebeleid/
│   └── index.html
│
├── index.html                ← Homepage
├── robots.txt
├── sitemap.xml
└── README.md                 ← Ce fichier
```

---

## 🚀 **Quick Start (Local Development)**

### **Option 1: Python SimpleHTTPServer**
```bash
cd /Users/marc/Desktop/balkon-moestuin
python3 -m http.server 8000
# Ouvrir: http://localhost:8000
```

### **Option 2: PHP Server**
```bash
cd /Users/marc/Desktop/balkon-moestuin
php -S localhost:8000
# Ouvrir: http://localhost:8000
```

### **Option 3: VS Code Live Server**
- Installer extension "Live Server"
- Right-click sur `index.html` → "Open with Live Server"

---

## 📊 **SEO Strategy**

### **Keyword Clusters** (4 clusters MVP)

#### **1. Starten & Basis**
- balkonmoestuin starten
- balkonmoestuin voor beginners
- hoe start je een balkonmoestuin
- balkon moestuin stappenplan

#### **2. Teelt in Pot / Bakken**
- beste potgrond balkonmoestuin
- balkonbakken kopen
- potten kiezen balkon
- drainage balkon

#### **3. Wat Kweken?**
- tomaten kweken op balkon
- kruiden kweken balkon
- groenten op balkon
- aardbeien balkon

#### **4. Problemen**
- gele bladeren balkonplanten
- bladluis bestrijden balkon
- schimmel op potgrond
- te veel water balkon

### **On-Page SEO Checklist**
- ✅ 1 H1 per pagina
- ✅ Breadcrumbs (HTML + Schema)
- ✅ Internal linking (min 3 per page)
- ✅ Meta description (<160 chars)
- ✅ Canonical URL
- ✅ Schema.org markup (Article/HowTo/FAQ)
- ✅ Alt tags images
- ✅ Responsive design
- ✅ Fast load (<2s)

---

## 💰 **Monétisation Strategy**

### **Affiliate Model: bol.com Partner**

#### **Best-of Pages (Argent)**
- Top 5 balkonbakken
- Top 5 potgrond
- Top 5 meststoffen
- Top 5 gieters/druppelbewatering

#### **Affiliate Règles**
- ✅ Tous les liens: `rel="nofollow sponsored" target="_blank"`
- ✅ Disclaimer visible sous chaque bloc affiliate
- ✅ Page `/disclaimer-affiliatie/` accessible footer
- ✅ Transparence totale (GDPR/FTC compliant)

#### **Revenue Estimation (6 mois)**
```
Traffic objectif: 5,000 visitors/mois
CTR affiliate: 2% (100 clicks)
Conversion: 5% (5 ventes)
AOV bol.com: €25
Commission: 5% → €1.25/vente
Revenus: €6.25/mois → €75/an (conservative)

Avec 20,000 visitors/mois → €300/an
```

---

## 🎨 **Design Principles**

### **UI/UX**
- **Clean & Minimal:** Pas de distractions, focus sur contenu
- **Green Accent:** `#2d7a3e` (nature, growth)
- **Typography:** System fonts (fast load, lisible)
- **White Space:** Aéré, facile à scanner
- **Mobile-First:** 60%+ traffic mobile attendu

### **Accessibilité**
- ✅ Skip links
- ✅ ARIA labels
- ✅ Keyboard navigation
- ✅ Contrast ratios WCAG AA

---

## 📈 **Next Steps (Post-MVP)**

### **Phase 2: Content Expansion**
1. Ajouter 10+ guides (atteindre 30 total)
2. Créer 10+ planten pages
3. Étendre problemen (15 common issues)
4. Best-of: 10 catégories produits

### **Phase 3: Advanced Features**
- Newsletter signup (MailChimp/ConvertKit)
- Commentaires (Disqus ou custom)
- Calendrier de plantation (seasonal guide)
- Video tutorials (YouTube embed)
- Downloadable PDFs (checklists)

### **Phase 4: Marketing**
- Pinterest strategy (visual content)
- Instagram (@balkonmoestuin)
- Guest posts (NL gardening blogs)
- Backlink outreach
- Google Ads (seasonal: maart-mei)

---

## 📝 **Content Guidelines**

### **Tone of Voice**
- **Praktisch:** Actionable tips, no fluff
- **Toegankelijk:** Beginners-friendly, geen jargon
- **Eerlijk:** Transparant over affiliate, realistische verwachtingen
- **Motiverend:** "Jij kunt dit ook!"

### **Content Formula**
```
1. TL;DR (instant value)
2. Inhoudsopgave (scannabilité)
3. Intro (probleem + oplossing)
4. Stappen/Tips (numbered lists, visueel)
5. Voorbeelden/Cases
6. FAQ (veelgestelde vragen)
7. CTA (volgende stap)
8. Internal links (3-5 per page)
```

---

## 🛠️ **Tools & Resources**

### **SEO**
- Google Search Console
- Google Analytics (GA4)
- Screaming Frog (crawl check)
- Ahrefs/Semrush (keyword research)

### **Performance**
- PageSpeed Insights
- GTmetrix
- WebPageTest

### **Images**
- Unsplash/Pexels (free stock)
- TinyPNG (compression)
- WebP format (modern browsers)

---

## ✅ **MVP Checklist**

### **Phase 1: Foundation** ✅
- [x] HTML/CSS/JS assets créés
- [x] Homepage avec hero + FAQ
- [x] Start-hier pillar page (7 stappen)
- [x] 4 hubs (gidsen, planten, problemen, beste)
- [x] 5 pages légales (over-ons, contact, disclaimer, privacy, cookies)
- [x] robots.txt + sitemap.xml

### **Phase 2: Content** 🚧
- [ ] 8 guides complets
- [ ] 4 planten pages
- [ ] 4 problemen pages
- [ ] 4 best-of pages (affiliate)

### **Phase 3: Launch** ⏳
- [ ] Images optimisées (webp)
- [ ] Performance check (<2s load)
- [ ] Mobile responsive test
- [ ] SEO meta check (tous les pages)
- [ ] Internal linking audit
- [ ] Affiliate links test (bol.com)
- [ ] Formulaire contact test
- [ ] Google Analytics setup
- [ ] Search Console setup

---

## 📞 **Contact**

**Email:** info@balkon-moestuin.nl  
**Project Lead:** [Ton nom]  
**Launch Date:** Q1 2026 (target)

---

## 📜 **License**

© 2025 Balkon-Moestuin.nl. Alle rechten voorbehouden.

---

**🌱 Veel succes met je balkonmoestuin adventure!**
