// text 배열을 입력받아, 길이가 3자 이상인 text들을 새로운 배열 객체로 생성하여
// 반환해주세요.

const textFilter = (object) => {
  return object.filter((txt) => txt.length >= 3); // []
  // filter가 array를 txt를 하나씩 순회하면서 길이가 3보다 크면 return이 된다.
};

let textArray = ["bc", "Js", "react", "javascript"];
let result = textFilter(textArray);
console.log(result);

// 2. 숫자 배열을 입력받아, 짝수만 필터링하여 출력하는 함수를 생성해주세여
// 출력되는 값들은 배열 객체에 담아 반환해주세요.
const evenNumber = (array) => {
  return array.filter((num) => !(num % 2));
  // 모듈러 연산에서 나머지가 0이면 false라 짝수를 버린다
  // !연산자로 반대로!
};
const oddNumber = (array) => {
  return array.filter((num) => num % 2);
};

let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenResult = evenNumber(numberArray);
let oddResult = oddNumber(numberArray);
console.log(evenResult);
console.log(oddResult);

// 3. 사원의 아이디를 받아서, 7자리 번호를 랜덤하게 생성하여 아이디와 번호를
// 조합하여 사번을 생성해 주세요
// 사원의 아이디는 배열 객체로 입력받고, 출력도 배열형태로 출력해주세요.

const createEmployNumber = (array) => {
  //   return array.map((element) => {
  //     let number = Math.floor(Math.random() * 10000000);
  //     return element.concat("_", number);
  // 함수에 리턴 꼭 주자!!

  // 중복된 데이터 처리
  let array2 = new Set(array);
  console.log(Array.from(array2));

  return Array.from(array2).map((element) =>
    element.concat("_", Math.floor(Math.random() * 10000000))
  );
  // 중복된 데이터 처리 => set
  // set은 유사배열객체라 그냥 넣으면 반환이 안됨
  // Array.from으로 배열로 바꿔주고 변환
};

const employeeIds = [
  "son",
  "test",
  "yoon",
  "test1234",
  "ddfss",
  "hong",
  "test",
];

let employeeNumbers = createEmployNumber(employeeIds);
console.log(employeeNumbers);
