import express from "express";
import * as controller from "../controller/memberController.js";

const router = express.Router();

router.post("/signup", controller.registerMember);
router.post("/idcheck", controller.getIdCheck);
router.post("/login", controller.checkLogin);

export default router;
