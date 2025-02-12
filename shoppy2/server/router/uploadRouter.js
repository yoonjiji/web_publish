import express from "express";
import * as controller from "../controller/uploadController.js";
import * as uploadMultipleController from "../controller/uploadMultipleController.js";

const router = express.Router();

router
  .post("/", controller.fileUpload)
  .post("/multiple", uploadMultipleController.fileUploadMultiple);

export default router;
