import React from "react";
import Categories from "./Categories.jsx";

export default function CategorieList({ list, click }) {
  const handleMenuClickReq = (category) => {
    console.log(`CategoryieList -->${category}`);
    click(category);
  };

  return (
    <ul class="categories ">
      {list &&
        list.map((item) => (
          <li>
            <Categories
              title={item.title}
              // count={item.count}
              category={item.category}
              click={handleMenuClickReq}
            />
          </li>
        ))}
    </ul>
  );
}
