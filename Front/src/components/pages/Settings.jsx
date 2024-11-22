import './Settings.css';
import React from 'react';

const Settings = ({ toggleTheme }) => {
    return (
      <div className="settings-page">
        <h1>Configuración</h1>
        <div className="theme-toggle">
          <label htmlFor="theme-switch" className="theme-label">
            Alternar Tema
          </label>
          <div className="toggle-switch">
            <input
              type="checkbox"
              id="theme-switch"
              onChange={toggleTheme} 
            />
            <label htmlFor="theme-switch" className="switch"></label>
          </div>
        </div>
      </div>
    );
  };

  export default Settings;
