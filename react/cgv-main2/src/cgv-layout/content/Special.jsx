import { useEffect, useState } from "react";
import SpecialItem from "./SpecialItem.jsx";

export default function Special() {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch("data/cgv_content.json")
      .then((data) => data.json())
      .then((jsondata) => setList(jsondata.specialList))
      .catch();
  }, []);

  return (
    <div class="content-padding">
      <div class="content-title-tyle">
        <h2 class="content-title-tyle-font">특별관</h2>
        <button class="total-view-button">전체보기 &gt;</button>
      </div>

      <div class="content-special">
        <div>
          <a href="#">
            <img src="images/special1.png" alt="이벤트 광고" />
          </a>
        </div>

        <div>
          <ul class="content-special-list">
            {list &&
              list.map((item) => (
                <li>
                  <SpecialItem text1={item.text1} text2={item.text2} />
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
