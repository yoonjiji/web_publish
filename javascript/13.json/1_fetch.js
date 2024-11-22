// fetch(resourceURL) - 비동기식 처리 방식으로 네트워크를 통해 리소스를 가져옴
// KOBIS 일별 박스오피스
let key = `a7a8d51c1a024910adc4ba72336e7c36`;
let target = `20241121`;
let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${target}`;

// 1. Response 객체
fetch(url)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

/*
// Response 객체가 전송한 정보들 출력 
Response {
  status: 200, // 서버에 갔다가 올 때 정보(200: 성공, 400: error, 405: ger? or post, 500: 서버 연동 error)
  statusText: 'OK',
  headers: Headers {    // 언제 요청을 했는지, 어떤 타입, 넘어오는 데이터?
    date: 'Fri, 22 Nov 2024 01:29:29 GMT',
    'content-type': 'application/json;charset=utf-8',
    'transfer-encoding': 'chunked',
    connection: 'keep-alive', // keep-alive : 요청 올 때가지 기다림
    server: '.'
  },
  body: ReadableStream { locked: false, state: 'readable', supportsBYOB: true },
  bodyUsed: false,
  ok: true,
  redirected: false,
  type: 'basic',
  url: 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=a7a8d51c1a024910adc4ba72336e7c36&targetDt=20241121'
} 
 */

// 2. JSON 데이터 가져오기
let result = await fetch(url); // JSON 객체가 문자열 데이터 타입으로 가져옴
let jsonData = await result.json(); //.json() 함수를 통해  JSON 객체 타입 변환
console.log(`type = ${jsonData.boxOfficeResult.boxofficeType}`);
// type = 일별 박스오피스
console.log(`range = ${jsonData.boxOfficeResult.showRange}`);
// range = 20241121~20241121
console.log(
  `rankList = ${jsonData.boxOfficeResult.dailyBoxOfficeList[0].rank}`
);
// rankList = 1
console.log(
  `rankList = ${jsonData.boxOfficeResult.dailyBoxOfficeList[0].movieNm}`
);
// rankList = 위키드

//  result 객체가 생성이 되지 않아서 json()함수를 호출할 수 없음
// ㄴ 아직 fetch(url)은 생성되지 않았음(비동기식) json()은 동기식이라 바로 진행
// 비동기식으로 순차적으로 실행이 되어져야 실행이 되는 경우
// 하나로 그루핑해서 동시에 실행 => 동기식으로 진행
// 순서를 지켜서 실행
// 그래서 awit 붙여서 fatch가 실행될때까지 기다린다 라는 의미
// 함수로 만들땐 어싱크 붙여야함

/*
  {
  boxOfficeResult: {
    boxofficeType: '일별 박스오피스',
    showRange: '20241121~20241121',
    dailyBoxOfficeList: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object]
    ]
  }
}
 */
