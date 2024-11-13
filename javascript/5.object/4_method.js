// 객체에서 기능을 실행하는 메소드
const apple = {
  name: "apple",
  color: "red",
  emoji: "🍎",
  display: function () {
    console.log("🍎");
  },
  getName: function () {
    console.log(this.name); // 이 객체 안에 name을 찾겠다.
    // console.log(name); X
    // name은 힙에 저장되어 있는 객체기 때문에 그냥 name 하면 콜스택에서 찾음
  },
  getColor: function () {
    console.log(this.color);
  },
  getEmoji: function () {
    console.log(this.emoji);
  },
};
console.log(apple);
console.log(apple.name);
apple.getName();
console.log(apple.color);
apple.display();
// display()
apple.getColor();
apple.getEmoji();
