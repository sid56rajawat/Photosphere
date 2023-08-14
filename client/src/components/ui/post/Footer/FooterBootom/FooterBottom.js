import React from "react";
import Caption from "./Caption";
import NoOfLikes from "./NoofLikes";

export default function FooterBottom(props) {
  return (
    <div className="footer-bottom">
      <NoOfLikes likes={props.likes} />
      <Caption username={props.username} caption={props.caption} />
    </div>
  );
}
