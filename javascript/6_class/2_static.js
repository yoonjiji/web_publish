// static 메소드 : 객체를 생성하지 않고, 클래스명.메소드 형식으로 호출이 가능함
class Fruit {
  static MAX_SIZE = 100;
  constructor(name, color, emoji) {
    this.name = name;
    this.color = color;
    this.emoji = emoji;
  }
  static getMaxSize = () => this.MAX_SIZE;
  static makeFruit = (a, b, c) => {
    return new Fruit(a, b, c);
  };
  display = () => console.log(`${this.name}, ${this.color}, ${this.emoji}`);
}

let apple = new Fruit("apple", "red", "🍎");
apple.display(); // 객체가 생성되지 않으면 호출 X
let orange = Fruit.makeFruit("orange", "coral", "🍊"); // 생성자 밑으로 메소드가 생성
console.log(orange);
orange.display();
console.log(Fruit.getMaxSize());
