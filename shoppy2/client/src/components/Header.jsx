import React from "react";
import { Link } from "react-router-dom";
import { RiShoppingBag3Line } from "react-icons/ri";

export default function Header() {
  return (
    <div className="header-outer">
      <div className="header">
        <Link to="/" className="header-left">
          <RiShoppingBag3Line />
          <span>Shoppy Logo</span>
        </Link>
        <nav className="header-right">
          <Link to="/all">Products</Link>
          <Link to="/cart">MyCarts</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">SignUp</Link>
        </nav>
      </div>
    </div>
  );
}
