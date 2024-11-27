import { kobisMovieList, kobisMovieDetail } from "./kobisCommons.js";

let mlist = null; // 영화 리스트 전역변수

initForm();

function initForm() {
  // KOBIS 영화 리스트 가져오기
  function createMovieList() {
    kobisMovieList()
      .then((list) => {
        // const tcount = list.movieListResult.totCnt;
        // const length = list.movieListResult.movieList.length;
        const movieList = list.movieListResult.movieList;
        // console.log(`tcount --> ${tcount}`);
        // console.log(`length --> ${length}`);

        mlist = movieList;
        // for (let movie of mlist) {
        //   console.log(movie.movieNm);
        // }

        // movieList에서 title 검색
      })
      .catch((error) => console.log(error));
  }

  createMovieList();

  let output = `
        <h1>KOBIS 영화 검색</h1>
        <div>
            <input type="text" id="search_title" placeholder="제목을 입력해주세요">
            <button type="button" id="search_button">Search</button>
        </div>
        <div id="result"></div>
    `;
  document.querySelector("body").innerHTML = output;

  // Search 버튼 이벤트 추가 및 유효성 체크
  document.querySelector("#search_button").addEventListener("click", () => {
    let title = document.querySelector("#search_title");

    if (title.value.trim() === "") {
      alert("값을 입력해주세요");
      title.focus();
    } else {
      // 영화리스트 정보 화면 출력
      searchMovieList(title.value.trim());
    }
  });
} // initForm()

/**
 * 영화 코드 검색 함수
 */
function searchMovieCd(title) {
  let movieCd = "";
  if (mlist !== null) {
    // 1. 필터링
    let filterMovie = mlist.filter((movie) => movie.movieNm === title);
    // console.log(`title --> ${filterMovie[0].movieNm}`);
    // console.log(`code --> ${filterMovie[0].movieCd}`);

    movieCd = filterMovie[0].movieCd;
  }
  return movieCd;
}

/**
 * 영화 상세 검색 함수
 */
function searchMovieList(title) {
  let movieCd = searchMovieCd(title);
  //   console.log(`code --> ${movieCd}`);

  kobisMovieDetail(movieCd)
    .then((result) => {
      let info = result.movieInfoResult.movieInfo;
      let output = `
            <ul>
                <li>
                    <label>movieCd ::</label>
                    <span>${info.movieCd}</span>
                </li>
                <li>
                    <label>movieNm ::</label>
                    <span>${info.movieNm}</span>
                </li>
                <li>
                    <label>movieNmEn ::</label>
                    <span>${info.movieNmEn}</span>
                </li>
                <li>
                    <label>directors ::</label>
                    `;

      info.directors.forEach((director) => {
        output += `<span>${director.peopleNm} </span>`;
        output += `<span>(${director.peopleNmEn})</span>`;
      });
      output += `</li></ul><ul>`;

      info.actors.forEach((actor) => {
        output += `<li><label>Actors :: </label>`;
        output += `<span>${actor.peopleNm} </span>`;
        output += `<span>(${actor.peopleNmEn})</span></li>`;
      });
      output += `</ul>`;

      document.querySelector("#result").innerHTML = output;

      //   console.log(info.movieNmEn);
    })
    .catch((error) => console.log(error));
} // searchMovieList()
