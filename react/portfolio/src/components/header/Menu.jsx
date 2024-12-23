import React from "react";

export default function Menu({ href, menuName, isActive, click }) {
  const handleClickMenu = () => {
    click();
  };

  return (
    <a
      class={`header__menu__item ${isActive ? "active" : ""}`}
      href={href}
      onClick={handleClickMenu}
    >
      {menuName}
    </a>
  );
}
