// 제어문 - 조건문 : switch(조건) ~ case
/*
 *  switch(숫자, 문자) {
 *      case 숫자, 문자 :
 *          실행문;
 *          break;
 *      case ~~
 *      default :
 *          실행문;
 *  }
 */

// 0 : 월요일, 1: 화요일, 2: 수요일
let useage = "[0]월요일, [1]화요일, [3]수요일";
let day = 0;
let resultDay = undefined;

if (resultDay === undefined) {
  switch (day) {
    case 0:
      resultDay = "월요일";
      break;

    case 1:
      resultDay = "화요일";
      break;
    case 2:
      resultDay = "수요일";
      break;

    default:
      console.log(useage);
      break;
  }
}

console.log(`선택한 요일은 ${resultDay} 입니다`);

if (!resultDay === undefined) {
  console.log(`선택한 요일은 ${resultDay} 입니다`);
}

// 임의의 숫자를 입력받아
// 짝수이면 빨간 사과, 홀수이면 초록 사과를 출력해주세요

let number = undefined;
let result = undefined;
number = 0;

switch (number % 2) {
  case 0: // 조건
    result = "🍎"; // 실행문
    break; // 끊기
  case 1:
    result = "🍏";
    break;
  default:
    "해당 과일 없음";
}

console.log(result);
