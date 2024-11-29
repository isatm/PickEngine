//import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Home() {
const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    <div className="body-container-IA">
      <div className="image-container-IA">
        <div className="content-IA">
          <h2 className="title">¿Quieres conocer todo acerca de los autos?</h2>
          <p className="description">
            Ven y prueba nuestra IA especializada en automovilismo.
          </p>
          <Link to="/ia">
            <button className="start-button">Iniciar</button>
          </Link>
        </div>
      </div>
    </div>,
    <div className="body-container-3D">
      <div className="image-container-3D">
        <div className="content-3D">
          <h1 className="title">¿Quiere visualizar tu futuro auto?</h1>
          <p className="description">
            Con nuestro apartado de personalización 3D, eso es posible.
          </p>
          <Link to="/3d">
            <button className="start-button">Iniciar</button>
          </Link>
        </div>
      </div>
    </div>,
    <div className="body-container-CHAT">
      <div className="image-container-CHAT">
        <div className="content-CHAT">
          <h1 className="title">¡Comparte tu afición por los autos!</h1>
          <p className="description">
            Interactua con los fanáticos de los autos de todo el mundo.
          </p>
          <Link to="/forum">
            <button className="start-button">Iniciar</button>
          </Link>
        </div>
      </div>
    </div>,
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carrusel">
      <button className="arrow left" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="carrusel-content">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
          >
            {slide}
          </div>
        ))}
      </div>
      <button className="arrow right" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
}