import puppeteer from "puppeteer";
console.log(await puppeteer.executablePath())
const browser = await puppeteer.launch({
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

console.log(await browser.version());

await browser.close();