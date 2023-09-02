import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ModeCommentRoundedIcon from "@mui/icons-material/ModeCommentRounded";
import "./gridPost.css";

export default function GridPost({ imageSrc, likes, comments, postID }) {
  return (
    <div className="gallery-item" tabIndex="0">
      <img src={imageSrc} alt={`post-${postID}`} />
      <div className="gallery-item-info">
        <ul>
          <li className="gallery-item-likes">
            <FavoriteIcon className="fas fa-heart" aria-hidden="true" /> {likes}
          </li>
          <li className="gallery-item-comments">
            <ModeCommentRoundedIcon className="fas fa-heart" aria-hidden="true" />{" "}
            {comments}
          </li>
        </ul>
      </div>
    </div>
  );
}
