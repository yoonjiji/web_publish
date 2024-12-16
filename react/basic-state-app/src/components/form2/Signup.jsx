import React from "react";
import "../form/cgv.css";

export default function Signup() {
  // 폼 데이터 저장소
  // 폼의 입력이 변경되는 경우 호출되는 함수
  // 폼의 입력이 종료된 후 Submit 함수

  return (
    <div>
      <div id="contents">
        <div class="center-layout join-form">
          <h1 class="center-title">회원가입</h1>
          <form action="#" method="post">
            <ul>
              <li>
                <label for="">아이디</label>
                <span id="error-msg-id">아이디를 입력해주세요</span>
                <div class="id-form">
                  <input
                    type="text"
                    name="id"
                    id="id"
                    oninput="handleChangeJoin(event)"
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
                <span id="error-msg-pwd">
                  12자 이내의 비밀번호를 입력해주세요
                </span>
                <div>
                  <input
                    type="password"
                    name="pwd"
                    id="pwd"
                    oninput="handleChangeJoin(event)"
                    placeholder="비밀번호 입력(문자, 숫자, 특수문자 포함 8~20자)"
                  />
                </div>
              </li>

              <li>
                <label for="">비밀번호 확인</label>
                <span id="error-msg-cpwd">비밀번호가 일치하지 않습니다</span>
                <div>
                  <input
                    type="password"
                    name="cpwd"
                    id="cpwd"
                    oninput="handleChangeJoin(event)"
                    onblur="passwordCheck()"
                    placeholder="비밀번호 재입력"
                  />
                </div>
              </li>
              <li>
                <label for="">이름</label>
                <span id="error-msg-name">이름을 입력해주세요</span>
                <div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    oninput="handleChangeJoin(event)"
                    placeholder="이름을 입력해주세요"
                  />
                </div>
              </li>

              <li>
                <label for="">전화번호</label>
                <span id="error-msg-phone">전화번호를 입력해주세요</span>
                <div>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    oninput="handleChangeJoin(event)"
                    placeholder="휴대폰 번호 입력('-' 제외 11자리 입력)"
                  />
                </div>
              </li>

              <li>
                <label for="">이메일 주소</label>
                <span id="error-msg-email">이메일 주소를 입력해주세요</span>
                <div>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    oninput="handleChangeJoin(event)"
                    placeholder="이메일 주소"
                  />
                  <span>@</span>
                  <select
                    name="emaildomain"
                    id="emaildomain"
                    oninput="handleChangeJoin(event)"
                  >
                    <option value="default">선택</option>
                    <option value="naver.com">naver.com</option>
                    <option value="gmail.com">gmail.com</option>
                    <option value="daum.net">daum.net</option>
                  </select>
                </div>
              </li>

              <li>
                <button type="button" onclick="JoinFormCheck()">
                  가입하기
                </button>
                <button type="reset">가입취소</button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
}
