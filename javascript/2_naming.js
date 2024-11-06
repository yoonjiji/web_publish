// 한 줄 주석
/* 여러 줄을 주석 */

/*
 *   변수명 선언 규칙
 *   - 라틴어 (0~9, a~z, A~Z)
 *   - 특수문자 ($, _ 사용 가능)
 *   - camel case : ex) camelCase
 *   - snake case : ex) snake_case
 *
 *   주의사항
 *   - 대문자 시작 X
 *   - 숫자로 시작 X
 *   - 예약어(키워드) 사용 X
 *   - 특수문자 ($, _) 제외 사용 X
 *   - 이모지 사용 X
 *
 */

// camelCase
let gfNeme = "손세림";
let herAge = "26";
console.log(gfNeme);
console.log(herAge);

// snake_case
let audio_name = "삼성";
let audio_color = "red";
console.log(audio_name);
console.log(audio_color);

// 저의 이름은 손세림이고, 나이는 26입니다.
let output = "저의 이름은 " + gfNeme + "이고, 나이는 " + herAge + "입니다.";
console.log(output);

// 템플릿 리터럴 :: 저의 이름은 손세림이고, 나이는 26입니다.
let output2 = `저의 이름은 ${gfNeme}이고, 나이는 ${herAge}입니다. `;
console.log(output2);

// 상수 선언 :: 변수, 상수는 프로그램의 상단에 위치
// 상수 선언시 모두 대문자, SNAKE_CASE로 선언하면 Good
const START = 1;
const CONTI = 2;
const FINISH = 3;
