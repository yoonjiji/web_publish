// 호이스팅(Hoisting) : 코드 실행 전 메모리에 객체를 선언하고 할당하는 작업
// 콜스택이 인터프리터로 실행하기 전에 한번에 읽고, 미리 힙에서 객체로 만들어둠

// 함수호출
hoist1();
// hoist2();
// 호이스팅이 되지 않기 때문에 호출되지 않음

function hoist1() {
  console.log("호이스팅 1");
}
// funtion 키워드는 미리 호이스팅을 해둠

const hoist2 = () => {
  console.log("호이스팅 2");
};

hoist2(); // arrow 함수는 반드시 선언후 함수 호출!!
// allow function은 const, let scope 미리 호이스팅 되지 않음
