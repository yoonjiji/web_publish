// 함수의 값 전달 인자
// parameter, argument, 매개변수
function add(a, b) {
  return a + b;
}

function add2(...numbers) {
  return numbers;
}

function add3(a, b, ...datas) {
  console.log(a);
  console.log(b);
  console.log(datas);
}

// 함수 호출
let sum = add(2, 3);
let sum2 = add2(2, 3, 2, 456, 1231, 6767, 654654, 77);
console.log(sum);
console.log(sum2);
add3(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.clear();
