/**
    scope(스코프) : 메모리 관리, 이름의 충돌 방지, 블록단위의 개념 구분
    {
        블록단위의 실행 개념 : for, switch~case, if~else ...
    }

 */

// 전역변수, Global variable
// 파일 전체 어느곳에든지 호출 가능
// 변수의 초기화는 자동
let a = 10;
const b = 20;
console.log(a);
console.log(b);

{
  // 지역변수, Local variable
  // 선언된 블럭안에서만 호출 가능
  // 반드시 초기화를 진행
  let ab = "";
  let aa = 100;
  let bb = 200;
  console.log(a, b);
}
// console.log(aa);

for (let i = 1; i <= 5; i++) {
  // i 로컬변수
  console.log(i);
}
