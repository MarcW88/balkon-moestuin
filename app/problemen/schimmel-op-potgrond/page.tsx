import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Schimmel op potgrond: oorzaken en wat je kunt doen',
  description: 'Witte schimmel op potgrond in je balkonmoestuin? Herken onschuldige schimmeldraden, kalkaanslag en omvalziekte. Ontdek praktische oplossingen.',
  alternates: { canonical: '/problemen/schimmel-op-potgrond/' },
  robots: { index: false, follow: true },
};

const signals = [
  { sign: 'Wit, zacht of pluizig laagje op de grond', meaning: 'Vaak saprotrofe schimmels die dood materiaal afbreken', check: 'Is de plant verder gezond en blijft de grond lang nat?', action: 'Controleer watergift en ventilatie. Verwijder eventueel het oppervlakkige laagje.' },
  { sign: 'Harde witte korst zonder pluis', meaning: 'Mogelijk kalk- of zoutafzetting, geen schimmel', check: 'Voelt het korrelig aan en verschijnt het rond de potrand?', action: 'Controleer water en bemesting; voeg niet blind een schimmelmiddel toe.' },
  { sign: 'Groene, gladde laag op de zaaigrond', meaning: 'Vaak algen bij voortdurend vocht', check: 'Is de bak langdurig nat of krijgt het oppervlak licht?', action: 'Verbeter drainage, luchtcirculatie en de manier van water geven.' },
  { sign: 'Kleine paddenstoelen uit potgrond', meaning: 'Vruchtlichamen van bodemschimmels die organisch materiaal afbreken', check: 'Staan ze los van de plant en is de wortelzone gezond?', action: 'Verwijder vruchtlichamen als kinderen of dieren erbij kunnen; eet ze niet.' },
  { sign: 'Zaailingen worden dun aan de basis en vallen om', meaning: 'Mogelijke omvalziekte, niet zomaar oppervlakkige schimmel', check: 'Is de stengel bij de grond bruin, zacht of ingezonken?', action: 'Verwijder aangetaste zaailingen en zaai opnieuw in verse zaaigrond en schone bakjes.' },
  { sign: 'Planten verwelken terwijl de grond erg nat is', meaning: 'Mogelijk beschadigde wortels door langdurig zuurstofgebrek of wortelziekte', check: 'Loopt water weg? Ruiken wortels of potgrond bedorven?', action: 'Pak wateroverlast aan en onderzoek de wortels; alleen oppervlakkig schimmel verwijderen volstaat niet.' },
];

const steps = [
  ['Kijk goed naar de aanslag', 'Wit pluis, een korstige aanslag en groen algenslijm vragen om verschillende oplossingen.'],
  ['Controleer of de plant gezond is', 'Gezonde bladeren en wortels wijzen minder op een ziekte dan omvallende zaailingen of rotte wortels.'],
  ['Voel onder de bovenlaag', 'Blijft de hele pot dagenlang nat, dan is minder vaak water geven meestal belangrijker dan schoonmaken.'],
  ['Bekijk de afwateringsgaten', 'Laat water uit de pot lopen en verwijder stilstaand water uit onderschotels.'],
  ['Verbeter lucht en standplaats', 'Geef planten voldoende ruimte; lucht afgedekte zaaibakjes wanneer dat veilig kan.'],
  ['Evalueer na enkele dagen', 'Blijft het probleem terugkomen of worden planten ziek, onderzoek de potgrond en herstart waar nodig.'],
];

export default function MoldOnPottingSoil() {
  return <main>
    <div className="container">
      <nav className="crumb" aria-label="Broodkruimel"><Link href="/">Home</Link> / <Link href="/problemen/">Problemen</Link> / Schimmel op potgrond</nav>
      <header className="pagehead">
        <div className="eyebrow">Problemen oplossen · Potgrond</div>
        <h1>Schimmel op potgrond: is het erg en wat doe je eraan?</h1>
        <p className="lead">Een wit pluizig laagje op de potgrond van je tomaat, kruiden of zaaibak ziet er niet prettig uit. Vaak zijn het schimmels die dode organische bestanddelen afbreken en gezonde planten niet direct aantasten. Toch kan het een waarschuwing zijn dat de grond te lang nat blijft. Leer het verschil met kalkaanslag en echte problemen bij kiemplanten.</p>
      </header>
    </div>

    <section className="section container" style={{paddingTop:0}}>
      <div className="banner">
        <div className="eyebrow" style={{color:'#d3eab5'}}>Kort antwoord</div>
        <h2>Witte schimmel is vaak onschuldig, een natte pot niet altijd</h2>
        <p>Saprotrofe schimmels leven van dood organisch materiaal in de potgrond en zijn doorgaans geen ziekteverwekkers voor gezonde planten. Ze krijgen meer kans als het substraat lang vochtig blijft. Controleer daarom eerst de drainage, watergift en luchtcirculatie. Vallen jonge zaailingen om of rotten wortels, dan is verder ingrijpen nodig.</p>
        <p>Gebruik geen azijn, bleekmiddel of agressieve huisgemaakte mengsels op planten of eetbare gewassen. Het wegnemen van zichtbare schimmel lost slechte afwatering niet op.</p>
      </div>
    </section>

    <section className="section container" style={{paddingTop:0}}>
      <div className="section-head"><div><div className="eyebrow">Herkenningshulp</div><h2>Is het schimmel, kalk of een ziekte?</h2></div><p>Dit zijn zichtbare aanwijzingen. Zonder onderzoek kun je de precieze soort schimmel niet vaststellen.</p></div>
      <div style={{overflowX:'auto'}}><table style={{width:'100%',minWidth:780,borderCollapse:'collapse',textAlign:'left'}}>
        <thead><tr>{['Wat zie je?', 'Mogelijke verklaring', 'Wat controleer je?', 'Eerste actie'].map(h=><th scope="col" key={h} style={{padding:'14px 12px',borderBottom:'2px solid #becdb6'}}>{h}</th>)}</tr></thead>
        <tbody>{signals.map(s=><tr key={s.sign}>
          <th scope="row" style={{padding:'14px 12px',borderBottom:'1px solid var(--line)',verticalAlign:'top'}}>{s.sign}</th>
          <td style={{padding:'14px 12px',borderBottom:'1px solid var(--line)',verticalAlign:'top'}}>{s.meaning}</td>
          <td style={{padding:'14px 12px',borderBottom:'1px solid var(--line)',verticalAlign:'top'}}>{s.check}</td>
          <td style={{padding:'14px 12px',borderBottom:'1px solid var(--line)',verticalAlign:'top'}}>{s.action}</td>
        </tr>)}</tbody>
      </table></div>
    </section>

    <section className="section" style={{background:'#f0f2e8'}}><div className="container">
      <div className="section-head"><div><div className="eyebrow">Stappenplan</div><h2>Zo pak je schimmel op potgrond aan</h2></div><p>Onderzoek eerst de oorzaak: een nieuwe laag potgrond helpt weinig als de pot elke dag te nat blijft.</p></div>
      <div className="grid">{steps.map((s,i)=><div className="tile" key={s[0]}><span className="pill">{String(i+1).padStart(2,'0')} · Stap</span><h3>{s[0]}</h3><p>{s[1]}</p></div>)}</div>
    </div></section>

    <section className="section container"><div className="prose">
      <h2>Wat is de witte, pluizige laag op mijn potgrond?</h2>
      <p>Dat zijn vaak de schimmeldraden van saprotrofe schimmels. Ze breken organische bestanddelen in potgrond af, zoals stukjes schors en compost. De RHS en UMass Extension beschrijven deze schimmels als normaal onderdeel van het afbraakproces en meestal onschadelijk voor gezonde planten. Je hoeft niet alle grond weg te gooien zodra je een beetje wit pluis ziet.</p>

      <h2>Hoe herken je het verschil tussen schimmel en kalkaanslag?</h2>
      <p>Een schimmellaag ziet er meestal pluizig of draadvormig uit. Kalk- en zoutafzetting heeft vaker een korstige, korrelige uitstraling op de aarde of de potrand. Zulke afzetting kan samenhangen met kraanwater of meststoffen. Beoordeel ook de standplaats en de gezondheid van de plant. Alleen een foto is niet altijd genoeg voor een zekere diagnose.</p>

      <h2>Waarom ontstaat schimmel op nieuwe potgrond?</h2>
      <p>Nieuwe potgrond bevat vaak organisch materiaal waarin schimmels van nature kunnen groeien. Vooral bij langdurig vocht, weinig luchtcirculatie en koele, bewolkte dagen kan zichtbaar mycelium ontstaan. Dat betekent niet automatisch dat een zak potgrond bedorven is. Bij een door en door beschimmelde, sterk afwijkend ruikende of langdurig nat opgeslagen zak kun je de kwaliteit beter beoordelen voordat je die voor kwetsbare zaailingen gebruikt.</p>

      <h2>Is witte schimmel schadelijk voor tomaten, sla en kruiden?</h2>
      <p>Een lichte oppervlakkige saprotrofe schimmel is op zichzelf meestal niet schadelijk. Het langdurig natte milieu waarin hij groeit, kan echter zorgen voor zuurstofarme wortels en wortelproblemen. Tomaten in pot hebben voldoende water nodig, maar ook een luchtige wortelzone. Bekijk <Link href="/groenten-kweken/tomaten-kweken-in-pot/" style={{textDecoration:'underline'}}>tomaten kweken in pot</Link> en <Link href="/moestuin-verzorgen/drainage/" style={{textDecoration:'underline'}}>drainage in plantenpotten</Link>.</p>

      <h2>Wat als de schimmel op mijn zaaigrond verschijnt?</h2>
      <p>Bij jonge kiemplantjes is extra opletten verstandig. Een beetje witte schimmel aan het oppervlak betekent nog geen omvalziekte, maar te natte grond vergroot de kans op problemen. Controleer of er plantjes aan de voet dun worden en omvallen. Is dat het geval, verwijder aangetaste plantjes en gebruik voor nieuwe zaaisels schone bakjes en verse, geschikte zaaigrond. Lees <Link href="/problemen/zaadjes-kiemen-niet/" style={{textDecoration:'underline'}}>wat je doet wanneer zaadjes niet kiemen</Link>.</p>

      <h2>Hoeveel water moet je dan geven?</h2>
      <p>Er is geen vaste hoeveelheid die voor elke pot werkt. Een kleine kruidenpot droogt anders dan een grote tomatenbak, en in november heeft een plant minder water nodig dan tijdens zomerse hitte. Voel een paar centimeter in de potgrond, let op het gewicht van de pot en kijk of overtollig water weg kan. Geef pas opnieuw wanneer de plant en de wortelzone dat nodig hebben. Bekijk <Link href="/moestuin-verzorgen/water-geven/" style={{textDecoration:'underline'}}>water geven op het balkon</Link>.</p>

      <h2>Moet je de beschimmelde bovenlaag verwijderen?</h2>
      <p>Bij een gezonde plant hoeft dat meestal niet. Als je het uiterlijk storend vindt, kun je voorzichtig een dun oppervlakkig laagje wegnemen zonder wortels bloot te leggen. Maak een sterk verdichte bovenlaag voorzichtig wat los als dat veilig kan. Verbeter vooral de omstandigheden waardoor de schimmel zich uitbreidde. Bij ernstig aangetaste, natte of zieke zaaigrond is volledig vernieuwen soms verstandiger.</p>

      <h2>Helpt kaneel, azijn, koffie of waterstofperoxide?</h2>
      <p>Voor zulke huisremedies is geen betrouwbare algemene toepassing op alle eetbare potgewassen vastgesteld. Azijn en geconcentreerde middelen kunnen wortels en bladeren beschadigen. Strooi ook niet automatisch extra organisch materiaal op de natte grond: daarmee kun je schimmelgroei juist voeden. Een normale watergift en goede luchtcirculatie zijn zinvollere eerste maatregelen.</p>

      <h2>Wat betekent een groen laagje op potgrond?</h2>
      <p>Dat zijn vaak algen in plaats van schimmels. Een groene laag verschijnt vooral bij veel vocht en licht. Hij kan de bovengrond verdichten en is bij zaaibakken een aanwijzing dat de omstandigheden te nat zijn. Verbeter de watergift en luchtcirculatie, en voorkom dat er voortdurend water in de onderschotel staat.</p>

      <h2>Zijn paddenstoelen in een balkonbak gevaarlijk?</h2>
      <p>Kleine paddenstoelen komen soms uit de potgrond omhoog omdat schimmels houtachtig materiaal afbreken. Dat is niet noodzakelijk schadelijk voor de plant. Eet de paddenstoelen nooit, ook niet als ze uit een bak met eetbare groenten groeien. Verwijder de vruchtlichamen wanneer kinderen of huisdieren erbij kunnen komen. Je hoeft hiervoor niet meteen de hele plant weg te doen.</p>

      <h2>Hoe voorkom je dat schimmel terugkomt?</h2>
      <p>Gebruik potten met afwateringsgaten, zet planten niet te dicht bij elkaar en lucht afgedekte kweekbakjes. Verwijder rottende plantenresten die direct op de grond blijven liggen en pas de watergift aan seizoen, standplaats en potvolume aan. Bij aanhoudende problemen kan een luchtigere potgrond helpen. Bekijk <Link href="/moestuin-verzorgen/potgrond/" style={{textDecoration:'underline'}}>potgrond kiezen</Link> en <Link href="/balkon-inrichten/moestuin-op-balkon-indeling/" style={{textDecoration:'underline'}}>je balkonmoestuin indelen</Link>.</p>

      <h2>Wanneer moet je wél direct actie ondernemen?</h2>
      <p>Wanneer zaailingen in korte tijd omvallen, wortels zacht en donker zijn of de plant ondanks natte grond verwelkt, is er mogelijk meer aan de hand dan een onschuldige schimmel. Stop met automatisch bijgieten, isoleer zo mogelijk ernstig aangetaste planten en onderzoek de wortels. Gooi duidelijk ziek plantmateriaal niet tussen gezonde zaailingen. Als de oorzaak onduidelijk blijft, vraag gericht advies op basis van foto's van de plant én wortelzone.</p>

      <div className="notice"><strong>Bronnen en transparantie</strong>
        <p><a href="https://www.rhs.org.uk/biodiversity/saprotrophic-fungi" target="_blank" rel="noopener noreferrer">RHS — Saprotrophic fungi</a>, <a href="https://www.umass.edu/agriculture-food-environment/greenhouse-floriculture/greenhouse-updates-april-6-2018" target="_blank" rel="noopener noreferrer">UMass Extension — Molds on growing media</a>, <a href="https://yardandgarden.extension.iastate.edu/faq/will-mold-peat-pots-harm-my-flower-and-vegetable-seedlings" target="_blank" rel="noopener noreferrer">Iowa State — Mold on seed pots</a>, <a href="https://extension.umn.edu/garden-and-home/yard-and-garden/gardening-in-minnesota/yard-and-garden-problems/how-to-prevent-seedling-damping-off" target="_blank" rel="noopener noreferrer">University of Minnesota — Damping-off</a> en <a href="https://www.gardenersworldmagazine.nl/groene-school/kamerplanten/schimmel-op-potgrond/" target="_blank" rel="noopener noreferrer">Gardeners' World NL — Schimmel op potgrond</a>.</p>
        <p style={{marginBottom:0}}>Dit artikel beschrijft algemene symptomen. Zonder inspectie is een bepaalde schimmel of wortelziekte niet met zekerheid vast te stellen; er zijn geen eigen teeltproeven uitgevoerd.</p>
      </div>
    </div></section>
  </main>;
}
