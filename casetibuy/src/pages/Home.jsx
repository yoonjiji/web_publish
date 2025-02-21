import React from "react";
import ProductList from "../components/ProductList.jsx";
import Slide from "../components/Slide.jsx";

export default function Home() {
  return (
    <div className="bg-bg">
      <div className="content product-container ">
        <h2 className="text-[36px] font-bold py-8">Featured Collection</h2>
        <ProductList />
      </div>

      <div className="content product-container">
        <h2 className="text-[36px] font-bold py-8">The Essentials</h2>
        <Slide id="slide1" />
      </div>
      <div className="content product-container">
        <h2 className="text-[36px] font-bold py-8">The Essentials</h2>
        <Slide id="slide2" />
      </div>
      <div className="content product-container">
        <h2 className="text-[36px] font-bold py-8">The Essentials</h2>
        <Slide id="slide3" />
      </div>
      <div className="content product-container">
        <h2 className="text-[36px] font-bold py-8">The Essentials</h2>
        <Slide id="slide4" />
      </div>
    </div>
  );
}
