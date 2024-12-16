import React, { useState, useRef } from "react";
import "./cgv.css";
import { validateSignup } from "../../apis/vaildate.js";
import { errorCheckSignup } from "../../apis/errorCheck.js";

export default function Signup() {
  const refs = {
    idRef: useRef(null),
    pwdRef: useRef(null),
    cpwdRef: useRef(null),
    nameRef: useRef(null),
    phoneRef: useRef(null),
    emailRef: useRef(null),
    emailDomainRef: useRef(null),
  };

  // 폼 데이터 저장소
  const init = {
    id: "",
    pwd: "",
    cpwd: "",
    name: "",
    phone: "",
    email: "",
    emaildomain: "",
  };
  const initErorrs = {
    id: "",
    pwd: "",
    cpwd: "",
    name: "",
    phone: "",
    email: "",
    emaildomain: "",
  };
  const [formData, setFormData] = useState(init);
  const [erorrs, setErrors] = useState(initErorrs);

  // 폼의 입력이 변경되는 경우 호출되는 함수
  const handleChangeSignup = (event) => {
    console.log(event.target.value);
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    errorCheckSignup(name, value, erorrs, setErrors);
  };

  // 폼의 입력이 종료된 후 Submit 함수
  const handleSubmitSignup = (event) => {
    event.preventDefault();
    if (validateSignup(refs, erorrs, setErrors)) {
      console.log(formData);
    }
  };

  return (
    <div id="contents">
      <div className="center-layout join-form">
        <h1 className="center-title">회원가입</h1>
        <form onSubmit={handleSubmitSignup}>
          <ul>
            <li>
              <label for="">아이디</label>
              <span id="error-msg-id" style={{ color: "red" }}>
                {erorrs.id}
              </span>
              <div className="id-form">
                <input
                  type="text"
                  name="id"
                  id="id"
                  ref={refs.idRef}
                  value={formData.id}
                  // oninput="handleChangeJoin(event)"
                  onChange={handleChangeSignup}
                  placeholder="아이디 입력(6~20자)"
                />
                <button type="button" onclick="idCheck(event)">
                  중복 확인
                </button>
                <input type="hidden" id="idCheckResult" value="default" />
              </div>
            </li>

            <li>
              <label for="">비밀번호</label>
              <span id="error-msg-pwd" style={{ color: "red" }}>
                {erorrs.pwd}
              </span>
              <div>
                <input
                  type="password"
                  name="pwd"
                  id="pwd"
                  ref={refs.pwdRef}
                  value={formData.pwd}
                  // oninput="handleChangeJoin(event)"
                  onChange={handleChangeSignup}
                  placeholder="비밀번호 입력(문자, 숫자, 특수문자 포함 8~20자)"
                />
              </div>
            </li>

            <li>
              <label for="">비밀번호 확인</label>
              <span id="error-msg-cpwd" style={{ color: "red" }}>
                {erorrs.cpwd}
              </span>
              <div>
                <input
                  type="password"
                  name="cpwd"
                  id="cpwd"
                  ref={refs.cpwdRef}
                  // oninput="handleChangeJoin(event)"
                  onChange={handleChangeSignup}
                  value={formData.cpwd}
                  // onblur="passwordCheck()"
                  placeholder="비밀번호 재입력"
                />
              </div>
            </li>
            <li>
              <label for="">이름</label>
              <span id="error-msg-name" style={{ color: "red" }}>
                {erorrs.name}
              </span>
              <div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  ref={refs.nameRef}
                  value={formData.name}
                  // oninput="handleChangeJoin(event)"
                  onChange={handleChangeSignup}
                  placeholder="이름을 입력해주세요"
                />
              </div>
            </li>

            <li>
              <label for="">전화번호</label>
              <span id="error-msg-phone" style={{ color: "red" }}>
                {erorrs.phone}
              </span>
              <div>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  ref={refs.phoneRef}
                  value={formData.phone}
                  // oninput="handleChangeJoin(event)"
                  onChange={handleChangeSignup}
                  placeholder="휴대폰 번호 입력('-' 제외 11자리 입력)"
                />
              </div>
            </li>

            <li>
              <label for="">이메일 주소</label>
              <span id="error-msg-email" style={{ color: "red" }}>
                {erorrs.email}
              </span>
              <div>
                <input
                  type="text"
                  name="email"
                  id="email"
                  ref={refs.emailRef}
                  value={formData.email}
                  // oninput="handleChangeJoin(event)"
                  onChange={handleChangeSignup}
                  placeholder="이메일 주소"
                />
                <span>@</span>
                <select
                  name="emaildomain"
                  id="emaildomain"
                  value={formData.domain}
                  ref={refs.emailDomainRef}
                  // oninput="handleChangeJoin(event)"
                  onChange={handleChangeSignup}
                >
                  <option value="default">선택</option>
                  <option value="naver.com">naver.com</option>
                  <option value="gmail.com">gmail.com</option>
                  <option value="daum.net">daum.net</option>
                </select>
              </div>
            </li>

            <li>
              <button type="submit">가입하기</button>
              <button type="reset">가입취소</button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}
