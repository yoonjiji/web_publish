import {
  gugudan,
  selectGugudan,
  singleGugudan,
  fruitsTower,
} from "./fmodule_arrow.js";

// 구구단 호출
singleGugudan(3); // 3단 출력
selectGugudan(7, 9); // 7~9단 출력
gugudan(); // 전체(1~9) 출력

// 과일타워 호출
fruitsTower("🍎", 5);
fruitsTower("🍋", 10);
