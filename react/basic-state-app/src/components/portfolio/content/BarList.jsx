import React, { useEffect, useState } from "react";
import Bar from "./Bar.jsx";

export default function BarList() {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch("/data/portfolio.json")
      .then((data) => data.json())
      .then((jsonData) => setList(jsonData.codingSkillList))
      .catch((error) => console.log(error));
  }, []);

  return (
    <ul>
      {list.map((item) => (
        <Bar name={item.name} percent={item.percent} />
      ))}
    </ul>
  );
}
