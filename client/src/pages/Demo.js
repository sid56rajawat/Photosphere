import React from "react";
import "../assets/css/Navbar.css"
import Navbar from "../components/ui/Navbar";
import Home from "./home/Home";

export default function Demo() {
  return (
    <div className="demo">
      <Navbar/>
      <Home />

    </div>
  );
};
