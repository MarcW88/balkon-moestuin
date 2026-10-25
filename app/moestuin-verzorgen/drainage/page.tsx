import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = {
 title:'Drainage in plantenpotten: gaten en hydrokorrels',
 description:'Goede drainage voor je balkonmoestuin: gaten, potgrond, schotels en de waarheid over grind en hydrokorrels.',
 alternates:{canonical:'/moestuin-verzorgen/drainage/'},
 robots:{index:false,follow:true}
};
export default function DrainagePage(){return <main>
<div className="container">
<nav className="crumb" aria-label="Broodkruimel"><Link href="/">Home</Link> / <Link href="/moestuin-verzorgen/">Moestuin verzorgen</Link> / Drainage</nav>
<header className="pagehead"><div className="eyebrow">Moestuin verzorgen · Wortels en water</div><h1>Drainage in plantenpotten: zo voorkom je natte wortels</h1><p className="lead">Wortels hebben zowel vocht als zuurstof nodig. Als water niet uit een pot kan lopen, kan de grond te lang nat blijven. Met afwateringsgaten, geschikte potgrond en veilige opvang voorkom je veel problemen in de balkonmoestuin.</p></header>
</div>
<section className="section container" style={{paddingTop:0}}><div className="banner">
<div className="eyebrow" style={{color:'#d3eab5'}}>De belangrijkste misvatting</div><h2>Hydrokorrels zijn geen vervanging voor afwateringsgaten</h2><p>Een dikke laag grind of hydrokorrels onder in een gewone pot verbetert de afwatering niet. Water kan in de potgrond boven de grovere laag blijven hangen, zodat de verzadigde zone juist hoger komt te liggen. Geef de wortels liever een pot met vrije gaten en voldoende geschikte potgrond.</p>
</div></section>
<section className="section container"><div className="section-head"><div><div className="eyebrow">Problemen oplossen</div><h2>Drainage controleren in zes stappen</h2></div></div>
<div className="grid">
<div className="tile"><h3>1. Controleer de gaten</h3><p>Water moet via de bodem uit de bak kunnen lopen. Maak verstopte gaten voorzichtig vrij.</p></div>
<div className="tile"><h3>2. Gebruik geschikte potgrond</h3><p>Kies een luchtig, bij voorkeur turfvrij mengsel dat past bij het gewas.</p></div>
<div className="tile"><h3>3. Sla de grindlaag over</h3><p>Een dikke laag korrels onder potgrond kan de natte zone omhoog brengen.</p></div>
<div className="tile"><h3>4. Houd de afvoer vrij</h3><p>Een pot die vlak op tegels staat kan de openingen blokkeren. Gebruik zo nodig stabiele potvoeten.</p></div>
<div className="tile"><h3>5. Controleer na het gieten</h3><p>Kijk of overtollig water wegloopt en leeg een volle onderschotel tijdig.</p></div>
<div className="tile"><h3>6. Voel de grond</h3><p>Controleer onder het oppervlak voordat je opnieuw water geeft. Slap blad betekent niet altijd dorst.</p></div>
</div></section>
<section className="section container"><div className="prose">
<h2>Waarom hebben planten drainage nodig?</h2><p>Water vult de luchtporiën in natte potgrond. Blijft die grond langdurig verzadigd, dan krijgen wortels te weinig zuurstof en kunnen ze beschadigen of rotten. Een goed groeimedium houdt vocht vast zonder alle lucht te verdringen.</p>
<h2>Hoeveel drainagegaten zijn genoeg?</h2><p>Er bestaat geen vast aantal voor elke pot. Controleer of water echt kan weglopen. Bij uitzonderlijk grote gaten kun je een losse potscherf over het gat leggen om grondverlies te beperken, zonder de opening te sluiten. Dit is niet hetzelfde als een dikke laag stenen.</p>
<h2>Waarom helpt grind op de bodem niet?</h2><p>Water gaat vanuit fijne potgrond niet direct de grovere laag in. Volgens universitaire tuinbouwvoorlichters kan daardoor een hangende watertafel ontstaan vlak boven het grind. De verzadigde zone verschuift omhoog en het bruikbare wortelvolume wordt kleiner.</p>
</div></section></main>}