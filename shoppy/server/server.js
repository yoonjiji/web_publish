import express from "express";
import mainRouter from "./router/mainRouter.js";
import helloRouter from "./router/helloRouter.js";
import employeeRouter from "./router/employeeRouter.js";
import cors from "cors";

// 서버 생성 및 포트 정의
const server = express();
const port = 9000;

/** 서버의 공통적인 작업 */
server.use(express.json()); // 서버에서 넘어온 것들 json으로 불러오기
server.use(express.urlencoded()); // utf-8 한글 인코딩
server.use(cors());

/** 서버의 요청처리를 위한 미들웨어 정의 */
server.use("/", mainRouter);
server.use("/hello", helloRouter);
server.use("/employee", employeeRouter);

/** / => Hello~ NodeJS! */
// server.use("/", (req, res) => {
//   res.send("<h1>Hello~ NodeJS!</h1>");
//   res.send("<h1>Hello2~ NodeJS!</h1>"); send() 함수는 한 번만 전송 가능
//   res.end()
// });

/** /hello => Welcome to Hello! */
// server.use("/hello", (req, res) => {
//   res.send("<h3> Welcome to Hello!</h3>");
//   res.end();
// });

server.listen(port, () => {
  console.log(`server start ===> ${port}`);
});
