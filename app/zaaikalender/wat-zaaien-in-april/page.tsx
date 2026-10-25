import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
 title: 'Wat zaaien in april? Zaaikalender voor je balkon',
 description: 'Wat kun je in april zaaien op een Nederlands balkon? Vergelijk buiten zaaien en binnen voorzaaien voor radijs, sla, wortel, courgette en komkommer.',
 alternates: { canonical: '/zaaikalender/wat-zaaien-in-april/' },
 robots: { index: false, follow: true },
};

const gewassen = [
 {naam:'Radijs', buiten:'Ja, rechtstreeks in de pot', binnen:'Niet nodig', aandacht:'Zaai in kleine porties en houd de grond vochtig, niet drijfnat.'},
 {naam:'Sla en rucola', buiten:'Ja, bij geschikt weer', binnen:'Voorzaaien kan', aandacht:'Bescherm jonge planten tegen koude wind en late vorst.'},
 {naam:'Wortel en rode biet', buiten:'Ja, afhankelijk van temperatuur en ras', binnen:'Meestal niet nodig', aandacht:'Kies een voldoende diepe bak; wortels direct zaaien zonder verplanten.'},
 {naam:'Spinazie en snijbiet', buiten:'Ja, bij geschikte omstandigheden', binnen:'Eventueel beschut', aandacht:'Spinazie kan bij warmer weer sneller doorschieten.'},
 {naam:'Erwten en tuinbonen', buiten:'Ja, als de grond geschikt is', binnen:'Koel voorzaaien kan', aandacht:'Zorg voor voldoende wortelruimte en steun waar nodig.'},
 {naam:'Peterselie en bieslook', buiten:'Ja, bij voldoende bodemwarmte', binnen:'Ook mogelijk', aandacht:'Peterselie kan langzaam kiemen; houd geduld.'},
 {naam:'Courgette en pompoen', buiten:'Nog niet', binnen:'Ja, in de tweede helft van april', aandacht:'Zaaien in afzonderlijke potjes; pas na vorstgevaar uitplanten.'},
 {naam:'Komkommer', buiten:'Nog niet', binnen:'Ja, warm en licht voorzaaien', aandacht:'Groeien snel; begin niet onnodig vroeg en voorkom koude nachten.'},
 {naam:'Tomaat en paprika', buiten:'Nog niet', binnen:'Ja, op een lichte en warme plek', aandacht:'Afharden en buiten zetten pas bij voldoende zachte nachten.'},
];
const stappen = [
 ['01','Maak onderscheid tussen binnen en buiten','Zaai koele voorjaarsteelten buiten wanneer het weer meewerkt; warmteminnende planten blijven binnen.'],
 ['02','Controleer het balkon','Let op zon, koude wind en regen. Ook een zonnige aprildag kan worden gevolgd door een nacht met vorst.'],
 ['03','Kies de juiste pot','Wortelen vragen diepte, radijs een goed doorlatende bak en courgettes later veel groeiruimte.'],
 ['04','Zaai volgens het etiket','Respecteer ras, zaaidiepte, afstand en temperatuur. Begin met kleine hoeveelheden.'],
 ['05','Geef voorzichtig water','Houd de kiemzone gelijkmatig vochtig en zorg dat overtollig water uit de pot kan lopen.'],
 ['06','Plan het afharden','Laat binnen gekweekte planten geleidelijk wennen aan buitenlicht en wind, pas als het veilig warm is.'],
];

export default function AprilPage() { return <main>
 <div className="container">
  <nav className="crumb" aria-label="Broodkruimel"><Link href="/">Home</Link> / <Link href="/zaaikalender/">Zaaikalender</Link> / Wat zaaien in april</nav>
  <header className="pagehead">
   <div className="eyebrow">Zaaikalender · April</div>
   <h1>Wat kun je zaaien in april op je balkon?</h1>
   <p className="lead">April is een actieve zaaimaand. Radijs, sla, wortelen en veel andere voorjaarsgroenten kunnen bij geschikt weer rechtstreeks in bakken worden gezaaid. Binnen kun je beginnen met courgette en komkommer voor een latere zomerteelt. Houd rekening met koude nachten: april is nog geen garantie op vorstvrij weer.</p>
  </header>
 </div>
 <section className="section container" style={{paddingTop:0}}>
  <div className="banner">
   <div className="eyebrow" style={{color:'#d3eab5'}}>Kort antwoord</div>
   <h2>Zaai buiten wat koelte verdraagt; houd zomerplanten nog binnen</h2>
   <p>Radijs, sla, rucola, spinazie, snijbiet, wortel, biet, erwt en tuinboon komen bij geschikt weer in aanmerking voor buiten zaaien. Courgette, pompoen en komkommer kun je binnen voorzaaien. Tomaten en paprika's die je al hebt opgekweekt, blijven voorlopig beschermd tegen late vorst.</p>
   <p>De plek op jouw balkon is belangrijker dan een vaste datum. Een bak in koude schaduw warmt minder snel op dan een beschutte bak met ochtendzon.</p>
  </div>
 </section>
 <section className="section container" style={{paddingTop:0}}>
  <div className="section-head"><div><div className="eyebrow">Per gewas</div><h2>Wat zaai je in april binnen of buiten?</h2></div><p>Richtlijn voor Nederland. Controleer altijd de rasverpakking, de temperatuur en het lokale weer.</p></div>
  <div style={{overflowX:'auto'}}><table style={{width:'100%',minWidth:740,borderCollapse:'collapse',textAlign:'left'}}>
  <thead><tr>{['Gewas','Buiten','Binnen','Praktisch advies'].map(h=><th scope="col" key={h} style={{padding:'14px 12px',borderBottom:'2px solid #becdb6'}}>{h}</th>)}</tr></thead>
  <tbody>{gewassen.map(g=><tr key={g.naam}><th scope="row" style={{padding:'15px 12px',borderBottom:'1px solid var(--line)',verticalAlign:'top'}}>{g.naam}</th><td style={{padding:'15px 12px',borderBottom:'1px solid var(--line)',verticalAlign:'top'}}>{g.buiten}</td><td style={{padding:'15px 12px',borderBottom:'1px solid var(--line)',verticalAlign:'top'}}>{g.binnen}</td><td style={{padding:'15px 12px',borderBottom:'1px solid var(--line)',verticalAlign:'top'}}>{g.aandacht}</td></tr>)}</tbody>
  </table></div>
 </section>
 <section className="section" style={{background:'#f0f2e8'}}><div className="container">
  <div className="section-head"><div><div className="eyebrow">Praktische aanpak</div><h2>In april zaaien in zes stappen</h2></div><p>Een overzichtelijke planning voorkomt een vensterbank vol te grote plantjes.</p></div>
  <div className="grid">{stappen.map(s=><div className="tile" key={s[0]}><span className="pill">{s[0]} · Stap</span><h3>{s[1]}</h3><p>{s[2]}</p></div>)}</div>
 </div></section>
 <section className="section container"><div className="prose">
  <h2>Welke groenten kun je direct buiten zaaien?</h2>
  <p>April is doorgaans geschikt voor veel koele voorjaarsteelten. Volgens de Royal Horticultural Society kun je dan onder meer radijs, wortel, biet, sla, snijbiet, erwten en uien buiten zaaien. Dat geldt wanneer grond en weer geschikt zijn: bij een natte koudeperiode stel je het zaaien beter uit. Op een balkon is de beperkte hoeveelheid potgrond extra gevoelig voor temperatuurschommelingen.</p>
  <h2>Hoe zaai je radijs en sla voor een gespreide oogst?</h2>
  <p>Zaai liever iedere keer een kleine portie dan de hele bak in één keer. Radijs groeit snel en is geschikt voor direct zaaien in een pot met drainage. Pluksla kun je eveneens rechtstreeks zaaien of beschermd opkweken. Houd de grond gelijkmatig vochtig en dun te dicht staande zaailingen uit. Zie <Link href="/groenten-kweken/radijs-kweken-in-pot/" style={{textDecoration:'underline'}}>radijs kweken in pot</Link> en <Link href="/groenten-kweken/sla-kweken-in-bak/" style={{textDecoration:'underline'}}>sla kweken in bak</Link>.</p>
  <h2>Kun je wortelen en bieten in een balkonbak kweken?</h2>
  <p>Ja, met een geschikte, voldoende diepe bak. Wortelen houden niet van verplanten: zaai ze rechtstreeks waar de penwortel zich moet ontwikkelen. Kortere rassen zijn praktisch in potten. Rode biet heeft ruimte nodig om een knol te vormen. Gebruik niet te zware of dichtgeslagen grond en houd rekening met de uiteindelijke plantafstand.</p>
  <h2>Wanneer zaai je courgette in april?</h2>
  <p>De RHS adviseert courgettes binnenshuis in april of begin mei te zaaien. Gebruik een afzonderlijk potje per zaad en bied warmte en voldoende licht. Omdat jonge courgettes snel groeien, is de tweede helft van april voor veel balkontelers praktischer dan het begin van de maand. Zet ze pas na het vorstgevaar buiten en laat ze rustig wennen aan wind en zon.</p>
  <h2>Kun je komkommer al buiten zetten?</h2>
  <p>Nee, een gewone komkommer is gevoelig voor kou. Binnen voorzaaien kan in april, maar op een open balkon is het buiten nog vaak te vroeg. Kies later een ras dat geschikt is voor buitenteelt en een grote pot met stevige ondersteuning. Meer tips staan bij <Link href="/groenten-kweken/komkommer-kweken-in-pot/" style={{textDecoration:'underline'}}>komkommer kweken in pot</Link>.</p>
  <h2>Wat doe je met tomaten en paprika's?</h2>
  <p>Heb je in maart binnen gezaaid, zorg dan in april voor veel licht, voldoende ruimte en zo nodig een grotere pot. Zet warmteminnende planten niet ineens buiten na een zonnige dag. Ze moeten eerst afharden en de nachttemperaturen moeten voldoende zacht zijn. Bekijk de gidsen <Link href="/groenten-kweken/tomaten-kweken-in-pot/" style={{textDecoration:'underline'}}>tomaten in pot</Link> en <Link href="/groenten-kweken/paprika-kweken-in-pot/" style={{textDecoration:'underline'}}>paprika in pot</Link>.</p>
  <h2>Welke kruiden zaai je in april?</h2>
  <p>Peterselie, bieslook en koriander kunnen bij geschikte temperaturen in bakken worden gezaaid. Peterselie kiemt soms langzaam, dus geef de grond tijd en laat de bovenlaag niet volledig uitdrogen. Basilicum houdt van warmte en kun je voorlopig beter binnen voorzaaien. De teelt van <Link href="/kruiden-kweken/basilicum-kweken-in-pot/" style={{textDecoration:'underline'}}>basilicum</Link> verschilt daardoor van die van <Link href="/kruiden-kweken/bieslook-kweken-in-pot/" style={{textDecoration:'underline'}}>bieslook</Link>.</p>
  <h2>Kun je in april aardappelen in zak planten?</h2>
  <p>April is een gebruikelijke periode om verschillende vroege en middelvroege pootaardappelen te planten. Gebruik geschikt, ziektevrij pootgoed, een ruime zak met afwatering en houd jonge scheuten bij vorst beschermd. Het uiteindelijke plantmoment hangt af van het weer en het ras. Zie <Link href="/groenten-kweken/aardappelen-kweken-in-zak/" style={{textDecoration:'underline'}}>aardappelen in een kweekzak</Link>.</p>
  <h2>Hoe bescherm je jonge planten tegen late vorst?</h2>
  <p>Controleer de voorspelde minimumtemperatuur en beschut kleine buitenzaaisels met geschikt vliesdoek wanneer dat nodig is. Bevestig afdekkingen goed tegen wind en zorg op zonnige dagen voor ventilatie. Warmteminnende planten uit huis verplaats je niet naar een open balkon zolang koude nachten waarschijnlijk zijn.</p>
  <h2>Waar moet je extra op letten bij balkonpotten?</h2>
  <p>Een pot warmt sneller op dan een groot tuinbed, maar kan ook sneller uitdrogen en afkoelen. Zorg voor goede drainage en controleer de vochtigheid na wind of felle zon. Een stapel grote bakken is niet automatisch veilig: kijk bij de inrichting ook naar de <Link href="/balkon-inrichten/gewicht-balkonmoestuin/" style={{textDecoration:'underline'}}>belasting van het balkon</Link>. Lees over <Link href="/moestuin-verzorgen/water-geven/" style={{textDecoration:'underline'}}>water geven</Link> en <Link href="/moestuin-verzorgen/potgrond/" style={{textDecoration:'underline'}}>potgrond kiezen</Link>.</p>
  <h2>Wat kun je in mei verwachten?</h2>
  <p>Mei biedt doorgaans meer mogelijkheden voor warmteminnende gewassen, maar wacht bij het uitplanten nog steeds tot het risico op nachtvorst voorbij is. Blijf kleine hoeveelheden bladgroenten en radijs zaaien als je plaats hebt. Bekijk de <Link href="/zaaikalender/" style={{textDecoration:'underline'}}>volledige zaaikalender</Link> en vergelijk met <Link href="/zaaikalender/wat-zaaien-in-maart/" style={{textDecoration:'underline'}}>wat je in maart kon zaaien</Link>.</p>
  <div className="notice"><strong>Bronnen en transparantie</strong><p><a href="https://www.rhs.org.uk/advice/grow-your-own/in-month/april-jobs" target="_blank" rel="noopener noreferrer">RHS — April jobs</a>, <a href="https://www.rhs.org.uk/vegetables/courgettes/grow-your-own" target="_blank" rel="noopener noreferrer">RHS — Grow courgettes</a>, <a href="https://www.intratuin.nl/inspiratie/moestuinkalender-april" target="_blank" rel="noopener noreferrer">Intratuin — Moestuinkalender april</a> en <a href="https://www.tuinadvies.nl/tuininfo/tuinonderhoud-kalender/tuinkalender/moestuin-april-voorbereiding/" target="_blank" rel="noopener noreferrer">Tuinadvies — Moestuin in april</a>.</p><p style={{marginBottom:0}}>Dit artikel biedt algemene zaaiaanwijzingen voor Nederland. Het is geen plaatselijke vorstvoorspelling; er zijn geen eigen teeltproeven uitgevoerd.</p></div>
 </div></section>
</main>; }
