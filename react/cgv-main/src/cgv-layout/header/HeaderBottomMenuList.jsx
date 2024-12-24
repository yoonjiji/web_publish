import { useEffect, useState } from "react";
import HeaderBottomMenu from "./HeaderBottomMenu.jsx";
import { fetchJSON } from "../js/commons.js";

export default function HeaderBottomMenuList() {
  const [names, setNames] = useState([]);
  useEffect(() => {
    fetchJSON("/data/cgv_header.json")
      .then((result) => setNames(result.topMenuList))
      .catch((error) => console.log(error));

    //   fetch("/data/cgv_header.json")
    //     .then((data) => data.json())
    //     .then((jsonData) => setNames(jsonData.bottomMenuList))
    //     .catch((error) => console.log(error));
  }, []);

  return (
    <ul className="flex-container">
      {names &&
        names.map((item) => (
          <li>
            <HeaderBottomMenu name={item.name} />
          </li>
        ))}
    </ul>
  );
}
