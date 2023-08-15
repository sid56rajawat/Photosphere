import React from 'react'
import "./HighlightStory.css"

export default function HighlightStory({ username, profilePicture, storyImage }) {
  return (
    <div className="highlight">
      <img src={profilePicture} />
      <p>{username}</p>
    </div>
  );
}