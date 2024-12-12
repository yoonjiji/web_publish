import React, { useState, useEffect } from "react";
import Product from "./Product";

export default function ProductList({ cart }) {
  const [productList, setProductList] = useState([]); //전체 상품 리스트
  const [list, setList] = useState([]); // 출력용 리스트

  useEffect(() => {
    fetch("/data/olive.json")
      .then((data) => data.json())
      .then((jsonData) => {
        setProductList(jsonData);
        setList(jsonData);
      })
      .catch();
  }, []);

  const totalCart = (id) => {
    cart(id); //AppOlive의 handleCartApp 함수 호출
  };

  const [type, setType] = useState("");

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };
  console.log(`type --> ${type}`);

  useEffect(() => {
    // console.log(`useEffet --> ${type}`);
    // productList.filter ---> 결과 : [{item},{item}]

    if (type === "total") {
      setList(productList);
    } else {
      const list = productList.filter((item) => {
        if (type === "sale" && item.isSale) {
          return item;
        } else if (type === "cupon" && item.isCoupon) {
          return item;
        } else if (type === "today" && item.isToday) {
          return item;
        }
      });
      console.log(`list ---> ${list}`);

      setList(list);
    }
  }, [type]);
  // 타입이 바뀔 때 마다 useEffect의 실행구문에 영향을 끼친다

  return (
    <>
      <div>
        <input
          type="radio"
          name="type"
          value="total"
          onClick={handleTypeChange}
        />
        <span>전체</span>
        <input
          type="radio"
          name="type"
          value="sale"
          onClick={handleTypeChange}
        />
        <span>세일</span>
        <input
          type="radio"
          name="type"
          value="cupon"
          onClick={handleTypeChange}
        />
        <span>쿠폰</span>
        <input
          type="radio"
          name="type"
          value="today"
          onClick={handleTypeChange}
        />
        <span>오늘드림</span>
      </div>
      <ul className="product-list-container">
        {list &&
          list.map((item) => (
            <li>
              <Product
                totalCart={totalCart}
                id={item.id}
                img={item.img}
                title={item.title}
                description={item.description}
                price={item.price}
                sprice={item.sprice}
                isSale={item.isSale}
                isCoupon={item.isCoupon}
                isToday={item.isToday}
              />
            </li>
          ))}
      </ul>
    </>
  );
}
