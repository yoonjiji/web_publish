import AirbnbComponent from "./AirbnbComponent.jsx";
import "./Airbnb.css";
import { useEffect, useState } from "react";

export default function AppAirbnb() {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch("/data/airbnb.json")
      .then((data) => data.json())
      .then((jsonData) => setList(jsonData))
      .catch((error) => console.log(error));
  }, []);

  return (
    <ul>
      {list && // 리스트에 데이터가 있을 때만 리스트 실행
        list.map((item) => (
          <li>
            <AirbnbComponent
              src={item.src}
              name={item.name}
              view={item.view}
              date={item.date}
              price={item.price}
              isGood={item.isGood}
              color={item.color}
            />
          </li>
        ))}
    </ul>
  );
}
