import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Home.jsx";
import CgvLoginForm from "../form/CgvLoginForm.jsx";
import Signup from "../form/Signup.jsx";
import About from "./About.jsx";
import Support from "./Support.jsx";
import AppBestSeller from "../yes14/AppBestSeller.jsx";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<CgvLoginForm />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="/bestseller" element={<AppBestSeller />} />
        </Route>
        <Route />
      </Routes>
    </BrowserRouter>
  );
}
