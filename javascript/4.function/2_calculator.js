// 계산기 기능 구현
function calculator(a, b, op) {
  a = parseInt(a);
  b = parseInt(b);
  switch (op) {
    case "+":
      console.log(`sum = ${a + b}`);
      break;
    case "-":
      console.log(`빼기 = ${a - b}`);
      break;
    case "*":
      console.log(`곱하기 = ${a * b}`);
      break;
    case "/":
      console.log(`나누기 = ${a / b}`);
      break;
    case "%":
      console.log(`나머지(모듈러) = ${a % b}`);
      break;

    default:
      console.log("처리할 수 없는 연산자입니다.");
      break;
  }
}

// calculator(1, 2, "+");
// calculator(1, 2, "-");
// calculator(1, 2, "*");
// calculator(1, 2, "/");
// calculator(1, 2, "%");
