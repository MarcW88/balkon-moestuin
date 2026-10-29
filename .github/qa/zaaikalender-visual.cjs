const { chromium } = require('playwright');
const fs = require('fs');
const months = ['januari','februari','maart','april','mei','juni','juli','augustus','september','oktober','november','december'];
const paths = ['/zaaikalender/', ...months.map(m => '/zaaikalender/wat-zaaien-in-' + m + '/')];
(async () => {
 const browser = await chromium.launch({headless:true});
 const issues = [];
 fs.mkdirSync('artifacts/zaaikalender', {recursive:true});
 for (const [name,width,height] of [['mobile',375,812],['desktop',1440,900]]) {
  const context = await browser.newContext({viewport:{width,height}, deviceScaleFactor:1, isMobile:name==='mobile',hasTouch:name==='mobile'});
  for(const path of paths) {
   const p = await context.newPage();
   const errors=[];p.on('pageerror',e=>errors.push(e.message));
   const response=await p.goto('http://127.0.0.1:8765'+path,{waitUntil:'networkidle'});
   const data=await p.evaluate(()=>({title:document.title, overflow:document.documentElement.scrollWidth>innerWidth+2, scrollWidth:document.documentElement.scrollWidth, viewport:innerWidth, h1:document.querySelectorAll('h1').length, canonical:document.querySelector('link[rel="canonical"]')?.href, skip:!!document.querySelector('a.skip-link[href="#hoofdinhoud"]'), main:!!document.querySelector('main#hoofdinhoud'), tables:[...document.querySelectorAll('table')].map(t=>({headers:t.querySelectorAll('th[scope="col"]').length, region:!!t.closest('[tabindex="0"][role="region"]')})), brokenImages:[...document.images].filter(i=>!i.complete||i.naturalWidth===0).map(i=>i.src)}));
   await p.keyboard.press('Tab');const focus=await p.evaluate(()=>({tag:document.activeElement?.tagName,href:document.activeElement?.getAttribute('href'),visible:!!document.activeElement && getComputedStyle(document.activeElement).left!=='-9999px'}));
   const slug=path.split('/').filter(Boolean).pop()||'hub';
   await p.screenshot({path:'artifacts/zaaikalender/'+slug+'-'+name+'.png',fullPage:true});
   if(!response||response.status()!==200||data.overflow||data.h1!==1||!data.skip||!data.main||!focus.visible||focus.href!=='#hoofdinhoud'||data.tables.some(t=>!t.headers||!t.region)||data.brokenImages.length||errors.length)issues.push({path,name,status:response?.status(),...data,focus,errors});
   await p.close();
  }
  await context.close();
 }
 await browser.close();
 fs.writeFileSync('artifacts/zaaikalender/results.json',JSON.stringify({checked:26,issues},null,2));
 console.log(JSON.stringify({checked:26,issues},null,2));
 if(issues.length)process.exitCode=1;
})().catch(err=>{console.error(err);process.exitCode=1});