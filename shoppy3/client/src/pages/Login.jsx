import React, { useRef, useState } from "react";
import "../styles/login.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

export default function Login() {
  const refs = {
    idRef: useRef(null),
    pwdRef: useRef(null),
  };

  const [formData, setFormData] = useState({ id: "", pwd: "" });
  // change
  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setFormData({ ...formData, [name]: value });
  };
  //   console.log("formData--->", formData);

  // validate
  const validate = () => {
    let result = true;
    if (refs.idRef.current.value === "") {
      alert("아이디를 입력해주세요");
      refs.idRef.current.focus();
      result = false;
    } else if (refs.pwdRef.current.value === "") {
      alert("비밀번호를 입력해주세요");
      refs.pwdRef.current.focus();
      result = false;
    }
    return result;
  };

  // submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) console.log("sendData--->", formData);
  };

  return (
    <div className="content">
      <h1 className="center-title">LOGIN</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <ul>
          <li>
            <p className="login-form-message">
              ✔ 아이디와 비밀번호를 입력하신 후, 로그인을 진행해주세요.
            </p>
          </li>
          <li>
            <div className="login-form-input">
              <span className="login-form-input-icons">
                <FaUser />
              </span>
              <input
                type="text"
                name="id"
                id="id"
                ref={refs.idRef}
                onChange={handleChangeForm}
                placeholder="아이디를 입력해주세요"
              />
            </div>
            <p id="error-msg-id"></p>
          </li>
          <li>
            <div className="login-form-input">
              <span className="login-form-input-icons">
                <FaLock />
              </span>
              <input
                type="password"
                name="pwd"
                id="pwd"
                ref={refs.pwdRef}
                onChange={handleChangeForm}
                placeholder="패스워드를 입력해주세요"
              />
            </div>
            <p id="error-msg-pwd"></p>
          </li>
          <li>
            <span style={{ fontSize: "0.7em", color: "lightgray" }}>
              아이디 또는 패스워드를 입력해주세요
            </span>
          </li>
          <li>
            <button type="submit" className="login-button">
              로그인
            </button>
          </li>

          <li>
            <div className="login-form-checkbox">
              <input type="checkbox" name="status" />
              <label for="">아이디 저장</label>
            </div>
            <div>
              <a href="#">아이디 찾기</a>
              <span>&gt;</span>
              <a href="#">패스워드 찾기</a>
              <span>&gt;</span>
            </div>
          </li>
          <li>
            <button type="button" className="login-button-naver">
              네이버 로그인
            </button>
          </li>
        </ul>
        <div className="loginplus-image">
          <img
            src="https://adimg.cgv.co.kr//images/202206/loginplus/350x300.png"
            alt=""
          />
        </div>
      </form>
    </div>
  );
}
