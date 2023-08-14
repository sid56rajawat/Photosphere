import React from "react";
import "./noOflikes.css"

export default function NoOfLikes(props) {
  return (
    <div className="no-of-likes">
      {props.likes} Likes
    </div>
  );
}
