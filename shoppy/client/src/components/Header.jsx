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
          <Link to="/cart">My Cart</Link>
          <Link to="/login">
            <button type="button">Login</button>
          </Link>
          <Link to="/signup">
            <button type="button">Sign Up</button>
          </Link>
        </nav>
      </div>
    </div>
  );
}
