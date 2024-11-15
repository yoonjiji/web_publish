// String Class의 메소드 정리
let name = "홍길동";
let sname = new String("홍길동");
console.log(typeof name, typeof sname);
console.log(name === sname.valueOf());

// charAt() - 문자 하나하나의 배열 만들어 값들을 인덱스로 보여준다.
let text = "Hello JavaScript!!";
console.log(text.charAt(0));
console.log(text.charAt(3));
console.log(text[0]); // 원래 텍스트가 저장될 때는 배열 형태로 저장이된다.

// concat() - 매개변수로 전달된 모든 문자열을 호출 문자열에 붙인 새로운 문자열을 반환
console.log("Welcome~ ".concat(text));

// text의 인덱스 넘버 알려줌
// 같은 글자 중복일 경우 앞에 것 출력
console.log(text.indexOf("a"));

console.log(text.toLocaleUpperCase()); // 전부 대문자
console.log(text.toLocaleLowerCase()); // 전부 소문자

// 입력폼 -->   toLocaleLowerCase()  --> DB 저장시 소문자 저장

// 문자열 추출
console.log(text.substring(0, 2)); // end 자릿수 추출
console.log(text.substring(4, 8)); // end 자릿수 추출
console.log(text.slice(-2)); // start만 지정하면 끝까지 추출, 음수면 뒷자리부터 추출

// 문자열 공백 삭제
text = "            JavaScript!         ";
console.log(text.trim());

// 문자열 사이의 띄어쓰기는 삭제가 안됌
text = "            Java    Script!         ";
console.log(text.trim());

// 구분자를 이용하여 문자열 추출
// Json, array 같은 애들 데이터 추출할 때 좋음
const fruit = "🍋,🍏,🍊,🍎";
const fruitArray = fruit.split(".");
console.log(fruit);
console.log(fruitArray);
