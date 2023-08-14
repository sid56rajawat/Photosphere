import React from "react";
import GridPost from "./gridPost";

export default function Explore() {
  const posts = [
    {
      imageSrc:
        "https://i.pinimg.com/originals/40/b1/8b/40b18bf3c652ac124fc9e4134a129499.jpg",
      likes: 100,
      comments: 10,
      postID: "1",
    },
    {
      imageSrc:
        "https://i.pinimg.com/originals/40/b1/8b/40b18bf3c652ac124fc9e4134a129499.jpg",
      likes: 100,
      comments: 10,
      postID: "1",
    },
    {
      imageSrc:
        "https://i.pinimg.com/originals/40/b1/8b/40b18bf3c652ac124fc9e4134a129499.jpg",
      likes: 100,
      comments: 10,
      postID: "1",
    },
    {
      imageSrc:
        "https://i.pinimg.com/originals/40/b1/8b/40b18bf3c652ac124fc9e4134a129499.jpg",
      likes: 100,
      comments: 10,
      postID: "1",
    },
    {
      imageSrc:
        "https://i.pinimg.com/originals/40/b1/8b/40b18bf3c652ac124fc9e4134a129499.jpg",
      likes: 100,
      comments: 10,
      postID: "1",
    },
    {
      imageSrc:
        "https://i.pinimg.com/originals/40/b1/8b/40b18bf3c652ac124fc9e4134a129499.jpg",
      likes: 100,
      comments: 10,
      postID: "1",
    },
    {
      imageSrc:
        "https://i.pinimg.com/originals/40/b1/8b/40b18bf3c652ac124fc9e4134a129499.jpg",
      likes: 100,
      comments: 10,
      postID: "1",
    },
    {
      imageSrc:
        "https://i.pinimg.com/originals/40/b1/8b/40b18bf3c652ac124fc9e4134a129499.jpg",
      likes: 100,
      comments: 10,
      postID: "1",
    },
    {
      imageSrc:
        "https://i.pinimg.com/originals/40/b1/8b/40b18bf3c652ac124fc9e4134a129499.jpg",
      likes: 100,
      comments: 10,
      postID: "1",
    },
    {
      imageSrc:
        "https://i.pinimg.com/originals/40/b1/8b/40b18bf3c652ac124fc9e4134a129499.jpg",
      likes: 100,
      comments: 10,
      postID: "1",
    },
    {
      imageSrc:
        "https://i.pinimg.com/originals/40/b1/8b/40b18bf3c652ac124fc9e4134a129499.jpg",
      likes: 100,
      comments: 10,
      postID: "1",
    },
    {
      imageSrc:
        "https://i.pinimg.com/originals/40/b1/8b/40b18bf3c652ac124fc9e4134a129499.jpg",
      likes: 100,
      comments: 10,
      postID: "1",
    },
    {
      imageSrc:
        "https://i.pinimg.com/originals/40/b1/8b/40b18bf3c652ac124fc9e4134a129499.jpg",
      likes: 100,
      comments: 10,
      postID: "1",
    },
    {
      imageSrc:
        "https://i.pinimg.com/originals/40/b1/8b/40b18bf3c652ac124fc9e4134a129499.jpg",
      likes: 100,
      comments: 10,
      postID: "1",
    },
    {
      imageSrc:
        "https://i.pinimg.com/originals/40/b1/8b/40b18bf3c652ac124fc9e4134a129499.jpg",
      likes: 100,
      comments: 10,
      postID: "1",
    },
    {
      imageSrc:
        "https://i.pinimg.com/originals/40/b1/8b/40b18bf3c652ac124fc9e4134a129499.jpg",
      likes: 100,
      comments: 10,
      postID: "1",
    },
    {
      imageSrc:
        "https://i.pinimg.com/originals/40/b1/8b/40b18bf3c652ac124fc9e4134a129499.jpg",
      likes: 100,
      comments: 10,
      postID: "1",
    },
    {
      imageSrc:
        "https://i.pinimg.com/originals/40/b1/8b/40b18bf3c652ac124fc9e4134a129499.jpg",
      likes: 100,
      comments: 10,
      postID: "1",
    },
    {
      imageSrc:
        "https://i.pinimg.com/originals/40/b1/8b/40b18bf3c652ac124fc9e4134a129499.jpg",
      likes: 100,
      comments: 10,
      postID: "1",
    },
    {
      imageSrc:
        "https://i.pinimg.com/originals/40/b1/8b/40b18bf3c652ac124fc9e4134a129499.jpg",
      likes: 100,
      comments: 10,
      postID: "1",
    },
    {
      imageSrc:
        "https://i.pinimg.com/originals/40/b1/8b/40b18bf3c652ac124fc9e4134a129499.jpg",
      likes: 100,
      comments: 10,
      postID: "1",
    },
    {
      imageSrc:
        "https://i.pinimg.com/originals/40/b1/8b/40b18bf3c652ac124fc9e4134a129499.jpg",
      likes: 100,
      comments: 10,
      postID: "1",
    },
    {
      imageSrc:
        "https://i.pinimg.com/originals/40/b1/8b/40b18bf3c652ac124fc9e4134a129499.jpg",
      likes: 100,
      comments: 10,
      postID: "1",
    },
    {
      imageSrc:
        "https://i.pinimg.com/originals/40/b1/8b/40b18bf3c652ac124fc9e4134a129499.jpg",
      likes: 100,
      comments: 10,
      postID: "1",
    },
    {
      imageSrc:
        "https://i.pinimg.com/originals/40/b1/8b/40b18bf3c652ac124fc9e4134a129499.jpg",
      likes: 100,
      comments: 10,
      postID: "1",
    },
  ];

  return (
    <div className="explore-window">
      <div className="grid-container">
        {posts.map((post, index) => (
          <GridPost
            key={index}
            imageSrc={post.imageSrc}
            likes={post.likes}
            comments={post.comments}
            postID={post.postID}
          />
        ))}
      </div>
    </div>
  );
}
