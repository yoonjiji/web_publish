// 구구단 2단을 출력
/*
    2 * 1 = 2
    ...
    2 * 9 = 18
*/
// 2단
for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 1; j++) {
    console.log(`2 * ${i} = ${i * 2}`);
  }
}

// 2단부터 9단까지 출력

for (let i = 1; i <= 9; i++) {
  let rows = "";
  for (let j = 1; j <= 9; j++) {
    rows += `${j} * ${i} = ${j * i}\t`;
  }
  console.log(rows);
}
// console.log는 한줄씩만 출력해주기 때문에
// 값을 중첩하기 위해서 변수 rows 선언

// 별찍기
for (let i = 0; i < 6; i++) {
  let rows = "";
  // 중간 값 저장
  for (let j = 0; j < i; j++) {
    rows += `*`;
    // 내용물
  }
  console.log(rows);
}

// 별찍기 거꾸로
for (let i = 5; i >= 1; i--) {
  let rows = "";
  for (let j = i; j >= 1; j--) {
    rows += `*`;
    // 값 중첩
  }
  console.log(rows);
}
