import React, { useEffect, useState } from "react";
import BestBook from "./BestBook.jsx";
import MenuList from "./MenuList.jsx";
import "./BestBook.css";
import "./Menu.css";

export default function AppBestSeller() {
  const [menuList, setMenuList] = useState([]);
  const [originalBookList, setOriginalBookList] = useState([]); // 원본 데이터 상태
  const [bookList, setBookList] = useState([]);
  const [category, setCategory] = useState("total");

  useEffect(() => {
    fetch("/data/yes24.json")
      .then((data) => data.json())
      .then((jsonData) => {
        setMenuList(jsonData.menuList);
        setOriginalBookList(jsonData.bookList); // 원본 데이터 저장
        setBookList(jsonData.bookList); // 초기 책 목록 설정
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (category === "total") {
      setBookList(originalBookList);
    } else {
      const filteredBooks = originalBookList.filter(
        (book) => book.category === category
      );
      setBookList(filteredBooks);
    }
  }, [category, originalBookList]); // category 또는 originalBookList가 변경될 때 필터링 적용

  const handleMenuClickReq2 = (category) => {
    console.log(`AppBestSeller --> ${category}`);
    setCategory(category);
  };

  console.log(`category --> ${category}`);

  return (
    <div className="container">
      <MenuList list={menuList} click={handleMenuClickReq2} />
      <BestBook list={bookList} />
    </div>
  );
}
