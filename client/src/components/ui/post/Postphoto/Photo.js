import React from 'react';
import "./photo.css";

export default function Photo(props) {
  return (
    <div className='photo'>
      <img src={props.photoURL} alt="Post" />
    </div>
  );
}
