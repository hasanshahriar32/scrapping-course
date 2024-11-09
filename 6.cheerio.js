import * as cheerio from "cheerio";
import * as fs from "fs";

const buffer = fs.readFileSync("./markone.html");

const $ = cheerio.loadBuffer(buffer);

console.log($(".price-item").first().text());
// Output: Hello, world!
