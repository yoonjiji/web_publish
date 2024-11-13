// 변수를 객체의 value로 사용하는 경우, property 생략가능
let name = "윤지혜";
let age = 27;
const person = {
  name,
  age,
};
console.log(person);

let x = 0;
let y = 0;
const obj = {
  x,
  y,
};
console.log(obj);

let fname = "apple";
let emoji = "🍎";
let color = "red";

const fruite = {
  fname,
  emoji,
  color,
};
console.log(fruite);
console.clear();
// 사원들의 정보를 입력(파라미터)받아 객체로 반환하는 함수를 정의
// 사원정보 - 사번(empno), 이름(ename), 나이(age)
function createObj(empno, ename, age) {
  return { empno, ename, age };
}
console.log(createObj("1234", "홍길동", 20));
console.log(createObj("5678", "김철수", 30));
let emp1 = createObj("1234", "홍길동", 20);
let emp2 = createObj("5678", "김철수", 30);

/* 
    [
        {empno: '1234', ename: '홍길동', age: 20 },
        {empno: '5678', ename: '김철수', age: 30 }
    ]
*/
