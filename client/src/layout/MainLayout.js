import React from "react";
import Navbar from "../components/ui/Navbar";
import "../assets/css/MainLayout.css"

function mainLayout({ children }) {
  return (
    <div className="main-page">
      <Navbar />
      <div>{children}</div>
    </div>
  );
}

export default mainLayout;
