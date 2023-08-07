import React from "react";
import Caption from "./Caption";
import NoOfLikes from "./NoofLikes";

export default function FooterBottom() {
    return (
      <div className="footer-bottom">
        <NoOfLikes />
        <Caption />  
      </div>
    );
  }
  