import React from "react";
import FooterTop from "./FooterTop/FooterTop.js";
import FooterBottom from "./FooterBootom/FooterBottom.js";

export default function Footer(props) {
  return (
    <div className="footer">
      <FooterTop profilePhoto={props.profilePhoto} />
      <FooterBottom
        likes={props.likes}
        username={props.username}
        caption={props.caption}
      />
    </div>
  );
}
