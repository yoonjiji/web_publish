export default function Notice() {
  return (
    <div className="content-event-special">
      {/* <!-- 공지사항 --> */}
      <div className="content-notice">
        {/* <!-- 공지사항 ~ 앱다운로드까지 --> */}
        <div className="content-notice-down">
          {/* <!-- 공지 / 고객센터 / 문의 --> */}
          <div className="content-notice-noti">
            {/* <!-- 공지사항 / 고객센터 --> */}
            <div>
              <div>
                <span className="notice-content-font">공지사항</span>
                <span className="notice-span-padding">
                  [시스템 점검]iOS 18 업데이트 관련 예매 서비스...
                </span>
                <button className="package-content-button">더보기</button>
              </div>

              <div>
                <h2 className="notice-content-font">고객센터</h2>
                <p>
                  <span>1544-1122</span> <br />
                  <span>고객센터 운영시간(평일 09:00~18:00)</span>
                  <br />
                  <span>업무시간 외 자동응답 안내 가능합니다.</span>
                </p>
              </div>
            </div>

            <div>
              <span>FAQ</span>
              <span>1:1 문의</span>
              <span>대관/단체 문의</span>
            </div>
          </div>

          {/* <!-- 앱 다운로드 --> */}
          <div>
            <h2 className="notice-content-font">앱 다운로드</h2>
            <p>CGV앱에서 더 편리하게 이용하세요</p>
            <img src="/images/qrcode.gif" alt="QR code" />
            <p>
              QR코드를 스캔하고
              <br />
              앱설치 페이지로 바로 이동하세요
            </p>
          </div>
        </div>

        {/* <!-- 홈헬스 광고 --> */}
        <div>
          <a href="#">
            <img src="/images/homehealth.png" alt="homehealth 사진" />
          </a>
        </div>
      </div>
    </div>
  );
}
