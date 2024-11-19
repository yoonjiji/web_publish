// iterable(이터러블) object - Iteration Protocol : 순회를 위한 규칙, 조약
// for...of, ...(spread: 전개구문), 구조분해할당(destructing object) - 전개구문에 들어있는 데이터를 분해해서 변수에 할당
// String, Array, Map, Set ...

// "Hello~ JavaScript~!!!"
const text = new String("Hello~ JavaScript~!!!");
for (let element of text) {
  console.log(`element = ${element}`);
}

// [1, 2, 3, 4, 5]
const number = [1, 2, 3, 4, 5];
for (let element of number) {
  console.log(`element = ${element}`);
}

// Number 클래스 생성 및 실행
const numberClass = new Number(12345);
// for (n of numberClass) console.log(n);
// TypeError: numberClass is not iterable
