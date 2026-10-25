import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Wat zaaien in maart? Zaaikalender voor je balkon',
  description: 'Wat kun je in maart zaaien? Bekijk groenten voor buiten en binnen, met tips voor radijs, sla, erwten, tomaten, paprika en het voorkomen van vorstschade.',
  alternates: { canonical: '/zaaikalender/wat-zaaien-in-maart/' },
  robots: { index: false, follow: true },
};

const gewassen = [
  {gewas:'Radijs',binnen:'Niet nodig',buiten:'Ja, bij zacht weer',advies:'Zaai direct in de uiteindelijke pot. Koude, kletsnatte grond vertraagt de opkomst.'},
  {gewas:'Pluksla en rucola',binnen:'Ja, licht en koel',buiten:'Ja, beschut en bij geschikte temperatuur',advies:'Begin met kleine porties en houd potgrond gelijkmatig vochtig.'},
  {gewas:'Spinazie',binnen:'Eventueel onder glas',buiten:'Ja, bij geschikt weer',advies:'Een koele voorjaarsteelt past vaak beter dan hete zomerdagen.'},
  {gewas:'Erwten en tuinbonen',binnen:'Koel voorzaaien mogelijk',buiten:'Ja, bij geschikte grond en weer',advies:'Gebruik een voldoende diepe bak en steun voor hoger groeiende erwten.'},
  {gewas:'Wortelen en bieten',binnen:'Meestal niet nodig',buiten:'Ja, afhankelijk van ras en omstandigheden',advies:'Zaai wortelen direct waar ze moeten groeien; geef wortels de juiste potdiepte.'},
  {gewas:'Tomaten',binnen:'Ja, vanaf circa half maart',buiten:'Nee',advies:'Zaai op een zeer lichte plek en plant pas buiten wanneer nachten voldoende zacht zijn.'},
  {gewas:'Paprika en aubergine',binnen:'Ja, warm en zeer licht',buiten:'Nee',advies:'Lang groeiseizoen; warmte zonder licht geeft zwakke zaailingen.'},
  {gewas:'Komkommer en courgette',binnen:'Liever wachten tot april',buiten:'Nee',advies:'Groeien snel; vroeg gezaaide planten worden binnen te groot.'},
];
const checklist = [
 ['01','Maak onderscheid tussen binnen en buiten','Vroege blad- en wortelgroenten kunnen buiten als het weer meewerkt. Warmteminnende vruchtgroenten blijven voorlopig binnen.'],
 ['02','Controleer je balkon','Bekijk hoeveel direct licht op de bakken valt en of koude wind en langdurige regen een risico zijn.'],
 ['03','Kies de juiste bak','Radijs kan relatief ondiep; wortelen en erwten hebben meer wortelruimte nodig. Zorg altijd voor afwatering.'],
 ['04','Zaai volgens het zakje','Volg de rasgebonden diepte, temperatuur en plantafstand. Zaai liever kleine porties dan een volle bak tegelijk.'],
 ['05','Houd zaaigrond gelijkmatig vochtig','Gebruik een zachte straal en voorkom stilstaand water. Bescherm jonge zaailingen bij onverwachte nachtvorst.'],
 ['06','Plan het uitplanten','Verspeen binnen gekweekte planten als nodig en hard ze later geleidelijk af voordat ze naar het balkon gaan.'],
];
export default function MaartZaaikalender() { return <main>
<div className="container">
  <nav className="crumb" aria-label="Broodkruimel"><Link href="/">Home</Link> / <Link href="/zaaikalender/">Zaaikalender</Link> / Wat zaaien in maart</nav>
  <header className="pagehead">
    <div className="eyebrow">Zaaikalender · Maart</div>
    <h1>Wat kun je zaaien in maart op je balkon?</h1>
    <p className="lead">Maart is het begin van het echte zaaiseizoen voor veel balkonmoestuiniers. Bij zacht weer kun je buiten starten met radijs, sla, spinazie en erwten. Binnen is het tijd voor tomaten en andere warmteminnende gewassen. Toch kan het 's nachts nog vriezen: kijk naar het weer en naar de plek op je balkon voordat je begint.</p>
  </header>
</div>
<section className="section container" style={{paddingTop:0}}>
  <div className="banner">
    <div className="eyebrow" style={{color:'#d3eab5'}}>Kort antwoord</div>
    <h2>In maart kun je buiten beginnen, maar niet met alles</h2>
    <p>Radijs, sla, spinazie, erwten en tuinbonen kunnen onder geschikte omstandigheden buiten worden gezaaid. Tomaten, paprika en aubergine hebben nog een warme, lichte plek binnen nodig. Komkommer en courgette kun je voor een gewone balkonmoestuin doorgaans beter bewaren voor april. Zo voorkom je grote, kwetsbare planten op een donkere vensterbank.</p>
  </div>
</section>
<section className="section container" style={{paddingTop:0}}>
  <div className="section-head"><div><div className="eyebrow">Maart per gewas</div><h2>Wat zaai je binnen en wat zaai je buiten?</h2></div><p>Gebruik dit als richtlijn voor Nederland, niet als vaste datumgarantie. Ras, weer en beschutting blijven bepalend.</p></div>
  <div style={{overflowX:'auto'}}><table style={{width:'100%',minWidth:740,borderCollapse:'collapse',textAlign:'left'}}>
    <thead><tr>{['Gewas','Binnen','Buiten','Praktische tip'].map(x=><th scope="col" key={x} style={{padding:'14px 12px',borderBottom:'2px solid #becdb6'}}>{x}</th>)}</tr></thead>
    <tbody>{gewassen.map(x=><tr key={x.gewas}><th scope="row" style={{padding:'15px 12px',borderBottom:'1px solid var(--line)',verticalAlign:'top'}}>{x.gewas}</th><td style={{padding:'15px 12px',borderBottom:'1px solid var(--line)',verticalAlign:'top'}}>{x.binnen}</td><td style={{padding:'15px 12px',borderBottom:'1px solid var(--line)',verticalAlign:'top'}}>{x.buiten}</td><td style={{padding:'15px 12px',borderBottom:'1px solid var(--line)',verticalAlign:'top'}}>{x.advies}</td></tr>)}</tbody>
  </table></div>
</section>
<section className="section" style={{background:'#f0f2e8'}}><div className="container">
  <div className="section-head"><div><div className="eyebrow">Een goede start</div><h2>In maart zaaien in zes stappen</h2></div><p>Begin met een paar overzichtelijke gewassen en bouw uit als de temperaturen stijgen.</p></div>
  <div className="grid">{checklist.map(s=><div className="tile" key={s[0]}><span className="pill">{s[0]} · Stap</span><h3>{s[1]}</h3><p>{s[2]}</p></div>)}</div>
</div></section>
<section className="section container"><div className="prose">
  <h2>Welke groenten kun je in maart direct buiten zaaien?</h2>
  <p>Volgens de RHS zijn bij mild weer en geschikte, niet te natte grond onder meer radijs, wortel, biet, spinazie, sla, erwten en tuinbonen mogelijk. Op een balkon is de kleine hoeveelheid potgrond gevoeliger voor koude en uitdroging dan een tuinbed. Begin bij voorkeur met een beschutte bak en stel het zaaien uit als vorst of aanhoudende regen wordt verwacht.</p>
  <h2>Hoe zaai je radijs en sla op een balkon?</h2>
  <p>Radijs groeit snel en kun je het beste direct zaaien waar de knolletjes mogen groeien. Zorg voor voldoende afstand en vocht, zonder de bak doorweekt te houden. Pluksla kun je in kleine porties direct zaaien of onder beschutting opkweken. Daarmee spreid je de oogst. Lees verder bij <Link href="/groenten-kweken/radijs-kweken-in-pot/" style={{textDecoration:'underline'}}>radijs kweken in pot</Link> en <Link href="/groenten-kweken/sla-kweken-in-bak/" style={{textDecoration:'underline'}}>sla kweken in bak</Link>.</p>
  <h2>Wanneer zaai je tomaten in maart?</h2>
  <p>Voor een gewone balkonmoestuin is half tot eind maart meestal een geschikt startmoment om binnen voor te zaaien. Geef de zaailingen zoveel mogelijk licht en voorkom dat ze alleen door warmte snel omhoogschieten. Verspeen ze naar grotere potjes zodra ze daarvoor sterk genoeg zijn. Naar buiten mogen ze pas wanneer nachtvorst geen risico meer is en ze geleidelijk aan buiten zijn gewend. Bekijk <Link href="/groenten-kweken/tomaten-kweken-in-pot/" style={{textDecoration:'underline'}}>tomaten kweken in pot</Link>.</p>
  <h2>Kun je paprika en aubergine nog in maart zaaien?</h2>
  <p>Ja, maar ze groeien relatief langzaam en vragen warmte én goed licht bij het voorzaaien. Begin liefst vroeg in maart als je de juiste omstandigheden kunt bieden, en kies eventueel een compact en vroeg ras voor het balkon. Een koele, donkere vensterbank is geen betrouwbare kweekplek. Volg voor paprika ook de gids <Link href="/groenten-kweken/paprika-kweken-in-pot/" style={{textDecoration:'underline'}}>paprika kweken in pot</Link>.</p>
  <h2>Waarom wacht je liever met komkommer en courgette?</h2>
  <p>Deze gewassen groeien na de kieming snel en zijn gevoelig voor kou. Wie ze in maart binnen begint, moet vaak lang grote planten onderhouden voordat ze naar buiten mogen. Voor een onbeschut Nederlands balkon is april doorgaans praktischer voor het voorzaaien. Lees <Link href="/groenten-kweken/komkommer-kweken-in-pot/" style={{textDecoration:'underline'}}>komkommer kweken in pot</Link> voor de ruimte en steun die later nodig zijn.</p>
  <h2>Mag je in maart vroege aardappelen in een zak planten?</h2>
  <p>Vroege pootaardappelen kunnen in het voorjaar in een zak, maar maart is niet overal automatisch veilig. Bij koude nachten kun je wachten, de zak tijdelijk beschut houden en jonge scheuten tegen vorst beschermen. Kies ziektevrij pootgoed, een grote stabiele zak met drainage en vul tijdens de groei potgrond bij rond de stengels. De volledige aanpak staat bij <Link href="/groenten-kweken/aardappelen-kweken-in-zak/" style={{textDecoration:'underline'}}>aardappelen kweken in zak</Link>.</p>
  <h2>Wat doe je als het in maart nog vriest?</h2>
  <p>Wacht met warmteminnende gewassen buiten. Voor vroege koudebestendige teelten kun je tijdelijk vliesdoek of een geschikte koude bak gebruiken, zolang alles stevig bevestigd is en overdag voldoende ventilatie krijgt. Zet jonge binnenplanten niet zonder afharden op een koud en winderig balkon.</p>
  <h2>Hoe voorkom je lange, slappe zaailingen?</h2>
  <p>Geef veel licht, voorkom een te hoge temperatuur in verhouding tot het beschikbare daglicht en zaai niet te dicht op elkaar. Houd het zaaimengsel licht vochtig, niet voortdurend nat. Controleer de afvoer van de bakjes en draai ze indien nodig voor gelijkmatige belichting. Lees ook <Link href="/moestuin-verzorgen/drainage/" style={{textDecoration:'underline'}}>drainage in plantenpotten</Link>.</p>
  <h2>Moet je in maart iedere week opnieuw zaaien?</h2>
  <p>Nee. Bij bladgroenten en radijs kan het nuttig zijn om meerdere kleine porties te zaaien, zodat niet alles tegelijk geoogst moet worden. De RHS adviseert om opeenvolgende zaaisels aan de ontwikkeling van de vorige portie aan te passen, niet blind aan een vaste termijn. Op een klein balkon is dat extra praktisch.</p>
  <h2>Wat komt er in april bij?</h2>
  <p>April biedt doorgaans meer mogelijkheden om rechtstreeks in bakken te zaaien. Binnen kun je dan komkommer en courgette opkweken voor later in het seizoen. Volg de ontwikkeling per week, want ook april kan koude nachten brengen. Bekijk de <Link href="/zaaikalender/" style={{textDecoration:'underline'}}>zaaikalender</Link> en vergelijk met <Link href="/zaaikalender/wat-zaaien-in-februari/" style={{textDecoration:'underline'}}>wat je in februari kon zaaien</Link>.</p>
  <div className="notice"><strong>Bronnen en transparantie</strong><p><a href="https://www.rhs.org.uk/advice/grow-your-own/in-month/march-jobs" target="_blank" rel="noopener noreferrer">RHS — March jobs</a>, <a href="https://www.rhs.org.uk/vegetables/seeds-sowing" target="_blank" rel="noopener noreferrer">RHS — Vegetable seed sowing</a>, <a href="https://www.rhs.org.uk/vegetables/successional-sowing" target="_blank" rel="noopener noreferrer">RHS — Successional sowing</a> en <a href="https://www.intratuin.nl/inspiratie/moestuinkalender-maart" target="_blank" rel="noopener noreferrer">Intratuin — Moestuinkalender maart</a>.</p><p style={{marginBottom:0}}>Dit zijn richtlijnen voor een Nederlands balkon, geen persoonlijke weersvoorspelling of resultaten van eigen kiemproeven.</p></div>
</div></section></main>; }
