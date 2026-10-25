import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Paprika kweken in pot op je balkon: zaaien en verzorgen',
  description: 'Paprika kweken in een pot? Ontdek welke paprikaplanten geschikt zijn voor je balkon, wanneer je zaait, welke pot je kiest en hoe je water geeft en oogst.',
  alternates: { canonical: '/groenten-kweken/paprika-kweken-in-pot/' },
  robots: { index: false, follow: true },
};

const choices = [
  { type: 'Compacte of dwergpaprika', suitable: 'Weinig ruimte op een warm balkon', detail: 'Kies een ras waarvan de uiteindelijke hoogte bij de ruimte past. Kleinere vruchten rijpen vaak eerder dan heel grote paprika’s.' },
  { type: 'Puntpaprika', suitable: 'Beschutte, zonnige plek', detail: 'Er zijn langwerpige, zoete rassen. Controleer de verwachte planthoogte en de benodigde groeiduur.' },
  { type: 'Blokpaprika', suitable: 'Warme plek met lang groeiseizoen', detail: 'Grote vruchten hebben tijd nodig om te rijpen. Op een koel balkon kan de oogst beperkt blijven.' },
];

export default function PaprikaKwekenInPot() {
  return <main>
    <div className="container">
      <nav className="crumb" aria-label="Broodkruimel"><Link href="/">Home</Link> / <Link href="/groenten-kweken/">Groenten kweken</Link> / Paprika kweken in pot</nav>
      <header className="pagehead">
        <div className="eyebrow">Groenten kweken · Warmteminnende gewassen</div>
        <h1>Paprika kweken in pot op je balkon</h1>
        <p className="lead">Paprika’s kunnen uitstekend in potten groeien, maar ze hebben veel warmte en zon nodig om vruchten te vormen en te laten rijpen. Op een Nederlands balkon is een beschutte plek daarom belangrijker dan een ingewikkeld kweeksysteem. Kies een compact ras, geef de wortels ruimte en begin niet te vroeg buiten.</p>
      </header>
    </div>

    <section className="section container" style={{paddingTop:0}}>
      <div className="banner">
        <div className="eyebrow" style={{color:'#d3eab5'}}>Eerst de haalbaarheid beoordelen</div>
        <h2>Kan paprika buiten op jouw balkon?</h2>
        <p>Een zonnig balkon tegen een warme, beschutte gevel is kansrijker dan een winderige plek met weinig directe zon. Paprika’s groeien het best bij aanhoudende warmte. De Royal Horticultural Society adviseert voor buiten uitplanten nachttemperaturen die betrouwbaar boven ongeveer 12 °C liggen; voor groei is warmer doorgaans beter.</p>
        <p>Reken in een koel of wisselvallig seizoen op een beperktere oogst dan onder glas. Heb je maar enkele uren daglicht, kies dan liever bladgroenten.</p>
      </div>
    </section>

    <section className="section container" style={{paddingTop:0}}>
      <div className="section-head"><div><div className="eyebrow">Het juiste ras</div><h2>Welke paprika is geschikt voor een pot?</h2></div><p>Het woord ‘paprika’ zegt weinig over de uiteindelijke hoogte en de tijd tot rijping. Kijk vóór aankoop naar de rasbeschrijving.</p></div>
      <div style={{overflowX:'auto'}}>
        <table style={{width:'100%',borderCollapse:'collapse',minWidth:650,textAlign:'left'}}>
          <thead><tr>{['Type','Geschikt voor','Waarop letten?'].map(h=><th key={h} scope="col" style={{padding:'14px 12px',borderBottom:'2px solid #becdb6'}}>{h}</th>)}</tr></thead>
          <tbody>{choices.map(c=><tr key={c.type}><th scope="row" style={{padding:'15px 12px',borderBottom:'1px solid var(--line)',verticalAlign:'top'}}>{c.type}</th><td style={{padding:'15px 12px',borderBottom:'1px solid var(--line)',verticalAlign:'top'}}>{c.suitable}</td><td style={{padding:'15px 12px',borderBottom:'1px solid var(--line)',verticalAlign:'top'}}>{c.detail}</td></tr>)}</tbody>
        </table>
      </div>
      <p style={{fontSize:14,color:'var(--muted)',marginTop:14}}>Een paprika die groen wordt verkocht, kan vaak later verder kleuren. De uiteindelijke kleur hangt af van het ras; niet elke vrucht wordt rood.</p>
    </section>

    <section className="section" style={{background:'#f0f2e8'}}>
      <div className="container">
        <div className="section-head"><div><div className="eyebrow">Van zaaien tot oogsten</div><h2>Zo kweek je paprika in een pot</h2></div><p>Met deze werkwijze houd je rekening met de lange, warme groeiperiode die paprika nodig heeft.</p></div>
        <div className="grid">
          <div className="tile"><span className="pill">01 · Voorzaaien</span><h3>Begin warm en licht binnenshuis</h3><p>Voor buitenkweek kun je doorgaans in maart of begin april binnen zaaien. Zaad kiemt het best bij circa 18–21 °C. Houd jonge planten na opkomst licht en voorkom dat de grond kletsnat blijft.</p></div>
          <div className="tile"><span className="pill">02 · Oppotten</span><h3>Geef zaailingen meer ruimte</h3><p>Verpot voorzichtig zodra de eerste echte blaadjes verschijnen. Zet iedere jonge plant in een eigen pot zodat de wortels zich kunnen ontwikkelen.</p></div>
          <div className="tile"><span className="pill">03 · Afharden</span><h3>Laat ze aan buiten wennen</h3><p>Laat planten gedurende ongeveer twee weken geleidelijk wennen aan wind en zon. Bescherm ze in de tussentijd tegen koude nachten en plotseling felle middagzon.</p></div>
          <div className="tile"><span className="pill">04 · Definitieve pot</span><h3>Plant ruim en met drainage</h3><p>Een pot van minstens circa 30 cm doorsnede is een praktisch uitgangspunt voor één plant. Kies geschikte, bij voorkeur turfvrije potgrond en zorg dat overtollig water kan weglopen.</p></div>
          <div className="tile"><span className="pill">05 · Verzorging</span><h3>Houd vocht en voeding op peil</h3><p>Controleer in de zomer regelmatig de potgrond. Geef water als dat nodig is en gebruik vanaf de bloei voeding met relatief veel kalium volgens de productinstructies.</p></div>
          <div className="tile"><span className="pill">06 · Oogst</span><h3>Pluk groene of rijpe vruchten</h3><p>Oogst wanneer de vruchten vol en glanzend zijn. Laat ze eventueel verder kleuren als het seizoen en het ras dat toelaten. In de nazomer kan koude de rijping vertragen.</p></div>
        </div>
      </div>
    </section>

    <section className="section container"><div className="prose">
      <h2>Hoeveel zon en warmte heeft paprika nodig?</h2>
      <p>Paprika’s willen veel direct licht en beschutting tegen wind. Op een zuidbalkon kan een plek bij een warme muur goed werken, zolang de potgrond niet uitdroogt. Minder zon betekent vaak tragere groei en minder rijpe vruchten. Lees daarom ook de gids over een <Link href="/moestuin-beginnen/balkon-op-het-zuiden/" style={{textDecoration:'underline'}}>moestuin op een zuidbalkon</Link>.</p>
      <p>Warmte heeft wel grenzen. Langdurige temperaturen boven ongeveer 30 °C kunnen de vruchtzetting verminderen. Zeker bij een beschutte gevel of achter glas moet je de temperatuur bewaken en zo nodig ventileren of tijdelijk schaduw geven.</p>

      <h2>Welke pot en welke potgrond gebruik je?</h2>
      <p>Kies voor één plant een stabiele pot met minimaal ongeveer 30 cm diameter, afhankelijk van het ras. Grotere planten kunnen meer wortelruimte vragen. Zet de plant op dezelfde diepte als in de vorige pot en geef een steun wanneer de stengels zwaar worden door vruchten. Gebruik een geschikte potgrond voor containers; drainagegaten zijn belangrijker dan een decoratieve laag hydrokorrels.</p>
      <p>Een grote pot met natte grond is zwaar. Controleer bij twijfel de draagkracht van het balkon en bevestig potten nooit onveilig aan een reling.</p>

      <h2>Hoe vaak moet je paprika in pot water geven?</h2>
      <p>Geef niet automatisch elke dag dezelfde hoeveelheid water. Voel aan de potgrond en houd die gelijkmatig vochtig zonder dat de wortels voortdurend in water staan. Een pot kan op hete, droge dagen dagelijks controle en water nodig hebben. Laat je de plant sterk uitdrogen, dan kunnen bloemen afvallen.</p>
      <p>Gebruik vanaf de bloei een geschikte voeding voor vruchtgewassen, volgens de aanwijzingen op de verpakking. Meer mest geeft niet vanzelf meer vruchten.</p>

      <h2>Waarom krijgt mijn paprikaplant wel bloemen maar geen paprika’s?</h2>
      <p>Controleer eerst de temperatuur en het vocht. Te koude nachten en extreme hitte kunnen de vruchtzetting beperken. Ook uitdrogen kan leiden tot het afvallen van bloemknoppen. Paprika’s zijn doorgaans zelfbestuivend, dus je hoeft niet meteen een bestuivingsproduct aan te schaffen. Geef de plant stabielere omstandigheden en wacht af of volgende bloemen wel vruchten vormen.</p>

      <h2>Wanneer kunnen paprikaplanten buiten in Nederland?</h2>
      <p>Begin buiten pas wanneer de nachten betrouwbaar zacht zijn en er geen vorstrisico meer is. Een vaste datum is daarvoor niet veilig: mei kan koud uitvallen. De RHS adviseert uitplanten op een beschutte buitenplek bij nachttemperaturen boven ongeveer 12 °C, doorgaans laat in het voorjaar of vroeg in de zomer. Controleer dus de weersverwachting en gebruik de <Link href="/zaaikalender/" style={{textDecoration:'underline'}}>zaaikalender</Link> als planning, niet als garantie.</p>

      <h2>Kan ik een paprika groen oogsten?</h2>
      <p>Ja, paprika’s zijn vaak groen oogstbaar voordat ze hun uiteindelijke kleur krijgen. De vruchten worden bij verdere rijping meestal zoeter. Aan een plant laten hangen kost tijd, en juist die tijd kan op een Nederlands balkon in het najaar ontbreken. Oogst dus naar smaak en omstandigheden, in plaats van op één vaste kleur te wachten.</p>

      <h2>Wat heb je echt nodig?</h2>
      <p>Voor één plant volstaan een passende pot, potgrond, een gieter, eventueel een steun en op het juiste moment voeding. Je hoeft geen compleet kweeksysteem aan te schaffen. Voor een overzicht van het basismateriaal kun je terecht bij <Link href="/moestuin-beginnen/wat-heb-je-nodig/" style={{textDecoration:'underline'}}>wat heb je nodig voor een balkonmoestuin</Link>. Andere teeltideeën vind je onder <Link href="/groenten-kweken/" style={{textDecoration:'underline'}}>groenten kweken</Link>.</p>

      <div className="notice">
        <strong>Bronnen en redactionele transparantie</strong>
        <p><a href="https://www.rhs.org.uk/vegetables/peppers/grow-your-own" target="_blank" rel="noopener noreferrer">Royal Horticultural Society — How to grow sweet peppers</a>, <a href="https://www.rhs.org.uk/vegetables/containers" target="_blank" rel="noopener noreferrer">RHS — Vegetables in containers</a> en <a href="https://www.rhs.org.uk/container-gardening/growing-plants-in-containers" target="_blank" rel="noopener noreferrer">RHS — Growing plants in containers</a>.</p>
        <p style={{marginBottom:0}}>Deze gids is gebaseerd op gepubliceerde tuinbouwinformatie. Er zijn voor deze pagina geen eigen paprikateeltproeven of producttests uitgevoerd.</p>
      </div>
    </div></section>
  </main>;
}