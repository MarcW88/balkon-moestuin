import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Wat zaaien in juni? Zaaikalender voor je balkon',
  description: 'Wat kun je in juni zaaien op je balkon? Ontdek bonen, wortels, bieten, snijbiet en kruiden, met tips voor zomerhitte, water en herfstteelt.',
  alternates: { canonical: '/zaaikalender/wat-zaaien-in-juni/' },
  robots: { index: false, follow: true },
};

const crops = [
  { name: 'Stam- en stokbonen', place: 'Direct buiten in warme potgrond', timing: 'Begin tot eind juni', care: 'Stokbonen vragen stevige steun; struikbonen zijn vaak praktischer voor kleine balkons.' },
  { name: 'Wortelen', place: 'Direct in een diepe bak', timing: 'Vooral begin tot half juni, afhankelijk van ras', care: 'Zaai niet voor in trays: de penwortel groeit het best waar hij blijft staan.' },
  { name: 'Rode bieten', place: 'Direct buiten in een ruime bak', timing: 'Gedurende juni bij geschikt weer', care: 'Dun zaailingen uit en geef gelijkmatig water.' },
  { name: 'Snijbiet', place: 'Direct buiten', timing: 'Heel juni mogelijk', care: 'Oogst later de buitenste bladeren; geef extra aandacht bij droogte.' },
  { name: 'Pluksla en radijs', place: 'Direct buiten op een lichte, niet te hete plek', timing: 'Kleine porties; bij hitte liever wachten', care: 'Bij warm, droog weer kunnen planten doorschieten of scherp en bitter worden.' },
  { name: 'Boerenkool en palmkool', place: 'Voorzaaien of direct buiten, afhankelijk van ras', timing: 'Juni voor een latere oogst', care: 'Plan ruimte in: volwassen kool wordt groter dan het jonge plantje.' },
  { name: 'Koriander, dille en basilicum', place: 'Direct buiten wanneer het warm genoeg is', timing: 'Juni, ras- en weerafhankelijk', care: 'Zaai basilicum pas op een warme plek; koriander kan in hitte snel doorschieten.' },
  { name: 'Courgette en buitenkomkommer', place: 'Direct buiten in een warme, beschutte pot', timing: 'Bij voorkeur vroeg in juni', care: 'Kies compacte rassen; een late start kan de oogstperiode verkorten.' },
];

const steps = [
  ['Kijk welke bakken vrijkomen', 'Na de oogst van radijs of sla kun je dezelfde bak gebruiken voor een nieuwe, passende teelt.'],
  ['Controleer zon, wind en warmte', 'Bij felle middagzon kan een kleine pot snel uitdrogen. Gebruik zo nodig een plek met lichte middagschaduw voor sla.'],
  ['Zaai direct waar dat logisch is', 'Bonen, wortels, bieten en radijs worden doorgaans direct in hun uiteindelijke pot of bak gezaaid.'],
  ['Volg het zaadzakje', 'Let op ras, zaaidiepte, temperatuur en plantafstand. Een algemene maandkalender is geen garantie.'],
  ['Geef gericht water', 'Houd de bovenlaag tijdens kieming vochtig, zonder natte grond langdurig te laten staan.'],
  ['Plan voor juli en de herfst', 'Zaai kleine hoeveelheden snelgroeiende groenten en reserveer ruimte voor latere kolen of andere herfstteelten.'],
];

export default function JuneSowingPage() {
  return <main>
    <div className="container">
      <nav className="crumb" aria-label="Broodkruimel"><Link href="/">Home</Link> / <Link href="/zaaikalender/">Zaaikalender</Link> / Wat zaaien in juni</nav>
      <header className="pagehead">
        <div className="eyebrow">Zaaikalender · Juni</div>
        <h1>Wat kun je zaaien in juni op je balkon?</h1>
        <p className="lead">Juni is niet alleen een oogstmaand. Je kunt nog bonen, wortelen, bieten, snijbiet en kruiden zaaien, en soms een laatste vroege ronde met courgette of buitenkomkommer beginnen. De uitdaging verschuift wel: warme potgrond helpt sommige zaden kiemen, maar hitte en droogte kunnen andere gewassen juist dwarszitten.</p>
      </header>
    </div>

    <section className="section container" style={{paddingTop:0}}>
      <div className="banner">
        <div className="eyebrow" style={{color:'#d3eab5'}}>Kort antwoord</div>
        <h2>Zaai zomergroenten én denk alvast aan de nazomer</h2>
        <p>De Royal Horticultural Society noemt voor juni onder meer bonen, bieten, sla, radijs, paksoi en buitenkomkommer. Voor een balkon zijn ook snijbiet, compacte bonen en kruiden interessante keuzes. Zaai niet alles tegelijk: kijk hoeveel ruimte je hebt en wat je al binnenkort kunt oogsten.</p>
        <p>Tomaten en paprika's begin je voor een gewone buitenteelt in juni meestal niet opnieuw uit zaad. Verzorg liever de planten die je eerder hebt opgekweekt.</p>
      </div>
    </section>

    <section className="section container" style={{paddingTop:0}}>
      <div className="section-head">
        <div><div className="eyebrow">Overzicht per gewas</div><h2>Wat zaai je in juni in een balkonbak?</h2></div>
        <p>De mogelijkheden hangen af van het ras, de warmte en de grootte van je bak. Controleer altijd de zaadverpakking.</p>
      </div>
      <div style={{overflowX:'auto'}}>
        <table style={{width:'100%',minWidth:740,borderCollapse:'collapse',textAlign:'left'}}>
          <thead><tr>{['Gewas', 'Waar zaaien?', 'Wanneer?', 'Aandachtspunt'].map(h=><th scope="col" key={h} style={{padding:'14px 12px',borderBottom:'2px solid #becdb6'}}>{h}</th>)}</tr></thead>
          <tbody>{crops.map(c=><tr key={c.name}>
            <th scope="row" style={{padding:'15px 12px',borderBottom:'1px solid var(--line)',verticalAlign:'top'}}>{c.name}</th>
            <td style={{padding:'15px 12px',borderBottom:'1px solid var(--line)',verticalAlign:'top'}}>{c.place}</td>
            <td style={{padding:'15px 12px',borderBottom:'1px solid var(--line)',verticalAlign:'top'}}>{c.timing}</td>
            <td style={{padding:'15px 12px',borderBottom:'1px solid var(--line)',verticalAlign:'top'}}>{c.care}</td>
          </tr>)}</tbody>
        </table>
      </div>
    </section>

    <section className="section" style={{background:'#f0f2e8'}}>
      <div className="container">
        <div className="section-head"><div><div className="eyebrow">Praktische aanpak</div><h2>In juni zaaien in zes stappen</h2></div><p>Zo gebruik je kleine bakken efficiënt zonder zaden of water te verspillen.</p></div>
        <div className="grid">{steps.map((s,i)=><div className="tile" key={s[0]}><span className="pill">{String(i+1).padStart(2,'0')} · Stap</span><h3>{s[0]}</h3><p>{s[1]}</p></div>)}</div>
      </div>
    </section>

    <section className="section container"><div className="prose">
      <h2>Kun je in juni nog sperziebonen zaaien?</h2>
      <p>Ja. Zowel struikbonen als stokbonen kunnen bij voldoende warme grond rechtstreeks buiten worden gezaaid. Struikbonen hebben minder hoogte nodig en zijn vaak een goede keuze voor een klein balkon. Stokbonen vragen stevige steun die veilig tegen wind kan. Gebruik een ruime pot met afwateringsgaten en volg de zaaiafstand op de verpakking. Laat de grond na het zaaien niet langdurig kletsnat blijven.</p>

      <h2>Welke snelle groenten kun je blijven zaaien?</h2>
      <p>Radijs en pluksla zijn geschikt om in kleine hoeveelheden na elkaar te proberen. In zeer warm weer kiemen sommige slarassen slecht of schieten ze snel door. Radijs kan bij droogte scherp en vezelig worden. Zoek voor bladgroenten eventueel een plek met lichte middagschaduw en houd de wortelzone gelijkmatig vochtig. Bekijk <Link href="/groenten-kweken/radijs-kweken-in-pot/" style={{textDecoration:'underline'}}>radijs kweken in pot</Link> en <Link href="/groenten-kweken/sla-kweken-in-bak/" style={{textDecoration:'underline'}}>sla kweken in bak</Link>.</p>

      <h2>Is juni een goede maand voor wortel en rode biet?</h2>
      <p>Beide kunnen in juni rechtstreeks in een geschikte bak. Wortels maken een penwortel en vragen een voldoende diepe, losse grondlaag; kies voor potten eventueel een korter wortelras. Rode bieten hebben ook ruimte nodig om uit te groeien. Dun jonge planten uit wanneer ze te dicht staan. In warme, droge periodes is regelmatig controleren van de grond belangrijker dan een vast gietschema.</p>

      <h2>Welke kruiden kun je buiten zaaien?</h2>
      <p>In juni kunnen onder geschikte omstandigheden onder meer dille, koriander, peterselie en basilicum buiten worden gezaaid. Basilicum groeit pas goed als het warm genoeg is en houdt niet van koude wind. Koriander kan bij hoge temperaturen vroeg in bloei schieten; kleine herhaalde zaaisels zijn praktischer. Voor de verzorging van <Link href="/kruiden-kweken/basilicum-kweken-in-pot/" style={{textDecoration:'underline'}}>basilicum</Link> en <Link href="/kruiden-kweken/peterselie-kweken-in-pot/" style={{textDecoration:'underline'}}>peterselie</Link> staan aparte gidsen klaar.</p>

      <h2>Kun je courgette of komkommer nog zaaien?</h2>
      <p>Vroeg in juni kan dat bij voldoende warmte, mits je een passend ras en genoeg groeiruimte hebt. Courgette heeft een grote pot nodig en kan veel plaats innemen. Voor komkommer op het balkon is een ras voor buitenteelt en een stabiele klimsteun van belang. Een late start verkort vaak de mogelijke oogstperiode. Lees <Link href="/groenten-kweken/komkommer-kweken-in-pot/" style={{textDecoration:'underline'}}>komkommer kweken in pot</Link>.</p>

      <h2>Waarom zaai je in juni al boerenkool?</h2>
      <p>Wie later in het jaar wil oogsten, kan in juni alvast winterkolen zoals boerenkool of palmkool opkweken. Controleer of het ras geschikt is voor de gewenste zaaitijd. Het jonge plantje lijkt klein, maar de volwassen plant vraagt voldoende wortelruimte. In een kleine balkonbak kan een compact ras of een beperkt aantal planten beter passen dan een volle rij.</p>

      <h2>Welke groenten kun je in juni oogsten?</h2>
      <p>Afhankelijk van je eerdere zaaitijd kunnen radijs, sla, spinazie, kruiden, tuinbonen, erwten en vroege aardappelen klaar zijn. Ook aardbeien beginnen vaak volop vruchten te leveren. Pluk op tijd en laat bij bladgewassen de groeikern intact als het ras geschikt is om herhaald te oogsten. Zie <Link href="/fruit-kweken/aardbeien-kweken-in-pot/" style={{textDecoration:'underline'}}>aardbeien kweken in pot</Link> en <Link href="/groenten-kweken/aardappelen-kweken-in-zak/" style={{textDecoration:'underline'}}>aardappelen in zak</Link>.</p>

      <h2>Hoe voorkom je uitdroging en schimmel?</h2>
      <p>Bij warm weer drogen vooral kleine, donkere of winderige potten snel uit. Controleer de grond met je vinger voordat je water geeft. Geef rustig bij de wortels, houd de bladeren waar mogelijk droog en zorg voor voldoende ruimte tussen grote planten. Te natte grond kan eveneens problemen geven. Meer informatie vind je bij <Link href="/moestuin-verzorgen/water-geven/" style={{textDecoration:'underline'}}>water geven</Link> en <Link href="/moestuin-verzorgen/drainage/" style={{textDecoration:'underline'}}>drainage</Link>.</p>

      <h2>Moet je nu nog tomaten en paprika zaaien?</h2>
      <p>Voor een gewone buitenteelt in Nederland is juni doorgaans te laat om deze langzaam opgroeiende vruchtgewassen nog uit zaad te beginnen en een betrouwbare oogst te verwachten. Verzorg liever bestaande planten, bind ze tijdig op en geef water en voeding volgens hun groei. Bekijk <Link href="/groenten-kweken/tomaten-kweken-in-pot/" style={{textDecoration:'underline'}}>tomaten in pot</Link> en <Link href="/groenten-kweken/paprika-kweken-in-pot/" style={{textDecoration:'underline'}}>paprika in pot</Link>.</p>

      <h2>Wat verandert er in juli?</h2>
      <p>In juli krijgen herhaalzaaisels en voorbereidingen voor de herfst meer aandacht. Sommige warmteminnende gewassen kun je dan beter niet meer vanaf zaad starten omdat het seizoen te kort wordt. Houd ruimte vrij voor een volgende ronde bladgroenten. Bekijk de <Link href="/zaaikalender/" style={{textDecoration:'underline'}}>volledige zaaikalender</Link> en vergelijk met <Link href="/zaaikalender/wat-zaaien-in-mei/" style={{textDecoration:'underline'}}>wat je in mei kon zaaien</Link>.</p>

      <div className="notice"><strong>Bronnen en transparantie</strong><p><a href="https://www.rhs.org.uk/advice/grow-your-own/in-month/june-jobs" target="_blank" rel="noopener noreferrer">RHS — June jobs</a>, <a href="https://www.rhs.org.uk/education-learning/school-gardening/resources/food-growing/month-by-month-guide-to-food-growing-summer-term" target="_blank" rel="noopener noreferrer">RHS — Food growing in June</a> en <a href="https://www.intratuin.be/inspiratie/moestuinkalender-juni" target="_blank" rel="noopener noreferrer">Intratuin — Moestuinkalender juni</a>.</p><p style={{marginBottom:0}}>Dit zijn algemene richtlijnen voor Nederlandse balkons. De resultaten hangen af van ras, weer, licht en verzorging; er zijn geen eigen zaai- of oogstproeven uitgevoerd.</p></div>
    </div></section>
  </main>;
}
