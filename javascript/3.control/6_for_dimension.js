// 중첩 for 문 : 이차원 형태의 저장소 데이터 출력
/*
    1(1,1) 2(1,2) 3(1,3)
    4(2,1) 5(2,2) 6(2,3)
    
    for() { // 행
        for() { // 열
        }
    }
 */
// for (let i = 0; i < 2; i++) {
//   let rows = "";
//   for (let j = 1 + i * 3; j < 4 + i * 3; j++) {
//     rows += `${j}\t`;
//   }

//   console.log(rows);
// }

// for (let i = 0; i < 2; i++) {
//   let rows = "";
//   let add = i * 3;
//   for (let j = 1 + add; j < 4 + add; j++) {
//     rows += `${j}\t`;
//   }
//   console.log(rows);
// }
let count = 1;
for (let i = 1; i < 3; i++) {
  let rows = "";

  for (let j = 1; j < 4; j++) {
    rows += `${count++}\t`;
  }
  console.log(rows);
}
console.clear();

// i = 1, rows = [1] [2] [3]
// i = 2, rows = [] [] []
// 중첩 for 문에 누적되는 값은 for문 밖에 저장한다
