import React from 'react';
import './Header2.css'; // Tu archivo CSS
import Logo from '/Logo.png';

const Header2 = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <a href="home"><img src={Logo} alt="Logo" className="logo" /></a>
      </div>
      <div className="nav-items">
        <p className="nav-item">IA</p>
        <p className="nav-item">Forum</p>
        <p className="nav-item">3D Model</p>
      </div>
      <div className="login-register-container">
        <a href="login"><button type="button" className="btn-1">Login</button></a>
        <a href="register"><button type="button" className="btn-1">Sign-up</button></a>
      </div>
    </header>
  );
};

export default Header2;