//import React from 'react';
import './Header2.css'; 
import Logo from '/Logo.png'; 
//import IaIcon from '/Logo.png'; 
//import ForumIcon from '/Logo.png'; 
//import ModelIcon from '/Logo.png'; 
import { Link } from 'react-router-dom';

const Header2 = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <a href="/"><img src={Logo} alt="Logo" className="logo" /></a>
      </div>

      <div className="nav-items">
        <div className="nav-item">
          <p>IA</p>
        </div>
        <div className="nav-item">
          <Link to='/forum'>
              <p>Forum</p>
          </Link>
        </div>
        <div className="nav-item">
          <p>3D Model</p>
        </div>
      </div>

      <div className="login-register-container">
        <a href="login">
            <Link to='/login'>
                <button type="button" className="btn-1">Login</button>
            </Link>
        </a>
        <a href="register"><button type="button" className="btn-1">Sign-up</button></a>
      </div>
    </header>
  );
};

export default Header2;