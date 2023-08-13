import React from 'react';
import "./location.css"

export default function Location(props) {
  return (
    <div className='location'>
      <p>{props.location}</p>
    </div>
  );
}
