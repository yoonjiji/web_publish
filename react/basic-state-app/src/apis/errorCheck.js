/**
 * Signup 에러 체크 함수
 */

export const errorCheckSignup = (name, value, erorrs, setErrors) => {
  const names = [
    { name: "id", msg: "아이디를 입력해주세요" },
    { name: "pwd", msg: "비밀번호를 입력해주세요" },
    { name: "cpwd", msg: "비밀번호를 다시 입력해주세요" },
    { name: "name", msg: "이름을 입력해주세요" },
    { name: "phone", msg: "번호를 입력해주세요" },
    { name: "email", msg: "이메일을 입력해주세요" },
  ];

  names.map((item) =>
    item.name === name
      ? value === ""
        ? setErrors({ ...erorrs, [item.name]: item.msg })
        : setErrors({ ...erorrs, [item.name]: "" })
      : ""
  );
};
