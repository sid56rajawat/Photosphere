import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Post from "../../components/ui/post/Post";
import Stories from "../../components/ui/Stories/Stories.js";
import MainLayout from "../../layout/MainLayout";
import SuggestionBox from "../../components/ui/SuggestBox/SuggestionBox";
import "./Home.css";
import axios from "axios";

export default function Home() {
  const navigate = useNavigate();
  const [checkingToken, setCheckingToken] = useState(true);

  useEffect(() => {
    // Check if the user already has a valid token
    const accessToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("accessToken="));

    if (accessToken) {
      // Validate token with server
      axios
        .get("/validateToken", {
          headers: { Authorization: `Bearer ${accessToken.split("=")[1]}` },
        })
        .then((response) => {
          if (response.data.valid) {
            setCheckingToken(false);
          } else {
            console.log("token invalid");
            navigate("/login");
          }
        })
        .catch((error) => {
          console.error("Token validation error:", error);
          navigate("/login");
        });
    } else {
      console.log("No token found");
      navigate("/login");
    }
  }, [navigate]);

  if (checkingToken) {
    return <div>Validating token...</div>;
  }

  return (
    <MainLayout>
      <div className="home">
        <div className="home-browse">
          <Stories />
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
              postID="2"
              username="SalmanKhan"
              location="Mumbai"
              profilePhoto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgM1BFmsdG9YJSH7O-jWEl8MmGffe5PDppbw&usqp=CAU"
              photoURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN-IfVosVLEMM1bz0bjMr_Bh9wSXMHjOY4sg&usqp=CAU"
              likes="1234"
              caption="Tu ladki ke peeche bhagega, ladki paise ke peeche bhagegi; tu paise ke peeche bhagega, ladki tere peeche bhagegi"
            />
            <Post
              postID="3"
              username="SalmanKhan"
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
