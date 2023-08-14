import React from 'react'
import ProfilePhoto from '../post/Header/ProfilePhoto'
import UserName from '../post/Header/UserName'
import './ProfileHeader.css'



export default function ProfileHeader(props) {
    const { username, profilePhoto } = props;

  return (
    <div className="profile-header">
        <div className='profile-photo-container'>
            <ProfilePhoto className="profile-photo" profilePhoto={profilePhoto}/>
        </div>
        <section className='profile-information'>
            <div className="user-content">
                <div className="username">
                    <UserName username={props.username}/>
                </div>
                <div className="edit-profile">
                edit-profile
                </div> 
                <div className="settings">
                settings
                </div>
            </div>
            <div className="stats">
                stats
            </div>
            <div className="bio">
                bio
            </div>
        </section>
    </div>
    
  )
}