import { useEffect, useState } from "react";
import EventItem from "./EventItem.jsx";

export default function Event() {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch("data/cgv_content.json")
      .then((data) => data.json())
      .then((jsonData) => setList(jsonData.eventList))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div class="content-padding">
      <div class="content-title-tyle">
        <h2 class="content-title-tyle-font">EVENT</h2>
        <button class="total-view-button">전체보기 &gt;</button>
      </div>

      <div>
        <ul class="content-event-list">
          {list &&
            list.map((item) => (
              <li>
                <EventItem src={item.src} title={item.title} date={item.date} />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
