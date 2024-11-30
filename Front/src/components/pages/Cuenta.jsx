import './Cuenta.css';
import Post from '../organism/Post';
import CustomButton from '../atoms/Button/CustomButton';
import { useState, useRef } from 'react';

export default function Cuenta() {
    const [profilePic, setProfilePic] = useState("Avatar.png");
    const fileInputRef = useRef(null);
    const [nickName, setNickName] = useState("@usuarioA");

    // Estado que contiene las relaciones de perfiles
    const [profiles, setProfiles] = useState([
        { nickName: "@usuarioA", profilePic: "Avatar.png" },
        { nickName: "@usuarioB", profilePic: "AvatarB.png" },
        { nickName: "@usuarioC", profilePic: "AvatarC.png" }
    ]);

    // Buscar perfil basado en el nickName
    const findProfile = (name) => profiles.find(profile => profile.nickName === name);

    const updateProfile = (newProfilePic,newNickName) => {
        setProfiles(prevProfiles =>
            prevProfiles.map(profile =>
                profile.nickName === nickName
                    ? { ...profile, profilePic: newProfilePic || profile.profilePic, nickName: newNickName || profile.nickName }
                    : profile
            )
        );
    };

    const ProfilePicChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePic(reader.result); // Cambiar la imagen local
                updateProfile(reader.result, nickName); // Actualizar el perfil global
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="container">
            <div className="contenido-cuenta">
                <div className="info">
                    <div className="img-cuenta">
                        <img src={profilePic} alt="Avatar" className="imageAvatar" />
                    </div>
                    <div className="info-personal">
                        <div className="nombre">
                            <div className="usuario-name">
                                <h3>{nickName}</h3>
                            </div>
                            <h4>Hola me llamo Juan :D</h4>
                        </div>
                        <div className="boton-cuenta">
                            <CustomButton text={"Seguir"} />
                            <CustomButton text={"Mensaje"} />
                        </div>
                    </div>
                </div>
                <div className="info-cuenta">
                    <h2>Seguidores 0</h2>
                    <h2>Publicaciones 0</h2>
                    <h2>Seguidos 0</h2>
                </div>
                {/* Ejemplo de post que utiliza findProfile para obtener la imagen de perfil */}
                <Post
                    Name={nickName}
                    Text="Los carros deportivos son los mejores. :)."
                    Logo="profile image 1.jpg"
                    Fecha="25-10-2024"
                    ProfilePic={findProfile(nickName)?.profilePic || "Avatar.png"}
                />
            </div>
        </div>
    );
}