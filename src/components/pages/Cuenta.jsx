import './Cuenta.css';
import Post from '../organism/post';
import CustomButton from '../atoms/Button/CustomButton';

export default function Cuenta() {
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
                        <CustomButton
                        text = {"Seguir"}
                        />
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
