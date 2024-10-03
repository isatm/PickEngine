import React from 'react';
import './Header.css'; // Tu archivo CSS
import MyLogo from '/pickEngine2 (1).png'; // Tu logo
import ProfilePic from '/Avatar-Profile-Vector-PNG-Pic.png'; // Foto de perfil

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={MyLogo} alt="Logo" className="logo" />
      </div>
      <div className="nav-items">
        <p className="nav-item">Home</p>
        <p className="nav-item">About</p>
        <p className="nav-item">Services</p>
      </div>
      <div className="profile-container">
        <img src={ProfilePic} alt="Profile" className="profile-pic" />
      </div>
    </header>
  );
};

export default Header;
