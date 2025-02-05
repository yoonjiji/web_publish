import { db } from "../repository/db.js";

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
