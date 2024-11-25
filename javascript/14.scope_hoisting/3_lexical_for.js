// 1~5 출력
for (let i = 1; i <= 5; i++) {
  console.log(`i --> ${i}`);
}
// 전역 스코프는 기본으로 존재하고 숨겨져있다
// 렉시컬 레코드 5개 생성
/*
    i --> 1
    i --> 2
    i --> 3
    i --> 4
    i --> 5
 */

for (var i = 1; i <= 5; i++) {
  console.log(`i --> ${i}`);
}

// for 루프의 인덱스 값으로 var 키워드는 권장하지 않음
let a = [1, 2, 3];
for (var i = 0; i < a.length; i++) {
  console.log(`a[${i}] --> a[${a[i]}]`);
}
console.log(`a[${i}] --> a[${a[0]}]`);
console.log(`a[${i}] --> a[${a[1]}]`);
console.log(`a[${i}] --> a[${a[2]}]`);
// var라고 줬을때 전역에 선언. 전역에서 i값을 레퍼런스 되기때문에 3개

// for...of
for (const element of a) {
  console.log(element);
}
// 레코드 별도 생성
