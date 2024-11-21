// 동기식
function a() {
  c(); // return address(복귀 주소)
  console.log(`a function!!`);
}
function b() {
  setTimeout(() => {
    console.log(`1초후 setTimeout 함수 실행!!`);
    // 동기식이었으면 1초후 setTimeout에 먼저 나와야했지만 비동기라 마지막 출력
    // 시간을 안주더라도 제일 마지막 출력 -> setTimeout은 비동기식 함수이다.
  }, 1000);
  console.log(`b function!!`);
}
function c() {
  b(); // return address(복귀 주소)
  console.log(`c function!!`);
}
// c 실행 -> b 실행 후 c 복귀 -> a 복귀

a();
/**
    b function!!
    c function!!
    a function!!
    1초후 setTimeout 함수 실행!!
 */
