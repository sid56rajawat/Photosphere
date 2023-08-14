import React from "react";
import Post from "../../components/ui/post/Post";
import Stories from "../../components/ui/Stories/Stories.js";
import MainLayout from "../../layout/MainLayout";
import SuggestionBox from "../../components/ui/SuggestBox/SuggestionBox";
import "./Home.css";

export default function Home() {
  return (
    <MainLayout>
      <div className="home">
        <div className="home-browse">
          <Stories />
          <div className="home-post">
            <Post
              postID="1"
              username="bhoi.sallu"
              location="FarmHouse, Bandra"
              profilePhoto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgM1BFmsdG9YJSH7O-jWEl8MmGffe5PDppbw&usqp=CAU"
              photoURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgM1BFmsdG9YJSH7O-jWEl8MmGffe5PDppbw&usqp=CAU"
              likes="1234"
              caption="Tu ladki ke peeche bhagega, ladki paise ke peeche bhagegi; tu paise ke peeche bhagega, ladki tere peeche bhagegi"
            />
            <Post
              postID="2"
              username="bhoi.sallu"
              location="Mumbai"
              profilePhoto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgM1BFmsdG9YJSH7O-jWEl8MmGffe5PDppbw&usqp=CAU"
              photoURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN-IfVosVLEMM1bz0bjMr_Bh9wSXMHjOY4sg&usqp=CAU"
              likes="1234"
              caption="Tu ladki ke peeche bhagega, ladki paise ke peeche bhagegi; tu paise ke peeche bhagega, ladki tere peeche bhagegi"
            />
            <Post
              postID="3"
              username="bhoi.sallu"
              location="Abhishek k ghar"
              profilePhoto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgM1BFmsdG9YJSH7O-jWEl8MmGffe5PDppbw&usqp=CAU"
              photoURL="https://static.toiimg.com/photo/63880519.cms"
              likes="1234"
              caption="Tu ladki ke peeche bhagega, ladki paise ke peeche bhagegi; tu paise ke peeche bhagega, ladki tere peeche bhagegi"
            />
          </div>
        </div>
        <div className="suggest-box">
          <SuggestionBox />
        </div>
      </div>
    </MainLayout>
  );
}
