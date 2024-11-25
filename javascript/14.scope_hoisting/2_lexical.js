// lexical(렉시컬) - 실행 컨텍스트 안에 포함된 개념으로 스코프별로 메모리를 효율성
// 있게 관리하는 영역, 변수선언, 실행코드, 외부호출 코드
// 콜스택(Call Stack) - 호출되는 코드(함수)를 순차적으로 실행
// 변수의 선언시 let, const를 활용하여 정확한 스코프 범위 설정 중요!!!
{
  let a = 10;
  console.log(`a-->${a}`); // a-->10
  console.log(`aa-->${aa}`); // aa-->undefined
  // var는 전역에 선언. Reference가 된 것 확인

  {
    let b = 20;
    var aa = 100; // 선언은 전역으로 값은 level2 스코프에 할당
    console.log(`b-->${b}`); // b-->20
    console.log(`aa-->${aa}`); // aa-->100

    {
      let c = 30;
      console.log(`c-->${c}`); // c-->30
      console.log(`a-->${a}`); // a-->10
      console.log(`b-->${b}`); // b-->20
    } // levet 3
  } // levet 2
} // level 1
