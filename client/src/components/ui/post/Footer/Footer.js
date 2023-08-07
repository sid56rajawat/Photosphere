import React from "react";
import Like from "./Like";
import Comment from "./Comment";
import Share from "./Share";
import Save from "./Save";

export default function Footer() {
  return (
    <div className="footer">
      <Like />
      <Comment />
      <Share />
      <Save />
    </div>
  );
}
