// object는 다양한 타입의 데이터들을 저장하는 방식
// object literal : { property(key):value, property:value... }
// 하나의 실체의 정보를 담을 때 좋음
// ex) 학생관리프로그램: 홍길동(name, age, address, gender), 홍길순, 손세림, 윤지혜 ...

const obj = {
  // obj의 주솟값은 재할당이 불가, JSON안에 item은 수정 가능
  name: "손세림",
  age: 26,
};

// 1. obj 데이터 출력
console.log(obj);
console.log(obj.name, typeof obj.name);
console.log(obj.age, typeof obj.age);

// 2. name을 '김철수'로 변경
obj.name = "김철수";
console.log(obj.name, typeof obj.name);

// 3. age를 삭제
delete obj.age;
console.log(obj);
