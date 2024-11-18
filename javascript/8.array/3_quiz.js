// 1. 배열의 사과 요소를 딸기로 교체해 주세요.
let fruits = ["🍎", "🍋", "🍎"];
// output => ['🍓','🍋','🍓'];

// 1.1 for문 index 주소 활용
for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === "🍎") fruits[i] = "🍓";
  console.log(fruits[i]);
}

// 1.2 함수 : 파라미터(배열객체, old, new)
// 일반화 시켜주기
// 교체한 값을 콘솔창에 출력
function reaplace(array, oldValue, newValue) {
  let result = "";
  for (let i = 0; i < array.length; i++) {
    if (array[i] === oldValue) array[i] = newValue;
    result += `${array[i]}\t`;
  }
  console.log(result);
}
reaplace(fruits, "🍓", "🍎");
// 🍎      🍋      🍎

let numbers = [1, 2, 3, 1, 2, 1, 5];
reaplace(numbers, 1, 9);
// 9       2       3       9       2       9       5

// 1.3 함수 : 파라미터(배열객체, old, new)
// 배열타입으로 객체를 반환
// 함수로 배열을 엑세스할때 직접사용 금지
// 카피본 만들어서 사용한다 => 얇은 복사(shellow copy)

function reaplace2(array, oldValue, newValue) {
  let resultArray = Array.from(array);
  // array의 copy본을 생성
  for (let i = 0; i < resultArray.length; i++) {
    if (resultArray[i] === oldValue) resultArray[i] = newValue;
    //   result += `${array[i]}\t`;
  }
  return resultArray;
}
let names = ["hong", "kim", "yoon", "hong"];
let reseultObj = reaplace2(names, "hong", "son");
console.log(reseultObj);
// [ 'son', 'kim', 'yoon', 'son' ]
