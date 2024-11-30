import './Post.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Post({ Name, Text, Logo, Fecha, ProfilePic }) {
    // Estados para manejar comentarios, likes, dislikes y menú desplegable
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const [like, setLikes] = useState(0);
    const [dislike, setDislike] = useState(0);
    const [mostrarMenu, setMostrarMenu] = useState(false);

    // Alternar el estado del menú desplegable
    const toggleMenu = () => setMostrarMenu(!mostrarMenu);

    // Cerrar el menú cuando se hace clic fuera de él
    const cerrarMenu = () => setMostrarMenu(false);

    // Incrementar o decrementar "likes"
    const upLike = () => {
        if (like === 0 && dislike === 0) {
            setLikes(1);
        } else if (like === 1) {
            setLikes(0);
        }
    };

    // Incrementar o decrementar "dislikes"
    const upDislike = () => {
        if (like === 0 && dislike === 0) {
            setDislike(1);
        } else if (dislike === 1) {
            setDislike(0);
        }
    };

    // Manejar cambios en el campo de comentarios
    const handleCommentChange = (e) => setComment(e.target.value);

    // Publicar un nuevo comentario
    const handlePublishClick = () => {
        if (comment.trim()) {
            setComments([...comments, comment]);
            setComment('');
        }
    };

    return (
        <main className="generalPost">
            {/* Encabezado del post */}
            <header className="headerPost">
                <div className="postUsuario">
                    <img src={"Avatar.png"} alt={`${Name}'s avatar`} className="imageAvatar" />
                    <Link to="/cuenta">
                        <h2>{Name}</h2>
                    </Link>
                </div>
                <div className="postFecha">
                    <h3>{Fecha}</h3>
                </div>
            </header>

            {/* Contenido del post */}
            <section className="postContenido">
                <div className="postTexto">
                    <p>{Text}</p>
                    {/* Botón para desplegar el menú */}
                    <button onClick={toggleMenu} className="menu-btn">
                        <img src="menu points white.png" alt="Menu icon" className="menu-icon" />
                    </button>
                </div>

                {/* Imagen del post (si existe) */}
                {Logo && (
                    <div className="postImagen">
                        <img src={Logo} alt="Post content" className="imagePost" />
                    </div>
                )}
            </section>

            {/* Footer del post */}
            <footer className="footerPost">
                <h2>Comentarios ({comments.length})</h2>
            </footer>

            {/* Sección de comentarios y botones de interacción */}
            <div className="comentario">
                <button className="vote-btn" onClick={upLike}>
                    <img src="flecha arriba css.png" alt="Like" className="flecha" />
                    <h3>({like})</h3>
                </button>
                <button className="vote-btn" onClick={upDislike}>
                    <img src="flecha abajo css.png" alt="Dislike" className="flecha" />
                    <h3>({dislike})</h3>
                </button>
                <img src={"Avatar.png"} alt="User avatar" className="logo-comentario" />
                <input
                    type="text"
                    value={comment}
                    onChange={handleCommentChange}
                    placeholder="Agrega un comentario..."
                />
                <button className="publicar-btn" onClick={handlePublishClick}>
                    Publicar
                </button>
                <button className="fav-btn">
                    <img src="favoritos icon.png" alt="Favoritos" className="fav-icon" />
                </button>
            </div>
        </main>
    );
}