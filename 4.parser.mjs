import fs from "node:fs/promises";
import {JSDOM} from "jsdom";

const htmlString = await fs.readFile("./markone.html", "utf-8");
const dom = new JSDOM(htmlString);

console.log(dom.window.document.querySelector(".price-item").textContent.trim());  