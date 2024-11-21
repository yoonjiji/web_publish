// 비동기식 처리 방식에서 callback 함수 호출
// runIndelay(callback, seconds);
function runIndelay(callback, seconds) {
  setTimeout(callback, seconds);
}

runIndelay(() => {
  console.log(`타이머 3초 경과!!`);
}, 3000);
runIndelay(() => {
  console.log(`타이머 1초 경과!!`);
}, 1000);
console.log(`-- 프로그램 종료 --`);
/**
    -- 프로그램 종료 --
    타이머 1초 경과!!
    타이머 3초 경과!!
 *  
*/
