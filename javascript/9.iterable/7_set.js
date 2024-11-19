// Set 클래스
// 다양한 데이터(원시데이터(Primitive), 객체참조값)
// 데이터 추가 : add(value)

let mySet = new Set();
mySet.add(10);
mySet.add("손세림");
mySet.add({ age: 20 });
mySet.add([1, 2, 3, 4]);
console.log(mySet);
// Set(4) { 10, '손세림', { age: 20 }, [ 1, 2, 3, 4 ] }

for (value of mySet) console.log(`value = ${value}`);
/*
    value = 10
    value = 손세림
    value = [object Object]
    value = 1,2,3,4
 */
mySet.forEach((value, key, set) => console.log(value, key, set));
// value, key, set 3개만 return으로 받을 수 있음
// set은 value값만 받기 때문에 key = value이다

// 데이터 확인
console.log(mySet.has(10)); // true
console.log(mySet.has(100)); // false

// 데이터 삭제
if (mySet.has(10)) {
  mySet.delete(10);
  console.log("삭제 완료!");
} else console.log("데이터가 존재하지 않음");
console.log(mySet);
// Set(3) { '손세림', { age: 20 }, [ 1, 2, 3, 4 ] }

// 전체 삭제
mySet.clear();
console.log(mySet);
// Set(0) {}
