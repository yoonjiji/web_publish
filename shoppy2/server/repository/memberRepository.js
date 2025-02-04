import { db } from "./db.js";

/**
 *  아이디 중복 체크 - select
 */
export const getIdCheck = async ({ id }) => {
  // idData = {id: test}
  const sql = `
         select count(id) as result from shoppy_member where id = ?;
              `;
  // 체크할 때 count(id) 카운트함수로 결과를 0,1로 받는다(중복처리할 때)
  const [result, fields] = await db.execute(sql, [id]); // 2차원 배열로 반환받아서 구조분해할당
  //   console.log("result--->", result);

  return result[0];
};

/**
 *  회원가입 - insert
 */
export const registerMember = async (formData) => {
  // 1. SQL 생성
  const sql = `
        insert into shoppy_member(id, pwd, name, phone, emailname, emaildomain,
                                        zipcode, address, mdate)
                            values(?, ?, ?, ?, ?, ?, ?, ?, now())
              `;
  // values(?) : 달라지는 값, 개수 만큼

  const values = [
    formData.id,
    formData.pwd,
    formData.name,
    formData.phone,
    formData.emailname,
    formData.emaildomain,
    null,
    null,
  ];
  // 순서 꼭 지켜주기!! sql values와 매핑

  // 2. db객체를 이용하여 SQL 실행 후 결과 가져오기
  const [result, fields] = await db.execute(sql, values);
  //   console.log(result);
  //   console.log(fields);

  // 3. 결과값 리턴
  return { result_rows: result.affectedRows };
  // object 리터럴 타입으로 결과값 반환
  // affectedRows: 1, << 한 행이 insert 되었슴(터미널에서 확인)
};
