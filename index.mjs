import puppeteer from 'puppeteer';

async function main() {
  const browser = await puppeteer.launch({
    headless: false
  });

  const page = await browser.newPage();
  await page.goto('https://shahriarhasan.vercel.app');
  const version = await browser.version();
  await browser.close();
  console.log({ version });
}

main();
