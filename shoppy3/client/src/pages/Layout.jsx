import React from "react";
import Header from "../components/Header.jsx";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer.jsx";

export default function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
