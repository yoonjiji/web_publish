// 1. DHTML이 제일 먼저 실행되게
window.addEventListener("DOMContentLoaded", () => {
  initForm();
});

// 2. dhtml : 계산기 폼 생성
initForm = () => {
  let output = `
    <ul>
      <li>
        <input type="text" id="number1" placeholder="첫번째 숫자" />
        <input type="text" id="number2" placeholder="두번째 숫자" />
      </li>
      <li>
        <button type="button" class="button" data-operation="sum">➕</button>
        <button type="button" class="button" data-operation="sub">➖</button>
        <button type="button" class="button" data-operation="mul">✖️</button>
        <button type="button" class="button" data-operation="div">➗</button>
      </li>
      <li>
        <h3 class="result"></h3>
      </li>
    </ul>
    `;

  // 3. 계산기 폼 출력
  document.querySelector("#contents").innerHTML = output;

  // 4. 버튼을 누르면 input1과 input2를 더해주는 로직
  let buttons = document.querySelectorAll(".button");
  console.log(buttons);
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      let flag = button.dataset.operation;
      let number1 = document.querySelector("#number1").value;
      let number2 = document.querySelector("#number2").value;

      // 5. 유효성 체크
      if (number1 === "" || number2 === "") {
        document.querySelector(".result").textContent =
          "모든 입력값을 채워주세요!";
        return;
      }

      switch (flag) {
        case "sum":
          document.querySelector(".result").textContent = `result : ${parseInt(
            number1 + number2
          )}`;
          break;
        case "sub":
          document.querySelector(".result").textContent = `result : ${parseInt(
            number1 - number2
          )}`;
          break;
        case "mul":
          document.querySelector(".result").textContent = `result : ${parseInt(
            number1 * number2
          )}`;
          break;
        case "div":
          document.querySelector(".result").textContent = `result : ${parseInt(
            number1 / number2
          )}`;
          break;

        default:
          break;
      }
    });
  });
};
