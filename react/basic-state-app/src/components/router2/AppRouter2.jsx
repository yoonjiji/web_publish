import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../router2/Layout";
import Airbnb from "../airbnb/AppAirbnb.jsx";
import Aladin from "../aladin/AppAladin.jsx";
import Avatar from "../avatar/AppAvatar.jsx";
import Olive from "../olive/AppOlive.jsx";
import Yes24 from "../yes14/AppBestSeller.jsx";

export default function AppRouter2() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/airbnb" element={<Airbnb />} />
            <Route path="/aladin" element={<Aladin />} />
            <Route path="/avatar" element={<Avatar />} />
            <Route path="/olive" element={<Olive />} />
            <Route path="/yes24" element={<Yes24 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
