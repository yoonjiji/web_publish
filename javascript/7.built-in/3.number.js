// Number 클래스들의 메소드
// Number객체.valueOf()
// 원시데이터 타입에도 적용
let a = 100;
let b = new Number(100);
console.log(typeof a, typeof b);
console.log(a.valueOf() === b.valueOf());
// a의 원시 데이터 타입을 class로 바꿔서 변환

// Number객체.toLocalString()  10000 => 10,000
// 3자리씩 끊어서 쉼표로 구분(number => string)
// 원시데이터 타입에도 적용
let num = 123000;
let num2 = new Number(213241241);
console.log(num.toLocaleString());
console.log(num2.toLocaleString());

// MAX_VALUE, MIN_VALUE ...- Number.MAX_VALUE
// Number의 static 메소드
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
let num3 = 123.45;
console.log(num3.toFixed()); // 정수로 반올림
