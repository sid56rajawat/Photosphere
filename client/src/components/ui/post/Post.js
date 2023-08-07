import React from 'react';
import Header from './Header/Header';
import PostPhoto from './Postphoto/Postphoto';
import Footer from './Footer/Footer';
import "./Post.css";

export default function Post() {
  return (<div className='post'>
    <Header />
    <PostPhoto />
    <Footer />
  </div>
  );
}


