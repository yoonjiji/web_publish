// 객체 생성자 함수 = 객체 모델링(반려동물, 동물병원..)
// dog, cat, rabbit... 의 객체 생성자 함수를 정의하고, 호출해 보세요.
// 속성(Attribute, property) : name, color
// 메소드(method) : display, eat('🐶'), sleep

function Animal(name, color) {
  this.name = name;
  this.color = color;

  this.display = () => console.log(this.name);
  this.eat = () => console.log(`${this.name} 먹는다`);
  this.sleep = () => console.log(`${this.name} 잔다`);
}

const dog = new Animal("🐶", "brown");
const cat = new Animal("😺", "orange");
const rabbit = new Animal("🐰", "whites");

dog.display();
dog.eat();
dog.sleep();

cat.display();
cat.eat();
cat.sleep();

rabbit.display();
rabbit.eat();
rabbit.sleep();
