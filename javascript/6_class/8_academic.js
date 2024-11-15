// 학사관리 프로그램을 생성하는 경우, 사용자를 정의하는 클래스를 설계
// 학생, 교수, 학부모, 직원 ===> Member 부모클래스 (name,age, address)

class Member {
  #name;
  #age;
  #address;
  constructor(name, age, address) {
    // 자식 클래스 생성자함수에서 super 호출
    this.#name = name;
    this.#age = age;
    this.#address = address;
  }
  get name() {
    return this.#name;
  }
  get age() {
    return this.#age;
  }
  get address() {
    return this.#address;
  }
}

/* Student class */
class Student extends Member {
  #sno; //학번
  constructor(name, age, address, sno) {
    super(name, age, address);
    this.#sno = sno;
  }
  get sno() {
    return this.#sno;
    // 전체 값을 반환하는 함수 정의
    // 객체명.values()
  }
  // 전체 값을 반환하는 함수 정의
  // values = () => {

  //   return [this.name, this.age, this.address, this.#sno];
  //       // 객체명.values()

  //   }
  get valuse() {
    return [this.name, this.age, this.address, this.#sno];
  }
  // #은 안줘도 됌. 부모꺼라 바로 접속 안되고 this로 접속
  // #sno는 지금 여기에서 준 private라 #붙여짐.
}

/* Professor class */
class Professor extends Member {
  #subject; // 강의 과목
  constructor(name, age, address, subject) {
    super(name, age, address);
    this.#subject = subject;
  }
  get subject() {
    return this.#subject;
  }
  get valuse() {
    return [this.name, this.age, this.address, this.#subject];
  }
}
/* Parent class */
class Parent extends Member {
  #cname; // 자녀이름
  constructor(name, age, address, cname) {
    super(name, age, address);
    this.#cname = cname;
  }
  get cname() {
    return this.#cname;
  }
  get valuse() {
    return [this.name, this.age, this.address, this.#cname];
  }
}
/* Employee class */
class Employee extends Member {
  #department; // 소속 부서
  constructor(name, age, address, department) {
    super(name, age, address);
    this.#department = department;
  }
  get department() {
    return this.#department;
  }
  get valuse() {
    return [this.name, this.age, this.address, this.#department];
  }
}
// signup 버튼 클릭시 호출되는 함수
const signupCheck = () => {
  let type = document.querySelector("input[type=radio]:checked");
  let name, age, address, sno, subject, cname, department;

  let member = null; // type에 따라서 각각의 클래스 생성
  switch (type.value) {
    // 체크된 것 중에 값
    case "1":
      name = document.querySelector("#student #name");
      age = document.querySelector("#student #age");
      address = document.querySelector("#student #address");
      sno = document.querySelector("#student #sno");

      member = new Student(sno.value, name.value, age.value, address.value);

      break;
    case "2":
      name = document.querySelector("#professor #name");
      age = document.querySelector("#professor #age");
      address = document.querySelector("#professor #address");
      subject = document.querySelector("#professor #subject");

      member = new Professor(
        name.value,
        age.value,
        address.value,
        subject.value
      );
      break;
    case "3":
      name = document.querySelector("#parent #name");
      age = document.querySelector("#parent #age");
      address = document.querySelector("#parent #address");
      cname = document.querySelector("#parent #cname");

      member = new Parent(name.value, age.value, address.value, cname.value);
      break;
    case "4":
      name = document.querySelector("#employee #name");
      age = document.querySelector("#employee #age");
      address = document.querySelector("#employee #address");
      department = document.querySelector("#employee #department");

      member = new Employee(
        name.value,
        age.value,
        address.value,
        department.value
      );
      break;
    default:
  }

  console.log(member);

  // 자바스크립트로 생성되는 HTML을 Dynamic HTML(DHTML)
  // let list = Object.keys(member); ['name','age', 'address', 'sno']
  // --> class의 필드값이 private인 경우에만 데이터를 가져올 수 없음!!!
  // member 가지고 있는 key들을 list에 배열로 넣어줍니다.

  let list = "";
  member.valuse.forEach((item) => (list += `<li>${item}</li>`));
  // 엔진이 자동으로 배열의 아이템을 꺼내줌

  let output = ``;
  output += `<ul>${list}</ul>`;
  // 배열의 값이 안들어감. => private로 만들어서 외부에서 접근이 안됌
  // private의 값은 무조건 내부에서 줘야함
  document.querySelector("#result").innerHTML = output;
}; //end of signupCheck

// display : 라디오버튼 선택시 화면 전환시키는 함수
const display = (type) => {
  document.querySelector("#result").innerHTML = "";
  // ul 태그를 빈값으로 초기화
  // 삭제를하면 담을 공간이 없기 때문에

  document.querySelector("#student").style.display = "none";
  document.querySelector("#professor").style.display = "none";
  document.querySelector("#parent").style.display = "none";
  document.querySelector("#employee").style.display = "none";

  // type=1 학생폼
  if (type === "1") {
    document.querySelector("#student").style.display = "block";
  } else if (type === "2") {
    document.querySelector("#professor").style.display = "block";
  } else if (type === "3") {
    document.querySelector("#parent").style.display = "block";
  } else if (type === "4") {
    document.querySelector("#employee").style.display = "block";
  } // if
}; // end of display

// const hong = new Student("1234", "홍길동", 20, "서울시 강남구"); // 학생
// const smith = new Professor("smith", 40, "서울시 서초구", "JavaScript"); // 교수
// const son = new Parent("son", 26, "서울시 도봉구", "손윤"); // 학부모
// const yoon = new Employee("yoon", 27, "서울시 강동구", "개발팀"); // 교직원

// console.log(`*** 학생 정보 ***`);
// console.log(`${hong.sno}\n${hong.name}\n${hong.age}\n${hong.address}\n`);

// console.log(`*** 교수 정보 ***`);
// console.log(
//   `${smith.name}\n${smith.age}\n${smith.address}\n${smith.subject}\n`
// );

// console.log(`*** 학부모 정보 ***`);
// console.log(`${son.name}\n${son.age}\n${son.address}\n${son.cname}\n`);

// console.log(`*** 교직원 정보 ***`);
// console.log(`${yoon.name}\n${yoon.age}\n${yoon.address}\n${yoon.department}\n`);
