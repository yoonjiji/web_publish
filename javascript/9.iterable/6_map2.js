// Map 클래스 생성
const fList = new Map([
  [1, "one"],
  [2, "two"],
]);
// 구조 분해 할당을 내부적으로 진행

console.log(fList);
// Map(2) { 1 => 'one', 2 => 'two' }
console.log(fList.get(1)); // one
console.log(fList.get(2)); // two

// 사이즈
console.log(`size = ${fList.size}`); // size = 2

// 데이터 추가
fList.set(3, "three");
fList.set([4, "four"]);
// [ 4, 'four' ] => undefined 이렇게 들어감.
// [4, "four"] <== 이부분이 key 값으로 갔음 // set(key, value)
// set method는 구조 분해 할당이 안된다
console.log(fList);
// Map(3) { 1 => 'one', 2 => 'two', 3 => 'three' }

// 데이터 확인
if (fList.has(3)) console.log(fList.get(3)); // three

// 모든 키 값 출력
console.log(fList.keys());
// [Map Iterator] { 1, 2, 3, [ 4, 'four' ] }

// 모든 value 출력
console.log(fList.values());
// [Map Iterator] { 'one', 'two', 'three', undefined }

// key, value를 입력된 순서대로 배열 형태로 반환
let iteratorObj = fList.entries();
console.log(iteratorObj);
/*
  [Map Entries] {
  [ 1, 'one' ], [ 2, 'two' ], [ 3, 'three' ],[ [ 4, 'four' ], undefined ]
}
 */
console.log(iteratorObj.next());
// 마우스 커서가 첫번째에 위치해 있음
// { value: [ 1, 'one' ], done: false }
console.log(iteratorObj.next().value);
// [ 1, 'one' ]

// 순회 : forEach
fList.forEach((element) => console.log(element));
// one
// two
// three
// undefined
// Map의 forEach는 value가 default로 출력됨
fList.forEach((key, value, map) => console.log(key, value, map));
// key, value, map(Map의 데이터 통째로) 3개밖에 인자로 못 받음

// 순회 : for...of
// [key, value]
for (let element of fList) console.log(element);
/*
  [Map Entries] {
  [ 1, 'one' ], [ 2, 'two' ], [ 3, 'three' ],[ [ 4, 'four' ], undefined ]
}
 */

// key만 출력
for (let key of fList.keys()) console.log(`key = ${key}`);
/**
    key = 1
    key = 2
    key = 3
    key = 4,four
 */

// value 출력
for (let value of fList.values()) console.log(`value = ${value}`);
/*
    value = one
    value = two
    value = three
    value = undefined
 */

// entries 출력
for (let entry of fList.entries())
  console.log(typeof entry, `entry = ${entry}`);
for (let entry of fList.entries())
  console.log(typeof entry, `entry = ${entry.value}`);
// entry.value로는 접근 X (Map에서 외부접근 막음)
/**
    object entry = undefined
    object entry = undefined
    object entry = undefined
    object entry = undefined
 */

// 데이터 삭제
if (fList.has(1)) fList.delete(1);
console.log(fList);
// Map(3) { 2 => 'two', 3 => 'three', [ 4, 'four' ] => undefined }

// 전체 삭제
fList.clear();
console.log(fList); // Map(0) {}
