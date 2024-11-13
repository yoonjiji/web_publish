function calculator(a, b, op) {
  a = parseInt(a);
  b = parseInt(b);

  switch (op) {
    case "+":
      console.log(`${a + b}`);
      break;
    case "-":
      console.log(`${a - b}`);
      break;
    case "*":
      console.log(`${a * b}`);
      break;
    case "/":
      console.log(`${a / b}`);
      break;
    case "%":
      console.log(`${a % b}`);
      break;

    default:
      console.log("계산된 값이 없습니다.");
      break;
  }
}
