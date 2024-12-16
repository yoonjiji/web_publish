import React, { useState, useRef } from "react";
import { velidateLogin2 } from "../../apis/vaildate.js";

export default function Login() {
  // 유효성 검사를 위한 초기화
  const idRef = useRef(null);
  const passwordRef = useRef(null);
  const [errorMsg, setErrorMsg] = useState({ id: "", password: "" });
  const initForm = { id: "", password: "" };
  const [form, setForm] = useState(initForm); // {"id":"text"...}

  const handleChangeForm = (event) => {
    const { name, value } = event.target;

    console.log(name, value);

    setForm({ ...form, [name]: value });
    if (name === "id") {
      value === ""
        ? setErrorMsg({ ...errorMsg, ["id"]: "아이디를 입력해주세요" })
        : setErrorMsg({ ...errorMsg, ["id"]: "" });
    } else if (name === "password") {
      value === ""
        ? setErrorMsg({ ...errorMsg, ["password"]: "비밀번호를 입력해주세요" })
        : setErrorMsg({ ...errorMsg, ["password"]: "" });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const param = {
      'idRef': idRef,
      'passwordRef': passwordRef,
      'errorMsg':errorMsg,
      'setErrorMsg':setErrorMsg
    }
    if (velidateLogin2(param)) {
      console.log(form);
    }

    // 브라우저에서 실행하는 이벤트를 막아줌(자동으로 브라우저에서 서버로 데이터 전송)
    // console.log(event);
    // 로그인 폼에 입력된 값을 ---> 서버(express, WAS, ...)
    // form을 사용하면 넘길려고하는 object literal 생성됨
    // 예시) { "id":"test", "password":"1234" ... }
  };

  return (
    <div>
      <h1>Login</h1>
      <form name="login-form" onSubmit={handleSubmit}>
        <div>
          <label>아이디 </label>
          <input
            type="text"
            name="id" //id: text
            value={form.id}
            ref={idRef}
            onChange={handleChangeForm}
          />
          <span style={{ color: "red" }}>{errorMsg.id}</span>
        </div>
        <div>
          <label>패스워드 </label>
          <input
            type="password"
            name="password" //password:1234
            value={form.password}
            ref={passwordRef}
            onChange={handleChangeForm}
          />
          <span style={{ color: "red" }}>{errorMsg.password}</span>
        </div>
        <div>
          <button type="submit">로그인</button>
        </div>
      </form>
    </div>
  );
}
