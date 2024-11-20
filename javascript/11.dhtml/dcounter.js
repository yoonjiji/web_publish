// 자바스크립트 호출 시 HTML의 body를 DOM에 먼저 로딩 후 실행하도록 하는 함수들
// window.onload(), document.ready(), DOMContentLoaded()
window.addEventListener("DOMContentLoaded", function () {
  initForm();
});

// counter form 생성 함수
function initForm() {
  let output = `
    <div class="counter_container">
      <h1>Counter</h1>
      <div id="number">0</div>
      <button type="button" class="button" data-operation="increment">increment</button>
      <button type="button" class="button" data-operation="decrement">decrement</button>
    </div>
  `;

  // counter 폼 출력
  document.querySelector("#content").innerHTML = output;

  // DHTML로 생성된 버튼 이벤트 처리
  let buttons = document.querySelectorAll(".button");
  // 배열로 가지고옴 [button.button, button.button]
  console.log(buttons);
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      let flag = button.dataset.operation;
      let number = document.querySelector("#number").textContent;
      if (flag === "increment") {
        document.querySelector("#number").textContent = ++number;
      } else {
        if (number > 0) {
          document.querySelector("#number").textContent = --number;
        }
      }
    });
  });

  // let number = document.querySelector("#number").textContent;
  // // Dhtml 만들어지기 전에 호출을 하면 에러 발생
  // // inner html에서 화면을 먼저 만들어 준 후 reference.
  // console.log(`number = ${number}`);
}

// counter 증가/감소
// function counter(flag) {
//   let number = document.querySelector("#number").textContent;
//   if (flag === "increment") {
//     document.querySelector("#number").textContent = ++number;
//   } else {
//     if (number > 0) {
//       document.querySelector("#number").textContent = --number;
//     }
//   }
// }
