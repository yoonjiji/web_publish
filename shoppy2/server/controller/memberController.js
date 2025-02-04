import * as repository from "../repository/memberRepository.js";

/**
 *  아이디 중복체크 : getIdCheck
 */
export const getIdCheck = async (req, res) => {
  //   console.log("id--->", req.body);
  const result = await repository.getIdCheck(req.body);
  res.json(result);
  res.end();
};

/**
 *  회원가입 : registerMember
 */
export const registerMember = async (req, res) => {
  //   console.log("req.body ===>", req.body);
  const formData = req.body;
  const result = await repository.registerMember(formData);
  res.json(result);
  res.end();
};
// POST : URL 주소로 경로 호출, 데이터 전달> 패킷의 Body => req.body, 보인필요o, 콘데이터
