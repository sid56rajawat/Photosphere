import React from 'react'
import './GalleryNavigation.css'
import GridOnSharpIcon from '@mui/icons-material/GridOnSharp';
import TurnedInNotSharpIcon from '@mui/icons-material/TurnedInNotSharp';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

export default function GalleryNavigation() {
  return (
    <div className="gallery-navigation-content">
        <div className="gallery-posts">
            <button className='gallery-button'>
                <span className="gallery-post-button-icon"><GridOnSharpIcon/></span>
                <span className="gallery-button-name">POSTS</span>
            </button>
        </div>
        <div className="gallery-saved">
            <button className='gallery-button'>
                <span className="gallery-saved-button-icon"><TurnedInNotSharpIcon/></span>
                <div className="gallery-button-div">
                    <span className="gallery-button-name">SAVED</span>
                </div>
            </button>
        </div>
        <div className="gallery-tagged">
            <button className='gallery-button'>
                <span className="gallery-tagged-button-icon"><AssignmentIndIcon/></span>
                <div className="gallery-button-div">
                    <span className="gallery-button-name">TAGGED</span>
                </div>
            </button>
        </div>
    </div>
  )
}