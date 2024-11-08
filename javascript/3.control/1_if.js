// 제어문 : if, while, do~while
// if(조건식 : 비교연산자 포함){ 조건식이 참인 경우 실행; }
// if(조건식){ 조건식이 참인 경우; } else { 조건식이 거짓인 경우; }
// 삼항 연산자 : (조건식) ? 참인 경우 : 거짓인 경우;
// if(조건식1){ 조건식1이 참일 때; }
// else if(조건식2){ 조건식2가 참인 경우; }
// ... else { 모든 조건에 해당되지 않을때; }

// 입력되는 과일명이 apple인 경우에만 출력
// 사과이외의 경우에는 오렌지 이모지 출력
let fruit = "sad";
if (fruit === "apple") {
  console.log("🍎");
} else {
  console.log(fruit);
}

// 위에 조건식을 삼항연산자로 작성해보세요
//
let display = undefined;
fruit === "apple" ? (display = "🍎") : (display = fruit);
console.log(display);

// 점심메뉴 : 피자, 햄버거
// 점심 메뉴에 피자와 햄버거가 있다. 피자와 핫도그 중에서 선택한 메뉴 이모지가 출력되도록.
let lunch = undefined;
lunch = "pizza";

if (lunch === "pizza") console.log("🍕");
else console.log("🍔");
// 한 줄인 경우 블록 생략 가능

let choice = undefined;
lunch === "hamberger" ? (choice = "🍕") : (choice = "🍔");
console.log(choice);

// 학생명이 손세림, 윤지혜, 윤지은 인지 체크하여
// 해당하는 경우 이름을 출력하고,
// 해당하지 않는 경우 '해당 학생 없음' 으로 출력해주세요.
// 출력포맷 : 실행결과 ==>
let student = undefined;
let result = undefined;
student = "손세림";
if (student === "손세림") {
  //   console.log(`실행결과 => ${student}`);
  result = student;
} else if (student === "윤지혜") {
  //   console.log(`실행결과 => ${student}`);
  result = student;
} else if (student === "윤지은") {
  //   console.log(`실행결과 => ${student}`);
  result = student;
} else {
  //   console.log(`실행결과 => 해당 학생 없음`);
  result = "해당 학생 없음";
}
console.log(`실행결과 => ${result}`);
