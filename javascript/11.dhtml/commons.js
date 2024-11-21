/**
 * 공통 모듈 저장
 */

// sum()
export default function sum(number1, number2) {
  return parseInt(number1) + parseInt(number2);
}
// default는 공통 모듈에 딱 1개만 존재
// 여러개 함수 중 많이 호출되는 함수
// sub()
export function sub(number1, number2) {
  return parseInt(number1) - parseInt(number2);
}
// mul()
export function mul(number1, number2) {
  return parseInt(number1) * parseInt(number2);
}
// div()
export function div(number1, number2) {
  return parseInt(number1) / parseInt(number2);
}
