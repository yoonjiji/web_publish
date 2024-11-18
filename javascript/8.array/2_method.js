// Array 빌트인 객체의 메소드 익히기 => MDN 사이트 참조
let array1 = [1, 2, 3, 4, 5];
console.log(array1[0]); // array1.0 <-- 사용 불가 X
console.log(array1["0"]);
console.log(`array1.length = ${array1.length}`);
// array1.length = 5

let fruits = ["🍏", "🍋"];
console.log(fruits); // [ '🍏', '🍋' ]
// 빨간사과 추가
fruits[fruits.length] = "🍎";
console.log(fruits); // [ '🍏', '🍋', '🍎' ]
// 오렌지 추가

// 1. 배열 요소 추가 : push(item1...itemN)
fruits.push("🍊"); // 배열의 마지막에 하나 또는 여러개의 데이터 추가
console.log(fruits); // [ '🍏', '🍋', '🍎', '🍊' ]

// let a = ["🍏", "🍋", "🍎"];
// fruits.push(a);
// console.log(fruits);
// [ '🍏', '🍋', '🍎', '🍊', [ '🍏', '🍋', '🍎' ] ]

// 2. fruits 배열의 전체 key값 반환 : object.keys(객체인스턴스명)
// 배열의 key값은 인덱스 주소
let keyList = Object.keys(fruits); // 배열로 인덱스 주소를 리턴
console.log(keyList[2]); // 2

// 3. 배열 요소 삭제
// 3.1 배열 객체의 마지막 요소 삭제 - pop()
console.log(fruits); // [ '🍏', '🍋', '🍎', '🍊' ]
let deleteItem = fruits.pop(); // 삭제된 마지막 요소 저장
console.log(`fruits2 = ${deleteItem}`); // fruits2 = 🍊
console.log(fruits); // [ '🍏', '🍋', '🍎' ]

// 3.2 배열 객체의 처음 요소 삭제 - shift()
console.log(fruits); // [ '🍏', '🍋', '🍎' ]
console.log(fruits.shift()); // 🍏
console.log(fruits); // [ '🍋', '🍎' ]

// 3.3 배열 특정요소 삭제 - splice
// array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
fruits.push("🍆", "🌽", "🍄", "🫐");
console.log(fruits);
// [ '🍋', '🍎', '🍆', '🌽', '🍄', '🫐' ]
// 레몬을 딸기로 교체
fruits.splice(0, 1, "🍓");
console.log(fruits);
// [ '🍓', '🍎', '🍆', '🌽', '🍄', '🫐' ]
// 1~3번지 요소를 삭제
// 딥카피 방식으로 원본 요소를 아예 삭제(원본 삭제)
fruits.splice(1, 3);
console.log(fruits); // [ '🍓', '🍄', '🫐' ]
// 0번지 주소에 수박 추가
fruits.splice(0, 0, "🍉");
console.log(fruits); // [ '🍉', '🍓', '🍄', '🫐' ]

// 3.4 배열 객체의 특정 요소 추출 - slice(index1, index2)
// 원본 배열 객체의 특정 요소를 추출하여 새로운 배열로 생성
fruits.push("🍆", "🌽", "🍄", "🫐");
console.log(fruits);

// 1, 2 인덱스의 요소를 추출(얕은 복사: shallow copy)
// shallow copy 원본에 영향을 주지 않음
let sfruits1 = fruits.slice(1, 3);
/*
[
    '🍉', '🍓', '🍄',
    '🫐', '🍆', '🌽',
    '🍄', '🫐'
  ]
*/
console.log(sfruits1); // [ '🍓', '🍄' ]
// 배열의 첫째 요소와, 마지막 요소는 삭제를 안함

// 3.5 배열 합치기 : concat(배열)
console.clear();
let numberList1 = [1, 2, 3];
let numberList2 = [4, 5, 6];
console.log(numberList1.concat(numberList2)); // [ 1, 2, 3, 4, 5, 6 ]
console.log(numberList2.concat(numberList1)); // [ 4, 5, 6, 1, 2, 3 ]

// 3.6 배열의 순서 바꾸기 : reverse()
let numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers.reverse()); // [ 6, 5, 4, 3, 2, 1 ]

// 3.7 배열의 중첩 해제 : flat()
// [1, 2, 3 [5, 6]] => [ 1, 2, 3, 4, 5, 6 ] 1레벨 중첩
let fnumbers = [1, 2, 3, [5, 6, [7, 8]]];
console.log(fnumbers);
// [ 1, 2, 3, [ 5, 6, [ 7, 8 ] ] ] 2레벨 중첩

console.log(fnumbers.flat()); // 1 level 중첩 해제
// [ 1, 2, 3, 5, 6, [ 7, 8 ] ]
console.log(fnumbers.flat(2)); // 2 level 중첩 해제
// [ 1, 2, 3, 5, 6, 7, 8]
// 내부에 만들어지는 배열 객체가 너무 많아져서 메모리 부담이 큼
// api에서 데이터를 받아올 때 가끔 사용

// 3.8 배열의 문자요소를 하나의 String 문자열로 반환 : join()
let textList = ["a", "b", "c"];
console.log(textList.join()); // a,b,c
console.log(textList.join().split()); // [ 'a,b,c' ]
// ,로 구분해서 배열로 만들어줌 (String 문자열 형태일 때 적용)
