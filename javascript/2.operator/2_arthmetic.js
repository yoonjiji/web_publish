// 사칙연산 : +, -, *, /, %, **
console.log(3 + 5); // 8
console.log(3 - 5); // -2
console.log(3 * 5); // 15
console.log(3 / 5); // 0.6
console.log(3 % 5); // 3
console.log(3 ** 5); // 243

// %(모듈러 연산자)
let a = 100;
// a가 짝수? 홀수? 0이면 짝수 1이면 홀수
console.log(a % 2); // 0

// + (접합연산자)
// 문자로 시작하면 뒤에 나오는 +는 접합연산자로 실행됨
console.log(10 + 20); // 30
console.log("sum: " + (10 + 20)); // sum: 30
console.log(`sum : ${10 + 20}`); // sum: 30
