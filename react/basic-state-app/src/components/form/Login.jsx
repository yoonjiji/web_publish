import React, { useState, useRef } from "react";

export default function Login() {
  // 유효성 검사를 위한 초기화
  const idRef = useRef(null);
  const passwordRef = useRef(null);

  // 로그에 입력한 id, pwd값 출력
  const initForm = { id: "", password: "" };
  const [form, setForm] = useState(initForm); // {"id":"text"...}

  const handleChangeForm = (event) => {
    // 아이디, 패스워드가 변경되면
    // setForm 함수를 이용하여 "id":"text"... 형식으로 저장
    //console.log(event); // {type:text, name=password, value:1234}
    const { name, value } = event.target;
    // console.log(`name--->${name}, value--->${value}`);
    setForm({ ...form, [name]: value });
    // 오프젝트 객체의 필드값을 변수로 입력하는 경우에는 []로 감싼다
  };
  //   console.log(`id--->${form.id}`);
  //   console.log(`password--->${form.password}`);

  const velidate = () => {
    let result = true;
    if (idRef.current.value === "") {
      alert("아이디를 입력해주세요");
      idRef.current.focus();
      result = false;
    } else if (passwordRef.current.value === "") {
      alert("비밀번호를 입력해주세요");
      idRef.current.focus();
      result = false;
    }
    console.log(idRef.current.value);
    console.log(passwordRef.current.value);
    passwordRef.current.focus();
    return result;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (velidate(passwordRef)) {
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
        </div>
        <div>
          <button type="submit">로그인</button>
        </div>
      </form>
    </div>
  );
}
