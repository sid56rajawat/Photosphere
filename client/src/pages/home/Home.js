import React from "react";
import Post from "../../components/ui/post/Post";
import Stories from "../../components/ui/Stories/Stories.js";
import MainLayout from "../../layout/MainLayout";
import "./Home.css";

export default function Home() {
  return (
    <MainLayout>
      <div className="home">
        <div>
          <Stories/>
        </div>
        <div className="home-post">
          <Post
            postID="1"
            username="SalmanKhan"
            location="FarmHouse, Bandra"
            profilePhoto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgM1BFmsdG9YJSH7O-jWEl8MmGffe5PDppbw&usqp=CAU"
            photoURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgM1BFmsdG9YJSH7O-jWEl8MmGffe5PDppbw&usqp=CAU"
            likes="1234"
            caption="Tu ladki ke peeche bhagega, ladki paise ke peeche bhagegi; tu paise ke peeche bhagega, ladki tere peeche bhagegi"
          />
          <Post
            postID="1"
            username="SalmanKhan"
            location="FarmHouse, Bandra"
            profilePhoto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgM1BFmsdG9YJSH7O-jWEl8MmGffe5PDppbw&usqp=CAU"
            photoURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgM1BFmsdG9YJSH7O-jWEl8MmGffe5PDppbw&usqp=CAU"
            likes="1234"
            caption="Tu ladki ke peeche bhagega, ladki paise ke peeche bhagegi; tu paise ke peeche bhagega, ladki tere peeche bhagegi"
          />
          <Post
            postID="1"
            username="SalmanKhan"
            location="FarmHouse, Bandra"
            profilePhoto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgM1BFmsdG9YJSH7O-jWEl8MmGffe5PDppbw&usqp=CAU"
            photoURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgM1BFmsdG9YJSH7O-jWEl8MmGffe5PDppbw&usqp=CAU"
            likes="1234"
            caption="Tu ladki ke peeche bhagega, ladki paise ke peeche bhagegi; tu paise ke peeche bhagega, ladki tere peeche bhagegi"
          />
        </div>
      </div>
    </MainLayout>
  );
}
