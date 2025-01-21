import React, { useRef } from "react";

/**********************************
 * Signup 컴포넌트 초기화 작업
 **********************************/
export const initSignup = () => {
  const names = ["id", "pwd", "cpwd", "name", "phone", "emailname"];
  const namesKor = [
    "아이디",
    "비밀번호",
    "비밀번호 확인",
    "이름",
    "전화번호",
    "이메일 주소",
  ];
  const placeholdersKor = [
    "아이디(6~12자 이내)",
    "비밀번호",
    "비밀번호 확인",
    "이름",
    "전화번호",
    "이메일 주소",
  ];

  /* 배열.reduce(콜백함수, 리턴데이터 타입정의) */
  const placeholders = names.reduce((acc, name, idx) => {
    acc[name] = placeholdersKor[idx]; // {아이디(6~12자 이내 ...}
    return acc;
  }, {});

  const labels = names.reduce((acc, name, idx) => {
    acc[name] = namesKor[idx]; // {id : '아이디', pwd : '아이디' ...}
    return acc;
  }, {});

  const initFormData = names.reduce((acc, name) => {
    acc[name] = "";
    return acc;
  }, {});

  //   const refs = useRef(
  //     names.reduce((acc, name) => {
  //       acc[name.concat("Ref")] = React.createRef(); // useRef(null) Hook 바로 호출 X
  //       return acc;
  //     }, {})
  //   );

  //   refs.current["emaildomainRef"] = React.createRef();

  //   const msgRefs = useRef(
  //     names.reduce((acc, name) => {
  //       acc[name.concat("MsgRef")] = React.createRef();
  //       return acc;
  //     }, {})
  //   );
  return { names, placeholders, labels, initFormData };
  // 여기서 만들어서 사인업에 쓸 거기 때문에 리턴
  // 함수가 많으니 객체로
};

// useRef는 외부 호출할 때 리액트가 관리 (Hook 메모리에 저장)
// 앞에 use라는 소문자를 붙이면 리액트가 Hook처럼 인식해서 사용가능o
// use라고 붙여진 함수를 만들기 => 커스텀 Hook
export const useInitSignupRefs = (names) => {
  const refs = useRef(
    names.reduce((acc, name) => {
      acc[name.concat("Ref")] = React.createRef(); // useRef(null) Hook 바로 호출 X
      return acc;
    }, {})
  );

  // console.log("refs:", refs.current);

  refs.current.emaildomainRef = useRef(React.createRef());
  // 반드시 useRef() 감싸줌 => 이벤트 호출 시 useXXX 객체들이 자동으로 업데이트 되므로
  // useRef() 제외시 자동 업데이트가 되지 않음

  const msgRefs = useRef(
    names.reduce((acc, name) => {
      acc[name.concat("MsgRef")] = React.createRef();
      return acc;
    }, {})
  );
  // console.log("msgRefs:", msgRefs.current);

  return { refs, msgRefs };
};
