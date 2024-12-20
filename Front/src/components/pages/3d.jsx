import './3d.css';
import { useState } from 'react';

import Auto1 from '/Auto1.png';
import Carrocería from '/Carrocería.png';
import configuracion3D from '/configuracion3D.png'
import reiniciar3D from '/reiniciar3D.png'
import Suspension from '/s.png';
import Spray from '/spray.png';

import ButtonImage from '../atoms/ButtonImage/buttonImage';
import BodyWork from '../molecules/BodyWork/bodyWork';
import Models3D from '../molecules/3DModels/tabsComponent'

export default function IA() {
  const [selectedComponent, setSelectedComponent] = useState(null); // Controla qué componente mostrar
  const [mainImage, setMainImage] = useState(Auto1); // Imagen principal del carro

  // Función para cambiar la imagen principal desde BodyWork
  const handleBodyWorkImageChange = (newImage) => {
    setMainImage(newImage);
  };

  return (
    <main className="general3d"> 
      <section className='taller3D'>
        <section className="header3D">
          <ButtonImage
            image={configuracion3D}
            altText="Carrocería"
          />
          <ButtonImage
            image={reiniciar3D}
            altText="Carrocería"
          />
        </section>
        {/* Imagen fija del auto */}
        <section className="car3d">
          <img src={mainImage} alt="Auto3D" className="car3D-image" />
        </section>
      </section>
      {/* Botones principales */}
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
        <BodyWork
          onBack={() => setSelectedComponent(null)}
          onSelectImage={handleBodyWorkImageChange} // Pasar la función para actualizar la imagen
        />
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


      <section className='Comunidad3D'>
        <Models3D />
      </section>
    </main>
  );
}