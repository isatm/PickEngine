import "./toPost.css";
import CustomButton from "../../atoms/Button/CustomButton";

import { useState } from 'react';
import axios from 'axios';
import { redirect } from "react-router-dom";

const API_URL = 'http://localhost:3000/api/post/publish';
const AUTH_URL = 'http://127.0.0.1:3000/auth/login/verify';

const getUserId = () => {

}

export default function Post() {
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState("");

    const getUserId = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const response = await axios.post(AUTH_URL, { token: token });
                if (response.data.login) {
                    return response.data.userData.userId;
                } else {
                    alert('Token inválido o expirado, por favor inicia sesión nuevamente.');
                    localStorage.removeItem('token');
                    return null;
                }
            } catch (error) {
                console.error('Error al verificar el token:', error);
                return null;
            }
        } else {
            alert('No se encontró token, por favor inicia sesión.');
            return null;
        }
    };

    const handlePublish = async () => {
        const userId = await getUserId();
        if (!userId) {
            alert('No se pudo obtener el ID del usuario, Por favor inicia sesión.');
            return;
        }

        try {
            const response = await axios.post(API_URL, {
                user_id: userId,
                tags: tags,
                description: description,
                image: image
            });
            alert('Publicación exitosa:', response.data);
            redirect('/forum');
        } catch (error) {
            alert('Error al publicar:', error);
        }
    };

    return (
        <div className="general">
            <div className="create-post-container">
                <h1>Crear una Nueva Publicación</h1>
                
                <div className="category-tags">
                    <input 
                        type="text" 
                        placeholder="Etiquetas (separadas por comas)" 
                        className="tags" 
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                    />
                </div>

                <textarea 
                    placeholder="Descripción..." 
                    className="post-description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>

                <div className="upload-section">
                    <CustomButton text="Subir Imagen" />
                    <div className="image-preview">
                    </div>
                </div>

                <button onClick={handlePublish}>Publicar</button>
            </div>
        </div>
    );
}