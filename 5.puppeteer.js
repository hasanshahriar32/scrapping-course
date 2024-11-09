import puppeteer from 'puppeteer';
import fs from 'node:fs/promises';
const htmlString = await fs.readFile('./markone-1.html', 'utf-8');
const browser = await puppeteer.launch();
const page = await browser.newPage();

// await page.setContent(htmlString, { waitUntil: 'domcontentloaded' });
await page.goto("https://www.studioneat.com/products/markone", { waitUntil: 'domcontentloaded' });
await page.screenshot({ path: 'markone-1.png' });
const result = await page.evaluate(() => {
    return document.querySelector('.price-item')?.textContent?.trim();
});

console.log(result);
await browser.close();