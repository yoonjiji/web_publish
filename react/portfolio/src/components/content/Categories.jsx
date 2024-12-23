import React from "react";
import Category from "./Category.jsx";

export default function Categories() {
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
          <Category name={item.name} count={item.count} />
        </li>
      ))}
    </ul>
  );
}
