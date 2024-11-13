// class의 fieid는 생성자 함수에서 정의하는 값
// field에 접근제어(Access control)를 정의 : private(#), public
class Fruit {
  #name; // 인스턴스.name 형식으로 외부에서 호출하는 경우 데이터 숨김
  constructor(name, color, emoji) {
    // fields
    this.#name = name;
    this.color = color;
    this.emoji = emoji;
  }
  display = () => console.log(`${this.name},${this.color},${this.emoji}`);
  // 내부접근
}

const apple = new Fruit("apple", "green", "🍏");
apple.display();
console.log(apple.name);
console.log(apple.color);
console.log(apple.emoji);
// 외부접근

console.clear();

// 사번, 사원명, 부서명
// info() 메소드 호출시 모든 정보 출력
class Employee {
  #enumber;
  constructor(enumber, ename, buseo) {
    this.#enumber = enumber;
    this.ename = ename;
    this.buseo = buseo;
  }
  info = () => {
    console.log(`${this.enumber},${this.ename},${this.buseo}`);
  };
  infoAll = () => {
    console.log(`${this.#enumber},${this.ename},${this.buseo}`);
  };
}
const me = new Employee("232", "지헤", "개발팀");
me.info();
me.infoAll();
