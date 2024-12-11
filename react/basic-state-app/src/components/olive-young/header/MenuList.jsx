import React from "react";
import Menu from "./Menu.jsx";

export default function MenuList() {
  const MenuList = [
    { name: "회원가입" },
    { name: "로그인" },
    { name: "장바구니" },
    { name: "주문배송" },
    { name: "고객센터" },
    { name: "올영매장" },
    { name: "Global" },
  ];
  return (
    <ul>
      {MenuList.map((item) => (
        <li>
          <Menu name={item.name} />
        </li>
      ))}
    </ul>
  );
}
