import React from "react";
import Header from "../post/Header/Header";

export default function Suggestion({username,location,profilePicture}){
    return(
        <div className="suggestion">
        <Header
          username={username}
          location={location}
          profilePhoto={profilePicture}
        />
        <button className="Suggestion-follow">Follow</button>
      </div>
    );
}