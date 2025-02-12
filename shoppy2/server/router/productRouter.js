import express from "express";
import * as controller from "../controller/productController.js";

const router = express.Router();

router
  .post("/new", controller.registerProduct)
  .get("/all", controller.getList)
  .post("/detail", controller.getProduct)
  .post("/cartItems", controller.getCartItems);

export default router;
