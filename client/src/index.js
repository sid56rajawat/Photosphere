import React from "react";
import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/index.css";
import Logo from "./components/ui/Logo";
// import MyApp from "./App";
import reportWebVitals from "./reportWebVitals";
// import Register from "./pages/register/register";
import Login from "./pages/login/login";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Logo name="Photosphere" />
    <Login/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
