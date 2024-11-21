import './Post.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Post({ Name, Text, Logo, Fecha, ProfilePic }) {
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const [like, setLikes] = useState(0);
    const [dislike, setDislike] = useState(0);

    const upLike = () => setLikes(like + 1);
    const upDislike = () => setDislike(dislike + 1);

    const handleCommentChange = (e) => setComment(e.target.value);

    const handlePublishClick = () => {
        if (comment.trim()) {
            setComments([...comments, comment]);
            setComment('');
        }
    };

    return (
        <main className="generalPost">
            <header className="headerPost">
                <div className="postUsuario">
                    <img src={ProfilePic} alt={`${Name}'s avatar`} className="imageAvatar" />
                    <Link to="/cuenta">
                        <h2>{Name}</h2>
                    </Link>
                </div>
                <div className="postFecha">
                    <h3>{Fecha}</h3>
                </div>
            </header>
            <section className="postContenido">
                <div className="postTexto">
                    <p>{Text}</p>
                </div>
                <div className="postImagen">
                    {Logo && <img src={Logo} alt="Post content" className="imagePost" />}
                </div>
            </section>
            <footer className="footerPost">
                <h2>Comentarios ({comments.length})</h2>
            </footer>
            <div className="comentario">
                <button className="vote-btn" onClick={upLike}>
                    <img src="flecha arriba css.png" alt="" className="flecha" />
                    <h3>({like})</h3>
                </button>
                <button className="vote-btn" onClick={upDislike}>
                    <img src="flecha abajo css.png" alt="" className="flecha" />
                    <h3>({dislike})</h3>
                </button>
                <img src={ProfilePic} alt="User avatar" className="logo-comentario" />
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
