// counter 증가/감소
function counter(flag) {
  let number = document.querySelector("#number").textContent;
  if (flag === "increment") {
    document.querySelector("#number").textContent = ++number;
  } else if (flag === "decrement") {
    if (number > 0) {
      document.querySelector("#number").textContent = --number;
    }
  }
}

// counter 증가
function increment() {
  let number = document.querySelector("#number").textContent;
  //   let number2 = document.querySelector("#number2").value;
  // 태그 사이에 텍스트 콘텐츠 가져올때 => textContent
  // 인풋타입 데이터를 가져올 때 => value
  if (number < 10) {
    document.querySelector("#number").textContent = ++number;
  }
}

// counter 감소
function decrement() {
  let number = document.querySelector("#number").textContent;
  if (number > 0) {
    document.querySelector("#number").textContent = --number;
  }
}
