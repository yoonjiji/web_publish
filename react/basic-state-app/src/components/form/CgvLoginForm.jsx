import React, { useRef, useState } from "react";
import "./cgv.css";

export default function CgvLoginForm() {
  const idRef = useRef(null);
  const pwdRef = useRef(null);

  const init = { name: "", pwd: "" };
  const [formData, setFormData] = useState(init);

  // 입력값 변경 핸들러
  const handleChangeForm = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // 유효성 검사 함수
  const validate = () => {
    let result = true;
    if (idRef.current.value === "") {
      alert("아이디를 입력해주세요");
      idRef.current.focus();
      result = false;
    } else if (pwdRef.current.value === "") {
      alert("비밀번호를 입력해주세요");
      pwdRef.current.focus();
      result = false;
    }
    return result;
  };

  // 폼 제출 핸들러
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      console.log(formData);
    }
  };

  return (
    <>
      <div id="contents">
        <div className="login-form center-layout">
          <h1 className="center-title">Login</h1>
          <form onSubmit={handleSubmit}>
            <ul>
              <li>
                <p>
                  아이디 비밀번호를 입력하신 후, 로그인 버튼을 클릭해 주세요.
                </p>
              </li>
              <li>
                <div className="login-form-input">
                  <span>
                    <i className="fa-regular fa-user"></i>
                  </span>
                  <input
                    type="text"
                    name="id"
                    id="id"
                    ref={idRef}
                    value={formData.id}
                    // oninput="handleChange(event)"
                    onChange={handleChangeForm}
                  />
                </div>
                <p id="error-msg-id"></p>
              </li>

              <li>
                <div className="login-form-input">
                  <span>
                    <i className="fa-solid fa-lock"></i>
                  </span>
                  <input
                    type="password"
                    name="pwd"
                    id="pwd"
                    ref={pwdRef}
                    value={formData.pwd}
                    // oninput="handleChange(event)"
                    onChange={handleChangeForm}
                  />
                </div>
                <p id="error-msg-pwd"></p>
              </li>

              <li>
                <button
                  type="submit"
                  className="btn-main-color"
                  // onclick="loginFormCheck()"
                >
                  로그인
                </button>
              </li>
              <li>
                <div>
                  <input type="checkbox" />
                  <label>아이디 저장</label>
                </div>
                <div>
                  <a href="#">아이디 찾기</a>
                  <span>&gt;</span>
                  <a href="#">비밀번호 찾기</a>
                  <span>&gt;</span>
                </div>
              </li>
            </ul>
            <div>
              <img
                src="https://adimg.cgv.co.kr//images/202206/loginplus/350x300.png"
                alt="login img"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
