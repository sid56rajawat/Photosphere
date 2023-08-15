import React from 'react'
import ProfilePhoto from '../post/Header/ProfilePhoto'
import UserName from '../post/Header/UserName'
import Bio from './Bio';
import './ProfileHeader.css'
import Stats from './Stats';
import SettingsIcon from '@mui/icons-material/Settings';


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
                    <button className='edit-profile-button'>Edit Profile</button>
                </div> 
                <div className="edit-profile">
                    <button className='edit-profile-button'>View Archive</button>
                </div> 
                <div className="settings">
                    <button className='settings-button'><SettingsIcon/></button>
                </div>
            </div>
            <div className="stats">
                <Stats/>
            </div>
            <div className="bio">
                <Bio/>
            </div>
        </section>
    </div>
    
  )
}