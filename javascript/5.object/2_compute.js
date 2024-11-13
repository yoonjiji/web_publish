const person = {
  name: "손세림",
  age: 26,
  job: "대학생",
};
const fruite = {
  name: "사과",
  emoji: "🍎",
};

// CRUD(Create Read Update Delete)
// person 객체를 CRUD로 관리하는 함수를 정의
// setValue(), getValue(), updateValue(), deleteValue()
console.clear();
const setValue = (object, newKey, value) => (object[newKey] = value);
const getValue = (object, key) => object[key];
const updateValue = (object, key, newValue) => (object[key] = newValue);
const deleteValue = (object, key) => delete object[key];

setValue(person, "address", "서울시"); // 외부에서 값을 넣을 땐 싱글 리터럴
setValue(fruite, "color", "Red");
console.log(person);
console.log(fruite);

console.log(getValue(person, "name"));
console.log(getValue(fruite, "color"));

updateValue(person, "name", "김철수");
updateValue(fruite, "color", "Green");
console.log(person);
console.log(fruite);

deleteValue(person, "age");
deleteValue(fruite, "name");
console.log(person);
console.log(fruite);
