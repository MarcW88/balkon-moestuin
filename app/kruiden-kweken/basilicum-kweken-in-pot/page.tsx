import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Basilicum kweken in pot: zaaien, verzorgen en oogsten',
  description: 'Basilicum kweken in een pot op je balkon? Zo kies je de plek, zaai je basilicum, geef je water en snoei je voor nieuwe blaadjes.',
  alternates: {canonical: '/kruiden-kweken/basilicum-kweken-in-pot/'},
  robots: {index: false, follow: true},
};

const varianten = [
  {naam:'Gewone groene basilicum',smaak:'Herkenbare, zachte basilicumsmaak',geschikt:'Verse pasta, salades en pesto',letop:'Vraagt veel warmte en licht; niet vorstbestendig.'},
  {naam:'Thaise basilicum',smaak:'Kruidig, met anijsachtige tonen',geschikt:'Wokgerechten, curry en noedels',letop:'Eveneens warmteminnend; kies het ras voor de gewenste smaak.'},
  {naam:'Kleinbladige basilicum',smaak:'Aromatische, kleinere blaadjes',geschikt:'Een compacte kruidenpot en regelmatig plukken',letop:'Ook een kleine plant heeft goede lichtinval nodig.'}
];
const stappen = [
  {nummer:'01',titel:'Zaai warm en licht binnen',tekst:'Zaai van maart tot juli in kleine potjes met vochtige zaaigrond. Basilicum kiemt goed rond 20 °C. Leg de zaadjes dun op het oppervlak, volgens de aanwijzingen op het zakje.'},
  {nummer:'02',titel:'Geef zaailingen ruimte',tekst:'Zet op een lichte plek en voorkom dat de grond langdurig nat is. Zodra de plantjes meerdere echte blaadjes hebben, kunnen ze in eigen potjes.'},
  {nummer:'03',titel:'Wacht met buiten zetten',tekst:'Basilicum houdt niet van kou of nachtvorst. Laat plantjes rustig wennen aan buitenlucht en zet ze pas in de vroege zomer buiten wanneer de nachten voldoende zacht blijven.'},
  {nummer:'04',titel:'Plant in een pot met drainage',tekst:'Een pot van minstens circa 20 cm breed en diep is voor een plant een bruikbaar uitgangspunt. Neem geschikte, bij voorkeur turfvrije potgrond en zorg voor gaten in de bodem.'},
  {nummer:'05',titel:'Houd de grond licht vochtig',tekst:'Controleer de aarde regelmatig en geef bij droogte water, liefst in de ochtend. Laat de wortels niet langdurig in natte grond staan.'},
  {nummer:'06',titel:'Pluk toppen voor nieuwe scheuten',tekst:'Knip of pluk jonge scheuttoppen boven een bladpaar. De plant kan vanuit de bladoksels nieuwe zijtakjes maken. Haal bloemstengels weg als je vooral blad wilt oogsten.'}
];
export default function BasilicumPage(){return <main>
  <div className="container">
    <nav className="crumb" aria-label="Broodkruimel"><Link href="/">Home</Link> / <Link href="/kruiden-kweken/">Kruiden kweken</Link> / Basilicum kweken in pot</nav>
    <header className="pagehead">
      <div className="eyebrow">Kruiden kweken · Warmteminnende kruiden</div>
      <h1>Basilicum kweken in pot op je balkon</h1>
      <p className="lead">Basilicum is een heerlijk kruid voor een zonnig balkon, maar het is gevoeliger voor kou dan veel andere keukenkruiden. Met een warme plek, een pot die water kan afvoeren en regelmatig plukken kun je de hele zomer verse blaadjes oogsten. Begin niet te vroeg buiten: koude nachten zijn vaak de grootste spelbreker.</p>
    </header>
  </div>
  <section className="section container" style={{paddingTop:0}}>
    <div className="banner">
      <div className="eyebrow" style={{color:'#d3eab5'}}>De belangrijkste keuze</div>
      <h2>Een warme plek is belangrijker dan een dure kruidenpot</h2>
      <p>Geef basilicum zoveel mogelijk zon, beschutting en een goed doorlatende potgrond. Op een balkon in de schaduw groeit het vaak traag en met zwakke stengels. Ook een zonnig balkon is in april nog niet automatisch warm genoeg: zet basilicum pas buiten wanneer de kans op koude nachten voldoende is geweken.</p>
      <p>Heb je weinig zon? Vergelijk dan eerst de mogelijkheden in onze gids over <Link href="/moestuin-beginnen/balkon-met-weinig-zon/" style={{color:'#fff',textDecoration:'underline'}}>groenten en kruiden met weinig zon</Link>.</p>
    </div>
  </section>
  <section className="section container" style={{paddingTop:0}}>
    <div className="section-head"><div><div className="eyebrow">Smaak en groeivorm</div><h2>Welke basilicum kun je in een pot kweken?</h2></div><p>Veel soorten zijn geschikt voor een pot. Kies vooral op smaak, gebruik en groeivorm; alle soorten blijven warmteminnend.</p></div>
    <div style={{overflowX:'auto'}}><table style={{width:'100%',minWidth:650,borderCollapse:'collapse',textAlign:'left'}}><thead><tr>{['Type','Smaak','Gebruik','Waarop letten?'].map(h=><th scope="col" key={h} style={{padding:'14px 12px',borderBottom:'2px solid #becdb6'}}>{h}</th>)}</tr></thead><tbody>{varianten.map(v=><tr key={v.naam}><th scope="row" style={{padding:'15px 12px',verticalAlign:'top',borderBottom:'1px solid var(--line)'}}>{v.naam}</th><td style={{padding:'15px 12px',verticalAlign:'top',borderBottom:'1px solid var(--line)'}}>{v.smaak}</td><td style={{padding:'15px 12px',verticalAlign:'top',borderBottom:'1px solid var(--line)'}}>{v.geschikt}</td><td style={{padding:'15px 12px',verticalAlign:'top',borderBottom:'1px solid var(--line)'}}>{v.letop}</td></tr>)}</tbody></table></div>
  </section>
  <section className="section" style={{background:'#f0f2e8'}}>
    <div className="container">
      <div className="section-head"><div><div className="eyebrow">Van zaaien tot oogsten</div><h2>Basilicum kweken in zes stappen</h2></div><p>Voor een langere oogst kun je om de paar weken een kleine portie zaaien in plaats van alle planten tegelijk.</p></div>
      <div className="grid">{stappen.map(s=><div className="tile" key={s.nummer}><span className="pill">{s.nummer} · Stap</span><h3>{s.titel}</h3><p>{s.tekst}</p></div>)}</div>
    </div>
  </section>
  <section className="section container"><div className="prose">
    <h2>Hoeveel zon heeft basilicum nodig?</h2>
    <p>Basilicum groeit het best in een warme, zonnige en beschutte omgeving. De University of Minnesota Extension noemt ongeveer zes tot acht uur helder licht als goede richtlijn. Op een open balkon kun je de pot op een plek met directe zon zetten, maar wees alert op uitdroging en sterke wind. Bij lage temperaturen groeit basilicum trager en kan het blad schade oplopen.</p>
    <p>De <Link href="/moestuin-beginnen/balkon-op-het-zuiden/" style={{textDecoration:'underline'}}>gids voor een zonnig zuidbalkon</Link> helpt bij het kiezen van een geschikte plek.</p>
    <h2>Welke potgrond en potmaat kies je?</h2>
    <p>Voor één volwassen plant is een container van minstens ongeveer 20 cm breed en diep een goed begin. Kies een stabiele pot met gaten onderin en een luchtige potgrond die water kan afvoeren. Zet meerdere planten niet te dicht op elkaar; de RHS noemt ten minste ongeveer 10 cm tussenruimte. Een te volle pot kan sneller tot zwakke groei en vroege bloei leiden.</p>
    <h2>Hoe vaak geef je basilicum water?</h2>
    <p>Controleer met je vinger of de potgrond nog vochtig is. Geef water wanneer dat nodig is en probeer de aarde gelijkmatig vochtig te houden zonder wortels voortdurend nat te laten staan. Een kleine pot droogt bij wind of zon snel uit, terwijl een koele schaduwplek minder water kan vragen. Geef bij voorkeur 's ochtends water aan de grond en maak het blad niet onnodig nat.</p>
    <h2>Hoe knip je basilicum zonder de plant kaal te maken?</h2>
    <p>Oogst niet uitsluitend losse grote bladeren onderaan, maar knip een jonge scheut vlak boven een paar blaadjes af. Vanuit de bladoksels kunnen nieuwe scheuten ontstaan, waardoor de plant voller wordt. Pluk verspreid over de plant en laat genoeg gezond blad zitten om verder te groeien. Verwijder bloemstengels vroeg als je zo lang mogelijk mals blad wilt oogsten.</p>
    <h2>Kan basilicum uit de supermarkt op het balkon?</h2>
    <p>Dat kan, maar supermarktpotjes bevatten vaak veel dicht opeen gekweekte plantjes. Ze zijn bovendien meestal in beschermde omstandigheden opgegroeid. Splits ze voorzichtig in kleinere groepjes, pot ze apart op en laat ze geleidelijk wennen aan buiten. Zet ze niet meteen na aankoop in koude wind of volle middagzon.</p>
    <h2>Wat als de bladeren geel worden of de plant slap hangt?</h2>
    <p>Controleer eerst het vocht en de temperatuur. Slap blad kan zowel bij uitdroging als bij te natte wortels voorkomen. Gele bladeren kunnen ook wijzen op te weinig licht of een tekort aan voedingsstoffen in uitgeputte potgrond. Kijk daarom naar de omstandigheden in plaats van meteen mest te geven. Controleer jonge scheuten ook op bladluizen.</p>
    <h2>Moet je basilicum bemesten?</h2>
    <p>Potgrond bevat maar een beperkte hoeveelheid voeding. Als de plant langere tijd in dezelfde pot staat, kan een verdunde, uitgebalanceerde vloeibare meststof helpen. Volg de verpakking en overdrijf niet. De RHS raadt juist af om voor basilicum standaard een kaliumrijke tomatenvoeding te gebruiken, omdat je vooral bladgroei wilt stimuleren.</p>
    <h2>Kan basilicum de Nederlandse winter overleven?</h2>
    <p>Gewone basilicum is vorstgevoelig en wordt buiten doorgaans als eenjarige gekweekt. Je kunt de plant voor koude nachten binnenhalen op een warme, zeer lichte vensterbank, maar de donkere wintermaanden maken doorgroei lastig. Nieuwe planten zaaien in het volgende voorjaar is vaak eenvoudiger.</p>
    <h2>Verder met je balkonkruidentuin</h2>
    <p>Ontdek <Link href="/kruiden-kweken/" style={{textDecoration:'underline'}}>andere kruiden voor het balkon</Link>, bekijk <Link href="/moestuin-beginnen/wat-heb-je-nodig/" style={{textDecoration:'underline'}}>de starterslijst voor potten en potgrond</Link> of raadpleeg de <Link href="/zaaikalender/" style={{textDecoration:'underline'}}>zaaikalender</Link> voor het juiste moment.</p>
    <div className="notice"><strong>Bronnen en werkwijze</strong><p><a href="https://www.rhs.org.uk/herbs/basil/grow-your-own" target="_blank" rel="noopener noreferrer">Royal Horticultural Society — Basil</a>, <a href="https://www.rhs.org.uk/herbs/containers" target="_blank" rel="noopener noreferrer">RHS — Herbs in containers</a> en <a href="https://extension.umn.edu/garden-and-home/yard-and-garden/yard-and-garden-problems/growing-basil" target="_blank" rel="noopener noreferrer">University of Minnesota Extension — Growing basil</a>.</p><p style={{marginBottom:0}}>Dit is een gids op basis van horticulturele publicaties. We claimen geen eigen basilicumteeltproeven of producttests.</p></div>
  </div></section>
</main>}