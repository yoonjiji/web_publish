import React, { useState } from "react";
import Header from "./Header.jsx";
import Body from "./Body.jsx";
import MenuList from "./header/MenuList.jsx";
import ProductList from "./body/ProductList.jsx";

import "./Olive.css";

export default function AppOlive() {
  const [cartList, setCartList] = useState([]);
  // 배열에 id 저장 ---> 배열의 길이 ---> cartCount

  const handleCartApp = (id) => {
    setCartList([...cartList, id]);
  };

  console.log(`cartList--> ${cartList}`);

  return (
    <>
      <Header>
        <img src="https://static.oliveyoung.co.kr/pc-static-root/image/comm/h1_logo.png" />
        <MenuList count={cartList.length} />
      </Header>
      <Body>
        <ProductList cart={handleCartApp} />
      </Body>
    </>
  );
}
