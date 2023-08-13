import React from "react";
import Navbar from "../components/ui/Navbar";

function mainLayout({ children }) {
  return (
    <div className="main-page">
      <Navbar />
      {children}
    </div>
  );
}

export default mainLayout;
