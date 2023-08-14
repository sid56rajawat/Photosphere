import React from 'react'
import "./Story.css"

export default function HighlightStory({ name, profilePicture, storyImage }) {
  return (
    <div className="story">
      <img src={profilePicture} />
      <p>{name}</p>
    </div>
  );
}