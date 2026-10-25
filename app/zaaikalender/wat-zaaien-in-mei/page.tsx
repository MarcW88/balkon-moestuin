import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Wat zaaien in mei? Zaaikalender voor je balkon',
  description: 'Wat kun je in mei zaaien op je balkon? Ontdek welke groenten direct in bakken kunnen, wanneer je bonen en courgettes zaait en hoe je vorst vermijdt.',
  alternates: { canonical: '/zaaikalender/wat-zaaien-in-mei/' },
  robots: { index: false, follow: true },
};

const gewassen = [
  { naam: 'Radijs en pluksla', moment: 'De hele maand bij geschikt weer', plek: 'Direct buiten in een bak', tip: 'Zaai kleine hoeveelheden na elkaar zodat niet alles tegelijk rijp is.' },
  { naam: 'Wortel en rode biet', moment: 'Vanaf begin mei als de grond geschikt is', plek: 'Direct buiten', tip: 'Gebruik een diep genoeg vat en dun zaailingen uit volgens de zaadverpakking.' },
  { naam: 'Snijbiet en rucola', moment: 'Gedurende mei', plek: 'Direct buiten', tip: 'Bij warmte en droogte vaker de wortelzone controleren.' },
  { naam: 'Stok- en sperziebonen', moment: 'Vooral vanaf half mei bij warme grond', plek: 'Direct buiten of eerst beschut', tip: 'Wacht op voldoende bodemwarmte; stokbonen hebben een stevige klimhulp nodig.' },
  { naam: 'Courgette en pompoen', moment: 'Binnen nog mogelijk; buiten na vorstgevaar', plek: 'Voorzaaien of later direct buiten', tip: 'Eén volgroeide courgette neemt veel ruimte in op het balkon.' },
  { naam: 'Komkommer', moment: 'Na voldoende opwarming en zonder nachtvorst', plek: 'Eerst binnen of later buiten', tip: 'Kies een geschikt buitenteelt- of compact ras en voorzie steun.' },
  { naam: 'Basilicum en dille', moment: 'In mei, afhankelijk van warmte', plek: 'Binnen of buiten na koude nachten', tip: 'Basilicum is gevoeliger voor kou dan bijvoorbeeld peterselie.' },
  { naam: 'Tomaat en paprika', moment: 'Reeds opgekweekte planten afharden', plek: 'Buiten zetten wanneer nachten zacht blijven', tip: 'Dit is vooral uitplanten, niet de ideale maand om opnieuw vanaf zaad te beginnen.' },
];

const stappen = [
 ['01','Controleer de nachttemperatuur','IJsheiligen rond half mei is een handige kalenderherinnering, maar geen garantie dat de vorst definitief voorbij is.'],
 ['02','Zaai koele groenten in kleine porties','Gebruik een paar rijen radijs, sla of rucola en laat ruimte vrij voor de volgende zaaironde.'],
 ['03','Wacht met warme teelten op warme grond','Bonen, courgettes, komkommers en pompoenen kiemen en groeien slecht bij te lage temperaturen.'],
 ['04','Geef elke plant voldoende ruimte','Een bak voor radijs is niet gelijk aan de grote pot die een volwassen courgette of tomaat nodig heeft.'],
 ['05','Laat voorgezaaide planten afharden','Laat binnen opgekweekte zaailingen geleidelijk wennen aan daglicht, wind en koelere nachten.'],
 ['06','Houd water en drainage in balans','Mei kan droge dagen, felle zon en langdurige regen brengen. Controleer het substraat en vrije afwateringsgaten.'],
];

export default function MeiZaaikalenderPage() {
 return <main>
 <div className="container">
   <nav className="crumb" aria-label="Broodkruimel"><Link href="/">Home</Link> / <Link href="/zaaikalender/">Zaaikalender</Link> / Wat zaaien in mei</nav>
   <header className="pagehead"><div className="eyebrow">Zaaikalender · Mei</div><h1>Wat kun je zaaien in mei op je balkon?</h1><p className="lead">Mei is de overgang van voorjaarsgroenten naar de eerste echte zomerteelten. Radijs, sla en wortelen kun je vaak direct buiten zaaien. Na het verdwijnen van het vorstrisico volgen bonen, courgette en komkommer. Voor tomaten en paprika's is mei meestal vooral de maand om de binnen opgekweekte planten geleidelijk buiten te zetten.</p></header>
 </div>
 <section className="section container" style={{paddingTop:0}}>
  <div className="banner"><div className="eyebrow" style={{color:'#d3eab5'}}>Kort antwoord</div><h2>Voor en na half mei zijn de mogelijkheden anders</h2><p>Bij geschikt weer kun je al vroeg in mei radijs, sla, rucola, snijbiet, wortel en biet direct in bakken zaaien. Bonen, courgettes, pompoenen en komkommers wachten liever op warme grond en het einde van het vorstgevaar. IJsheiligen is een bruikbaar ijkpunt, maar kijk naar de actuele nachttemperaturen en de omstandigheden op je balkon.</p><p>Grote zomergroenten hebben aanzienlijk meer wortelruimte en voeding nodig dan jonge plantjes suggereren. Plan die ruimte voordat je zaait.</p></div>
 </section>
 <section className="section container" style={{paddingTop:0}}>
  <div className="section-head"><div><div className="eyebrow">Overzicht per gewas</div><h2>Welke groenten zaai je in mei?</h2></div><p>Deze tabel is afgestemd op gewone Nederlandse balkons. De gekozen variëteit, beschutting en temperatuur gaan voor op een vaste zaaidatum.</p></div>
  <div style={{overflowX:'auto'}}><table style={{width:'100%',minWidth:740,borderCollapse:'collapse',textAlign:'left'}}>
    <thead><tr>{['Gewas','Wanneer','Waar','Let op'].map(h=><th key={h} scope="col" style={{padding:'14px 12px',borderBottom:'2px solid #becdb6'}}>{h}</th>)}</tr></thead>
    <tbody>{gewassen.map(g=><tr key={g.naam}><th scope="row" style={{padding:'15px 12px',borderBottom:'1px solid var(--line)',verticalAlign:'top'}}>{g.naam}</th><td style={{padding:'15px 12px',borderBottom:'1px solid var(--line)',verticalAlign:'top'}}>{g.moment}</td><td style={{padding:'15px 12px',borderBottom:'1px solid var(--line)',verticalAlign:'top'}}>{g.plek}</td><td style={{padding:'15px 12px',borderBottom:'1px solid var(--line)',verticalAlign:'top'}}>{g.tip}</td></tr>)}</tbody>
  </table></div>
 </section>
 <section className="section" style={{background:'#f0f2e8'}}><div className="container">
  <div className="section-head"><div><div className="eyebrow">Praktische volgorde</div><h2>Je balkonmoestuin in mei starten in zes stappen</h2></div><p>Met deze aanpak geef je jonge planten een goede start zonder ze aan onnodige kou bloot te stellen.</p></div>
  <div className="grid">{stappen.map(s=><div className="tile" key={s[0]}><span className="pill">{s[0]} · Stap</span><h3>{s[1]}</h3><p>{s[2]}</p></div>)}</div>
 </div></section>
 <section className="section container"><div className="prose">
  <h2>Wat kun je begin mei buiten zaaien?</h2><p>Radijs, pluksla, rucola, snijbiet, wortel en rode biet zijn meestal prima kandidaten voor directe zaai in potten of bakken als de omstandigheden goed zijn. Kies niet te veel soorten tegelijk en houd rekening met de volwassen plantafstand. Wortelen zaai je direct op de uiteindelijke plek om beschadiging van de penwortel te voorkomen. Voor radijs vind je details bij <Link href="/groenten-kweken/radijs-kweken-in-pot/" style={{textDecoration:'underline'}}>radijs kweken in pot</Link>.</p>
  <h2>Wat betekent IJsheiligen voor een balkonmoestuin?</h2><p>IJsheiligen valt traditioneel rond 11 tot en met 14 mei en wordt vaak gebruikt als herinnering aan het risico op late voorjaarsvorst. De datum is geen meteorologische garantie. In een koude periode kunnen gevoelige planten ook daarna schade oplopen. Kijk daarom naar de weersverwachting, de temperatuur op je eigen balkon en de behoefte van de plant voordat je uitplant.</p>
  <h2>Wanneer mag je sperziebonen zaaien?</h2><p>Bonen houden van warmere grond. Begin bij voorkeur na half mei wanneer de bodem goed is opgewarmd; bij een koude meimaand is later zaaien verstandiger. Lage struikbonen passen vaak makkelijker in bakken dan stokbonen. Die laatste hebben stevige ondersteuning nodig, ook als de wind op een hoger balkon hard kan waaien.</p>
  <h2>Hoe zaai je courgette en pompoen in mei?</h2><p>Je kunt deze snelgroeiende planten aan het begin van mei nog binnenshuis voorzaaien, of na het vorstgevaar rechtstreeks buiten zaaien. Ze vragen veel ruimte en vocht. Een courgette kan een groot deel van een klein balkon innemen; controleer daarom vooraf of de gekozen soort en de pot daadwerkelijk passen. De RHS raadt aan uitgeplante jonge planten pas buiten te zetten als het vorstrisico voorbij is.</p>
  <h2>Is mei een goede maand voor komkommer?</h2><p>Komkommers hebben warmte nodig. Voorzaaien onder beschutting kan nog, en rechtstreeks buiten zaaien kan pas bij een voldoende warme, beschutte plek. Gebruik een ras dat geschikt is voor buitenteelt en houd rekening met klimsteun, wind en watergift. Lees <Link href="/groenten-kweken/komkommer-kweken-in-pot/" style={{textDecoration:'underline'}}>komkommer kweken in pot</Link>.</p>
  <h2>Kun je tomaten en paprika's nu buiten zetten?</h2><p>Dat kan wanneer de nachten voldoende zacht blijven en de planten zijn afgehard. Zet ze eerst gedurende korte perioden beschut buiten, bouw dat geleidelijk op en haal ze terug bij koude. Tomaten en paprika's groeien het beste in een zonnige plek met een geschikte potmaat. Zie <Link href="/groenten-kweken/tomaten-kweken-in-pot/" style={{textDecoration:'underline'}}>tomaten in pot</Link> en <Link href="/groenten-kweken/paprika-kweken-in-pot/" style={{textDecoration:'underline'}}>paprika in pot</Link>.</p>
  <h2>Welke kruiden zaai je in mei?</h2><p>Dille, koriander en peterselie kun je in geschikte omstandigheden in potten zaaien. Basilicum vraagt meer warmte en bescherming tegen koude nachten. Bieslook groeit vaak gemakkelijker op een beschutte buitenplek dan basilicum. Bekijk <Link href="/kruiden-kweken/basilicum-kweken-in-pot/" style={{textDecoration:'underline'}}>basilicum</Link> en <Link href="/kruiden-kweken/peterselie-kweken-in-pot/" style={{textDecoration:'underline'}}>peterselie</Link>.</p>
  <h2>Hoe voorkom je dat alles tegelijk geoogst moet worden?</h2><p>Bij snelgroeiende teelten zoals radijs, rucola en pluksla kun je iedere keer een kleine hoeveelheid zaaien. Pas een volgende zaaironde aan de groei en beschikbare ruimte aan, in plaats van de hele bak direct vol te maken. Zo kunnen late zaaisels de plek van eerdere oogsten innemen. Bij grote planten zoals courgette werkt deze strategie minder goed door hun omvang.</p>
  <h2>Hoeveel water heeft een balkonmoestuin nodig in mei?</h2><p>Dat verschilt per potgrootte, zon, wind en temperatuur. Kleine bakken kunnen snel uitdrogen, maar langdurig natte grond kan wortels beschadigen. Controleer de vochtigheid een paar centimeter diep en zorg voor open afwateringsgaten. Lees de gidsen over <Link href="/moestuin-verzorgen/water-geven/" style={{textDecoration:'underline'}}>water geven</Link> en <Link href="/moestuin-verzorgen/drainage/" style={{textDecoration:'underline'}}>drainage</Link>.</p>
  <h2>Kun je in mei nog aardappelen planten?</h2><p>Voor sommige aardappelrassen en omstandigheden kan een latere aanplant nog lukken, maar mei is niet voor alle pootaardappelen ideaal. Kijk naar het ras en de gewenste oogsttijd, en gebruik geschikt pootgoed. Voor een balkon met weinig ruimte kan een kweekzak een praktische oplossing zijn. Bekijk <Link href="/groenten-kweken/aardappelen-kweken-in-zak/" style={{textDecoration:'underline'}}>aardappelen kweken in zak</Link>.</p>
  <h2>Wat wordt belangrijk in juni?</h2><p>In juni verschuift de aandacht naar doorgroeiende vruchtplanten, water geven, voeding en het blijven zaaien van snelle gewassen. Houd je balkon overzichtelijk en let op de totale belasting van volle potten. Bekijk de <Link href="/zaaikalender/" style={{textDecoration:'underline'}}>zaaikalender</Link>, vergelijk met <Link href="/zaaikalender/wat-zaaien-in-april/" style={{textDecoration:'underline'}}>april</Link> en lees over <Link href="/balkon-inrichten/gewicht-balkonmoestuin/" style={{textDecoration:'underline'}}>gewicht en veiligheid</Link>.</p>
  <div className="notice"><strong>Bronnen en transparantie</strong><p><a href="https://www.rhs.org.uk/advice/grow-your-own/in-month/may-jobs" target="_blank" rel="noopener noreferrer">RHS — May jobs</a>, <a href="https://www.intratuin.nl/inspiratie/moestuinkalender-mei" target="_blank" rel="noopener noreferrer">Intratuin — Moestuinkalender mei</a> en <a href="https://www.intratuin.be/inspiratie/zaaikalender-moestuin" target="_blank" rel="noopener noreferrer">Intratuin — Zaaikalender moestuin</a>.</p><p style={{marginBottom:0}}>Dit zijn algemene teeltadviezen voor een Nederlands balkon. Er zijn geen eigen proeven uitgevoerd en de werkelijke nachttemperaturen kunnen lokaal afwijken.</p></div>
 </div></section>
 </main>;
}