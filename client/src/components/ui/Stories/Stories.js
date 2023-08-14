import React, { useRef } from "react";
import Story from "./Story";
import "./stories.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

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
      id: 2,
      username: "DIsha Patni",
      profilePicture:
        "https://filmfare.wwmindia.com/content/2020/sep/dishapatani41600924418.jpg",
    },
    {
      id: 3,
      username: "Katrina Kaif",
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiBl6jV4tCiWgWJ53FLQ65vDM0vDm2xsQHgg&usqp=CAU",
    },
    {
      id: 4,
      username: "DIsha Patni",
      profilePicture:
        "https://filmfare.wwmindia.com/content/2020/sep/dishapatani41600924418.jpg",
    },
    {
      id: 5,
      username: "Katrina Kaif",
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiBl6jV4tCiWgWJ53FLQ65vDM0vDm2xsQHgg&usqp=CAU",
    },
    {
      id: 6,
      username: "DIsha Patni",
      profilePicture:
        "https://filmfare.wwmindia.com/content/2020/sep/dishapatani41600924418.jpg",
    },
    {
      id: 7,
      username: "Katrina Kaif",
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiBl6jV4tCiWgWJ53FLQ65vDM0vDm2xsQHgg&usqp=CAU",
    },
    {
      id: 8,
      username: "DIsha Patni",
      profilePicture:
        "https://filmfare.wwmindia.com/content/2020/sep/dishapatani41600924418.jpg",
    },
    {
      id: 9,
      username: "Katrina Kaif",
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiBl6jV4tCiWgWJ53FLQ65vDM0vDm2xsQHgg&usqp=CAU",
    },
    {
      id: 10,
      username: "DIsha Patni",
      profilePicture:
        "https://filmfare.wwmindia.com/content/2020/sep/dishapatani41600924418.jpg",
    },
    {
      id: 11,
      username: "Katrina Kaif",
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiBl6jV4tCiWgWJ53FLQ65vDM0vDm2xsQHgg&usqp=CAU",
    },
    {
      id: 12,
      username: "DIsha Patni",
      profilePicture:
        "https://filmfare.wwmindia.com/content/2020/sep/dishapatani41600924418.jpg",
    },
    {
      id: 13,
      username: "Katrina Kaif",
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiBl6jV4tCiWgWJ53FLQ65vDM0vDm2xsQHgg&usqp=CAU",
    },
    {
      id: 14,
      username: "DIsha Patni",
      profilePicture:
        "https://filmfare.wwmindia.com/content/2020/sep/dishapatani41600924418.jpg",
    },
    {
      id: 15,
      username: "Katrina Kaif",
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiBl6jV4tCiWgWJ53FLQ65vDM0vDm2xsQHgg&usqp=CAU",
    },
    {
      id: 16,
      username: "DIsha Patni",
      profilePicture:
        "https://filmfare.wwmindia.com/content/2020/sep/dishapatani41600924418.jpg",
    },
  ];

  return (
    <div className="stories">
      <div>
        <KeyboardArrowLeftIcon
          className="scroll-button scroll-button-left"
          onClick={() => scroll(-380)}
        />
      </div>
      <div className="story-box" ref={storyBoxRef}>
        {usersData.map((user) => (
          <Story
            key={user.id}
            username={user.username}
            profilePicture={user.profilePicture}
          />
        ))}
      </div>
      <div>
        <KeyboardArrowRightIcon
          className="scroll-button scroll-button-right"
          onClick={() => scroll(380)}
        />
      </div>
    </div>
  );
}
