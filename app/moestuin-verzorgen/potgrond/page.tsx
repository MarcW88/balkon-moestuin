import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Welke potgrond voor je balkonmoestuin? Praktische gids',
  description: 'Welke potgrond is geschikt voor groenten, kruiden en fruit in potten? Vergelijk turfvrije potgrond, zaaigrond en zure grond, met tips voor drainage en voeding.',
  alternates: { canonical: '/moestuin-verzorgen/potgrond/' },
  robots: { index: false, follow: true },
};

const mixen = [
  { naam: 'Turfvrije universele potgrond', gebruik: 'De meeste eenjarige groenten, kruiden en jonge planten', aandacht: 'Controleer of het product geschikt is voor eetbare gewassen en hoeveel startvoeding is toegevoegd.' },
  { naam: 'Turfvrije zaai- en stekgrond', gebruik: 'Zaadjes laten kiemen en kwetsbare zaailingen opkweken', aandacht: 'Fijner van structuur en doorgaans minder rijk aan voeding; na opkomst tijdig verspenen of oppotten.' },
  { naam: 'Leemhoudende potgrond', gebruik: 'Vaste kruiden en meerjarige fruitstruiken in grotere potten', aandacht: 'Kan langer structuur houden, maar is zwaarder: let op de balkonbelasting.' },
  { naam: 'Zure potgrond voor zuurminnende planten', gebruik: 'Blauwe bessen en andere planten die een lage pH nodig hebben', aandacht: 'Gebruik geen standaardmix wanneer een plant duidelijk zure grond vereist.' },
];

const stappen = [
  ['01', 'Kijk naar de plant', 'Noteer wat je gaat kweken: zaailingen, bladgroenten, mediterrane kruiden of een meerjarige fruitstruik hebben niet precies dezelfde behoeften.'],
  ['02', 'Kies het juiste type', 'Voor de meeste groenten is turfvrije potgrond voor containers een goed begin. Kies speciale zaaigrond voor kieming en zure grond voor blauwe bessen.'],
  ['03', 'Controleer de verpakking', 'Lees voor welke planten de potgrond bedoeld is, hoeveel voeding erin zit en of de zak uitdrukkelijk als turfvrij is aangeduid.'],
  ['04', 'Gebruik een pot met gaten', 'Vul een geschikte pot of bak met drainagegaten. Alleen een laag hydrokorrels onderin maakt een gesloten pot niet veilig voor wortels.'],
  ['05', 'Plant zonder hard aan te stampen', 'Maak de grond licht vochtig, vul rustig aan en druk alleen zachtjes rond de wortels. Geef water om de potgrond te laten aansluiten.'],
  ['06', 'Pas water en voeding aan', 'Controleer na het planten de vochtigheid. Bij langdurige teelt is de voorraad voedingsstoffen eindig; volg de aanwijzingen van de grond en het gewas.'],
];

export default function PotgrondPage() {
 return <main>
  <div className="container">
   <nav className="crumb" aria-label="Broodkruimel"><Link href="/">Home</Link> / <Link href="/moestuin-verzorgen/">Moestuin verzorgen</Link> / Potgrond</nav>
   <header className="pagehead">
    <div className="eyebrow">Moestuin verzorgen · Grond en wortels</div>
    <h1>Welke potgrond kies je voor je balkonmoestuin?</h1>
    <p className="lead">In een balkonbak groeien wortels in een beperkte hoeveelheid grond. De juiste potgrond moet water vasthouden, voldoende lucht doorlaten en passen bij de planten die je kweekt. Voor veel groenten is een turfvrije universele potgrond geschikt, maar voor zaailingen en blauwe bessen is een ander mengsel vaak beter.</p>
   </header>
  </div>
  <section className="section container" style={{paddingTop:0}}>
   <div className="banner">
    <div className="eyebrow" style={{color:'#d3eab5'}}>De eenvoudigste keuze</div>
    <h2>Begin met turfvrije potgrond die past bij het gewas</h2>
    <p>Voor sla, radijs, tomaten en veel andere groenten kun je doorgaans een turfvrij mengsel voor potten en bakken gebruiken. Voor het opkweken van zaden is speciale zaaigrond handig; blauwe bessen vragen zure grond. Gebruik niet automatisch dezelfde zak voor al je planten.</p>
    <p>Controleer expliciet of er <em>turfvrij</em> op de verpakking staat. Termen zoals 'natuurlijk' of 'biologisch' betekenen niet per definitie dat een product zonder turf is gemaakt.</p>
   </div>
  </section>
  <section className="section container" style={{paddingTop:0}}>
   <div className="section-head"><div><div className="eyebrow">Kiezen per toepassing</div><h2>Vier soorten potgrond vergeleken</h2></div><p>De bestemming is belangrijker dan een mooie zak of een algemene claim dat een grondsoort overal voor geschikt is.</p></div>
   <div style={{overflowX:'auto'}}><table style={{width:'100%',minWidth:680,borderCollapse:'collapse',textAlign:'left'}}><thead><tr>{['Soort potgrond','Geschikt voor','Waarop letten?'].map(h=><th key={h} scope="col" style={{padding:'14px 12px',borderBottom:'2px solid #becdb6'}}>{h}</th>)}</tr></thead><tbody>{mixen.map(x=><tr key={x.naam}><th scope="row" style={{padding:'15px 12px',borderBottom:'1px solid var(--line)',verticalAlign:'top'}}>{x.naam}</th><td style={{padding:'15px 12px',borderBottom:'1px solid var(--line)',verticalAlign:'top'}}>{x.gebruik}</td><td style={{padding:'15px 12px',borderBottom:'1px solid var(--line)',verticalAlign:'top'}}>{x.aandacht}</td></tr>)}</tbody></table></div>
  </section>
  <section className="section" style={{background:'#f0f2e8'}}><div className="container">
   <div className="section-head"><div><div className="eyebrow">Van zak tot plant</div><h2>Je potten vullen in zes stappen</h2></div><p>Ook goede potgrond werkt pas goed als de pot, drainage en verzorging passen bij de plant.</p></div>
   <div className="grid">{stappen.map(s=><div className="tile" key={s[0]}><span className="pill">{s[0]} · Stap</span><h3>{s[1]}</h3><p>{s[2]}</p></div>)}</div>
  </div></section>
  <section className="section container"><div className="prose">
   <h2>Wat is het verschil tussen potgrond, zaaigrond en compost?</h2>
   <p>Potgrond is een groeimedium voor planten in bakken en potten. Zaaigrond is vaak fijner van structuur en bevat meestal minder toegevoegde voeding, omdat zeer jonge wortels gevoelig kunnen zijn voor een hoge concentratie meststoffen. Zelfgemaakte tuincompost is vooral een bodemverbeteraar: die kan helpen bij het aanvullen van potgrond, maar is niet hetzelfde als een gecontroleerd potgrondmengsel.</p>
   <p>De Royal Horticultural Society raadt ongestandaardiseerde zelfgemaakte mengsels af voor kwetsbare zaailingen, onder andere vanwege schimmelziekten die kiemplanten kunnen aantasten.</p>
   <h2>Kun je gewone tuinaarde in balkonbakken gebruiken?</h2>
   <p>Een bak volledig vullen met zware tuinaarde is doorgaans geen goed idee. Deze grond kan in een container dichtslibben, zwaar worden en onvoldoende lucht rond de wortels laten. Leemhoudende potgrond kan voor langjarige planten wel geschikt zijn, maar is een samengesteld mengsel en niet hetzelfde als willekeurige aarde uit een tuin.</p>
   <p>Op een balkon telt bovendien het gewicht van vochtige grond. Bekijk daarom <Link href="/balkon-inrichten/gewicht-balkonmoestuin/" style={{textDecoration:'underline'}}>hoe je het gewicht van een balkonmoestuin beoordeelt</Link>.</p>
   <h2>Welke potgrond is geschikt voor tomaten en paprika?</h2>
   <p>Voor deze vruchtgroenten is een geschikte turfvrije potgrond voor groenten of containers doorgaans een goede basis. Ze groeien lang en gebruiken veel voeding, zeker tijdens bloei en vruchtzetting. Lees daarom op de verpakking hoelang de beginbemesting werkt en vul later voeding aan als dat nodig is. Extra mest toevoegen vanaf de eerste dag is niet automatisch beter.</p>
   <h2>Waarom hebben blauwe bessen zure potgrond nodig?</h2>
   <p>Blauwe bessen groeien in grond met een lage pH, vaak rond 4 tot 5,5. In gewone potgrond kan de zuurgraad te hoog liggen, waardoor voedingsstoffen zoals ijzer minder beschikbaar worden. Gebruik daarom een geschikt turfvrij mengsel voor zuurminnende planten. De verzorging staat verder uitgelegd in <Link href="/fruit-kweken/blauwe-bessen-kweken-in-pot/" style={{textDecoration:'underline'}}>blauwe bessen kweken in pot</Link>.</p>
   <h2>Hebben mediterrane kruiden andere potgrond nodig?</h2>
   <p>Tijm, rozemarijn en vergelijkbare kruiden waarderen meestal een goed doorlatend mengsel en verdragen geen langdurig drijfnatte wortels. Peterselie en munt houden tijdens de groei doorgaans van een gelijkmatiger vochtige potgrond. Zet daarom niet alle kruiden in één bak met één waterregime. Bekijk ook <Link href="/kruiden-kweken/munt-kweken-in-pot/" style={{textDecoration:'underline'}}>munt</Link> en <Link href="/kruiden-kweken/basilicum-kweken-in-pot/" style={{textDecoration:'underline'}}>basilicum</Link>.</p>
   <h2>Waarom kiezen voor potgrond zonder turf?</h2>
   <p>Turfwinning beschadigt kwetsbare veengebieden en kan opgeslagen koolstof vrijmaken. Er zijn tegenwoordig turfvrije potgronden met bijvoorbeeld compostschors, kokosvezel, leem of andere bestanddelen. Zulke mengsels verschillen in hoe snel ze vocht opnemen en vasthouden. Controleer daarom de vochtigheid van de pot, ook als je eerder altijd met hetzelfde gietschema werkte.</p>
   <h2>Moet je hydrokorrels onder in de pot leggen?</h2>
   <p>Een dikke laag korrels is geen vervanging voor gaten in de bodem. In een afgesloten pot kan water zich nog steeds ophopen, met zuurstoftekort voor de wortels als gevolg. De eerste prioriteit is een pot die werkelijk kan afwateren. Gebruik het hele bruikbare potvolume voor de wortels, tenzij het gekozen teeltsysteem anders voorschrijft.</p>
   <h2>Wanneer moet je de potgrond vervangen?</h2>
   <p>Bij eenjarige groenten kun je na de oogst plantenresten verwijderen en beoordelen of de grond nog een goede structuur heeft. In gezonde grond kun je soms een deel hergebruiken na aanvulling met verse potgrond of geschikte compost en voeding. Gebruik geen duidelijk ziek of sterk vervuild materiaal voor nieuwe kwetsbare planten. Bij meerjarige struiken is periodiek verversen van de bovenlaag en zo nodig verpotten vaak praktischer dan ieder jaar de hele kluit uiteenhalen.</p>
   <h2>Hoeveel liter potgrond heb je nodig?</h2>
   <p>Bereken voor een rechthoekige bak de binnenlengte × binnenbreedte × vulhoogte in centimeters en deel door 1.000. Een bak die binnenin 60 × 30 × 25 cm meet, heeft bijvoorbeeld ongeveer 45 liter inhoud vóór aftrek van de ruimte die je bovenaan openlaat. Controleer de werkelijke binnenmaten en koop niet automatisch een overmaat aan zakken. Het aantal liters zegt overigens niets definitiefs over het natte gewicht.</p>
   <h2>Verder lezen</h2>
   <p>Lees ook <Link href="/moestuin-verzorgen/water-geven/" style={{textDecoration:'underline'}}>wanneer je balkonplanten water geeft</Link>, <Link href="/balkon-inrichten/moestuin-in-bakken/" style={{textDecoration:'underline'}}>een moestuin in bakken inrichten</Link> en het overzicht <Link href="/moestuin-verzorgen/" style={{textDecoration:'underline'}}>moestuin verzorgen</Link>.</p>
   <div className="notice"><strong>Bronnen en redactionele transparantie</strong><p><a href="https://www.rhs.org.uk/vegetables/containers" target="_blank" rel="noopener noreferrer">RHS — Vegetables in containers</a>, <a href="https://www.rhs.org.uk/container-gardening/growing-plants-in-containers" target="_blank" rel="noopener noreferrer">RHS — Growing plants in containers</a> en <a href="https://www.rhs.org.uk/soil-composts-mulches/peat-free" target="_blank" rel="noopener noreferrer">RHS — Peat-free composts</a>.</p><p style={{marginBottom:0}}>Deze gids steunt op publicaties over containerteelt. Er zijn geen eigen potgrondtesten of productvergelijkingen uitgevoerd.</p></div>
  </div></section>
 </main>;
}