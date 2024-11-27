/**
 * KOBIS 박스오피스 정보 호출
 */
export async function kobisBoxOffice(type, searchDt) {
  const key = `a7a8d51c1a024910adc4ba72336e7c36`;
  const url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/search${type}BoxOfficeList.json?key=${key}&targetDt=${searchDt}`;

  let kobis = await fetch(url);
  let daily = await kobis.json();

  return daily;
}
// 준비되지도 않았는데 await하면 오류남 함수 앞에 async 붙여줌

/**
 * KOBIS 영화리스트 호출 함수
 */
export async function kobisMovieList() {
  const key = `a7a8d51c1a024910adc4ba72336e7c36`;
  const curPage = 1;
  const itemPerPage = 100;
  const url = `http://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=${key}&curPage=${curPage}&itemPerPage=${itemPerPage}`;

  const movieList = await fetch(url);
  const jsonData = await movieList.json();

  return jsonData;
}

/**
 * KOBIS 영화 상세 정보 호출 함수
 */
export async function kobisMovieDetail(movieCd) {
  const key = `a7a8d51c1a024910adc4ba72336e7c36`;
  const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=${key}&movieCd=${movieCd}`;

  const movie = await fetch(url);
  const jsonData = await movie.json();

  return jsonData;
}

export async function searchMoviePoster(movieNm, openDt) {
  const key = "59H5F0U0OFQB3R2261VM";
  let url = `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/`;
  url += `search_json2.jsp?collection=kmdb_new2&detail=Y`;
  url += `&title=${movieNm}&releaseDts=${openDt}`;
  url += `&ServiceKey=${key}`;

  const result = await fetch(url);
  const jsonData = await result.json();

  return jsonData.Data[0].Result[0].posters.split("|")[0];
}
