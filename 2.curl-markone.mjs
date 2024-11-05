import {$} from 'execa';

const targetUrl = 'https://www.studioneat.com/products/markone';
const targetFileName = 'markone-1.html';

await $`curl ${targetUrl} -o ${targetFileName}`;