// readme.txt 파일을 읽어서 내용을 화면에 출력하는 실습
const fs = require("fs");
const fsp = require("fs").promises; // 대용량 파일이면 promises

// 형식: fs.readFile('파일의 경로', () => {}));
fs.readFile("./readme.txt", (err, data) => {
  if (err) {
    console.log("파일 읽기 실패");
  } else {
    console.log(data); // data가 기계어로 출력
    console.log(data.toString());
  }
});

// 비동기식 처리(프로미스 타입으로 리턴)
fsp
  .readFile("./readme.txt")
  .then((data) => {
    console.log("fst-->", data.toString());
  })
  .catch((err) => {
    console.log(err);
  });
