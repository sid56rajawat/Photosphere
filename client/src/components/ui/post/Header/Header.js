import React from 'react';
import ProfilePhoto from './ProfilePhoto';
import UserName from './UserName';
import Location from './Location';
import "./header.css"

export default function Header() {
  return (
    <div className='header'>
      <ProfilePhoto />
      <div className='name-location'>
      <UserName />
      <Location />
      </div>
    </div>
  );
}

 
