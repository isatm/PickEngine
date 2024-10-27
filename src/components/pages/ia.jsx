import './ia.css'

export default function IA() {
    return (
        <div className="container">
          <div className="content">
            <h1 className="main-title">PickEngine</h1>
            <h2 className="subtitle">IA</h2>
            <div className="button-group">
              <button className="info-button">¿Qué es un auto?</button>
              <button className="info-button">¿Cuándo hacer cambio de aceite?</button>
              <button className="info-button">Estrategias para el ahorro de combustible</button>
              <button className="info-button">¿Cómo saber la presión ideal para mis llantas?</button>
            </div>
            <div className="search-bar">
              <input type="text" placeholder="Please enter" />
              <button className="search-button">🔍</button>
            </div>
          </div>
        </div>
      );
}