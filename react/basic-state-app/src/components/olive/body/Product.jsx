import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Product(props) {
  const handleClick = () => {
    props.totalCart(props.id); // ProductList 컴포넌트 함수 호출
  };
  return (
    <div className="Product-conteiner">
      <div>
        <img src={props.img} alt="Product img" />
        <FontAwesomeIcon
          icon={faCartShopping}
          className="cart"
          onClick={() => {
            handleClick();
          }}
        />
      </div>
      <p className="title">{props.title}</p>
      <div className="descripttion">{props.descripttion}</div>
      <div className="price">
        <span className="sprice">{props.price}</span>
        <span className="fprice">{props.sprice}</span>
      </div>
      <div className="tags">
        {props.isSale && <span className="t1">세일</span>}
        {props.isCupon && <span className="t2">쿠폰</span>}
        {props.isToday && <span className="t3">오늘드림</span>}
      </div>
    </div>
  );
}
