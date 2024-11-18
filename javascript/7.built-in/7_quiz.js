// 1. 'Hello~ JavaScript' 문자열을 한 문자씩 출력해주세요
let str = "Hello~ JavaScript!!!";
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}

console.clear();

// 2. '독서, 수영, 영화, 게임, 사이클' 한 줄씩 출력
let hobby = "독서, 수영, 영화, 게임, 사이클";
hobby = hobby.split(",");
console.log(hobby);
for (let i = 0; i < hobby.length; i++) {
  console.log(hobby[i].trim());
}
hobby.forEach((hobby) => console.log(hobby.trim()));
