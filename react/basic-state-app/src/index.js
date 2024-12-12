import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppAladin2 from "./components/aladin2/AppAladin2.jsx";
// import App from "./App";

// import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // StricMode는 미리 예행으로 한 번 실행 -> 실제로 실행
  <React.StrictMode>
    <AppAladin2 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
