import React, { useState } from "react";
import "./icon.css";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Like() {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(prevState => !prevState);
  };

  return (
    <div className="icon" onClick={handleLikeClick}>
      {isLiked ? (
        <FavoriteIcon style={{ color: "red"}} />
      ) : (
        <FavoriteBorderIcon/> 
      )}
    </div>
  );
}
