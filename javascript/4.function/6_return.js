// 함수의 실행결과 반환 키워드 :: return
function add(a, b) {
  a = parseInt(a);
  b = parseInt(b);
  //   console.log(a + b);
  return a + b;
}
let result = add(1, 2);
console.log(`result = ${result}`);

// 이름, 나이를 매개변수로 입력하여, 객체를 생성한 후
// 반환하는 함수를 정의해주새요

let resultObj = createObject("손세림", 26);
console.log(resultObj);
console.log(resultObj.name);
console.log(resultObj.age);
function createObject(name, age) {
  // 객체 생성
  let obj = {
    name: name, // 앞 호출하는 name, 입력받는 값 name(obj.name)
    age: age,
  };
  return obj; // obj의 주소값이 반환
}
console.clear();

// 두 수를 입력받아 곱한 값을 반환하는 함수를 작성
// 두 수는 0보다 커야함
function multi(a, b) {
  let resul = 0;

  if (a > 0 && b > 0) {
    resul = a * b;
  } else {
    resul = "a와 b는 0보다 커야합니다.";
  }
  return resul;
  // 여기서 result는 var로 선언이 되서 에러안뜸
}
let result1 = multi(41, 2);
// 지역 변수 => 전역 변수로 전환(값의 확장)
console.log(result1);

/*
 6_return.js
 눈에 보이지 않는 블록
{
 // 전역 변수(Global variable)
 let a = undefined;
 let obj = null;
 const START_COUNT = 0;

 function aa {
 // 기능을 구현하는 작업진행
 // 변수 선언시 반드시 초기화!!
 // 지역 변수(Local variable)
 let result = 0;
 }
}
*/
