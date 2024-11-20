// 에러 처리 : try~catch()
let numbers = [1, 2, 3]; // length:3, index: 0, 1, 2
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]); // undefined

numbers[0] = 100;
console.log(numbers[0]);

// javascript에서는 동적으로 배열을 재생성한 후 값을 입력한다.
// java에서는 동적으로 배열을 재생성하지 않는다.
// ArrayIndexOutOfBoundsException 예외상황이 발생함
numbers[9] = 900;
console.log(numbers[9]);

let number = 1234;
try {
  for (n of number) console.log(n);
  // TypeError: number is not iterable
} catch (error) {
  console.log("--error는 엔진한테 넘김--");
}
// try~catch : error는 엔진한테 넘김

console.log("--프로그램 종료--");
