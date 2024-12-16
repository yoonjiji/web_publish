import React, { useState, useRef } from "react";
import { validateUserInpo } from "../../apis/vaildate.js";

export default function Userinfo() {
  // const nameRef = useRef(null);
  // const addressRef = useRef(null);
  // const ageRef = useRef(null);

  const refs = {
    "nameRef" : useRef(null),
    "addressRef" : useRef(null),
    "ageRef" : useRef(null)
  }

  // 폼데이터 저장소
  const initForm = { name: "", address: "", age: "" };
  const [form, setForm] = useState(initForm);

  // 유효성 체크 메세지
  const [errorMsg, setErrorMsg] = useState({ name: "", address: "", age: "" });

  // 입력값 변경 핸들러
  const handleChangeForm = (event) => {
    const { name, value } = event.target; // 구조 분해 할당
    setForm({ ...form, [name]: value }); // 기존값 펼쳐서 넣고, 새로입력받은 필드값
  };



  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateUserInpo(refs)) {
      console.log(form);
    }
  };

  return (
    <div>
      <h1>UserInfo</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <label htmlFor="">이름 </label>
            <input
              type="text"
              name="name"
              ref={refs.nameRef}
              value={form.name}
              onChange={handleChangeForm}
            />
          </li>
          <li>
            <label htmlFor="">Address </label>
            <input
              type="text"
              name="address"
              ref={refs.addressRef}
              value={form.address}
              onChange={handleChangeForm}
            />
          </li>
          <li>
            <label htmlFor="">Age </label>
            <input
              type="text"
              name="age"
              ref={refs.ageRef}
              value={form.age}
              onChange={handleChangeForm}
            />
          </li>
          <li>
            <button type="submit">Send</button>
          </li>
        </ul>
      </form>
    </div>
  );
}
