# 💰 AFFILIATE FUNNEL — Balkon-Moestuin.nl

**Structure:** Gidsen → Beste → Reviews → bol.com  
**Objectif:** Convertir traffic informationnel en revenus affiliate

---

## 🎯 **FUNNEL OVERVIEW**

### **Phase 1: INFO (Top of Funnel)**
**Type:** `/gidsen/` — Guides informationnels  
**Intent:** "Hoe doe ik X?"  
**Conversion:** 0% (pure education)  
**Rôle:** Attirer traffic SEO, build trust, internal linking

**Exemples:**
- `/gidsen/potgrond-voor-moestuin/`
- `/gidsen/water-geven-op-balkon/`
- `/gidsen/pottenbakken-kiezen/`

**CTA dans guides:**
```html
<div class="card">
  <h3>🛒 Aanraders</h3>
  <p>Wil je weten welke potgrond het beste werkt?</p>
  <a href="/beste/potgrond/" class="btn">Bekijk Top 5 Potgrond →</a>
</div>
```

---

### **Phase 2: VERGELIJK (Middle of Funnel)**
**Type:** `/beste/` — Best-of / Top 5 comparatives  
**Intent:** "Wat is het beste X?"  
**Conversion:** ~2-5% CTR naar bol.com  
**Rôle:** Shortlist producten, build intent

**Exemples:**
- `/beste/balkonbakken/` → Top 5 balkonbakken
- `/beste/potgrond/` → Top 5 potgrond
- `/beste/meststoffen/` → Top 5 meststoffen

**CTA dans best-of:**
```html
<table class="table">
  <tr>
    <td>Elho Green Basics</td>
    <td>€12-15</td>
    <td>
      <a href="/beste/balkonbakken/" class="btn">Bekijk top 5</a>
      <a href="/reviews/balkonbakken/elho-green-basics-review/" class="btn secondary">Lees review</a>
    </td>
  </tr>
</table>
```

---

### **Phase 3: REVIEW (Bottom of Funnel)**
**Type:** `/reviews/` — Product reviews individuelles  
**Intent:** "Is product X goed?"  
**Conversion:** ~5-10% CTR naar bol.com  
**Rôle:** Final decision, trust, transparence

**Exemples:**
- `/reviews/balkonbakken/elho-green-basics-review/`
- `/reviews/potgrond/dcm-bio-potgrond-review/`
- `/reviews/meststoffen/pokon-tomatenmest-review/`

**CTA dans reviews:**
```html
<a href="https://www.bol.com/nl/p/elho-green-basics/..." 
   class="cta primary" 
   target="_blank" 
   rel="nofollow sponsored">
  Bekijk op bol.com →
</a>
```

---

### **Phase 4: CONVERSION (Externe)**
**Type:** bol.com affiliate link  
**Conversion:** ~3-8% (industry standard)  
**Commission:** 3-5% (bol.com partner)

---

## 🔗 **INTERNAL LINKING STRATEGY**

### **From Gidsen → Beste**
```html
<!-- Dans /gidsen/potgrond-voor-moestuin/ -->
<section class="content-section">
  <h2>🛒 Welke Potgrond Kopen?</h2>
  <p>We hebben 15+ potgronden getest. Dit zijn de top 5:</p>
  <a href="/beste/potgrond/" class="btn primary">Bekijk Beste Potgrond Top 5 →</a>
</section>
```

### **From Beste → Reviews**
```html
<!-- Dans /beste/balkonbakken/ -->
<div class="card">
  <h3>Elho Green Basics (⭐ 8.5/10)</h3>
  <p>Beste budget optie...</p>
  <a href="/reviews/balkonbakken/elho-green-basics-review/" class="btn secondary">
    Lees Volledige Review →
  </a>
  <a href="https://www.bol.com/..." class="cta primary" rel="nofollow sponsored">
    Bekijk op bol.com →
  </a>
</div>
```

### **From Reviews → bol.com**
```html
<!-- Dans /reviews/balkonbakken/elho-green-basics-review/ -->
<section class="hero">
  <a href="https://www.bol.com/nl/p/elho-green-basics/..." 
     class="cta primary" 
     target="_blank" 
     rel="nofollow sponsored">
    Bekijk op bol.com →
  </a>
</section>

<section style="text-align: center; margin-top: 3rem;">
  <h2>✅ Eindoordeel: 8.5/10</h2>
  <a href="https://www.bol.com/..." class="btn primary" rel="nofollow sponsored">
    Bekijk Prijs op bol.com →
  </a>
</section>
```

---

## 📊 **CONVERSION FUNNEL METRICS**

### **Estimations (Conservatif)**

| Stage | Pages | Traffic/mois | CTR | Users Next Stage |
|-------|-------|--------------|-----|------------------|
| **Guides** | 10 | 3,000 | 15% | 450 → beste |
| **Beste** | 5 | 1,500 | 20% | 300 → reviews |
| **Reviews** | 6 | 800 | 8% | 64 → bol.com |
| **bol.com** | - | 64 clicks | 5% | 3 sales |

**Revenue per mois (conservatif):**
```
3 sales × €25 AOV × 5% commission = €3.75/mois
→ €45/an (ultra-conservatif)
```

### **Estimations (Optimiste @ 20K traffic/mois)**

| Stage | Traffic/mois | CTR | Clicks | Sales | Revenue/mois |
|-------|--------------|-----|--------|-------|--------------|
| Guides | 12,000 | 15% | 1,800 | - | - |
| Beste | 6,000 | 20% | 1,200 | - | - |
| Reviews | 4,000 | 10% | 400 | 20 | €25 |
| **TOTAL** | **20,000** | - | **400 clicks** | **20 sales** | **€25/mois** |

```
20 sales × €25 AOV × 5% commission = €25/mois
→ €300/an (realistic avec 20K traffic)
```

---

## 🎨 **VISUAL FLOW (User Journey)**

### **Scenario 1: "Hoe start ik een balkonmoestuin?"**
```
Google → /gidsen/balkonmoestuin-stappenplan/
        ↓ (Internal link: "Welke potten?")
        /beste/balkonbakken/
        ↓ (Button: "Lees review Elho")
        /reviews/balkonbakken/elho-green-basics-review/
        ↓ (CTA: "Bekijk op bol.com")
        bol.com (CONVERSION)
```

### **Scenario 2: "Beste potgrond balkon"**
```
Google → /beste/potgrond/
        ↓ (Direct CTA: "Bekijk op bol.com")
        bol.com (CONVERSION - Short funnel)
        
        OR
        
        ↓ (Button: "Lees review DCM")
        /reviews/potgrond/dcm-bio-potgrond-review/
        ↓ (CTA: "Bekijk op bol.com")
        bol.com (CONVERSION - Long funnel)
```

### **Scenario 3: "Elho Green Basics review"**
```
Google → /reviews/balkonbakken/elho-green-basics-review/
        ↓ (Direct CTA in hero)
        bol.com (CONVERSION - Direct intent)
```

---

## ✅ **BEST PRACTICES**

### **1. Transparence (GDPR/FTC Compliant)**
- ✅ Disclaimer visible sous chaque bloc affiliate
- ✅ `rel="nofollow sponsored"` sur tous liens bol.com
- ✅ Page `/disclaimer-affiliatie/` accessible footer
- ✅ Mention "Als bol.com partner verdienen wij..." footer

### **2. Trust Signals**
- ✅ "Getest X maanden" dans reviews
- ✅ Voordelen ET nadelen (balance)
- ✅ Alternatieven vermelden (pas alleen duurste pushen)
- ✅ Real test context (balkons, planten, resultaten)

### **3. SEO**
- ✅ Schema.org Product + Review sur reviews
- ✅ Breadcrumbs (HTML + Schema)
- ✅ Internal linking aggressive (min 3-5 per page)
- ✅ Long-tail keywords in reviews (brand + model)

### **4. UX**
- ✅ CTA buttons duidelijk (groen primary = bol.com)
- ✅ Niet te veel CTAs (max 2-3 per page)
- ✅ "Bekijk op bol.com" consistency (altijd zelfde tekst)
- ✅ Mobile-friendly (60%+ traffic mobile)

---

## 📈 **SCALING STRATEGY**

### **Phase 1: MVP (Huidig) — 6 Reviews**
```
2 × balkonbakken
2 × potgrond
1 × meststof
1 × irrigatie
```

### **Phase 2: Expansion (Q1 2026) — 15 Reviews**
```
+ 2 balkonbakken (Keter, Esschert)
+ 1 potgrond (Compo)
+ 2 meststoffen (DCM, Substral)
+ 1 irrigatie (Blumat)
+ 3 kweeksets (tomaten, kruiden, sla)
+ 2 gereedschap (schepjes, handschoenen)
```

### **Phase 3: Mature (Q2-Q3 2026) — 30+ Reviews**
```
+ 10 planten-specifieke producten (tomatensteunen, kruidentuintjes)
+ 5 accessoires (pH meters, voedingsstoffen, zaden)
+ Coverage: alle producten in "beste" hebben review
```

---

## 🛠️ **MAINTENANCE**

### **Review Updates (Minimaal 1x per jaar)**
- ✅ Prix check (bol.com links validity)
- ✅ Availability check (product nog verkrijgbaar?)
- ✅ New alternatives (nieuwe concurrenten?)
- ✅ Update test duration ("getest 12 maanden" na 1 jaar)

### **Seasonal (Maart-Mei = Peak)**
- ✅ Push reviews via homepage (seasonal banner)
- ✅ Email newsletter (als actief)
- ✅ Social media posts (Instagram/Pinterest)

---

## 📝 **TEMPLATE CHECKLIST (Voor Nieuwe Reviews)**

Elke nieuwe review moet hebben:
- [ ] Schema.org Product + Review + AggregateRating
- [ ] BreadcrumbList Schema
- [ ] TL;DR section
- [ ] Specs table
- [ ] Test context (locatie, periode, planten)
- [ ] Voordelen (min 3)
- [ ] Nadelen (min 2, eerlijk!)
- [ ] Voor Wie / Niet Voor Wie
- [ ] Alternatieven comparison (min 2)
- [ ] FAQ (min 3 questions)
- [ ] 2-3 bol.com CTAs (hero + eindoordeel)
- [ ] Affiliate disclaimer visible
- [ ] 3 related content links (gidsen/beste)
- [ ] Update date vermeld

---

## 🎯 **SUCCESS METRICS (Track Monthly)**

### **SEO**
- Impressions (Google Search Console)
- Clicks (GSC)
- Avg position voor "[product naam] review"
- Backlinks naar reviews

### **Engagement**
- Avg time on page (target: >3 min voor reviews)
- Bounce rate (target: <60%)
- Internal click-through (reviews → bol.com)

### **Conversion**
- bol.com clicks (via affiliate dashboard)
- Sales attributed
- Revenue per 1000 visitors (RPM)
- Conversion rate per review (best performers)

---

## 💡 **PRO TIPS**

1. **Review Best Performers First:**  
   Focus op producten met hoogste search volume + laagste competitie  
   Tool: Google Keyword Planner / Ahrefs

2. **Update Seasonal:**  
   Reviews van potgrond/meststoffen update in februari (voor seizoen start)

3. **A/B Test CTAs:**  
   Test "Bekijk op bol.com" vs "Koop bij bol.com" vs "Bestel nu"

4. **Cross-Promote:**  
   Elke review linkt naar 2-3 andere reviews (carousel/slider)

5. **Pinterest Strategy:**  
   Create pins voor elke review (visual content → traffic boost)

---

✅ **RÉSUMÉ:**  
Structure `/reviews/` is nu live met 6 reviews MVP.  
Funnel: **Gidsen (info) → Beste (vergelijk) → Reviews (decision) → bol.com (€€€)**  
Next: Add 10+ reviews Q1 2026 + track conversions via bol.com dashboard.

🚀 **Ready to monetize!**
