//import React from 'react';
import './Header.css'; 
import MyLogo from '/Logo.png'; 
import ProfilePic from '/Avatar.png'; 
//import IaIcon from '/Logo.png'; // Icono para IA
//import ForumIcon from '/Logo.png'; // Icono para Forum
//import ModelIcon from '/Logo.png'; // Icono para 3D Model

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={MyLogo} alt="Logo" className="logo" />
      </div>
      <div className="nav-items">
        <p className="nav-item">
          <p>IA</p>
        </p>
        <div className="nav-item">
          <p>Forum</p>
        </div>
        <div className="nav-item">
          <p>3D model</p>
        </div>
      </div>
      <div className="profile-container">
        <img src={ProfilePic} alt="Profile" className="profile-pic" />
      </div>
    </header>
  );
};

export default Header;