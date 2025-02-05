import * as repository from "../repository/memberRepository.js";
import jwt from "jsonwebtoken";

/**
 *  로그인 : checkLogin
 */
export const checkLogin = async (req, res) => {
  console.log(req.body); // 1 로그로 찍어주기(잘 넘어왔는지)
  let result = await repository.checkLogin(req.body); // db에 데이터 보내기(비동기) // {result_rows : 1}

  // jwt 토큰 생성 및 result 객체에 추가 전송 : {result_rows: 1, token: ~~~~~}
  // keyjen 사이트 : https://randomkeygen.com/
  if (result.result_rows === 1) {
    const token = jwt.sign({ userId: req.body.id }, "bs8Vu8HZEK");
    result = { ...result, token: token };
  }
  res.json(result);
  res.end();
};

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
