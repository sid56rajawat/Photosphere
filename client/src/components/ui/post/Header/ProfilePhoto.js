import React from 'react';
import './ProfilePhoto.css';

export default function ProfilePhoto(props) {
  return (
    <div className='profile-photo'>
        <img src={props.profilePhoto} alt="Profile"/>
    </div>
  );
}
