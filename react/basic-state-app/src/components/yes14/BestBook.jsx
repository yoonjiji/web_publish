import React from "react";
import BestBookButton from "./BestBookButton.jsx";

export default function BestBook() {
  const list = [
    { img: "https://image.yes24.com/goods/13137546/L" },
    { img: "https://image.yes24.com/goods/108422348/L" },
    { img: "https://image.yes24.com/goods/103495056/L" },
  ];
  return (
    <>
      {list.map((item) => (
        <div style={{ display: "flex" }}>
          <img src={item.img} width="100px" />
          <BestBookButton />
        </div>
      ))}
    </>
  );
}
