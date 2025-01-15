const url = require("url");

const { URL } = url; // 구조분해할당, 객체안 URL 프로퍼티 가져옴
const myUrl = new URL("https://ko.wikipedia.org/wiki/Node.js");

// console.log(`url --->`, url);
console.log(`URL --->`, URL);
console.log(`myUrl --->`, myUrl);
console.log(`url.format() --->`, url.format(myUrl));
