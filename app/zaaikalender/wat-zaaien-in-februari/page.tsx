import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Wat zaaien in februari? Zaaikalender voor het balkon',
  description: 'Wat kun je in februari zaaien? Bekijk een overzicht voor binnen, onder glas en buiten, met tips voor paprika, sla, radijs en vroege aardappelen.',
  alternates: { canonical: '/zaaikalender/wat-zaaien-in-februari/' },
  robots: { index: false, follow: true },
};

const gewassen = [
  { naam: 'Paprika en peper', binnen: 'Ja, warm en met veel licht', buiten: 'Nee', advies: 'Een vroege start kan, maar zonder groeilamp is maart vaak gemakkelijker.' },
  { naam: 'Aubergine', binnen: 'Ja, met warmte en veel licht', buiten: 'Nee', advies: 'Een lang groeiseizoen is gunstig, maar voorkom slappe zaailingen.' },
  { naam: 'Pluksla', binnen: 'Ja, op een lichte en liever koele plek', buiten: 'Alleen beschut bij zacht weer', advies: 'Gebruik niet te warme, donkere kamers; voorkom dat zaailingen doorschieten.' },
  { naam: 'Radijs', binnen: 'Onder glas of in een koude bak', buiten: 'Alleen bij zachte omstandigheden', advies: 'Zaai bij voorkeur rechtstreeks in de uiteindelijke pot of bak.' },
  { naam: 'Tuinboon en erwt', binnen: 'Koel voorzaaien of onder glas', buiten: 'Soms in zachte perioden', advies: 'Let op drainage, natte grond, vorst en de rasinformatie.' },
  { naam: 'Spinazie', binnen: 'Onder beschutting mogelijk', buiten: 'Alleen bij milde omstandigheden', advies: 'Wacht bij koude, natte grond liever tot maart.' },
  { naam: 'Tomaat en komkommer', binnen: 'Meestal nog wachten voor balkonteelt', buiten: 'Nee', advies: 'Februari is vroeg; voor gewone buitenteelt zijn maart of april vaak praktischer.' },
];
const stappen = [
  ['01', 'Bekijk licht en temperatuur', 'Controleer waar jonge planten voldoende licht krijgen. Een warme kamer met weinig daglicht geeft snel dunne, lange zaailingen.'],
  ['02', 'Kies een beperkte start', 'Begin met pluksla onder beschutting of enkele paprika- en peperzaden als je goede opkweekomstandigheden hebt.'],
  ['03', 'Gebruik schone zaaibakjes', 'Kies potjes met drainagegaten en geschikt, bij voorkeur turfvrij zaaimengsel.'],
  ['04', 'Zaai volgens de verpakking', 'Zaadsoorten vragen verschillende kiemtemperaturen en zaaidiepten. Eén algemene methode werkt niet voor alles.'],
  ['05', 'Houd de grond licht vochtig', 'Gebruik een zachte waterstraal. Vermijd voortdurend doorweekte grond en zorg na opkomst voor lucht en licht.'],
  ['06', 'Plan het uitplanten', 'Zet warmteminnende planten niet meteen naar buiten. Laat ze later geleidelijk wennen wanneer de nachten veilig zacht zijn.'],
];

export default function FebruariZaaikalender() {
  return <main>
    <div className="container">
      <nav className="crumb" aria-label="Broodkruimel"><Link href="/">Home</Link> / <Link href="/zaaikalender/">Zaaikalender</Link> / Wat zaaien in februari</nav>
      <header className="pagehead">
        <div className="eyebrow">Zaaikalender · Februari</div>
        <h1>Wat kun je zaaien in februari op je balkon?</h1>
        <p className="lead">In februari worden de dagen langer, maar op een Nederlands balkon blijft het vaak koud en nat. Binnen en onder glas kun je voorzichtig met enkele groenten beginnen. Buiten zaaien is alleen verstandig als de omstandigheden en het gekozen ras geschikt zijn. Vooral voldoende licht maakt het verschil tussen een gezonde start en slappe zaailingen.</p>
      </header>
    </div>
    <section className="section container" style={{paddingTop:0}}>
      <div className="banner">
        <div className="eyebrow" style={{color:'#d3eab5'}}>Kort antwoord</div>
        <h2>Februari is vooral een maand om beschut voor te zaaien</h2>
        <p>Voor een gewone balkonmoestuin zijn sla onder glas, een vroege start met paprika of peper bij voldoende warmte en licht, en het voorkiemen van pootaardappelen logische werkzaamheden. Radijs, erwten en tuinbonen kunnen bij zacht weer onder beschutting mogelijk zijn. Onbeschermd buiten zaaien is nog onzeker; wacht bij vorst of aanhoudend natte potgrond.</p>
        <p>Zaai niet alles tegelijk. Wat je binnen begint, moet later ook kunnen doorgroeien en op tijd veilig naar buiten kunnen.</p>
      </div>
    </section>
    <section className="section container" style={{paddingTop:0}}>
      <div className="section-head"><div><div className="eyebrow">Binnen of buiten?</div><h2>Zaaikalender februari per gewas</h2></div><p>Deze tabel is een richtlijn voor Nederland. Het weer, de beschutting van je balkon en de rasverpakking gaan boven een vaste datum.</p></div>
      <div style={{overflowX:'auto'}}>
        <table style={{width:'100%',minWidth:720,borderCollapse:'collapse',textAlign:'left'}}>
          <thead><tr>{['Gewas','Binnen of onder glas','Buiten','Waarop letten?'].map(h=><th scope="col" key={h} style={{padding:'14px 12px',borderBottom:'2px solid #becdb6'}}>{h}</th>)}</tr></thead>
          <tbody>{gewassen.map(g=><tr key={g.naam}><th scope="row" style={{padding:'15px 12px',borderBottom:'1px solid var(--line)',verticalAlign:'top'}}>{g.naam}</th><td style={{padding:'15px 12px',borderBottom:'1px solid var(--line)',verticalAlign:'top'}}>{g.binnen}</td><td style={{padding:'15px 12px',borderBottom:'1px solid var(--line)',verticalAlign:'top'}}>{g.buiten}</td><td style={{padding:'15px 12px',borderBottom:'1px solid var(--line)',verticalAlign:'top'}}>{g.advies}</td></tr>)}</tbody>
        </table>
      </div>
    </section>
    <section className="section" style={{background:'#f0f2e8'}}>
      <div className="container"><div className="section-head"><div><div className="eyebrow">De eerste zaadbakjes</div><h2>Voorzaaien in zes stappen</h2></div><p>Een paar sterke plantjes leveren later meer gemak op dan een vensterbank vol te vroeg gezaaide groenten.</p></div><div className="grid">{stappen.map(s=><div className="tile" key={s[0]}><span className="pill">{s[0]} · Stap</span><h3>{s[1]}</h3><p>{s[2]}</p></div>)}</div></div>
    </section>
    <section className="section container"><div className="prose">
      <h2>Wat kun je in februari buiten zaaien?</h2>
      <p>Op een open balkon is buiten zaaien meestal nog onzeker. Bij zacht weer en een geschikte beschutte plek kun je met een ras voor de vroege teelt bijvoorbeeld radijs, tuinbonen, erwten of spinazie proberen. De RHS beperkt vroege buitensemingen nadrukkelijk tot milde streken en goed doorlatende, niet bevroren grond. Bij winterkou kun je beter wachten tot maart of april.</p>
      <h2>Kun je in februari paprika en peper voorzaaien?</h2>
      <p>Dat kan op een warme plek met veel licht. Paprika en peper hebben een relatief lang groeiseizoen, maar kiemplanten die in een warme en donkere kamer staan, worden gemakkelijk dun en slap. Wie geen groeilamp heeft, kan vaak beter tot maart wachten. Het is belangrijker dat de planten sterk groeien dan dat het eerste zaadje zo vroeg mogelijk kiemt. Bekijk ook <Link href="/groenten-kweken/paprika-kweken-in-pot/" style={{textDecoration:'underline'}}>paprika kweken in pot</Link>.</p>
      <h2>Is februari te vroeg voor tomaten?</h2>
      <p>Voor tomaten die uiteindelijk buiten op een Nederlands balkon groeien, is februari doorgaans vroeg. De RHS noemt zaaien vanaf half februari voor kasplanten, maar een balkon is geen verwarmde kas. Een in februari gezaaide tomaat vraagt lang binnen ruimte, warmte en licht voordat de nachten geschikt zijn. Maart is voor veel balkonmoestuiniers praktischer. Lees <Link href="/groenten-kweken/tomaten-kweken-in-pot/" style={{textDecoration:'underline'}}>tomaten kweken in pot</Link>.</p>
      <h2>Hoe zit het met sla en radijs?</h2>
      <p>Pluksla kun je onder glas of op een koele, zeer lichte vensterbank beginnen. Radijs groeit snel en wordt meestal liever direct op de uiteindelijke plek gezaaid, zodat de wortel niet wordt verstoord. Wacht buiten op een voldoende milde periode en voorkom dat de grond voortdurend nat blijft. Bekijk de aparte gids <Link href="/groenten-kweken/radijs-kweken-in-pot/" style={{textDecoration:'underline'}}>radijs kweken in pot</Link>.</p>
      <h2>Wat betekent zaaien onder glas als je geen kas hebt?</h2>
      <p>Een kleine koude bak of een beschermde kweekopstelling kan de omstandigheden iets verbeteren. Onder glas betekent niet dat het vanzelf vorstvrij blijft: een onverwachte koude nacht kan alsnog schade veroorzaken. Controleer overdag op oververhitting bij zon en zorg voor ventilatie om langdurig nat blad en schimmelproblemen te beperken.</p>
      <h2>Kun je pootaardappelen in februari al planten?</h2>
      <p>Voor de meeste balkons is februari vooral de maand om vroege pootaardappelen te laten voorkiemen. Zet ze in een lichte, koele en vorstvrije omgeving zodat korte, stevige kiemen ontstaan. Wanneer ze daarna in een zak kunnen worden geplant, hangt van het ras, de temperatuur en het vorstrisico af. Lees <Link href="/groenten-kweken/aardappelen-kweken-in-zak/" style={{textDecoration:'underline'}}>aardappelen kweken in zak</Link>.</p>
      <h2>Waarom worden mijn zaailingen lang en slap?</h2>
      <p>Dat komt vaak doordat er te weinig licht is in verhouding tot de temperatuur. Verplaats de zaailingen naar een lichtere plek, voorkom onnodig veel warmte en zaai minder vroeg. Laat zaaigrond niet uitdrogen, maar houd haar ook niet drijfnat. Overmatig water of slechte luchtcirculatie kan jonge wortels aantasten.</p>
      <h2>Welke andere klussen zijn nuttig in februari?</h2>
      <p>Controleer potten op schade na vorst en zorg dat de drainagegaten vrij zijn. Maak een plan voor zon en wind, bekijk je voorraad zaden en meet hoeveel bakken werkelijk op het balkon passen. Bij herfstframbozen die je voor één herfstoogst teelt, is februari meestal het moment om de oude stengels terug te knippen. Zie <Link href="/fruit-kweken/frambozen-kweken-in-pot/" style={{textDecoration:'underline'}}>frambozen in pot verzorgen</Link>.</p>
      <h2>Wat komt er in maart bij?</h2>
      <p>Met de langere dagen worden de mogelijkheden voor voorzaaien groter. Buiten blijft het weer bepalend; de overstap naar een onbeschut balkon kan voor warmteminnende planten pas veel later veilig zijn. Kijk in het <Link href="/zaaikalender/" style={{textDecoration:'underline'}}>overzicht van de zaaikalender</Link> en vergelijk met <Link href="/zaaikalender/wat-zaaien-in-januari/" style={{textDecoration:'underline'}}>januari</Link> om je planning op te bouwen.</p>
      <div className="notice"><strong>Bronnen en werkwijze</strong><p><a href="https://www.rhs.org.uk/advice/grow-your-own/in-month/february-jobs" target="_blank" rel="noopener noreferrer">RHS — February jobs</a>, <a href="https://www.rhs.org.uk/vegetables/seeds-sowing" target="_blank" rel="noopener noreferrer">RHS — Vegetable seed sowing</a>, <a href="https://www.rhs.org.uk/education-learning/school-gardening/resources/food-growing/month-by-month-guide-to-food-growing-spring-term" target="_blank" rel="noopener noreferrer">RHS — Month-by-month guide</a> en <a href="https://www.intratuin.nl/inspiratie/moestuinkalender-februari" target="_blank" rel="noopener noreferrer">Intratuin — Moestuinkalender februari</a>.</p><p style={{marginBottom:0}}>Deze gids gaat uit van een gebruikelijk Nederlands balkon. Er zijn geen eigen zaai- of kiemproeven uitgevoerd en plaatselijke weersomstandigheden kunnen sterk afwijken.</p></div>
    </div></section>
  </main>;
}