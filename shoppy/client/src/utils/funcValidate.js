/**************************************
    title : 로그인 폼 체크
 **************************************/
export const validateLogin = (refs, msgRefs) => {
  // 객체로 넘어왔을 때 구조분해할당
  let result = true;

  if (refs.idRef.current.value === "") {
    // alert("아이디를 입력해주세요");
    msgRefs.msgRef.current.style.setProperty("color", "red");
    refs.idRef.current.focus();
    result = false;
  } else if (refs.pwdRef.current.value === "") {
    // alert("비밀번호를 입력해주세요");
    msgRefs.msgRef.current.style.setProperty("color", "red");
    refs.pwdRef.current.focus();
    result = false;
  }
  return result;
};

// /**************************************
//     title : 회원가입 폼 체크
//  **************************************/
// export const validateSignup = (refs, msgRefs) => {
//   console.log("r-refs--->", refs);
//   console.log("r-refs--->", msgRefs);

//   const refEntries = Object.entries(refs.current); // {idRef:xxxx, ...}
//   const msgRefEntries = Object.entries(msgRefs.current);

//   // entries는 배열로 반환
//   // map, forEach x (반복 돌리는 용도)
//   // => 일반 for, for..of 사용 (인덱스 형식으로 나옴)
//   console.log(refEntries); // [[idRef, xxxx], [pwdRef, xxxx] ...]
//   console.log(msgRefEntries);

//   // refEntries 배열객체와 msgRefEntries 배열객체의 인덱스를 동일하게 체크한다!!
//   for (let i = 0; i < refEntries.length; i++) {
//     const item = refEntries[i];
//     const name = item[0];
//     const ref = item[1]; // 데이터 입력폼 객체 주소

//     let msgItem,
//       msgName,
//       msgRef = null;

//     if (i < refEntries.length - 1) {
//       msgItem = msgRefEntries[i];
//       msgName = msgItem[0];
//       msgRef = msgItem[1];
//     }

//     if (name !== "emaildomainRef") {
//       // default
//       if (ref.current.value === "") {
//         msgRef.current.style.setProperty("color", "red");
//         ref.current.focus();
//         return false;
//       }
//     } else if (name === "emaildomainRef") {
//       // ''
//       if (ref.current.value === "default") {
//         // alert("이메일 주소를 선택해주세요");
//         ref.current.focus();
//         return false;
//       }
//     }
//   } // for
//   return true;
// };

/**
 * title : 회원가입 폼 체크
 */
export const validateSignup = (refs, msgRefs) => {
  const refEntries = Object.entries(refs.current);
  const msgRefEntries = Object.entries(msgRefs.current);

  // console.log("r-refs--->", refs);
  // console.log("r-refs--->", msgRefs);

  //refEntries 배열객체와 msgRefEntries 배열객체의 인덱스를 동일하게 체크한다!!
  for (let i = 0; i < refEntries.length; i++) {
    const item = refEntries[i];
    const name = item[0];
    const ref = item[1]; // 데이터 입력폼 객체 주소

    let msgItem,
      msgName,
      msgRef = null;

    if (i < refEntries.length - 1) {
      msgItem = msgRefEntries[i];
      msgName = msgItem[0];
      msgRef = msgItem[1]; // 데이터 입력폼의 메시지 객체 주소
    }

    if (name !== "emaildomainRef") {
      if (ref.current.value === "") {
        msgRef.current.style.setProperty("color", "red");
        ref.current.focus();
        return false;
      }
    } else {
      if (ref.current.value === "default") {
        ref.current.focus();
        return false;
      }
    }
  }
  return true;
};

/**************************************
    Signup : 아이디 중복체크
 **************************************/
// id 중복확인
export const handleDuplicateIdCheck = (
  idRef,
  pwdRef,
  idMsgRef,
  setIdCheckResultRef
) => {
  // 구조분해 할당 아니면 호출 순서 중요함
  if (idRef.current.value === "") {
    // console.log(refs.current["idRef"].current.value);
    idMsgRef.current.style.setProperty("color", "red");
    idRef.current.focus();
    return false;
  } else {
    const did = "test";
    if (idRef.current.value === did) {
      alert("이미 사용중인 아이디입니다.");
      idRef.current.focus();
      return false;
    } else {
      alert("사용이 가능한 아이디입니다.");
      setIdCheckResultRef("complete");
      pwdRef.current.focus();
      return false;
    }
  }
};

/**************************************
    Signup : 비밀번호 체크
 **************************************/
// 비밀번호 체크
export const handlePasswordCheck = (
  pwdRef,
  cpwdRef,
  nameRef,
  pwdMsgRef,
  cpwdMsgRef
) => {
  // const pwdRef = refs.current["pwdRef"];
  // const cpwdRef = refs.current["cpwdRef"];
  // const pwdMsgRef = refs.current["pwdMsgRef"];
  // const cpwdMsgRef = refs.current["cpwdMsgRef"];
  // 변수 선언해두고 레퍼런스 선언하는 것이 효율성 측면에서 좋음

  if (pwdRef.current.value === "") {
    pwdMsgRef.current.style.setProperty("color", "red");
    pwdRef.current.focus();
    return false;
  } else if (cpwdRef.current.value === "") {
    cpwdMsgRef.current.style.setProperty("color", "red");
    cpwdRef.current.focus();
    return false;
  } else {
    if (pwdRef.current.value === cpwdRef.current.value) {
      alert("패스워드가 동일합니다");
      nameRef.current.focus();
      return false;
    } else {
      alert("패스워드가 다릅니다. 다시 입력해주세요");
      pwdRef.current.value = "";
      cpwdRef.current.value = "";
      pwdRef.current.focus();
      return false;
    }
  }
};
