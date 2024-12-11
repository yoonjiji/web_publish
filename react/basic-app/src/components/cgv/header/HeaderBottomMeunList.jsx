import { useEffect, useState } from "react";
import HeaderBottomMenu from "./HeaderBottomMenu.jsx";
import { fetchJSON } from "../js/commons.js";

export default function HeaderBottomMeunList() {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetchJSON("/list/cgv_header.json")
      .then((result) => setList(result.bottomMenuList))
      .catch((error) => console.log(error));
  }, []);
  return (
    <nav>
      <ul>
        {list &&
          list.map((menu) => (
            <li>
              <HeaderBottomMenu name={menu.name} />
            </li>
          ))}
      </ul>
    </nav>
  );
}
