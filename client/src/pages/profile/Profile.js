import React from 'react'
import MainLayout from '../../layout/MainLayout.js'
import ProfileHeader from '../../components/ui/profile/ProfileHeader.js'
import '../../assets/css/Profile.css'
import Highlights from '../../components/ui/profile/Highlights.js'
import GalleryNavigation from '../../components/ui/profile/GalleryNavigation.js'
import ProfileGrid from '../../components/ui/profile/ProfileGrid.js'

export default function Profile() {
  return (
    <MainLayout>
      <div className="page-layout">
        <div className="profile-container">
          <ProfileHeader
          profilePhoto= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgM1BFmsdG9YJSH7O-jWEl8MmGffe5PDppbw&usqp=CAU"
          username = "bhoi.sallu"
          />
          <Highlights/>
          <div className="profile-gallery">
            <div className="gallery-navigation">
              <GalleryNavigation/>
            </div>
            <div className="gallery-grid">
              <ProfileGrid/>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}