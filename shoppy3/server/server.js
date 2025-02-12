import express from "express";
import cors from "cors";
import memberRouter from "./router/memberRouter.js";
import uploadRouter from "./router/uploadRouter.js";
import path from "path";

const server = express();
const port = 9000;

/** 서버의 공통적인 작업 */
server.use(express.json());
server.use(express.urlencoded());
server.use(cors());
server.use("/upload_files", express.static(path.join("upload_files")));

/** 서버의 요청처리를 위한 미들웨어 정의 */
server.use("/member", memberRouter);
server.use("/uploads", uploadRouter);

server.listen(port, () => {
  console.log(`server start ===> ${port}`);
});
