import React, { useState } from "react";

export default function Counte({ total, click }) {
  const [number, setNumber] = useState(0);
  const increcent = () => {
    number < 10 ? setNumber(number + 1) : setNumber(number);
    click(number, "+");
  };
  const decrecent = () => {
    number > 0 ? setNumber(number - 1) : setNumber(number);
    click(number, "-");
  };
  return (
    <>
      <div
        style={{ width: "200px", border: "1px solid red", textAlign: "center" }}
      >
        <div>
          <span>{number} /</span>
          <span>{total}</span>
        </div>
        <button type="button" onClick={increcent}>
          +
        </button>
        <button type="button" onClick={decrecent}>
          -
        </button>
      </div>
    </>
  );
}
