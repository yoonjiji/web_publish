// 빌트인 클래스인 Promise를 통해 비동기식 처리
let promise1 = new Promise((resolve, reject) => {
  // 실행한 비동기식 로직
  setTimeout(() => {
    resolve("success");
    // reject("fail");
  }, 3000);
});
// 3초 후에 큐에 들어가 있다가 이벤트루프로 돌아오는 시점에서
// 성공했다는 신호를 받으면 than이 인자로 받고 call stack에 결과를 알려줌

promise1
  .then((result) => {
    console.log(result);
  }) // 시간 경과 후 callback queue에 들어가는 실행함수 정의
  .catch((error) => {
    console.log(error);
  });
