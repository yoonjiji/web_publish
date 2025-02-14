import { db } from "./db.js";

export const addCart = async ({ id, cartList }) => {
  let result_rows = 0;
  const result = await Promise.all(
    // [1,1,1,1,1,1]
    cartList.map(async (item) => {
      const values = [item.size, item.qty, id, item.pid];
      console.log("values-->", values);
      const sql = `
            insert into shoppy_cart(size, qty, id, pid, cdate)
                    values(?, ?, ?, ?, now())
        `;
      const [result] = await db.execute(sql, values); // Promise형태로 실행
      return result.affectedRows;
    })
  );
  console.log("result-->", result);
  result_rows = result.reduce((acc, cur) => acc + cur, 0);
  console.log({ result_rows: result_rows });

  return { result_rows: result_rows };
};
