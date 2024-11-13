/*
 * 구구단 : 1~9 단 출력
 */
// const gugudan = () => {
//   let result = "";
//   for (let i = 1; i <= 9; i++) {
//     for (let j = 1; j <= 9; j++) {
//       result += `${j} X ${i} = ${i * j}\t`;
//     }
//     console.log(result);
//   }
// };
// gugudan();

/*
 * 구구단 선택 함수 형식 : start ~ end 단 출력
 * 입력되는 start는 0보다 커야한다.
 * 10단 이상은 출력되지 않도록 한다.
 */
// let selectGugudan = (start, end) => {
//   let result = "";
//   for (let i = 1; i <= 9; i++) {
//     for (let j = start; j <= end; j++) {
//       result += `${j} X ${i} = ${i * j}\t`;
//     }
//   }
//     console.log(result);

// };
// selectGugudan(3, 5);

/*
 * 구구단 싱글 함수 형식 : single 단 출력
 */
// let singleGugudan = (dan) => {
//   for (let i = 1; i <= 9; i++) {
//     console.log(`${dan} X ${i} = ${dan * i}\t`);
//   }
// };
// singleGugudan(3);

// 프루츠타워를 출력하는 함수 정의
const fruits = (emoji, floor) => {
  for (let i = 1; i <= floor; i++) {
    let rows = "";
    for (let j = 1; j <= i; j++) {
      rows += emoji;
    }
    console.log(rows);
  }
};
fruits("🍎", 5);
fruits("🍋", 10);
