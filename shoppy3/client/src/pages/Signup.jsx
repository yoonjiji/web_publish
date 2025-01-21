import React, { useRef, useState } from "react";
import "../styles/signup.css";

export default function Signup() {
  const names = ["id", "pwd", "cpwd", "name", "phone", "emailname"];

  // reduce - 폼 데이터 저장
  const initFormData = names.reduce((acc, name) => {
    acc[name] = "";
    return acc;
  }, {});

  // reduce - Refs
  const refs = useRef(
    names.reduce((acc, name) => {
      acc[name.concat("Ref")] = React.createRef();
      return acc;
    }, {})
  );

  refs.current["emaildomainRef"] = useRef(React.createRef());

  const [formData, setFormData] = useState(initFormData);

  //change
  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // console.log("formData--->", formData);

  // validate
  const validateSignup = () => {};

  // submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateSignup()) console.log("send data--->", formData);
  };
  return (
    <div className="content">
      <h1 className="center-title">SIGINUP</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        <ul>
          {names &&
            names.map((name) => (
              <>
                {name === "emailname"} ? (
                <>
                  <input
                    type="text"
                    name="emailname"
                    ref={refs.current["emailnameRef"]}
                    onChange={handleChangeForm}
                    placeholder="이메일 주소"
                  />
                  <span>@</span>

                  <select
                    name="emaildomain"
                    ref={refs.current["emaildomainRef"]}
                    onChange={handleChangeForm}
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
                    type="text"
                    name="id"
                    onChange={handleChangeForm}
                    ref={refs.current["idRef"]}
                    placeholder="아이디 입력(6~20자)"
                  />
                  <button type="button">중복확인</button>
                  <input type="hidden" id="idCheckResult" value="default" />
                </>
                );
              </>
            ))}

          <li>
            <label for="">
              <b>이메일 주소</b>
            </label>
            <span id="error-msg-emailname">이메일 주소를 입력해주세요</span>
            <div></div>
          </li>
          <li>
            <button type="submit">가입하기</button>
            <button type="reset">가입취소</button>
          </li>
        </ul>
      </form>
    </div>
  );
}
