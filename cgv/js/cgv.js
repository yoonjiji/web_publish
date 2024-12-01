import { kobisBoxOffice, searchMoviePoster } from "./kobisCommons.js";

createMovieChartList(1);

/************************************
 *
 * index -> 무비차트 리스트 생성 함수
 *
 ************************************/
function createMovieChartList(page) {
  const date = new Date();
  // const year = date.getFullYear();
  // const month = date.getMonth() + 1;
  // const day = date.getDate() - 1;

  const serchDt = date
    .getFullYear()
    .toString()
    .concat(date.getMonth() + 1, date.getDate() - 1);
  // error code :: concat is not a function
  // concat은 스트링 일때만 호출 => toString()으로 변환

  kobisBoxOffice("Daily", serchDt)
    .then((result) => {
      // console.log(result);
      const rankList = result.boxOfficeResult.dailyBoxOfficeList;
      // console.log(rankList);
      let posterList = []; // Promise 객체타입으로 10개의 이미지 poster 저장

      rankList.forEach((element) => {
        console.log(element.movieNm, element.openDt.replaceAll("-", ""));
        posterList.push(
          getPoster(element.movieNm, element.openDt.replaceAll("-", ""))
        );
      });

      // promise 객체는 queue에 10개 작업 다끝나야 종료 => Promise.All()
      Promise.all(posterList) // 비동기식 처리를 묶어서 한번에 실행 및 관리
        .then((poster) => {
          let output = "<ul>";

          // page === 2
          //   ? (output += `<li><span id="arrow-left">&lt;&lt;</span></li>`)
          //   : (output += "");

          let idx = 0;
          page !== 1 ? (idx += 5) : (idx = 0);
          rankList.forEach((movie, i) => {
            i += idx;
            if (i < page * 5) {
              output += `
              <li>
                <div>
                    <img
                      src="${poster[i]}"
                      alt="완벽한 가족 영화 포스터"
                    />
                </div>
                <div><h3>${rankList[i].movieNm}</h3></div>
                <div><h5>${rankList[i].openDt}</h5></div>
              </li>
          `;
            }
          });
          output += `<li><span id="arrow-left" class="movie-chart">&lt;&lt;</span></li>`;
          output += `<li><span id="arrow-right" class="movie-chart">&gt;&gt;</span></li>`;
          output += `</ul>`;
          document.querySelector(".contnet-moviechart-list").innerHTML = output;

          let btnLeft = document.querySelector("#arrow-left");
          let btnRight = document.querySelector("#arrow-right");
          page === 1
            ? (btnLeft.style.display = "none")
            : (btnLeft.style.display = "block");

          // page === 1
          //   ? (output += `<li><span id="arrow-right">&gt;&gt;</span></li></ul>`)
          //   : (output += "</ul>");

          // arrow-right :: click event
          let arrows = document.querySelectorAll(".movie-chart");
          arrows.forEach((arrow) => {
            arrow.addEventListener("click", (event) => {
              // console.log(event.target.id);
              event.target.id === "arrow-right"
                ? createMovieChartList(2)
                : createMovieChartList(1);
            });
          });
        })
        .catch((error) => console.log(error));
    })
    .catch();
} //createMovieChartList()

/*********************************************************************
 *
 * kovisCommons.js 파일의
 * searchMoviePoster 비동기식 함수를 순서대로 호출 getPoster함수 생성
 *
 *********************************************************************/
async function getPoster(movieNm, openDt) {
  return await searchMoviePoster(movieNm, openDt);
}
