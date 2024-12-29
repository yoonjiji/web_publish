import React, { useState } from "react";
import Menu from "./Menu.jsx";

export default function MenuList() {
  const [selected, setSelected] = useState("Home");
  const list = [
    { href: "#home", name: "Home" },
    { href: "#about", name: "About" },
    { href: "#skill", name: "Skills" },
    { href: "#work", name: "My work" },
    { href: "#testimonial", name: "Testimonial" },
    { href: "#contact", name: "Contect" },
  ];

  const handleClick = (menuName) => {
    console.log("menuName---->>", menuName);
    setSelected(menuName);
  };
  // console.log("selected--->", selected);

  return (
    <nav>
      <ul className="header__menu">
        {list &&
          list.map((item) => (
            <li>
              <Menu
                href={item.href}
                menuName={item.name}
                click={handleClick}
                style={
                  item.name === selected
                    ? "header__menu__item active"
                    : "header__menu__item"
                }
              />
            </li>
          ))}
      </ul>
    </nav>
  );
}
