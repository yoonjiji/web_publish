import React from "react";

export default function HeaderTopMenu({ href, name, isActive, onClick }) {
  return (
    <a
      class={`header__menu__item ${isActive ? "active" : ""}`}
      href={href}
      onClick={onClick}
    >
      {name}
    </a>
  );
}
