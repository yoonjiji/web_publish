import React from "react";
import ProductList from "../components/ProductList";

export default function Home() {
  return (
    <div className="content">
      <div className="banner">
        <h3>Shop with Us</h3>
        <p>Best Products, High Quality</p>
      </div>
      <a href="http://localhost:9000/test/%EA%B9%80%EC%B2%A0%EC%88%98">
        서버 테스트
      </a>
      <ProductList />
    </div>
  );
}
