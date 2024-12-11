import { useState } from "react";

export default function Counter({ total, Click }) {
  // 값이 변경이 될 때마다 상태관리 앱이 관리하도록
  // 버츄얼 돔 거쳤다가 이벤트 바로 반영
  const [number, setNumber] = useState(0);

  // ***컴포넌트 단위로 독립적으로 이벤트가 실행된다***
  function increment() {
    // 괄호는 보내고 다시 돌아온다느 의미
    // 괄호 빠지면 실행하고 끝
    number < 10 ? setNumber(number + 1) : setNumber(number);

    // 증감 연산자 실행이 안됨
    // useState에서는 직접 관리하기 때문에 연산식까지 필요함

    Click(number, "+"); // number: 0
  }
  function decrement() {
    number > 0 ? setNumber(number - 1) : setNumber(number);

    Click(number, "-"); // number: 0
  }

  return (
    <div className="container">
      <div>
        <span className="number">{number} /</span>
        <span className="total-number">{total}</span>
      </div>
      <button type="button" className="button" onClick={increment}>
        증가(+)
      </button>
      <button type="button" className="button" onClick={decrement}>
        감소(-)
      </button>
    </div>
  );
}
