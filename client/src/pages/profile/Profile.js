import React from 'react'
import MainLayout from '../../layout/MainLayout.js'
import ProfileHeader from '../../components/ui/profile/ProfileHeader.js'
import '../../assets/css/Profile.css'
import Highlights from '../../components/ui/profile/Highlights.js'
import GalleryNavigation from '../../components/ui/profile/GalleryNavigation.js'

export default function Profile() {
  return (
    <MainLayout>
      <div className="page-layout">
        <div className="container">
          <ProfileHeader/>
          <Highlights/>
          <div className="profile-gallery">
            <div className="gallery-navigation">
              <GalleryNavigation/>
            </div>
            <div className="gallery-grid">
              gallery-grid
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}