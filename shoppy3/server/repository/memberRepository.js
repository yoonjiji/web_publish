import { db } from "../repository/db.js";

export const checkLogin = async ({ id, pwd }) => {
  const sql = `
              select count(*) as result_rows from shoppy_member
                where id =? and pwd = ?;
              `;
  const [result] = await db.execute(sql, [id, pwd]);
  return result[0];
};

export const registerMember = async (formData) => {
  const sql = `
          insert into shoppy_member(id, pwd, name, phone, emailname, emaildomain,
                                        zipcode, address, mdate)
                            values(?, ?, ?, ?, ?, ?, ?, ?, now())
  `;

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

  const [result, fields] = await db.execute(sql, values);
  console.log(result);
  console.log(fields);

  return { result_rows: result.affectedRows };
};
