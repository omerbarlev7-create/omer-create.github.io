import pkg from '/opt/node22/lib/node_modules/playwright/index.js';
const { chromium } = pkg;
const DIR = '/home/user/omer-create.github.io/omer-method-launch/03-carousel';
const b = await chromium.launch();
const p = await b.newPage({ viewport:{width:1080,height:1350} });
await p.goto('file://' + DIR + '/carousel.html', { waitUntil:'networkidle' });
await p.waitForTimeout(600);
for (let i=1;i<=8;i++){
  const id='s'+String(i).padStart(2,'0');
  const el=await p.$('#'+id); if(!el){console.log('MISSING',id);continue}
  await el.screenshot({ path:`${DIR}/png/slide-${String(i).padStart(2,'0')}.png` });
  console.log(`slide-${String(i).padStart(2,'0')}.png`);
}
// checks: content must fit .pad, and slide 01 must survive the 1:1 grid crop
console.log('\n--- checks ---');
console.log(await p.evaluate(() => {
  const out=[];
  for(const s of document.querySelectorAll('.slide')){
    const pad=s.querySelector('.pad'); if(!pad) continue;
    const over=pad.scrollHeight-Math.round(pad.getBoundingClientRect().height);
    if(over>2) out.push(`${s.id} PAD OVERFLOW ${over}px`);
  }
  const s1=document.querySelector('#s01'), r1=s1.getBoundingClientRect();
  for(const el of s1.querySelectorAll('.lead,.over,.strip')){
    const r=el.getBoundingClientRect(), t=Math.round(r.top-r1.top), bt=Math.round(r.bottom-r1.top);
    if(t<135||bt>1215) out.push(`s01 OUTSIDE GRID CROP ${t}..${bt} "${(el.textContent||'strip').trim().slice(0,26)}"`);
  }
  return out.length?out.join('\n'):'all clean';
}));
await b.close();
