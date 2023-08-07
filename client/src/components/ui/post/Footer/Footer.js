import React from "react";
import FooterTop from "./FooterTop/FooterTop.js";
import FooterBottom from "./FooterBootom/FooterBottom.js";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <FooterTop />
      <FooterBottom />
    </div>
  );
}
