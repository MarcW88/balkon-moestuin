import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Moestuin op balkon indelen: slim plan voor zon en ruimte',
  description: 'Hoe deel je een balkonmoestuin in? Maak een praktisch plan voor zon, loopruimte, potten, wind, water en een veilige indeling van klein tot groot balkon.',
  alternates: { canonical: '/balkon-inrichten/moestuin-op-balkon-indeling/' },
  robots: { index: false, follow: true },
};

const zones = [
  { naam: 'Zonnigste plek', planten: 'Tomaat, paprika, aardbei en mediterrane kruiden', reden: 'Veel vruchtgewassen vragen meerdere uren direct zonlicht.', aandacht: 'Controleer hitte en uitdroging op warme dagen.' },
  { naam: 'Lichte halfschaduw', planten: 'Peterselie, bieslook en diverse bladgewassen', reden: 'Deze planten kunnen met minder direct zonlicht toe.', aandacht: 'Niet verwarren met een volledig donkere hoek.' },
  { naam: 'Beschutte vloerzone', planten: 'Grotere, stabiele potten en bakken', reden: 'Minder windvang en vaak makkelijker bereikbaar.', aandacht: 'Een veilige plek volgt uit de gebouwconstructie, niet alleen uit nabijheid van een gevel.' },
  { naam: 'Bereikbare rand of rek', planten: 'Kleine potten met kruiden of pluksla', reden: 'Regelmatig oogsten en controleren blijft eenvoudig.', aandacht: 'Gebruik alleen aantoonbaar veilige systemen; hang niets los boven voorbijgangers.' },
];

const plan = [
  ['01', 'Meet en teken', 'Noteer de binnenmaten, draaicirkel van de deur, eventuele nooduitgang en plekken waar je wilt zitten of lopen.'],
  ['02', 'Observeer de zon', 'Bekijk op een heldere dag waar in ochtend, middag en avond licht valt. Houd rekening met schaduw door de bovenburen en het gebouw.'],
  ['03', 'Controleer gewicht en regels', 'Inventariseer natte plantenbakken, water, meubels en personen. Laat de toegestane belasting en eventuele montagevoorwaarden bevestigen.'],
  ['04', 'Wijs teeltzones aan', 'Reserveer zonnige plekken voor warmteminnende vruchtgewassen; benut lichte halfschaduw voor geschikte kruiden of bladgewassen.'],
  ['05', 'Teken water en onderhoud mee', 'Zorg dat je elke pot veilig kunt bereiken en water kunt geven zonder lekkage of overlast bij benedenburen.'],
  ['06', 'Begin met twee of drie potten', 'Test de loopruimte, droogte en wind een paar weken voordat je extra bakken, rekken of klimplanten toevoegt.'],
];

const layouts = [
  { naam: 'Smal lang balkon', aanpak: 'Eén zijde voor bakken en een doorlopende vrije route langs de andere zijde.', valkuil: 'Een lange bak kan de deur of afvoer blokkeren.' },
  { naam: 'Klein vierkant balkon', aanpak: 'Enkele losse potten en eventueel één stabiel laag rek; behoud een bereikbare middenzone.', valkuil: 'Te veel hoge potten maken de vloer onbruikbaar.' },
  { naam: 'Diep, zonnig balkon', aanpak: 'Grotere vruchtplanten op een geschikte vloerplek en kruiden dichtbij de deur.', valkuil: 'Grote potten, meubels en volle waterreservoirs samen worden zwaar.' },
  { naam: 'Noordgericht balkon', aanpak: 'Benut de lichtste zone voor bladgroenten en verdraagzame kruiden.', valkuil: 'Een hoge kast of schutting kan het weinige licht verder wegnemen.' },
];

export default function BalkonIndelingPage() {
  return <main>
    <div className="container">
      <nav className="crumb" aria-label="Broodkruimel"><Link href="/">Home</Link> / <Link href="/balkon-inrichten/">Balkon inrichten</Link> / Moestuin op balkon indeling</nav>
      <header className="pagehead">
        <div className="eyebrow">Balkon inrichten · Indeling en loopruimte</div>
        <h1>Je moestuin op het balkon slim indelen</h1>
        <p className="lead">Een geslaagde balkonmoestuin begint niet met potten kopen, maar met een plattegrond. Waar valt de zon? Hoe open je de deur? En kun je elke plant bereiken om water te geven en te oogsten? Met een eenvoudige indeling benut je de ruimte zonder het balkon vol of onveilig te maken.</p>
      </header>
    </div>
    <section className="section container" style={{ paddingTop: 0 }}>
      <div className="banner">
        <div className="eyebrow" style={{ color: '#d3eab5' }}>Eerst de ruimte, dan de planten</div>
        <h2>Houd een bruikbare looproute en de deur vrij</h2>
        <p>Een hoge opbrengst is niet veel waard als je iedere dag over potten moet stappen. Teken eerst de deur en de benodigde looproute. Blokkeer nooit een vluchtroute of waterafvoer. Denk ook aan de ruimte die stengels en bladeren later innemen: een jonge tomatenplant blijft niet klein.</p>
        <p>Controleer bij iedere nieuwe opstelling de <Link href="/balkon-inrichten/gewicht-balkonmoestuin/" style={{ color: '#fff', textDecoration: 'underline' }}>belasting van je balkon</Link>. Zonder bouwkundige gegevens kun je de veilige draagkracht niet zelf uit een algemene vuistregel afleiden.</p>
      </div>
    </section>
    <section className="section container" style={{ paddingTop: 0 }}>
      <div className="section-head"><div><div className="eyebrow">Werk met zones</div><h2>Wat zet je waar op het balkon?</h2></div><p>De lichtste, meest beschutte en makkelijkst bereikbare plekken zijn niet altijd dezelfde.</p></div>
      <div style={{ overflowX: 'auto' }}><table style={{ width: '100%', minWidth: 730, borderCollapse: 'collapse', textAlign: 'left' }}><thead><tr>{['Zone', 'Geschikte planten', 'Waarom', 'Let op'].map(x => <th key={x} scope="col" style={{ padding: '14px 12px', borderBottom: '2px solid #becdb6' }}>{x}</th>)}</tr></thead><tbody>{zones.map(z => <tr key={z.naam}><th scope="row" style={{ padding: '15px 12px', borderBottom: '1px solid var(--line)', verticalAlign: 'top' }}>{z.naam}</th><td style={{ padding: '15px 12px', borderBottom: '1px solid var(--line)', verticalAlign: 'top' }}>{z.planten}</td><td style={{ padding: '15px 12px', borderBottom: '1px solid var(--line)', verticalAlign: 'top' }}>{z.reden}</td><td style={{ padding: '15px 12px', borderBottom: '1px solid var(--line)', verticalAlign: 'top' }}>{z.aandacht}</td></tr>)}</tbody></table></div>
    </section>
    <section className="section" style={{ background: '#f0f2e8' }}><div className="container">
      <div className="section-head"><div><div className="eyebrow">Een haalbaar begin</div><h2>Maak je balkonindeling in zes stappen</h2></div><p>Je hoeft geen ingewikkelde tuinsoftware te gebruiken. Papier, een meetlint en een paar waarnemingen zijn genoeg voor een eerste plan.</p></div>
      <div className="grid">{plan.map(s => <div className="tile" key={s[0]}><span className="pill">{s[0]} · Stap</span><h3>{s[1]}</h3><p>{s[2]}</p></div>)}</div>
    </div></section>
    <section className="section container">
      <div className="section-head"><div><div className="eyebrow">Verschillende plattegronden</div><h2>Indeling per type balkon</h2></div><p>Er bestaat geen perfecte plattegrond voor elk balkon. Gebruik deze modellen als uitgangspunt en pas ze aan jouw licht en draagkracht aan.</p></div>
      <div style={{ overflowX: 'auto' }}><table style={{ width: '100%', minWidth: 660, borderCollapse: 'collapse', textAlign: 'left' }}><thead><tr>{['Balkontype', 'Praktische opstelling', 'Veelgemaakte fout'].map(x => <th key={x} scope="col" style={{ padding: '14px 12px', borderBottom: '2px solid #becdb6' }}>{x}</th>)}</tr></thead><tbody>{layouts.map(l => <tr key={l.naam}><th scope="row" style={{ padding: '15px 12px', borderBottom: '1px solid var(--line)', verticalAlign: 'top' }}>{l.naam}</th><td style={{ padding: '15px 12px', borderBottom: '1px solid var(--line)', verticalAlign: 'top' }}>{l.aanpak}</td><td style={{ padding: '15px 12px', borderBottom: '1px solid var(--line)', verticalAlign: 'top' }}>{l.valkuil}</td></tr>)}</tbody></table></div>
    </section>
    <section className="section container"><div className="prose">
      <h2>Hoe bepaal je de beste plek voor groenten?</h2>
      <p>Observeer je balkon op verschillende momenten van de dag. De oriëntatie is een goed begin, maar omliggende gebouwen, overstekken en hoge balustrades veranderen de werkelijke lichtinval. Veel tomaten, paprika's en aardbeien vragen een zonnige plek; sommige bladgroenten en kruiden verdragen lichte halfschaduw. Meer hierover staat bij <Link href="/moestuin-beginnen/balkon-op-het-zuiden/" style={{ textDecoration: 'underline' }}>een balkon op het zuiden</Link> en <Link href="/moestuin-beginnen/balkon-met-weinig-zon/" style={{ textDecoration: 'underline' }}>weinig zon op je balkon</Link>.</p>
      <h2>Waar plaats je de grootste bakken?</h2>
      <p>Grote potten verdienen een stabiele, veilige vloerplek. Of ze dicht bij de gevel mogen staan, hangt af van de daadwerkelijke constructie en belastingsverdeling. Ga niet uit van de aanname dat een bepaalde zone altijd sterker is. Vraag zo nodig een constructeur naar een geschikte plaats. Houd rondom de bakken genoeg ruimte over om water te geven, te snoeien en te oogsten.</p>
      <h2>Hoe ga je om met wind?</h2>
      <p>Op hoge of open balkons kan wind zowel planten uitdrogen als bakken of klimhulpen laten kantelen. Kies stabiele, lage potten en ondersteun hogere gewassen zorgvuldig. Een dicht scherm kan plaatselijk turbulentie veroorzaken; de RHS noemt doorlatende schermen als mogelijke manier om wind te filteren. Nieuwe schermen of rekken moeten wel volgens de gebouwregels en met passende bevestiging worden geplaatst.</p>
      <h2>Kan een verticale moestuin helpen?</h2>
      <p>Ja, vooral met kleine kruidenpotten en bladgewassen. Maar een wandrek heeft veilige bevestigingen nodig en hoge potten zijn vaak lastig bereikbaar. Zet zware grondbakken liever niet zomaar op hoge planken. Wie hoogte wil benutten, kan onze specifieke gids over <Link href="/balkon-inrichten/verticale-moestuin/" style={{ textDecoration: 'underline' }}>een verticale moestuin</Link> bekijken.</p>
      <h2>Hoe deel je water geven en drainage in?</h2>
      <p>Zet potten zo neer dat je zonder gevaarlijk reiken bij de grond kunt. Controleer waar regenwater van boven of van het dak wel en niet terechtkomt. Een balkon met een overhang kan onder sommige potten vrijwel droog blijven, zelfs wanneer het regent. Zorg dat overtollig water uit bakken kan lopen zonder de afvoer af te sluiten of benedenburen te hinderen. Plan opslag voor een gieter alleen als die gevuld veilig kan staan.</p>
      <h2>Welke groenten combineer je in één bak?</h2>
      <p>Combineer alleen planten met vergelijkbare behoeften aan licht, water en wortelruimte. Pluksla en sommige kruiden kunnen in dezelfde ruime bak, maar munt groeit sterk uit en krijgt liever een eigen pot. Een volwassen tomaat heeft doorgaans aanzienlijk meer substraat, voeding en ondersteuning nodig. Zie voor details <Link href="/balkon-inrichten/moestuin-in-bakken/" style={{ textDecoration: 'underline' }}>een moestuin in bakken maken</Link>.</p>
      <h2>Hoe voorkom je een overvol balkon?</h2>
      <p>Begin met een paar soorten die je regelmatig gebruikt. Zet bijvoorbeeld één bak met pluksla op een bereikbare plek, een aparte pot bieslook en — als er genoeg zon en veilige ruimte is — een grotere vruchtplant. Bewaar de ruimte voor een stoel of looproute als je die nodig hebt. Een praktisch balkon mag tegelijk een plek zijn om te zitten en buiten te zijn.</p>
      <h2>Wat is het verschil tussen indeling en inrichting?</h2>
      <p>Een indeling gaat eerst over loopruimte, licht, gewicht en bereikbaarheid. De inrichting komt daarna: de keuze van bakken, materialen, kleur en planten. Dat voorkomt aankopen die alleen op een foto mooi passen. Je kunt verder met onze gids <Link href="/moestuin-beginnen/klein-balkon/" style={{ textDecoration: 'underline' }}>klein balkon</Link> of het overzicht <Link href="/balkon-inrichten/" style={{ textDecoration: 'underline' }}>balkon inrichten</Link>.</p>
      <div className="notice"><strong>Bronnen en afbakening</strong><p><a href="https://www.milieucentraal.nl/huis-en-tuin/tuin/stappenplan-groen-balkon/" target="_blank" rel="noopener noreferrer">Milieu Centraal — Stappenplan groen balkon</a>, <a href="https://www.rhs.org.uk/garden-design/roof-gardens-balconies" target="_blank" rel="noopener noreferrer">RHS — Roof gardens and balconies</a> en <a href="https://www.rhs.org.uk/advice/grow-your-own/containers/veg-on-walls" target="_blank" rel="noopener noreferrer">RHS — Vertical vegetable gardening</a>.</p><p style={{ marginBottom: 0 }}>Dit artikel geeft algemene ontwerp- en tuinbouwadviezen. Het is geen constructieve beoordeling van een specifiek balkon en er zijn geen eigen opstellingen getest.</p></div>
    </div></section>
  </main>;
}