import './Post.css' 
import { Link } from 'react-router-dom';

export default function Post({Name, Text, Logo, Fecha}) {
  return (
    <main className='generalPost'>
        <header className = 'headerPost'>
          <div className = 'postUsuario'>
            <img src="Avatar.png" alt="Logo" className="imageAvatar"/>
            <Link to='/cuenta'>
            <h2>{Name}</h2>
            </Link>
          </div>
          <div className = 'postFecha'>
            <h3>{Fecha}</h3>
          </div>
        </header>
        <section className = 'postContenido'>
          <div className = 'postTexto'>
            <p>
              {Text}
            </p>
          </div>
          <div className = 'postImagen'>
          {Logo && <img src={Logo} alt="Post" className="imagePost" />}
          </div>
        </section>
        <footer className = 'footerPost'>
          <h2>Comentarios(69)</h2>
        </footer>
    </main>
  )
}