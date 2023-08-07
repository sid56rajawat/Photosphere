import React from "react";
import Post from "../../components/ui/post/Post";

export default function Home(){
    return(
        <div classname = "home">
            <div className = "card home-card">
                <h5>Vatsal</h5> 
                <Post />
                <Post />
            </div>
        </div>
    )
}
     
