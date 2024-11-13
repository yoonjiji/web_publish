// 모듈, 라이브러리는 공통된 기능을 구현하는 함수들의 집합
// export, import로 외부 함수 호출가능

/*
 * 구구단 : 1~9 단 출력
 */
export function gugudan() {
  for (let i = 1; i <= 9; i++) {
    let rows = "";
    for (let j = 1; j <= 9; j++) {
      rows += `${j} * ${i} = ${j * i}\t`;
    }
    console.log(rows);
  }
}

/*
 * 구구단 선택 함수 형식 : start ~ end 단 출력
 * 입력되는 start는 0보다 커야한다.
 * 10단 이상은 출력되지 않도록 한다.
 */
export function selectGugudan(start, end) {
  for (let i = 0; i <= 9; i++) {
    let rows = "";
    for (let j = start; j <= end; j++) {
      rows += `${j} * ${i} = ${j * i}\t`;
    }
    console.log(rows);
  }
}

/*
 * 구구단 싱글 함수 형식 : single 단 출력
 */
export function singleGugudan(dan) {
  for (let i = 1; i <= 9; i++) {
    //   for (let j = start; j <= 9; j++) {
    console.log(`${dan} * ${i} = ${dan * i}\t`);
    //   }
  }
}

// 프루츠타워를 출력하는 함수 정의
export function fruitsTower(emoji, floor) {
  for (let i = 1; i <= floor; i++) {
    let rows = "";
    for (let j = 1; j <= i; j++) {
      rows += `${emoji}`;
    }
    console.log(rows);
  }
}
