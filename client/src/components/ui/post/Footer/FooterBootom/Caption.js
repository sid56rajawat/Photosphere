import React from "react";
import "./caption.css";

export default function Caption(props) {
  return (
    <div className="caption">
      <div className="caption-user-name">{props.username}</div>
      {props.caption}
    </div>
  );
}
