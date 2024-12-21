import React, { useEffect, useState } from "react";
import HeaderTopMenu from "./HeaderTopMenu.jsx";

export default function HeaderTopMenuList() {
  const [list, setList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    fetch("/data/portfolio.json")
      .then((data) => data.json())
      .then((jsonData) => {
        if (jsonData.headerTopList === "Home") {
        } else {
          setList(jsonData.headerTopList);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <nav>
        <ul class="header__menu">
          {list.map((item, i) => (
            <li>
              <HeaderTopMenu
                href={item.href}
                name={item.name}
                isActive={i === activeIndex}
                onClick={() => {
                  setActiveIndex(i); // 클릭 시 활성화 상태 변경
                }}
              />
            </li>
          ))}
        </ul>
      </nav>
      <button
        id="menu_toggle"
        class="header__toggle"
        aria-label="navigation menu toggle"
      >
        <i class="fa-solid fa-bars"></i>
      </button>
    </>
  );
}
