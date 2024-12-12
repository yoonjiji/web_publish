import React, { useState } from "react";
import Counte from "./Counte.jsx";

export default function AppCounter() {
  const [totalNumber, setTotalNumber] = useState(0);
  const handleClick = (count, type) => {
    if (count < 10 && type === "+") {
      setTotalNumber(totalNumber + 1);
    } else if (count > 0 && type === "-") {
      setTotalNumber(totalNumber - 1);
    }
  };
  return (
    <div>
      <Counte total={totalNumber} click={handleClick} />
      <Counte total={totalNumber} click={handleClick} />
      <Counte total={totalNumber} click={handleClick} />
    </div>
  );
}
