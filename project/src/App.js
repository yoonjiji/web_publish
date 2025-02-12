import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.js";
import "./styles/common.css";
import "./styles/style.css";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
// import signup from "./pages/signup.jsx";
import Cart from "./pages/Cart.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
