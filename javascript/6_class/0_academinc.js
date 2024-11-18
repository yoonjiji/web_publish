// 학사 관리 프로그램

class Member {
  #name;
  #age;
  #address;
  constructor(name, age, address) {
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

class Student extends Member {
  #sno;
  constructor(sno, name, age, address) {
    super(name, age, address);
    this.#sno = sno;
  }
  get sno() {
    return this.#sno;
  }
}

class Professor extends Member {
  #subject;
  constructor(name, age, address, subject) {
    super(name, age, address);
    this.#subject = subject;
  }
  get subject() {
    return this.#subject;
  }
}

class Parent extends Member {
  #cname;
  constructor(name, age, address, cname) {
    super(name, age, address);
    this.#cname = cname;
  }
  get cname() {
    return this.#cname;
  }
}

class Employee extends Member {
  #department;
  constructor(name, age, address, department) {
    super(name, age, address);
    this.#department = department;
  }
  get department() {
    return this.#department;
  }
}

// signup 버튼 클릭시 호출되는 함수
const signupCheck = () => {
  let type = document.querySelector("input[type=radio]:checked");
  switch (type.value) {
    case "1":
      break;

    default:
      break;
  }
};
