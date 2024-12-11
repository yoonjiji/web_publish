import React, { useState } from "react";
import Header from "./Header.jsx";
import Body from "./Body.jsx";
// import Footer from "./Footer.jsx";
import MenuList from "./header/MenuList.jsx";
import ProductList from "./body/ProductList.jsx";
import "./css/Olive.css";

export default function AppOlive() {
  const [id, setId] = useState("");
  const [cartList, setCartList] = useState([]);
  // 배열에 id 저장 ---> 배열의 길이 ---> cartCount

  const handleCartApp = (id) => {
    // alert(`AppOlive--->${setId(id)}`);
    setCartList([...cartList, id]);
    // cartList.push(id);
  };
  console.log(``);

  return (
    <>
      <Header>
        <img
          src="https://static.oliveyoung.co.kr/pc-static-root/image/comm/h1_logo.png"
          alt="Olive Logo img"
        />
        <MenuList count={cartList.length} />
      </Header>
      <Body>
        <ProductList cart={handleCartApp} />
      </Body>
    </>
  );
}
