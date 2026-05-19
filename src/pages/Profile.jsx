import React from 'react';

const Profile = () => {
  return (
    <div className="page profile-page">
      <div className="profile-header">
        Account Settings
      </div>
      
      <div className="profile-content">
        <div className="profile-info">
          <div className="avatar-container">
            <img 
              src="/user_avatar.png" 
              alt="User Avatar" 
              className="avatar" 
            />
            <div className="camera-icon">
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 4.5H4L5 3H11L12 4.5H13.5C14.325 4.5 15 5.175 15 6V13C15 13.825 14.325 14.5 13.5 14.5H2.5C1.675 14.5 1 13.825 1 13V6C1 5.175 1.675 4.5 2.5 4.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="8" cy="9" r="3" stroke="white" strokeWidth="1.5"/>
              </svg>
            </div>
          </div>
          <div className="user-details">
            <h2>Marry Doe</h2>
            <p>Marry@Gmail.Com</p>
          </div>
        </div>
        
        <div className="profile-description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </div>
        
        <div className="bottom-dashed-line"></div>
      </div>
    </div>
  );
};

export default Profile;
