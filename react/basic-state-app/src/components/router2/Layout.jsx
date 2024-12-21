import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../router2/Header.jsx";
// import Footer from "../router2/Footer.jsx";

export default function Layout() {
  return (
    <div>
      <Header>
        <Link to="" style={{ padding: "10px" }}>
          Home
        </Link>
        <Link to="/airbnb" style={{ padding: "10px" }}>
          AirBnB
        </Link>
        <Link to="/aladin" style={{ padding: "10px" }}>
          Aladin
        </Link>
        <Link to="/avatar" style={{ padding: "10px" }}>
          Avatar
        </Link>
        <Link to="/olive" style={{ padding: "10px" }}>
          Olive
        </Link>
        <Link to="/yes24" style={{ padding: "10px" }}>
          Yes24
        </Link>
      </Header>
      <Outlet></Outlet>
      {/* <Footer></Footer> */}
    </div>
  );
}
