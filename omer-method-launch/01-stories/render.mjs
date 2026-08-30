import pkg from '/opt/node22/lib/node_modules/playwright/index.js';
const { chromium } = pkg;
import { fileURLToPath } from 'url';

const SRC = '/home/user/omer-create.github.io/omer-method-launch/01-stories/frames.html';
const OUT = '/home/user/omer-create.github.io/omer-method-launch/01-stories/png';

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1080, height: 1920 },
  deviceScaleFactor: 1,
});
await page.goto('file://' + SRC, { waitUntil: 'networkidle' });
await page.waitForTimeout(500);

for (let i = 1; i <= 9; i++) {
  const id = 'f' + String(i).padStart(2, '0');
  const el = await page.$('#' + id);
  if (!el) { console.log('MISSING', id); continue; }
  const box = await el.boundingBox();
  await el.screenshot({ path: `${OUT}/story-${String(i).padStart(2, '0')}.png` });
  console.log(`story-${String(i).padStart(2,'0')}.png  ${Math.round(box.width)}x${Math.round(box.height)}`);
}

await browser.close();
