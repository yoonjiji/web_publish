import { db } from "./db.js";

/**
 * 상품 등록
 */
export const registerProduct = async (formData) => {
  const sql = `
  insert into shoppy_product(pname, price, description, upload_file,
                             source_file, pdate
                             )
    values(?, ?, ?, ?, ?, now())
  `;

  const values = [
    formData.productName,
    formData.price || 0, // 값이 없으면 빈 문자열
    formData.description || "",
    formData.uploadFile || null,
    formData.sourceFile || null,
  ];

  const [result] = await db.execute(sql, values);
  return { result_rows: result.affectedRows };
};

/**
 * 전체 상품리스트 조회
 */
export const getList = async () => {
  const sql = `
                select pid, 
                       pname as name,
                       price,
                       description as info,
                       concat('http://localhost:9000/', upload_file->> '$[0]') as image,
                       source_file,
                       pdate
                from shoppy_product
  `;
  const [result] = await db.execute(sql);
  return result; // [ {}, {}, {} ]
};

/**
 * 상품 상세 정보 조회
 */
export const getProduct = async (pid) => {
  console.log(`pid-->`, pid);
  const sql = `
                select pid, 
                      pname as name,
                      price,
                      description as info,
                      upload_file,
                      source_file,
                      pdate,
                      concat('http://localhost:9000/', upload_file->> '$[0]') as image,
                      json_array(
                      concat('http://localhost:9000/', upload_file->> '$[0]'),
                      concat('http://localhost:9000/', upload_file->> '$[1]'),
                      concat('http://localhost:9000/', upload_file->> '$[2]')
                      ) as imgList,
                      json_arrayagg(
						          concat('http://localhost:9000/', jt.filename)	  
                      ) as detailImgList  
                from shoppy_product, 
					          json_table( shoppy_product.upload_file, '$[*]' columns( filename varchar(100) path '$')) as jt
				        where pid = ?
                group by pid;
              `;
  const [result] = await db.execute(sql, [pid]);
  console.log("result--->", result[0]);
  // result = [ [{pid:4 ,~~}], [컬럼명 field(필드의 정보)] ]
  // mySQL에서 데이터를 가져오면 이차원배열로 나온다. [ [실행결과], [컬럼의 정보] ]가 나온다.

  return result[0];
};

/**
 *  장바구니 상품 정보 조회
 */
export const getCartItems = async ({ pids }) => {
  const strArray = [];
  pids.forEach((pid) => strArray.push("?"));

  const sql = `
    select pid,
      pname,
      price,
      description,
      concat('http://localhost:9000/', upload_file ->> '$[0]') as image
    from shoppy_product
    where pid in (${strArray.join(",")});  
  `;
  console.log(`sql-->`, sql);

  const [result] = await db.execute(sql, pids);
  return result;
};
