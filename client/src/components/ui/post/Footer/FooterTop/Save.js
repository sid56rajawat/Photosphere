import React, { useState } from "react";
import "./icon.css";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

export default function Save() {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmarkClick = () => {
    setIsBookmarked(prevState => !prevState);
  };

  return (
    <div className="icon" onClick={handleBookmarkClick}>
      {isBookmarked ? (
        <BookmarkIcon /> 
      ) : (
        <BookmarkBorderIcon /> 
      )}
    </div>
  );
}
