/*
* 함수정의 ::
    function 함수명(파라미터(=매개변수)) {
        실행로직;
    }

* 함수 호출 ::
    함수명(파라미터 형식 일치);

* 내장(Built-in) 함수 : 자주사용하는 기능을 함수로 구현하여 엔진에서 제공함
    - parseInt(문자열); 문자열을 숫자로 변환하는 함수
    - parseFloat(문자열); 문자열을 숫자로 변환하는 함수
*/
// 빌트인 함수 parseInt() 호출
let a = `100`;
console.log(parseInt(a), typeof parseInt(a));
console.log(parseInt(a) + 100);

// 두 개의 숫자를 입력받아, 합계를 출력하는 로직 작성
let num1 = 10;
let num2 = 20;
console.log(`sum ==> ${num1 + num2}`);

// 함수 정의
function add(num1, num2) {
  // var num1,2 = 호출시 입력되는 값
  let n1 = parseInt(num1);
  let n2 = parseInt(num2);
  console.log(`sum ==> ${n1 + n2}`);
}

// 두 숫자의 차를 구하되, 결과는 음수가 출력되지 않도록 함
function min(a, b) {
  if (a >= b) {
    let n1 = parseInt(a);
    let n2 = parseInt(b);
    console.log(`sum ==> ${n1 - n2}`);
  } else {
    console.log(`a는 b보다 커야합니다.`);
  }
}

// 함수 호출 위치에 결과값 출력
add("2134410", "232120");
min("20", "20");
