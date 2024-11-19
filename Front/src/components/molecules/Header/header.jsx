//import React from 'react';
import './Header.css'; 
import Logo from '/Logo.png'; 
import ProfilePic from '/Avatar.png'; 
//import IaIcon from '/Logo.png'; 
//import ForumIcon from '/Logo.png'; 
//import ModelIcon from '/Logo.png'; 
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <a href="/"><img src={Logo} alt="Logo" className="logo" /></a>
      </div>

      <div className="nav-items">
        <div className="nav-item">
        <Link to='/ia'>
            <p>IA</p>
          </Link>
        </div>
        <div className="nav-item">
          <Link to='/forum'>
          <p>Forum</p>
          </Link>
        </div>
        <div className="nav-item">
          <Link to='/3d'>
            <p>3D Model</p>
          </Link>
        </div>
      </div>

      <div className="profile-container">
        <h2>Nombre_de_usuario</h2>
        <img src={ProfilePic} alt="Profile" className="profile-pic" />
      </div>
    </header>
  );
};

export default Header;