import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sla kweken in een bak op je balkon: van zaaien tot oogst',
  description: 'Sla kweken in een bak? Kies pluksla of kropsla, zaai op de juiste afstand en leer water geven, uitdunnen, doorschieten voorkomen en oogsten.',
  alternates: {canonical: '/groenten-kweken/sla-kweken-in-bak/'},
  robots: {index: false, follow: true},
};

const types = [
  {kind:'Pluksla',space:'Ongeveer 15 cm bij uitgegroeide planten; voor jonge slablaadjes dichter zaaien en uitdunnen',harvest:'Pluk eerst de buitenste bladeren en laat het hart doorgroeien.',best:'Wie regelmatig kleine hoeveelheden wil oogsten.'},
  {kind:'Kropsla',space:'Circa 30 cm voor grote kroppen, afhankelijk van het ras',harvest:'Snijd de krop zodra hij stevig en voldoende uitgegroeid is.',best:'Wie liever een volledige krop tegelijk oogst.'},
  {kind:'Jonge slablaadjes',space:'Dunner zaaien in rijen of breedwerpig; oogsten voordat planten elkaar verdringen',harvest:'Knip jong blad af en laat groeipunten zo mogelijk intact.',best:'Een compacte bak met snelle, kleine oogsten.'}
];

export default function SlaKwekenInBak() {
return <main>
 <div className="container">
  <nav className="crumb" aria-label="Broodkruimel"><Link href="/">Home</Link> / <Link href="/groenten-kweken/">Groenten kweken</Link> / Sla kweken in bak</nav>
  <header className="pagehead"><div className="eyebrow">Groenten kweken · Bladgroenten</div><h1>Sla kweken in een bak op je balkon</h1><p className="lead">Een bak pluksla is een toegankelijke manier om op een balkon te beginnen met groenten kweken. Je hebt vooral een bak met drainage, geschikte potgrond en voldoende licht nodig. Zaai liever kleine porties achter elkaar dan één volle bak tegelijk: zo kun je langer vers blad oogsten.</p></header>
 </div>
 <section className="section container" style={{paddingTop:0}}>
  <div className="banner"><div className="eyebrow" style={{color:'#d3eab5'}}>De kern van de teelt</div><h2>Voor een balkon is pluksla vaak de makkelijkste keuze</h2><p>Pluksla vormt geen grote vaste krop. Je kunt telkens enkele buitenste bladeren plukken terwijl de plant doorgroeit. Kropsla heeft meer ruimte nodig en oogst je hoofdzakelijk als hele krop. Kies daarom eerst hoe je de sla wilt gebruiken, pas daarna het zaad.</p></div>
 </section>
 <section className="section container" style={{paddingTop:0}}>
  <div className="section-head"><div><div className="eyebrow">Verschillende soorten, andere aanpak</div><h2>Pluksla of kropsla in een bak?</h2></div><p>Het gaat niet alleen om smaak: plantafstand, ruimte en het oogstmoment verschillen.</p></div>
  <div style={{overflowX:'auto'}}><table style={{width:'100%',borderCollapse:'collapse',minWidth:700,textAlign:'left'}}><thead><tr>{['Type','Ruimte in de bak','Oogsten','Geschikt voor'].map(h=><th scope="col" key={h} style={{padding:'14px 12px',borderBottom:'2px solid #becdb6'}}>{h}</th>)}</tr></thead><tbody>{types.map(t=><tr key={t.kind}><th scope="row" style={{padding:'15px 12px',borderBottom:'1px solid var(--line)',verticalAlign:'top'}}>{t.kind}</th><td style={{padding:'15px 12px',borderBottom:'1px solid var(--line)',verticalAlign:'top'}}>{t.space}</td><td style={{padding:'15px 12px',borderBottom:'1px solid var(--line)',verticalAlign:'top'}}>{t.harvest}</td><td style={{padding:'15px 12px',borderBottom:'1px solid var(--line)',verticalAlign:'top'}}>{t.best}</td></tr>)}</tbody></table></div>
  <p style={{color:'var(--muted)',fontSize:14,marginTop:14}}>Afstanden zijn richtwaarden op basis van het teelttype. De aanwijzingen voor jouw ras op de zaadverpakking gaan voor.</p>
 </section>
 <section className="section" style={{background:'#f0f2e8'}}><div className="container"><div className="section-head"><div><div className="eyebrow">Van zaad tot eerste bladeren</div><h2>Zo zaai je sla in een balkonbak</h2></div><p>Een korte, uitvoerbare werkwijze zonder onnodige apparatuur.</p></div>
  <div className="grid">
   <div className="tile"><span className="pill">01 · Kies de bak</span><h3>Neem een brede bak met afwatering</h3><p>Voor een kleine teelt kan een bak van minstens ongeveer 30 cm breed een vertrekpunt zijn. Grotere kroppen hebben meer onderlinge ruimte nodig. Controleer drainagegaten en veilige plaatsing.</p></div>
   <div className="tile"><span className="pill">02 · Vul met potgrond</span><h3>Gebruik geschikte potgrond</h3><p>Vul de bak met vochtige, bij voorkeur turfvrije potgrond voor containers. Maak de bovenkant vlak zonder alles hard aan te drukken.</p></div>
   <div className="tile"><span className="pill">03 · Zaai dun</span><h3>Zaai ongeveer 1 cm diep</h3><p>Verdeel de zaden in een dunne rij of volgens de verpakking. Zaai niet alles tegelijk: een kleine nieuwe portie na ongeveer twee weken maakt de oogst spreidbaar.</p></div>
   <div className="tile"><span className="pill">04 · Dun uit</span><h3>Geef de planten ruimte</h3><p>Wanneer zaailingen groter worden, haal je overtollige plantjes weg. Pluksla heeft doorgaans minder ruimte nodig dan een grote kropsla.</p></div>
   <div className="tile"><span className="pill">05 · Verzorg</span><h3>Houd de grond gelijkmatig vochtig</h3><p>Controleer regelmatig en geef water waar nodig. Een kleine bak droogt op warme of winderige dagen sneller uit; laat geen water permanent onderin staan.</p></div>
   <div className="tile"><span className="pill">06 · Oogst</span><h3>Pluk jong blad of snijd een krop</h3><p>Bij pluksla neem je kleine hoeveelheden van verschillende planten. Kropsla oogst je wanneer de krop goed gevormd is, voordat de plant doorschiet.</p></div>
  </div>
 </div></section>
 <section className="section container"><div className="prose">
  <h2>Waar zet je de bak: zon of halfschaduw?</h2><p>Sla heeft daglicht nodig, maar op een heet balkon kan de felle middagzon nadelig zijn. In het voorjaar kan een zonnige plek gunstig zijn; in een warme zomer helpt lichte schaduw tijdens de heetste uren tegen uitdroging en vroegtijdige bloei. Op een heel donker balkon zal de groei juist sterk vertragen. Bekijk ook <Link href="/moestuin-beginnen/balkon-met-weinig-zon/" style={{textDecoration:'underline'}}>groenten kweken met weinig zon</Link> en <Link href="/moestuin-beginnen/balkon-op-het-zuiden/" style={{textDecoration:'underline'}}>een zonnig balkon op het zuiden</Link>.</p>
  <h2>Wanneer kun je sla zaaien in Nederland?</h2><p>Voor buitenteelt kun je meestal vanaf het voorjaar beginnen; de exacte periode hangt af van het ras, eventuele bescherming en het weer. Voor oogst in zomer en herfst adviseert de RHS bijvoorbeeld opeenvolgende buitenzaaisels van het late voorjaar tot de zomer. Er bestaan ook winterrassen voor beschermde teelt. Lees altijd de zaadverpakking en controleer temperatuur en weersverwachting. Met de <Link href="/zaaikalender/" style={{textDecoration:'underline'}}>zaaikalender</Link> plan je de volgende zaaibeurt.</p>
  <h2>Hoe vaak moet je sla in een bak water geven?</h2><p>Daar is geen vast aantal dagen voor. De potgrond moet voldoende vochtig blijven, maar de bak mag niet voortdurend onder water staan. Controleer de grond met je vinger. Geef zo nodig bij voorkeur in de ochtend water en let bij warm, droog weer extra op. Sterk uitdrogen kan bijdragen aan doorschieten: de plant gaat dan een bloemstengel vormen en het blad kan bitter worden.</p>
  <h2>Hoe voorkom je dat sla doorschiet?</h2><p>Warmte, droogte en de ontwikkelingsfase van de plant kunnen de bloei vervroegen. Zaai op een passend moment, houd de grond gelijkmatig vochtig, gebruik bij hitte een lichter beschaduwde plek en oogst rijpe kroppen op tijd. Is een plant eenmaal ver doorgeschoten, dan helpt extra mest meestal niet om er weer een goede krop van te maken.</p>
  <h2>Wanneer kun je de eerste sla oogsten?</h2><p>Losse blaadjes kunnen bij gunstige omstandigheden al na ongeveer vier tot zes weken geschikt zijn om te plukken. Volgroeide kroppen doen er doorgaans langer over en verschillen per ras, temperatuur en seizoen. Bij pluksla kun je de buitenste bladeren oogsten en de binnenste laten doorgroeien. Snijd niet steeds het hele groeipunt weg als je opnieuw wilt oogsten.</p>
  <h2>Welke problemen kun je tegenkomen?</h2><p>Slakken kunnen jong blad beschadigen, ook op balkons. Controleer tussen en onder bakken als je vraatsporen ziet. Dichte, slecht geventileerde zaaisels kunnen gevoeliger zijn voor schimmelproblemen. Sla met lange, zwakke stengels kan te weinig licht krijgen. Corrigeer eerst de omstandigheden voordat je naar bestrijdingsmiddelen grijpt.</p>
  <h2>Wat heb je nodig om te beginnen?</h2><p>Een geschikte bak, afwatering, potgrond, vers zaad en een gieter zijn meestal voldoende. Een dure kweektafel of automatisch watersysteem is niet noodzakelijk voor één bak sla. Bekijk de <Link href="/moestuin-beginnen/wat-heb-je-nodig/" style={{textDecoration:'underline'}}>starterslijst voor je balkonmoestuin</Link> en andere <Link href="/groenten-kweken/" style={{textDecoration:'underline'}}>groentegidsen</Link>.</p>
  <div className="notice"><strong>Bronnen en transparantie</strong><p><a href="https://www.rhs.org.uk/vegetables/lettuce/grow-your-own" target="_blank" rel="noopener noreferrer">RHS — How to grow lettuces</a>, <a href="https://www.rhs.org.uk/vegetables/cut-come-again-salads" target="_blank" rel="noopener noreferrer">RHS — Cut-and-come-again salads</a> en <a href="https://www.rhs.org.uk/vegetables/containers" target="_blank" rel="noopener noreferrer">RHS — Vegetables in containers</a>.</p><p style={{marginBottom:0}}>Deze informatie is gebaseerd op externe teeltadviezen; wij claimen geen eigen oogstresultaten of producttests.</p></div>
 </div></section>
</main>;
}