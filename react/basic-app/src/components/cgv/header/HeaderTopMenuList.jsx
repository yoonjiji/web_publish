import { useEffect, useState } from "react";
import HeaderTopMenu from "./HeaderTopMenu.jsx";
import { fetchJSON } from "../js/commons.js";

export default function HeaderTopMenuList() {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetchJSON("/list/cgv_header.json")
      .then((result) => setList(result.topMenuList))
      .catch((error) => console.log(error));
  }, []);
  return (
    <nav>
      <ul>
        {list &&
          list.map((menu) => (
            <li>
              <HeaderTopMenu href={menu.href} src={menu.src} text={menu.text} />
            </li>
          ))}
      </ul>
    </nav>
  );
}
