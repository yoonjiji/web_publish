import React, { useEffect, useState } from "react";
import Product from "./Product.jsx";

export default function ProductList() {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch("/data/olive.json")
      .then((data) => data.json())
      .then((jsonData) => setList(jsonData))
      .catch((error) => console.log(error));
  }, []);
  return (
    <ul className="product-list-container">
      {list.map((item) => (
        <li>
          <Product
            img={item.img}
            title={item.title}
            descripttion={item.descripttion}
            price={item.price}
            sprice={item.sprice}
            isSale={item.isSale}
            isCupon={item.isCupon}
            isToday={item.isToday}
          />
        </li>
      ))}
    </ul>
  );
}
