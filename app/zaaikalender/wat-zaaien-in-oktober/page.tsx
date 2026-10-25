import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
 title: 'Wat zaaien in oktober? Zaaikalender voor je balkon',
 description: 'Wat kun je in oktober zaaien op een balkon? Lees over wintergroenten, veldsla, tuinbonen, knoflook en winteruien, met tips voor kou en drainage.',
 alternates: { canonical: '/zaaikalender/wat-zaaien-in-oktober/' },
 robots: { index: false, follow: true },
};

const crops = [
 { name: 'Winterkropsla', timing: 'Vooral tweede helft oktober, onder glas', task: 'Zaaien', note: 'Kies een weeuwen- of winterras; overwinteren betekent niet dat je meteen kunt oogsten.' },
 { name: 'Tuinbonen', timing: 'Begin oktober, alleen mild en beschut', task: 'Zaaien', note: 'Gebruik een geschikt overwinteringsras en bescherm tegen vorst en vogelvraat.' },
 { name: 'Wintererwten', timing: 'Bij zachte weersomstandigheden', task: 'Zaaien', note: 'Een risico op open balkons; voor veel beginners is voorjaar veiliger.' },
 { name: 'Veldsla en winterpostelein', timing: 'Alleen nog bij geschikte ras- en groeiomstandigheden', task: 'Eventueel zaaien', note: 'September was meestal gunstiger. In oktober is de groei trager door kortere dagen.' },
 { name: 'Winterplantuitjes', timing: 'Oktober, volgens de verpakking', task: 'Planten, niet zaaien', note: 'Gebruik geschikt pootgoed in een drainerende bak; oogst doorgaans volgend jaar.' },
 { name: 'Knoflooktenen', timing: 'Vanaf oktober in het najaar', task: 'Planten, niet zaaien', note: 'Plant geschikte teentjes, niet zomaar willekeurige supermarktknoflook.' },
 { name: 'Radijs, rucola en spinazie', timing: 'Alleen onder geschikte beschutting', task: 'Beperkt zaaien', note: 'Kieming en vooral doorgroei worden minder betrouwbaar. Zaai weinig en experimenteer.' },
];

const steps = [
 ['Bepaal wat nog groeit', 'Laat gezonde herfstgewassen staan en gebruik lege bakken alleen als een nieuwe teelt zinvol is.'],
 ['Kies een wintergeschikte soort', 'Zoek expliciet naar weeuwensla, een overwinteringsras tuinbonen of winterplantuitjes.'],
 ['Controleer licht en beschutting', 'Op een schaduwrijk balkon groeien jonge planten in oktober langzaam, ook zonder vorst.'],
 ['Maak drainage vrij', 'Verstopte gaten en langdurig natte potgrond zijn extra riskant tijdens koude perioden.'],
 ['Zaai of plant op juiste diepte', 'Volg de verpakking en geef zaden of tenen voldoende wortelruimte.'],
 ['Verzorg rustig tot het voorjaar', 'Controleer vocht en vorst, maar verwacht niet van elke oktoberteelt direct een oogst.'],
];

export default function OktoberPage() {
 return <main>
  <div className="container">
   <nav className="crumb" aria-label="Broodkruimel"><Link href="/">Home</Link> / <Link href="/zaaikalender/">Zaaikalender</Link> / Wat zaaien in oktober</nav>
   <header className="pagehead"><div className="eyebrow">Zaaikalender · Oktober</div><h1>Wat kun je zaaien in oktober op je balkon?</h1><p className="lead">Oktober is geen gewone zaaimaand voor een Nederlands balkon. De dagen worden kort en veel groenten groeien nauwelijks nog door. Er zijn wel mogelijkheden: onder beschutting kun je winterkropsla proberen, bij zacht weer bepaalde tuinbonen en wintererwten zaaien, en in bakken knoflook of winteruien planten voor volgend jaar.</p></header>
  </div>

  <section className="section container" style={{paddingTop:0}}><div className="banner">
   <div className="eyebrow" style={{color:'#d3eab5'}}>Kort antwoord</div>
   <h2>Oktober draait meer om overwinteren en planten dan om zaaien</h2>
   <p>De RHS adviseert in oktober vooral knoflook en winterplantuitjes te planten. Tuinbonen en wintererwten kun je uitsluitend in milde omstandigheden en met geschikte rassen zaaien. Onder glas is een vroege start met overwinterende sla mogelijk. De meeste snelle herfstzaaisels hadden in augustus of september meer kans om nog door te groeien.</p>
   <p>Een zaadje dat in oktober kiemt, geeft niet automatisch een oogst voor december. Reken bij overwinterende teelten op oogst in het volgende seizoen.</p>
  </div></section>

  <section className="section container" style={{paddingTop:0}}>
   <div className="section-head"><div><div className="eyebrow">Wat kan nog?</div><h2>Zaaien, planten of liever wachten?</h2></div><p>Controleer steeds het ras, de weersverwachting en of je balkon een geschikte beschutte plek heeft.</p></div>
   <div style={{overflowX:'auto'}}><table style={{width:'100%',minWidth:730,borderCollapse:'collapse',textAlign:'left'}}>
    <thead><tr>{['Gewas','Wanneer?', 'Handeling','Aandachtspunt'].map(x=><th scope="col" key={x} style={{padding:'14px 12px',borderBottom:'2px solid #becdb6'}}>{x}</th>)}</tr></thead>
    <tbody>{crops.map(c=><tr key={c.name}><th scope="row" style={{padding:'14px 12px',borderBottom:'1px solid var(--line)',verticalAlign:'top'}}>{c.name}</th><td style={{padding:'14px 12px',borderBottom:'1px solid var(--line)',verticalAlign:'top'}}>{c.timing}</td><td style={{padding:'14px 12px',borderBottom:'1px solid var(--line)',verticalAlign:'top'}}>{c.task}</td><td style={{padding:'14px 12px',borderBottom:'1px solid var(--line)',verticalAlign:'top'}}>{c.note}</td></tr>)}</tbody>
   </table></div>
  </section>

  <section className="section" style={{background:'#f0f2e8'}}><div className="container">
   <div className="section-head"><div><div className="eyebrow">Winterklaar maken</div><h2>Een balkonmoestuin voorbereiden in zes stappen</h2></div><p>Door je bakken nu goed te beheren, help je bestaande gewassen de herfst door en bereid je nieuwe teelten voor.</p></div>
   <div className="grid">{steps.map((s,i)=><div className="tile" key={s[0]}><span className="pill">{String(i+1).padStart(2,'0')} · Stap</span><h3>{s[0]}</h3><p>{s[1]}</p></div>)}</div>
  </div></section>

  <section className="section container"><div className="prose">
   <h2>Kun je in oktober nog groenten buiten zaaien?</h2>
   <p>Op een open Nederlands balkon zijn de mogelijkheden beperkt. Bij een zachte herfst kunnen speciale rassen tuinbonen of overwinterende erwten worden gezaaid, maar de RHS adviseert dit vooral voor milde gebieden. Op hoge, winderige balkons is de kans op uitval groter. Een beschutte plek of koude bak kan helpen, maar biedt geen garantie tegen vorst.</p>

   <h2>Wat is weeuwensla?</h2>
   <p>Weeuwenteelt is een methode waarbij jonge planten onder beschutting overwinteren om in het voorjaar verder te groeien. Sommige kropslarassen zijn daarvoor geschikt. De zaaikalender van Moestuinplanner noemt de tweede helft van oktober voor deze sla onder glas. Gebruik een expliciet geschikt ras en verwacht geen snelle winteroogst. Lees voor de potkeuze <Link href="/groenten-kweken/sla-kweken-in-bak/" style={{textDecoration:'underline'}}>sla kweken in bak</Link>.</p>

   <h2>Wanneer plant je knoflook in een pot?</h2>
   <p>Oktober is een gebruikelijke periode om geschikte knoflooktenen te planten voor een oogst in het volgende jaar. Gebruik gezond plantgoed en een voldoende diepe pot met goede afwatering. De teentjes mogen niet langdurig in natte, koude grond blijven staan. Knoflook wordt hier uit tenen geteeld; dat is technisch planten of poten en geen gewone zaai uit zaad.</p>

   <h2>Kun je winteruien in oktober planten?</h2>
   <p>Ja, winterplantuitjes zijn een bekende herfstteelt. Kies pootgoed voor overwintering en volg de afstand op de verpakking. Een bak moet diep genoeg zijn voor de wortels en over vrije afwateringsgaten beschikken. De bollen groeien langzaam in de winter en vormen doorgaans volgend jaar verder. Houd rekening met vogels die vers geplante uitjes kunnen lostrekken.</p>

   <h2>Zijn tuinbonen en erwten een goede balkonkeuze?</h2>
   <p>Een overwinteringsras kan soms slagen, vooral bij zacht weer en een beschutte standplaats. Tuinbonen worden groot en hebben meer wortelvolume nodig dan een klein kruidenpotje. Klimmende erwten vereisen een stevige steun. Wie pas met de balkonmoestuin begint, kan de eerste zaai ook tot het voorjaar uitstellen en daarmee risico op koude- en windschade beperken.</p>

   <h2>Kun je nog veldsla, rucola of spinazie zaaien?</h2>
   <p>Met geschikte rassen, beschutting en een zachte oktobermaand kan een beperkte zaai mogelijk zijn. Voor een betrouwbaar herfstresultaat waren augustus en september vaak geschikter. Bij korte dagen kunnen planten nauwelijks doorgroeien en pas na de winter oogstbaar worden. Bekijk <Link href="/zaaikalender/wat-zaaien-in-september/" style={{textDecoration:'underline'}}>wat je in september kunt zaaien</Link>.</p>

   <h2>Wat kun je in oktober nog oogsten?</h2>
   <p>Afhankelijk van de eerdere teelt oogst je soms nog snijbiet, spinazie, veldsla, bladselderij, late radijs, tomaten, paprika's of kruiden. Voor veel zomervruchtgewassen loopt het seizoen op een open balkon af. Oogst rijpe producten en verwijder duidelijk zieke resten. Bekijk <Link href="/groenten-kweken/tomaten-kweken-in-pot/" style={{textDecoration:'underline'}}>tomaten kweken in pot</Link> en <Link href="/kruiden-kweken/peterselie-kweken-in-pot/" style={{textDecoration:'underline'}}>peterselie in pot</Link>.</p>

   <h2>Hoe geef je planten water in een natte herfst?</h2>
   <p>In oktober verdampt vaak minder water dan in augustus. Een vaste zomerroutine kan de grond dan te nat maken. Voel aan de potgrond voordat je giet en controleer of regenwater kan weglopen. Onder een overstek kan het substraat juist droog blijven. Lees <Link href="/moestuin-verzorgen/water-geven/" style={{textDecoration:'underline'}}>water geven op het balkon</Link> en <Link href="/moestuin-verzorgen/drainage/" style={{textDecoration:'underline'}}>drainage in plantenpotten</Link>.</p>

   <h2>Hoe bescherm je bakken tegen wind en vorst?</h2>
   <p>Zet potten stabiel neer, houd afvoeropeningen vrij en gebruik zo nodig geschikte isolatie rond vorstgevoelige potten. Een tijdelijke afdekking kan helpen tegen kou, maar moet bestand zijn tegen wind en op zachtere dagen kunnen luchten. Vergeet niet dat natte potgrond zwaar is: controleer de belasting voordat je grote bakken toevoegt. Zie <Link href="/balkon-inrichten/gewicht-balkonmoestuin/" style={{textDecoration:'underline'}}>gewicht balkonmoestuin</Link>.</p>

   <h2>Wat doe je met lege balkonbakken?</h2>
   <p>Ruim gezonde resten op, controleer de potgrond en laat de bakken niet langdurig met water gevuld staan. Goede potgrond kun je soms deels hergebruiken wanneer de vorige planten gezond waren, maar bij duidelijke ziekten is vers substraat verstandiger. Je hoeft lege bakken niet preventief allemaal met mest te vullen. Lees <Link href="/moestuin-verzorgen/potgrond/" style={{textDecoration:'underline'}}>de juiste potgrond kiezen</Link>.</p>

   <h2>Wat verandert er in november?</h2>
   <p>In november worden de meeste semimogelijkheden op een open balkon nog beperkter. Knoflook planten kan bij geschikt weer vaak nog wel, terwijl bestaande wintergroenten vooral bescherming en rustig onderhoud nodig hebben. Vergelijk met de <Link href="/zaaikalender/" style={{textDecoration:'underline'}}>jaarlijkse zaaikalender</Link> en gebruik de winter voor het plannen van volgend seizoen.</p>

   <div className="notice"><strong>Bronnen en transparantie</strong>
    <p><a href="https://www.rhs.org.uk/advice/grow-your-own/in-month/october-jobs" target="_blank" rel="noopener noreferrer">RHS — October jobs</a>, <a href="https://www.intratuin.nl/inspiratie/moestuinkalender-oktober" target="_blank" rel="noopener noreferrer">Intratuin — Moestuinkalender oktober</a> en <a href="https://www.moestuinplanner.nl/zaaikalender/oktober/" target="_blank" rel="noopener noreferrer">Moestuinplanner — Zaaikalender oktober</a>.</p>
    <p style={{marginBottom:0}}>Dit is algemeen advies voor een Nederlands balkon, geen vorstvoorspelling of resultaat van eigen kiemproeven. Ras, beschutting en omstandigheden bepalen het resultaat.</p>
   </div>
  </div></section>
 </main>;
}
