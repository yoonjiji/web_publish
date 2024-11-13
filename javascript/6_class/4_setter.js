// 클래스에서 정의되는 메소드로, #(private)로 접근제어가 설정된 필드에
// 새로운 값을 입력하기 위한 메소드이다.
// setterXXX(입력되는 값), getterXXX()
class Employee {
  #empno;
  constructor(empno, ename, dept) {
    this.#empno = empno;
    this.ename = ename;
    this.dept = dept;
  }

  setEmpno = (empno) => (this.#empno = empno);
  setEname = (ename) => (this.ename = ename);
  setDept = (dept) => (this.dept = dept);

  getEmpno = () => this.#empno;
  getEname = () => this.ename;
  getDept = () => this.dept;

  info = () => console.log(`${this.ename},${this.dept}`);
  infoAll = () => console.log(`${this.#empno},${this.ename},${this.dept}`);
}

const yoon = new Employee("1234", "윤지혜", "개발팀");

yoon.info();
yoon.infoAll();
yoon.setEmpno("12345");
yoon.setEname("윤떼");
yoon.setDept("백엔드팀");
yoon.infoAll();
console.log(yoon.getEmpno());
console.log(yoon.getEname());
console.log(yoon.getDept());
