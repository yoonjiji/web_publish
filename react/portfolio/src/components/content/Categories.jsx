import React, { useState } from "react";
import Category from "./Category.jsx";

export default function Categories() {
  const [selected, setSelected] = useState("All");

  const handleclick = (name) => {
    console.log("menuName--->", name);
    setSelected(name);
  };

  const categoryList = [
    {
      name: "All",
      count: "8",
    },
    {
      name: "Front-end",
      count: "4",
    },
    {
      name: "Back-end",
      count: "2",
    },
    {
      name: "Mobile",
      count: "2",
    },
  ];

  return (
    <ul className="categories">
      {categoryList.map((item) => (
        <li>
          <Category
            name={item.name}
            count={item.count}
            style={
              item.name === selected
                ? "category category--selected"
                : "category"
            }
            click={handleclick}
          />
        </li>
      ))}
    </ul>
  );
}
