// 학생(Student) 클래스
// 속성 : #이름, #나이, #주소, 별칭
// 메소드 : setter/getter 메소드 정의

// class Student {
//   #name;
//   #age;
//   #address;
//   constructor(name, age, address, nmame) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//     this.nmame = nmame;
//   }
//   setName = (name) => (this.#name = name);
//   setAge = (age) => (this.#age = age);
//   setAddress = (address) => (this.#address = address);
//   setNname = (nmame) => (this.nmame = nmame);

//   getName = () => this.#name;
//   getAge = () => this.#age;
//   getAddress = () => this.#address;
// }

// const sonSeRim = new Student("손세림", 26, "도봉구", "애기똥구멍");

// console.log(sonSeRim);

class Student {
  #name;
  #age;
  #address;
  constructor(name, age, address, nickname) {
    this.#name = name;
    this.#age = age;
    this.#address = address;
    this.nickname = nickname;
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
  get nickName() {
    return this.nickname;
  }
  // 에로우 펑션은 안먹힘

  // set/get 함수 형식은 private 정의된 필드 값에 한해서 생성한다.
  set name(name) {
    this.#name = name;
  }
  set age(age) {
    this.#age = age;
  }
  set address(address) {
    this.#address = address;
  }
  set nickName(nickname) {
    this.nickame = nickname;
  }
}
const yoonJiHye = new Student("윤지혜", 27, "강동구", "떼");

// console.log(
//   `${yoonJiHye.getName()},\n${yoonJiHye.setAge()},\n${yoonJiHye.setAddress()},\n${yoonJiHye.setNickname()}`
// );
console.log(
  `${yoonJiHye.name},${yoonJiHye.age},${yoonJiHye.address},${yoonJiHye.nickName}`
);
yoonJiHye.name = "손세림";
console.log(`${yoonJiHye.name}`);
