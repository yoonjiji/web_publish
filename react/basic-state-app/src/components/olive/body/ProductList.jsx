import React, { useEffect, useState } from "react";
import Product from "./Product.jsx";

export default function ProductList({ cart }) {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    fetch("/data/olive.json")
      .then((data) => data.json())
      .then((jsonData) => setProductList(jsonData))
      .catch((error) => console.log(error));
  }, []);

  //   console.log(`productList --> ${productList}`);
  const totalCart = (id) => {
    // alert(`productList -- >${id}`);
    cart(id); //AppOlive의 handleCartApp 함수 호출
  };

  return (
    <ul className="product-list-container">
      {productList &&
        productList.map((item) => (
          <li>
            <Product
              totalCart={totalCart}
              img={item.img}
              title={item.title}
              descripttion={item.descripttion}
              price={item.price}
              sprice={item.sprice}
              isSale={item.isSale}
              isCopon={item.isCopon}
              isToday={item.isToday}
            />
          </li>
        ))}
    </ul>
  );
}
