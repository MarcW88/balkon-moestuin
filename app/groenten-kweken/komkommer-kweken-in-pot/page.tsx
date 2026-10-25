import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Komkommer kweken in pot op je balkon: zo werkt het',
  description: 'Komkommer kweken in pot? Kies een buitenras, een ruime pot en een stevige steun. Lees hoe je zaait, water geeft, bestuiving herkent en oogst.',
  alternates: { canonical: '/groenten-kweken/komkommer-kweken-in-pot/' },
  robots: { index: false, follow: true },
};

const keuzes = [
  {naam:'Mini-komkommer voor buiten',voordeel:'Kleinere vruchten en handig bij weinig ruimte',letop:'Controleer op de verpakking of het ras echt geschikt is voor buitenteelt.'},
  {naam:'Gewone buitenkomkommer',voordeel:'Kan in een ruime pot langs een rek groeien',letop:'Heeft warmte, water en een stevige, windvaste ondersteuning nodig.'},
  {naam:'Kaskomkommer',voordeel:'Geschikt voor warme, beschutte teelt onder glas',letop:'Niet vanzelf geschikt voor een open balkon; bestuivingsregels verschillen per ras.'},
];
const stappen = [
  {no:'01',title:'Kies een buitenras',body:'Zoek op het etiket naar buitenteelt. Kies op een klein balkon liefst een minder fors groeiende variëteit; “mini” slaat soms alleen op de vruchtgrootte.'},
  {no:'02',title:'Zaai warm binnen',body:'Voor een buitenteelt kun je meestal eind april binnen beginnen. Zaai één zaadje 1–2 cm diep in een apart potje en houd het warm, rond 21 °C voor het kiemen.'},
  {no:'03',title:'Laat de plant afharden',body:'Laat jonge planten geleidelijk wennen aan zon, wind en koelere buitenlucht. Zet ze niet in de volle wind of koude nachten.'},
  {no:'04',title:'Plant na de kou buiten',body:'Zet buitenkomkommers pas op hun plek als de omstandigheden betrouwbaar warm zijn, vaak vanaf begin juni. De RHS noemt temperaturen boven ongeveer 12 °C als richtpunt.'},
  {no:'05',title:'Leid de ranken omhoog',body:'Plaats direct een stevig klimrek of andere ondersteuning in of achter de pot. Leid en bind de jonge ranken voorzichtig; houd rekening met wind op hogere balkons.'},
  {no:'06',title:'Verzorg en oogst regelmatig',body:'Houd de potgrond gelijkmatig vochtig, geef passende voeding en knip vruchten af zodra ze bij het ras passen. Regelmatige oogst stimuleert verdere vruchtvorming.'},
];

export default function KomkommerKwekenInPot() {
  return <main>
    <div className="container">
      <nav className="crumb" aria-label="Broodkruimel"><Link href="/">Home</Link> / <Link href="/groenten-kweken/">Groenten kweken</Link> / Komkommer kweken in pot</nav>
      <header className="pagehead">
        <div className="eyebrow">Groenten kweken · Klimmende vruchtgewassen</div>
        <h1>Komkommer kweken in pot op je balkon</h1>
        <p className="lead">Een komkommerplant kan prima in een grote pot groeien en langs een rek omhoog klimmen. Voor een Nederlands balkon zijn vooral een geschikt buitenras, een warme plek, voldoende wortelruimte en regelmatig water belangrijk. Een kasras is niet automatisch geschikt voor buiten.</p>
      </header>
    </div>

    <section className="section container" style={{paddingTop:0}}>
      <div className="banner">
        <div className="eyebrow" style={{color:'#d3eab5'}}>Voor je begint</div>
        <h2>Een open balkon vraagt om een buitenkomkommer</h2>
        <p>Komkommers houden van warmte. Kies een zonnige, beschutte plek waar de plant niet voortdurend in harde wind staat. Controleer expliciet of het ras voor buitenteelt bedoeld is. Met slechts weinig direct daglicht zullen groei en vruchtvorming vaak tegenvallen.</p>
        <p>De ranken kun je omhoog leiden, waardoor de plant relatief weinig vloeroppervlak gebruikt. De pot en het rek moeten wel groot en stabiel genoeg zijn.</p>
      </div>
    </section>

    <section className="section container" style={{paddingTop:0}}>
      <div className="section-head"><div><div className="eyebrow">De juiste keuze maken</div><h2>Welke komkommer kies je voor een pot?</h2></div><p>Let vooral op teeltlocatie, groeikracht en bestuivingswijze. Niet alleen de lengte van de vrucht bepaalt of een ras handig is.</p></div>
      <div style={{overflowX:'auto'}}><table style={{width:'100%',minWidth:650,borderCollapse:'collapse',textAlign:'left'}}>
        <thead><tr>{['Type','Waarom overwegen?','Belangrijk'].map(h=><th scope="col" key={h} style={{padding:'14px 12px',borderBottom:'2px solid #becdb6'}}>{h}</th>)}</tr></thead>
        <tbody>{keuzes.map(c=><tr key={c.naam}>
          <th scope="row" style={{padding:'16px 12px',borderBottom:'1px solid var(--line)',verticalAlign:'top'}}>{c.naam}</th>
          <td style={{padding:'16px 12px',borderBottom:'1px solid var(--line)',verticalAlign:'top'}}>{c.voordeel}</td>
          <td style={{padding:'16px 12px',borderBottom:'1px solid var(--line)',verticalAlign:'top'}}>{c.letop}</td>
        </tr>)}</tbody>
      </table></div>
      <p style={{fontSize:14,color:'var(--muted)',marginTop:15}}>Kleine vruchten betekenen niet per se een kleine plant. Lees daarom ook de aanbevolen planthoogte en teeltwijze op het zaadzakje.</p>
    </section>

    <section className="section" style={{background:'#f0f2e8'}}>
      <div className="container">
        <div className="section-head"><div><div className="eyebrow">Praktisch stappenplan</div><h2>Zo kweek je komkommer in een pot</h2></div><p>Begin niet te vroeg: jonge komkommerplanten zijn gevoelig voor kou en houden niet van beschadigde wortels.</p></div>
        <div className="grid">{stappen.map(s=><div className="tile" key={s.no}><span className="pill">{s.no} · Teeltstap</span><h3>{s.title}</h3><p>{s.body}</p></div>)}</div>
      </div>
    </section>

    <section className="section container"><div className="prose">
      <h2>Hoe groot moet de pot zijn?</h2>
      <p>De Royal Horticultural Society adviseert voor één komkommerplant een pot van <strong>minstens 30 cm breed en 30 cm diep</strong>. Dat is een ondergrens, geen garantie dat elke grote variëteit daarin optimaal groeit. Een ruimer vat kan het water geven vergemakkelijken, maar weegt gevuld ook meer. Controleer de draagkracht van je balkon bij twijfel.</p>
      <p>Gebruik potgrond voor containers, bij voorkeur turfvrij, met goede drainage. Zet de pot stevig neer en voorzie een rek dat niet kan omwaaien. Een komkommerplant heeft steun nodig zodra hij hoger groeit en vruchten begint te dragen.</p>

      <h2>Heeft een komkommer op het balkon veel zon nodig?</h2>
      <p>Ja. Komkommers zijn warmteminnende vruchtgewassen. Buiten doen ze het het best op een zonnige plek met weinig koude wind. Een zuid- of westbalkon kan geschikt zijn, mits er echt direct zonlicht komt en de pot niet uitdroogt. Lees ook onze gids over een <Link href="/moestuin-beginnen/balkon-op-het-zuiden/" style={{textDecoration:'underline'}}>moestuin op het zuiden</Link>. Bij <Link href="/moestuin-beginnen/balkon-met-weinig-zon/" style={{textDecoration:'underline'}}>weinig zon</Link> zijn bladgroenten meestal realistischer.</p>

      <h2>Water geven en bemesten zonder natte wortels</h2>
      <p>Een groeiende komkommerplant verbruikt veel water, zeker als er vruchten aankomen. Houd de potgrond gelijkmatig vochtig, zonder permanent water in de pot te laten staan. Tijdens warme dagen kan dagelijkse controle nodig zijn. Geef bij voorkeur in de koelere ochtend water aan de voet van de plant en probeer het blad droog te houden.</p>
      <p>Planten in potten hebben ook aanvullende voeding nodig. De RHS adviseert tijdens de groei regelmatig vloeibare voeding, ongeveer elke tien tot veertien dagen; zodra de bloei begint kun je overstappen op een kaliumrijk product, volgens de aanwijzingen op de verpakking.</p>

      <h2>Moet je een komkommer snoeien of dieven?</h2>
      <p>Een komkommer is geen tomaat. Snoeien hangt af van het ras en de teeltwijze. Bij buitenkomkommers kun je volgens de RHS de groeipunt na ongeveer zeven ontwikkelde bladeren toppen om zijscheuten te bevorderen; ook bloemloze zijscheuten kunnen worden ingekort. Doe dit niet automatisch bij een kasras of een plant met afwijkende instructies. Volg de teeltinformatie van het zaadbedrijf.</p>

      <h2>Bestuiving: mogen de mannelijke bloemen blijven zitten?</h2>
      <p><strong>Bij gewone buitenkomkommers: ja.</strong> Ze maken doorgaans mannelijke en vrouwelijke bloemen; bestuiving is nodig om vruchten te vormen. Laat de mannelijke bloemen dus zitten en maak de plant toegankelijk voor insecten.</p>
      <p>Bij veel moderne kaskomkommers ligt het anders: sommige rassen vormen vooral vrouwelijke bloemen en kunnen zonder bestuiving vruchten ontwikkelen. Bij zulke rassen kan ongewenste bestuiving nadelig zijn voor de vruchtkwaliteit. Meng daarom de regels voor buiten- en kaskomkommers niet door elkaar. Controleer het specifieke ras.</p>

      <h2>Waarom worden de bladeren geel of groeit de vrucht niet?</h2>
      <p>Controleer eerst de potgrond en de wortelruimte. Zowel uitdroging als te natte grond kan problemen geven. Vergeelde bladeren kunnen ook passen bij een voedingstekort, kou of natuurlijk verouderend blad. Witte, meelachtige vlekken kunnen op echte meeldauw wijzen. Een kleine of verschrompelende vrucht kan onder meer samenhangen met gebrekkige bestuiving bij buitenrassen. Eén verschijnsel bewijst niet automatisch één oorzaak.</p>

      <h2>Wanneer kun je oogsten?</h2>
      <p>Oogst als de vruchten stevig zijn en de passende grootte voor het ras hebben bereikt. Mini-komkommers kunnen al bij circa 8 cm geschikt zijn om te plukken, terwijl grotere typen langer mogen worden. Controleer de plant regelmatig: te ver doorgroeiende vruchten kunnen geel, zacht of minder lekker worden. Knip ze af met een schoon mesje of snoeischaar in plaats van aan de ranken te trekken.</p>

      <h2>Verder lezen</h2>
      <p>Ben je nog bezig met je eerste opstelling? Bekijk <Link href="/moestuin-beginnen/wat-heb-je-nodig/" style={{textDecoration:'underline'}}>wat je nodig hebt voor een balkonmoestuin</Link> en de <Link href="/zaaikalender/" style={{textDecoration:'underline'}}>zaaikalender</Link>. Meer verzorgingstips staan in <Link href="/moestuin-verzorgen/" style={{textDecoration:'underline'}}>moestuin verzorgen</Link>. Voor andere teeltideeën kun je terug naar <Link href="/groenten-kweken/" style={{textDecoration:'underline'}}>groenten kweken</Link>.</p>
      <div className="notice"><strong>Bronnen en werkwijze</strong>
        <p><a href="https://www.rhs.org.uk/vegetables/cucumbers/grow-your-own" target="_blank" rel="noopener noreferrer">RHS — How to grow cucumbers</a> en <a href="https://www.rhs.org.uk/container-gardening/growing-plants-in-containers" target="_blank" rel="noopener noreferrer">RHS — Growing plants in containers</a>.</p>
        <p style={{marginBottom:0}}>Dit is documentair tuinbouwadvies. Wij hebben voor deze gids geen eigen teeltproef op een balkon of producttest uitgevoerd.</p>
      </div>
    </div></section>
  </main>;
}
