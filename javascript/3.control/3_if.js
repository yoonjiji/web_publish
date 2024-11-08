// 임의의 숫자를 입력받아
// 짝수이면 빨간 사과, 홀수이면 초록 사과를 출력해주세요

// 1. 숫자 입력받기
let number = undefined;
let result = undefined;
number = 32;

// 2. 숫자 체크 (짝수인지,  홀수인지)
// 결과에 따라 값 입력
if (number % 2 === 0) result = "🍎";
else result = "🍏";

console.log(result);

// boolean 타입은 0이면 false, 1이면 true 인식
// => 0, 1 number는 받음
// 조건식에 number % 2 만 써도 됌
let choice = undefined;
!(number % 2) ? (choice = "🍏") : (choice = "🍎");

console.log(choice);

// 삼항 연산자 더 짧게
let emoji = !(number % 2) ? "🍏" : "🍎";

console.log(emoji);
