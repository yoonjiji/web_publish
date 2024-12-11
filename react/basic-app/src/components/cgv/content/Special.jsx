import { useEffect, useState } from "react";
import SpecialItem from "./SpecialItem.jsx";
import { fetchJSON } from "../js/commons.js";

export default function Special() {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetchJSON("/list/cgv_content.json")
      .then((result) => setList(result.SpecialList))
      .catch((error) => console.log(error));
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
            <img src="/images/special1.png" alt="이벤트 광고" />
          </a>
        </div>

        <div>
          <ul class="content-special-list">
            {list &&
              list.map((item) => (
                <li>
                  <SpecialItem name={item.name} tag={item.tag} />
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
