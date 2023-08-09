import React, { useRef } from "react";
import Story from "./Story";
import "./stories.css";

export default function Stories() {
  const storyBoxRef = useRef(null);

  const scroll = (scrollOffset) => {
    if (storyBoxRef.current) {
      storyBoxRef.current.scrollLeft += scrollOffset;
    }
  };

  const usersData = [
    {
      id: 1,
      username: "Katrina Kaif",
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiBl6jV4tCiWgWJ53FLQ65vDM0vDm2xsQHgg&usqp=CAU",
    },
    {
      id: 1,
      username: "DIsha Patni",
      profilePicture:
        "https://filmfare.wwmindia.com/content/2020/sep/dishapatani41600924418.jpg",
    },
    {
      id: 1,
      username: "Katrina Kaif",
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiBl6jV4tCiWgWJ53FLQ65vDM0vDm2xsQHgg&usqp=CAU",
    },
    {
      id: 1,
      username: "DIsha Patni",
      profilePicture:
        "https://filmfare.wwmindia.com/content/2020/sep/dishapatani41600924418.jpg",
    },
    {
      id: 1,
      username: "Katrina Kaif",
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiBl6jV4tCiWgWJ53FLQ65vDM0vDm2xsQHgg&usqp=CAU",
    },
    {
      id: 1,
      username: "DIsha Patni",
      profilePicture:
        "https://filmfare.wwmindia.com/content/2020/sep/dishapatani41600924418.jpg",
    },
    {
      id: 1,
      username: "Katrina Kaif",
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiBl6jV4tCiWgWJ53FLQ65vDM0vDm2xsQHgg&usqp=CAU",
    },
    {
      id: 1,
      username: "DIsha Patni",
      profilePicture:
        "https://filmfare.wwmindia.com/content/2020/sep/dishapatani41600924418.jpg",
    },
    {
      id: 1,
      username: "Katrina Kaif",
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiBl6jV4tCiWgWJ53FLQ65vDM0vDm2xsQHgg&usqp=CAU",
    },
    {
      id: 1,
      username: "DIsha Patni",
      profilePicture:
        "https://filmfare.wwmindia.com/content/2020/sep/dishapatani41600924418.jpg",
    },
    {
      id: 1,
      username: "Katrina Kaif",
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiBl6jV4tCiWgWJ53FLQ65vDM0vDm2xsQHgg&usqp=CAU",
    },
    {
      id: 1,
      username: "DIsha Patni",
      profilePicture:
        "https://filmfare.wwmindia.com/content/2020/sep/dishapatani41600924418.jpg",
    },
    {
      id: 1,
      username: "Katrina Kaif",
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiBl6jV4tCiWgWJ53FLQ65vDM0vDm2xsQHgg&usqp=CAU",
    },
    {
      id: 1,
      username: "DIsha Patni",
      profilePicture:
        "https://filmfare.wwmindia.com/content/2020/sep/dishapatani41600924418.jpg",
    },
    {
      id: 1,
      username: "Katrina Kaif",
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiBl6jV4tCiWgWJ53FLQ65vDM0vDm2xsQHgg&usqp=CAU",
    },
    {
      id: 1,
      username: "DIsha Patni",
      profilePicture:
        "https://filmfare.wwmindia.com/content/2020/sep/dishapatani41600924418.jpg",
    },
  ];

  return (
    <div className="stories">
      <div className="story-box" ref={storyBoxRef}>
        {usersData.map((user) => (
          <Story
            key={user.id}
            username={user.username}
            profilePicture={user.profilePicture}
          />
        ))}
      </div>
      <div className="scroll-button-container">
        <button
          className="scroll-button scroll-button-left"
          onClick={() => scroll(-200)}
        >
          ‹
        </button>
        <button
          className="scroll-button scroll-button-right"
          onClick={() => scroll(200)}
        >
          ›
        </button>
      </div>
    </div>
  );
}
