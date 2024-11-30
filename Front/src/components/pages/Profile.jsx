import React, { useState, useRef } from 'react';
import './Profile.css';

export default function Profile() {
  const [profilePic, setProfilePic] = useState("Avatar.png");
  const [bannerPic, setBannerPic] = useState("background image 1.jpeg");
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState('@username');
  const [description, setDescription] = useState('Descripción');
  const [newUsername, setNewUsername] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const fileInputRef = useRef(null);
  const fileInputRef2 = useRef(null);

  const BannerPicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBannerPic(reader.result); // Cambiar la imagen local
      };
      reader.readAsDataURL(file);
    }
  };

  const ProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader2 = new FileReader();
      reader2.onloadend = () => {
        setProfilePic(reader2.result); // Cambiar la imagen local
      };
      reader2.readAsDataURL(file);
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    if (newUsername.trim()) {
      setUsername(newUsername);
    }
    if (newDescription.trim()) {
      setDescription(newDescription);
    }
    setIsEditing(false);
  };

  return (
    <div className='container'>
      <div className='container-profile'>
        <div className='Banner-container'>
          <img src={bannerPic} alt="banner image" className='Banner'/>
          <button className='banner-edit' onClick={() => fileInputRef.current.click()}>
            <img src="camera icon.png" alt="camera icon" className='edit-banner-btn'/>
          </button>
          <input
            type="file"
            accept="image/*"
            style={{ position: 'absolute', top: 0, left: 0, opacity: 0, width: '0%', height: '0%', cursor: 'pointer' }}
            ref={fileInputRef}
            onChange={BannerPicChange}
          />
        </div>
        <div className='icon-profile-container'>
          <button className='icon-profile-btn' onClick={() => fileInputRef2.current.click()}>
            <img src={profilePic} alt="avatar icon" className='img-profile'/>
          </button>
          <input
            type="file"
            accept="image/*"
            style={{ position: 'absolute', top: 0, left: 0, opacity: 0, width: '100%', height: '100%', cursor: 'pointer' }}
            ref={fileInputRef2}
            onChange={ProfilePicChange}
          />
        </div>
        <div className='username-container'>
          <h1 className='username'>{username}</h1>
          <button className='edit-username' onClick={handleEditClick}>
            <img src="edit-icon.png" alt="edit icon" className='img-edit'/>
          </button>
        </div>
        <div className='description-container'>
          <h5 className='descripcion'>{description}</h5>
        </div>

        {isEditing && (
          <div className='edit-section'>
            <input
              type="text"
              placeholder="Nuevo Username"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
            className='new-user'/>
            <input
              type="text"
              placeholder="Nueva Descripción"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
            className='new-description'/>
            <button className='save-btn' onClick={handleSaveClick}>Guardar</button>
          </div>
        )}
      </div>
    </div>
  );
}