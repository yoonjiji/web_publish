import React, { useEffect, useState } from "react";
import BestBookContent from "./BestBookContent";
import BestBookAvatar from "./BestBookAvatar";
import BestBookButton from "./BestBookButton";

export default function BestBook({ list }) {
  return (
    <>
      {list &&
        list.map((book, i) => (
          <div style={{ display: "flex", marginBottom: "20px" }}>
            <BestBookAvatar rank={i + 1} img={book.img} />
            <BestBookContent
              suggest={book.suggest}
              today={book.suggest}
              type={book.type}
              title={book.title}
              author={book.author}
              company={book.company}
              pubDate={book.pubDate}
              price={book.price}
              perSele={book.perSele}
              point={book.point}
            />
            <BestBookButton />
          </div>
        ))}
    </>
  );
}
