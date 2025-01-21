import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";

export default function Header() {
  return (
    <div className="header-outer">
      <div className="header">
        <Link to="/" className="header-left">
          <FiShoppingBag />
          Shoppy
        </Link>
        <nav className="header-right">
          <Link to="/all">Product</Link>
          <Link to="/carts">MyCarts</Link>
          <Link to="/login">
            <button type="button">Login</button>
          </Link>
          <Link to="/signup">
            <button type="button">SignUp</button>
          </Link>
        </nav>
      </div>
    </div>
  );
}
