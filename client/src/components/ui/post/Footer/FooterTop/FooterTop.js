import React from "react";
import Like from "./Like";
import Comment from "./Comment";
import Share from "./Share";
import Save from "./Save";
import "./footerTop.css";

export default function FooterTop() {
  return (
    <div className="footerTop">
      <div className="left-icons">
        <Like />
        <Comment />
        <Share />
      </div>
      <div className="right-icons">
        <Save />
      </div>
    </div>
  );
}
