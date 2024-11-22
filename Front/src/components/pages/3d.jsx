import './3d.css';
import { useState } from 'react';

import Auto3D from '/Auto3D.png';
import Carrocería from '/Carrocería.png';
import Suspension from '/s.png';
import Spray from '/spray.png';

import ButtonImage from '../atoms/ButtonImage/buttonImage';
import BodyWork from '../molecules/BodyWork/bodyWork';

export default function IA() {
  // Estado para controlar qué componente se debe mostrar
  const [selectedComponent, setSelectedComponent] = useState(null);

  return (
    <main className="general3d">
      {/* Imagen fija del auto */}
      <section className="car3d">
        <img src={Auto3D} alt="Auto3D" className="car3D-image" />
      </section>

      {/* Mostrar los botones principales solo si no hay un componente dinámico */}
      {!selectedComponent && (
        <section className="buttomsPersonalize">
          <ButtonImage
            image={Carrocería}
            altText="Carrocería"
            onClick={() => setSelectedComponent('carroceria')}
          />
          <ButtonImage
            image={Suspension}
            altText="Suspensión"
            onClick={() => setSelectedComponent('suspension')}
          />
          <ButtonImage
            image={Spray}
            altText="Spray"
            onClick={() => setSelectedComponent('spray')}
          />
        </section>
      )}

      {/* Componente dinámico basado en el botón seleccionado */}
      {selectedComponent === 'carroceria' && (
        <BodyWork onBack={() => setSelectedComponent(null)} />
      )}
      {selectedComponent === 'suspension' && (
        <div className="dynamic-content">
          <button onClick={() => setSelectedComponent(null)}>Volver</button>
          <p>Componente de Suspensión (en construcción)</p>
        </div>
      )}
      {selectedComponent === 'spray' && (
        <div className="dynamic-content">
          <button onClick={() => setSelectedComponent(null)}>Volver</button>
          <p>Componente de Spray (en construcción)</p>
        </div>
      )}
    </main>
  );
}