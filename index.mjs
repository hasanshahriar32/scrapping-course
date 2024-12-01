import puppeteer from 'puppeteer-core';

async function main() {
  const browser = await puppeteer.launch({
    executablePath: '/bin/google-chrome-stable',
    headless: false
  });

  const page = await browser.newPage();
  await page.goto('');
  const version = await browser.version();
  await browser.close();
  console.log({ version });
}

main();
