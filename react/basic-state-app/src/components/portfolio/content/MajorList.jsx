import React, { useEffect, useState } from "react";
import Major from "./Major.jsx";

export default function MajorList() {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch("/data/portfolio.json")
      .then((data) => data.json())
      .then((jsonData) => setList(jsonData.AboutMagorsList))
      .catch((error) => console.log(error));
  }, []);
  return (
    <ul class="majors">
      {list.map((item) => (
        <li class="major">
          <Major icon={item.icon} title={item.title} text={item.text} />
        </li>
      ))}
    </ul>
  );
}
