// 임의의 과일을 선택 받아...
// 좋아하는 과일: apple, orange, lemon
// 이외 과일 선택시 '좋아하는 과일 없음'

let fruit = undefined;
let choice = undefined;
fruit = "lemon";

if (fruit === "apple") choice = "🍎";
else if (fruit === "orange") choice = "🍊";
else if (fruit === "lemon") choice = "🍋";
else console.log(`좋아하는 ${fruit}이 없음`);
console.log(`선택 결과 : ${choice}`);
