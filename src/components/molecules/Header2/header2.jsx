import React from 'react';
import './Header2.css'; 
import Logo from '/Logo.png'; 
import IaIcon from '/Logo.png'; 
import ForumIcon from '/Logo.png'; 
import ModelIcon from '/Logo.png'; 

const Header2 = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <a href="home"><img src={Logo} alt="Logo" className="logo" /></a>
      </div>

      <div className="nav-items">
        <div className="nav-item">
          <img src={IaIcon} alt="IA Icon" className="nav-icon" />
          <p>IA</p>
        </div>
        <div className="nav-item">
          <img src={ForumIcon} alt="Forum Icon" className="nav-icon" />
          <p>Forum</p>
        </div>
        <div className="nav-item">
          <img src={ModelIcon} alt="3D Model Icon" className="nav-icon" />
          <p>3D Model</p>
        </div>
      </div>

      <div className="login-register-container">
        <a href="login"><button type="button" className="btn-1">Login</button></a>
        <a href="register"><button type="button" className="btn-1">Sign-up</button></a>
      </div>
    </header>
  );
};

export default Header2;