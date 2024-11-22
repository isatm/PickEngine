import './Cuenta.css';
import Post from '../../organism/Post';
import CustomButton from '../../atoms/Button/CustomButton';
import { useState } from 'react';

export default function Cuenta() {
    const [followVar,setFollowVar]=useState("Seguir");
    const [follows,setFollows]=useState([]);

    const changeFollow = () => {
        const user = "@JuanAutoLover"; // Nombre del usuario actual
        if (follows.includes(user)) {
            setFollows(follows.filter(follow => follow !== user));
            setFollowVar("Seguir");
        } else {
            setFollows([...follows, user]);
            setFollowVar("Siguiendo");
        }
    };
    return (
        <div className="container"> 
            <div className="contenido-cuenta">
                <div className="info">
                    <div className="img-cuenta">
                        <img src="Avatar.png" alt="Avatar" className="imageAvatar" />
                    </div>
                    <div className="info-personal">
                    <div className='nombre'>
                        <h3>@JuanAutoLover</h3>
                        <h4>Hola me llamo juan :D</h4>
                    </div>
                    <div className='boton-cuenta'> 
                        <button onClick={changeFollow} className='follow-btn'>
                            {followVar}
                        </button>
                        <CustomButton
                        text = {"Mensaje"}
                    />
                    </div>
                    </div>
                </div>    
                <div className="info-cuenta">
                    <h2>Seguidores 0</h2>
                    <h2>Publicaciones 0</h2>
                    <h2>Seguidos 0</h2>
                </div>
                <Post
                    Name = "JuanAutoLover"
                    Text = "Los carros deportivos son los mejores. :)."
                    Logo = "CarroFotografia.jpg"
                    Fecha = "25-10-2024"
                />
            </div>
        </div>
    );
}