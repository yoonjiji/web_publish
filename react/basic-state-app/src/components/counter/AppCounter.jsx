import Counter from "./Counter.jsx";
import "./Counter.css";
import { useState } from "react";

export default function AppCounter() {
  const [totalNumber, setTotalNumber] = useState(0);

  // totalNumber 변경 => 자식인 Counter 컴포넌트 이벤트 발생했을 때
  const handleClick = (count, type) => {
    if (count < 10 && type === "+") {
      setTotalNumber(totalNumber + 1);
    } else if (count > 0 && type === "-") {
      setTotalNumber(totalNumber - 1);
    }
  };
  return (
    <div className="counter-container">
      <Counter total={totalNumber} Click={handleClick} />
      <Counter total={totalNumber} Click={handleClick} />
      <Counter total={totalNumber} Click={handleClick} />
    </div>
  );
}
