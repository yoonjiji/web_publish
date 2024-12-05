import SpecialItem from "./SpecialItem.jsx";

export default function Special() {
  const list = [
    {
      text1: "SUITE CENEMA",
      text2: "#호텔 컨셉의 프리미엄관",
    },
    {
      text1: "CINE & LIVINGROOM",
      text2: "#신개념 소셜 상영관",
    },
    {
      text1: "4DX",
      text2: "#모션시트 #오감체험",
    },
    {
      text1: "CINE de CHEF",
      text2: "#쉐프가 있는 영화관",
    },
  ];
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
            {list.map((item) => (
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
