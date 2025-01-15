const os = require("os");
// requite 내장객체는 Node.js에서 제공하는 내장 모듈을 제공, import와 동일

console.log(os.type());
console.log(os.hostname());
console.log(os.homedir());
// console.log(os.cpus());
console.log(os.cpus().length);
console.log(os.freemem());
console.log(os.totalmem());
