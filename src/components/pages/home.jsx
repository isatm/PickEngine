//import React from 'react';
//import { Link } from 'react-router-dom';
import './Home.css'

export default function Home() {
return (
    <body className= "home-body">
        <div className="body-container">
            {/*Primer cuadro*/}
            <div className="body-container-IA">
                <div className="image-container-IA">
                    <div className="content-IA">
                        <h1 className="title">
                            ¿Quieres conocer todo acerca de los autos?
                        </h1>
                        <p className="description">
                            Ven y prueba nuestra IA especializada en el automovilismo aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                        </p>
                        <button className="start-button">Iniciar</button>
                    </div>
                </div>
            </div>
        {/*Segundo cuadro*/}
        <div className="body-container-3D">
            <div className="image-container-3D">
                <div className="content-3D">
                    <h1 className="title">
                        ¿Quieres conocer todo acerca de los autos?
                    </h1>
                    <p className="description">
                        Ven y prueba nuestra IA especializada en el automovilismo aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    </p>
                    <button className="start-button">Iniciar</button>
                </div>
            </div>
        </div>

        {/*Tercer cuadro*/}
        <div className="body-container-CHAT">
            <div className="image-container-CHAT">
                <div className="content-CHAT">
                    <h1 className="title">
                        ¿Quieres conocer todo acerca de los autos?
                    </h1>
                    <p className="description">
                        Ven y prueba nuestra IA especializada en el automovilismo aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    </p>
                    <button className="start-button">Iniciar</button>
                </div>
            </div>
        </div>

        </div>
    </body>
  );
}