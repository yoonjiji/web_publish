import React, { useEffect, useState } from "react";
import Book2 from "../aladin/Book.jsx";

export default function BookList2() {
  const [books, setBooks] = useState([]);
  const [type, setType] = useState("total");
  useEffect(() => {
    fetch("/data/aladin.json")
      .then((data) => data.json())
      .then((jsonData) => {
        if (type === "total") {
          setBooks(jsonData.books);
        } else {
          const filterBooks = jsonData.books.filter(
            (book) => book.type === type
          );
          setBooks(filterBooks);
        }
      })
      .catch((error) => console.log(error));
  }, [type]);

  // console.log(`books -->${books}`);

  const handleClick = (event) => {
    setType(event.target.value);
    // console.log(event.target.value);
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
        {books &&
          books.map((book) => (
            <li style={{ listStyle: "none" }}>
              <Book2 img={book.img} title={book.title} />
            </li>
          ))}
      </ul>
    </>
  );
}
