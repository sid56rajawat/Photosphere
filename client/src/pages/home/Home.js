import React from "react";
import Post from "../../components/ui/post/Post";
import Stories from "../../components/ui/Stories/Stories.js";
import MainLayout from "../../layout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div classname="home">
        <div>
          <Stories />
        </div>
        <div className="home-post">
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </MainLayout>
  );
}
