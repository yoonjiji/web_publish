// API promise 리턴값 확인 후 호출
const url =
  "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=a7a8d51c1a024910adc4ba72336e7c36&targetDt=20120101";
fetch(url) // resolve(result), reject(error)
  .then((result) => {
    console.log(`result ==> ${result}`);
  })
  // result ==> [object Response]
  .catch((error) => {
    console.log(`error ==> ${error}`);
  });
// error ==> TypeError: fetch failed
