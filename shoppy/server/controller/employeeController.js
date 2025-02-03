import * as repository from "../repository/employeeRepository.js";

// mysql을 promise 동기로 불러왔음 ,  하지만 db는 비동기라서 awit, async해야함
export const getEmployeeAll = async (req, res) => {
  const result = await repository.getEmployeeAll();
  res.json(result);
  res.end();
};
