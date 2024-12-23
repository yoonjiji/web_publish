import React from "react";

export default function Categories({ title, count, category, click }) {
  const handleClickMenu = () => {
    console.log(`Categories --> ${category}`);
    click(category);
  };
  return (
    <li>
      <button type="button" className="category" onClick={handleClickMenu}>
        {title}
        <span className="category__count">{count}</span>
      </button>
    </li>
  );
}
