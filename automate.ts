import puppeteer, { Browser } from "puppeteer";
import fs from "node:fs/promises";
let browser: Browser;
async function automate() {
     browser = await puppeteer.launch({
        userDataDir: './user_data',
    });

    // const page = await browser.newPage();
    // as a page is already open when browser is launched, we can use the first page
    const page = (await browser.pages())[0];
    const response = await page.goto("https://shahriarhasan.vercel.app", {
        waitUntil: "networkidle2", 
        // networkidle0 - wait until there are no more than 0 network connections for at least 500 ms
        // networkidle2 - wait until there are no more than 2 network connections for at least 500 ms
        timeout: 6
    });

    console.log(await response?.text().then((text) => fs.writeFile("response.html", text)));
    await page.screenshot({ path: "screenshot.png" });
    console.log(await page.url())

    await browser.close(); 
}

automate().catch(e=>console.error(e)).finally(()=>{
    if(browser.connected){
        // the browser is still open, because of error
        // close the browser
        browser.close();
        console.log("Browser closed.. because of error")
    }
})