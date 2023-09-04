import React from "react";
import GridPost from "./GridPost";
import "./explore.css";
import MainLayout from "../../layout/MainLayout";

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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyhRKJwl6X1ulIvt2L7l9mMlmYMlYryrW69g&usqp=CAU",
      likes: 100,
      comments: 10,
      postID: "1",
    },
    {
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK1TV4NCGI6vvnaR4wJywe5bHmjQQ6YAcFzg&usqp=CAU",
      likes: 100,
      comments: 10,
      postID: "1",
    },
    {
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmng9ZCoXK_hF2JH0ihTtr5Eze5wZgQEDv2g&usqp=CAU",
      likes: 100,
      comments: 10,
      postID: "1",
    },
    {
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRichY7qLJA8oRXQ_IqHQgTl5vQ4POQIrnTyA&usqp=CAU",
      likes: 100,
      comments: 10,
      postID: "1",
    },
    {
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCaN9aNaRgIUwHPcDFkf8HJ2UUtsLfNkWK2Q&usqp=CAU",
      likes: 100,
      comments: 10,
      postID: "1",
    },
    {
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6sVoxvPTptWcIPJbSrFuDXjmwb0__bjB9vQ&usqp=CAU",
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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTev5qLMyzIuSXpO8UbCKW1BtYmCNvxZ4x8w&usqp=CAU",
      likes: 100,
      comments: 10,
      postID: "1",
    },
  ];

  return (
    <MainLayout>
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
    </MainLayout>
  );
}
