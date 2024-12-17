import React, { useState, useEffect } from 'react';
import './Slider.css';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Datos para mostrar en el slider
  const slides = [
    { content: "Este es el contenido del primer slide." },
    { content: "Aquí está la información del segundo slide." },
    { content: "Y este es el contenido del tercer slide." }
  ];

  const totalSlides = slides.length;

  // useEffect para cambiar de slide automáticamente cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // 5000 milisegundos = 5 segundos

    return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonte
  }, []);

  // Función para manejar el siguiente slide con transición infinita
  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  // Cuando la transición finaliza, hacemos el carrusel "infinito"
  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentIndex >= totalSlides) {
      setCurrentIndex(0); // Volver al inicio sin transición abrupta
    }
  };

  return (
    <div className='slider-container background'>
        <div className="slider-container">
            <div
                className={`slider ${isTransitioning ? 'transition' : ''}`}
                style={{ transform: `translateX(-${(currentIndex % totalSlides) * 100}%)` }}
                onTransitionEnd={handleTransitionEnd}
            >
                {slides.concat(slides[0]).map((slide, index) => ( // Duplicamos el primer slide al final
                <div className="slide" key={index}>
                    <span className='span-slider'>{slide.content}</span>
                </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Slider;
