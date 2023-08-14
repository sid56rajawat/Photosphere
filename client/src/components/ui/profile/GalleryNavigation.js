import React from 'react'

export default function GalleryNavigation() {
  return (
    <div className="gallery-navigation-content">
        <div className="gallery-posts">
            <button className='gallery-post-button'>
                <span className="gallery-post-button-icon">📭</span>
                <span className="gallery-post-button-name">Posts</span>
            </button>
        </div>
        <div className="gallery-tagged">
            <button className='gallery-tagged-button'>
                <span className="gallery-tagged-button-icon">🏷️</span>
                <span className="gallery-tagged-button-name">Tagged</span>
            </button>
        </div>
    </div>
  )
}