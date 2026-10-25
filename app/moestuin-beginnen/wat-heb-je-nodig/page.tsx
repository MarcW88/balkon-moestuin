import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Wat heb je nodig voor een balkonmoestuin? De starterslijst',
  description: 'Wat heb je echt nodig om een moestuin op je balkon te beginnen? Een praktische starterslijst met potten, potgrond, zaden, water en wat je nog niet hoeft te kopen.',
  alternates: { canonical: '/moestuin-beginnen/wat-heb-je-nodig/' },
  robots: { index: false, follow: true },
};

const supplies = [
  { item: 'Potten of een moestuinbak', importance: 'Onmisbaar', advice: 'Kies de maat voor de uiteindelijke plant. Een bak met afwateringsgaten is belangrijker dan een duur model.' },
  { item: 'Potgrond voor containers', importance: 'Onmisbaar', advice: 'Gebruik geschikte, bij voorkeur turfvrije potgrond. Gewone tuingrond is in potten vaak te zwaar of te compact.' },
  { item: 'Zaden of jonge planten', importance: 'Onmisbaar', advice: 'Begin met twee of drie soorten die bij je zonlicht en seizoen passen.' },
  { item: 'Water en een gieter', importance: 'Onmisbaar', advice: 'Je moet bij de potgrond kunnen en regelmatig controleren of water nodig is.' },
  { item: 'Schaaltjes of opvangbak', importance: 'Afhankelijk van de plek', advice: 'Handig om aflopend water op te vangen, maar laat wortels niet permanent in water staan.' },
  { item: 'Klein schepje en handschoenen', importance: 'Handig', advice: 'Vergemakkelijken het vullen en verpotten; vaak kun je met bestaand gereedschap beginnen.' },
  { item: 'Plantensteun', importance: 'Alleen bij bepaalde gewassen', advice: 'Bijvoorbeeld voor sommige tomaten. Een lage bak sla heeft dit niet nodig.' },
  { item: 'Meststof', importance: 'Later, indien nodig', advice: 'De voedingsvoorraad van potgrond is beperkt; volg het advies voor de plant en de verpakking, zonder te overbemesten.' },
  { item: 'Automatische bewatering', importance: 'Optioneel', advice: 'Kan zinvol zijn bij langere afwezigheid, maar test eerst hoeveel water je planten gebruiken.' },
];

export default function WatHebJeNodigPage() {
  return <main>
    <div className="container">
      <nav className="crumb" aria-label="Broodkruimel"><Link href="/">Home</Link> / <Link href="/moestuin-beginnen/">Moestuin beginnen</Link> / Wat heb je nodig?</nav>
      <header className="pagehead">
        <div className="eyebrow">Balkonmoestuin · Starterspakket</div>
        <h1>Wat heb je nodig voor een balkonmoestuin?</h1>
        <p className="lead">Voor je eerste balkonmoestuin heb je geen complete kweektafel of duur startsysteem nodig. Een paar geschikte potten, potgrond, zaden of plantjes en een manier om water te geven vormen de basis. Wat je precies kiest, hangt vooral af van je balkon én van wat je wilt kweken.</p>
      </header>
    </div>
    <section className="section container" style={{paddingTop:0}}>
      <div className="banner">
        <div className="eyebrow" style={{color:'#d3eab5'}}>Voordat je iets koopt</div>
        <h2>Kijk eerst naar licht, ruimte en gewicht</h2>
        <p>Noteer waar je balkon directe zon krijgt en waar je de bakken veilig kunt neerzetten zonder een deur of looproute te blokkeren. Controleer de draagkracht wanneer je grotere bakken wilt plaatsen; natte potgrond en volle waterreservoirs kunnen zwaar zijn. Vraag bij twijfel de verhuurder, VvE of een deskundige om advies.</p>
        <p>Een balkon met weinig zon vraagt andere gewassen dan een warme zuidligging. Pas daarna heeft het zin potten en zaden uit te kiezen.</p>
      </div>
    </section>
    <section className="section container" style={{paddingTop:0}}>
      <div className="section-head"><div><div className="eyebrow">Koop alleen wat je gebruikt</div><h2>De praktische starterslijst</h2></div><p>Het verschil tussen noodzakelijk, handig en optioneel voorkomt dat je begint met een kast vol ongebruikt tuingereedschap.</p></div>
      <div style={{overflowX:'auto'}}>
        <table style={{width:'100%',borderCollapse:'collapse',minWidth:650,textAlign:'left'}}>
          <thead><tr>{['Materiaal','Prioriteit','Waar let je op?'].map(h=><th key={h} scope="col" style={{padding:'14px 12px',borderBottom:'2px solid #becdb6'}}>{h}</th>)}</tr></thead>
          <tbody>{supplies.map(s=><tr key={s.item}><th scope="row" style={{padding:'15px 12px',borderBottom:'1px solid var(--line)',verticalAlign:'top'}}>{s.item}</th><td style={{padding:'15px 12px',borderBottom:'1px solid var(--line)',verticalAlign:'top',fontWeight:700}}>{s.importance}</td><td style={{padding:'15px 12px',borderBottom:'1px solid var(--line)',verticalAlign:'top'}}>{s.advice}</td></tr>)}</tbody>
        </table>
      </div>
    </section>
    <section className="section" style={{background:'#f0f2e8'}}>
      <div className="container">
        <div className="section-head"><div><div className="eyebrow">Kies de basis goed</div><h2>Drie aankopen die meer verschil maken dan accessoires</h2></div><p>Investeer eerst in omstandigheden waarin de wortels gezond blijven en de planten genoeg licht krijgen.</p></div>
        <div className="grid">
          <div className="tile"><span className="pill">01 · De pot</span><h3>Voldoende ruimte en drainage</h3><p>Een tomatenplant vraagt een andere pot dan een paar kruiden. Kies geen willekeurige minipot omdat die op de vensterbank past. Afwateringsgaten zijn essentieel om overtollig water kwijt te kunnen.</p></div>
          <div className="tile"><span className="pill">02 · De grond</span><h3>Een luchtig groeimedium</h3><p>Gebruik potgrond die geschikt is voor groenten of andere containerplanten. Turfvrije varianten zijn verkrijgbaar. Vul geen bakken uitsluitend met zware aarde uit een tuin.</p></div>
          <div className="tile"><span className="pill">03 · De gewassen</span><h3>Begin met een kleine keuze</h3><p>Pluksla, radijs of kruiden kunnen een overzichtelijke start zijn wanneer het licht en de periode passen. Bij veel zon kan een compacte tomaat interessant zijn. Koop niet meer jonge planten dan je goed kunt verzorgen.</p></div>
        </div>
      </div>
    </section>
    <section className="section container">
      <div className="prose">
        <h2>Welke potmaat heb je nodig?</h2>
        <p>Er is geen enkele potmaat die voor alle eetbare planten werkt. Een compact kruid en een vruchtgroente verschillen sterk in wortelruimte en waterverbruik. Volg de aanwijzingen voor de soort en het ras, houd rekening met de volwassen plant en kies liever enkele geschikte bakken dan veel te kleine potjes. Grotere bakken drogen vaak minder snel uit, maar zijn gevuld ook zwaarder.</p>
        <h2>Moet je hydrokorrels onder in de pot doen?</h2>
        <p>Een laag hydrokorrels is geen vervanging voor afwateringsgaten. Het belangrijkste is dat overtollig water weg kan, met een geschikt potmengsel waarin wortels zowel vocht als lucht krijgen. Let op waar het water naartoe loopt, bijvoorbeeld naar een onderbuur. Een opvangschaal kan nuttig zijn, maar leeg die wanneer water erin blijft staan.</p>
        <h2>Zaadjes of jonge planten: wat is slimmer?</h2>
        <p>Zaden zijn een goede keuze voor onder meer radijs en veel bladgroenten die je direct in een bak kunt zaaien. Jonge planten zijn praktisch wanneer je minder tijd hebt voor het opkweken of laat in het seizoen begint. Controleer in beide gevallen de aanbevolen zaai- of plantperiode: warmteminnende planten verdragen geen nachtvorst.</p>
        <h2>Wat kun je voorlopig overslaan?</h2>
        <p>Een automatische irrigatieset, plantenlamp, verticale plantenmuur en uitgebreide gereedschapsset zijn niet nodig om met een paar potten te beginnen. Zulke producten lossen een specifiek probleem op: langdurige afwezigheid, weinig ruimte of een bijzondere teeltopstelling. Bepaal eerst of dat probleem op jouw balkon bestaat. Extra bemesting is pas zinvol volgens de behoefte van de planten en de voedingsvoorraad van de potgrond.</p>
        <h2>Een realistische start met drie containers</h2>
        <p>Stel je hebt een klein balkon met een geschikte hoeveelheid licht. Begin dan bijvoorbeeld met een bak pluksla, een pot bieslook en een bak radijs. Controleer na het zaaien regelmatig de grond en houd bij hoe snel de bakken drogen. Is jouw balkon zonnig en heb je plaats voor een grotere pot? Dan kan een compacte tomaat later een volgende stap zijn.</p>
        <p>Dit is een voorbeeld, geen vaste boodschappenlijst: bij een donker balkon of buiten het geschikte seizoen moet je de keuze aanpassen.</p>
        <h2>Waar lees je verder?</h2>
        <p>Volg eerst <Link href="/moestuin-beginnen/" style={{textDecoration:'underline'}}>het stappenplan om een balkonmoestuin te beginnen</Link>. Bekijk bij ruimtegebrek <Link href="/moestuin-beginnen/klein-balkon/" style={{textDecoration:'underline'}}>de indeling van een klein balkon</Link>. Het verschil tussen <Link href="/moestuin-beginnen/balkon-op-het-zuiden/" style={{textDecoration:'underline'}}>een zonnig balkon</Link> en <Link href="/moestuin-beginnen/balkon-met-weinig-zon/" style={{textDecoration:'underline'}}>een balkon met weinig zon</Link> helpt bij de plantkeuze. Meer informatie over het onderhoud vind je bij <Link href="/moestuin-verzorgen/" style={{textDecoration:'underline'}}>moestuin verzorgen</Link>.</p>
        <div className="notice"><strong>Bronnen en werkwijze</strong><p><a href="https://www.rhs.org.uk/vegetables/containers" target="_blank" rel="noopener noreferrer">RHS — Vegetables in containers</a>, <a href="https://www.rhs.org.uk/container-gardening/growing-plants-in-containers" target="_blank" rel="noopener noreferrer">RHS — Growing plants in containers</a>, <a href="https://www.milieucentraal.nl/huis-en-tuin/tuin/stappenplan-groen-balkon/" target="_blank" rel="noopener noreferrer">Milieu Centraal — Stappenplan groen balkon</a> en <a href="https://extension.umn.edu/garden-and-home/yard-and-garden/gardening-in-minnesota/fertilizing-and-watering-container-plants" target="_blank" rel="noopener noreferrer">University of Minnesota Extension — Watering and fertilizing</a>.</p><p style={{marginBottom:0}}>Deze gids is gebaseerd op tuinbouwinformatie, niet op eigen producttests. Wij hebben geen specifieke pot of bewateringsset getest voor deze pagina.</p></div>
      </div>
    </section>
  </main>;
}
