// 클래스간의 상속관계
// E 동물원에서 동물관리 프로그램을 생성
// 흰색 사자, 회색 사자, 흰색 호랑이, 회색 호랑이, 푸들, 말티즈
// 객체 모델링 ==> Lion, Tiger, Dog 클래스
// Lion 클래스
// 속성 : name, color, emoji, teste(식성)
// 메소드 : display(이모지), sleep, eat

// Lion, Tiger, Dog 클래스를 모델링하여 부모 클래스 생성 ===> Animal
// Animal 클래스 속성 : name, color, emoji, teste
// Animal 클래스 메소드 : display, sleep, ate
class Animal {
  constructor(name, color, emoji, teste) {
    this.name = name;
    this.color = color;
    this.emoji = emoji;
    this.teste = teste;
  }
  display = () => console.log(`${this.name} : ${this.emoji}`);
  sleep = () => console.log(`${this.name} 코 자네`);
  eat = () => console.log(`${this.name} 잘 묵네`);
}

class Lion extends Animal {
  // Lion 클래스는 Animal 클래스의 자식이다!
  constructor(name, color, emoji, teste) {
    super(name, color, emoji, teste);
    // 부모한테 중복되는 값을 넘기겠다. super는 항상 맨위
  }
}

// Tiger 클래스
// 속성 : name, color, emoji, teste(식성)
// 메소드 : display(이모지), sleep, eat
class Tiger extends Animal {
  constructor(name, color, emoji, teste, age) {
    super(name, color, emoji, teste);
    this.age = age;
  }
  getAge = () => console.log(this.age);
}

// Dog 클래스
// 속성 : name, color, emoji, teste(식성)
// 메소드 : display(이모지), sleep, eat
// 도식화 : 클래스 다이어그램
class Dog extends Animal {
  constructor(name, color, emoji, teste, type) {
    super(name, color, emoji, teste);
    this.type = type;
  }
  getType = () => console.log(this.type);
}

/*
 *  동물원에서 동물을 관리하는 클래스
 *  속성: #type, 동물의 객체(Lion, Tiger, Dog)
 *  메소드: setter/getter
 */
class EverZoo {
  // 따로 관리해야할 애들(객체 생성안함)
  static LION = 1;
  static TIGER = 2;
  static DOG = 3;

  #type;
  #animal;
  constructor(type, animal) {
    this.#type = type;
    this.#animal = animal;
  }
  get type() {
    return this.#type;
  }
  get animal() {
    return this.#animal;
  }

  set type(type) {
    this.#type = type;
  }
  set animal(animal) {
    this.#animal = animal;
  }
}

// 클래스 생성 및 호출
const tom = new Lion("Tom", "white", "🦁", "meat");
const smith = new Tiger("smith", "gray", "🐯", "meat", 1200);
const judy = new Dog("judy", "white", "🐶", "both", "푸들");

tom.display();
tom.sleep();
tom.eat();

smith.display();
smith.sleep();
smith.eat();
smith.getAge();

judy.display();
judy.sleep();
judy.eat();
judy.getType();

const everZoo = new EverZoo(EverZoo.LION, tom);

console.log(everZoo.type, everZoo.animal);
