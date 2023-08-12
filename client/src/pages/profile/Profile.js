import React from "react";
import MainLayout from "../../layout/MainLayout.js";
import "../../assets/css/MainLayout.css";
import SettingsIcon from "@mui/icons-material/Settings";
import "../../assets/css/Profile.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ModeCommentRoundedIcon from "@mui/icons-material/ModeCommentRounded";

function Profile() {
  return (
    <MainLayout>
      <div>
      <header>
        <div className="container">
          <div className="profile">
            <div className="profile-image">
              <img
                src="https://scontent.fbom3-1.fna.fbcdn.net/v/t39.30808-6/300156732_643991287087096_7167422606968052507_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ehm804xsXKAAX9DlFzJ&_nc_ht=scontent.fbom3-1.fna&oh=00_AfC8WqQzQqZKPUHThM4Tw9C4YB9qoe6aovI1IKEmPKTikA&oe=64D946D0"
                alt="image"
              />
            </div>
            <div className="profile-user-settings">
              <h1 className="profile-user-name">bhoi.sallu</h1>
              <button className="btn profile-edit-btn">Edit Profile</button>
              <button
                aria-label="profile settings"
                className="btn profile-settings-btn"
              >
                <SettingsIcon />
              </button>
            </div>
            <div className="profile-stats">
              <ul>
                <li>
                  <span className="profile-stat-count">1</span> posts
                </li>
                <li>
                  <span className="profile-stat-count">4</span> followers
                </li>
                <li>
                  <span className="profile-stat-count">4</span> following
                </li>
              </ul>
            </div>
            <div className="profile-bio">
              <p>
                <span className="profile-real-name">Salman Khan</span>
                lagi chhute na lagi chhute na
                <p>aishwarya bewafa hai</p>
              </p>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="container">
          <div className="gallery">
            <div className="gallery-item" tabIndex="0">
              <img className="gallery-image"
                src="https://i.pinimg.com/originals/40/b1/8b/40b18bf3c652ac124fc9e4134a129499.jpg"
                alt="post1"
              />
              <div className="gallery-item-info">
                <ul>
                  <li className="gallery-item-likes">
                    <span className="visually-hidden">Likes:</span>
                    <FavoriteIcon
                      className="fas fa-heart"
                      aria-hidden="true"
                    />{" "}
                    100
                  </li>
                  <li className="gallery-item-comments">
                    <span className="visually-hidden">Comments:</span>
                    <ModeCommentRoundedIcon
                      className="fas fa-heart"
                      aria-hidden="true"
                    />{" "}
                    10
                  </li>
                </ul>
              </div>
            </div>
            <div className="gallery-item" tabIndex="0">
              <img
                src="https://i.pinimg.com/originals/40/b1/8b/40b18bf3c652ac124fc9e4134a129499.jpg"
                alt="post1"
              />
              <div className="gallery-item-info">
                <ul>
                  <li className="gallery-item-likes">
                    <span className="visually-hidden">Likes:</span>
                    <FavoriteIcon
                      className="fas fa-heart"
                      aria-hidden="true"
                    />{" "}
                    100
                  </li>
                  <li className="gallery-item-comments">
                    <span className="visually-hidden">Comments:</span>
                    <ModeCommentRoundedIcon
                      className="fas fa-heart"
                      aria-hidden="true"
                    />{" "}
                    10
                  </li>
                </ul>
              </div>
            </div>
            <div className="gallery-item" tabIndex="0">
              <img
                src="https://i.pinimg.com/originals/40/b1/8b/40b18bf3c652ac124fc9e4134a129499.jpg"
                alt="post1"
              />
              <div className="gallery-item-info">
                <ul>
                  <li className="gallery-item-likes">
                    <span className="visually-hidden">Likes:</span>
                    <FavoriteIcon
                      className="fas fa-heart"
                      aria-hidden="true"
                    />{" "}
                    100
                  </li>
                  <li className="gallery-item-comments">
                    <span className="visually-hidden">Comments:</span>
                    <ModeCommentRoundedIcon
                      className="fas fa-heart"
                      aria-hidden="true"
                    />{" "}
                    10
                  </li>
                </ul>
              </div>
            </div>
            <div className="gallery-item" tabIndex="0">
              <img
                src="https://i.pinimg.com/originals/40/b1/8b/40b18bf3c652ac124fc9e4134a129499.jpg"
                alt="post1"
              />
              <div className="gallery-item-info">
                <ul>
                  <li className="gallery-item-likes">
                    <span className="visually-hidden">Likes:</span>
                    <FavoriteIcon
                      className="fas fa-heart"
                      aria-hidden="true"
                    />{" "}
                    100
                  </li>
                  <li className="gallery-item-comments">
                    <span className="visually-hidden">Comments:</span>
                    <ModeCommentRoundedIcon
                      className="fas fa-heart"
                      aria-hidden="true"
                    />{" "}
                    10
                  </li>
                </ul>
              </div>
            </div>
            <div className="gallery-item" tabIndex="0">
              <img
                src="https://i.pinimg.com/originals/40/b1/8b/40b18bf3c652ac124fc9e4134a129499.jpg"
                alt="post1"
              />
              <div className="gallery-item-info">
                <ul>
                  <li className="gallery-item-likes">
                    <span className="visually-hidden">Likes:</span>
                    <FavoriteIcon
                      className="fas fa-heart"
                      aria-hidden="true"
                    />{" "}
                    100
                  </li>
                  <li className="gallery-item-comments">
                    <span className="visually-hidden">Comments:</span>
                    <ModeCommentRoundedIcon
                      className="fas fa-heart"
                      aria-hidden="true"
                    />{" "}
                    10
                  </li>
                </ul>
              </div>
            </div>
            <div className="gallery-item" tabIndex="0">
              <img
                src="https://i.pinimg.com/originals/40/b1/8b/40b18bf3c652ac124fc9e4134a129499.jpg"
                alt="post1"
              />
              <div className="gallery-item-info">
                <ul>
                  <li className="gallery-item-likes">
                    <span className="visually-hidden">Likes:</span>
                    <FavoriteIcon
                      className="fas fa-heart"
                      aria-hidden="true"
                    />{" "}
                    100
                  </li>
                  <li className="gallery-item-comments">
                    <span className="visually-hidden">Comments:</span>
                    <ModeCommentRoundedIcon
                      className="fas fa-heart"
                      aria-hidden="true"
                    />{" "}
                    10
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      </div>
    </MainLayout>
  );
}

export default Profile;
