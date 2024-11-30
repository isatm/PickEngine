import React, { useState, useRef, useEffect } from 'react';
import './Header.css'; 
import Logo from '/Logo.png'; 
import ProfilePic from '/Avatar.png'; 
import { Link } from 'react-router-dom';
import { useAuth } from '../../../context';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null); // Referencia al menú desplegable

  // Función para alternar el menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Cierra el menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const { logout } = useAuth();

  const handleLogin = () => {
    logout(); 
  };

  return (
    <header className="header-container">
      {/* Logo */}
      <div className="header-logo-container">
        <a href="/">
          <img src={Logo} alt="Logo" className="header-logo" />
        </a>
      </div>

      {/* Navegación */}
      <nav className="header-nav">
        <div className="header-nav-item">
          <Link to="/ia">
            <p className="header-nav-text">IA</p>
          </Link>
        </div>
        <div className="header-nav-item">
          <Link to="/forum">
            <p className="header-nav-text">Forum</p>
          </Link>
        </div>
        <div className="header-nav-item">
          <Link to="/3d">
            <p className="header-nav-text">3D Model</p>
          </Link>
        </div>
        <div className="nav-item">
          <Link to='/marketplace'>
            <p>MarketPlace</p>
          </Link>
        </div>
      </nav>

      {/* Perfil */}
      <div className="header-profile-container">
        <h2 className="header-profile-username">Nombre_de_usuario</h2>
        <div className="header-profile-picture-wrapper">
          <img 
            src={ProfilePic} 
            alt="Profile" 
            className="header-profile-picture" onClick={toggleMenu}
          />
        </div>

        {/* Menú desplegable */}
        {isMenuOpen && (
          <div className="header-dropdown-menu" ref={dropdownRef}>
            <ul>
              <li className="header-dropdown-menu-item">
                <Link to="/profile">
                <button className="header-button">
                  Perfil
                </button></Link>
              </li>
              <li className="header-dropdown-menu-item">
                <Link to="/changeProfile">
                <button className="header-button">
                  Cambiar Cuenta
                </button></Link>
              </li>
              <li className="header-dropdown-menu-item">
                <Link to="/settings">
                <button className="header-button">
                  Ajustes
                </button></Link>
              </li>
              <li className="header-dropdown-menu-item">
                <Link to="/login">
                <button className="header-button"onClick={() => {alert('Cerrar sesión'); handleLogin(); }}> 
                  Cerrar sesión
                </button>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;