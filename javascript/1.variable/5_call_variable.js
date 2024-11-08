// call by value
let a = 100;
let b = 200;
let c = a;

console.log(a);
console.log(b);
console.log(c);
console.log(a === c); // 데이터 타입, 값 모두 체크 true

// call by reference
let aa = [1, 2, 3];
let bb = "손세림";
let cc = aa;

console.log(aa);
console.log(bb);
console.log(cc);
console.log(aa === cc);
console.log(typeof aa);
console.log(typeof cc);
