import puppeteer from 'puppeteer';

async function main() {
  const browser = await puppeteer.launch({
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

  const page = await browser.newPage();
  await page.goto('https://shahriarhasan.vercel.app');
  const version = await browser.version();
  await browser.close();
  console.log({ version });
}

main();
