import { Link } from 'react-router-dom';

import './Forum.css'
import CustomButton from '../atoms/Button/CustomButton';
import Chat from '../molecules/Chat/Chat';
import CustomNav from '../atoms/Nav/CustomNav';
import Post from '../organism/Post';

export default function Forum() {
    return (
        <div className = 'bodyForum'>
            <section className = 'fixedPositions'>
                <div className = 'personal'>
                    <CustomButton
                        text = {"Crear una nueva publicación"}
                        redirect={"/post"}
                    />
                    
                    <Chat/>
                    <div className="bChats">
                        <CustomButton
                        text={"Mis chats"}
                        redirect={"/chats"}
                        />
                    </div>
                </div>
            </section>
            <section className = 'publicaciones'>
                <CustomNav
                    text = {"¿Qué desea encontrar?"}
                />
                <Post
                    Name = "JuanAutoLover"
                    Text = "Los carros deportivos son los mejores. :)."
                    Logo = "CarroFotografia.jpg"
                    Fecha = "25-10-2024"
                />
                <Post
                    Name = "Pepito123si"
                    Text = "Esto es un texto demasiado largo para poder complementar este bloque y dar un ejemplo de como se vería :D."
                    Fecha = "02-08-2024"
                />
                <Post
                    Name = "Isa"
                    Text = "Los bmw son los mejores"
                    Logo = "bmw.jpg"
                    Fecha = "15-07-2024"
                />
            </section>
        </div>
    );
}