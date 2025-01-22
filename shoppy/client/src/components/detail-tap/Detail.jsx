import React, { useEffect, useState } from "react";
import DetailItem from "./DetailItem.jsx";
import axios from "axios";

export default function Detail({ selectedPid, products }) {
  const [detailImgList, setDetailImgList] = useState([]);
  const [detailDesList, setDetailDesList] = useState([]);
  const [detailInfoList, setDetailInfoList] = useState([]);

  useEffect(() => {
    axios
      .get("/data/product_detail.json")
      .then((res) => {
        const filteredImg = res.data.filter((item) => item.pid === selectedPid);
        if (filteredImg) {
          setDetailImgList(filteredImg[0].images);
        }
      })
      .catch((error) => console.log(error));

    axios.get("/data/product_detail_des.json").then((res) => {
      const filteredDes = res.data.filter((des) => des.pid === selectedPid);
      if (filteredDes) {
        setDetailDesList(filteredDes[0].description);
      }
    });

    axios.get("/data/product_detail_info.json").then((res) => {
      const filteredInfo = res.data.filter((des) => des.pid === selectedPid);
      if (filteredInfo) {
        setDetailInfoList(filteredInfo[0]);
      }
    });
  }, [selectedPid]);

  return (
    <div className="product-detail-tab-d">
      <>
        {detailImgList &&
          detailImgList.map((img, index) => (
            <DetailItem key={index} img={img} />
          ))}
      </>
      {/* 제품 정보 */}
      <div>
        <p>{products.ename}</p>
        <p>{products.name}</p>
        <p>{products.info}</p>
        <br />
        {/* 상세 설명 */}
        <>
          {detailDesList &&
            detailDesList.map((line, index) => <p key={index}>{line}</p>)}
        </>
      </div>
      <div>
        <h2>상품 정보 고시</h2>
        <ul>
          {detailInfoList &&
            detailInfoList.map((item) => {
              <li>
                <span>소재</span>
                <span>{}</span>
              </li>;
            })}
        </ul>
        <p>
          본 상품 정보 및 거래 조건의 내용은 판매자가 직접 등록한 것으로서
          등록된 정보에 대한 책임은 판매자에게 있습니다.
        </p>
      </div>
    </div>
  );
}
