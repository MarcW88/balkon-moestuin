import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Bladluis op groenten: herkennen en bestrijden op je balkon',
  description: 'Bladluis op tomaat, paprika, sla of kruiden? Leer bladluizen herkennen, veilig verwijderen en natuurlijke vijanden helpen met dit praktische stappenplan.',
  alternates: { canonical: '/problemen/bladluis-op-groenten/' },
  robots: { index: false, follow: true },
};

const signals = [
  { sign: 'Groene, zwarte of soms roze insectjes in groepjes', cause: 'Waarschijnlijk bladluizen', check: 'Kijk bij jonge scheuten, stengels en onder het blad.', act: 'Tel globaal hoeveel kolonies er zijn en bekijk of de plant groeit.' },
  { sign: 'Kleverige bladeren of potrand', cause: 'Honingdauw door sapzuigende luizen', check: 'Voel of er plakkerige druppeltjes onder een kolonie zitten.', act: 'Spoel plaatselijk met schoon water en controleer opnieuw.' },
  { sign: 'Omkrullend of misvormd jong blad', cause: 'Mogelijke bladluisschade, maar niet de enige oorzaak', check: 'Vouw een blad voorzichtig open en zoek naar kleine luizen.', act: 'Verwijder bereikbare luizen met de hand of water.' },
  { sign: 'Mieren op scheuten met luizen', cause: 'Mieren kunnen bladluizen beschermen voor honingdauw', check: 'Volg of de mieren steeds naar dezelfde kolonie lopen.', act: 'Beperk de toegang van mieren waar dat veilig en haalbaar is.' },
  { sign: 'Witte velletjes tussen de luizen', cause: 'Afgeworpen huidjes van groeiende bladluizen', check: 'Kijk of er levende luizen vlakbij zitten.', act: 'Maak een foto en volg het aantal levende luizen.' },
  { sign: 'Lieveheersbeestjes, zweefvlieglarven of gaasvliegen', cause: 'Natuurlijke vijanden zijn mogelijk al actief', check: 'Zoek naar larven en tekenen van opgegeten kolonies.', act: 'Laat nuttige insecten met rust; vermijd breedwerkende middelen.' },
];

const steps = [
  ['Controleer de onderkant van bladeren','Bekijk vooral jonge groeipunten bij paprika, tomaat, sla en kruiden.'],
  ['Bepaal of ingrijpen nodig is','Een paar luizen op een sterke plant zijn niet automatisch schadelijk; volg kwetsbare zaailingen wel nauwkeurig.'],
  ['Verwijder kleine kolonies','Wrijf luizen voorzichtig weg of knip een zwaar aangetast scheutje alleen weg als de plant dat verdraagt.'],
  ['Spoel gericht met water','Gebruik een zachte maar gerichte straal die bladluizen wegspoelt zonder scheuten te breken.'],
  ['Spaar natuurlijke vijanden','Laat lieveheersbeestjes, zweefvlieglarven en gaasvliegen waar mogelijk hun werk doen.'],
  ['Controleer opnieuw','Bekijk nieuwe groeipunten en de bladonderkanten de dagen erna; herhaal fysieke verwijdering indien nodig.'],
];

export default function AphidGuidePage() {
  return <main>
    <div className="container">
      <nav className="crumb" aria-label="Broodkruimel"><Link href="/">Home</Link> / <Link href="/problemen/">Problemen</Link> / Bladluis op groenten</nav>
      <header className="pagehead">
        <div className="eyebrow">Plagen herkennen · Balkonmoestuin</div>
        <h1>Bladluis op groenten: hoe kom je ervan af?</h1>
        <p className="lead">Zie je kleine groene of zwarte insectjes op de jonge scheuten van je tomaten, paprika's, sla of kruiden? Dan heb je misschien bladluis. Dat hoeft niet meteen een ramp te zijn. Bij een kleine kolonie volstaat vaak gericht verwijderen en opnieuw controleren. Met deze gids herken je de schade en kies je een aanpak zonder onnodige bestrijdingsmiddelen.</p>
      </header>
    </div>
    <section className="section container" style={{paddingTop:0}}>
      <div className="banner">
        <div className="eyebrow" style={{color:'#d3eab5'}}>Kort antwoord</div>
        <h2>Begin met controleren, wegvegen en afspoelen</h2>
        <p>Bladluizen zitten vaak aan de onderkant van bladeren en rond zachte groeipunten. Kleine aantallen kun je laten zitten als er geen schade ontstaat. Wordt een kolonie groot, wrijf de luizen voorzichtig weg of spoel ze met gewoon water van de plant. Herhaal de controle en bescherm natuurlijke vijanden zoals lieveheersbeestjes en zweefvlieglarven.</p>
        <p>Gebruik geen afwasmiddel, azijn, etherische olie of een willekeurig huisgemaakt spuitmengsel: zulke middelen kunnen planten en nuttige insecten beschadigen.</p>
      </div>
    </section>
    <section className="section container" style={{paddingTop:0}}>
      <div className="section-head"><div><div className="eyebrow">Herkennen</div><h2>Welke tekenen wijzen op bladluis?</h2></div><p>Een kenmerk alleen bewijst niet dat bladluis de oorzaak is. Controleer steeds of je de insecten daadwerkelijk ziet.</p></div>
      <div style={{overflowX:'auto'}}><table style={{width:'100%',minWidth:760,borderCollapse:'collapse',textAlign:'left'}}>
        <thead><tr>{['Wat zie je?', 'Wat betekent het?', 'Wat controleren?', 'Eerste actie'].map(h=><th scope="col" key={h} style={{padding:'14px 12px',borderBottom:'2px solid #becdb6'}}>{h}</th>)}</tr></thead>
        <tbody>{signals.map(x=><tr key={x.sign}><th scope="row" style={{padding:'14px 12px',borderBottom:'1px solid var(--line)',verticalAlign:'top'}}>{x.sign}</th><td style={{padding:'14px 12px',borderBottom:'1px solid var(--line)',verticalAlign:'top'}}>{x.cause}</td><td style={{padding:'14px 12px',borderBottom:'1px solid var(--line)',verticalAlign:'top'}}>{x.check}</td><td style={{padding:'14px 12px',borderBottom:'1px solid var(--line)',verticalAlign:'top'}}>{x.act}</td></tr>)}</tbody>
      </table></div>
    </section>
    <section className="section" style={{background:'#f0f2e8'}}><div className="container">
      <div className="section-head"><div><div className="eyebrow">Praktische aanpak</div><h2>Bladluis verwijderen in zes stappen</h2></div><p>Werk van eenvoudig naar gericht en vermijd maatregelen die meer schade veroorzaken dan de bladluis zelf.</p></div>
      <div className="grid">{steps.map((s,i)=><div className="tile" key={s[0]}><span className="pill">{String(i+1).padStart(2,'0')} · Stap</span><h3>{s[0]}</h3><p>{s[1]}</p></div>)}</div>
    </div></section>
    <section className="section container"><div className="prose">
      <h2>Hoe herken je bladluis op een groenteplant?</h2>
      <p>Bladluizen zijn kleine, zachte insecten die plantensap opzuigen. Ze kunnen groen, zwart, roze of geelachtig zijn. Je ziet ze vaak in groepjes langs stengels, aan groeipunten en onder het blad. Sommige exemplaren hebben vleugels. Kijk ook naar witte vervellingshuidjes en glanzende, kleverige honingdauw. Op zichzelf wijst een krullend blad niet met zekerheid op bladluis: droogte, kou en andere insecten kunnen ook een rol spelen.</p>
      <h2>Is bladluis op sla gevaarlijk?</h2>
      <p>Een lichte aantasting hoeft de plant niet te beschadigen, maar luizen tussen dicht opeengegroeide bladeren zijn lastig weg te spoelen. Controleer de binnenkant van slabladeren al tijdens de groei en was geoogste bladeren zorgvuldig voordat je ze eet. Zijn bladeren sterk vervuild, beschadigd of beschimmeld, gebruik ze dan niet. Voor een betere teeltstart lees je <Link href="/groenten-kweken/sla-kweken-in-bak/" style={{textDecoration:'underline'}}>sla kweken in bak</Link>.</p>
      <h2>Wat doe je bij bladluis op tomaten en paprika's?</h2>
      <p>Controleer de jonge scheuten en de onderzijde van de bladeren. Luizen kunnen honingdauw achterlaten en de groei van jonge planten afremmen. Spoel ze indien nodig gericht weg en voorkom dat sterke waterstralen de stengels beschadigen. Controleer of de planten voldoende licht, water en wortelruimte hebben. Zie <Link href="/groenten-kweken/tomaten-kweken-in-pot/" style={{textDecoration:'underline'}}>tomaten kweken in pot</Link> en <Link href="/groenten-kweken/paprika-kweken-in-pot/" style={{textDecoration:'underline'}}>paprika kweken in pot</Link>.</p>
      <h2>Hoe verwijder je bladluizen zonder gif?</h2>
      <p>Bij kleine aantallen kun je de dieren met de vingers of een vochtig doekje verwijderen. Grotere kolonies kun je met gewoon water van de bladeren spoelen, terwijl je de plant ondersteunt. Zet een lichte balkonpot zo nodig op een veilige plek waar weglopend water geen overlast veroorzaakt. Doe dit niet met een harde straal tegen kwetsbare zaailingen. Controleer na enkele dagen of er nieuwe kolonies verschijnen.</p>
      <h2>Helpen lieveheersbeestjes en gaasvliegen?</h2>
      <p>Ja. Zowel larven als sommige volwassen nuttige insecten eten bladluizen. Lieveheersbeestjes, gaasvlieglarven en zweefvlieglarven kunnen een populatie vanzelf verminderen. Daarom adviseren de RHS en UC IPM om deze natuurlijke vijanden te beschermen. Een paar luizen in de tuin zijn ook voedsel voor nuttige insecten. Het kopen en loslaten van lieveheersbeestjes is op een open balkon meestal niet nodig en geeft geen garantie dat ze blijven.</p>
      <h2>Waarom lopen er mieren bij de bladluizen?</h2>
      <p>Bladluizen scheiden suikerrijke honingdauw uit. Mieren eten die honingdauw en kunnen luizen beschermen tegen hun natuurlijke vijanden. Bekijk of er een duidelijke mierenroute naar dezelfde scheuten loopt. Verwijder waar mogelijk de bladluis en neem de oorzaak van de aantrekkingskracht weg. Gebruik geen gevaarlijke of slecht bevestigde barrières op een balkon.</p>
      <h2>Kun je bladluis met afwasmiddel of azijn bestrijden?</h2>
      <p>Gebruik liever geen afwasmiddel, azijn, groene zeep uit de keuken of zelfgemaakte mengsels met olie. Deze zijn niet automatisch veilig voor eetbare gewassen en kunnen bladschade veroorzaken. Ook zogenaamd natuurlijke middelen kunnen bestuivers en andere nuttige insecten treffen. Als je ondanks de niet-chemische aanpak een gewasbeschermingsmiddel overweegt, controleer dan of het in Nederland is toegelaten voor die specifieke toepassing en het eetbare gewas, en volg het etiket inclusief eventuele wachttijd.</p>
      <h2>Moet je alle aangetaste bladeren wegsnijden?</h2>
      <p>Nee. Verwijder niet onnodig veel gezond blad: de plant heeft het nodig voor de groei. Een zwaar bezette groeipunt of een sterk vervormd blad kun je soms voorzichtig wegnemen als de plant voldoende gezond blad overhoudt. Laat natuurlijk aanwezige larven van nuttige insecten zitten wanneer dat kan. Bij duidelijke virusachtige vlekken of aanhoudende misvorming is een nauwkeuriger diagnose nodig.</p>
      <h2>Kan bladluis andere planten aantasten?</h2>
      <p>Ja, gevleugelde bladluizen kunnen zich tussen planten verplaatsen. Niet iedere bladluissoort gebruikt dezelfde waardplanten, maar controleer ook de potten ernaast. Zet pas gekochte planten tijdelijk apart voor inspectie wanneer je daar plaats voor hebt. Overdadig bemesten met stikstof kan veel zachte groei veroorzaken die aantrekkelijk is voor bladluis. Bekijk <Link href="/moestuin-verzorgen/bemesten/" style={{textDecoration:'underline'}}>bemesten van groenten in pot</Link>.</p>
      <h2>Waarom keert bladluis steeds terug?</h2>
      <p>Bladluizen kunnen zich snel vermenigvuldigen en nieuwe gevleugelde dieren kunnen van elders arriveren. Eén behandeling met water is daarom geen definitieve oplossing. Controleer vooral de onderkant van nieuw blad, verwijder kolonies vroeg en bescherm natuurlijke vijanden. Gebruik niet preventief middelen die nuttige insecten doden. Bij veel plakkerige bladeren is ook het verwijderen van honingdauw zinvol.</p>
      <h2>Hoe voorkom je nieuwe aantastingen op een balkon?</h2>
      <p>Zorg voor voldoende lucht en ruimte tussen je planten, controleer jonge scheuten regelmatig en voorkom grote schommelingen in water en bemesting. Een gemengde beplanting met enkele bloeiende kruiden kan nuttige insecten voedsel bieden, zonder dat bladluizen daarmee gegarandeerd verdwijnen. Lees over <Link href="/balkon-inrichten/moestuin-op-balkon-indeling/" style={{textDecoration:'underline'}}>de indeling van je balkonmoestuin</Link> en <Link href="/moestuin-verzorgen/water-geven/" style={{textDecoration:'underline'}}>water geven</Link>.</p>
      <div className="notice"><strong>Bronnen en transparantie</strong><p><a href="https://www.rhs.org.uk/biodiversity/aphids" target="_blank" rel="noopener noreferrer">RHS — Aphids</a>, <a href="https://www.rhs.org.uk/prevention-protection/controlling-pests-and-diseases-without-chemicals" target="_blank" rel="noopener noreferrer">RHS — Controlling pests without chemicals</a>, <a href="https://ipm.ucanr.edu/home-and-landscape/aphids/" target="_blank" rel="noopener noreferrer">University of California IPM — Aphids</a> en <a href="https://ipm.cahnr.uconn.edu/scouting-guidelines-and-biological-control-options-for-vegetable-bedding-plants-and-transplants/" target="_blank" rel="noopener noreferrer">UConn — Monitoring aphids on vegetables</a>.</p><p style={{marginBottom:0}}>Dit is algemene informatie voor groenten op een balkon. Zonder inspectie kunnen we een specifieke plaag niet bevestigen; er zijn geen eigen bestrijdingsproeven uitgevoerd.</p></div>
    </div></section>
  </main>;
}
