import * as repository from "../repository/memberRepository.js";

export const registerMember = async (req, res) => {
  console.log("req.body===>", req.body);
  const formData = req.body;
  const result = await repository.registerMember(formData);
  res.json(result);
  res.end();
};
