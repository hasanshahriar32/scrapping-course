 import fs from 'node:fs/promises';
 const markOne = await fetch("https://studioneat.com/products/markone").then(res => res.text());
 fs.writeFile("markone.html", markOne);