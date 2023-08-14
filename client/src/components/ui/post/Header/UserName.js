import React from 'react';
import './UserName.css';

export default function UserName(props) {
  return (
    <div className='user-name'>
        <h3>{props.username}</h3>
    </div>
  );
}
