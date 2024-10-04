import './Header.css';

export default function Header() {
  return (
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      <link rel="stylesheet" href="Header.css"></link>
      <title>Pagina principal</title>
    </head>
    <body>
      <header>
        <div className="logo">
          <img scr='/Logo.png' alt="Logo de empresa"/>
        </div>
        <nav>
          <a href="" className="nav-link">Foro</a>
          <a href="" className="nav-link">Inteligencia Artificial</a>
          <a href="" className="nav-link">Modelo 3D</a>
        </nav>
      </header>
    </body>
    </html>
  );
}