// 배열의 데이터 출력
// for, forEach
let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(`numbers[${i}] = ${numbers}`);
}
/*
    numbers[0] = 1,2,3,4,5  
    numbers[1] = 1,2,3,4,5
    numbers[2] = 1,2,3,4,5
    numbers[3] = 1,2,3,4,5
    numbers[4] = 1,2,3,4,5
 */

// 배열에 인스턴트 함수(단독사용x)

// forEach => 순회(iterable) 메소드 지원
numbers.forEach((element, i) => console.log(`numbers[${i}] = ${element}`));
/*
numbers[0] = 1
numbers[1] = 2
numbers[2] = 3
numbers[3] = 4
numbers[4] = 5
 */

// replace3 함수를 forEach 형태로 작성해주세요.
function replace3(array, origin, target) {
  let resultObj = Array.from(array);
  resultObj.forEach((element, index) => {
    // if (element === origin) resultObj[index] = target;
    if (element === origin) resultObj.splice(index, 1, target);
  });
  return resultObj;
}

let fruits = ["🍊", "🍆", "🍊"];
result = replace3(fruits, "🍊", "🌽");
console.log(result);
// [ '🌽', '🍆', '🌽' ]
