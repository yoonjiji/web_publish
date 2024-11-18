// filter
const words = ["spray", "elite", "exuberant", "destruction", "present"];
console.log(words.filter((item) => item.length > 6));
// console.log(words.filter((item) => { return item.length > 6)});
// 콜백함수에 {}을 추가하면 반드시 return 키워드를 붙여서 값을 반환!!!
// 1줄 로직은 return 생략 가능
// [ 'exuberant', 'destruction', 'present' ]

let numbers = [1, 2, 3, 4, 5, 6, 7];

// 5 이상 출력
// let array = [];
// numbers.forEach((x) => {
//   if (x >= 5) array.push(x);
// });
// console.log(array);
// [ 5, 6, 7 ]

let numbers2 = [1.4, 2.5, 3.2, 4.7, 5, 6.4, 7];
// 3보다 크거나 같은 값을 출력
console.log(numbers2.filter((x) => x >= 3));
// [ 3.2, 4.7, 5, 6.4, 7 ]

// numbers2의 모든 값을 반올림한 후 3보다 크거나 같은 값을 출력
console.log(numbers2.map(Math.round).filter((x) => x >= 3));
// [ 3, 3, 5, 5, 6, 7 ]

// 아이템을 검색하여 갯수를 리턴
const serchItem = (array, sItem) => {
  return array.filter((item) => item === sItem).length;
};

const serchItem2 = (array, sItem) => {
  let count = 0;
  array.forEach((item) => {
    if (item === sItem) count++;
  });
  return count;
};

let fList = ["🌽", "🍋", "🍉", "🍏", "🌽"]; //4
let nList = [1, 2, 3, 4, 5, 6, 45, 33, 90]; //5

console.log(`count ==> ${serchItem(fList, "🌽")}`);
console.log(`count ==> ${serchItem(nList, 4)}`);

console.log(`count ==> ${serchItem2(fList, "🌽")}`);
console.log(`count ==> ${serchItem2(nList, 4)}`);
