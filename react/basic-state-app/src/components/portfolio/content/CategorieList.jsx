import React, { useEffect, useState } from "react";
import Categories from "./Categories.jsx";

export default function CategorieList() {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch("/data/portfolio.json")
      .then((data) => data.json())
      .then((jsonData) => {
        if (jsonData.categorieList.category !== "total") {
          setList(jsonData.categorieList);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <ul class="categories ">
      {list &&
        list.map((item) => (
          <li>
            <Categories title={item.title} count={item.count} />
          </li>
        ))}
    </ul>
  );
}
