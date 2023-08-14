import React from 'react';
import Photo from './Photo';

export default function PostPhoto(props) {
  return (
    <div className="post-photo">
      <Photo photoURL={props.photoURL} />
    </div>
  );
}
