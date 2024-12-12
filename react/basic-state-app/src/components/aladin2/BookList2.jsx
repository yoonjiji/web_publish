import React, { useEffect, useState } from "react";
import Book2 from "./Book2.jsx";

export default function BookList2() {
  const [books, setBooks] = useState([]);
  const [type, setType] = useState("");
  useEffect(() => {
    fetch("/data/aladin.json")
      .then((data) => data.json())
      .then((jsonData) => setBooks(jsonData.books))
      .catch((error) => console.log(error));
  }, []);

  const handleClick = (event) => {
    console.log(event.target.value);
  };

  return (
    <>
      <div>
        <input type="radio" name="type" value="total" onClick={handleClick} />
        전체
        <input
          type="radio"
          name="type"
          value="domestic"
          onClick={handleClick}
        />
        국내
        <input
          type="radio"
          name="type"
          value="overseas"
          onClick={handleClick}
        />
        국외
      </div>
      <ul style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
        {books.map((book) => (
          <li style={{ listStyle: "none" }}>
            <Book2 img={book.img} title={book.title} />
          </li>
        ))}
      </ul>
    </>
  );
}
