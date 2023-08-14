import React from 'react';
import Header from './Header/Header';
import PostPhoto from './Postphoto/Postphoto';
import Footer from './Footer/Footer';
import "./post.css";

export default function Post(props) {
  const { postID, username, location, profilePhoto, photoURL, likes, caption } = props;

  return (
    <div className='post'>
      <Header username={username} location={location} profilePhoto={profilePhoto} />
      <PostPhoto photoURL={photoURL} />
      <Footer likes={likes} caption={caption} />
    </div>
  );
}
