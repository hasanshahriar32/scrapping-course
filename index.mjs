import puppeteer from 'puppeteer-core';

async function main() {
  const browser = await puppeteer.launch({
    executablePath: './.cache/puppeteer/chrome/linux-131.0.6778.85/chrome-linux64/chrome',
    // headless: false
  });

  const page = await browser.newPage();
  await page.goto('https://example.com');
  const version = await browser.version();
  await browser.close();
  console.log({ version });
}

main();
