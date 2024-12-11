import React, { useState } from "react";

export default function BestBookButton() {
  const [number, setNumber] = useState(1);
  const handleClick = (type) => {
    if (type === "-") {
      number > 1 ? setNumber(number - 1) : alert("최소 주문은 1권 이상입니다.");
    } else if (type === "+") {
      setNumber(number + 1);
    }
  };

  return (
    <div>
      <ul>
        <li>
          <input type="checkbox" />
          <button
            type="button"
            onClick={() => {
              handleClick("-");
            }}
          >
            -
          </button>
          <span>1</span>
          <button
            type="button"
            onClick={() => {
              handleClick("+");
            }}
          >
            +
          </button>
        </li>
        <li>
          <button type="button">카트에 담기</button>
        </li>
        <li>
          <button type="button">바로 구매</button>
        </li>
        <li>
          <button type="button">리스트에 넣기</button>
        </li>
      </ul>
    </div>
  );
}
