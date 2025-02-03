import { db } from "./db.js";

export const getEmployeeAll = async () => {
  // 1. sql 쿼리 작성
  const sql = `
                select row_number() over(order by emp_id) as no, 
                    emp_id as id, 
                    emp_name as name,
                    eng_name as ename,
                    gender,
                    left(hire_date, 10) as hiredate,
                    salary,
                    concat(format(salary, 0), '원') as osalary
                from employee
              `;

  //   const id = ["s0002"]; // emp_id = ? <-- ? 값은 변할 수 있는 값
  // 2. db.js의 connection을 이용하여 실행 한 후 결과 가져오기
  // mysql을 promise 동기로 불러왔음 ,  하지만 db는 비동기라서 awit, async해야함
  const [employees, fields] = await db
    .execute(sql) // excute, query 두가지 사용
    .then((result) => result) // [ rows: [], fields :[] ]
    .catch((error) => console.log(error));

  // 3. 호출한 곳에 결과 리턴
  return employees;
};
