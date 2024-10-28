import './Post.css' 

export default function Post({Name, Text}) {
  return (
    <main className='generalPost'>
        <header className = 'headerPost'>
          <div className = 'postUsuario'>
            <img src="Avatar.png" alt="Logo" className="imageAvatar" />
            <h2>{Name}</h2>
          </div>
          <div className = 'postFecha'>
            <h3>24/10/2024</h3>
          </div>
        </header>
        <section className = 'postContenido'>
          <div className = 'postTexto'>
            <p>
              {Text}
            </p>
          </div>
          <div className = 'postImagen'>
            <img src="CarroFotografia.jpg" alt="Logo" className="imagePost" />
          </div>
        </section>
        <footer className = 'footerPost'>
          
        </footer>
    </main>
  )
}