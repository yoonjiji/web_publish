import { useEffect, useState } from "react";
import EventContent from "./EventContent.jsx";
import { fetchJSON } from "../js/commons.js";

export default function Event() {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetchJSON("/list/cgv_content.json")
      .then((result) => setList(result.EventContentList))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div class="content-padding">
      <div class="content-title-tyle">
        <h2 class="content-title-tyle-font">EVENT</h2>
        <button class="total-view-button">전체보기 &gt; </button>
      </div>

      <div>
        <ul class="content-event-list">
          {list &&
            list.map((item) => (
              <li>
                <EventContent
                  src={item.src}
                  title={item.title}
                  date={item.date}
                />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
