import './Cuenta.css';

export default function Cuenta() {
    return (
        <div className="container"> 
            <div className="contenido-cuenta">
                <div className="img-fondocuenta"></div> {/* Imagen de fondo sin etiqueta <img> */}
                <div className="info">
                    <div className="img-cuenta">
                        <img src="Avatar.png" alt="Avatar" className="imageAvatar" />
                    </div>
                    <div className="info-personal">
                        <h3>Name: Juanepito05</h3>
                        <br />
                        <h4>La vida es dura pero más mi verdura</h4>
                    </div>
                </div>    
                <div className="info-cuenta">
                    <h2>Seguidores 0</h2>
                    <h2>Publicaciones 0</h2>
                    <h2>Seguidos 0</h2>
                </div>
            </div>
        </div>
    );
}
