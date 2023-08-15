import React from "react";
import './Stats.css'

export default function Stats() {
  return (
    <div className="stats-component">
      <div className="stats-posts">
        <a href="#" className="stats-link">
          <span className="stats-value">11 </span><span className="stats-name">posts</span>
        </a>
      </div>
      <div className="stats-followers">
        <a href="#" className="stats-link">
        <span className="stats-value">64.2M </span><span className="stats-name">followers</span>
        </a>
      </div>
      <div className="stats-following">
        <a href="#" className="stats-link">
        <span className="stats-value">37 </span><span className="stats-name">following</span>
        </a>
      </div>
    </div>
  );
}
