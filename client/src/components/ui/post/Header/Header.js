import React from 'react';
import ProfilePhoto from './ProfilePhoto';
import UserName from './UserName';
import Location from './Location';
import "./header.css";

export default function Header(props) {
  return (
    <div className='header'>
      <ProfilePhoto profilePhoto={props.profilePhoto} />
      <div className="name-location">
        <UserName username={props.username} />
        <Location location={props.location} />
      </div>
    </div>
  );
}
