import './Post.css' 
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Post({Name, Text, Logo, Fecha}) {
  // Estado para manejar el texto del comentario actual y el array de comentarios
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  // Función para manejar el cambio en el campo de texto
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  // Función para agregar el comentario al array
  const handlePublishClick = () => {
    if (comment.trim()) { // Verifica que el comentario no esté vacío
      setComments([...comments, comment]);
      setComment(''); // Limpia el campo de texto después de publicar
    }
  };

  return (
    <main className='generalPost'>
      <header className='headerPost'>
        <div className='postUsuario'>
          <img src="Avatar.png" alt="Logo" className="imageAvatar" />
          <Link to='/cuenta'>
            <h2>{Name}</h2>
          </Link>
        </div>
        <div className='postFecha'>
          <h3>{Fecha}</h3>
        </div>
      </header>
      
      <section className='postContenido'>
        <div className='postTexto'>
          <p>{Text}</p>
        </div>
        <div className='postImagen'>
          {Logo && <img src={Logo} alt="Post" className="imagePost" />}
        </div>
      </section>

      <footer className='footerPost'>
        <h2>Comentarios ({comments.length})</h2>
      </footer>

      <div className="comentario">
        <img src="Avatar.png" alt="Logo" className="logo-comentario" />
        <input
          type="text"
          value={comment}
          onChange={handleCommentChange}
          placeholder="Agrega un comentario..."
        />
        <button className='publicar-btn' onClick={handlePublishClick}>Publish</button>
      </div>

      
    </main>
  );
}
