import React from "react";
import Header from "./Header.jsx";
import Body from "./Body.jsx";

import MenuList from "./header/MenuList.jsx";
import ProductList from "./body/ProductList.jsx";
import "./css/Olive.css";

export default function AppOlive() {
  return (
    <>
      <Header>
        <img
          src="https://static.oliveyoung.co.kr/pc-static-root/image/comm/h1_logo.png"
          alt="Olive Logo img"
        />
        <MenuList />
      </Header>
      <Body>
        <ProductList />
      </Body>
    </>
  );
}
