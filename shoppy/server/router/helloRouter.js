import express from "express";
import * as controller from "../controller/helloController.js";

const router = express.Router();

/** router 경로 추가 */
router.get("/", controller.getHello);
router.get("/test", controller.getHelloTest);

export default router;
