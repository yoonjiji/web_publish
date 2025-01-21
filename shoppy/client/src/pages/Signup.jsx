import React, { useState } from "react";
import "../styles/signup.css";
import {
  validateSignup,
  handleDuplicateIdCheck,
  handlePasswordCheck,
} from "../utils/funcValidate.js";
import { initSignup, useInitSignupRefs } from "../utils/funcInitialize.js";

export default function Signup() {
  const { names, placeholders, labels, initFormData } = initSignup();
  const { refs, msgRefs } = useInitSignupRefs(names); // names 출력 순서 지켜야함
  // const names = ["id", "pwd", "cpwd", "name", "phone", "emailname"];
  // const namesKor = [
  //   "아이디",
  //   "비밀번호",
  //   "비밀번호 확인",
  //   "이름",
  //   "전화번호",
  //   "이메일 주소",
  // ];
  // const placeholdersKor = [
  //   "아이디(6~12자 이내)",
  //   "비밀번호",
  //   "비밀번호 확인",
  //   "이름",
  //   "전화번호",
  //   "이메일 주소",
  // ];

  // // let initFormData = {};
  // // names.forEach((name) => {
  // //   initFormData = { ...initFormData, [name]: "" };
  // // });

  // /* 배열.reduce(콜백함수, 리턴데이터 타입정의) */
  // const placeholders = names.reduce((acc, name, idx) => {
  //   acc[name] = placeholdersKor[idx]; // {아이디(6~12자 이내 ...}
  //   return acc;
  // }, {});

  // const labels = names.reduce((acc, name, idx) => {
  //   acc[name] = namesKor[idx]; // {id : '아이디', pwd : '아이디' ...}
  //   return acc;
  // }, {});

  // // reduce 호출 : labels[name]

  // // console.log("labels--->", labels);

  // const initFormData = names.reduce((acc, name) => {
  //   acc[name] = ""; // {"id":"" ...}
  //   // acc는 뒤에 나오는 애 연산값의 속성을 따라감
  //   return acc;
  // }, {});

  // const refs = useRef(
  //   names.reduce((acc, name) => {
  //     acc[name.concat("Ref")] = React.createRef(); // useRef(null) Hook 바로 호출 X
  //     return acc;
  //   }, {})
  // );
  // // hook함수는 for문으로 바로 돌릴 수 없음
  // // => 바로 실행은 안되고, 콜백 함수를 통해 값을 리턴
  // // reduce 함수 : 콜백함수를 실행 후, 하나의 결과값을 반환

  // refs.current["emaildomainRef"] = React.createRef();

  // // console.log("refs reduce-->>", refs);

  // const msgRefs = useRef(
  //   names.reduce((acc, name) => {
  //     acc[name.concat("MsgRef")] = React.createRef();
  //     return acc;
  //   }, {})
  // );

  // // console.log("init reduce-->>",    initFormData);
  // // console.log("msgRefs reduce-->>", msgRefs);
  // // 반복으로 돌릴 때 이름을 생성할 때 뒷부분은 공통으로 맞춰준다.

  const [formData, setFormData] = useState(initFormData);
  console.log("refs--->", refs);
  const [idCheckResult, setIdCheckResult] = useState("default");

  // change
  const handleChageForm = (event) => {
    const { name, value } = event.target;
    // console.log(name, value);
    setFormData({ ...formData, [name]: value });
  };

  // console.log("formData--->", formData);

  // submit
  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateSignup(refs, msgRefs)) {
      if (idCheckResult === "default") {
        alert("중복확인을 진행해 주세요");
      }
      console.log("send data-->", formData);
    }
  };

  // id 중복확인
  // const handleDuplicateIdCheck = (refs, msgRefs) => {
  //     if (refs.current["idRef"].current.value === "test") {
  //       // console.log(refs.current["idRef"].current.value);
  //       msgRefs.current["idMsgRef"].current.style.setProperty("color", "red");
  //       refs.current.idRef.current.focus();
  //       return false;
  //     } else {
  //       const did = "test";
  //       if (msgRefs.current["idRef"].current.value === did) {
  //         alert("이미 사용중인 아이디입니다.");
  //         refs.current.idRef.current.focus();
  //         return false;
  //       } else {
  //         alert("사용이 가능한 아이디입니다.");
  //         refs.current["pwdRef"].current.focus();
  //         return false;
  //       }
  //     }
  //   };

  // // 비밀번호 체크
  // const handlePasswordCheck = () => {
  //   const pwdRef = refs.current["pwdRef"];
  //   const cpwdRef = refs.current["cpwdRef"];
  //   const pwdMsgRef = refs.current["pwdMsgRef"];
  //   const cpwdMsgRef = refs.current["cpwdMsgRef"];
  //   // 변수 선언해두고 레퍼런스 선언하는 것이 효율성 측면에서 좋음

  //   if (pwdRef.current.value === "") {
  //     pwdMsgRef.current.style.setProperty("color", "red");
  //     pwdRef.current.focus();
  //     return false;
  //   } else if (cpwdRef.current.value === "") {
  //     cpwdMsgRef.current.style.setProperty("color", "red");
  //     cpwdRef.current.focus();
  //     return false;
  //   } else {
  //     if (pwdRef.current.value === cpwdRef.current.value) {
  //       alert("패스워드가 동일합니다");
  //       refs.current["nameRef"].current.focus();
  //       return false;
  //     } else {
  //       alert("패스워드가 다릅니다. 다시 입력해주세요");
  //       pwdRef.current.value = "";
  //       cpwdRef.current.value = "";
  //       pwdRef.current.focus();
  //       return false;
  //     }
  //   }
  // };

  return (
    <div className="content">
      <h1 className="center-title">SIGINUP</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        <ul>
          {/* return 안에서는 map, filter만 사용, 삼항연산자 / 위에선 for이나 if 등 정의 */}
          {/* return 안에서 map은 {}묶지말고 바로 ()실행 */}
          {names &&
            names.map((name) => (
              <li>
                <label for="">
                  <b>{labels[name]}</b>
                </label>
                <span ref={msgRefs.current[name.concat("MsgRef")]}>
                  {labels[name]}을(를) 입력해주세요
                </span>
                <div>
                  {name === "emailname" ? (
                    <>
                      <input
                        type="text"
                        name={name}
                        // id="emailname"
                        ref={refs.current[name.concat("Ref")]} // ref.idRef
                        onChange={handleChageForm}
                        placeholder={placeholders[name]}
                      />
                      <span>@</span>
                      <select
                        name="emaildomain"
                        ref={refs.current["emaildomainRef"]}
                        onChange={handleChageForm}
                      >
                        <option value="default">선택</option>
                        <option value="naver.com">naver.com</option>
                        <option value="gmail.com">gmail.com</option>
                        <option value="daum.net">daum.net</option>
                      </select>
                    </>
                  ) : (
                    <>
                      <input
                        type={
                          name === "pwd" || name === "cpwd"
                            ? "password"
                            : "text"
                        }
                        name={name}
                        // id="id"
                        ref={refs.current[name.concat("Ref")]}
                        onChange={handleChageForm}
                        onBlur={
                          name === "cpwd"
                            ? () => {
                                handlePasswordCheck(
                                  refs.current["pwdRef"],
                                  refs.current["cpwdRef"],
                                  refs.current["nameRef"],
                                  msgRefs.current["psdMsgRef"],
                                  msgRefs.current["cpwdMsgRef"]
                                );
                              }
                            : null
                        }
                        placeholder={placeholders[name]}
                      />
                      {name === "id" && (
                        <>
                          <button
                            type="button"
                            onClick={() => {
                              handleDuplicateIdCheck(
                                refs.current["idRef"],
                                refs.current["pwdRef"],
                                msgRefs.current["idMsgRef"],
                                setIdCheckResult
                              );
                            }}
                            // 콜백함수 형태로 넘겨야 리액트로 넘어감
                          >
                            중복확인
                          </button>
                          <input type="hidden" value={idCheckResult} />
                        </>
                      )}
                    </>
                  )}
                </div>
              </li>
            ))}

          <li>
            <button type="submit">가입하기</button>
            <button type="reset">가입취소</button>
          </li>
        </ul>
      </form>
    </div>
  );
}
