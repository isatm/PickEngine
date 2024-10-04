import React from 'react';
import './Header.css'; 
import MyLogo from '/Logo.png'; 
import ProfilePic from '/Avatar.png'; 

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={MyLogo} alt="Logo" className="logo" />
      </div>
      <div className="nav-items">
        <p className="nav-item">IA</p>
        <p className="nav-item">Forum</p>
        <p className="nav-item">3D Model</p>
      </div>
      <div className="profile-container">
        <img src={ProfilePic} alt="Profile" className="profile-pic" />
      </div>
    </header>
  );
};

export default Header;