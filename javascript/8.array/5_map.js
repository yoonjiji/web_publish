// 순회 메소드가 적용되는 map 함수는 파라미터 인자로 콜백 함수를 입력받아
// 처리한 결과를 새로운 배열 객체로 생성하여 반환한다.
let numbers = [1, 2, 3, 4, 5];
let fnumbers = [1.001, 2.002, 3.03, 4.04, 5.05];

// numbers 배열요소에 각각 10을 곱한 결과 출력
let numbers2 = numbers.map((item) => item * 10); // [10, 20 ... 50]
console.log(`numbers2 = ${numbers2}`); // numbers2 = 10,20,30,40,50

// fnumber 배열 요소를 모두 정수로 변환하여 출력
let fnumbers2 = fnumbers.map((x) => Math.floor(x)); // fnumbers2 = 1,2,3,4,5
// let fnumbers2 = fnumbers.map(Math.floor); // fnumbers2 = 1,2,3,4,5
// 이렇게도 축약됨
console.log(`fnumbers2 = ${fnumbers2}`);

// 배열의 요소로 Object literal 값이 있는 경우
let objects = [
  { name: "홍길동", age: 20 },
  { name: "김철수", age: 21 },
  { name: "최영희", age: 21 },
];
objects.forEach((obj, i) => {
  console.log(i, obj);
});
/*
0 { name: '영숙', age: 20 }
1 { name: '정희', age: 21 }
2 { name: '영자', age: 21 }
*/

// let a = {}; // key:value
// a["name"] = "홍길동";
// console.log(a);
// { name: '홍길동' }
// 빈 오브젝트를 생성 후 변수로 데이터 생성

// {홍길동:홍길동 , age: 20} ~~
// 홍길동, 최영희 이름을 가진 학생정보만 배열 출력
let objects2 = objects.map((obj) => {
  // obj === name: "홍길동"
  //   let resultObj = {};
  //   resultObj[obj.name] = obj.value; // key
  //   resultObj[obj.name] = "name"; // value
  //   resultObj[obj.age] = obj.value;
  //   resultObj[obj.age] = "age";
  //   return resultObj;
  let rObj = {};
  if (obj.name === "홍길동") {
    rObj = obj;
  } else if (obj.name === "최영희") {
    rObj = obj;
  }
  return rObj;
}); // [{}]
console.log(objects2);
//[ { '영숙': undefined }, { '정희': undefined }, { '영자': undefined } ]

// 맵은 전체 데이터를 모두 적용하는 경우에 좋음(모든 데이터 출력)
// 필터는 부분데이터만 적용하는 경우에 좋다(해당 안되는 거 삭제)
