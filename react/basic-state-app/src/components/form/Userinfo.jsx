import React, { useState, useRef } from "react";

export default function Userinfo() {
  const nameRef = useRef(null);
  const addressRef = useRef(null);
  const ageRef = useRef(null);

  // 폼데이터 저장소
  const initForm = { name: "", address: "", age: "" };
  const [form, setForm] = useState(initForm);

  // 입력값 변경 핸들러
  const handleChangeForm = (event) => {
    const { name, value } = event.target; // 구조 분해 할당
    setForm({ ...form, [name]: value }); // 기존값 펼쳐서 넣고, 새로입력받은 필드값
  };

  // 유효성 검사
  const validateForm = () => {
    let result = true;
    if (nameRef.current.value === "") {
      alert("이름 입력해주세요");
      nameRef.current.focus();
      result = false;
    } else if (addressRef.current.value === "") {
      alert("주소 입력해주세요");

      addressRef.current.focus();
      result = false;
    } else if (ageRef.current.value === "") {
      alert("나이 입력해주세요");
      ageRef.current.focus();
      result = false;
    }
    return result;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
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
              ref={nameRef}
              value={form.name}
              onChange={handleChangeForm}
            />
          </li>
          <li>
            <label htmlFor="">Address </label>
            <input
              type="text"
              name="address"
              ref={addressRef}
              value={form.address}
              onChange={handleChangeForm}
            />
          </li>
          <li>
            <label htmlFor="">Age </label>
            <input
              type="text"
              name="age"
              ref={ageRef}
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
