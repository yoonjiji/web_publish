import React from "react";

export default function Categories({ title, count }) {
  const handleClick = (event) => {
    console.log(event.target);
  };
  return (
    <li>
      <button type="button" className="category" onClick={handleClick}>
        {title}
        <span className="category__count">{count}</span>
      </button>
    </li>
  );
}
