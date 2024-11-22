/**
 * KOBIS 박스오피스 정보 호출
 */
export async function kobisBoxOffice(type, searchDt) {
  const key = `a7a8d51c1a024910adc4ba72336e7c36`;
  let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/search${type}BoxOfficeList.json?key=${key}&targetDt=${searchDt}`;
  console.log(url);

  let kobis = await fetch(url);
  let daily = await kobis.json();

  return daily;
}
// 준비되지도 않았는데 await하면 오류남 함수 앞에 async 붙여줌
