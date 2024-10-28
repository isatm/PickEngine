import './Post.css' 

export default function Post({Name, Text, Logo, Fecha}) {
  return (
    <main className='generalPost'>
        <header className = 'headerPost'>
          <div className = 'postUsuario'>
            <img src="Avatar.png" alt="Logo" className="imageAvatar" />
            <h2>{Name}</h2>
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
          
        </footer>
    </main>
  )
}