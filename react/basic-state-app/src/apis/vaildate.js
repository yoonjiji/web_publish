/**
 * CgvLoginForm 유효성 체크
 * @returns
 */

export const vaildationFormCheck = (param) => {
  let result = true;

  if (param.refs.idRef.current.value === "") {
    param.setErrorMsg({ ...param.errorMsg, ["id"]: "아이디를 입력해주세요" });
    param.refs.idRef.current.focus();
    result = false;
  } else if (param.refs.pwdRef.current.value === "") {
    param.setErrorMsg({
      ...param.errorMsg,
      ["password"]: "비밀번호를 입력해주세요",
    });
    param.refs.pwdRef.current.focus();
    result = false;
  }
  return result;
};

/**
 * Login2 컴포넌트 유효성 체크 함수
 */
export const velidateLogin2 = (param) => {
  let result = true;
  if (param.idRef.current.value === "") {
    param.setErrorMsg({ ...param.errorMsg, ["id"]: " 아이디를 입력해주세요" });
    param.idRef.current.focus();
    result = false;
  } else if (param.passwordRef.current.value === "") {
    param.setErrorMsg({
      ...param.errorMsg,
      ["password"]: " 비밀번호를 입력해주세요",
    });
    param.idRef.current.focus();
    result = false;
  }
  console.log(param.idRef.current.value);
  console.log(param.passwordRef.current.value);
  param.passwordRef.current.focus();
  return result;
};

/**
 * UserInfo 컴포넌트의 유효성 체크 함수
 */
// 유효성 검사
export const validateUserInpo = (refs) => {
  let result = true;
  if (refs.nameRef.current.value === "") {
    alert("이름 입력해주세요");
    // setErrorMsg(...errorMsg, ['name']: "아이디를 입력하세요")
    refs.nameRef.current.focus();
    result = false;
  } else if (refs.addressRef.current.value === "") {
    alert("주소 입력해주세요");
    refs.addressRef.current.focus();
    result = false;
  } else if (refs.ageRef.current.value === "") {
    alert("나이 입력해주세요");
    refs.ageRef.current.focus();
    result = false;
  }
  return result;
};

/**
 * Singup 컴포넌트의 유효성 체크 함수
 */
export const validateSignup = (refs, errors, setErrors) => {
  let checkResult = true;

  if (refs.idRef.current.value === "") {
    setErrors({ ...errors, ["id"]: "아이디를 입력해주세요" });
    // refs.idRef.current.style.setProperty("color", "red");
    refs.idRef.current.focus();
    checkResult = false;
  } else if (refs.pwdRef.current.value === "") {
    setErrors({ ...errors, ["pwd"]: "비밀번호를 입력해주세요" });
    refs.pwdRef.current.focus();
    checkResult = false;
  } else if (refs.cpwdRef.current.value === "") {
    setErrors({ ...errors, ["cpwd"]: "비밀번호를 다시 입력해주세요" });
    refs.cpwdRef.current.focus();
    checkResult = false;
  } else if (refs.nameRef.current.value === "") {
    setErrors({ ...errors, ["name"]: "이름을 입력해주세요" });
    refs.nameRef.current.focus();
    checkResult = false;
  } else if (refs.phoneRef.current.value === "") {
    setErrors({ ...errors, ["phone"]: "번호를 입력해주세요" });
    refs.phoneRef.current.focus();
    checkResult = false;
  } else if (refs.emailRef.current.value === "") {
    setErrors({ ...errors, ["email"]: "이메일을 입력해주세요" });
    refs.emailRef.current.focus();
    checkResult = false;
  } else if (refs.emailDomainRef.current.value === "default") {
    refs.emailDomainRef.current.focus();
    checkResult = false;
  }

  return checkResult;
};
