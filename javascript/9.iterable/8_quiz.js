// 중복된 배열을 입력받아, 중복을 제거한 후 출력하는 함수 생성
function filtering(iterable) {
  return new Set(iterable);
}

let numbers = [1, 2, 3, 4, 1, 2, 1, 2, 3, 3, 5, 6, 7, 8, 9];
let names = ["홍길동", "홍길동", "손세림", "윤지혜", "윤지혜"];
let resultObj = filtering(numbers);
let resultObj2 = filtering(names);

console.log(numbers);
console.log(resultObj);
// Set(9) { 1, 2, 3, 4, 5, 6, 7, 8, 9 }
console.log(resultObj2);
// Set(3) { '홍길동', '손세림', '윤지혜' }

// 사원의 이름을 입력받아, 사번을 생성하고 각각의 변수로 반환(구조 분해 할당)하는 함수
function createEmployeeNumber(array) {
  // 배열 전체의 요소를 대상으로 하는 작업이며, 결과가 새로운 배열로 반환
  return array.map(
    (ename) => ename.concat("_", Math.trunc(Math.random() * 10000000))
    // 블록({})으로 묶은 상태에서 실행한 경우 반드시 return
  ); // []
}
let employeeNames = ["Smith", "Kelly"];
let [Smith, Kelly] = createEmployeeNumber(employeeNames); // ['Smith_12345','Kelly_876543']
console.log(`${Smith}`);
console.log(`${Kelly}`);
