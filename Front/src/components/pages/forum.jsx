import { Link } from "react-router-dom";
import { useState } from "react";

import "./Forum.css";
import CustomButton from "../atoms/Button/CustomButton";
import Chat from "../molecules/Chat/Chat";
import CustomNav from "../atoms/Nav/CustomNav";
import Post from "../organism/Post";

export default function Forum() {
    const [menuTitle, setMenuTitle] = useState("Filtrar");
  
    // Función para actualizar el nombre de la opción principal
    const handleSubmenuClick = (name) => {
      setMenuTitle(name); // Cambia el nombre del menú principal al nombre seleccionado
    };
    return (
      <div className="bodyForum">
        <section className="fixedPositions">
          <div className="personal">
            <CustomButton
              text={"Crear una nueva publicación"}
              redirect={"/post"}
            />
            
            <Chat />
            <div className="bChats">
            <CustomButton
              text={"Mis chats"}
              redirect={"/chats"}
            />
            </div>
          </div>
          
        </section>
        
        <section className="publicaciones">
          <div className="barraForum">
            <CustomNav text={"¿Qué desea encontrar?"} />
            <nav className="navbar">
              <ul className="menu">
                <li className="menu-item">
                  <a href="#">{menuTitle}</a>
                  <div className="submenu">
                    <a href="#" onClick={() => handleSubmenuClick("Videos")}>
                      Video
                    </a>
                    <a href="#" onClick={() => handleSubmenuClick("Imagenes")}>
                      Imagen
                    </a>
                    <a href="#" onClick={() => handleSubmenuClick("Modelos")}>
                      Texto
                    </a>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
          <Post
            Name="JuanAutoLover"
            Text="Los carros deportivos son los mejores. :)."
            Logo="CarroFotografia.jpg"
            Fecha="25-10-2024"
          />
          <Post
            Name="Pepito123si"
            Text="Esto es un texto demasiado largo para poder complementar este bloque y dar un ejemplo de como se vería :D."
            Fecha="02-08-2024"
          />
          <Post
            Name="Isa"
            Text="Los bmw son los mejores"
            Logo="bmw.jpg"
            Fecha="15-07-2024"
          />
        </section>
      </div>
    );
  }