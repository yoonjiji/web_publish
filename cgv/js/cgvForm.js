/************************************
 *
 *    패스워드/패스워드 확인 체크
 *
 ************************************/
function passwordCheck() {
  const pwd = document.querySelector("#pwd");
  const cpwd = document.querySelector("#cpwd");
  const idPwd = document.querySelector("#error-msg-pwd");
  const idCpwd = document.querySelector("#error-msg-cpwd");

  // 유효성체크
  if (pwd.value === "") {
    idPwd.style.color = "red";
    pwd.focus();
    // 비교하는 값이 있는지 없는지 체크하는 게 중요
  } else if (cpwd.value === "") {
    idCpwd.style.color = "red";
    pwd.focus();
  } else {
    // console.log("패스워드 비교 로직");
    if (pwd.value === cpwd.value) {
      alert("패스워드가 동일합니다.");
    } else {
      alert("패스워드가 일치하지 않습니다. 다시 입력해주세요");
      pwd.value = "";
      cpwd.value = "";
      // 내용을 지우고 나오는 메세지 색상 변경
      idPwd.style.color = "red";
      idCpwd.style.color = "red";
      pwd.focus();
    }
  }
}

/************************************
 *
 *    아이디 중복 체크
 *
 ************************************/
function idCheck(event) {
  // 저의 정보를 드립니다
  const did = "test";
  const id = document.querySelector("#id");
  const idMsg = document.querySelector("#error-msg-id");

  if (id.value === "") {
    idMsg.style.color = "red";
    id.focus();
  } else {
    // 중복체크
    if (did === id.value.trim()) {
      alert("이미 사용중인 아이디입니다. 다시 입력해주세요.");
      id.focus();
    } else {
      alert("사용 가능한 아이디입니다.");
      document.querySelector("#idCheckResult").value = "success";
      console.log(document.querySelector("#idCheckResult").value);
    }
  }
}
/************************************
 *
 *    회원가입 유효성 체크
 *
 ************************************/
function JoinFormCheck() {
  // 인자를 안 넣는 이유는 html에서 form 전체에서 값을 받아오기 때문에
  const id = document.querySelector("#id");
  const pwd = document.querySelector("#pwd");
  const cpwd = document.querySelector("#cpwd");
  const name = document.querySelector("#name");
  const phoneNo = document.querySelector("#phoneNo");
  const email = document.querySelector("#email");
  const idCheckResult = document.querySelector("#idCheckResult");

  const idMsg = document.querySelector("#error-msg-id");
  const idPwd = document.querySelector("#error-msg-pwd");
  const idCpwd = document.querySelector("#error-msg-cpwd");
  const idName = document.querySelector("#error-msg-name");
  const idPnum = document.querySelector("#error-msg-pnum");
  const idEmail = document.querySelector("#error-msg-email");

  if (id.value === "") {
    idMsg.style.color = "red";
    idMsg.focus();
  } else if (pwd.value === "") {
    idPwd.style.color = "red";
    idPwd.focus();
  } else if (cpwd.value === "") {
    idCpwd.style.color = "red";
    idCpwd.focus();
  } else if (name.value === "") {
    idName.style.color = "red";
    idName.focus();
  } else if (phoneNo.value === "") {
    idPnum.style.color = "red";
    idPnum.focus();
  } else if (email.value === "") {
    idEmail.style.color = "red";
    idEmail.focus();
  } else if (email.value === "") {
    idEmail.style.color = "red";
    idEmail.focus();
  } else if ((idCheckResult.value = "default")) {
    alert("아이디 중복체크를 진행해주세요");
  } else {
    alert("회원가입 성공");
  }
}

/************************************
 *
 *    회원가입 폼 실시간 체크
 *
 ************************************/

function handleChangeJoin(event) {
  // input에서 이벤트 값을 받아오기때문에 인자를 넣어줌
  const idMsg = document.querySelector("#error-msg-id");
  const pwdMsg = document.querySelector("#error-msg-pwd");
  const cpwdMsg = document.querySelector("#error-msg-cpwd");
  const nameMsg = document.querySelector("#error-msg-name");
  const phoneMsg = document.querySelector("#error-msg-phone");
  const emailMsg = document.querySelector("#error-msg-email");
  const emaildomain = document.querySelector("#emaildomain");

  if (event.target.id === "id") {
    event.target.value.trim().length !== 0
      ? (idMsg.style.color = "green")
      : (idMsg.style.color = "#797979");
  } else if (event.target.id === "pwd") {
    event.target.value.trim().length !== 0
      ? (pwdMsg.style.color = "green")
      : (pwdMsg.style.color = "#797979");
  } else if (event.target.id === "cpwd") {
    event.target.value.trim().length !== 0
      ? (cpwdMsg.style.color = "green")
      : (cpwdMsg.style.color = "#797979");
  } else if (event.target.id === "name") {
    event.target.value.trim().length !== 0
      ? (nameMsg.style.color = "green")
      : (nameMsg.style.color = "#797979");
  } else if (event.target.id === "phone") {
    event.target.value.trim().length !== 0
      ? (phoneMsg.style.color = "green")
      : (phoneMsg.style.color = "#797979");
  } else if (event.target.id === "email") {
    event.target.value.trim().length !== 0
      ? (emailMsg.style.color = "green")
      : (emailMsg.style.color = "#797979");
  } else if (event.target.id === "emaildomain") {
    emaildomain.value !== "default"
      ? (emaildomain.style.outlineColor = "green")
      : (emaildomain.style.outlineColor = "#797979");
  }
}

/******************************************
 *
 *    로그인 아이디, 패스워드 실시간 체크
 *
 ******************************************/
function handleChange(event) {
  // input에서 이벤트 값을 받아오기때문에 인자를 넣어줌
  const idMsg = document.querySelector("#error-msg-id");
  const pwdMsg = document.querySelector("#error-msg-pwd");

  if (event.target.id === "id") {
    event.target.value.trim().length !== 0
      ? (idMsg.style.color = "green")
      : (idMsg.style.color = "red");
  } else if (event.target.id === "pwd") {
    event.target.value.trim().length !== 0
      ? (pwdMsg.style.color = "green")
      : (pwdMsg.style.color = "red");
  }
}

/************************************
 *
 *    로그인 폼 체크
 *
 ************************************/
function loginFormCheck() {
  let id = document.querySelector("#id");
  let pwd = document.querySelector("#pwd");
  const msgId = document.querySelector("#error-msg-id");
  const msgPwd = document.querySelector("#error-msg-pwd");

  if (id.value.trim() === "") {
    msgId.textContent = "아이디를 입력해주세요";
    msgId.style.fontSize = "12px";
    msgId.style.color = "red";
    msgId.style.paddingTop = "10px";
    id.focus();
  } else if (pwd.value === "") {
    msgPwd.textContent = "비밀번호를 입력해주세요";
    msgPwd.style.fontSize = "12px";
    msgPwd.style.color = "red";
    msgPwd.style.paddingTop = "10px";
    id.focus();
  } else {
    // 아이디 비교 로직 또는 함수 호출
  }
}
