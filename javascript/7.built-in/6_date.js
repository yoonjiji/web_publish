// 날짜 형식 - Date 클래스
console.log(Date.now()); // 1731654842051
console.log(new Date()); // 2024-11-15T07:14:02.056Z

let date = new Date(); // 현재 사용하는 시스템의 날짜를 객체 생성
console.log(date.getFullYear()); // 2024
console.log(date.getMonth() + 1); // 11
console.log(date.getDate()); // 15

let year = date.getFullYear().toString();
let month = (date.getMonth() + 1).toString();
let day = date.getDate().toString();
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

// '2024년 11월 15일' => String.concat()
let display = year.concat("년 ", month, "월 ", day, "일");
console.log(display);

// '2024년 11월 15일' => 템플릿 리터럴
display = `${year}년 ${month}월 ${day}일 ${hour}시 ${minutes}분 ${seconds}초`;
console.log(display);

// 날짜 출력 타입 지정
// .toLocaleString('한국식? 유럽식?')
console.log(date.toLocaleString("ko-KR")); // 2024. 11. 15. 오후 4:11:39
console.log(date.toLocaleString("en-US")); // 11/15/2024, 4:12:47 PM

console.log(date.toLocaleDateString("ko-KR")); // 2024. 11. 15.
console.log(date.toLocaleDateString("en-US")); // 11/15/2024
