import { kmdb } from "./0commons.js";
initForm();

function initForm() {
  let output = `
    <h1>KMDB API</h1>
    <div>
      <select id="type">
        <option value="default">선택</option>
        <option value="director">감독</option>
        <option value="actor">배우</option>
      </select>
      <input type="text" id="type_value" placeholder="감독/배우를 입력해주세요"/>
      <input type="text" id="title" placeholder="영화제목을 입력해주세요"/>
      <button type="button" id="search">Search</button>
    </div>
    <div id="result"></div>
  `;

  document.querySelector("body").innerHTML = output;

  // 버튼 클릭시 이벤트
  document.querySelector("#search").addEventListener("click", () => {
    // 유효성 체크
    let type = document.querySelector("#type");
    let typeValue = document.querySelector("#type_value");
    let title = document.querySelector("#title");
    if (type.value === "default") {
      alert("타입을 선택해주세요");
      type.focus();
    } else if (typeValue.value === "") {
      alert("감독/배우를 입력해주세요");
      typeValue.focus();
    } else if (title.value === "") {
      alert("영화제목을 입력해주세요");
      title.focus();
    } else {
      searchMovieResult(type.value, typeValue.value, title.value);
    }
  });
} // initForm()

/**
 * KMDB API 연동후 출력 폼
 */
function searchMovieResult(type, value, title) {
  kmdb(type, value, title)
    .then((result) => {
      let count = result.TotalCount;
      let output = ``;

      if (count) {
        let info = result.Data[0].Result[0];
        let directors =
          result.Data[0].Result[0].directors.director[0].directorNm
            .replace("!HS", "")
            .replace("!HE", "");
        let actors = result.Data[0].Result[0].actors.actor[0];
        let staffs = result.Data[0].Result[0].staffs.staff[0];
        let posterArray = result.Data[0].Result[0].posters.split("|");
        let stllArray = result.Data[0].Result[0].stlls.split("|");
        let title = result.Data[0].Result[0].title
          .replace("!HS", "")
          .replace("!HE", "");

        output += `
            <div class="container">
              <div class="container-content">
                <h3>${title}</h3>
                <h5>${info.titleEng} - ${info.prodYear}년</h5>
                <hr />
                <p>
                  <span>${info.type} </span><span>${info.nation} </span>
                  <span>${info.runtime}분 </span><span>${info.repRlsDate}(개봉)</span>
                </p>
                <p><span>제작사 :: </span><span>${info.company}</span></p>
                <p><span>감독 :: </span><span>${directors}</span></p>
                <p><span>출연 :: </span><span>김민희, 김태리, 하정우</span></p>
              </div>
              <div class="container-image">
                <img
                  src="${posterArray[0]}"
                  alt="poster"
                />
              </div>
            </div>
            <div class="container-stills"></div>
        `;

        stllArray.forEach((still) => {
          output += `
            <img src="${still}"/>
          `;
        });
      } else {
        output += `<h5>검색하신 데이터가 존재하지 않습니다</h5>`;
      }
      document.querySelector("#result").innerHTML = output;
    })
    .catch((error) => console.log(error));
}
