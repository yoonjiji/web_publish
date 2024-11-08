// 제어문 - 반복문 : for
// for : 정확한 반복 횟수를 알고 있을 때 <--> Array
// for( (1)초기값(선언문) ; (2)조건식 ; (4)증감식) {
//      (3)조건식이 true인 경우 실행
// }
// 1. 초기값을 선언한다. --> 초기값 변수는 for 블록에서만 실행
// 2. 선언한 변수는 조건식을 통해 비교한다 -> boolean 타입의 결과
// 3. (2)의 결과가 true이면 실행문을 실행한다.
// 4. 실행문이 종료되면, 증감식을 실행한다.
// (2) ~ (4)번까지 반복해서 작업을 실행한다.
// 5. 조건식이 false가 되면 for 루프 블록을 빠져나온다.

// 숫자 1부터 100까지 반복해서 출력해주세요.
// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// 숫자 배열을 출력해주세요.
let numberList = ["🦬", "🐅", "🐅"];
// 배열의 마지막 인덱스 주소는 배열크기보다 하나 작다
// 배열의 크기 구하는 형식 : 배열객체.length
console.log(`numberList.length = ${numberList.length}`);

for (let i = 0; i < numberList.length; i++) {
  console.log(numberList[i]);
}

// 과일리스트 출력
let fruitList = ["apple", "orange", "lemon"];
let emojiList = ["🍎", "🍊", "🍋"];
let length = fruitList.length;
for (let i = 0; i < length; i++) {
  let fruit = fruitList[i];
  let emoji = emojiList[i];
  //lemon만 출력
  if (fruit === "lemon") {
    console.log(emoji);
  }
}

// for 초기값 let을 빼먹으면 var가 default 선언

// while : 종료하는 시점을 정확하게 알고 있을 때 --> true, false 값을 통해 값을 체크
