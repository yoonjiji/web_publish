// Iterable Object - 순회가 가능한 객체, String, Array, Map, Set...(proto type)
// For...of, ... : Spread Operator(전개구문), Destructing Object(구조 분해 할당)
// Map : (key, value) 키로 값을꺼내기 때문에 index가 따로 없다.
//  set, get, has, keys, value, entries, clear...
// Set : (value) - add, get, has, delete, key, value(키 밸류값 동일해서 의미x), clear

// 인덱스를 지키며 넣어야한다 -> Array
// 키 밸류 -> Map
// 중복없이 데이터를 넣고 순서 상관없다 -> Set

// 1. Spread Operator
function display(...params) {
  for (number of params) console.log(number);
}
display(1, 2);
display(1, 2, 3, 4);

const hong = {
  name: "홍길동",
  age: 20,
};
const hongUpdate = {
  ...hong,
  address: "마포구",
};

console.log(hong);
console.log(hongUpdate);

// 2. Desturing Object(구조 분해 할당)
const getObject = () => {
  return {
    name: "손세림",
    age: 26,
  };
};
const { name, age } = getObject();
// object literal을 분해해서 각 변수에 할당
console.log(name, age);
// 아 바로 저 키를 변수로할당해서 콘솔로그로 불러오면 데이터가 나오구나!

const getObject2 = () => {
  return [1, 2, 3];
};
const [n1, n2, n3] = getObject2();
// const n1 = 1;
console.log(n1, n2, n3);

// 3. 인스턴스객체.forEach(콜백함수)
// 콜백함수 인자에 forEach가 인스턴스 객체안에 있는 요소를 가져와 파라미터로 넘겨 실행시켜줌
const numbers = [1, 2, 3];
numbers.forEach((element, i) => console.log(i, element));
// 콜백함수는 익명함수(한 번 실행하고 끝남)
// forEach에서 2개를 인자로 받으면 인덱스 번호까지 가져옴

const myMap = new Map();
myMap.set("name", "홍길동");
myMap.set("age", 20);
myMap.forEach((value, key) => console.log(key, value));

const mySet = new Set();
mySet.add("홍길동");
mySet.add("홍길동");
mySet.add("서현진");
console.log(mySet);
mySet.forEach((value) => console.log(value));
