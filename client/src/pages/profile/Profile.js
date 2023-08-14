import React from 'react'
import MainLayout from '../../layout/MainLayout.js'
import ProfileHeader from '../../components/ui/post/Header/ProfileHeader.js'

export default function Profile() {
  return (
    <MainLayout>
      <ProfileHeader/>
      <div>Profile</div>
    </MainLayout>
  )
}