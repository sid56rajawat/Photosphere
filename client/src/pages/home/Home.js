import React from "react";
import Post from "../../components/ui/post/Post";
import Stories from "../../components/ui/Stories/Stories.js";

export default function Home(){
    return(
        <div classname = "home">
          <div>
            <Stories />
          </div>
            <div className = "home-post"> 
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}
     
