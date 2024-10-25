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
<<<<<<< HEAD
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
=======
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
>>>>>>> af95d9b8d2a38a4398683ad9df995c7f2cc00724
    </header>
    
  );
  
};

export default Header;