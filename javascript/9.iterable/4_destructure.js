// 구조 분해 할당(destructure)
let numbers = [1, 2, 3, 4, 5];
let aa = numbers;

let [a, b, ...nlist] = numbers;
// 1. 배열이 와야한다(구조를 동일하게)
// 2. shellow copy가 아닌 구조를 분해하고 새로 만들어 할당
/**
 * let a = number[0]; 랑 비슷
 */

console.log(aa); // [ 1, 2, 3, 4, 5 ] // 객체 주소
console.log(a); // 1
console.log(b); // 2
console.log(nlist); // [ 3, 4, 5 ]

// hong이라는 사람의 정보를 각각의 변수로 정의
let hong = {
  name: "홍길동",
  age: 20,
  address: "서울시 강남구",
};

let { name, age, address } = hong;
/*
    구조 분해 할당으로 정의되는 변수는 
    객체의 속성(프로퍼티, 키)과 동일한 이름으로 정의되어야함!
    console.log(hong.name); // 홍길동
    console.log(hong.age); // 20
    console.log(hong.address); // 서울시 강남구
 */

console.log(name); // 홍길동
console.log(age); // 20
console.log(address); // 서울시 강남구

// 리액트에선 이렇게 사용
function test({ ...params }) {
  // {z:1,y:1,w:1};
  let { z, y, w } = params;
  // 구조 분해 할당이 함수 안에 들어가서 사용
}
let z = 1;
let y = 2;
let w = 3;
test(z, y);

// 함수의 반환값을 받아 구조 분해 할당(destructure) 방식으로 정의
function createEmoji() {
  return {
    name2: "apple",
    color: "red",
    emoji: "🍎",
  };
}

let { color, emoji, name2, price = 1000 } = createEmoji();
// let price = 1000;
console.log(name2, color, emoji, price); // 순서 바꿔도 출력 가능
// apple red 🍎 1000

let flist = ["🍎", "🍋", "🥝"];
let [apple, orange, lemon] = flist;
console.log(apple, orange, lemon);
// 🍎 🍋 🥝
