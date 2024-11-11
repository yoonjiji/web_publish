// 구구단 3단 ~ 5단까지 출력
let start = 4;
let finish = 10;
for (let i = 1; i < 10; i++) {
  let rows = "";
  for (let j = start; j <= finish; j++) {
    rows += `${j} x ${i} = ${i * j}\t`;
  }
  console.log(rows);
}
console.clear();

/*
 *
 **
 ***
 */
for (let i = 1; i <= 4; i++) {
  let rows = "";
  for (let j = 1; j < i; j++) {
    rows += "*";
  }
  console.log(rows);
}

console.clear();

// 사과 이모지를 이용해서 출력
/*
    🍏
    🍏🍏
    🍎🍎🍎
    🍏🍏🍏🍏
    🍏🍏🍏🍏🍏
 */
for (let i = 1; i <= 5; i++) {
  let rows = "";
  //   콘솔 로그는 무조건 1줄씩 찍혀서 변수를 설정해서 중첩
  for (let j = 1; j <= i; j++) {
    if (i === 3) {
      rows += `🍎`;
    } else {
      rows += `🍏`;
    }
  }
  console.log(rows);
}
