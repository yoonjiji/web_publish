// function의 데이터타입 ?? object
// 호출할 때 주솟값을 가져옴 (주소가 힙메모리에 있음)
function add(a, b) {
  console.log(a + b);
}

console.log(add);
let sum = add; // call by reference
// 똑같은 함수를 reference를 해서 보고 있다.
console.log(sum);
add(1, 3);
sum(1, 2);
console.log("---프로그램 종료---");
// 함수의 객체를 참조할 수 있다
// add는 힙 메모리에 주소가 있음
// sum 은 call stack에 변수로 저장
// sum = add는 같기때문에 sum은 add의 변수 힙 메모리 주소를 바라보고 있다
// 따라서 sum은 add의 함수의 주소를 참조해 함수를 쓸 수 있다.
