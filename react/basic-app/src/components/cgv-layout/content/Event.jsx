import EventItem from "./EventItem.jsx";

export default function Event() {
  const list = [
    {
      src: "https://img.cgv.co.kr/WebApp/contents/eventV4/42820/17327600028470.jpg",
      title: "2025 CGV짱구는 못말려 캘린더 출시!",
      date: "2024.11.28~2024.12.31",
    },
    {
      src: "https://img.cgv.co.kr/WebApp/contents/eventV4/42847/17328651238010.jpg",
      title: "[CGV 일산] SCREENX 리뉴얼 오픈",
      date: "2024.12.01 ~ 2024.12.17",
    },
    {
      src: "/images/event1.jpg",
      title: "[콜렉터블 무비머니]Vol.1 맥스 달든",
      date: "2024.09.25~2024.10.31",
    },
  ];
  return (
    <div class="content-padding">
      <div class="content-title-tyle">
        <h2 class="content-title-tyle-font">EVENT</h2>
        <button class="total-view-button">전체보기 &gt;</button>
      </div>

      <div>
        <ul class="content-event-list">
          {list.map((item) => (
            <li>
              <EventItem src={item.src} title={item.title} date={item.date} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
