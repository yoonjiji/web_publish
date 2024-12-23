import React, { useState } from "react";
import Menu from "./Menu.jsx";
import Category from "../content/Category.jsx";

export default function MenuList() {
  const list = [
    { href: "#home", name: "Home" },
    { href: "#about", name: "About" },
    { href: "#skill", name: "Skills" },
    { href: "#work", name: "My work" },
    { href: "#testimonial", name: "Testimonial" },
    { href: "#contact", name: "Contect" },
  ];

  const [active, setActive] = useState("");
  return (
    <nav>
      <ul className="header__menu">
        {list &&
          list.map((item, i) => (
            <li>
              <Menu
                href={item.href}
                menuName={item.name}
                isActive={i === active}
                click={() => {
                  setActive(i);
                }}
              />
            </li>
          ))}
      </ul>
    </nav>
  );
}
