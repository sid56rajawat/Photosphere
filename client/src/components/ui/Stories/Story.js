import React from "react";
import "./Story.css"

export default function Story({ username, profilePicture, storyImage }) {
  return (
    <div className="story">
      <img src={profilePicture} />
      <p>{username}</p>
    </div>
  );
}
