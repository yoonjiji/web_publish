// 객체 생성자 함수 정의와 사용법 익히기
function Fruite(name, color, emoji) {
  // field
  this.name = name;
  this.color = color;
  this.emoji = emoji;

  // method
  this.display = () => console.log(this.emoji);
}

const apple = new Fruite("apple", "red", "🍎");
const orange = new Fruite("orange", "orange", "🍊");
const remon = new Fruite("remon", "yellow", "🍋");
console.log(apple);
console.log(orange);
console.log(remon);

// // apple : property - name, color : method - display()
// const apple = {
//   name: "apple",
//   color: "red",
//   display: function () {
//     console.log("🍎");
//   },
// };

// // orange : property - name, color : method - display()
// const orange = {
//   name: "orange",
//   color: "orange",
//   display: function () {
//     console.log("🍊");
//   },
// };

// // remon : property - name, color : method - display()
// const remon = {
//   name: "remon",
//   color: "yellow",
//   display: function () {
//     console.log("🍋");
//   },
// };
