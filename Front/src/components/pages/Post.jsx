import "./Post.css";
import CustomButton from "../atoms/Button/CustomButton";

import { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/post/publish';

export default function Post() {
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState("");
    const [userId, setUserId] = useState(1); //Prueba, ELIMINAR

    const handlePublish = async () => {
        console.log('Publicando...');
        try {
            const response = await axios.post(API_URL, {
                user_id: userId,
                tags: tags,
                description: description,
                image: image
            });
            console.log('Publicación exitosa:', response.data);
        } catch (error) {
            console.error('Error al publicar:', error);
        }
    };

    return (
        <div>
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