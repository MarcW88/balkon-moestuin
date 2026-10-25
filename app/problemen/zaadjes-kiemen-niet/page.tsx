import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Zaadjes kiemen niet? 8 oorzaken en oplossingen',
  description: 'Komen je zaadjes niet op? Controleer temperatuur, vocht, zaaidiepte, kiemkracht en schimmels met dit stappenplan voor zaaien in potten en bakken.',
  alternates: { canonical: '/problemen/zaadjes-kiemen-niet/' },
  robots: { index: false, follow: true },
};

const oorzaken = [
  { symptoom: 'Er gebeurt niets in een koude bak', oorzaak: 'De grond is te koud voor dit gewas', controle: 'Vergelijk de bodemtemperatuur met het zaadzakje.', oplossing: 'Wacht op warmer weer of zaai geschikte gewassen binnen voor.' },
  { symptoom: 'De bovenlaag droogt steeds uit', oorzaak: 'Het zaad krijgt onvoldoende vocht', controle: 'Voel voorzichtig of de kiemlaag droog is.', oplossing: 'Houd de grond licht vochtig met een fijne broes.' },
  { symptoom: 'De bak blijft zwaar en drijfnat', oorzaak: 'Zuurstofgebrek of rotting', controle: 'Controleer drainage, onderschotel en muffe geur.', oplossing: 'Laat water weglopen en zaai eventueel opnieuw in verse grond.' },
  { symptoom: 'Er komt niets op na diep zaaien', oorzaak: 'Zaad ligt te diep of onder een harde korst', controle: 'Vergelijk de zaaidiepte met het etiket.', oplossing: 'Zaai opnieuw op de juiste diepte in luchtige zaaigrond.' },
  { symptoom: 'Vooral oude zaden komen niet op', oorzaak: 'Afnemende kiemkracht', controle: 'Kijk naar bewaardatum en opslagomstandigheden.', oplossing: 'Doe een kleine kiemtest naast een nieuw zakje.' },
  { symptoom: 'Jonge sprietjes vallen meteen om', oorzaak: 'Mogelijke omvalziekte (damping-off)', controle: 'Let op ingezonken of bruine stengeltjes op grondniveau.', oplossing: 'Verwijder aangetaste planten en herstart hygiënisch met schone materialen.' },
  { symptoom: 'Zaden verdwijnen uit buitenbakken', oorzaak: 'Vogels, muizen of andere dieren', controle: 'Kijk naar omgewoelde grond of vraatsporen.', oplossing: 'Bescherm zaaibakken met goed bevestigd, veilig gaas.' },
  { symptoom: 'Een soort kiemt wel, de andere niet', oorzaak: 'Soortspecifieke eisen aan temperatuur, licht of rust', controle: 'Lees de speciale kieminstructies op de verpakking.', oplossing: 'Volg de eisen van het gewas; gebruik geen universele temperatuur.' },
];
const stappen = [
  ['Controleer de datum','Zoek de normale kiemduur van precies jouw gewas en ras voordat je de bak opgeeft.'],
  ['Meet of vergelijk de warmte','De ideale temperatuur verschilt: paprika en tomaat vragen iets anders dan koele bladgroenten.'],
  ['Voel de kiemlaag','Zorg dat die vochtig blijft, maar niet zo nat is dat de grond zonder lucht komt te zitten.'],
  ['Controleer de zaaidiepte','Kleine zaden worden vaak minder diep gezaaid dan bonen of erwten; volg de verpakking.'],
  ['Bekijk de omstandigheden','Let op afvoer, lichtbehoefte, korstvorming en eventuele vraat door dieren.'],
  ['Test en zaai gericht opnieuw','Gebruik verse grond en zo nodig nieuw zaad, maar verander niet zonder reden alle factoren tegelijk.'],
];

export default function SeedGerminationTroubleshooting() {
  return <main>
    <div className="container">
      <nav className="crumb" aria-label="Broodkruimel"><Link href="/">Home</Link> / <Link href="/problemen/">Problemen</Link> / Zaadjes kiemen niet</nav>
      <header className="pagehead">
        <div className="eyebrow">Zaai- en kiemproblemen · Diagnose</div>
        <h1>Zaadjes kiemen niet: wat gaat er mis?</h1>
        <p className="lead">Heb je groenten of kruiden gezaaid, maar zie je na dagen nog niets boven de grond? Dat kan komen door kou, uitdroging, te natte potgrond, te diep zaaien of oud zaad. Soms zijn de zaden al gekiemd maar sterven de jonge plantjes onder de grond. Ontdek hoe je de oorzaak stap voor stap onderzoekt zonder de hele bak meteen om te spitten.</p>
      </header>
    </div>
    <section className="section container" style={{paddingTop:0}}>
      <div className="banner">
        <div className="eyebrow" style={{color:'#d3eab5'}}>Eerst dit</div>
        <h2>Geen kiemplantje betekent niet altijd mislukt zaad</h2>
        <p>Controleer eerst of je lang genoeg hebt gewacht volgens het zaadzakje. Voel daarna of de zaaigrond vochtig maar niet drijfnat is en beoordeel de temperatuur. Radijs kan onder goede omstandigheden snel opkomen, terwijl peterselie of paprika langer kan duren. Graaf niet elke dag naar de zaden: daarmee kun je jonge worteltjes beschadigen.</p>
      </div>
    </section>
    <section className="section container" style={{paddingTop:0}}>
      <div className="section-head"><div><div className="eyebrow">Snelle probleemzoeker</div><h2>Acht redenen waarom zaden niet opkomen</h2></div><p>Verschillende oorzaken kunnen tegelijk optreden. Gebruik de verschijnselen als aanwijzingen, niet als zekere diagnose.</p></div>
      <div style={{overflowX:'auto'}}><table style={{width:'100%',minWidth:790,borderCollapse:'collapse',textAlign:'left'}}>
        <thead><tr>{['Wat zie je?', 'Mogelijke oorzaak', 'Wat controleren?', 'Eerste oplossing'].map(h=><th scope="col" key={h} style={{padding:'14px 12px',borderBottom:'2px solid #becdb6'}}>{h}</th>)}</tr></thead>
        <tbody>{oorzaken.map(o=><tr key={o.symptoom}>
          <th scope="row" style={{padding:'14px 12px',borderBottom:'1px solid var(--line)',verticalAlign:'top'}}>{o.symptoom}</th>
          <td style={{padding:'14px 12px',borderBottom:'1px solid var(--line)',verticalAlign:'top'}}>{o.oorzaak}</td>
          <td style={{padding:'14px 12px',borderBottom:'1px solid var(--line)',verticalAlign:'top'}}>{o.controle}</td>
          <td style={{padding:'14px 12px',borderBottom:'1px solid var(--line)',verticalAlign:'top'}}>{o.oplossing}</td>
        </tr>)}</tbody>
      </table></div>
    </section>
    <section className="section" style={{background:'#f0f2e8'}}><div className="container">
      <div className="section-head"><div><div className="eyebrow">Praktische diagnose</div><h2>Zo krijg je je zaaisels weer op gang</h2></div><p>Werk stap voor stap: te veel water geven terwijl de grond al nat is, maakt het probleem vaak groter.</p></div>
      <div className="grid">{stappen.map((s,i)=><div className="tile" key={s[0]}><span className="pill">{String(i+1).padStart(2,'0')} · Stap</span><h3>{s[0]}</h3><p>{s[1]}</p></div>)}</div>
    </div></section>
    <section className="section container"><div className="prose">
      <h2>Hoe lang duurt het voordat zaadjes kiemen?</h2>
      <p>Dat hangt af van het soort gewas, het ras, de bodemtemperatuur en het vocht. Sommige radijzen komen onder goede omstandigheden binnen een week boven de grond. Peterselie en bepaalde andere kruiden kunnen twee tot drie weken of langer nodig hebben. Neem de verwachte kiemduur op je zaadverpakking als uitgangspunt. Dat is betrouwbaarder dan één algemene termijn voor alle groentezaden.</p>

      <h2>Wat gebeurt er als de potgrond te koud is?</h2>
      <p>Een zaad heeft meestal een minimale en optimale kiemtemperatuur. Warmteminnende soorten zoals paprika, tomaat en komkommer kiemen slecht in een koude buitenbak. Koelere teelten zoals spinazie hebben juist andere eisen. Volgens de RHS kunnen veel zaden bij erg lage bodemtemperatuur nauwelijks ontkiemen. Zet voorgezaaide warmteminnende soorten op een passende warme plek, maar volg de specifieke temperaturen van het ras. Bekijk <Link href="/zaaikalender/" style={{textDecoration:'underline'}}>de zaaikalender</Link> voor het juiste seizoen.</p>

      <h2>Kunnen zaden niet kiemen door te veel water?</h2>
      <p>Ja. Zaden hebben vocht nodig om op te zwellen, maar ook zuurstof. In blijvend natte, compacte grond kan rotting optreden. Controleer of de bak drainagegaten heeft, laat water uit onderschotels weglopen en geef niet opnieuw water alleen omdat je nog geen groen ziet. Als de grond vies ruikt en zaden zacht of rot zijn, is opnieuw zaaien in schoon, luchtig substraat verstandiger. Lees <Link href="/moestuin-verzorgen/drainage/" style={{textDecoration:'underline'}}>drainage in plantenpotten</Link>.</p>

      <h2>En wat als de zaaigrond te droog is?</h2>
      <p>Ook uitdroging kan de kieming tegenhouden of een net begonnen kiemproces verstoren. Vooral kleine zaaibakjes op een zonnige vensterbank of balkon drogen snel uit. Bevochtig de grond met een fijne broes en controleer regelmatig de bovenste laag zonder de grond te verzadigen. Een afdekking kan vocht vasthouden, maar moet worden gelucht en tijdig verwijderd wanneer de plantjes opkomen. Lees <Link href="/moestuin-verzorgen/water-geven/" style={{textDecoration:'underline'}}>water geven op het balkon</Link>.</p>

      <h2>Hoe diep moet je groentezaad zaaien?</h2>
      <p>De juiste zaaidiepte verschilt per soort. Kleine zaadjes krijgen vaak maar een dun laagje grond; grotere zaden zoals bonen en erwten worden dieper gelegd. Sommige soorten hebben licht nodig om goed te kiemen en worden niet of nauwelijks afgedekt. Volg daarom altijd de instructies op het zakje. Als een zaadje veel te diep ligt, kan de jonge scheut zijn reserves opgebruiken voordat hij het oppervlak bereikt.</p>

      <h2>Zijn oude zaadjes nog bruikbaar?</h2>
      <p>Oud zaad is niet automatisch dood, maar de kiemkracht kan tijdens de bewaring achteruitgaan. Vocht, warmte en wisselende omstandigheden versnellen dat bij veel soorten. Voor een eenvoudige kiemtest leg je een klein, geteld aantal zaadjes tussen licht vochtig keukenpapier in een geschikt bakje. Bewaar het bij de kiemtemperatuur van de soort en controleer volgens de normale kiemduur. Vergelijk het aantal ontkiemde zaden met een vers zakje als je twijfelt. Een kiemtest op papier voorspelt niet precies hoe zaden het in de buitenbak zullen doen.</p>

      <h2>Waarom vallen zaailingen om zodra ze opkomen?</h2>
      <p>Dat kan wijzen op omvalziekte, ook damping-off genoemd. Aangetaste stengeltjes worden bij de grond dun, bruin of zacht en de plantjes vallen snel om. Volgens UC IPM komen zulke aantastingen vaker voor in koele, natte en slecht doorlatende grond. Verwijder ernstig aangetaste zaailingen en gebruik voor een nieuwe zaai schone bakjes en verse, geschikte zaaigrond. Voorkom te dicht zaaien en ventileer een afgedekte kweekbak.</p>

      <h2>Kunnen vogels of slakken de oorzaak zijn?</h2>
      <p>Ja. Soms kiemt het zaad wel, maar verdwijnen de zaden of jonge kiemplantjes door vogels, muizen, slakken of andere dieren. Controleer op vraat, slijmsporen en verstoorde grond. Gebruik waar passend een stevig bevestigd gaas dat niet los kan waaien en waarin dieren niet vast komen te zitten. Zorg dat bescherming jonge planten niet platdrukt.</p>

      <h2>Waarom kiemen tomaten wel en paprika's niet?</h2>
      <p>Gewassen verschillen in hun kiemtemperatuur en snelheid. Paprika's vragen doorgaans een warme, gelijkmatige start en kunnen trager zijn dan tomaten. Vergelijk niet alleen het aantal dagen, maar ook de temperatuur van het substraat en de zaadkwaliteit. Begin zulke vruchtgewassen in het geschikte seizoen. Bekijk <Link href="/groenten-kweken/tomaten-kweken-in-pot/" style={{textDecoration:'underline'}}>tomaten in pot</Link> en <Link href="/groenten-kweken/paprika-kweken-in-pot/" style={{textDecoration:'underline'}}>paprika kweken in pot</Link>.</p>

      <h2>Wat als radijs of sla niet opkomt?</h2>
      <p>Bij radijs kan koude, natte of korstige grond de opkomst vertragen. Bij sla kan juist te hoge temperatuur de kieming van sommige rassen bemoeilijken. Controleer de zaaitijd, de diepte en het etiket voordat je opnieuw begint. Gebruik een luchtig mengsel en voorkom uitdroging van de bovenlaag. Lees <Link href="/groenten-kweken/radijs-kweken-in-pot/" style={{textDecoration:'underline'}}>radijs kweken in pot</Link> en <Link href="/groenten-kweken/sla-kweken-in-bak/" style={{textDecoration:'underline'}}>sla kweken in bak</Link>.</p>

      <h2>Kun je mislukte zaaisels opnieuw gebruiken?</h2>
      <p>Als de grond schoon is, goed afwatert en er geen tekenen van ziekte zijn, hoef je niet altijd alle potgrond weg te gooien. Zie je rotte zaden, aangetaste wortels of omvallende zaailingen, begin dan liever met schone materialen en verse zaaigrond. Zaai niet opnieuw in een bak waarvan je de oorspronkelijke oorzaak nog niet hebt aangepakt. Meer hierover lees je bij <Link href="/moestuin-verzorgen/potgrond/" style={{textDecoration:'underline'}}>de juiste potgrond kiezen</Link>.</p>

      <h2>Wanneer moet je opnieuw zaaien?</h2>
      <p>Wacht ten minste tot de normale kiemduur van jouw gewas is verstreken, tenzij je duidelijk ziet dat zaden zijn verrot of verdwenen. Als het seizoen nog geschikt is, verbeter de vermoedelijke oorzaak en zaai een kleine nieuwe portie. Is het buiten inmiddels te koud of te warm voor dat gewas, kies dan een geschikter moment of een andere soort.</p>

      <div className="notice"><strong>Bronnen en transparantie</strong><p><a href="https://www.rhs.org.uk/vegetables/seeds-sowing" target="_blank" rel="noopener noreferrer">RHS — Vegetable seeds: sowing guide</a>, <a href="https://www.rhs.org.uk/propagation/how-to-sow-seeds-indoors" target="_blank" rel="noopener noreferrer">RHS — How to sow seeds indoors</a>, <a href="https://ipm.ucanr.edu/home-and-landscape/damping-off-diseases-in-the-garden/" target="_blank" rel="noopener noreferrer">UC IPM — Damping-off diseases</a> en <a href="https://backend.makkelijkemoestuin.nl/kennisbank/help-mijn-plantjes-doen-het-niet-goed" target="_blank" rel="noopener noreferrer">Makkelijke Moestuin — Zaadjes komen niet op</a>.</p><p style={{marginBottom:0}}>Dit is algemene informatie voor zaaien in bakken en potten. Zonder inspectie kan geen individuele oorzaak worden bevestigd; er zijn geen eigen kiemproeven uitgevoerd.</p></div>
    </div></section>
  </main>;
}
