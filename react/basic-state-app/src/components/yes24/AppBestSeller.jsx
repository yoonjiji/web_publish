import React, { useEffect, useState } from "react";
import BestBook from "./BestBook.jsx";
import MenuList from "./MenuList.jsx";
import "./BestBook.css";
import "./Menu.css";

export default function AppBestSeller() {
  const [menuList, setMenuList] = useState([]);
  const [bookList, setBookList] = useState([]);
  const [category, setCategory] = useState("total");

  useEffect(() => {
    fetch("/data/yes24.json")
      .then((data) => data.json())
      .then((jsonData) => {
        setMenuList(jsonData.menuList);
        if (category === "total") {
          setBookList(jsonData.bookList);
        } else {
          // category 값에 따라 필터링 처리 후 setBookList 저장
          const filterArray = jsonData.bookList.filter(
            (book) => book.category === category
          );
          setBookList(filterArray);

          // [{book},{book}]
        }
      })
      .catch((error) => console.log(error));
  }, [category]);
  // 디펜던시에 값을 안 넣으면 한 번만, 값을 넣어주면 변경될 때마다 호출

  // AppBestSeller <-- MenuList <-- Menu
  const handleMenuClickReq2 = (category) => {
    console.log(`AppBestSeller -->${category}`);
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
