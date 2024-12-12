import React, { useEffect, useState } from "react";
import Book from "./Book.jsx";

export default function BookList() {
  const [books, setBooks] = useState([]);
  const [category, setCategory] = useState([]);
  const [type, setType] = useState("total");
  const [selectCategory, setSelectCategory] = useState("");

  useEffect(() => {
    console.log(`selectCategory --> ${selectCategory}`);

    fetch("/data/aladin.json")
      .then((data) => data.json())
      .then((jsonData) => {
        // setBooks(jsonData)
        // 국내도서
        setCategory(jsonData.category);
        if (type === "total") {
          setBooks(jsonData.books);
        } else {
          const filterBooks = jsonData.books.filter(
            (book) => book.type === type
          );
          setBooks(filterBooks);
        }
        // 필터는 조건 1개면 if문 생략가능
      })
      .catch((error) => console.log(error));
  }, [type, selectCategory]);
  // useEffect [] 빈칸만 넣으면 한 번 만 실행

  const handleClick = (event) => {
    setType(event.target.value);
  };

  const handleChageCategory = (event) => {
    setSelectCategory(event.target.value);
  };

  return (
    <>
      <div>
        <input type="radio" name="type" value="total" onClick={handleClick} />
        <span>전체</span>
        <input
          type="radio"
          name="type"
          value="domestic"
          onClick={handleClick}
        />
        <span>국내</span>
        <input
          type="radio"
          name="type"
          value="overseas"
          onClick={handleClick}
        />
        <span>국외</span>

        <select onChange={handleChageCategory}>
          <option value="선택">선택</option>
          {category &&
            category.map((item) => (
              <option value={item.type}>{item.name}</option>
            ))}
        </select>
      </div>
      <ul style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
        {books &&
          books.map((book) => (
            <li style={{ listStyleType: "none" }}>
              <Book img={book.img} title={book.title} />
            </li>
          ))}
      </ul>
    </>
  );
}
