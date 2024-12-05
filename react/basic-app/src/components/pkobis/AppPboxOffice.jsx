// import PboxOffice from "../pkobis/PboxOffice.jsx";

export default function AppPboxOffice() {
  const key = `1387ed83604df30a0c5d9dfdea0cba00`;
  const url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=20241203`;

  return (
    <div>
      <div className="title">
        <p>순위</p>
        <p>제목</p>
        <p>개봉일</p>
        <p>당일관객수</p>
        <p>누적관객수</p>
        <p>누적매출액</p>
      </div>
      <div className="content">{/* <PboxOffice /> */}</div>
    </div>
  );
}
