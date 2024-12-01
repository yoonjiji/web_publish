window.addEventListener("DOMContentLoaded", (event) => {
  createNoticeList();
});

function createNoticeList() {
  fetch("../data/notice.json")
    .then((result) => result.json()) // fetch 실행 결과 => result(문자열) => json()
    .then((jsonData) => {
      //   console.log(jsonData);
      showNoticeList(jsonData.list);
    })
    .catch((error) => console.log(error));
} //createNoticeList()

/**
 *  필터링
 */
function onChangeNoiceList(code) {
  alert(code);
  // 1. list 배열에서 code를 filtering 새로운 배열 반환
  // 2. 테이블 출력코드 생성
  // 3. 화면 출력
  fetch("../data/notice.json")
    .then((result) => result.json())
    .then((jsonData) => {
      if (code === "total") {
        showNoticeList(jsonData.list);
      } else {
        let filterList = jsonData.list.filter((object) => object.code === code); // [{},{}]
        showNoticeList(filterList);
      }
    })
    .catch((error) => console.log(error));
}

/**
 *  화면 출력 함수
 */
function showNoticeList(list) {
  let output = `
  <thead>
    <tr>
      <th scope="col">번호</th>
      <th scope="col">구분</th>
      <th scope="col">제목</th>
      <th scope="col">등록일</th>
      <th scope="col">조회수</th>
    </tr>
  </thead>
  <tbody>
`;
  list.forEach((notice, i) => {
    output += `
  <tr>
      <td>${
        i + 1
      }</td>                                                                                                
      <td>${
        notice.type
      }</td>                                                                                                
      <td>${
        notice.title
      }</td>                                                                                                
      <td>${
        notice.date
      }</td>                                                                                                
      <td>${
        notice.hits
      }</td>                                                                                                
  </tr>
`;
  });

  output += `
  </tbody>
  <tfoot>
    <tr>
      <td colspan="5"><span>1</span> 2 3 4 5 <span>>></span></th>
    </tr>
  </tfoot>
`;
  document.querySelector("table").innerHTML = output;
}
