import { useEffect, useState } from "react";

export default function FooterContent() {
  const [companyInfo, setCompanyInfo] = useState({});
  useEffect(() => {
    fetch("/data/cgv_compinfo.json")
      .then((data) => data.json())
      .then((jsonData) => setCompanyInfo(jsonData))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="footer-content">
      <div className="footer-intro">
        <ul>
          {companyInfo.list &&
            companyInfo.list.map((menu) => (
              <li>
                <a href="#">{menu.name}</a>
              </li>
            ))}
        </ul>
      </div>

      <p>{companyInfo.adress}</p>
      <p>
        대표이사 {companyInfo.ceo}: / 사업자등록번호 : 104-81-45690 /
        통신판매업신고번호 2017-서울용산-0662 / 사업자정보확인
      </p>
      <p>호스팅사업자 : CJ올리브네트웍스 / 대표이메일 : cjcgvmaster@cj.net</p>
      <p>
        <a href="/cgv/admin/admin_main.html" target="_parent">
          &copy;
        </a>
        CJ CGV. All Rights Reserved
      </p>
    </div>
  );
}
