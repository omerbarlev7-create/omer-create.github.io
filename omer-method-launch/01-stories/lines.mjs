import pkg from '/opt/node22/lib/node_modules/playwright/index.js';
const { chromium } = pkg;
const b = await chromium.launch();
const p = await b.newPage({ viewport:{width:1080,height:1920} });
await p.goto('file:///home/user/omer-create.github.io/omer-method-launch/01-stories/frames.html');
await p.waitForTimeout(400);
console.log(await p.evaluate(() => {
  const out=[];
  for (const f of document.querySelectorAll('.frame')) {
    const el=f.querySelector('.he-line'); if(!el) continue;
    const intended = el.innerHTML.split('<br>').length;
    const cs=getComputedStyle(el);
    const actual = Math.round(el.getBoundingClientRect().height / parseFloat(cs.lineHeight));
    out.push(`${f.id}  intended=${intended} actual=${actual} ${actual>intended?'<-- WRAPS':''}`);
  }
  // also flag any frame whose content overflows the 1920 canvas
  for (const f of document.querySelectorAll('.frame')) {
    if (f.scrollHeight > 1920) out.push(`${f.id} OVERFLOW ${f.scrollHeight}px`);
  }
  return out.join('\n');
}));
await b.close();
