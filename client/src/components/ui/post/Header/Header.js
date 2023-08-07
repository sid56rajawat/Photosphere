import React from 'react';
import ProfilePhoto from './ProfilePhoto';
import UserName from './UserName';
import Location from './Location';

export default function Header() {
  return (
    <div className='header'>
      <ProfilePhoto />
      <UserName />
      <Location />
    </div>
  );
}

 
