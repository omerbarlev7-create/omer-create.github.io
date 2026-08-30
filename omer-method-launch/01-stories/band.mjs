import pkg from '/opt/node22/lib/node_modules/playwright/index.js';
const { chromium } = pkg;
const b = await chromium.launch();
const p = await b.newPage({ viewport:{width:1080,height:1920} });
await p.goto('file:///home/user/omer-create.github.io/omer-method-launch/01-stories/frames.html');
await p.waitForTimeout(600);
console.log(await p.evaluate(() => {
  const out=[];
  for (const f of document.querySelectorAll('.frame')) {
    const fr=f.getBoundingClientRect();
    const pad=f.querySelector('.pad');
    if(pad){
      const pr=pad.getBoundingClientRect();
      // does the content stack exceed the pad box?
      const over = pad.scrollHeight - Math.round(pr.height);
      if(over > 2) out.push(`${f.id}  PAD OVERFLOW by ${over}px`);
    }
    // every text node inside the safe band 330..1620?
    for (const el of f.querySelectorAll('.lead,.deck,.he-line,.he-deck,.pull,.chip,.over')){
      const r=el.getBoundingClientRect();
      const top=Math.round(r.top-fr.top), bot=Math.round(r.bottom-fr.top);
      if(bot>1620||top<330){
        const s=(el.textContent||'').trim().slice(0,34);
        out.push(`${f.id}  OUTSIDE BAND ${top}..${bot}  "${s}"`);
      }
    }
  }
  return out.length? out.join('\n') : 'all frames clean';
}));
await b.close();
