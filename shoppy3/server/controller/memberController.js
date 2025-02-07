import * as repository from "../repository/memberRepository.js";
import jwt from "jsonwebtoken";

export const registerMember = async (req, res) => {
  // console.log("req.body--->", req.body);
  const formData = req.body;
  const result = await repository.registerMember(formData);
  res.json(result);
  res.end();
};

export const getIdCheck = async () => {};

export const checkLogin = async (req, res) => {
  console.log(req.body);
  let result = await repository.checkLogin(req.body);

  if (result.result_rows === 1) {
    const token = jwt.sign({ userId: req.body.id }, "5KldLlOVja");
    result = { ...result, token: token };
  }
  res.json(result);
  res.end();
};
