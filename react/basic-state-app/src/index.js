import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppPortfolio from "./components/portfolio/AppPortfolio.jsx";
// import AppOlive from "./components/olive/AppOlive.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppPortfolio />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
