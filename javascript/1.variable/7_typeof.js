// typeof operand, typeof(operand, operend..)
let name = "손세림";
let age = 26;
let a = 100;
a = 0.1;
a = "가나다";
a = true;

console.log(typeof 100);
console.log(typeof "손세림");
console.log(typeof name);
console.log(typeof age);
console.log(typeof a);
console.log(typeof a === typeof age);
console.log(typeof (a, age)); //가장 마지막 oprend의 값 출력
console.log(typeof (a, age, name) === typeof age);
