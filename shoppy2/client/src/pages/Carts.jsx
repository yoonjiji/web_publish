import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Carts() {
  // localStorage에 담긴 cartfItems의 배열객체 출력
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  // pids 배열 생성 cartItems의 pid값을 pids 배열에 추가
  const pids = cartItems && cartItems.map((item) => item.pid); // [5, 11]
  console.log("pid-->", pids);

  //axios를 이용하여 DB연동
  useEffect(() => {
    if (pids.length > 0) {
      axios
        .post("http://localhost:9000/product/cartItems", { pids: pids }) // json으로 넘어갈거기 때문에 객체로
        .then((res) => {
          console.log("Carts res.data--->", res.data);

          // **수정: res.data를 pid를 key로 하는 객체로 변환**
          const productMap = {};
          res.data.forEach((product) => {
            productMap[product.pid] = product;
          });

          console.log("Product Map-->", productMap);

          // **수정: cartItems를 productMap을 이용해 업데이트**
          const updatedCartItems = cartItems.map((item) => ({
            ...item,
            ...productMap[item.pid], // productMap에서 해당 pid 정보를 병합
          }));

          setCartItems(updatedCartItems);
          console.log("Updated cartItems--->", updatedCartItems);
        })
        .catch((error) => console.log(error));
    } // if
  }, []);

  return (
    <div className="content">
      <h1>MyCart!!</h1>
      <table border="1">
        <tr>
          <th>Pid</th>
          <th>Pname</th>
          <th>Size</th>
          <th>Qty</th>
          <th>Description</th>
          <th>Image</th>
        </tr>
        {cartItems &&
          cartItems.map((item) => (
            <tr>
              <td>{item.pid}</td>
              <td>{item.pname}</td>
              <td>{item.size}</td>
              <td>{item.qty}</td>
              <td>{item.description}</td>
              <td>
                <img src={item.image} alt="" style={{ width: "100px" }} />
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
}
