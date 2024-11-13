import './SelectorText.css' 

export default function SelectorText() {
  return (
    <div className="app-container">
      <aside className="sidebar">
        <nav>
          <ul>
            <li><a href="#datos-recogemos">Datos que recogemos</a></li>
            <li><a href="#tratamos-datos">Cómo tratamos tus datos</a></li>
            <li><a href="#compartir-datos">Compartir datos</a></li>
          </ul>
        </nav>
      </aside>

      <main className="content">
        <section id="datos-recogemos">
          <h2>1. Datos que recogemos</h2>
          <p>Información sobre los datos recogidos aaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
        </section>
        <section id="tratamos-datos">
          <h2>2. Cómo tratamos tus datos</h2>
          <p>Información sobre el tratamiento de datos...</p>
        </section>
        <section id="compartir-datos">
          <h2>3. Compartir datos</h2>
          <p>Información sobre cómo se comparten los datos...</p>
        </section>
        
      </main>
    </div>
  );
}